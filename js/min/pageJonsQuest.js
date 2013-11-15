/*!
	Colorbox v1.4.33 - 2013-10-31
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);
/** @preserve @author Jim Riecken - released under the MIT License. */
/**
 * A simple library for determining intersections of circles and
 * polygons using the Separating Axis Theorem.
 */
/*jshint shadow:true, sub:true, forin:true, noarg:true, noempty:true, 
  eqeqeq:true, bitwise:true, strict:true, undef:true, 
  curly:true, browser:true */
var SAT = window['SAT'] = {};
(function(SAT) {
  "use strict";
  
  /** 
   * Represents a vector in two dimensions.
   * 
   * @param {?number=} x The x position.
   * @param {?number=} y The y position.
   * @constructor
   */
  var Vector = function(x, y) {
    this['x'] = this.x = x || 0;
    this['y'] = this.y = y || 0;
  };
  SAT['Vector'] = Vector;
  SAT['V'] = Vector;
  /**
   * Copy the values of another Vector into this one.
   *
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.copy = function(other) {
    this.x = other.x; 
    this.y = other.y;
    return this;
  };
  Vector.prototype['copy'] = Vector.prototype.copy;
    
  /**
   * Rotate this vector by 90 degrees
   * 
   * @return {Vector} This for chaining.
   */
  Vector.prototype.perp = function() {
    var x = this.x;
    this.x = this.y; 
    this.y = -x;
    return this;
  };
  Vector.prototype['perp'] = Vector.prototype.perp;
    
  /**
   * Reverse this vector.
   * 
   * @return {Vector} This for chaining.
   */
  Vector.prototype.reverse = function() {
    this.x = -this.x; 
    this.y = -this.y;
    return this;
  };
  Vector.prototype['reverse'] = Vector.prototype.reverse;
  
  /**
   * Normalize (make unit length) this vector.
   * 
   * @return {Vector} This for chaining.
   */
  Vector.prototype.normalize = function() {
    var d = this.len();
    if(d > 0) {
      this.x = this.x / d; 
      this.y = this.y / d;
    }
    return this;
  };
  Vector.prototype['normalize'] = Vector.prototype.normalize;
  
  /**
   * Add another vector to this one.
   * 
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.add = function(other) {
    this.x += other.x; 
    this.y += other.y;
    return this;
  };
  Vector.prototype['add'] = Vector.prototype.add;
  
  /**
   * Subtract another vector from this one.
   * 
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaiing.
   */
  Vector.prototype.sub = function(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  };
  Vector.prototype['sub'] = Vector.prototype.sub;
  
  /**
   * Scale this vector.
   * 
   * @param {number} x The scaling factor in the x direction.
   * @param {?number=} y The scaling factor in the y direction.  If this
   *   is not specified, the x scaling factor will be used.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.scale = function(x,y) {
    this.x *= x; 
    this.y *= y || x;
    return this; 
  };
  Vector.prototype['scale'] = Vector.prototype.scale;
  
  /**
   * Project this vector on to another vector.
   * 
   * @param {Vector} other The vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.project = function(other) {
    var amt = this.dot(other) / other.len2();
    this.x = amt * other.x; 
    this.y = amt * other.y;
    return this;
  };
  Vector.prototype['project'] = Vector.prototype.project;
  
  /**
   * Project this vector onto a vector of unit length.
   * 
   * @param {Vector} other The unit vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.projectN = function(other) {
    var amt = this.dot(other);
    this.x = amt * other.x; 
    this.y = amt * other.y;
    return this;
  };
  Vector.prototype['projectN'] = Vector.prototype.projectN;
  
  /**
   * Reflect this vector on an arbitrary axis.
   * 
   * @param {Vector} axis The vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.reflect = function(axis) {
    var x = this.x;
    var y = this.y;
    this.project(axis).scale(2);
    this.x -= x; 
    this.y -= y;
    return this;
  };
  Vector.prototype['reflect'] = Vector.prototype.reflect;
  
  /**
   * Reflect this vector on an arbitrary axis (represented by a unit vector)
   * 
   * @param {Vector} axis The unit vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype.reflectN = function(axis) {
    var x = this.x;
    var y = this.y;
    this.projectN(axis).scale(2);
    this.x -= x; 
    this.y -= y;
    return this;
  };
  Vector.prototype['relectN'] = Vector.prototype.reflectN;
  
  /**
   * Get the dot product of this vector against another.
   * 
   * @param {Vector}  other The vector to dot this one against.
   * @return {number} The dot product.
   */
  Vector.prototype.dot = function(other) {
    return this.x * other.x + this.y * other.y;
  };
  Vector.prototype['dot'] = Vector.prototype.dot;
  
  /**
   * Get the length^2 of this vector.
   * 
   * @return {number} The length^2 of this vector.
   */
  Vector.prototype.len2 = function() {
    return this.dot(this);
  };
  Vector.prototype['len2'] = Vector.prototype.len2;
  
  /**
   * Get the length of this vector.
   * 
   * @return {number} The length of this vector.
   */
  Vector.prototype.len = function() {
    return Math.sqrt(this.len2());
  };
  Vector.prototype['len'] = Vector.prototype.len;
  
  /**
   * A circle.
   * 
   * @param {Vector=} pos A vector representing the position of the center of the circle
   * @param {?number=} r The radius of the circle
   * @constructor
   */
  var Circle = function(pos, r) {
    this['pos'] = this.pos = pos || new Vector();
    this['r'] = this.r = r || 0;
  };
  SAT['Circle'] = Circle;
  
  /**
   * A *convex* clockwise polygon.
   * 
   * @param {Vector=} pos A vector representing the origin of the polygon. (all other
   *   points are relative to this one)
   * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
   *   in clockwise order.
   * @constructor
   */
  var Polygon = function(pos, points) {
    this['pos'] = this.pos = pos || new Vector();
    this['points'] = this.points = points || [];
    this.recalc();
  };
  SAT['Polygon'] = Polygon;
  
  /**
   * Recalculate the edges and normals of the polygon.  This
   * MUST be called if the points array is modified at all and
   * the edges or normals are to be accessed.
   */
  Polygon.prototype.recalc = function() {
    var points = this.points;
    var len = points.length;
    this.edges = []; 
    this.normals = [];
    for (var i = 0; i < len; i++) {
      var p1 = points[i]; 
      var p2 = i < len - 1 ? points[i + 1] : points[0];
      var e = new Vector().copy(p2).sub(p1);
      var n = new Vector().copy(e).perp().normalize();
      this.edges.push(e);
      this.normals.push(n);
    }
  };
  Polygon.prototype['recalc'] = Polygon.prototype.recalc;
  
  /**
   * An axis-aligned box, with width and height.
   * 
   * @param {Vector=} pos A vector representing the top-left of the box.
   * @param {?number=} w The width of the box.
   * @param {?number=} h The height of the box.
   * @constructor
   */
  var Box = function(pos, w, h) {
    this['pos'] = this.pos = pos || new Vector();
    this['w'] = this.w = w || 0; 
    this['h'] = this.h = h || 0;
  };
  SAT['Box'] = Box;

  /**
   * Create a polygon that is the same as this box.
   * 
   * @return {Polygon} A new Polygon that represents this box.
   */
  Box.prototype.toPolygon = function() {
    var pos = this.pos;
    var w = this.w;
    var h = this.h;
    return new Polygon(new Vector(pos.x, pos.y), [
     new Vector(), new Vector(w, 0), 
     new Vector(w,h), new Vector(0,h)
    ]);
  };
  Box.prototype['toPolygon'] = Box.prototype.toPolygon;
  
  /**
   * Pool of Vectors used in calculations.
   * 
   * @type {Array.<Vector>}
   */
  var T_VECTORS = [];
  for (var i = 0; i < 10; i++) { T_VECTORS.push(new Vector()); }
  /**
   * Pool of Arrays used in calculations.
   * 
   * @type {Array.<Array.<*>>}
   */
  var T_ARRAYS = [];
  for (var i = 0; i < 5; i++) { T_ARRAYS.push([]); }

  /**
   * An object representing the result of an intersection. Contain information about:
   * - The two objects participating in the intersection
   * - The vector representing the minimum change necessary to extract the first object
   *   from the second one.
   * - Whether the first object is entirely inside the second, or vice versa.
   * 
   * @constructor
   */  
  var Response = function() {
    this['a'] = this.a = null;
    this['b'] = this.b = null;
    this['overlapN'] = this.overlapN = new Vector(); // Unit vector in the direction of overlap
    this['overlapV'] = this.overlapV = new Vector(); // Subtract this from a's position to extract it from b
    this.clear();
  };
  SAT['Response'] = Response;

  /**
   * Set some values of the response back to their defaults.  Call this between tests if 
   * you are going to reuse a single Response object for multiple intersection tests (recommented)
   * 
   * @return {Response} This for chaining
   */
  Response.prototype.clear = function() {
    this['aInB'] = this.aInB = true; // Is a fully inside b?
    this['bInA'] = this.bInA = true; // Is b fully inside a?
    this['overlap'] = this.overlap = Number.MAX_VALUE; // Amount of overlap (magnitude of overlapV). Can be 0 (if a and b are touching)
    return this;
  };
  Response.prototype['clear'] = Response.prototype.clear;
  
  /**
   * Flattens the specified array of points onto a unit vector axis,
   * resulting in a one dimensional range of the minimum and 
   * maximum value on that axis.
   *
   * @param {Array.<Vector>} points The points to flatten.
   * @param {Vector} normal The unit vector axis to flatten on.
   * @param {Array.<number>} result An array.  After calling this function,
   *   result[0] will be the minimum value,
   *   result[1] will be the maximum value.
   */
  var flattenPointsOn = function(points, normal, result) {
    var min = Number.MAX_VALUE;
    var max = -Number.MAX_VALUE;
    var len = points.length;
    for (var i = 0; i < len; i++ ) {
      // Get the magnitude of the projection of the point onto the normal
      var dot = points[i].dot(normal);
      if (dot < min) { min = dot; }
      if (dot > max) { max = dot; }
    }
    result[0] = min; result[1] = max;
  };
  
  /**
   * Check whether two convex clockwise polygons are separated by the specified
   * axis (must be a unit vector).
   * 
   * @param {Vector} aPos The position of the first polygon.
   * @param {Vector} bPos The position of the second polygon.
   * @param {Array.<Vector>} aPoints The points in the first polygon.
   * @param {Array.<Vector>} bPoints The points in the second polygon.
   * @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
   *   will be projected onto this axis.
   * @param {Response=} response A Response object (optional) which will be populated
   *   if the axis is not a separating axis.
   * @return {boolean} true if it is a separating axis, false otherwise.  If false,
   *   and a response is passed in, information about how much overlap and
   *   the direction of the overlap will be populated.
   */
  var isSeparatingAxis = function(aPos, bPos, aPoints, bPoints, axis, response) {
    var rangeA = T_ARRAYS.pop();
    var rangeB = T_ARRAYS.pop();
    // Get the magnitude of the offset between the two polygons
    var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);
    var projectedOffset = offsetV.dot(axis);
    // Project the polygons onto the axis.
    flattenPointsOn(aPoints, axis, rangeA);
    flattenPointsOn(bPoints, axis, rangeB);
    // Move B's range to its position relative to A.
    rangeB[0] += projectedOffset;
    rangeB[1] += projectedOffset;
    // Check if there is a gap. If there is, this is a separating axis and we can stop
    if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
      T_VECTORS.push(offsetV); 
      T_ARRAYS.push(rangeA); 
      T_ARRAYS.push(rangeB);
      return true;
    }
    // If we're calculating a response, calculate the overlap.
    if (response) {
      var overlap = 0;
      // A starts further left than B
      if (rangeA[0] < rangeB[0]) {
        response.aInB = false;
        // A ends before B does. We have to pull A out of B
        if (rangeA[1] < rangeB[1]) { 
          overlap = rangeA[1] - rangeB[0];
          response.bInA = false;
        // B is fully inside A.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
      // B starts further left than A
      } else {
        response.bInA = false;
        // B ends before A ends. We have to push A out of B
        if (rangeA[1] > rangeB[1]) { 
          overlap = rangeA[0] - rangeB[1];
          response.aInB = false;
        // A is fully inside B.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
      }
      // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
      var absOverlap = Math.abs(overlap);
      if (absOverlap < response.overlap) {
        response.overlap = absOverlap;
        response.overlapN.copy(axis);
        if (overlap < 0) {
          response.overlapN.reverse();
        }
      }      
    }
    T_VECTORS.push(offsetV); 
    T_ARRAYS.push(rangeA); 
    T_ARRAYS.push(rangeB);
    return false;
  };
  
  /**
   * Calculates which Vornoi region a point is on a line segment.
   * It is assumed that both the line and the point are relative to (0, 0)
   * 
   *             |       (0)      | 
   *      (-1)  [0]--------------[1]  (1)
   *             |       (0)      | 
   * 
   * @param {Vector} line The line segment.
   * @param {Vector} point The point.
   * @return  {number} LEFT_VORNOI_REGION (-1) if it is the left region, 
   *          MIDDLE_VORNOI_REGION (0) if it is the middle region, 
   *          RIGHT_VORNOI_REGION (1) if it is the right region.
   */
  var vornoiRegion = function(line, point) {
    var len2 = line.len2();
    var dp = point.dot(line);
    if (dp < 0) { return LEFT_VORNOI_REGION; }
    else if (dp > len2) { return RIGHT_VORNOI_REGION; }
    else { return MIDDLE_VORNOI_REGION; }
  };
  /**
   * @const
   */
  var LEFT_VORNOI_REGION = -1;
  /**
   * @const
   */
  var MIDDLE_VORNOI_REGION = 0;
  /**
   * @const
   */
  var RIGHT_VORNOI_REGION = 1;
  
  /**
   * Check if two circles intersect.
   * 
   * @param {Circle} a The first circle.
   * @param {Circle} b The second circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   the circles intersect.
   * @return {boolean} true if the circles intersect, false if they don't. 
   */
  var testCircleCircle = function(a, b, response) {
    var differenceV = T_VECTORS.pop().copy(b.pos).sub(a.pos);
    var totalRadius = a.r + b.r;
    var totalRadiusSq = totalRadius * totalRadius;
    var distanceSq = differenceV.len2();
    if (distanceSq > totalRadiusSq) {
      // They do not intersect 
      T_VECTORS.push(differenceV);
      return false;
    }
    // They intersect.  If we're calculating a response, calculate the overlap.
    if (response) { 
      var dist = Math.sqrt(distanceSq);
      response.a = a;
      response.b = b;
      response.overlap = totalRadius - dist;
      response.overlapN.copy(differenceV.normalize());
      response.overlapV.copy(differenceV).scale(response.overlap);
      response.aInB = a.r <= b.r && dist <= b.r - a.r;
      response.bInA = b.r <= a.r && dist <= a.r - b.r;
    }
    T_VECTORS.push(differenceV);
    return true;
  };
  SAT['testCircleCircle'] = testCircleCircle;
  
  /**
   * Check if a polygon and a circle intersect.
   * 
   * @param {Polygon} polygon The polygon.
   * @param {Circle} circle The circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  var testPolygonCircle = function(polygon, circle, response) {
    var circlePos = T_VECTORS.pop().copy(circle.pos).sub(polygon.pos);
    var radius = circle.r;
    var radius2 = radius * radius;
    var points = polygon.points;
    var len = points.length;
    var edge = T_VECTORS.pop();
    var point = T_VECTORS.pop();
    
    // For each edge in the polygon
    for (var i = 0; i < len; i++) {
      var next = i === len - 1 ? 0 : i + 1;
      var prev = i === 0 ? len - 1 : i - 1;
      var overlap = 0;
      var overlapN = null;
      
      // Get the edge
      edge.copy(polygon.edges[i]);
      // Calculate the center of the cirble relative to the starting point of the edge
      point.copy(circlePos).sub(points[i]);
      
      // If the distance between the center of the circle and the point
      // is bigger than the radius, the polygon is definitely not fully in
      // the circle.
      if (response && point.len2() > radius2) {
        response.aInB = false;
      }
      
      // Calculate which Vornoi region the center of the circle is in.
      var region = vornoiRegion(edge, point);
      if (region === LEFT_VORNOI_REGION) { 
        // Need to make sure we're in the RIGHT_VORNOI_REGION of the previous edge.
        edge.copy(polygon.edges[prev]);
        // Calculate the center of the circle relative the starting point of the previous edge
        var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);
        region = vornoiRegion(edge, point2);
        if (region === RIGHT_VORNOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos); 
            T_VECTORS.push(edge);
            T_VECTORS.push(point); 
            T_VECTORS.push(point2);
            return false;
          } else if (response) {
            // It intersects, calculate the overlap
            response.bInA = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
        T_VECTORS.push(point2);
      } else if (region === RIGHT_VORNOI_REGION) {
        // Need to make sure we're in the left region on the next edge
        edge.copy(polygon.edges[next]);
        // Calculate the center of the circle relative to the starting point of the next edge
        point.copy(circlePos).sub(points[next]);
        region = vornoiRegion(edge, point);
        if (region === LEFT_VORNOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos); 
            T_VECTORS.push(edge); 
            T_VECTORS.push(point);
            return false;              
          } else if (response) {
            // It intersects, calculate the overlap
            response.bInA = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
      // MIDDLE_VORNOI_REGION
      } else {
        // Need to check if the circle is intersecting the edge,
        // Change the edge into its "edge normal".
        var normal = edge.perp().normalize();
        // Find the perpendicular distance between the center of the 
        // circle and the edge.
        var dist = point.dot(normal);
        var distAbs = Math.abs(dist);
        // If the circle is on the outside of the edge, there is no intersection
        if (dist > 0 && distAbs > radius) {
          T_VECTORS.push(circlePos); 
          T_VECTORS.push(normal); 
          T_VECTORS.push(point);
          return false;
        } else if (response) {
          // It intersects, calculate the overlap.
          overlapN = normal;
          overlap = radius - dist;
          // If the center of the circle is on the outside of the edge, or part of the
          // circle is on the outside, the circle is not fully inside the polygon.
          if (dist >= 0 || overlap < 2 * radius) {
            response.bInA = false;
          }
        }
      }
      
      // If this is the smallest overlap we've seen, keep it. 
      // (overlapN may be null if the circle was in the wrong Vornoi region)
      if (overlapN && response && Math.abs(overlap) < Math.abs(response.overlap)) {
        response.overlap = overlap;
        response.overlapN.copy(overlapN);
      }
    }
    
    // Calculate the final overlap vector - based on the smallest overlap.
    if (response) {
      response.a = polygon;
      response.b = circle;
      response.overlapV.copy(response.overlapN).scale(response.overlap);
    }
    T_VECTORS.push(circlePos); 
    T_VECTORS.push(edge); 
    T_VECTORS.push(point);
    return true;
  };
  SAT['testPolygonCircle'] = testPolygonCircle;
  
  /**
   * Check if a circle and a polygon intersect.
   * 
   * NOTE: This runs slightly slower than polygonCircle as it just
   * runs polygonCircle and reverses everything at the end.
   * 
   * @param {Circle} circle The circle.
   * @param {Polygon} polygon The polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  var testCirclePolygon = function(circle, polygon, response) {
    var result = testPolygonCircle(polygon, circle, response);
    if (result && response) {
      // Swap A and B in the response.
      var a = response.a;
      var aInB = response.aInB;
      response.overlapN.reverse();
      response.overlapV.reverse();
      response.a = response.b; 
      response.b = a;
      response.aInB = response.bInA; 
      response.bInA = aInB;
    }
    return result;
  };
  SAT['testCirclePolygon'] = testCirclePolygon;
  
  /**
   * Checks whether two convex, clockwise polygons intersect.
   * 
   * @param {Polygon} a The first polygon.
   * @param {Polygon} b The second polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  var testPolygonPolygon = function(a, b, response) {
    var aPoints = a.points;
    var aLen = aPoints.length;
    var bPoints = b.points;
    var bLen = bPoints.length;
    // If any of the edge normals of A is a separating axis, no intersection.
    for (var i = 0; i < aLen; i++) {
      if (isSeparatingAxis(a.pos, b.pos, aPoints, bPoints, a.normals[i], response)) {
        return false;
      }
    }
    // If any of the edge normals of B is a separating axis, no intersection.
    for (var i = 0;i < bLen; i++) {
      if (isSeparatingAxis(a.pos, b.pos, aPoints, bPoints, b.normals[i], response)) {
        return false;
      }
    }
    // Since none of the edge normals of A or B are a separating axis, there is an intersection
    // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
    // final overlap vector.
    if (response) {
      response.a = a;
      response.b = b;
      response.overlapV.copy(response.overlapN).scale(response.overlap);
    }
    return true;
  };
  SAT['testPolygonPolygon'] = testPolygonPolygon;
}(SAT));
/*
    A place for generic math, set/get methods, and other small functions.
    Also used for global data structures, enums, and functions.
*/
var utils = (function () {
    var cboxMenu;


	return {
		degToRad: function(deg){
			return deg * 0.0174532925199432957;
		},

        /**** Debug Printers ****/
		printMouse: function () {
		    $("canvas").on("mousemove", function (e) {
		        console.log(e.offsetX, e.offsetY);
		    });
		},

		printDir: function (dir) {
		    switch (dir) {
		        case 0:
		            console.log("Dir.NONE");
		            break;
		        case 1:
		            console.log("Dir.TOP");
		            break;
		        case 2:
		            console.log("Dir.BOT");
		            break;
		        case 3:
		            console.log("Dir.LEFT");
		            break;
		        case 4:
		            console.log("Dir.RIGHT");
		            break;
		        case 5:
		            console.log("Dir.IN");
		            break;
		        default:
		            console.log("Dir.unknown");
		    }
		},

		toggleMenu: function () {

		    if ($("#colorbox").css("display") === "block") {
		        cboxMenu.colorbox.close();
		    }
		    else {
		        cboxMenu = $.colorbox({
		            html: $(".gameInstructions").html(),
		            width: 290,
		            height: 490
		        });
		    }
		}
	};
})();


// global enums
var Dir = Object.freeze({
    NONE: 0,
    TOP: 1,
    BOT: 2,
    LEFT: 3,
    RIGHT: 4,
    IN: 5
});

var Inv_e = Object.freeze({
    NOT_HIT: 0,
    HIT_WHITE: 1,
    HIT_RED: 2
});

var KeyCode = Object.freeze({
    ENTER: 13,
    J: 74,
    K: 75,
    O: 79,
    S: 83,
    W: 87
});

var Color = Object.freeze({
    LIGHT_BROWN: "#c44525",
    DARK_BROWN: "#672819",
    LIGHT_GREEN: "#166a38"
});


var bullet = {
    color: "rgba(0, 182, 255, .85)",
    w: 19.5,
    h: 9,
    speed: 3.3
};

// global functions
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||

		   function (callback) {
		       setTimeout(callback, 16.6666666667); // 60fps fallback
		   };
})();

