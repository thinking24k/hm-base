package com.xxwl.tk.main.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.main.dao.HmMemberInfoDao;
import com.xxwl.tk.main.entity.HmMemberInfoEntity;
import com.xxwl.tk.main.service.HmMemberInfoService;
/** 
* @ClassName: HmMemberInfoService 
* @Description: 本类是由代码生成器自动生成HmMemberInfoEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/
@Service
public class HmMemberInfoServiceImpl implements HmMemberInfoService {
	
	private static Logger logger = LoggerFactory.getLogger(HmMemberInfoServiceImpl.class);
	
	@Resource
	private HmMemberInfoDao hmMemberInfoDao;

	@Override
	public long getCount(Criteria<HmMemberInfoEntity> criteria) {
		if(null == criteria){
			return 0L;
		}
		return hmMemberInfoDao.getCount(criteria);
	}

	@Override
	public List<HmMemberInfoEntity> queryForList(Criteria<HmMemberInfoEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmMemberInfoDao.queryForList(criteria);
	}

	@Override
	public List<HmMemberInfoEntity> queryForPageList(Criteria<HmMemberInfoEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmMemberInfoDao.queryForPageList(criteria);
	}

	@Override
	public HmMemberInfoEntity getById(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmMemberInfoDao.getById(pk);
	}

	@Override
	public List<HmMemberInfoEntity> getByIds(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmMemberInfoDao.getByIds(pks);
	}

	@Override
	public Integer doAdd(HmMemberInfoEntity hmMemberInfo) {
		if(null == hmMemberInfo){
			return null;
		}
		return hmMemberInfoDao.doAdd(hmMemberInfo);
	}

	@Override
	public Integer doAddBatch(List<HmMemberInfoEntity> list) {
		if(null == list || list.isEmpty()){
			return null;
		}
		return hmMemberInfoDao.doAddBatch(list);
	}

	@Override
	public Integer doUpdate(HmMemberInfoEntity hmMemberInfo) {
		if(null == hmMemberInfo){
			return null;
		}
		return hmMemberInfoDao.doUpdate(hmMemberInfo);
	}

	@Override
	public Integer doDelete(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmMemberInfoDao.doDelete(pk);
	}

	@Override
	public Integer doDeletes(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmMemberInfoDao.doDeletes(pks);
	}

	@Override
	public Integer doRemove(Integer id) {
		if(null == id){
			return null;
		}
		HmMemberInfoEntity hmMemberInfo=new HmMemberInfoEntity();
		hmMemberInfo.setId(id);
		return hmMemberInfoDao.doRemove(hmMemberInfo);
	}

	@Override
	public PageBean<HmMemberInfoEntity> pageQuery(Criteria<HmMemberInfoEntity> criteria) {
		if(null == criteria){
			return null;
		}
		//获取总数
		long rowCount = hmMemberInfoDao.getCount(criteria);
		if(0 == rowCount ){
			return criteria.getPageBean();
		}
		criteria.getPageBean().setRowCount(rowCount);
		//获取列表
		List<HmMemberInfoEntity> list = hmMemberInfoDao.queryForPageList(criteria);
		criteria.getPageBean().setData(list);
		return criteria.getPageBean();
	}

	@Override
	public int doUpUserIntegral(HmMemberInfoEntity infoEntity) {
		return hmMemberInfoDao.doUpUserIntegral(infoEntity);
	}
	
}
