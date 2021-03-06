<%--  解决中文乱码 问题 --%>
<%@ page language="java" pageEncoding="UTF-8"%>
<!--电脑信息-->
<div id="usage">
<ul>
	<li>
		<div class="title">Memory</div>
		<div class="bar">
			<div class="progress progress-md  progress-striped active">
				<div class="progress-bar progress-bar-success" role="progressbar"
					aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
					style="width: 50%"></div>
			</div>
		</div>
		<div class="desc">4GB of 8GB</div>
	</li>
	<li>
		<div class="title">HDD</div>
		<div class="bar">
			<div class="progress progress-md  progress-striped active">
				<div class="progress-bar progress-bar-primary" role="progressbar"
					aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
					style="width: 40%"></div>
			</div>
		</div>
		<div class="desc">250GB of 1TB</div>
	</li>
	<li>
		<div class="title">SSD</div>
		<div class="bar">
			<div class="progress progress-md  progress-striped active">
				<div class="progress-bar progress-bar-warning" role="progressbar"
					aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
					style="width: 70%"></div>
			</div>
		</div>
		<div class="desc">700GB of 1TB</div>
	</li>
	<li>
		<div class="title">Bandwidth</div>
		<div class="bar">
			<div class="progress progress-md  progress-striped active">
				<div class="progress-bar progress-bar-danger" role="progressbar"
					aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
					style="width: 90%"></div>
			</div>
		</div>
		<div class="desc">90TB of 100TB</div>
	</li>
</ul>
</div>
