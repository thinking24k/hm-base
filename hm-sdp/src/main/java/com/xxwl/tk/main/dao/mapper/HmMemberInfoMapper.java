package com.xxwl.tk.main.dao.mapper;

import com.xxwl.tk.main.entity.HmMemberInfoEntity;
import com.xxwl.tk.framework.dao.mapper.BaseMapper;
/** 
* @ClassName: HmMemberInfoMapper
* @Description: 本类是由代码生成器自动生成HmMemberInfoEntity持久层接口(Mapper)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
public interface HmMemberInfoMapper  extends BaseMapper<HmMemberInfoEntity, Integer>{

	/**
	 * 
	 * @Title: doUpUserIntegral 
	 * @Description: 更新用户积分
	 * @param infoEntity 积分为负数表示-
	 * @return
	 */
	public int doUpUserIntegral(HmMemberInfoEntity infoEntity);
}
