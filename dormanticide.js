!function(t){var i={};function e(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(a,s,function(i){return t[i]}.bind(null,s));return a},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=10)}([function(t,i,e){"use strict";e.d(i,"b",function(){return a}),e.d(i,"a",function(){return s});const a={EMPTY:-1,ENTER:13,CTRL:17,ESC:27,SPACEBAR:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,A:65,D:68,F:70,H:72,J:74,K:75,M:77,O:79,R:82,S:83,W:87};class s{constructor(){this.keysDown={},this.lastKeyDown=a.EMPTY;let t=a.EMPTY;addEventListener("keydown",t=>{const i=this.fixKey(t.keyCode);this.keysDown[i]||(this.lastKeyDown=i,this.keysDown[i]=!0)}),addEventListener("keyup",i=>{t=this.fixKey(i.keyCode),delete this.keysDown[t]})}fixKey(t){return t===a.W?t=a.UP:t===a.S?t=a.DOWN:t===a.D?t=a.RIGHT:t===a.A&&(t=a.LEFT),t}}},function(t,i,e){"use strict";e.d(i,"b",function(){return a}),e.d(i,"a",function(){return s});class a{constructor(t){this.gEngine=t}switchView(t){t.init(),this.gEngine.view=t}}const s={RIGHT:0,LEFT:1}},function(t,i,e){"use strict";var a=e(0);i.a=class{constructor(t){this.cta="Press Enter",this.privates={title:t},this.init()}then(t){this.privates.callback=t}init(){this.title=this.privates.title}update(){game.input.lastKeyDown===a.b.ENTER&&(game.input.lastKeyDown=a.b.EMPTY,this.privates.callback())}render(){ctx.fillStyle="#000",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="36px Arial",ctx.fillStyle="#fff",ctx.fillText(this.title,canvas.width/2-ctx.measureText(this.title).width/2,100),ctx.font="24px Arial",ctx.fillText(this.cta,canvas.width/2-ctx.measureText(this.cta).width/2,canvas.height/2)}}},function(t,i,e){"use strict";var a=e(0);var s=class{constructor(){this.isAnimating=!1}repeatAction(t,i,e){this.isAnimating=!0;let a=0,s=setInterval(()=>{a++>i?(clearInterval(s),this.isAnimating=!1):e()},t)}};var r=class{constructor(){this.privates={bgColor:"#ccc"},this.init()}then(t){this.privates.callback=t}init(){}update(){}render(){ctx.fillStyle=this.privates.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height)}},n=e(1);i.a=class{constructor(){this.update=this.update.bind(this),this.render=this.render.bind(this),this.updateInterval=setInterval(this.update,1e3/60),this.renderRAF=requestAnimationFrame(this.render),this.onUpdateSet=!1,this.onRenderSet=!1;let t=document.createElement("a");t.href="/#games",t.innerText="Back",t.className="btn-back",document.body.appendChild(t);let i=document.createElement("div");i.className="canvas-wrap",window.canvas=document.createElement("canvas"),canvas.setAttribute("width",1008),canvas.setAttribute("height",567),i.appendChild(canvas),document.body.appendChild(i),window.ctx=canvas.getContext("2d"),this.input=new a.a,this.graphics=new s,this.view=new r,this.utils=new n.b(this)}update(){this.view.update(),this.onUpdateSet&&this.onUpdate()}render(){this.renderRAF=requestAnimationFrame(this.render),this.view.render(),this.onRenderSet&&this.onRender()}onUpdate(t){this.onUpdateSet=!0,this.onUpdate=t}onRender(t){this.onRenderSet=!0,this.onRender=t}stop(){clearInterval(this.updateInterval),cancelAnimationFrame(this.renderRAF)}}},,,,,,,function(t,i,e){"use strict";e.r(i);var a=e(3),s=e(2),r=e(0);var n=class{constructor(){this._arrow={img:"^^"},this.privates={},this.init()}then(t){this.privates.callback=t}init(){this._arrow.x=90,this._arrow.y=canvas.height/2+70,this._arrow.slot=0}update(){game.input.lastKeyDown===r.b.ENTER?(game.input.lastKeyDown=r.b.EMPTY,this.privates.callback()):game.input.lastKeyDown===r.b.RIGHT?(game.input.lastKeyDown=r.b.EMPTY,this._arrow.slot<7&&(this._arrow.x+=115,++this._arrow.slot)):game.input.lastKeyDown===r.b.LEFT&&(game.input.lastKeyDown=r.b.EMPTY,this._arrow.slot>0&&(this._arrow.x-=115,--this._arrow.slot))}render(){let t,i;ctx.fillStyle="#34282c",ctx.fillRect(0,0,canvas.width,canvas.height);for(let e=0;e<8;++e)t=60+115*e,i=canvas.height/2-40,ctx.fillStyle="#fff",ctx.font="18px Arial",ctx.fillText("Level "+(e+1),t+10,i-13),ctx.fillStyle="red",ctx.fillRect(t,i,80,80);ctx.fillStyle="#fff",ctx.fillText(this._arrow.img,this._arrow.x,this._arrow.y)}},l=e(1);var c={TACKLE:{name:"TACKLE",multiplier:1},HEAL:{name:"HEAL",multiplier:1},DRAGONS_BREATH:{name:"DRAGONS BREATH",multiplier:5}};var h=class{constructor(t,i,e){this._arrow={img:">>"},this.privates={bgColor:t,dormantL:i,dormantR:e},this.init()}then(t){this.privates.callback=t}init(){this._arrow.x=43,this._arrow.y=350,this._arrow.curSlot=0,this._left={x:30,dir:l.a.RIGHT},this._fire={x:0,y:0},this._wasAttack=!1,this._wasAttackTimer=60,this._theAttack={name:"EMPTY",atk:0},this._dormantL=this.privates.dormantL,this._dormantR=this.privates.dormantR}_checkInput(){switch(game.input.lastKeyDown){case r.b.ENTER:return game.input.lastKeyDown=r.b.EMPTY,this._theAttack.name=this._dormantL.actions[this._arrow.curSlot].name,this._theAttack.atk=this._dormantL.atk*this._dormantL.actions[this._arrow.curSlot].multiplier/this._dormantR.def,!0;case r.b.UP:game.input.lastKeyDown=r.b.EMPTY,0!==this._arrow.curSlot&&null!==this._dormantL.actions[this._arrow.curSlot-1]&&(--this._arrow.curSlot,this._arrow.y-=30);break;case r.b.DOWN:game.input.lastKeyDown=r.b.EMPTY,3!==this._arrow.curSlot&&null!==this._dormantL.actions[this._arrow.curSlot+1]&&(++this._arrow.curSlot,this._arrow.y+=30)}}update(){this._wasAttack&&(this._dormantR.hp-=this._theAttack.atk/60),game.graphics.isAnimating||this._checkInput()&&(this._theAttack.name===c.TACKLE.name?this._runTackleAnimation():this._theAttack.name===c.DRAGONS_BREATH.name&&(this._wasAttack=!0)),this._dormantR.hp<=0&&(this._dormantL.xp+=25,this.privates.callback())}_runTackleAnimation(){this._left.dir=l.a.RIGHT,game.graphics.repeatAction(6,60,()=>{this._left.dir===l.a.RIGHT&&this._left.x>60&&(this._left.dir=l.a.LEFT),this._left.dir===l.a.RIGHT?++this._left.x:--this._left.x,this._dormantR.hp-=this._theAttack.atk/60})}render(){if(ctx.fillStyle=this.privates.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height),this._drawDormantHUD(this._dormantL,10,15,!0),this._dormantL.draw(this._left.x,90),this._drawHUD(),this._drawDormantHUD(this._dormantR,canvas.width-130,15,!1),this._dormantR.draw(770,90),this._wasAttack){const t=this._wasAttackTimer%40;t>=0&&t<10?this._fire.x=0:t>=10&&t<20?this._fire.x=5:t>=20&&t<30?this._fire.x=0:t>=30&&t<40&&(this._fire.x=-5),ctx.fillStyle="red",ctx.fillRect(870+this._fire.x,242,40,12),ctx.fillRect(880+this._fire.x,230,30,12),ctx.fillRect(880+this._fire.x,218,20,12),0==this._wasAttackTimer--&&(this._wasAttack=!1,this._wasAttackTimer=60)}}_drawDormantHUD(t,i,e,a){const s=`${t.name} L${t.lvl}`;ctx.fillStyle="#000",ctx.fillText(s,i+ctx.measureText(s).width/2,e),ctx.fillText("HP",i,e+20),ctx.strokeStyle="#000",ctx.strokeRect(i+21,e+12,100,10),ctx.fillStyle="red",ctx.fillRect(i+22,e+13,t.hp*(100/t.initHP)-1,8),a&&(ctx.fillStyle="#000",ctx.fillText("XP",i,e+40),ctx.strokeStyle="#000",ctx.strokeRect(i+21,e+32,100,10),ctx.fillStyle="#777",ctx.fillRect(i+22,e+33,t.xp*(100/t.xpNeeded)-1,8))}_drawHUD(){ctx.strokeStyle="#000",ctx.strokeRect(20,300,500,250),ctx.font="12px Arial",ctx.fillStyle="#000",ctx.fillText("ATK: "+this._dormantL.atk,460,320),ctx.fillText("DEF: "+this._dormantL.def,460,340),this._drawActionList(),this._drawActionArrow()}_drawActionList(){ctx.fillStyle="#000";for(let t=0;t<4;++t)null===this._dormantL.actions[t]?ctx.fillText("--",80,350+30*t):ctx.fillText(this._dormantL.actions[t].name,80,350+30*t)}_drawActionArrow(){ctx.fillStyle="#000",ctx.fillText(this._arrow.img,this._arrow.x,this._arrow.y)}};var o=class{constructor(t,i,e,a,s,r,n){this.img=new Image,this.imgReady=!1,this.img.onload=(()=>{this.imgReady=!0}),this.img.src=`img/${t}`,this.name=i,this.atk=e,this.def=a,this.initHP=this.hp=s,this.actions=r,this.lvl=void 0!==n?n:1,this.xp=0,this.xpNeeded=50}draw(t,i){this.imgReady&&ctx.drawImage(this.img,t,i,this.img.width,this.img.height)}};(()=>{window.game=new a.a;let t=1,i=new s.a("Dormanticide");i.then(()=>{game.utils.switchView(e)});let e=new n;e.then(()=>{1===t?game.utils.switchView(u):game.utils.switchView(w)});let r=[c.TACKLE,c.DRAGONS_BREATH,null,null],l=new o("malaise.png","MALAISE",12,8,27,r),d=new o("erabor.png","ERABOR",8,12,23,r),u=new h("#ddd",l,d);u.then(()=>{++t,game.utils.switchView(e)});let w=new h("#ddd",l,d);w.then(()=>{game.utils.switchView(e)}),game.view=i})()}]);