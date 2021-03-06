<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="${basePackage}.dao.mapper.${tableEntity.className}Mapper">
	<!-- 注意：1. BaseResultMap 与底层架构有关,除数据库变更.严禁人为修改. -->
	<resultMap id="BaseResultMap"  type="${basePackage}.entity.${entityName}">
	<#list tableEntity.columns as col>
			<#if col.isPrimaryKey == 1 >
		<id column="${col.columnName}" property="${col.classAttr}" jdbcType="${col.jdbcType}" />
			</#if>
			<#if col.isPrimaryKey != 1 >
		<result column="${col.columnName}" property="${col.classAttr}" jdbcType="${col.jdbcType}" />
			</#if>
	</#list>
	</resultMap>

	<sql id="allColumn">
		${allColumn}
	</sql>

	<insert id="doAdd"  parameterType="${basePackage}.entity.${entityName}" >
    	${insertSqlMaker}
  	</insert>
  	
	<insert id="doAddBatch"  parameterType="java.util.List" >
    	insert into ${tableEntity.tableName} (
    		<#list tableEntity.columns as col>
		      	<#if col.isPrimaryKey != 1 && col.columnName !='isvoid' >
					<if test="null != e.${col.classAttr}"  >
						 ${col.columnName},
					</if>
				</#if>
			 </#list>
			 isvoid
		 ) values
		 <foreach collection="list" item="item" index="index"  separator=",">
				(<#list tableEntity.columns as col>
					<#if col.isPrimaryKey != 1 && col.columnName !='isvoid' >
						<if test="null != item.${col.classAttr}"  >
						 	${r"#"}{item.${col.classAttr}},
						</if>
					</#if>
			 </#list>
			 ${r"#"}{item.isvoid}
			 )
		
		</foreach>
  	</insert>
  	
	<update id="doUpdate"   parameterType="${basePackage}.entity.${entityName}" >
	    update 
	    	${tableEntity.tableName}
	    <set>
		      <#list tableEntity.columns as col>
		      	<#if col.isPrimaryKey != 1 >
					<if test="null != ${col.classAttr}"  >
						 ${col.columnName} = ${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}},
					</if>
				</#if>
			 </#list>
	    </set>
	     <where>
		     <#list tableEntity.columns as col>
					<#if col.isPrimaryKey == 1 >
						 ${col.columnName} =${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}}
					</#if>
			 </#list>
		</where>
	 </update>
	 
     	
  	<delete id="doDelete"  >
  		delete  from 
  			${tableEntity.tableName}
	  	<where> 
	  		id 
	  	=
			${r"#"}{id}
		</where>
    </delete>
    
  	<delete id="doDeletes"  parameterType="java.util.List" >
  		delete  from 
  			${tableEntity.tableName}
	  	<where> 
	  		id 
	  	in 
			<foreach collection="list" item="item" index="index" open="(" close=")" separator=",">
				${r"#"}{item}
			</foreach>
		</where>
    </delete>
    
    <update id="doRemove" parameterType="${basePackage}.entity.${entityName}"  >
    	update 
    		${tableEntity.tableName}
    	set isvoid = 0
	    <if test="changeuid != null" >
	      ,changeuid = ${r"#"}{changeuid}
	    </if>
	    <choose>
	      <when test="changedate != null">
	        ,changedate = ${r"#"}{changedate}
	      </when>
	      <otherwise>
	        ,changedate = NOW()
	      </otherwise>
	    </choose>
	     <where>
		     id = ${r"#"}{id}
		</where>
  	</update>
  		
   <select id="getById" resultMap="BaseResultMap" >
	    select
      		<include refid="allColumn" />
      	from 
      		${tableEntity.tableName}
	    <where>
		    id = ${r"#"}{id}
		</where>
  </select>
  
  	<select id="getByIds" resultMap="BaseResultMap" parameterType="java.util.List">
	  	select
      		<include refid="allColumn" />
      	from 
      		${tableEntity.tableName}
	  	<where> 
	  		id 
	  	in 
			<foreach collection="list" item="item" index="index" open="(" close=")" separator=",">
				${r"#"}{item}
			</foreach>
		</where>
  	</select>
  
   <select id="getCount" resultType="java.lang.Long">
      select count(*) from ${tableEntity.tableName}
      <if test="_parameter != null">
          <include refid="sqlCriCondition"/>
      </if>
  </select>  
  
  <select id="queryForList" resultMap="BaseResultMap">
      select
      <include refid="allColumn" />
      from ${tableEntity.tableName}
      <if test="_parameter != null">
        <include refid="sqlCriCondition"/>
        <include refid="sortSql"/>
        <include refid="com.xxwl.tk.framework.dao.CommonMapper.pagingLimit"/>
      </if>
  </select>
  
  <select id="queryForPageList" resultMap="BaseResultMap">
      select
      <include refid="allColumn" />
      from ${tableEntity.tableName}
      <if test="_parameter != null">
        <include refid="sqlCriCondition"/>
        <include refid="sortSql"/>
        <include refid="com.xxwl.tk.framework.dao.CommonMapper.pagingLimit"/>
      </if>
  </select>
  
 

  <!--条件查询时 日期默认= 字符默认like 其他默认= 需要进行其他逻辑处理请自行更改-->
  <sql id="sqlCriCondition">
  	<where>
  	 1=1
  	 <#list tableEntity.columns as col>
			<#if col.classAttrType == 'String' >
		<if test="null != ${col.classAttr} and ${col.classAttr} != ''">
			AND ${col.columnName} LIKE CONCAT('%', ${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}}, '%')
		</if>
			<#elseif col.classAttrType == 'Integer' || col.classAttrType == 'Long' || col.classAttrType == 'Double' || col.classAttrType == 'Float'>
		<if test="null != ${col.classAttr}">
			AND ${col.columnName} = ${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}}
		</if>	
			<#elseif col.classAttrType == 'java.util.Data' || col.classAttrType == 'java.sql.Timestamp' >
		<if test="null != ${col.columnName} and ${col.columnName} != ''">
			AND STR_TO_DATE(${col.columnName},'%Y-%m-%d') = ${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}}
		</if>
			<#else>
		<if test="null != ${col.classAttr} and ${col.classAttr} != ''">
			AND ${col.columnName} = ${r"#"}{${col.classAttr},jdbcType=${col.jdbcType}}
		</if>
			</#if>
	</#list>
  	</where>
  </sql>  
  
    <sql id="sortSql">
        order by
        <choose>
            <when test="sortItemMap == null">
                cdate desc
            </when>
            <otherwise>
                <foreach collection="sortItemMap.keySet()" item="field" separator=",">
                    <choose>
				<#list tableEntity.columns as col>
					<#if col.classAttr != 'creationdate' && col.classAttr != 'id' >
						<when test="field == '${col.classAttr}'">
			                 ${col.columnName} ${r"$"}{sortItemMap.${col.classAttr}}
			            </when>
					</#if>
				</#list>
						<otherwise>
							id asc
						</otherwise>
					</choose>
                </foreach>
            </otherwise>
        </choose>
    </sql>  


</mapper>