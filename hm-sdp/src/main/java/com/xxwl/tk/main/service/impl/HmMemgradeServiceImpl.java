package com.xxwl.tk.main.service.impl;

import java.util.List;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.main.dao.HmMemgradeDao;
import com.xxwl.tk.main.entity.HmMemgradeEntity;
import com.xxwl.tk.main.service.HmMemgradeService;
/** 
* @ClassName: HmMemgradeService 
* @Description: 本类是由代码生成器自动生成HmMemgradeEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/
@Service
public class HmMemgradeServiceImpl implements HmMemgradeService {
	
	private static Logger logger = LoggerFactory.getLogger(HmMemgradeServiceImpl.class);
	
	@Resource
	private HmMemgradeDao hmMemgradeDao;

	@Override
	public long getCount(Criteria<HmMemgradeEntity> criteria) {
		if(null == criteria){
			return 0L;
		}
		return hmMemgradeDao.getCount(criteria);
	}

	@Override
	public List<HmMemgradeEntity> queryForList(Criteria<HmMemgradeEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmMemgradeDao.queryForList(criteria);
	}

	@Override
	public List<HmMemgradeEntity> queryForPageList(Criteria<HmMemgradeEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmMemgradeDao.queryForPageList(criteria);
	}

	@Override
	public HmMemgradeEntity getById(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmMemgradeDao.getById(pk);
	}

	@Override
	public List<HmMemgradeEntity> getByIds(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmMemgradeDao.getByIds(pks);
	}

	@Override
	public Integer doAdd(HmMemgradeEntity hmMemgrade) {
		if(null == hmMemgrade){
			return null;
		}
		return hmMemgradeDao.doAdd(hmMemgrade);
	}

	@Override
	public Integer doAddBatch(List<HmMemgradeEntity> list) {
		if(null == list || list.isEmpty()){
			return null;
		}
		return hmMemgradeDao.doAddBatch(list);
	}

	@Override
	public Integer doUpdate(HmMemgradeEntity hmMemgrade) {
		if(null == hmMemgrade){
			return null;
		}
		return hmMemgradeDao.doUpdate(hmMemgrade);
	}

	@Override
	public Integer doDelete(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmMemgradeDao.doDelete(pk);
	}

	@Override
	public Integer doDeletes(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmMemgradeDao.doDeletes(pks);
	}

	@Override
	public Integer doRemove(Integer id) {
		if(null == id){
			return null;
		}
		HmMemgradeEntity hmMemgrade=new HmMemgradeEntity();
		hmMemgrade.setId(id);
		return hmMemgradeDao.doRemove(hmMemgrade);
	}

	@Override
	public PageBean<HmMemgradeEntity> pageQuery(Criteria<HmMemgradeEntity> criteria) {
		if(null == criteria){
			return null;
		}
		//获取总数
		long rowCount = hmMemgradeDao.getCount(criteria);
		if(0 == rowCount ){
			return criteria.getPageBean();
		}
		criteria.getPageBean().setRowCount(rowCount);
		//获取列表
		List<HmMemgradeEntity> list = hmMemgradeDao.queryForPageList(criteria);
		criteria.getPageBean().setData(list);
		return criteria.getPageBean();
	}
	
}
