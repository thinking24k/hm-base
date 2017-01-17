package com.xxwl.tk.main.service.impl;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xxwl.tk.framework.attribute.CommonAttribute;
import com.xxwl.tk.framework.attribute.DaoAttribute;
import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.main.dao.HmOrderDao;
import com.xxwl.tk.main.entity.HmMemberInfoEntity;
import com.xxwl.tk.main.entity.HmOrderEntity;
import com.xxwl.tk.main.entity.HmRecordEntity;
import com.xxwl.tk.main.service.HmMemberInfoService;
import com.xxwl.tk.main.service.HmOrderService;
import com.xxwl.tk.main.service.HmRecordService;
/** 
* @ClassName: HmOrderService 
* @Description: 本类是由代码生成器自动生成HmOrderEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/
@Service
public class HmOrderServiceImpl implements HmOrderService {
	
	private static Logger logger = LoggerFactory.getLogger(HmOrderServiceImpl.class);
	
	@Resource
	private HmOrderDao hmOrderDao;
	@Resource
	private HmMemberInfoService memberInfoService;
	@Resource
	private HmRecordService recordService;

	@Override
	public long getCount(Criteria<HmOrderEntity> criteria) {
		if(null == criteria){
			return 0L;
		}
		return hmOrderDao.getCount(criteria);
	}

	@Override
	public List<HmOrderEntity> queryForList(Criteria<HmOrderEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmOrderDao.queryForList(criteria);
	}

	@Override
	public List<HmOrderEntity> queryForPageList(Criteria<HmOrderEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmOrderDao.queryForPageList(criteria);
	}

	@Override
	public HmOrderEntity getById(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmOrderDao.getById(pk);
	}

	@Override
	public List<HmOrderEntity> getByIds(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmOrderDao.getByIds(pks);
	}

	@Override
	@Transactional
	public Integer doAdd(HmOrderEntity hmOrder) {
		if(null == hmOrder || null == hmOrder.getOrdersum()){
			return null;
		}
		double integral = docalcintegral(hmOrder.getOrdersum());
		hmOrder.setIntegral(integral);
		if(null != hmOrder.getTelephone()){//有会员进行积分操作
			Integer id=doMemberUpIntegral(hmOrder, integral);
			//订单会员id
			hmOrder.setMemberid(id);
		}
		Integer doAdd = hmOrderDao.doAdd(hmOrder);
		if(doAdd > 0){//插入成功进行统计
			doRecord(hmOrder);
		}
		return doAdd;
	}
	/**
	 * 
	 * @Title: docalcintegral 
	 * @Description: 统一计算积分
	 * @param ordersum
	 * @return
	 */
	public double docalcintegral(Double ordersum) {
		BigDecimal bd = new BigDecimal(CommonAttribute.MEMBER_INTEGRAL_VAL*ordersum);
		return bd.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
	}
	/**
	 * 
	 * @Title: doMemberUpIntegral 
	 * @Description: 会员积分结算
	 * @param hmOrder
	 * @param integral
	 * @return 
	 */
	public Integer doMemberUpIntegral(HmOrderEntity hmOrder, double integral) {
		//查询该会员
		HmMemberInfoEntity a=new HmMemberInfoEntity();
		a.setTelephone(hmOrder.getTelephone());
		List<HmMemberInfoEntity> memberlist = memberInfoService.queryForList(new Criteria<HmMemberInfoEntity>(a));
		if(null != memberlist && !memberlist.isEmpty()){//有会员
			if(memberlist.size()>1){//超过1个会员
				String str="";
				for (HmMemberInfoEntity hmMemberInfoEntity : memberlist) {
					str=str+"会员ID:"+hmMemberInfoEntity.getId()+"和手机:"+hmMemberInfoEntity.getTelephone()+";";
				}
				str="订单结算，会员积分，通过手机查询到会员数量超过1个以上"+str;
				logger.error(str);
				throw new RuntimeException(str);
			}
			HmMemberInfoEntity memberInfoEntity = memberlist.get(0);
			//积分更新
			HmMemberInfoEntity infoEntity=new HmMemberInfoEntity();
			infoEntity.setId(memberInfoEntity.getId());
			infoEntity.setIntegral(integral);
			memberInfoService.doUpUserIntegral(infoEntity);
			return memberInfoEntity.getId();
		}else{//没有会员创建
			HmMemberInfoEntity e=new HmMemberInfoEntity();
			e.setTelephone(hmOrder.getTelephone());
			e.setIntegral(integral);
			e.setMemName("订单自动创建");
			memberInfoService.doAdd(e);
			return e.getId();
		}
	}
	/**
	 * 
	 * @Title: doRecord 
	 * @Description: 月度统计记录
	 * @param hmOrder
	 */
	public void doRecord(HmOrderEntity hmOrder) {
		Calendar calendar = Calendar.getInstance();
		int year = calendar.get(Calendar.YEAR);
		int month = calendar.get(Calendar.MONTH)+1;
		HmRecordEntity recordEntity=new HmRecordEntity();
		recordEntity.setDatestr(year+"-"+month);
		int isNeedAdd=0;//是否需要新增数据
		if(DaoAttribute.ORDER_TYPE_IN == hmOrder.getType()){//收入
			recordEntity.setInmoney(hmOrder.getOrdersum());
			isNeedAdd = recordService.doUpdateInmoney(recordEntity);
		}else if(DaoAttribute.ORDER_TYPE_OUT == hmOrder.getType()){
			recordEntity.setOutmoney(hmOrder.getOrdersum());
			isNeedAdd = recordService.doUpdateOutmoney(recordEntity);
		}
		if(isNeedAdd == 1 ){//不需要新增
			return ;
		}
		recordService.doAdd(recordEntity);//新增
	}

	@Override
	public Integer doAddBatch(List<HmOrderEntity> list) {
		if(null == list || list.isEmpty()){
			return null;
		}
		return hmOrderDao.doAddBatch(list);
	}

	@Override
	@Transactional
	public Integer doUpdate(HmOrderEntity hmOrder) {
		if(null == hmOrder || null == hmOrder.getId()){
			return null;
		}
		//查询原有的订单
		HmOrderEntity orderEntity = getById(hmOrder.getId());
		if(null == orderEntity){
			return -1;
		}
		if(null != hmOrder.getOrdersum()){//订单修改，金额不为空时处理金额变化
			//现在的-原来的
			BigDecimal bd = new BigDecimal(hmOrder.getOrdersum()-orderEntity.getOrdersum());
			Double ordersum= bd.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
			if(ordersum != 0 ){//金额没有更改不处理
				if(null != orderEntity.getMemberid()){
					//积分更新
					HmMemberInfoEntity infoEntity=new HmMemberInfoEntity();
					infoEntity.setId(orderEntity.getMemberid());
					double integral = docalcintegral(ordersum);
					infoEntity.setIntegral(integral);
					memberInfoService.doUpUserIntegral(infoEntity);
				}
				//统计更新
				orderEntity.setOrdersum(ordersum);
				doRecord(orderEntity);
			}
		}
		hmOrder.setIntegral(docalcintegral(hmOrder.getOrdersum()));
		return hmOrderDao.doUpdate(hmOrder);
	}

	@Override
	public Integer doDelete(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmOrderDao.doDelete(pk);
	}

	@Override
	public Integer doDeletes(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmOrderDao.doDeletes(pks);
	}

	@Override
	public Integer doRemove(Integer id) {
		if(null == id){
			return null;
		}
		HmOrderEntity hmOrder=new HmOrderEntity();
		hmOrder.setId(id);
		return hmOrderDao.doRemove(hmOrder);
	}

	@Override
	public PageBean<HmOrderEntity> pageQuery(Criteria<HmOrderEntity> criteria) {
		if(null == criteria){
			return null;
		}
		//获取总数
		long rowCount = hmOrderDao.getCount(criteria);
		if(0 == rowCount ){
			return criteria.getPageBean();
		}
		criteria.getPageBean().setRowCount(rowCount);
		//获取列表
		List<HmOrderEntity> list = hmOrderDao.queryForPageList(criteria);
		criteria.getPageBean().setData(list);
		return criteria.getPageBean();
	}
	
}
