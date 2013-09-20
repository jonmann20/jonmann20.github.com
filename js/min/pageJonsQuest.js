(function(d,e,j,h,f,c,b){d.GoogleAnalyticsObject=f;d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)},d[f].l=1*new Date();c=e.createElement(j),b=e.getElementsByTagName(j)[0];c.async=1;c.src=h;b.parentNode.insertBefore(c,b)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-43015655-1","jonmann20.github.io");ga("send","pageview");var utils=(function(){return{degToRad:function(a){return a*0.017453292519943295}}})();var Dir=Object.freeze({NONE:0,TOP:1,BOT:2,LEFT:3,RIGHT:4});var Inv_e=Object.freeze({NOT_HIT:0,HIT_WHITE:1,HIT_RED:2});var bullet={color:"rgba(0, 182, 255, .85)",w:19.5,h:9,speed:8};window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,1000/game.fps)}})();var audio=(function(){return{bgMusic:new Audio("audio/firstChiptune/firstChiptune.mp3"),enterSound:new Audio("audio/synthetic_explosion_1.mp3"),itemPickedUp:new Audio("audio/life_pickup.mp3"),heartbeat:new Audio("audio/heartbeat.mp3"),jump:new Audio("audio/jump.mp3"),thud:new Audio("audio/thud.mp3"),step:new Audio("audio/step.mp3"),effort:new Audio("audio/woosh.mp3"),discovery:new Audio("audio/spell3.mp3"),enemyDeath:new Audio("audio/death.mp3"),heroDeath:new Audio("audio/DiscsOfTron_Cascade.mp3"),enchant:new Audio("audio/enchant.mp3"),isOn:false,play:function(b,a){a=(typeof(a)!=="undefined")?a:true;if(b.ended){b.play()}else{if(a||b.currentTime===0){b.pause();b.currentTime=0;b.play()}}},handleMuteButton:function(){if($(".audioState").hasClass("off")){$(".audioState span").removeClass("icon-volume-mute").addClass("icon-volume-medium");$(".audioState").removeClass("off");$(".audioState").addClass("on");audio.mute(false)}else{$(".audioState span").removeClass("icon-volume-medium").addClass("icon-volume-mute");$(".audioState").removeClass("on");$(".audioState").addClass("off");audio.mute(true)}},mute:function(a){audio.discovery.muted=audio.enterSound.muted=audio.bgMusic.muted=audio.itemPickedUp.muted=audio.heartbeat.muted=audio.effort.muted=audio.thud.muted=audio.jump.muted=audio.step.muted=audio.enemyDeath.muted=audio.heroDeath.muted=audio.enchant.muted=a;a?audio.bgMusic.pause():audio.bgMusic.play();audio.isOn=!a}}})();var Graphics=(function(){var b=1,a=true;return{blinkText:function(e,c,h,f){f=(typeof(f)!=="undefined")?f:"PRESS ENTER";if(b<=0){a=false}else{if(b>1.55){a=true}}var g=game.dt/1000;b+=a?-g:g;ctx.font=e+"px 'Press Start 2P'";var d=ctx.measureText(f).width;ctx.fillStyle="rgba(233, 233, 233,"+b+")";ctx.fillText(f,c-d/2,h)},drawEllipse:function(l,k,m,f){var j=0.5522848,e=(m/2)*j,c=(f/2)*j,n=l+m,i=k+f,g=l+m/2,d=k+f/2;ctx.beginPath();ctx.moveTo(l,d);ctx.bezierCurveTo(l,d-c,g-e,k,g,k);ctx.bezierCurveTo(g+e,k,n,d-c,n,d);ctx.bezierCurveTo(n,d+c,g+e,i,g,i);ctx.bezierCurveTo(g-e,i,l,d+c,l,d);ctx.closePath();ctx.fill()},drawRotate:function(d,c,f,e){ctx.save();ctx.translate(c,f);ctx.rotate(utils.degToRad(e));ctx.translate(-d.width*0.5,-d.height*0.5);ctx.drawImage(d,0,0);ctx.restore()}}})();var Physics=(function(){return{isCollision:function(d,c,e,g){var f=(typeof(g)!=="undefined")?d.x+d.lvlX:d.x;if((f+e<=(c.x+c.w))&&(c.x+e<=(f+d.w))&&(d.y+e<=(c.y+c.h))&&(c.y+e<=(d.y+d.h))){return true}return false}}})();window.GameObj=function(){var a=null,b=false;return{initX:-1,x:-1,initY:-1,y:-1,w:-1,h:-1,vY:0,init:function(f,g,d,c,e){this.initX=this.x=f;this.intiY=this.y=g;this.w=d;this.h=c;if(typeof(e)!=="undefined"){a=new Image();a.onload=function(){b=true};a.src=e}},updatePos:function(){if(this.y<FULLH-game.padFloor-this.h){this.y+=this.vY}else{this.y=FULLH-game.padFloor-this.h}},draw:function(){if(b){ctx.drawImage(a,this.x,this.y)}else{ctx.fillStyle="red";ctx.fillRect(this.x,this.y,this.w,this.h)}},getImg:function(){return a}}};window.GameItem=function(){var a=null;function b(){return function(){if(this.visible&&!this.collected){a.apply(this)}}}return{collected:false,holding:false,visible:true,val:-1,init:function(d,c,e){$.extend(this,d);this.val=c;if(typeof(e)!=="undefined"){this.visible=e}a=this.draw;this.draw=b()}}};var Enemy=function(){var d=null,e=0,c=true,f=false,b=true;function a(i){var h=(i.w/e)*i.health;ctx.fillStyle="red";ctx.fillRect(i.x,i.y-12,h,4)}function g(){return function(){if(c||f){if(e>1){a(this)}ctx.save();if(f){ctx.globalAlpha=0.3}d.apply(this);ctx.restore()}}}return{active:false,health:0,init:function(i,h){$.extend(this,i);this.health=e=h;d=this.draw;this.draw=g()},update:function(){if(f){this.x+=b?2:-2;this.y-=14;if(this.x<0||this.x>FULLW){f=false}}else{if(!c){return}else{if(this.active&&game.totalTicks%3===0){if(this.x<hero.x){++this.x}else{if(this.x>hero.x){--this.x}}}}}},death:function(){b=hero.dirR;audio.enemyDeath.play();hero.xp+=2;c=false;f=true}}};var startScreen=(function(){var d=0,b="JON'S",a="QUEST",f=String.fromCharCode("169")+" 2013 JON WIEDMANN";function e(){if(13 in keysDown){++game.lvl;audio.enterSound.play();audio.bgMusic.pause();setTimeout(function(){audio.bgMusic=new Audio("audio/inspiredBySparkMan/sparkBoy.mp3");audio.bgMusic.loop=true;audio.bgMusic.volume=0.45;audio.isOn?audio.bgMusic.play():audio.bgMusic.pause()},1000);game.loop()}else{requestAnimFrame(startScreen.loop)}}function c(){ctx.fillStyle="#000";ctx.fillRect(0,0,FULLW,FULLH+game.padHUD);ctx.font="29px 'Press Start 2P'";var h=HALFW-ctx.measureText(b).width/2+11,g=58;ctx.setTransform(1,0,-0.4,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("J",h+4,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("J",h,g);ctx.setTransform(1,0,-0.2,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("O",h+32,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("O",h+28,g);ctx.setTransform(1,0,0.05,1.41,0,-1);ctx.fillStyle="#222";ctx.fillText("N",h+58,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("N",h+54,g);ctx.setTransform(1,0,0.23,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("'",h+78,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("'",h+74,g);ctx.setTransform(1,0,0.42,1.4,0,0);ctx.fillStyle="#222";ctx.fillText("S",h+95,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",h+91,g);ctx.font="36px 'Press Start 2P'";h=HALFW-ctx.measureText(a).width/2+30;g=98;ctx.setTransform(1,0,-0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("Q",h+4,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("Q",h,g);ctx.setTransform(1,0,-0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("U",h+26,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("U",h+22,g);ctx.setTransform(1,0,0.03,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("E",h+50,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("E",h+46,g);ctx.setTransform(1,0,0.25,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("S",h+74,g+3);ctx.fillStyle="#ff6a00";ctx.fillText("S",h+70,g);ctx.setTransform(1,0,0.5,1.6,0,0);ctx.fillStyle="#222";ctx.fillText("T",h+90,g+4);ctx.fillStyle="#ff6a00";ctx.fillText("T",h+86,g);ctx.setTransform(1,0,0,1,0,0);Graphics.blinkText(22,HALFW,HALFH+81);ctx.font="13px 'Press Start 2P'";ctx.fillStyle="#ddd";ctx.fillText(f,HALFW-ctx.measureText(f).width/2,FULLH+44)}return{loop:function(){e();c();var g=new Date().getTime();game.dt=g-(d||g);d=g}}})();var level=(function(){var f=null,h=null,j=null,a=null,b=5,g=new Array(b),c=0,e={};function i(){ctx.fillStyle="#070707";ctx.fillRect(0,FULLH,FULLW,game.padHUD);ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";ctx.fillText("HP-"+hero.healthLvl,15,FULLH+24);ctx.fillText("MP-"+hero.manaLvl,15,FULLH+48);ctx.fillText("XP",15,FULLH+71);ctx.fillText(hero.medKits,210,FULLH+50);a.draw();ctx.fillText(hero.manaKits,315,FULLH+50);j.draw();ctx.fillText(hero.ammo,410,FULLH+50);f.draw();ctx.fillText(hero.cash,515,FULLH+50);h.draw();var k=Math.floor(game.actualTime/60),l=game.actualTime%60;if(l<10){l="0"+l}if(k<10){k="0"+k}ctx.fillText(k+":"+l,FULLW-84,FULLH+34)}function d(m,n){var l=0;for(var k in m){if(m[k]!="none"){e[k]=new Image();e[k].onload=function(){n(this.num)};e[k].src=m[k];e[k].num=l}++l}}return{collisionPts:{},width:0,init:function(){a=new GameObj();a.init(238,FULLH+31,25,24,"img/medKit.png");j=new GameObj();j.init(342,FULLH+31,25,25,"img/syringe.png");f=new GameObj();f.init(447,FULLH+32,24,24,"img/shuriken.png");h=new GameObj();h.init(548,FULLH+33,22,24,"img/cash.png");level.collisionPts={lvl0:{obj0:{x:310,y:161,w:200,h:30},obj1:{x:600,y:95,w:200,h:30},obj2:{x:562,y:230,w:300,h:30}}};for(var k=0;k<b;k++){g[k]={status:false,bgColor:"#"+Math.floor(Math.random()*16777215).toString(16)}}d({lvl0:"img/lvl0.jpg",lvl1:"none"},function(l){g[l].status=true});level.reset();lvl0.init()},reset:function(){level.width=3198;hero.x=23;hero.y=canvas.height-hero.h;hero.isJumping=false;hero.bulletArr.length=0},update:function(){switch(game.lvl){case 0:lvl0.update();break}},updateObjs:function(){switch(game.lvl){case 0:lvl0.updateObjs();break}},render:function(){if(g[game.lvl].status){ctx.drawImage(e["lvl"+game.lvl],hero.lvlX,0,FULLW,FULLH,0,0,FULLW,FULLH)}else{if(g[game.lvl].bgColor){ctx.fillStyle=g[game.lvl].bgColor}else{ctx.fillStyle="#222"}ctx.fillRect(0,0,FULLW,FULLH)}i();switch(game.lvl){case 0:lvl0.render();break}},drawAfterHero:function(){if(game.lvl===0){if(lvl0.crate.holding){lvl0.crate.draw()}}}}})();var lvl0=(function(){var c=null,b=null,e=null,d=null,a=null;return{init:function(){var g=GameObj();g.init(680,71,20,24,"img/sack.png");e=GameItem();e.init(g,5);var i=GameObj();i.init(2100,FULLH-game.padFloor-38+1,28,38,"img/cyborgBnW.png");c=Enemy();c.init(i,1);var f=GameObj();f.init(140,50,22,24,"img/cash.png");b=GameItem();b.init(f,10,false);var h=GameObj();h.init(400,FULLH-game.padFloor-26,24,26,"img/crate.png");lvl0.crate=GameItem();lvl0.crate.init(h);d=GameObj();d.init(1300,80,340,190,"img/belt.png");a=GameObj();a.init(1300,80,340,190,"img/belt2.png")},update:function(){b.updatePos();c.update();if(!e.collected){if(Physics.isCollision(hero,e,0)){e.collected=true;audio.itemPickedUp.play();hero.ammo+=e.val}}if(!b.visible){for(var f=0;f<hero.bulletArr.length;++f){if(Physics.isCollision(hero.bulletArr[f],b,-17)){b.visible=true;b.vY=4;audio.discovery.play()}}}else{if(!b.collected){if(Physics.isCollision(hero,b,0)){b.collected=true;audio.itemPickedUp.play();hero.cash+=b.val}}}if(!lvl0.crate.holding){if(Physics.isCollision(hero,lvl0.crate,12)){hero.isCarrying=true;lvl0.crate.holding=true;lvl0.crate.vY=6.5}}else{if(hero.dirR){lvl0.crate.x=hero.x+22}else{lvl0.crate.x=hero.x-22}lvl0.crate.y=hero.y}lvl0.crate.updatePos();if(c.health>0){if(Physics.isCollision(hero,c,0)){c.active=true;if(!hero.invincible){audio.play(audio.heartbeat,true);hero.invincible=true;--hero.health}}for(var f=0;f<hero.bulletArr.length;f++){var g=false;if(Physics.isCollision(hero.bulletArr[f],c,0)){g=true;audio.play(audio.thud,true)}if(g){c.active=true;hero.bulletArr.splice(f,1);--c.health;if(c.health<=0){c.death()}}}}},updateObjs:function(){e.x-=hero.vX;c.x-=hero.vX;b.x-=hero.vX;d.x-=hero.vX;lvl0.crate.x-=hero.vX},render:function(){if(!e.collected){e.draw()}b.draw();c.draw();if(game.totalTicks%60==0){a.draw()}else{d.draw()}if(!lvl0.crate.holding){lvl0.crate.draw()}else{if(hero.vX===0){lvl0.crate.x+=hero.dirR?-20:24;lvl0.crate.y+=6}}}}})();var game=(function(){var b=0,e,a=[0];function g(){hero.update();level.update()}function d(){level.render();hero.render();level.drawAfterHero()}function c(h){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";if(h!="Infinity"){a.push(h)}if(game.totalTicks%20===0){var k=0;for(var j in a){k+=a[j]}b=Math.floor(k/a.length);a=[]}ctx.fillText(b+" FPS",FULLW-84,FULLH+65)}function f(h){game.dt=h-(e||h);e=h;c(Math.round(1000/game.dt));if(++game.totalTicks%60===0){++game.actualTime}}return{gravity:0.9,friction:0.45,padBot:119,padHUD:80,padFloor:39,lvl:-1,dt:0,fps:60,totalTicks:0,actualTime:0,loop:function(h){g();d();f(h);requestAnimFrame(game.loop)}}})();var hero=(function(){var l=this,h=null,d=null,g=null,a=false,c=null,i=true,j=false,f=[];function b(){if(hero.invincible){--hero.invincibleTimer}if(hero.invincibleTimer<=0){hero.invincible=false;hero.invincibleTimer=hero.initInvincibleTimer}if(hero.health<=0&&!j){audio.heroDeath.play();audio.bgMusic.muted=true;alert("You died");location.reload();j=true}}function e(){if(game.totalTicks%12===0){i=!i}var n={x:0,y:0};if(hero.isCarrying&&hero.vX===0&&hero.dir==Dir.NONE){n=f.playerDown}else{if(hero.dirR){if(hero.dir==Dir.RIGHT){if(Math.abs(hero.vX)<=hero.speed*3.5){n=f.playerRight_Step}else{if(i){n=f.playerRight_Run1}else{n=f.playerRight_Run2}}}else{n=f.playerRight}}else{if(hero.dir==Dir.LEFT){if(Math.abs(hero.vX)<=hero.speed*3.5){n=f.playerLeft_Step}else{if(i){n=f.playerLeft_Run1}else{n=f.playerLeft_Run2}}}else{n=f.playerLeft}}}var m=hero.invincibleTimer%20;if(hero.invincible&&(m===0||m==1||m==2||m==3||m==4||m==5||m==6)){n={x:-1,y:-1}}hero.sx=n.x;hero.sy=n.y}function k(){if(a){ctx.drawImage(c,hero.sx,hero.sy,hero.w,hero.h,hero.x,hero.y,hero.w,hero.h)}}return{protectedInfo:{},ammo:20,cash:0,x:0,y:0,sx:0,sy:0,lvlX:0,w:28,h:38,vX:0,vY:0,maxVx:8,maxVy:15,dir:Dir.NONE,dirR:true,speed:0.7,isJumping:false,isCarrying:false,onGround:true,onObj:true,onObjX:-1,onObjY:-1,jumpMod:5,jumpPower:5,jumpPowerMax:10,invincible:false,invincibleTimer:120,initInvincibleTimer:120,health:4,maxHealth:5,medKits:1,healthLvl:1,mana:0,maxMana:4,manaKits:1,manaLvl:1,lvl:1,xp:0,xpNeeded:50,bulletArr:[],init:function(){c=new Image();c.onload=function(){a=true};c.src="../dungeon/img/sprites/player/player.png";$.get("../dungeon/img/sprites/player/player.xml",function(m){var n=$(m).find("sprite");$(n).each(function(){var p=$(this).attr("n"),o=$(this).attr("x"),q=$(this).attr("y");p=p.substring(0,p.length-4);f[p]={x:o,y:q}})});h=HeroInputComponent();h.init();d=HeroPhysicsComponent();g=HeroGraphicsComponent();g.init()},offObj:function(){hero.onObj=false;hero.onObjX=-1;hero.onObjY=-1},update:function(){h.check();d.updatePosition();d.checkCollision();b();e()},render:function(){k();g.drawBullets();g.drawHealth();g.drawMana();g.drawXP()}}})();var HeroGraphicsComponent=function(){var b=null,a=false;return{init:function(){b=new Image();b.src="img/shuriken.png";b.onload=function(){a=true}},drawBullets:function(){for(var d=0;d<hero.bulletArr.length;++d){var c=hero.bulletArr[d].dirR?hero.w:0;hero.bulletArr[d].deg+=5;Graphics.drawRotate(b,hero.bulletArr[d].x+c,hero.bulletArr[d].y+20,hero.bulletArr[d].deg)}},drawHealth:function(){for(var c=0;c<hero.health;++c){ctx.fillStyle="red";ctx.fillRect(80+c*21,FULLH+14,19,8)}},drawMana:function(){for(var c=0;c<hero.mana;++c){ctx.fillStyle="#00b6ff";ctx.fillRect(80+c*21,FULLH+37,19,8)}},drawXP:function(){ctx.fillStyle="#ddd";ctx.font="12px 'Press Start 2P'";var c=(hero.xp<10)?"0":"";ctx.fillText(c+hero.xp+"/"+hero.xpNeeded,80,FULLH+71)}}};var HeroPhysicsComponent=function(){function b(){hero.onGround=false;if(hero.y<-hero.h){hero.y=-hero.h;hero.vY=0}if(hero.y>(canvas.height-game.padBot-hero.h)){hero.y=canvas.height-game.padBot-hero.h;hero.isJumping=false;hero.onGround=true}else{if(hero.onObj){hero.y=hero.onObjY}}if(hero.x<0){hero.x=0}else{if(hero.x>(canvas.width-hero.w)){hero.x=canvas.width-hero.w}}}function a(){for(var e=0;e<hero.bulletArr.length;e++){hero.bulletArr[e].x+=hero.bulletArr[e].dirR?bullet.speed:-bullet.speed;var c,d="lvl"+game.lvl,f=false;if(f||hero.bulletArr[e].x>canvas.width||hero.bulletArr[e].x<0){hero.bulletArr.splice(e,1)}}}return{updatePosition:function(){if(hero.isJumping){if(hero.jumpMod>0){hero.vY-=hero.jumpMod;--hero.jumpMod}hero.dir=Dir.TOP}else{hero.jumpMod=hero.jumpPower}if(hero.x!=(hero.x+hero.vX)){audio.step.play()}hero.y+=hero.vY;if(((hero.dirR&&hero.x>=((canvas.width/2)+35))||(!hero.dirR&&hero.x<=((canvas.width/2)-45)))&&(hero.lvlX+hero.vX>=0)&&(hero.lvlX+hero.vX<=level.width-canvas.width)){hero.lvlX+=hero.vX;level.updateObjs()}else{hero.x+=hero.vX}},checkCollision:function(){a();b();var d,f="lvl"+game.lvl,c=Dir.NONE;for(var e in level.collisionPts[f]){d=level.collisionPts[f][e];if(Physics.isCollision(hero,d,0,true)){if(hero.dirR){if(hero.lvlX-hero.x<d.x){hero.onObjX=d.x-hero.lvlX-hero.w;hero.onObjLvlX=hero.lvlX;c=Dir.LEFT}}else{if((hero.x+hero.lvlX+hero.w)>(d.x+d.w)){hero.onObjX=d.x-hero.lvlX+d.w;hero.onObjLvlX=hero.lvlX;c=Dir.RIGHT}}if((hero.x!=hero.onObjX)&&((hero.y+hero.h-17)<d.y)&&(hero.vY>0)){hero.onObjY=hero.y=d.y-hero.h;hero.isJumping=false;hero.onObj=true;c=Dir.TOP}else{if((hero.y+hero.h)>(d.y+d.h)){if(hero.vY<-4){audio.play(audio.thud,true)}hero.onObjY=hero.y=d.y+d.h;hero.jumpMod=0;hero.vY=0;c=Dir.BOT}}}if(c!=Dir.NONE){if((c==Dir.LEFT)||(c==Dir.RIGHT)){hero.x=hero.onObjX;hero.lvlX=hero.onObjLvlX}break}}if(c==Dir.NONE){hero.offObj()}}}};var HeroInputComponent=function(){return{init:function(){keysDown={};lastKeyDown=-1;addEventListener("keydown",function(a){if(a.keyCode==32){a.preventDefault()}else{if(a.keyCode==77){audio.handleMuteButton()}else{if(a.keyCode==75&&(!hero.isJumping&&((lastKeyDown!=75)||!(75 in keysDown)))&&(hero.onObj||hero.onGround)){audio.jump.play();hero.vY=0;hero.isJumping=true;hero.offObj()}else{if(a.keyCode==74&&((lastKeyDown!=74)||!(74 in keysDown))){if(hero.ammo>0&&!hero.isCarrying){audio.play(audio.effort);hero.bulletArr[hero.bulletArr.length]={x:hero.x,y:hero.y,w:bullet.w,h:bullet.h,dirR:hero.dirR,deg:0};--hero.ammo}}}}}lastKeyDown=a.keyCode;keysDown[a.keyCode]=true},false);addEventListener("keyup",function(a){delete keysDown[a.keyCode]},false)},check:function(){hero.dir=Dir.NONE;if(!hero.onObj){hero.vY=((hero.vY+game.gravity)>hero.maxVy)?hero.maxVy:(hero.vY+game.gravity)}if(hero.vX!==0){hero.vX+=(hero.vX>0)?-game.friction:game.friction}if(65 in keysDown){hero.vX=(Math.abs(hero.vX-hero.speed)>hero.maxVx)?-hero.maxVx:(hero.vX-hero.speed);hero.dirR=false;hero.dir=Dir.LEFT}if(68 in keysDown){hero.vX=(Math.abs(hero.vX+hero.speed)>hero.maxVx)?hero.maxVx:(hero.vX+hero.speed);hero.dirR=true;hero.dir=Dir.RIGHT}if(Math.abs(hero.vX)<hero.speed){hero.vX=0}else{if(((hero.dir!=Dir.LEFT)&&(hero.dir!=Dir.RIGHT))){hero.vX/=1.2}}if(32 in keysDown){lvl0.crate.holding=false;hero.isCarrying=false}if(72 in keysDown){if(hero.medKits>0&&hero.health<hero.maxHealth){++hero.health;--hero.medKits;audio.play(audio.enchant,true)}}if(82 in keysDown&&!(17 in keysDown)){if(hero.manaKits>0&&hero.mana<hero.maxMana){++hero.mana;--hero.manaKits;audio.play(audio.enchant,true)}}}}};jq.Main=(function(){function a(){canvas=$("canvas")[0];ctx=canvas.getContext("2d");FULLW=canvas.width=720;FULLH=canvas.height=440;FULLH-=game.padHUD;HALFW=FULLW/2;HALFH=FULLH/2}function c(){audio.bgMusic.loop=true;audio.bgMusic.volume=0.7;audio.bgMusic.pause();audio.enemyDeath.volume=0.6;audio.jump.volume=0.4;audio.thud.volume=0.78;audio.discovery.volume=0.7;audio.mute(true);$(".audioState").on("click",audio.handleMuteButton);audio.handleMuteButton()}function b(){ctx.fillStyle="#e1e1e1";ctx.font="25px Helvetica";ctx.fillText("Loading...",150,canvas.height/2)}return{init:function(){a();c();b();level.init();hero.init();startScreen.loop()}}})();$(function(){var a=setInterval(function(){if(jq.scriptsLoaded===jq.numScripts){jq.Main.init();clearInterval(a)}},10)});
