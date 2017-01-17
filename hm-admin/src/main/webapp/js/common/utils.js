
/**
 * 工具模块
 * @param root
 * @param factory
 */
(function(root,factory){
	if (typeof define === "function" && define.amd) {
        define(["jquery", 'require','layer','jq-migrate','bootstrap','skycons','jq-mmenu','core','jq-table','modernizr'], function($,require,layer) {
            return factory($, require,layer);
        });
    }
	
})(this,function($, require,layer, undefined){
	/*网络请求基本配置*/
	//var server_addr = 'http://192.168.0.121:9030',
	// server_addr_https = 'https://192.168.0.121:8443';

	var server_addr = 'http://localhost:8080',
	  server_addr_https = 'https://localhost:8443';
	   
	var config = {
		server_addr : server_addr,
		server_addr_https : server_addr_https,
		sdp_url : server_addr + '/ds-biz-sdp/',
		sdp_https_url : server_addr_https + '/ds-biz-sdp/',
		current_url : server_addr + '/mi-portal/',
		current_url_https : server_addr_https + '/mi-portal/',
		attachment_url : server_addr + '/mi-attachment',
		game_default_logo : 'index_content/css/myImg/app02.png', /**游戏的默认LOGO图片路径***/
		match_default_ico:"index_content/css/myImg/app05.png"
	};
	//分页信息
	/**var totalPage = 0,
	pageNo = 1,
	pageQueryDta;**/
	var isInitPage = false,canGet = true;
	var pageOptions = {
	    /**listview 请传入listview对象,自己拼接html请传入选择器。如：#list**/
		id : {},
		/**单条数据处理的模板方法**/
		templateMethod : function (item, i) {
			return '';
		},
		/**分页地址**/
		url : '',
		/**分页下标**/
		pageNo : 1,
		totalPage : 0,
		pageSize : 10,
		queryClause : {},
		orderClause : {},
		/**success 执行在最后调用的方法**/
		onComplete : function (data, pageOptions) {},
		/**是否为https请求***/
		/**isHttps : false,*/
		/**总条数**/
		totalCount : 0,
		/**当当前分页列表为空时执行的方法**/
		emptyList : function () {},
		/**是否缓存**/
		offline : false,
		/**是否其他分页**/
		isOtherPage:false
	};
	//弹动参数
	var bounce={
		autorf:true,//弹动后自动复原
		downEndCall:function(scroll){
			//下拉
		},
		upEndCall:function(scroll){
			//上拉
		}
	};
	//toast优化处理//session有效期(毫秒)
	var toastCount=0,SESSION_LIVE=30*60*1000;
	//需要压缩缩放的图片
	var FILTERIMG=[".png",".PNG",".jpg",".JPG",".jpeg",".JPEG",".bmp",".BMP"];
    //二级目录(页面路径正确)
    var MULU=["unserCenter","myAccount"];
    //分页弹动全局参数
    var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;
    //时间全局参数
    var currYear = (new Date()).getFullYear();	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.df = {
		theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		lang: 'zh',
		showNow: true,
		nowText: "今天",
        startYear: currYear - 10, //开始年份
        endYear: currYear + 10 //结束年份
	};
	//游戏参数
	var WEGAMEINFO=localStorage.getItem("WE-GAMEAINFO");
	WEGAMEINFO=WEGAMEINFO?JSON.parse(WEGAMEINFO):{};
	//util
	var util = {
		server_addr : server_addr,
		server_addr_https : server_addr_https,
		config : config,
		pageOptions : pageOptions,
		/**
         * ajax http 请求
         * url, data, success, error
         */
		ajaxJson : function (url, data, success, error) {
			if (typeof(data) == "function") { //data 参数被忽略
				error = success;
				success = data;
				data = {};
			}
			util.ajax({
				url : url,
				data : data,
				success : success,
				error : error
			});
		},
		/**
         * ajax https 请求
         * url, data, success, error
         */
		ajaxJsonForHttps:function(url, data, success, error){
                util.ajaxJson(util.sdp_https_url + url,data,success,error);
         },
		/**
		 * ajax请求
		 * url, data, success, error
		 */
		ajax : function (obj) { //ajax请求
			
			var url = obj.url;
			//url处理
			if (url.indexOf('http') !== 0) {
				if (url.charAt(0) === '/') {
					url = url.substr(1);
				}
				url = config.sdp_url + url;
			}
			//ajax默认参数可覆盖
			var ajaxSetting = {
				url : '',
				type : "POST",
				dataType : "json",
				isShowToast:true,
				offline : undefined,
				expires:300000,
				contentType : "application/json;",
				appVerify:true,
				//测试 ZDcxMDYyNTUyNzE0YWFjMTMxNGZhZTQz   redAlert2
				headers:{"TerminalCode":"m_game"},
				complete:function (xhr, status) {
                    
                }
			}
			//传入参数覆盖默认参数
			$.extend(ajaxSetting,obj);
			
			//等待动画
			if(!toastCount && obj.isShowToast){
    			
			}
			toastCount=toastCount+1;
			
			// contentType
            if ($.type(ajaxSetting.data) == "string") { //字符
                ajaxSetting.contentType = "text/html;charset=UTF-8";
            } else if ($.type(ajaxSetting.data) == "object") { //对象
                //文件上传
                if(ajaxSetting.data && ajaxSetting.data.file ){
                    //ajaxSetting.contentType = "multipart/form-data;";
                    ajaxSetting.contentType = "multipart/form-data; boundary=----WebKitFormBoundary77e7DDaBWVc4KfJw";
                }else{
                    ajaxSetting.data = JSON.stringify(obj.data);
                }
            }else if($.type(ajaxSetting.data) == "number"){ //数字
               // contentType = 'application/json';
				ajaxSetting.data +="";
            }
            
			//不允许覆盖参数及方法
			ajaxSetting.url=url;
			ajaxSetting.success=function (data) {
			         //关闭当前页面的toast
			         toastCount=toastCount-1;
					//是否开启等待动画，并是否需要关闭
			         if(!toastCount && obj.isShowToast){
                        //util.closeToast();
                    }
					
					//服务器拦截是否登录
                    if (data.content == 'unlogin') {
                        var url = window.location.pathname;
                        //alert("url:"+url+"ajaxSetting:"+url);
                        util.toLoginPage();
                        /**避免执行其他自定义动作**/
                        return;
                    } 
                    if (data.msgKey == "remembered") {
                        
                    }
                    
                    if (typeof(obj.success) == "function") {
                        obj.success(data);
                    }

            };
               ajaxSetting.error=function (e) {
                     toastCount=toastCount-1;
                     if(!toastCount && obj.isShowToast){
                        //util.closeToast();
                     }				                    
                    if (typeof(obj.error) == "function") {
                        obj.error(e);
                    }
                    //console.debug(e);
                };
               /** ajaxSetting.complete=function (xhr, status) {
                    //关闭当前页面的toast
                    util.closeToast();
                };**/
            //ajax请求
			$.ajax(ajaxSetting);
		},
		/**
		 * 分页 根据需要重写部分参数
		 *url, queryParam, templateMethod,onComplete
		 */
		page : function (options) {
			if (!isInitPage) {
				initPage();
				isInitPage = true;
			}
			$.extend(pageOptions, options);
			//每次调用重置分页的编号
			pageOptions.pageNo=1;
			pageList();
		},
		/**
		 * 获取地址栏参数
		 */
		getUrlParam : function () {
			var params = [];
			var search = document.location.search;
			var pattern = /[?&]([\w]+)=([^&]+)/g;
			var objStr = "",matcher;
			while ((matcher = pattern.exec(search)) != null) {
				objStr += "\"" + decodeURIComponent(matcher[1]) + "\":\"" + decodeURIComponent(matcher[2]) + "\","
			}
			if (objStr && objStr.charAt(objStr.length - 1) == ",") {
				objStr = objStr.substring(0, objStr.length - 1);
			}
			if (objStr) {
				return JSON.parse("{" + objStr + "}");
			}
			return null;
		},
		/**
		 * 判断是否是空
		 * @param value
		 */
		isDefine : function (value) {
			if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined') {
				return false;
			} else {
				value = value + "";
				value = value.replace(/\s/g, "");
				if (value == "") {
					return false;
				}
				return true;
			}
		},
		/**
         * 弹出框 btn只有一个时默认yes function
         * @param value
         */
		popup : function(obj){
		   //弹框默认参数可覆盖
           var defaults = {
                    title : "",
                    content : "",
                    style:"width: 50%;font-size: 1.2em;",
                    btn: ['确认','取消'],
                    calback:[function(index){
                    		
                    	},function(index){
                    		
                    	}],
                    hasIcon : true,
                    autoClose:true,
                    touchClass : 'btntan-active'
             };
            //传入参数覆盖默认参数
            $.extend(defaults,obj);
            //询问框
            layer.open({
                title: defaults.title,
                style:defaults.style,
                content: defaults.content,
                btn: defaults.btn,
                yes: function(index){
                	if(defaults.autoClose){
                		layer.close(index);
                	}
                	defaults.calback[0]();
                    
                },
                no: function(index){
                	if(defaults.autoClose){
                		layer.close(index);
                	}
                	defaults.calback[1]();
                }
            });
		},
        /**
         * 验证是否登陆
         * @param value
         */
        isLogin:function(pageName){
            var loginstate=util.locStorage.getVal('loginstate');
            try{//local只存储字符
            	loginstate=parseInt(loginstate);
            }catch(e){
            	util.toLoginPage(pageName);
            	return false;
            }
            //手动退出
            if(!loginstate){
            	util.toLoginPage(pageName);
            	return false;
            }
            //是否超过session有效期
            if(loginstate-new Date().getTime()>SESSION_LIVE){
                util.toLoginPage(pageName);
                return false;
            }
            return true;
        },
        /**
         * 跳转登陆页面
         * @param value
         */
        toLoginPage:function(pageName){
            //var url = window.location.pathname,loginUrl="binding-login.html";
            var url = window.location.pathname,loginUrl="binding-login.html";
                if(!pageName){
                    //个人中心
                    if(util.isSecMulu(url)){
                        //loginUrl="../binding-login.html";
                        loginUrl="../binding-login.html";
                    }
                }
                //进入登陆页面最后跳转地址
                util.locStorage.setVal('lastloginpage',pageName?pageName:url);
                //打开登陆
                window.location.href=loginUrl;
        },
        getLoginInfo:function(c){
            util.ajax({
                url : 'portal/user.cmd/center/base',
                success:function (data) {
                    if(data.status == 1){
                        //设置一个color到本地存储中
                      util.locStorage.setVal('loginuser',data.content);
                      //回调
                      if(typeof(c) == "function"){
                          c();
                      }
                    }else{
                      //获取错误
                    }
                }
            });
        },
        /**
         *处理图片路径 
         */
        upimg : function(imgpath,w,h){
                //校验
                if(!imgpath || !w || !h){
                    return util.config.attachment_url+imgpath;
                }
                var CLIPSTR="/compress",UNLINE="_",STAR="x",SUFFIX=".",SUFFIX=".",DFS="/";
                
                if(imgpath.indexOf(SUFFIX)<0 || imgpath.indexOf(DFS)<0 ){
                    return util.config.attachment_url+imgpath;
                }
                //不需要压缩的图片
                if(!util.needFilterImg(imgpath)){
                    return util.config.attachment_url+imgpath;
                }
                //分割图片路径
                var t=imgpath.substring(0,imgpath.lastIndexOf(DFS));
                var sindex=t.lastIndexOf(DFS);
                var starti=imgpath.substring(0,sindex);
                var endi=imgpath.substring(sindex,imgpath.length);
                var lindex=endi.lastIndexOf(SUFFIX);
                var e1=endi.substring(0,lindex);
                var e2=endi.substring(lindex,endi.length);
                if(imgpath.indexOf("http")<0){
                    starti=util.config.attachment_url+starti;
                }
                w=Math.round(w);
                h=Math.round(h);
                //拼接新的图片地址
                return starti+CLIPSTR+e1+UNLINE+w+STAR+h+e2;
        },
        /**
         *验证该图片是否需要压缩裁剪， 
         */
        needFilterImg:function (imgpath){
             //不是需要过滤的文件
           for (var i=0; i < FILTERIMG.length; i++) {
             if(imgpath.indexOf(FILTERIMG[i])>=0){
                        return true;
                }
           };
           return false;
        },
        /**
         * localStorage
         */
        locStorage:{
        		setVal:function(key,val){
        			if(typeof(val) == "object"){
        				val=JSON.stringify(val);
        			}
        			localStorage.setItem(key,val);
        		},
        		getVal:function(key){
        			return localStorage.getItem(key);
        		},
        		remove:function(key){
        			localStorage.removeItem(key);
        		}
        },
        //提示层
        openToast:function(msg,duration,position,type){
        	if($.type(msg) == "object"){
        		duration=msg.duration;
        		position=msg.position;
        		type=msg.type;
        	}
        	if(type == 1){//进度提示
        		//加载层
        		layer.open({type: 2});
        	}else{//消息提示
        		layer.open({
				    content: msg,
				    style: 'background-color: rgba(0, 0, 0, 0.7); color:#fff; border:none;',
				    time: duration
				});
        	}
        },
        //关闭提示层
        closeToast:function(){
        	layer.closeAll();
        },
    	//获取本地时间字符串
        getNowDate:function(date){
            var now=new Date();
            if(date){//空
                now=date;
            }
            return 1900+now.getYear()+"-"
            +(now.getMonth()+1<10?"0"+(now.getMonth()+1):now.getMonth()+1)+"-"
            +(now.getDate()<10?"0"+now.getDate():now.getDate())+" "
            +(now.getHours()<10?"0"+now.getHours():now.getHours())+":"
            +(now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes())+":"
            +(now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()); 
        }
        
	};
	

    //var util = $.extend({},methods,config);
	window.util = util;
	
	return util;
});
/**
 * 
 *
 *
 *
 ***/
