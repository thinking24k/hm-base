package com.xxwl.tk.main.dao.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.xxwl.tk.main.entity.HmRecordEntity;
import com.xxwl.tk.main.dao.HmRecordDao;
import com.xxwl.tk.main.dao.mapper.HmRecordMapper;
import com.xxwl.tk.framework.dao.impl.GenericDAOImpl;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmRecordDaoImpl
* @Description: 本类是由代码生成器自动生成HmRecordEntity持久层接口(DaoImpl)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
@Repository
public class HmRecordDaoImpl  extends GenericDAOImpl<HmRecordEntity, Integer> implements HmRecordDao{
	@Resource
	private HmRecordMapper hmRecordMapper;

	@Override
	public BaseMapper<HmRecordEntity, Integer> getBaseMapper() {
		return hmRecordMapper;
	}

	@Override
	public int doUpdateInmoney(HmRecordEntity recordEntity) {
		return hmRecordMapper.doUpdateInmoney(recordEntity);
	}

	@Override
	public int doUpdateOutmoney(HmRecordEntity recordEntity) {
		return hmRecordMapper.doUpdateOutmoney(recordEntity);
	}

}
