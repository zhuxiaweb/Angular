/*================登录控制器开始====================*/
IshopMobile.controller("loginCtrl", function($scope, $window, $location, $http) {
	$scope.title = "登录";
	$scope.h_backTo = true;
	$scope.type = 'password';
	$scope.account_remove = function(){
		$scope.account = '';
	};
	$scope.password_remove = function(){
		$scope.password = '';
	};
	$scope.security_remove = function(){
		$scope.security = '';
	};
	$scope.change_type = function(){
		if($scope.show == 'show'){
			$scope.show = '';
			$scope.type = 'password';
		}else{
			$scope.type = 'text';
			$scope.show = 'show';
		}
	};
	//两周内自动登录
	$scope.keep_loginInfor = function(){
		if($scope.check_keep == 'check'){
			$scope.check_keep = '';
		}else{
			$scope.check_keep = 'check';
		}
	};
});
/*================登录控制器结束====================*/

/*================绑定手机控制器开始====================*/
IshopMobile.controller("bindTelCtrl", function($scope, $window, $location, $http, $interval) {
	$scope.title = "绑定手机";	
	$scope.h_backTo = true;
	$scope.h_bind = true;
	$scope.tel_remove = function(){
		$scope.tel = '';
	};
	$scope.security_remove = function(){
		$scope.security = '';
	};
	$scope.text = "获取验证码";
	$scope.getCode = function(){
		var reg = /1[3|4|5|7|8|][0-9]{9}/;
		if (!reg.test($scope.tel)) {
			baison.alert("请输入正确的电话号码");
			return;
		}
		$scope.num = 60;
		$scope.text = $scope.num+'s重新获取';
		var time = $interval(function(){
			$scope.num--;
			$scope.text = $scope.num+'s重新获取';
			if($scope.num == 0){
				$interval.cancel(time);
				$scope.text = '重新获取';
			};
		},1000);
	};
	//监听手机和验证码
	$scope.$watch('tel', function() {
		if($scope.tel.length == 11){
			$scope.ecurit_code = "current";
		}else{
			$scope.ecurit_code = "";
		}
	});
	$scope.$watch('security', function() {
		if($scope.security.length == 4 && typeof $scope.tel != 'undefined' && $scope.tel != ''){
			$scope.bind_code = "current";
		}else{
			$scope.bind_code = "";
		}
	});
	//绑定手机
	$scope.go_bind = function(){
	};
});
/*================绑定手机控制器结束====================*/

/*================忘记密码控制器开始====================*/
IshopMobile.controller("retrievePasswordCtrl", function($scope, $window, $location, $http, $interval) {
	$scope.title = "忘记密码";	
	$scope.h_backTo = true;
	$scope.hide = "none"
	$scope.text = "获取验证码";
	//删除输入
	$scope.account_remove = function(){
		$scope.account = '';
	};
	$scope.security_remove = function(){
		$scope.security = '';
	};
	$scope.security_img_remove = function(){
		$scope.security_img = '';
	};
	//倒计时
	$scope.getCode = function(){
		$scope.num = 60;
		$scope.text = $scope.num+'s重新获取';
		var time = $interval(function(){
			$scope.num--;
			$scope.text = $scope.num+'s重新获取';
			if($scope.num == 0){
				$interval.cancel(time);
				$scope.text = '重新获取';
			};
		},1000);
	};
	//监听是否输入帐号
	$scope.$watch('account', function() {
		if($scope.account != '' && typeof $scope.account != 'undefined'){
			$scope.ecurit_code = "current";
		}else{
			$scope.ecurit_code = "";
		}
	});
	$scope.$watch('security', function() {
		if($scope.security.length == 4 && typeof $scope.account != 'undefined' && $scope.account != ''){
			$scope.bind_code = "current";
		}else{
			$scope.bind_code = "";
		}
	});
});
/*================忘记密码控制器结束====================*/

