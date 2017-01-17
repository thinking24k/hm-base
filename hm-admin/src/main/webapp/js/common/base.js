(function(){
		var pathName =  window.document.location.pathname;
		var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
		window.appName = window.location.origin+projectName+"/";
		if(appName.indexOf('jsessionid')!=-1){
			appName += '/';
		}
		require.config({
			baseUrl: appName+'js',
			paths : {
				'jquery' 		: 'lib/jquery/1.11.3/jquery',
				'jq-validation' : 'lib/jquery/validation/jquery-validate',
				'jq-form' 		: 'lib/jquery/form/jquery.form.min',
				'widget' 		: 'lib/jquery/jquery-ui/1.11.4/jquery-ui.widget',
				'twbsPagination': 'lib/jquery/pagination/jquery.twbsPagination',
				'pagination' 	: 'common/pagination',
				'layer' 		: 'lib/layer2.4/layer',
				'utils'         : 'common/utils',
				/*Vendor JS*/			
				'jq-migrate'    : 'lib/assets/vendor/js/jquery-migrate-1.2.1.min',
				'bootstrap'     : 'lib/assets/vendor/bootstrap/js/bootstrap.min',
				'skycons'    	: 'lib/assets/vendor/skycons/js/skycons',
				/*Theme JS*/			
				'jq-mmenu'    	: 'lib/assets/js/jquery.mmenu.min',
				'core'     		: 'lib/assets/js/core.min',
				/*Pages JS*/			
				'jq-table'    	: 'lib/assets/js/pages/table',
				/*Head Libs*/			
				'modernizr'    	: 'lib/assets/plugins/modernizr/js/modernizr',
				'datepicker'	: 'lib/plugins/bootstrap-datepicker/js/bootstrap-datepicker'
			},
			shim:{
				'twbsPagination':{
					deps: ['jquery']
				},
				'layer':{
					deps: ['jquery']
				},
				'jq-migrate':{
					deps: ['jquery']
				},
				'bootstrap':{
					deps: ['jquery']
				},
				'jq-mmenu':{
					deps: ['jquery']
				},
				'core':{
					deps: ['jquery']
				},
				'jq-table':{
					deps: ['jquery']
				}
			}
		});
		
		require.config({
			baseUrl: appName+'js/',
			packages: [/* 
			           {
			               name: 'echarts',
			               location: 'lib/echarts',
			               main: 'echarts'
			           },
			           {
			               name: 'zrender',
			               location: 'lib/zrender',
			               main: 'zrender'
			           } */
			       ]
		});
	})();