



$(function(){
	$('#header .member').hover(function(){
		$(this).css('background','url(images/arrow2.png) no-repeat 55px center');
		$('#header .member_ul').show();
	},function(){
		$(this).css('background','url(images/arrow.png) no-repeat 55px center');
		$('#header .member_ul').hide();
	});
	
	
	var login=$('#login');
	var screen=$('#screen');
	login.center(350,250).resize(function(){
		if(login.css('display')=='block'){
			screen.lock()
		}
	});
	$('#header .login').click(function(){
		login.css('display','block');
		login.center(350,250);
		screen.lock();
	});
	$('#login .close').click(function(){
		screen.unlock();
		login.css('display','none');
	});
	
	//登录框拖拽
	login.drag($('#login h2').first());
	
	
	
});


//$().ready(function(){
//	alert(document.body);
//});







//window.onload=function(){
//	//个人中心
//	$().getClass('member').hover(function(){
//		$(this).css('background','url(images/arrow2.png) no-repeat 55px center');
//		$().getClass('member_ul').show();
//	},function(){
//		$(this).css('background','url(images/arrow.png) no-repeat 55px center');
//		$().getClass('member_ul').hide();
//	});
//	
//	//登录框
//	var login=$().getId('login');
//	var screen=$().getId('screen');
//	login.center(350,250).resize(function(){
////		login.center(350,250);
//		if(login.css('display')=='block'){
//			screen.lock()
//		}
//	});
//	$().getClass('login').click(function(){
//		login.css('display','block');
//		login.center(350,250);
//		screen.lock();
//	});
//	$().getClass('close').click(function(){
//		screen.unlock();
//		login.css('display','none');
//	});
//	login.drag([$().getTagName('h2').getElement(0)]);
//	//alert();
	/*
	var top=(document.documentElement.clientHeight-250)/2;
	var left=(document.documentElement.clientWidth-350)/2;
	alert();
	$().getId('login').css('top',top+'px').css('left',left+'px');
	
	//浏览器改变大小的事件
	window.onresize=function(){
		var top=(document.documentElement.clientHeight-250)/2;
		var left=(document.documentElement.clientWidth-350)/2;
		$().getId('login').css('top',top+'px').css('left',left+'px');
	}
	*/
	
	//拖拽流程
	//1，點下去
	//2，在點下去移動
	//抬起
	//點擊某個物體用oDiv   move和up是全局区域应该用document
	
//	var oDiv = document.getElementById('login');
//	oDiv.drag();
	
	
//}
