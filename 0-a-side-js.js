(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4],{11:function(t,n,e){"use strict";e.r(n);var a=e(23);function r(){const t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\t:host {\n\t\tdisplay: block;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\th1,\n\th2,\n\th3 {\n\t\tmargin: 0.4em 0 0.6em;\n\t\tfont-size: 1.75em;\n\t\tfont-weight: 300;\n\t\tcolor: var(--white);\n\t\ttext-shadow: 0 2px 3px #212121;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t}\n\n\ta {\n\t\tcolor: var(--blue);\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t}\n\n\ta:hover {\n\t\tcolor: #7ddff1;\n\t\ttext-shadow: #7ddff1 0 0 6px;\n\t}\n\n\ta:active {\n\t\tcolor: #4fd3ed;\n\t}\n\n\ta:focus {\n\t\toutline: 0;\n\t}\n\n\ta[selected] {\n\t\tcolor: var(--red) !important;\n\t}\n\n\tinput {\n\t\toutline-color: #888;\n\t}\n\n\tinput:focus {\n\t\tbox-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.45);\n\t}\n\n\t/* utils */\n\n\t.card {\n\t\tdisplay: inline-block;\n\t\tbackground: var(--black);\n\t\tbox-shadow: var(--box-shadow-2);\n\t\tborder-radius: 2px;\n\t\tpadding: 3px 25px 5px;\n\t}\n\n\t.card-light {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: var(--box-shadow-2);\n\t}\n"]);return r=function(){return t},t}n.default=Object(a.b)(r())},6:function(t,n,e){"use strict";e.r(n);var a=e(23);function r(){const t=i(["\n\t\t\taside {\n\t\t\t\ttransform: translateX(-100%);\n\t\t\t\ttransition: all 0.3s cubic-bezier(0, 0, 0.3, 1);\n\t\t\t\tpadding-top: 60px;\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 75%;\n\t\t\t\tmin-width: 200px;\n\t\t\t\tmax-width: 260px;\n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tbackground: var(--black);\n\t\t\t\tz-index: 999;\n\t\t\t\twill-change: transform;\n\t\t\t}\n\n\t\t\taside#activated {\n\t\t\t\ttransform: translateX(0);\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\tdisplay: block;\n\t\t\t\tline-height: 1.7;\n\t\t\t\tfont-size: 1.45em;\n\t\t\t\tpadding: 10px 0 10px 20px;\n\t\t\t\ttext-align: left !important;\n\t\t\t\tcolor: var(--yellow);\n\t\t\t}\n\n\t\t\ta:hover {\n\t\t\t\tcolor: var(--yellow);\n\t\t\t\ttext-shadow: 0 0 6px var(--yellow);\n\t\t\t}\n\n\t\t\ti-con {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-right: 13px;\n\t\t\t\tmargin-top: 5px;\n\t\t\t\tcursor: pointer !important;\n\t\t\t}\n\n\t\t\t.playground-nav {\n\t\t\t\tmargin-left: 25px;\n\t\t\t}\n\n\t\t\t.playground-nav a {\n\t\t\t\tfont-size: 1.2em;\n\t\t\t}\n\t\t"]);return r=function(){return t},t}function o(){const t=i(['\n\t\t\t<aside id="','">\n\t\t\t\t<a href="#games">\n\t\t\t\t\tGames <i-con name="videogameAsset" ?selected="','"></i-con>\n\t\t\t\t</a>\n\t\t\t\t<a href="#playground">\n\t\t\t\t\tPlayground <i-con name="polymer" ?selected="','"></i-con>\n\t\t\t\t</a>\n\t\t\t\t<div class="playground-nav-wrap">\n\t\t\t\t\t<ul class="playground-nav">\n\t\t\t\t\t\t<li><a href="#playground/breakdancing-cube" ?selected="','">Breakdancing Cube</a></li>\n\t\t\t\t\t\t<li><a href="#playground/starry-background" ?selected="','">Starry Background</a></li>\n\t\t\t\t\t\t<li><a href="#playground/ball-pit" ?selected="','">Ball Pit</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<a href="#portfolio">\n\t\t\t\t\tPortfolio <i-con name="work" ?selected="','"></i-con>\n\t\t\t\t</a>\n\t\t\t</aside>\n\t\t']);return o=function(){return t},t}function i(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}class c extends a.a{constructor(){super(),this.active=!1}render(){return Object(a.c)(o(),this.active?"activated":"","games"===this.page,this.page.includes("playground"),"playground/breakdancing-cube"===this.page,"playground/starry-background"===this.page,"playground/ball-pit"===this.page,"portfolio"===this.page)}}l(c,"styles",[e(11).default,Object(a.b)(r())]),l(c,"properties",{active:{type:Boolean},page:{type:String}}),customElements.define("a-side",c)}}]);