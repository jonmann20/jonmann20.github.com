(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8],{11:function(t,n,e){"use strict";e.r(n);var i=e(26);function a(){const t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\t:host {\n\t\tdisplay: block;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\th1,\n\th2,\n\th3 {\n\t\tmargin: 0.4em 0 0.6em;\n\t\tfont-size: 1.75em;\n\t\tfont-weight: 300;\n\t\tcolor: var(--white);\n\t\ttext-shadow: 0 2px 3px #212121;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t}\n\n\ta {\n\t\tcolor: var(--blue);\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t}\n\n\ta:hover {\n\t\tcolor: #7ddff1;\n\t\ttext-shadow: #7ddff1 0 0 6px;\n\t}\n\n\ta:active {\n\t\tcolor: #4fd3ed;\n\t}\n\n\ta:focus {\n\t\toutline: 0;\n\t}\n\n\ta[selected] {\n\t\tcolor: var(--red) !important;\n\t}\n\n\tinput {\n\t\toutline-color: #888;\n\t}\n\n\tinput:focus {\n\t\tbox-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.45);\n\t}\n\n\t/* utils */\n\n\t.card {\n\t\tdisplay: inline-block;\n\t\tbackground: var(--black);\n\t\tbox-shadow: var(--box-shadow-2);\n\t\tborder-radius: 2px;\n\t\tpadding: 3px 25px 5px;\n\t}\n\n\t.card-light {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: var(--box-shadow-2);\n\t}\n"]);return a=function(){return t},t}n.default=Object(i.b)(a())},5:function(t,n,e){"use strict";e.r(n);var i=e(26);function a(){const t=s(["\n\t\t\theader {\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 99999;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\tbackground: var(--black);\n\t\t\t}\n\n\t\t\t.menu {\n\t\t\t\tposition: absolute;\n\t\t\t\tdisplay: flex;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tpadding: 16px 20px 15px 16px;\n\t\t\t\twidth: auto;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t}\n\n\t\t\tnav {\n\t\t\t\tfont-size: 1.57em;\n\t\t\t\ttext-align: left;\n\t\t\t\tmargin-top: 35px;\n\t\t\t\tpadding: 15px 20px;\n\t\t\t\tmin-width: 165px;\n\t\t\t}\n\n\t\t\tnav:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t\theight: 55px;\n\t\t\t}\n\n\t\t\tnav:first-child a {\n\t\t\t\tdisplay: inline;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 1.1 !important;\n\t\t\t\tmargin-right: 0;\n\t\t\t}\n\n\t\t\tul {\n\t\t\t\tlist-style-type: none;\n\t\t\t\tfont-size: 62%;\n\t\t\t\twidth: 90%;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tpadding: 0;\n\t\t\t\tborder-radius: 1px;\n\t\t\t}\n\n\t\t\tul a {\n\t\t\t\tmargin-right: 0 !important;\n\t\t\t}\n\n\t\t\tul a:active {\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\twidth: 100%;\n\t\t\t\tcolor: var(--yellow);\n\t\t\t}\n\n\t\t\ta:hover {\n\t\t\t\tcolor: var(--yellow);\n\t\t\t\ttext-shadow: 0 0 6px var(--yellow);\n\t\t\t}\n\n\t\t\ta,\n\t\t\ta:visited {\n\t\t\t\ttext-align: right;\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-right: 18px;\n\t\t\t\tline-height: 1.7;\n\t\t\t\ttransition: none;\n\t\t\t}\n\n\t\t\t.icon-home {\n\t\t\t\tmargin-right: 7px;\n\t\t\t\tvertical-align: -3px;\n\t\t\t}\n\n\t\t\t.nav2 {\n\t\t\t\tdisplay: none;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\n\t\t\t.nav2 ul a {\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.nav2 i-con {\n\t\t\t\tvertical-align: -6px;\n\t\t\t\tmargin-left: 7px;\n\t\t\t}\n\n\t\t\t.playground-nav-wrap {\n\t\t\t\theight: 0;\n\t\t\t\topacity: 0;\n\t\t\t\tvisibility: hidden;\n\t\t\t\twill-change: height, padding, opacity;\n\t\t\t\ttransition: 0.25s ease;\n\t\t\t}\n\n\t\t\t.playground-nav-wrap.visible {\n\t\t\t\tpadding: 10px 0 10px 40px;\n\t\t\t\theight: 92px;\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\t/* > mobile */\n\t\t\t@media (min-width: 801px) {\n\t\t\t\theader {\n\t\t\t\t\ttop: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tbackground: none;\n\t\t\t\t}\n\n\t\t\t\tnav {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding: 15px 15px 0 0;\n\t\t\t\t}\n\n\t\t\t\tnav:first-child {\n\t\t\t\t\ttext-indent: 9px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t}\n\n\t\t\t\t.menu {\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\t.nav2 {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return a=function(){return t},t}function o(){const t=s(['\n\t\t\t<header>\n\t\t\t\t<nav>\n\t\t\t\t\t<a href="#home">\n\t\t\t\t\t\t<i-con name="home" class="icon-home" ?selected="','"></i-con>&nbsp;Jon Wiedmann\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="menu" @click="','">\n\t\t\t\t\t\t<i-con name="menu"></i-con>\n\t\t\t\t\t</a>\n\t\t\t\t</nav>\n\t\t\t\t<nav class="nav2">\n\t\t\t\t\t<a href="#games">\n\t\t\t\t\t\tGames <i-con name="videogameAsset" ?selected="','"></i-con>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href="#playground">\n\t\t\t\t\t\tPlayground <i-con name="polymer" ?selected="','"></i-con>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t\x3c!-- TODO: convert sub nav to a component --\x3e\n\t\t\t\t\t<div class="playground-nav-wrap','">\n\t\t\t\t\t\t<ul class="playground-nav">\n\t\t\t\t\t\t\t<li><a href="#playground/breakdancing-cube" ?selected="','">Breakdancing Cube</a></li>\n\t\t\t\t\t\t\t<li><a href="#playground/starry-background" ?selected="','">Starry Background</a></li>\n\t\t\t\t\t\t\t<li><a href="#playground/ball-pit" ?selected="','">Ball Pit</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href="#portfolio">\n\t\t\t\t\t\tPortfolio <i-con name="work" ?selected="','"></i-con>\n\t\t\t\t\t</a>\n\t\t\t\t</nav>\n\t\t\t</header>\n\t\t']);return o=function(){return t},t}function s(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}class d extends i.a{constructor(){super(),this.asideIsActive=!1,this.initX=0,this.x=0,this.boundHideAside=t=>this.hideAside(t),this.boundSetInitX=t=>this.hideSetInitX(t),this.boundSetX=t=>this.hideSetX(t),window.onresize=()=>{window.innerWidth>800&&this.boundHideAside()},this.navVisible=window.page.includes("playground")}firstUpdated(){this.pNav=this.shadowRoot.querySelector(".playground-nav-wrap"),addEventListener("route",t=>{t.detail.includes("playground")?this.navVisible=!0:this.navVisible=!1},{passive:!0})}render(){return Object(i.c)(o(),"home"===this.page,this.menuClick,"games"===this.page,this.page.includes("playground"),this.navVisible?" visible":"","playground/breakdancing-cube"===this.page,"playground/starry-background"===this.page,"playground/ball-pit"===this.page,"portfolio"===this.page)}menuClick(t){t.preventDefault(),this.asideIsActive?this.hideAside():(document.querySelector("a-side").setAttribute("active",!0),document.querySelector("main").classList.add("leftbar-active"),this.asideIsActive=!0,requestAnimationFrame(()=>{document.body.addEventListener("click",this.boundHideAside,{passive:!0}),document.body.addEventListener("touchstart",this.boundSetInitX,{passive:!0}),document.body.addEventListener("touchmove",this.boundSetX,{passive:!0}),document.body.addEventListener("touchend",this.boundHideAside,{passive:!0})}))}hideAside(t){t&&"touchend"===t.type&&this.initX===this.x||(document.querySelector("a-side").removeAttribute("active"),document.querySelector("main").classList.remove("leftbar-active"),this.asideIsActive=!1,document.body.removeEventListener("click",this.boundHideAside,{passive:!0}),document.body.removeEventListener("touchstart",this.boundSetInitX,{passive:!0}),document.body.removeEventListener("touchmove",this.boundSetX,{passive:!0}),document.body.removeEventListener("touchend",this.boundHideAside,{passive:!0}))}setInitX(t){this.initX=t.touches[0].pageX,this.x=this.initX}setX(t){this.x=t.touches[0].pageX}}r(d,"styles",[e(11).default,Object(i.b)(a())]),r(d,"properties",{page:{type:String}}),customElements.define("head-er",d)}}]);