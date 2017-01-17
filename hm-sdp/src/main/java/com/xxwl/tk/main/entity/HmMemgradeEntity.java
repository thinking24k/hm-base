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
* @ClassName: HmMemgradeEntity 
* @Description: 本类是由代码生成器自动生成HmMemgradeEntity实体对象(Entity)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Entity(name = "HmMemgradeEntity")
@Table(name = "hm_memgrade")
public class HmMemgradeEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID =  -6910151209314442242L;


	//
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)	
	private Integer id;
	//会员等级名字
	@Column(name = "gradeName")
	private String gradeName;
	//折扣比例
	@Column(name = "discount")
	private Double discount;
	
	/***/
	public Integer getId() {
		return id;
	}
	/***/
	public void setId(Integer id) {
		this.id = id;
	}
	/**会员等级名字*/
	public String getGradeName() {
		return gradeName;
	}
	/**会员等级名字*/
	public void setGradeName(String gradeName) {
		this.gradeName = gradeName;
	}
	/**折扣比例*/
	public Double getDiscount() {
		return discount;
	}
	/**折扣比例*/
	public void setDiscount(Double discount) {
		this.discount = discount;
	}

}
