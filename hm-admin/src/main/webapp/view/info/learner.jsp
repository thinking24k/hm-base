<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Basic -->
    	<meta charset="UTF-8" />
		<title>学员管理</title>
		<!-- 公用页面 -->
		<%@include file="/view/common/common.jsp" %>
		<link href="<c:url value="/js/lib/plugins/bootstrap-datepicker/css/datepicker3.css"/>" rel="stylesheet" />
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
								<li>
									<a href="<c:url value="/"/>">
										<i class="icon fa fa-home"></i>
										主页
									</a>
								</li>
								<li class="active">
									<i class="fa fa-table"></i>
									学员
								</li>
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
									<h6>
										<i class="fa fa-table red"></i>
										<span class="break"></span>
										用户
										<button type="button" data-toggle="modal" data-target="#addAndEditModal" class="btn btn-info bk-margin-left-15" style="padding: 2px 5px;">
											<i class="glyphicon glyphicon-plus"></i>
											新增
										</button>
									</h6>
									<div class="panel-actions">
										<a href="javascript:void(0);">
											<i class="fa fa-rotate-right"></i>
										</a>
									</div>
								</div>
								<div class="panel-body">
									<!--搜索栏-->
									<form action="" method="post" class="form-inline bk-margin-10">
										<div class="form-group">
											<label class="">
												姓名
												<input type="text"  name="realname" class="form-control" placeholder="用户真实姓名" />
											</label>
										</div>
										<div class="form-group bk-margin-right-10">
											<label class="">
												电话
												<input type="text"  name="telephone" class="form-control" placeholder="用户电话" />
											</label>
										</div>
										<div class="form-group bk-margin-right-10">
											<label class="" for="sex">
												性别
												<select  name="select" class="form-control" size="1">
													<option value="-1">全部</option>
													<option value="26">女</option>
													<option value="27">男</option>
												</select>
											</label>
										</div>
										<div class="form-group">
											<div class="">
												<button type="button" class="bk-margin-right-10 btn btn-default">
													<i class="fa fa-search"></i>
													搜索
												</button>
												<button type="button" class=" btn btn-primary">
													<i class="fa fa-refresh"></i>
													清空
												</button>
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
						<form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
							<div class="form-group">
								<label class="col-md-3 control-label">姓名</label>
								<div class="col-md-9">
									<input type="text" name="realname" class="form-control" placeholder="姓名">
									<span class="help-block">姓名由2-10位字符组成</span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">用户名</label>
								<div class="col-md-9">
									<input type="text" name="username" class="form-control" placeholder="用户名">
									<span class="help-block">用户名由4-16位字符组成</span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">性别</label>
								<div class="col-md-9">
									<select name="sex" class="form-control" size="1">
										<option value="26">女</option>
										<option value="27">男</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">生日</label>
								<div class="col-md-9">
									<input type="text" name="birthday" class="form-control" placeholder="生日">
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">地址</label>
								<div class="col-md-9">
									<input type="text" name="address" class="form-control" placeholder="地址">
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">邮箱</label>
								<div class="col-md-9">
									<input type="text" name="email" class="form-control" placeholder="邮箱">
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">个人简介</label>
								<div class="col-md-9">
									<textarea style="resize: none;" class="form-control" name="description" placeholder="个人简介"></textarea>
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">教育经历</label>
								<div class="col-md-9">
									<button type="button" data-toggle="modal" data-target="#educationalDialog" class="btn btn-info" style="padding: 2px 5px;">
										<i class="glyphicon glyphicon-plus"></i>
										新增
									</button>
								</div>
								<div class="col-md-12">
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
		<!-- 提示确认消息弹窗 -->
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
		
		<!-- 教育经历编辑弹窗 -->
		<div class="modal fade" id="educationalDialog" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title bk-fg-primary">编辑教育经历</h4>
					</div>
					<div class="modal-body">
						<form action="" id="educationalForm" method="post" enctype="multipart/form-data" class="form-horizontal">
							<div class="form-group">
								<label class="col-md-3 control-label">学校</label>
								<div class="col-md-9">
									<input type="text" name="school" class="form-control" placeholder="请输入学校名称(必填)">
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">专业</label>
								<div class="col-md-9">
									<input type="text" name="profession" class="form-control" placeholder="请输入专业信息(必填)">
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">学历</label>
								<div class="col-md-9">
									<select name="education" class="form-control">
										<option value="0">大专</option>
										<option value="1">本科</option>
										<option value="2">硕士</option>
										<option value="3">博士</option>
										<option value="4">其他</option>
									</select>
									<span class="help-block"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">时间</label>
								<div class="col-md-9">
									<div class="input-daterange input-group" data-plugin-datepicker="">
										<span class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</span>
										<input type="text" class="form-control datePicker" name="startTime" placeholder="请选择">
										<span class="input-group-addon">到</span>
										<input type="text" class="form-control datePicker" name="endTime" placeholder="请选择">
									</div>
									<!-- <span class="form-control">
										<input type="text" readonly="readonly" placeholder="请选择" name="startTime">
										到
										<input type="text" readonly="readonly" placeholder="请选择" name="endTime">
									</span> -->
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">教育经历描述</label>
								<div class="col-md-12">
									<textarea class="form-control" style="resize: none;" placeholder="教育经历描述不超过300字"></textarea>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary">确定</button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- End Modal Dialog -->		
		
		<div class="clearfix"></div>		
		
		<!-- Pages JS -->
		<script src="<c:url value="/js/info/learner.js"/>"></script>
	</body>
	
</html>