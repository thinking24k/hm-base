/* TYPE YOUR JAVA SCRIPT HERE */
require(['jquery','utils',"layer",'jq-validation'],function($,utils,layer){
	
	
	  //表单提交
    $('.loginbtn').click(function(){
        
        var username = $(".loginform input[name='username']").val();
        var pwd = $(".loginform input[name='pwd']").val();
        if (!username) {
        	layer.msg('用户名不能为空.');
            return;
        }
        if (!pwd) {
        	layer.msg('密码不能为空.');
            return;
        }
        doLogin(username,pwd);
    });
	
	  //登陆
    function doLogin(username,pwd) {
    	var subdata={
                username: username,
                pwd: pwd
                }
    	var rememberme=$(".loginform input[name='rememberme']:checked").val();
    	if(rememberme){
    		subdata.rememberme=rememberme;
    	}
        utils.ajax({
            url: 'tk/main/user/dologin',
            data:subdata ,
            success: function (data) {
                if (data.status == 1) {
                    //设置一个color到本地存储中
                    utils.sessionStorage.setVal('sessiontime', new Date().getTime());
                    utils.sessionStorage.setVal('loginuser', data.content);
                    window.location.href = "view/table.jsp";
                } else {
                	layer.msg('登录失败，请检查用户名及密码是否输入正确.');
                }
            },
            complete: function (xhr, status) {

            }
        });

        return false;
    }
});
