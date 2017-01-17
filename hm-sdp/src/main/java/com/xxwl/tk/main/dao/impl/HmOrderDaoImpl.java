package com.xxwl.tk.main.dao.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.xxwl.tk.main.entity.HmOrderEntity;
import com.xxwl.tk.main.dao.HmOrderDao;
import com.xxwl.tk.main.dao.mapper.HmOrderMapper;
import com.xxwl.tk.framework.dao.impl.GenericDAOImpl;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmOrderDaoImpl
* @Description: 本类是由代码生成器自动生成HmOrderEntity持久层接口(DaoImpl)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Repository
public class HmOrderDaoImpl  extends GenericDAOImpl<HmOrderEntity, Integer> implements HmOrderDao{
	@Resource
	private HmOrderMapper hmOrderMapper;

	@Override
	public BaseMapper<HmOrderEntity, Integer> getBaseMapper() {
		return hmOrderMapper;
	}

}
