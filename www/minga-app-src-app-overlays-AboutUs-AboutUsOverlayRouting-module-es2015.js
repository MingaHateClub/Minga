(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"2XWI":function(e,t,n){"use strict";n.r(t),n.d(t,"routes",(function(){return P})),n.d(t,"AboutUsOverlayRoutingModule",(function(){return O}));var a=n("8Y7J"),o=n("iInd"),i=n("D4XS"),r=n("Cfvw"),l=n("SVse"),m=n("Y9fu"),s=n("rR48"),c=n("5lxJ"),p=n("SYVq"),d=n("Tj54"),g=n("o4Yh"),u=n("SqCe"),h=n("YLVZ"),x=n("UhP/");function f(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275element"](1,"br"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("Publisher: ",e.publisher,"")}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275element"](1,"br"),a["\u0275\u0275text"](2,"Url: "),a["\u0275\u0275elementStart"](3,"a",13),a["\u0275\u0275text"](4),a["\u0275\u0275elementStart"](5,"mat-icon"),a["\u0275\u0275text"](6,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("href",e.url,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"]("",e.url," ")}}function v(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"mat-list-item",8),a["\u0275\u0275elementStart"](1,"h4",9),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"p",9),a["\u0275\u0275text"](4),a["\u0275\u0275template"](5,f,3,1,"span",12),a["\u0275\u0275template"](6,b,7,2,"span",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.name),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" License: ",e.license," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.publisher),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.url)}}let _=(()=>{class e{constructor(e,t,n,a,o){this._elementRef=e,this._location=t,this.linkOpener=n,this.messaging=a,this.appConfig=o,this.licenses=Object.keys(i.licenses).map(e=>{const t=i.licenses[e];return{get name(){return e},get license(){return t.licenses},get publisher(){return t.publisher},get url(){return t.url}}}),this.messagingPermissionStatus$=Object(r.a)(this.messaging.getPermissionStatus())}get version(){return this.appConfig.getAppVersion()}get platform(){return window.MINGA_APP_PLATFORM}get messagingStrategy(){return this.messaging.name}get messagingPermission(){return this.messaging.getPermissionStatus()}ngOnInit(){this._elementRef.nativeElement.parentElement.style.overflow="visible";const e=this._elementRef.nativeElement.getElementsByTagName("a");if(e&&!window.MINGA_APP_BROWSER)for(let t=0;t<e.length;++t){const n=e[t];n.href.includes("mailto:")&&!n.href.includes("tel:")||n.addEventListener("click",this.onAnchorClick.bind(this))}}onAnchorClick(e){e.preventDefault(),e.stopImmediatePropagation(),this.linkOpener.open(e.target.href)}onOverlayClose(){return this._elementRef.nativeElement.parentElement.style.overflow="hidden",this._location.back(),!0}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](l.k),a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-about-us"]],decls:103,vars:10,consts:[[3,"component"],[1,"about-us-content"],["href","https://www.pexels.com/","target","_blank"],["href","https://unsplash.com/","target","_blank"],["href","mailto:hello@minga.io"],[1,"bordered"],["mat-subheader",""],["margin","0",3,"path"],[1,"list-item"],["mat-line",""],["href","https://creativecommons.org/publicdomain/zero/1.0/","target","_blank"],["class","list-item",4,"ngFor","ngForOf"],[4,"ngIf"],["target","_blank",3,"href"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"mg-legacy-overlay-nav",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"p"),a["\u0275\u0275text"](3," You are running Minga version "),a["\u0275\u0275elementStart"](4,"strong"),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](6," on "),a["\u0275\u0275elementStart"](7,"strong"),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](9,". "),a["\u0275\u0275element"](10,"br"),a["\u0275\u0275text"](11," Messaging strategy is "),a["\u0275\u0275elementStart"](12,"strong"),a["\u0275\u0275text"](13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](14),a["\u0275\u0275pipe"](15,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"h1"),a["\u0275\u0275text"](17,"About Us"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"p"),a["\u0275\u0275text"](19," Minga is based in beautiful Kelowna, BC. We are a dedicated and growing team that every day, finds ways to connect people to each other, to inspiring and relevant content, and to their community. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"p"),a["\u0275\u0275text"](21," In developing Minga, we have partnered with some amazing teachers, students, experts, and leaders - we'd like to extend a heartfelt thank you for all of the time and wisdom you have provided. And a very loud shout-out to "),a["\u0275\u0275elementStart"](22,"a",2),a["\u0275\u0275text"](23,"Pexels "),a["\u0275\u0275elementStart"](24,"mat-icon"),a["\u0275\u0275text"](25,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](26," and "),a["\u0275\u0275elementStart"](27,"a",3),a["\u0275\u0275text"](28,"Unsplash "),a["\u0275\u0275elementStart"](29,"mat-icon"),a["\u0275\u0275text"](30,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](31," contributors for their amazing photography and images that we have been fortunate enough to utilize in our development. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"p"),a["\u0275\u0275text"](33," We welcome your feedback, comments, and questions. Please reach out to us at "),a["\u0275\u0275elementStart"](34,"a",4),a["\u0275\u0275text"](35,"hello@minga.io"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](36,". If you'd like, you may also write to us at: "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"p"),a["\u0275\u0275elementStart"](38,"strong"),a["\u0275\u0275text"](39,"Minga"),a["\u0275\u0275element"](40,"br"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](41,"Unit 301, 460 Doyle Avenue"),a["\u0275\u0275element"](42,"br"),a["\u0275\u0275text"](43,"Kelowna, BC"),a["\u0275\u0275element"](44,"br"),a["\u0275\u0275text"](45,"V1Y 0C2"),a["\u0275\u0275element"](46,"br"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](47,"mat-accordion"),a["\u0275\u0275elementStart"](48,"mat-expansion-panel",5),a["\u0275\u0275elementStart"](49,"mat-expansion-panel-header"),a["\u0275\u0275elementStart"](50,"mat-panel-title",6),a["\u0275\u0275text"](51," Privacy Policy "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](52,"div"),a["\u0275\u0275element"](53,"mg-page",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](54,"mat-expansion-panel",5),a["\u0275\u0275elementStart"](55,"mat-expansion-panel-header"),a["\u0275\u0275elementStart"](56,"mat-panel-title",6),a["\u0275\u0275text"](57," Terms of Use "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](58,"div"),a["\u0275\u0275element"](59,"mg-page",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](60,"mat-expansion-panel",5),a["\u0275\u0275elementStart"](61,"mat-expansion-panel-header"),a["\u0275\u0275elementStart"](62,"mat-panel-title",6),a["\u0275\u0275text"](63," Photo Sources "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](64,"div"),a["\u0275\u0275elementStart"](65,"mat-list"),a["\u0275\u0275elementStart"](66,"mat-list-item",8),a["\u0275\u0275elementStart"](67,"h4",9),a["\u0275\u0275text"](68,"Pexels"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](69,"p",9),a["\u0275\u0275text"](70," License: Creative Commons Zero "),a["\u0275\u0275elementStart"](71,"a",10),a["\u0275\u0275elementStart"](72,"mat-icon"),a["\u0275\u0275text"](73,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](74,"br"),a["\u0275\u0275text"](75,"Url: "),a["\u0275\u0275elementStart"](76,"a",2),a["\u0275\u0275text"](77,"https://www.pexels.com/ "),a["\u0275\u0275elementStart"](78,"mat-icon"),a["\u0275\u0275text"](79,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](80,"mat-list-item",8),a["\u0275\u0275elementStart"](81,"h4",9),a["\u0275\u0275text"](82,"Unsplash"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](83,"p",9),a["\u0275\u0275text"](84," License: Creative Commons Zero "),a["\u0275\u0275elementStart"](85,"a",10),a["\u0275\u0275elementStart"](86,"mat-icon"),a["\u0275\u0275text"](87,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](88,"br"),a["\u0275\u0275text"](89,"Url: "),a["\u0275\u0275elementStart"](90,"a",3),a["\u0275\u0275text"](91,"https://unsplash.com/ "),a["\u0275\u0275elementStart"](92,"mat-icon"),a["\u0275\u0275text"](93,"open_in_new"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](94,"mat-expansion-panel",5),a["\u0275\u0275elementStart"](95,"mat-expansion-panel-header"),a["\u0275\u0275elementStart"](96,"mat-panel-title",6),a["\u0275\u0275text"](97," Libraries We Use "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](98,"div"),a["\u0275\u0275elementStart"](99,"p"),a["\u0275\u0275text"](100,' The following sets forth attribution notices for third party software that may be contained in portions of the "Minga" mobile applications. We thank the open source community for all of their contributions. '),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](101,"mat-list"),a["\u0275\u0275template"](102,v,7,4,"mat-list-item",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("component",t),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](t.version),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](t.platform),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](t.messagingStrategy),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" (",a["\u0275\u0275pipeBind1"](15,8,t.messagingPermissionStatus$),") "),a["\u0275\u0275advance"](39),a["\u0275\u0275property"]("path","privacy-policy"),a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("path","tos"),a["\u0275\u0275advance"](43),a["\u0275\u0275property"]("ngForOf",t.licenses))},directives:[p.a,d.a,g.a,g.c,g.f,g.g,u.d,h.a,u.a,u.b,x.k,l.n,l.o],pipes:[l.b],styles:[".about-us-content[_ngcontent-%COMP%]{margin:24px 16px}@media (min-width:600px){.about-us-content[_ngcontent-%COMP%]{margin:32px}}.about-us-content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]:first-child{margin-top:0}.about-us-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#93f;text-decoration:none}.about-us-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.about-us-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:16px;vertical-align:middle;width:16px;height:18px;color:#93f!important}.about-us-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#737373}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:0 0 6px rgba(0,0,0,.15);--mg-mat-expansion-panel-body-padding:0 18px 16px}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:first-child:not(.mat-expanded){border-bottom-left-radius:0;border-bottom-right-radius:0}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-child:not(.mat-expanded){border-top-left-radius:0;border-top-right-radius:0}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-child:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.about-us-content[_ngcontent-%COMP%]   .page-html-content[_ngcontent-%COMP%]{margin:0}.about-us-content[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 18px;position:-webkit-sticky;position:sticky;top:0;background:#fff!important;border-top-left-radius:6px;border-top-right-radius:6px}.about-us-content[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{height:auto}.about-us-content[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.about-us-content[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:.5em}.about-us-content[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:first-child{margin-top:0}.about-us-content[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1em}"]}),e})();var S=n("CL15"),E=n("Q6wb");n("Fc/5");let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[E.a,S.a,l.c,d.b,g.b,u.c]]}),e})();const P=[{path:"",component:_}];let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[C,o.k.forChild(P)]]}),e})()},D4XS:function(e,t,n){var a,o,i;!function(r){if("object"==typeof e.exports){var l=r(n("ewSl"),t);void 0!==l&&(e.exports=l)}else o=[n,t],void 0===(i="function"==typeof(a=r)?a.apply(t,o):a)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.licenses=t.version=void 0,t.version="6.14.0",t.licenses={"minga@6.14.0":{licenses:"UNLICENSED",private:!0,name:"minga",version:"6.14.0",description:"",copyright:"",licenseFile:"none",licenseText:"",path:"."}}}))},ewSl:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="ewSl"}}]);
//# sourceMappingURL=minga-app-src-app-overlays-AboutUs-AboutUsOverlayRouting-module-es2015.js.map