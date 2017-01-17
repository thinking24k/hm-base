package com.xxwl.tk.main.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.main.dao.HmRecordDao;
import com.xxwl.tk.main.entity.HmRecordEntity;
import com.xxwl.tk.main.service.HmRecordService;
/** 
* @ClassName: HmRecordService 
* @Description: 本类是由代码生成器自动生成HmRecordEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/
@Service
public class HmRecordServiceImpl implements HmRecordService {
	
	private static Logger logger = LoggerFactory.getLogger(HmRecordServiceImpl.class);
	
	@Resource
	private HmRecordDao hmRecordDao;

	@Override
	public long getCount(Criteria<HmRecordEntity> criteria) {
		if(null == criteria){
			return 0L;
		}
		return hmRecordDao.getCount(criteria);
	}

	@Override
	public List<HmRecordEntity> queryForList(Criteria<HmRecordEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmRecordDao.queryForList(criteria);
	}

	@Override
	public List<HmRecordEntity> queryForPageList(Criteria<HmRecordEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmRecordDao.queryForPageList(criteria);
	}

	@Override
	public HmRecordEntity getById(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmRecordDao.getById(pk);
	}

	@Override
	public List<HmRecordEntity> getByIds(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmRecordDao.getByIds(pks);
	}

	@Override
	public Integer doAdd(HmRecordEntity hmRecord) {
		if(null == hmRecord){
			return null;
		}
		return hmRecordDao.doAdd(hmRecord);
	}

	@Override
	public Integer doAddBatch(List<HmRecordEntity> list) {
		if(null == list || list.isEmpty()){
			return null;
		}
		return hmRecordDao.doAddBatch(list);
	}

	@Override
	public Integer doUpdate(HmRecordEntity hmRecord) {
		if(null == hmRecord){
			return null;
		}
		return hmRecordDao.doUpdate(hmRecord);
	}

	@Override
	public Integer doDelete(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmRecordDao.doDelete(pk);
	}

	@Override
	public Integer doDeletes(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmRecordDao.doDeletes(pks);
	}

	@Override
	public Integer doRemove(Integer id) {
		if(null == id){
			return null;
		}
		HmRecordEntity hmRecord=new HmRecordEntity();
		hmRecord.setId(id);
		return hmRecordDao.doRemove(hmRecord);
	}

	@Override
	public PageBean<HmRecordEntity> pageQuery(Criteria<HmRecordEntity> criteria) {
		if(null == criteria){
			return null;
		}
		//获取总数
		long rowCount = hmRecordDao.getCount(criteria);
		if(0 == rowCount ){
			return criteria.getPageBean();
		}
		criteria.getPageBean().setRowCount(rowCount);
		//获取列表
		List<HmRecordEntity> list = hmRecordDao.queryForPageList(criteria);
		criteria.getPageBean().setData(list);
		return criteria.getPageBean();
	}

	@Override
	public int doUpdateInmoney(HmRecordEntity recordEntity) {
		return hmRecordDao.doUpdateInmoney(recordEntity);
	}

	@Override
	public int doUpdateOutmoney(HmRecordEntity recordEntity) {
		return hmRecordDao.doUpdateOutmoney(recordEntity);
	}
	
}
