(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'utils'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery, window, document);
    }
}(function($, utils, undefined) {


    /*************************策略对象*****************************/

    var RULES = {
        isNonEmpty: function(value, errorMsg) {
            //不能为空
            if ($.trim(value)==='') {
            	$(this).val('');
                return errorMsg;
            }
        },
        minLength: function(value, length, errorMsg, dom) {
        	var len = value.length;
            if($(dom).is('textarea')){
            	var rows = 0
            	var index = 0;
            	while((index = value.indexOf('\n',index))!=-1){
            		index += 1;
            		rows++;
            	}
            	len += rows;//修正当文本域有多行时 长度不准确的情况  一个换行两个字符
            }
            if (len < length) {
                return errorMsg;
            }
        },
        maxLength: function(value, length, errorMsg, dom) {
            var len = value.length;
            if($(dom).is('textarea')){
            	var rows = 0
            	var index = 0;
            	while((index = value.indexOf('\n',index))!=-1){
            		index += 1;
            		rows++;
            	}
            	len += rows;//修正当文本域有多行时 长度不准确的情况  一个换行两个字符
            }
        	
            if (len > length) {
                return errorMsg;
            }
        },
        isMobile: function(value, errorMsg) {
        	if($.trim(value)===''){
        		return;
        	}
            //是否为手机号码
            if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(value)) {
                return errorMsg;
            }
        },
        isPhone: function(value, errorMsg) {
        	if($.trim(value)===''){
        		return;
        	}
        	//是否为座机号码号码
        	if (!/^[1-9]{1}[0-9]{5,8}$/.test(value)) {
        		return errorMsg;
        	}
        },
        isEmail: function(value, errorMsg) {
        	
        	if($.trim(value)===''){
        		return;
        	}
        	
            //是否为邮箱
            if (!/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(value)) {
                return errorMsg;
            }
        },
        isCardNo:function(value, errorMsg) {
            if($.trim(value)===''){
                return;
            }
            //是否为身份证号码
            if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
                return errorMsg;
            }
        },

        isRegisterEmail: function(v, msg){
        	if(!/^[a-zA-Z0-9][\w._]*@\w+\.(com|net|cn|org)$/.test(v)){
        		return msg;
        	}
        },
        between: function(value, range, errorMsg) {
            //大于小于
            var min = parseInt(range.split('-')[0]);
            var max = parseInt(range.split('-')[1]);
            if (value.length < min || value.length > max) {
                return errorMsg;
            }
        },
        name:function(value,errorMsg){
        	//英文(eg: Jack、 Tom Cruise、Blade.Pitt)名称 或者 纯中文名称
        	 if (!/^[A-Za-z]+([.\s]{1}[A-Za-z]+)?$/.test(value) && !/^[\u4e00-\u9fa5]+$/.test(value)) {
        		 return errorMsg;
             }
        },
        onlyEn: function(value, errorMsg) {
            //纯英文
            if (!/^[A-Za-z]+$/.test(value)) {
            	return errorMsg;
            }
        },
        nonezh: function(value, errorMsg) {
            //纯英文
            if (!/^[A-Za-z0-9]+$/.test(value)) {
            	return errorMsg;
            }
        },
        onlyZh: function(value, errorMsg) {
        	if($.trim(value)==''){
        		return;
        	}
            //纯中文
            if (!/^[\u4e00-\u9fa5]+$/.test(value)) {
                return errorMsg;
            }
        },
        onlyNum: function(value, errorMsg) {
            //数字包含小数
            if (!/^[0-9]+([.][0-9]+){0,1}$/.test(value)) {
                return errorMsg;
            }
        },
        onlyInt: function(value, errorMsg) {
            //整数
            if (!/^[0-9]*$/.test(value)) {
                return errorMsg;
            }
        },
        isChecked: function(value, errorMsg, el) {
            var i = 0;
            var $collection = $(el).find('input:checked');
            if(!$collection.length){
                return errorMsg;
            }
        },
        checkUser:function(value,errorMsg){
        	if($.trim(value)==''){
        		return;
        	}
        	var va = "{\"username\":\"" + value + "\"}";
        	var status = true;
        	var result = $.ajax({
    			url : utils.sdp_https_url + "base/login.cmd/checkuser",
    			dataType : "json",
    			data : JSON.stringify(JSON.parse(va)),
    			async : false,
    			cache : false,
    			type : "post",
    			contentType : "application/json"
    		});
        	var ret = JSON.parse(result.responseText);
        	if(ret.status==1){
				;
			}else{
				return errorMsg;
			}

        },
        operator:function(value,errorMsg){
        	if($.trim(value)==''){
        		return;
        	}
       // 	var va = "{\"username\":\"" + value + "\"}";
        	var status = true;
        	var result = $.ajax({
        		url : utils.sdp_https_url + "base/login.cmd/isoperator/"+value,
        		dataType : "json",
       // 		data : JSON.stringify(JSON.parse(va)),
        		async : false,
        		cache : false,
        		type : "get",
        		contentType : "application/json"
        	});
        	var ret = JSON.parse(result.responseText);
        	if(ret.status==1){
        		;
        	}else{
        		return errorMsg;
        	}
        	
        },
        //请与onlyInt 配合使用 
        biggerOrEqualThan:function(value,targetId,errorMsg){
        	var targetValue = $('#'+targetId).val();
        	if(/\d{1,}/.test(targetValue)){
        		var targetIntValue = parseInt(targetValue);
        		var intValue = parseInt(value);
        		if(targetIntValue>intValue){
        			return errorMsg
        		}
        	}
        },
        biggerThan: function(v, el, msg){/**验证大于某指定元素值***/
        	var targetValue = $("#" + el).val();
        	if(/\d{1,}/.test(targetValue)){
        		var targetIntValue = parseInt(targetValue);
        		var intValue = parseInt(v);
        		if(targetIntValue >= intValue){
        			return msg
        		}
        	}
        },
        //同上
        smallOrEqualThan:function(value,targetId,errorMsg){
        	var targetValue = $('#'+targetId).val();
        	if(/\d{1,}/.test(targetValue)){
        		var targetIntValue = parseInt(targetValue);
        		var intValue = parseInt(value);
        		if(targetIntValue<intValue){
        			return errorMsg
        		}
        	}
        },
        smallThan: function(v, el, msg){/**验证小于指定元素值***/
        	var targetValue = $("#" + el).val();
        	if(/\d{1,}/.test(targetValue)){
        		var targetIntValue = parseInt(targetValue);
        		var intValue = parseInt(v);
        		if(targetIntValue <= intValue){
        			return msg
        		}
        	}
        },
        min: function(value, min, errorMsg){/**验证正整数大于等于某值***/
        	 if (!(/^[0-9]+$/.test(value) && parseInt(value) >= min)) {
                 return errorMsg;
             }
        },        
        max: function(v, max, msg){/**验证正整数小于等于某值***/
        	if (!(/^[0-9]+$/.test(v) && parseInt(v) <= max)) {
                return msg;
            }
        },
        dateAfter:function(value, elementId, errorMsg){
        	if(value==''){
        		return;
        	}
        	var $this = $(this);
        	
        	value = value.replace(/-/g,'/');
        	var ownDate = new Date(value);
        	if(!$.isNumeric(ownDate.getTime())){
        		return "请输入正确格式的日期"
        	}
        	var targetVal = $('#'+elementId).val();
        	if(!targetVal || $.trim(targetVal)==''){
        		return;
        	}
        	var targetDate = new Date(targetVal.replace(/-/g,'/'));
        	
        	if(ownDate.getTime()<=targetDate.getTime()){
        		return errorMsg;
        	}
        	
        },
        // valid fullDateFmt : 'yyyy-MM-dd HH:mm:ss';
        dateBefore:function(value, elementId, errorMsg){
        	if(value==''){
        		return;
        	}
        	var $this = $(this);
        	
        	value = value.replace(/-/g,'/');
        	var ownDate = new Date(value);
        	if(!$.isNumeric(ownDate.getTime())){
        		return "请输入正确格式的日期"
        	}
        	var targetVal = $('#'+elementId).val();
        	if(!targetVal || $.trim(targetVal)==''){
        		return;
        	}
        	var targetDate = new Date(targetVal.replace(/-/g,'/'));
        	
        	if(ownDate.getTime()>=targetDate.getTime()){
        		return errorMsg;
        	}
        	
        },
        pwdValidation: function(value, errorMsg){/**密码验证规则***/
        	if(!/^[a-zA-Z0-9!@#$%^&*()._+=-~]{6,30}$/.test(value)){
        		return errorMsg;
        	}
        },
        pwdMulti: function(value, errorMsg){/**不能为纯字母或数字***/
        	if(/^[a-zA-Z]+$|^[0-9]+$/.test(value)){
        		return errorMsg;
        	}
        },
        numberContinue: function(value, errorMsg){/**不能出现连续相同或增长数字***/
        	if(value && value.length >= 6){
				/***统计相同数字次数***/
				var count = 0;
				/**统计连续数字次数***/
				var continousCount = 0;
				var prev = value.charAt(0);
				for(var i = 1; i < value.length; i++){
					var tmp = value.charAt(i);
					if(/^\d$/.test(tmp) && /^\d$/.test(prev)){
						if(tmp - prev == 0){
							count ++;
						} else {
							count = 0;
						}
						if(tmp - prev == 1){
							continousCount ++;
						} else {
							continousCount = 0;
						}
						/**判断5次重复或连续***/
						if(count >= 4 || continousCount >= 4)
							return errorMsg;
					} else {
						count = 0;
						continousCount = 0;
					}
					prev = tmp;
				}
			}
        },
        formsame: function(v, el, msg){/**不能与表单中el对应值相同***/
        	if(v == $(this).parents("form").find(el).val() ||
        			v == $(this).parents("form").find(el).text())
        		return msg;
        },
        formshouldsame: function(v, el, msg){/**应该与表单中el对应值相同****/
        	if(v != $(this).parents("form").find(el).val())
        		return msg;
        },
        checkexists: function(v, param, msg){/**检测数据是否已存在，存在时会返回错误信息***/
        	/**参数说明，以^^分割，第一个参数为请求验证的URL地址，第二个参数为对应验证变量名***/
        	var $this = $(this);
        	/**如果数据相同，不再次请求后台判断**/
        	if($this.data("lastVal") && v == $this.data("lastVal")){
        		return $this.data("lastValTip");
        	}
        	var array=param.split("^^");
        	var thisUrl = array[0];
        	var pp = array[1];
        	var oldVal=$this.attr("oldVal");
        	//旧的值
        	if(oldVal && v ==oldVal){
        		return ;
        	}
        	//var pp = param.split("^^")[1];
        	var va = "{\"" + pp + "\":\"" + v + "\"}";
        	var def = $.ajax({
    			url : utils.sdp_url + thisUrl,
    			dataType : "json",
    			data : JSON.stringify(JSON.parse(va)),
    			async : false,
    			cache : false,
    			type : "post",
    			contentType : "application/json"
    		});
        	var ret = JSON.parse(def.responseText);
        	$this.data("lastVal", v);
        	if(ret.status == 0){
        		$this.data("lastValTip", msg);
        		return msg;
        	} else {
        		$this.removeData("lastValTip");
        	}
        },
        checkexistsnot: function(v, param, msg){/**检测数据是否已存在，不存在时会返回错误信息***/
        	/**参数说明，以^^分割，第一个参数为请求验证的URL地址，第二个参数为对应验证变量名***/
        	var $this = $(this);
        	/**如果数据相同，不再次请求后台判断**/
        	if($this.data("lastVal") && v == $this.data("lastVal")){
        		return $this.data("lastValTip");
        	}
        	var thisUrl = param.split("^^")[0];
        	var pp = param.split("^^")[1];
        	var pp2 = param.split("^^")[2];
        	var va = "{\"" + pp + "\":\"" + v + "\"" +
        		(pp2 ? (",\"" + pp2 + "\":\"" + $this.closest("form").find("[name=" + pp2 + "]").val() + "\"") : "")
        		+ "}";
        	var def = $.ajax({
    			url : utils.sdp_url + thisUrl,
    			dataType : "json",
    			data : JSON.stringify(JSON.parse(va)),
    			async : false,
    			cache : false,
    			type : "post",
    			contentType : "application/json"
    		});
        	var ret = JSON.parse(def.responseText);
        	$this.data("lastVal", v);
        	if(ret.status == 1){
        		$this.data("lastValTip", msg);
        		return msg;
        	} else {
        		$this.removeData("lastValTip");
        	}
        },
        checkValidateCode: function(v, param, msg){/**验证码验证**/
        	/**参数说明，第一个为请求URL地址，第二个为参数的JSON字符串形式***/
        	var $this = $(this);
        	/**如果数据相同，不再次请求后台判断**/
        	/*if($this.data("lastVal") && v == $this.data("lastVal")){
        		return $this.data("lastValTip");
        	}*/
        	/**将参数的&&换回冒号***/
        	param = param.replace(new RegExp(/(&&)/g), ":");
        	/**将单引号转为双引号**/
        	param = param.replace(new RegExp(/(')/g), "\"");
        	var thisUrl = param.split("^^")[0];
        	var paramStr = param.split("^^")[1];
        	var pp = JSON.parse(param.split("^^")[1]);
        	/**设置值**/
			for(var a in pp){
				if(pp[a] == "this"){
					pp[a] = v;
				} else if(pp[a].indexOf("jq##") == 0){
					var t1 = pp[a].split("##")[1];
					pp[a] = $this.parents("form").find(t1).val() || $this.parents("form").find(t1).text();
					if(!pp[a]){
						return "请先点击发送验证码";
					}
				}
			}
        	var def = $.ajax({
    			url : utils.sdp_url + thisUrl,
    			dataType : "json",
    			data : JSON.stringify(pp),
    			async : false,
    			cache : false,
    			type : "post",
    			contentType : "application/json",
    		});
        	var ret = JSON.parse(def.responseText);
        	$this.data("lastVal", v);
    		$this.removeData("validateTime");
    		$this.removeData("validateToken");
        	if(ret.status == 0){
        		$this.data("lastValTip", msg);
        		return msg;
        	} else {
        		/**验证通过，绑定数据**/
        		if(ret.content){
            		$this.data("validateTime", ret.content.time);
            		$this.data("validateToken", ret.content.token);
            	} 
        		$this.removeData("lastValTip");
        	}
        },
        checkUsername: function(v, msg){/**用户名校验***/
        	if(!/^[a-zA-Z0-9_]{4,16}$/.test(v)){
        		return msg;
        	}
        },
        idcardValidate: function(v, msg){/**身份证校验***/
        	if(!idcardValidate(v))
        		return msg;
        },
        isAdult: function(v, msg){/**校验年龄是否超过18，会首先校验身份证号是否通过***/
        	if(!isAdult(v)){
        		return msg;
        	}
        },
        bankCardValidate: function(v, msg){/**银行卡号Luhm基本校验***/
        	if(!bankCardValidate(v))
        		return msg;
        },
        floatBetween: function(v, param, msg){/**判断小数范围，负数的符号解析会有问题***/
        	if(v && parseFloat(v) >= 0){
                var minFloat = parseFloat(param.split('-')[0]);
                var maxFloat = parseFloat(param.split('-')[1]);
                if(minFloat <= v && v <= maxFloat){
                	return;
                }
        	}
        	return msg;
        },
        decimalCheck: function(v, param, msg){/**判断整数部分和小数部分位数是否符合要求****/
        	if(v){
        		/**整数位数**/
        		var integerCount = parseInt(param.split("-")[0]);
        		/**小数位数***/
        		var decimalCount = parseInt(param.split("-")[1]);
        		/**分割字符串判断***/
        		var s1 = (v + "").split(".");
        		/**只有整数部分***/
        		if(s1.length == 1){
        			if(s1[0].length <= integerCount){
        				return;
        			}
        		} else if(s1.length == 2){
        			if(s1[0].length <= integerCount && s1[1].length <= decimalCount){
        				return;
        			}
        		}
        	}
        	return msg;
        },
        upCountCheck: function(v, param, msg){/**赛事发布，晋级数校验***/
        	var $this = $(this).closest(".twoStageSetting");
        	/**设置的晋级人数***/
			var upNumber = $this.find("input[name=upcount]").val();
			/**判断不能超过设置的上限值***/
			var $1 = $("#element_123");
			if($1.length && $1.val()){
				if(parseInt(upNumber) > parseInt($1.val())){
					return "不能超过报名人数上限";
				}
			}
    		/**设置的分区数**/
    		var areaNum = $this.find("select[name=areaCount]").val();
    		/**如果第一阶段选择淘汰赛***/
    		if($this.find("select[name=matchType]").val() == 89){/**淘汰赛判断晋级人数***/
    			var checkResult = false;
    			/**2的冪值***/
    	    	var mi = [];
    	    	var c1 = 0;
    	    	while(c1 <= 20){
    	    		mi.push(Math.pow(2, c1 ++));
    	    	}
    			$.each(mi, function(i, item){
    				if(parseInt(upNumber) == item){
    					checkResult = true;
    					return false;
    				}
    			});
    			if(!(checkResult && parseInt(upNumber) >= parseInt(areaNum))){
    				if(areaNum == 1){
    					return "淘汰赛晋级数必须为2的次方值";
    				}
    				return "淘汰赛晋级数不能小于分区数且必须为2的次方值";
    			}
    		} else {/**循环赛判断为分区的倍数即可***/
    			if(!(Math.floor(upNumber) == upNumber && Math.floor(areaNum) == areaNum &&
    				parseInt(upNumber) % parseInt(areaNum) == 0)){
    				return "循环赛晋级数必须为分区数的整数倍";
    			}
    		}
        },
        twoStageSecondMatchRuleCheck: function(v, param, msg){/**第二阶段赛事赛制选择校验***/
        	var $this = $(this).closest(".twoStageSetting");
        	/**判断晋级人数，第二阶段是否能够选择淘汰赛***/
    		var $s = $this.find(".stageTwo select[name=matchType]");
    		/**设置的晋级人数***/
			var upNumber = $this.find("input[name=upcount]").val();
    		/**选择淘汰赛，判断晋级人数是否符合要求***/
    		if($s.val() == 89){
    			var checkResult = false;
    			/**2的冪值***/
    	    	var mi = [];
    	    	var c1 = 0;
    	    	while(c1 <= 20){
    	    		mi.push(Math.pow(2, c1 ++));
    	    	}
    			$.each(mi, function(i, item){
    				if(upNumber == item){
    					checkResult = true;
    					return false;
    				}
    			});
    			if(!checkResult){
    				return "根据你设定的晋级人数，第二阶段不能选择淘汰赛";
    			}
    		}
        }
    };

    /*************************Validator类*****************************/

    var setting = {
        type: null,
        onBlur: null,
        onFocus: null,
        onChange: null,
        successTip: true
    };

    var Validator = function() {
        this.cache = [];
    };

    Validator.prototype.add = function(dom, rules) {
        var self = this;
        for (var i = 0, rule; rule = rules[i++];) {
            (function(rule) {
                var strategyAry = rule.strategy.split(':');
                var errorMsg = rule.errorMsg
                self.cache.push(function() {
                    var strategy = strategyAry.shift(); // 前删匹配方式并赋值
                    strategyAry.unshift(dom.value); // 前插value值
                    strategyAry.push(errorMsg); // 后插出错提示
                    strategyAry.push(dom); // 后插dom
                    if (!RULES[strategy]) {
                        $.error('没有' + strategy + '规则，请检查命名或自行定义');
                    }
                    return {
                        errorMsg: RULES[strategy].apply(dom, strategyAry),
                        el: dom
                    };
                });
            }(rule));
        }
    };

    Validator.prototype.start = function() {
        var result;
        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            var result = validatorFunc();
            if (setting.successTip) {
                new Validator().showMsg($(result.el), '', 1);
            }
            if (result.errorMsg) {
                return result;
            }

        };
        return true;
    };

    Validator.prototype.showMsg = function(target, msg, status, callback) {
        //status
        // 0 : tip
        // 1 : success
        // 2 : error
        var _current = status ? (status > 1 ? 'error' : 'success') : 'tip';
        var $context = target.parent();
        var $msg = $context.find('.valid_message');
        var _other = target.attr('data-type') || '';
        $msg.remove();
        $context.removeClass('success tip error').addClass(_current+' '+_other);
        
        if(target.hasClass("can-empty") && target.val()==''){
        	return;
        }
        $context.append('<span class="valid_message">' + msg + '</span>');
    };

    var plugin = {
        init: function(options) {
            var $form = this;
            var $body = $('body');
            var $required = $form.find('.required');
            setting = $.extend(setting, options);

            if (setting.type) {
                $.extend(RULES, setting.type);
            }

            var validator = new Validator();

            $body.on({
                focus: function(event) {
                    var $this = $(this);
                    var _tipMsg = $this.attr('data-tip') || '';
                    var _status = $this.attr('data-status');
                    if (_status === undefined ||!parseInt(_status)) {
                        validator.showMsg($this, _tipMsg);
                    }
                    setting.onFocus ? setting.onFocus.call($this, arguments) : '';
                },
                blur: function(event) {
                    var $this = $(this);
                    if(!$this.hasClass("can-empty") || !$this.val()==""){
                    	var dataValid = $this.attr('data-valid');
                    	var validLen = dataValid.split('||');
                    	var errCollection = $this.attr('data-error');
                    	var errMsgAry = errCollection.split("||");
                    	var strategyAry, strategy, errMsg;
                    	
                    	for (var i = 0; i < validLen.length; i++) {
                    		strategyAry = validLen[i].split(':');
                    		strategy = strategyAry.shift();
                    		strategyAry.unshift(this.value);
                    		strategyAry.push(errMsgAry[i]);
                    		strategyAry.push(this);
                    		errMsg = RULES[strategy].apply(this, strategyAry);
                    		if (errMsg) {
                    			$this.attr('data-status', 0);
                    			validator.showMsg($this, errMsg, 2);
                    			break;
                    		}
                    	};
                    	
                    	if (!errMsg) {
                    		$this.attr('data-status', 1);
                    		setting.successTip ? validator.showMsg($this, '', 1) : $this.parent().find('.valid_message').remove();
                    	}
                    	//可以为空  不校验
                    	var $this = $(this);
                    	var $parent = $this.parent();
                    	var _status = parseInt($this.attr('data-status'));
                    	$parent.removeClass('active');
                    	//输入可以为空，值为空不加成功的样式
                    	
                    	if (!_status) {
                    		$parent.addClass('error');
                    	}
                    }else{
                    	// $this.hasClass("can-empty") && !$this.val()==""
                    	 $this.parent().removeClass('success');
                    	 var _tipMsg = $this.attr('data-tip') || '';
                         var _status = $this.attr('data-status');
                         if (_status === undefined ||!parseInt(_status)) {
                             validator.showMsg($this, _tipMsg);
                         }
                    }

                    setting.onBlur ? setting.onBlur.call($this, arguments) : '';
                },
                change: function(event) {
                    setting.onChange ? setting.onChange.call($this, arguments) : '';
                }
            }, '.required');


        },
        submitValidate: function(options) {
            var $form = options || this;
            var $body = $('body');
            var $required = $form.find('.required');
            var validator = new Validator();
            var $target;

            $.each($required, function(index, el) {
                var $el = $(el);
                var dataValid = $el.attr('data-valid');
                var validLen = dataValid.split('||');
                var errCollection = $el.attr('data-error');
                var errMsgAry = errCollection.split("||");
                var ruleAry = [];

                if($el.hasClass("can-empty")){//输入可以为空，值为空不加成功的样式
                    if($el.val()==""){
                        $el.parent().removeClass("success");
                        return;
                    }
                }

                for (var i = 0; i < validLen.length; i++) {
                    ruleAry.push({
                        strategy: validLen[i],
                        errorMsg: errMsgAry[i]
                    });
                };

                validator.add(el, ruleAry);

            });

            var result = validator.start();

            if (result.errorMsg) {
                $target = $(result.el);
                //$target.attr('data-status', 0)[0].focus();
                validator.showMsg($target, result.errorMsg, 2);
                /**滚动到对应位置**/
                if(!$form.data("pin"))
                	window.scrollTo(0, $target.offset().top);
                return false;
            }


            return true;
        }
    };

    $.fn.validate = function() {
        var method = arguments[0];
        if (plugin[method]) {
            method = plugin[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if (typeof(method) == 'object' || !method) {
            method = plugin.init;
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.validate Plugin');
            return this;
        }
        return method.apply(this, arguments);
    }
    
    /**身份证号码校验**/
    function idcardValidate(value){
    	/**正则校验**/
    	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    	if(reg.test(value)){
    		var arr = value.split("");
    		if(arr.length == 18){
    			/**尾号校验***/
    			/**加权因子**/
    			var wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    			/**身份证验证位值.10代表X**/
    			var valideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    			/**声明加权求和变量***/
    			var sum = 0;   
    		    if (arr[17].toLowerCase() == 'x') {
    		    	/**将最后位为x的验证码替换为10方便后续操作**/
    		    	arr[17] = 10;   
    		    }
    		    /**加权求和***/
    		    for(var i = 0; i < 17; i++) {
    		        sum += wi[i] * arr[i];   
    		    }
    		    /****得到验证码所位置***/
    		    var valCodePosition = sum % 11; 
    		    if (arr[17] == valideCode[valCodePosition]) {
    		    	/**生日校验***/
        		    var year =  value.substring(6, 10);
        		    var month = value.substring(10, 12);
        		    var day = value.substring(12, 14);
        		    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        		    /**这里用getFullYear()获取年份，避免千年虫问题**/
        		    if(temp_date.getFullYear() != parseFloat(year)
        		    		|| temp_date.getMonth() != parseFloat(month) - 1
        		    		|| temp_date.getDate() != parseFloat(day)){
        		    	return false;
        		    } else {
        		    	return true;
        		    }
    		    } else {
    		        return false;
    		    }
    		} else if(arr.length == 15){
    			var year =  value.substring(6, 8);
    			var month = value.substring(8, 10);
    		    var day = value.substring(10, 12);
    		    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    		    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
    		    if(temp_date.getYear() != parseFloat(year)
    		              || temp_date.getMonth() != parseFloat(month) - 1
    		              || temp_date.getDate() != parseFloat(day)){
    		    	return false;
    		    } else {
    		    	return true;
    		    }
    		}
    	}
    	return false;
    }
    /**校验身份证年龄是否满18***/
    function isAdult(value){
    	if(idcardValidate(value)){
    		if(value.length == 18){
    			var year =  value.substring(6, 10);   
    		    var month = value.substring(10, 12);   
    		    var day = value.substring(12, 14);   
    		    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    		    var nowYear = new Date().getFullYear();
    		    /**判断年份差是否大于18**/
    		    if(nowYear - temp_date.getFullYear() < 18){
    		        return false;   
    		    }else{   
    		        return true;   
    		    }  
    		}else if(value.length == 15){
    			var year =  code.substring(6, 8);   
    			var month = code.substring(8, 10);   
    			var day = code.substring(10, 12);   
    			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));   
    			var nowYear = new Date().getFullYear();
    			/***判断年份差是否大于18***/
    			if(nowYear - temp_date.getFullYear() < 18){
    				return false;   
    			} else {   
    				return true;   
    			} 
    		}
    	}
    	return false;
    }
    
    
    /**银行卡号规则校验**/
    function bankCardValidate(value){
    	if(/^\d+$/.test(value) && value.length >= 16 && value.length <= 19){
    		/**校验银行卡开头***/
    		var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";    
    	    if (strBin.indexOf(value.substring(0, 2)) != -1) {
    	    	/**取出最后一位（与luhm进行比较）****/
    	    	var lastNum = value.substr(value.length - 1, 1);
    	        /**前15或18位***/
    	        var first15Num = value.substr(0, value.length - 1);
    	        var newArr = new Array();
    	        /**前15或18位倒序存进数组***/
    	        for(var i = first15Num.length - 1; i > -1; i--){
    	            newArr.push(first15Num.substr(i, 1));
    	        }
    	        /**奇数位*2的积 <9**/
    	        var arrJiShu = new Array();
    	        /**奇数位*2的积 >9***/
    	        var arrJiShu2 = new Array();
    	        /**偶数位数组***/
    	        var arrOuShu = new Array();
    	        for(var j = 0; j < newArr.length; j++){
    	        	/**奇数位***/
    	            if((j + 1) % 2 == 1){
    	                if(parseInt(newArr[j]) * 2 < 9)
    	                	arrJiShu.push(parseInt(newArr[j]) * 2);
    	                else
    	                	arrJiShu2.push(parseInt(newArr[j]) * 2);
    	            } else {/**偶数位**/
    	            	arrOuShu.push(newArr[j]);
    	            }
    	        }
    	        /**奇数位*2 >9 的分割之后的数组个位数**/
    	        var jishu_child1 = new Array();
    	        /**奇数位*2 >9 的分割之后的数组十位数**/
    	        var jishu_child2 = new Array();
    	        for(var h = 0; h < arrJiShu2.length; h++){
    	            jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    	            jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    	        }        
    	        
    	        /**奇数位*2 < 9 的数组之和**/
    	        var sumJiShu = 0;
    	        /**偶数位数组之和***/
    	        var sumOuShu = 0;
    	        /**奇数位*2 >9 的分割之后的数组个位数之和**/
    	        var sumJiShuChild1 = 0;
    	        /**奇数位*2 >9 的分割之后的数组十位数之和**/
    	        var sumJiShuChild2 = 0;
    	        /**总和**/
    	        var sumTotal = 0;
    	        for(var m = 0; m < arrJiShu.length; m++){
    	            sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    	        }
    	        for(var n = 0;n < arrOuShu.length; n++){
    	            sumOuShu = sumOuShu+parseInt(arrOuShu[n]);
    	        }
    	        for(var p = 0; p < jishu_child1.length; p++){
    	            sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    	            sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    	        }      
    	        /***计算总和***/
    	        sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) +
    	        	parseInt(sumJiShuChild2);
    	        /***计算Luhm值***/
    	        var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;        
    	        var luhm= 10 - k;
    	        if(lastNum == luhm){
    	        	return true;
    	        } else {
    	        	return false;
    	        }   
    	    }
    	}
    	return false;
    }
}));
