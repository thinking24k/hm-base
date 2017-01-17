package com.xxwl.tk.main.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.xxwl.tk.assembly.md5andsha.MD5Util;
import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.framework.utils.StringUtil;
import com.xxwl.tk.main.dao.HmUserDao;
import com.xxwl.tk.main.entity.HmUserEntity;
import com.xxwl.tk.main.service.HmUserService;
/** 
* @ClassName: HmUserService 
* @Description: 本类是由代码生成器自动生成HmUserEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/
@Service
public class HmUserServiceImpl implements HmUserService {
	
	private static Logger logger = LoggerFactory.getLogger(HmUserServiceImpl.class);
	
	@Resource
	private HmUserDao hmUserDao;

	@Override
	public long getCount(Criteria<HmUserEntity> criteria) {
		if(null == criteria){
			return 0L;
		}
		return hmUserDao.getCount(criteria);
	}

	@Override
	public List<HmUserEntity> queryForList(Criteria<HmUserEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmUserDao.queryForList(criteria);
	}

	@Override
	public List<HmUserEntity> queryForPageList(Criteria<HmUserEntity> criteria) {
		if(null == criteria){
			return null;
		}
		return hmUserDao.queryForPageList(criteria);
	}

	@Override
	public HmUserEntity getById(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmUserDao.getById(pk);
	}

	@Override
	public List<HmUserEntity> getByIds(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmUserDao.getByIds(pks);
	}

	@Override
	public Integer doAdd(HmUserEntity hmUser) {
		if(null == hmUser){
			return null;
		}
		//密码加密
		if(!StringUtil.isEmpty(hmUser.getPassword())){
			hmUser.setPassword(MD5Util.md5Encode(hmUser.getPassword()));
		}
		return hmUserDao.doAdd(hmUser);
	}

	@Override
	public Integer doAddBatch(List<HmUserEntity> list) {
		if(null == list || list.isEmpty()){
			return null;
		}
		return hmUserDao.doAddBatch(list);
	}

	@Override
	public Integer doUpdate(HmUserEntity hmUser) {
		if(null == hmUser){
			return null;
		}
		//密码加密
		if(!StringUtil.isEmpty(hmUser.getPassword())){
			hmUser.setPassword(MD5Util.md5Encode(hmUser.getPassword()));
		}
		return hmUserDao.doUpdate(hmUser);
	}

	@Override
	public Integer doDelete(Integer pk) {
		if(null == pk){
			return null;
		}
		return hmUserDao.doDelete(pk);
	}

	@Override
	public Integer doDeletes(List<Integer> pks) {
		if(null == pks || pks.isEmpty()){
			return null;
		}
		return hmUserDao.doDeletes(pks);
	}

	@Override
	public Integer doRemove(Integer id) {
		if(null == id){
			return null;
		}
		HmUserEntity hmUser=new HmUserEntity();
		hmUser.setId(id);
		return hmUserDao.doRemove(hmUser);
	}

	@Override
	public PageBean<HmUserEntity> pageQuery(Criteria<HmUserEntity> criteria) {
		if(null == criteria){
			return null;
		}
		//获取总数
		long rowCount = hmUserDao.getCount(criteria);
		if(0 == rowCount ){
			return criteria.getPageBean();
		}
		criteria.getPageBean().setRowCount(rowCount);
		//获取列表
		List<HmUserEntity> list = hmUserDao.queryForPageList(criteria);
		criteria.getPageBean().setData(list);
		return criteria.getPageBean();
	}
	
}
