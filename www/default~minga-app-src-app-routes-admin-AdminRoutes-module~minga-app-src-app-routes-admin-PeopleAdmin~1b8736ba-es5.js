!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/2l8":function(t,r,i){"use strict";i.d(r,"a",(function(){return h}));var o=i("SVse"),u=i("8Y7J"),a=i("s7LF"),s=i("Q2Ze"),l=i("Tj54"),c=i("e6WT"),d=i("TSSN"),p=i("HxU+"),f=i("7Tcv");i("nCoN"),i("3/G9");var m,h=((m=e((function t(){n(this,t)}))).\u0275fac=function(t){return new(t||m)},m.\u0275mod=u["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[f.a,p.a,o.c,a.m,a.A,s.f,c.c,l.b,d.c]]}),m)},"3/G9":function(t,r,i){"use strict";i.d(r,"a",(function(){return a}));var o=i("8Y7J"),u=i("s7LF"),a=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"validate",value:function(t){return/^(?:(?!([\uE000-\uF8FF]|(?:\uD83C(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDF00-\uDFFF])|(?:\uD83D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDDFF])|(?:[\uD834-\uD83D][\uDC00-\uDFFF]|\uD83E[\uDC00-\uDDC0])))(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*$/.test(t.value)?null:{invalidLastName:!0}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mgLastNameValidator",""]],features:[o["\u0275\u0275ProvidersFeature"]([{provide:u.q,useExisting:t,multi:!0}])]}),t}()},KRyY:function(t,r,i){"use strict";i.d(r,"a",(function(){return h}));var o=i("SVse"),u=i("8Y7J"),a=i("s7LF"),s=i("Q2Ze"),l=i("Tj54"),c=i("e6WT"),d=i("TSSN"),p=i("HxU+"),f=i("7Tcv");i("teZX"),i("v3UH");var m,h=((m=e((function t(){n(this,t)}))).\u0275fac=function(t){return new(t||m)},m.\u0275mod=u["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[f.a,p.a,o.c,s.f,c.c,l.b,a.m,a.A,d.c]]}),m)},nCoN:function(t,r,i){"use strict";i.d(r,"a",(function(){return b}));var o=i("8Y7J"),u=i("s7LF"),a=i("Q2Ze"),s=i("i1AJ"),l=i("e6WT"),c=i("SVse"),d=i("Tj54"),p=i("sj4O"),f=i("TSSN");function m(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-icon"),o["\u0275\u0275text"](1,"done"),o["\u0275\u0275elementEnd"]())}function h(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-icon"),o["\u0275\u0275text"](1,"error_outline"),o["\u0275\u0275elementEnd"]())}function F(t,e){1&t&&o["\u0275\u0275element"](0,"mg-spinner",6)}function C(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"div",4),o["\u0275\u0275template"](1,m,2,0,"mat-icon",3),o["\u0275\u0275template"](2,h,2,0,"mat-icon",3),o["\u0275\u0275template"](3,F,1,0,"mg-spinner",5),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusDone),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusInvalid),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusPending)}}function D(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.lastName.error.maxlength")," "))}function v(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.lastName.error.pattern")," "))}function g(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](2,1,"form.saveFieldFail",n.translateParams)," ")}}function y(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.lastName.error.required")," "))}function x(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-error"),o["\u0275\u0275elementContainerStart"](1,7),o["\u0275\u0275template"](2,D,3,3,"span",8),o["\u0275\u0275template"](3,v,3,3,"span",8),o["\u0275\u0275template"](4,g,3,4,"span",8),o["\u0275\u0275template"](5,y,3,3,"span",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitch",n.inputControlErrorKey),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","maxlength"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","pattern"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","savePersonDetail")}}var E={provide:u.r,useExisting:Object(o.forwardRef)((function(){return b})),multi:!0},S={provide:u.q,useExisting:Object(o.forwardRef)((function(){return b})),multi:!0},b=function(){var t=function(){function t(e,r){n(this,t),this.cdr=e,this.inj=r,this.disabled=!1,this.translateParams={value:"last name"},this.required=!1,this.outerControl=new u.h}return e(t,[{key:"validate",value:function(t){return this.inputControl.errors}},{key:"ngOnInit",value:function(){var t=this;this._formGroup=new u.k({inputControl:new u.h({value:this.innerValue,disabled:this.disabled},[u.D.required,u.D.maxLength(25),u.D.pattern(/^(?:(?!([\uE000-\uF8FF]|(?:\uD83C(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDF00-\uDFFF])|(?:\uD83D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDDFF])|(?:[\uD834-\uD83D][\uDC00-\uDFFF]|\uD83E[\uDC00-\uDDC0])))(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*$/)])}),this.inputControl.statusChanges.subscribe((function(e){"function"==typeof t.onChange&&(t.onChange(t.value),t.onTouched())}));var e=this.inj.get(u.s);e&&e.control&&(this.outerControl=e.control),this.outerControl.statusChanges.subscribe((function(e){t.outerControl.errors&&0==!!t.inputControl.errors?t.outerErrors=t.outerControl.errors:!t.outerControl.errors&&t.outerErrors&&(t.outerErrors=null)}))}},{key:"ngAfterContentChecked",value:function(){this.cdr.detectChanges()}},{key:"inputRequired",get:function(){return this.inputControl.errors&&this.inputControl.errors.required}},{key:"inputControl",get:function(){return this._formGroup.get("inputControl")}},{key:"inputControlErrorKey",get:function(){var t=this.inputControl.errors?Object.keys(this.inputControl.errors)[0]:"",e=this.outerControl.errors?Object.keys(this.outerControl.errors)[0]:"";return t||e}},{key:"statusDone",get:function(){return this.inputControl.dirty&&this.inputControl.valid&&(!this.outerControl||this.outerControl.dirty&&this.outerControl.valid)}},{key:"statusInvalid",get:function(){return this.inputControl.dirty&&this.inputControl.invalid||!this.outerControl||this.outerControl.dirty&&this.outerControl.invalid}},{key:"statusTouched",get:function(){return this.inputControl.invalid&&(this.inputControl.dirty||this.inputControl.touched)||this.outerControl.invalid&&(this.outerControl.dirty||this.outerControl.touched)}},{key:"statusPending",get:function(){return this.inputControl.pending||this.outerControl.pending}},{key:"value",get:function(){return this.innerValue},set:function(t){t!==this.innerValue&&(this.innerValue=t,this.cdr.detectChanges())}},{key:"writeValue",value:function(t){"string"==typeof t&&(this.innerValue=t,this.inputControl.setValue(t))}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"change",value:function(t){this.innerValue=t,"function"==typeof this.onChange&&this.onChange(this.innerValue)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](o.Injector))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["mg-last-name"]],inputs:{disabled:"disabled",required:"required"},features:[o["\u0275\u0275ProvidersFeature"]([E,S])],decls:9,vars:8,consts:[["mgFormField","",1,"mg-last-name"],["matInput","","type","text",3,"ngModel","formControl","required","ngModelChange"],["class","input-icon","mat-icon-button","","matSuffix","",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","matSuffix","",1,"input-icon"],["color","primary","mode","indeterminate","diameter","25",4,"ngIf"],["color","primary","mode","indeterminate","diameter","25"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-form-field",0),o["\u0275\u0275elementStart"](1,"mat-label"),o["\u0275\u0275text"](2,"Last Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"input",1),o["\u0275\u0275listener"]("ngModelChange",(function(t){return e.innerValue=t}))("ngModelChange",(function(t){return e.change(t)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](4,C,4,3,"div",2),o["\u0275\u0275elementStart"](5,"mat-hint"),o["\u0275\u0275text"](6),o["\u0275\u0275pipe"](7,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](8,x,6,4,"mat-error",3),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngModel",e.innerValue)("formControl",e.outerErrors?e.outerControl:e.inputControl)("required",e.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!!e.outerControl.asyncValidator),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](7,6,"input.lastName.hint")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",e.statusTouched))},directives:[a.d,s.a,a.h,l.b,u.d,u.t,u.i,u.B,c.o,a.g,a.j,d.a,p.a,a.c,c.q,c.r,c.s],pipes:[f.d],styles:[""]}),t}()},teZX:function(t,r,i){"use strict";i.d(r,"a",(function(){return b}));var o=i("8Y7J"),u=i("s7LF"),a=i("Q2Ze"),s=i("i1AJ"),l=i("e6WT"),c=i("SVse"),d=i("Tj54"),p=i("sj4O"),f=i("TSSN");function m(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-icon"),o["\u0275\u0275text"](1,"done"),o["\u0275\u0275elementEnd"]())}function h(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-icon"),o["\u0275\u0275text"](1,"error_outline"),o["\u0275\u0275elementEnd"]())}function F(t,e){1&t&&o["\u0275\u0275element"](0,"mg-spinner",6)}function C(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"div",4),o["\u0275\u0275template"](1,m,2,0,"mat-icon",3),o["\u0275\u0275template"](2,h,2,0,"mat-icon",3),o["\u0275\u0275template"](3,F,1,0,"mg-spinner",5),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusDone),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusInvalid),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",n.statusPending)}}function D(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.firstName.error.maxlength")," "))}function v(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.firstName.error.pattern")," "))}function g(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](2,1,"form.saveFieldFail",n.translateParams)," ")}}function y(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translate"),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](2,1,"input.firstName.error.required")," "))}function x(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-error"),o["\u0275\u0275elementContainerStart"](1,7),o["\u0275\u0275template"](2,D,3,3,"span",8),o["\u0275\u0275template"](3,v,3,3,"span",8),o["\u0275\u0275template"](4,g,3,4,"span",8),o["\u0275\u0275template"](5,y,3,3,"span",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitch",n.inputControlErrorKey),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","maxlength"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","pattern"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngSwitchCase","savePersonDetail")}}var E={provide:u.r,useExisting:Object(o.forwardRef)((function(){return b})),multi:!0},S={provide:u.q,useExisting:Object(o.forwardRef)((function(){return b})),multi:!0},b=function(){var t=function(){function t(e,r){n(this,t),this.cdr=e,this.inj=r,this.disabled=!1,this.translateParams={value:"first name"},this.required=!1,this.outerControl=new u.h}return e(t,[{key:"validate",value:function(t){return this.inputControl.errors}},{key:"ngOnInit",value:function(){var t=this;this._formGroup=new u.k({inputControl:new u.h({value:this.innerValue,disabled:this.disabled},[u.D.required,u.D.maxLength(25),u.D.pattern(/^(?:(?!([\uE000-\uF8FF]|(?:\uD83C(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDF00-\uDFFF])|(?:\uD83D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDDFF])|(?:[\uD834-\uD83D][\uDC00-\uDFFF]|\uD83E[\uDC00-\uDDC0])))(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*$/)])}),this.inputControl.statusChanges.subscribe((function(e){"function"==typeof t.onChange&&(t.onChange(t.value),t.onTouched())}));var e=this.inj.get(u.s);e&&e.control&&(this.outerControl=e.control),this.outerControl.statusChanges.subscribe((function(e){t.outerControl.errors&&0==!!t.inputControl.errors?t.outerErrors=t.outerControl.errors:!t.outerControl.errors&&t.outerErrors&&(t.outerErrors=null)}))}},{key:"ngAfterContentChecked",value:function(){this.cdr.detectChanges()}},{key:"inputRequired",get:function(){return this.inputControl.errors&&this.inputControl.errors.required}},{key:"inputControl",get:function(){return this._formGroup.get("inputControl")}},{key:"inputControlErrorKey",get:function(){var t=this.inputControl.errors?Object.keys(this.inputControl.errors)[0]:"",e=this.outerControl.errors?Object.keys(this.outerControl.errors)[0]:"";return t||e}},{key:"statusDone",get:function(){return this.inputControl.dirty&&this.inputControl.valid&&(!this.outerControl||this.outerControl.dirty&&this.outerControl.valid)}},{key:"statusInvalid",get:function(){return this.inputControl.dirty&&this.inputControl.invalid||!this.outerControl||this.outerControl.dirty&&this.outerControl.invalid}},{key:"statusTouched",get:function(){return this.inputControl.invalid&&(this.inputControl.dirty||this.inputControl.touched)||this.outerControl.invalid&&(this.outerControl.dirty||this.outerControl.touched)}},{key:"statusPending",get:function(){return this.inputControl.pending||this.outerControl.pending}},{key:"value",get:function(){return this.innerValue},set:function(t){t!==this.innerValue&&(this.innerValue=t,this.cdr.detectChanges())}},{key:"writeValue",value:function(t){"string"==typeof t&&(this.innerValue=t,this.inputControl.setValue(t))}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"change",value:function(t){this.innerValue=t,"function"==typeof this.onChange&&this.onChange(this.innerValue)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](o.Injector))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["mg-first-name"]],inputs:{disabled:"disabled",required:"required"},features:[o["\u0275\u0275ProvidersFeature"]([E,S])],decls:9,vars:8,consts:[["mgFormField","",1,"mg-first-name"],["matInput","","type","text",3,"ngModel","formControl","required","ngModelChange"],["class","input-icon","mat-icon-button","","matSuffix","",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","matSuffix","",1,"input-icon"],["color","primary","mode","indeterminate","diameter","25",4,"ngIf"],["color","primary","mode","indeterminate","diameter","25"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"mat-form-field",0),o["\u0275\u0275elementStart"](1,"mat-label"),o["\u0275\u0275text"](2,"First Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"input",1),o["\u0275\u0275listener"]("ngModelChange",(function(t){return e.innerValue=t}))("ngModelChange",(function(t){return e.change(t)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](4,C,4,3,"div",2),o["\u0275\u0275elementStart"](5,"mat-hint"),o["\u0275\u0275text"](6),o["\u0275\u0275pipe"](7,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](8,x,6,4,"mat-error",3),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngModel",e.innerValue)("formControl",e.outerErrors?e.outerControl:e.inputControl)("required",e.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!!e.outerControl.asyncValidator),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](7,6,"input.firstName.hint")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",e.statusTouched))},directives:[a.d,s.a,a.h,l.b,u.d,u.t,u.i,u.B,c.o,a.g,a.j,d.a,p.a,a.c,c.q,c.r,c.s],pipes:[f.d],styles:[""]}),t}()},v3UH:function(t,r,i){"use strict";i.d(r,"a",(function(){return a}));var o=i("8Y7J"),u=i("s7LF"),a=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"validate",value:function(t){return/^(?:(?!([\uE000-\uF8FF]|(?:\uD83C(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDF00-\uDFFF])|(?:\uD83D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDDFF])|(?:[\uD834-\uD83D][\uDC00-\uDFFF]|\uD83E[\uDC00-\uDDC0])))(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*$/.test(t.value)?null:{invalidFirstName:!0}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mgFirstNameValidator",""]],features:[o["\u0275\u0275ProvidersFeature"]([{provide:u.q,useExisting:t,multi:!0}])]}),t}()}}])}();
//# sourceMappingURL=default~minga-app-src-app-routes-admin-AdminRoutes-module~minga-app-src-app-routes-admin-PeopleAdmin~1b8736ba-es5.js.map