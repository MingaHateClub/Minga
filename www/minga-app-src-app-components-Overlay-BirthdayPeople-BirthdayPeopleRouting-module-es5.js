!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new _(r||[]);return o(a,"_invoke",{value:O(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}e.wrap=l;var h={};function f(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==n&&r.call(m,a)&&(y=m);var x=v.prototype=f.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;o(this,"_invoke",{value:function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}})}function O(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=p(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=p(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),r)}var o,i}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0d/J":function(n,o,i){"use strict";i.r(o),i.d(o,"BirthdayPeopleRoutingModule",(function(){return P}));var a=i("8Y7J"),c=i("iInd"),u=i("mrSG"),s=i("SVse"),l=i("0Sot"),p=i("UWMR"),h=i("SYVq"),f=i("ZnzJ");function d(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"p",3),a["\u0275\u0275elementStart"](1,"span",4),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n.titleText)}}function v(t,e){1&t&&a["\u0275\u0275element"](0,"mg-person-list-element",7),2&t&&a["\u0275\u0275property"]("person",e.$implicit)}function y(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div",5),a["\u0275\u0275template"](1,v,1,1,"mg-person-list-element",6),a["\u0275\u0275elementEnd"]()),2&t){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",n.people)}}var g,m,x,b=((g=function(){function n(t,r,o,i,a){e(this,n),this.route=t,this._location=r,this.consumableData=o,this.snackBar=i,this.router=a,this.setupRouterListener()}return r(n,[{key:"titleText",get:function(){return this.people?1==this.people.length?"1 person is celebrating a birthday.":"".concat(this.people.length," people are celebrating birthdays."):"People are celebrating birthdays."}},{key:"registerOnOverlayPreviousUpdate",value:function(t){this.onRegisterOnOverlayPreviousUpdate=t}},{key:"registerOnOverlayNextUpdate",value:function(t){this.onRegisterOnOverlayNextUpdate=t}},{key:"setupRouterListener",value:function(){var e=this;this.route.params.subscribe((function(n){return Object(u.a)(e,void 0,void 0,t().mark((function e(){var r,o,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!0,!("hash"in n)){t.next=15;break}if(this.contextHash=n.hash,this.people||!this.contextHash){t.next=12;break}if(o={contextHash:this.contextHash},i=this.consumableData.consumeCachedData(o),t.t0=i,t.t0){t.next=11;break}return r=!1,t.next=10,this.consumableData.retrieveContent(o);case 10:i=t.sent;case 11:i&&i.longBirthdayCard&&i.longBirthdayCard.birthdayPersonList&&(this.people=i.longBirthdayCard.birthdayPersonList);case 12:this.people||(this.snackBar.open("Unable to load people request, please try again."),console.error("[BirthdayPeopleComponent] no people data for BirthdayPeople"),this.goBack(r)),t.next=16;break;case 15:console.error("[BirthdayPeopleComponent] no hash available to get content!"),this.goBack(r);case 16:case"end":return t.stop()}}),e,this)})))}))}},{key:"overlayPrevious",get:function(){return{icon:"back",text:"Back"}}},{key:"goBack",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?this._location.back():this.router.navigate(this.contextHash?["",{outlets:{o:["view",this.contextHash]}}]:["",{outlets:{o:null}}])}},{key:"hasOverlayPrevious",value:function(){return this.overlayPrevious}},{key:"onOverlayPrevious",value:function(){return Object(u.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.onOverlayClose();case 2:case"end":return t.stop()}}),e,this)})))}},{key:"onOverlayClose",value:function(){return Object(u.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(this.goBack(),!0));case 1:case"end":return t.stop()}}),e,this)})))}}]),n}()).\u0275fac=function(t){return new(t||g)(a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](s.k),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](p.b),a["\u0275\u0275directiveInject"](c.g))},g.\u0275cmp=a["\u0275\u0275defineComponent"]({type:g,selectors:[["mg-birthday-people"]],decls:3,vars:3,consts:[[3,"component"],["class","people-count",4,"ngIf"],["class","person-list",4,"ngIf"],[1,"people-count"],[1,"people-count-text"],[1,"person-list"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,e){1&t&&(a["\u0275\u0275element"](0,"mg-legacy-overlay-nav",0),a["\u0275\u0275template"](1,d,3,1,"p",1),a["\u0275\u0275template"](2,y,2,1,"div",2)),2&t&&(a["\u0275\u0275property"]("component",e),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.people),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.people))},directives:[h.a,s.o,s.n,f.a],styles:['@import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");.people-count[_ngcontent-%COMP%]{margin:24px 16px 16px}@media (min-width:600px){.people-count[_ngcontent-%COMP%]{margin:32px 32px 16px}}.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-family:Muli,sans-serif;line-height:1.35}@media (orientation:landscape){.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-size:3.3816425121vh}}@media (orientation:portrait){.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-size:3.3816425121vw}}@media (orientation:landscape) and (max-height:414px){.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-size:14px}}@media (orientation:portrait) and (max-width:414px){.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-size:14px}}@media (min-width:439.875px){.people-count[_ngcontent-%COMP%]   .people-count-text[_ngcontent-%COMP%]{font-size:14.875px}}.person-list[_ngcontent-%COMP%]{display:block;border-bottom:1px solid #ccc;margin-bottom:32px}']}),g),w=i("T0Jv"),O=i("CL15"),k=((x=r((function t(){e(this,t)}))).\u0275fac=function(t){return new(t||x)},x.\u0275mod=a["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[w.a,O.a,s.c]]}),x),P=((m=r((function t(){e(this,t)}))).\u0275fac=function(t){return new(t||m)},m.\u0275mod=a["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[k,c.k.forChild([{path:"",component:b}])]]}),m)}}])}();
//# sourceMappingURL=minga-app-src-app-components-Overlay-BirthdayPeople-BirthdayPeopleRouting-module-es5.js.map