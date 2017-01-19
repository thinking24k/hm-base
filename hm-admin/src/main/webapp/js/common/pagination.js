/*
 * 分页插件模块(AMD)
 * 当前版本为基础
 * 此插件底层封装了twbs-pagination插件
 * 
 */

define([ 'jquery', 'utils','layer', 'widget', 'twbsPagination' ], function($, util,layer) {
	(function($, undefined) {
		$.widget("xxwl.pagination", {
			options : {
				prev : '<',
				next : '>',
				last : '',
				first : '',
				contentContainer : null,
				templateDom : null,
				templateMethod : function() {
					return ""
				},
				url : '',
				startPage : '1',
				totalPages : 1,
				visiblePages : 8,
				pageSize : 8,
				queryParam : {},
				onComplete: $.noop,
				onPageClick : null,
				isHttps: false,/**是否为https请求***/
				totalCount: 0/**总条数**/
			},
			_init : function() {
				var options = this.options;
				//弹出层
				//options.contentContainer.spin();
				//加载层-
				//layer.load();
				
				var _this = this;
				var onPageClick = options.onPageClick;
				if (!onPageClick || !onPageClick.wrapped) {// 包裹一层
					this.options.onPageClick = function(event, page) {
						_this._render(page);
						$.isFunction(onPageClick) && onPageClick(event, page)

					};
					this.options.onPageClick.wrapped = true;
				}

				options.href = null;
				this.element.removeData('twbs-pagination');
		//		this.element.twbsPagination(this.options);
				var page = options.startPage;
				this._render(page);
			},
			_render : function(page, pageSize, param) {
				var options = this.options;
				var queryParam = $.extend(true, {
					pageBean : {
						pageNo : page,
						pageSize : options.pageSize
					}
				}, options.queryParam, param);

				var url = options.url;
				var _this = this;
				
				util.ajaxJson(url, queryParam, function(result) {
				
					//加载层-此处关闭
					//layer.closeAll('loading');
					
					if (result.status == 0) {
						return;
					}
			//		options.contentContainer.spin('stop');
					var dataList = result.content.data;
					var templateMethod = options.templateMethod;
					var container = options.contentContainer.empty();
					dataList && $.each(dataList, function(i, item) {
						var html = templateMethod(item,i);
						container.append(html);
					});
					var totalPage = result.content.pageTotal;
					var visiblePages = _this.options.visiblePages;
					visiblePages = visiblePages > totalPage ? totalPage
							: visiblePages;
					if(totalPage<=0){
						totalPage = 1;
						page = 1;
						visiblePages=1;
					}
					totalPage = totalPage<page?page:totalPage;
					_this.refresh({
						startPage : result.content.pageIndex,
						totalPages : totalPage,
						visiblePages : visiblePages,
						totalCount : result.content.pageTotal
					});
					_this.options.onComplete.apply(_this,[result]);
					/**显示总条数**/
					_this.element.prev().find(".total-count").html(_this.options.totalCount);
					//_this.element.prepend("<li><span class=\"btn btn-default\">共" + _this.options.totalCount + "条</span></li>");
					/**显示总页数**/
					_this.element.next().find(".page-count").html(_this.options.totalPages);
					//_this.element.append("<li><span class=\"btn btn-default\">共" + _this.options.totalPages + "页</span></li>");
				});
				
			},
			refresh : function(settings) {
				var options = $.extend(this.options, settings)
				this.element.first().unbind('page');
				this.element.unbind();
				this.element.removeData('twbs-pagination');
				this.element.twbsPagination(options);
			},
			destroy : function() {
				this.element.removeData();
				this.element.unbind();
				this.element.detach();
			},
			getPageNo:function(){
				return this.options.startPage;
			}
			
		})
	})($);
})
