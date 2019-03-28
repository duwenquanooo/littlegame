//画布对象
var g_Canvas;

//渲染对象
var g_Render;

//图像资源
var g_ImageFiles = 
[
      'Obj/image/ks.png',//0
	  'Obj/image/UI1.png',//1
	  'Obj/image/zd.png',//2
	   'Obj/image/pl.png',//3
	  'Obj/image/d1.png',//4
	   'Obj/image/bl.png',//5
	   'Obj/image/bl1.png',//6
	     'Obj/image/UI2.png',//7
		 'Obj/image/UI3.png',//8
		  'Obj/image/cdbj.png',//9
		   'Obj/image/sw.png',//10
		   'Obj/image/hdyx.png',//11
		   'Obj/image/fhzcd.png',//12
		    'Obj/image/d2.png'//13
];


//图像对象
var g_ImageObjects;

//加载数量
var g_ImageLoaded;

//循环休息毫秒时间
var g_Sleep;

//定时器
var g_Timer;

//浮点数转换整数
function f2i(f)
{
	return f - f % 1;
}

//得到指定范围随机值
function randi(min, max)
{
	var s = Math.random() * (max - min);
	return f2i(s) % (max - min + 1) + min;
}

//客户区坐标转换画布坐标
function client_canvas(cx,cy)
{
	//下面的代码得到当前canvas的包围矩形
	var bcr 
		= g_Canvas.getBoundingClientRect();
		
	var ox = bcr.x + (bcr.width - g_Canvas.width) / 2;
	var oy = bcr.y + (bcr.height - g_Canvas.height) / 2;
	
	return {
		x : cx - f2i(ox),
		y : cy - f2i(oy)};
}
//获取键盘输入
function noNumbers(e)
{
    var keynum;
    var keychar;
    keynum = window.event ? e.keyCode : e.which;
    keychar = String.fromCharCode(keynum);
    alert(keynum+':'+keychar);
}

Array.prototype.del = function(value)
{ 
      var index=0;
      for(;index<this.length;index++){
            if(this[index]==value) break;
      }
      this.splice(index,1); 
      return this;
 }