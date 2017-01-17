package com.xxwl.tk.main.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize.Inclusion;
import com.xxwl.tk.framework.json.JsonDateDeserializer;
import com.xxwl.tk.framework.json.JsonDateSerializer;
import com.xxwl.tk.framework.domain.BaseEntity;
/** 
* @ClassName: HmRecordEntity 
* @Description: 本类是由代码生成器自动生成HmRecordEntity实体对象(Entity)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
@Entity(name = "HmRecordEntity")
@Table(name = "hm_record")
public class HmRecordEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID =  -5886245629883849761L;


	//
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)	
	private Integer id;
	//时间字符如2017-1
	@Column(name = "datestr")
	private String datestr;
	//收入
	@Column(name = "inmoney")
	private Double inmoney;
	//
	@Column(name = "outmoney")
	private Double outmoney;
	
	/***/
	public Integer getId() {
		return id;
	}
	/***/
	public void setId(Integer id) {
		this.id = id;
	}
	/**时间字符如2017-1*/
	public String getDatestr() {
		return datestr;
	}
	/**时间字符如2017-1*/
	public void setDatestr(String datestr) {
		this.datestr = datestr;
	}
	/**收入*/
	public Double getInmoney() {
		return inmoney;
	}
	/**收入*/
	public void setInmoney(Double inmoney) {
		this.inmoney = inmoney;
	}
	/***/
	public Double getOutmoney() {
		return outmoney;
	}
	/***/
	public void setOutmoney(Double outmoney) {
		this.outmoney = outmoney;
	}

}
