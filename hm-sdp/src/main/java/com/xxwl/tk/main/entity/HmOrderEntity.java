package com.xxwl.tk.main.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.xxwl.tk.framework.domain.BaseEntity;
/** 
* @ClassName: HmOrderEntity 
* @Description: 本类是由代码生成器自动生成HmOrderEntity实体对象(Entity)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Entity(name = "HmOrderEntity")
@Table(name = "hm_order")
public class HmOrderEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID =  -9180280366914115740L;


	//主键
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)	
	private Integer id;
	//订单用户
	@Column(name = "memberid")
	private Integer memberid;
	//支出0 收入 1
	@Column(name = "type")
	private Integer type;
	//订单金额
	@Column(name = "ordersum")
	private Double ordersum;
	//积分
	@Column(name = "integral")
	private Double integral;
	
	private String telephone;
	
	/**主键*/
	public Integer getId() {
		return id;
	}
	/**主键*/
	public void setId(Integer id) {
		this.id = id;
	}
	/**订单用户*/
	public Integer getMemberid() {
		return memberid;
	}
	/**订单用户*/
	public void setMemberid(Integer memberid) {
		this.memberid = memberid;
	}
	/**支出0 收入 1*/
	public Integer getType() {
		return type;
	}
	/**支出0 收入 1*/
	public void setType(Integer type) {
		this.type = type;
	}
	/**订单金额*/
	public Double getOrdersum() {
		return ordersum;
	}
	/**订单金额*/
	public void setOrdersum(Double ordersum) {
		this.ordersum = ordersum;
	}
	/**积分*/
	public Double getIntegral() {
		return integral;
	}
	/**积分*/
	public void setIntegral(Double integral) {
		this.integral = integral;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
	

}
