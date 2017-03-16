/*================积分兑换商品控制器开始====================*/
IshopMobile.controller("IntegralInGoodsCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "详情";
});
/*================积分兑换商品控制器结束====================*/

/*================其他优惠劵控制器开始====================*/
IshopMobile.controller("couponOtherCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "其他优惠劵";
});
/*================其他优惠劵控制器结束====================*/

/*================其他优惠劵控制器开始====================*/
IshopMobile.controller("couponAvailableCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "可用优惠劵";
});
/*================其他优惠劵控制器结束====================*/

/*================我的优惠劵控制器开始====================*/
IshopMobile.controller("couponOurseCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "优惠劵";
});
/*================我的优惠劵控制器结束====================*/

/*================已使用优惠劵控制器开始====================*/
IshopMobile.controller("couponUsedCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "已使用卡劵";
});
/*================已使用优惠劵控制器结束====================*/

/*================过期卡劵控制器开始====================*/
IshopMobile.controller("couponOverdueCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "过期卡劵";
});
/*================过期卡劵控制器结束====================*/

/*================优惠劵控制器开始====================*/
IshopMobile.controller("couponDetailsCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "优惠劵";
});
/*================优惠劵控制器结束====================*/

/*================优惠劵领取控制器开始====================*/
IshopMobile.controller("couponReceiveCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title = "优惠劵领取";
	//滚动消息
	function move(){
		$(".affiche>ul").animate({"margin-top":"-1.2rem"},1500,function(){
			var first=$(".affiche li:first-child");
			$(".affiche>ul").append(first);
			$(".affiche>ul").css("margin-top",0);
		})
	};
	var id=setInterval(move,3000);
});
/*================优惠劵领取控制器结束====================*/