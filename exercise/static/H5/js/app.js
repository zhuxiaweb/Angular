// webrx@126.com JavaScript Document
var IshopMobile = angular.module("IshopMobile", ['ionic', 'ui.router', 'carStoreDirectives']);
IshopMobile.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/goodsDetails");
	$stateProvider
		.state("home", { //首页
			url: "/home",
			cache: false,
			templateUrl: "tpls/home.html",
			controller: "homeCtrl"
		})
		.state("login", { //登录
			url: "/login",
			cache: false,
			templateUrl: "tpls/login.html",
			controller: "loginCtrl"
		})
		.state("bind_tel", { //绑定手机
			url: "/bind_tel",
			cache: false,
			templateUrl: "tpls/bind_tel.html",
			controller: "bindTelCtrl"
		})
		.state("retrieve_password", { //忘记密码
			url: "/retrieve_password",
			cache: false,
			templateUrl: "tpls/retrieve_password.html",
			controller: "retrievePasswordCtrl"
		})
		.state("retrieve_password_next", { //输入新密码
			url: "/retrieve_password_next",
			cache: false,
			templateUrl: "tpls/retrieve_password_next.html",
			controller: "retrievePasswordNextCtrl"
		})
		.state("register", { //注册
			url: "/register",
			cache: false,
			templateUrl: "tpls/register.html",
			controller: "registerCtrl"
		})
		.state("other_infor", { //其他信息
			url: "/other_infor",
			cache: false,
			templateUrl: "tpls/other_infor.html",
			controller: "otherInforCtrl"
		})
		.state("classify", { //分类页
			url: "/classify",
			cache: false,
			templateUrl: "tpls/classify.html",
			controller: "classifyCtrl"
		})
		.state("goodList", { //列表页
			url: "/goodList",
			cache: false,
			templateUrl: "tpls/good_list.html",
			controller: "goodListCtrl"
		})
		.state("shoppingCart", { //购物车
			url: "/shoppingCart",
			cache: false,
			templateUrl: "tpls/shopping_cart.html",
			controller: "shoppingCartCtrl"
		})
		.state("goodsDetails", { //商品详情页
			url: "/goodsDetails",
			cache: false,
			templateUrl: "tpls/goodsDetails.html",
			controller: "goodsDetailsCtrl"
		})
		.state("commentGoods", { //商品评论页
			url: "/commentGoods",
			cache: false,
			templateUrl: "tpls/comment_goods.html",
			controller: "commentGoodsCtrl",
		})
		.state("addCommentGoods", { //添加商品评论页
			url: "/addCommentGoods",
			cache: false,
			templateUrl: "tpls/add_comment_goods.html",
			controller: "addCommentGoodsCtrl",
		})
		.state("commentGoodsList", { //商品评论列表页
			url: "/commentGoodsList",
			cache: false,
			templateUrl: "tpls/comment_goods_list.html",
			controller: "commentGoodsListCtrl",
		})
		.state("askGoodsList", { //商品咨询列表页
			url: "/askGoodsList",
			cache: false,
			templateUrl: "tpls/ask_goods_list.html",
			controller: "askGoodsListCtrl",
		})
		.state("askGoods", { //商品咨询页
			url: "/askGoods",
			cache: false,
			templateUrl: "tpls/ask_goods.html",
			controller: "askGoodsCtrl",
		})
		.state("Integral_in_goods", { //积分兑换商品
			url: "/Integral_in_goods",
			cache: false,
			templateUrl: "tpls/Integral_in_goods.html",
			controller: "IntegralInGoodsCtrl"
		})
		.state("coupon_other", { //其他优惠劵
			url: "/coupon_other",
			cache: false,
			templateUrl: "tpls/coupon_other.html",
			controller: "couponOtherCtrl"
		})
		.state("coupon_available", { //可用优惠劵
			url: "/coupon_available",
			cache: false,
			templateUrl: "tpls/coupon_available.html",
			controller: "couponAvailableCtrl"
		})
		.state("coupon_ourse", { //我的优惠劵
			url: "/coupon_ourse",
			cache: false,
			templateUrl: "tpls/coupon_ourse.html",
			controller: "couponOurseCtrl"
		})
		.state("coupon_used", { //已使用优惠劵
			url: "/coupon_used",
			cache: false,
			templateUrl: "tpls/coupon_used.html",
			controller: "couponUsedCtrl"
		})
		.state("coupon_overdue", { //过期优惠劵
			url: "/coupon_overdue",
			cache: false,
			templateUrl: "tpls/coupon_overdue.html",
			controller: "couponOverdueCtrl"
		})
		.state("coupon_details", { //优惠劵详情
			url: "/coupon_details",
			cache: false,
			templateUrl: "tpls/coupon_details.html",
			controller: "couponDetailsCtrl"
		})
		.state("coupon_receive", { //优惠劵领取
			url: "/coupon_receive",
			cache: false,
			templateUrl: "tpls/coupon_receive.html",
			controller: "couponReceiveCtrl"
		})
		.state("commodity_settlement", { //商品结算
			url: "/commodity_settlement",
			cache: false,
			templateUrl: "tpls/commodity_settlement.html",
			controller: "commoditySettlementCtrl"
		})
		.state("personal_center_noinfor", { //个人中心--无信息
			url: "/personal_center_noinfor",
			cache: false,
			templateUrl: "tpls/personal_center_noinfor.html",
			controller: "personalCenterNoinforCtrl"
		})
		.state("personal_center_infor", { //个人中心--有信息
			url: "/personal_center_infor",
			cache: false,
			templateUrl: "tpls/personal_center_infor.html",
			controller: "personalCenterInforCtrl"
		})
		.state("memberInfo", { //设置 (会员信息)
			url: "/memberInfo",
			cache: false,
			templateUrl: "tpls/member_info.html",
			controller: "memberInfoCtrl",
		})
		.state("add_receiver", { //添加收货地址
			url: "/add_receiver",
			cache: false,
			templateUrl: "tpls/add_receiver.html",
			controller: "addReceiverCtrl"
		})
		.state("edit_receiver", { //后加 编辑收货地址
			url: "/add_receiver",
			cache: false,
			templateUrl: "tpls/add_receiver.html",
			controller: "addReceiverCtrl"
		})
		.state("goods_aftersale", { //商品售后
			url: "/goods_aftersale",
			cache: false,
			templateUrl: "tpls/goods_aftersale.html",
			controller: "goodsAftersaleCtrl"
		})
		.state("add_goods_aftersale", { //商品售后申请
			url: "/add_goods_aftersale",
			cache: false,
			templateUrl: "tpls/add_goods_aftersale.html",
			controller: "addGoodsAftersaleCtrl"
		})
		.state("show_goods_aftersale", { //商品进度查询
			url: "/show_goods_aftersale",
			cache: false,
			templateUrl: "tpls/show_goods_aftersale.html",
			controller: "showGoodsAftersaleCtrl"
		})
		.state("not_check_aftersale", { //售后审核不通过
			url: "/not_check_aftersale",
			cache: false,
			templateUrl: "tpls/not_check_aftersale.html",
			controller: "notCheckAftersaleCtrl"
		})
		.state("pass_check_aftersale", { //售后审核不通过
			url: "/pass_check_aftersale",
			cache: false,
			templateUrl: "tpls/pass_check_aftersale.html",
			controller: "passCheckAftersaleCtrl"
		})
		.state("succ_check_aftersale", { //售后提交退货单号不通过
			url: "/succ_check_aftersale",
			cache: false,
			templateUrl: "tpls/succ_check_aftersale.html",
			controller: "succCheckAftersaleCtrl"
		})
		.state("search", { //搜索页
			url: "/search",
			cache: false,
			templateUrl: "tpls/search.html",
			controller: "searchCtrl"
		})
		.state("favorite", { //我的收藏
			url: "/favorite",
			cache: false,
			templateUrl: "tpls/favorite.html",
			controller: "favoriteCtrl"
		})
		.state("not_favorite", { //我的收获 为空
			url: "/not_favorite",
			cache: false,
			templateUrl: "tpls/not_favorite.html",
			controller: "not_favoriteCtrl"
		})
		.state("history", { //我的足迹 (浏览历史)
			url: "/history",
			cache: false,
			templateUrl: "tpls/history.html",
			controller: "historyCtrl"
		})
		.state("neardy_store", { //附近门店
			url: "/neardy_store",
			cache: false,
			templateUrl: "tpls/neardy_store.html",
			controller: "neardyStoreCtrl"
		})
		.state("not_neardy_store", { //附近没有门门店
			url: "/not_neardy_store",
			cache: false,
			templateUrl: "tpls/not_neardy_store.html",
			controller: "notNeardyStoreCtrl"
		})
		.state("store_details", { //门店详情
			url: "/store_details",
			cache: false,
			templateUrl: "tpls/personal_sign.html",
			controller: "personalSignCtrl"
		})
		.state("personal_wallet", { //我的预存款
			url: "/personal_wallet",
			cache: false,
			templateUrl: "tpls/personal_wallet.html",
			controller: "personalWalletCtrl"
		})
		.state("paycenter", { //订单支付
			url: "/paycenter",
			cache: false,
			templateUrl: "tpls/paycenter.html",
			controller: "paycenterCtrl"
		})
		.state("emppty_personal_wallet", { //我的预存款(记录为空)
			url: "/empty_personal_wallet",
			cache: false,
			templateUrl: "tpls/empty_personal_wallet.html",
			controller: "emptyPersonalWalletCtrl"
		})
		.state("recharge_blance", { //我的预存款(充值)
			url: "/recharge_blance",
			cache: false,
			templateUrl: "tpls/recharge_blance.html",
			controller: "rechargeBlanceCtrl"
		})
		/*.state("result_failure", { //订单支付失败
			url: "/result_failure",
			cache: false,
			templateUrl: "tpls/result_failure.html",
			controller: "resultFailureCtrl"
		})*/
		/*.state("result_success", { //订单支付成功
			url: "/result_success",
			cache: false,
			templateUrl: "tpls/result_success.html",
			controller: "resultSuccessCtrl"
		})*/
		.state("integral_descrip", { //积分说明
			url: "/integral_descrip",
			cache: false,
			templateUrl: "tpls/Integral_description.html",
			controller: "integralDescripCtrl"
		})
		.state("integral_ourse", { //我的积分
			url: "/integral_ourse",
			cache: false,
			templateUrl: "tpls/integral_ourse.html",
			controller: "integralOurseCtrl"
		})
		.state("shopping_order_details", { //订单详情
			url: "/shopping_order_details",
			cache: false,
			templateUrl: "tpls/shopping_order_details.html",
			controller: "shoppingOrderDetailsCtrl"
		})
		.state("logistics_information", { //物流信息
			url: "/logistics_information",
			cache: false,
			templateUrl: "tpls/logistics_information.html",
			controller: "logisticsInformationCtrl"
		})
		.state("cancellation_of_order", { //取消订单
			url: "/cancellation_of_order",
			cache: false,
			templateUrl: "tpls/cancellation_of_order.html",
			controller: "cancellationOfOrderCtrl"
		})
		.state("my_order", { //我的订单
			url: "/my_order",
			cache: false,
			templateUrl: "tpls/my_order.html",
			controller: "myOrderCtrl"
		})
});
