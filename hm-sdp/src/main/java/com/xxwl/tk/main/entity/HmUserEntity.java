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
* @ClassName: HmUserEntity 
* @Description: 本类是由代码生成器自动生成HmUserEntity实体对象(Entity)
* @company 
* @author yixiang.deng
* @Email 553067271@qq.com
* @date 2017年01月16日
*  
*/ 
@Entity(name = "HmUserEntity")
@Table(name = "hm_user")
public class HmUserEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID =  -6230072426081759813L;


	//主键
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)	
	private Integer id;
	//用户名
	@Column(name = "username")
	private String username;
	//密码
	@Column(name = "password")
	private String password;
	//用户头像
	@Column(name = "img")
	private String img;
	//性别
	@Column(name = "sex")
	private Integer sex;
	//登陆时间
	@Column(name = "logintime")
	private Integer logintime;
	
	/**主键*/
	public Integer getId() {
		return id;
	}
	/**主键*/
	public void setId(Integer id) {
		this.id = id;
	}
	/**用户名*/
	public String getUsername() {
		return username;
	}
	/**用户名*/
	public void setUsername(String username) {
		this.username = username;
	}
	/**密码*/
	public String getPassword() {
		return password;
	}
	/**密码*/
	public void setPassword(String password) {
		this.password = password;
	}
	/**用户头像*/
	public String getImg() {
		return img;
	}
	/**用户头像*/
	public void setImg(String img) {
		this.img = img;
	}
	/**性别*/
	public Integer getSex() {
		return sex;
	}
	/**性别*/
	public void setSex(Integer sex) {
		this.sex = sex;
	}
	/**登陆时间*/
	public Integer getLogintime() {
		return logintime;
	}
	/**登陆时间*/
	public void setLogintime(Integer logintime) {
		this.logintime = logintime;
	}

}
