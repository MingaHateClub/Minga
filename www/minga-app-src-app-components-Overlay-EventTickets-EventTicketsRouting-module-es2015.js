(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"2ShP":function(e,t,n){"use strict";n.r(t),n.d(t,"EventTicketsRoutingModule",(function(){return U}));var o=n("8Y7J"),r=n("iInd"),i=n("mrSG"),c=n("vJwY"),s=n("IPaV"),a=n("SVse"),l=n("M2HC"),p=n("ZnCC"),d=n("zeEq"),g=n("iELJ"),m=n("GFah"),u=n("sK7p"),f=n("UWMR"),v=n("Hp2Z"),h=n("05dM");function C(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"p",13),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function x(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",11),o["\u0275\u0275template"](1,C,2,1,"p",12),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",e.person.guestsList)}}function y(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"mat-dialog-content",4),o["\u0275\u0275elementStart"](1,"div",5),o["\u0275\u0275elementStart"](2,"p",6),o["\u0275\u0275elementStart"](3,"span",7),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](5,"'s Guests "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](6,"div",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](7,"div",9),o["\u0275\u0275template"](8,x,2,1,"div",10),o["\u0275\u0275element"](9,"div",9),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"](),t=o["\u0275\u0275reference"](6);o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](e.person.displayName),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",e.person.guestsList.length)("ngIfElse",t)}}function k(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",14),o["\u0275\u0275element"](1,"mg-empty-state",15),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("title","There are no guests for this ticket holder"))}let E=(()=>{class e{constructor(e,t,n){if(this.cdr=e,this.matDialogRef=t,this.data=n,!n.eventPerson)throw this.close(),new Error("EventGuestListDialogComponent missing event person!");this.person=n.eventPerson}onClick(){this.close()}close(){this.matDialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](g.g),o["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-event-guest-list-dialog"]],hostBindings:function(e,t){1&e&&o["\u0275\u0275listener"]("click",(function(){return t.onClick()}))},decls:7,vars:1,consts:[["fxLayout","row","fxLayoutAlign","start center",1,"close"],["icon","close",3,"click"],["class","content",4,"ngIf"],["emptyStateTmpl",""],[1,"content"],[1,"header"],[1,"title","mg-headline2"],[1,"name"],[1,"divider"],[1,"flex-fill"],["class","guest-list mg-bodycopy",4,"ngIf","ngIfElse"],[1,"guest-list","mg-bodycopy"],["class","guest",4,"ngFor","ngForOf"],[1,"guest"],[1,"empty-state-container"],[3,"title"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"label",0),o["\u0275\u0275elementStart"](1,"mg-button-icon",1),o["\u0275\u0275listener"]("click",(function(){return t.close()})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"p"),o["\u0275\u0275text"](3,"Close"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](4,y,10,3,"mat-dialog-content",2),o["\u0275\u0275template"](5,k,2,1,"ng-template",null,3,o["\u0275\u0275templateRefExtractor"])),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",t.person))},directives:[v.a,a.o,g.e,a.n,h.a],styles:[".content[_ngcontent-%COMP%]{flex-direction:column;flex:1;padding:0 0 28px}.close[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{display:flex;align-items:center}.close[_ngcontent-%COMP%]{position:absolute;top:0;left:0;transform:translateY(-95%);font-size:20px;cursor:pointer}.divider[_ngcontent-%COMP%]{border-top:1px solid #ccc;margin-bottom:16px}.flex-fill[_ngcontent-%COMP%]{flex:1 1 auto}.header[_ngcontent-%COMP%]{text-align:center;width:100%}.empty-state-container[_ngcontent-%COMP%], .guest-list[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{padding:0 34px;box-sizing:border-box}.guest[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"],changeDetection:0}),e})();var w=n("CO6v"),b=n("NG9B");let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[w.a,b.a,a.c,g.f]]}),e})(),S=(()=>{class e{constructor(e){this.matDialog=e}open(e){return this.matDialog.open(E,Object.assign(Object.assign({},e),{panelClass:["mg-bordered-dialog","mg-no-padding-dialog"],backdropClass:"mg-white-backdrop"}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](g.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=n("BxgO"),P=n("uplL"),R=n("2FiO"),M=n("VDRc");function I(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",null,3),o["\u0275\u0275elementStart"](2,"mg-overlay-nav-item",4),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().onOverlayPrevious()})),o["\u0275\u0275text"](3," Back "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"mg-overlay-nav-item",5),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().onClicEllipsis(t)})),o["\u0275\u0275element"](5,"mg-ellipsis"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function L(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",12),o["\u0275\u0275listener"]("contextmenu",(function(n){o["\u0275\u0275restoreView"](e);const r=t.index;return o["\u0275\u0275nextContext"](2).onPersonRowClickEllipsis(n,r)})),o["\u0275\u0275elementStart"](1,"div",13),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",14),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](e);const n=t.$implicit;return o["\u0275\u0275nextContext"](2).openGuestListDialog(n)})),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",15),o["\u0275\u0275listener"]("click",(function(n){o["\u0275\u0275restoreView"](e);const r=t.index;return o["\u0275\u0275nextContext"](2).onPersonRowClickEllipsis(n,r)})),o["\u0275\u0275element"](6,"mg-ellipsis"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.displayName),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",e.ticketCount," ")}}function j(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"div",6),o["\u0275\u0275elementStart"](2,"div"),o["\u0275\u0275elementStart"](3,"span"),o["\u0275\u0275text"](4,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",7),o["\u0275\u0275element"](6,"img",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](7,"div",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",10),o["\u0275\u0275template"](9,L,7,2,"div",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngForOf",e.people)}}function A(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",16),o["\u0275\u0275elementStart"](1,"p",17),o["\u0275\u0275text"](2,"There are no tickets added yet to this event."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",18),o["\u0275\u0275elementStart"](4,"button",19),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().gotoUploadList()})),o["\u0275\u0275text"](5," Upload Advanced Ticket List "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"button",20),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().gotoAddTicket()})),o["\u0275\u0275text"](7," Add Ticket Holder "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function T(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",22),o["\u0275\u0275elementStart"](1,"button",20),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"](2).gotoAddTicket()})),o["\u0275\u0275text"](2," Add Ticket Holder "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function D(e,t){1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,T,3,0,"div",21),o["\u0275\u0275elementContainerEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("mgOverlayStructure",!0)("mgOverlayStructureRegion","bottom"))}let G=(()=>{class e{constructor(e,t,n,o,r,i,c,s,a,l,p,d){this.router=e,this.route=t,this.errorReporting=n,this._location=o,this.eventContentService=r,this.contentViewsService=i,this.feedEventManager=c,this.dialog=s,this.rootService=a,this.eventService=l,this.snackBar=p,this.eventGuestDialog=d,this.people=[],this.setupRouterListener()}setupRouterListener(){this.route.params.subscribe(e=>{"hash"in e?(this.contextHash=e.hash,this.eventContentService.getEventTickets(this.contextHash).then(e=>this.people=e)):(console.error("[EventTicketsComponent] no hash available to get content!"),this._location.back())})}onOverlayPrevious(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.onOverlayClose()}))}onOverlayClose(){return Object(i.a)(this,void 0,void 0,(function*(){return this._location.back(),!0}))}_handleEllipsisClick(e,t){e.preventDefault(),e.stopImmediatePropagation(),this.rootService.openGlobalMenu({x:e.x,y:e.y,items:t})}onClicEllipsis(e){return Object(i.a)(this,void 0,void 0,(function*(){this._handleEllipsisClick(e,[{name:"Download Ticket List",click:e=>this.downloadList()},{name:"Upload Advanced Ticket List",click:e=>this.gotoUploadList()}])}))}onPersonRowClickEllipsis(e,t){return Object(i.a)(this,void 0,void 0,(function*(){if(t>=this.people.length)return void console.error(`[EventTicketsComponent] personIndex ${t} out of bounds.`);const n=this.people[t];n?this._handleEllipsisClick(e,[{name:"Delete Person",click:e=>this._deletePerson(n.personHash,t)}]):console.error(`[EventTicketsComponent] personIndex ${t} gave falsey person data`)}))}downloadList(){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.eventContentService.exportEventTickets(this.contextHash);let t="",n=new Uint8Array(0);yield new Promise((o,r)=>{e.subscribe(e=>{if(e.hasChunk()){const t=e.getChunk_asU8(),o=new Uint8Array(n.length+t.length);o.set(n),o.set(t,n.length),n=o}else e.hasFilename()&&(t=e.getFilename())},r,o)}),Object(c.a)(n,t)}))}_deletePerson(e,t){return Object(i.a)(this,void 0,void 0,(function*(){const n=this.eventContentService.removePeopleFromEvent(this.contextHash,[e]);try{yield this.rootService.addLoadingPromise(n),this.snackBar.open("Person successfully removed from event."),this.people.splice(t,1)}catch(o){console.error("[EventTicketsComponent] error on removePeopleFromEvent(): ",o),this.snackBar.open("An error occured, please try again.")}}))}gotoUploadList(){this.router.navigate(["",{outlets:{o:["view","event~people","event-ticket-holder-upload",this.contextHash]}}],{})}gotoAddTicket(){this.router.navigate(["",{outlets:{o:["view","event~people","add-ticket",this.contextHash]}}],{})}openGuestListDialog(e){this.eventGuestDialog.open({data:{eventPerson:e}})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.g),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](a.k),o["\u0275\u0275directiveInject"](l.b),o["\u0275\u0275directiveInject"](p.ContentViews),o["\u0275\u0275directiveInject"](d.FeedEventManager),o["\u0275\u0275directiveInject"](g.b),o["\u0275\u0275directiveInject"](m.a),o["\u0275\u0275directiveInject"](u.Event),o["\u0275\u0275directiveInject"](f.b),o["\u0275\u0275directiveInject"](S))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-event-tickets"]],decls:4,vars:5,consts:[[4,"mgOverlayStructure","mgOverlayStructureRegion"],[4,"ngIf"],["class","no-tickets-container",4,"ngIf"],["overlayNavTop",""],["icon","back",1,"mg-align-left",3,"click"],[1,"mg-align-right",3,"click"],[1,"title"],["fxLayout","row","fxLayoutAlign.gt-xs","start center","fxLayoutAlign.xs","center center",1,"ticket-yellow"],["src","assets/ticket-events-icon.png"],[1,"ellipsis-col-spacer"],[1,"going-person-list"],["class","going-person",3,"contextmenu",4,"ngFor","ngForOf"],[1,"going-person",3,"contextmenu"],[1,"display-name","mg-bodycopy"],["fxLayout","row","fxLayoutAlign.gt-xs","start center","fxLayoutAlign.xs","center center","title","See Guest List",1,"ticket-yellow","mg-bodycopy","ticket-count",3,"click"],[1,"ellipsis-col",3,"click"],[1,"no-tickets-container"],[1,"mg-minicopy"],[1,"buttons-container"],["mgBubbleBtn","",3,"click"],["mgBubbleBtn","",1,"add-ticket-button",3,"click"],["class","list-footer",4,"mgOverlayStructure","mgOverlayStructureRegion"],[1,"list-footer"]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,I,6,0,"div",0),o["\u0275\u0275template"](1,j,10,1,"ng-container",1),o["\u0275\u0275template"](2,A,8,0,"div",2),o["\u0275\u0275template"](3,D,2,2,"ng-container",1)),2&e&&(o["\u0275\u0275property"]("mgOverlayStructure",!0)("mgOverlayStructureRegion","top"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.people.length>0),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",0==t.people.length),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.people.length>0))},directives:[O.a,a.o,P.a,R.a,M.e,M.d,a.n],styles:['@import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");[_nghost-%COMP%]{--feed-item-margin-vert:0px;--feed-item-margin-side:0px;display:block;min-height:calc(100vh - 124px);margin-top:24px}@media (min-width:600px){[_nghost-%COMP%]{margin-top:32px;min-height:0}}.ticket-yellow[_ngcontent-%COMP%]{color:#a89c68}.ticket-count[_ngcontent-%COMP%]{cursor:pointer}.ticket-count[_ngcontent-%COMP%]:hover{text-decoration:underline}.going-person[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 5em 3em;align-items:center;gap:12px;font-weight:700;font-size:.8em;padding-left:17px;padding-right:17px}.going-person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5em}@media (min-width:600px){.going-person[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{grid-template-columns:auto 10em 3em;margin-left:34px;margin-right:34px}}@media (min-width:599px){.title[_ngcontent-%COMP%]{margin-right:44px}}.going-person-list[_ngcontent-%COMP%]{display:block;margin-bottom:40px}.going-person-list[_ngcontent-%COMP%]   .going-person[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;border-bottom:1px solid rgba(0,0,0,.2)}.icon.mat-checkmark[_ngcontent-%COMP%]{height:1em;display:inline-block;width:1em;vertical-align:middle;background-color:#737373;-webkit-mask-image:url(/assets/mat-checkmark.svg);mask-image:url(/assets/mat-checkmark.svg);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}mg-ellipsis[_ngcontent-%COMP%]{--mg-ellipsis-dot-color:#036}.no-tickets-container[_ngcontent-%COMP%]{padding:0 16px;text-align:center;max-width:50%;margin:0 auto 24px}@media (min-width:600px){.no-tickets-container[_ngcontent-%COMP%]{margin-bottom:32px}}.no-tickets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;row-gap:8px}.add-ticket-button[_ngcontent-%COMP%]{background:linear-gradient(#ebd270,#c9a723);border:none}.add-ticket-button[_ngcontent-%COMP%]:hover{background:linear-gradient(#f4e7b3,#e2c557)!important}.list-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%;border-top:1px solid #dedede;background-color:#fff;padding:8px;box-sizing:border-box}']}),e})();var N=n("u9T3"),H=n("gU2t"),V=n("CL15");let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[V.a,w.a,H.a,_,a.c,N.a]]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[F,r.k.forChild([{path:"",component:G}])]]}),e})()},IPaV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("mrSG"),r=n("8Y7J"),i=n("QPZY"),c=n("mI3D"),s=n("ypKM"),a=n("Tcc+");let l=(()=>{class e{constructor(e,t){this.errorReporter=e,this.analytics=t}sendErrorReport(e,t,n=0){return Object(o.a)(this,void 0,void 0,(function*(){let o=new c.ErrorReportRequest,r=new c.ErrorReportResponse;console.log("GRPCErrorReportRequest: ",o),console.log("GRPCErrorReportResponse: ",r),this.analytics.sendException(`[${e}]: ${t}`,n),o.setErrorPriority(n),o.setErrorMessage(t),o.setErrorContext(e),r=yield this.errorReporter.sendErrorReport(o).catch(e=>{console.error("[ErrorReporter] sendErrorReport error",e);let t=new c.ErrorReportResponse;return t.setStatus(i.StatusCode.ERROR),t}),console.log("Error Response Status:",r.getStatus()),console.log("Error Response error_handler_override:",r.getErrorHandlerOverride())}))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.ErrorReporter),r["\u0275\u0275inject"](a.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dfi4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorReporterClient=t.LocaleSyncClient=t.AppConfigClient=t.ErrorReporter=t.LocaleSync=t.AppConfig=void 0;const o=n("mI3D");class r{}t.AppConfig=r,r.serviceName="AppConfig",r.getAppConfig={methodName:"getAppConfig",service:r,requestStream:!1,responseStream:!1,requestType:o.AppConfigRequest,responseType:o.AppConfigResponse};class i{}t.LocaleSync=i,i.serviceName="LocaleSync",i.getLocaleSync={methodName:"getLocaleSync",service:i,requestStream:!1,responseStream:!1,requestType:o.LocaleSyncRequest,responseType:o.LocaleSyncResponse};class c{}t.ErrorReporter=c,c.serviceName="ErrorReporter",c.sendErrorReport={methodName:"sendErrorReport",service:c,requestStream:!1,responseStream:!1,requestType:o.ErrorReportRequest,responseType:o.ErrorReportResponse},t.AppConfigClient=class{getAppConfig(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},t.LocaleSyncClient=class{getLocaleSync(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},t.ErrorReporterClient=class{sendErrorReport(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}},ypKM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorReporter=t.LocaleSync=t.AppConfig=void 0,n("8Y7J");const o=n("+6wJ"),r=n("dfi4"),i=n("8Y7J");class c{constructor(e){this._ngZone=e}getAppConfig(e,t,n){let i,c,s;"function"==typeof t?c=t:(s=t,c=n),c||(i=new Promise((e,t)=>{c=(n,o)=>{n?t(n):e(o)}}));let a=null,l=o.grpc.invoke(r.AppConfig.getAppConfig,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:e=>a=e,onMessage:e=>this._ngZone.run(()=>{c(null,e,a||new o.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=o.grpc.Code.OK){let n=new Error(t);n.code=e,c(n)}})});return i.cancel=()=>l.close(),i}}t.AppConfig=c,c.\u0275fac=function(e){return new(e||c)(i.\u0275\u0275inject(i.NgZone))},c.\u0275prov=i.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"});class s{constructor(e){this._ngZone=e}getLocaleSync(e,t,n){let i,c,s;"function"==typeof t?c=t:(s=t,c=n),c||(i=new Promise((e,t)=>{c=(n,o)=>{n?t(n):e(o)}}));let a=null,l=o.grpc.invoke(r.LocaleSync.getLocaleSync,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:e=>a=e,onMessage:e=>this._ngZone.run(()=>{c(null,e,a||new o.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=o.grpc.Code.OK){let n=new Error(t);n.code=e,c(n)}})});return i.cancel=()=>l.close(),i}}t.LocaleSync=s,s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(i.NgZone))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"});class a{constructor(e){this._ngZone=e}sendErrorReport(e,t,n){let i,c,s;"function"==typeof t?c=t:(s=t,c=n),c||(i=new Promise((e,t)=>{c=(n,o)=>{n?t(n):e(o)}}));let a=null,l=o.grpc.invoke(r.ErrorReporter.sendErrorReport,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:e=>a=e,onMessage:e=>this._ngZone.run(()=>{c(null,e,a||new o.grpc.Metadata)}),onEnd:(e,t,n)=>this._ngZone.run(()=>{if(e!=o.grpc.Code.OK){let n=new Error(t);n.code=e,c(n)}})});return i.cancel=()=>l.close(),i}}t.ErrorReporter=a,a.\u0275fac=function(e){return new(e||a)(i.\u0275\u0275inject(i.NgZone))},a.\u0275prov=i.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"})}}]);
//# sourceMappingURL=minga-app-src-app-components-Overlay-EventTickets-EventTicketsRouting-module-es2015.js.map