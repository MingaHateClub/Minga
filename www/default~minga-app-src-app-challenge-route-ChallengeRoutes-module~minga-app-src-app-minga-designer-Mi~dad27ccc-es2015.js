(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+lWm":function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O}));var i=n("mrSG"),o=n("8Y7J"),s=n("+dib"),a=n("F5Qo"),l=n("f16K"),r=n("4Zvv"),u=n("SxV6"),h=n("Zlue"),p=n("LvDl"),c=n("xs9W"),d=n("Cnb3"),m=n("2Vo4"),g=n("itXk"),f=n("LRne"),b=n("eIep"),C=n("lJxs"),D=n("o2kF"),P=n("HSxi"),y=n("hUj8"),I=n("Vwx4"),T=n("xH8m"),v=n("4BGm"),R=n("SVse");function w(e,t){return void 0===e||((null==t?void 0:t.getTime)&&(t=t.getTime()),(null==e?void 0:e.getTime)&&(e=e.getTime()),t!==e)}let M=(()=>{class e extends D.a{constructor(e,t,n,i,o){super(),this._cdr=e,this.commentHandler=o,this._initialPublishInfo={},this._publishInfoChange=new m.a({}),this.publishDate=null,this.unpublishDate=null,this.pinned=!1,this.pinDays=1,this.endPinDate=null,this.emailContent=!1,this.allowedCommentingRoleTypes=[],this.publishInfoInited=!1;const s=Object(g.b)([i.observePermission(d.MingaPermission.EMAIL_CONTENT),i.observePermission(d.MingaPermission.EMAIL_CONTENT_AS_GROUP_OWNER)]).pipe(Object(b.a)(([e,n])=>e?Object(f.a)(!0):n?t.getCurrentGroup().pipe(Object(C.a)(e=>e.rank===c.b.OWNER)):Object(f.a)(!1)));this.allowedEmailContentTypes$=n.observeAllowedContentTypes(),this.enableEmailContentOption$=Object(g.b)([s,this.allowedEmailContentTypes$]).pipe(Object(C.a)(([e,t])=>!1)),this.publishInfoChange$=this._publishInfoChange.asObservable()}get isPublishDateDifferent(){return w(this._initialPublishInfo.publishDate,this.publishDate)}get isUnpublishDateDifferent(){return w(this._initialPublishInfo.unpublishDate,this.unpublishDate)}get isPinDifferent(){return w(this._initialPublishInfo.endPinDate,this.endPinDate)}get isCommentRoleTypesDifferent(){const e=this._initialPublishInfo.commentRoleTypes,t=this.allowedCommentingRoleTypes;return e&&t?!p.isEqual(e.sort(),t.sort()):!(e==t)}triggerChange(){this._publishInfoChange.next(this.getPartialPublishInfo())}setPublishInfo(e){if(void 0!==e.publishDate&&(this.publishDate=e.publishDate),void 0!==e.unpublishDate&&(this.unpublishDate=e.unpublishDate),void 0!==e.endPinDate){const t=Date.now();this.endPinDate=e.endPinDate,this.endPinDate&&this.endPinDate.getTime()>t?(this.pinned=!0,this.pinDays=Math.round((this.endPinDate.getTime()-t)/864e5)):this.pinned=!1}void 0!==e.commentRoleTypes?this.allowedCommentingRoleTypes=e.commentRoleTypes:this.allowedCommentingRoleTypes&&this.allowedCommentingRoleTypes.length>0||this.commentHandler.getDefaultCommentableRoles().pipe(Object(u.a)()).toPromise().then(e=>{this.allowedCommentingRoleTypes&&this.allowedCommentingRoleTypes.length>0||(this.allowedCommentingRoleTypes=e,this._initialPublishInfo.commentRoleTypes=e)}),this.publishInfoInited||(this._initialPublishInfo=e,this.publishInfoInited=!0),this._cdr.markForCheck()}getPublishInfo(){let e=this.allowedCommentingRoleTypes;return this.isCommentRoleTypesDifferent||(e=null),{publishDate:this.publishDate,unpublishDate:this.unpublishDate,endPinDate:this.endPinDate,commentRoleTypes:e}}getPartialPublishInfo(){const e={};return this.isPublishDateDifferent&&(e.publishDate=this.publishDate),this.isUnpublishDateDifferent&&(e.unpublishDate=this.unpublishDate),this.isPinDifferent&&(e.endPinDate=this.endPinDate),this.isCommentRoleTypesDifferent&&(e.commentRoleTypes=this.allowedCommentingRoleTypes),e}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](P.b),o["\u0275\u0275directiveInject"](y.a),o["\u0275\u0275directiveInject"](I.c),o["\u0275\u0275directiveInject"](T.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-group-content-publish-info-editor"]],features:[o["\u0275\u0275InheritDefinitionFeature"]],decls:2,vars:12,consts:[[3,"publishDate","unpublishDate","pinned","pinDays","endPinDate","readonlyPinDays","stackInputs","enableEmailContentOption","emailContent","commentingRoles","publishDateChange","unpublishDateChange","pinnedChange","pinDaysChange","endPinDateChange","emailContentChange","commentingRolesChange"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mg-content-publish-controls",0),o["\u0275\u0275listener"]("publishDateChange",(function(e){return t.publishDate=e}))("publishDateChange",(function(){return t.triggerChange()}))("unpublishDateChange",(function(e){return t.unpublishDate=e}))("unpublishDateChange",(function(){return t.triggerChange()}))("pinnedChange",(function(e){return t.pinned=e}))("pinnedChange",(function(){return t.triggerChange()}))("pinDaysChange",(function(e){return t.pinDays=e}))("pinDaysChange",(function(){return t.triggerChange()}))("endPinDateChange",(function(e){return t.endPinDate=e}))("endPinDateChange",(function(){return t.triggerChange()}))("emailContentChange",(function(e){return t.emailContent=e}))("commentingRolesChange",(function(e){return t.allowedCommentingRoleTypes=e}))("commentingRolesChange",(function(){return t.triggerChange()})),o["\u0275\u0275pipe"](1,"async"),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("publishDate",t.publishDate)("unpublishDate",t.unpublishDate)("pinned",t.pinned)("pinDays",t.pinDays)("endPinDate",t.endPinDate)("readonlyPinDays",!1)("stackInputs",!0)("enableEmailContentOption",o["\u0275\u0275pipeBind1"](1,10,t.enableEmailContentOption$))("emailContent",t.emailContent)("commentingRoles",t.allowedCommentingRoleTypes)},directives:[v.a],pipes:[R.b],styles:[""],changeDetection:0}),e})();var H=n("6fNz"),j=n("H2Qt");let E=(()=>{class e extends h.a{constructor(e,t,n){super(),this.contentMetadata=e,this.groupContentProto=t,this.commentHandler=n,this.name="GroupContentManager"}addContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const i=new l.MingaGroupAddContent;i.setContentHash(t),i.setMingaGroupHash(e),n.publishDate&&i.setContentStartDateTime(Object(s.g)(n.publishDate)),n.unpublishDate&&i.setContentEndDateTime(Object(s.g)(n.unpublishDate)),n.endPinDate&&i.setContentPinEndDateTime(Object(s.g)(n.endPinDate));const o=yield this.groupContentProto.addContent(i),a=o.hasModerationResult()?r.ModerationResultMapper.toIModerationResult(o.getModerationResult()):null,u={contentContextHash:o.getContentContextHash(),moderationResult:a};return n.commentRoleTypes&&(yield this.commentHandler.sendCommentRolesRequest(t,n.commentRoleTypes)),u}))}moveContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const i=new l.MingaGroupMoveContent;i.setMingaGroupHash(e);const o=yield this.contentMetadata.getContentMetadata({contentHash:t});if(i.setContentContextHash(o.contentContextHash),void 0!==n.publishDate){const e=n.publishDate,t=new a.DateTimeDelta;e&&t.setNewDateTime(Object(s.g)(e)),i.setContentStartDateTime(t)}if(void 0!==n.unpublishDate){const e=n.unpublishDate,t=new a.DateTimeDelta;e&&t.setNewDateTime(Object(s.g)(e)),i.setContentEndDateTime(t)}if(void 0!==n.endPinDate){const e=n.endPinDate,t=new a.DateTimeDelta;e&&t.setNewDateTime(Object(s.g)(e)),i.setContentPinEndDateTime(t)}const u=yield this.groupContentProto.moveContent(i),h=u.hasModerationResult()?r.ModerationResultMapper.toIModerationResult(u.getModerationResult()):null,p={contentContextHash:u.getContentContextHash(),moderationResult:h};return n.commentRoleTypes&&this.commentHandler.sendCommentRolesRequest(t,n.commentRoleTypes).then(()=>{}),this.contentMetadata.clearContentMetadata(t),p}))}getPublishInfo(e,t){return Object(i.a)(this,void 0,void 0,(function*(){const n=yield this.contentMetadata.getContentMetadata({contentHash:t}),i=yield this.commentHandler.getDefaultCommentableRoles().pipe(Object(u.a)()).toPromise();return n.ownerGroupHash==e?{endPinDate:n.pinEndTimestamp?new Date(n.pinEndTimestamp):null,publishDate:n.publishTimestamp?new Date(n.publishTimestamp):null,unpublishDate:n.unpublishTimestamp?new Date(n.publishTimestamp):null,commentRoleTypes:n.allowedCommentingRoleTypesList.length>0?n.allowedCommentingRoleTypesList:i}:null}))}getDefaultPublishInfo(){return{endPinDate:null,publishDate:null,unpublishDate:null,commentRoleTypes:null}}getPublishInfoEditComponent(){return M}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](H.a),o["\u0275\u0275inject"](j.MingaGroupContent),o["\u0275\u0275inject"](T.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var x=n("Ji8J");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[x.a,R.c]]}),e})()},"/Hrl":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("mrSG"),o=n("FAIo"),s=n("GaEU"),a=n("HSxi");function l(e,t){return function(e,t){let n=e;for(const i in t)n=n.replace(`:${i}`,t[i]||"");return n}(e,t).split("/")}class r{constructor(e,t){this.snapshot=e,this.injector=t,this.contextHash="",this.contentHash="",this.programHash="",this._groupHash="",this.groupHashGetter=()=>this._groupHash;const n=this.injector.get(s.a);this.contentManager=new o.b(n,()=>null)}initDataFromRoute(){return Object(i.a)(this,void 0,void 0,(function*(){this.contextHash=this.snapshot.paramMap.get("contextHash")||"",this.contentHash=this.snapshot.paramMap.get("contentHash")||"",this._groupHash=this.snapshot.paramMap.get("groupHash")||"",this.programHash=this.snapshot.paramMap.get("programHash")||"";let e=()=>this.snapshot.paramMap.get("groupHash")||"";const t=this.injector.get(this.snapshot.data.contentManagerType,null);if(!t)throw new Error("Missing or invalid contentManagerType in route data");if(!e()&&"GroupContentManager"===t.name){const t=this.injector.get(a.b);e=()=>t.getCurrentGroupHash()}this.contentManager=new o.b(t,()=>e()||this.programHash||null),this.contentHash&&(yield this.getContentInfo()),yield this.getAdditionalRouteData()}))}getRouteParams(){return{contextHash:this.contextHash,contentHash:this.contentHash,groupHash:this.groupHash,programHash:this.programHash}}get groupHash(){return this._groupHash}get nextPath(){return[...l(this.snapshot.parent.routeConfig.path,this.getRouteParams()),...l(this.snapshot.data.nextPath||"",this.getRouteParams())]}get previousPath(){return[...l(this.snapshot.parent.routeConfig.path,this.getRouteParams()),...l(this.snapshot.data.previousPath||"",this.getRouteParams())]}get parentPath(){return[...l(this.snapshot.parent.routeConfig.path,this.getRouteParams())]}}},A2eb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("8Y7J");const o=["viewContainer"];let s=(()=>{class e{constructor(e){this.componentFactoryResolver=e,this._viewContainer=null,this._publishInfoEditorComponentType=null,this.publishInfoEditComponent=null,this.publishInfoEditComponentReady=new i.EventEmitter,this.publishInfoChange=new i.EventEmitter}set viewContainer(e){this._viewContainer=e||null,this.setupPublishInfoEditComponent()}get viewContainer(){return this._viewContainer}set publishInfoEditorComponentType(e){this._publishInfoEditorComponentType=e,this.setupPublishInfoEditComponent()}get publishInfoEditorComponentType(){return this._publishInfoEditorComponentType}setPublishInfo(e){this.publishInfoEditComponent.setPublishInfo(e)}getPublishInfo(){return this.publishInfoEditComponent.getPublishInfo()}getPartialPublishInfo(){return this.publishInfoEditComponent.getPartialPublishInfo()}setupPublishInfoEditComponent(){var e;if(this.viewContainer&&this._publishInfoEditorComponentType){const e=this.componentFactoryResolver.resolveComponentFactory(this._publishInfoEditorComponentType),t=this.viewContainer.createComponent(e,0);this.publishInfoEditComponent=t.instance,this.publishInfoEditComponent.publishInfoChange$.subscribe(e=>{this.publishInfoChange.emit(e)}),this.publishInfoEditComponentReady.emit(t.instance)}else null===(e=this.viewContainer)||void 0===e||e.clear(),this.publishInfoEditComponent=null}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.ComponentFactoryResolver))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-content-manager-publish-info-editor"]],viewQuery:function(e,t){if(1&e&&i["\u0275\u0275viewQuery"](o,3,i.ViewContainerRef),2&e){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(t.viewContainer=e.first)}},inputs:{publishInfoEditorComponentType:"publishInfoEditorComponentType"},outputs:{publishInfoEditComponentReady:"publishInfoEditComponentReady",publishInfoChange:"publishInfoChange"},decls:2,vars:0,consts:[["viewContainer",""]],template:function(e,t){1&e&&i["\u0275\u0275element"](0,"div",null,0)},styles:[""],changeDetection:0}),e})()},FAIo:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o.a})),n("Zlue");class i{constructor(e,t){this.contentManager=e,this.contextInfoGetter=t,this.name=this.contentManager.name}addContent(e,t){return this.contentManager.addContent(this.contextInfoGetter(),e,t)}moveContent(e,t){return this.contentManager.moveContent(this.contextInfoGetter(),e,t)}getPublishInfo(e){return this.contentManager.getPublishInfo(this.contextInfoGetter(),e)}getDefaultPublishInfo(){return this.contentManager.getDefaultPublishInfo()}getPublishInfoEditComponent(){return this.contentManager.getPublishInfoEditComponent()}}var o=n("o2kF")},G1e9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("mrSG"),o=n("8Y7J"),s=n("WH00");let a=(()=>{class e{constructor(e){this.contentEvents=e}trigger(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){n.allPassed?yield this._moderationSuccessDialog(e,t,n):yield this._moderationFailDialog(e,t,n)}))}_moderationSuccessDialog(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){this.contentEvents.emitSuccessModeration({})}))}_moderationFailDialog(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){this.contentEvents.emitFailedModeration({contentHash:e,contextHash:t,textFailed:!n.allTextContentPassed,imageFailed:!n.allImageContentPassed,imageTextFailed:!n.allImageTextContentPassed&&n.allImageContentPassed,imageAndTextFailed:!n.allImageTextContentPassed&&!n.allImageContentPassed,tags:n.tags,imageTags:n.imageTags,emailContentSend:null}),yield new Promise(e=>setTimeout(e,300))}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](s.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},GaEU:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return T}));var i=n("mrSG"),o=n("8Y7J"),s=n("+dib"),a=n("F5Qo"),l=n("joVo"),r=n("4Zvv"),u=n("SxV6"),h=n("Zlue"),p=n("LvDl"),c=n("FAIo"),d=n("2Vo4"),m=n("xH8m"),g=n("4BGm");function f(e,t){return void 0===e||((null==t?void 0:t.getTime)&&(t=t.getTime()),(null==e?void 0:e.getTime)&&(e=e.getTime()),t!==e)}let b=(()=>{class e extends c.a{constructor(e,t){super(),this.commentHandler=e,this._cdr=t,this._initialPublishInfo={},this._publishInfoChange=new d.a({}),this.publishDate=null,this.unpublishDate=null,this.pinned=!1,this.pinDays=1,this.endPinDate=null,this.allowedCommentingRoleTypes=[],this.publishInfoInited=!1,this.publishInfoChange$=this._publishInfoChange.asObservable()}get isPublishDateDifferent(){return f(this._initialPublishInfo.publishDate,this.publishDate)}get isUnpublishDateDifferent(){return f(this._initialPublishInfo.unpublishDate,this.unpublishDate)}get isPinDifferent(){return f(this._initialPublishInfo.endPinDate,this.endPinDate)}get isCommentRoleTypesDifferent(){const e=this._initialPublishInfo.commentRoleTypes,t=this.allowedCommentingRoleTypes;return e&&t?!p.isEqual(e.sort(),t.sort()):!(e==t)}triggerChange(){this._publishInfoChange.next(this.getPartialPublishInfo())}setPublishInfo(e){if(void 0!==e.publishDate&&(this.publishDate=e.publishDate),void 0!==e.unpublishDate&&(this.unpublishDate=e.unpublishDate),void 0!==e.endPinDate){this.endPinDate=e.endPinDate;const t=new Date;t.setHours(23),t.setMinutes(59),t.setSeconds(0),t.setMilliseconds(0);const n=t.getTime();this.endPinDate=e.endPinDate,this.endPinDate&&this.endPinDate.getTime()>n?(this.pinned=!0,this.pinDays=Math.round((this.endPinDate.getTime()-n)/864e5)):this.pinned=!1}void 0!==e.commentRoleTypes?this.allowedCommentingRoleTypes=e.commentRoleTypes:this.allowedCommentingRoleTypes&&this.allowedCommentingRoleTypes.length>0||this.commentHandler.getDefaultCommentableRoles().pipe(Object(u.a)()).toPromise().then(e=>{this.allowedCommentingRoleTypes&&this.allowedCommentingRoleTypes.length>0||(this.allowedCommentingRoleTypes=e,this._initialPublishInfo.commentRoleTypes=e)}),this.publishInfoInited||(this._initialPublishInfo=e,this.publishInfoInited=!0),this._cdr.markForCheck()}getPublishInfo(){let e=this.allowedCommentingRoleTypes;return this.isCommentRoleTypesDifferent||(e=null),{publishDate:this.publishDate,unpublishDate:this.unpublishDate,endPinDate:this.endPinDate,commentRoleTypes:e}}getPartialPublishInfo(){const e={};return this.isPublishDateDifferent&&(e.publishDate=this.publishDate),this.isUnpublishDateDifferent&&(e.unpublishDate=this.unpublishDate),this.isPinDifferent&&(e.endPinDate=this.endPinDate),this.isCommentRoleTypesDifferent&&(e.commentRoleTypes=this.allowedCommentingRoleTypes),e}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](m.a),o["\u0275\u0275directiveInject"](o.ChangeDetectorRef))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-minga-content-publish-info-editor"]],features:[o["\u0275\u0275InheritDefinitionFeature"]],decls:1,vars:8,consts:[[3,"publishDate","unpublishDate","pinned","pinDays","endPinDate","stackInputs","readonlyPinDays","commentingRoles","publishDateChange","unpublishDateChange","pinnedChange","pinDaysChange","endPinDateChange","commentingRolesChange"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mg-content-publish-controls",0),o["\u0275\u0275listener"]("publishDateChange",(function(e){return t.publishDate=e}))("publishDateChange",(function(){return t.triggerChange()}))("unpublishDateChange",(function(e){return t.unpublishDate=e}))("unpublishDateChange",(function(){return t.triggerChange()}))("pinnedChange",(function(e){return t.pinned=e}))("pinnedChange",(function(){return t.triggerChange()}))("pinDaysChange",(function(e){return t.pinDays=e}))("pinDaysChange",(function(){return t.triggerChange()}))("endPinDateChange",(function(e){return t.endPinDate=e}))("endPinDateChange",(function(){return t.triggerChange()}))("commentingRolesChange",(function(e){return t.allowedCommentingRoleTypes=e}))("commentingRolesChange",(function(){return t.triggerChange()})),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("publishDate",t.publishDate)("unpublishDate",t.unpublishDate)("pinned",t.pinned)("pinDays",t.pinDays)("endPinDate",t.endPinDate)("stackInputs",!0)("readonlyPinDays",!1)("commentingRoles",t.allowedCommentingRoleTypes)},directives:[g.a],styles:[""],changeDetection:0}),e})();var C=n("6fNz"),D=n("LTMa");let P=(()=>{class e extends h.a{constructor(e,t,n){super(),this.contentMetadata=e,this.mingaContentProto=t,this.commentHandler=n,this.name="MingaContentManager"}addContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const e=new l.MingaAddContent;e.setContentHash(t),n.publishDate&&e.setContentStartDateTime(Object(s.g)(n.publishDate)),n.unpublishDate&&e.setContentEndDateTime(Object(s.g)(n.unpublishDate)),n.endPinDate&&e.setContentPinEndDateTime(Object(s.g)(n.endPinDate)),console.log("adding content");const i=yield this.mingaContentProto.addContent(e);console.log("added content",i);const o=i.hasModerationResult()?r.ModerationResultMapper.toIModerationResult(i.getModerationResult()):null,a={contentContextHash:i.getContentContextHash(),moderationResult:o};return n.commentRoleTypes&&(yield this.commentHandler.sendCommentRolesRequest(t,n.commentRoleTypes)),a}))}moveContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const e=new l.MingaMoveContent,i=yield this.contentMetadata.getContentMetadata({contentHash:t});if(e.setContentContextHash(i.contentContextHash),void 0!==n.publishDate){const t=n.publishDate,i=new a.DateTimeDelta;t&&i.setNewDateTime(Object(s.g)(t)),e.setContentStartDateTime(i)}if(void 0!==n.unpublishDate){const t=n.unpublishDate,i=new a.DateTimeDelta;t&&i.setNewDateTime(Object(s.g)(t)),e.setContentEndDateTime(i)}if(void 0!==n.endPinDate){const t=n.endPinDate,i=new a.DateTimeDelta;t&&i.setNewDateTime(Object(s.g)(t)),e.setContentPinEndDateTime(i)}const o=yield this.mingaContentProto.moveContent(e),u=o.hasModerationResult()?r.ModerationResultMapper.toIModerationResult(o.getModerationResult()):null,h={contentContextHash:o.getContentContextHash(),moderationResult:u};return n.commentRoleTypes&&(yield this.commentHandler.sendCommentRolesRequest(t,n.commentRoleTypes)),this.contentMetadata.clearContentMetadata(t),h}))}getPublishInfo(e,t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.contentMetadata.getContentMetadata({contentHash:t}),n=yield this.commentHandler.getDefaultCommentableRoles().pipe(Object(u.a)()).toPromise();return e.ownerMingaHash?{endPinDate:e.pinEndTimestamp?new Date(e.pinEndTimestamp):null,publishDate:e.publishTimestamp?new Date(e.publishTimestamp):null,unpublishDate:e.unpublishTimestamp?new Date(e.unpublishTimestamp):null,commentRoleTypes:e.allowedCommentingRoleTypesList.length>0?e.allowedCommentingRoleTypesList:n}:null}))}getDefaultPublishInfo(){return{publishDate:null,unpublishDate:null,endPinDate:null,commentRoleTypes:null}}getPublishInfoEditComponent(){return b}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](C.a),o["\u0275\u0275inject"](D.MingaContent),o["\u0275\u0275inject"](m.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=n("SVse"),I=n("Ji8J");let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[I.a,y.c]]}),e})()},Zlue:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{}},cOAp:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("SVse"),o=n("8Y7J");n("A2eb");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[i.c]]}),e})()},"em/2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("mrSG"),o=n("8Y7J"),s=n("Zlue");let a=(()=>{class e extends s.a{constructor(){super(...arguments),this.name="ProgramContentManager"}addContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){return{contentContextHash:"",moderationResult:null}}))}moveContent(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){return{contentContextHash:"",moderationResult:null}}))}getPublishInfo(e,t){return Object(i.a)(this,void 0,void 0,(function*(){return null}))}getDefaultPublishInfo(){return{}}getPublishInfoEditComponent(){return null}}return e.\u0275fac=function(t){return l(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const l=o["\u0275\u0275getInheritedFactory"](a)},o2kF:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{}}}]);
//# sourceMappingURL=default~minga-app-src-app-challenge-route-ChallengeRoutes-module~minga-app-src-app-minga-designer-Mi~dad27ccc-es2015.js.map