﻿(function(a,c,d,b,f,e,g){a.GoogleAnalyticsObject=f;a[f]=a[f]||function(){(a[f].q=a[f].q||[]).push(arguments)};a[f].l=1*new Date;e=c.createElement(d);g=c.getElementsByTagName(d)[0];e.async=1;e.src=b;g.parentNode.insertBefore(e,g)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-43015655-1","jonmann20.github.io");ga("send","pageview");
var utils=function(){return{degToRad:function(a){return 0.017453292519943295*a}}}(),Dir=Object.freeze({NONE:0,TOP:1,BOT:2,LEFT:3,RIGHT:4}),Inv_e=Object.freeze({NOT_HIT:0,HIT_WHITE:1,HIT_RED:2}),bullet={color:"rgba(0, 182, 255, .85)",w:19.5,h:9,speed:8};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,1E3/game.fps)}}();
var audio=function(){return{bgMusic:new Audio("audio/firstChiptune/firstChiptune.mp3"),enterSound:new Audio("audio/synthetic_explosion_1.mp3"),itemPickedUp:new Audio("audio/life_pickup.mp3"),heartbeat:new Audio("audio/heartbeat.mp3"),jump:new Audio("audio/jump.mp3"),thud:new Audio("audio/thud.mp3"),step:new Audio("audio/step.mp3"),effort:new Audio("audio/woosh.mp3"),discovery:new Audio("audio/spell3.mp3"),enemyDeath:new Audio("audio/death.mp3"),heroDeath:new Audio("audio/DiscsOfTron_Cascade.mp3"),
enchant:new Audio("audio/enchant.mp3"),isOn:!1,play:function(a,c){c="undefined"!==typeof c?c:!0;if(a.ended)a.play();else if(c||0===a.currentTime)a.pause(),a.currentTime=0,a.play()},handleMuteButton:function(){$(".audioState").hasClass("off")?($(".audioState span").removeClass("icon-volume-mute").addClass("icon-volume-medium"),$(".audioState").removeClass("off"),$(".audioState").addClass("on"),audio.mute(!1)):($(".audioState span").removeClass("icon-volume-medium").addClass("icon-volume-mute"),$(".audioState").removeClass("on"),
$(".audioState").addClass("off"),audio.mute(!0))},mute:function(a){(audio.discovery.muted=audio.enterSound.muted=audio.bgMusic.muted=audio.itemPickedUp.muted=audio.heartbeat.muted=audio.effort.muted=audio.thud.muted=audio.jump.muted=audio.step.muted=audio.enemyDeath.muted=audio.heroDeath.muted=audio.enchant.muted=a)?audio.bgMusic.pause():audio.bgMusic.play();audio.isOn=!a}}}(),Graphics=function(){var a=1,c=!0;return{blinkText:function(d,b,f,e){e="undefined"!==typeof e?e:"PRESS ENTER";0>=a?c=!1:1.55<
a&&(c=!0);var g=game.dt/1E3;a+=c?-g:g;ctx.font=d+"px 'Press Start 2P'";d=ctx.measureText(e).width;ctx.fillStyle="rgba(233, 233, 233,"+a+")";ctx.fillText(e,b-d/2,f)},drawEllipse:function(a,b,c,e){var g=0.5522848*(c/2),h=0.5522848*(e/2),k=a+c,l=b+e;c=a+c/2;e=b+e/2;ctx.beginPath();ctx.moveTo(a,e);ctx.bezierCurveTo(a,e-h,c-g,b,c,b);ctx.bezierCurveTo(c+g,b,k,e-h,k,e);ctx.bezierCurveTo(k,e+h,c+g,l,c,l);ctx.bezierCurveTo(c-g,l,a,e+h,a,e);ctx.closePath();ctx.fill()},drawRotate:function(a,c,f,e){ctx.save();
ctx.translate(c,f);ctx.rotate(utils.degToRad(e));ctx.translate(0.5*-a.width,0.5*-a.height);ctx.drawImage(a,0,0);ctx.restore()}}}(),Physics=function(){return{isCollision:function(a,c,d,b){b="undefined"!==typeof b?a.x+a.lvlX:a.x;return b+d<=c.x+c.w&&c.x+d<=b+a.w&&a.y+d<=c.y+c.h&&c.y+d<=a.y+a.h?!0:!1}}}();
window.GameObj=function(){var a=null,c=!1;return{initX:-1,x:-1,initY:-1,y:-1,w:-1,h:-1,vY:0,init:function(d,b,f,e,g){this.initX=this.x=d;this.intiY=this.y=b;this.w=f;this.h=e;"undefined"!==typeof g&&(a=new Image,a.onload=function(){c=!0},a.src=g)},updatePos:function(){this.y=this.y<FULLH-game.padFloor-this.h?this.y+this.vY:FULLH-game.padFloor-this.h},draw:function(){c?ctx.drawImage(a,this.x,this.y):(ctx.fillStyle="red",ctx.fillRect(this.x,this.y,this.w,this.h))},getImg:function(){return a}}};
window.GameItem=function(){function a(){return function(){this.visible&&!this.collected&&c.apply(this)}}var c=null;return{collected:!1,holding:!1,visible:!0,val:-1,init:function(d,b,f){$.extend(this,d);this.val=b;"undefined"!==typeof f&&(this.visible=f);c=this.draw;this.draw=a()}}};
var Enemy=function(){function a(){return function(){if(b||f){if(1<d){var a=this.w/d*this.health;ctx.fillStyle="red";ctx.fillRect(this.x,this.y-12,a,4)}ctx.save();f&&(ctx.globalAlpha=0.3);c.apply(this);ctx.restore()}}}var c=null,d=0,b=!0,f=!1,e=!0;return{active:!1,health:0,init:function(b,e){$.extend(this,b);this.health=d=e;c=this.draw;this.draw=a()},update:function(){if(f){if(this.x+=e?2:-2,this.y-=14,0>this.x||this.x>FULLW)f=!1}else b&&this.active&&0===game.totalTicks%3&&(this.x<hero.x?++this.x:
this.x>hero.x&&--this.x)},death:function(){e=hero.dirR;audio.enemyDeath.play();hero.xp+=2;b=!1;f=!0}}},startScreen=function(){function a(){13 in keysDown?(++game.lvl,audio.enterSound.play(),audio.bgMusic.pause(),setTimeout(function(){audio.bgMusic=new Audio("audio/inspiredBySparkMan/sparkBoy.mp3");audio.bgMusic.loop=!0;audio.bgMusic.volume=0.45;audio.isOn?audio.bgMusic.play():audio.bgMusic.pause()},1E3),game.loop()):requestAnimFrame(startScreen.loop)}var c=0,d=String.fromCharCode("169")+" 2013 JON WIEDMANN";
return{loop:function(){a();ctx.fillStyle="#000";ctx.fillRect(0,0,FULLW,FULLH+game.padHUD);ctx.font="29px 'Press Start 2P'";var b=HALFW-ctx.measureText("JON'S").width/2+11,f=58;ctx.setTransform(1,0,-0.4,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("J",b+4,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("J",b,f);ctx.setTransform(1,0,-0.2,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("O",b+32,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("O",b+28,f);ctx.setTransform(1,0,0.05,1.41,0,-1);ctx.fillStyle="#222";ctx.fillText("N",
b+58,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("N",b+54,f);ctx.setTransform(1,0,0.23,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("'",b+78,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("'",b+74,f);ctx.setTransform(1,0,0.42,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("S",b+95,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",b+91,f);ctx.font="36px 'Press Start 2P'";b=HALFW-ctx.measureText("QUEST").width/2+30;f=98;ctx.setTransform(1,0,-0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("Q",b+4,f+3);ctx.fillStyle=
"#ff6a00";ctx.fillText("Q",b,f);ctx.setTransform(1,0,-0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("U",b+26,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("U",b+22,f);ctx.setTransform(1,0,0.03,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("E",b+50,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("E",b+46,f);ctx.setTransform(1,0,0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("S",b+74,f+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",b+70,f);ctx.setTransform(1,0,0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("T",
b+90,f+4);ctx.fillStyle="#ff6a00";ctx.fillText("T",b+86,f);ctx.setTransform(1,0,0,1,0,0);Graphics.blinkText(22,HALFW,HALFH+81);ctx.font="13px 'Press Start 2P'";ctx.fillStyle="#ddd";ctx.fillText(d,HALFW-ctx.measureText(d).width/2,FULLH+44);b=(new Date).getTime();game.dt=b-(c||b);c=b}}}(),level=function(){function a(a,c){var b=0,e;for(e in a)"none"!=a[e]&&(g[e]=new Image,g[e].onload=function(){c(this.num)},g[e].src=a[e],g[e].num=b),++b}var c=null,d=null,b=null,f=null,e=Array(5),g={};return{collisionPts:{},
width:0,init:function(){f=new GameObj;f.init(238,FULLH+31,25,24,"img/medKit.png");b=new GameObj;b.init(342,FULLH+31,25,25,"img/syringe.png");c=new GameObj;c.init(447,FULLH+32,24,24,"img/shuriken.png");d=new GameObj;d.init(548,FULLH+33,22,24,"img/cash.png");level.collisionPts={lvl0:{obj0:{x:310,y:161,w:200,h:30},obj1:{x:600,y:95,w:200,h:30},obj2:{x:562,y:230,w:300,h:30}}};for(var g=0;5>g;g++)e[g]={status:!1,bgColor:"#"+Math.floor(16777215*Math.random()).toString(16)};a({lvl0:"img/lvl0.jpg",lvl1:"none"},
function(a){e[a].status=!0});level.reset();lvl0.init()},reset:function(){level.width=3198;hero.x=23;hero.y=canvas.height-hero.h;hero.isJumping=!1;hero.bulletArr.length=0},update:function(){switch(game.lvl){case 0:lvl0.update()}},updateObjs:function(){switch(game.lvl){case 0:lvl0.updateObjs()}},render:function(){e[game.lvl].status?ctx.drawImage(g["lvl"+game.lvl],hero.lvlX,0,FULLW,FULLH,0,0,FULLW,FULLH):(ctx.fillStyle=e[game.lvl].bgColor?e[game.lvl].bgColor:"#222",ctx.fillRect(0,0,FULLW,FULLH));ctx.fillStyle=
"#070707";ctx.fillRect(0,FULLH,FULLW,game.padHUD);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText("HP-"+hero.healthLvl,15,FULLH+24);ctx.fillText("MP-"+hero.manaLvl,15,FULLH+48);ctx.fillText("XP",15,FULLH+71);ctx.fillText(hero.medKits,210,FULLH+50);f.draw();ctx.fillText(hero.manaKits,315,FULLH+50);b.draw();ctx.fillText(hero.ammo,410,FULLH+50);c.draw();ctx.fillText(hero.cash,515,FULLH+50);d.draw();var a=Math.floor(game.actualTime/60),k=game.actualTime%60;10>k&&(k="0"+k);10>a&&(a=
"0"+a);ctx.fillText(a+":"+k,FULLW-84,FULLH+34);switch(game.lvl){case 0:lvl0.render()}},drawAfterHero:function(){0===game.lvl&&lvl0.crate.holding&&lvl0.crate.draw()}}}(),lvl0=function(){var a=null,c=null,d=null,b=null,f=null;return{init:function(){var e=GameObj();e.init(680,71,20,24,"img/sack.png");d=GameItem();d.init(e,5);e=GameObj();e.init(2100,FULLH-game.padFloor-38+1,28,38,"img/cyborgBnW.png");a=Enemy();a.init(e,1);e=GameObj();e.init(140,50,22,24,"img/cash.png");c=GameItem();c.init(e,10,!1);e=
GameObj();e.init(400,FULLH-game.padFloor-26,24,26,"img/crate.png");lvl0.crate=GameItem();lvl0.crate.init(e);b=GameObj();b.init(1300,80,340,190,"img/belt.png");f=GameObj();f.init(1300,80,340,190,"img/belt2.png")},update:function(){c.updatePos();a.update();!d.collected&&Physics.isCollision(hero,d,0)&&(d.collected=!0,audio.itemPickedUp.play(),hero.ammo+=d.val);if(c.visible)!c.collected&&Physics.isCollision(hero,c,0)&&(c.collected=!0,audio.itemPickedUp.play(),hero.cash+=c.val);else for(var b=0;b<hero.bulletArr.length;++b)Physics.isCollision(hero.bulletArr[b],
c,-17)&&(c.visible=!0,c.vY=4,audio.discovery.play());lvl0.crate.holding?(lvl0.crate.x=hero.dirR?hero.x+22:hero.x-22,lvl0.crate.y=hero.y):Physics.isCollision(hero,lvl0.crate,12)&&(hero.isCarrying=!0,lvl0.crate.holding=!0,lvl0.crate.vY=6.5);lvl0.crate.updatePos();if(0<a.health)for(Physics.isCollision(hero,a,0)&&(a.active=!0,hero.invincible||(audio.play(audio.heartbeat,!0),hero.invincible=!0,--hero.health)),b=0;b<hero.bulletArr.length;b++){var f=!1;Physics.isCollision(hero.bulletArr[b],a,0)&&(f=!0,audio.play(audio.thud,
!0));f&&(a.active=!0,hero.bulletArr.splice(b,1),--a.health,0>=a.health&&a.death())}},updateObjs:function(){d.x-=hero.vX;a.x-=hero.vX;c.x-=hero.vX;b.x-=hero.vX;lvl0.crate.x-=hero.vX},render:function(){d.collected||d.draw();c.draw();a.draw();0==game.totalTicks%60?f.draw():b.draw();lvl0.crate.holding?0===hero.vX&&(lvl0.crate.x+=hero.dirR?-20:24,lvl0.crate.y+=6):lvl0.crate.draw()}}}(),game=function(){var a=0,c,d=[0];return{gravity:0.9,friction:0.45,padBot:119,padHUD:80,padFloor:39,lvl:-1,dt:0,fps:60,
totalTicks:0,actualTime:0,loop:function(b){hero.update();level.update();level.render();hero.render();level.drawAfterHero();game.dt=b-(c||b);c=b;b=Math.round(1E3/game.dt);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";"Infinity"!=b&&d.push(b);if(0===game.totalTicks%20){b=0;for(var f in d)b+=d[f];a=Math.floor(b/d.length);d=[]}ctx.fillText(a+" FPS",FULLW-84,FULLH+65);0===++game.totalTicks%60&&++game.actualTime;requestAnimFrame(game.loop)}}}(),hero=function(){var a=null,c=null,d=null,b=!1,f=null,
e=!0,g=!1,h=[];return{protectedInfo:{},ammo:20,cash:0,x:0,y:0,sx:0,sy:0,lvlX:0,w:28,h:38,vX:0,vY:0,maxVx:8,maxVy:15,dir:Dir.NONE,dirR:!0,speed:0.7,isJumping:!1,isCarrying:!1,onGround:!0,onObj:!0,onObjX:-1,onObjY:-1,jumpMod:5,jumpPower:5,jumpPowerMax:10,invincible:!1,invincibleTimer:120,initInvincibleTimer:120,health:4,maxHealth:5,medKits:1,healthLvl:1,mana:0,maxMana:4,manaKits:1,manaLvl:1,lvl:1,xp:0,xpNeeded:50,bulletArr:[],init:function(){f=new Image;f.onload=function(){b=!0};f.src="../dungeon/img/sprites/player/player.png";
$.get("../dungeon/img/sprites/player/player.xml",function(a){a=$(a).find("sprite");$(a).each(function(){var a=$(this).attr("n"),c=$(this).attr("x"),b=$(this).attr("y"),a=a.substring(0,a.length-4);h[a]={x:c,y:b}})});a=HeroInputComponent();a.init();c=HeroPhysicsComponent();d=HeroGraphicsComponent();d.init()},offObj:function(){hero.onObj=!1;hero.onObjX=-1;hero.onObjY=-1},update:function(){a.check();c.updatePosition();c.checkCollision();hero.invincible&&--hero.invincibleTimer;0>=hero.invincibleTimer&&
(hero.invincible=!1,hero.invincibleTimer=hero.initInvincibleTimer);0>=hero.health&&!g&&(audio.heroDeath.play(),audio.bgMusic.muted=!0,alert("You died"),location.reload(),g=!0);0===game.totalTicks%12&&(e=!e);var b={x:0,y:0},b=hero.isCarrying&&0===hero.vX&&hero.dir==Dir.NONE?h.playerDown:hero.dirR?hero.dir==Dir.RIGHT?Math.abs(hero.vX)<=3.5*hero.speed?h.playerRight_Step:e?h.playerRight_Run1:h.playerRight_Run2:h.playerRight:hero.dir==Dir.LEFT?Math.abs(hero.vX)<=3.5*hero.speed?h.playerLeft_Step:e?h.playerLeft_Run1:
h.playerLeft_Run2:h.playerLeft,d=hero.invincibleTimer%20;!hero.invincible||0!==d&&1!=d&&2!=d&&3!=d&&4!=d&&5!=d&&6!=d||(b={x:-1,y:-1});hero.sx=b.x;hero.sy=b.y},render:function(){b&&ctx.drawImage(f,hero.sx,hero.sy,hero.w,hero.h,hero.x,hero.y,hero.w,hero.h);d.drawBullets();d.drawHealth();d.drawMana();d.drawXP()}}}(),HeroGraphicsComponent=function(){var a=null;return{init:function(){a=new Image;a.src="img/shuriken.png";a.onload=function(){}},drawBullets:function(){for(var c=0;c<hero.bulletArr.length;++c){var d=
hero.bulletArr[c].dirR?hero.w:0;hero.bulletArr[c].deg+=5;Graphics.drawRotate(a,hero.bulletArr[c].x+d,hero.bulletArr[c].y+20,hero.bulletArr[c].deg)}},drawHealth:function(){for(var a=0;a<hero.health;++a)ctx.fillStyle="red",ctx.fillRect(80+21*a,FULLH+14,19,8)},drawMana:function(){for(var a=0;a<hero.mana;++a)ctx.fillStyle="#00b6ff",ctx.fillRect(80+21*a,FULLH+37,19,8)},drawXP:function(){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText((10>hero.xp?"0":"")+hero.xp+"/"+hero.xpNeeded,80,
FULLH+71)}}},HeroPhysicsComponent=function(){return{updatePosition:function(){hero.isJumping?(0<hero.jumpMod&&(hero.vY-=hero.jumpMod,--hero.jumpMod),hero.dir=Dir.TOP):hero.jumpMod=hero.jumpPower;hero.x!=hero.x+hero.vX&&audio.step.play();hero.y+=hero.vY;(hero.dirR&&hero.x>=canvas.width/2+35||!hero.dirR&&hero.x<=canvas.width/2-45)&&0<=hero.lvlX+hero.vX&&hero.lvlX+hero.vX<=level.width-canvas.width?(hero.lvlX+=hero.vX,level.updateObjs()):hero.x+=hero.vX},checkCollision:function(){for(var a=0;a<hero.bulletArr.length;a++)hero.bulletArr[a].x+=
hero.bulletArr[a].dirR?bullet.speed:-bullet.speed,(hero.bulletArr[a].x>canvas.width||0>hero.bulletArr[a].x)&&hero.bulletArr.splice(a,1);hero.onGround=!1;hero.y<-hero.h&&(hero.y=-hero.h,hero.vY=0);hero.y>canvas.height-game.padBot-hero.h?(hero.y=canvas.height-game.padBot-hero.h,hero.isJumping=!1,hero.onGround=!0):hero.onObj&&(hero.y=hero.onObjY);0>hero.x?hero.x=0:hero.x>canvas.width-hero.w&&(hero.x=canvas.width-hero.w);var c="lvl"+game.lvl,d=Dir.NONE,b;for(b in level.collisionPts[c])if(a=level.collisionPts[c][b],
Physics.isCollision(hero,a,0,!0)&&(hero.dirR?hero.lvlX-hero.x<a.x&&(hero.onObjX=a.x-hero.lvlX-hero.w,hero.onObjLvlX=hero.lvlX,d=Dir.LEFT):hero.x+hero.lvlX+hero.w>a.x+a.w&&(hero.onObjX=a.x-hero.lvlX+a.w,hero.onObjLvlX=hero.lvlX,d=Dir.RIGHT),hero.x!=hero.onObjX&&hero.y+hero.h-17<a.y&&0<hero.vY?(hero.onObjY=hero.y=a.y-hero.h,hero.isJumping=!1,hero.onObj=!0,d=Dir.TOP):hero.y+hero.h>a.y+a.h&&(-4>hero.vY&&audio.play(audio.thud,!0),hero.onObjY=hero.y=a.y+a.h,hero.jumpMod=0,hero.vY=0,d=Dir.BOT)),d!=Dir.NONE){if(d==
Dir.LEFT||d==Dir.RIGHT)hero.x=hero.onObjX,hero.lvlX=hero.onObjLvlX;break}d==Dir.NONE&&hero.offObj()}}},HeroInputComponent=function(){return{init:function(){keysDown={};lastKeyDown=-1;addEventListener("keydown",function(a){32==a.keyCode?a.preventDefault():77==a.keyCode?audio.handleMuteButton():75!=a.keyCode||hero.isJumping||75==lastKeyDown&&75 in keysDown||!hero.onObj&&!hero.onGround?74!=a.keyCode||74==lastKeyDown&&74 in keysDown||!(0<hero.ammo)||hero.isCarrying||(audio.play(audio.effort),hero.bulletArr[hero.bulletArr.length]=
{x:hero.x,y:hero.y,w:bullet.w,h:bullet.h,dirR:hero.dirR,deg:0},--hero.ammo):(audio.jump.play(),hero.vY=0,hero.isJumping=!0,hero.offObj());lastKeyDown=a.keyCode;keysDown[a.keyCode]=!0},!1);addEventListener("keyup",function(a){delete keysDown[a.keyCode]},!1)},check:function(){hero.dir=Dir.NONE;hero.onObj||(hero.vY=hero.vY+game.gravity>hero.maxVy?hero.maxVy:hero.vY+game.gravity);0!==hero.vX&&(hero.vX+=0<hero.vX?-game.friction:game.friction);65 in keysDown&&(hero.vX=Math.abs(hero.vX-hero.speed)>hero.maxVx?
-hero.maxVx:hero.vX-hero.speed,hero.dirR=!1,hero.dir=Dir.LEFT);68 in keysDown&&(hero.vX=Math.abs(hero.vX+hero.speed)>hero.maxVx?hero.maxVx:hero.vX+hero.speed,hero.dirR=!0,hero.dir=Dir.RIGHT);Math.abs(hero.vX)<hero.speed?hero.vX=0:hero.dir!=Dir.LEFT&&hero.dir!=Dir.RIGHT&&(hero.vX/=1.2);32 in keysDown&&(lvl0.crate.holding=!1,hero.isCarrying=!1);72 in keysDown&&0<hero.medKits&&hero.health<hero.maxHealth&&(++hero.health,--hero.medKits,audio.play(audio.enchant,!0));82 in keysDown&&!(17 in keysDown)&&0<
hero.manaKits&&hero.mana<hero.maxMana&&(++hero.mana,--hero.manaKits,audio.play(audio.enchant,!0))}}};
jq.Main=function(){return{init:function(){canvas=$("canvas")[0];ctx=canvas.getContext("2d");FULLW=canvas.width=720;FULLH=canvas.height=440;FULLH-=game.padHUD;HALFW=FULLW/2;HALFH=FULLH/2;audio.bgMusic.loop=!0;audio.bgMusic.volume=0.7;audio.bgMusic.pause();audio.enemyDeath.volume=0.6;audio.jump.volume=0.4;audio.thud.volume=0.78;audio.discovery.volume=0.7;audio.mute(!0);$(".audioState").on("click",audio.handleMuteButton);audio.handleMuteButton();ctx.fillStyle="#e1e1e1";ctx.font="25px Helvetica";ctx.fillText("Loading...",
150,canvas.height/2);level.init();hero.init();startScreen.loop()}}}();$(function(){var a=setInterval(function(){jq.scriptsLoaded===jq.numScripts&&(jq.Main.init(),clearInterval(a))},10)});
