/*初开始化事件*/
$(function(){
		view_detail = $('.view_detail');

		containerResize();//ifrmae自适应
		$(window).resize(containerResize);
		$('.x-time').datetimepicker();//时间插件
		$.datetimepicker.setLocale('ch');
		reserveStatus();//finder字段滑动
		view_detail.click(view_detail_show);//finder搜索展开收放
		$('.sellist').click(blur);//finder多选
		selectModel();

		$('.optBtn').mouseover(function(){	//移入移出显示下拉列
			$(this).addClass('on');
			$(this).find('.x-drop-menu').addClass('droping');
		});
		$('.optBtn').mouseout(function(){
			if($(this).find('.x-drop-menu').hasClass('droping')){
				$(this).removeClass('on');
				$(this).find('.x-drop-menu').removeClass('droping');
			}
		});


});

	function blur(){
		if($(this).hasClass('all')){
			$('.x-checkbox').attr('checkbox',true);
		}else{
			$('.x-checkbox').attr('checkbox',true);
		}
	}

	function view_detail_show(){
		if(view_detail.hasClass('show')){
			view_detail.removeClass('show');
			view_detail.html('展开');
			$('.finder-search').hide();
		}else{
			view_detail.addClass('show');
			view_detail.html('收起');
			$('.finder-search').show();
		}
		containerResize();
	}

	function reserveStatus() {  
    	$("#reserveStatus").scroll(function () {  
        	var scrollLeft=$("#reserveStatus").scrollLeft();  
        	var margin_left=Number(0)-Number(scrollLeft);  
        	$("#fieldThead").css({"margin-left":margin_left}); 
        }); 
    }

 	//ifrmae自适应
	function containerResize(){
		var container = $('#container');
		var side = $('.side_iframe');
		var workground = $('.workground_iframe');
		var header = $('#header');
		var content_top = $('#content-top');

		side.width($(window).width()*0.12);
		workground.width($(window).width()-side.width());
		workground.css('left',side.width());
		header.css('padding-left',200);
		container.height($(window).height()-$('.header_iframe').height());
		$('.finder-list').height($('#workground').height() - content_top.height() - $('.finder-action-items').height() - $('.finder-pager').height()-100);
	}

	function selectModel(){
		var $box = $('div.model-select-box');
		var $option = $('ul.model-select-option',$box);
		var $txt = $('div.model-select-text', $box);
		var speed = 10;
		$txt.click(function(e) {
			$option.not($(this).siblings('ul.model-select-option')).slideUp(speed,function(){
				int($(this));
			});
			$(this).siblings('ul.model-select-option').slideToggle(speed, function(){
				int($(this));
			});
			return false;
		});
		$option.find('li').each(function(index, element){
			if($(this).hasClass('seleced')){
 	         	$(this).addClass('data-selected');
        	}
        }).mousedown(function(){
      		$(this).parent().siblings('div.model-select-text').text($(this).text()).attr('data-value', $(this).attr('data-option'));
         	$option.slideUp(speed, function(){
                int($(this));                 
            });
       		$(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');
	        return false;
	    }).mouseover(function(){
	     	$(this).addClass('seleced').siblings('li').removeClass('seleced');
	    });
	    $(document).click(function(e) {
             $option.slideUp(speed, function(){
                 int($(this));
             });
         })	
	}
	
	function int(obj){
    	obj.find('li.data-selected').addClass('seleced').siblings('li').removeClass('seleced');
    }     