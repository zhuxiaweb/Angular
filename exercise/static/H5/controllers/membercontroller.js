/*================会员中心设置控制器开始====================*/
IshopMobile.controller("memberInfoCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "设置";
	
	//日期插件
	mui.init();
	var result = mui('#result')[0];
	$scope.TimeTag = function(){
		var options = {"type":"date","beginYear":2014,"endYear":2016};
		var id ='demo2';
		var picker = new mui.DtPicker(options);
		picker.show(function(rs) {$scope.time = rs.text;picker.dispose();});
	}
	//console.log(btns);

});
/*================会员中心设置控制器结束====================*/


/*================设置昵称控制器开始====================*/
IshopMobile.controller("setMemberNameCtrl", function($scope, $window, $location, $http) {
	$scope.title = "设置";
});
/*================设置昵称控制器结束====================*/

/*================会员实名认证控制器开始====================*/
IshopMobile.controller("certiFicationCtrl", function($scope, $window, $location, $http) {
	$scope.title = "实名认证";
});
/*================会员实名认证控制器结束====================*/

/*================会员绑定手机控制器开始====================*/
IshopMobile.controller("bindModileCtrl", function($scope, $window, $location, $http) {
	$scope.title = "绑定手机";
});
/*================会员绑定手机控制器结束====================*/

/*================会员修改绑定手机控制器开始====================*/
IshopMobile.controller("modifyModileCtrl", function($scope, $window, $location, $http) {
	$scope.title = "修改手机";
});
/*================会员修改绑定手机控制器结束====================*/

/*================会员修改密码控制器开始====================*/
IshopMobile.controller("modifyPasswordCtrl", function($scope, $window, $location, $http) {
	$scope.title = "修改密码";
});
/*================会员修改密码控制器结束====================*/

/*================会员修改密码下一步控制器开始====================*/
IshopMobile.controller("modifyPasswordNextCtrl", function($scope, $window, $location, $http) {
	$scope.title = "修改密码";
});
/*================会员修改密码下一步控制器结束====================*/


/*================会员修改密码下一步控制器开始====================*/
IshopMobile.controller("payPasswordCtrl", function($scope, $window, $location, $http) {
	$scope.title = "支付密码";
});
/*================会员修改密码下一步控制器结束====================*/

/*================会员忘记支付密码控制器开始====================*/
IshopMobile.controller("forgetPayPasswordtCtrl", function($scope, $window, $location, $http) {
	$scope.title = "忘记支付密码";
});
/*================会员忘记支付密码控制器结束====================*/

/*================会员修改支付密码控制器开始====================*/
IshopMobile.controller("modifyPayPasswordtCtrl", function($scope, $window, $location, $http) {
	$scope.title = "忘记支付密码";
});
/*================会员修改支付密码控制器结束====================*/

/*================会员修改支付密码控制器开始====================*/
IshopMobile.controller("editPayPasswordtCtrl", function($scope, $window, $location, $http) {
	$scope.title = "修改支付密码";
});
/*================会员修改支付密码控制器结束====================*/
/*================会员收货地址控制器开始====================*/
IshopMobile.controller("memberReceiverCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "收货地址";

	//删除地址
	$scope.deleat = function(){
		baison.alert('您真的要删除吗');
	}

	//设置默认地址
	$scope.set_default = function(){

	}

});
/*================会员收货地址控制器结束====================*/

/*================添加收货地址控制器开始====================*/
IshopMobile.controller("addReceiverCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "添加收货地址";
});
/*================添加收货地址控制器结束====================*/