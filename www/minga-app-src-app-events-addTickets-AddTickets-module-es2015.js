(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{vgkS:function(e,t,n){"use strict";n.r(t),n.d(t,"routes",(function(){return k})),n.d(t,"AddTicketsModule",(function(){return S}));var s=n("8Y7J"),i=n("iInd"),r=n("mrSG"),a=n("rBtp"),c=n("biMj"),o=n("sK7p"),d=n("EmsZ"),u=n("tfHx"),v=n("GFah"),h=n("5MXc");let l=(()=>{class e extends a.a{constructor(e,t,n,s,i){super(i,n),this.eventService=e,this.eventManagementService=t,this.dialog=n,this.rootService=s,this.ds=i,this.pageTitle="Add Tickets",this.canAddSaveWithBarcodeScanner=!0}getItemId(e){return e.personHash}save(){return Object(r.a)(this,void 0,void 0,(function*(){const e=this.eventManagementService.getEventContextHash();if(e&&this.selected.map(e=>e.personHash).length){const t=new c.AddEventTicketsRequest,n=this.selected.map(e=>{const t=new c.EventTicket;return t.setEmail(e.email),t});return t.setContextHash(e),t.setTicketList(n),yield this.rootService.addLoadingPromise(this.eventService.addEventTickets(t)),yield this.showSuccessDialog("Added Tickets"),this.clear(),{shouldClose:!0}}return{shouldClose:!0}}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](o.Event),s["\u0275\u0275inject"](d.a),s["\u0275\u0275inject"](u.e),s["\u0275\u0275inject"](v.a),s["\u0275\u0275inject"](h.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var p=n("zPzN"),f=n("oTGS"),m=n("oy35"),g=n("OeFH");const k=[{path:"",component:m.a,canDeactivate:[f.c],resolve:{EventManagementResolver:p.a}}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[{provide:g.a,useClass:h.a},{provide:a.a,useClass:l},p.a],imports:[[f.a,m.b,i.k.forChild(k)]]}),e})()}}]);
//# sourceMappingURL=minga-app-src-app-events-addTickets-AddTickets-module-es2015.js.map