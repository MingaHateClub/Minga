!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?a:String(a)),r)}var i,a}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{YTnL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgramManager=void 0,n("8Y7J");var r=n("+6wJ"),i=n("ZO6O"),a=n("8Y7J"),s=function(){function e(t){o(this,e),this._ngZone=t}return u(e,[{key:"new",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.New,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"update",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.Update,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"getInfo",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.GetInfo,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"addContent",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.AddContent,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"removeContent",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.RemoveContent,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"moveContent",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.MoveContent,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"getInstanceInfo",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.GetInstanceInfo,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"getDetails",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.GetDetails,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}},{key:"getMingas",value:function(e,t,n){var a,o,s,u=this;"function"==typeof t?o=t:(s=t,o=n),o||(a=new Promise((function(e,t){o=function(n,r){n?t(n):e(r)}})));var l=null,g=r.grpc.invoke(i.ProgramManager.GetMingas,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:s,onHeaders:function(e){return l=e},onMessage:function(e){return u._ngZone.run((function(){o(null,e,l||new r.grpc.Metadata)}))},onEnd:function(e,t,n){return u._ngZone.run((function(){if(e!=r.grpc.Code.OK){var n=new Error(t);n.code=e,o(n)}}))}});return a.cancel=function(){return g.close()},a}}]),e}();t.ProgramManager=s,s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(a.NgZone))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})},ZO6O:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgramManagerClient=t.ProgramManager=void 0;var r=n("l6At"),i=u((function e(){o(this,e)}));t.ProgramManager=i,i.serviceName="minga.content.ProgramManager",i.New={methodName:"New",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramInfo,responseType:r.ProgramSaveResult},i.Update={methodName:"Update",service:i,requestStream:!1,responseStream:!1,requestType:r.DeltaProgramInfo,responseType:r.ProgramSaveResult},i.GetInfo={methodName:"GetInfo",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramInfoQuery,responseType:r.ProgramInfo},i.AddContent={methodName:"AddContent",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramAddContent,responseType:r.ProgramContentSaveResult},i.RemoveContent={methodName:"RemoveContent",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramRemoveContent,responseType:r.ProgramContentSaveResult},i.MoveContent={methodName:"MoveContent",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramMoveContent,responseType:r.ProgramContentSaveResult},i.GetInstanceInfo={methodName:"GetInstanceInfo",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramInstanceInfoQuery,responseType:r.ProgramInfo},i.GetDetails={methodName:"GetDetails",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramInfoQuery,responseType:r.ProgramDetails},i.GetMingas={methodName:"GetMingas",service:i,requestStream:!1,responseStream:!1,requestType:r.ProgramInfoQuery,responseType:r.ProgramMingasResult},t.ProgramManagerClient=function(){function e(){o(this,e)}return u(e,[{key:"new",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"update",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"getInfo",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"addContent",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"removeContent",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"moveContent",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"getInstanceInfo",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"getDetails",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}},{key:"getMingas",value:function(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}]),e}()},l6At:function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ProgramMingasResult=r.ProgramContentSaveResult=r.ProgramMoveContent=r.ProgramRemoveContent=r.ProgramAddContent=r.ProgramContentPosition=r.ProgramInstanceInfoQuery=r.ProgramInfoQuery=r.ProgramSaveResult=r.ProgramDetails=r.DeltaProgramInfo=r.ProgramInfo=void 0;var s=a("hRO2"),l=a("F5Qo"),g=a("8ywb"),c=a("tdMc"),d=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,a.repeatedFields_,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getTitle",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setTitle",value:function(e){s.Message.setProto3StringField(this,1,e)}},{key:"getDescription",value:function(){return s.Message.getFieldWithDefault(this,2,"")}},{key:"setDescription",value:function(e){s.Message.setProto3StringField(this,2,e)}},{key:"getLogo",value:function(){return s.Message.getFieldWithDefault(this,3,"")}},{key:"setLogo",value:function(e){s.Message.setProto3StringField(this,3,e)}},{key:"getBannerList",value:function(){return s.Message.getRepeatedField(this,4)}},{key:"setBannerList",value:function(e){s.Message.setField(this,4,e||[])}},{key:"addBanner",value:function(e,t){s.Message.addToRepeatedField(this,4,e,t)}},{key:"clearBannerList",value:function(){this.setBannerList([])}},{key:"getActive",value:function(){return s.Message.getBooleanFieldWithDefault(this,5,!1)}},{key:"setActive",value:function(e){s.Message.setProto3BooleanField(this,5,e)}},{key:"getPermittedRoleTypeList",value:function(){return s.Message.getRepeatedField(this,6)}},{key:"setPermittedRoleTypeList",value:function(e){s.Message.setField(this,6,e||[])}},{key:"addPermittedRoleType",value:function(e,t){s.Message.addToRepeatedField(this,6,e,t)}},{key:"clearPermittedRoleTypeList",value:function(){this.setPermittedRoleTypeList([])}}],[{key:"toObject",value:function(e,t){var n,r={title:s.Message.getFieldWithDefault(t,1,""),description:s.Message.getFieldWithDefault(t,2,""),logo:s.Message.getFieldWithDefault(t,3,""),bannerList:null==(n=s.Message.getRepeatedField(t,4))?void 0:n,active:s.Message.getBooleanFieldWithDefault(t,5,!1),permittedRoleTypeList:null==(n=s.Message.getRepeatedField(t,6))?void 0:n};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setTitle(n);break;case 2:var r=t.readString();e.setDescription(r);break;case 3:var i=t.readString();e.setLogo(i);break;case 4:var a=t.readString();e.addBanner(a);break;case 5:var o=t.readBool();e.setActive(o);break;case 6:var s=t.readString();e.addPermittedRoleType(s);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getTitle()).length>0&&t.writeString(1,n),(n=e.getDescription()).length>0&&t.writeString(2,n),(n=e.getLogo()).length>0&&t.writeString(3,n),(n=e.getBannerList()).length>0&&t.writeRepeatedString(4,n),(n=e.getActive())&&t.writeBool(5,n),(n=e.getPermittedRoleTypeList()).length>0&&t.writeRepeatedString(6,n)}}]),a}(s.Message);r.ProgramInfo=d,d.displayName="ProgramInfo",d.repeatedFields_=[4,6];var f=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,a.repeatedFields_,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getTitle",value:function(){return s.Message.getWrapperField(this,l.StringDelta,1)}},{key:"setTitle",value:function(e){s.Message.setWrapperField(this,1,e)}},{key:"clearTitle",value:function(){this.setTitle(void 0)}},{key:"hasTitle",value:function(){return null!=s.Message.getField(this,1)}},{key:"getDescription",value:function(){return s.Message.getWrapperField(this,l.StringDelta,2)}},{key:"setDescription",value:function(e){s.Message.setWrapperField(this,2,e)}},{key:"clearDescription",value:function(){this.setDescription(void 0)}},{key:"hasDescription",value:function(){return null!=s.Message.getField(this,2)}},{key:"getLogo",value:function(){return s.Message.getWrapperField(this,l.StringDelta,3)}},{key:"setLogo",value:function(e){s.Message.setWrapperField(this,3,e)}},{key:"clearLogo",value:function(){this.setLogo(void 0)}},{key:"hasLogo",value:function(){return null!=s.Message.getField(this,3)}},{key:"getBanner",value:function(){return s.Message.getWrapperField(this,l.RepeatedStringDelta,4)}},{key:"setBanner",value:function(e){s.Message.setWrapperField(this,4,e)}},{key:"clearBanner",value:function(){this.setBanner(void 0)}},{key:"hasBanner",value:function(){return null!=s.Message.getField(this,4)}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,5,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,5,e)}},{key:"getActive",value:function(){return s.Message.getWrapperField(this,l.BoolDelta,6)}},{key:"setActive",value:function(e){s.Message.setWrapperField(this,6,e)}},{key:"clearActive",value:function(){this.setActive(void 0)}},{key:"hasActive",value:function(){return null!=s.Message.getField(this,6)}},{key:"getPermittedRoleTypeList",value:function(){return s.Message.getRepeatedField(this,7)}},{key:"setPermittedRoleTypeList",value:function(e){s.Message.setField(this,7,e||[])}},{key:"addPermittedRoleType",value:function(e,t){s.Message.addToRepeatedField(this,7,e,t)}},{key:"clearPermittedRoleTypeList",value:function(){this.setPermittedRoleTypeList([])}}],[{key:"toObject",value:function(e,t){var n,r={title:(n=t.getTitle())&&l.StringDelta.toObject(e,n),description:(n=t.getDescription())&&l.StringDelta.toObject(e,n),logo:(n=t.getLogo())&&l.StringDelta.toObject(e,n),banner:(n=t.getBanner())&&l.RepeatedStringDelta.toObject(e,n),contentHash:s.Message.getFieldWithDefault(t,5,""),active:(n=t.getActive())&&l.BoolDelta.toObject(e,n),permittedRoleTypeList:null==(n=s.Message.getRepeatedField(t,7))?void 0:n};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=new l.StringDelta;t.readMessage(n,l.StringDelta.deserializeBinaryFromReader),e.setTitle(n);break;case 2:var r=new l.StringDelta;t.readMessage(r,l.StringDelta.deserializeBinaryFromReader),e.setDescription(r);break;case 3:var i=new l.StringDelta;t.readMessage(i,l.StringDelta.deserializeBinaryFromReader),e.setLogo(i);break;case 4:var a=new l.RepeatedStringDelta;t.readMessage(a,l.RepeatedStringDelta.deserializeBinaryFromReader),e.setBanner(a);break;case 5:var o=t.readString();e.setContentHash(o);break;case 6:var s=new l.BoolDelta;t.readMessage(s,l.BoolDelta.deserializeBinaryFromReader),e.setActive(s);break;case 7:var u=t.readString();e.addPermittedRoleType(u);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;null!=(n=e.getTitle())&&t.writeMessage(1,n,l.StringDelta.serializeBinaryToWriter),null!=(n=e.getDescription())&&t.writeMessage(2,n,l.StringDelta.serializeBinaryToWriter),null!=(n=e.getLogo())&&t.writeMessage(3,n,l.StringDelta.serializeBinaryToWriter),null!=(n=e.getBanner())&&t.writeMessage(4,n,l.RepeatedStringDelta.serializeBinaryToWriter),(n=e.getContentHash()).length>0&&t.writeString(5,n),null!=(n=e.getActive())&&t.writeMessage(6,n,l.BoolDelta.serializeBinaryToWriter),(n=e.getPermittedRoleTypeList()).length>0&&t.writeRepeatedString(7,n)}}]),a}(s.Message);r.DeltaProgramInfo=f,f.displayName="DeltaProgramInfo",f.repeatedFields_=[7];var v=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getProgramInfo",value:function(){return s.Message.getWrapperField(this,d,1)}},{key:"setProgramInfo",value:function(e){s.Message.setWrapperField(this,1,e)}},{key:"clearProgramInfo",value:function(){this.setProgramInfo(void 0)}},{key:"hasProgramInfo",value:function(){return null!=s.Message.getField(this,1)}},{key:"getMingaCount",value:function(){return s.Message.getFieldWithDefault(this,2,0)}},{key:"setMingaCount",value:function(e){s.Message.setProto3IntField(this,2,e)}},{key:"getContentCount",value:function(){return s.Message.getFieldWithDefault(this,3,0)}},{key:"setContentCount",value:function(e){s.Message.setProto3IntField(this,3,e)}}],[{key:"toObject",value:function(e,t){var n,r={programInfo:(n=t.getProgramInfo())&&d.toObject(e,n),mingaCount:s.Message.getFieldWithDefault(t,2,0),contentCount:s.Message.getFieldWithDefault(t,3,0)};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=new d;t.readMessage(n,d.deserializeBinaryFromReader),e.setProgramInfo(n);break;case 2:var r=t.readInt32();e.setMingaCount(r);break;case 3:var i=t.readInt32();e.setContentCount(i);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;null!=(n=e.getProgramInfo())&&t.writeMessage(1,n,d.serializeBinaryToWriter),0!==(n=e.getMingaCount())&&t.writeInt32(2,n),0!==(n=e.getContentCount())&&t.writeInt32(3,n)}}]),a}(s.Message);r.ProgramDetails=v,v.displayName="ProgramDetails";var y=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,1,e)}}],[{key:"toObject",value:function(e,t){var n={contentHash:s.Message.getFieldWithDefault(t,1,"")};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var n=t.readString();e.setContentHash(n)}else t.skipField();return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n;(n=e.getContentHash()).length>0&&t.writeString(1,n)}}]),a}(s.Message);r.ProgramSaveResult=y,y.displayName="ProgramSaveResult";var h=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getIncludeDeleted",value:function(){return s.Message.getBooleanFieldWithDefault(this,1,!1)}},{key:"setIncludeDeleted",value:function(e){s.Message.setProto3BooleanField(this,1,e)}},{key:"getProgramHash",value:function(){return s.Message.getFieldWithDefault(this,2,"")}},{key:"setProgramHash",value:function(e){s.Message.setProto3StringField(this,2,e)}}],[{key:"toObject",value:function(e,t){var n={includeDeleted:s.Message.getBooleanFieldWithDefault(t,1,!1),programHash:s.Message.getFieldWithDefault(t,2,"")};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readBool();e.setIncludeDeleted(n);break;case 2:var r=t.readString();e.setProgramHash(r);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getIncludeDeleted())&&t.writeBool(1,n),(n=e.getProgramHash()).length>0&&t.writeString(2,n)}}]),a}(s.Message);r.ProgramInfoQuery=h,h.displayName="ProgramInfoQuery";var p=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getProgramContextHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setProgramContextHash",value:function(e){s.Message.setProto3StringField(this,1,e)}}],[{key:"toObject",value:function(e,t){var n={programContextHash:s.Message.getFieldWithDefault(t,1,"")};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var n=t.readString();e.setProgramContextHash(n)}else t.skipField();return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n;(n=e.getProgramContextHash()).length>0&&t.writeString(1,n)}}]),a}(s.Message);r.ProgramInstanceInfoQuery=p,p.displayName="ProgramInstanceInfoQuery";var m=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getOffset",value:function(){return s.Message.getFieldWithDefault(this,1,0)}},{key:"setOffset",value:function(e){s.Message.setProto3IntField(this,1,e)}},{key:"getRelativeOffset",value:function(){return s.Message.getBooleanFieldWithDefault(this,2,!1)}},{key:"setRelativeOffset",value:function(e){s.Message.setProto3BooleanField(this,2,e)}}],[{key:"toObject",value:function(e,t){var n={offset:s.Message.getFieldWithDefault(t,1,0),relativeOffset:s.Message.getBooleanFieldWithDefault(t,2,!1)};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readUint64();e.setOffset(n);break;case 2:var r=t.readBool();e.setRelativeOffset(r);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;0!==(n=e.getOffset())&&t.writeUint64(1,n),(n=e.getRelativeOffset())&&t.writeBool(2,n)}}]),a}(s.Message);r.ProgramContentPosition=m,m.displayName="ProgramContentPosition";var M=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getProgramHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setProgramHash",value:function(e){s.Message.setProto3StringField(this,1,e)}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,2,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,2,e)}},{key:"getContentStartPosition",value:function(){return s.Message.getWrapperField(this,m,3)}},{key:"setContentStartPosition",value:function(e){s.Message.setWrapperField(this,3,e)}},{key:"clearContentStartPosition",value:function(){this.setContentStartPosition(void 0)}},{key:"hasContentStartPosition",value:function(){return null!=s.Message.getField(this,3)}},{key:"getContentEndPosition",value:function(){return s.Message.getWrapperField(this,m,4)}},{key:"setContentEndPosition",value:function(e){s.Message.setWrapperField(this,4,e)}},{key:"clearContentEndPosition",value:function(){this.setContentEndPosition(void 0)}},{key:"hasContentEndPosition",value:function(){return null!=s.Message.getField(this,4)}}],[{key:"toObject",value:function(e,t){var n,r={programHash:s.Message.getFieldWithDefault(t,1,""),contentHash:s.Message.getFieldWithDefault(t,2,""),contentStartPosition:(n=t.getContentStartPosition())&&m.toObject(e,n),contentEndPosition:(n=t.getContentEndPosition())&&m.toObject(e,n)};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setProgramHash(n);break;case 2:var r=t.readString();e.setContentHash(r);break;case 3:var i=new m;t.readMessage(i,m.deserializeBinaryFromReader),e.setContentStartPosition(i);break;case 4:var a=new m;t.readMessage(a,m.deserializeBinaryFromReader),e.setContentEndPosition(a);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getProgramHash()).length>0&&t.writeString(1,n),(n=e.getContentHash()).length>0&&t.writeString(2,n),null!=(n=e.getContentStartPosition())&&t.writeMessage(3,n,m.serializeBinaryToWriter),null!=(n=e.getContentEndPosition())&&t.writeMessage(4,n,m.serializeBinaryToWriter)}}]),a}(s.Message);r.ProgramAddContent=M,M.displayName="ProgramAddContent";var k=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getProgramHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setProgramHash",value:function(e){s.Message.setProto3StringField(this,1,e)}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,2,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,2,e)}}],[{key:"toObject",value:function(e,t){var n={programHash:s.Message.getFieldWithDefault(t,1,""),contentHash:s.Message.getFieldWithDefault(t,2,"")};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setProgramHash(n);break;case 2:var r=t.readString();e.setContentHash(r);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getProgramHash()).length>0&&t.writeString(1,n),(n=e.getContentHash()).length>0&&t.writeString(2,n)}}]),a}(s.Message);r.ProgramRemoveContent=k,k.displayName="ProgramRemoveContent";var P=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getProgramHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setProgramHash",value:function(e){s.Message.setProto3StringField(this,1,e)}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,2,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,2,e)}},{key:"getContentStartPosition",value:function(){return s.Message.getWrapperField(this,m,3)}},{key:"setContentStartPosition",value:function(e){s.Message.setWrapperField(this,3,e)}},{key:"clearContentStartPosition",value:function(){this.setContentStartPosition(void 0)}},{key:"hasContentStartPosition",value:function(){return null!=s.Message.getField(this,3)}},{key:"getContentEndPosition",value:function(){return s.Message.getWrapperField(this,m,4)}},{key:"setContentEndPosition",value:function(e){s.Message.setWrapperField(this,4,e)}},{key:"clearContentEndPosition",value:function(){this.setContentEndPosition(void 0)}},{key:"hasContentEndPosition",value:function(){return null!=s.Message.getField(this,4)}}],[{key:"toObject",value:function(e,t){var n,r={programHash:s.Message.getFieldWithDefault(t,1,""),contentHash:s.Message.getFieldWithDefault(t,2,""),contentStartPosition:(n=t.getContentStartPosition())&&m.toObject(e,n),contentEndPosition:(n=t.getContentEndPosition())&&m.toObject(e,n)};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setProgramHash(n);break;case 2:var r=t.readString();e.setContentHash(r);break;case 3:var i=new m;t.readMessage(i,m.deserializeBinaryFromReader),e.setContentStartPosition(i);break;case 4:var a=new m;t.readMessage(a,m.deserializeBinaryFromReader),e.setContentEndPosition(a);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getProgramHash()).length>0&&t.writeString(1,n),(n=e.getContentHash()).length>0&&t.writeString(2,n),null!=(n=e.getContentStartPosition())&&t.writeMessage(3,n,m.serializeBinaryToWriter),null!=(n=e.getContentEndPosition())&&t.writeMessage(4,n,m.serializeBinaryToWriter)}}]),a}(s.Message);r.ProgramMoveContent=P,P.displayName="ProgramMoveContent";var F=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,null,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getContentHash",value:function(){return s.Message.getFieldWithDefault(this,1,"")}},{key:"setContentHash",value:function(e){s.Message.setProto3StringField(this,1,e)}},{key:"getModerationResult",value:function(){return s.Message.getWrapperField(this,g.ModerationResult,3)}},{key:"setModerationResult",value:function(e){s.Message.setWrapperField(this,3,e)}},{key:"clearModerationResult",value:function(){this.setModerationResult(void 0)}},{key:"hasModerationResult",value:function(){return null!=s.Message.getField(this,3)}}],[{key:"toObject",value:function(e,t){var n,r={contentHash:s.Message.getFieldWithDefault(t,1,""),moderationResult:(n=t.getModerationResult())&&g.ModerationResult.toObject(e,n)};return e&&(r.$jspbMessageInstance=t),r}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setContentHash(n);break;case 3:var r=new g.ModerationResult;t.readMessage(r,g.ModerationResult.deserializeBinaryFromReader),e.setModerationResult(r);break;default:t.skipField()}return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n=void 0;(n=e.getContentHash()).length>0&&t.writeString(1,n),null!=(n=e.getModerationResult())&&t.writeMessage(3,n,g.ModerationResult.serializeBinaryToWriter)}}]),a}(s.Message);r.ProgramContentSaveResult=F,F.displayName="ProgramContentSaveResult";var w=function(t){e(a,t);var r=n(a);function a(e){var t;return o(this,a),t=r.call(this),s.Message.initialize(i(t),e,0,-1,a.repeatedFields_,null),t}return u(a,[{key:"toObject",value:function(e){return a.toObject(e||!1,this)}},{key:"serializeBinary",value:function(){var e=new s.BinaryWriter;return a.serializeBinaryToWriter(this,e),e.getResultBuffer()}},{key:"getMingaList",value:function(){return s.Message.getRepeatedWrapperField(this,c.MingaInfoMinimal,1)}},{key:"setMingaList",value:function(e){s.Message.setRepeatedWrapperField(this,1,e)}},{key:"addMinga",value:function(e,t){return s.Message.addToRepeatedWrapperField(this,1,e,c.MingaInfoMinimal,t)}},{key:"clearMingaList",value:function(){this.setMingaList([])}}],[{key:"toObject",value:function(e,t){var n={mingaList:s.Message.toObjectList(t.getMingaList(),c.MingaInfoMinimal.toObject,e)};return e&&(n.$jspbMessageInstance=t),n}},{key:"deserializeBinary",value:function(e){var t=new s.BinaryReader(e),n=new a;return a.deserializeBinaryFromReader(n,t)}},{key:"deserializeBinaryFromReader",value:function(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var n=new c.MingaInfoMinimal;t.readMessage(n,c.MingaInfoMinimal.deserializeBinaryFromReader),e.addMinga(n)}else t.skipField();return e}},{key:"serializeBinaryToWriter",value:function(e,t){var n;(n=e.getMingaList()).length>0&&t.writeRepeatedMessage(1,n,c.MingaInfoMinimal.serializeBinaryToWriter)}}]),a}(s.Message);r.ProgramMingasResult=w,w.displayName="ProgramMingasResult",w.repeatedFields_=[1]}}])}();
//# sourceMappingURL=default~minga-app-src-app-components-Overlay-ProgramMingas-ProgramMingasRouting-module~minga-app-src~0a4f62d9-es5.js.map