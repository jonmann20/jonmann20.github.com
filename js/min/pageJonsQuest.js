﻿(function(a,d,e,c,b,f,g){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;f=d.createElement(e);g=d.getElementsByTagName(e)[0];f.async=1;f.src=c;g.parentNode.insertBefore(f,g)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-43015655-1","jonmann20.github.io");ga("send","pageview");
var utils=function(){return{degToRad:function(a){return 0.017453292519943295*a}}}(),Dir=Object.freeze({NONE:0,TOP:1,BOT:2,LEFT:3,RIGHT:4}),Inv_e=Object.freeze({NOT_HIT:0,HIT_WHITE:1,HIT_RED:2}),bullet={color:"rgba(0, 182, 255, .85)",w:19.5,h:9,speed:8};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,1E3/game.fps)}}();
var audio=function(){return{bgMusic:new Audio("audio/firstChiptune/firstChiptune.mp3"),enterSound:new Audio("audio/synthetic_explosion_1.mp3"),itemPickedUp:new Audio("audio/life_pickup.mp3"),heartbeat:new Audio("audio/heartbeat.mp3"),jump:new Audio("audio/jump.mp3"),thud:new Audio("audio/thud.mp3"),step:new Audio("audio/step.mp3"),effort:new Audio("audio/woosh.mp3"),discovery:new Audio("audio/spell3.mp3"),enemyDeath:new Audio("audio/death.mp3"),heroDeath:new Audio("audio/DiscsOfTron_Cascade.mp3"),
enchant:new Audio("audio/enchant.mp3"),isOn:!1,play:function(a,d){d="undefined"!==typeof d?d:!0;if(a.ended)a.play();else if(d||0===a.currentTime)a.pause(),a.currentTime=0,a.play()},handleMuteButton:function(){$(".audioState").hasClass("off")?($(".audioState span").removeClass("icon-volume-mute").addClass("icon-volume-medium"),$(".audioState").removeClass("off"),$(".audioState").addClass("on"),audio.mute(!1)):($(".audioState span").removeClass("icon-volume-medium").addClass("icon-volume-mute"),$(".audioState").removeClass("on"),
$(".audioState").addClass("off"),audio.mute(!0))},mute:function(a){(audio.discovery.muted=audio.enterSound.muted=audio.bgMusic.muted=audio.itemPickedUp.muted=audio.heartbeat.muted=audio.effort.muted=audio.thud.muted=audio.jump.muted=audio.step.muted=audio.enemyDeath.muted=audio.heroDeath.muted=audio.enchant.muted=a)?audio.bgMusic.pause():audio.bgMusic.play();audio.isOn=!a}}}(),Graphics=function(){var a=1,d=!0;return{blinkText:function(e,c,b,f){f="undefined"!==typeof f?f:"PRESS ENTER";0>=a?d=!1:1.55<
a&&(d=!0);var g=game.dt/1E3;a+=d?-g:g;ctx.font=e+"px 'Press Start 2P'";e=ctx.measureText(f).width;ctx.fillStyle="rgba(233, 233, 233,"+a+")";ctx.fillText(f,c-e/2,b)},drawEllipse:function(a,d,b,f){var g=0.5522848*(b/2),h=0.5522848*(f/2),k=a+b,l=d+f;b=a+b/2;f=d+f/2;ctx.beginPath();ctx.moveTo(a,f);ctx.bezierCurveTo(a,f-h,b-g,d,b,d);ctx.bezierCurveTo(b+g,d,k,f-h,k,f);ctx.bezierCurveTo(k,f+h,b+g,l,b,l);ctx.bezierCurveTo(b-g,l,a,f+h,a,f);ctx.closePath();ctx.fill()},drawRotate:function(a,d,b,f){ctx.save();
ctx.translate(d,b);ctx.rotate(utils.degToRad(f));ctx.translate(0.5*-a.width,0.5*-a.height);ctx.drawImage(a,0,0);ctx.restore()}}}(),Physics=function(){return{isCollision:function(a,d,e,c){c="undefined"!==typeof c?a.x+a.lvlX:a.x;return c+e<=d.x+d.w&&d.x+e<=c+a.w&&a.y+e<=d.y+d.h&&d.y+e<=a.y+a.h?!0:!1}}}();
window.GameObj=function(){var a=null,d=!1;return{initX:-1,x:-1,initY:-1,y:-1,w:-1,h:-1,vY:0,init:function(e,c,b,f,g){this.initX=this.x=e;this.intiY=this.y=c;this.w=b;this.h=f;"undefined"!==typeof g&&(a=new Image,a.onload=function(){d=!0},a.src=g)},updatePos:function(){this.y=this.y<FULLH-game.padFloor-this.h?this.y+this.vY:FULLH-game.padFloor-this.h},draw:function(){d?ctx.drawImage(a,this.x,this.y):(ctx.fillStyle="red",ctx.fillRect(this.x,this.y,this.w,this.h))},getImg:function(){return a}}};
window.GameItem=function(){function a(){return function(){this.visible&&!this.collected&&d.apply(this)}}var d=null;return{collected:!1,holding:!1,visible:!0,val:-1,init:function(e,c,b){$.extend(this,e);this.val=c;"undefined"!==typeof b&&(this.visible=b);d=this.draw;this.draw=a()}}};
var Enemy=function(){function a(){return function(){if(c||b){if(1<e){var a=this.w/e*this.health;ctx.fillStyle="red";ctx.fillRect(this.x,this.y-12,a,4)}ctx.save();b&&(ctx.globalAlpha=0.3);d.apply(this);ctx.restore()}}}var d=null,e=0,c=!0,b=!1,f=!0;return{active:!1,health:0,init:function(c,b){$.extend(this,c);this.health=e=b;d=this.draw;this.draw=a()},update:function(){if(b){if(this.x+=f?2:-2,this.y-=14,0>this.x||this.x>FULLW)b=!1}else c&&this.active&&0===game.totalTicks%3&&(this.x<hero.x?++this.x:
this.x>hero.x&&--this.x)},death:function(){f=hero.dirR;audio.enemyDeath.play();hero.xp+=2;c=!1;b=!0}}},startScreen=function(){function a(){13 in keysDown?(++game.lvl,audio.enterSound.play(),audio.bgMusic.pause(),setTimeout(function(){audio.bgMusic=new Audio("audio/inspiredBySparkMan/sparkBoy.mp3");audio.bgMusic.loop=!0;audio.bgMusic.volume=0.45;audio.isOn?audio.bgMusic.play():audio.bgMusic.pause()},1E3),game.loop()):requestAnimFrame(startScreen.loop)}var d=0,e=String.fromCharCode("169")+" 2013 JON WIEDMANN";
return{loop:function(){a();ctx.fillStyle="#000";ctx.fillRect(0,0,FULLW,FULLH+game.padHUD);ctx.font="29px 'Press Start 2P'";var c=HALFW-ctx.measureText("JON'S").width/2+11,b=58;ctx.setTransform(1,0,-0.4,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("J",c+4,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("J",c,b);ctx.setTransform(1,0,-0.2,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("O",c+32,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("O",c+28,b);ctx.setTransform(1,0,0.05,1.41,0,-1);ctx.fillStyle="#222";ctx.fillText("N",
c+58,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("N",c+54,b);ctx.setTransform(1,0,0.23,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("'",c+78,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("'",c+74,b);ctx.setTransform(1,0,0.42,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("S",c+95,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",c+91,b);ctx.font="36px 'Press Start 2P'";c=HALFW-ctx.measureText("QUEST").width/2+30;b=98;ctx.setTransform(1,0,-0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("Q",c+4,b+3);ctx.fillStyle=
"#ff6a00";ctx.fillText("Q",c,b);ctx.setTransform(1,0,-0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("U",c+26,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("U",c+22,b);ctx.setTransform(1,0,0.03,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("E",c+50,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("E",c+46,b);ctx.setTransform(1,0,0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("S",c+74,b+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",c+70,b);ctx.setTransform(1,0,0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("T",
c+90,b+4);ctx.fillStyle="#ff6a00";ctx.fillText("T",c+86,b);ctx.setTransform(1,0,0,1,0,0);Graphics.blinkText(22,HALFW,HALFH+81);ctx.font="13px 'Press Start 2P'";ctx.fillStyle="#ddd";ctx.fillText(e,HALFW-ctx.measureText(e).width/2,FULLH+44);c=(new Date).getTime();game.dt=c-(d||c);d=c}}}(),level=function(){function a(a,d){var c=0,b;for(b in a)"none"!=a[b]&&(g[b]=new Image,g[b].onload=function(){d(this.num)},g[b].src=a[b],g[b].num=c),++c}var d=null,e=null,c=null,b=null,f=Array(5),g={};return{collisionPts:{},
width:0,init:function(){b=new GameObj;b.init(238,FULLH+31,25,24,"img/medKit.png");c=new GameObj;c.init(342,FULLH+31,25,25,"img/syringe.png");d=new GameObj;d.init(447,FULLH+32,24,24,"img/shuriken.png");e=new GameObj;e.init(548,FULLH+33,22,24,"img/cash.png");level.collisionPts={lvl0:{obj0:{x:310,y:161,w:200,h:30},obj1:{x:600,y:95,w:200,h:30},obj2:{x:562,y:230,w:300,h:30}}};for(var g=0;5>g;g++)f[g]={status:!1,bgColor:"#"+Math.floor(16777215*Math.random()).toString(16)};a({lvl0:"img/lvl0.jpg",lvl1:"none"},
function(a){f[a].status=!0});level.reset();lvl0.init()},reset:function(){level.width=3198;hero.x=23;hero.y=canvas.height-hero.h;hero.isJumping=!1;hero.bulletArr.length=0},update:function(){switch(game.lvl){case 0:lvl0.update()}},updateObjs:function(){switch(game.lvl){case 0:lvl0.updateObjs()}},render:function(){f[game.lvl].status?ctx.drawImage(g["lvl"+game.lvl],hero.lvlX,0,FULLW,FULLH,0,0,FULLW,FULLH):(ctx.fillStyle=f[game.lvl].bgColor?f[game.lvl].bgColor:"#222",ctx.fillRect(0,0,FULLW,FULLH));ctx.fillStyle=
"#070707";ctx.fillRect(0,FULLH,FULLW,game.padHUD);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText("HP-"+hero.healthLvl,15,FULLH+24);ctx.fillText("MP-"+hero.manaLvl,15,FULLH+48);ctx.fillText("XP",15,FULLH+71);ctx.fillText(hero.medKits,210,FULLH+50);b.draw();ctx.fillText(hero.manaKits,315,FULLH+50);c.draw();ctx.fillText(hero.ammo,410,FULLH+50);d.draw();ctx.fillText(hero.cash,515,FULLH+50);e.draw();var a=Math.floor(game.actualTime/60),k=game.actualTime%60;10>k&&(k="0"+k);10>a&&(a=
"0"+a);ctx.fillText(a+":"+k,FULLW-84,FULLH+34);switch(game.lvl){case 0:lvl0.render()}},drawAfterHero:function(){0===game.lvl&&lvl0.crate.holding&&lvl0.crate.draw()}}}(),lvl0=function(){var a=null,d=null,e=null,c=null,b=null;return{init:function(){var f=GameObj();f.init(680,71,20,24,"img/sack.png");e=GameItem();e.init(f,5);f=GameObj();f.init(2100,FULLH-game.padFloor-38+1,28,38,"img/cyborgBnW.png");a=Enemy();a.init(f,1);f=GameObj();f.init(140,50,22,24,"img/cash.png");d=GameItem();d.init(f,10,!1);f=
GameObj();f.init(400,FULLH-game.padFloor-26,24,26,"img/crate.png");lvl0.crate=GameItem();lvl0.crate.init(f);c=GameObj();c.init(1300,80,340,190,"img/belt.png");b=GameObj();b.init(1300,80,340,190,"img/belt2.png")},update:function(){d.updatePos();a.update();!e.collected&&Physics.isCollision(hero,e,0)&&(e.collected=!0,audio.itemPickedUp.play(),hero.ammo+=e.val);if(d.visible)!d.collected&&Physics.isCollision(hero,d,0)&&(d.collected=!0,audio.itemPickedUp.play(),hero.cash+=d.val);else for(var b=0;b<hero.bulletArr.length;++b)Physics.isCollision(hero.bulletArr[b],
d,-17)&&(d.visible=!0,d.vY=4,audio.discovery.play());lvl0.crate.holding?(lvl0.crate.x=hero.dirR?hero.x+22:hero.x-22,lvl0.crate.y=hero.y):Physics.isCollision(hero,lvl0.crate,12)&&(hero.isCarrying=!0,lvl0.crate.holding=!0,lvl0.crate.vY=6.5);lvl0.crate.updatePos();if(0<a.health)for(Physics.isCollision(hero,a,0)&&(a.active=!0,hero.invincible||(audio.play(audio.heartbeat,!0),hero.invincible=!0,--hero.health)),b=0;b<hero.bulletArr.length;++b){var c=!1;Physics.isCollision(hero.bulletArr[b],a,0)&&(c=!0,audio.play(audio.thud,
!0));c&&(a.active=!0,hero.bulletArr.splice(b,1),--a.health,0>=a.health&&a.death())}},updateObjs:function(){e.x-=hero.vX;a.x-=hero.vX;d.x-=hero.vX;c.x-=hero.vX;lvl0.crate.x-=hero.vX},render:function(){e.collected||e.draw();d.draw();a.draw();0===game.totalTicks%60?b.draw():c.draw();lvl0.crate.holding?0===hero.vX&&(lvl0.crate.x+=hero.dirR?-20:24,lvl0.crate.y+=6):lvl0.crate.draw()}}}(),game=function(){var a=0,d,e=[0];return{gravity:0.9,friction:0.45,padBot:119,padHUD:80,padFloor:39,lvl:-1,dt:0,fps:60,
totalTicks:0,actualTime:0,loop:function(c){hero.update();level.update();level.render();hero.render();level.drawAfterHero();game.dt=c-(d||c);d=c;c=Math.round(1E3/game.dt);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";"Infinity"!=c&&e.push(c);if(0===game.totalTicks%20){c=0;for(var b in e)c+=e[b];a=Math.floor(c/e.length);e=[]}ctx.fillText(a+" FPS",FULLW-84,FULLH+65);0===++game.totalTicks%60&&++game.actualTime;requestAnimFrame(game.loop)}}}(),hero=function(){var a=null,d=null,e=null,c=!1,b=null,
f=!0,g=!1,h=[];return{protectedInfo:{},ammo:20,cash:0,x:0,y:0,sx:0,sy:0,lvlX:0,w:28,h:38,vX:0,vY:0,maxVx:8,maxVy:15,dir:Dir.NONE,dirR:!0,speed:0.7,isJumping:!1,isCarrying:!1,onGround:!0,onObj:!0,onObjX:-1,onObjY:-1,jumpMod:5,jumpPower:5,jumpPowerMax:10,invincible:!1,invincibleTimer:120,initInvincibleTimer:120,health:4,maxHealth:5,medKits:1,healthLvl:1,mana:0,maxMana:4,manaKits:1,manaLvl:1,lvl:1,xp:0,xpNeeded:50,bulletArr:[],init:function(){b=new Image;b.onload=function(){c=!0};b.src="../dungeon/web/img/sprites/player/player.png";
$.get("../dungeon/web/img/sprites/player/player.xml",function(a){a=$(a).find("sprite");$(a).each(function(){var a=$(this).attr("n"),d=$(this).attr("x"),b=$(this).attr("y"),a=a.substring(0,a.length-4);h[a]={x:d,y:b}})});a=HeroInputComponent();a.init();d=HeroPhysicsComponent();e=HeroGraphicsComponent();e.init()},offObj:function(){hero.onObj=!1;hero.onObjX=-1;hero.onObjY=-1},update:function(){a.check();d.updatePosition();d.checkCollision();hero.invincible&&--hero.invincibleTimer;0>=hero.invincibleTimer&&
(hero.invincible=!1,hero.invincibleTimer=hero.initInvincibleTimer);0>=hero.health&&!g&&(audio.heroDeath.play(),audio.bgMusic.muted=!0,alert("You died"),location.reload(),g=!0);0===game.totalTicks%12&&(f=!f);var b={x:0,y:0},b=hero.isCarrying&&0===hero.vX&&hero.dir==Dir.NONE?h.playerDown:hero.dirR?hero.dir==Dir.RIGHT?Math.abs(hero.vX)<=3.5*hero.speed?h.playerRight_Step:f?h.playerRight_Run1:h.playerRight_Run2:h.playerRight:hero.dir==Dir.LEFT?Math.abs(hero.vX)<=3.5*hero.speed?h.playerLeft_Step:f?h.playerLeft_Run1:
h.playerLeft_Run2:h.playerLeft,c=hero.invincibleTimer%20;!hero.invincible||0!==c&&1!==c&&2!==c&&3!==c&&4!==c&&5!==c&&6!==c||(b={x:-1,y:-1});hero.sx=b.x;hero.sy=b.y},render:function(){c&&0<=hero.sx&&0<=hero.sy&&ctx.drawImage(b,hero.sx,hero.sy,hero.w,hero.h,hero.x,hero.y,hero.w,hero.h);e.drawBullets();e.drawHealth();e.drawMana();e.drawXP()}}}(),HeroGraphicsComponent=function(){var a=null;return{init:function(){a=new Image;a.src="img/shuriken.png";a.onload=function(){}},drawBullets:function(){for(var d=
0;d<hero.bulletArr.length;++d){var e=hero.bulletArr[d].dirR?hero.w:0;hero.bulletArr[d].deg+=5;Graphics.drawRotate(a,hero.bulletArr[d].x+e,hero.bulletArr[d].y+20,hero.bulletArr[d].deg)}},drawHealth:function(){for(var a=0;a<hero.health;++a)ctx.fillStyle="red",ctx.fillRect(80+21*a,FULLH+14,19,8)},drawMana:function(){for(var a=0;a<hero.mana;++a)ctx.fillStyle="#00b6ff",ctx.fillRect(80+21*a,FULLH+37,19,8)},drawXP:function(){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText((10>hero.xp?
"0":"")+hero.xp+"/"+hero.xpNeeded,80,FULLH+71)}}},HeroPhysicsComponent=function(){return{updatePosition:function(){hero.isJumping?(0<hero.jumpMod&&(hero.vY-=hero.jumpMod,--hero.jumpMod),hero.dir=Dir.TOP):hero.jumpMod=hero.jumpPower;hero.x!=hero.x+hero.vX&&audio.step.play();hero.y+=hero.vY;(hero.dirR&&hero.x>=canvas.width/2+35||!hero.dirR&&hero.x<=canvas.width/2-45)&&0<=hero.lvlX+hero.vX&&hero.lvlX+hero.vX<=level.width-canvas.width?(hero.lvlX+=hero.vX,level.updateObjs()):hero.x+=hero.vX},checkCollision:function(){for(var a=
0;a<hero.bulletArr.length;a++)hero.bulletArr[a].x+=hero.bulletArr[a].dirR?bullet.speed:-bullet.speed,(hero.bulletArr[a].x>canvas.width||0>hero.bulletArr[a].x)&&hero.bulletArr.splice(a,1);hero.onGround=!1;hero.y<-hero.h&&(hero.y=-hero.h,hero.vY=0);hero.y>canvas.height-game.padBot-hero.h?(hero.y=canvas.height-game.padBot-hero.h,hero.isJumping=!1,hero.onGround=!0):hero.onObj&&(hero.y=hero.onObjY);0>hero.x?hero.x=0:hero.x>canvas.width-hero.w&&(hero.x=canvas.width-hero.w);var d="lvl"+game.lvl,e=Dir.NONE,
c;for(c in level.collisionPts[d])if(a=level.collisionPts[d][c],Physics.isCollision(hero,a,0,!0)&&(hero.dirR?hero.lvlX-hero.x<a.x&&(hero.onObjX=a.x-hero.lvlX-hero.w,hero.onObjLvlX=hero.lvlX,e=Dir.LEFT):hero.x+hero.lvlX+hero.w>a.x+a.w&&(hero.onObjX=a.x-hero.lvlX+a.w,hero.onObjLvlX=hero.lvlX,e=Dir.RIGHT),hero.x!=hero.onObjX&&hero.y+hero.h-17<a.y&&0<hero.vY?(hero.onObjY=hero.y=a.y-hero.h,hero.isJumping=!1,hero.onObj=!0,e=Dir.TOP):hero.y+hero.h>a.y+a.h&&(-4>hero.vY&&audio.play(audio.thud,!0),hero.onObjY=
hero.y=a.y+a.h,hero.jumpMod=0,hero.vY=0,e=Dir.BOT)),e!=Dir.NONE){if(e==Dir.LEFT||e==Dir.RIGHT)hero.x=hero.onObjX,hero.lvlX=hero.onObjLvlX;break}e==Dir.NONE&&hero.offObj()}}},HeroInputComponent=function(){return{init:function(){keysDown={};lastKeyDown=-1;addEventListener("keydown",function(a){32==a.keyCode?a.preventDefault():77==a.keyCode?audio.handleMuteButton():66==a.keyCode?$(".resize").trigger("click"):75!=a.keyCode||hero.isJumping||75==lastKeyDown&&75 in keysDown||!hero.onObj&&!hero.onGround?
74!=a.keyCode||74==lastKeyDown&&74 in keysDown||!(0<hero.ammo)||hero.isCarrying||(audio.play(audio.effort),hero.bulletArr[hero.bulletArr.length]={x:hero.x,y:hero.y,w:bullet.w,h:bullet.h,dirR:hero.dirR,deg:0},--hero.ammo):(audio.jump.play(),hero.vY=0,hero.isJumping=!0,hero.offObj());lastKeyDown=a.keyCode;keysDown[a.keyCode]=!0},!1);addEventListener("keyup",function(a){delete keysDown[a.keyCode]},!1)},check:function(){hero.dir=Dir.NONE;hero.onObj||(hero.vY=hero.vY+game.gravity>hero.maxVy?hero.maxVy:
hero.vY+game.gravity);0!==hero.vX&&(hero.vX+=0<hero.vX?-game.friction:game.friction);65 in keysDown&&(hero.vX=Math.abs(hero.vX-hero.speed)>hero.maxVx?-hero.maxVx:hero.vX-hero.speed,hero.dirR=!1,hero.dir=Dir.LEFT);68 in keysDown&&(hero.vX=Math.abs(hero.vX+hero.speed)>hero.maxVx?hero.maxVx:hero.vX+hero.speed,hero.dirR=!0,hero.dir=Dir.RIGHT);Math.abs(hero.vX)<hero.speed?hero.vX=0:hero.dir!=Dir.LEFT&&hero.dir!=Dir.RIGHT&&(hero.vX/=1.2);32 in keysDown&&(lvl0.crate.holding=!1,hero.isCarrying=!1);72 in keysDown&&
0<hero.medKits&&hero.health<hero.maxHealth&&(++hero.health,--hero.medKits,audio.play(audio.enchant,!0));82 in keysDown&&!(17 in keysDown)&&0<hero.manaKits&&hero.mana<hero.maxMana&&(++hero.mana,--hero.manaKits,audio.play(audio.enchant,!0))}}};
jq.Main=function(){function a(){audio.bgMusic.loop=!0;audio.bgMusic.volume=0.7;audio.bgMusic.pause();audio.enemyDeath.volume=0.6;audio.jump.volume=0.4;audio.thud.volume=0.78;audio.discovery.volume=0.7;audio.mute(!0);$(".audioState").on("click",audio.handleMuteButton);var a=!1;$(".resize").on("click",function(){if(a)$(canvas).css({width:"",height:""}),$(this).attr("class","resize off"),$(this).children("span").attr("class","icon-expand");else{$(canvas).css({width:"100%"});var e=$(canvas).width();$(canvas).css({height:0.611*
e});$(this).attr("class","resize on");$(this).children("span").attr("class","icon-contract")}a=!a});audio.handleMuteButton()}return{init:function(){canvas=$("canvas")[0];ctx=canvas.getContext("2d");FULLW=canvas.width=720;FULLH=canvas.height=440;FULLH-=game.padHUD;HALFW=FULLW/2;HALFH=FULLH/2;a();ctx.fillStyle="#e1e1e1";ctx.font="25px Helvetica";ctx.fillText("Loading...",150,canvas.height/2);level.init();hero.init();startScreen.loop()}}}();
$(function(){var a=setInterval(function(){jq.scriptsLoaded===jq.numScripts&&(jq.Main.init(),clearInterval(a))},10)});
