//常量定义
var bs = 0; //开始场景
var gs = 1; //游戏场景
var zd = 2; //菜单场景
var js = 3; //结算场景

//变量定义
var scene; //当前场景
var button_down; //按钮按下标志
var player_x = 180;
var player_y = 650;
var player_HD = 5;

var Monster_x1 = randi(0,420)
var Monster_y1 = 0
var Monster;
var Monster = new Array();
var Bulltex = -1,Bulltey = -1;
var Snum = 0;
var rand = randi(1,200);;


//场景切换
function ChangeScene(id)
{
	if (bs === id)
	{
		BeginSceneEnter();
	}
	else if (gs === id)
	{
		GameSceneEnter();
	}
	else if(zd === id)
	{
		SystemSceneEnter();
	}
	else if(js === id)
	{
		DieSceneEnter();
	}
	scene = id;
}

var Bullte = 
{
   CreateNew:function()
   {
	   var bullte = {};
	   bullte.x = player_x + 48;
	   bullte.y = player_y - 20;
	   return bullte;
   }	
}
var B  = new Array();

var Bullte2 = 
{
   CreateNew:function()
   {
	   var bullte = {};
	   bullte.x = player_x + 48;
	   bullte.y = player_y - 20;
	   return bullte;
   }	
}
var B2  = new Array();

var Monster = 
{
	 CreateNew:function()
	 {
		 var monster = {};
		 monster.x = randi(0,420);
		 monster.y = -10;
		 monster.hd = 5;
		 monster.live = true;
		 monster.speed= randi(1,5000)/1000;
		 return monster;
	 }
}

var Mon = new Array();

//鼠标按下
function MouseDown(m)
{
	
	//得到当前点中的画布坐标
	var p = client_canvas(m.x, m.y);

	
	if (bs === scene)
	{
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 600 && p.y <= 700)
			button_down = true;
	}
	else if (gs === scene)
	{
		if (p.x >= 410 && p.x <= 410 + 41 && p.y >= 0 && p.y <= 82)
			button_down = true;
		if(Snum <= 100)
		{
		   var bullte = Bullte.CreateNew();
		   B.push(bullte);
		}
		else
		{
		   var bullte = Bullte2.CreateNew();
		   B2.push(bullte);
		}
			
	}
	else if(zd === scene)
	{
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 600 && p.y <= 650)
			button_down = true;
	}
}

//鼠标移动
function MouseMove(m)
{
   var p = client_canvas(m.x, m.y);
   player_x = p.x - 50
   player_y = p.y - 50
}

//鼠标抬起
function MouseUp(m)
{
	//得到当前点中的画布坐标
	var p = client_canvas(m.x, m.y);
	var lx, ly;
	var i;
	var date;
	
	if (bs === scene)
	{
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 600 && p.y <= 700)
		{
			button_down = false;
			player_HD = 5;
			Snum = 0;
			//场景切换
			ChangeScene(gs);
		}
	}
	else if (gs == scene)
	{
		if (p.x >= 410 && p.x <= 410 + 41 && p.y >= 750 && p.y <= 790)
		{
			button_down = false;
		    ChangeScene(zd);
		}
	}
	else if (zd == scene)
	{
		if (p.x >= 410 && p.x <= 410 + 41 && p.y >= 750 && p.y <= 790)
		{
			button_down = false;
		    ChangeScene(zd);
		}
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 600 && p.y <= 650)
		{
			button_down = false;
		    ChangeScene(gs);
		}
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 660 && p.y <= 710)
		{
			button_down = false;
			player_HD = 5;
			Snum = 0;
			for(i = 0;i<B.length;++i)
			{
				B.del(B[i]);
			}
		    ChangeScene(bs);
		}
	}
	else if (js == scene)
	{
		if (p.x >= 125 && p.x <= 125 + 150 && p.y >= 660 && p.y <= 710)
		{
			button_down = false;
		    ChangeScene(bs);
		}
	}
}

//游戏初始
function GameInit()
{
	var i ;
	//初始化当前场景
	scene =bs;
	
	//调用当前场景进入
	BeginSceneEnter();

	//启动游戏循环
	g_Timer = setTimeout(GameRun, 0);
}

function CreateMonster()
{
	var i;
	
	for(i = 0;i<randi(5,10);++i)
	{
	   var monster = Monster.CreateNew();
	   Mon.push(monster);
	}
	
}
function MoveBoom()
{
	var i,k,i2,k2;
	if(Snum <= 100)
	{
	  for( k = 0;k<Mon.length;++k)
		{	
	         var e = Mon[k]; 
			for(i = 0;i<B.length;++i)
			{
				var b = B[i];
				if(b.x+9>e.x&&b.x<e.x+51&&b.y<e.y+39)
				{
					B.del(B[i]);
					Mon.del(Mon[k]);
					Snum+=randi(1,5);
				}

			}
		}
	}
	else
		
		 for( k2 = 0;k2<Mon.length;++k2)
		{	
	         var e2 = Mon[k2]; 
			for(i2 = 0;i2<B2.length;++i2)
			{
				var b2 = B2[i2];
				if(b2.x+22>e2.x&&b2.x<e2.x+51&&b2.y<e2.y+39)
				{
					B2.del(B2[i2]);
					Mon.del(Mon[k2]);
					Snum+=randi(1,5);
				}

			}
		}
}
function PlayerBoom()
{
      var k;
	  for(k = 0;k<Mon.length;++k)
		{	
	         var e = Mon[k]; 

				if(e.x+51 > player_x && e.x < player_x +100  && e.y + 39 > player_y)
				{
					player_HD -= 1;
					Mon.del(Mon[k]);
					if(player_HD === 0)
					{
						ChangeScene(js);
					}
				}
			
		}	
}

