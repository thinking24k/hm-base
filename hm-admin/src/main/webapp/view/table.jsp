<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Basic -->
    	<meta charset="UTF-8" />
		<title>简约-列表管理</title>
		 <!-- 公用页面 -->
   		 <%@include file="/view/common/common.jsp" %>
	</head>
	<body>
		<!-- 公用头部 -->
   		<%@include file="/view/common/header.jsp" %>
		<!-- Start: Content -->
		<div class="container-fluid content">	
			<div class="row">
			<!-- 公用左侧 -->
   			<%@include file="/view/common/left.jsp" %>
						
				<!-- Main Page -->
				<div class="main sidebar-minified">			
					<!-- Page Header -->
					<div class="page-header">
						<div class="pull-left">
							<ol class="breadcrumb visible-sm visible-md visible-lg">								
								<li><a href="index.html"><i class="icon fa fa-home"></i>主页</a></li>
								<li class="active"><i class="fa fa-table"></i>用户</li>
							</ol>						
						</div>
						<div class="pull-right">
							<h2>用户</h2>
						</div>					
					</div>
					<!-- End Page Header -->



					<div class="row">		
						<div class="col-lg-12">
							<div class="panel">
								<div class="panel-heading bk-bg-primary">
									<h6><i class="fa fa-table red"></i><span class="break"></span>用户
										<button type="button" data-toggle="modal" data-target="#addAndEditModal" class=" btn btn-info bk-margin-left-15" style="padding: 2px 5px"><i class="glyphicon glyphicon-plus"></i>新增</button>
									</h6>
									<div class="panel-actions">
										<a href="#" ><i class="fa fa-rotate-right"></i></a>
										<!-- <a href="table.html#" class="btn-minimize"><i class="fa fa-chevron-up"></i></a>
										<a href="table.html#" class="btn-close"><i class="fa fa-times"></i></a> -->
									</div>
								</div>
								<div class="panel-body">
									<!--搜索栏-->
									<form action="" method="post" class="form-inline bk-margin-10">
										<div class="form-group">
											<label class="" for="realname">姓名</label>
											<input type="text"  name="realname" class="form-control" placeholder="用户真实姓名" />
											<!-- <label class="" for="username">Username</label>
											<div class="input-group bk-margin-right-10">
													<span class="input-group-btn">
													<button type="button" class="btn btn-success"><i class="fa fa-user"></i></button>
													</span>
												<input type="text" id="username" name="input1-group2" class="form-control" placeholder="Username" />
											</div> -->
										</div>
										<div class="form-group bk-margin-right-10">
											<label class="" for="username">用户名</label>
											<input type="text"  name="username" class="form-control" placeholder="用户平台账号" />
										</div>
										<div class="form-group bk-margin-right-10">
											<label class="" for="telephone">电话</label>
											<input type="text"  name="telephone" class="form-control" placeholder="用户电话" />
										</div>
										<div class="form-group bk-margin-right-10">
											<label class="" for="sex">性别</label>
											<select  name="select" class="form-control" size="1">
													<option value="-1">全部</option>
													<option value="26">女</option>
													<option value="27">男</option>
											</select>
										</div>

										<div class="form-group">
											<div class="">
												<button type="button" class="bk-margin-right-10 btn btn-default"><i class="fa fa-search"></i>搜索</button>
												<button type="button" class=" btn btn-primary"><i class="fa fa-refresh"></i>清空</button>
											</div>

										</div>
									</form>
									<!--表格区-->
									<div class="table-responsive datatable-content">	
										<table class="table table-striped table-bordered bootstrap-datatable datatable">
											<thead>
												<tr>
													<th>Employe</th>
													<th>Position</th>
													<th>Salary</th>
													<th>Status</th>
													<th>Actions</th>
												</tr>
											</thead>   
											<tbody class="datatable-tbody">								
												<!-- <tr>
													<td>Willson</td>
													<td>Developer</td>
													<td>2563$</td>
													<td>
														<span class="label label-warning">Pending</span>
													</td>
													<td>
														<a class="btn btn-success" href="table.html#">
															<i class="fa fa-search-plus "></i>                                            
														</a>
														<a class="btn btn-info" href="table.html#">
															<i class="fa fa-edit "></i>                                            
														</a>
														<a class="btn btn-danger" href="table.html#">
															<i class="fa fa-trash-o "></i> 

														</a>
													</td>
												</tr>
												<tr>
													<td>James</td>
													<td>SEO</td>
													<td>5000$</td>
													<td>
														<span class="label label-warning">Pending</span>
													</td>
													<td>
														<a class="btn btn-success" href="table.html#">
															<i class="fa fa-search-plus "></i>                                            
														</a>
														<a class="btn btn-info" href="table.html#">
															<i class="fa fa-edit "></i>                                            
														</a>
														<a class="btn btn-danger" href="table.html#">
															<i class="fa fa-trash-o "></i> 
														</a>
													</td>
												</tr>
												<tr>
													<td>Steven</td>
													<td>Photographer</td>
													<td>1269$</td>
													<td>
														<span class="label label-warning">Pending</span>
													</td>
													<td>
														<a class="btn btn-success" href="table.html#">
															<i class="fa fa-search-plus "></i>                                            
														</a>
														<a class="btn btn-info" href="table.html#">
															<i class="fa fa-edit "></i>                                            
														</a>
														<a class="btn btn-danger" href="table.html#">
															<i class="fa fa-trash-o "></i> 
														</a>
													</td>
												</tr>
												<tr>
													<td>Aselay</td>
													<td>Project manger</td>
													<td>6253$</td>
													<td>
														<span class="label label-warning">Pending</span>
													</td>
													<td>
														<a class="btn btn-success" href="table.html#">
															<i class="fa fa-search-plus "></i>                                            
														</a>
														<a class="btn btn-info" href="table.html#">
															<i class="fa fa-edit "></i>                                            
														</a>
														<a class="btn btn-danger" href="table.html#">
															<i class="fa fa-trash-o "></i> 
														</a>
													</td>
												</tr> -->
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>					
					</div>


				</div>
				<!-- End Main Page -->

				<!-- Usage -->
				<!-- 公用分页 -->
				<%@include file="/view/common/footer-page.jsp" %>
				<!-- 公用电脑信息 -->
   				<%@include file="/view/common/footer-info.jsp" %>
				<!-- End Usage -->
			

			</div>
		</div><!--/container-->
		
		
		<!--新增编辑详情 Modal Dialog -->
		<div class="modal fade bs-example-modal-lg" id="addAndEditModal" tabindex="-1" role="dialog" >
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title bk-fg-primary">新增</h4>
					</div>
					<div class="modal-body">
						<form action="" method="post" enctype="multipart/form-data" class="form-horizontal ">
										<div class="form-group">
											<label class="col-md-3 control-label">ID</label>
											<div class="col-md-9">
												<p class="form-control-static">0001</p>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label" for="text-input">用户名</label>
											<div class="col-md-9">
												<input type="text" id="text-input" name="text-input" class="form-control" placeholder="用户名">
												<span class="help-block">用户名由4-16位字符组成</span>
											</div>
										</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary">保存</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="msgDialog" tabindex="-1" role="dialog" >
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title bk-fg-primary">消息提示</h4>
					</div>
					<div class="modal-body">
						消息content
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary">提交</button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- End Modal Dialog -->		
		
		<div class="clearfix"></div>		
		
		<!-- Pages JS -->
		<script src="../js/table.js"></script>
	</body>
	
</html>