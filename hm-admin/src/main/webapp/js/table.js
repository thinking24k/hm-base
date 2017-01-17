/* TYPE YOUR JAVA SCRIPT HERE */
require(['jquery','utils', 'pagination','jq-validation'],function($,utils){
	var cc=0;
	msgNavEvent(-1);
	//.datatable-content
	function msgNavEvent(msgNavId){
		//$(".news_ph").eq($(this).index()).addClass("active").siblings().removeClass("active");
		//根据对应的栏目查询对应的新闻列表
		var defaultImgUrl=utils.current_url+utils.news_default_img;
		$('#pageList').pagination({
			url :'base/paging.cmd/doPaging/syVersionDaoImpl/pageQuery',
			startPage:1,
			pageSize:10,//,"moduleTable":"sy_msg_info","moduleType":"0"
			queryParam:{queryClause:{},orderClause:{"creationdate": "desc"}},
			visiblePages: 6,
			contentContainer : $('.datatable-tbody'),
			onComplete:function(){//列表构造完成后
				//查询item详情
				$('.datatable-item-info').on("click",function(){
					$('#addAndEditModal .modal-title').html("详情");
					$('#addAndEditModal') .modal('show');
				});
				//编辑item
				$('.datatable-item-edit').on("click",function(){
					$('#addAndEditModal .modal-title').html("编辑");
					$('#addAndEditModal') .modal('show');
				});
				//删除item
				$('.datatable-item-del').on("click",function(){
					$('#msgDialog .modal-title').html("删除");
					$('#msgDialog .modal-body').html("是否删除这条数据？");
					$('#msgDialog') .modal('show');
				});
			},
			templateMethod:function(data,i){//构造html结构方法
				var html='';
				html+='';
				html+='<tr>';
				html+='<td>Willson'+cc+'</td>';
				html+='<td>Developer</td>';
				html+='<td>2563$</td>';
				html+='<td>';
				html+='	<span class="label label-warning">Pending</span>';
				html+='</td>';
				html+='<td>';
				html+='	<a class="btn btn-success datatable-item-info" data-id="'+1+'" href="#">';
				html+='		<i class="fa fa-search-plus"></i>';                                            
				html+='	</a>';
				html+='	<a class="btn btn-info datatable-item-edit" href="#">';
				html+='		<i class="fa fa-edit "></i>';                                            
				html+='	</a>'; 
				html+='	<a class="btn btn-danger datatable-item-del"  href="#">'; 
				html+='		<i class="fa fa-trash-o "></i> '; 
				html+='	</a>'; 
				html+='	</td>'; 
				html+='</tr>';
				cc++;//test
				return html;
			}
		});
	}
});