//monsterMove
function Move()
{
	var i,k;
	for(i = 0;i<B.length;++i)
	{
		B[i].y-=5;
	}
		for(i = 0;i<B2.length;++i)
	{
		B2[i].y-=5;
	}
	for(k = 0;k<Mon.length;++k)
	{
		if(Mon[k].live==true)
		Mon[k].y+=Mon[k].speed;
		if(Mon[k].y>800)
		{
			Mon.del(Mon[k]);
		}
	}
	
}



//游戏运行
function GameRun()
{
	switch (scene)
	{
	case bs : BeginSceneRun(); break;
	case gs : GameSceneRun(); break;
	case zd : SystemSceneRun(); break;
	case js : DieSceneRun();break;
	}
	
	//CreateMonster
	if(Mon.length < 6)
      CreateMonster();
	
	//继续游戏循环
	g_Timer = setTimeout(GameRun, g_Sleep)
			//碰撞判断
	
}


//开始场景进入
function BeginSceneEnter()
{
	//按钮按下标志
	button_down = false;
}

//开始场景运行
function BeginSceneRun()
{
	g_Render.drawImage(
		g_ImageObjects[0], 0, 0);
		
	g_Render.drawImage(
		g_ImageObjects[1],
		0, button_down ? 100 : 0, 200, 100,
		125, 600, 200, 100);
		
}

//开始场景进入
function GameSceneEnter()
{

}

//开始场景运行
function GameSceneRun()
{

	var i,k, lx, ly, delta_time, date;
	
	
	
	g_Render.drawImage(
		g_ImageObjects[2], 0, 0);
		
	g_Render.drawImage(
		g_ImageObjects[3], player_x, player_y);
				
	g_Render.drawImage(
		g_ImageObjects[8],
		0, button_down ? 41 : 0, 41, 41,
		409, 750, 41, 41);
		
		if(rand < 100)
		{
			for( k = 0;k<Mon.length-1;++k)
			{
				g_Render.drawImage(
					g_ImageObjects[4],Mon[k].x, Mon[k].y);
			}
		}
		else  if (rand > 101)
		{
			for( k = 0;k<Mon.length-1;++k)
			{
				g_Render.drawImage(
					g_ImageObjects[13],Mon[k].x, Mon[k].y);
			}
		}
		
		for(i = 0;i<B.length;++i)
		{
			g_Render.drawImage(
				g_ImageObjects[5],B[i].x, B[i].y);
		}
		
		for(i = 0;i<B2.length;++i)
		{
			g_Render.drawImage(
				g_ImageObjects[6],B2[i].x, B2[i].y);
		}
		
		
	g_Render.fillStyle = 'rgb(255,0,255,1)';
	g_Render.font = '18px Arial';
	g_Render.strokeStyle = 'rgb(100,100,100,1)';
	g_Render.strokeText(Snum, 55, 61);
	
	g_Render.strokeStyle = 'rgb(100,100,100,1)';
	g_Render.strokeText(player_HD, 55, 25);
			
	Move();
	MoveBoom();
	PlayerBoom();
}
function SystemSceneEnter()
{
	//按钮按下标志
	button_down = false;
}
function SystemSceneRun()
{
	g_Render.drawImage(
		g_ImageObjects[9], 0, 0);
		
	g_Render.drawImage(
		g_ImageObjects[7],
		0, button_down ? 40 : 0, 38, 40,
		270, 602, 38, 40);
		
	g_Render.drawImage(
		g_ImageObjects[11],
		0, button_down ? 47 : 0, 140, 47,
		125, 600, 140, 47);
		
	g_Render.drawImage(
		g_ImageObjects[12],
		0, button_down ? 47 : 0, 140, 47,
		125, 650, 140, 47);
		
		g_Render.drawImage(
		g_ImageObjects[7],
		0, button_down ? 40 : 0, 38, 40,
		270, 650, 38, 40);
}
function DieSceneEnter()
{}

function DieSceneRun()
{
	g_Render.drawImage(
		g_ImageObjects[10], 0, 0);
		
	g_Render.fillStyle = 'rgb(255,0,255,1)';
	g_Render.font = '35px Arial';
	g_Render.strokeStyle = 'rgb(100,100,100,1)';
	g_Render.strokeText(Snum, 250, 388);
	
		
	g_Render.drawImage(
		g_ImageObjects[12],
		0, button_down ? 47 : 0, 140, 47,
		125, 650, 140, 47);
		
		g_Render.drawImage(
		g_ImageObjects[7],
		0, button_down ? 40 : 0, 38, 40,
		270, 650, 38, 40);
}