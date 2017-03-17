$(function() {
	//打开页面获取sid
	if (!localStorage.sid) {
		var url = baison.gsid_url('api/gsid');
		$.ajax({
			type: "POST",
			url: url,
			dataType: "json",
			success: function(data) {
				if (1 == data.status) {
					localStorage.sid = data.data;
				} else {
					alert(data.message);
				}
			}
		});
	}

	//每隔10分钟校验localStorage和后台session登录状态
	lscheck();
	setInterval(function() {
		lscheck();
		//更新审核状态
		reviewcheck();
	}, 600000);

	//返回顶部按钮
	if ($(document).scrollTop() != 0) { $(".back_top").css('display', 'block'); }
	$(".wrapper").scroll(function() {
		var st = $(".wrapper").scrollTop();
		(st > 480) ? $(".back_top").css('display', 'block'): $(".back_top").hide();
	});
	$(".back_top").click(function() {
		$('.wrapper').animate({ scrollTop: '0px' }, 200);
		return false;
	});
	//table 切换
	function tabFun(tab, content, current) {
		var conNum = 0;
		$(tab).click(function() {
			$(this).addClass(current).siblings().removeClass(current);
			conNum = $(this).index();
			$(content).eq(conNum).show().siblings().hide();
			return false;
		});
	}
	tabFun(".register_head li", ".register_inner>div", "current");
	tabFun(".noticeTitle a", ".noticeCon>div", "current");

	//商品数量加，减
	$(".plus").click(function() {
		$obj = $(this).prev("input[type='text']");
		var num = parseInt($obj.val());
		if (isNaN(num)) {
			$obj.val(1);
		} else {
			$obj.val(num + 1);
		}
		if ($obj.val() == 1) {
			$(this).siblings(".subtract").addClass("disable");
		} else {
			$(this).siblings(".subtract").removeClass("disable");
		}
	});
	$(".subtract").click(function() {
		$obj = $(this).next("input[type='text']");
		var num = parseInt($obj.val());
		if (num <= 1) {
			return false;
		}
		if (isNaN(num)) {
			$obj.val(1);
		} else {
			$obj.val(num - 1);
		}
		if ($obj.val() == 1) {
			$(this).addClass("disable");
		} else {
			$(this).removeClass("disable");
		}
	});
	//下拉
	function select_simulated(select_style, bomb_con_style) {
		$(document).click(function() {
			$(bomb_con_style).hide();
		});
		$(select_style).bind('click', function(e) {
			var thisinput = $(this);
			var local = $(this).position();
			var bomb_con = $(bomb_con_style);
			$(this).parents("li").siblings().find(bomb_con_style).hide();
			$(this).parent().find(bomb_con_style).width($(this).width()); //下拉框的宽度
			$(this).parent().find(bomb_con_style).show();
			e ? e.stopPropagation() : event.cancelBubble = true;

			bomb_con.find("dd").click(function(e) {
				var bomb_text = $(this).text();
				$(this).addClass("selected").siblings().removeClass("selected");
				$(this).parents(bomb_con_style).hide();
				$(this).parents("li").find(select_style).val(bomb_text);
				e ? e.stopPropagation() : event.cancelBubble = true;
			});
		});
		return false;
	}
	select_simulated(".provin_select", ".provin_con");
	$(".local").focus(function() {
		$(this).addClass("local3");
	});
	$(".local").blur(function() {
		$(this).removeClass("local3");
	});

});

//前后台登录状态校验
function lscheck() {
	if (localStorage.biz_code) {
		var params = {};
		params.method = "member.lscheck";
		$.ajax({
			type: "POST",
			url: baison.get_url('api/', params),
			dataType: "json",
			success: function(data) {
				//baison.alert("localst:" + localStorage.biz_code + "|session:" + data.data);
				if (1 == data.status && localStorage.biz_code == data.data) {
					//前台localStorage与后台session登录状态一致
				} else {
					baison.alert("超时自动下线，请重新登录~");
					localStorage.clear();
					//退出以后后续操作依然要获取sid
					var url = baison.gsid_url('api/gsid');
					$.ajax({
						type: "POST",
						url: url,
						dataType: "json",
						success: function(data) {
							if (1 == data.status) {
								localStorage.sid = data.data;
							} else {
								alert(data.message);
							}
						}
					});
					window.location.href = "index.html#/home";
				}
			}
		});
	}
}

//后台更新会员审核状态
function reviewcheck() {
	if (typeof(localStorage.biz_status) != "undefined") {
		var params = {};
		params.method = "member.review.check";
		$.ajax({
			type: "POST",
			url: baison.get_url('api/', params),
			dataType: "json",
			success: function(data) {
				if (1 == data.status) {
					localStorage.biz_status = data.data;
				}
			}
		});
	}
}

