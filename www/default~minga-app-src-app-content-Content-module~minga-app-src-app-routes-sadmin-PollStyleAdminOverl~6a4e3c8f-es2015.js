(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+Iyi":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PollStyleLibrarySearchResponse=t.PollStyleLibraryList=t.PollStyleLibrarySetArchived=t.PollStyleLibraryDelete=t.PollStyleLibraryUpdate=t.PollStyleLibraryAdd=t.PollStyleLibraryGet=t.PollStyleList=t.PollStyle=void 0;const i=r("hRO2"),a=r("PYFZ"),s=r("F5Qo");class n extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return n.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleAsset:i.Message.getFieldWithDefault(t,1,""),pollStyleId:i.Message.getFieldWithDefault(t,2,0),archived:i.Message.getBooleanFieldWithDefault(t,3,!1),adminOnly:i.Message.getBooleanFieldWithDefault(t,4,!1)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new n;return n.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readString();e.setPollStyleAsset(r);break;case 2:var i=t.readUint32();e.setPollStyleId(i);break;case 3:var a=t.readBool();e.setArchived(a);break;case 4:var s=t.readBool();e.setAdminOnly(s);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;(r=e.getPollStyleAsset()).length>0&&t.writeString(1,r),0!==(r=e.getPollStyleId())&&t.writeUint32(2,r),(r=e.getArchived())&&t.writeBool(3,r),(r=e.getAdminOnly())&&t.writeBool(4,r)}serializeBinary(){var e=new i.BinaryWriter;return n.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleAsset(){return i.Message.getFieldWithDefault(this,1,"")}setPollStyleAsset(e){i.Message.setProto3StringField(this,1,e)}getPollStyleId(){return i.Message.getFieldWithDefault(this,2,0)}setPollStyleId(e){i.Message.setProto3IntField(this,2,e)}getArchived(){return i.Message.getBooleanFieldWithDefault(this,3,!1)}setArchived(e){i.Message.setProto3BooleanField(this,3,e)}getAdminOnly(){return i.Message.getBooleanFieldWithDefault(this,4,!1)}setAdminOnly(e){i.Message.setProto3BooleanField(this,4,e)}}t.PollStyle=n,n.displayName="PollStyle";class l extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,l.repeatedFields_,null)}toObject(e){return l.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleList:i.Message.toObjectList(t.getPollStyleList(),n.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new l;return l.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var r=new n;t.readMessage(r,n.deserializeBinaryFromReader),e.addPollStyle(r)}else t.skipField();return e}static serializeBinaryToWriter(e,t){var r;(r=e.getPollStyleList()).length>0&&t.writeRepeatedMessage(1,r,n.serializeBinaryToWriter)}serializeBinary(){var e=new i.BinaryWriter;return l.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleList(){return i.Message.getRepeatedWrapperField(this,n,1)}setPollStyleList(e){i.Message.setRepeatedWrapperField(this,1,e)}addPollStyle(e,t){return i.Message.addToRepeatedWrapperField(this,1,e,n,t)}clearPollStyleList(){this.setPollStyleList([])}}t.PollStyleList=l,l.displayName="PollStyleList",l.repeatedFields_=[1];class o extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return o.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleId:i.Message.getFieldWithDefault(t,1,0)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new o;return o.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var r=t.readUint32();e.setPollStyleId(r)}else t.skipField();return e}static serializeBinaryToWriter(e,t){var r;0!==(r=e.getPollStyleId())&&t.writeUint32(1,r)}serializeBinary(){var e=new i.BinaryWriter;return o.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleId(){return i.Message.getFieldWithDefault(this,1,0)}setPollStyleId(e){i.Message.setProto3IntField(this,1,e)}}t.PollStyleLibraryGet=o,o.displayName="PollStyleLibraryGet";class d extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return d.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleAsset:i.Message.getFieldWithDefault(t,1,""),archived:i.Message.getBooleanFieldWithDefault(t,2,!1),adminOnly:i.Message.getBooleanFieldWithDefault(t,3,!1)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new d;return d.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readString();e.setPollStyleAsset(r);break;case 2:var i=t.readBool();e.setArchived(i);break;case 3:var a=t.readBool();e.setAdminOnly(a);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;(r=e.getPollStyleAsset()).length>0&&t.writeString(1,r),(r=e.getArchived())&&t.writeBool(2,r),(r=e.getAdminOnly())&&t.writeBool(3,r)}serializeBinary(){var e=new i.BinaryWriter;return d.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleAsset(){return i.Message.getFieldWithDefault(this,1,"")}setPollStyleAsset(e){i.Message.setProto3StringField(this,1,e)}getArchived(){return i.Message.getBooleanFieldWithDefault(this,2,!1)}setArchived(e){i.Message.setProto3BooleanField(this,2,e)}getAdminOnly(){return i.Message.getBooleanFieldWithDefault(this,3,!1)}setAdminOnly(e){i.Message.setProto3BooleanField(this,3,e)}}t.PollStyleLibraryAdd=d,d.displayName="PollStyleLibraryAdd";class c extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return c.toObject(e||!1,this)}static toObject(e,t){var r,a={pollStyleId:i.Message.getFieldWithDefault(t,1,0),pollStyleAsset:(r=t.getPollStyleAsset())&&s.StringDelta.toObject(e,r),archived:i.Message.getBooleanFieldWithDefault(t,3,!1),adminOnly:i.Message.getBooleanFieldWithDefault(t,4,!1)};return e&&(a.$jspbMessageInstance=t),a}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new c;return c.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readUint32();e.setPollStyleId(r);break;case 2:var i=new s.StringDelta;t.readMessage(i,s.StringDelta.deserializeBinaryFromReader),e.setPollStyleAsset(i);break;case 3:var a=t.readBool();e.setArchived(a);break;case 4:var n=t.readBool();e.setAdminOnly(n);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;0!==(r=e.getPollStyleId())&&t.writeUint32(1,r),null!=(r=e.getPollStyleAsset())&&t.writeMessage(2,r,s.StringDelta.serializeBinaryToWriter),(r=e.getArchived())&&t.writeBool(3,r),(r=e.getAdminOnly())&&t.writeBool(4,r)}serializeBinary(){var e=new i.BinaryWriter;return c.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleId(){return i.Message.getFieldWithDefault(this,1,0)}setPollStyleId(e){i.Message.setProto3IntField(this,1,e)}getPollStyleAsset(){return i.Message.getWrapperField(this,s.StringDelta,2)}setPollStyleAsset(e){i.Message.setWrapperField(this,2,e)}clearPollStyleAsset(){this.setPollStyleAsset(void 0)}hasPollStyleAsset(){return null!=i.Message.getField(this,2)}getArchived(){return i.Message.getBooleanFieldWithDefault(this,3,!1)}setArchived(e){i.Message.setProto3BooleanField(this,3,e)}getAdminOnly(){return i.Message.getBooleanFieldWithDefault(this,4,!1)}setAdminOnly(e){i.Message.setProto3BooleanField(this,4,e)}}t.PollStyleLibraryUpdate=c,c.displayName="PollStyleLibraryUpdate";class g extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return g.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleId:i.Message.getFieldWithDefault(t,1,0)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new g;return g.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var r=t.readUint32();e.setPollStyleId(r)}else t.skipField();return e}static serializeBinaryToWriter(e,t){var r;0!==(r=e.getPollStyleId())&&t.writeUint32(1,r)}serializeBinary(){var e=new i.BinaryWriter;return g.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleId(){return i.Message.getFieldWithDefault(this,1,0)}setPollStyleId(e){i.Message.setProto3IntField(this,1,e)}}t.PollStyleLibraryDelete=g,g.displayName="PollStyleLibraryDelete";class u extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return u.toObject(e||!1,this)}static toObject(e,t){var r={pollStyleId:i.Message.getFieldWithDefault(t,1,0),archived:i.Message.getBooleanFieldWithDefault(t,2,!1)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new u;return u.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readUint32();e.setPollStyleId(r);break;case 2:var i=t.readBool();e.setArchived(i);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;0!==(r=e.getPollStyleId())&&t.writeUint32(1,r),(r=e.getArchived())&&t.writeBool(2,r)}serializeBinary(){var e=new i.BinaryWriter;return u.serializeBinaryToWriter(this,e),e.getResultBuffer()}getPollStyleId(){return i.Message.getFieldWithDefault(this,1,0)}setPollStyleId(e){i.Message.setProto3IntField(this,1,e)}getArchived(){return i.Message.getBooleanFieldWithDefault(this,2,!1)}setArchived(e){i.Message.setProto3BooleanField(this,2,e)}}t.PollStyleLibrarySetArchived=u,u.displayName="PollStyleLibrarySetArchived";class y extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return y.toObject(e||!1,this)}static toObject(e,t){var r={count:i.Message.getFieldWithDefault(t,1,0),offset:i.Message.getFieldWithDefault(t,2,0)};return e&&(r.$jspbMessageInstance=t),r}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new y;return y.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readInt32();e.setCount(r);break;case 2:var i=t.readInt32();e.setOffset(i);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;0!==(r=e.getCount())&&t.writeInt32(1,r),0!==(r=e.getOffset())&&t.writeInt32(2,r)}serializeBinary(){var e=new i.BinaryWriter;return y.serializeBinaryToWriter(this,e),e.getResultBuffer()}getCount(){return i.Message.getFieldWithDefault(this,1,0)}setCount(e){i.Message.setProto3IntField(this,1,e)}getOffset(){return i.Message.getFieldWithDefault(this,2,0)}setOffset(e){i.Message.setProto3IntField(this,2,e)}}t.PollStyleLibraryList=y,y.displayName="PollStyleLibraryList";class p extends i.Message{constructor(e){super(),i.Message.initialize(this,e,0,-1,null,null)}toObject(e){return p.toObject(e||!1,this)}static toObject(e,t){var r,i={itemMetadata:(r=t.getItemMetadata())&&a.StreamItemMetadata.toObject(e,r),item:(r=t.getItem())&&n.toObject(e,r)};return e&&(i.$jspbMessageInstance=t),i}static deserializeBinary(e){var t=new i.BinaryReader(e),r=new p;return p.deserializeBinaryFromReader(r,t)}static deserializeBinaryFromReader(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=new a.StreamItemMetadata;t.readMessage(r,a.StreamItemMetadata.deserializeBinaryFromReader),e.setItemMetadata(r);break;case 2:var i=new n;t.readMessage(i,n.deserializeBinaryFromReader),e.setItem(i);break;default:t.skipField()}return e}static serializeBinaryToWriter(e,t){var r=void 0;null!=(r=e.getItemMetadata())&&t.writeMessage(1,r,a.StreamItemMetadata.serializeBinaryToWriter),null!=(r=e.getItem())&&t.writeMessage(2,r,n.serializeBinaryToWriter)}serializeBinary(){var e=new i.BinaryWriter;return p.serializeBinaryToWriter(this,e),e.getResultBuffer()}getItemMetadata(){return i.Message.getWrapperField(this,a.StreamItemMetadata,1)}setItemMetadata(e){i.Message.setWrapperField(this,1,e)}clearItemMetadata(){this.setItemMetadata(void 0)}hasItemMetadata(){return null!=i.Message.getField(this,1)}getItem(){return i.Message.getWrapperField(this,n,2)}setItem(e){i.Message.setWrapperField(this,2,e)}clearItem(){this.setItem(void 0)}hasItem(){return null!=i.Message.getField(this,2)}}t.PollStyleLibrarySearchResponse=p,p.displayName="PollStyleLibrarySearchResponse"},"9Jf6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PollStyleLibraryClient=t.PollStyleLibrary=void 0;const i=r("+Iyi"),a=r("PYFZ");class s{}t.PollStyleLibrary=s,s.serviceName="minga.content.PollStyleLibrary",s.Get={methodName:"Get",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibraryGet,responseType:i.PollStyle},s.Add={methodName:"Add",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibraryAdd,responseType:i.PollStyle},s.Update={methodName:"Update",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibraryUpdate,responseType:i.PollStyle},s.Delete={methodName:"Delete",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibraryDelete,responseType:i.PollStyle},s.SetArchived={methodName:"SetArchived",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibrarySetArchived,responseType:i.PollStyle},s.List={methodName:"List",service:s,requestStream:!1,responseStream:!1,requestType:i.PollStyleLibraryList,responseType:i.PollStyleList},s.Search={methodName:"Search",service:s,requestStream:!1,responseStream:!0,requestType:a.StreamID,responseType:i.PollStyleLibrarySearchResponse},s.SearchControl={methodName:"SearchControl",service:s,requestStream:!1,responseStream:!1,requestType:a.StreamControl,responseType:a.StreamControlResponse},t.PollStyleLibraryClient=class{get(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}add(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}update(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}delete(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}setArchived(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}list(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}search(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}searchControl(){throw new Error("minga_protoc_gen_improbable_eng_grpc_web client methods are unimplemented")}}},P4MA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PollStyleLibrary=void 0,r("8Y7J");const i=r("qCKp"),a=r("+6wJ"),s=r("9Jf6"),n=r("8Y7J");class l{constructor(e){this._ngZone=e}get(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.Get,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}add(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.Add,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}update(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.Update,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}delete(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.Delete,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}setArchived(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.SetArchived,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}list(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.List,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}search(e,t,r,n,l){let o,d,c,g,u;if("function"==typeof t?(c=t,g=r,u=n):"function"==typeof r?(d=t,c=r,g=n,u=l):d=t,c)g||(g=e=>console.error(e)),u||(u=(e,t,r)=>{});else{let e=new i.Subject;o=e.asObservable(),c=t=>{e.next(t)},g=t=>{e.error(t)},u=(t,r,i)=>{e.complete()}}let y=a.grpc.invoke(s.PollStyleLibrary.Search,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:d,onMessage:e=>this._ngZone.run(()=>{c(e)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e==a.grpc.Code.OK)u(e,t,r);else{let r=new Error(e+" "+(t||""));r.code=e,g(r)}})});return o.close=()=>(console.warn("[Angular Grpc] .close() is deprecated use .cancel() instead"),y.close()),o.cancel=()=>y.close(),o}searchControl(e,t,r){let i,n,l;"function"==typeof t?n=t:(l=t,n=r),n||(i=new Promise((e,t)=>{n=(r,i)=>{r?t(r):e(i)}}));let o=null,d=a.grpc.invoke(s.PollStyleLibrary.SearchControl,{request:e,host:window.DEFAULT_ANGULAR_GRPC_HOST||"https://"+location.hostname,metadata:l,onHeaders:e=>o=e,onMessage:e=>this._ngZone.run(()=>{n(null,e,o||new a.grpc.Metadata)}),onEnd:(e,t,r)=>this._ngZone.run(()=>{if(e!=a.grpc.Code.OK){let r=new Error(t);r.code=e,n(r)}})});return i.cancel=()=>d.close(),i}}t.PollStyleLibrary=l,l.\u0275fac=function(e){return new(e||l)(n.\u0275\u0275inject(n.NgZone))},l.\u0275prov=n.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"})},bo7O:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r("xiiZ");var i=r("SVse"),a=r("8Y7J"),s=r("ugqS"),n=r("Ogcz");let l=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[s.a,n.b,i.c]]}),e})()},vcU5:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("mrSG"),a=r("A75Z");function s(e){return Object(i.a)(this,void 0,void 0,(function*(){if(!e.fontFamily)return!1;let t=e.fontFamily;return e.fontWeight&&(t+=":"+e.fontWeight),Object(a.a)(t)}))}},xiiZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var i=r("8Y7J"),a=r("vcU5"),s=r("fTqC"),n=r("jcBT"),l=r("SVse"),o=r("StFh");function d(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",2),i["\u0275\u0275text"](1," Aa "),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("ngStyle",e.headlineStyle(null==e.banner?null:e.banner.headlineOptions))}}const c=function(){return["blurloading1","bannerlibpreview"]};let g=(()=>{class e{constructor(){this.banner=null,this.disableBannerHeadlines=!1}headlineStyle(e){return e?(Object(a.a)(e),Object(s.a)("Aa",Object.assign(Object.assign({},e),{maxFontSize:18,minFontSize:18}),{maxLength:2,containerWidth:128})):{}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["mg-banner-preview"]],inputs:{banner:"banner",disableBannerHeadlines:"disableBannerHeadlines"},decls:3,vars:6,consts:[[1,"mg-banner-preview",3,"srcs"],["class","mg-banner-headline-preview",3,"ngStyle",4,"ngIf"],[1,"mg-banner-headline-preview",3,"ngStyle"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mg-image",0),i["\u0275\u0275pipe"](1,"mgImageUrls"),i["\u0275\u0275template"](2,d,2,1,"div",1),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("srcs",i["\u0275\u0275pipeBind2"](1,2,null==t.banner?null:t.banner.image,i["\u0275\u0275pureFunction0"](5,c))),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",(null==t.banner?null:t.banner.headlineOptions)&&!t.disableBannerHeadlines))},directives:[n.a,l.o,l.p],pipes:[o.a],styles:[".mg-banner-preview[_ngcontent-%COMP%], [_nghost-%COMP%]{display:inline-block}.mg-banner-preview[_ngcontent-%COMP%]{position:relative;width:128px;height:72px;background-color:#ccc;border:1px solid #ccc;box-shadow:0 0 2px rgba(0,0,0,.16);cursor:pointer;background-size:cover;background-position:50%}.mg-banner-headline-preview[_ngcontent-%COMP%]{position:absolute;-webkit-user-select:none;user-select:none}[banner-selected][_nghost-%COMP%]   .mg-banner-preview[_ngcontent-%COMP%]{border:1px solid #3cf}[no-style][_nghost-%COMP%]   .mg-banner-preview[_ngcontent-%COMP%]{margin:0;border-radius:0;box-shadow:none;border:none}.ios-radius[_nghost-%COMP%]   .mg-banner-preview[_ngcontent-%COMP%]{border-radius:8px}.banner-selected.ios-radius[_nghost-%COMP%]   .mg-banner-preview[_ngcontent-%COMP%], [banner-selected].ios-radius[_nghost-%COMP%]   .mg-banner-preview[_ngcontent-%COMP%]{border-radius:4px}"],changeDetection:0}),e})()}}]);
//# sourceMappingURL=default~minga-app-src-app-content-Content-module~minga-app-src-app-routes-sadmin-PollStyleAdminOverl~6a4e3c8f-es2015.js.map