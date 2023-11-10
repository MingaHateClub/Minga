!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new L(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=f;var h={};function v(){}function p(){}function d(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==r&&n.call(m,i)&&(g=m);var w=d.prototype=v.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;o(this,"_invoke",{value:function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=D(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function D(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,D(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,o(w,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,a=void 0,"symbol"==typeof(a=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?a:String(a)),n)}var o,a}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{G1e9:function(r,o,a){"use strict";a.d(o,"a",(function(){return f}));var i,c=a("mrSG"),u=a("8Y7J"),s=a("WH00"),f=((i=function(){function r(t){e(this,r),this.contentEvents=t}return n(r,[{key:"trigger",value:function(e,r,n){return Object(c.a)(this,void 0,void 0,t().mark((function o(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.allPassed){t.next=5;break}return t.next=3,this._moderationSuccessDialog(e,r,n);case 3:t.next=7;break;case 5:return t.next=7,this._moderationFailDialog(e,r,n);case 7:case"end":return t.stop()}}),o,this)})))}},{key:"_moderationSuccessDialog",value:function(e,r,n){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.contentEvents.emitSuccessModeration({});case 1:case"end":return t.stop()}}),e,this)})))}},{key:"_moderationFailDialog",value:function(e,r,n){return Object(c.a)(this,void 0,void 0,t().mark((function o(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.contentEvents.emitFailedModeration({contentHash:e,contextHash:r,textFailed:!n.allTextContentPassed,imageFailed:!n.allImageContentPassed,imageTextFailed:!n.allImageTextContentPassed&&n.allImageContentPassed,imageAndTextFailed:!n.allImageTextContentPassed&&!n.allImageContentPassed,tags:n.tags,imageTags:n.imageTags,emailContentSend:null}),t.next=3,new Promise((function(t){return setTimeout(t,300)}));case 3:case"end":return t.stop()}}),o,this)})))}}]),r}()).\u0275fac=function(t){return new(t||i)(u["\u0275\u0275inject"](s.a))},i.\u0275prov=u["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},uDiC:function(r,o,a){"use strict";a.d(o,"a",(function(){return d}));var i=a("mrSG"),c=a("8Y7J"),u=a("LvDl"),s=a("5km/"),f=a("6GgV"),l=a("orC8"),h=a("iELJ");function v(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return u.merge.apply(u,[t].concat(r))}var p,d=((p=function(){function r(t,n){e(this,r),this.userStorage=t,this.matDialog=n,this._pendingDraft={}}return n(r,[{key:"cancelDraft",value:function(){return Object(i.a)(this,void 0,void 0,t().mark((function e(){var r,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.matDialog.open(s.g),t.next=3,r.beforeClosed().toPromise();case 3:if("keep"!==(n=t.sent)){t.next=6;break}return t.abrupt("return","");case 6:if("discard"!==n){t.next=10;break}return t.next=9,this.clearDraft();case 9:return t.abrupt("return","");case 10:throw new Error("User abort");case 11:case"end":return t.stop()}}),e,this)})))}},{key:"getDraftType",value:function(e){return Object(i.a)(this,void 0,void 0,t().mark((function r(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=7;break}return t.next=3,this.getDraft();case 3:if(n=t.sent){t.next=6;break}throw new Error("No Challenge Response Draft found for draft type!");case 6:e=n;case 7:return t.abrupt("return",e.type);case 8:case"end":return t.stop()}}),r,this)})))}},{key:"clearDraft",value:function(){return Object(i.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.userStorage.setItem("MingaChallengeResponseDraft",null);case 2:case"end":return t.stop()}}),e,this)})))}},{key:"getDraft",value:function(){return Object(i.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.userStorage.getItem("MingaChallengeResponseDraft");case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=null;case 5:return t.abrupt("return",t.t0);case 6:case"end":return t.stop()}}),e,this)})))}},{key:"getDraftDefaulted",value:function(e,r){return Object(i.a)(this,void 0,void 0,t().mark((function n(){var o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDraft();case 2:if(o=t.sent,t.t0=!o||e&&o.ownerContextHash!=e,!t.t0){t.next=10;break}return t.next=7,r();case 7:return o=t.sent,t.next=10,this.storeDraft(o);case 10:return t.abrupt("return",o);case 11:case"end":return t.stop()}}),n,this)})))}},{key:"getDefaultResponse",value:function(){return{body:"",privacy:f.ChallengePrivacy.PUBLIC,type:f.ChallengeType.TEXT}}},{key:"getDraftAssert",value:function(){return Object(i.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDraft();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:return t.abrupt("return",t.t0);case 6:case"end":return t.stop()}}),e,this)})))}},{key:"saveDraft",value:function(e){return Object(i.a)(this,void 0,void 0,t().mark((function r(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.assign({},this._pendingDraft),this._pendingDraft=v(n,e),t.next=4,this.savePendingDraft();case 4:case"end":return t.stop()}}),r,this)})))}},{key:"saveDraftDelayed",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object.assign({},this._pendingDraft);this._pendingDraft=v(n,t),clearTimeout(this.draftSaveTimeout),this.draftSaveTimeout=setTimeout((function(){return e.savePendingDraft()}),r)}},{key:"savePendingDraft",value:function(){return Object(i.a)(this,void 0,void 0,t().mark((function e(){var r,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return clearTimeout(this.draftSaveTimeout),r=Object.assign({},this._pendingDraft),this._pendingDraft={},t.t0=v,t.next=6,this.getDraftAssert();case 6:return t.t1=t.sent,t.t2=r,n=(0,t.t0)(t.t1,t.t2),!r.banner&&r.backgroundColor?n.banner=void 0:r.banner&&!r.backgroundColor&&(n.backgroundColor=void 0),t.next=12,this.storeDraft(n);case 12:case"end":return t.stop()}}),e,this)})))}},{key:"storeDraft",value:function(e){return Object(i.a)(this,void 0,void 0,t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.userStorage.setItem("MingaChallengeResponseDraft",e);case 2:case"end":return t.stop()}}),r,this)})))}}]),r}()).\u0275fac=function(t){return new(t||p)(c["\u0275\u0275inject"](l.a),c["\u0275\u0275inject"](h.b))},p.\u0275prov=c["\u0275\u0275defineInjectable"]({token:p,factory:p.\u0275fac,providedIn:"root"}),p)}}])}();
//# sourceMappingURL=minga-app-src-app-challenge-route-components-ChallengeAnswerPreviewOverlay-ChallengeAnswerPreviewOverlayRouting-module-es5.js.map