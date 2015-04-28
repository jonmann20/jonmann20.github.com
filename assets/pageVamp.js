function GameEngine(){var a=document.createElement("a");a.href="/#games",a.innerText="Back",a.className="btnBack",document.body.appendChild(a);var b=document.createElement("div");b.className="canvasWrap",canvas=document.createElement("canvas"),canvas.setAttribute("width",1008),canvas.setAttribute("height",567),b.appendChild(canvas),document.body.appendChild(b),ctx=canvas.getContext("2d"),this.input=new GameInput(this),this.graphics=new GameGraphics(this),this.utils=new GameUtils(this),this.view=new GameView(this),this.init()}function GameSave(){}function GameInput(){this.keysDown={},this.lastKeyUp=KeyCode.EMPTY,this.lastKeyDown=KeyCode.EMPTY,this.init()}function GameUtils(a){return{switchView:function(b){b.init(),a.view=b}}}function GameView(a){this.privates={bgColor:"#ccc"},this.init()}function TitleView(a){this.privates={title:a},this.init()}function GameSaveView(){this.privates={},this.init()}function LevelView(a,b){this.privates={},this.player=a,this.curLvl=b,this.init()}function Level1(){this.init()}function Vamp(){this.init()}!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-43015655-1","jonmann20.github.io"),ga("send","pageview"),function(){var a=console.debug,b=console.error,c=console.log,d=console.warn;console.debug=function(b){ga("send","event","JS console","debug",b),a.apply(console,arguments)},console.error=function(a){ga("send","event","JS console","error",a),b.apply(console,arguments)},console.log=function(a){ga("send","event","JS console","log",a),c.apply(console,arguments)},console.warn=function(a){ga("send","event","JS console","warn",a),d.apply(console,arguments)},window.onerror=function(a,b,c){return ga("send","event","JS console","error",a+" |---url--| "+b+" |---line--| "+c),!1}}(),GameEngine.prototype=function(){function a(){c.view.update(),f&&c.onUpdate()}function b(){e=requestAnimationFrame(b),c.view.render(),g&&c.onRender()}var c,d,e,f=!1,g=!1;return{init:function(){c=this},onUpdate:function(a){f=!0,this.onUpdate=a},onRender:function(a){g=!0,this.onRender=a},start:function(){d=setInterval(a,1e3/60),e=requestAnimationFrame(b)},stop:function(){clearInterval(d),cancelAnimationFrame(e)}}}(),GameSave.prototype=function(){return{load:function(a){return localStorage["slot"+a]},getList:function(){var a=this.load(0),b=this.load(1),c=this.load(2),d="---";return list=["undefined"!=typeof a?a:d,"undefined"!=typeof b?b:d,"undefined"!=typeof c?c:d]},save:function(a,b){localStorage["slot"+a]=b},erase:function(a){return localStorage.removeItem("slot"+a),this.getList()}}}(),GameInput.prototype=function(){function a(a){return a===KeyCode.W?a=KeyCode.UP:a===KeyCode.S?a=KeyCode.DOWN:a===KeyCode.D?a=KeyCode.RIGHT:a===KeyCode.A&&(a=KeyCode.LEFT),a}var b;return addEventListener("keydown",function(c){var d=a(c.keyCode);b.keysDown[d]||(b.lastKeyDown=d,b.keysDown[d]=!0),b.onKeyDown(d)}),addEventListener("keyup",function(c){b.lastKeyUp=a(c.keyCode),delete b.keysDown[b.lastKeyUp]}),{init:function(){b=this},update:function(){},onKeyDown:function(a){this.onKeyDown=a}}}();var KeyCode=Object.freeze({EMPTY:-1,ENTER:13,CTRL:17,ESC:27,SPACEBAR:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,A:65,D:68,F:70,H:72,J:74,K:75,M:77,O:79,R:82,S:83,W:87}),KeyCodeNames={};KeyCodeNames[-1]="EMPTY",KeyCodeNames[13]="ENTER",KeyCodeNames[17]="CTRL",KeyCodeNames[27]="ESC",KeyCodeNames[32]="SPACEBAR",KeyCodeNames[37]="LEFT",KeyCodeNames[38]="UP",KeyCodeNames[39]="RIGHT",KeyCodeNames[40]="DOWN",KeyCodeNames[46]="DELETE",KeyCodeNames[65]="A",KeyCodeNames[68]="D",KeyCodeNames[70]="F",KeyCodeNames[72]="H",KeyCodeNames[74]="J",KeyCodeNames[75]="K",KeyCodeNames[77]="M",KeyCodeNames[79]="O",KeyCodeNames[82]="R",KeyCodeNames[83]="S",KeyCodeNames[87]="W";var Dir=Object.freeze({RIGHT:0,LEFT:1});!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.SAT=b()}(this,function(){"use strict";function a(a,b){this.x=a||0,this.y=b||0}function b(b,c){this.pos=b||new a,this.r=c||0}function c(b,c){this.pos=b||new a,this.points=c||[],this.recalc()}function d(b,c,d){this.pos=b||new a,this.w=c||0,this.h=d||0}function e(){this.a=null,this.b=null,this.overlapN=new a,this.overlapV=new a,this.clear()}function f(a,b,c){for(var d=Number.MAX_VALUE,e=-Number.MAX_VALUE,f=a.length,g=0;f>g;g++){var h=a[g].dot(b);d>h&&(d=h),h>e&&(e=h)}c[0]=d,c[1]=e}function g(a,b,c,d,e,g){var h=p.pop(),i=p.pop(),j=n.pop().copy(b).sub(a),k=j.dot(e);if(f(c,e,h),f(d,e,i),i[0]+=k,i[1]+=k,h[0]>i[1]||i[0]>h[1])return n.push(j),p.push(h),p.push(i),!0;if(g){var l=0;if(h[0]<i[0])if(g.aInB=!1,h[1]<i[1])l=h[1]-i[0],g.bInA=!1;else{var m=h[1]-i[0],o=i[1]-h[0];l=o>m?m:-o}else if(g.bInA=!1,h[1]>i[1])l=h[0]-i[1],g.aInB=!1;else{var m=h[1]-i[0],o=i[1]-h[0];l=o>m?m:-o}var q=Math.abs(l);q<g.overlap&&(g.overlap=q,g.overlapN.copy(e),0>l&&g.overlapN.reverse())}return n.push(j),p.push(h),p.push(i),!1}function h(a,b){var c=a.len2(),d=b.dot(a);return 0>d?q:d>c?s:r}function i(a,b,c){var d=n.pop().copy(b.pos).sub(a.pos),e=a.r+b.r,f=e*e,g=d.len2();if(g>f)return n.push(d),!1;if(c){var h=Math.sqrt(g);c.a=a,c.b=b,c.overlap=e-h,c.overlapN.copy(d.normalize()),c.overlapV.copy(d).scale(c.overlap),c.aInB=a.r<=b.r&&h<=b.r-a.r,c.bInA=b.r<=a.r&&h<=a.r-b.r}return n.push(d),!0}function j(a,b,c){for(var d=n.pop().copy(b.pos).sub(a.pos),e=b.r,f=e*e,g=a.points,i=g.length,j=n.pop(),k=n.pop(),l=0;i>l;l++){var m=l===i-1?0:l+1,o=0===l?i-1:l-1,p=0,r=null;j.copy(a.edges[l]),k.copy(d).sub(g[l]),c&&k.len2()>f&&(c.aInB=!1);var t=h(j,k);if(t===q){j.copy(a.edges[o]);var u=n.pop().copy(d).sub(g[o]);if(t=h(j,u),t===s){var v=k.len();if(v>e)return n.push(d),n.push(j),n.push(k),n.push(u),!1;c&&(c.bInA=!1,r=k.normalize(),p=e-v)}n.push(u)}else if(t===s){if(j.copy(a.edges[m]),k.copy(d).sub(g[m]),t=h(j,k),t===q){var v=k.len();if(v>e)return n.push(d),n.push(j),n.push(k),!1;c&&(c.bInA=!1,r=k.normalize(),p=e-v)}}else{var w=j.perp().normalize(),v=k.dot(w),x=Math.abs(v);if(v>0&&x>e)return n.push(d),n.push(w),n.push(k),!1;c&&(r=w,p=e-v,(v>=0||2*e>p)&&(c.bInA=!1))}r&&c&&Math.abs(p)<Math.abs(c.overlap)&&(c.overlap=p,c.overlapN.copy(r))}return c&&(c.a=a,c.b=b,c.overlapV.copy(c.overlapN).scale(c.overlap)),n.push(d),n.push(j),n.push(k),!0}function k(a,b,c){var d=j(b,a,c);if(d&&c){var e=c.a,f=c.aInB;c.overlapN.reverse(),c.overlapV.reverse(),c.a=c.b,c.b=e,c.aInB=c.bInA,c.bInA=f}return d}function l(a,b,c){for(var d=a.points,e=d.length,f=b.points,h=f.length,i=0;e>i;i++)if(g(a.pos,b.pos,d,f,a.normals[i],c))return!1;for(var i=0;h>i;i++)if(g(a.pos,b.pos,d,f,b.normals[i],c))return!1;return c&&(c.a=a,c.b=b,c.overlapV.copy(c.overlapN).scale(c.overlap)),!0}var m={};m.Vector=a,m.V=a,a.prototype.copy=a.prototype.copy=function(a){return this.x=a.x,this.y=a.y,this},a.prototype.perp=a.prototype.perp=function(){var a=this.x;return this.x=this.y,this.y=-a,this},a.prototype.rotate=a.prototype.rotate=function(a){var b=this.x,c=this.y;return this.x=b*Math.cos(a)-c*Math.sin(a),this.y=b*Math.sin(a)+c*Math.cos(a),this},a.prototype.reverse=a.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},a.prototype.normalize=a.prototype.normalize=function(){var a=this.len();return a>0&&(this.x=this.x/a,this.y=this.y/a),this},a.prototype.add=a.prototype.add=function(a){return this.x+=a.x,this.y+=a.y,this},a.prototype.sub=a.prototype.sub=function(a){return this.x-=a.x,this.y-=a.y,this},a.prototype.scale=a.prototype.scale=function(a,b){return this.x*=a,this.y*=b||a,this},a.prototype.project=a.prototype.project=function(a){var b=this.dot(a)/a.len2();return this.x=b*a.x,this.y=b*a.y,this},a.prototype.projectN=a.prototype.projectN=function(a){var b=this.dot(a);return this.x=b*a.x,this.y=b*a.y,this},a.prototype.reflect=a.prototype.reflect=function(a){var b=this.x,c=this.y;return this.project(a).scale(2),this.x-=b,this.y-=c,this},a.prototype.reflectN=a.prototype.reflectN=function(a){var b=this.x,c=this.y;return this.projectN(a).scale(2),this.x-=b,this.y-=c,this},a.prototype.dot=a.prototype.dot=function(a){return this.x*a.x+this.y*a.y},a.prototype.len2=a.prototype.len2=function(){return this.dot(this)},a.prototype.len=a.prototype.len=function(){return Math.sqrt(this.len2())},m.Circle=b,m.Polygon=c,c.prototype.recalc=c.prototype.recalc=function(){this.edges=[],this.normals=[];for(var b=this.points,c=b.length,d=0;c>d;d++){var e=b[d],f=c-1>d?b[d+1]:b[0],g=(new a).copy(f).sub(e),h=(new a).copy(g).perp().normalize();this.edges.push(g),this.normals.push(h)}return this},c.prototype.rotate=c.prototype.rotate=function(a){var b,c=this.points,d=this.edges,e=this.normals,f=c.length;for(b=0;f>b;b++)c[b].rotate(a),d[b].rotate(a),e[b].rotate(a);return this},c.prototype.translate=c.prototype.translate=function(a,b){var c,d=this.points,e=d.length;for(c=0;e>c;c++)d[c].x+=a,d[c].y+=b;return this},m.Box=d,d.prototype.toPolygon=d.prototype.toPolygon=function(){var b=this.pos,d=this.w,e=this.h;return new c(new a(b.x,b.y),[new a,new a(d,0),new a(d,e),new a(0,e)])},m.Response=e,e.prototype.clear=e.prototype.clear=function(){return this.aInB=!0,this.bInA=!0,this.overlap=Number.MAX_VALUE,this};for(var n=[],o=0;10>o;o++)n.push(new a);for(var p=[],o=0;5>o;o++)p.push([]);var q=-1,r=0,s=1;return m.testCircleCircle=i,m.testPolygonCircle=j,m.testCirclePolygon=k,m.testPolygonPolygon=l,m});var GameGraphics=function(a){return{isAnimating:!1,repeatAction:function(a,b,c){this.isAnimating=!0;var d=0,e=this,f=setInterval(function(){d++>b?(clearInterval(f),e.isAnimating=!1):c()},a)}}};GameView.prototype=function(){return{then:function(a){this.privates.callback=a},init:function(){},update:function(){},render:function(){ctx.fillStyle=this.privates.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height)}}}(),TitleView.prototype=function(){var a,b="Press Enter";return{then:function(a){this.privates.callback=a},init:function(){a=this.privates.title},update:function(){game.input.lastKeyDown===KeyCode.ENTER&&(game.input.lastKeyDown=KeyCode.EMPTY,this.privates.callback())},render:function(){ctx.fillStyle="#000",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="36px Arial",ctx.fillStyle="#fff",ctx.fillText(a,canvas.width/2-ctx.measureText(a).width/2,100),ctx.font="24px Arial",ctx.fillText(b,canvas.width/2-ctx.measureText(b).width/2,canvas.height/2)}}}(),GameSaveView.prototype=function(){var a,b,c="Select a save slot",d=new GameSave,e=d.getList();return{then:function(a){this.privates.callback=a},init:function(){a=this,b={img:">>",slot:0,x:canvas.width/2-ctx.measureText(e[0]).width/2-60,y:200}},update:function(){if(game.input.lastKeyDown===KeyCode.ESC)game.input.lastKeyDown=KeyCode.EMPTY,this.privates.callback(KeyCode.ESC);else if(game.input.lastKeyDown===KeyCode.ENTER){game.input.lastKeyDown=KeyCode.EMPTY;var a=new Date,c=a.getMonth(),f=a.getDay(),g=a.getYear(),h=a.toLocaleTimeString();d.save(b.slot,c+"/"+f+"/"+g+" "+h),this.privates.callback(KeyCode.ENTER)}else game.input.lastKeyDown===KeyCode.DELETE?(game.input.lastKeyDownp=KeyCode.EMPTY,e=d.erase(b.slot)):2!==b.slot&&game.input.lastKeyDown===KeyCode.DOWN?(game.input.lastKeyDown=KeyCode.EMPTY,++b.slot,b.x=canvas.width/2-ctx.measureText(e[b.slot]).width/2-60,b.y+=80):0!==b.slot&&game.input.lastKeyDown===KeyCode.UP&&(game.input.lastKeyDown=KeyCode.EMPTY,--b.slot,b.x=canvas.width/2-ctx.measureText(e[b.slot]).width/2-60,b.y-=80)},render:function(){ctx.fillStyle="#111",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="36px Arial",ctx.fillStyle="#fff",ctx.fillText(c,canvas.width/2-ctx.measureText(c).width/2,80),ctx.font="24px Arial";for(var a=0;a<e.length;++a)ctx.fillText(e[a],canvas.width/2-ctx.measureText(e[a]).width/2,200+80*a);ctx.fillText(b.img,b.x,b.y)}}}(),LevelView.prototype=function(){function a(){if(b.player.invincible)return void(0===b.player.invincibleTimer--&&(b.player.invincible=!1,b.player.invincibleTimer=120));for(var a=0;a<b.curLvl.projectiles.length;++a){var c=SAT.testPolygonPolygon(b.player,b.curLvl.projectiles[a]);if(c){--b.player.hp,b.player.invincible=!0;break}}}var b,c=!1,d=!1;return{then:function(a){this.privates.callback=a},init:function(){b=this},update:function(){this.curLvl.update(),this.player.update(),a()},onUpdate:function(a){c=!0,this.onUpdate=a},render:function(){this.curLvl.render(),this.player.render()},onRender:function(a){d=!0,this.onRender=a}}}(),Level1.prototype=function(){return{projectiles:[],init:function(){for(var a=0;10>a;++a){var b=new SAT.Box(new SAT.Vector(Math.floor(Math.random()*canvas.width+0),canvas.height),10,20).toPolygon();b.speed=.1*Math.floor(10*Math.random()+3),this.projectiles.push(b)}},update:function(){for(var a=0;a<this.projectiles.length;++a)this.projectiles[a].pos.y-=this.projectiles[a].speed},render:function(){ctx.fillStyle="#000",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.fillStyle="silver";for(var a=0;a<this.projectiles.length;++a)ctx.fillRect(this.projectiles[a].pos.x,this.projectiles[a].pos.y,10,20)}}}(),Vamp.prototype=function(){var a=new Image,b=!1;a.onload=function(){b=!0},a.src="img/vamp.png";var c=4;return{w:40,h:40,hp:3,invincible:!1,invincibleTimer:120,init:function(){$.extend(this,new SAT.Box(new SAT.Vector(0,0),this.w,this.h).toPolygon())},update:function(){game.input.keysDown[KeyCode.RIGHT]?this.pos.x+=c:game.input.keysDown[KeyCode.LEFT]&&(this.pos.x-=c),game.input.keysDown[KeyCode.UP]?this.pos.y-=c:game.input.keysDown[KeyCode.DOWN]&&(this.pos.y+=c),this.hp<=0&&(alert("You died"),location.reload())},render:function(){var a=!0;if(this.invincible){var b=this.invincibleTimer%30;b>=0&&15>b&&(a=!1)}a&&(ctx.fillStyle="yellow",ctx.fillRect(this.pos.x,this.pos.y,this.w,this.h)),ctx.fillStyle="red";for(var c=0;c<this.hp;++c)ctx.fillRect(this.pos.x-10+20*c,this.pos.y-20,20,10)}}}(),function(){game=new GameEngine,game.start();var a=new TitleView("Vamp: The Great and Powerful",!0);a.then(function(){game.utils.switchView(b)});var b=new GameSaveView;b.then(function(b){b===KeyCode.ESC?game.utils.switchView(a):b===KeyCode.ENTER&&game.utils.switchView(e)});var c=new Vamp,d=new Level1,e=new LevelView(c,d);game.view=a}();