var audio = (function () {

    return {
        bgMusic: new Audio("audio/firstChiptune/firstChiptune.mp3"),
        enterSound: new Audio("audio/synthetic_explosion_1.mp3"),
        itemPickedUp: new Audio("audio/life_pickup.mp3"),
        heartbeat: new Audio("audio/heartbeat.mp3"),
        jump: new Audio("audio/jump.mp3"),
        thud: new Audio("audio/thud.mp3"),
        step: new Audio("audio/step.mp3"),
        effort: new Audio("audio/woosh.mp3"),
        discovery: new Audio("audio/spell3.mp3"),
        enemyDeath: new Audio("audio/death.mp3"),
        heroDeath: new Audio("audio/DiscsOfTron_Cascade.mp3"),
        enchant: new Audio("audio/enchant.mp3"),
        isOn: false,


        play: function (sound, stopPrev) {
            stopPrev = (typeof (stopPrev) !== 'undefined') ? stopPrev : true;

            if (sound.ended)
                sound.play();
            else {
                if (stopPrev || sound.currentTime === 0) {
                    sound.pause();
                    sound.currentTime = 0;
                    sound.play();
                }
            }
        },

        handleMuteButton: function () {
            if ($('.audioState').hasClass('off')) {
                $('.audioState span').removeClass('icon-volume-mute').addClass('icon-volume-medium');
                $('.audioState').removeClass('off');
                $('.audioState').addClass('on');

                audio.mute(false);
            }
            else {
                $('.audioState span').removeClass('icon-volume-medium').addClass('icon-volume-mute');
                $('.audioState').removeClass('on');
                $('.audioState').addClass('off');

                audio.mute(true);
            }
        },

        mute: function (onOrOff) {
            audio.discovery.muted =
            audio.enterSound.muted =
            audio.bgMusic.muted =
            audio.itemPickedUp.muted =
            audio.heartbeat.muted =
            audio.effort.muted = 
            audio.thud.muted = 
            audio.jump.muted = 
            audio.step.muted = 
            audio.enemyDeath.muted =
            audio.heroDeath.muted =
            audio.enchant.muted =
                onOrOff;

            onOrOff ?
                audio.bgMusic.pause() :
                audio.bgMusic.play();

            audio.isOn = !onOrOff;
        }
    };
})();

