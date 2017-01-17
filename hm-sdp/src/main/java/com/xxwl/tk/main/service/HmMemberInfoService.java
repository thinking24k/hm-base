package com.xxwl.tk.main.service;

import com.xxwl.tk.framework.service.BaseService;
import com.xxwl.tk.main.entity.HmMemberInfoEntity;
/** 
* @ClassName: HmMemberInfoService 
* @Description: 本类是由代码生成器自动生成HmMemberInfoEntity逻辑层(Service)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 

public interface HmMemberInfoService extends BaseService<HmMemberInfoEntity, Integer> {

	/**
	 * 
	 * @Title: doUpUserIntegral 
	 * @Description: 更新用户积分
	 * @param infoEntity 积分为负数表示-
	 * @return
	 */
	public int doUpUserIntegral(HmMemberInfoEntity infoEntity);
	

	

}
