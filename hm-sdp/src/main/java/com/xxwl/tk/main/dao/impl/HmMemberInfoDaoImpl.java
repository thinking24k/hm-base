package com.xxwl.tk.main.dao.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.xxwl.tk.main.entity.HmMemberInfoEntity;
import com.xxwl.tk.main.dao.HmMemberInfoDao;
import com.xxwl.tk.main.dao.mapper.HmMemberInfoMapper;
import com.xxwl.tk.framework.dao.impl.GenericDAOImpl;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmMemberInfoDaoImpl
* @Description: 本类是由代码生成器自动生成HmMemberInfoEntity持久层接口(DaoImpl)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
@Repository
public class HmMemberInfoDaoImpl  extends GenericDAOImpl<HmMemberInfoEntity, Integer> implements HmMemberInfoDao{
	@Resource
	private HmMemberInfoMapper hmMemberInfoMapper;

	@Override
	public BaseMapper<HmMemberInfoEntity, Integer> getBaseMapper() {
		return hmMemberInfoMapper;
	}

	@Override
	public int doUpUserIntegral(HmMemberInfoEntity infoEntity) {
		return hmMemberInfoMapper.doUpUserIntegral(infoEntity);
	}

}
