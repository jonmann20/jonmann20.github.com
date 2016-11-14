"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):jQuery.sammy=window.Sammy=t(jQuery)}(function(t){var e,n="([^/]+)",i=/:([\w\d]+)/g,o=/\?([^#]*)?$/,r=function(t){return Array.prototype.slice.call(t)},a=function(t){return"[object Function]"===Object.prototype.toString.call(t)},s=function(t){return"[object Array]"===Object.prototype.toString.call(t)},u=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},c=function(t){return decodeURIComponent((t||"").replace(/\+/g," "))},l=encodeURIComponent,h=function(t){return String(t).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},d=function(t){return function(){return this.route.apply(this,[t].concat(Array.prototype.slice.call(arguments)))}},p={},f=!(!window.history||!history.pushState),g=[];return e=function(){var n,i,o=r(arguments);return e.apps=e.apps||{},0===o.length||o[0]&&a(o[0])?e.apply(e,["body"].concat(o)):"string"==typeof(i=o.shift())?(n=e.apps[i]||new e.Application,n.element_selector=i,o.length>0&&t.each(o,function(t,e){n.use(e)}),n.element_selector!=i&&delete e.apps[i],e.apps[n.element_selector]=n,n):void 0},e.VERSION="0.7.6",e.addLogger=function(t){g.push(t)},e.log=function(){var n=r(arguments);n.unshift("["+Date()+"]"),t.each(g,function(t,i){i.apply(e,n)})},"undefined"!=typeof window.console?"function"==typeof window.console.log&&a(window.console.log.apply)?e.addLogger(function(){window.console.log.apply(window.console,arguments)}):e.addLogger(function(){window.console.log(arguments)}):"undefined"!=typeof console&&e.addLogger(function(){console.log.apply(console,arguments)}),t.extend(e,{makeArray:r,isFunction:a,isArray:s}),e.Object=function(e){return t.extend(this,e||{})},t.extend(e.Object.prototype,{escapeHTML:h,h:h,toHash:function(){var e={};return t.each(this,function(t,n){a(n)||(e[t]=n)}),e},toHTML:function(){var e="";return t.each(this,function(t,n){a(n)||(e+="<strong>"+t+"</strong> "+n+"<br />")}),e},keys:function t(e){var t=[];for(var n in this)a(this[n])&&e||t.push(n);return t},has:function(e){return this[e]&&""!==t.trim(this[e].toString())},join:function(){var t=r(arguments),e=t.shift();return t.join(e)},log:function(){e.log.apply(e,arguments)},toString:function(e){var n=[];return t.each(this,function(t,i){a(i)&&!e||n.push('"'+t+'": '+i.toString())}),"Sammy.Object: {"+n.join(",")+"}"}}),e.targetIsThisWindow=function(e,n){var i=t(e.target).closest(n);if(0===i.length)return!0;var o=i.attr("target");return!o||o===window.name||"_self"===o||"_blank"!==o&&("top"===o&&window===window.top)},e.DefaultLocationProxy=function(t,e){this.app=t,this.is_native=!1,this.has_history=f,this._startPolling(e)},e.DefaultLocationProxy.fullPath=function(t){var e=t.toString().match(/^[^#]*(#.+)$/),n=e?e[1]:"";return[t.pathname,t.search,n].join("")},t.extend(e.DefaultLocationProxy.prototype,{bind:function(){var n=this,i=this.app,o=e.DefaultLocationProxy;t(window).bind("hashchange."+this.app.eventNamespace(),function(t,e){n.is_native!==!1||e||(n.is_native=!0,window.clearInterval(o._interval),o._interval=null),i.trigger("location-changed")}),f&&!i.disable_push_state&&(t(window).bind("popstate."+this.app.eventNamespace(),function(t){i.trigger("location-changed")}),t(document).delegate("a","click.history-"+this.app.eventNamespace(),function(t){if(!(t.isDefaultPrevented()||t.metaKey||t.ctrlKey)){var r=o.fullPath(this),a=this.hostname?this.hostname:function(t){var e=document.createElement("a");return e.href=t.href,e.hostname}(this);return a==window.location.hostname&&i.lookupRoute("get",r)&&e.targetIsThisWindow(t,"a")?(t.preventDefault(),n.setLocation(r),!1):void 0}})),o._bindings||(o._bindings=0),o._bindings++},unbind:function(){t(window).unbind("hashchange."+this.app.eventNamespace()),t(window).unbind("popstate."+this.app.eventNamespace()),t(document).undelegate("a","click.history-"+this.app.eventNamespace()),e.DefaultLocationProxy._bindings--,e.DefaultLocationProxy._bindings<=0&&(window.clearInterval(e.DefaultLocationProxy._interval),e.DefaultLocationProxy._interval=null)},getLocation:function(){return e.DefaultLocationProxy.fullPath(window.location)},setLocation:function(t){if(/^([^#\/]|$)/.test(t)&&(t=f&&!this.app.disable_push_state?"/"+t:"#!/"+t),t!=this.getLocation()){if(!f||this.app.disable_push_state||!/^\//.test(t))return window.location=t;history.pushState({path:t},window.title,t),this.app.trigger("location-changed")}},_startPolling:function(n){var i=this;if(!e.DefaultLocationProxy._interval){n||(n=10);var o=function(){var n=i.getLocation();"undefined"!=typeof e.DefaultLocationProxy._last_location&&n==e.DefaultLocationProxy._last_location||window.setTimeout(function(){t(window).trigger("hashchange",[!0])},0),e.DefaultLocationProxy._last_location=n};o(),e.DefaultLocationProxy._interval=window.setInterval(o,n)}}}),e.Application=function(t){var n=this;this.routes={},this.listeners=new e.Object({}),this.arounds=[],this.befores=[],this.namespace=(new Date).getTime()+"-"+parseInt(1e3*Math.random(),10),this.context_prototype=function(){e.EventContext.apply(this,arguments)},this.context_prototype.prototype=new e.EventContext,a(t)&&t.apply(this,[this]),this._location_proxy||this.setLocationProxy(new e.DefaultLocationProxy(this,this.run_interval_every)),this.debug&&this.bindToAllEvents(function(t,e){n.log(n.toString(),t.cleaned_type,e||{})})},e.Application.prototype=t.extend({},e.Object.prototype,{ROUTE_VERBS:["get","post","put","delete"],APP_EVENTS:["run","unload","lookup-route","run-route","route-found","event-context-before","event-context-after","changed","error","check-form-submission","redirect","location-changed"],_last_route:null,_location_proxy:null,_running:!1,element_selector:"body",debug:!1,raise_errors:!1,run_interval_every:50,disable_push_state:!1,template_engine:null,toString:function(){return"Sammy.Application:"+this.element_selector},$element:function(e){return e?t(this.element_selector).find(e):t(this.element_selector)},use:function(){var t=r(arguments),n=t.shift(),i=n||"";try{t.unshift(this),"string"==typeof n&&(i="Sammy."+n,n=e[n]),n.apply(this,t)}catch(t){"undefined"==typeof n?this.error("Plugin Error: called use() but plugin ("+i.toString()+") is not defined",t):a(n)?this.error("Plugin Error",t):this.error("Plugin Error: called use() but '"+i.toString()+"' is not a function",t)}return this},setLocationProxy:function(t){var e=this._location_proxy;this._location_proxy=t,this.isRunning()&&(e&&e.unbind(),this._location_proxy.bind())},log:function(){e.log.apply(e,Array.prototype.concat.apply([this.element_selector],arguments))},route:function(e,o){var r,s,u=this,c=[],l=Array.prototype.slice.call(arguments,2);if(0===l.length&&a(o)&&(l=[o],o=e,e="any"),e=e.toLowerCase(),o.constructor==String){for(i.lastIndex=0;null!==(s=i.exec(o));)c.push(s[1]);o=new RegExp(o.replace(i,n)+"$")}return t.each(l,function(t,e){"string"==typeof e&&(l[t]=u[e])}),r=function(t){var e={verb:t,path:o,callback:l,param_names:c};u.routes[t]=u.routes[t]||[],u.routes[t].push(e)},"any"===e?t.each(this.ROUTE_VERBS,function(t,e){r(e)}):r(e),this},get:d("get"),post:d("post"),put:d("put"),del:d("delete"),any:d("any"),mapRoutes:function(e){var n=this;return t.each(e,function(t,e){n.route.apply(n,e)}),this},eventNamespace:function(){return["sammy-app",this.namespace].join("-")},bind:function(t,e,n){var i=this;"undefined"==typeof n&&(n=e);var o=function(){var t,e,o;t=arguments[0],o=arguments[1],o&&o.context?(e=o.context,delete o.context):e=new i.context_prototype(i,"bind",t.type,o,t.target),t.cleaned_type=t.type.replace(i.eventNamespace(),""),n.apply(e,[t,o])};return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(o),this.isRunning()&&this._listen(t,o),this},trigger:function(t,e){return this.$element().trigger([t,this.eventNamespace()].join("."),[e]),this},refresh:function(){return this.last_location=null,this.trigger("location-changed"),this},before:function(t,e){return a(t)&&(e=t,t={}),this.befores.push([t,e]),this},after:function(t){return this.bind("event-context-after",t)},around:function(t){return this.arounds.push(t),this},onComplete:function(t){return this._onComplete=t,this},isRunning:function(){return this._running},helpers:function(e){return t.extend(this.context_prototype.prototype,e),this},helper:function(t,e){return this.context_prototype.prototype[t]=e,this},run:function(n){if(this.isRunning())return!1;var i=this;return t.each(this.listeners.toHash(),function(e,n){t.each(n,function(t,n){i._listen(e,n)})}),this.trigger("run",{start_url:n}),this._running=!0,this.last_location=null,/\#(.+)/.test(this.getLocation())||"undefined"==typeof n||this.setLocation(n),this._checkLocation(),this._location_proxy.bind(),this.bind("location-changed",function(){i._checkLocation()}),this.bind("submit",function(n){if(!e.targetIsThisWindow(n,"form"))return!0;var o=i._checkFormSubmission(t(n.target).closest("form"));return o===!1&&n.preventDefault()}),t(window).bind("unload",function(){i.unload()}),this.trigger("changed")},unload:function(){if(!this.isRunning())return!1;var e=this;return this.trigger("unload"),this._location_proxy.unbind(),this.$element().unbind("submit").removeClass(e.eventNamespace()),t.each(this.listeners.toHash(),function(n,i){t.each(i,function(t,i){e._unlisten(n,i)})}),this._running=!1,this},destroy:function(){return this.unload(),delete e.apps[this.element_selector],this},bindToAllEvents:function(e){var n=this;return t.each(this.APP_EVENTS,function(t,i){n.bind(i,e)}),t.each(this.listeners.keys(!0),function(i,o){t.inArray(o,n.APP_EVENTS)==-1&&n.bind(o,e)}),this},routablePath:function(t){return t.replace(o,"")},lookupRoute:function(t,e){var n,i,o=this,r=!1,a=0;if("undefined"!=typeof this.routes[t])for(n=this.routes[t].length;a<n;a++)if(i=this.routes[t][a],o.routablePath(e).match(i.path)){r=i;break}return r},runRoute:function(e,n,i,o){var r,a,s,u,l,h,d,p,f=this,g=this.lookupRoute(e,n);if(this.debug&&this.log("runRoute",[e,n].join(" ")),this.trigger("run-route",{verb:e,path:n,params:i}),"undefined"==typeof i&&(i={}),t.extend(i,this._parseQueryString(n)),g){this.trigger("route-found",{route:g}),null!==(d=g.path.exec(this.routablePath(n)))&&(d.shift(),t.each(d,function(t,e){g.param_names[t]?i[g.param_names[t]]=c(e):(i.splat||(i.splat=[]),i.splat.push(c(e)))})),r=new this.context_prototype(this,e,n,i,o),s=this.arounds.slice(0),u=this.befores.slice(0),h=[r],i.splat&&(h=h.concat(i.splat)),a=function(){for(var t,e,n;u.length>0;)if(l=u.shift(),f.contextMatchesOptions(r,l[0])&&(t=l[1].apply(r,[r]),t===!1))return!1;return f.last_route=g,r.trigger("event-context-before",{context:r}),"function"==typeof g.callback&&(g.callback=[g.callback]),g.callback&&g.callback.length&&(e=-1,n=function(){e++,g.callback[e]?t=g.callback[e].apply(r,h):f._onComplete&&_typeof("function"===f._onComplete)&&f._onComplete(r)},h.push(n),n()),r.trigger("event-context-after",{context:r}),t},t.each(s.reverse(),function(t,e){var n=a;a=function(){return e.apply(r,[n])}});try{p=a()}catch(t){this.error(["500 Error",e,n].join(" "),t)}return p}return this.notFound(e,n)},contextMatchesOptions:function(e,n,i){var o=n;if(("string"==typeof o||u(o))&&(o={path:o}),"undefined"==typeof i&&(i=!0),t.isEmptyObject(o))return!0;if(s(o.path)){var r,a,c,l;for(r=[],a=0,l=o.path.length;a<l;a+=1)c=t.extend({},o,{path:o.path[a]}),r.push(this.contextMatchesOptions(e,c));var h=t.inArray(!0,r)>-1;return i?h:!h}if(o.only)return this.contextMatchesOptions(e,o.only,!0);if(o.except)return this.contextMatchesOptions(e,o.except,!1);var d=!0,p=!0;return o.path&&(u(o.path)||(o.path=new RegExp(o.path.toString()+"$")),d=o.path.test(e.path)),o.verb&&(p="string"==typeof o.verb?o.verb===e.verb:o.verb.indexOf(e.verb)>-1),i?p&&d:!(p&&d)},getLocation:function(){return this._location_proxy.getLocation()},setLocation:function(t){return this._location_proxy.setLocation(t)},swap:function(t,e){var n=this.$element().html(t);return a(e)&&e(t),n},templateCache:function(t,e){return"undefined"!=typeof e?p[t]=e:p[t]},clearTemplateCache:function(){return p={}},notFound:function(t,e){var n=this.error(["404 Not Found",t,e].join(" "));return"get"!==t||n},error:function(t,e){if(e||(e=new Error),e.message=[t,e.message].join(" "),this.trigger("error",{message:e.message,error:e}),this.raise_errors)throw e;this.log(e.message,e)},_checkLocation:function(){var t,e;return t=this.getLocation(),this.last_location&&"get"==this.last_location[0]&&this.last_location[1]==t||(this.last_location=["get",t],e=this.runRoute("get",t)),e},_getFormVerb:function(e){var n,i,o=t(e);return i=o.find('input[name="_method"]'),i.length>0&&(n=i.val()),n||(n=o[0].getAttribute("method")),n&&""!==n||(n="get"),t.trim(n.toString().toLowerCase())},_checkFormSubmission:function(e){var n,i,o,r,a;return this.trigger("check-form-submission",{form:e}),n=t(e),i=n.attr("action")||"",o=this._getFormVerb(n),this.debug&&this.log("_checkFormSubmission",n,i,o),"get"===o?(r=this._serializeFormParams(n),""!==r&&(i+="?"+r),this.setLocation(i),a=!1):(r=t.extend({},this._parseFormParams(n)),a=this.runRoute(o,i,r,e.get(0))),"undefined"!=typeof a&&a},_serializeFormParams:function(t){var e,n="",i=t.serializeArray();if(i.length>0)for(n=this._encodeFormPair(i[0].name,i[0].value),e=1;e<i.length;e++)n=n+"&"+this._encodeFormPair(i[e].name,i[e].value);return n},_encodeFormPair:function(t,e){return l(t)+"="+l(e)},_parseFormParams:function(t){var e,n={},i=t.serializeArray();for(e=0;e<i.length;e++)n=this._parseParamPair(n,i[e].name,i[e].value);return n},_parseQueryString:function(t){var e,n,i,r,a={};if(e=t.match(o),e&&e[1])for(n=e[1].split("&"),r=0;r<n.length;r++)i=n[r].split("="),a=this._parseParamPair(a,c(i[0]),c(i[1]||""));return a},_parseParamPair:function(t,e,n){return"undefined"!=typeof t[e]?s(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n,t},_listen:function(t,e){return this.$element().bind([t,this.eventNamespace()].join("."),e)},_unlisten:function(t,e){return this.$element().unbind([t,this.eventNamespace()].join("."),e)}}),e.RenderContext=function(t){this.event_context=t,this.callbacks=[],this.previous_content=null,this.content=null,this.next_engine=!1,this.waiting=!1},e.RenderContext.prototype=t.extend({},e.Object.prototype,{then:function(t){if(!a(t)){if(!("string"==typeof t&&t in this.event_context))return this;var e=this.event_context[t];t=function(t){return e.apply(this.event_context,[t])}}var n=this;return this.waiting?this.callbacks.push(t):(this.wait(),window.setTimeout(function(){var e=t.apply(n,[n.content,n.previous_content]);e!==!1&&n.next(e)},0)),this},wait:function(){this.waiting=!0},next:function(t){this.waiting=!1,"undefined"!=typeof t&&(this.previous_content=this.content,this.content=t),this.callbacks.length>0&&this.then(this.callbacks.shift())},load:function(e,n,i){var o=this;return this.then(function(){var r,s,u;return a(n)?(i=n,n={}):n=t.extend({},n),i&&this.then(i),"string"==typeof e?(u=e.match(/\.json(\?|$)/)||n.json,r=u?n.cache===!0:n.cache!==!1,o.next_engine=o.event_context.engineFor(e),delete n.cache,delete n.json,n.engine&&(o.next_engine=n.engine,delete n.engine),r&&(s=this.event_context.app.templateCache(e))?s:(this.wait(),t.ajax(t.extend({url:e,data:{},dataType:u?"json":"text",type:"get",success:function(t){r&&o.event_context.app.templateCache(e,t),o.next(t)}},n)),!1)):e.nodeType?e.innerHTML:e.selector?(o.next_engine=e.attr("data-engine"),n.clone===!1?e.remove()[0].innerHTML.toString():e[0].innerHTML.toString()):void 0})},loadPartials:function(t){var e;if(t){this.partials=this.partials||{};for(e in t)!function(e,n){e.load(t[n]).then(function(t){this.partials[n]=t})}(this,e)}return this},render:function(t,e,n,i){return a(t)&&!e?this.then(t):(a(e)?(i=n,n=e,e=null):n&&!a(n)&&(i=n,n=null),this.loadPartials(i).load(t).interpolate(e,t).then(n))},partial:function(t,e,n,i){return a(n)?this.render(t,e,i).swap(n):a(e)?this.render(t,{},n).swap(e):this.render(t,e,n).swap()},send:function(){var t=this,e=r(arguments),n=e.shift();return s(e[0])&&(e=e[0]),this.then(function(i){return e.push(function(e){t.next(e)}),t.wait(),n.apply(n,e),!1})},collect:function(e,n,i){var o=this,r=function(){a(e)&&(n=e,e=this.content);var i=[],r=!1;return t.each(e,function(t,e){var a=n.apply(o,[t,e]);return a.jquery&&1==a.length&&(a=a[0],r=!0),i.push(a),a}),r?i:i.join("")};return i?r():this.then(r)},renderEach:function(e,n,i,o){return s(n)&&(o=i,i=n,n=null),this.load(e).then(function(r){var a=this;return i||(i=s(this.previous_content)?this.previous_content:[]),o?void t.each(i,function(t,i){var s={},u=this.next_engine||e;n?s[n]=i:s=i,o(i,a.event_context.interpolate(r,s,u))}):this.collect(i,function(t,i){var o={},a=this.next_engine||e;return n?o[n]=i:o=i,this.event_context.interpolate(r,o,a)},!0)})},interpolate:function(t,e,n){var i=this;return this.then(function(o,r){!t&&r&&(t=r),this.next_engine&&(e=this.next_engine,this.next_engine=!1);var a=i.event_context.interpolate(o,t,e,this.partials);return n?r+a:a})},swap:function(t){return this.then(function(e){return this.event_context.swap(e,t),e}).trigger("changed",{})},appendTo:function(e){return this.then(function(n){t(e).append(n)}).trigger("changed",{})},prependTo:function(e){return this.then(function(n){t(e).prepend(n)}).trigger("changed",{})},replace:function(e){return this.then(function(n){t(e).html(n)}).trigger("changed",{})},trigger:function(t,e){return this.then(function(n){return"undefined"==typeof e&&(e={content:n}),this.event_context.trigger(t,e),n})}}),e.EventContext=function(t,n,i,o,r){this.app=t,this.verb=n,this.path=i,this.params=new e.Object(o),this.target=r},e.EventContext.prototype=t.extend({},e.Object.prototype,{$element:function(){return this.app.$element(r(arguments).shift())},engineFor:function(t){var e,n=this;return a(t)?t:(t=(t||n.app.template_engine).toString(),(e=t.match(/\.([^\.\?\#]+)(\?|$)/))&&(t=e[1]),t&&a(n[t])?n[t]:n.app.template_engine?this.engineFor(n.app.template_engine):function(t,e){return t})},interpolate:function(t,e,n,i){return this.engineFor(n).apply(this,[t,e,i])},render:function(t,n,i,o){return new e.RenderContext(this).render(t,n,i,o)},renderEach:function(t,n,i,o){return new e.RenderContext(this).renderEach(t,n,i,o)},load:function(t,n,i){return new e.RenderContext(this).load(t,n,i)},loadPartials:function(t){return new e.RenderContext(this).loadPartials(t)},partial:function(t,n,i,o){return new e.RenderContext(this).partial(t,n,i,o)},send:function(){var t=new e.RenderContext(this);return t.send.apply(t,arguments)},redirect:function(){var e,n=r(arguments),i=this.app.getLocation(),o=n.length;if(o>1){for(var a=0,s=[],u=[],c={},l=!1;a<o;a++)"string"==typeof n[a]?s.push(n[a]):(t.extend(c,n[a]),l=!0);if(e=s.join("/"),l){for(var h in c)u.push(this.app._encodeFormPair(h,c[h]));e+="?"+u.join("&")}}else e=n[0];this.trigger("redirect",{to:e}),this.app.last_location=[this.verb,this.path],this.app.setLocation(e),new RegExp(e).test(i)&&this.app.trigger("location-changed")},trigger:function(t,e){return"undefined"==typeof e&&(e={}),e.context||(e.context=this),this.app.trigger(t,e)},eventNamespace:function(){return this.app.eventNamespace()},swap:function(t,e){return this.app.swap(t,e)},notFound:function(){return this.app.notFound(this.verb,this.path)},json:function(e){return t.parseJSON(e)},toString:function(){return"Sammy.EventContext: "+[this.verb,this.path,this.params].join(" ")}}),e});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Util=function(){function t(){_classCallCheck(this,t),this.main=document.querySelector(".main"),this.jsSrcHash={"https://platform.twitter.com/widgets.js":!1,"/js/plugins/jquery.cycle.lite.js":!1,"/js/plugins/jquery.listCarousel.js":!1,"/js/plugins/jquery.star_bg.js":!1,"/js/stars.js":!1,"/js/ballPit.js":!1}}return _createClass(t,[{key:"require",value:function(t,e){var n=this;this.jsSrcHash[t]?e(!0):$.ajax({url:t,dataType:"script",success:function(i){n.jsSrcHash[t]=!0,e(!1)}})}},{key:"getYear",value:function(){return(new Date).getFullYear()}},{key:"resetModel",value:function(){this.main.innerHTML="","ballPit"===jw.Routing.lastPg?jw.BallPit.deInit():"stars"===jw.Routing.lastPg&&jw.StarryBg.deInit(),document.body.className="",document.title="";var t=document.head.querySelector("meta[name=description]"),e=document.head.querySelector("meta[name=keywords]"),n=document.head.querySelector("meta[name=robots]");t&&document.head.removeChild(t),e&&document.head.removeChild(e),n&&document.head.removeChild(n);var i=window.location.hash;if("undefined"==typeof i||0!==i.indexOf("#playground")){var o=$(".dPlaygroundNav");o.is(":visible")&&o.slideUp()}}},{key:"addMeta",value:function(t,e){var n=document.createElement("meta");n.setAttribute("name",t),n.setAttribute("content",e),document.head.appendChild(n)}}]),t}();jw.Util=new Util;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),AboutModel=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"render",value:function(t){jw.Util.resetModel(),t.load("/about.html",function(){document.getElementById("dateYear").textContent=jw.Util.getYear()}).swap(),document.title="About",document.body.classList.add("about")}}]),t}();jw.AboutModel=new AboutModel;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),GamesModel=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"render",value:function(t,e){jw.Util.resetModel(),"index"===e&&(t.load("/games/index.html",function(t){jw.Util.require("/js/plugins/jquery.listCarousel.js",function(){return $("ul").listCarousel()})}).swap(function(){setTimeout(function(){jw.Main.fixColRHeight($("#divDefault").height())},10)}),document.title="Games",document.body.classList.add("absHover","games"))}}]),t}();jw.GamesModel=new GamesModel;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),HomeModel=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"render",value:function(t){jw.Util.resetModel(),t.load("/home.html",function(t){jw.Util.require("https://platform.twitter.com/widgets.js",function(t){twttr.widgets.load()})}).swap(),document.title="Jon Wiedmann",jw.Util.addMeta("description","Jon Wiedmann's personal website.  This site is set up to showcase some of my technical ability.  This site has information regarding my work experience and hobbies."),jw.Util.addMeta("keywords","Jon Wiedmann, Web Developer, PHP, HTML5, CSS, jQuery, Javascript, sammy.js"),document.body.classList.add("home")}}]),t}();jw.HomeModel=new HomeModel;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),PlaygroundModel=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"render",value:function(t,e){switch(jw.Util.resetModel(),this.ctx=t,e){case"index":this.renderIndex();break;case"ballPit":this.renderBallPit();break;case"stars":this.renderStars();break;case"bCube":this.renderBreakdancingCube()}var n=$(".dPlaygroundNav");n.is(":visible")||n.slideDown()}},{key:"renderIndex",value:function(){this.ctx.load("/playground/index.html",function(t){}).swap(),document.title="Playground",jw.Util.addMeta("description","An playground area for web tech demos."),jw.Util.addMeta("keywords","canvas, html5"),document.body.classList.add("playground","playInner")}},{key:"renderBallPit",value:function(){this.ctx.load("/playground/ballPit.html",function(t){jw.Util.require("/js/ballPit.js",function(){return jw.BallPit.init()})}).swap(),document.title="Ball Pit | Playground",jw.Util.addMeta("description","A canvas example showcasing a ball pit."),jw.Util.addMeta("keywords","canvas, html5"),document.body.classList.add("playground","playInner","nav3")}},{key:"renderStars",value:function(){this.ctx.load("/playground/stars.html",function(t){jw.Util.require("/js/plugins/jquery.star_bg.js",function(){jw.Util.require("/js/stars.js",function(t){return jw.StarryBg.init()})})}).swap(),document.title="Starry Background | Playground",jw.Util.addMeta("description","A canvas example showcasing a starry background."),jw.Util.addMeta("keywords","canvas, html5"),document.body.classList.add("playground","playInner","nav2")}},{key:"renderBreakdancingCube",value:function(){this.ctx.load("/playground/breakdancing-cube.html",function(t){document.getElementById("cube").addEventListener("click",function(t){return t.preventDefault()})}).swap(),document.title="Breakdancing Cube | Playground",jw.Util.addMeta("description","Pure CSS3 animation demo."),jw.Util.addMeta("keywords","CSS3, HTML5"),document.body.classList.add("playground","playInner","bDancingCube","nav1")}}]),t}();jw.PlaygroundModel=new PlaygroundModel;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),PortfolioModel=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"render",value:function(t,e){jw.Util.resetModel(),"index"===e&&(t.load("/portfolio/index.html",function(t){jw.Util.require("/js/plugins/jquery.listCarousel.js",function(){return $("ul").listCarousel()})}).swap(),document.title="Portfolio",document.body.classList.add("portfolio","absHover"))}}]),t}();jw.PortfolioModel=new PortfolioModel;var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Routing=function(){function t(){_classCallCheck(this,t),this.lastPg=null,this.config()}return _createClass(t,[{key:"run",value:function(){this.app.run()}},{key:"config",value:function(){this.app=$.sammy(".main",function(){this.route("get","/",function(){jw.HomeModel.render(this)}),this.route("get","#home",function(){jw.HomeModel.render(this),jw.Routing.lastPg="home"}),this.route("get","#about",function(){jw.AboutModel.render(this),jw.Routing.lastPg="about"}),this.route("get","#contact",function(){jw.ContactModel.render(this),jw.Routing.lastPg="contact"}),this.route("get","#games",function(){jw.GamesModel.render(this,"index"),jw.Routing.lastPg="games/index"}),this.route("get","#playground",function(){jw.PlaygroundModel.render(this,"index"),jw.Routing.lastPg="playground/index"}),this.route("get","#playground/ballPit",function(){jw.PlaygroundModel.render(this,"ballPit"),jw.Routing.lastPg="ballPit"}),this.route("get","#playground/breakdancing-cube",function(){jw.PlaygroundModel.render(this,"bCube"),jw.Routing.lastPg="bCube"}),this.route("get","#playground/starry-background",function(){jw.PlaygroundModel.render(this,"stars"),jw.Routing.lastPg="stars"}),this.route("get","#portfolio",function(){jw.PortfolioModel.render(this,"index"),jw.Routing.lastPg="portfolio/index"})})}}]),t}(),_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Main=function(){function t(){function e(){document.querySelector("aside").classList.remove("active"),n=!1,document.body.removeEventListener("click",e)}_classCallCheck(this,t),jw.Routing=new Routing,jw.Routing.run(),window.addEventListener("resize",this.onWindowResize),document.querySelector("header a").addEventListener("click",function(){document.querySelector(".main").style.height="auto"});var n=!1;document.querySelector(".menu").addEventListener("click",function(t){t.preventDefault(),n?e():(document.querySelector("aside").classList.add("active"),n=!0,setTimeout(function(){document.body.addEventListener("click",e)},0))})}return _createClass(t,[{key:"fixColRHeight",value:function(t){var e=document.querySelector(".main"),n=document.querySelector(".colL").clientHeight;window.innerWidth<=800?e.style.height="auto":window.innerWidth<=1265?e.style.height=n+t+158+"px":e.style.height=n>t?n+"px":t+158+"px"}},{key:"onWindowResize",value:function(){var t=$(".colR > div:visible").height();this.fixColRHeight(t)}}]),t}();$(function(){jw.Main=new Main});