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
* @ClassName: HmMemberInfoEntity 
* @Description: 本类是由代码生成器自动生成HmMemberInfoEntity实体对象(Entity)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月17日
*  
*/ 
@Entity(name = "HmMemberInfoEntity")
@Table(name = "hm_member_info")
public class HmMemberInfoEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID =  -8131429196978755555L;


	//
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)	
	private Integer id;
	//会员名字
	@Column(name = "memName")
	private String memName;
	//性别 1男 0女
	@Column(name = "sex")
	private Integer sex;
	//会员手机号码
	@Column(name = "telephone")
	private String telephone;
	//会员地址
	@Column(name = "address")
	private String address;
	//积分
	@Column(name = "integral")
	private Double integral;
	//会员等级
	@Column(name = "grade")
	private Integer grade;
	
	/***/
	public Integer getId() {
		return id;
	}
	/***/
	public void setId(Integer id) {
		this.id = id;
	}
	/**会员名字*/
	public String getMemName() {
		return memName;
	}
	/**会员名字*/
	public void setMemName(String memName) {
		this.memName = memName;
	}
	/**性别 1男 0女*/
	public Integer getSex() {
		return sex;
	}
	/**性别 1男 0女*/
	public void setSex(Integer sex) {
		this.sex = sex;
	}
	/**会员手机号码*/
	public String getTelephone() {
		return telephone;
	}
	/**会员手机号码*/
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	/**会员地址*/
	public String getAddress() {
		return address;
	}
	/**会员地址*/
	public void setAddress(String address) {
		this.address = address;
	}
	/**积分*/
	public Double getIntegral() {
		return integral;
	}
	/**积分*/
	public void setIntegral(Double integral) {
		this.integral = integral;
	}
	/**会员等级*/
	public Integer getGrade() {
		return grade;
	}
	/**会员等级*/
	public void setGrade(Integer grade) {
		this.grade = grade;
	}

}
