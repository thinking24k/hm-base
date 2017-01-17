package com.xxwl.tk.main.dao.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.xxwl.tk.main.entity.HmMemgradeEntity;
import com.xxwl.tk.main.dao.HmMemgradeDao;
import com.xxwl.tk.main.dao.mapper.HmMemgradeMapper;
import com.xxwl.tk.framework.dao.impl.GenericDAOImpl;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmMemgradeDaoImpl
* @Description: 本类是由代码生成器自动生成HmMemgradeEntity持久层接口(DaoImpl)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Repository
public class HmMemgradeDaoImpl  extends GenericDAOImpl<HmMemgradeEntity, Integer> implements HmMemgradeDao{
	@Resource
	private HmMemgradeMapper hmMemgradeMapper;

	@Override
	public BaseMapper<HmMemgradeEntity, Integer> getBaseMapper() {
		return hmMemgradeMapper;
	}

}
