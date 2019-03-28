function Enter()
{
               //得到画布对象
	g_Canvas = 
		document.getElementById('GameCanvas');
		
	//设置鼠标的三个事件
	g_Canvas.onmousedown = MouseDown;
	g_Canvas.onmousemove = MouseMove;
	g_Canvas.onmouseup = MouseUp;
	
	
		
	//得到渲染对象
	g_Render = 
		g_Canvas.getContext('2d');
		
	//加载资源
	g_ImageLoaded = 0;
	g_ImageObjects = [];
	for (var i = 0; i < g_ImageFiles.length; ++i)
	{
		var imageobject = new Image();
		imageobject.src = g_ImageFiles[i];
		imageobject.onload = LoadResources;
		g_ImageObjects.push(imageobject);
	}
	
	//设置游戏休息毫秒
	g_Sleep = 25;
}

function LoadResources()
{
//已经加载的图像数量递增
	g_ImageLoaded += 1;
	
	//所有图像资源加载成功
	if (g_ImageLoaded === g_ImageObjects.length)
		GameInit();
}