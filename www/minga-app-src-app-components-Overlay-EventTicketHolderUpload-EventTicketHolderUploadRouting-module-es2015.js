(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"8PqE":function(e,t,r){"use strict";r.r(t),r.d(t,"EventTicketHolderUploadRoutingModule",(function(){return V}));var n=r("8Y7J"),o=r("iInd"),s=r("mrSG"),i=r("2Vo4"),a=r("biMj"),c=r("jC0l"),l=r("IPaV"),d=r("SVse"),p=r("zeEq"),u=r("iELJ"),g=r("GFah"),f=r("UWMR"),h=r("M2HC"),m=r("BxgO"),v=r("uplL"),C=r("T0RT"),E=r("s7LF"),w=r("RhV8"),y=r("GwYZ");function R(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"div",null,4),n["\u0275\u0275elementStart"](2,"mg-overlay-nav-item",5),n["\u0275\u0275listener"]("click",(function(){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onOverlayPrevious()})),n["\u0275\u0275text"](3," Back "),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()}}const b=function(){return{standalone:!0}};function S(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"label",6),n["\u0275\u0275elementStart"](1,"p",7),n["\u0275\u0275text"](2," Upload your"),n["\u0275\u0275element"](3,"br"),n["\u0275\u0275text"](4," Ticket holder CSV file here: "),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](5,"mg-file-input",8),n["\u0275\u0275listener"]("ngModelChange",(function(t){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().files=t}))("ngModelChange",(function(){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onFileInputChange()})),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](5),n["\u0275\u0275property"]("ngModel",e.files)("showFileDetails",!1)("ngModelOptions",n["\u0275\u0275pureFunction0"](3,b))}}function _(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"mg-xls-list-uploader",9),n["\u0275\u0275listener"]("listParsed",(function(t){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onListParsed(t)}))("headersChanged",(function(t){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onHeadersChanged(t)}))("listSubmitted",(function(t){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onSubmit(t)})),n["\u0275\u0275pipe"](1,"async"),n["\u0275\u0275elementEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275property"]("fields",e.fields)("file",n["\u0275\u0275pipeBind1"](1,2,e.files$))}}function x(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275elementStart"](1,"mg-list-uploader-summary",10),n["\u0275\u0275listener"]("closeSummary",(function(){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onOverlayClose()})),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("rowsWithErrors",e.errors)("message",e.uploadMsg)("headers",e.headers)}}let I=(()=>{class e{constructor(e,t,r,n,o,s,a,l){this.route=e,this.errorReporting=t,this._location=r,this.feedEventManager=n,this.dialog=o,this.rootService=s,this.snackBar=a,this.eventService=l,this.people=[],this.files=[],this.fileSubject=new i.a(null),this.errors=[],this.uploadMsg="",this.headers=[],this.fields=[],this.fileUploaded=!1,this.submitted=!1,this.setupRouterListener(),this.files$=this.fileSubject.asObservable(),this.fields=[new c.d,new c.s,new c.i]}setupRouterListener(){this.route.params.subscribe(e=>{"hash"in e?this.contextHash=e.hash:(console.error("[EventTicketHolderUploadComponent] no hash available to get content!"),this._location.back())})}onFileInputChange(){return Object(s.a)(this,void 0,void 0,(function*(){this.files&&0!==this.files.length&&this.files[0]&&this.contextHash&&(this.errors=[],this.fileSubject.next(this.files[0]),this.fileUploaded=!0)}))}onOverlayPrevious(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.onOverlayClose()}))}onOverlayClose(){return Object(s.a)(this,void 0,void 0,(function*(){return this._location.back(),!0}))}onListParsed(e){}onHeadersChanged(e){this.headers=e.map(e=>e?e.name:"")}onSubmit(e){return Object(s.a)(this,void 0,void 0,(function*(){if(this.errors=[],e.length>0&&this.contextHash)try{const t=yield this.rootService.addLoadingPromise(this._sendFileListRequest(e)),r=t.getErrorsList();if(r.length>0)for(const n of r){let t=n.getRowNumber(),r=n.getErrorMsg();this.errors.push({recordIndex:t,row:e[t-1],errors:r})}this.uploadMsg=t.getSuccessMsg(),this.submitted=!0}catch(t){console.error("[EventTicketHolderUploadComponent] upload file error: ",t),this.snackBar.open("An error occured while processing your file.")}}))}_sendFileListRequest(e){const t=new a.AddEventTicketsRequest;t.setContextHash(this.contextHash);const r=new c.d,n=new c.s,o=new c.i;return e.forEach(e=>{const s=new a.EventTicket;s.setEmail(r.getValue(e)),s.setStudentNumber(n.getValue(e));const i=o.getValues(e);if(i){let e=[];e=i.map(e=>{const t=new a.EventGuest;return t.setGuestName(e),t}),s.setGuestsList(e)}t.addTicket(s)}),this.eventService.sendAddEventTicketRequest(t)}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](o.a),n["\u0275\u0275directiveInject"](l.a),n["\u0275\u0275directiveInject"](d.k),n["\u0275\u0275directiveInject"](p.FeedEventManager),n["\u0275\u0275directiveInject"](u.b),n["\u0275\u0275directiveInject"](g.a),n["\u0275\u0275directiveInject"](f.b),n["\u0275\u0275directiveInject"](h.b))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-event-ticket-holder-upload"]],decls:4,vars:5,consts:[[4,"mgOverlayStructure","mgOverlayStructureRegion"],["class","ticket-file-label mg-button-hover-harbour",4,"ngIf"],["title","Import Your Ticket List","hideNavItem","true",3,"fields","file","listParsed","headersChanged","listSubmitted",4,"ngIf"],[4,"ngIf"],["overlayNavTop",""],["icon","back",1,"mg-align-left",3,"click"],[1,"ticket-file-label","mg-button-hover-harbour"],[1,"title"],["name","bulkTicketFileInput","icon","list_file-o","compactIcon","list_file-o","accept",".xlsx, .xls, .csv, text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","friendlyName","your CSV or Excel file",3,"ngModel","showFileDetails","ngModelOptions","ngModelChange"],["title","Import Your Ticket List","hideNavItem","true",3,"fields","file","listParsed","headersChanged","listSubmitted"],[3,"rowsWithErrors","message","headers","closeSummary"]],template:function(e,t){1&e&&(n["\u0275\u0275template"](0,R,4,0,"div",0),n["\u0275\u0275template"](1,S,6,4,"label",1),n["\u0275\u0275template"](2,_,2,4,"mg-xls-list-uploader",2),n["\u0275\u0275template"](3,x,2,3,"ng-container",3)),2&e&&(n["\u0275\u0275property"]("mgOverlayStructure",!0)("mgOverlayStructureRegion","top"),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",0==t.files.length),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.fileUploaded&&!t.submitted),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.submitted))},directives:[m.a,d.o,v.a,C.a,E.t,E.w,w.a,y.a],pipes:[d.b],styles:['@import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");[_nghost-%COMP%]{--feed-item-margin-vert:0px;--feed-item-margin-side:0px;display:block;text-align:center}p[_ngcontent-%COMP%]{font-size:14px}p.title[_ngcontent-%COMP%]{font-weight:700}']}),e})();var k=r("u9T3"),L=r("CO6v"),M=r("9F0b"),j=r("kvmc"),O=r("gU2t"),T=r("CL15"),A=r("mE1D"),P=r("uhF5");let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({imports:[[T.a,L.a,O.a,M.c,j.a,A.s,P.a,d.c,k.a,E.m]]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({imports:[[N,o.k.forChild([{path:"",component:I}])]]}),e})()},IPaV:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("mrSG"),o=r("8Y7J"),s=r("QPZY"),i=r("mI3D"),a=r("ypKM"),c=r("Tcc+");let l=(()=>{class e{constructor(e,t){this.errorReporter=e,this.analytics=t}sendErrorReport(e,t,r=0){return Object(n.a)(this,void 0,void 0,(function*(){let n=new i.ErrorReportRequest,o=new i.ErrorReportResponse;console.log("GRPCErrorReportRequest: ",n),console.log("GRPCErrorReportResponse: ",o),this.analytics.sendException(`[${e}]: ${t}`,r),n.setErrorPriority(r),n.setErrorMessage(t),n.setErrorContext(e),o=yield this.errorReporter.sendErrorReport(n).catch(e=>{console.error("[ErrorReporter] sendErrorReport error",e);let t=new i.ErrorReportResponse;return t.setStatus(s.StatusCode.ERROR),t}),console.log("Error Response Status:",o.getStatus()),console.log("Error Response error_handler_override:",o.getErrorHandlerOverride())}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](a.ErrorReporter),o["\u0275\u0275inject"](c.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dfi4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorReporterClient=t.LocaleSyncClient=t.AppConfigClient=t.ErrorReporter=t.LocaleSync=t.AppConfig=void 0;const n=r("mI3D");class o{}t.AppConfig=o,o.serviceName="AppConfig",o.getAppConfig={methodName:"getAppConfig",service:o,requestStream:!1,responseStream:!1,requestType:n.AppConfigRequest,responseType:n.AppConfigResponse};class s{}t.LocaleSync=s,s.serviceName="LocaleSync",s.getLocaleSync={methodName:"getLocaleSync",service:s,requestStream:!1,responseStream:!1,requestType:n.LocaleSyncRequest,responseType:n.LocaleSyncResponse};class i{}t.ErrorReporter=i,i.serviceName="ErrorReporter",i.sendErrorReport={methodName:"sendErrorReport",service:i,requestStream:!1,responseStream:!1,requestType:n.ErrorReportRequest,responseType:n.ErrorReportResponse},t.AppConfigClient=class{getAppConfig(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},t.LocaleSyncClient=class{getLocaleSync(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},t.ErrorReporterClient=class{sendErrorReport(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}},ypKM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorReporter=t.LocaleSync=t.AppConfig=void 0,r("8Y7J");const n=r("+6wJ"),o=r("dfi4"),s=r("8Y7J");class i{constructor(e){this._ngZone=e}getAppConfig(e,t,r){let s,i,a;"function"==typeof t?i=t:(a=t,i=r),i||(s=new Promise((e,t)=>{i=(r,n)=>{r?t(r):e(n)}}));let c=null,l=n.grpc.invoke(o.AppConfig.getAppConfig,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>c=e,onMessage:e=>this._ngZone.run(()=>{i(null,e,c||new n.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=n.grpc.Code.OK){let r=new Error(t);r.code=e,i(r)}})});return s.cancel=()=>l.close(),s}}t.AppConfig=i,i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(s.NgZone))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});class a{constructor(e){this._ngZone=e}getLocaleSync(e,t,r){let s,i,a;"function"==typeof t?i=t:(a=t,i=r),i||(s=new Promise((e,t)=>{i=(r,n)=>{r?t(r):e(n)}}));let c=null,l=n.grpc.invoke(o.LocaleSync.getLocaleSync,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>c=e,onMessage:e=>this._ngZone.run(()=>{i(null,e,c||new n.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=n.grpc.Code.OK){let r=new Error(t);r.code=e,i(r)}})});return s.cancel=()=>l.close(),s}}t.LocaleSync=a,a.\u0275fac=function(e){return new(e||a)(s.\u0275\u0275inject(s.NgZone))},a.\u0275prov=s.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"});class c{constructor(e){this._ngZone=e}sendErrorReport(e,t,r){let s,i,a;"function"==typeof t?i=t:(a=t,i=r),i||(s=new Promise((e,t)=>{i=(r,n)=>{r?t(r):e(n)}}));let c=null,l=n.grpc.invoke(o.ErrorReporter.sendErrorReport,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:a,onHeaders:e=>c=e,onMessage:e=>this._ngZone.run(()=>{i(null,e,c||new n.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=n.grpc.Code.OK){let r=new Error(t);r.code=e,i(r)}})});return s.cancel=()=>l.close(),s}}t.ErrorReporter=c,c.\u0275fac=function(e){return new(e||c)(s.\u0275\u0275inject(s.NgZone))},c.\u0275prov=s.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"})}}]);
//# sourceMappingURL=minga-app-src-app-components-Overlay-EventTicketHolderUpload-EventTicketHolderUploadRouting-module-es2015.js.map