/*================会员收货地址控制器开始====================*/
IshopMobile.controller("goodsAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "售后服务";

	//商品滑动模块
	var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10
    }); 

	//删除地址
	$scope.deleat = function(){
		baison.alert('您真的要删除吗');
	}

	//设置默认地址
	$scope.set_default = function(){

	}

});
/*================会员收货地址控制器结束====================*/

/*================会员收货地址控制器开始====================*/
IshopMobile.controller("addGoodsAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "售后申请";
});
/*================会员收货地址控制器结束====================*/

/*================售后进度查询控制器开始====================*/
IshopMobile.controller("showGoodsAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "进度查询";
});
/*================售后进度查询控制器结束====================*/

/*================售后审核不通过控制器开始====================*/
IshopMobile.controller("notCheckAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "进度查询";
});
/*================售后审核不通过控制器结束====================*/

/*================售后审核通过控制器开始====================*/
IshopMobile.controller("passCheckAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "进度查询";
});
/*================售后审核通过控制器结束====================*/

/*================售后提交快递单号控制器开始====================*/
IshopMobile.controller("succCheckAftersaleCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "进度查询";
});
/*================售后提交快递单号控制器结束====================*/

/*================搜索控制器开始====================*/
IshopMobile.controller("searchCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	//$scope.title2 = "进度查询";
		//商品滑动模块
	var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0
    }); 
});
/*================搜索控制器结束====================*/

/*================我的收藏控制器开始====================*/
IshopMobile.controller("favoriteCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "我的收藏";
});
/*================我的收藏控制器结束====================*/

/*================我的收藏为空控制器开始====================*/
IshopMobile.controller("not_favoriteCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "我的收藏";
});
/*================我的收藏为空控制器结束====================*/

/*================我的足迹控制器开始====================*/
IshopMobile.controller("historyCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "我的足迹";
});
/*================我的足迹为空控制器结束====================*/

/*================附近门店控制器开始====================*/
IshopMobile.controller("neardyStoreCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "附近门店";
});
/*================附近门店控制器结束====================*/

/*================附近门店(空)控制器开始====================*/
IshopMobile.controller("notNeardyStoreCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "附近门店";
});
/*================附近门店(空)控制器结束====================*/

/*================门店详情控制器开始====================*/
IshopMobile.controller("storeDetailsCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "门店详情";
});
/*================门店详情控制器结束====================*/

/*================订单支付控制器开始====================*/
IshopMobile.controller("paycenterCtrl", function($scope, $window, $location, $http) {
	$scope.h_backTo = true;
	$scope.title2 = "订单支付";
	$scope.passVal ='';
	var clded = $('#clded').find('li');
	clded.text('');
	
	$scope.passWord = function (){
		var pw = $scope.passVal;
		//console.log(clded);
		for(i=0;i<6;i++){
			if(pw[i]){
				clded.eq(i).text('●');
			}else{
				clded.eq(i).text('');
			}	
		}
	}
});
/*================订单支付控制器结束====================*/