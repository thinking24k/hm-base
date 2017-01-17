package com.xxwl.tk.main.service.impl;

import static org.junit.Assert.fail;

import javax.annotation.Resource;

import org.junit.Test;

import com.xxwl.tk.framework.attribute.DaoAttribute;
import com.xxwl.tk.main.entity.HmOrderEntity;
import com.xxwl.tk.main.service.HmOrderService;
import com.xxwl.tk.test.SpringBaseTest;

public class HmOrderServiceImplTest extends SpringBaseTest{

	@Resource
	private HmOrderService orderService;

	@Test
	public void testGetCount() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryForList() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryForPageList() {
		fail("Not yet implemented");
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
		HmOrderEntity e=new HmOrderEntity();
		//e.setTelephone("13211111112");
		e.setType(DaoAttribute.ORDER_TYPE_OUT);
		e.setOrdersum(88.0);
		Integer doAdd = orderService.doAdd(e);
	}

	@Test
	public void testDoAddBatch() {
		fail("Not yet implemented");
	}

	@Test
	public void testDoUpdate() {
		HmOrderEntity e=new HmOrderEntity();
		e.setId(36);
		e.setType(DaoAttribute.ORDER_TYPE_IN);
		e.setOrdersum(60.0);
		Integer doup = orderService.doUpdate(e);
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