/*================忘记密码下一步控制器开始====================*/
IshopMobile.controller("retrievePasswordNextCtrl", function($scope, $window, $location, $http) {
	$scope.title = "忘记密码";	
	$scope.h_backTo = true;
	$scope.type = 'password';
	//输入新密码操作
	$scope.new_password_remove = function(){
		$scope.new_password = '';
	};
	$scope.change_type = function(){
		if($scope.show == 'show'){
			$scope.show = '';
			$scope.type = 'password';
		}else{
			$scope.type = 'text';
			$scope.show = 'show';
		}
	};
	//监听输入新密码
	$scope.$watch('new_password', function() {
		if($scope.new_password != '' && typeof $scope.new_password != 'undefined'){
			$scope.bind_code = "current";
		}else{
			$scope.bind_code = "";
		}
	});
});
/*================忘记密码下一步控制器结束====================*/

/*================注册页面控制器开始====================*/
IshopMobile.controller("registerCtrl", function($scope, $window, $location, $http, $interval) {
	$scope.title = "注册";	
	$scope.h_backTo = true;
	$scope.type = 'password';
	$scope.typed = 'password';
	$scope.text = "获取验证码";
	$scope.reg_tel_btn = "";
	$scope.reg_mail_btn = "none";
	$scope.index = 1;
	$scope.register_way = function(x){
		if(x == 1){
			$scope.mail = "";
			$scope.mail_password = "";
			$scope.reg_tel_btn = "";
			$scope.reg_mail_btn = "none";
		}
		if(x == 2){
			$scope.tel = "";
			$scope.reg_yz = "";
			$scope.password = "";
			$scope.reg_tel_btn = "none";
			$scope.reg_mail_btn = "";
		};
		$scope.index = x;
	};
	//移除输入信息
	$scope.tel_remove = function(){
		$scope.tel = '';
	};
	$scope.reg_yz_remove = function(){
		$scope.reg_yz = '';
	};
	$scope.password_remove = function(){
		$scope.password = '';
	};
	$scope.mail_remove = function(){
		$scope.mail = '';
	};
	$scope.mail_password_remove = function(){
		$scope.mail_password = '';
	};
	$scope.change_type = function(){
		if($scope.show == 'show'){
			$scope.show = '';
			$scope.type = 'password';
		}else{
			$scope.type = 'text';
			$scope.show = 'show';
		}
	};
	$scope.mail_change_type = function(){
		if($scope.showed == 'show'){
			$scope.showed = '';
			$scope.typed = 'password';
		}else{
			$scope.typed = 'text';
			$scope.showed = 'show';
		}
	};
	//倒计时
	$scope.getCode = function(){
		$scope.num = 60;
		$scope.text = $scope.num+'s重新获取';
		var time = $interval(function(){
			$scope.num--;
			$scope.text = $scope.num+'s重新获取';
			if($scope.num == 0){
				$interval.cancel(time);
				$scope.text = '重新获取';
			};
		},1000);
	};
	//监听
	$scope.$watch('tel', function() {
		if($scope.tel.length == 11){
			$scope.ecurit_code = "current";
		}else{
			$scope.ecurit_code = "";
		}
	});
	$scope.$watch('reg_yz', function() {
		if($scope.tel.length == 11 && $scope.reg_yz.length == 4){
			$scope.tel_ok = "ok";
		}else{
			$scope.tel_ok = "";
		}
	});
	mail_reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	$scope.$watch('mail_password', function() {
		if($scope.mail_password.length >= 6 && $scope.mail_password.length <= 20){
			$scope.mail_ok = "ok";
		}else{
			$scope.mail_ok = "";
		}
	});
	//两周内自动登录
	$scope.keep_loginInfor = function(){
		if($scope.check_keep == 'check'){
			$scope.check_keep = '';
		}else{
			$scope.check_keep = 'check';
		}
	};
	
});
/*================注册页面控制器结束====================*/

/*================其他信息页面控制器开始====================*/
IshopMobile.controller("otherInforCtrl", function($scope, $window, $location, $http, $interval) {
	$scope.title = "其他信息";	
	$scope.h_backTo = true;
	$scope.h_skip = true;
});
/*================其他信息页面控制器结束====================*/