//banenr
function slide(id) {
	TouchSlide({
		slideCell: id,
		titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true, //自动播放
		autoPage: true, //自动分页
		switchLoad: "_src" //切换加载，真实图片路径为"_src"
	});
}

function ajaxPic(callBack, fileName) {
	api.actionSheet({
		cancelTitle: '取消',
		buttons: ['相机', '相册']
	}, function(ret, err) {
		if (ret.buttonIndex != 3) {
			var _sourceType = "";
			if (ret.buttonIndex == 1) {
				_sourceType = 'camera';
			} else {
				_sourceType = 'library';
			}
			api.getPicture({
				sourceType: _sourceType,
				encodingType: 'jpg',
				allowEdit: true,
				quality: 10
			}, function(ret, err) {
				if (ret && ret.data) {
					$("#loading_gif").attr("class", "loading");
					var params = {};
					var p_params = {};
					params.params = JSON.stringify(p_params);
					params.method = "order.upload";
					var url = baison.get_url('api/', params);
					api.ajax({
						url: url,
						method: 'post',
						data: {
							values: {
								filename: fileName
							},
							files: {
								file: ret.data
							},
							'iid': 'file'
						}
						//如果上传成功走回调
					}, callBack)
				} else {
					api.toast({
						msg: '你没有选择图片',
						location: 'middle'
					})
				}
			});
		}
	});
}

function ajaxSignPic(callBack, fileName) {
	api.actionSheet({
		cancelTitle: '取消',
		buttons: ['相册']
	}, function(ret, err) {
		if (ret.buttonIndex != 3) {
			var _sourceType = "";
			if (ret.buttonIndex == 1) {
				_sourceType = 'library';
			} else {
				_sourceType = 'library';
			}
			api.getPicture({
				sourceType: _sourceType,
				encodingType: 'png',
				allowEdit: true,
				quality: 10
			}, function(ret, err) {
				if (ret && ret.data) {
					$("#loading_gif").attr("class", "loading");
					var params = {};
					var p_params = {};
					params.params = JSON.stringify(p_params);
					params.method = "order.upload";
					var url = baison.get_url('api/', params);
					api.ajax({
						url: url,
						method: 'post',
						data: {
							values: {
								filename: fileName
							},
							files: {
								file: ret.data
							},
							'iid': 'file'
						}
						//如果上传成功走回调
					}, callBack)
				} else {
					api.toast({
						msg: '你没有选择图片',
						location: 'middle'
					})
				}
			});
		}
	});
}

//团购倒计时
function interval(day, hour, minute, second, divid, code, style) {
	if (second > 0)
		second--;
	if (second == 0) {
		if (minute == 0) {
			if (hour == 0)
				minute = 0;
			second = 0;
		} else {
			second = 60;
			minute -= 1;
		}
	}
	if (minute == 0) {
		if (hour == 0) {
			minute = 0;
			hour = 0;
		} else {
			minute = 60;
			hour -= 1;
		}
	}
	if (hour == 0) {
		if (day == 0) {
			hour = 0;
			day = 0;
		} else {
			hour = 24;
			day -= 1;
		}
	}
	if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
		if (code != "") {
			alert("该活动已结束");
			//location.href ="/goods/?code="+code;
		} else {
			history.go(0);
		}
		return false;
	}

	//处理如果是个位数  自动在数字前补0
	if (second <= 9) {
		second = "0" + second;
	}
	var minute2 = '';
	if (minute <= 9) {
		minute2 = "0" + minute;
	} else {
		minute2 = minute;
	}
	var hour2 = '';
	if (hour <= 9) {
		hour2 = "0" + hour;
	} else {
		hour2 = hour;
	}
	//处理结束

	if (style == 1) {
		$("#" + divid).html('<h4>距报名结束仅剩</h4><h5><em>' + day + '</em>天<em>' + hour2 + '</em>时<em>' + minute2 + '</em>分<em>' + second + '</em>秒</h5>');
	} else if (style == 2) {
		$("#" + divid).html('<h4>距报名开始仅剩</h4><h5><em>' + day + '</em>天<em>' + hour2 + '</em>时<em>' + minute2 + '</em>分<em>' + second + '</em>秒</h5>');
	} else {
		$("#" + divid).html('<h4>活动已结束</h4>');
	}
	window.setTimeout(function() { interval(day, hour, minute, second, divid, code, style) }, 1000);
}
