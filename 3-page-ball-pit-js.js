(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,6],{11:function(t,e,n){"use strict";n.r(e);e.default="\n\t:host {\n\t\tdisplay: block;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\th1,\n\th2,\n\th3 {\n\t\tmargin: 0.4em 0 0.6em;\n\t\tfont-size: 1.75em;\n\t\tfont-weight: 300;\n\t\tcolor: #fcfcfa;\n\t\ttext-shadow: 0 2px 3px #212121;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t}\n\n\ta {\n\t\tcolor: #66d9ef;\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t}\n\n\ta:hover {\n\t\tcolor: #7ddff1;\n\t\ttext-shadow: #7ddff1 0 0 6px;\n\t}\n\n\ta:active {\n\t\tcolor: #4fd3ed;\n\t}\n\n\ta:focus {\n\t\toutline: 0;\n\t}\n\n\tinput {\n\t\toutline-color: #888;\n\t}\n\n\tinput:focus {\n\t\tbox-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.45);\n\t}\n\n\t/* utils */\n\n\t.card {\n\t\tdisplay: inline-block;\n\t\tbackground: #2d2a2e;\n\t\tbox-shadow: var(--box-shadow-2);\n\t\tborder-radius: 2px;\n\t\tpadding: 3px 25px 5px;\n\t}\n\n\t.card-light {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: var(--box-shadow-2);\n\t}\n"},12:function(t,e,n){"use strict";n.r(e);e.default="\n\t.col-left {\n\t\tmin-width: 121px;\n\t\twidth: 100%;\n\t}\n\n\t.col-left ul {\n\t\tfont-size: 1.15em;\n\t}\n\n\t.col-right {\n\t\tmargin-top: 25px;\n\t\tpadding-bottom: 13px;\n\t}\n\n\t.col-right img {\n\t\tmax-width: 100%;\n\t}\n\n\t.col-right > div {\n\t\tpadding-bottom: 13px !important;\n\t}\n\n\t/* > mobile */\n\t@media (min-width: 801px) {\n\t\t.col-left {\n\t\t\tfloat: left;\n\t\t\twidth: 46%;\n\t\t\tmargin-right: 2%;\n\t\t}\n\n\t\t.col-right {\n\t\t\tfloat: right;\n\t\t\twidth: 50%;\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n\n\t/* tablet */\n\t@media (min-width: 801px) and (max-width: 1265px) {\n\t\t.col-left {\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.col-right {\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 25px;\n\t\t}\n\t}\n"},19:function(t,e,n){"use strict";n.r(e);var i=n(22),a=n(11),l=n(12),s=n(21);var o=class{constructor(t){this.doc=t,this.boundOnRoute=(t=>this.destroy(t.detail)),addEventListener("route",this.boundOnRoute,{passive:!0}),this.canvas=t.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.radius=16.5,this.balls=[],this.canvas.width=s.a.getMainWidth/1.5,this.canvas.height=this.canvas.width/2,this.boundOnNumBalls=(t=>this.onNumBalls(t.target.value)),this.boundOnSizeBalls=(t=>this.onSizeBalls(t.target.value)),this.boundOnSpeedBalls=(t=>this.onSpeedBalls(t.target.value)),t.querySelector(".numBalls").addEventListener("input",this.boundOnNumBalls),t.querySelector(".sizeBalls").addEventListener("input",this.boundOnSizeBalls),t.querySelector(".speedBalls").addEventListener("input",this.boundOnSpeedBalls);for(let t=0;t<20;++t)this.balls.push({x:Math.floor(Math.random()*(this.canvas.width+1)),y:Math.floor(Math.random()*(this.canvas.height+1)),velocity:{x:Math.floor(-3*Math.random()),y:Math.floor(7*Math.random())-3},color:this.getRandomColor()});this.runSim()}destroy(t){if("playground/ball-pit"===t)return;removeEventListener("route",this.boundOnRoute,{passive:!0}),cancelAnimationFrame(this.animLoop);const e=this.doc.querySelector(".numBalls"),n=this.doc.querySelector(".sizeBalls"),i=this.doc.querySelector(".speedBalls");e&&e.removeEventListener("input",this.boundOnNumBalls),n&&n.removeEventListener("input",this.boundOnSizeBalls),i&&i.removeEventListener("input",this.boundOnSpeedBalls),delete window.ballPit}update(){for(let t of this.balls)t.x+=t.velocity.x,t.y+=t.velocity.y,t.x-this.radius<0&&t.velocity.x<0&&(t.velocity.x=-t.velocity.x),t.y>=this.canvas.height-this.radius&&t.velocity.y>0&&(t.velocity.y=-t.velocity.y),t.x>=this.canvas.width-this.radius&&t.velocity.x>0&&(t.velocity.x=-t.velocity.x),t.y-this.radius<0&&t.velocity.y<0&&(t.velocity.y=-t.velocity.y)}render(){this.ctx.fillStyle="#0098ff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);for(const t of this.balls)this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,this.radius,0,2*Math.PI,!1),this.ctx.fill()}runSim(){this.update(),this.render(),this.animLoop=requestAnimationFrame(()=>this.runSim())}fixArr(t){let e=0,n=this.balls.length-t;if(n>0)for(;e<n;++e)this.balls.pop();else if(n<0)for(n=-n;e<n;++e){let t={x:Math.floor(Math.random()*(this.canvas.width-0+1))+0,y:Math.floor(Math.random()*(this.canvas.height+1)),velocity:{x:Math.floor(5*Math.random())+-2,y:Math.floor(7*Math.random())+-3},color:this.getRandomColor()};0===t.velocity.x&&(t.velocity.x=1),0===t.velocity.y&&(t.velocity.y=1),this.balls.push(t)}}updateUserSpeed(t,e){let n,i;for(let a of this.balls)n=a.velocity.x/t,i=a.velocity.y/t,a.velocity.x=n*e,a.velocity.y=i*e}onNumBalls(t){this.doc.querySelector(".litNumBalls").textContent=t,this.fixArr(t)}onSizeBalls(t){this.doc.querySelector(".litSizeBalls").textContent=t,this.radius=t}onSpeedBalls(t){this.updateUserSpeed(this.doc.querySelector(".litSpeedBalls").textContent,t),this.doc.querySelector(".litSpeedBalls").textContent=t}getRandomColor(){let t="#";for(let e=0;e<6;++e)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}};customElements.define("page-ball-pit",class extends i.a{constructor(){super(),document.title="Ball Pit | Playground",s.a.addMeta("description","A canvas example showcasing a ball pit."),s.a.addMeta("keywords","canvas, html5")}firstUpdated(){window.ballPit=new o(this.shadowRoot)}render(){return i.b`
			<style>
				${a.default}
				${l.default}

				.range-inputs > div {
					margin: 0 0 30px;
				}

				.range-inputs label {
					display: block;
					margin-bottom: 5px;
				}

				.range-inputs input {
					cursor: ew-resize;
				}

				.range-inputs input:focus {
					box-shadow: none;
					outline-color: transparent;
				}

				canvas {
					margin: 20px 0;
				}
			</style>

			<div class="card">
				<h2>Ball Pit</h2>
				<p>A Javascript and HTML<sub>5</sub> canvas example with balls colliding into the edges of a box.</p>
			</div>

			<div class="ball-pit">
				<canvas class="card-light"></canvas>

				<div class="range-inputs">
					<div>
						<label>Number of Balls: <span class="litNumBalls">20</span></label>
						<input type="range" value="20" min="1" class="numBalls">
					</div>
					<div>
						<label>Size of Balls (radius): <span class="litSizeBalls">16.5</span></label>
						<input type="range" value="16.5" min="3" step="0.5" max="40" class="sizeBalls">
					</div>
					<div>
						<label>Speed of Balls: <span class="litSpeedBalls">1</span></label>
						<input type="range" value="1" min="0.05" step="0.05" max="2.5" class="speedBalls">
					</div>
				</div>
			</div>
        `}})},21:function(t,e,n){"use strict";class i{static require(t){return new Promise((e,n)=>{if(i.constructor._jsSrc.includes(t))e();else{let a=document.createElement("script");a.src=t,a.async=1,document.head.appendChild(a),a.onload=(()=>{i.constructor._jsSrc.push(t),e()}),a.onerror=(()=>n())}})}static addMeta(t,e){let n=document.createElement("meta");n.setAttribute("name",t),n.setAttribute("content",e),document.head.appendChild(n)}static addLink(t,e,n=!0){let i=document.createElement("link");i.setAttribute("rel",t),i.setAttribute("href",e),n&&i.setAttribute("crossorigin",""),document.head.appendChild(i)}static get getMainWidth(){const t=document.querySelector("main"),e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("padding-left"));return t.getBoundingClientRect().width-n}}i.constructor._jsSrc=[],e.a=i}}]);