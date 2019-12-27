$(function() {
	/*$('#nav_left li>a').click(function() {
		if($(this).parent().index()==0) {
			$('.temwrap .item').eq(0).addClass('on').siblings().removeClass('on');
			$(this).parent().addClass('on');
			$('.right_tabul li').eq(0).addClass('on').siblings().removeClass('on');
			$(this).parent().siblings().removeClass('on')
		}		
		return false;
	})
	$('#nav_left li:not(:first-child)').hover(function() {
		$(this).find('dl').show()
	},function() {
		$(this).find('dl').hide()
	})
	var tabarr = []
	$('#nav_left dl a').click(function(event) {
		event.preventDefault();		
		var index = null;
		var url = $(this).attr('href');	
		var title = $(this).text();
		var dom = '<div class="item"><iframe src="'+url+'"></iframe></div>'
		var tabdom = "<li><a href='"+url+"'>"+title+"<i></i></a></li>"
		if(tabarr.indexOf(url)==-1) {
			tabarr.push(url)
			$('.temwrap').append(dom)
			$('.right_tabul').append(tabdom)				
		}
		index = tabarr.indexOf(url)
		$('.temwrap .item').eq(index+1).addClass('on').siblings().removeClass('on');
		$(this).parents('li').addClass('on').siblings().removeClass('on');
		$('.right_tabul li').eq(index+1).addClass('on').siblings().removeClass('on');
		console.log(tabarr)
	})
	$('#nav_left li:first-child>a').click()
	$('.right_tabul').on('click','li a',function(e) {
		e.preventDefault();
		var index = $(this).parent().index();
		$(this).parent().addClass('on').siblings().removeClass('on');
		$('.temwrap .item').eq(index).addClass('on').siblings().removeClass('on');
		if(index==0) {
			$('#nav_left li>a').click()
		}
	})
	$('.right_tabul').on('click','li i',function(e) {
		e.preventDefault();
		var index = $(this).parents('li').index();
		if($(this).parents('li').hasClass('on')) {
			$(this).parents('li').prev().find('a').click();
		}			
		$(this).parents('li').remove();
		$('.temwrap .item').eq(index).remove();
		tabarr.splice(index-1,1);
		console.log(tabarr)
	})*/
	$('#nav_left').on('click','a',function(e) {
		e.preventDefault();
		var _this = $(this)
		var page_url = _this.attr('href');
		var page_title = _this.text();		
		if(page_url!='javascript:;') {
			$('.main_loading').show()
			$('iframe').attr('src',page_url)
			$('iframe').load(function() {
				console.log('加载完成')
				$('.main_loading').hide()
			})
			//$('iframe').attr('src',page_url)
			$('.right_tabul a').text(page_title);
			_this.addClass('on').parent().siblings().find('a').removeClass('on');
			_this.closest('li').addClass('on').siblings().removeClass('on');
		}		
	})
	$('.hiddiv a').click(function(e) {
		e.preventDefault();
		var _this = $(this)
		var page_url = _this.attr('href');
		var page_title = _this.text();	
		if(page_url!='javascript:;') {
			$('.main_loading').show()
			$('iframe').attr('src',page_url)
			$('iframe').load(function() {
				console.log('加载完成')
				$('.main_loading').hide()
			})
			$('.right_tabul a').text(page_title);
		}
	})
})