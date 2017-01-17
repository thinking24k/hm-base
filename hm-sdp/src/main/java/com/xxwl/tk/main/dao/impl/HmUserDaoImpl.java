package com.xxwl.tk.main.dao.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.xxwl.tk.main.entity.HmUserEntity;
import com.xxwl.tk.main.dao.HmUserDao;
import com.xxwl.tk.main.dao.mapper.HmUserMapper;
import com.xxwl.tk.framework.dao.impl.GenericDAOImpl;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmUserDaoImpl
* @Description: 本类是由代码生成器自动生成HmUserEntity持久层接口(DaoImpl)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Repository
public class HmUserDaoImpl  extends GenericDAOImpl<HmUserEntity, Integer> implements HmUserDao{
	@Resource
	private HmUserMapper hmUserMapper;

	@Override
	public BaseMapper<HmUserEntity, Integer> getBaseMapper() {
		return hmUserMapper;
	}

}
