/*================购物车控制器开始====================*/
IshopMobile.controller("shoppingCartCtrl", function($scope, $window, $location, $http) {
	
});
/*================购物车控制器结束====================*/

/*================商品详情页控制器开始====================*/
IshopMobile.controller("goodsDetailsCtrl", function($scope, $window, $location, $http) {
	$scope.title = "商品详情";
	$scope.h_backTo = true;
	$scope.h_header_nav = true;
	//轮播图
	var mySwiper = new Swiper ('.banner .swiper-container', {
		direction: 'horizontal',
		pagination: '.banner .swiper-pagination',
		autoplay : 2500,
		speed:500,
		loop: true,
		autoHeight: true, //高度随内容变化
		autoplayDisableOnInteraction : false
	});
	//banner 标签 
	$scope.slider = function(){
		if($scope.silder_current == "current"){
			$scope.silder_current = "";
		}else{
			$scope.silder_current = "current";	
		}
	};
	//选择颜色尺码操作
	function CheckType(){
		if($scope.norms_hide == "current"){
			$scope.norms_hide = "";
			$scope.mask_hide = "";	
		}else{
			$scope.norms_hide = "current";
			$scope.mask_hide = "hide";	
		}
	};
	$scope.no_handle = function(){
		CheckType();
	};
	$scope.check_type = function(){
		CheckType();
	};
	$scope.shut_all = function(){
		$scope.norms_hide = "current";
		$scope.mask_hide = "hide";	
	};
});
/*================商品详情页控制器开始====================*/

/*================商品结算控制器开始====================*/
IshopMobile.controller("commoditySettlementCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "结算";
});
/*================商品结算控制器结束====================*/

/*================订单详情控制器开始====================*/
IshopMobile.controller("shoppingOrderDetailsCtrl", function($scope, $window, $location, $http) {
	$scope.title = "订单详情";
	$scope.h_backTo = true;
});
/*================订单详情控制器结束====================*/

/*================物流信息控制器开始====================*/
IshopMobile.controller("logisticsInformationCtrl", function($scope, $window, $location, $http) {
	$scope.title = "物流信息";
	$scope.h_backTo = true;
});
/*================物流信息控制器结束====================*/

/*================取消订单控制器开始====================*/
IshopMobile.controller("cancellationOfOrderCtrl", function($scope, $window, $location, $http) {
	$scope.title = "取消订单";
	$scope.h_backTo = true;
});
/*================取消订单控制器结束====================*/

/*================我的订单控制器开始====================*/
IshopMobile.controller("myOrderCtrl", function($scope, $window, $location, $http) {
	$scope.title2 = "我的订单";
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 8
    });
});
/*================我的订单控制器结束====================*/