/*
    A library of generic graphics functions.
*/
var Graphics = (function () {

    var alpha = 1;

    return {
        ticker: 1,              // 1.0 --> 0.0 --> 1.0 --> ...
        tickerStep: 0.01,
        fadeOut: false,


        blinkText: function (fontSize, x, y, str) {
            str = (typeof (str) !== "undefined") ? str : "PRESS ENTER";

            if (Graphics.ticker >= 1.35 || Graphics.ticker <= Graphics.tickerStep) {
                Graphics.fadeOut = !Graphics.fadeOut;
            }

            if (Graphics.ticker >= 1) {
                alpha = 1;
            }
            else if (Graphics.ticker <= Graphics.tickerStep) {
                alpha = 0;
            }
            else {
                alpha = Graphics.ticker;
            }

            ctx.font = fontSize + "px 'Press Start 2P'";
            var tmpW = ctx.measureText(str).width;
            ctx.fillStyle = "rgba(233, 233, 233," + alpha + ')';
            ctx.fillText(str, x - tmpW / 2, y);
        },

        drawPlatform: function(x,y,w,h){
            ctx.fillStyle = Color.LIGHT_BROWN;
            ctx.fillRect(x, y, w, 1);

            ctx.fillStyle = Color.DARK_BROWN;
            ctx.fillRect(x, y+1, w, h-1);
        },

        drawDoor: function (x, y, w, h) {
            // door
            ctx.fillStyle = Color.LIGHT_BROWN;
            ctx.fillRect(x+2, y+2, w-2, h-2);

            ctx.fillStyle = Color.DARK_BROWN;

            ctx.fillRect(x, y, 2, h);   // left frame
            ctx.fillRect(x, y, w, 2);   // top frame
            ctx.fillRect(x+w, y, 2, h);   // right frame

            // door handle
            ctx.beginPath();
            ctx.arc(x + w - w / 3.2, y + h - h/3.4, 3, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();

            // door
            ctx.fillStyle = "#e1e1e1";
            ctx.font = "12px 'Press Start 2P'";
            ctx.fillText("EXIT", x - 8, y - 5);

        },

        drawEllipse: function (x, y, w, h) {
            var kappa = 0.5522848,
				ox = (w / 2) * kappa, // control point offset horizontal
				oy = (h / 2) * kappa, // control point offset vertical
				xe = x + w, // x-end
				ye = y + h, // y-end
				xm = x + w / 2, // x-middle
				ym = y + h / 2 // y-middle
            ;

            ctx.beginPath();
            ctx.moveTo(x, ym);
            ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            ctx.closePath();
            ctx.fill();
        },

        drawRotate: function (img, x, y, angle) {
            ctx.save();

            ctx.translate(x, y);								// move co-ord sys to img origin
            ctx.rotate(utils.degToRad(angle));
            ctx.translate(-img.width * 0.5, -img.height * 0.5); // move to top left of img

            //ctx.scale(0.75, 0.75);
            ctx.drawImage(img, 0, 0);

            ctx.restore();
        }
    };
})();


/* Images */
//lvl = new Array(NUM_LEVELS),
//lvlBgImg = {}
//function loadBgImages(imgArr, callback) {
//    var count = 0;

//    for (var key in imgArr) {
//        if (imgArr[key] !== "none") {
//            lvlBgImg[key] = new Image();
//            lvlBgImg[key].onload = function () {
//                callback(this.num);
//            };

//            lvlBgImg[key].src = imgArr[key];
//            lvlBgImg[key].num = count;
//        }

//        ++count;
//    }
//}

//for (var i = 0; i < NUM_LEVELS; ++i) {
//    lvl[i] = {
//        status: false,
//        bgColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
//    };
//}

//loadBgImages({
//    lvl0: "img/lvl0.jpg",
//    lvl1: "none"
//}, function (num) {
//    lvl[num].status = true;
//});

/// <reference path="../linker.js" />

/*
    A library of generic physics functions.
*/
var Physics = (function () {


    return {
        // could be sped up by checking if a does NOT intersect with b (i.e. using OR)
        // uses simple Speculative Contacts
        isCollision: function (a, b, moe, isLvl) {
            var aX = (typeof (isLvl) !== "undefined") ? a.x + a.lvlX : a.x;

            if ((aX + moe <= (b.x + b.w)) && // a is to the left of the right side of b
				(b.x + moe <= (aX + a.w)) && // a is to the right of the left side of b
				(a.y + moe <= (b.y + b.h)) && // a is higher than the bot of b
				(b.y + moe <= (a.y + a.h)) 	  // a is lower than the top of b
			) {
                return true;
            }

            return false;
        },

        // uses SAT and AABB
        // checks collision between a and the level objects
        lvlObjCollision: function (a, callback) {
            if (typeof (a.pos) !== "undefined") {
                a.pos.x = a.x;
                a.pos.y = a.y;        // TODO: convert interface to x and y NOT pos.x/y
            }

            var response = new SAT.Response();
            for (var i = 0; i < level.objs.length; ++i) {

                if (typeof (level.objs[i].pos) !== "undefined"
                    && typeof level.objs[i].collidable === "undefined"
                    //&& level.objs[i] !== a         // checks if object is in list (by reference)
                ) {

                    // Check Level Object Collision
                    var collided = SAT.testPolygonPolygon(a, level.objs[i], response);

                    // Respond to Level Object Collision
                    if (collided) {
                        response.a.x = response.a.pos.x - response.overlapV.x;
                        response.a.y = response.a.pos.y - response.overlapV.y;
                        
                        if (typeof (level.objs[i].item_t) !== "undefined") {
                            response.item_t = level.objs[i].item_t;
                        }

                        callback(response);
                        break;
                    }

                    response.clear();
                }
            }


            // idea to fix "hooking" around edges of platform
            // http://stackoverflow.com/a/1355695/353166
        },

        // checks collision between hero and the movable level items
        lvlItemCollision: function (callback) {
            if (!hero.isCarrying && !(32 in keysDown)) {// spacebar
                for (var i = 0; i < level.items.length; ++i) {
                    Physics.isSATcollision(hero, level.items[i], function (r) {
                        callback(r, i);
                    });
                }
            }
        },

        isSATcollision: function (a, b, callback) {
            a.pos.x = a.x;
            a.pos.y = a.y;

            b.pos.x = b.x;
            b.pos.y = b.y;

            var response = new SAT.Response();
            var collided = SAT.testPolygonPolygon(a, b, response);

            if (collided)
                callback(response);
        }
    };
})();

/*
    GameObj is the base class from which all objects in the game inherit from.
*/
var GameObj = function (xx, yy, ww, hh, src) {
    var img = null,
		imgReady = false
    ;

    if (typeof (src) !== "undefined") {
        img = new Image();
        img.onload = function () { imgReady = true; };
        img.src = src;
    }

    return {
        initX: xx,
        x: xx,
        initY: yy,
        y: yy,
        w: ww,
        h: hh,
        vY: 0,
        onGround: false,
        isOnObj: false,
        onObj: null,        // contains the object holding up the object (directly below)
        grabbable: true,

        updatePos: function () {
            if (!this.isOnObj) {
                if (this.y < FULLH - game.padFloor - this.h) {
                    this.y += this.vY;
                    this.onGround = false;
                }
                else {
                    this.y = FULLH - game.padFloor - this.h;
                    this.onGround = true;
                }
            }
        },

        draw: function () {
            if (imgReady) {
                ctx.drawImage(img, this.x, this.y);
            }
            else {
                ctx.fillStyle = "red";
                ctx.fillRect(this.x, this.y, this.w, this.h);
            }
        }
    };
};

var GameItem = function () {

    var parentDraw = null;

    function _draw() {
        return function () {
            if (this.visible && !this.collected) {
                parentDraw.apply(this);
            }

        };
    }


    return {
        collected: false,
        holding: false,
        visible: true,
        val: -1,

        /*
            Initializes a Game Item.
         
            @param {GameObj=} gObj A game object (super class).
            @param {?number=} val The value of the game item, -1 by default.
            @param {?bool=} visible A visibility flag, true by default.
            @param {?bool=} sat A flag to add the SAT functionality to the game item, not enabled by default.
            @constructor
        */
        init: function (gObj, val, visible, sat) {
            $.extend(this, gObj);

            if (typeof(val) !== "undefined") {
                this.val = val;
            }

            if (typeof (visible) !== "undefined") {
                this.visible = visible;
            }

            if (typeof (sat) !== "undefined" && sat === true) {
                $.extend(this, new SAT.Box(new SAT.Vector(this.x, this.y), this.w, this.h).toPolygon());
            }

            parentDraw = this.draw;
            this.draw = _draw();
        }

    };
};

var Enemy = function () {
    var parentDraw = null,
		initHealth = 0,
		alive = true,
		deadOnScreen = false,
		clearDir = true;		// true = right; false = left;

    function drawHealth(that) {
        var healthLen = (that.w / initHealth) * that.health;

        ctx.fillStyle = "red";
        ctx.fillRect(that.x, that.y - 12, healthLen, 4);
    }

    function _draw() {
        return function () {

            if (alive || deadOnScreen) {
                if (initHealth > 1)
                    drawHealth(this);


                ctx.save();
                if (deadOnScreen)
                    ctx.globalAlpha = 0.3;

                parentDraw.apply(this);
                ctx.restore();
            }
        }
    }

    return {
        active: false,
        health: 0,
        deadOffScreen: false,


        /*
            Initializes an Enemy.
         
            @param {GameObj=} gObj A game object (super class).
            @param {?number=} health The hp of the enemy, 0 by default.
            @constructor
        */
        init: function (gObj, health) {
            $.extend(this, gObj);

            if (typeof (health) !== "undefined") {
                this.health = initHealth = health;
            }

            parentDraw = this.draw;
            this.draw = _draw();
        },

        update: function () {
            if (deadOnScreen) {
                this.x += clearDir ? 2 : -2;
                this.y -= 9;

                if (this.x < 0 || this.x > FULLW) {
                    deadOnScreen = false;
                    this.deadOffScreen = true;
                }
            }
            else if (!alive)
                return;
            else if (this.active && game.totalTicks % 3 === 0) {
                if (this.x < hero.x)
                    ++this.x;
                else if (this.x > hero.x)
                    --this.x;
            }

        },

        death: function () {
            clearDir = (hero.dir == Dir.RIGHT);

            audio.enemyDeath.play();
            hero.xp += 2;
            alive = false;
            deadOnScreen = true;
        }

    };
};

var startScreen = (function () {

    var copyTitle1 = "JON'S",
		copyTitle2 = "QUEST",
		copyLine = String.fromCharCode("169") + " 2013 JON WIEDMANN",
        updateSetInterval = null,
        renderAnimFrame = null
    ;

    function update() {
        if (lastKeyDown == KeyCode.ENTER) {
            ++game.lvl;

            audio.enterSound.play();
            audio.bgMusic.pause();

            setTimeout(function(){
                audio.bgMusic = new Audio("audio/inspiredBySparkMan/sparkBoy.mp3");
                audio.bgMusic.loop = true;
                audio.bgMusic.volume = 0.45;

                audio.isOn ?
                    audio.bgMusic.play() :
                    audio.bgMusic.pause();
            }, 1000);

            clearInterval(updateSetInterval);
            cancelAnimationFrame(renderAnimFrame);
            game.start();
        }
    }

    function render() {
        renderAnimFrame = requestAnimFrame(render);
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, FULLW, FULLH + game.padHUD);

        //---- title

        // title 1
        ctx.font = "29px 'Press Start 2P'";
        var startX = HALFW - ctx.measureText(copyTitle1).width / 2 + 11,
			startY = 58;

        ctx.setTransform(1, 0, -0.4, 1.4, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('J', startX + 4, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('J', startX, startY);
        ctx.setTransform(1, 0, -0.2, 1.4, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('O', startX + 32, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('O', startX + 28, startY);
        ctx.setTransform(1, 0, 0.05, 1.41, 0, -1);
        ctx.fillStyle = "#222";
        ctx.fillText('N', startX + 58, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('N', startX + 54, startY);
        ctx.setTransform(1, 0, 0.23, 1.4, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText("'", startX + 78, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText("'", startX + 74, startY);
        ctx.setTransform(1, 0, 0.42, 1.4, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('S', startX + 95, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('S', startX + 91, startY);


        // title 2
        ctx.font = "36px 'Press Start 2P'";
        startX = HALFW - ctx.measureText(copyTitle2).width / 2 + 30;
        startY = 98;

        ctx.setTransform(1, 0, -0.5, 1.6, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('Q', startX + 4, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('Q', startX, startY);
        ctx.setTransform(1, 0, -0.25, 1.6, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('U', startX + 26, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('U', startX + 22, startY);
        ctx.setTransform(1, 0, 0.03, 1.6, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('E', startX + 50, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('E', startX + 46, startY);
        ctx.setTransform(1, 0, 0.25, 1.6, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('S', startX + 74, startY + 3);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('S', startX + 70, startY);
        ctx.setTransform(1, 0, 0.5, 1.6, 0, 0);
        ctx.fillStyle = "#222";
        ctx.fillText('T', startX + 90, startY + 4);
        ctx.fillStyle = "#ff6a00";
        ctx.fillText('T', startX + 86, startY);
        ctx.setTransform(1, 0, 0, 1, 0, 0);	// reset

        //---- press enter
        Graphics.blinkText(22, HALFW, HALFH + 81);

        //---- copyright
        ctx.font = "13px 'Press Start 2P'";
        ctx.fillStyle = "#ddd";

        ctx.fillText(copyLine, HALFW - ctx.measureText(copyLine).width / 2, FULLH + 44);
    }

    return {
        start: function () {
            updateSetInterval = setInterval(function () {
                Graphics.ticker += Graphics.fadeOut ? -Graphics.tickerStep : Graphics.tickerStep;
                update();
            }, game.updateFPS);

            render();
        }
    };
})();

/// <reference path="../linker.js" />

var level = (function () {

    var shuriken = null,
		cash = null,
		syringe = null,
		medKit = null

		//NUM_LEVELS = 5,
		//recentLvlUpdate = 0
    ;

    /********** Update **********/
    function updateObjs() {
        for (var i = 0; i < level.objs.length; ++i) {
            if (typeof (level.objs[i].pos) !== "undefined") {       // TODO: update SAT api
                level.objs[i].pos.x -= hero.vX;
            }
            else {
                level.objs[i].x -= hero.vX;
            }
        }
    }

    function updateItems() {
        for (var i = 0; i < level.items.length; ++i) {
            //if (typeof (level.items[i].pos) !== "undefined") {
            //    level.items[i].pos.x -= hero.vX;
            //}
            //else {
                level.items[i].x -= hero.vX;
            //}
        }
    }


    /********** Render **********/
    function drawHUD() {	// TODO: break out static parts
        // background
        ctx.fillStyle = "#070707";
        ctx.fillRect(0, FULLH, FULLW, game.padHUD);

        ctx.fillStyle = "#ddd";
        ctx.font = "12px 'Press Start 2P'";


        ctx.fillText("HP-" + hero.healthLvl, 15, FULLH + 24);
        ctx.fillText("MP-" + hero.manaLvl, 15, FULLH + 48);
        ctx.fillText("XP", 15, FULLH + 71);

        // hp kit
        ctx.fillText(hero.medKits, 210, FULLH + 50);
        medKit.draw();

        // mp kit
        ctx.fillText(hero.manaKits, 315, FULLH + 50);
        syringe.draw();

        // ammo
        ctx.fillText(hero.ammo, 410, FULLH + 50);
        shuriken.draw();

        // money
        ctx.fillText(hero.cash, 515, FULLH + 50);
        cash.draw();

        // time
        var min = Math.floor(game.actualTime / 60),
			sec = game.actualTime % 60;

        if (sec < 10)
            sec = '0' + sec;

        if (min < 10)
            min = '0' + min;

        ctx.fillText(min + ':' + sec, FULLW - 84, FULLH + 34);
    }

    // all of the collision rectangles in the level
    function drawLvlObjs() {
        for (var i = 0; i < level.objs.length; ++i) {
            if (typeof (level.objs[i].pos) !== "undefined") {       // TODO: fix SAT api

                // check if visible
                if (typeof (level.objs[i].visible) !== "undefined" &&   // TODO: all objs should have visible property (fix SAT api)
                    !level.objs[i].visible
                ) {
                    continue;
                }

                Graphics.drawPlatform(
                    level.objs[i].pos.x,
                    level.objs[i].pos.y,
                    level.objs[i].edges[0].x,
                    level.objs[i].edges[1].y
                );
            }
        }
    }


    return {
        objs: [],       // dynamically holds all of the objects for the level;
        items: [],      // dynamically holds all of the items for the level (movable items)
        curLvl: null,   // alias for the current level object e.g. lvl0
        

        init: function () {
            // HUD icons
            medKit = GameObj(238, FULLH + 31, 25, 24, "img/medKit.png");
            syringe = GameObj(342, FULLH + 31, 25, 25, "img/syringe.png");
            shuriken = GameObj(447, FULLH + 32, 24, 24, "img/shuriken.png");
            cash = GameObj(548, FULLH + 33, 22, 24, "img/cash.png");

            // start level 0
            level.curLvl = lvl0;
            level.curLvl.init();
            level.reset();
        },

        reset: function () {
            hero.x = 23;
            hero.y = canvas.height - hero.h;
            hero.isJumping = false;

            hero.bulletArr.length = 0;		// TODO: cache num bullets
        },

        /******************** Update ********************/
        update: function () {
            level.curLvl.update();

            // var tempLvl = game.lvl+1;
            // if(tempLvl >= NUM_LEVELS)
            //      tempLvl = NUM_LEVELS-1;

            // if(	){        // should reset level
            //      ++game.lvl
            // 			    
            //      utils.reset()
            // }
        },

        // fix positions relative to the "camera" view
        updateView: function(){
            updateObjs();
            updateItems();
        },


        /******************** Render ********************/
        render: function () {
            // floor
            Graphics.drawPlatform(0, FULLH - game.padFloor-1, FULLW, game.padFloor+1);  // start floor 1px higher to have hero "sink" into floor

            // HUD
            drawHUD();

            // current level
            level.curLvl.render();
            drawLvlObjs();
        }
    };
})();

/// <reference path="../linker.js" />

var lvl0 = (function () {

    var crates = [],
        cyborg,
		hiddenCash,
		sack,
		door,
        scales = [],
        ladder,
        doLadder = false
    ;

    function handleCrates() {   // TODO: abstract to any item (not just crates)
        // crates and crates
        var response = new SAT.Response();
        for (var i = 0; i < crates.length; ++i) {
            for (var j = 0; j < crates.length; ++j) {
                if (i !== j && !crates[i].holding && !crates[j].holding) {
                    var collided = SAT.testPolygonPolygon(crates[i], crates[j], response);

                    if (collided) {
                        if (response.overlapN.y === 1) {   // a is on top of b
                            response.a.x = response.a.pos.x - response.overlapV.x;
                            response.a.y = response.a.pos.y - response.overlapV.y;

                            response.a.isOnObj = true;
                            response.a.onObj = response.b;
                            response.b.grabbable = false;

                            level.items.push(response.a);
                        }
                        else {
                            //response.aisOnObj = false;
                        }
                    }

                    response.clear();
                }
            }
        }

        // crates and level; hero and crates
        for (var i = 0; i < crates.length; ++i) {

            if (!crates[i].holding) {
                Physics.lvlObjCollision(crates[i], function (r) {
                    if (r.overlapN.y === 1) {    // crate on top of platform
                        r.a.vY = 0;      // (wrong location??)
                        level.items.push(r.a);
                        r.a.onPlatform = true;
                    }
                });

                var idx = level.items.indexOf(crates[i]);
                if (idx < 0 && crates[i].onGround) {
                    level.items.push(crates[i]);
                }
            }
            else {
                if (hero.dir === Dir.RIGHT)
                    crates[i].x = hero.x + 22;
                else
                    crates[i].x = hero.x - 22;

                crates[i].y = hero.y;
            }

            crates[i].updatePos();
        }




        // all crates on scale (do ladder)
        


        if (doLadder) {
            var collided = SAT.testPolygonPolygon(hero, ladder);

            if (collided) {
                hero.onLadder = true;
            }
            else {
                hero.onLadder = false;
            }
        }
        else {
            doLadder = true;
            for (var i = 0; i < crates.length; ++i) {
                if (!crates[i].onPlatform) {         // TODO: this only checks if all are on an obj (should check for correct platforms too)
                    doLadder = false;
                }
            }
            
            if (doLadder) {
                var result = $.grep(level.objs, function(e){
                    return e.collidable === false;
                });
                result[0].visible = true;
            }

        }
    }


    return {
        width: 2600,


        init: function () {
            // 3 initial platforms
            level.objs.push(
                new SAT.Box(new SAT.Vector(200, 196), 267, 40).toPolygon(),
                new SAT.Box(new SAT.Vector(562, 290), 300, 40).toPolygon(),
                new SAT.Box(new SAT.Vector(600, 95), 200, 40).toPolygon()
            );

            // stairs
            var stairs = {
                x: 1160,
                y: 210,
                w: 0,
                h: 0
            };

            var rise = 5,   // delta h between steps
                run = 17    // delta w between steps
            ;

            for (var i = 0; i < 15; ++i) {
                level.objs.push(new SAT.Box(new SAT.Vector(stairs.x + run * i, stairs.y - rise * i), run+1, 50).toPolygon());
                stairs.w += run;
                stairs.h += rise;
            }
            
            // platform + door
            level.objs.push(new SAT.Box(new SAT.Vector(stairs.x + stairs.w, stairs.y - stairs.h), 200, 50).toPolygon());
            door = GameItem();
            door.init(
                GameObj(stairs.x + stairs.w + 155, stairs.y - stairs.h - 53, 25, 60, null)
            );

            // sack
            sack = GameItem();
            sack.init(
                GameObj(680, 71, 20, 24, "img/sack.png"),
                5
            );

            // cyborg
            cyborg = Enemy();
            cyborg.init(
                GameObj(1700, FULLH - game.padFloor - 38 + 1, 28, 38, "img/cyborgBnW.png"), 
                1
            );
            

            // hidden cash
            hiddenCash = GameItem();
            hiddenCash.init(
                GameObj(140, 50, 22, 24, "img/cash.png"), 
                10, 
                false
            );

            // add objects to the level
            level.objs.push(
                sack,
                cyborg,
                hiddenCash,
                door
            );

            ladder = GameItem();
            ladder.init(
                GameObj(stairs.x - 79, stairs.y, 80, FULLH - stairs.y , null),
                0,
                false,
                true
            );
            ladder.collidable = false;      // TODO: make better api; allows ladder to not be in normal collision detection
            level.objs.push(ladder);

            // scales; TODO: shouldn't be GameItem??
            for (var i = 0; i < 3; ++i) {
                scales[i] = new GameItem();
                scales[i].init(
                    GameObj(door.x + 330 + i*200, FULLH - game.padFloor - 110, 150, 40, null),
                    0,
                    true,
                    true
                );
                
                level.objs.push(scales[i]);
            }                        // crates            for (var i = 0; i < 3; ++i) {
                crates[i] = GameItem();
                crates[i].init(
                    GameObj(700, FULLH - game.padFloor - 26, 24, 26, "img/crate.png"),
                    0,
                    true,
                    true
                );
                crates[i].item_t = "crate";     // TODO: make better api
            }
            crates[1].x = scales[1].x + scales[1].w / 2 - crates[0].w/2;
            crates[2].x = scales[2].x + scales[2].w / 2 - crates[0].w / 2;

            for (var i = 0; i < crates.length; ++i) {
                level.items.push(crates[i]);
            }
        },

        update: function () {
            hiddenCash.updatePos();
            cyborg.update();


            // crates
            handleCrates();

            // sack
            if (!sack.collected) {
                if (Physics.isCollision(hero, sack, 0)) {
                    sack.collected = true;
                    audio.itemPickedUp.play();

                    hero.ammo += sack.val;
                }
            }

            // hidden cash
            if (!hiddenCash.visible) {
                for (var i = 0; i < hero.bulletArr.length; ++i) {
                    if (Physics.isCollision(hero.bulletArr[i], hiddenCash, -17)) {
                        hiddenCash.visible = true;
                        audio.discovery.play();
                    }
                }
            }
            else if (!hiddenCash.collected) {

                if (hiddenCash.visible) {
                    hiddenCash.vY += game.gravity;
                }

                if (Physics.isCollision(hero, hiddenCash, 0)) {
                    hiddenCash.collected = true;
                    audio.itemPickedUp.play();
                    hero.cash += hiddenCash.val;
                }
            }

            // cyborg
            if (cyborg.health > 0) {
                // hero and cyborg
                if (Physics.isCollision(hero, cyborg, 0)) {
                    cyborg.active = true;
                    
                    if (!hero.invincible) {
                        audio.play(audio.heartbeat, true);

                        hero.invincible = true;
                        --hero.health;
                    }
                    
                }

                // bullets and cyborg
                for (var i = 0; i < hero.bulletArr.length; ++i) {
                    var wasCollision = false;

                    if (Physics.isCollision(hero.bulletArr[i], cyborg, 0)) {
                        wasCollision = true;
                        audio.play(audio.thud, true);
                    }

                    if (wasCollision) {
                        cyborg.active = true;

                        hero.bulletArr.splice(i, 1); // remove ith item
                        --cyborg.health;

                        if (cyborg.health <= 0) {
                            cyborg.death();
                        }
                    }
                }
            }

            // door
            if (!game.over && Physics.isCollision(hero, door, 0)) {
                alert("Level 1 completed");
                location.reload();
                game.over = true;
            }
        },

        render: function () {
            //---- level background
            ctx.fillStyle = Color.LIGHT_GREEN;
            ctx.fillRect(0, 0, FULLW, FULLH - game.padFloor - 1);


            //---- level objects/items
            if (!sack.collected)
                sack.draw();

            if(hiddenCash.visible)
                hiddenCash.draw();

            if(!cyborg.deadOffScreen)
                cyborg.draw();

            Graphics.drawDoor(door.x, door.y, door.w, door.h);

            // crates
            for (var i = 0; i < crates.length; ++i) {
                if (!crates[i].holding) {
                    crates[i].draw();
                }
                else {
                    if (hero.vX === 0) {
                        crates[i].x = hero.x + 2;
                        crates[i].y = hero.y + 11;
                    }
                }
            }
        }
    };

})();

var game = (function () {
	var	avgFPS = 0,
		//updateTimePrev = 0,
        renderTimePrev = 0,
        lag = 0,
		fpsHistory = [0],
        renderLoop,         // used to turn off game
        updateLoop          // used to turn off game
	;
	
	function update() {
		hero.update();
		level.update();
	}
	
	function render(renderTimeCur) {
        // timers
	    if ((renderTimeCur - renderTimePrev) > 0) {
	        game.renderTimeBtw = renderTimeCur - renderTimePrev;
	    }
	    renderTimePrev = renderTimeCur;


	    renderLoop = requestAnimFrame(render);
        
	    // drawing
		level.render();
		hero.render();
		
		drawFPS();
	}
	
	function drawFPS(fps) {
	    var actualFPS = (1000 / game.renderTimeBtw);

	    if (actualFPS != "Infinity") {
	        fpsHistory.push(actualFPS);
	    }
	    
    	if (game.totalTicks % 120 === 0) {
    	    var tot = 0;
            
    	    for (var i in fpsHistory) {
        		tot += fpsHistory[i];
        	}
    	    
    	    if (fpsHistory.length > 0) {
    	        avgFPS = Math.floor(tot / fpsHistory.length);
    	    }
    	    else {
    	        avgFPS = 0;
    	    }
        	fpsHistory = [];
        }
    	
    	ctx.fillStyle = "#ddd";
    	ctx.font = "12px 'Press Start 2P'";
	  	ctx.fillText(avgFPS + " FPS", FULLW - 84, FULLH + 65);
	}
   	
	return {
        over: false,        // indicates the game is finished
	    gravity: 0.07,
	    //friction: 35,
	    padBot: 119,	    // total padding
	    padHUD: 80,
	    padFloor: 39,
	    lvl: -1,            // TODO: make startscreen level 0
	    updateFPS: 1000 / 120,  // 1000 / 120 ==> 2x target rate of 60fps
	    //updateTimeBtw: 0,
	    renderTimeBtw: 0,
	    totalTicks: 0,      // ticks are update iterations
	    actualTime: 0,

	    start: function () {

            // update at fixed time interval
	        updateLoop = setInterval(function () {
	            ++game.totalTicks;
	            Graphics.ticker += Graphics.fadeOut ? -Graphics.tickerStep : Graphics.tickerStep;

	            //var updateTimeCur = new Date().getTime();

	            //if ((updateTimeCur - updateTimePrev) > 0) {
	                //game.updateTimeBtw = updateTimeCur - updateTimePrev;
	            //}

	            //updateTimePrev = updateTimeCur;
	            //lag += game.updateTimeBtw;
	            
	            //while (lag >= game.updateTimeBtw) {      // TODO: interpolate if needed
	                update();
	                //lag -= game.updateTimeBtw;
	            //}
	        }, game.updateFPS); 


            // render w/vsync (let browser decide)
	        render();
	    },

	    stop: function () {
	        window.cancelAnimationFrame(renderLoop);
	        clearInterval(updateLoop);
	    }
	};
})();

/// <reference path="heroInput.js" />
/// <reference path="heroGraphics.js" />
/// <reference path="heroInput.js" />
/// <reference path="../physics/physics.js" />

/*
    The hero object.
*/
var hero = (function () {
    var input = null,           // the hero input component
        graphics = null,        // the hero graphics component
        imgReady = false,
		img = null,
		showRun = true,
		spriteArr = []
	;
	
		
	/*********************** Update ***********************/
    function checkHealth() {
        if (hero.invincible)
            --hero.invincibleTimer;

        if (hero.invincibleTimer <= 0) {
            hero.invincible = false;
            hero.invincibleTimer = hero.invincibleTimer0;
        }
        
        if (hero.health <= 0 && !game.over) {
            audio.heroDeath.play();
            audio.bgMusic.muted = true;

            alert("You died");
            location.reload();
            game.over = true;
        }
    }

	function getSpritePos(){
	    if (game.totalTicks % 30 === 0) {
	        showRun = !showRun;
	    }

		var pos = {x: 0, y: 0};
		
		if(hero.isCarrying && hero.vX === 0){
			pos = spriteArr["playerDown"];
		}
		else if(hero.dir == Dir.RIGHT){
			if(hero.vX > 0){
   				if(Math.abs(hero.vX) <= hero.aX*3.5)
   					pos = spriteArr["playerRight_Step"];
				else if(showRun){
					pos = spriteArr["playerRight_Run1"];
				}
				else 
					pos = spriteArr["playerRight_Run2"];
			}
			else
				pos = spriteArr["playerRight"];
		}
		else if(hero.dir == Dir.LEFT){ 
			if(hero.vX < 0){
				if(Math.abs(hero.vX) <= hero.aX*3.5)
   					pos = spriteArr["playerLeft_Step"];
				else if(showRun){
					pos = spriteArr["playerLeft_Run1"];
				}
				else 
					pos = spriteArr["playerLeft_Run2"];
			}
			else
				pos = spriteArr["playerLeft"];
		}
		
		var inv = hero.invincibleTimer % 40;
		
		if(hero.invincible && (inv >= 0 && inv <= 16)){
			pos = {x: -1, y: -1};
		}
		
		hero.sx = pos.x;
		hero.sy = pos.y;
	}
	
	/*********************** Render ***********************/
	function drawHero(){
		if(imgReady && hero.sx >= 0 && hero.sy >= 0){
    		ctx.drawImage(img, hero.sx, hero.sy, hero.w, hero.h, hero.x, hero.y, hero.w, hero.h);
    	}
	}
		
    // used to draw things over the hero
	function drawAfterHero() {
	    if (hero.isCarrying){
	        hero.curItem.draw();
	    }
	}
		
	return {
		x: 0,				// top left of sprite
		y: 0,
		sx: 0,				// sprite position
		sy: 0,
		lvlX: 0,			
		w: 28,
		h: 38,
		vX: 0,
		vY: 0,
		maxVx: 3.6,         // TODO: should be const
		maxVy: 10,         // TODO: should be const
		aX: 0.17,
		aY: 0.5,
		jumpMod: 4,
		jumpMod0: 4,            // TODO: should be const
		dir: Dir.RIGHT,
		isJumping: false,
		isCarrying: false,
        onLadder: false,
        curItem: null,          // the item in hand
		onGround: true,
		isOnObj: true,
		invincible: false,
		invincibleTimer: 120,
		invincibleTimer0: 120,  // TODO: should be const
		health: 4,
		maxHealth: 5,
		medKits: 1,
		healthLvl: 1,
		mana: 0,
		maxMana: 4,
		manaKits: 1,
		manaLvl: 1,
		ammo: 20,
		cash: 0,
		lvl: 1,
		xp: 0,
		xpNeeded: 50,
		bulletArr: [],
		physics: null,         // the hero physics component
		

		init: function(){
			img = new Image();
			img.onload = function () { imgReady = true; };
			img.src = "../dungeon/web/img/sprites/player/player.png";
			
			// grab texturePacker's sprite coords; TODO: include on the page somehow??
			$.get('../dungeon/web/img/sprites/player/player.xml', function(xml){
				var wrap = $(xml).find('sprite');
				
				$(wrap).each(function(){
					var name = $(this).attr('n'),
						x = $(this).attr('x'),
						y = $(this).attr('y');
					
					name = name.substring(0, name.length-4);
					spriteArr[name] = {x: x, y: y};
				});
				
			});
			
			input = HeroInputComponent();
			input.init();

			hero.physics = HeroPhysicsComponent();

			graphics = HeroGraphicsComponent();
			graphics.init();

            // setup hero bounding box for collision detection
			$.extend(hero, new SAT.Box(new SAT.Vector(hero.x, hero.y), hero.w, hero.h).toPolygon());
		},
		
		update: function () {
		    input.check();                          // updates velocities
			hero.physics.updatePosition();          // updates positions
			hero.physics.checkCollision();          // fix positions
			
			checkHealth();
			getSpritePos();
		},
	
		render: function(){
			drawHero();

			graphics.drawBullets();
			graphics.drawHealth();
			graphics.drawMana();
			graphics.drawXP();

			drawAfterHero();
		}
	};
})();

/*
    The graphics component of hero.
*/
var HeroGraphicsComponent = function () {
    //$.extend(this, hero.protectedInfo);

    var shuriken = null,
        shurikenReady = false
    ;

    return {
        init: function(){
            shuriken = new Image();
            shuriken.src = "img/shuriken.png";
            shuriken.onload = function () { shurikenReady = true; };
        },

        drawBullets: function(){
		    for(var i=0; i < hero.bulletArr.length; ++i){
		        var dirOffset = hero.bulletArr[i].dirR ?
    							    hero.w : 
    							    0;
	            
		        hero.bulletArr[i].deg += 5;
            
		        Graphics.drawRotate(
            	    shuriken, 
            	    hero.bulletArr[i].x + dirOffset,
            	    hero.bulletArr[i].y + 20,
        	 	    hero.bulletArr[i].deg
    	 	    );
		    }
        },

        drawHealth: function (){
		    for(var i=0; i < hero.health; ++i){
		        ctx.fillStyle = "red";
		        ctx.fillRect(80 + i*21, FULLH + 14, 19, 8);
		    }
        },
	
        drawMana: function(){
            for(var i=0; i < hero.mana; ++i){
                ctx.fillStyle = "#00b6ff";
                ctx.fillRect(80 + i*21, FULLH + 37, 19, 8);
            }
        },
	
        drawXP: function () {
            ctx.fillStyle = "#ddd";
            ctx.font = "12px 'Press Start 2P'";
        	
            var zero = (hero.xp < 10) ? '0' : '';
            ctx.fillText(zero + hero.xp + '/' + hero.xpNeeded, 80, FULLH + 71);
        }
    };
};

/// <reference path="../linker.js" />

/*
    The physics component of hero.
*/
var HeroPhysicsComponent = function () {

    function bulletHandler() {
        for (var i = 0; i < hero.bulletArr.length; ++i) {
            hero.bulletArr[i].x += hero.bulletArr[i].dirR ? bullet.speed : -bullet.speed;   // update position

            if (hero.bulletArr[i].x > canvas.width || hero.bulletArr[i].x < 0) {		    // bullet and screen
                hero.bulletArr.splice(i, 1); // remove ith item
            }
        }
    }

    function screenCollision() {
        hero.onGround = false;

        if (hero.y < -hero.h) {                     // feet above top of screen
            hero.y = -hero.h;
            hero.vY = 0;
        }
        else if (hero.y >= (canvas.height - game.padBot - hero.h)) { // bottom
            hero.y = canvas.height - game.padBot - hero.h;
            hero.isJumping = false;
            hero.onGround = true;

            hero.vY = 0;
        }

        if (hero.x < 0) { 								// left
            hero.x = 0;
            hero.vX = 0;
        }
        else if (hero.x > (canvas.width - hero.w)) { 	// right 
            hero.x = canvas.width - hero.w;
            hero.vX = 0;
        }
    }

    function levelCollision() {
        hero.isOnObj = false;   // prevents jumping after walking off platform

        Physics.lvlObjCollision(hero, function (r) {
            if (r.overlapN.y === 1) {                       // on top
                hero.isOnObj = true;
                hero.isJumping = false;
                hero.vY = 0;    // (wrong location??)
            }
            else if (r.overlapN.y === -1) {                 // on bot
                hero.vY = 0;    // (wrong location??)
            }
        });
        
        Physics.lvlItemCollision(function (r, idx) {
            if (r.overlapN.y === 1) {
                hero.y -= r.overlapV.y;
                hero.isOnObj = true;
                hero.isJumping = false;
                hero.vY = 0;    // (wrong location??)
            }
            else if (r.b.grabbable) {

                // TODO: check if player has left item before allowing re-pickup (instad of only checking spacebar)
                
                r.b.holding = true;
                r.b.vY = 6.5;
                r.b.onGround = false;

                if (r.b.isOnObj) {
                    r.b.isOnObj = false;
                    r.b.onObj.grabbable = true;
                    r.b.onObj = null;
                }

                hero.curItem = r.b;
                hero.isCarrying = true;

                level.items.splice(idx, 1);
            }
        });
    }

    return {
        updatePosition: function (){	
            if (hero.x !== (hero.x + hero.vX)) {
                audio.step.play();
            }
            
            if(((hero.dir == Dir.RIGHT && hero.x >= ((canvas.width/2) + 35)) ||
               (hero.dir == Dir.LEFT && hero.x <= ((canvas.width/2) - 45))) &&
               (hero.lvlX + hero.vX >= 0) &&
               (hero.lvlX + hero.vX <= level.curLvl.width - canvas.width)
            ){
                hero.lvlX += hero.vX;
                level.updateView();
            }
            else {
                hero.x += hero.vX;
            }

            if (!hero.onLadder) {
                hero.y += hero.vY;
            }
        },

        checkCollision: function () {
	        bulletHandler();		// bullet's and screen
            screenCollision();	    // hero and screen
            levelCollision();
        }
    };
};

/// <reference path="hero.js" />
/// <reference path="heroGraphics.js" />
/// <reference path="heroPhysics.js" />
/// <reference path="../physics/physics.js" />

/*
    The input component of hero.
*/
var HeroInputComponent = function () {

    return {
        init: function () {
            // global key vars
	        keysDown = {};
            lastKeyDown = -1;
	
            addEventListener("keydown", function (e) {

                if (e.keyCode == 32)
                    e.preventDefault(); 			//----- space bar (scrolling to bottom of page)
                else if (e.keyCode == 77)			//----- mute/unmute (m)
                    audio.handleMuteButton();
                else if(e.keyCode == 66)            //----- resize (b)
                    $(".resize").trigger("click");
                else if (e.keyCode == 75 &&			//----- jump (k);       TODO: move to check() function
                       (!hero.isJumping && ((lastKeyDown != 75) || !(75 in keysDown))) &&
                       (hero.isOnObj || hero.onGround)
                ) {
                    audio.jump.play();
                    hero.vY = 0;
                    hero.isJumping = true;
                    hero.isOnObj = false;
                }
                else if (e.keyCode == 74 &&		//----- shoot (j);          TODO: move to check() function
                        ((lastKeyDown != 74) || !(74 in keysDown))
                ) {
                    if (hero.ammo > 0 && !hero.isCarrying) {
                        audio.play(audio.effort);

                        hero.bulletArr[hero.bulletArr.length] = {
                            x: hero.x,
                            y: hero.y,
                            w: bullet.w,
                            h: bullet.h,
                            dirR: (hero.dir == Dir.RIGHT),
                            deg: 0
                        };

                        --hero.ammo;
                    }
                }
                else if (e.keyCode == KeyCode.O) {      //----- options (o)
                    utils.toggleMenu();
                }

                lastKeyDown = e.keyCode;
                keysDown[e.keyCode] = true;
            }, false);
	
            addEventListener("keyup", function (e) { delete keysDown[e.keyCode];}, false);
        },

        check: function () {
            var doGravity = false;

            if (hero.isJumping) {
                if (hero.jumpMod > 0) {
                    hero.vY -= hero.aY * hero.jumpMod--;
                }
                else {
                    doGravity = true;
                }
            }
            else {
                hero.jumpMod = hero.jumpMod0;
                doGravity = true;
            }


            if (doGravity && !hero.onLadder) {
                var fixVy = hero.vY + game.gravity*2;

                if (fixVy > hero.maxVY) {
                    hero.vY = hero.maxVy;
                }
                else {
                    hero.vY = fixVy;
                }
            }


            // --------- keys pressed --------
            var leftOrRight = false;
            //----- left (a)
            if(65 in keysDown){ 			
                hero.vX = (Math.abs(hero.vX - hero.aX) > hero.maxVx) ? -hero.maxVx : (hero.vX - hero.aX);
                hero.dir = Dir.LEFT;
                leftOrRight = true;
            }

		
            //----- right (d)
            if (68 in keysDown) {
                hero.vX = (Math.abs(hero.vX + hero.aX) > hero.maxVx) ? hero.maxVx : (hero.vX + hero.aX);
                hero.dir = Dir.RIGHT;
                leftOrRight = true;
            }
	    
            if(Math.abs(hero.vX) < hero.aX){    
                hero.vX = 0;
            }
            else if(!leftOrRight){
                //hero.vX += (hero.vX > 0) ? -game.friction : game.friction;
                hero.vX /= 1.26;
            }
	    

            //----- up (w)
            if (KeyCode.W in keysDown) {
                if (hero.onLadder) {
                    --hero.y;
                }
            }

            //----- down (s)
            if (KeyCode.S in keysDown) {
                if (hero.onLadder) {
                    ++hero.y;
                }
            }

	    
            //----- drop object (spacebar)
            if (32 in keysDown) {
                if (hero.isCarrying) {
                    hero.isCarrying = false;
                    hero.curItem.holding = false;
                    hero.curItem = null;
                }
            }

		
            //----- heal (h)
            if(72 in keysDown){
                if(hero.medKits > 0 && hero.health < hero.maxHealth){
                    ++hero.health;
                    --hero.medKits;

                    audio.play(audio.enchant, true);
                }
            }
		
		
            //----- restore (r)
            if(82 in keysDown && !(17 in keysDown)){	// 17 = ctrl
                if(hero.manaKits > 0 && hero.mana < hero.maxMana){
                    ++hero.mana;
                    --hero.manaKits;

                    audio.play(audio.enchant, true);
                }
            }
		
        }
    };
};

var Main = (function () {

    function setCanvasGlobals() {
        canvas = $("canvas")[0];
        ctx = canvas.getContext("2d");
        
        FULLW = canvas.width;
        FULLH = canvas.height;
        FULLH -= game.padHUD;

        HALFW = FULLW / 2;
        HALFH = FULLH / 2;
    }

    function setAudio() {
        audio.bgMusic.loop = true;
        audio.bgMusic.volume = 0.7;
        audio.bgMusic.pause();

        audio.enemyDeath.volume = 0.6;
        audio.jump.volume = 0.4;
        audio.thud.volume = 0.78;
        audio.discovery.volume = 0.7;

        audio.mute(true);
        $(document).on("click", ".audioState", audio.handleMuteButton);

        //var wasClicked = false;
        //$(".resize").on("click", function(){
        //    if (wasClicked) {
        //        $(canvas).css({ width: "", height: "" });
        //        $(this).attr("class", "resize off");
        //        $(this).children("span").attr("class", "icon-expand");
        //    }
        //    else {
        //        $(canvas).css({ width: "100%" });

        //        // fix for IE
        //        var width = $(canvas).width();
        //        $(canvas).css({ height: 0.611 * width });


        //        $(this).attr("class", "resize on");
        //        $(this).children("span").attr("class", "icon-contract");
        //    }

        //    wasClicked = !wasClicked;
        //});

        $(".menu").on("click", function (e) {
            e.preventDefault();
            utils.toggleMenu();
        })

        //----- enable audio on start -----
        audio.handleMuteButton()
    }

    function setupLoadingScreen() {
        ctx.fillStyle = "#e1e1e1";
        ctx.font = "25px 'Press Start 2P'";
        ctx.fillText("LOADING...", HALFW - 80, HALFH + 20);
    }

    return {
        /*
			REQUIRES: game and hero singleton objects already instantiated
		*/
        init: function () {
            setCanvasGlobals();

            setAudio();
            setupLoadingScreen();

            level.init();
            hero.init();
            

            // game timer
            setInterval(function () {
                ++game.actualTime;

                //console.log(game.actualTime + 's', hero.x + "px");
                //console.log(game.actualTime + 's', hero.y + "px");

            }, 1000);

            startScreen.start();


            if (location.host === "jon") {  // dev enviroment (debugging)

                // skip start screen
                lastKeyDown = KeyCode.ENTER;

                // mute audio
                audio.handleMuteButton();


            }
        }
    }
})();

$(function () {
    Main.init();
});

//@ sourceMappingURL=pageJonsQuest.js.map