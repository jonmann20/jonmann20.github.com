﻿(function(f,g,c,e,h,l,m){f.GoogleAnalyticsObject=h;f[h]=f[h]||function(){(f[h].q=f[h].q||[]).push(arguments)};f[h].l=1*new Date;l=g.createElement(c);m=g.getElementsByTagName(c)[0];l.async=1;l.src=e;m.parentNode.insertBefore(l,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-43015655-1","jonmann20.github.io");ga("send","pageview");
(function(f,g){(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):f.sammy=g.Sammy=c(f)})(function(c){var e,f=/:([\w\d]+)/g,l=/\?([^#]*)?$/,m=function(a){return Array.prototype.slice.call(a)},k=function(a){return"[object Function]"===Object.prototype.toString.call(a)},n=function(a){return"[object Array]"===Object.prototype.toString.call(a)},u=function(a){return decodeURIComponent((a||"").replace(/\+/g," "))},v=encodeURIComponent,w=function(a){return String(a).replace(/&(?!\w+;)/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},q=function(a){return function(){return this.route.apply(this,[a].concat(Array.prototype.slice.call(arguments)))}},s={},r=!(!g.history||!history.pushState),x=[];e=function(){var a=m(arguments),b,d;e.apps=e.apps||{};if(0===a.length||a[0]&&k(a[0]))return e.apply(e,["body"].concat(a));if("string"==typeof(d=a.shift()))return b=e.apps[d]||new e.Application,b.element_selector=d,0<a.length&&c.each(a,function(a,d){b.use(d)}),b.element_selector!=
d&&delete e.apps[d],e.apps[b.element_selector]=b};e.VERSION="0.7.4";e.addLogger=function(a){x.push(a)};e.log=function(){var a=m(arguments);a.unshift("["+Date()+"]");c.each(x,function(b,d){d.apply(e,a)})};"undefined"!=typeof g.console?k(g.console.log.apply)?e.addLogger(function(){g.console.log.apply(g.console,arguments)}):e.addLogger(function(){g.console.log(arguments)}):"undefined"!=typeof console&&e.addLogger(function(){console.log.apply(console,arguments)});c.extend(e,{makeArray:m,isFunction:k,
isArray:n});e.Object=function(a){return c.extend(this,a||{})};c.extend(e.Object.prototype,{escapeHTML:w,h:w,toHash:function(){var a={};c.each(this,function(b,d){k(d)||(a[b]=d)});return a},toHTML:function(){var a="";c.each(this,function(b,d){k(d)||(a+="<strong>"+b+"</strong> "+d+"<br />")});return a},keys:function(a){var b=[],d;for(d in this)k(this[d])&&a||b.push(d);return b},has:function(a){return this[a]&&""!==c.trim(this[a].toString())},join:function(){var a=m(arguments),b=a.shift();return a.join(b)},
log:function(){e.log.apply(e,arguments)},toString:function(a){var b=[];c.each(this,function(d,p){k(p)&&!a||b.push('"'+d+'": '+p.toString())});return"Sammy.Object: {"+b.join(",")+"}"}});e.targetIsThisWindow=function(a){return(a=c(a.target).attr("target"))&&a!==g.name&&"_self"!==a?"_blank"===a?!1:"top"===a&&g===g.top?!0:!1:!0};e.DefaultLocationProxy=function(a,b){this.app=a;this.is_native=!1;this.has_history=r;this._startPolling(b)};e.DefaultLocationProxy.fullPath=function(a){var b=a.toString().match(/^[^#]*(#.+)$/);
return[a.pathname,a.search,b?b[1]:""].join("")};c.extend(e.DefaultLocationProxy.prototype,{bind:function(){var a=this,b=this.app,d=e.DefaultLocationProxy;c(g).bind("hashchange."+this.app.eventNamespace(),function(p,c){!1!==a.is_native||c||(a.is_native=!0,g.clearInterval(d._interval),d._interval=null);b.trigger("location-changed")});r&&!b.disable_push_state&&(c(g).bind("popstate."+this.app.eventNamespace(),function(a){b.trigger("location-changed")}),c(document).delegate("a","click.history-"+this.app.eventNamespace(),
function(p){if(!(p.isDefaultPrevented()||p.metaKey||p.ctrlKey)){var c=d.fullPath(this);if(this.hostname==g.location.hostname&&b.lookupRoute("get",c)&&e.targetIsThisWindow(p))return p.preventDefault(),a.setLocation(c),!1}}));d._bindings||(d._bindings=0);d._bindings++},unbind:function(){c(g).unbind("hashchange."+this.app.eventNamespace());c(g).unbind("popstate."+this.app.eventNamespace());c(document).undelegate("a","click.history-"+this.app.eventNamespace());e.DefaultLocationProxy._bindings--;0>=e.DefaultLocationProxy._bindings&&
(g.clearInterval(e.DefaultLocationProxy._interval),e.DefaultLocationProxy._interval=null)},getLocation:function(){return e.DefaultLocationProxy.fullPath(g.location)},setLocation:function(a){/^([^#\/]|$)/.test(a)&&(a=r&&!this.app.disable_push_state?"/"+a:"#!/"+a);if(a!=this.getLocation())if(r&&!this.app.disable_push_state&&/^\//.test(a))history.pushState({path:a},g.title,a),this.app.trigger("location-changed");else return g.location=a},_startPolling:function(a){var b=this;if(!e.DefaultLocationProxy._interval){a||
(a=10);var d=function(){var a=b.getLocation();"undefined"!=typeof e.DefaultLocationProxy._last_location&&a==e.DefaultLocationProxy._last_location||g.setTimeout(function(){c(g).trigger("hashchange",[!0])},0);e.DefaultLocationProxy._last_location=a};d();e.DefaultLocationProxy._interval=g.setInterval(d,a)}}});e.Application=function(a){var b=this;this.routes={};this.listeners=new e.Object({});this.arounds=[];this.befores=[];this.namespace=(new Date).getTime()+"-"+parseInt(1E3*Math.random(),10);this.context_prototype=
function(){e.EventContext.apply(this,arguments)};this.context_prototype.prototype=new e.EventContext;k(a)&&a.apply(this,[this]);this._location_proxy||this.setLocationProxy(new e.DefaultLocationProxy(this,this.run_interval_every));this.debug&&this.bindToAllEvents(function(a,c){b.log(b.toString(),a.cleaned_type,c||{})})};e.Application.prototype=c.extend({},e.Object.prototype,{ROUTE_VERBS:["get","post","put","delete"],APP_EVENTS:"run unload lookup-route run-route route-found event-context-before event-context-after changed error check-form-submission redirect location-changed".split(" "),
_last_route:null,_location_proxy:null,_running:!1,element_selector:"body",debug:!1,raise_errors:!1,run_interval_every:50,disable_push_state:!1,template_engine:null,toString:function(){return"Sammy.Application:"+this.element_selector},$element:function(a){return a?c(this.element_selector).find(a):c(this.element_selector)},use:function(){var a=m(arguments),b=a.shift(),d=b||"";try{a.unshift(this),"string"==typeof b&&(d="Sammy."+b,b=e[b]),b.apply(this,a)}catch(c){"undefined"===typeof b?this.error("Plugin Error: called use() but plugin ("+
d.toString()+") is not defined",c):k(b)?this.error("Plugin Error",c):this.error("Plugin Error: called use() but '"+d.toString()+"' is not a function",c)}return this},setLocationProxy:function(a){var b=this._location_proxy;this._location_proxy=a;this.isRunning()&&(b&&b.unbind(),this._location_proxy.bind())},log:function(){e.log.apply(e,Array.prototype.concat.apply([this.element_selector],arguments))},route:function(a,b){var d=this,p=[],e,y,t=Array.prototype.slice.call(arguments,2);0===t.length&&k(b)&&
(b=a,t=[b],a="any");a=a.toLowerCase();if(b.constructor==String){for(f.lastIndex=0;null!==(y=f.exec(b));)p.push(y[1]);b=RegExp(b.replace(f,"([^/]+)")+"$")}c.each(t,function(a,b){"string"===typeof b&&(t[a]=d[b])});e=function(a){var c={verb:a,path:b,callback:t,param_names:p};d.routes[a]=d.routes[a]||[];d.routes[a].push(c)};"any"===a?c.each(this.ROUTE_VERBS,function(a,b){e(b)}):e(a);return this},get:q("get"),post:q("post"),put:q("put"),del:q("delete"),any:q("any"),mapRoutes:function(a){var b=this;c.each(a,
function(a,c){b.route.apply(b,c)});return this},eventNamespace:function(){return["sammy-app",this.namespace].join("-")},bind:function(a,b,d){var c=this;"undefined"==typeof d&&(d=b);b=function(a,b){var e;b&&b.context?(e=b.context,delete b.context):e=new c.context_prototype(c,"bind",a.type,b,a.target);a.cleaned_type=a.type.replace(c.eventNamespace(),"");d.apply(e,[a,b])};this.listeners[a]||(this.listeners[a]=[]);this.listeners[a].push(b);this.isRunning()&&this._listen(a,b);return this},trigger:function(a,
b){this.$element().trigger([a,this.eventNamespace()].join("."),[b]);return this},refresh:function(){this.last_location=null;this.trigger("location-changed");return this},before:function(a,b){k(a)&&(b=a,a={});this.befores.push([a,b]);return this},after:function(a){return this.bind("event-context-after",a)},around:function(a){this.arounds.push(a);return this},onComplete:function(a){this._onComplete=a;return this},isRunning:function(){return this._running},helpers:function(a){c.extend(this.context_prototype.prototype,
a);return this},helper:function(a,b){this.context_prototype.prototype[a]=b;return this},run:function(a){if(this.isRunning())return!1;var b=this;c.each(this.listeners.toHash(),function(a,e){c.each(e,function(c,e){b._listen(a,e)})});this.trigger("run",{start_url:a});this._running=!0;this.last_location=null;/\#(.+)/.test(this.getLocation())||"undefined"==typeof a||this.setLocation(a);this._checkLocation();this._location_proxy.bind();this.bind("location-changed",function(){b._checkLocation()});this.bind("submit",
function(a){return e.targetIsThisWindow(a)?!1===b._checkFormSubmission(c(a.target).closest("form"))?a.preventDefault():!1:!0});c(g).bind("unload",function(){b.unload()});return this.trigger("changed")},unload:function(){if(!this.isRunning())return!1;var a=this;this.trigger("unload");this._location_proxy.unbind();this.$element().unbind("submit").removeClass(a.eventNamespace());c.each(this.listeners.toHash(),function(b,d){c.each(d,function(d,c){a._unlisten(b,c)})});this._running=!1;return this},destroy:function(){this.unload();
delete e.apps[this.element_selector];return this},bindToAllEvents:function(a){var b=this;c.each(this.APP_EVENTS,function(d,c){b.bind(c,a)});c.each(this.listeners.keys(!0),function(d,e){-1==c.inArray(e,b.APP_EVENTS)&&b.bind(e,a)});return this},routablePath:function(a){return a.replace(l,"")},lookupRoute:function(a,b){var d=!1,c=0,e,f;if("undefined"!=typeof this.routes[a])for(e=this.routes[a].length;c<e;c++)if(f=this.routes[a][c],this.routablePath(b).match(f.path)){d=f;break}return d},runRoute:function(a,
b,d,e){var f=this,h=this.lookupRoute(a,b),g,l,k,m,n,q,r;this.debug&&this.log("runRoute",[a,b].join(" "));this.trigger("run-route",{verb:a,path:b,params:d});"undefined"==typeof d&&(d={});c.extend(d,this._parseQueryString(b));if(h){this.trigger("route-found",{route:h});null!==(q=h.path.exec(this.routablePath(b)))&&(q.shift(),c.each(q,function(a,b){h.param_names[a]?d[h.param_names[a]]=u(b):(d.splat||(d.splat=[]),d.splat.push(u(b)))}));g=new this.context_prototype(this,a,b,d,e);e=this.arounds.slice(0);
k=this.befores.slice(0);n=[g];d.splat&&(n=n.concat(d.splat));l=function(){for(var a,b,d;0<k.length;)if(m=k.shift(),f.contextMatchesOptions(g,m[0])&&(a=m[1].apply(g,[g]),!1===a))return!1;f.last_route=h;g.trigger("event-context-before",{context:g});"function"===typeof h.callback&&(h.callback=[h.callback]);h.callback&&h.callback.length&&(b=-1,d=function(){b++;h.callback[b]?a=h.callback[b].apply(g,n):f._onComplete&&typeof("function"===f._onComplete)&&f._onComplete(g)},n.push(d),d());g.trigger("event-context-after",
{context:g});return a};c.each(e.reverse(),function(a,b){var d=l;l=function(){return b.apply(g,[d])}});try{r=l()}catch(s){this.error(["500 Error",a,b].join(" "),s)}return r}return this.notFound(a,b)},contextMatchesOptions:function(a,b,d){if("string"===typeof b||"[object RegExp]"===Object.prototype.toString.call(b))b={path:b};"undefined"===typeof d&&(d=!0);if(c.isEmptyObject(b))return!0;if(n(b.path)){var e,f,h,g;e=[];f=0;for(g=b.path.length;f<g;f+=1)h=c.extend({},b,{path:b.path[f]}),e.push(this.contextMatchesOptions(a,
h));a=-1<c.inArray(!0,e)?!0:!1;return d?a:!a}if(b.only)return this.contextMatchesOptions(a,b.only,!0);if(b.except)return this.contextMatchesOptions(a,b.except,!1);f=e=!0;b.path&&("[object RegExp]"!==Object.prototype.toString.call(b.path)&&(b.path=RegExp(b.path.toString()+"$")),e=b.path.test(a.path));b.verb&&(f="string"===typeof b.verb?b.verb===a.verb:-1<b.verb.indexOf(a.verb));return d?f&&e:!(f&&e)},getLocation:function(){return this._location_proxy.getLocation()},setLocation:function(a){return this._location_proxy.setLocation(a)},
swap:function(a,b){var d=this.$element().html(a);k(b)&&b(a);return d},templateCache:function(a,b){return"undefined"!=typeof b?s[a]=b:s[a]},clearTemplateCache:function(){return s={}},notFound:function(a,b){var d=this.error(["404 Not Found",a,b].join(" "));return"get"===a?d:!0},error:function(a,b){b||(b=Error());b.message=[a,b.message].join(" ");this.trigger("error",{message:b.message,error:b});if(this.raise_errors)throw b;this.log(b.message,b)},_checkLocation:function(){var a,b;a=this.getLocation();
this.last_location&&"get"==this.last_location[0]&&this.last_location[1]==a||(this.last_location=["get",a],b=this.runRoute("get",a));return b},_getFormVerb:function(a){a=c(a);var b,d;d=a.find('input[name="_method"]');0<d.length&&(b=d.val());b||(b=a[0].getAttribute("method"));b&&""!==b||(b="get");return c.trim(b.toString().toLowerCase())},_checkFormSubmission:function(a){var b,d,e;this.trigger("check-form-submission",{form:a});b=c(a);d=b.attr("action")||"";e=this._getFormVerb(b);this.debug&&this.log("_checkFormSubmission",
b,d,e);"get"===e?(b=this._serializeFormParams(b),""!==b&&(d+="?"+b),this.setLocation(d),a=!1):(b=c.extend({},this._parseFormParams(b)),a=this.runRoute(e,d,b,a.get(0)));return"undefined"==typeof a?!1:a},_serializeFormParams:function(a){var b="";a=a.serializeArray();var d;if(0<a.length)for(b=this._encodeFormPair(a[0].name,a[0].value),d=1;d<a.length;d++)b=b+"&"+this._encodeFormPair(a[d].name,a[d].value);return b},_encodeFormPair:function(a,b){return v(a)+"="+v(b)},_parseFormParams:function(a){var b=
{};a=a.serializeArray();var d;for(d=0;d<a.length;d++)b=this._parseParamPair(b,a[d].name,a[d].value);return b},_parseQueryString:function(a){var b={},d,c;if((a=a.match(l))&&a[1])for(a=a[1].split("&"),c=0;c<a.length;c++)d=a[c].split("="),b=this._parseParamPair(b,u(d[0]),u(d[1]||""));return b},_parseParamPair:function(a,b,d){"undefined"!==typeof a[b]?n(a[b])?a[b].push(d):a[b]=[a[b],d]:a[b]=d;return a},_listen:function(a,b){return this.$element().bind([a,this.eventNamespace()].join("."),b)},_unlisten:function(a,
b){return this.$element().unbind([a,this.eventNamespace()].join("."),b)}});e.RenderContext=function(a){this.event_context=a;this.callbacks=[];this.content=this.previous_content=null;this.waiting=this.next_engine=!1};e.RenderContext.prototype=c.extend({},e.Object.prototype,{then:function(a){if(!k(a))if("string"===typeof a&&a in this.event_context){var b=this.event_context[a];a=function(a){return b.apply(this.event_context,[a])}}else return this;var d=this;this.waiting?this.callbacks.push(a):(this.wait(),
g.setTimeout(function(){var b=a.apply(d,[d.content,d.previous_content]);!1!==b&&d.next(b)},0));return this},wait:function(){this.waiting=!0},next:function(a){this.waiting=!1;"undefined"!==typeof a&&(this.previous_content=this.content,this.content=a);0<this.callbacks.length&&this.then(this.callbacks.shift())},load:function(a,b,d){var e=this;return this.then(function(){var f,h,g;k(b)?(d=b,b={}):b=c.extend({},b);d&&this.then(d);if("string"===typeof a){f=(g=a.match(/\.json$/)||b.json)?!0===b.cache:!1!==
b.cache;e.next_engine=e.event_context.engineFor(a);delete b.cache;delete b.json;b.engine&&(e.next_engine=b.engine,delete b.engine);if(f&&(h=this.event_context.app.templateCache(a)))return h;this.wait();c.ajax(c.extend({url:a,data:{},dataType:g?"json":"text",type:"get",success:function(b){f&&e.event_context.app.templateCache(a,b);e.next(b)}},b));return!1}if(a.nodeType)return a.innerHTML;if(a.selector)return e.next_engine=a.attr("data-engine"),!1===b.clone?a.remove()[0].innerHTML.toString():a[0].innerHTML.toString()})},
loadPartials:function(a){var b;if(a)for(b in this.partials=this.partials||{},a)(function(b,c){b.load(a[c]).then(function(a){this.partials[c]=a})})(this,b);return this},render:function(a,b,d,c){if(k(a)&&!b)return this.then(a);k(b)?(c=d,d=b,b=null):d&&!k(d)&&(c=d,d=null);return this.loadPartials(c).load(a).interpolate(b,a).then(d)},partial:function(a,b,d,c){return k(d)?this.render(a,b,c).swap(d):k(b)?this.render(a,{},d).swap(b):this.render(a,b,d).swap()},send:function(){var a=this,b=m(arguments),d=
b.shift();n(b[0])&&(b=b[0]);return this.then(function(c){b.push(function(b){a.next(b)});a.wait();d.apply(d,b);return!1})},collect:function(a,b,d){var e=this,f=function(){k(a)&&(b=a,a=this.content);var d=[],f=!1;c.each(a,function(a,c){var h=b.apply(e,[a,c]);h.jquery&&1==h.length&&(h=h[0],f=!0);d.push(h);return h});return f?d:d.join("")};return d?f():this.then(f)},renderEach:function(a,b,d,e){n(b)&&(e=d,d=b,b=null);return this.load(a).then(function(f){var h=this;d||(d=n(this.previous_content)?this.previous_content:
[]);if(e)c.each(d,function(d,c){var g={},l=this.next_engine||a;b?g[b]=c:g=c;e(c,h.event_context.interpolate(f,g,l))});else return this.collect(d,function(d,c){var e={},h=this.next_engine||a;b?e[b]=c:e=c;return this.event_context.interpolate(f,e,h)},!0)})},interpolate:function(a,b,d){var c=this;return this.then(function(e,f){!a&&f&&(a=f);this.next_engine&&(b=this.next_engine,this.next_engine=!1);var h=c.event_context.interpolate(e,a,b,this.partials);return d?f+h:h})},swap:function(a){return this.then(function(b){this.event_context.swap(b,
a);return b}).trigger("changed",{})},appendTo:function(a){return this.then(function(b){c(a).append(b)}).trigger("changed",{})},prependTo:function(a){return this.then(function(b){c(a).prepend(b)}).trigger("changed",{})},replace:function(a){return this.then(function(b){c(a).html(b)}).trigger("changed",{})},trigger:function(a,b){return this.then(function(d){"undefined"==typeof b&&(b={content:d});this.event_context.trigger(a,b);return d})}});e.EventContext=function(a,b,d,c,f){this.app=a;this.verb=b;this.path=
d;this.params=new e.Object(c);this.target=f};e.EventContext.prototype=c.extend({},e.Object.prototype,{$element:function(){return this.app.$element(m(arguments).shift())},engineFor:function(a){var b;if(k(a))return a;a=(a||this.app.template_engine).toString();if(b=a.match(/\.([^\.\?\#]+)$/))a=b[1];return a&&k(this[a])?this[a]:this.app.template_engine?this.engineFor(this.app.template_engine):function(a,b){return a}},interpolate:function(a,b,d,c){return this.engineFor(d).apply(this,[a,b,c])},render:function(a,
b,d,c){return(new e.RenderContext(this)).render(a,b,d,c)},renderEach:function(a,b,d,c){return(new e.RenderContext(this)).renderEach(a,b,d,c)},load:function(a,b,d){return(new e.RenderContext(this)).load(a,b,d)},loadPartials:function(a){return(new e.RenderContext(this)).loadPartials(a)},partial:function(a,b,d,c){return(new e.RenderContext(this)).partial(a,b,d,c)},send:function(){var a=new e.RenderContext(this);return a.send.apply(a,arguments)},redirect:function(){var a;a=m(arguments);var b=this.app.getLocation(),
d=a.length;if(1<d){for(var e=0,f=[],h=[],g={},l=!1;e<d;e++)"string"==typeof a[e]?f.push(a[e]):(c.extend(g,a[e]),l=!0);a=f.join("/");if(l){for(var k in g)h.push(this.app._encodeFormPair(k,g[k]));a+="?"+h.join("&")}}else a=a[0];this.trigger("redirect",{to:a});this.app.last_location=[this.verb,this.path];this.app.setLocation(a);RegExp(a).test(b)&&this.app.trigger("location-changed")},trigger:function(a,b){"undefined"==typeof b&&(b={});b.context||(b.context=this);return this.app.trigger(a,b)},eventNamespace:function(){return this.app.eventNamespace()},
swap:function(a,b){return this.app.swap(a,b)},notFound:function(){return this.app.notFound(this.verb,this.path)},json:function(a){return c.parseJSON(a)},toString:function(){return"Sammy.EventContext: "+[this.verb,this.path,this.params].join(" ")}});return e})})(jQuery,window);
jw.Utils=function(f,g){var c={"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js":!1,"//platform.twitter.com/widgets.js":!1,"/js/plugins/jquery.cycle.lite.js":!1,"/js/plugins/jquery.hoverIntent.min.js":!1,"/js/plugins/jquery.hoverCarousel.js":!1,"/js/plugins/jquery.star_bg.js":!1,"/js/stars.js":!1,"/js/ballPit.js":!1,"/js/bouncingObj.js":!1,"/js/computerGraphics/web/computergraphics.dart.js":!1,"/js/ustream.js":!1};return{require:function(e,h){c[e]?h(!0):f.ajax({url:e,dataType:"script",
success:function(f){c[e]=!0;h(!1)}})},getYear:function(){return(new Date).getFullYear()},resetModel:function(){"ballPit"===jw.Routing.lastPg?jw.BallPit.deInit():"stars"===jw.Routing.lastPg?jw.StarryBg.deInit():"bObj"===jw.Routing.lastPg&&jw.Bounce.deInit();jw.body.removeClass();document.title="";f("meta[name=description], meta[name=keywords]").remove();f("meta[name=robots]").remove();f(".dPlaygroundNav").hide()}}}(jQuery);
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,1E3/60)}}();
jw.HomeModel=function(f,g){return{render:function(c){jw.Utils.resetModel();c.load("/home.html",function(c){jw.Utils.require("//platform.twitter.com/widgets.js",function(c){twttr.widgets.load()});jw.Utils.require("/js/plugins/jquery.cycle.lite.js",function(c){f("#slideshow").cycle()})}).swap();document.title="Jon Wiedmann";jw.head.append("<meta name='description' content='Jon Wiedmann&#700;s personal website.  This site is set up to showcase some of my technical ability. This site has information regarding my work experience and hobbies.' /><meta name='keywords' content='Jon Wiedmann, Web Developer, PHP, HTML5, CSS, jQuery, Javascript, sammy.js' />");
jw.body.addClass("home")}}}(jQuery);jw.AboutModel=function(f,g){return{render:function(c){jw.Utils.resetModel();c.load("/about.html").swap();document.title="About";jw.body.addClass("about")}}}(jQuery);jw.ContactModel=function(f,g){return{render:function(c){jw.Utils.resetModel();c.load("/contact.html").swap();document.title="Contact Me";jw.body.addClass("contact")}}}(jQuery);
jw.FavoritesModel=function(f,g){return{render:function(c){jw.Utils.resetModel();c.load("/favorites.html").swap();document.title="Favorites";jw.head.append("<meta name='description' content='Jon Wiedmann&#700;s personal website.  This site is set up to showcase some of my technical ability. This site has information regarding my work experience and hobbies.' /><meta name='keywords' content='Jon Wiedmann, Web Developer, PHP, HTML5, CSS, jQuery, Javascript, sammy.js' />");jw.body.addClass("favs nav0")}}}(jQuery);
jw.BlogModel=function(f,g){return{render:function(c){jw.Utils.resetModel();c.load("/blog/index.html").swap();document.title="Blog";jw.body.addClass("blog")}}}(jQuery);jw.GamesModel=function(f,g){return{render:function(c,e){jw.Utils.resetModel();"index"===e&&(c.load("/games/index.html",function(c){jw.Utils.require("/js/plugins/jquery.hoverIntent.min.js",function(){});jw.Utils.require("/js/plugins/jquery.hoverCarousel.js",function(){f("ul").hoverCarousel()})}).swap(),document.title="Games",jw.body.addClass("absHover games"))}}}(jQuery);
jw.MusicModel=function(f,g){function c(c){c.load("/music/musicNav.html",function(c){f(".musicNav").html(c)})}var e=jw.Utils.getYear();return{render:function(h,g){jw.Utils.resetModel();"index"===g?(h.load("/music/index.html",function(g){c(h);f(".teaching").text(e-2008);f(".playing").text(e-1994)}).swap(),document.title="Music",jw.body.addClass("music musicHome")):"bass"===g?(h.load("/music/bass.html",function(g){c(h);f(".playing").text(e-2009)}).swap(),document.title="Bass | Music",jw.body.addClass("music bass")):
"chiptunes"===g?(h.load("/music/chiptunes.html",function(e){c(h)}).swap(),document.title="Chiptunes | Music",jw.body.addClass("music")):"guitar"===g?(h.load("/music/guitar.html",function(g){c(h);f(".playing").text(e-2002)}).swap(),document.title="Guitar | Music",jw.body.addClass("music")):"mandolin"===g?(h.load("/music/mandolin.html",function(g){c(h);f(".playing").text(e-2008)}).swap(),document.title="Mandolin | Music",jw.body.addClass("music mandolin")):"piano"===g?(h.load("/music/piano.html",function(g){c(h);
f(".playing").text(e-1994)}).swap(),document.title="Piano | Music",jw.body.addClass("music")):"trumpet"===g?(h.load("/music/trumpet.html",function(g){c(h);f(".playing").text(e-1998)}).swap(),document.title="Trumpet | Music",jw.body.addClass("music trumpet")):"rates"===g?(h.load("/music/rates.html",function(e){c(h)}).swap(),document.title="Rates | Music",jw.head.append("<meta name='description' content='Music Lesson Rates'><meta name='robots' rel='none' />"),jw.body.addClass("music rates")):"voice"===
g&&(h.load("/music/voice.html",function(g){c(h);f(".playing").text(e-2009)}).swap(),document.title="Voice | Music",jw.body.addClass("music"))}}}(jQuery);
jw.PlaygroundModel=function(f,g){return{render:function(c,e){jw.Utils.resetModel();"index"===e?(c.load("/playground/index.html",function(e){c.load("/playground/playgroundNav.html",function(c){f(".playgroundNav").html(c);f(".colL ul").hoverCarousel()})}).swap(),document.title="Playground",jw.head.append("<meta name='description' content='A canvas example showcasing a ball pit.' /><meta name='keywords' content='canvas, html5' />"),jw.body.addClass("absHover playground")):"ballPit"===e?(c.load("/playground/ballPit.html",
function(c){jw.Utils.require("/js/ballPit.js",function(){jw.BallPit.init()})}).swap(),document.title="Ball Pit | Playground",jw.head.append("<meta name='description' content='A canvas example showcasing a ball pit.' /><meta name='keywords' content='canvas, html5' />"),jw.body.addClass("playground playInner nav3")):"stars"===e?(c.load("/playground/stars.html",function(c){jw.Utils.require("/js/plugins/jquery.star_bg.js",function(){jw.Utils.require("/js/stars.js",function(c){jw.StarryBg.init()})})}).swap(),
document.title="Starry Background | Playground",jw.head.append("<meta name='description' content='A canvas example showcasing a starry background.' /><meta name='keywords' content='canvas, html5' />"),jw.body.addClass("playground playInner nav2")):"bObj"===e?(c.load("/playground/bouncing-object.html",function(c){jw.Utils.require("/js/bouncingObj.js",function(){jw.Bounce.init()})}).swap(),document.title="Bouncing Object | Playground",jw.head.append("<meta name='description' content='A canvas example showcasing a bouncing object.' /><meta name='keywords' content='canvas, html5' />"),
jw.body.addClass("playground playInner nav6")):"ustream"===e?(c.load("/playground/USTREAM-demo.html",function(c){jw.Utils.require("/js/ustream.js",function(){jw.Ustream.init()})}).swap(),document.title="USTREAM demo | Playground",jw.head.append("<meta name='description' content='A USTREAM api demo.' /><meta name='keywords' content='USTREAM' />"),jw.body.addClass("playground playInner uStreamPage nav5")):"bCube"===e?(c.load("/playground/breakdancing-cube.html",function(c){f("#cube").on("click",function(c){c.preventDefault()})}).swap(),
document.title="Breakdancing Cube | Playground",jw.head.append("<meta name='description' content='Pure CSS3 animation demo.' /><meta name='keywords' content='CSS3, HTML5' />"),jw.body.addClass("playground playInner bDancingCube nav1")):"fSun"===e&&(c.load("/playground/floating-sun.html",function(c){f.getScript("/js/computerGraphics/web/computergraphics.dart.js")}).swap(),document.title="Floating Sun | Playground",jw.head.append("<meta name='description' content='A canvas example showcasing a computer graphics simulation.' /><meta name='keywords' content='canvas, html5, computer graphics' />"),
jw.body.addClass("playground playInner nav4"));"index"!==e&&(f(".dPlaygroundNav").show(),c.load("/playground/playgroundNav.html",function(c){f(".dPlaygroundNav").html(c)}))}}}(jQuery);
jw.PortfolioModel=function(f,g){return{render:function(c,e){jw.Utils.resetModel();"index"===e&&(c.load("/portfolio/index.html",function(c){jw.Utils.require("/js/plugins/jquery.hoverIntent.min.js",function(){});jw.Utils.require("/js/plugins/jquery.hoverCarousel.js",function(){f("ul").hoverCarousel()})}).swap(),document.title="Portfolio",jw.body.addClass("portfolio absHover"))}}}(jQuery);
jw.Routing=function(f,g){var c=f.sammy(".main",function(){this.route("get","/",function(){jw.HomeModel.render(this);jw.Routing.lastPg="home"});this.route("get","#home",function(){jw.HomeModel.render(this);jw.Routing.lastPg="home"});this.route("get","#about",function(){jw.AboutModel.render(this);jw.Routing.lastPg="about"});this.route("get","#contact",function(){jw.ContactModel.render(this);jw.Routing.lastPg="contact"});this.route("get","#favorites",function(){jw.FavoritesModel.render(this);jw.Routing.lastPg=
"favorites"});this.route("get","#blog",function(){jw.BlogModel.render(this);jw.Routing.lastPg="blog"});this.route("get","#games",function(){jw.GamesModel.render(this,"index");jw.Routing.lastPg="games/index"});this.route("get","#music",function(){jw.MusicModel.render(this,"index");jw.Routing.lastPg="music/index"});this.route("get","#music/bass",function(){jw.MusicModel.render(this,"bass");jw.Routing.lastPg="music/bass"});this.route("get","#music/chiptunes",function(){jw.MusicModel.render(this,"chiptunes");
jw.Routing.lastPg="music/chiptunes"});this.route("get","#music/guitar",function(){jw.MusicModel.render(this,"guitar");jw.Routing.lastPg="music/guitar"});this.route("get","#music/mandolin",function(){jw.MusicModel.render(this,"mandolin");jw.Routing.lastPg="music/mandolin"});this.route("get","#music/piano",function(){jw.MusicModel.render(this,"piano");jw.Routing.lastPg="music/piano"});this.route("get","#music/trumpet",function(){jw.MusicModel.render(this,"trumpet");jw.Routing.lastPg="music/trumpet"});
this.route("get","#music/rates",function(){jw.MusicModel.render(this,"rates");jw.Routing.lastPg="music/rates"});this.route("get","#music/voice",function(){jw.MusicModel.render(this,"voice");jw.Routing.lastPg="music/voice"});this.route("get","#playground",function(){jw.PlaygroundModel.render(this,"index");jw.Routing.lastPg="playground/index"});this.route("get","#playground/ballPit",function(){jw.PlaygroundModel.render(this,"ballPit");jw.Routing.lastPg="ballPit"});this.route("get","#playground/breakdancing-cube",
function(){jw.PlaygroundModel.render(this,"bCube");jw.Routing.lastPg="bCube"});this.route("get","#playground/floating-sun",function(){jw.PlaygroundModel.render(this,"fSun");jw.Routing.lastPg="fSun"});this.route("get","#playground/bouncing-object",function(){jw.PlaygroundModel.render(this,"bObj");jw.Routing.lastPg="bObj"});this.route("get","#playground/starry-background",function(){jw.PlaygroundModel.render(this,"stars");jw.Routing.lastPg="stars"});this.route("get","#playground/USTREAM-demo",function(){jw.PlaygroundModel.render(this,
"ustream");jw.Routing.lastPg="ustream"});this.route("get","#portfolio",function(){jw.PortfolioModel.render(this,"index");jw.Routing.lastPg="portfolio/index"})});return{lastPg:null,init:function(){c.run()}}}(jQuery);jw.Main=function(){return{init:function(){jw.head=$("head");jw.body=$("body");jw.Routing.init();$(".dateYear").text(jw.Utils.getYear())}}}();$(function(){var f=setInterval(function(){jw.scriptsLoaded===jw.numScripts&&(clearInterval(f),jw.Main.init())},20)});
