<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Basic -->
    	<meta charset="UTF-8" />
		<title>简约-综合管理平台</title>
		 <!-- 公用页面 -->
   		 <%@include file="/view/common/common.jsp" %>
	</head>
	<body>
		<!-- Start: Content -->
		<div class="container-fluid content">
			<div class="row">
				<!-- Main Page -->
				<div class="body-login">
					<div class="center-login">
						<a href="#" class="logo pull-left hidden-xs">
							<img src="<c:url value="/js/lib/assets/img/logo.png"/>" height="45" alt="NADHIF Admin" />
						</a>

						<div class="panel panel-login">
							<div class="panel-title-login text-right">
								<h2 class="title"><i class="fa fa-user"></i> Login</h2>
							</div>
							<div class="panel-body">
								<form action="index.html" method="post">
									<div class="form-group">
										<label>Username</label>
										<div class="input-group input-group-icon">
											<input name="username" type="text" class="form-control bk-noradius" />
											<span class="input-group-addon">
												<span class="icon">
													<i class="fa fa-user"></i>
												</span>
											</span>
										</div>
									</div>

									<div class="form-group">
										<label>Password</label>									
										<div class="input-group input-group-icon">
											<input name="pwd" type="password" class="form-control bk-noradius" />
											<span class="input-group-addon">
												<span class="icon">
													<i class="fa fa-lock"></i>
												</span>
											</span>
										</div>
									</div>
									<br />
									<div class="row">
										<div class="col-sm-8">
											<div class="checkbox-custom checkbox-default bk-margin-bottom-10">
												<input id="RememberMe" name="rememberme" type="checkbox"/>
												<label for="RememberMe">Remember Me</label>
											</div>
										</div>
										<div class="col-sm-4 text-right">
											<button href="index.html" type="submit" class="btn btn-primary hidden-xs">Login</button>
											<button href="index.html" type="submit" class="btn btn-primary btn-block btn-lg visible-xs bk-margin-top-10">Login</button>
										</div>
									</div>
									<br />

									<p class="text-center">Don't have an account yet? <a href="page-register.html"><small>Register!</small></a>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- End Main Page -->

			</div>
		</div><!--/container-->	
		
		<!-- Pages JS 
		<script src="../js/table.js"></script>-->
	</body>
	
</html>