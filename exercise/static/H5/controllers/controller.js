/*================主控制器开始====================*/
IshopMobile.controller("MainCtrl", function($rootScope, $scope, $window) {
	$scope.h_backTo = false; //返回
	$scope.h_bind = false; //跳过绑定
	$scope.h_skip = false; //跳过
	$scope.h_header_nav = false; //头部导航
});
/*================主控制器结束====================*/

/*================主页控制器开始====================*/
IshopMobile.controller("homeCtrl", function($scope, $window, $location, $http) {
	$scope.home_current = "current";
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
	//优惠券
	var swiper = new Swiper('.seckill_inner .swiper-container', {
        pagination: '.seckill_inner .swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    });   
	//滚动消息
	function move(){
		$(".affiche>ul").animate({"margin-top":"-1rem"},1500,function(){
			var first=$(".affiche li:first-child");
			$(".affiche>ul").append(first);
			$(".affiche>ul").css("margin-top",0);
		})
	};
	var id=setInterval(move,4000);
});
/*================主页控制器结束====================*/

/*================分类页控制器开始====================*/
IshopMobile.controller("classifyCtrl", function($scope, $window, $location, $http) {
	$scope.classify_current = "current";
});
/*================分类页控制器结束====================*/

/*================列表页控制器开始====================*/
IshopMobile.controller("goodListCtrl", function($scope, $window, $location, $http) {
	//单击切换
	$scope.cut = '';
	$scope.good_list = "good_list";
	$scope.good_block = "";
	$scope.list_box_adorn = "";
	$scope.view_box_adorn = "box_adorn";
	$scope.hide = "none";
	$scope.omit = "omit2";
	$scope.show = "";
	$scope.switchover = function(){
		if($scope.cut == 'current'){
			//列表
			$scope.cut = '';
			$scope.good_list = "good_list";
			$scope.good_block = "";
			$scope.list_box_adorn = "";
			$scope.view_box_adorn = "box_adorn";
			$scope.hide = "none";
			$scope.omit = "omit2";
			$scope.show = "";
		}else{
			//块显示
			$scope.cut = 'current';
			$scope.good_list = "";
			$scope.good_block = "good_block";
			$scope.list_box_adorn = "box_adorn";
			$scope.view_box_adorn = "";
			$scope.hide = "";
			$scope.omit = "omit1";	
			$scope.show = "none";
		}
	};
	//点击默认
	$scope.defaultOrder = function(){
		$("#default").addClass("current").siblings().removeClass("current");
		$("#default").siblings().removeClass("up").removeClass("down");
	};
	//点击价格
	$scope.priceOrder = function(){
		if($("#price").hasClass("up")){
			//如果升，就降
			$("#price").removeClass("up").addClass("down");
			
		}else if($("#price").hasClass("down")){
			//如果降，就升
			$("#price").removeClass("down").addClass("up");
		}else{
			//初始为降
			$("#price").addClass("down");
		}
		$("#price").siblings().removeClass("up").removeClass("down");
		$("#price").addClass("current").siblings().removeClass("current");
	};
	//点击销量
	$scope.saleOrder = function(){
		if($("#sale").hasClass("up")){
			//如果升，就降
			$("#sale").removeClass("up").addClass("down");
		}else if($("#sale").hasClass("down")){
			//如果降，就升
			$("#sale").removeClass("down").addClass("up");
		}else{
			//初始为降
			$("#sale").addClass("down");
		}
		$("#sale").siblings().removeClass("up").removeClass("down");
		$("#sale").addClass("current").siblings().removeClass("current");
	};
	//查看是否有货
	$scope.hava_availab = function(index){
		$scope.i = index;
	};
	//点击筛选
	$scope.filterOrder = function(){	
		$(".tk_box em").show();
		$(".tk_box .content,.tk_box .content .filter_items,.tk_box .content .fix_btn").show();
		$(".tk_box .content,.tk_box .content .filter_items,.tk_box .content .fix_btn").animate({right:0});
	};
	//点击遮罩层关闭弹框
	$(".tk_box em").click(function(){
		$(".tk_box .content,.tk_box .content .filter_items,.tk_box .content .fix_btn").animate({right:"-100%"});		
		$(".tk_box em").hide();
		setTimeout(function(){
			$(".tk_box .content,.tk_box .content .filter_items,.tk_box .content .fix_btn").hide();
		},500);	
	});
	//进行选择
	var list="";
	$(".sort ul li").click(function(){
		if($(this).hasClass("current")){
			$(this).removeClass("current");	
		}else{
			$(this).addClass("current")
		}
		var list="";
		$(".sort ul li.current").each(function(){
			var str = $(this).find("a").text();
			list += str+",";
		});
		if(list == "") {
			list = "全部";
			$(this).parents(".sort").find(".sort_head p").removeClass("current");
		} else {
			$(this).parents(".sort").find(".sort_head p").addClass("current");
		}
		$(this).parents(".sort").find(".sort_head p span").html(list);
	});
	$(".sort_head p").click(function(){
		if($(this).find("i").hasClass("bot")){
			$(this).find("i").removeClass("bot");
			$(this).parents(".sort").find("ul").css("height",'auto');
		}else{
			$(this).find("i").addClass("bot");
			$(this).parents(".sort").find("ul").css("height",1.8+'rem');
		}
	});
});
/*================列表页控制器结束====================*/