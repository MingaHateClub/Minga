(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"//iD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("8Y7J"),s=n("s7LF"),i=n("nKjP");const o=[[["mg-box-select-option"]]],a=["mg-box-select-option"],l={provide:s.r,useExisting:Object(r.forwardRef)(()=>c),multi:!0};let c=(()=>{class e{constructor(){this._boxOptions=[],this.value=null,this.boxWidth=100,this.boxHeight=80,this.disabled=!1,this.multiple=!1,this.allowDeselect=!1,this.horizontal=!1,this.lastBoxSelectOption=null}_removeBoxSelect(e){const t=e.value;this.multiple?(Array.isArray(this.value)||(this.value=[this.value]),this.value=this.value.filter(e=>e!==t)):this.value===t&&(this.value=null)}_setOrAddBoxSelect(e){if(null===e)return void(this.value=null);const t=e.value;this.multiple?Array.isArray(this.value)?this.value.push(t):this.value=null===this.value?[t]:[this.value,t]:this.value=t}ngOnChanges(e){e.multiple&&(this.multiple?Array.isArray(this.value)||(this.value=null===this.value?[]:[this.value],this.triggerOnChange()):(this.deselectAll(),this.value=null,this.triggerOnChange()))}registerBoxSelectOption(e){this._boxOptions.push(e),e.valueChange.subscribe(t=>{e.value===this.value&&e.select()}),e.selectedChange.subscribe(t=>{if(t){!this.multiple&&this.lastBoxSelectOption&&this.lastBoxSelectOption.deselect(),this.lastBoxSelectOption=e;const t=this.value;this._setOrAddBoxSelect(e),t!==e.value&&this.triggerOnChange()}else this.lastBoxSelectOption===e&&(this.lastBoxSelectOption.deselect(),this.lastBoxSelectOption=null),this._removeBoxSelect(e),this.triggerOnChange()})}deselectAll(){for(let e of this._boxOptions)e.deselect()}triggerOnChange(){this._onChange&&this._onChange(this.value)}triggerOnTouched(){this._onTouched&&this._onTouched()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_selectValue(){for(let e of this._boxOptions)e.value===this.value&&e.select()}writeValue(e){this.value=e,this._selectValue()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-box-select"]],hostVars:1,hostBindings:function(e,t){2&e&&r["\u0275\u0275attribute"]("disabled",t.disabled)},inputs:{boxWidth:"boxWidth",boxHeight:"boxHeight",disabled:"disabled",multiple:"multiple",allowDeselect:"allowDeselect",horizontal:"horizontal"},features:[r["\u0275\u0275ProvidersFeature"]([l]),r["\u0275\u0275NgOnChangesFeature"]],ngContentSelectors:a,decls:2,vars:3,consts:[[1,"mg-box-select",3,"mgHorizontalScroll"]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](o),r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275classProp"]("mg-box-select-horizontal",t.horizontal),r["\u0275\u0275property"]("mgHorizontalScroll",t.horizontal))},directives:[i.a],styles:["[_nghost-%COMP%]{display:block}.mg-box-select.mg-box-select-horizontal[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:scroll}"]}),e})()},"07le":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("SVse"),s=n("8Y7J"),i=n("u9T3"),o=n("s7LF"),a=n("pMoy"),l=n("UhP/"),c=n("Q2Ze"),d=n("ZTz/"),h=n("HxU+");n("2An8"),n("tkC3");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[h.a,l.j,a.b,r.c,i.a,d.b,o.m,c.f]]}),e})()},"2An8":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("8Y7J"),s=n("s7LF"),i=n("lJxs"),o=n("Du5j"),a=n("VDRc"),l=n("SVse"),c=n("pMoy");function d(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"mat-checkbox",2),r["\u0275\u0275listener"]("ngModelChange",(function(n){r["\u0275\u0275restoreView"](e);const s=t.$implicit;return r["\u0275\u0275nextContext"]().categoryChange(s,n)})),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngModel",n.getCategoryValue(e)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.name," ")}}const h={provide:s.r,useExisting:Object(r.forwardRef)(()=>g),multi:!0};let g=(()=>{class e{constructor(e){this.categoryService=e,this._selectedCategoryIds=0,this.categoryType="",this.multiple=!1,this.categories$=this.categoryService.getAllCategories().pipe(Object(i.a)(e=>e.filter(e=>e.type==this.categoryType)))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}getExportedValue(){const e=this._selectedCategoryIds;if("object"==typeof e){let t=[];for(let n in e){const r=+n;"number"!=typeof r||isNaN(r)||e[n]&&t.push(r)}return t}return e}triggerOnChange(){this.onChange&&this.onChange(this.getExportedValue()),this.onTouched&&this.onTouched()}_ensureSelectedCategoryIdsType(){this.multiple?"number"==typeof this._selectedCategoryIds&&(this._selectedCategoryIds={[this._selectedCategoryIds]:!0}):"object"==typeof this._selectedCategoryIds&&(this._selectedCategoryIds=0)}getCategoryValue(e){return this._ensureSelectedCategoryIdsType(),this.multiple?!!this._selectedCategoryIds[e.id]:this._selectedCategoryIds==e.id}categoryChange(e,t){this._ensureSelectedCategoryIdsType(),this.multiple?this._selectedCategoryIds[e.id]=t:this._selectedCategoryIds=t?e.id:0,this.triggerOnChange()}writeValue(e){this._selectedCategoryIds=null===e?0:e,this._ensureSelectedCategoryIdsType()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-category-horizontal-select"]],inputs:{categoryType:"categoryType",multiple:"multiple"},features:[r["\u0275\u0275ProvidersFeature"]([h])],decls:3,vars:3,consts:[["fxLayout","row wrap","fxLayoutAlign","center center",1,"minga-grey-theme"],[3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,d,2,2,"mat-checkbox",1),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind1"](2,1,t.categories$)))},directives:[a.e,a.d,l.n,c.a,s.t,s.w],pipes:[l.b],styles:["mat-checkbox[_ngcontent-%COMP%]{position:relative;padding:8px;color:#737373}"]}),e})()},"436P":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n("//iD");var r=n("SVse"),s=n("8Y7J"),i=n("s7LF");n("nKjP");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[]]}),e})();n("bN3Y");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o,r.c,i.m]]}),e})();n("v4w/")},"5Ynh":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n("Kyc/");var r=n("SVse"),s=n("8Y7J"),i=n("s7LF"),o=n("436P"),a=n("m9yI"),l=n("bo7O");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o.a,l.a,a.b,r.c,i.m]]}),e})()},"95sG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryManagerClient=t.CategoryManager=void 0;const r=n("QOQM");class s{}t.CategoryManager=s,s.serviceName="minga.category.CategoryManager",s.GetAllCategories={methodName:"GetAllCategories",service:s,requestStream:!1,responseStream:!1,requestType:r.GetAllCategoriesRequest,responseType:r.GetAllCategoriesResponse},s.GetCategoryTypes={methodName:"GetCategoryTypes",service:s,requestStream:!1,responseStream:!1,requestType:r.GetCategoryTypesRequest,responseType:r.GetCategoryTypesResponse},s.AddCategory={methodName:"AddCategory",service:s,requestStream:!1,responseStream:!1,requestType:r.AddCategoryRequest,responseType:r.AddCategoryResponse},s.UpdateCategory={methodName:"UpdateCategory",service:s,requestStream:!1,responseStream:!1,requestType:r.UpdateCategoryRequest,responseType:r.UpdateCategoryResponse},t.CategoryManagerClient=class{getAllCategories(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}getCategoryTypes(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}addCategory(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}updateCategory(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}},Du5j:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("mrSG"),s=n("8Y7J"),i=n("QOQM"),o=n("2Vo4"),a=n("Z7Vy");let l=(()=>{class e{constructor(e){this.categoryManager=e,this._subject=new o.a([])}_fetchAllCategories(){return Object(r.a)(this,void 0,void 0,(function*(){const e=new i.GetAllCategoriesRequest,t=(yield this.categoryManager.getAllCategories(e)).getCategoryList().map(e=>e.toObject());this._subject.next(t)}))}getAllCategories(){return 0==this._subject.getValue().length&&this._fetchAllCategories(),this._subject.asObservable()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](a.CategoryManager))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},I2wG:function(e,t,n){"use strict";function r(e){if("boolean"==typeof e||null===e)return!!e;if("string"==typeof e)switch(e.toLowerCase()){default:case"":case"true":case"on":case"1":return!0;case"false":case"off":case"0":return!1}else console.warn(`Unacceptable boolean attribute value: ${e}. Defaulting to false`);return!1}n.d(t,"a",(function(){return r}))},"Kyc/":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("8Y7J"),s=n("s7LF"),i=n("AdbN"),o=n("TNy8"),a=n("2nPA"),l=n("0cKA"),c=n("xiiZ");const d=["streamScroller"];function h(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"mg-banner-preview",3),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.itemId,s=t.$implicit;return r["\u0275\u0275nextContext"]().selectBanner(n,s)})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275classProp"]("banner-selected",n.isBannerSelected(e)),r["\u0275\u0275property"]("banner",e)}}const g={provide:s.r,useExisting:Object(r.forwardRef)(()=>u),multi:!0};let u=(()=>{class e{constructor(e,t){this.bannerLibrary=e,this._cdr=t,this._autoSelected=!1,this._query="",this._selectedBannerHash="",this._initHappened=!1,this.allowToggle=!1,this.autoSelectBanner=!1,this.selectedBanner=null,this.archived=!1,this.queryDebounceTime=300,this.size="small",this.categories=[],this.selectedBannerChange=new r.EventEmitter}set query(e){clearTimeout(this._queryTimeout),this.queryDebounceTime>0&&this._initHappened?this._queryTimeout=setTimeout(()=>{this._query=e,this._cdr.markForCheck()},this.queryDebounceTime):this._query=e}get query(){return this._query}get streamFilter(){return{query:this.query,categories:this.categories.join(),type:i.BannerType.EVENT}}ngOnChanges(e){}selectBanner(e,t){this._setSelectedBannerFromHash(t.bannerHash),this.selectedBanner&&(this.selectedBannerChange.emit(this.selectedBanner),this.onChange&&this.onChange(this._selectedBannerHash)),this.onTouched&&this.onTouched(!0)}isBannerSelected(e){return e&&e.bannerHash==this._selectedBannerHash}_onBoxSelectChange(e){this.onTouched&&this.onTouched(!0),e&&(this._selectedBannerHash=e.bannerHash,this.onChange&&this.onChange(this._selectedBannerHash),this.selectedBannerChange.emit(e))}ngOnInit(){this._initHappened=!0}_getStreamItems(){return this.streamScroller&&this.streamScroller.stream?this.streamScroller.stream._getItems().filter(({item:e})=>!!e.bannerHash):[]}ngOnDestroy(){}_setSelectedBannerFromHash(e){this._selectedBannerHash=e;const t=this._getStreamItems().find(({item:t})=>t.bannerHash==e);this.selectedBanner=t?t.item:null}writeValue(e){"string"==typeof e&&e?(this._setSelectedBannerFromHash(e),this.selectedBanner&&this.selectedBannerChange.emit(this.selectedBanner),this._autoSelected=!1):e||(this.selectedBanner=null,this._selectedBannerHash="")}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.BannerLibrary),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-banner-select2"]],viewQuery:function(e,t){if(1&e&&r["\u0275\u0275viewQuery"](d,3),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.streamScroller=e.first)}},inputs:{allowToggle:"allowToggle",autoSelectBanner:"autoSelectBanner",selectedBanner:"selectedBanner",archived:"archived",queryDebounceTime:"queryDebounceTime",size:"size",categories:"categories",query:"query"},outputs:{selectedBannerChange:"selectedBannerChange"},features:[r["\u0275\u0275ProvidersFeature"]([g]),r["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["rpcControl","searchControl","rpcStream","search",3,"filter","service","horizontal"],["streamScroller",""],["mgStreamItem",""],["no-style","",3,"banner","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"mg-stream-scroller",0,1),r["\u0275\u0275template"](2,h,1,3,"ng-template",2),r["\u0275\u0275elementEnd"]()),2&e&&r["\u0275\u0275property"]("filter",t.streamFilter)("service",t.bannerLibrary)("horizontal",!0)},directives:[a.a,l.a,c.a],styles:["[_nghost-%COMP%]{height:110px;--feed-item-margin-side:0}mg-banner-preview[_ngcontent-%COMP%]{position:relaitve;border-radius:6px;overflow:hidden;height:72px;border:2px solid transparent;transition:transform .1s ease;transform:scale(.9)}mg-banner-preview.banner-selected[_ngcontent-%COMP%]{z-index:1;border:2px solid #3cf;transform:scale(1)}"]}),e})()},Z7Vy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryManager=void 0,n("8Y7J");const r=n("+6wJ"),s=n("95sG"),i=n("8Y7J");class o{constructor(e){this._ngZone=e}getAllCategories(e,t,n){let i,o,a;"function"==typeof t?o=t:(a=t,o=n),o||(i=new Promise((e,t)=>{o=(n,r)=>{n?t(n):e(r)}}));let l=null,c=r.grpc.invoke(s.CategoryManager.GetAllCategories,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>l=e,onMessage:e=>this._ngZone.run(()=>{o(null,e,l||new r.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=r.grpc.Code.OK){let n=new Error(t);n.code=e,o(n)}})});return i.cancel=()=>c.close(),i}getCategoryTypes(e,t,n){let i,o,a;"function"==typeof t?o=t:(a=t,o=n),o||(i=new Promise((e,t)=>{o=(n,r)=>{n?t(n):e(r)}}));let l=null,c=r.grpc.invoke(s.CategoryManager.GetCategoryTypes,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>l=e,onMessage:e=>this._ngZone.run(()=>{o(null,e,l||new r.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=r.grpc.Code.OK){let n=new Error(t);n.code=e,o(n)}})});return i.cancel=()=>c.close(),i}addCategory(e,t,n){let i,o,a;"function"==typeof t?o=t:(a=t,o=n),o||(i=new Promise((e,t)=>{o=(n,r)=>{n?t(n):e(r)}}));let l=null,c=r.grpc.invoke(s.CategoryManager.AddCategory,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>l=e,onMessage:e=>this._ngZone.run(()=>{o(null,e,l||new r.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=r.grpc.Code.OK){let n=new Error(t);n.code=e,o(n)}})});return i.cancel=()=>c.close(),i}updateCategory(e,t,n){let i,o,a;"function"==typeof t?o=t:(a=t,o=n),o||(i=new Promise((e,t)=>{o=(n,r)=>{n?t(n):e(r)}}));let l=null,c=r.grpc.invoke(s.CategoryManager.UpdateCategory,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>l=e,onMessage:e=>this._ngZone.run(()=>{o(null,e,l||new r.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=r.grpc.Code.OK){let n=new Error(t);n.code=e,o(n)}})});return i.cancel=()=>c.close(),i}}t.CategoryManager=o,o.\u0275fac=function(e){return new(e||o)(i.\u0275\u0275inject(i.NgZone))},o.\u0275prov=i.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})},bN3Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("8Y7J"),s=n("v4w/"),i=n("//iD");const o=["*"];let a=(()=>{class e extends s.a{constructor(e){super(),this.boxSelect=e,e.registerBoxSelectOption(this)}set width(e){this._width=e}get width(){return this._width||this.boxSelect.boxWidth}set height(e){this._height=e}get height(){return this._height||this.boxSelect.boxHeight}set disabled(e){this._disabled=e}get disabled(){return!!this.boxSelect.disabled||void 0!==this._disabled&&this._disabled}onClick(){this.selected&&!this.boxSelect.allowDeselect||this.disabled||this.toggleSelect()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-box-select-option"]],hostBindings:function(e,t){1&e&&r["\u0275\u0275listener"]("click",(function(){return t.onClick()}))},inputs:{width:"width",height:"height",disabled:"disabled"},features:[r["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:o,decls:2,vars:8,consts:[[1,"mg-box-select-option"]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275styleProp"]("width",t.width,"px")("height",t.height,"px"),r["\u0275\u0275classProp"]("mg-disabled",t.disabled)("mg-selected",t.selected))},styles:["[_nghost-%COMP%]{position:relative;display:inline-block;vertical-align:top;box-sizing:border-box;cursor:pointer}mg-box-select[disabled=true][_nghost-%COMP%], mg-box-select[disabled=true]   [_nghost-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;cursor:default}.mg-box-select-option[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;overflow:hidden;box-sizing:border-box;box-shadow:0 0 6px rgba(0,0,0,.17);transform:scale(.8);border-radius:8px;border:0 solid transparent;transition:transform .3s ease,border .3s ease;position:relative}.mg-box-select-option.mg-disabled[_ngcontent-%COMP%]{opacity:.75}@media (hover:hover){.mg-box-select-option[_ngcontent-%COMP%]:hover:not(.mg-selected){transition-duration:.1s;transform:scale(.85)}.mg-box-select-option[_ngcontent-%COMP%]:hover.mg-disabled:not(.mg-selected){transform:scale(.8)}}.mg-box-select-option.mg-selected[_ngcontent-%COMP%]{border-width:3px;transform:scale(1);border-color:#3cf}.mg-box-select-option.mg-selected.mg-disabled[_ngcontent-%COMP%]{border-color:#999}"]}),e})()},nKjP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("8Y7J"),s=n("I2wG");let i=(()=>{class e{constructor(e){this._elementRef=e,this._enabled=!1}set enabled(e){this._enabled=Object(s.a)(e)}get enabled(){return this._enabled}_onWheel(e){this._enabled&&0===e.deltaX&&(e.preventDefault(),this._elementRef.nativeElement.scrollLeft+=e.deltaY)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","mgHorizontalScroll",""]],hostBindings:function(e,t){1&e&&r["\u0275\u0275listener"]("wheel",(function(e){return t._onWheel(e)}))},inputs:{enabled:["mgHorizontalScroll","enabled"]}}),e})()},tkC3:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n("8Y7J"),s=n("s7LF"),i=n("I2wG"),o=n("2Vo4"),a=n("itXk"),l=n("lJxs"),c=n("Du5j"),d=n("Q2Ze"),h=n("i1AJ"),g=n("ZTz/"),u=n("UhP/"),p=n("SVse");function m(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"mat-option",4),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275property"]("value",e),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.name," ")}}const y={provide:s.r,useExisting:Object(r.forwardRef)(()=>C),multi:!0},f={provide:s.q,useExisting:Object(r.forwardRef)(()=>C),multi:!0};let C=(()=>{class e{constructor(e,t){this._cdr=e,this.categoryService=t,this.categories=[],this._selectedCategory=null,this._selectedCategoryId=0,this.allowDeselection=!1,this.placeholder="",this._required=!1,this.categoryIsSame=(e,t)=>!e&&!t||(null==e?void 0:e.id)==(null==t?void 0:t.id),this._categoryType$=new o.a(""),this.categorySelected=new r.EventEmitter,this.categories$=Object(a.b)([this._categoryType$,this.categoryService.getAllCategories()]).pipe(Object(l.a)(([e,t])=>t.filter(t=>t.type==e))),this._categoriesSub=this.categories$.subscribe(e=>{this.categories=e,this.onCategoriesUpdated(),this._cdr.markForCheck()})}set categoryType(e){this._categoryType$.next(e||"")}get categoryType(){return this._categoryType$.getValue()}get required(){const e=this._required;return Object(i.a)(e)}set required(e){this._required=e}onCategoriesUpdated(){for(const e of this.categories)if(e.id==this._selectedCategoryId){this._selectedCategory=e,this.categorySelected.emit(this._selectedCategory);break}}registerOnValidatorChange(e){this.onValidatorChange=e}validate(e){const t={};return this.required&&!this._selectedCategoryId&&(t.required=!0),Object.keys(t).length>0?t:null}selectedCategoryChange(e){this._selectedCategory=e,this._selectedCategoryId=(null==e?void 0:e.id)||0,this.triggerChange(),this.categorySelected.emit(this._selectedCategory)}triggerChange(){this.onChange&&this.onChange(this._selectedCategoryId)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}writeValue(e){e&&"number"==typeof e?this._selectedCategoryId=e:null===e&&(this._selectedCategoryId=0),this.onCategoriesUpdated()}ngOnDestroy(){this._categoriesSub.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-category-select"]],inputs:{allowDeselection:"allowDeselection",categoryType:"categoryType",placeholder:"placeholder",_required:["required","_required"]},outputs:{categorySelected:"categorySelected"},features:[r["\u0275\u0275ProvidersFeature"]([y,f])],decls:6,vars:8,consts:[["mgFormField",""],[3,"compareWith","ngModel","ngModelChange"],[3,"disabled","value"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"mat-form-field",0),r["\u0275\u0275elementStart"](1,"mat-select",1),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t._selectedCategory=e}))("ngModelChange",(function(e){return t.selectedCategoryChange(e)})),r["\u0275\u0275elementStart"](2,"mat-option",2),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,m,2,2,"mat-option",3),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("compareWith",t.categoryIsSame)("ngModel",t._selectedCategory),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("disabled",!t.allowDeselection&&t._selectedCategoryId)("value",0),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](t.placeholder||"Select a category"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind1"](5,6,t.categories$)))},directives:[d.d,h.a,g.a,s.t,s.w,u.m,p.n],pipes:[p.b],encapsulation:2}),e})()},"v4w/":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("8Y7J");let s=(()=>{class e{constructor(){this._selected=!1,this.selectedChange=new r.EventEmitter,this.valueChange=new r.EventEmitter}get selected(){return this._selected}set value(e){this._value=e,this.valueChange.emit(this._value)}get value(){return this._value}toggleSelect(){this._selected=!this._selected,this.selectedChange.emit(this._selected)}deselect(){!1!==this._selected&&(this._selected=!1,this.selectedChange.emit(this._selected))}select(){!0!==this._selected&&(this._selected=!0,this.selectedChange.emit(this._selected))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,inputs:{value:"value"},outputs:{selectedChange:"selected",valueChange:"valueChange"}}),e})()}}]);
//# sourceMappingURL=default~minga-app-src-app-content-Content-module~minga-app-src-app-groups-groups-overlays-module~min~585c1a3f-es2015.js.map