(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{EPnd:function(e,t,n){"use strict";var r=n("egeQ");n.d(t,"a",(function(){return r.a}))},egeQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("mrSG"),i=n("8Y7J"),o=n("+dib"),a=n("4doY"),l=n("Fawd"),s=n("6GgV"),c=n("Cnb3"),d=n("gEWx"),g=n("9szt"),u=n("TNy8");let h=(()=>{class e{constructor(e,t){this.challengeProto=e,this.bannerService=t}getContentInfo(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=new a.ContentInfoQuery;return t.setContentHash(e),this._makeContentInfoRequest(t)}))}getContentInfoByContext(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=new a.ContentInfoQuery;return t.setContentContextHash(e),this._makeContentInfoRequest(t)}))}_makeContentInfoRequest(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.challengeProto.getInfo(e),n=t.getTitle(),r=t.getBody(),i=Object(o.f)(t.getDueDate()),a=Object(d.$enum)(s.ChallengePrivacy).asValueOrThrow(t.getPrivacy()),g=t.getCommentsAllowed(),u=t.getBannerAsset(),h=Object(d.$enum)(s.ChallengeType).asValueOrThrow(t.getType()),p=Object(d.$enum)(s.ChallengeColor).asValueOrThrow(t.getColor()),m=t.getPointValue(),f=t.getBadgeAsset(),C=t.getAllowedRolesList().map(e=>Object(d.$enum)(c.MingaRoleType).asValueOrThrow(e));let v,b;if(t.getBannerHash()){const e=new l.BannerLibraryGet;e.setBannerHash(t.getBannerHash()),v=(yield this.bannerService.get(e)).toObject()}if(t.getBadgeHash()){const e=new l.BannerLibraryGet;e.setBannerHash(t.getBadgeHash()),b=(yield this.bannerService.get(e)).toObject()}const y=t.getRequiresApproval();return{title:n,body:r,dueDate:i,privacy:a,commentsAllowed:g,uploadedImage:u,banner:v,type:h,contentHash:t.getContentHash()||"",contextHash:t.getContextHash()||"",color:p,points:m,uploadedBadge:f,badge:b,allowedRoles:C,requiresApproval:y}}))}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](g.Challenge),i["\u0275\u0275inject"](u.BannerLibrary))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"f14+":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("SVse"),i=n("8Y7J"),o=n("u9T3"),a=n("s7LF"),l=n("pMoy"),s=n("Q2Ze"),c=n("CO6v"),d=n("mP6D"),g=n("ZOVA"),u=n("p+4T"),h=n("EBcp"),p=n("fHWq"),m=n("HxU+"),f=n("ppIK"),C=n("+/Hu"),v=n("CL15"),b=n("Vwx4"),y=n("Ogcz");n("rS4c");let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[c.a,v.a,p.a,f.a,b.b,h.a,y.b,m.a,C.a,u.a,d.a,g.a,r.c,o.a,s.f,l.b,a.m]]}),e})()},jxTo:function(e,t,n){"use strict";n.r(t),n.d(t,"ChallengeAnswerOverlayRoutingModule",(function(){return l}));var r=n("8Y7J"),i=n("iInd"),o=n("rS4c"),a=n("f14+");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[a.a,i.k.forChild([{path:"",component:o.a}])]]}),e})()},mP6D:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n("tcBv");var r=n("SVse"),i=n("8Y7J"),o=n("s7LF"),a=n("ugqS"),l=n("m9yI"),s=n("ls3q"),c=n("Ogcz"),d=n("E4Uz");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[l.b,a.a,c.b,s.a,r.c,o.m,d.b]]}),e})()},rS4c:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n("mrSG"),i=n("8Y7J"),o=n("PLeU"),a=n("6GgV"),l=n("jtHE"),s=n("1G5W"),c=n("lJxs"),d=n("iInd"),g=n("SVse"),u=n("zc8W"),h=n("EPnd"),p=n("uDiC"),m=n("BxgO"),f=n("md6V"),C=n("s7LF"),v=n("9sQ6"),b=n("uplL"),y=n("o1f5"),x=n("gjtd"),P=n("tcBv"),w=n("Jkk8");const I=["form"],O=["fileInputUpload"];function S(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"mg-overlay-nav-item",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().onClose()})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function k(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"mg-clipped-html-tail"),i["\u0275\u0275elementStart"](1,"a",17),i["\u0275\u0275listener"]("click",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](),i["\u0275\u0275reference"](6).showFullHtmlClick(t)})),i["\u0275\u0275text"](2,"...More"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function _(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"mg-file-input-upload",18,19),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().onFileUpload(t)}))("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().uploadedImage=t})),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("showFileDetails",!1)("ngModel",e.uploadedImage)}}function D(e,t){if(1&e&&i["\u0275\u0275element"](0,"mg-avatar",20),2&e){const e=t.ngIf;i["\u0275\u0275property"]("src",e.profileImageUrl)("color",e.badgeIconColor)}}function M(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",21),i["\u0275\u0275elementStart"](1,"p",22),i["\u0275\u0275text"](2,"Add Background:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"mg-challenge-banner-library-stream",23),i["\u0275\u0275listener"]("selectedColorChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().onColorSelected(t)}))("selectedBannerChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().onBannerSelected(t)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("enableColorPicker",!0)("selectedColor",e.selectedColor)("selectedAssetId",e.selectedBanner)}}let B=(()=>{class e{constructor(e,t,n,r,i,o){this.route=e,this.router=t,this._location=n,this.authInfo=r,this.contentInfoService=i,this.draftService=o,this.challengeType=a.ChallengeType.TEXT,this._destroyed$=new l.a(1),this.hasDraft=!1,this.public=!0,this.private=!1,this.answerText="",this.uploadedImage="",this.selectedColor="",this.challengePreviewLength=180,this.challengeIdSub=e.params.pipe(Object(s.a)(this._destroyed$),Object(c.a)(e=>e.challengeId)).subscribe(e=>{this.challengeId=e,this.getChallengeInfo(e)}),this.currentUser$=this.authInfo.authInfo$.pipe(Object(s.a)(this._destroyed$),Object(c.a)(e=>e&&e.person?e.person:null))}get disabledSubmit(){var e;let t=!1;return this.isImageChallengeType&&(t=!this.uploadedImage),(null===(e=this.form)||void 0===e?void 0:e.invalid)||!this.challenge||t}get isImageChallengeType(){return this.challengeType==a.ChallengeType.IMAGE}_getPendingDraft(){var e,t;return{privacy:this.private?a.ChallengePrivacy.PRIVATE:a.ChallengePrivacy.PUBLIC,color:(null===(e=this.challenge)||void 0===e?void 0:e.color)||a.ChallengeColor.RED,body:this.answerText,banner:this.selectedBanner,backgroundColor:this.selectedColor,type:this.challengeType,asset:this.uploadedImage,ownerContextHash:(null===(t=this.challenge)||void 0===t?void 0:t.contextHash)||""}}getChallengeInfo(e){return Object(r.a)(this,void 0,void 0,(function*(){this.challenge=yield this.contentInfoService.getContentInfo(e),this.challengeType=this.challenge.type,yield this.initDraft()}))}initDraft(){var e;return Object(r.a)(this,void 0,void 0,(function*(){if(!this.hasDraft&&this.challengeId){this.hasDraft=!0;const t=yield this.draftService.getDraftDefaulted((null===(e=this.challenge)||void 0===e?void 0:e.contextHash)||"",()=>this.draftService.getDefaultResponse());t&&(this.answerText=t.body,this.selectedColor=t.backgroundColor||"",this.private=t.privacy==a.ChallengePrivacy.PRIVATE,t.banner&&(this.selectedBanner=t.banner),t.asset&&(this.uploadedImage=t.asset))}}))}onFileUpload(e){this.uploadedImage=window.MINGA_ASSET_URL_PREFIX+e,this.selectedBanner=void 0,this.selectedColor="",this.updateDraft()}onPublicChange(){this.private=!1}onPrivateChange(){this.public=!1}onClose(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.draftService.cancelDraft(),yield Object(o.a)(this.router)}))}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}onBannerSelected(e){e&&(this.selectedBanner=e,this.selectedColor="",this.updateDraft())}onColorSelected(e){this.selectedColor=e,this.selectedBanner=void 0,this.updateDraft()}updateDraft(){const e=this._getPendingDraft();this.draftService.saveDraftDelayed(e)}onSubmit(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.disabledSubmit)return;const e=this._getPendingDraft();yield this.draftService.saveDraft(e),yield this.router.navigate(["",{outlets:{o:["challenge~answer","preview",this.challengeId]}}])}))}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](d.g),i["\u0275\u0275directiveInject"](g.k),i["\u0275\u0275directiveInject"](u.a),i["\u0275\u0275directiveInject"](h.a),i["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-challenge-answer-overlay"]],viewQuery:function(e,t){if(1&e&&(i["\u0275\u0275viewQuery"](I,3),i["\u0275\u0275viewQuery"](O,1)),2&e){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(t.form=e.first),i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(t.fileInputUpload=e.first)}},decls:22,vars:17,consts:[[4,"mgOverlayStructure","mgOverlayStructureRegion"],[1,"challenge-info-header"],[1,"title",3,"innerHTML"],[1,"divider"],[3,"fullHtml","clippedLength"],["clippedBodyHtml",""],[4,"ngIf"],[1,"mg-bodycopy",3,"submit"],["form","ngForm"],["accept","image/*","customTitleText","Upload A Photo","previewAspectRatio","2:1","name","fileUpload",3,"showFileDetails","ngModel","ngModelChange",4,"ngIf"],[1,"header-container","mg-bodycopy-bold"],[3,"src","color",4,"ngIf"],["name","challengeBody","required","true","showRemainingCountTilMaxLength","true",1,"form-input-hpadding",3,"richContent","maxlength","ngModel","ngModelChange"],["class","background-selection-container",4,"ngIf"],[1,"footer","mg-minicopy"],["mgBubbleBtn","",3,"disabled"],["icon","close",1,"mg-align-left",3,"click"],["href","javascript:;",3,"click"],["accept","image/*","customTitleText","Upload A Photo","previewAspectRatio","2:1","name","fileUpload",3,"showFileDetails","ngModel","ngModelChange"],["fileInputUpload",""],[3,"src","color"],[1,"background-selection-container"],[1,"mg-minicopy"],["type","CHALLENGE_BG",3,"enableColorPicker","selectedColor","selectedAssetId","selectedColorChange","selectedBannerChange"]],template:function(e,t){if(1&e&&(i["\u0275\u0275template"](0,S,2,0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275element"](2,"p",2),i["\u0275\u0275pipe"](3,"mgSafeHtml"),i["\u0275\u0275element"](4,"div",3),i["\u0275\u0275elementStart"](5,"mg-clipped-html",4,5),i["\u0275\u0275element"](7,"mg-clipped-html-head"),i["\u0275\u0275template"](8,k,3,0,"mg-clipped-html-tail",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"form",7,8),i["\u0275\u0275listener"]("submit",(function(){return t.onSubmit()})),i["\u0275\u0275template"](11,_,2,2,"mg-file-input-upload",9),i["\u0275\u0275elementStart"](12,"div",10),i["\u0275\u0275template"](13,D,1,2,"mg-avatar",11),i["\u0275\u0275pipe"](14,"async"),i["\u0275\u0275elementStart"](15,"span"),i["\u0275\u0275text"](16,"Add your answer..."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"mg-body-input",12),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.answerText=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](18,M,4,3,"div",13),i["\u0275\u0275elementStart"](19,"div",14),i["\u0275\u0275elementStart"](20,"button",15),i["\u0275\u0275text"](21," Preview "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](6);i["\u0275\u0275property"]("mgOverlayStructure",!0)("mgOverlayStructureRegion","top"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("innerHTML",i["\u0275\u0275pipeBind1"](3,13,null==t.challenge?null:t.challenge.title),i["\u0275\u0275sanitizeHtml"]),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("fullHtml",null==t.challenge?null:t.challenge.body)("clippedLength",t.challengePreviewLength),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",!e.shouldShowFullHtml),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",t.isImageChallengeType),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",i["\u0275\u0275pipeBind1"](14,15,t.currentUser$)),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("richContent",!1)("maxlength",1500)("ngModel",t.answerText),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.uploadedImage&&!t.isImageChallengeType),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("disabled",t.disabledSubmit)}},directives:[m.a,f.a,f.b,g.o,C.E,C.u,C.v,v.a,C.B,C.n,C.t,C.w,b.a,f.c,y.a,x.a,P.a],pipes:[w.a,g.b],styles:['@import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");.title-text[_ngcontent-%COMP%]{margin-bottom:20px;font-family:Muli,sans-serif;line-height:1.35;margin-top:32px}@media (orientation:landscape){.title-text[_ngcontent-%COMP%]{font-size:6.8019323671vh}}@media (orientation:portrait){.title-text[_ngcontent-%COMP%]{font-size:6.8019323671vw}}@media (orientation:landscape) and (max-height:414px){.title-text[_ngcontent-%COMP%]{font-size:28.16px}}@media (orientation:portrait) and (max-width:414px){.title-text[_ngcontent-%COMP%]{font-size:28.16px}}@media (min-width:439.875px){.title-text[_ngcontent-%COMP%]{font-size:29.92px}}@media (max-width:1140px){.title-text[_ngcontent-%COMP%]{margin-top:16px}}.divider[_ngcontent-%COMP%]{width:165px;border-top:6px solid #b2b2b2;margin:auto}[_nghost-%COMP%]{--mg-form-input-border-width:1px}.padded-center-content[_ngcontent-%COMP%]{padding:0 10%}@media (max-width:1140px){.padded-center-content[_ngcontent-%COMP%]{padding:0}}[_nghost-%COMP%]{background-color:#fff;display:block;color:#036;padding:22px 32px}.challenge-info-header[_ngcontent-%COMP%]{text-align:center}.challenge-info-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Caveat,cursive;font-size:48px;font-weight:700;color:#00008b;margin-top:15px;margin-bottom:15px}.challenge-info-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#93f}@media (min-width:599px){.challenge-info-header[_ngcontent-%COMP%]   mg-clipped-html[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px}}.header-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.header-container[_ngcontent-%COMP%]   mg-avatar[_ngcontent-%COMP%]{margin-right:14px}mg-file-input-upload[_ngcontent-%COMP%]{background-color:#f5f5f5;margin-bottom:14px}.background-selection-container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;font-weight:700}.background-selection-container[_ngcontent-%COMP%]   mg-challenge-banner-library-stream[_ngcontent-%COMP%]{margin-bottom:26px}.footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin-left:16px}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1em 60px}']}),e})()},tcBv:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("8Y7J"),i=n("AdbN"),o=n("TNy8"),a=n("E4Uz"),l=n("2nPA"),s=n("0cKA"),c=n("SVse"),d=n("Fudl"),g=n("jcBT"),u=n("StFh");const h=["streamScroller"],p=["colorPickerEl"];function m(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"div",9),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"](2).onClickColorPicker()})),r["\u0275\u0275elementStart"](2,"mg-icon"),r["\u0275\u0275text"](3,"color-picker"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275styleProp"]("background-color",e.selectedColor)}}function f(e,t){if(1&e&&r["\u0275\u0275template"](0,m,4,2,"ng-container",8),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngIf",e.enableColorPicker)}}function C(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"div",10),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](2);return t.clickItem(t.initialBannerAsset)})),r["\u0275\u0275element"](2,"mg-image",11),r["\u0275\u0275pipe"](3,"mgImageUrls"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275classProp"]("item-selected",e.isBannerSelected(e.initialBannerAsset)),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("srcs",r["\u0275\u0275pipeBind2"](3,3,null==e.initialBannerAsset?null:e.initialBannerAsset.image,e._imagePreviewSizes))}}function v(e,t){if(1&e&&r["\u0275\u0275template"](0,C,4,6,"ng-container",8),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngIf",e.initialBannerAsset)}}function b(e,t){1&e&&r["\u0275\u0275element"](0,"div",12)}function y(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"]().clickItem(n)})),r["\u0275\u0275element"](1,"mg-image",11),r["\u0275\u0275pipe"](2,"mgImageUrls"),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275classProp"]("item-selected",n.isBannerSelected(e)),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("srcs",r["\u0275\u0275pipeBind2"](2,3,e.image,n._imagePreviewSizes))}}const x=function(e,t){return[e,t]},P=function(e,t,n){return[e,t,n]};let w=(()=>{class e{constructor(e,t){this._cdr=e,this.bannerLibrary=t,this._categories=[],this._imagePreviewSizes=["blurloading1",["studio","bannerlibpreview","cardbanner"]],this.solidColorOptions=["#43c2ec","#a7e473","#f4ec60","#eb8b44","#fb7273","#9b7de1","#006177","#519b0b","#ccbd00","#db610e","#e83842","#5427e2"],this._uploadedImage="",this.tag="",this.enableColorPicker=!1,this.selectedColor="#fff",this.type=i.BannerType.CHALLENGE_HEADER,this.searchQuery="",this.selectedAssetId=null,this.initialBannerAsset=null,this.selectedBannerChange=new r.EventEmitter,this.selectedColorChange=new r.EventEmitter}set categories(e){this._categories=e,this._cdr.markForCheck()}get categories(){return this._categories}get streamFilter(){let e="";return this.initialBannerAsset&&(e=this.initialBannerAsset.bannerHash),{query:this.searchQuery,categories:this.categories.join(),excluded:e,type:this.type}}isBannerSelected(e){return!(!this.selectedAssetId||"string"==typeof this.selectedAssetId)&&this.selectedAssetId.bannerHash==e.bannerHash}onClickColorPicker(){this.colorPickerEl&&this.colorPickerEl.nativeElement.click()}onColorPickerChange(e){this.selectedColor=e,this.selectedColorChange.emit(this.selectedColor)}clickItem(e){this.selectedAssetId=e,this.selectedBannerChange.emit(e),this._cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](o.BannerLibrary))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-challenge-banner-library-stream"]],viewQuery:function(e,t){if(1&e&&(r["\u0275\u0275viewQuery"](h,1),r["\u0275\u0275viewQuery"](p,1)),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.streamScroller=e.first),r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.colorPickerEl=e.first)}},inputs:{tag:"tag",enableColorPicker:"enableColorPicker",selectedColor:"selectedColor",type:"type",categories:"categories",searchQuery:"searchQuery",selectedAssetId:"selectedAssetId",initialBannerAsset:"initialBannerAsset"},outputs:{selectedBannerChange:"selectedBannerChange",selectedColorChange:"selectedColorChange"},decls:11,vars:17,consts:[["cpOutputFormat","hex","cpPosition","top","cpDialogDisplay","popup",1,"pick-color-container",3,"colorPicker","cpPresetColors","cpCloseClickOutside","cpOKButton","cpOKButtonText","colorPickerChange"],["colorPickerEl",""],["streamColorPicker",""],["initialBanner",""],["streamTailTpl",""],["rpcControl","searchControl","rpcStream","search",3,"filter","service","horizontal","extraHeadItems","extraTailItems"],["streamScroller",""],["mgStreamItem",""],[4,"ngIf"],[1,"pick-color-img",3,"click"],[1,"banner-library-item",3,"click"],[3,"srcs"],[1,"banner-library-item","placeholder"]],template:function(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",0,1),r["\u0275\u0275listener"]("colorPickerChange",(function(e){return t.onColorPickerChange(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,f,1,1,"ng-template",null,2,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275template"](4,v,1,1,"ng-template",null,3,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275template"](6,b,1,0,"ng-template",null,4,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementStart"](8,"mg-stream-scroller",5,6),r["\u0275\u0275template"](10,y,3,6,"ng-template",7),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275reference"](3),n=r["\u0275\u0275reference"](5),i=r["\u0275\u0275reference"](7);r["\u0275\u0275property"]("colorPicker",t.selectedColor)("cpPresetColors",t.solidColorOptions)("cpCloseClickOutside",!1)("cpOKButton",!0)("cpOKButtonText","Close"),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("filter",t.streamFilter)("service",t.bannerLibrary)("horizontal",!0)("extraHeadItems",r["\u0275\u0275pureFunction2"](10,x,e,n))("extraTailItems",r["\u0275\u0275pureFunction3"](13,P,i,i,i))}},directives:[a.a,l.a,s.a,c.o,d.a,g.a],pipes:[u.a],styles:["[_nghost-%COMP%]{--feed-item-margin-side:0px}.banner-library-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:90px;height:90px;margin:8px;background-color:#f5f5f5;border-radius:0;cursor:pointer;border:2px solid #f5f5f5;transition:border-color .1s ease;display:inline-flex}.banner-library-item.item-selected[_ngcontent-%COMP%]{border-color:#3cf;transition:all .2s ease-in-out;transform:scale(1.1)}.banner-library-item[_ngcontent-%COMP%]   mg-image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.banner-library-item.placeholder[_ngcontent-%COMP%]{cursor:default;background-color:initial;-webkit-user-select:none;user-select:none;border-color:transparent;transition:none;animation:none}[_nghost-%COMP%]{display:block;height:135px}mg-stream-scroller[_ngcontent-%COMP%]{display:block;height:100%}.pick-color-img[_ngcontent-%COMP%]{border:1px solid #036;border-radius:0;--mg-icon-size:33px;display:inline-flex;justify-content:center;align-items:center;position:relative;width:90px;height:90px;margin:8px}"],changeDetection:0}),e})()},uDiC:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("mrSG"),i=n("8Y7J"),o=n("LvDl"),a=n("5km/"),l=n("6GgV"),s=n("orC8"),c=n("iELJ");function d(e,...t){return o.merge(e,...t)}let g=(()=>{class e{constructor(e,t){this.userStorage=e,this.matDialog=t,this._pendingDraft={}}cancelDraft(){return Object(r.a)(this,void 0,void 0,(function*(){let e=this.matDialog.open(a.g);const t=yield e.beforeClosed().toPromise();if("keep"===t)return"";if("discard"===t)return yield this.clearDraft(),"";throw new Error("User abort")}))}getDraftType(e){return Object(r.a)(this,void 0,void 0,(function*(){if(!e){const t=yield this.getDraft();if(!t)throw new Error("No Challenge Response Draft found for draft type!");e=t}return e.type}))}clearDraft(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.userStorage.setItem("MingaChallengeResponseDraft",null)}))}getDraft(){return Object(r.a)(this,void 0,void 0,(function*(){return(yield this.userStorage.getItem("MingaChallengeResponseDraft"))||null}))}getDraftDefaulted(e,t){return Object(r.a)(this,void 0,void 0,(function*(){let n=yield this.getDraft();return(!n||e&&n.ownerContextHash!=e)&&(n=yield t(),yield this.storeDraft(n)),n}))}getDefaultResponse(){return{body:"",privacy:l.ChallengePrivacy.PUBLIC,type:l.ChallengeType.TEXT}}getDraftAssert(){return Object(r.a)(this,void 0,void 0,(function*(){return(yield this.getDraft())||{}}))}saveDraft(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=Object.assign({},this._pendingDraft);this._pendingDraft=d(t,e),yield this.savePendingDraft()}))}saveDraftDelayed(e,t=1e3){const n=Object.assign({},this._pendingDraft);this._pendingDraft=d(n,e),clearTimeout(this.draftSaveTimeout),this.draftSaveTimeout=setTimeout(()=>this.savePendingDraft(),t)}savePendingDraft(){return Object(r.a)(this,void 0,void 0,(function*(){clearTimeout(this.draftSaveTimeout);const e=Object.assign({},this._pendingDraft);this._pendingDraft={};const t=d(yield this.getDraftAssert(),e);!e.banner&&e.backgroundColor?t.banner=void 0:e.banner&&!e.backgroundColor&&(t.backgroundColor=void 0),yield this.storeDraft(t)}))}storeDraft(e){return Object(r.a)(this,void 0,void 0,(function*(){yield this.userStorage.setItem("MingaChallengeResponseDraft",e)}))}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](s.a),i["\u0275\u0275inject"](c.b))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=default~minga-app-src-app-challenge-route-ChallengeRoutes-module~minga-app-src-app-challenge-route-c~d3cb05ea-es2015.js.map