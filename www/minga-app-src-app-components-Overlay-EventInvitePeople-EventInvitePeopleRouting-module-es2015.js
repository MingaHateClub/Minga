(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{tgmZ:function(e,t,n){"use strict";n.r(t),n.d(t,"EventInvitePeopleRoutingModule",(function(){return E}));var i=n("8Y7J"),o=n("iInd"),a=n("mrSG"),s=n("5km/"),c=n("1Ell"),r=n("SVse"),l=n("M2HC"),d=n("zeEq"),p=n("iELJ"),g=n("GFah"),m=n("aM+s"),h=n("h3Sd"),u=n("SYVq"),v=n("ZnzJ"),f=n("ura0");function x(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",8),i["\u0275\u0275text"](1," Who's invited to this event!\n"),i["\u0275\u0275elementEnd"]())}function C(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",8),i["\u0275\u0275text"](1," No one has been invited to this event yet. "),i["\u0275\u0275elementEnd"]())}function k(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",9),i["\u0275\u0275text"](1," Name\n"),i["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",15),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const t=i["\u0275\u0275nextContext"]().$implicit;return i["\u0275\u0275nextContext"]().checkInUser(t.personHash)})),i["\u0275\u0275elementStart"](1,"p",16),i["\u0275\u0275text"](2,"Check in"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function O(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275elementStart"](1,"div",10),i["\u0275\u0275elementStart"](2,"mg-person-list-element",11),i["\u0275\u0275elementStart"](3,"div",12),i["\u0275\u0275element"](4,"div",13),i["\u0275\u0275template"](5,b,3,0,"button",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("person",e)("showContent",!0)("noWrap",!0),i["\u0275\u0275advance"](2),i["\u0275\u0275classProp"]("less-margin",!e.checkedInTime),i["\u0275\u0275property"]("ngClass","status--"+e.currentStatus),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!e.checkedInTime)}}let P=(()=>{class e{constructor(e,t,n,i,o,a,s,c,r){this.router=e,this.route=t,this._location=n,this.eventContentService=i,this.feedEventManager=o,this.dialog=a,this.rootService=s,this.eventConfirmationDialog=c,this.eventCheckInService=r,this.people=[],this.eventHasTickets=!1,this.setupRouterListener()}registerOnOverlayConfig(e){e({contentBackground:"#ffffff",fullContentBackground:"#ffffff",borderRadius:"0px"})}registerOnOverlayPreviousUpdate(e){this.onRegisterOnOverlayPreviousUpdate=e}registerOnOverlayNextUpdate(e){this.onRegisterOnOverlayNextUpdate=e}setupRouterListener(){this.route.params.subscribe(e=>{"hash"in e?(this.contextHash=e.hash,this.eventContentService.getEventInvitePeople(this.contextHash).then(e=>this.people=e),this.eventHasTickets=this.eventContentService.getTicketsRequired(this.contextHash)||!1):(console.error("[EventInvitePeople] no hash available to get content!"),this._location.back())})}checkInUser(e){return Object(a.a)(this,void 0,void 0,(function*(){if(this.eventHasTickets)this.eventConfirmationDialog.open({data:{confirmText:"Check In",confirmPretext:"Confirm check in",eventContextHash:this.contextHash,status:c.EventStatus.CHECKED_IN,selectedPersonhashes:[e],canUpdate:e=>!e.checkInTime,onSave:(e,t)=>Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.eventCheckInService.checkinUsers(this.contextHash,e,[]);return t&&(null==e||e.forEach(e=>{const t=this.people.find(t=>t.personHash==e);t&&(t.checkedInTime=(new Date).getTime(),t.currentStatus="CHECKED_IN")})),t}))},panelClass:["mg-bordered-dialog","mg-no-padding-dialog"],backdropClass:"mg-white-backdrop"});else{const t=this.eventCheckInService.checkinUsers(this.contextHash,[e],[]);if(yield this.rootService.addLoadingPromise(t),yield t){const t=this.people.find(t=>t.personHash==e);t&&(t.checkedInTime=(new Date).getTime(),t.currentStatus="CHECKED_IN"),this.dialog.open(s.k,{data:{text:"Checkin complete"}})}}}))}get overlayPrevious(){return{icon:"back",text:"Back"}}hasOverlayPrevious(){return this.overlayPrevious}onOverlayPrevious(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.onOverlayClose()}))}onOverlayClose(){return Object(a.a)(this,void 0,void 0,(function*(){return this._location.back(),!0}))}launchInvitePeopleSelector(){this.router.navigate(["",{outlets:{o:["view","event~people","invite-people",this.contextHash]}}],{})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.g),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](r.k),i["\u0275\u0275directiveInject"](l.b),i["\u0275\u0275directiveInject"](d.FeedEventManager),i["\u0275\u0275directiveInject"](p.b),i["\u0275\u0275directiveInject"](g.a),i["\u0275\u0275directiveInject"](m.a),i["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-event-invite-people"]],decls:10,vars:5,consts:[[3,"component"],["class","mg-centered list-heading",4,"ngIf","ngIfElse"],["emptyList",""],["class","list-label",4,"ngIf"],[1,"list-container"],[4,"ngFor","ngForOf"],[1,"list-footer"],["mgBubbleBtn","",1,"invite-button",3,"click"],[1,"mg-centered","list-heading"],[1,"list-label"],[1,"going-person"],[1,"no-border",3,"person","showContent","noWrap"],[1,"person-list-content"],[1,"status",3,"ngClass"],["mgBubbleBtn","","class","checkin-button",3,"click",4,"ngIf"],["mgBubbleBtn","",1,"checkin-button",3,"click"],[1,"checkin-text"]],template:function(e,t){if(1&e&&(i["\u0275\u0275element"](0,"mg-legacy-overlay-nav",0),i["\u0275\u0275template"](1,x,2,0,"p",1),i["\u0275\u0275template"](2,C,2,0,"ng-template",null,2,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275template"](4,k,2,0,"div",3),i["\u0275\u0275elementStart"](5,"div",4),i["\u0275\u0275template"](6,O,6,7,"ng-container",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",6),i["\u0275\u0275elementStart"](8,"button",7),i["\u0275\u0275listener"]("click",(function(){return t.launchInvitePeopleSelector()})),i["\u0275\u0275text"](9," Invite "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](3);i["\u0275\u0275property"]("component",t),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.people.length>0)("ngIfElse",e),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",t.people.length>0),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",t.people)}},directives:[u.a,r.o,r.n,v.a,r.m,f.a],styles:['@import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");[_nghost-%COMP%]{--feed-item-margin-vert:0px;--feed-item-margin-side:0px}.list-heading[_ngcontent-%COMP%]{font-weight:700;color:#00336a;margin:30px 0}@media (orientation:landscape){.list-heading[_ngcontent-%COMP%]{font-size:4.2666666667vh}}@media (orientation:portrait){.list-heading[_ngcontent-%COMP%]{font-size:4.2666666667vw}}@media (orientation:landscape) and (max-height:375px){.list-heading[_ngcontent-%COMP%]{font-size:16px}}@media (orientation:portrait) and (max-width:375px){.list-heading[_ngcontent-%COMP%]{font-size:16px}}@media (min-width:398.4375px){.list-heading[_ngcontent-%COMP%]{font-size:17px}}.list-label[_ngcontent-%COMP%]{font-weight:700;color:#00336a;margin-left:28px;margin-bottom:10px}@media (orientation:landscape){.list-label[_ngcontent-%COMP%]{font-size:3.4666666667vh}}@media (orientation:portrait){.list-label[_ngcontent-%COMP%]{font-size:3.4666666667vw}}@media (orientation:landscape) and (max-height:375px){.list-label[_ngcontent-%COMP%]{font-size:13px}}@media (orientation:portrait) and (max-width:375px){.list-label[_ngcontent-%COMP%]{font-size:13px}}@media (min-width:403.8461538462px){.list-label[_ngcontent-%COMP%]{font-size:14px}}@media (max-width:599px){.list-label[_ngcontent-%COMP%]{margin-left:18px}}.list-container[_ngcontent-%COMP%]{width:100%}.going-person-list[_ngcontent-%COMP%]{display:block;margin-bottom:40px}.going-person-list[_ngcontent-%COMP%]   .going-person[_ngcontent-%COMP%]{padding:0 2em;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ccc}@media (max-width:599px){.going-person-list[_ngcontent-%COMP%]   .going-person[_ngcontent-%COMP%]{padding:0 .5em}}.icon.mat-checkmark[_ngcontent-%COMP%]{height:1em;display:inline-block;width:1em;vertical-align:middle;background-color:#737373;-webkit-mask-image:url(/assets/mat-checkmark.svg);mask-image:url(/assets/mat-checkmark.svg);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}mg-person-list-element[_ngcontent-%COMP%]{--mg-avatar-size:35px;--mg-person-font-size:14px}@media (max-width:599px){mg-person-list-element[_ngcontent-%COMP%]{--mg-person-font-size:12px;--mg-full-name-width:161px}}.person-list-content[_ngcontent-%COMP%]{display:flex}.status[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;height:31px;width:30px;margin-right:30px}.status--GOING[_ngcontent-%COMP%]{background-image:url(/assets/event/i_m-going.svg)}.status--CHECKED_IN[_ngcontent-%COMP%]{background-image:url(/assets/event/checked-in.svg)}.status--CHECKED_OUT[_ngcontent-%COMP%]{background-image:url(/assets/event/checked-out.svg)}.status--NOT_GOING[_ngcontent-%COMP%]{background-image:url(/assets/event/not-going.svg)}.less-margin[_ngcontent-%COMP%]{margin-right:5px}.checkin-button[_ngcontent-%COMP%]{font-weight:700}@media (orientation:landscape){.checkin-button[_ngcontent-%COMP%]{padding-top:2.1333333333vh}}@media (orientation:portrait){.checkin-button[_ngcontent-%COMP%]{padding-top:2.1333333333vw}}@media (orientation:landscape) and (max-height:375px){.checkin-button[_ngcontent-%COMP%]{padding-top:8px}}@media (orientation:portrait) and (max-width:375px){.checkin-button[_ngcontent-%COMP%]{padding-top:8px}}@media (min-width:468.75px){.checkin-button[_ngcontent-%COMP%]{padding-top:10px}}@media (orientation:landscape){.checkin-button[_ngcontent-%COMP%]{padding-bottom:2.1333333333vh}}@media (orientation:portrait){.checkin-button[_ngcontent-%COMP%]{padding-bottom:2.1333333333vw}}@media (orientation:landscape) and (max-height:375px){.checkin-button[_ngcontent-%COMP%]{padding-bottom:8px}}@media (orientation:portrait) and (max-width:375px){.checkin-button[_ngcontent-%COMP%]{padding-bottom:8px}}@media (min-width:468.75px){.checkin-button[_ngcontent-%COMP%]{padding-bottom:10px}}.checkin-text[_ngcontent-%COMP%]{color:#fff;margin:0}@media (orientation:landscape){.checkin-text[_ngcontent-%COMP%]{font-size:2.6666666667vh}}@media (orientation:portrait){.checkin-text[_ngcontent-%COMP%]{font-size:2.6666666667vw}}@media (orientation:landscape) and (max-height:375px){.checkin-text[_ngcontent-%COMP%]{font-size:10px}}@media (orientation:portrait) and (max-width:375px){.checkin-text[_ngcontent-%COMP%]{font-size:10px}}@media (min-width:487.5px){.checkin-text[_ngcontent-%COMP%]{font-size:13px}}.list-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%;border-top:1px solid #dedede;background-color:#fff;position:-webkit-sticky;position:sticky;bottom:0}.invite-button[_ngcontent-%COMP%]{font-size:14px;font-weight:700;line-height:10px;width:145px;margin:20px}']}),e})();var _=n("u9T3"),M=n("CO6v"),w=n("T0Jv"),I=n("CL15");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[w.a,I.a,M.a,r.c,_.a]]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[y,o.k.forChild([{path:"",component:P}])]]}),e})()}}]);
//# sourceMappingURL=minga-app-src-app-components-Overlay-EventInvitePeople-EventInvitePeopleRouting-module-es2015.js.map