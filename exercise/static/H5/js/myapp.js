		.state("memberInfo", { //会员信息
			url: "/memberInfo",
			cache: false,
			templateUrl: "tpls/member_info.html",
			controller: "memberInfoCtrl",
		})
		.state("setMemberName", { //设置会员名
			url: "/setMemberName",
			cache: false,
			templateUrl: "tpls/set_member_name.html",
			controller: "setMemberNameCtrl",
		})
		.state("certiFication", { //会员实名认证
			url: "/certiFication",
			cache: false,
			templateUrl: "tpls/certi_fication.html",
			controller: "certiFicationCtrl",
		})
		.state("bindModile", { //会员绑定手机
			url: "/bindModile",
			cache: false,
			templateUrl: "tpls/bind_modile.html",
			controller: "bindModileCtrl",
		})
		.state("modifyModile", { //会员修改手机
			url: "/modifyModile",
			cache: false,
			templateUrl: "tpls/modify_modile.html",
			controller: "modifyModileCtrl",
		})
		.state("modifyPassword", { //会员修改密码
			url: "/modifyPassword",
			cache: false,
			templateUrl: "tpls/modify_Password.html",
			controller: "modifyPasswordCtrl",
		})
		.state("modify_password_next", { //会员中心输入新密码
			url: "/modify_password_next",
			cache: false,
			templateUrl: "tpls/modify_password_next.html",
			controller: "modifyPasswordNextCtrl"
		})
		.state("pay_password", { //会员中心支付密码
			url: "/pay_password",
			cache: false,
			templateUrl: "tpls/pay_password.html",
			controller: "payPasswordtCtrl"
		})
		.state("forget_pay_password", { //忘记支付密码
			url: "/forget_pay_password",
			cache: false,
			templateUrl: "tpls/forget_pay_password.html",
			controller: "forgetPayPasswordtCtrl"
		})
		.state("modify_pay_password", { //修改支付密码
			url: "/modify_pay_password",
			cache: false,
			templateUrl: "tpls/modify_pay_password.html",
			controller: "modifyPayPasswordtCtrl"
		})
		.state("edit_pay_password", { //修改支付密码
			url: "/edit_pay_password",
			cache: false,
			templateUrl: "tpls/edit_pay_password.html",
			controller: "editPayPasswordtCtrl"
		})