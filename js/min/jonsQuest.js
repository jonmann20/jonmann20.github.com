utils=function(){var b=1,a=true;return{playSound:function(d,c){c=(typeof(c)!=="undefined")?c:true;if(d.ended){d.play()}else{if(c||d.currentTime==0){d.pause();d.currentTime=0;d.play()}}},muteHelper:function(){if($(".audioState").hasClass("off")){$(".audioState span").removeClass("icon-volume-mute").addClass("icon-volume-medium");$(".audioState").removeClass("off");$(".audioState").addClass("on");utils.muteSound(false)}else{$(".audioState span").removeClass("icon-volume-medium").addClass("icon-volume-mute");$(".audioState").removeClass("on");$(".audioState").addClass("off");utils.muteSound(true)}},muteSound:function(d){game.sound.isOn=!d;var c=d?0:0.25;switch(game.lvl){case -1:game.sound.bgMusic.start.muted=d;d?game.sound.bgMusic.start.pause():game.sound.bgMusic.start.play();break;case 0:game.sound.bgMusic.lvl0.muted=d;d?game.sound.bgMusic.lvl0.pause():game.sound.bgMusic.lvl0.play();break}game.sound.gun.muted=d;game.sound.gun.volume=c;game.sound.thud.muted=d;game.sound.thud.volume=c;game.sound.jump.muted=d;game.sound.jump.volume=c;game.sound.step.muted=d;game.sound.step.volume=c;game.sound.death.muted=d;game.sound.death.volume=c},blinkText:function(e,c,h,f){f=(typeof(f)!=="undefined")?f:"PRESS ENTER";if(b<=0){a=false}else{if(b>1.55){a=true}}var g=game.dt/1000;b+=a?-g:g;ctx.font=e+"px 'Press Start 2P'";var d=ctx.measureText(f).width;ctx.fillStyle="rgba(233, 233, 233,"+b+")";ctx.fillText(f,c-d/2,h)},isCollision:function(d,c,e,g){var f=(typeof(g)!=="undefined")?d.x+d.lvlX:d.x;if((f+e<=(c.x+c.w))&&(c.x+e<=(f+d.w))&&(d.y+e<=(c.y+c.h))&&(c.y+e<=(d.y+d.h))){return true}return false},drawEllipse:function(l,k,m,f){var j=0.5522848,e=(m/2)*j,c=(f/2)*j,n=l+m,i=k+f,g=l+m/2,d=k+f/2;ctx.beginPath();ctx.moveTo(l,d);ctx.bezierCurveTo(l,d-c,g-e,k,g,k);ctx.bezierCurveTo(g+e,k,n,d-c,n,d);ctx.bezierCurveTo(n,d+c,g+e,i,g,i);ctx.bezierCurveTo(g-e,i,l,d+c,l,d);ctx.closePath();ctx.fill()}}}();Dir=Object.freeze({NONE:0,TOP:1,BOT:2,LEFT:3,RIGHT:4});Inv_e=Object.freeze({NOT_HIT:0,HIT_WHITE:1,HIT_RED:2});bullet={color:"rgba(0, 182, 255, .85)",w:19.5,h:9,speed:8};window.GameObj=function(){var a=null,b=false;return{initX:-1,x:-1,initY:-1,y:-1,w:-1,h:-1,vY:0,init:function(f,g,d,c,e){this.initX=this.x=f;this.intiY=this.y=g;this.w=d;this.h=c;if(typeof(e)!=="undefined"){a=new Image();a.onload=function(){b=true};a.src=e}},updatePos:function(){if(this.y<FULLH-game.padFloor-this.h){this.y+=this.vY}else{this.y=FULLH-game.padFloor-this.h}},draw:function(){if(b){ctx.drawImage(a,this.x,this.y)}else{ctx.fillStyle="red";ctx.fillRect(this.x,this.y,this.w,this.h)}}}};window.GameItem=function(){var a=null;function b(){return function(){if(this.visible&&!this.collected){a.apply(this)}}}return{collected:false,holding:false,visible:true,val:-1,init:function(d,c,e){$.extend(this,d);this.val=c;if(typeof(e)!=="undefined"){this.visible=e}a=this.draw;this.draw=b()}}};Enemy=function(){var b=null,c=0;function a(f){var e=(f.w/c)*f.health;ctx.fillStyle="red";ctx.fillRect(f.x,f.y-12,e,4)}function d(){return function(){if(this.health>0){a(this);b.apply(this)}}}return{active:false,health:0,init:function(f,e){$.extend(this,f);this.health=c=e;b=this.draw;this.draw=d()},update:function(){if(this.active&&game.totalTicks%3==0){if(this.x<hero.x){++this.x}else{if(this.x>hero.x){--this.x}}}}}};startScreen=function(){var d=0,b="JON'S",a="QUEST",f="© 2013 JON WIEDMANN";function e(){if(13 in keysDown){++game.lvl;game.sound.bgMusic.start.pause();game.sound.bgMusic.lvl0.loop=true;game.sound.isOn?game.sound.bgMusic.lvl0.play():game.sound.bgMusic.lvl0.pause();game.loop()}else{requestAnimFrame(startScreen.loop)}}function c(){ctx.fillStyle="#000";ctx.fillRect(0,0,FULLW,FULLH+game.padHUD);ctx.font="29px 'Press Start 2P'";var h=HALFW-ctx.measureText(b).width/2+11,g=58;ctx.setTransform(1,0,-0.4,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("J",h+4,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("J",h,g);ctx.setTransform(1,0,-0.2,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("O",h+32,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("O",h+28,g);ctx.setTransform(1,0,0.05,1.41,0,-1);ctx.fillStyle="#222";ctx.fillText("N",h+58,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("N",h+54,g);ctx.setTransform(1,0,0.23,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("'",h+78,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("'",h+74,g);ctx.setTransform(1,0,0.42,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("S",h+95,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",h+91,g);ctx.font="36px 'Press Start 2P'";h=HALFW-ctx.measureText(a).width/2+30;g=98;ctx.setTransform(1,0,-0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("Q",h+4,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("Q",h,g);ctx.setTransform(1,0,-0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("U",h+26,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("U",h+22,g);ctx.setTransform(1,0,0.01,1.65,0,-5);ctx.fillStyle="#222";ctx.fillText("E",h+50,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("E",h+46,g);ctx.setTransform(1,0,0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("S",h+74,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",h+70,g);ctx.setTransform(1,0,0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("T",h+90,g+4);ctx.fillStyle="#ff6a00";ctx.fillText("T",h+86,g);ctx.setTransform(1,0,0,1,0,0);utils.blinkText(22,HALFW,HALFH+81);ctx.font="13px 'Press Start 2P'";ctx.fillStyle="#ddd";ctx.fillText(f,HALFW-ctx.measureText(f).width/2,FULLH+44)}return{loop:function(){e();c();var g=new Date().getTime();game.dt=g-(d||g);d=g}}}();function checkInput(){hero.dir=Dir.NONE;if(!hero.onObj){hero.vY=((hero.vY+game.gravity)>hero.maxVy)?hero.maxVy:(hero.vY+game.gravity)}if(hero.vX!=0){hero.vX+=(hero.vX>0)?-game.friction:game.friction}if(65 in keysDown){hero.vX=(Math.abs(hero.vX-hero.speed)>hero.maxVx)?-hero.maxVx:(hero.vX-hero.speed);hero.dirR=false;hero.dir=Dir.LEFT}if(68 in keysDown){hero.vX=(Math.abs(hero.vX+hero.speed)>hero.maxVx)?hero.maxVx:(hero.vX+hero.speed);hero.dirR=true;hero.dir=Dir.RIGHT}if(Math.abs(hero.vX)<hero.speed){hero.vX=0}if(74 in keysDown){if(hero.ammo>0&&!hero.isCarrying){utils.playSound(game.sound.gun);hero.bulletArr[hero.bulletArr.length]={x:hero.x,y:hero.y,w:bullet.w,h:bullet.h,dirR:hero.dirR};--hero.ammo}delete keysDown[74]}if(75 in keysDown){if(!hero.isJumping){game.sound.jump.play();hero.vY=0;hero.isJumping=true;hero.offObj();delete keysDown[75]}}if(hero.isJumping){if(hero.jumpMod>0){hero.vY-=hero.jumpMod;--hero.jumpMod}hero.dir=Dir.TOP}else{hero.jumpMod=hero.jumpPower}if(32 in keysDown){lvl0.crate.holding=false;hero.isCarrying=false}if(72 in keysDown){if(hero.medKits>0&&hero.health<hero.maxHealth){++hero.health;--hero.medKits}}if(82 in keysDown){if(hero.manaKits>0&&hero.mana<hero.maxMana){++hero.mana;--hero.manaKits}}}level=function(){var f=null,h=null,j=null,a=null,b=5,g=new Array(b),c=0,e={};function i(){ctx.fillStyle="#070707";ctx.fillRect(0,FULLH,FULLW,game.padHUD);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText("HP-"+hero.healthLvl,15,FULLH+24);ctx.fillText("MP-"+hero.manaLvl,15,FULLH+48);ctx.fillText("XP",15,FULLH+71);ctx.fillText(hero.medKits,210,FULLH+50);a.draw();ctx.fillText(hero.manaKits,315,FULLH+50);j.draw();ctx.fillText(hero.ammo,410,FULLH+50);f.draw();ctx.fillText(hero.cash,515,FULLH+50);h.draw();var k=Math.floor(game.actualTime/60),l=game.actualTime%60;if(l<10){l="0"+l}if(k<10){k="0"+k}ctx.fillText(k+":"+l,FULLW-84,FULLH+34)}function d(m,n){var l=0;for(var k in m){if(m[k]!="none"){e[k]=new Image();e[k].onload=function(){n(this.num)};e[k].src=m[k];e[k].num=l}++l}}return{collisionPts:{},width:0,init:function(){a=new GameObj();a.init(238,FULLH+31,25,24,"img/medKit.png");j=new GameObj();j.init(342,FULLH+31,25,25,"img/syringe.png");f=new GameObj();f.init(447,FULLH+32,24,24,"img/shuriken.png");h=new GameObj();h.init(548,FULLH+33,22,24,"img/cash.png");level.collisionPts={lvl0:{obj0:{x:310,y:161,w:200,h:30},obj1:{x:600,y:95,w:200,h:30},obj2:{x:562,y:230,w:300,h:30}}};for(var k=0;k<b;k++){g[k]={status:false,bgColor:"#"+Math.floor(Math.random()*16777215).toString(16)}}d({lvl0:"img/lvl0.jpg",lvl1:"none"},function(l){g[l].status=true});level.reset();lvl0.init()},reset:function(){level.width=3198;hero.x=23;hero.y=canvas.height-hero.h;hero.isJumping=false;hero.bulletArr.length=0},update:function(){if(game.lvl==0){lvl0.update()}var k=game.lvl+1;if(k>=b){k=b-1}},updateObjs:function(){if(game.lvl==0){lvl0.updateObjs()}},render:function(){if(g[game.lvl].status){ctx.drawImage(e["lvl"+game.lvl],hero.lvlX,0,FULLW,FULLH,0,0,FULLW,FULLH)}else{if(g[game.lvl].bgColor){ctx.fillStyle=g[game.lvl].bgColor}else{ctx.fillStyle="#222"}ctx.fillRect(0,0,FULLW,FULLH)}i();if(game.lvl==0){lvl0.render()}},drawAfterHero:function(){if(game.lvl==0){if(lvl0.crate.holding){lvl0.crate.draw()}}}}}();lvl0=function(){var c=null,b=null,e=null,d=null,a=null;return{init:function(){var g=GameObj();g.init(680,71,20,24,"img/sack.png");e=GameItem();e.init(g,5);var i=GameObj();i.init(2100,FULLH-game.padFloor-38+1,28,38,"img/cyborgBnW.png");c=Enemy();c.init(i,5);var f=GameObj();f.init(140,50,22,24,"img/cash.png");b=GameItem();b.init(f,10,false);var h=GameObj();h.init(400,FULLH-game.padFloor-26,24,26,"img/crate.png");lvl0.crate=GameItem();lvl0.crate.init(h);d=GameObj();d.init(1300,80,340,190,"img/belt.png");a=GameObj();a.init(1300,80,340,190,"img/belt2.png")},update:function(){b.updatePos();c.update();if(!e.collected){if(utils.isCollision(hero,e,0)){e.collected=true;hero.ammo+=e.val}}if(!b.visible){for(var f=0;f<hero.bulletArr.length;++f){if(utils.isCollision(hero.bulletArr[f],b,-17)){b.visible=true;b.vY=4}}}else{if(!b.collected){if(utils.isCollision(hero,b,0)){b.collected=true;hero.cash+=b.val}}}if(!lvl0.crate.holding){if(utils.isCollision(hero,lvl0.crate,12)){hero.isCarrying=true;lvl0.crate.holding=true;lvl0.crate.vY=6.5}}else{if(hero.dirR){lvl0.crate.x=hero.x+22}else{lvl0.crate.x=hero.x-22}lvl0.crate.y=hero.y}lvl0.crate.updatePos();if(c.health>0){if(utils.isCollision(hero,c,0)){c.active=true;if(!hero.invincible){utils.playSound(game.sound.thud,true);hero.invincible=true;--hero.health}}for(var f=0;f<hero.bulletArr.length;f++){var g=false;if(utils.isCollision(hero.bulletArr[f],c,0)){g=true;utils.playSound(game.sound.thud,true)}if(g){c.active=true;hero.bulletArr.splice(f,1);--c.health;if(c.health<=0){utils.playSound(game.sound.death,false);hero.xp+=2}}}}},updateObjs:function(){e.x-=hero.vX;c.x-=hero.vX;b.x-=hero.vX;d.x-=hero.vX;lvl0.crate.x-=hero.vX},render:function(){if(!e.collected){e.draw()}b.draw();c.draw();if(game.totalTicks%60==0){a.draw()}else{d.draw()}if(!lvl0.crate.holding){lvl0.crate.draw()}else{if(hero.vX==0){lvl0.crate.x+=hero.dirR?-20:24;lvl0.crate.y+=6}}}}}();game=function(){var b=0,e,a=[0];function g(){hero.update();level.update()}function d(){level.render();hero.render();level.drawAfterHero()}function c(h){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";if(h!="Infinity"){a.push(h)}if(game.totalTicks%20==0){var k=0;for(var j in a){k+=a[j]}b=Math.floor(k/a.length);a=[]}ctx.fillText(b+" FPS",FULLW-84,FULLH+65)}function f(h){game.dt=h-(e||h);e=h;c(Math.round(1000/game.dt));++game.totalTicks;if(game.totalTicks%60==0){++game.actualTime}}return{gravity:1,friction:0.45,padBot:119,padHUD:80,padFloor:39,lvl:-1,dt:0,fps:60,totalTicks:0,actualTime:0,sound:{bgMusic:{start:new Audio("audio/firstChiptune/firstChiptune.mp3"),lvl0:new Audio("audio/inspiredBySparkMan/sparkBoy.mp3")},gun:new Audio("audio/raygun.mp3"),thud:new Audio("audio/thud.mp3"),step:new Audio("audio/step.mp3"),jump:new Audio("audio/jump.mp3"),death:new Audio("audio/DiscsOfTron_Cascade.mp3"),isOn:false},loop:function(h){checkInput();g();d();f(h);requestAnimFrame(game.loop)}}}();window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1000/game.fps)}}();hero=function(){var d=false,f=null,j=true,k=false,h=[];function c(){if(hero.y<0){hero.y=0;hero.vY=0}else{if(hero.y>(canvas.height-game.padBot-hero.h)){hero.y=canvas.height-game.padBot-hero.h;hero.isJumping=false}else{if(hero.onObj){hero.y=hero.onObjY}}}if(hero.x<0){hero.x=0}else{if(hero.x>(canvas.width-hero.w)){hero.x=canvas.width-hero.w}}}function e(){for(var q=0;q<hero.bulletArr.length;q++){hero.bulletArr[q].x+=hero.bulletArr[q].dirR?bullet.speed:-bullet.speed;var o,p="lvl"+game.lvl,r=false;if(r||hero.bulletArr[q].x>canvas.width||hero.bulletArr[q].x<0){hero.bulletArr.splice(q,1)}}}function l(){e();c();var p,r="lvl"+game.lvl,o=Dir.NONE;for(var q in level.collisionPts[r]){p=level.collisionPts[r][q];if(utils.isCollision(hero,p,0,true)){if(hero.dirR){if(hero.lvlX-hero.x<p.x){hero.onObjX=p.x-hero.lvlX-hero.w;hero.onObjLvlX=hero.lvlX;o=Dir.LEFT}}else{if((hero.x+hero.lvlX+hero.w)>(p.x+p.w)){hero.onObjX=p.x-hero.lvlX+p.w;hero.onObjLvlX=hero.lvlX;o=Dir.RIGHT}}if((hero.x!=hero.onObjX)&&((hero.y+hero.h-17)<p.y)&&(hero.vY>0)){hero.onObjY=hero.y=p.y-hero.h;hero.isJumping=false;hero.onObj=true;o=Dir.TOP}else{if((hero.y+hero.h)>(p.y+p.h)){hero.onObjY=hero.y=p.y+p.h;hero.jumpMod=0;hero.vY=0;o=Dir.BOT}}}if(o!=Dir.NONE){if((o==Dir.LEFT)||(o==Dir.RIGHT)){hero.x=hero.onObjX;hero.lvlX=hero.onObjLvlX}break}}if(o==Dir.NONE){hero.offObj()}}function g(){if(hero.x!=(hero.x+hero.vX)){game.sound.step.play()}hero.y+=hero.vY;if(((hero.dirR&&hero.x>=((canvas.width/2)+35))||(!hero.dirR&&hero.x<=((canvas.width/2)-45)))&&(hero.lvlX+hero.vX>=0)&&(hero.lvlX+hero.vX<=level.width-canvas.width)){hero.lvlX+=hero.vX;level.updateObjs()}else{hero.x+=hero.vX}}function n(){if(d){if(game.totalTicks%12==0){j=!j}var o=Inv_e.NOT_HIT;if(hero.invincible){o=(hero.invincibleTimer%5==0)?Inv_e.HIT_WHITE:Inv_e.HIT_RED}var p={x:0,y:0};if(hero.isCarrying&&hero.vX==0&&hero.dir==Dir.NONE){p=h.playerDown}else{if(hero.dirR){if(68 in keysDown){if(Math.abs(hero.vX)<=hero.speed*3){p=h.playerRight_Step}else{if(j){p=h.playerRight_Run2}else{p=h.playerRight_Run1}}}else{p=h.playerRight}}else{if(j&&65 in keysDown){if(Math.abs(hero.vX)<=hero.speed*3){p=h.playerLeft_Step}else{if(j){p=h.playerLeft_Run2}else{p=h.playerLeft_Run1}}}else{p=h.playerLeft}}}ctx.drawImage(f,p.x,p.y,hero.w,hero.h,hero.x,hero.y,hero.w,hero.h)}}function m(){for(var p=0;p<hero.bulletArr.length;++p){var o=0;if(hero.bulletArr[p].dirR){o=hero.w/2}ctx.fillStyle=bullet.color;utils.drawEllipse(hero.bulletArr[p].x+o,hero.bulletArr[p].y+4.5,bullet.w,bullet.h)}}function a(){for(var o=0;o<hero.health;++o){ctx.fillStyle="red";ctx.fillRect(80+o*21,FULLH+14,19,8)}}function i(){for(var o=0;o<hero.mana;++o){ctx.fillStyle="#00b6ff";ctx.fillRect(80+o*21,FULLH+37,19,8)}}function b(){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";var o=(hero.xp<10)?"0":"";ctx.fillText(o+hero.xp+"/"+hero.xpNeeded,80,FULLH+71)}return{ammo:20,cash:0,x:0,y:0,lvlX:0,w:28,h:38,vX:0,vY:0,maxVx:8,maxVy:15,dir:Dir.NONE,dirR:true,speed:0.7,isJumping:false,isCarrying:false,onObj:true,onObjX:-1,onObjY:-1,jumpMod:5,jumpPower:5,jumpPowerMax:10,invincible:false,invincibleTimer:40,initInvincibleTimer:40,health:4,maxHealth:5,medKits:1,healthLvl:1,mana:0,maxMana:4,manaKits:1,manaLvl:1,lvl:1,xp:0,xpNeeded:50,bulletArr:[],init:function(){f=new Image();f.onload=function(){d=true};f.src="../dungeon/img/sprites/player/player.png";$.get("../dungeon/img/sprites/player/player.xml",function(o){var p=$(o).find("sprite");$(p).each(function(){var r=$(this).attr("n"),q=$(this).attr("x"),s=$(this).attr("y");r=r.substring(0,r.length-4);h[r]={x:q,y:s}})})},offObj:function(){hero.onObj=false;hero.onObjX=-1;hero.onObjY=-1},update:function(){g();l();if(hero.invincible){--hero.invincibleTimer}if(hero.invincibleTimer<=0){hero.invincible=false;hero.invincibleTimer=hero.initInvincibleTimer}if(hero.health<=0&&!k){utils.playSound(game.sound.death,false);game.sound.bgMusic.lvl0.muted=true;alert("You died");location.reload();k=true}},render:function(){n();m();a();i();b()}}}();load=function(){function b(){canvas=$("canvas")[0];ctx=canvas.getContext("2d");FULLW=canvas.width=720;FULLH=canvas.height=440;FULLH-=game.padHUD;HALFW=FULLW/2;HALFH=FULLH/2;game.sound.bgMusic.start.loop=true;game.sound.bgMusic.start.pause();utils.muteSound(true);$(".audioState").on("click",function(){utils.muteHelper()});ctx.fillStyle="#e1e1e1";ctx.font="25px Helvetica";ctx.fillText("Loading...",150,canvas.height/2);a()}function a(){keysDown={};addEventListener("keydown",function(c){if(c.keyCode==32){c.preventDefault()}else{if(c.keyCode==77){utils.muteHelper()}}keysDown[c.keyCode]=true},false);addEventListener("keyup",function(c){delete keysDown[c.keyCode]},false)}return{init:function(){b();level.init();hero.init();startScreen.loop()}}}();$(function(){load.init()});