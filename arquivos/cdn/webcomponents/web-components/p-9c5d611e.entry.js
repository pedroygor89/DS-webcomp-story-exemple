import{r as t,c as i,h as s,g as n}from"./p-3b8a929f.js";import{c as h}from"./p-d23b9255.js";var e=h((function(t){
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(i,s,n,h){var e,r=["","webkit","Moz","MS","ms","o"],o=s.createElement("div"),u=Math.round,c=Math.abs,a=Date.now;function f(t,i,s){return setTimeout(g(t,s),i)}function l(t,i,s){return!!Array.isArray(t)&&(v(t,s[i],s),!0)}function v(t,i,s){var n;if(t)if(t.forEach)t.forEach(i,s);else if(t.length!==h)for(n=0;n<t.length;)i.call(s,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&i.call(s,t[n],n,t)}function p(t,s,n){var h="DEPRECATED METHOD: "+s+"\n"+n+" AT \n";return function(){var s=new Error("get-stack-trace"),n=s&&s.stack?s.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",e=i.console&&(i.console.warn||i.console.log);return e&&e.call(i.console,h,n),t.apply(this,arguments)}}e="function"!=typeof Object.assign?function(t){if(t===h||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),s=1;s<arguments.length;s++){var n=arguments[s];if(n!==h&&null!==n)for(var e in n)n.hasOwnProperty(e)&&(i[e]=n[e])}return i}:Object.assign;var d=p((function(t,i,s){for(var n=Object.keys(i),e=0;e<n.length;)(!s||s&&t[n[e]]===h)&&(t[n[e]]=i[n[e]]),e++;return t}),"extend","Use `assign`."),m=p((function(t,i){return d(t,i,!0)}),"merge","Use `assign`.");function T(t,i,s){var n,h=i.prototype;(n=t.prototype=Object.create(h)).constructor=t,n._super=h,s&&e(n,s)}function g(t,i){return function(){return t.apply(i,arguments)}}function _(t,i){return"function"==typeof t?t.apply(i&&i[0]||h,i):t}function E(t,i){return t===h?i:t}function I(t,i,s){v(A(i),(function(i){t.addEventListener(i,s,!1)}))}function w(t,i,s){v(A(i),(function(i){t.removeEventListener(i,s,!1)}))}function y(t,i){for(;t;){if(t==i)return!0;t=t.parentNode}return!1}function b(t,i){return t.indexOf(i)>-1}function A(t){return t.trim().split(/\s+/g)}function M(t,i,s){if(t.indexOf&&!s)return t.indexOf(i);for(var n=0;n<t.length;){if(s&&t[n][s]==i||!s&&t[n]===i)return n;n++}return-1}function C(t){return Array.prototype.slice.call(t,0)}function D(t,i,s){for(var n=[],h=[],e=0;e<t.length;){var r=i?t[e][i]:t[e];M(h,r)<0&&n.push(t[e]),h[e]=r,e++}return s&&(n=i?n.sort((function(t,s){return t[i]>s[i]})):n.sort()),n}function R(t,i){for(var s,n,e=i[0].toUpperCase()+i.slice(1),o=0;o<r.length;){if((n=(s=r[o])?s+e:i)in t)return n;o++}return h}var N=1;function O(t){var s=t.ownerDocument||t;return s.defaultView||s.parentWindow||i}var S="ontouchstart"in i,x=R(i,"PointerEvent")!==h,P=S&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),$="touch",k="mouse",L=["x","y"],z=["clientX","clientY"];function j(t,i){var s=this;this.manager=t,this.callback=i,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(i){_(t.options.enable,[t])&&s.handler(i)},this.init()}function F(t,i,s){var n=s.pointers.length,e=s.changedPointers.length,r=1&i&&n-e==0,o=12&i&&n-e==0;s.isFirst=!!r,s.isFinal=!!o,r&&(t.session={}),s.eventType=i,function(t,i){var s=t.session,n=i.pointers,e=n.length;s.firstInput||(s.firstInput=U(i)),e>1&&!s.firstMultiple?s.firstMultiple=U(i):1===e&&(s.firstMultiple=!1);var r=s.firstInput,o=s.firstMultiple,u=o?o.center:r.center,f=i.center=q(n);i.timeStamp=a(),i.deltaTime=i.timeStamp-r.timeStamp,i.angle=G(u,f),i.distance=X(u,f),function(t,i){var s=i.center,n=t.offsetDelta||{},h=t.prevDelta||{},e=t.prevInput||{};1!==i.eventType&&4!==e.eventType||(h=t.prevDelta={x:e.deltaX||0,y:e.deltaY||0},n=t.offsetDelta={x:s.x,y:s.y}),i.deltaX=h.x+(s.x-n.x),i.deltaY=h.y+(s.y-n.y)}(s,i),i.offsetDirection=H(i.deltaX,i.deltaY);var l,v,p=W(i.deltaTime,i.deltaX,i.deltaY);i.overallVelocityX=p.x,i.overallVelocityY=p.y,i.overallVelocity=c(p.x)>c(p.y)?p.x:p.y,i.scale=o?(l=o.pointers,X((v=n)[0],v[1],z)/X(l[0],l[1],z)):1,i.rotation=o?function(t,i){return G(i[1],i[0],z)+G(t[1],t[0],z)}(o.pointers,n):0,i.maxPointers=s.prevInput?i.pointers.length>s.prevInput.maxPointers?i.pointers.length:s.prevInput.maxPointers:i.pointers.length,function(t,i){var s,n,e,r,o=t.lastInterval||i,u=i.timeStamp-o.timeStamp;if(8!=i.eventType&&(u>25||o.velocity===h)){var a=i.deltaX-o.deltaX,f=i.deltaY-o.deltaY,l=W(u,a,f);n=l.x,e=l.y,s=c(l.x)>c(l.y)?l.x:l.y,r=H(a,f),t.lastInterval=i}else s=o.velocity,n=o.velocityX,e=o.velocityY,r=o.direction;i.velocity=s,i.velocityX=n,i.velocityY=e,i.direction=r}(s,i);var d=t.element;y(i.srcEvent.target,d)&&(d=i.srcEvent.target),i.target=d}(t,s),t.emit("hammer.input",s),t.recognize(s),t.session.prevInput=s}function U(t){for(var i=[],s=0;s<t.pointers.length;)i[s]={clientX:u(t.pointers[s].clientX),clientY:u(t.pointers[s].clientY)},s++;return{timeStamp:a(),pointers:i,center:q(i),deltaX:t.deltaX,deltaY:t.deltaY}}function q(t){var i=t.length;if(1===i)return{x:u(t[0].clientX),y:u(t[0].clientY)};for(var s=0,n=0,h=0;h<i;)s+=t[h].clientX,n+=t[h].clientY,h++;return{x:u(s/i),y:u(n/i)}}function W(t,i,s){return{x:i/t||0,y:s/t||0}}function H(t,i){return t===i?1:c(t)>=c(i)?t<0?2:4:i<0?8:16}function X(t,i,s){s||(s=L);var n=i[s[0]]-t[s[0]],h=i[s[1]]-t[s[1]];return Math.sqrt(n*n+h*h)}function G(t,i,s){return s||(s=L),180*Math.atan2(i[s[1]]-t[s[1]],i[s[0]]-t[s[0]])/Math.PI}j.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(O(this.element),this.evWin,this.domHandler)}};var Y={mousedown:1,mousemove:2,mouseup:4},Z="mousedown",B="mousemove mouseup";function V(){this.evEl=Z,this.evWin=B,this.pressed=!1,j.apply(this,arguments)}T(V,j,{handler:function(t){var i=Y[t.type];1&i&&0===t.button&&(this.pressed=!0),2&i&&1!==t.which&&(i=4),this.pressed&&(4&i&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[t],changedPointers:[t],pointerType:k,srcEvent:t}))}});var J={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},K={2:$,3:"pen",4:k,5:"kinect"},Q="pointerdown",tt="pointermove pointerup pointercancel";function it(){this.evEl=Q,this.evWin=tt,j.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}i.MSPointerEvent&&!i.PointerEvent&&(Q="MSPointerDown",tt="MSPointerMove MSPointerUp MSPointerCancel"),T(it,j,{handler:function(t){var i=this.store,s=!1,n=t.type.toLowerCase().replace("ms",""),h=J[n],e=K[t.pointerType]||t.pointerType,r=e==$,o=M(i,t.pointerId,"pointerId");1&h&&(0===t.button||r)?o<0&&(i.push(t),o=i.length-1):12&h&&(s=!0),o<0||(i[o]=t,this.callback(this.manager,h,{pointers:i,changedPointers:[t],pointerType:e,srcEvent:t}),s&&i.splice(o,1))}});var st={touchstart:1,touchmove:2,touchend:4,touchcancel:8},nt="touchstart",ht="touchstart touchmove touchend touchcancel";function et(){this.evTarget=nt,this.evWin=ht,this.started=!1,j.apply(this,arguments)}function rt(t,i){var s=C(t.touches),n=C(t.changedTouches);return 12&i&&(s=D(s.concat(n),"identifier",!0)),[s,n]}T(et,j,{handler:function(t){var i=st[t.type];if(1===i&&(this.started=!0),this.started){var s=rt.call(this,t,i);12&i&&s[0].length-s[1].length==0&&(this.started=!1),this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:t})}}});var ot={touchstart:1,touchmove:2,touchend:4,touchcancel:8},ut="touchstart touchmove touchend touchcancel";function ct(){this.evTarget=ut,this.targetIds={},j.apply(this,arguments)}function at(t,i){var s=C(t.touches),n=this.targetIds;if(3&i&&1===s.length)return n[s[0].identifier]=!0,[s,s];var h,e,r=C(t.changedTouches),o=[],u=this.target;if(e=s.filter((function(t){return y(t.target,u)})),1===i)for(h=0;h<e.length;)n[e[h].identifier]=!0,h++;for(h=0;h<r.length;)n[r[h].identifier]&&o.push(r[h]),12&i&&delete n[r[h].identifier],h++;return o.length?[D(e.concat(o),"identifier",!0),o]:void 0}function ft(){j.apply(this,arguments);var t=g(this.handler,this);this.touch=new ct(this.manager,t),this.mouse=new V(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function lt(t,i){1&t?(this.primaryTouch=i.changedPointers[0].identifier,vt.call(this,i)):12&t&&vt.call(this,i)}function vt(t){var i=t.changedPointers[0];if(i.identifier===this.primaryTouch){var s={x:i.clientX,y:i.clientY};this.lastTouches.push(s);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(s);t>-1&&n.splice(t,1)}),2500)}}function pt(t){for(var i=t.srcEvent.clientX,s=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var h=this.lastTouches[n],e=Math.abs(i-h.x),r=Math.abs(s-h.y);if(e<=25&&r<=25)return!0}return!1}T(ct,j,{handler:function(t){var i=ot[t.type],s=at.call(this,t,i);s&&this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:t})}}),T(ft,j,{handler:function(t,i,s){var n=s.pointerType==k;if(!(n&&s.sourceCapabilities&&s.sourceCapabilities.firesTouchEvents)){if(s.pointerType==$)lt.call(this,i,s);else if(n&&pt.call(this,s))return;this.callback(t,i,s)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var dt=R(o.style,"touchAction"),mt=dt!==h,Tt="compute",gt="auto",_t="manipulation",Et="none",It="pan-x",wt="pan-y",yt=function(){if(!mt)return!1;var t={},s=i.CSS&&i.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!s||i.CSS.supports("touch-action",n)})),t}();function bt(t,i){this.manager=t,this.set(i)}bt.prototype={set:function(t){t==Tt&&(t=this.compute()),mt&&this.manager.element.style&&yt[t]&&(this.manager.element.style[dt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return v(this.manager.recognizers,(function(i){_(i.options.enable,[i])&&(t=t.concat(i.getTouchAction()))})),function(t){if(b(t,Et))return Et;var i=b(t,It),s=b(t,wt);return i&&s?Et:i||s?i?It:wt:b(t,_t)?_t:gt}(t.join(" "))},preventDefaults:function(t){var i=t.srcEvent,s=t.offsetDirection;if(this.manager.session.prevented)i.preventDefault();else{var n=this.actions,h=b(n,Et)&&!yt.none,e=b(n,wt)&&!yt["pan-y"],r=b(n,It)&&!yt["pan-x"];if(h&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;if(!r||!e)return h||e&&6&s||r&&24&s?this.preventSrc(i):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var At=32;function Mt(t){this.options=e({},this.defaults,t||{}),this.id=N++,this.manager=null,this.options.enable=E(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Ct(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function Dt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function Rt(t,i){var s=i.manager;return s?s.get(t):t}function Nt(){Mt.apply(this,arguments)}function Ot(){Nt.apply(this,arguments),this.pX=null,this.pY=null}function St(){Nt.apply(this,arguments)}function xt(){Mt.apply(this,arguments),this._timer=null,this._input=null}function Pt(){Nt.apply(this,arguments)}function $t(){Nt.apply(this,arguments)}function kt(){Mt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Lt(t,i){return(i=i||{}).recognizers=E(i.recognizers,Lt.defaults.preset),new zt(t,i)}function zt(t,i){this.options=e({},Lt.defaults,i||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new(this.options.inputClass||(x?it:P?ct:S?ft:V))(this,F),this.touchAction=new bt(this,this.options.touchAction),jt(this,!0),v(this.options.recognizers,(function(t){var i=this.add(new t[0](t[1]));t[2]&&i.recognizeWith(t[2]),t[3]&&i.requireFailure(t[3])}),this)}function jt(t,i){var s,n=t.element;n.style&&(v(t.options.cssProps,(function(h,e){s=R(n.style,e),i?(t.oldCssProps[s]=n.style[s],n.style[s]=h):n.style[s]=t.oldCssProps[s]||""})),i||(t.oldCssProps={}))}Mt.prototype={defaults:{},set:function(t){return e(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(l(t,"recognizeWith",this))return this;var i=this.simultaneous;return i[(t=Rt(t,this)).id]||(i[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return l(t,"dropRecognizeWith",this)||(t=Rt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(l(t,"requireFailure",this))return this;var i=this.requireFail;return-1===M(i,t=Rt(t,this))&&(i.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(l(t,"dropRequireFailure",this))return this;t=Rt(t,this);var i=M(this.requireFail,t);return i>-1&&this.requireFail.splice(i,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var i=this,s=this.state;function n(s){i.manager.emit(s,t)}s<8&&n(i.options.event+Ct(s)),n(i.options.event),t.additionalEvent&&n(t.additionalEvent),s>=8&&n(i.options.event+Ct(s))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=At},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var i=e({},t);if(!_(this.options.enable,[this,i]))return this.reset(),void(this.state=At);56&this.state&&(this.state=1),this.state=this.process(i),30&this.state&&this.tryEmit(i)},process:function(){},getTouchAction:function(){},reset:function(){}},T(Nt,Mt,{defaults:{pointers:1},attrTest:function(t){var i=this.options.pointers;return 0===i||t.pointers.length===i},process:function(t){var i=this.state,s=t.eventType,n=6&i,h=this.attrTest(t);return n&&(8&s||!h)?16|i:n||h?4&s?8|i:2&i?4|i:2:At}}),T(Ot,Nt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,i=[];return 6&t&&i.push(wt),24&t&&i.push(It),i},directionTest:function(t){var i=this.options,s=!0,n=t.distance,h=t.direction,e=t.deltaX,r=t.deltaY;return h&i.direction||(6&i.direction?(h=0===e?1:e<0?2:4,s=e!=this.pX,n=Math.abs(t.deltaX)):(h=0===r?1:r<0?8:16,s=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=h,s&&n>i.threshold&&h&i.direction},attrTest:function(t){return Nt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var i=Dt(t.direction);i&&(t.additionalEvent=this.options.event+i),this._super.emit.call(this,t)}}),T(St,Nt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Et]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),T(xt,Mt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[gt]},process:function(t){var i=this.options,s=t.pointers.length===i.pointers,n=t.distance<i.threshold,h=t.deltaTime>i.time;if(this._input=t,!n||!s||12&t.eventType&&!h)this.reset();else if(1&t.eventType)this.reset(),this._timer=f((function(){this.state=8,this.tryEmit()}),i.time,this);else if(4&t.eventType)return 8;return At},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=a(),this.manager.emit(this.options.event,this._input)))}}),T(Pt,Nt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Et]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),T($t,Nt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Ot.prototype.getTouchAction.call(this)},attrTest:function(t){var i,s=this.options.direction;return 30&s?i=t.overallVelocity:6&s?i=t.overallVelocityX:24&s&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&s&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&c(i)>this.options.velocity&&4&t.eventType},emit:function(t){var i=Dt(t.offsetDirection);i&&this.manager.emit(this.options.event+i,t),this.manager.emit(this.options.event,t)}}),T(kt,Mt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[_t]},process:function(t){var i=this.options,s=t.pointers.length===i.pointers,n=t.distance<i.threshold,h=t.deltaTime<i.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&h&&s){if(4!=t.eventType)return this.failTimeout();var e=!this.pTime||t.timeStamp-this.pTime<i.interval,r=!this.pCenter||X(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&e?this.count+=1:this.count=1,this._input=t,0==this.count%i.taps)return this.hasRequireFailures()?(this._timer=f((function(){this.state=8,this.tryEmit()}),i.interval,this),2):8}return At},failTimeout:function(){return this._timer=f((function(){this.state=At}),this.options.interval,this),At},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Lt.VERSION="2.0.7",Lt.defaults={domEvents:!1,touchAction:Tt,enable:!0,inputTarget:null,inputClass:null,preset:[[Pt,{enable:!1}],[St,{enable:!1},["rotate"]],[$t,{direction:6}],[Ot,{direction:6},["swipe"]],[kt],[kt,{event:"doubletap",taps:2},["tap"]],[xt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},zt.prototype={set:function(t){return e(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var i=this.session;if(!i.stopped){var s;this.touchAction.preventDefaults(t);var n=this.recognizers,h=i.curRecognizer;(!h||h&&8&h.state)&&(h=i.curRecognizer=null);for(var e=0;e<n.length;)s=n[e],2===i.stopped||h&&s!=h&&!s.canRecognizeWith(h)?s.reset():s.recognize(t),!h&&14&s.state&&(h=i.curRecognizer=s),e++}},get:function(t){if(t instanceof Mt)return t;for(var i=this.recognizers,s=0;s<i.length;s++)if(i[s].options.event==t)return i[s];return null},add:function(t){if(l(t,"add",this))return this;var i=this.get(t.options.event);return i&&this.remove(i),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(l(t,"remove",this))return this;if(t=this.get(t)){var i=this.recognizers,s=M(i,t);-1!==s&&(i.splice(s,1),this.touchAction.update())}return this},on:function(t,i){if(t!==h&&i!==h){var s=this.handlers;return v(A(t),(function(t){s[t]=s[t]||[],s[t].push(i)})),this}},off:function(t,i){if(t!==h){var s=this.handlers;return v(A(t),(function(t){i?s[t]&&s[t].splice(M(s[t],i),1):delete s[t]})),this}},emit:function(t,i){this.options.domEvents&&function(t,i){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}(t,i);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){i.type=t,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var h=0;h<n.length;)n[h](i),h++}},destroy:function(){this.element&&jt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},e(Lt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:At,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:zt,Input:j,TouchAction:bt,TouchInput:ct,MouseInput:V,PointerEventInput:it,TouchMouseInput:ft,SingleTouchInput:et,Recognizer:Mt,AttrRecognizer:Nt,Tap:kt,Pan:Ot,Swipe:$t,Pinch:St,Rotate:Pt,Press:xt,on:I,off:w,each:v,merge:m,extend:d,assign:e,inherit:T,bindFn:g,prefixed:R}),(void 0!==i?i:"undefined"!=typeof self?self:{}).Hammer=Lt,t.exports?t.exports=Lt:i.Hammer=Lt}(window,document)}));const r=class{constructor(s){t(this,s),this.onNextSlide=i(this,"nextslide",7),this.onPrevSlide=i(this,"prevslide",7),this.onUpdatePage=i(this,"updatepage",7),this.space=24,this.english=!1,this.spanish=!1,this.template_doktor=!1,this.background=!1,this.itemsdesktop=1,this.itemsmobile=1,this.gridCalc="",this.items=1,this.children=[],this.currentItem=0,this.currentPage=0,this.hasNext=!1,this.hasPrev=!1,this.isMobile=!1,this.allItems=0}onResize(t){t.stopPropagation(),this.animate(!1),this._isMobile(t.target)}_isMobile(t){this.isMobile=t.innerWidth<576,this.template_doktor&&(this.items=this.isMobile?this.itemsmobile:this.itemsdesktop)}changeSlide(t=!0){t?(this.template_doktor?(this.currentItem+=this.items,this.currentPage+=this.items):this.currentItem++,this.onUpdatePage.emit(this.currentPage++)):(this.template_doktor?(this.currentItem-=this.items,this.currentPage-=this.items):this.currentItem--,this.onUpdatePage.emit(this.currentPage--))}async next(){this.hasNext=this.template_doktor?this.currentItem+this.items<this.allItems:this.currentItem+1<this.allItems,this.hasNext&&(this.changeSlide(),this.currentPage===this.allItems&&(this.hasNext=!1),this.hasPrev=!0,this.onPrevSlide.emit(this.hasPrev),this.animate(!0)),this.onNextSlide.emit(this.hasNext)}async prev(){this.hasPrev=this.template_doktor?this.currentItem-this.items>=0:this.currentItem-1>=0,this.hasPrev&&(this.changeSlide(!1),1===this.currentPage&&(this.hasPrev=!1),this.hasNext=!0,this.onNextSlide.emit(this.hasNext),this.animate(!0)),this.onPrevSlide.emit(this.hasPrev)}animate(t=!0){t&&(this.content.style.transition="all 0.4s ease-in"),t||this.content.style.removeProperty("transition");const i=parseFloat(`${Math.ceil(this.content.getBoundingClientRect().width+this.space)}`).toFixed(2);this.content.style.transform=this.template_doktor?`translateX(${this.currentItem*(parseInt(i)/this.items)*-1}px)`:`translateX(${this.currentItem*parseInt(i)*-1}px)`}componentWillLoad(){document.body.classList.contains("template-doktor")&&(this.template_doktor=!0),this.currentPage=this.currentItem+1,this._isMobile(window);const t=document.querySelector("html").getAttribute("lang");"en-us"===t?this.english=!0:"es"===t&&(this.spanish=!0)}componentDidLoad(){const t=this.el.querySelector(".carousel__content");if(this.children=Object.assign([],t.children),this.allItems=this.children?this.children.length:0,!t)return;this.hasNext=this.allItems>1,t.children.length>0&&this.children.forEach((t=>{t.style.alignSelf="center",t.style.justifySelf="center"}));const i=e(this.el.querySelector(".carousel__content"));if(i.on("swipeleft",(()=>{this.next()})),i.on("swiperight",(()=>{this.prev()})),this.template_doktor){let t=this.el.querySelectorAll("yduqs-carousel-item").length;this.el.setAttribute("items",t.toString());let i=this.el.getAttribute("itemsdesktop"),s=this.el.getAttribute("itemsmobile");t<=parseInt(i)&&this.el.classList.add("less-cards"),t<=parseInt(s)&&this.el.classList.add("less-cards-mobile")}this.gridCalc=this.template_doktor?`repeat(${this.children.length}, calc(${100/this.items}% - ${this.items>1?this.space-this.space/this.items:0}px))`:`repeat(${this.children.length}, 100%)`}componentDidRender(){this.content&&this.content.offsetHeight&&(this.contentMinHeight=`${this.content.offsetHeight.toString()}px`)}render(){const t=this.hasPrev?"":"c-carousel-control--disabled",i=this.hasNext?"":"c-carousel-control--disabled",n=this.isMobile?"mobile":"",h=this.background?"c-carousel-background-doktor":"c-carousel-background",e=s("div",{class:"c-carousel-control c-carousel-control__left"},s("div",{class:`c-carousel-control__button ${t}`,onClick:this.prev.bind(this)},s("span",{class:"c-carousel-control__icon material-icons"},this.template_doktor?"arrow_back":"chevron_left"))),r=s("div",{class:"c-carousel-control c-carousel-control__right"},s("div",{class:`c-carousel-control__button ${i}`,onClick:this.next.bind(this)},s("span",{class:"c-carousel-control__icon material-icons"},this.template_doktor?"arrow_forward":"chevron_right"))),o=s("div",{class:`c-carousel-pages ${this.template_doktor&&"onlyMobile"}`},s("div",{class:"c-carousel-pages__content"},s("span",{class:`c-carousel-pages__icon material-icons ${t}`,onClick:this.prev.bind(this)},this.template_doktor?"arrow_back":"chevron_left"),s("span",{class:"c-carousel-pages__container"},this.currentPage," ",this.english?"out of":"de"," ",this.allItems),s("span",{class:`c-carousel-pages__icon material-icons ${i}`,onClick:this.next.bind(this)},this.template_doktor?"arrow_forward":"chevron_right")));return s("div",{class:`${h}`},s("div",{class:`c-carousel ${n}`},e,s("div",{class:"carousel show"},s("div",{ref:t=>this.content=t,class:"carousel__content",style:{"grid-template-columns":`${this.gridCalc}`,"grid-column-gap":`${this.space}px`}},s("slot",null))),r,o))}get el(){return n(this)}};export{r as yduqs_carousel}