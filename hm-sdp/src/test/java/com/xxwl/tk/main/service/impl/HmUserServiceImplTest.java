package com.xxwl.tk.main.service.impl;

import static org.junit.Assert.*;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;

import com.xxwl.tk.framework.page.Criteria;
import com.xxwl.tk.framework.page.PageBean;
import com.xxwl.tk.main.entity.HmUserEntity;
import com.xxwl.tk.main.service.HmUserService;
import com.xxwl.tk.test.SpringBaseTest;

public class HmUserServiceImplTest extends SpringBaseTest{

	@Resource
	private HmUserService userService;
	@Test
	public void testGetCount() {
		HmUserEntity param=new HmUserEntity();
		param.setUpuname("admin");
		Criteria<HmUserEntity> criteria=new Criteria<HmUserEntity>(param);
		long count = userService.getCount(criteria);
		assertTrue(count>0);
	}

	@Test
	public void testQueryForList() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryForPageList() {
		HmUserEntity param=new HmUserEntity();
		param.setUsername("admin");
		Criteria<HmUserEntity> criteria=new Criteria<HmUserEntity>(param);
		PageBean<HmUserEntity> pageBean=new PageBean<HmUserEntity>(1, 10);
		criteria.setPageBean(pageBean);
		List<HmUserEntity> queryForPageList = userService.queryForPageList(criteria);
		assertNotNull(queryForPageList);
	}

	@Test
	public void testGetById() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetByIds() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoAdd() {
		HmUserEntity e=new HmUserEntity();
		e.setUsername("admin");
		e.setPassword("admin");
		Integer doAdd = userService.doAdd(e);
		assertTrue(doAdd>0);
	}

	@Test
	public void testDoAddBatch() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoUpdate() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoDelete() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoDeletes() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoRemove() {
		fail("Not yet implemented");
	}

	@Test
	public void testPageQuery() {
		fail("Not yet implemented");
	}

}
