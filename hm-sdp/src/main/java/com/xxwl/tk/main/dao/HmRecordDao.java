package com.xxwl.tk.main.dao;

import com.xxwl.tk.main.entity.HmRecordEntity;
import com.xxwl.tk.framework.dao.GenericDAO;
/** 
* @ClassName: HmRecordDao
* @Description: 本类是由代码生成器自动生成HmRecordEntity持久层接口(Dao)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
public interface HmRecordDao  extends GenericDAO<HmRecordEntity, Integer>{
	/**
	 * 
	 * @Title: doUpdateInmoney 
	 * @Description: 更新收入统计
	 * @param recordEntity inmoney 可为负数
	 * @return
	 */
	public int doUpdateInmoney(HmRecordEntity recordEntity);
	/**
	 * 
	 * @Title: doUpdateInmoney 
	 * @Description: 更新支出统计
	 * @param recordEntity outmoney 可为负数
	 * @return
	 */
	public int doUpdateOutmoney(HmRecordEntity recordEntity);

}