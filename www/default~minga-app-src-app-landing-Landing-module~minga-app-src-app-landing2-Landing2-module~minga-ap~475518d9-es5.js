!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),s=new x(r||[]);return o(a,"_invoke",{value:S(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var p={};function f(){}function h(){}function m(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==n&&r.call(y,a)&&(v=y);var w=m.prototype=f.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){var n;o(this,"_invoke",{value:function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,s){var u=d(e[o],e,i);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}})}function S(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function b(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,o(w,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new C(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),c(w,u,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?i:String(i)),r)}var o,i}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{IPaV:function(n,o,i){"use strict";i.d(o,"a",(function(){return f}));var a,s=i("mrSG"),u=i("8Y7J"),c=i("QPZY"),l=i("mI3D"),d=i("ypKM"),p=i("Tcc+"),f=((a=function(){function n(e,r){t(this,n),this.errorReporter=e,this.analytics=r}return r(n,[{key:"sendErrorReport",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(s.a)(this,void 0,void 0,e().mark((function o(){var i,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new l.ErrorReportRequest,a=new l.ErrorReportResponse,console.log("GRPCErrorReportRequest: ",i),console.log("GRPCErrorReportResponse: ",a),this.analytics.sendException("[".concat(t,"]: ").concat(n),r),i.setErrorPriority(r),i.setErrorMessage(n),i.setErrorContext(t),e.next=9,this.errorReporter.sendErrorReport(i).catch((function(e){console.error("[ErrorReporter] sendErrorReport error",e);var t=new l.ErrorReportResponse;return t.setStatus(c.StatusCode.ERROR),t}));case 9:a=e.sent,console.log("Error Response Status:",a.getStatus()),console.log("Error Response error_handler_override:",a.getErrorHandlerOverride());case 12:case"end":return e.stop()}}),o,this)})))}}]),n}()).\u0275fac=function(e){return new(e||a)(u["\u0275\u0275inject"](d.ErrorReporter),u["\u0275\u0275inject"](p.a))},a.\u0275prov=u["\u0275\u0275defineInjectable"]({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},XMmb:function(e,n,o){"use strict";o.d(n,"b",(function(){return y})),o.d(n,"a",(function(){return g.a}));var i,a=o("SVse"),s=o("8Y7J"),u=o("s7LF"),c=o("Q2Ze"),l=o("Tj54"),d=o("e6WT"),p=o("TSSN"),f=o("CO6v"),h=o("HxU+"),m=o("ls3q"),v=o("7Tcv"),g=o("dhKc"),y=((i=r((function e(){t(this,e)}))).\u0275fac=function(e){return new(e||i)},i.\u0275mod=s["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[v.a,m.a,h.a,f.a,u.m,u.A,c.f,d.c,l.b,a.c,p.c]]}),i)},dfi4:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorReporterClient=n.LocaleSyncClient=n.AppConfigClient=n.ErrorReporter=n.LocaleSync=n.AppConfig=void 0;var i=o("mI3D"),a=r((function e(){t(this,e)}));n.AppConfig=a,a.serviceName="AppConfig",a.getAppConfig={methodName:"getAppConfig",service:a,requestStream:!1,responseStream:!1,requestType:i.AppConfigRequest,responseType:i.AppConfigResponse};var s=r((function e(){t(this,e)}));n.LocaleSync=s,s.serviceName="LocaleSync",s.getLocaleSync={methodName:"getLocaleSync",service:s,requestStream:!1,responseStream:!1,requestType:i.LocaleSyncRequest,responseType:i.LocaleSyncResponse};var u=r((function e(){t(this,e)}));n.ErrorReporter=u,u.serviceName="ErrorReporter",u.sendErrorReport={methodName:"sendErrorReport",service:u,requestStream:!1,responseStream:!1,requestType:i.ErrorReportRequest,responseType:i.ErrorReportResponse},n.AppConfigClient=function(){function e(){t(this,e)}return r(e,[{key:"getAppConfig",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}]),e}(),n.LocaleSyncClient=function(){function e(){t(this,e)}return r(e,[{key:"getLocaleSync",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}]),e}(),n.ErrorReporterClient=function(){function e(){t(this,e)}return r(e,[{key:"sendErrorReport",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}]),e}()},dhKc:function(e,n,o){"use strict";o.d(n,"a",(function(){return j})),o.d(n,"b",(function(){return F}));var i=o("8Y7J"),a=o("s7LF"),s=o("Ggka"),u=o("QPZY"),c=o("mI3D"),l=o("NG82"),d=o("IPaV"),p=o("Q2Ze"),f=o("i1AJ"),h=o("SVse"),m=o("e6WT"),v=o("Tj54"),g=o("sj4O"),y=o("4avL"),w=o("TSSN"),E=["inputElement"],C=["inputMatElement"],S=["formFieldElement"];function b(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mat-icon"),i["\u0275\u0275text"](1,"done"),i["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mat-icon"),i["\u0275\u0275text"](1,"error_outline"),i["\u0275\u0275elementEnd"]())}function R(e,t){1&e&&i["\u0275\u0275element"](0,"mg-spinner",9)}function x(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mg-button",10),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](2,1,"button.changePassword")))}function L(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",11),i["\u0275\u0275elementStart"](1,"mat-icon",12),i["\u0275\u0275listener"]("mousedown",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().togglePasswordVisibility()})),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var r=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.passwordIcon)}}function k(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](2,1,"input.password.error.maxlength")," "))}function O(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](2,1,"input.password.error.minlength")," "))}function I(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](2,1,"input.password.error.pattern")," "))}function M(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind2"](2,1,"form.saveFieldFail",n.translateParams)," ")}}function P(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](2,1,"input.password.error.required")," "))}function N(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-error"),i["\u0275\u0275elementContainerStart"](1,13),i["\u0275\u0275template"](2,k,3,3,"span",14),i["\u0275\u0275template"](3,O,3,3,"span",14),i["\u0275\u0275template"](4,I,3,3,"span",14),i["\u0275\u0275template"](5,M,3,4,"span",14),i["\u0275\u0275template"](6,P,3,3,"span",14),i["\u0275\u0275elementContainerEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitch",n.passwordControlErrorKey),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","maxlength"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","minlength"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","pattern"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","savePassword"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","required")}}var A=function(e){return{"click-state":e}},j="**********",V={provide:a.r,useExisting:Object(i.forwardRef)((function(){return F})),multi:!0},T={provide:a.q,useExisting:Object(i.forwardRef)((function(){return F})),multi:!0},q=function(e){return e[e.SAVING=1]="SAVING",e[e.SAVED=2]="SAVED",e[e.ERROR=3]="ERROR",e[e.NA=4]="NA",e}({}),F=function(){var e=function(){function e(n,r,o,s){var l=this;t(this,e),this.cdr=n,this.managerService=r,this.errorReporting=o,this.inj=s,this.disabled=!1,this.editMode=!1,this.inputName="passwordComponent",this.enableReadOnlyState=!window.MINGA_DEVICE_ANDROID&&!window.MINGA_DEVICE_IOS,this.passwordIcon="visibility",this.passwordVisible=!1,this.inputType="password",this.editing=!1,this.onBlurEvent=new i.EventEmitter,this.saveStatus=q.NA,this.translateParams={value:"password"},this.SaveState=q,this._initEditString=j,this.disableBlur=!1,this.matcher=null,this.required=!0,this.initialHint="",this.validation=!0,this.hints=!0,this.initialUnset=!1,this.mgNoHintMargin=!1,this.errorStateMatcher=null,this.floatLabel="always",this._hasFocus=!1,this.cancelEdit=function(){l.initEditMode(!1)},this.savePassword=function(e){return l.editing=!1,l.saveStatus=q.SAVING,l.passwordControl.markAsPending(),new Promise((function(t,n){var r=function(){l.saveStatus=q.ERROR,l.passwordControl.setErrors({savePassword:!0}),n("Failed to save password.")};if(!e)return console.warn("[Password]savePassword() attempted to save password with no indentiy hash"),l.errorReporting.sendErrorReport("client Password.component","attempted to save password with no indentiy hash",c.errorPriority.WARN),r();l.managerService.updatePerson({password:l.innerValue},e).then((function(e){e.getStatus()==u.StatusCode.OK?(l.saveStatus=q.SAVED,l.togglePasswordVisibility(!1),t(null)):(console.warn("[Password]savePassword() non OK response",e.toObject()),r())}))}))},this.outerControl=new a.h}return r(e,[{key:"hintText",get:function(){return!this.initialHint||this._hasFocus?this.hints&&this._hasFocus?"Choose a mix of 4 to 16 letters and numbers":"":this.initialHint}},{key:"validate",value:function(e){return this.passwordControl.errors}},{key:"ngOnInit",value:function(){var e=this;this.passwordControl=new a.h({disabled:this.disabled}),this._formGroup=new a.k({inputControl:this.passwordControl}),this._initOuterControl(),this.passwordControl.setValue(this.innerValue),this.passwordControl.statusChanges.subscribe((function(t){"function"==typeof e.onChange&&t!=e._prevStatus&&e.innerValue!=e._initEditString?e.passwordControl.pristine?setTimeout((function(){e.onChange(e.innerValue),e.outerControl.markAsPristine(),e.formFieldElementRef._elementRef.nativeElement.classList.remove("mat-form-field-invalid")})):(e._prevStatus=t,e.onChange&&(e.onChange(e.innerValue),e.onTouched()),e.passwordControl.errors?e.formFieldElementRef._elementRef.nativeElement.classList.add("mat-form-field-invalid"):e.formFieldElementRef._elementRef.nativeElement.classList.remove("mat-form-field-invalid")):e.innerValue==e._initEditString&&(e.outerControl.markAsPristine(),e.passwordControl.markAsPristine())})),this.editMode?this.initEditMode():this._setValidators()}},{key:"ngOnChanges",value:function(e){e.initialUnset&&this.writeValue(this.initialUnset?this.innerValue:this._initEditString)}},{key:"passwordRequired",get:function(){return this.passwordControl.errors&&this.passwordControl.errors.required}},{key:"passwordControlErrorKey",get:function(){var e=this.passwordControl.errors?Object.keys(this.passwordControl.errors)[0]:"",t=this.outerControl.errors?Object.keys(this.outerControl.errors)[0]:"";return e||t}},{key:"_setValidators",value:function(){var e=[];this.required&&e.push(a.D.required),this.validation&&(e.push(a.D.minLength(4)),e.push(a.D.maxLength(16)),e.push(s.a.NoSymbolsOneLetterOneNumber)),this.passwordControl.setValidators(e)}},{key:"_initOuterControl",value:function(){var e=this,t=this.inj.get(a.s);t&&t.control&&(this.outerControl=t.control),this.outerControl.statusChanges.subscribe((function(t){e.outerControl.errors&&0==!!e.passwordControl.errors?e.outerErrors=e.outerControl.errors:!e.outerControl.errors&&e.outerErrors&&(e.outerErrors=null)}))}},{key:"writeValue",value:function(e){"string"==typeof e&&(this.passwordControl.pristine&&this.editMode&&(e=this.initialUnset?null:this._initEditString),this.innerValue=e,this.passwordControl.setValue(e))}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"change",value:function(e){this.innerValue=e,this.onChange&&this.onChange(e)}},{key:"togglePasswordVisibility",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.passwordVisible;this.disabled||(this.disableBlur=!0,this.passwordVisible=t,this.passwordVisible?(this.passwordIcon="visibility_off",this.inputType="text"):(this.passwordIcon="visibility",this.inputType="password"),setTimeout((function(){e.disableBlur=!1}),300))}},{key:"initEditMode",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._initEditString;this.saveStatus=q.NA,e||(this.passwordControl.clearValidators(),this._formGroup.reset()),this.editing=!1,this.innerValue=t,this.togglePasswordVisibility(!1)}},{key:"onBlur",value:function(e){this._hasFocus=!1,this.disableBlur||this.onBlurEvent.emit(e),this.passwordControl.errors&&this.formFieldElementRef._elementRef.nativeElement.classList.add("mat-form-field-invalid")}},{key:"onFocus",value:function(e){this._hasFocus=!0,this.disableBlur=!1,this.enableEditClick()}},{key:"enableEditClick",value:function(){this.disabled||!this.editMode||this.editing||(this.initEditMode(!1,""),this._setValidators(),this.editing=!0,"function"==typeof this.editClick&&this.editClick())}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.ChangeDetectorRef),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](i.Injector))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-password"]],viewQuery:function(e,t){var n;(1&e&&(i["\u0275\u0275viewQuery"](E,3),i["\u0275\u0275viewQuery"](C,3),i["\u0275\u0275viewQuery"](S,3)),2&e)&&(i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.inputElementRef=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.inputMatElementRef=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.formFieldElementRef=n.first))},inputs:{disabled:"disabled",editMode:"editMode",inputName:["name","inputName"],editClick:"editClick",required:"required",initialHint:"initialHint",validation:"validation",hints:"hints",initialUnset:"initialUnset",mgNoHintMargin:"mgNoHintMargin",errorStateMatcher:"errorStateMatcher",floatLabel:"floatLabel"},outputs:{onBlurEvent:"blur"},features:[i["\u0275\u0275ProvidersFeature"]([V,T]),i["\u0275\u0275NgOnChangesFeature"]],decls:14,vars:19,consts:[["mgFormField","","hideRequiredMarker","",1,"mg-password",3,"ngClass","hintLabel","mgNoHintMargin","floatLabel","click"],["formFieldElement",""],["matInput","","autocorrect","off","autocapitalize","none",3,"formControl","ngModel","readonly","autocomplete","required","errorStateMatcher","ngModelChange","blur","focus"],["inputElement","","inputMatElement","matInput"],["mat-icon-button","","matSuffix","",1,"input-icon"],[4,"ngIf"],["color","primary","mode","indeterminate","diameter","25",4,"ngIf"],["type","text","matSuffix","","class","mg-minicopy",4,"ngIf"],["class","input-icon","matSuffix","",4,"ngIf"],["color","primary","mode","indeterminate","diameter","25"],["type","text","matSuffix","",1,"mg-minicopy"],["matSuffix","",1,"input-icon"],[1,"clickable",3,"mousedown"],[3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mat-form-field",0,1),i["\u0275\u0275listener"]("click",(function(){return t.enableEditClick()})),i["\u0275\u0275elementStart"](2,"mat-label"),i["\u0275\u0275text"](3,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"input",2,3),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.change(e)}))("ngModelChange",(function(e){return t.innerValue=e}))("blur",(function(e){return t.onBlur(e)}))("focus",(function(e){return t.onFocus(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",4),i["\u0275\u0275template"](8,b,2,0,"mat-icon",5),i["\u0275\u0275template"](9,_,2,0,"mat-icon",5),i["\u0275\u0275template"](10,R,1,0,"mg-spinner",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](11,x,3,3,"mg-button",7),i["\u0275\u0275template"](12,L,3,1,"div",8),i["\u0275\u0275template"](13,N,7,6,"mat-error",5),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](17,A,t.editMode&&!t.editing))("hintLabel",t.hintText)("mgNoHintMargin",t.mgNoHintMargin)("floatLabel",t.floatLabel),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("formControl",t.passwordControl)("ngModel",t.innerValue)("readonly",t.enableReadOnlyState&&t.editMode&&!t.editing)("autocomplete",t.inputName)("required",t.required)("errorStateMatcher",t.errorStateMatcher),i["\u0275\u0275attribute"]("type",t.inputType),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",t.saveStatus==t.SaveState.SAVED),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.saveStatus==t.SaveState.ERROR),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.saveStatus==t.SaveState.SAVING),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.editMode&&!t.editing),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.editMode||t.editMode&&t.editing&&t.saveStatus==t.SaveState.NA),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.passwordControl.invalid&&(t.passwordControl.dirty||t.passwordControl.touched)))},directives:[p.d,f.a,h.m,p.h,m.b,a.d,a.t,a.i,a.B,p.j,h.o,v.a,g.a,y.a,p.c,h.q,h.r],pipes:[w.d],styles:["[_nghost-%COMP%]   .click-state[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .click-state[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),e}()},ypKM:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorReporter=n.LocaleSync=n.AppConfig=void 0,o("8Y7J");var i=o("+6wJ"),a=o("dfi4"),s=o("8Y7J"),u=function(){function e(n){t(this,e),this._ngZone=n}return r(e,[{key:"getAppConfig",value:function(e,t,n){var r,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(r=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var c=null,l=i.grpc.invoke(a.AppConfig.getAppConfig,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return c=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,c||new i.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=i.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return r.cancel=function(){return l.close()},r}}]),e}();n.AppConfig=u,u.\u0275fac=function(e){return new(e||u)(s.\u0275\u0275inject(s.NgZone))},u.\u0275prov=s.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"});var c=function(){function e(n){t(this,e),this._ngZone=n}return r(e,[{key:"getLocaleSync",value:function(e,t,n){var r,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(r=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var c=null,l=i.grpc.invoke(a.LocaleSync.getLocaleSync,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return c=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,c||new i.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=i.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return r.cancel=function(){return l.close()},r}}]),e}();n.LocaleSync=c,c.\u0275fac=function(e){return new(e||c)(s.\u0275\u0275inject(s.NgZone))},c.\u0275prov=s.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"});var l=function(){function e(n){t(this,e),this._ngZone=n}return r(e,[{key:"sendErrorReport",value:function(e,t,n){var r,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(r=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var c=null,l=i.grpc.invoke(a.ErrorReporter.sendErrorReport,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return c=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,c||new i.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=i.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return r.cancel=function(){return l.close()},r}}]),e}();n.ErrorReporter=l,l.\u0275fac=function(e){return new(e||l)(s.\u0275\u0275inject(s.NgZone))},l.\u0275prov=s.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"})}}])}();
//# sourceMappingURL=default~minga-app-src-app-landing-Landing-module~minga-app-src-app-landing2-Landing2-module~minga-ap~475518d9-es5.js.map