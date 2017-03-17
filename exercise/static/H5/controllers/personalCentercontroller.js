/*================个人中心-没有登录信息控制器开始====================*/
IshopMobile.controller("personalCenterNoinforCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "我的";
});
/*================个人中心-没有登录信息控制器结束====================*/

/*================个人中心-有登录信息控制器开始====================*/
IshopMobile.controller("personalCenterInforCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "我的";
});
/*================个人中心-有登录信息控制器结束====================*/

/*================积分签到控制器开始====================*/
IshopMobile.controller("personalSignCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "积分签到";
	$scope.sign_tab = function(e){
		$('.personal_tab').find('li').removeClass('active').eq(e).addClass('active');
		$('.personal_sign_change').hide().eq(e).show();
	}
	$scope.sign_action = function(){
		$('.mask').show();
		$('.personal_sign_act_box').show();
	}
	$scope.act_exit = function(){
		$('.mask').hide();
		$('.personal_sign_act_box').hide();
	}
});
/*================积分签到控制器结束====================*/

/*================我的预存款控制器开始====================*/
IshopMobile.controller("personalWalletCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "我的预存款";
	$scope.hides = false;
	// $('.wallet_info_head')
	//列表tag
	$scope.showList = function(){
		if($scope.hides){
			$scope.hides = false;
			$('.wallet_info_head').addClass('on');
		}else{
			$scope.hides = true;
			$('.wallet_info_head').removeClass('on');
		}
	}
});
/*================我的预存款控制器结束====================*/

/*================我的预存款(记录为空)控制器开始====================*/
IshopMobile.controller("emptyPersonalWalletCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "我的预存款";
	// $('.wallet_info_head')
	//列表tag
	$scope.showList = function(){
		
	}
});
/*================我的预存(记录为空)款控制器结束====================*/

/*================我的预存款充值控制器开始====================*/
IshopMobile.controller("rechargeBlanceCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "充值";
});
/*================我的预存充值款控制器结束====================*/

/*================积分说明控制器开始====================*/
IshopMobile.controller("integralDescripCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "积分说明";
});
/*================积分说明控制器结束====================*/

/*================积分明细控制器开始====================*/
IshopMobile.controller("integralOurseCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "我的积分";
	//查看积分明细
	$scope.look_integral_details = function(){
		if($scope.integral_show == 'current'){
			$scope.integral_show = '';
			$scope.details_height = '';
		}else{
			$scope.integral_show = 'current';
			$scope.details_height = 'current';
		}
	};
});
/*================积分明细控制器结束====================*/