"use strict";class GameEngine{constructor(){this.update=this.update.bind(this),this.render=this.render.bind(this),this.updateInterval=setInterval(this.update,1e3/60),this.renderRAF=requestAnimationFrame(this.render),this.onUpdateSet=!1,this.onRenderSet=!1;let t=document.createElement("a");t.href="/#games",t.innerText="Back",t.className="btn-back",document.body.appendChild(t);let e=document.createElement("div");e.className="canvas-wrap",window.canvas=document.createElement("canvas"),canvas.setAttribute("width",1008),canvas.setAttribute("height",567),e.appendChild(canvas),document.body.appendChild(e),window.ctx=canvas.getContext("2d"),this.input=new GameInput,this.graphics=new GameGraphics,this.view=new GameView,this.utils=new GameUtils(this)}update(){this.view.update(),this.onUpdateSet&&this.onUpdate()}render(){this.renderRAF=requestAnimationFrame(this.render),this.view.render(),this.onRenderSet&&this.onRender()}onUpdate(t){this.onUpdateSet=!0,this.onUpdate=t}onRender(t){this.onRenderSet=!0,this.onRender=t}stop(){clearInterval(this.updateInterval),cancelAnimationFrame(this.renderRAF)}}class GameSave{load(t){return localStorage[`slot ${t}`]}getList(){const t=this.load(0),e=this.load(1),s=this.load(2);return[void 0!==t?t:"---",void 0!==e?e:"---",void 0!==s?s:"---"]}save(t,e){localStorage[`slot ${t}`]=e}erase(t){return localStorage.removeItem(`slot ${t}`),this.getList()}}const KeyCode={EMPTY:-1,ENTER:13,CTRL:17,ESC:27,SPACEBAR:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,A:65,D:68,F:70,H:72,J:74,K:75,M:77,O:79,R:82,S:83,W:87};let KeyCodeNames={};KeyCodeNames[-1]="EMPTY",KeyCodeNames[13]="ENTER",KeyCodeNames[17]="CTRL",KeyCodeNames[27]="ESC",KeyCodeNames[32]="SPACEBAR",KeyCodeNames[37]="LEFT",KeyCodeNames[38]="UP",KeyCodeNames[39]="RIGHT",KeyCodeNames[40]="DOWN",KeyCodeNames[46]="DELETE",KeyCodeNames[65]="A",KeyCodeNames[68]="D",KeyCodeNames[70]="F",KeyCodeNames[72]="H",KeyCodeNames[74]="J",KeyCodeNames[75]="K",KeyCodeNames[77]="M",KeyCodeNames[79]="O",KeyCodeNames[82]="R",KeyCodeNames[83]="S",KeyCodeNames[87]="W";class GameInput{constructor(){this.keysDown={},this.lastKeyDown=KeyCode.EMPTY;let t=KeyCode.EMPTY;addEventListener("keydown",t=>{const e=this.fixKey(t.keyCode);this.keysDown[e]||(this.lastKeyDown=e,this.keysDown[e]=!0)}),addEventListener("keyup",e=>{t=this.fixKey(e.keyCode),delete this.keysDown[t]})}fixKey(t){return t===KeyCode.W?t=KeyCode.UP:t===KeyCode.S?t=KeyCode.DOWN:t===KeyCode.D?t=KeyCode.RIGHT:t===KeyCode.A&&(t=KeyCode.LEFT),t}}class GameUtils{constructor(t){this.gEngine=t}switchView(t){t.init(),this.gEngine.view=t}}const Dir_RIGHT=0,Dir_LEFT=1;!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.SAT=e()}(this,function(){var t={};function e(t,e){this.x=t||0,this.y=e||0}t.Vector=e,t.V=e,e.prototype.copy=e.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},e.prototype.clone=e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.perp=e.prototype.perp=function(){var t=this.x;return this.x=this.y,this.y=-t,this},e.prototype.rotate=e.prototype.rotate=function(t){var e=this.x,s=this.y;return this.x=e*Math.cos(t)-s*Math.sin(t),this.y=e*Math.sin(t)+s*Math.cos(t),this},e.prototype.reverse=e.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},e.prototype.normalize=e.prototype.normalize=function(){var t=this.len();return t>0&&(this.x=this.x/t,this.y=this.y/t),this},e.prototype.add=e.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.prototype.sub=e.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},e.prototype.scale=e.prototype.scale=function(t,e){return this.x*=t,this.y*=e||t,this},e.prototype.project=e.prototype.project=function(t){var e=this.dot(t)/t.len2();return this.x=e*t.x,this.y=e*t.y,this},e.prototype.projectN=e.prototype.projectN=function(t){var e=this.dot(t);return this.x=e*t.x,this.y=e*t.y,this},e.prototype.reflect=e.prototype.reflect=function(t){var e=this.x,s=this.y;return this.project(t).scale(2),this.x-=e,this.y-=s,this},e.prototype.reflectN=e.prototype.reflectN=function(t){var e=this.x,s=this.y;return this.projectN(t).scale(2),this.x-=e,this.y-=s,this},e.prototype.dot=e.prototype.dot=function(t){return this.x*t.x+this.y*t.y},e.prototype.len2=e.prototype.len2=function(){return this.dot(this)},e.prototype.len=e.prototype.len=function(){return Math.sqrt(this.len2())};function s(t,s){this.pos=t||new e,this.r=s||0}t.Circle=s,s.prototype.getAABB=s.prototype.getAABB=function(){var t=this.r;return new o(this.pos.clone().sub(new e(t,t)),2*t,2*t).toPolygon()};function i(t,s){this.pos=t||new e,this.angle=0,this.offset=new e,this.setPoints(s||[])}t.Polygon=i,i.prototype.setPoints=i.prototype.setPoints=function(t){if(!this.points||this.points.length!==t.length){var s,i=this.calcPoints=[],o=this.edges=[],r=this.normals=[];for(s=0;s<t.length;s++)i.push(new e),o.push(new e),r.push(new e)}return this.points=t,this._recalc(),this},i.prototype.setAngle=i.prototype.setAngle=function(t){return this.angle=t,this._recalc(),this},i.prototype.setOffset=i.prototype.setOffset=function(t){return this.offset=t,this._recalc(),this},i.prototype.rotate=i.prototype.rotate=function(t){for(var e=this.points,s=e.length,i=0;i<s;i++)e[i].rotate(t);return this._recalc(),this},i.prototype.translate=i.prototype.translate=function(t,e){for(var s=this.points,i=s.length,o=0;o<i;o++)s[o].x+=t,s[o].y+=e;return this._recalc(),this},i.prototype._recalc=function(){var t,e=this.calcPoints,s=this.edges,i=this.normals,o=this.points,r=this.offset,n=this.angle,a=o.length;for(t=0;t<a;t++){var h=e[t].copy(o[t]);h.x+=r.x,h.y+=r.y,0!==n&&h.rotate(n)}for(t=0;t<a;t++){var l=e[t],p=t<a-1?e[t+1]:e[0],c=s[t].copy(p).sub(l);i[t].copy(c).perp().normalize()}return this},i.prototype.getAABB=i.prototype.getAABB=function(){for(var t=this.calcPoints,s=t.length,i=t[0].x,r=t[0].y,n=t[0].x,a=t[0].y,h=1;h<s;h++){var l=t[h];l.x<i?i=l.x:l.x>n&&(n=l.x),l.y<r?r=l.y:l.y>a&&(a=l.y)}return new o(this.pos.clone().add(new e(i,r)),n-i,a-r).toPolygon()};function o(t,s,i){this.pos=t||new e,this.w=s||0,this.h=i||0}t.Box=o,o.prototype.toPolygon=o.prototype.toPolygon=function(){var t=this.pos,s=this.w,o=this.h;return new i(new e(t.x,t.y),[new e,new e(s,0),new e(s,o),new e(0,o)])};function r(){this.a=null,this.b=null,this.overlapN=new e,this.overlapV=new e,this.clear()}t.Response=r,r.prototype.clear=r.prototype.clear=function(){return this.aInB=!0,this.bInA=!0,this.overlap=Number.MAX_VALUE,this};for(var n=[],a=0;a<10;a++)n.push(new e);var h=[];for(a=0;a<5;a++)h.push([]);var l=new r,p=new o(new e,1e-6,1e-6).toPolygon();function c(t,e,s){for(var i=Number.MAX_VALUE,o=-Number.MAX_VALUE,r=t.length,n=0;n<r;n++){var a=t[n].dot(e);a<i&&(i=a),a>o&&(o=a)}s[0]=i,s[1]=o}function y(t,e,s,i,o,r){var a=h.pop(),l=h.pop(),p=n.pop().copy(e).sub(t),y=p.dot(o);if(c(s,o,a),c(i,o,l),l[0]+=y,l[1]+=y,a[0]>l[1]||l[0]>a[1])return n.push(p),h.push(a),h.push(l),!0;if(r){var u=0;if(a[0]<l[0])if(r.aInB=!1,a[1]<l[1])u=a[1]-l[0],r.bInA=!1;else{u=(d=a[1]-l[0])<(v=l[1]-a[0])?d:-v}else if(r.bInA=!1,a[1]>l[1])u=a[0]-l[1],r.aInB=!1;else{var d,v;u=(d=a[1]-l[0])<(v=l[1]-a[0])?d:-v}var f=Math.abs(u);f<r.overlap&&(r.overlap=f,r.overlapN.copy(o),u<0&&r.overlapN.reverse())}return n.push(p),h.push(a),h.push(l),!1}t.isSeparatingAxis=y;function u(t,e){var s=t.len2(),i=e.dot(t);return i<0?d:i>s?f:v}var d=-1,v=0,f=1;t.pointInCircle=function(t,e){var s=n.pop().copy(t).sub(e.pos),i=e.r*e.r,o=s.len2();return n.push(s),o<=i};t.pointInPolygon=function(t,e){p.pos.copy(t),l.clear();var s=m(p,e,l);return s&&(s=l.aInB),s};t.testCircleCircle=function(t,e,s){var i=n.pop().copy(e.pos).sub(t.pos),o=t.r+e.r,r=o*o,a=i.len2();if(a>r)return n.push(i),!1;if(s){var h=Math.sqrt(a);s.a=t,s.b=e,s.overlap=o-h,s.overlapN.copy(i.normalize()),s.overlapV.copy(i).scale(s.overlap),s.aInB=t.r<=e.r&&h<=e.r-t.r,s.bInA=e.r<=t.r&&h<=t.r-e.r}return n.push(i),!0};function w(t,e,s){for(var i=n.pop().copy(e.pos).sub(t.pos),o=e.r,r=o*o,a=t.calcPoints,h=a.length,l=n.pop(),p=n.pop(),c=0;c<h;c++){var y=c===h-1?0:c+1,v=0===c?h-1:c-1,w=0,m=null;l.copy(t.edges[c]),p.copy(i).sub(a[c]),s&&p.len2()>r&&(s.aInB=!1);var x=u(l,p);if(x===d){l.copy(t.edges[v]);var g=n.pop().copy(i).sub(a[v]);if((x=u(l,g))===f){if((K=p.len())>o)return n.push(i),n.push(l),n.push(p),n.push(g),!1;s&&(s.bInA=!1,m=p.normalize(),w=o-K)}n.push(g)}else if(x===f){if(l.copy(t.edges[y]),p.copy(i).sub(a[y]),(x=u(l,p))===d){if((K=p.len())>o)return n.push(i),n.push(l),n.push(p),!1;s&&(s.bInA=!1,m=p.normalize(),w=o-K)}}else{var C=l.perp().normalize(),K=p.dot(C),b=Math.abs(K);if(K>0&&b>o)return n.push(i),n.push(C),n.push(p),!1;s&&(m=C,w=o-K,(K>=0||w<2*o)&&(s.bInA=!1))}m&&s&&Math.abs(w)<Math.abs(s.overlap)&&(s.overlap=w,s.overlapN.copy(m))}return s&&(s.a=t,s.b=e,s.overlapV.copy(s.overlapN).scale(s.overlap)),n.push(i),n.push(l),n.push(p),!0}t.testPolygonCircle=w;t.testCirclePolygon=function(t,e,s){var i=w(e,t,s);if(i&&s){var o=s.a,r=s.aInB;s.overlapN.reverse(),s.overlapV.reverse(),s.a=s.b,s.b=o,s.aInB=s.bInA,s.bInA=r}return i};function m(t,e,s){for(var i=t.calcPoints,o=i.length,r=e.calcPoints,n=r.length,a=0;a<o;a++)if(y(t.pos,e.pos,i,r,t.normals[a],s))return!1;for(a=0;a<n;a++)if(y(t.pos,e.pos,i,r,e.normals[a],s))return!1;return s&&(s.a=t,s.b=e,s.overlapV.copy(s.overlapN).scale(s.overlap)),!0}return t.testPolygonPolygon=m,t});class GameGraphics{constructor(){this.isAnimating=!1}repeatAction(t,e,s){this.isAnimating=!0;let i=0,o=setInterval(()=>{i++>e?(clearInterval(o),this.isAnimating=!1):s()},t)}}class GameView{constructor(){this.privates={bgColor:"#ccc"},this.init()}then(t){this.privates.callback=t}init(){}update(){}render(){ctx.fillStyle=this.privates.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height)}}class TitleView{constructor(t){this.cta="Press Enter",this.privates={title:t},this.init()}then(t){this.privates.callback=t}init(){this.title=this.privates.title}update(){game.input.lastKeyDown===KeyCode.ENTER&&(game.input.lastKeyDown=KeyCode.EMPTY,this.privates.callback())}render(){ctx.fillStyle="#000",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="36px Arial",ctx.fillStyle="#fff",ctx.fillText(this.title,canvas.width/2-ctx.measureText(this.title).width/2,100),ctx.font="24px Arial",ctx.fillText(this.cta,canvas.width/2-ctx.measureText(this.cta).width/2,canvas.height/2)}}class GameSaveView{constructor(){this.title="Select a save slot",this.storage=new GameSave,this.list=this.storage.getList(),this.privates={},this.init()}then(t){this.privates.callback=t}init(){this.arrow={img:">>",slot:0,x:canvas.width/2-ctx.measureText(this.list[0]).width/2-60,y:200}}update(){if(game.input.lastKeyDown===KeyCode.ESC)game.input.lastKeyDown=KeyCode.EMPTY,this.privates.callback(KeyCode.ESC);else if(game.input.lastKeyDown===KeyCode.ENTER){game.input.lastKeyDown=KeyCode.EMPTY;const t=new Date,e=t.getMonth()+1,s=t.getDate(),i=t.getFullYear(),o=t.toLocaleTimeString();this.storage.save(this.arrow.slot,`${e}/${s}/${i} ${o}`),this.privates.callback(KeyCode.ENTER)}else game.input.lastKeyDown===KeyCode.DELETE?(game.input.lastKeyDown=KeyCode.EMPTY,this.list=this.storage.erase(this.arrow.slot)):2!==this.arrow.slot&&game.input.lastKeyDown===KeyCode.DOWN?(game.input.lastKeyDown=KeyCode.EMPTY,++this.arrow.slot,this.arrow.x=canvas.width/2-ctx.measureText(this.list[this.arrow.slot]).width/2-60,this.arrow.y+=80):0!==this.arrow.slot&&game.input.lastKeyDown===KeyCode.UP&&(game.input.lastKeyDown=KeyCode.EMPTY,--this.arrow.slot,this.arrow.x=canvas.width/2-ctx.measureText(this.list[this.arrow.slot]).width/2-60,this.arrow.y-=80)}render(){ctx.fillStyle="#111",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="36px Arial",ctx.fillStyle="#fff",ctx.fillText(this.title,canvas.width/2-ctx.measureText(this.title).width/2,80),ctx.font="24px Arial";for(let t=0;t<this.list.length;++t)ctx.fillText(this.list[t],canvas.width/2-ctx.measureText(this.list[t]).width/2,200+80*t);ctx.fillText(this.arrow.img,this.arrow.x,this.arrow.y)}}class LevelView{constructor(t,e){this.onUpdateSet=!1,this.onRenderSet=!1,this.privates={},this.player=t,this.curLvl=e,this.init()}then(t){this.privates.callback=t}init(){}update(){this.curLvl.update(),this.player.update(),this._checkCollision()}onUpdate(t){this.onUpdateSet=!0,this.onUpdate=t}render(){this.curLvl.render(),this.player.render()}onRender(t){this.onRenderSet=!0,this.onRender=t}_checkCollision(){if(this.player.invincible)0==this.player.invincibleTimer--&&(this.player.invincible=!1,this.player.invincibleTimer=120);else for(let t=0;t<this.curLvl.projectiles.length;++t){if(SAT.testPolygonPolygon(this.player,this.curLvl.projectiles[t])){--this.player.hp,this.player.invincible=!0;break}}}}class Level1{constructor(){this.projectiles=[];for(let t=0;t<10;++t){let t=new SAT.Box(new SAT.Vector(Math.floor(Math.random()*canvas.width+0),canvas.height),10,20).toPolygon();t.speed=.1*Math.floor(10*Math.random()+3),this.projectiles.push(t)}}update(){for(let t=0;t<this.projectiles.length;++t)this.projectiles[t].pos.y-=this.projectiles[t].speed}render(){ctx.fillStyle="#000",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.fillStyle="silver";for(let t=0;t<this.projectiles.length;++t)ctx.fillRect(this.projectiles[t].pos.x,this.projectiles[t].pos.y,10,20)}}class Vamp{constructor(){this.speed=4,this.w=40,this.h=40,this.hp=3,this.invincible=!1,this.invincibleTimer=120,this.dead=!1,Object.assign(this,new SAT.Box(new SAT.Vector(0,0),this.w,this.h).toPolygon())}update(){game.input.keysDown[KeyCode.RIGHT]?this.pos.x+=this.speed:game.input.keysDown[KeyCode.LEFT]&&(this.pos.x-=this.speed),game.input.keysDown[KeyCode.UP]?this.pos.y-=this.speed:game.input.keysDown[KeyCode.DOWN]&&(this.pos.y+=this.speed),this.hp<=0&&!this.dead&&(this.dead=!0,alert("You died"),location.reload())}render(){if(this.dead)return;let t=!0;if(this.invincible){const e=this.invincibleTimer%30;e>=0&&e<15&&(t=!1)}t&&(ctx.fillStyle="yellow",ctx.fillRect(this.pos.x,this.pos.y,this.w,this.h)),ctx.fillStyle="red";for(let t=0;t<this.hp;++t)ctx.fillRect(this.pos.x-10+20*t,this.pos.y-20,20,10)}}(()=>{window.game=new GameEngine;let t=new TitleView("Vamp: The Great and Powerful",!0),e=new GameSaveView;const s=new Vamp,i=new Level1,o=new LevelView(s,i);t.then(()=>{game.utils.switchView(e)}),e.then(e=>{e===KeyCode.ESC?game.utils.switchView(t):e===KeyCode.ENTER&&game.utils.switchView(o)}),game.view=t})();