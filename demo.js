//window.onload=function(){
//alert(Base.getId('box').innerHTML);
//Base.getId('box').css('color','red').css('background','black').html('pox').click(function(){});
//var base = new Base();
//alert(base.getId('box').elements.length);

//base.getId('box').css('color','red').css('background','black');
//alert(base.getId('box').elements.length);
//alert(base.getTagName('p').elements.length);
//alert(base.getTagName('p').elements.length);
//$().getTagName('p').css('background','red').css('color','blue').html('biaoti').click(function(){
//	alert('click');
//});
//$().getId('box').css('background','yellow');
//alert($().getId('box').css('color'));
//$().getId('box').css('color','green');
//alert($().getClass('red').elements.length);

//$().getClass('red','bbb').css('background','green');
//$().getId('box').css('color','red');
//$().getId('pox').addClass('a').addClass('b').removeClass('a');
//$().addRule(0,'body','background:green',0);
//$().removeRule(0,0);
//var obutton = document.getElementById('button');
//addEvent(obutton,'click',fn);
//addEvent(obutton,'click',fn1);
//addEvent(obutton,'click',fn2);
//removeEvent(obutton,'click',fn1);
//function fn(e){
//	alert(1+this.value+e.clientX);
//	//alert(this.value);
//}
//function fn1(e){
//	alert(2+this.value+e.clientX);
//	//alert(this.value);
//}
//function fn2(e){
//	alert(3+this.value+e.clientX);
//	//alert(this.value);
//}
//var a = document.getElementById('a');
//addEvent(a,'click',function(e){
//	e.preventDefault();
//})
//addEvent(obutton,'click',function(e){
//	e.stopPropagation();//阻止冒泡
//	alert('button');
//});
//addEvent(document,'click',function(){
//	alert('document');
//});

// CSS选择器

//$().getClass('a').css('color','red');
//$('#box').css('color','red');
//$().getId('box').click(function(){
//	$(this).css('color','red');
//});
//$('.a').css('color','red');
//$('p').find('span').css('color','red');
//$('span').css('color','red');
//$('p').find('.a').css('color','red');
//$('p').find('#q').css('color','red');
//$('#box').css('color','red');
//$('.a').css('color','red');
//$('.a').css('color','red');
//$('p').find('.a').css('color','red');
//$('div').find('span').css('color','red');

//css选择器下

//$('#box').find('p').find('.a').css('color','red');
//$('div div').css('color','red');

//浏览器检测  需要打开网页的时候直接运行这里采用自执行函数
//(function(){
//	window.sys={};   //让外部可以访问,保存浏览器信息对象
//	var ua = navigator.userAgent.toLowerCase();  //获取浏览器信息字符串
//	var s;					//浏览器信息数组,浏览器名称+版本号；
//alert(ua.match(/chrome\/([\d.]+)/));
//alert(ua.match(/opera\/.*version\/([\d.]+)/));
//alert(ua.match(/version\/([\d.]+).*safari/));
//IE

/*
if((/msie ([\d.]+)/).test(ua)){
	s = ua.match(/msie ([\d.]+)/);
	sys.ie=s[1];
}
//火狐
if((/firefox\/([\d.]+)/).test(ua)){
	s=ua.match(/firefox\/([\d.]+)/);
	sys.firefox=s[1];
}
//谷歌
if((/chrome\/([\d.]+)/).test(ua)){
	s=ua.match(/chrome\/([\d.]+)/);
	sys.chrome=s[1];
}
if((/opera\/.*version\/([\d.]+)/).test(ua)){
	s=ua.match(/opera\/.*version\/([\d.]+)/);
	sys.opera=s[1];
}
if((/version\/([\d.]+).*safari/).test(ua)){
	s=ua.match(/version\/([\d.]+).*safari/);
	sys.safari=s[1];
}
*/
//	true ?s=1:0;
//	alert(s);
//	(s=ua.match(/msie ([\d.]+)/))?sys.ie=s[1]:
//	(s=ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:
//	(s=ua.match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:
//	(s=ua.match(/opera\/.*version\/([\d.]+)/))?sys.opera=s[1]:
//	(s=ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:0;
//	
//	
//})();
//alert(sys.firefox);
//alert(sys.opera);
//if(sys.ie){
//	alert('这是IE浏览器');
//}
//alert(sys.chrome);
//alert(sys.firefox);
//}

//传统DOM加载window.onload=function(){}

//现代DOM加载    IE678不支持现代的DOM树加载
//addEvent(document,'DOMcontentLoaded',function(){
//	//dom操作
//	//如果有图片,先执行节点操作的内容,DOM树结构加载完毕后即可执行
//	alert(1);
//})

//IE678模拟DOMContentLoaded
//document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>');
//var ie_loaded=document.getElementById('ie_loaded');
////判断是否完全加载完毕DOM了
//ie_loaded.onreadystatechange=function(){
//	if(this.readyState=='complete'){ //这里已经判断DOM加载完毕后了
//		//DOM操作
//	
//	}
//}
//PS:有缺陷，如果里面有iframe标签，那么这种方法就会等待iframe里面的内容加载完毕才能操作DOM

//使用doscroll模拟DOMContentLoaded 有iframe标签也不怕
//var timer = null;
//timer = setInterval(function(){
//	try{
//		document.documentElement.doScroll('left');
//	}catch(e){
//		//TODO handle the exception
//	}
//})

/*
上节课封装代码
function addDomLoaded(fn){
	if(document.addEventListener){
		addEvent(document,'DOMContentLoaded',function(){
			fn();
			removeEvent(document,'DOMContentLoaded',arguments.callee);
		})
	}else{
		var timer = null;
		timer = setInterval(function(){
			try{
				document.documentElement.doScroll('left');
				fn();
			}catch(e){
				//TODO handle the exception
			}
		})
	}
}
addDomLoaded(function(){
	//
});

*/
//alert(document.readyState);

function addDomLoaded(fn) {

	var isReady = false;
	var timer = null;

	function doReady() {
		if(timer) clearInterval(timer);
		if(isReady) return;
		isReady = true;
		fn();
	}

	if((sys.opera&&sys.opera<9)||(sys.firefox&&sys.firefox<3)||(sys.webkit&&sys.webkit<525)){
		timer = setInterval(function() {
			if(/loaded|complete/.test(document.readyState)) { //loaded是部分加载,有可能只是DOM加载完毕，completd = onload
				doReady();
			}
		}, 1);
	}else if(document.addEventListener){ //w3c
		addEvent(document,'DOMContentLoaded',function(){
			fn();
			removeEvent(document,'DOMContentLoaded',arguments.callee);
		});
	}else if(sys.ie&&sys.ie<9){
		var timer = null;
		timer = setInterval(function(){
			try{
				document.documentElement.doScroll('left');
				doReady();
			}catch(e){
				//TODO handle the exception
			}
		},1);	
	}
}

addDomLoaded(function() {
	var box = document.getElementById('box');
	alert(box.innerHTML);
});