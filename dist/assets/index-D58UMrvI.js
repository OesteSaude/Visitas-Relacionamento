function Iy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ty(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bp={exports:{}},vl={},$p={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),ky=Symbol.for("react.portal"),Ny=Symbol.for("react.fragment"),Ry=Symbol.for("react.strict_mode"),xy=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Oy=Symbol.for("react.forward_ref"),Dy=Symbol.for("react.suspense"),Ly=Symbol.for("react.memo"),My=Symbol.for("react.lazy"),hh=Symbol.iterator;function by(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Kp={};function Yr(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||Hp}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=Yr.prototype;function pc(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||Hp}var mc=pc.prototype=new qp;mc.constructor=pc;Gp(mc,Yr.prototype);mc.isPureReactComponent=!0;var fh=Array.isArray,Qp=Object.prototype.hasOwnProperty,gc={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qp.call(e,r)&&!Yp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ws,type:t,key:s,ref:o,props:i,_owner:gc.current}}function Fy(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _c(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function jy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function ra(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jy(""+t.key):e.toString(36)}function ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ws:case ky:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ra(o,0):r,fh(i)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),ro(i,e,n,"",function(u){return u})):i!=null&&(_c(i)&&(i=Fy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ra(s,l);o+=ro(s,e,n,a,i)}else if(a=by(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ra(s,l++),o+=ro(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},io={transition:null},zy={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:io,ReactCurrentOwner:gc};function Xp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!_c(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Yr;U.Fragment=Ny;U.Profiler=xy;U.PureComponent=pc;U.StrictMode=Ry;U.Suspense=Dy;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy;U.act=Xp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Qp.call(e,a)&&!Yp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ws,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Ay,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Py,_context:t},t.Consumer=t};U.createElement=Jp;U.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Oy,render:t}};U.isValidElement=_c;U.lazy=function(t){return{$$typeof:My,_payload:{_status:-1,_result:t},_init:Uy}};U.memo=function(t,e){return{$$typeof:Ly,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=io.transition;io.transition={};try{t()}finally{io.transition=e}};U.unstable_act=Xp;U.useCallback=function(t,e){return Oe.current.useCallback(t,e)};U.useContext=function(t){return Oe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};U.useEffect=function(t,e){return Oe.current.useEffect(t,e)};U.useId=function(){return Oe.current.useId()};U.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Oe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};U.useRef=function(t){return Oe.current.useRef(t)};U.useState=function(t){return Oe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Oe.current.useTransition()};U.version="18.3.1";$p.exports=U;var E=$p.exports;const Zp=Ty(E),Wy=Iy({__proto__:null,default:Zp},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=E,By=Symbol.for("react.element"),$y=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Gy=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ky={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hy.call(e,r)&&!Ky.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:By,type:t,key:s,ref:o,props:i,_owner:Gy.current}}vl.Fragment=$y;vl.jsx=em;vl.jsxs=em;Bp.exports=vl;var p=Bp.exports,Ga={},tm={exports:{}},Ke={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var M=P.length;P.push(L);e:for(;0<M;){var se=M-1>>>1,ce=P[se];if(0<i(ce,L))P[se]=L,P[M]=ce,M=se;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],M=P.pop();if(M!==L){P[0]=M;e:for(var se=0,ce=P.length,Ms=ce>>>1;se<Ms;){var Pn=2*(se+1)-1,na=P[Pn],An=Pn+1,bs=P[An];if(0>i(na,M))An<ce&&0>i(bs,na)?(P[se]=bs,P[An]=M,se=An):(P[se]=na,P[Pn]=M,se=Pn);else if(An<ce&&0>i(bs,M))P[se]=bs,P[An]=M,se=An;else break e}}return L}function i(P,L){var M=P.sortIndex-L.sortIndex;return M!==0?M:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(a)!==null)v=!0,ea(T);else{var L=n(u);L!==null&&ta(w,L.startTime-P)}}function T(P,L){v=!1,y&&(y=!1,g(R),R=-1),_=!0;var M=h;try{for(m(L),c=n(a);c!==null&&(!(c.expirationTime>L)||P&&!Ne());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var ce=se(c.expirationTime<=L);L=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),m(L)}else r(a);c=n(a)}if(c!==null)var Ms=!0;else{var Pn=n(u);Pn!==null&&ta(w,Pn.startTime-L),Ms=!1}return Ms}finally{c=null,h=M,_=!1}}var N=!1,k=null,R=-1,W=5,D=-1;function Ne(){return!(t.unstable_now()-D<W)}function ci(){if(k!==null){var P=t.unstable_now();D=P;var L=!0;try{L=k(!0,P)}finally{L?di():(N=!1,k=null)}}else N=!1}var di;if(typeof f=="function")di=function(){f(ci)};else if(typeof MessageChannel<"u"){var dh=new MessageChannel,Sy=dh.port2;dh.port1.onmessage=ci,di=function(){Sy.postMessage(null)}}else di=function(){C(ci,0)};function ea(P){k=P,N||(N=!0,di())}function ta(P,L){R=C(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,ea(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return P()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return L()}finally{h=M}},t.unstable_scheduleCallback=function(P,L,M){var se=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?se+M:se):M=se,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,P={id:d++,callback:L,priorityLevel:P,startTime:M,expirationTime:ce,sortIndex:-1},M>se?(P.sortIndex=M,e(u,P),n(a)===null&&P===n(u)&&(y?(g(R),R=-1):y=!0,ta(w,M-se))):(P.sortIndex=ce,e(a,P),v||_||(v=!0,ea(T))),P},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(P){var L=h;return function(){var M=h;h=L;try{return P.apply(this,arguments)}finally{h=M}}}})(rm);nm.exports=rm;var qy=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=E,Ge=qy;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,Hi={};function er(t,e){Lr(t,e),Lr(t+"Capture",e)}function Lr(t,e){for(Hi[t]=e,t=0;t<e.length;t++)im.add(e[t])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,Yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function Jy(t){return Ka.call(gh,t)?!0:Ka.call(mh,t)?!1:Yy.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function Xy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zy(t,e,n,r){if(e===null||typeof e>"u"||Xy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var vc=/[\-:]([a-z])/g;function yc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vc,yc);we[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vc,yc);we[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vc,yc);we[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function wc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zy(e,n,i,r)&&(n=null),r||i===null?Jy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vt=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),om=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function hi(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,ia;function Ii(t){if(ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ia=e&&e[1]||""}return`
`+ia+t}var sa=!1;function oa(t,e){if(!t||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ii(t):""}function ew(t){switch(t.tag){case 5:return Ii(t.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return t=oa(t.type,!1),t;case 11:return t=oa(t.type.render,!1),t;case 1:return t=oa(t.type,!0),t;default:return""}}function Ja(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case lr:return"Portal";case qa:return"Profiler";case Ec:return"StrictMode";case Qa:return"Suspense";case Ya:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case om:return(t.displayName||"Context")+".Consumer";case sm:return(t._context.displayName||"Context")+".Provider";case Cc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sc:return e=t.displayName||null,e!==null?e:Ja(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return Ja(t(e))}catch{}}return null}function tw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(e);case 8:return e===Ec?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nw(t){var e=am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=nw(t))}function um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=am(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cm(t,e){e=e.checked,e!=null&&wc(t,"checked",e,!1)}function Za(t,e){cm(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&eu(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eu(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ti=Array.isArray;function Er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ti(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function dm(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zs,fm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rw=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(t){rw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pi[e]=Pi[t]})});function pm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pi.hasOwnProperty(t)&&Pi[t]?(""+e).trim():e+"px"}function mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(t,e){if(e){if(iw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var su=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ou=null,Cr=null,Sr=null;function Ch(t){if(t=Ss(t)){if(typeof ou!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Sl(e),ou(t.stateNode,t.type,e))}}function gm(t){Cr?Sr?Sr.push(t):Sr=[t]:Cr=t}function _m(){if(Cr){var t=Cr,e=Sr;if(Sr=Cr=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function vm(t,e){return t(e)}function ym(){}var la=!1;function wm(t,e,n){if(la)return t(e,n);la=!0;try{return vm(t,e,n)}finally{la=!1,(Cr!==null||Sr!==null)&&(ym(),_m())}}function Ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var lu=!1;if(Mt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){lu=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{lu=!1}function sw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ai=!1,Co=null,So=!1,au=null,ow={onError:function(t){Ai=!0,Co=t}};function lw(t,e,n,r,i,s,o,l,a){Ai=!1,Co=null,sw.apply(ow,arguments)}function aw(t,e,n,r,i,s,o,l,a){if(lw.apply(this,arguments),Ai){if(Ai){var u=Co;Ai=!1,Co=null}else throw Error(S(198));So||(So=!0,au=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sh(t){if(tr(t)!==t)throw Error(S(188))}function uw(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sh(i),t;if(s===r)return Sh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Cm(t){return t=uw(t),t!==null?Sm(t):null}function Sm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sm(t);if(e!==null)return e;t=t.sibling}return null}var Im=Ge.unstable_scheduleCallback,Ih=Ge.unstable_cancelCallback,cw=Ge.unstable_shouldYield,dw=Ge.unstable_requestPaint,oe=Ge.unstable_now,hw=Ge.unstable_getCurrentPriorityLevel,Tc=Ge.unstable_ImmediatePriority,Tm=Ge.unstable_UserBlockingPriority,Io=Ge.unstable_NormalPriority,fw=Ge.unstable_LowPriority,km=Ge.unstable_IdlePriority,yl=null,yt=null;function pw(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:_w,mw=Math.log,gw=Math.LN2;function _w(t){return t>>>=0,t===0?32:31-(mw(t)/gw|0)|0}var Ws=64,Vs=4194304;function ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ki(l):(s&=o,s!==0&&(r=ki(s)))}else o=n&~i,o!==0?r=ki(o):s!==0&&(r=ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function vw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=vw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function ww(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function Rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xm,Nc,Pm,Am,Om,cu=!1,Bs=[],ln=null,an=null,un=null,qi=new Map,Qi=new Map,Yt=[],Ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&Nc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Cw(t,e,n,r,i){switch(e){case"focusin":return ln=pi(ln,t,e,n,r,i),!0;case"dragenter":return an=pi(an,t,e,n,r,i),!0;case"mouseover":return un=pi(un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qi.set(s,pi(qi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,pi(Qi.get(s)||null,t,e,n,r,i)),!0}return!1}function Dm(t){var e=bn(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Em(n),e!==null){t.blockedOn=e,Om(t.priority,function(){Pm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);su=r,n.target.dispatchEvent(r),su=null}else return e=Ss(n),e!==null&&Nc(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){so(t)&&n.delete(e)}function Sw(){cu=!1,ln!==null&&so(ln)&&(ln=null),an!==null&&so(an)&&(an=null),un!==null&&so(un)&&(un=null),qi.forEach(kh),Qi.forEach(kh)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,cu||(cu=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Sw)))}function Yi(t){function e(i){return mi(i,t)}if(0<Bs.length){mi(Bs[0],t);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ln!==null&&mi(ln,t),an!==null&&mi(an,t),un!==null&&mi(un,t),qi.forEach(e),Qi.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Dm(n),n.blockedOn===null&&Yt.shift()}var Ir=Vt.ReactCurrentBatchConfig,ko=!0;function Iw(t,e,n,r){var i=B,s=Ir.transition;Ir.transition=null;try{B=1,Rc(t,e,n,r)}finally{B=i,Ir.transition=s}}function Tw(t,e,n,r){var i=B,s=Ir.transition;Ir.transition=null;try{B=4,Rc(t,e,n,r)}finally{B=i,Ir.transition=s}}function Rc(t,e,n,r){if(ko){var i=du(t,e,n,r);if(i===null)va(t,e,r,No,n),Th(t,r);else if(Cw(i,t,e,n,r))r.stopPropagation();else if(Th(t,r),e&4&&-1<Ew.indexOf(t)){for(;i!==null;){var s=Ss(i);if(s!==null&&xm(s),s=du(t,e,n,r),s===null&&va(t,e,r,No,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else va(t,e,r,null,n)}}var No=null;function du(t,e,n,r){if(No=null,t=Ic(r),t=bn(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return No=t,null}function Lm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hw()){case Tc:return 1;case Tm:return 4;case Io:case fw:return 16;case km:return 536870912;default:return 16}default:return 16}}var nn=null,xc=null,oo=null;function Mm(){if(oo)return oo;var t,e=xc,n=e.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function Nh(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:Nh,this.isPropagationStopped=Nh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=qe(Jr),Cs=te({},Jr,{view:0,detail:0}),kw=qe(Cs),ua,ca,gi,wl=te({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(ua=t.screenX-gi.screenX,ca=t.screenY-gi.screenY):ca=ua=0,gi=t),ua)},movementY:function(t){return"movementY"in t?t.movementY:ca}}),Rh=qe(wl),Nw=te({},wl,{dataTransfer:0}),Rw=qe(Nw),xw=te({},Cs,{relatedTarget:0}),da=qe(xw),Pw=te({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Aw=qe(Pw),Ow=te({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dw=qe(Ow),Lw=te({},Jr,{data:0}),xh=qe(Lw),Mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fw[t])?!!e[t]:!1}function Ac(){return jw}var Uw=te({},Cs,{key:function(t){if(t.key){var e=Mw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zw=qe(Uw),Ww=te({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=qe(Ww),Vw=te({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Bw=qe(Vw),$w=te({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hw=qe($w),Gw=te({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kw=qe(Gw),qw=[9,13,27,32],Oc=Mt&&"CompositionEvent"in window,Oi=null;Mt&&"documentMode"in document&&(Oi=document.documentMode);var Qw=Mt&&"TextEvent"in window&&!Oi,bm=Mt&&(!Oc||Oi&&8<Oi&&11>=Oi),Ah=" ",Oh=!1;function Fm(t,e){switch(t){case"keyup":return qw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function Yw(t,e){switch(t){case"compositionend":return jm(e);case"keypress":return e.which!==32?null:(Oh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Oh?null:t;default:return null}}function Jw(t,e){if(ur)return t==="compositionend"||!Oc&&Fm(t,e)?(t=Mm(),oo=xc=nn=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xw[t.type]:e==="textarea"}function Um(t,e,n,r){gm(r),e=Ro(e,"onChange"),0<e.length&&(n=new Pc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Di=null,Ji=null;function Zw(t){Ym(t,0)}function El(t){var e=hr(t);if(um(e))return t}function eE(t,e){if(t==="change")return e}var zm=!1;if(Mt){var ha;if(Mt){var fa="oninput"in document;if(!fa){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),fa=typeof Lh.oninput=="function"}ha=fa}else ha=!1;zm=ha&&(!document.documentMode||9<document.documentMode)}function Mh(){Di&&(Di.detachEvent("onpropertychange",Wm),Ji=Di=null)}function Wm(t){if(t.propertyName==="value"&&El(Ji)){var e=[];Um(e,Ji,t,Ic(t)),wm(Zw,e)}}function tE(t,e,n){t==="focusin"?(Mh(),Di=e,Ji=n,Di.attachEvent("onpropertychange",Wm)):t==="focusout"&&Mh()}function nE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Ji)}function rE(t,e){if(t==="click")return El(e)}function iE(t,e){if(t==="input"||t==="change")return El(e)}function sE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:sE;function Xi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=bh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function Vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bm(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function Dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oE(t){var e=Bm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(r!==null&&Dc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fh(n,s);var o=Fh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lE=Mt&&"documentMode"in document&&11>=document.documentMode,cr=null,hu=null,Li=null,fu=!1;function jh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fu||cr==null||cr!==Eo(r)||(r=cr,"selectionStart"in r&&Dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Li&&Xi(Li,r)||(Li=r,r=Ro(hu,"onSelect"),0<r.length&&(e=new Pc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cr)))}function Hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},pa={},$m={};Mt&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Cl(t){if(pa[t])return pa[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return pa[t]=e[n];return t}var Hm=Cl("animationend"),Gm=Cl("animationiteration"),Km=Cl("animationstart"),qm=Cl("transitionend"),Qm=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Qm.set(t,e),er(e,[t])}for(var ma=0;ma<Uh.length;ma++){var ga=Uh[ma],aE=ga.toLowerCase(),uE=ga[0].toUpperCase()+ga.slice(1);In(aE,"on"+uE)}In(Hm,"onAnimationEnd");In(Gm,"onAnimationIteration");In(Km,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(qm,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function zh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aw(r,e,void 0,t),t.currentTarget=null}function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}}}if(So)throw t=au,So=!1,au=null,t}function Q(t,e){var n=e[vu];n===void 0&&(n=e[vu]=new Set);var r=t+"__bubble";n.has(r)||(Jm(e,t,2,!1),n.add(r))}function _a(t,e,n){var r=0;e&&(r|=4),Jm(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[Gs]){t[Gs]=!0,im.forEach(function(n){n!=="selectionchange"&&(cE.has(n)||_a(n,!1,t),_a(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,_a("selectionchange",!1,e))}}function Jm(t,e,n,r){switch(Lm(e)){case 1:var i=Iw;break;case 4:i=Tw;break;default:i=Rc}n=i.bind(null,e,n,t),i=void 0,!lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function va(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}wm(function(){var u=s,d=Ic(n),c=[];e:{var h=Qm.get(t);if(h!==void 0){var _=Pc,v=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":_=zw;break;case"focusin":v="focus",_=da;break;case"focusout":v="blur",_=da;break;case"beforeblur":case"afterblur":_=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Bw;break;case Hm:case Gm:case Km:_=Aw;break;case qm:_=Hw;break;case"scroll":_=kw;break;case"wheel":_=Kw;break;case"copy":case"cut":case"paste":_=Dw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ph}var y=(e&4)!==0,C=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ki(f,g),w!=null&&y.push(es(f,w,m)))),C)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==su&&(v=n.relatedTarget||n.fromElement)&&(bn(v)||v[bt]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?bn(v):null,v!==null&&(C=tr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=Rh,w="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ph,w="onPointerLeave",g="onPointerEnter",f="pointer"),C=_==null?h:hr(_),m=v==null?h:hr(v),h=new y(w,f+"leave",_,n,d),h.target=C,h.relatedTarget=m,w=null,bn(d)===u&&(y=new y(g,f+"enter",v,n,d),y.target=m,y.relatedTarget=C,w=y),C=w,_&&v)t:{for(y=_,g=v,f=0,m=y;m;m=sr(m))f++;for(m=0,w=g;w;w=sr(w))m++;for(;0<f-m;)y=sr(y),f--;for(;0<m-f;)g=sr(g),m--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=sr(y),g=sr(g)}y=null}else y=null;_!==null&&Wh(c,h,_,y,!1),v!==null&&C!==null&&Wh(c,C,v,y,!0)}}e:{if(h=u?hr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=eE;else if(Dh(h))if(zm)T=iE;else{T=nE;var N=tE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=rE);if(T&&(T=T(t,u))){Um(c,T,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&eu(h,"number",h.value)}switch(N=u?hr(u):window,t){case"focusin":(Dh(N)||N.contentEditable==="true")&&(cr=N,hu=u,Li=null);break;case"focusout":Li=hu=cr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,jh(c,n,d);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":jh(c,n,d)}var k;if(Oc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ur?Fm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(bm&&n.locale!=="ko"&&(ur||R!=="onCompositionStart"?R==="onCompositionEnd"&&ur&&(k=Mm()):(nn=d,xc="value"in nn?nn.value:nn.textContent,ur=!0)),N=Ro(u,R),0<N.length&&(R=new xh(R,t,null,n,d),c.push({event:R,listeners:N}),k?R.data=k:(k=jm(n),k!==null&&(R.data=k)))),(k=Qw?Yw(t,n):Jw(t,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(d=new xh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Ym(c,e)})}function es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(t,n),s!=null&&r.unshift(es(t,s,i)),s=Ki(t,e),s!=null&&r.push(es(t,s,i))),t=t.return}return r}function sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ki(n,s),a!=null&&o.unshift(es(n,a,l))):i||(a=Ki(n,s),a!=null&&o.push(es(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function Vh(t){return(typeof t=="string"?t:""+t).replace(dE,`
`).replace(hE,"")}function Ks(t,e,n){if(e=Vh(e),Vh(t)!==e&&n)throw Error(S(425))}function xo(){}var pu=null,mu=null;function gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,fE=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(mE)}:_u;function mE(t){setTimeout(function(){throw t})}function ya(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(e)}function cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Xr,ts="__reactProps$"+Xr,bt="__reactContainer$"+Xr,vu="__reactEvents$"+Xr,gE="__reactListeners$"+Xr,_E="__reactHandles$"+Xr;function bn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[_t])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[_t]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Sl(t){return t[ts]||null}var yu=[],fr=-1;function Tn(t){return{current:t}}function Y(t){0>fr||(t.current=yu[fr],yu[fr]=null,fr--)}function q(t,e){fr++,yu[fr]=t.current,t.current=e}var En={},Te=Tn(En),je=Tn(!1),Vn=En;function Mr(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function Po(){Y(je),Y(Te)}function Hh(t,e,n){if(Te.current!==En)throw Error(S(168));q(Te,e),q(je,n)}function Xm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,tw(t)||"Unknown",i));return te({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Vn=Te.current,q(Te,t),q(je,je.current),!0}function Gh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Xm(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,Y(je),Y(Te),q(Te,t)):Y(je),q(je,n)}var Tt=null,Il=!1,wa=!1;function Zm(t){Tt===null?Tt=[t]:Tt.push(t)}function vE(t){Il=!0,Zm(t)}function kn(){if(!wa&&Tt!==null){wa=!0;var t=0,e=B;try{var n=Tt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tt=null,Il=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(t+1)),Im(Tc,kn),i}finally{B=e,wa=!1}}return null}var pr=[],mr=0,Oo=null,Do=0,Qe=[],Ye=0,Bn=null,kt=1,Nt="";function On(t,e){pr[mr++]=Do,pr[mr++]=Oo,Oo=t,Do=e}function eg(t,e,n){Qe[Ye++]=kt,Qe[Ye++]=Nt,Qe[Ye++]=Bn,Bn=t;var r=kt;t=Nt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-ut(e)+i|n<<i|r,Nt=s+t}else kt=1<<s|n<<i|r,Nt=t}function Lc(t){t.return!==null&&(On(t,1),eg(t,1,0))}function Mc(t){for(;t===Oo;)Oo=pr[--mr],pr[mr]=null,Do=pr[--mr],pr[mr]=null;for(;t===Bn;)Bn=Qe[--Ye],Qe[Ye]=null,Nt=Qe[--Ye],Qe[Ye]=null,kt=Qe[--Ye],Qe[Ye]=null}var Be=null,Ve=null,J=!1,ot=null;function tg(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,Ve=cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bn!==null?{id:kt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,Ve=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(J){var e=Ve;if(e){var n=e;if(!Kh(t,e)){if(wu(t))throw Error(S(418));e=cn(n.nextSibling);var r=Be;e&&Kh(t,e)?tg(r,n):(t.flags=t.flags&-4097|2,J=!1,Be=t)}}else{if(wu(t))throw Error(S(418));t.flags=t.flags&-4097|2,J=!1,Be=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function qs(t){if(t!==Be)return!1;if(!J)return qh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gu(t.type,t.memoizedProps)),e&&(e=Ve)){if(wu(t))throw ng(),Error(S(418));for(;e;)tg(t,e),e=cn(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=Be?cn(t.stateNode.nextSibling):null;return!0}function ng(){for(var t=Ve;t;)t=cn(t.nextSibling)}function br(){Ve=Be=null,J=!1}function bc(t){ot===null?ot=[t]:ot.push(t)}var yE=Vt.ReactCurrentBatchConfig;function _i(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Qs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function rg(t){function e(g,f){if(t){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=pn(g,f),g.index=0,g.sibling=null,g}function s(g,f,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,f,m,w){return f===null||f.tag!==6?(f=Na(m,g.mode,w),f.return=g,f):(f=i(f,m),f.return=g,f)}function a(g,f,m,w){var T=m.type;return T===ar?d(g,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&Qh(T)===f.type)?(w=i(f,m.props),w.ref=_i(g,f,m),w.return=g,w):(w=mo(m.type,m.key,m.props,null,g.mode,w),w.ref=_i(g,f,m),w.return=g,w)}function u(g,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ra(m,g.mode,w),f.return=g,f):(f=i(f,m.children||[]),f.return=g,f)}function d(g,f,m,w,T){return f===null||f.tag!==7?(f=Wn(m,g.mode,w,T),f.return=g,f):(f=i(f,m),f.return=g,f)}function c(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Na(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case js:return m=mo(f.type,f.key,f.props,null,g.mode,m),m.ref=_i(g,null,f),m.return=g,m;case lr:return f=Ra(f,g.mode,m),f.return=g,f;case qt:var w=f._init;return c(g,w(f._payload),m)}if(Ti(f)||hi(f))return f=Wn(f,g.mode,m,null),f.return=g,f;Qs(g,f)}return null}function h(g,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(g,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case js:return m.key===T?a(g,f,m,w):null;case lr:return m.key===T?u(g,f,m,w):null;case qt:return T=m._init,h(g,f,T(m._payload),w)}if(Ti(m)||hi(m))return T!==null?null:d(g,f,m,w,null);Qs(g,m)}return null}function _(g,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(f,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return g=g.get(w.key===null?m:w.key)||null,a(f,g,w,T);case lr:return g=g.get(w.key===null?m:w.key)||null,u(f,g,w,T);case qt:var N=w._init;return _(g,f,m,N(w._payload),T)}if(Ti(w)||hi(w))return g=g.get(m)||null,d(f,g,w,T,null);Qs(f,w)}return null}function v(g,f,m,w){for(var T=null,N=null,k=f,R=f=0,W=null;k!==null&&R<m.length;R++){k.index>R?(W=k,k=null):W=k.sibling;var D=h(g,k,m[R],w);if(D===null){k===null&&(k=W);break}t&&k&&D.alternate===null&&e(g,k),f=s(D,f,R),N===null?T=D:N.sibling=D,N=D,k=W}if(R===m.length)return n(g,k),J&&On(g,R),T;if(k===null){for(;R<m.length;R++)k=c(g,m[R],w),k!==null&&(f=s(k,f,R),N===null?T=k:N.sibling=k,N=k);return J&&On(g,R),T}for(k=r(g,k);R<m.length;R++)W=_(k,g,R,m[R],w),W!==null&&(t&&W.alternate!==null&&k.delete(W.key===null?R:W.key),f=s(W,f,R),N===null?T=W:N.sibling=W,N=W);return t&&k.forEach(function(Ne){return e(g,Ne)}),J&&On(g,R),T}function y(g,f,m,w){var T=hi(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var N=T=null,k=f,R=f=0,W=null,D=m.next();k!==null&&!D.done;R++,D=m.next()){k.index>R?(W=k,k=null):W=k.sibling;var Ne=h(g,k,D.value,w);if(Ne===null){k===null&&(k=W);break}t&&k&&Ne.alternate===null&&e(g,k),f=s(Ne,f,R),N===null?T=Ne:N.sibling=Ne,N=Ne,k=W}if(D.done)return n(g,k),J&&On(g,R),T;if(k===null){for(;!D.done;R++,D=m.next())D=c(g,D.value,w),D!==null&&(f=s(D,f,R),N===null?T=D:N.sibling=D,N=D);return J&&On(g,R),T}for(k=r(g,k);!D.done;R++,D=m.next())D=_(k,g,R,D.value,w),D!==null&&(t&&D.alternate!==null&&k.delete(D.key===null?R:D.key),f=s(D,f,R),N===null?T=D:N.sibling=D,N=D);return t&&k.forEach(function(ci){return e(g,ci)}),J&&On(g,R),T}function C(g,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case js:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===ar){if(N.tag===7){n(g,N.sibling),f=i(N,m.props.children),f.return=g,g=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&Qh(T)===N.type){n(g,N.sibling),f=i(N,m.props),f.ref=_i(g,N,m),f.return=g,g=f;break e}n(g,N);break}else e(g,N);N=N.sibling}m.type===ar?(f=Wn(m.props.children,g.mode,w,m.key),f.return=g,g=f):(w=mo(m.type,m.key,m.props,null,g.mode,w),w.ref=_i(g,f,m),w.return=g,g=w)}return o(g);case lr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=i(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Ra(m,g.mode,w),f.return=g,g=f}return o(g);case qt:return N=m._init,C(g,f,N(m._payload),w)}if(Ti(m))return v(g,f,m,w);if(hi(m))return y(g,f,m,w);Qs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,m),f.return=g,g=f):(n(g,f),f=Na(m,g.mode,w),f.return=g,g=f),o(g)):n(g,f)}return C}var Fr=rg(!0),ig=rg(!1),Lo=Tn(null),Mo=null,gr=null,Fc=null;function jc(){Fc=gr=Mo=null}function Uc(t){var e=Lo.current;Y(Lo),t._currentValue=e}function Cu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Tr(t,e){Mo=t,Fc=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(Fc!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(Mo===null)throw Error(S(308));gr=t,Mo.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var Fn=null;function zc(t){Fn===null?Fn=[t]:Fn.push(t)}function sg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ft(t,r)}function Ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ft(t,n)}return i=r.interleaved,i===null?(e.next=e,zc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ft(t,n)}function ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}function Yh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bo(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=te({},c,h);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hn|=o,t.lanes=o,t.memoizedState=c}}function Jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Is={},wt=Tn(Is),ns=Tn(Is),rs=Tn(Is);function jn(t){if(t===Is)throw Error(S(174));return t}function Vc(t,e){switch(q(rs,e),q(ns,t),q(wt,Is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nu(e,t)}Y(wt),q(wt,e)}function jr(){Y(wt),Y(ns),Y(rs)}function lg(t){jn(rs.current);var e=jn(wt.current),n=nu(e,t.type);e!==n&&(q(ns,t),q(wt,n))}function Bc(t){ns.current===t&&(Y(wt),Y(ns))}var X=Tn(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ea=[];function $c(){for(var t=0;t<Ea.length;t++)Ea[t]._workInProgressVersionPrimary=null;Ea.length=0}var uo=Vt.ReactCurrentDispatcher,Ca=Vt.ReactCurrentBatchConfig,$n=0,Z=null,ae=null,he=null,jo=!1,Mi=!1,is=0,wE=0;function Ce(){throw Error(S(321))}function Hc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function Gc(t,e,n,r,i,s){if($n=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uo.current=t===null||t.memoizedState===null?IE:TE,t=n(r,i),Mi){s=0;do{if(Mi=!1,is=0,25<=s)throw Error(S(301));s+=1,he=ae=null,e.updateQueue=null,uo.current=kE,t=n(r,i)}while(Mi)}if(uo.current=Uo,e=ae!==null&&ae.next!==null,$n=0,he=ae=Z=null,jo=!1,e)throw Error(S(300));return t}function Kc(){var t=is!==0;return is=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function tt(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,ae=t;else{if(t===null)throw Error(S(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function ss(t,e){return typeof e=="function"?e(t):e}function Sa(t){var e=tt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,Hn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ht(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Hn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ia(t){var e=tt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ag(){}function ug(t,e){var n=Z,r=tt(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,qc(hg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,os(9,dg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(S(349));$n&30||cg(n,e,i)}return i}function cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dg(t,e,n,r){e.value=n,e.getSnapshot=r,fg(e)&&pg(t)}function hg(t,e,n){return n(function(){fg(e)&&pg(t)})}function fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function pg(t){var e=Ft(t,1);e!==null&&ct(e,t,1,-1)}function Xh(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},e.queue=t,t=t.dispatch=SE.bind(null,Z,t),[e.memoizedState,t]}function os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mg(){return tt().memoizedState}function co(t,e,n,r){var i=gt();Z.flags|=t,i.memoizedState=os(1|e,n,void 0,r===void 0?null:r)}function Tl(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Hc(r,o.deps)){i.memoizedState=os(e,n,s,r);return}}Z.flags|=t,i.memoizedState=os(1|e,n,s,r)}function Zh(t,e){return co(8390656,8,t,e)}function qc(t,e){return Tl(2048,8,t,e)}function gg(t,e){return Tl(4,2,t,e)}function _g(t,e){return Tl(4,4,t,e)}function vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yg(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,vg.bind(null,e,t),n)}function Qc(){}function wg(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Eg(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cg(t,e,n){return $n&21?(ht(n,e)||(n=Nm(),Z.lanes|=n,Hn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function EE(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Ca.transition;Ca.transition={};try{t(!1),e()}finally{B=n,Ca.transition=r}}function Sg(){return tt().memoizedState}function CE(t,e,n){var r=fn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(t))Tg(e,n);else if(n=sg(t,e,n,r),n!==null){var i=xe();ct(n,t,r,i),kg(n,e,r)}}function SE(t,e,n){var r=fn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(t))Tg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=e.interleaved;a===null?(i.next=i,zc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=sg(t,e,i,r),n!==null&&(i=xe(),ct(n,t,r,i),kg(n,e,r))}}function Ig(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Tg(t,e){Mi=jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}var Uo={readContext:et,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},IE={readContext:et,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,co(4194308,4,vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return co(4194308,4,t,e)},useInsertionEffect:function(t,e){return co(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=CE.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Xh,useDebugValue:Qc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Xh(!1),e=t[0];return t=EE.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=gt();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ge===null)throw Error(S(349));$n&30||cg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zh(hg.bind(null,r,s,t),[t]),r.flags|=2048,os(9,dg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ge.identifierPrefix;if(J){var n=Nt,r=kt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TE={readContext:et,useCallback:wg,useContext:et,useEffect:qc,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Eg,useReducer:Sa,useRef:mg,useState:function(){return Sa(ss)},useDebugValue:Qc,useDeferredValue:function(t){var e=tt();return Cg(e,ae.memoizedState,t)},useTransition:function(){var t=Sa(ss)[0],e=tt().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:ug,useId:Sg,unstable_isNewReconciler:!1},kE={readContext:et,useCallback:wg,useContext:et,useEffect:qc,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Eg,useReducer:Ia,useRef:mg,useState:function(){return Ia(ss)},useDebugValue:Qc,useDeferredValue:function(t){var e=tt();return ae===null?e.memoizedState=t:Cg(e,ae.memoizedState,t)},useTransition:function(){var t=Ia(ss)[0],e=tt().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:ug,useId:Sg,unstable_isNewReconciler:!1};function it(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Su(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=fn(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=dn(t,s,i),e!==null&&(ct(e,t,i,r),ao(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=fn(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dn(t,s,i),e!==null&&(ct(e,t,i,r),ao(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=fn(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=dn(t,i,r),e!==null&&(ct(e,t,r,n),ao(e,t,r))}};function ef(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,s):!0}function Ng(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=Ue(e)?Vn:Te.current,r=e.contextTypes,s=(r=r!=null)?Mr(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=Ue(e)?Vn:Te.current,i.context=Mr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Su(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ur(t,e){try{var n="",r=e;do n+=ew(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ta(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Rg(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,Mu=r),Tu(t,e)},n}function xg(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Tu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tu(t,e),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WE.bind(null,t,e,n),e.then(t,t))}function rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,dn(n,e,1))),n.lanes|=1),t)}var RE=Vt.ReactCurrentOwner,Me=!1;function Re(t,e,n,r){e.child=t===null?ig(e,null,n,r):Fr(e,t.child,n,r)}function of(t,e,n,r,i){n=n.render;var s=e.ref;return Tr(e,i),r=Gc(t,e,n,r,s,i),n=Kc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&n&&Lc(e),e.flags|=1,Re(t,e,r,i),e.child)}function lf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pg(t,e,s,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Pg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,jt(t,e,i)}return ku(t,e,n,r,i)}function Ag(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(vr,We),We|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(vr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(vr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(vr,We),We|=r;return Re(t,e,i,n),e.child}function Og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ku(t,e,n,r,i){var s=Ue(n)?Vn:Te.current;return s=Mr(e,s),Tr(e,i),n=Gc(t,e,n,r,s,i),r=Kc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&r&&Lc(e),e.flags|=1,Re(t,e,n,i),e.child)}function af(t,e,n,r,i){if(Ue(n)){var s=!0;Ao(e)}else s=!1;if(Tr(e,i),e.stateNode===null)ho(t,e),Ng(e,n,r),Iu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=Ue(n)?Vn:Te.current,u=Mr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&tf(e,o,r,u),Qt=!1;var h=e.memoizedState;o.state=h,bo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||je.current||Qt?(typeof d=="function"&&(Su(e,n,d,r),a=e.memoizedState),(l=Qt||ef(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,og(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:it(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=et(a):(a=Ue(n)?Vn:Te.current,a=Mr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&tf(e,o,r,a),Qt=!1,h=e.memoizedState,o.state=h,bo(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||je.current||Qt?(typeof _=="function"&&(Su(e,n,_,r),v=e.memoizedState),(u=Qt||ef(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Nu(t,e,n,r,s,i)}function Nu(t,e,n,r,i,s){Og(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gh(e,n,!1),jt(t,e,s);r=e.stateNode,RE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fr(e,t.child,null,s),e.child=Fr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Gh(e,n,!0),e.child}function Dg(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),Vc(t,e.containerInfo)}function uf(t,e,n,r,i){return br(),bc(i),e.flags|=256,Re(t,e,n,r),e.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(X,i&1),t===null)return Eu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,r,0,null),t=Wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xu(n),e.memoizedState=Ru,t):Yc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=pn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=pn(l,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ru,r}return s=t.child,t=s.sibling,r=pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yc(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&bc(r),Fr(e,t.child,null,n),t=Yc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ta(Error(S(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xl({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fr(e,t.child,null,o),e.child.memoizedState=xu(o),e.memoizedState=Ru,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=Ta(s,r,void 0),Ys(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(t,i),ct(r,t,i,-1))}return nd(),r=Ta(Error(S(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=cn(i.nextSibling),Be=e,J=!0,ot=null,t!==null&&(Qe[Ye++]=kt,Qe[Ye++]=Nt,Qe[Ye++]=Bn,kt=t.id,Nt=t.overflow,Bn=e),e=Yc(e,r.children),e.flags|=4096,e)}function cf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cu(t.return,e,n)}function ka(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cf(t,n,e);else if(t.tag===19)cf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ka(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ka(e,!0,n,null,s);break;case"together":ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PE(t,e,n){switch(e.tag){case 3:Dg(e),br();break;case 5:lg(e);break;case 1:Ue(e.type)&&Ao(e);break;case 4:Vc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Lg(t,e,n):(q(X,X.current&1),t=jt(t,e,n),t!==null?t.sibling:null);q(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return jt(t,e,n)}var bg,Pu,Fg,jg;bg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Fg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(wt.current);var s=null;switch(n){case"input":i=Xa(t,i),r=Xa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=tu(t,i),r=tu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xo)}ru(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};jg=function(t,e,n,r){n!==r&&(e.flags|=4)};function vi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AE(t,e,n){var r=e.pendingProps;switch(Mc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Ue(e.type)&&Po(),Se(e),null;case 3:return r=e.stateNode,jr(),Y(je),Y(Te),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(ju(ot),ot=null))),Pu(t,e),Se(e),null;case 5:Bc(e);var i=jn(rs.current);if(n=e.type,t!==null&&e.stateNode!=null)Fg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Se(e),null}if(t=jn(wt.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[ts]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":vh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":wh(r,s),Q("invalid",r)}ru(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",""+l]):Hi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Us(r),yh(r,s,!0);break;case"textarea":Us(r),Eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[ts]=r,bg(t,e,!1,!1),e.stateNode=t;e:{switch(o=iu(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":vh(t,r),i=Xa(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Q("invalid",t);break;case"textarea":wh(t,r),i=tu(t,r),Q("invalid",t);break;default:i=r}ru(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?mm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gi(t,a):typeof a=="number"&&Gi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&wc(t,s,a,o))}switch(n){case"input":Us(t),yh(t,r,!1);break;case"textarea":Us(t),Eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Er(t,!!r.multiple,s,!1):r.defaultValue!=null&&Er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)jg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=jn(rs.current),jn(wt.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Se(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ve!==null&&e.mode&1&&!(e.flags&128))ng(),br(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[_t]=e}else br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else ot!==null&&(ju(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):nd())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return jr(),Pu(t,e),t===null&&Zi(e.stateNode.containerInfo),Se(e),null;case 10:return Uc(e.type._context),Se(e),null;case 17:return Ue(e.type)&&Po(),Se(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vi(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fo(t),o!==null){for(e.flags|=128,vi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>zr&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Se(e),null}else 2*oe()-s.renderingStartTime>zr&&n!==1073741824&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=X.current,q(X,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return td(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function OE(t,e){switch(Mc(e),e.tag){case 1:return Ue(e.type)&&Po(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jr(),Y(je),Y(Te),$c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return jr(),null;case 10:return Uc(e.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var Js=!1,Ie=!1,DE=typeof WeakSet=="function"?WeakSet:Set,x=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Au(t,e,n){try{n()}catch(r){ne(t,e,r)}}var df=!1;function LE(t,e){if(pu=ko,t=Bm(),Dc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:t,selectionRange:n},ko=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,C=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:it(e.type,y),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=df,df=!1,v}function bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Au(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[ts],delete e[vu],delete e[gE],delete e[_E])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zg(t){return t.tag===5||t.tag===3||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xo));else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}function Lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}var _e=null,st=!1;function Gt(t,e,n){for(n=n.child;n!==null;)Wg(t,e,n),n=n.sibling}function Wg(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Ie||_r(n,e);case 6:var r=_e,i=st;_e=null,Gt(t,e,n),_e=r,st=i,_e!==null&&(st?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(st?(t=_e,n=n.stateNode,t.nodeType===8?ya(t.parentNode,n):t.nodeType===1&&ya(t,n),Yi(t)):ya(_e,n.stateNode));break;case 4:r=_e,i=st,_e=n.stateNode.containerInfo,st=!0,Gt(t,e,n),_e=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Au(n,e,o),i=i.next}while(i!==r)}Gt(t,e,n);break;case 1:if(!Ie&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Gt(t,e,n);break;case 21:Gt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Gt(t,e,n),Ie=r):Gt(t,e,n);break;default:Gt(t,e,n)}}function ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DE),e.forEach(function(r){var i=BE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,st=!1;break e;case 3:_e=l.stateNode.containerInfo,st=!0;break e;case 4:_e=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(_e===null)throw Error(S(160));Wg(s,o,i),_e=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vg(e,t),e=e.sibling}function Vg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nt(e,t),mt(t),r&4){try{bi(3,t,t.return),Nl(3,t)}catch(y){ne(t,t.return,y)}try{bi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:nt(e,t),mt(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(nt(e,t),mt(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{Gi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cm(i,s),iu(l,o);var u=iu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?mm(i,c):d==="dangerouslySetInnerHTML"?fm(i,c):d==="children"?Gi(i,c):wc(i,d,c,u)}switch(l){case"input":Za(i,s);break;case"textarea":dm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Er(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Er(i,!!s.multiple,s.defaultValue,!0):Er(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(nt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(nt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:nt(e,t),mt(t);break;case 13:nt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zc=oe())),r&4&&ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,nt(e,t),Ie=u):nt(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(c=x=d;x!==null;){switch(h=x,_=h.child,h.tag){case 0:case 11:case 14:case 15:bi(4,h,h.return);break;case 1:_r(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:_r(h,h.return);break;case 22:if(h.memoizedState!==null){mf(c);continue}}_!==null?(_.return=h,x=_):mf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pm("display",o))}catch(y){ne(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ne(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:nt(e,t),mt(t),r&4&&ff(t);break;case 21:break;default:nt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var s=hf(t);Lu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hf(t);Du(t,l,o);break;default:throw Error(S(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ME(t,e,n){x=t,Bg(t)}function Bg(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Js;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Js;var u=Ie;if(Js=o,(Ie=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?gf(i):a!==null?(a.return=o,x=a):gf(i);for(;s!==null;)x=s,Bg(s),s=s.sibling;x=i,Js=l,Ie=u}pf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):pf(t)}}function pf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Yi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||e.flags&512&&Ou(e)}catch(h){ne(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function mf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function gf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Ou(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Ou(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var bE=Math.ceil,zo=Vt.ReactCurrentDispatcher,Jc=Vt.ReactCurrentOwner,Ze=Vt.ReactCurrentBatchConfig,z=0,ge=null,le=null,ye=0,We=0,vr=Tn(0),ue=0,ls=null,Hn=0,Rl=0,Xc=0,Fi=null,Le=null,Zc=0,zr=1/0,It=null,Wo=!1,Mu=null,hn=null,Xs=!1,rn=null,Vo=0,ji=0,bu=null,fo=-1,po=0;function xe(){return z&6?oe():fo!==-1?fo:fo=oe()}function fn(t){return t.mode&1?z&2&&ye!==0?ye&-ye:yE.transition!==null?(po===0&&(po=Nm()),po):(t=B,t!==0||(t=window.event,t=t===void 0?16:Lm(t.type)),t):1}function ct(t,e,n,r){if(50<ji)throw ji=0,bu=null,Error(S(185));Es(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Rl|=n),ue===4&&Jt(t,ye)),ze(t,r),n===1&&z===0&&!(e.mode&1)&&(zr=oe()+500,Il&&kn()))}function ze(t,e){var n=t.callbackNode;yw(t,e);var r=To(t,t===ge?ye:0);if(r===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?vE(_f.bind(null,t)):Zm(_f.bind(null,t)),pE(function(){!(z&6)&&kn()}),n=null;else{switch(Rm(r)){case 1:n=Tc;break;case 4:n=Tm;break;case 16:n=Io;break;case 536870912:n=km;break;default:n=Io}n=Jg(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(fo=-1,po=0,z&6)throw Error(S(327));var n=t.callbackNode;if(kr()&&t.callbackNode!==n)return null;var r=To(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bo(t,r);else{e=r;var i=z;z|=2;var s=Gg();(ge!==t||ye!==e)&&(It=null,zr=oe()+500,zn(t,e));do try{UE();break}catch(l){Hg(t,l)}while(!0);jc(),zo.current=s,z=i,le!==null?e=0:(ge=null,ye=0,e=ue)}if(e!==0){if(e===2&&(i=uu(t),i!==0&&(r=i,e=Fu(t,i))),e===1)throw n=ls,zn(t,0),Jt(t,r),ze(t,oe()),n;if(e===6)Jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!FE(i)&&(e=Bo(t,r),e===2&&(s=uu(t),s!==0&&(r=s,e=Fu(t,s))),e===1))throw n=ls,zn(t,0),Jt(t,r),ze(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Dn(t,Le,It);break;case 3:if(Jt(t,r),(r&130023424)===r&&(e=Zc+500-oe(),10<e)){if(To(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_u(Dn.bind(null,t,Le,It),e);break}Dn(t,Le,It);break;case 4:if(Jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bE(r/1960))-r,10<r){t.timeoutHandle=_u(Dn.bind(null,t,Le,It),r);break}Dn(t,Le,It);break;case 5:Dn(t,Le,It);break;default:throw Error(S(329))}}}return ze(t,oe()),t.callbackNode===n?$g.bind(null,t):null}function Fu(t,e){var n=Fi;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Bo(t,e),t!==2&&(e=Le,Le=n,e!==null&&ju(e)),t}function ju(t){Le===null?Le=t:Le.push.apply(Le,t)}function FE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jt(t,e){for(e&=~Xc,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function _f(t){if(z&6)throw Error(S(327));kr();var e=To(t,0);if(!(e&1))return ze(t,oe()),null;var n=Bo(t,e);if(t.tag!==0&&n===2){var r=uu(t);r!==0&&(e=r,n=Fu(t,r))}if(n===1)throw n=ls,zn(t,0),Jt(t,e),ze(t,oe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,Le,It),ze(t,oe()),null}function ed(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(zr=oe()+500,Il&&kn())}}function Gn(t){rn!==null&&rn.tag===0&&!(z&6)&&kr();var e=z;z|=1;var n=Ze.transition,r=B;try{if(Ze.transition=null,B=1,t)return t()}finally{B=r,Ze.transition=n,z=e,!(z&6)&&kn()}}function td(){We=vr.current,Y(vr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fE(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:jr(),Y(je),Y(Te),$c();break;case 5:Bc(r);break;case 4:jr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Uc(r.type._context);break;case 22:case 23:td()}n=n.return}if(ge=t,le=t=pn(t.current,null),ye=We=e,ue=0,ls=null,Xc=Rl=Hn=0,Le=Fi=null,Fn!==null){for(e=0;e<Fn.length;e++)if(n=Fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fn=null}return t}function Hg(t,e){do{var n=le;try{if(jc(),uo.current=Uo,jo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if($n=0,he=ae=Z=null,Mi=!1,is=0,Jc.current=null,n===null||n.return===null){ue=1,ls=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=rf(o);if(_!==null){_.flags&=-257,sf(_,o,l,s,e),_.mode&1&&nf(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){nf(s,u,e),nd();break e}a=Error(S(426))}}else if(J&&l.mode&1){var C=rf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),sf(C,o,l,s,e),bc(Ur(a,l));break e}}s=a=Ur(a,l),ue!==4&&(ue=2),Fi===null?Fi=[s]:Fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Rg(s,a,e);Yh(s,g);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=xg(s,l,e);Yh(s,w);break e}}s=s.return}while(s!==null)}qg(n)}catch(T){e=T,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Gg(){var t=zo.current;return zo.current=Uo,t===null?Uo:t}function nd(){(ue===0||ue===3||ue===2)&&(ue=4),ge===null||!(Hn&268435455)&&!(Rl&268435455)||Jt(ge,ye)}function Bo(t,e){var n=z;z|=2;var r=Gg();(ge!==t||ye!==e)&&(It=null,zn(t,e));do try{jE();break}catch(i){Hg(t,i)}while(!0);if(jc(),z=n,zo.current=r,le!==null)throw Error(S(261));return ge=null,ye=0,ue}function jE(){for(;le!==null;)Kg(le)}function UE(){for(;le!==null&&!cw();)Kg(le)}function Kg(t){var e=Yg(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?qg(t):le=e,Jc.current=null}function qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OE(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,le=null;return}}else if(n=AE(n,e,We),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ue===0&&(ue=5)}function Dn(t,e,n){var r=B,i=Ze.transition;try{Ze.transition=null,B=1,zE(t,e,n,r)}finally{Ze.transition=i,B=r}return null}function zE(t,e,n,r){do kr();while(rn!==null);if(z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ww(t,s),t===ge&&(le=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Jg(Io,function(){return kr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ze.transition,Ze.transition=null;var o=B;B=1;var l=z;z|=4,Jc.current=null,LE(t,n),Vg(n,t),oE(mu),ko=!!pu,mu=pu=null,t.current=n,ME(n),dw(),z=l,B=o,Ze.transition=s}else t.current=n;if(Xs&&(Xs=!1,rn=t,Vo=i),s=t.pendingLanes,s===0&&(hn=null),pw(n.stateNode),ze(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=Mu,Mu=null,t;return Vo&1&&t.tag!==0&&kr(),s=t.pendingLanes,s&1?t===bu?ji++:(ji=0,bu=t):ji=0,kn(),null}function kr(){if(rn!==null){var t=Rm(Vo),e=Ze.transition,n=B;try{if(Ze.transition=null,B=16>t?16:t,rn===null)var r=!1;else{if(t=rn,rn=null,Vo=0,z&6)throw Error(S(331));var i=z;for(z|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:bi(8,d,s)}var c=d.child;if(c!==null)c.return=d,x=c;else for(;x!==null;){d=x;var h=d.sibling,_=d.return;if(Ug(d),d===u){x=null;break}if(h!==null){h.return=_,x=h;break}x=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=f;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(T){ne(l,l.return,T)}if(l===o){x=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,x=w;break e}x=l.return}}if(z=i,kn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(yl,t)}catch{}r=!0}return r}finally{B=n,Ze.transition=e}}return!1}function vf(t,e,n){e=Ur(n,e),e=Rg(t,e,1),t=dn(t,e,1),e=xe(),t!==null&&(Es(t,1,e),ze(t,e))}function ne(t,e,n){if(t.tag===3)vf(t,t,n);else for(;e!==null;){if(e.tag===3){vf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=Ur(n,t),t=xg(e,t,1),e=dn(e,t,1),t=xe(),e!==null&&(Es(e,1,t),ze(e,t));break}}e=e.return}}function WE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>oe()-Zc?zn(t,0):Xc|=n),ze(t,e)}function Qg(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=xe();t=Ft(t,e),t!==null&&(Es(t,e,n),ze(t,n))}function VE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qg(t,n)}function BE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Qg(t,n)}var Yg;Yg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,PE(t,e,n);Me=!!(t.flags&131072)}else Me=!1,J&&e.flags&1048576&&eg(e,Do,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=Mr(e,Te.current);Tr(e,n),i=Gc(null,e,r,t,i,n);var s=Kc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,Ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wc(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,Iu(e,r,t,n),e=Nu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Lc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HE(r),t=it(r,t),i){case 0:e=ku(null,e,r,t,n);break e;case 1:e=af(null,e,r,t,n);break e;case 11:e=of(null,e,r,t,n);break e;case 14:e=lf(null,e,r,it(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),af(t,e,r,i,n);case 3:e:{if(Dg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,og(t,e),bo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ur(Error(S(423)),e),e=uf(t,e,r,n,i);break e}else if(r!==i){i=Ur(Error(S(424)),e),e=uf(t,e,r,n,i);break e}else for(Ve=cn(e.stateNode.containerInfo.firstChild),Be=e,J=!0,ot=null,n=ig(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){e=jt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return lg(e),t===null&&Eu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gu(r,i)?o=null:s!==null&&gu(r,s)&&(e.flags|=32),Og(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Eu(e),null;case 13:return Lg(t,e,n);case 4:return Vc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),of(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(Lo,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!je.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Cu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Tr(e,n),i=et(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),lf(t,e,r,i,n);case 15:return Pg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),ho(t,e),e.tag=1,Ue(r)?(t=!0,Ao(e)):t=!1,Tr(e,n),Ng(e,r,i),Iu(e,r,i,n),Nu(null,e,r,!0,t,n);case 19:return Mg(t,e,n);case 22:return Ag(t,e,n)}throw Error(S(156,e.tag))};function Jg(t,e){return Im(t,e)}function $E(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new $E(t,e,n,r)}function rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HE(t){if(typeof t=="function")return rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cc)return 11;if(t===Sc)return 14}return 2}function pn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ar:return Wn(n.children,i,s,e);case Ec:o=8,i|=8;break;case qa:return t=Je(12,n,e,i|2),t.elementType=qa,t.lanes=s,t;case Qa:return t=Je(13,n,e,i),t.elementType=Qa,t.lanes=s,t;case Ya:return t=Je(19,n,e,i),t.elementType=Ya,t.lanes=s,t;case lm:return xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sm:o=10;break e;case om:o=9;break e;case Cc:o=11;break e;case Sc:o=14;break e;case qt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wn(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function xl(t,e,n,r){return t=Je(22,t,r,e),t.elementType=lm,t.lanes=n,t.stateNode={isHidden:!1},t}function Na(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Ra(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function id(t,e,n,r,i,s,o,l,a){return t=new GE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(s),t}function KE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xg(t){if(!t)return En;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Xm(t,n,e)}return e}function Zg(t,e,n,r,i,s,o,l,a){return t=id(n,r,!0,t,i,s,o,l,a),t.context=Xg(null),n=t.current,r=xe(),i=fn(n),s=Ot(r,i),s.callback=e??null,dn(n,s,i),t.current.lanes=i,Es(t,i,r),ze(t,r),t}function Pl(t,e,n,r){var i=e.current,s=xe(),o=fn(i);return n=Xg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dn(i,e,o),t!==null&&(ct(t,i,o,s),ao(t,i,o)),o}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sd(t,e){yf(t,e),(t=t.alternate)&&yf(t,e)}function qE(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function od(t){this._internalRoot=t}Al.prototype.render=od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Pl(t,e,null,null)};Al.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gn(function(){Pl(null,t,null,null)}),e[bt]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&Dm(t)}};function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wf(){}function QE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$o(o);s.call(u)}}var o=Zg(e,r,t,0,null,!1,!1,"",wf);return t._reactRootContainer=o,t[bt]=o.current,Zi(t.nodeType===8?t.parentNode:t),Gn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$o(a);l.call(u)}}var a=id(t,0,!1,null,null,!1,!1,"",wf);return t._reactRootContainer=a,t[bt]=a.current,Zi(t.nodeType===8?t.parentNode:t),Gn(function(){Pl(e,a,n,r)}),a}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=$o(o);l.call(a)}}Pl(e,o,t,i)}else o=QE(n,e,t,i,r);return $o(o)}xm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ki(e.pendingLanes);n!==0&&(kc(e,n|1),ze(e,oe()),!(z&6)&&(zr=oe()+500,kn()))}break;case 13:Gn(function(){var r=Ft(t,1);if(r!==null){var i=xe();ct(r,t,1,i)}}),sd(t,1)}};Nc=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var n=xe();ct(e,t,134217728,n)}sd(t,134217728)}};Pm=function(t){if(t.tag===13){var e=fn(t),n=Ft(t,e);if(n!==null){var r=xe();ct(n,t,e,r)}sd(t,e)}};Am=function(){return B};Om=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};ou=function(t,e,n){switch(e){case"input":if(Za(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(S(90));um(r),Za(r,i)}}}break;case"textarea":dm(t,n);break;case"select":e=n.value,e!=null&&Er(t,!!n.multiple,e,!1)}};vm=ed;ym=Gn;var YE={usingClientEntryPoint:!1,Events:[Ss,hr,Sl,gm,_m,ed]},yi={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cm(t),t===null?null:t.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||qE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{yl=Zs.inject(JE),yt=Zs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(e))throw Error(S(200));return KE(t,e,null,n)};Ke.createRoot=function(t,e){if(!ld(t))throw Error(S(299));var n=!1,r="",i=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=id(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Zi(t.nodeType===8?t.parentNode:t),new od(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Cm(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Gn(t)};Ke.hydrate=function(t,e,n){if(!Ol(e))throw Error(S(200));return Dl(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!ld(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=e_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zg(e,null,t,1,n??null,i,!1,s,o),t[bt]=e.current,Zi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Al(e)};Ke.render=function(t,e,n){if(!Ol(e))throw Error(S(200));return Dl(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(S(40));return t._reactRootContainer?(Gn(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};Ke.unstable_batchedUpdates=ed;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Dl(t,e,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),tm.exports=Ke;var XE=tm.exports,Ef=XE;Ga.createRoot=Ef.createRoot,Ga.hydrateRoot=Ef.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},as.apply(null,arguments)}var sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sn||(sn={}));const Cf="popstate";function ZE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Uu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ho(i)}return t0(e,n,null,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function n_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function e0(){return Math.random().toString(36).substr(2,8)}function Sf(t,e){return{usr:t.state,key:t.key,idx:e}}function Uu(t,e,n,r){return n===void 0&&(n=null),as({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zr(e):e,{state:n,key:e&&e.key||r||e0()})}function Ho(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function t0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(as({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=sn.Pop;let C=d(),g=C==null?null:C-u;u=C,a&&a({action:l,location:y.location,delta:g})}function h(C,g){l=sn.Push;let f=Uu(y.location,C,g);u=d()+1;let m=Sf(f,u),w=y.createHref(f);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(C,g){l=sn.Replace;let f=Uu(y.location,C,g);u=d();let m=Sf(f,u),w=y.createHref(f);o.replaceState(m,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:Ho(C);return f=f.replace(/ $/,"%20"),ee(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return l},get location(){return t(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Cf,c),a=C,()=>{i.removeEventListener(Cf,c),a=null}},createHref(C){return e(i,C)},createURL:v,encodeLocation(C){let g=v(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:_,go(C){return o.go(C)}};return y}var If;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(If||(If={}));function n0(t,e,n){return n===void 0&&(n="/"),r0(t,e,n)}function r0(t,e,n,r){let i=typeof e=="string"?Zr(e):e,s=Wr(i.pathname||"/",n);if(s==null)return null;let o=r_(t);i0(o);let l=null,a=m0(s);for(let u=0;l==null&&u<o.length;++u)l=f0(o[u],a);return l}function r_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ee(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=mn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:d0(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of i_(s.path))i(s,o,a)}),e}function i_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function i0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:h0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s0=/^:[\w-]+$/,o0=3,l0=2,a0=1,u0=10,c0=-2,Tf=t=>t==="*";function d0(t,e){let n=t.split("/"),r=n.length;return n.some(Tf)&&(r+=c0),e&&(r+=l0),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(s0.test(s)?o0:s===""?a0:u0),r)}function h0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function f0(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=zu({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:mn([s,c.pathname]),pathnameBase:v0(mn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=mn([s,c.pathnameBase]))}return o}function zu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=p0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:_}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[c];return _&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function p0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),n_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function m0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return n_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function g0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zr(t):t,s;return n?(n=s_(n),n.startsWith("/")?s=kf(n.substring(1),"/"):s=kf(n,e)):s=e,{pathname:s,search:y0(r),hash:w0(i)}}function kf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ad(t,e){let n=_0(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ud(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zr(t):(i=as({},t),ee(!i.pathname||!i.pathname.includes("?"),xa("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),xa("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),xa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=g0(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const s_=t=>t.replace(/\/\/+/g,"/"),mn=t=>s_(t.join("/")),v0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),y0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function E0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o_=["post","put","patch","delete"];new Set(o_);const C0=["get",...o_];new Set(C0);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},us.apply(null,arguments)}const Ll=E.createContext(null),l_=E.createContext(null),Bt=E.createContext(null),Ml=E.createContext(null),$t=E.createContext({outlet:null,matches:[],isDataRoute:!1}),a_=E.createContext(null);function S0(t,e){let{relative:n}=e===void 0?{}:e;ei()||ee(!1);let{basename:r,navigator:i}=E.useContext(Bt),{hash:s,pathname:o,search:l}=bl(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:mn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ei(){return E.useContext(Ml)!=null}function ti(){return ei()||ee(!1),E.useContext(Ml).location}function u_(t){E.useContext(Bt).static||E.useLayoutEffect(t)}function cd(){let{isDataRoute:t}=E.useContext($t);return t?j0():I0()}function I0(){ei()||ee(!1);let t=E.useContext(Ll),{basename:e,future:n,navigator:r}=E.useContext(Bt),{matches:i}=E.useContext($t),{pathname:s}=ti(),o=JSON.stringify(ad(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return u_(()=>{l.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=ud(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:mn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const T0=E.createContext(null);function k0(t){let e=E.useContext($t).outlet;return e&&E.createElement(T0.Provider,{value:t},e)}function bl(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Bt),{matches:i}=E.useContext($t),{pathname:s}=ti(),o=JSON.stringify(ad(i,r.v7_relativeSplatPath));return E.useMemo(()=>ud(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function N0(t,e){return R0(t,e)}function R0(t,e,n,r){ei()||ee(!1);let{navigator:i}=E.useContext(Bt),{matches:s}=E.useContext($t),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ti(),d;if(e){var c;let C=typeof e=="string"?Zr(e):e;a==="/"||(c=C.pathname)!=null&&c.startsWith(a)||ee(!1),d=C}else d=u;let h=d.pathname||"/",_=h;if(a!=="/"){let C=a.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=n0(t,{pathname:_}),y=D0(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:mn([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:mn([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&y?E.createElement(Ml.Provider,{value:{location:us({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sn.Pop}},y):y}function x0(){let t=F0(),e=E0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const P0=E.createElement(x0,null);class A0 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement($t.Provider,{value:this.props.routeContext},E.createElement(a_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O0(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Ll);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement($t.Provider,{value:e},r)}function D0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:_}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let _,v=!1,y=null,C=null;n&&(_=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||P0,a&&(u<0&&h===0?(U0("route-fallback"),v=!0,C=null):u===h&&(v=!0,C=c.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),f=()=>{let m;return _?m=y:v?m=C:c.route.Component?m=E.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,E.createElement(O0,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?E.createElement(A0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var c_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(c_||{}),d_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(d_||{});function L0(t){let e=E.useContext(Ll);return e||ee(!1),e}function M0(t){let e=E.useContext(l_);return e||ee(!1),e}function b0(t){let e=E.useContext($t);return e||ee(!1),e}function h_(t){let e=b0(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function F0(){var t;let e=E.useContext(a_),n=M0(),r=h_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function j0(){let{router:t}=L0(c_.UseNavigateStable),e=h_(d_.UseNavigateStable),n=E.useRef(!1);return u_(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,us({fromRouteId:e},s)))},[t,e])}const Nf={};function U0(t,e,n){Nf[t]||(Nf[t]=!0)}function z0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Go(t){let{to:e,replace:n,state:r,relative:i}=t;ei()||ee(!1);let{future:s,static:o}=E.useContext(Bt),{matches:l}=E.useContext($t),{pathname:a}=ti(),u=cd(),d=ud(e,ad(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function dd(t){return k0(t.context)}function rt(t){ee(!1)}function W0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:s,static:o=!1,future:l}=t;ei()&&ee(!1);let a=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:s,static:o,future:us({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Zr(r));let{pathname:d="/",search:c="",hash:h="",state:_=null,key:v="default"}=r,y=E.useMemo(()=>{let C=Wr(d,a);return C==null?null:{location:{pathname:C,search:c,hash:h,state:_,key:v},navigationType:i}},[a,d,c,h,_,v,i]);return y==null?null:E.createElement(Bt.Provider,{value:u},E.createElement(Ml.Provider,{children:n,value:y}))}function V0(t){let{children:e,location:n}=t;return N0(Wu(e),n)}new Promise(()=>{});function Wu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Wu(r.props.children,s));return}r.type!==rt&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(null,arguments)}function f_(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function B0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $0(t,e){return t.button===0&&(!e||e==="_self")&&!B0(t)}const H0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],G0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],K0="6";try{window.__reactRouterVersion=K0}catch{}const q0=E.createContext({isTransitioning:!1}),Q0="startTransition",Rf=Wy[Q0];function Y0(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=ZE({window:i,v5Compat:!0}));let o=s.current,[l,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&Rf?Rf(()=>a(c)):a(c)},[a,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.useEffect(()=>z0(r),[r]),E.createElement(W0,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const J0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hd=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,viewTransition:c}=e,h=f_(e,H0),{basename:_}=E.useContext(Bt),v,y=!1;if(typeof u=="string"&&X0.test(u)&&(v=u,J0))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=Wr(w.pathname,_);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:y=!0}catch{}let C=S0(u,{relative:i}),g=eC(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||g(m)}return E.createElement("a",Ko({},h,{href:v||C,onClick:y||s?r:f,ref:n,target:a}))}),Pa=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,viewTransition:u,children:d}=e,c=f_(e,G0),h=bl(a,{relative:c.relative}),_=ti(),v=E.useContext(l_),{navigator:y,basename:C}=E.useContext(Bt),g=v!=null&&tC(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,m=_.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&C&&(w=Wr(w,C)||w);const T=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let N=m===f||!o&&m.startsWith(f)&&m.charAt(T)==="/",k=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),R={isActive:N,isPending:k,isTransitioning:g},W=N?r:void 0,D;typeof s=="function"?D=s(R):D=[s,N?"active":null,k?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let Ne=typeof l=="function"?l(R):l;return E.createElement(hd,Ko({},c,{"aria-current":W,className:D,ref:n,style:Ne,to:a,viewTransition:u}),typeof d=="function"?d(R):d)});var Vu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vu||(Vu={}));var xf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xf||(xf={}));function Z0(t){let e=E.useContext(Ll);return e||ee(!1),e}function eC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,a=cd(),u=ti(),d=bl(t,{relative:o});return E.useCallback(c=>{if($0(c,n)){c.preventDefault();let h=r!==void 0?r:Ho(u)===Ho(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}function tC(t,e){e===void 0&&(e={});let n=E.useContext(q0);n==null&&ee(!1);let{basename:r}=Z0(Vu.useViewTransitionState),i=bl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Wr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Wr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zu(i.pathname,o)!=null||zu(i.pathname,s)!=null}var Pf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ni(e)},ni=function(t){return new Error("Firebase Database ("+p_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new rC;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g_=function(t){const e=m_(t);return fd.encodeByteArray(e,!0)},qo=function(t){return g_(t).replace(/\./g,"")},Qo=function(t){try{return fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){return __(void 0,t)}function __(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sC(n)||(t[n]=__(t[n],e[n]));return t}function sC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=()=>oC().__FIREBASE_DEFAULTS__,aC=()=>{if(typeof process>"u"||typeof Pf>"u")return;const t=Pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},pd=()=>{try{return lC()||aC()||uC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=pd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cC=t=>{const e=v_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y_=()=>{var t;return(t=pd())===null||t===void 0?void 0:t.config},w_=t=>{var e;return(e=pd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qo(JSON.stringify(n)),qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function hC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pC(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mC(){return p_.NODE_ADMIN===!0}function gC(){try{return typeof indexedDB=="object"}catch{return!1}}function _C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,l,r)}}function yC(t,e){return t.replace(wC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=cs(Qo(s[0])||""),n=cs(Qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},EC=function(t){const e=C_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CC=function(t){const e=C_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Af(s)&&Af(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function IC(t,e){const n=new TC(t,e);return n.subscribe.bind(n)}class TC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Aa),i.error===void 0&&(i.error=Aa),i.complete===void 0&&(i.complete=Aa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Aa(){}function Fl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ts;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PC(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xC(t){return t===Ln?void 0:t}function PC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const OC={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},DC=$.INFO,LC={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},MC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gd{constructor(e){this.name=e,this._logLevel=DC,this._logHandler=MC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const bC=(t,e)=>e.some(n=>t instanceof n);let Of,Df;function FC(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,$u=new WeakMap,I_=new WeakMap,Oa=new WeakMap,_d=new WeakMap;function UC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S_.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function zC(t){if($u.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$u.set(t,e)}let Hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WC(t){Hu=t(Hu)}function VC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Da(this),e,...n);return I_.set(r,e.sort?e.sort():[e]),gn(r)}:jC().includes(t)?function(...e){return t.apply(Da(this),e),gn(S_.get(this))}:function(...e){return gn(t.apply(Da(this),e))}}function BC(t){return typeof t=="function"?VC(t):(t instanceof IDBTransaction&&zC(t),bC(t,FC())?new Proxy(t,Hu):t)}function gn(t){if(t instanceof IDBRequest)return UC(t);if(Oa.has(t))return Oa.get(t);const e=BC(t);return e!==t&&(Oa.set(t,e),_d.set(e,t)),e}const Da=t=>_d.get(t);function $C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gn(o.result),a.oldVersion,a.newVersion,gn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const HC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],La=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return La.set(e,s),s}WC(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Mf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new gd("@firebase/app"),QC="@firebase/app-compat",YC="@firebase/analytics-compat",JC="@firebase/analytics",XC="@firebase/app-check-compat",ZC="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",iS="@firebase/database-compat",sS="@firebase/functions",oS="@firebase/functions-compat",lS="@firebase/installations",aS="@firebase/installations-compat",uS="@firebase/messaging",cS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",_S="@firebase/firestore",vS="@firebase/vertexai-preview",yS="@firebase/firestore-compat",wS="firebase",ES="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="[DEFAULT]",CS={[Gu]:"fire-core",[QC]:"fire-core-compat",[JC]:"fire-analytics",[YC]:"fire-analytics-compat",[ZC]:"fire-app-check",[XC]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[iS]:"fire-rtdb-compat",[sS]:"fire-fn",[oS]:"fire-fn-compat",[lS]:"fire-iid",[aS]:"fire-iid-compat",[uS]:"fire-fcm",[cS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[_S]:"fire-fst",[yS]:"fire-fst-compat",[vS]:"fire-vertex","fire-js":"fire-js",[wS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,SS=new Map,qu=new Map;function bf(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(qu.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;qu.set(e,t);for(const n of Xo.values())bf(n,t);for(const n of SS.values())bf(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new ks("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=ES;function T_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ku,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=y_()),!n)throw _n.create("no-options");const s=Xo.get(i);if(s){if(Jo(n,s.options)&&Jo(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new AC(i);for(const a of qu.values())o.addComponent(a);const l=new TS(n,r,o);return Xo.set(i,l),l}function k_(t=Ku){const e=Xo.get(t);if(!e&&t===Ku&&y_())return T_();if(!e)throw _n.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=CS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}Br(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebase-heartbeat-database",NS=1,ds="firebase-heartbeat-store";let Ma=null;function N_(){return Ma||(Ma=$C(kS,NS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Ma}async function RS(t){try{const n=(await N_()).transaction(ds),r=await n.objectStore(ds).get(R_(t));return await n.done,r}catch(e){if(e instanceof Nn)Ut.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Ff(t,e){try{const r=(await N_()).transaction(ds,"readwrite");await r.objectStore(ds).put(e,R_(t)),await r.done}catch(n){if(n instanceof Nn)Ut.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function R_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=1024,PS=30*24*60*60*1e3;class AS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=PS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jf(),{heartbeatsToSend:r,unsentEntries:i}=OS(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ut.warn(n),""}}}function jf(){return new Date().toISOString().substring(0,10)}function OS(t,e=xS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gC()?_C().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){Br(new Kn("platform-logger",e=>new KC(e),"PRIVATE")),Br(new Kn("heartbeat",e=>new AS(e),"PRIVATE")),vn(Gu,Mf,t),vn(Gu,Mf,"esm2017"),vn("fire-js","")}LS("");function yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=x_,P_=new ks("auth","Firebase",x_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new gd("@firebase/auth");function bS(t,...e){Zo.logLevel<=$.WARN&&Zo.warn(`Auth (${ii}): ${t}`,...e)}function go(t,...e){Zo.logLevel<=$.ERROR&&Zo.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw wd(t,...e)}function Et(t,...e){return wd(t,...e)}function A_(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new ks("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return A_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return P_.create(t,...e)}function A(t,e,...n){if(!t)throw wd(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function zt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FS(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||fC()||"connection"in navigator)?navigator.onLine:!0}function US(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=md()||E_()}get(){return jS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Ns(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ht(t,e,n,r,i={}){return D_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ri(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return hC()||(u.referrerPolicy="no-referrer"),O_.fetch()(L_(t,t.config.apiHost,n,l),u)})}async function D_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zS),e);try{const i=new BS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw eo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw A_(t,d,u);ft(t,d)}}catch(i){if(i instanceof Nn)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Rs(t,e,n,r,i={}){const s=await Ht(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function L_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ed(t.config,i):`${t.config.apiScheme}://${i}`}function VS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),WS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}function Wf(t){return t!==void 0&&t.enterprise!==void 0}class $S{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HS(t,e){return Ht(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return Ht(t,"POST","/v1/accounts:delete",e)}async function M_(t,e){return Ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KS(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Cd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ui(ba(i.auth_time)),issuedAtTime:Ui(ba(i.iat)),expirationTime:Ui(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qo(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vf(t){const e=Cd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&qS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $r(t,M_(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?b_(s.providerUserInfo):[],l=JS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function YS(t){const e=ke(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b_(t){return t.map(e=>{var{providerId:n}=e,r=yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){const n=await D_(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=L_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",O_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZS(t,e){return Ht(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Vf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Nr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KS(this,e)}reload(){return YS(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await $r(this,GS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:k}=n;A(m&&k,e,"internal-error");const R=Nr.fromJSON(this.name,k);A(typeof m=="string",e,"internal-error"),Kt(c,e.name),Kt(h,e.name),A(typeof w=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),Kt(_,e.name),Kt(v,e.name),Kt(y,e.name),Kt(C,e.name),Kt(g,e.name),Kt(f,e.name);const W=new xt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:g,lastLoginAt:f});return N&&Array.isArray(N)&&(W.providerData=N.map(D=>Object.assign({},D))),C&&(W._redirectEventId=C),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Nr;i.updateFromServerResponse(n);const s=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?b_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Nr;l.updateFromIdToken(r);const a=new xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;function Pt(t){zt(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const $f=F_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,s),this.fullPersistenceKey=_o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rr(Pt($f),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt($f);const o=_o(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=xt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Rr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if($_(e))return"Webos";if(U_(e))return"Safari";if((e.includes("chrome/")||z_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j_(t=Ae()){return/firefox\//i.test(t)}function U_(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z_(t=Ae()){return/crios\//i.test(t)}function W_(t=Ae()){return/iemobile/i.test(t)}function V_(t=Ae()){return/android/i.test(t)}function B_(t=Ae()){return/blackberry/i.test(t)}function $_(t=Ae()){return/webos/i.test(t)}function Sd(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eI(t=Ae()){var e;return Sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tI(){return pC()&&document.documentMode===10}function H_(t=Ae()){return Sd(t)||V_(t)||$_(t)||B_(t)||/windows phone/i.test(t)||W_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=Hf(Ae());break;case"Worker":n=`${Hf(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e={}){return Ht(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=6;class sI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gf(this),this.idTokenSubscription=new Gf(this),this.beforeStateQueue=new nI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await M_(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=US()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Dt(this));const n=e?ke(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rI(this),n=new sI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return ke(t)}class Gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=IC(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lI(t){Ul=t}function K_(t){return Ul.loadJS(t)}function aI(){return Ul.recaptchaEnterpriseScript}function uI(){return Ul.gapiScript}function cI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dI="recaptcha-enterprise",hI="NO_RECAPTCHA";class fI{constructor(e){this.type=dI,this.auth=nr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{HS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new $S(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Wf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Wf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=aI();a.length!==0&&(a+=l),K_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Kf(t,e,n,r=!1){const i=new fI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ju(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jo(s,e??{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function mI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gI(t,e,n){const r=nr(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=q_(e),{host:o,port:l}=_I(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vI()}function q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _I(t){const e=q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qf(o)}}}function qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function yI(t,e){return Ht(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e){return Rs(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function CI(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Id{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ju(e,n,"signInWithPassword",wI);case"emailLink":return EI(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ju(e,r,"signUpPassword",yI);case"emailLink":return CI(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return Rs(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="http://localhost";class qn extends Id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:SI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TI(t){const e=Ri(xi(t)).link,n=e?Ri(xi(e)).deep_link_id:null,r=Ri(xi(t)).deep_link_id;return(r?Ri(xi(r)).link:null)||r||n||e||t}class Td{constructor(e){var n,r,i,s,o,l;const a=Ri(xi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=II((i=a.mode)!==null&&i!==void 0?i:null);A(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TI(e);try{return new Td(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Td.parseLink(n);return A(r,"argument-error"),hs._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends xs{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends xs{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends xs{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){return Rs(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=Qf(r);return new Qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qf(r);return new Qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function Y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function NI(t,e,n=!1){const r=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await $r(t,Y_(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Cd(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Qn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await Y_(t,r,e),s=await Qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xI(t,e){return J_(nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PI(t,e,n){if(vt(t.app))return Promise.reject(Dt(t));const r=nr(t),o=await Ju(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&X_(t),a}),l=await Qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function AI(t,e,n){return vt(t.app)?Promise.reject(Dt(t)):xI(ke(t),si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&X_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){return Ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $r(r,OI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LI(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function MI(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function FI(t){return ke(t).signOut()}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1e3,UI=10;class ev extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const zI=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await WI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=kd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function BI(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GI(){return rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebaseLocalStorageDb",KI=1,rl="firebaseLocalStorage",sv="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function qI(){const t=indexedDB.deleteDatabase(iv);return new Ps(t).toPromise()}function Xu(){const t=indexedDB.open(iv,KI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:sv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await qI(),e(await Xu()))})})}async function Yf(t,e,n){const r=Wl(t,!0).put({[sv]:e,value:n});return new Ps(r).toPromise()}async function QI(t,e){const n=Wl(t,!1).get(e),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function Jf(t,e){const n=Wl(t,!0).delete(e);return new Ps(n).toPromise()}const YI=800,JI=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xu();return await Yf(e,nl,"1"),await Jf(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wl(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const XI=ov;new Ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){return e?Pt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eT(t){return J_(t.auth,new Nd(t),t.bypassAuthState)}function tT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),RI(n,new Nd(t),t.bypassAuthState)}async function nT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),NI(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eT;case"linkViaPopup":case"linkViaRedirect":return nT;case"reauthViaPopup":case"reauthViaRedirect":return tT;default:ft(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new Ns(2e3,1e4);class yr extends lv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rT.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="pendingRedirect",vo=new Map;class sT extends lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await oT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oT(t,e){const n=uT(e),r=aT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lT(t,e){vo.set(t._key(),e)}function aT(t){return Pt(t._redirectPersistence)}function uT(t){return _o(iT,t.config.apiKey,t.name)}async function cT(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r=nr(t),i=ZI(r,e),o=await new sT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=10*60*1e3;class hT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!av(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(e))}saveEventToCache(e){this.cachedEventUids.add(Xf(e)),this.lastProcessedEventTime=Date.now()}}function Xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function av({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return av(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(t,e={}){return Ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gT=/^https?/;async function _T(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pT(t);for(const n of e)try{if(vT(n))return}catch{}ft(t,"unauthorized-domain")}function vT(t){const e=Qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gT.test(n))return!1;if(mT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new Ns(3e4,6e4);function Zf(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wT(t){return new Promise((e,n)=>{var r,i,s;function o(){Zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(Et(t,"network-request-failed"))},timeout:yT.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const l=cI("iframefcb");return Ct()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},K_(`${uI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw yo=null,e})}let yo=null;function ET(t){return yo=yo||wT(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ns(5e3,15e3),ST="__/auth/iframe",IT="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,IT):`https://${t.config.authDomain}/${ST}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=kT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ri(r).slice(1)}`}async function RT(t){const e=await ET(t),n=Ct().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:NT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=Ct().setTimeout(()=>{s(o)},CT.get());function a(){Ct().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PT=500,AT=600,OT="_blank",DT="http://localhost";class ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LT(t,e,n,r=PT,i=AT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},xT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(l=z_(u)?OT:n),j_(u)&&(e=e||DT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(eI(u)&&l!=="_self")return MT(e||"",l),new ep(null);const c=window.open(e||"",l,d);A(c,t,"popup-blocked");try{c.focus()}catch{}return new ep(c)}function MT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="__/auth/handler",FT="emulator/auth/handler",jT=encodeURIComponent("fac");async function tp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof Q_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof xs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${jT}=${encodeURIComponent(a)}`:"";return`${UT(t)}?${ri(l).slice(1)}${u}`}function UT({config:t}){return t.emulator?Ed(t,FT):`https://${t.authDomain}/${bT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="webStorageSupport";class zT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=cT,this._overrideRedirectResult=lT}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tp(e,n,r,Qu(),i);return LT(e,o,kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tp(e,n,r,Qu(),i);return BI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RT(e),r=new hT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fa,{type:Fa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fa];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_T(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H_()||U_()||Sd()}}const WT=zT;var np="@firebase/auth",rp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $T(t){Br(new Kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},u=new oI(r,i,s,a);return mI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Kn("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(r=>new VT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(np,rp,BT(t)),vn(np,rp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=5*60,GT=w_("authIdTokenMaxAge")||HT;let ip=null;const KT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GT)return;const i=n==null?void 0:n.token;ip!==i&&(ip=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qT(t=k_()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pI(t,{popupRedirectResolver:WT,persistence:[XI,zI,nv]}),r=w_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=KT(s.toString());MI(n,o,()=>o(n.currentUser)),LI(n,l=>o(l))}}const i=v_("auth");return i&&gI(n,`http://${i}`),n}function QT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$T("Browser");var sp={};const op="@firebase/database",lp="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uv="";function YT(t){uv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JT(e)}}catch{}return new XT},Un=cv("localStorage"),ZT=cv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new gd("@firebase/database"),ek=function(){let t=1;return function(){return t++}}(),dv=function(t){const e=NC(t),n=new SC;n.update(e);const r=n.digest();return fd.encodeByteArray(r)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=As.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let zi=null,ap=!0;const tk=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Pr.logLevel=$.VERBOSE,zi=Pr.log.bind(Pr)},ve=function(...t){if(ap===!0&&(ap=!1,zi===null&&ZT.get("logging_enabled")===!0&&tk()),zi){const e=As.apply(null,t);zi(e)}},Os=function(t){return function(...e){ve(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);Pr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw Pr.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+As(...t);Pr.warn(e)},nk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Yn="[MAX_NAME]",rr=function(t,e){if(t===e)return 0;if(t===Hr||e===Yn)return-1;if(e===Hr||t===Yn)return 1;{const n=up(t),r=up(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ik=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},xd=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=xd(t[e[r]]);return n+="}",n},hv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ee(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fv=function(t){I(!Rd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},sk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ok=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ak=new RegExp("^-?(0*)\\d{1,10}$"),uk=-2147483648,ck=2147483647,up=function(t){if(ak.test(t)){const e=Number(t);if(e>=uk&&e<=ck)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},dk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="5",pv="v",mv="s",gv="r",_v="f",vv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yv="ls",wv="p",ec="ac",Ev="websocket",Cv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Un.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Un.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Ev)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pk(t)&&(n.ns=t.namespace);const i=[];return Ee(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={},Ua={};function Ad(t){const e=t.toString();return ja[e]||(ja[e]=new mk),ja[e]}function gk(t,e){const n=t.toString();return Ua[n]||(Ua[n]=e()),Ua[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="start",vk="close",yk="pLPCommand",wk="pRTLPCB",Tv="id",kv="pw",Nv="ser",Ek="cb",Ck="seg",Sk="ts",Ik="d",Tk="dframe",Rv=1870,xv=30,kk=Rv-xv,Nk=25e3,Rk=3e4;class wr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=Ad(n),this.urlFn=a=>(this.appCheckToken&&(a[ec]=this.appCheckToken),Iv(n,Cv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _k(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rk)),rk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Od((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cp)this.id=l,this.password=a;else if(o===vk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cp]="t",r[Nv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ek]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pv]=Pd,this.transportSessionId&&(r[mv]=this.transportSessionId),this.lastSessionId&&(r[yv]=this.lastSessionId),this.applicationId&&(r[wv]=this.applicationId),this.appCheckToken&&(r[ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&vv.test(location.hostname)&&(r[gv]=_v);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wr.forceAllow_=!0}static forceDisallow(){wr.forceDisallow_=!0}static isAvailable(){return wr.forceAllow_?!0:!wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sk()&&!ok()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g_(n),i=hv(r,kk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Tk]="t",r[Tv]=e,r[kv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Od{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ek(),window[yk+this.uniqueCallbackIdentifier]=e,window[wk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Od.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tv]=this.myID,e[kv]=this.myPW,e[Nv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xv+r.length<=Rv;){const o=this.pendingSegs.shift();r=r+"&"+Ck+i+"="+o.seg+"&"+Sk+i+"="+o.ts+"&"+Ik+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Nk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=16384,Pk=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=Ad(n),this.connURL=lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[pv]=Pd,typeof location<"u"&&location.hostname&&vv.test(location.hostname)&&(o[gv]=_v),n&&(o[mv]=n),r&&(o[yv]=r),i&&(o[ec]=i),s&&(o[wv]=s),Iv(e,Ev,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Un.set("previous_websocket_failure",!0);try{let r;mC(),this.mySock=new il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&il!==null&&!lt.forceDisallow_}static previouslyFailed(){return Un.isInMemoryStorage||Un.get("previous_websocket_failure")===!0}markConnectionHealthy(){Un.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hv(n,xk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wr,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of fs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=6e4,Ok=5e3,Dk=10*1024,Lk=100*1024,za="t",dp="d",Mk="s",hp="r",bk="e",fp="o",pp="a",mp="n",gp="p",Fk="h";class jk{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(za in e){const n=e[za];n===pp?this.upgradeIfSecondaryHealthy_():n===hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(za,e);if(dp in e){const r=e[dp];if(n===Fk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Mk?this.onConnectionShutdown_(r):n===hp?this.onReset_(r):n===bk?Zu("Server Error: "+r):n===fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pd!==r&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ak))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ok))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Un.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Av{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=32,vp=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new H("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Dd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Uk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ps(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ov(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return be(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zk(t,e){const n=ps(t,0),r=ps(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=rr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ld(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Wk{constructor(e,n){this.errorPrefix_=n,this.parts_=ps(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jl(this.parts_[r]);Dv(this)}}function Vk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jl(e),Dv(t)}function Bk(t){const e=t.parts_.pop();t.byteLength_-=jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dv(t){if(t.byteLength_>vp)throw new Error(t.errorPrefix_+"has a key path longer than "+vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>_p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_p+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Av{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Md}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,$k=60*5*1e3,yp=30*1e3,Hk=1.3,Gk=3e4,Kk="server_kill",wp=3;class Lt extends Pv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Lt.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=$k,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Lt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gk&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new jk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kk)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Pe(c),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bu(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>xd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wp&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uv.replace(/\./g,"-")]=1,md()?e["framework.cordova"]=1:E_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sl.getInstance().currentlyOnline();return Bu(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Hr,e),i=new F(Hr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class Lv extends Vl{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(e){to=e}compare(e,n){return rr(e.name,n.name)}isDefinedOn(e){throw ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Yn,to)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,to)}toString(){return".key"}}const Ar=new Lv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class qk{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new no(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new no(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t,e){return rr(t.name,e.name)}function bd(t,e){return rr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;function Yk(t){tc=t}const Mv=function(t){return typeof t=="number"?"number:"+fv(t):"string:"+t},bv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else I(t===tc||t.isEmpty(),"priority of unexpected type.");I(t===tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ep;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ep=e}static get __childrenNodeConstructor(){return Ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:b(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fv(this.value_):e+=this.value_,this.lazyHash_=dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv,jv;function Jk(t){Fv=t}function Xk(t){jv=t}class Zk extends Vl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?rr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Yn,new de("[PRIORITY-POST]",jv))}makePost(e,n){const r=Fv(e);return new F(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new Zk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=Math.log(2);class tN{constructor(e){const n=s=>parseInt(Math.log(s)/eN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ol=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new fe(h,c.node,fe.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const C=c-v,g=c;c-=v;const f=i(C+1,g),m=t[C],w=n?n(m):m;_(new fe(w,m.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),C=Math.pow(2,a.count-(v+1));y?h(C,fe.BLACK):(h(C,fe.BLACK),h(C,fe.RED))}return d},o=new tN(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;const or={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(or&&ie,"ChildrenNode.ts has not been loaded"),Wa=Wa||new At({".priority":or},{".priority":ie}),Wa}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ol(r,e.getCompare()):l=or;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new At(d,u)}addToIndexes(e,n){const r=Yo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===or)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ol(l,o.getCompare())}else return or;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new At(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,i=>{if(i===or)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new At(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new O(new Fe(bd),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ci:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ci:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{I(b(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===Ar||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ar?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nN extends O{constructor(){super(new Fe(bd),O.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Ds=new nN;Object.defineProperties(F,{MIN:{value:new F(Hr,O.EMPTY_NODE)},MAX:{value:new F(Yn,Ds)}});Lv.__EMPTY_NODE=O.EMPTY_NODE;de.__childrenNodeConstructor=O;Yk(Ds);Xk(Ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=!0;function pe(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,pe(e))}if(!(t instanceof Array)&&rN){const n=[];let r=!1;if(Ee(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=ol(n,Qk,o=>o.name,bd);if(r){const o=ol(n,ie.getCompare());return new O(s,pe(e),new At({".priority":o},{".priority":ie}))}else return new O(s,pe(e),At.Default)}else{let n=O.EMPTY_NODE;return Ee(t,(r,i)=>{if(St(t,r)&&r.substring(0,1)!=="."){const s=pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pe(e))}}Jk(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends Vl{constructor(e){super(),this.indexPath_=e,I(!j(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?rr(e.name,n.name):s}makePost(e,n){const r=pe(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new F(Yn,e)}toString(){return ps(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN extends Vl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?rr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=pe(e);return new F(n,r)}toString(){return".value"}}const oN=new sN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){return{type:"value",snapshotNode:t}}function Gr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ms(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ms(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gr(n,r)):o.trackChildChange(gs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(ms(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(gs(i,s,o))}else r.trackChildChange(Gr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.indexedFilter_=new Fd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(gs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ms(n,c));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Gr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ms(u.name,u.node)),s.trackChildChange(Gr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uN(t){return t.loadsAllData()?new Fd(t.getIndex()):t.hasLimit()?new aN(t):new _s(t)}function Cp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===oN?n="$value":t.index_===Ar?n="$key":(I(t.index_ instanceof iN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Pv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),l={};this.listens_[o]=l;const a=Cp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Cp(e._queryParams),r=e._path.toString(),i=new Ts;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=cs(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return{value:null,children:new Map}}function zv(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,al());const i=t.children.get(r);e=K(e),zv(i,e,n)}}function nc(t,e,n){t.value!==null?n(e,t.value):dN(t,(r,i)=>{const s=new H(e.toString()+"/"+r);nc(i,s,n)})}function dN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ee(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=10*1e3,fN=30*1e3,pN=5*60*1e3;class mN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hN(e);const r=Ip+(fN-Ip)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ee(e,(i,s)=>{s>0&&St(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*pN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function Ud(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=Ud()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new ul(V(),n,this.revert)}}else return I(b(this.path)===e,"operationForChild called for unrelated child."),new ul(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new vs(this.source,V()):new vs(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return j(this.path)?new Jn(this.source,V(),this.snap.getImmediateChild(e)):new Jn(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Jn(this.source,V(),n.value):new Kr(this.source,V(),n)}else return I(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _N(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(lN(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>yN(t,l,a)),o.forEach(l=>{const a=vN(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function vN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yN(t,e,n){if(e.childName==null||n.childName==null)throw ni("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return{eventCache:t,serverCache:e}}function Vi(t,e,n,r){return Bl(new Xn(e,n,r),t.serverCache)}function Wv(t,e,n,r){return Bl(t.eventCache,new Xn(e,n,r))}function rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;const wN=()=>(Va||(Va=new Fe(ik)),Va);class G{constructor(e,n=wN()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Ee(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(j(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:re(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new G(null)}}set(e,n){if(j(e))return new G(n,this.children);{const r=b(e),s=(this.children.get(r)||new G(null)).set(K(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(j(e))return n;{const r=b(e),s=(this.children.get(r)||new G(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(K(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),re(n,i),r):new G(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new G(null))}}function Bi(t,e,n){if(j(e))return new dt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function ic(t,e,n){let r=t;return Ee(n,(i,s)=>{r=Bi(r,re(e,i),s)}),r}function Tp(t,e){if(j(e))return dt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new dt(n)}}function sc(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function kp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function yn(t,e){if(j(e))return t;{const n=ir(t,e);return n!=null?new dt(new G(n)):new dt(t.writeTree_.subtree(e))}}function oc(t){return t.writeTree_.isEmpty()}function qr(t,e){return Vv(V(),t.writeTree_,e)}function Vv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Vv(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){return Gv(e,t)}function EN(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function CN(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ic(t.visibleWrites,e,n),t.lastWriteId=r}function SN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function IN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TN(l,r.path)?i=!1:Xe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return kN(t),!0;if(r.snap)t.visibleWrites=Tp(t.visibleWrites,r.path);else{const l=r.children;Ee(l,a=>{t.visibleWrites=Tp(t.visibleWrites,re(r.path,a))})}return!0}else return!1}function TN(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(re(t.path,n),e))return!0;return!1}function kN(t){t.visibleWrites=Bv(t.allWrites,NN,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function NN(t){return t.visible}function Bv(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Xe(n,o)?(l=be(n,o),r=Bi(r,l,s.snap)):Xe(o,n)&&(l=be(o,n),r=Bi(r,V(),s.snap.getChild(l)));else if(s.children){if(Xe(n,o))l=be(n,o),r=ic(r,l,s.children);else if(Xe(o,n))if(l=be(o,n),j(l))r=ic(r,V(),s.children);else{const a=Vr(s.children,b(l));if(a){const u=a.getChild(K(l));r=Bi(r,V(),u)}}}else throw ni("WriteRecord should have .snap or .children")}}return r}function $v(t,e,n,r,i){if(!r&&!i){const s=ir(t.visibleWrites,e);if(s!=null)return s;{const o=yn(t.visibleWrites,e);if(oc(o))return n;if(n==null&&!sc(o,V()))return null;{const l=n||O.EMPTY_NODE;return qr(o,l)}}}else{const s=yn(t.visibleWrites,e);if(!i&&oc(s))return n;if(!i&&n==null&&!sc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Xe(u.path,e)||Xe(e,u.path))},l=Bv(t.allWrites,o,e),a=n||O.EMPTY_NODE;return qr(l,a)}}}function RN(t,e,n){let r=O.EMPTY_NODE;const i=ir(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yn(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=qr(yn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),kp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yn(t.visibleWrites,e);return kp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xN(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(sc(t.visibleWrites,s))return null;{const o=yn(t.visibleWrites,s);return oc(o)?i.getChild(n):qr(o,i.getChild(n))}}function PN(t,e,n,r){const i=re(e,n),s=ir(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yn(t.visibleWrites,i);return qr(o,r.getNode().getImmediateChild(n))}else return null}function AN(t,e){return ir(t.visibleWrites,e)}function ON(t,e,n,r,i,s,o){let l;const a=yn(t.visibleWrites,e),u=ir(a,V());if(u!=null)l=u;else if(n!=null)l=qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function DN(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function cl(t,e,n,r){return $v(t.writeTree,t.treePath,e,n,r)}function Bd(t,e){return RN(t.writeTree,t.treePath,e)}function Np(t,e,n,r){return xN(t.writeTree,t.treePath,e,n,r)}function dl(t,e){return AN(t.writeTree,re(t.treePath,e))}function LN(t,e,n,r,i,s){return ON(t.writeTree,t.treePath,e,n,r,i,s)}function $d(t,e,n){return PN(t.writeTree,t.treePath,e,n)}function Hv(t,e){return Gv(re(t.treePath,e),t.writeTree)}function Gv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,gs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ms(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,gs(r,e.snapshotNode,i.oldSnap));else throw ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Kv=new bN;class Hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $d(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),s=LN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){return{filter:t}}function jN(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UN(t,e,n,r,i){const s=new MN;let o,l;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=lc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=hl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=WN(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,u.path,u.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=$N(t,e,u.path,r,i,s):o=VN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=BN(t,e,n.path,r,s);else throw ni("Unknown operation type: "+n.type);const a=s.getChanges();return zN(e,o,a),{viewCache:o,changes:a}}function zN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Uv(rc(e)))}}function qv(t,e,n,r,i,s){const o=e.eventCache;if(dl(r,n)!=null)return e;{let l,a;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zn(e),d=u instanceof O?u:O.EMPTY_NODE,c=Bd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=cl(r,Zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){I(Cn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Np(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Np(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=$d(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Vi(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function hl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=b(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const v=K(n),C=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),_,C,v,Kv,null)}const c=Wv(e,u,a.isFullyInitialized()||j(n),d.filtersNodes()),h=new Hd(i,c,s);return qv(t,c,n,i,h,l)}function lc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Hd(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Vi(e,u,!0,t.filter.filtersNodes());else{const c=b(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Vi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),_=l.getNode().getImmediateChild(c);let v;if(j(h))v=r;else{const y=d.getCompleteChild(c);y!=null?Dd(h)===".priority"&&y.getChild(Ov(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=O.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Vi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Rp(t,e){return t.eventCache.isCompleteForChild(e)}function WN(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=re(n,a);Rp(e,b(d))&&(l=lc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=re(n,a);Rp(e,b(d))||(l=lc(t,l,d,u,i,s,o))}),l}function xp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ac(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=xp(t,_,h);a=hl(t,a,new H(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=xp(t,v,h);a=hl(t,a,new H(c),y,i,s,o,l)}}),a}function VN(t,e,n,r,i,s,o){if(dl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return hl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new G(null);return a.getNode().forEachChild(Ar,(d,c)=>{u=u.set(new H(d),c)}),ac(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const h=re(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),ac(t,e,n,u,i,s,l,o)}}function BN(t,e,n,r,i){const s=e.serverCache,o=Wv(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return qv(t,o,n,r,Kv,i)}function $N(t,e,n,r,i,s){let o;if(dl(r,n)!=null)return e;{const l=new Hd(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=cl(r,Zn(e));else{const c=e.serverCache.getNode();I(c instanceof O,"serverChildren would be complete if leaf node"),d=Bd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let c=$d(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,K(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,O.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cl(r,Zn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||dl(r,V())!=null,Vi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fd(r.getIndex()),s=uN(r);this.processor_=FN(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),d=new Xn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Xn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bl(c,d),this.eventGenerator_=new gN(this.query_)}get query(){return this.query_}}function GN(t){return t.viewCache_.serverCache.getNode()}function KN(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Pp(t){return t.eventRegistrations_.length===0}function qN(t,e){t.eventRegistrations_.push(e)}function Ap(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Op(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(I(Zn(t.viewCache_),"We should always have a full cache before handling merges"),I(rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=UN(t.processor_,i,e,n,r);return jN(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Qv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function QN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Gr(s,o))}),n.isFullyInitialized()&&r.push(Uv(n.getNode())),Qv(t,r,n.getNode(),e)}function Qv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _N(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;class YN{constructor(){this.views=new Map}}function JN(t){I(!fl,"__referenceConstructor has already been defined"),fl=t}function XN(){return I(fl,"Reference.ts has not been loaded"),fl}function ZN(t){return t.views.size===0}function Gd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Op(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Op(o,e,n,r));return s}}function eR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=cl(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Bd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Bl(new Xn(l,a,!1),new Xn(r,i,!1));return new HN(e,u)}return o}function tR(t,e,n,r,i,s){const o=eR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qN(o,n),QN(o,n)}function nR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Ap(u,n,r)),Pp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Ap(a,n,r)),Pp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(XN())(e._repo,e._path)),{removed:s,events:o}}function Yv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||KN(r,e);return n}function Jv(t,e){if(e._queryParams.loadsAllData())return $l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xv(t,e){return Jv(t,e)!=null}function Sn(t){return $l(t)!=null}function $l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function rR(t){I(!pl,"__referenceConstructor has already been defined"),pl=t}function iR(){return I(pl,"Reference.ts has not been loaded"),pl}let sR=1;class Dp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=DN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zv(t,e,n,r,i){return EN(t.pendingWriteTree_,e,n,r,i),i?li(t,new Jn(Ud(),e,n)):[]}function oR(t,e,n,r){CN(t.pendingWriteTree_,e,n,r);const i=G.fromObject(n);return li(t,new Kr(Ud(),e,i))}function on(t,e,n=!1){const r=SN(t.pendingWriteTree_,e);if(IN(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(V(),!0):Ee(r.children,o=>{s=s.set(new H(o),!0)}),li(t,new ul(r.path,s,n))}else return[]}function Hl(t,e,n){return li(t,new Jn(zd(),e,n))}function lR(t,e,n){const r=G.fromObject(n);return li(t,new Kr(zd(),e,r))}function aR(t,e){return li(t,new vs(zd(),e))}function uR(t,e,n){const r=qd(t,n);if(r){const i=Qd(r),s=i.path,o=i.queryId,l=be(s,e),a=new vs(Wd(o),l);return Yd(t,s,a)}else return[]}function uc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Xv(o,e))){const a=nR(o,e,n,r);ZN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>Sn(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=hR(h);for(let v=0;v<_.length;++v){const y=_[v],C=y.query,g=ny(t,y);t.listenProvider_.startListening($i(C),ml(t,C),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening($i(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Gl(h));t.listenProvider_.stopListening($i(h),_)}))}fR(t,u)}return l}function cR(t,e,n,r){const i=qd(t,r);if(i!=null){const s=Qd(i),o=s.path,l=s.queryId,a=be(o,e),u=new Jn(Wd(l),a,n);return Yd(t,o,u)}else return[]}function dR(t,e,n,r){const i=qd(t,r);if(i){const s=Qd(i),o=s.path,l=s.queryId,a=be(o,e),u=G.fromObject(n),d=new Kr(Wd(l),a,u);return Yd(t,o,d)}else return[]}function Lp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=be(h,i);s=s||Or(_,v),o=o||Sn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||Or(l,V())):(l=new YN,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=Or(v,V());y&&(s=s.updateImmediateChild(_,y))}));const u=Xv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Gl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=pR();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=Vd(t.pendingWriteTree_,i);let c=tR(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Jv(l,e);c=c.concat(mR(t,e,h))}return c}function Kd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=be(o,e),u=Or(l,a);if(u)return u});return $v(i,e,s,n,!0)}function li(t,e){return ey(e,t.syncPointTree_,null,Vd(t.pendingWriteTree_,V()))}function ey(t,e,n,r){if(j(t.path))return ty(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Or(i,V()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Hv(r,o);s=s.concat(ey(l,a,u,d))}return i&&(s=s.concat(Gd(i,t,r,n))),s}}function ty(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Or(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Hv(r,o),d=t.operationForChild(o);d&&(s=s.concat(ty(d,l,a,u)))}),i&&(s=s.concat(Gd(i,t,r,n))),s}function ny(t,e){const n=e.query,r=ml(t,n);return{hashFn:()=>(GN(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?uR(t,n._path,r):aR(t,n._path);{const s=lk(i,n);return uc(t,n,null,s)}}}}function ml(t,e){const n=Gl(e);return t.queryToTagMap.get(n)}function Gl(t){return t._path.toString()+"$"+t._queryIdentifier}function qd(t,e){return t.tagToQueryMap.get(e)}function Qd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Yd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Vd(t.pendingWriteTree_,e);return Gd(r,n,i,null)}function hR(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[$l(n)];{let i=[];return n&&(i=Yv(n)),Ee(r,(s,o)=>{i=i.concat(o)}),i}})}function $i(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iR())(t._repo,t._path):t}function fR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function pR(){return sR++}function mR(t,e,n){const r=e._path,i=ml(t,e),s=ny(t,n),o=t.listenProvider_.startListening($i(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!j(u)&&d&&Sn(d))return[$l(d).query];{let h=[];return d&&(h=h.concat(Yv(d).map(_=>_.query))),Ee(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening($i(d),ml(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jd(n)}node(){return this.node_}}class Xd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new Xd(this.syncTree_,n)}node(){return Kd(this.syncTree_,this.path_)}}const gR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _R(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_R=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},vR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ry=function(t,e,n,r){return Zd(e,new Xd(n,t),r)},iy=function(t,e,n){return Zd(t,new Jd(e),n)};function Zd(t,e,n){const r=t.getPriority().val(),i=Mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ie,(l,a)=>{const u=Zd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function th(t,e){let n=e instanceof H?e:new H(e),r=t,i=b(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new eh(i,r,s),n=K(n),i=b(n)}return r}function ai(t){return t.node.value}function sy(t,e){t.node.value=e,cc(t)}function oy(t){return t.node.childCount>0}function yR(t){return ai(t)===void 0&&!oy(t)}function Kl(t,e){Ee(t.node.children,(n,r)=>{e(new eh(n,t,r))})}function ly(t,e,n,r){n&&e(t),Kl(t,i=>{ly(i,e,!0)})}function wR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new H(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&ER(t.parent,t.name,t)}function ER(t,e,n){const r=yR(n),i=St(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/[\[\].#$\/\u0000-\u001F\u007F]/,SR=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!CR.test(t)},ay=function(t){return typeof t=="string"&&t.length!==0&&!SR.test(t)},IR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ay(t)},TR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Rd(t)||t&&typeof t=="object"&&St(t,".sv")},uy=function(t,e,n,r){r&&e===void 0||ql(Fl(t,"value"),e,n)},ql=function(t,e,n){const r=n instanceof H?new Wk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(r)+" with contents = "+e.toString());if(Rd(e))throw new Error(t+"contains "+e.toString()+" "+Mn(r));if(typeof e=="string"&&e.length>Ba/3&&jl(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+Mn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ee(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vk(r,o),ql(t,l,r),Bk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Mn(r)+" in addition to actual children.")}},kR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ps(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!nh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Xe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},NR=function(t,e,n,r){const i=Fl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ee(e,(o,l)=>{const a=new H(o);if(ql(i,l,re(n,a)),Dd(a)===".priority"&&!TR(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),kR(i,s)},cy=function(t,e,n,r){if(!ay(n))throw new Error(Fl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cy(t,e,n)},rh=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IR(n))throw new Error(Fl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ql(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ld(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function dy(t,e,n){Ql(t,n),hy(t,r=>Ld(r,e))}function pt(t,e,n){Ql(t,n),hy(t,r=>Xe(r,e)||Xe(e,r))}function hy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(AR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zi&&ve("event: "+n.toString()),oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="repo_interrupt",DR=25;class LR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new PR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MR(t,e,n){if(t.stats_=Ad(t.repoInfo_),t.forceRestClient_||dk())t.server_=new ll(t.repoInfo_,(r,i,s,o)=>{bp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(r,i,s,o)=>{bp(t,r,i,s,o)},r=>{Fp(t,r)},r=>{bR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=gk(t.repoInfo_,()=>new mN(t.stats_,t.server_)),t.infoData_=new cN,t.infoSyncTree_=new Dp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Hl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new Dp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);pt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fy(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(t){return gR({timestamp:fy(t)})}function bp(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Yo(n,u=>pe(u));o=dR(t.serverSyncTree_,s,a,i)}else{const a=pe(n);o=cR(t.serverSyncTree_,s,a,i)}else if(r){const a=Yo(n,u=>pe(u));o=lR(t.serverSyncTree_,s,a)}else{const a=pe(n);o=Hl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Qr(t,s)),pt(t.eventQueue_,l,o)}function Fp(t,e){ih(t,"connected",e),e===!1&&UR(t)}function bR(t,e){Ee(e,(n,r)=>{ih(t,n,r)})}function ih(t,e,n){const r=new H("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(r,i);const s=Hl(t.infoSyncTree_,r,i);pt(t.eventQueue_,r,s)}function sh(t){return t.nextWriteId_++}function FR(t,e,n,r,i){Jl(t,"set",{path:e.toString(),value:n,priority:r});const s=Yl(t),o=pe(n,r),l=Kd(t.serverSyncTree_,e),a=iy(o,l,s),u=sh(t),d=Zv(t.serverSyncTree_,e,a,u,!0);Ql(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Pe("set at "+e+" failed: "+h);const y=on(t.serverSyncTree_,u,!v);pt(t.eventQueue_,e,y),dc(t,i,h,_)});const c=lh(t,e);Qr(t,c),pt(t.eventQueue_,c,[])}function jR(t,e,n,r){Jl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yl(t),o={};if(Ee(n,(l,a)=>{i=!1,o[l]=ry(re(e,l),pe(a),t.serverSyncTree_,s)}),i)ve("update() called with empty data.  Don't do anything."),dc(t,r,"ok",void 0);else{const l=sh(t),a=oR(t.serverSyncTree_,e,o,l);Ql(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Pe("update at "+e+" failed: "+u);const h=on(t.serverSyncTree_,l,!c),_=h.length>0?Qr(t,e):e;pt(t.eventQueue_,_,h),dc(t,r,u,d)}),Ee(n,u=>{const d=lh(t,re(e,u));Qr(t,d)}),pt(t.eventQueue_,e,[])}}function UR(t){Jl(t,"onDisconnectEvents");const e=Yl(t),n=al();nc(t.onDisconnect_,V(),(i,s)=>{const o=ry(i,s,t.serverSyncTree_,e);zv(n,i,o)});let r=[];nc(n,V(),(i,s)=>{r=r.concat(Hl(t.serverSyncTree_,i,s));const o=lh(t,i);Qr(t,o)}),t.onDisconnect_=al(),pt(t.eventQueue_,V(),r)}function zR(t,e,n){let r;b(e._path)===".info"?r=Lp(t.infoSyncTree_,e,n):r=Lp(t.serverSyncTree_,e,n),dy(t.eventQueue_,e._path,r)}function WR(t,e,n){let r;b(e._path)===".info"?r=uc(t.infoSyncTree_,e,n):r=uc(t.serverSyncTree_,e,n),dy(t.eventQueue_,e._path,r)}function VR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OR)}function Jl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function dc(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function py(t,e,n){return Kd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function oh(t,e=t.transactionQueueTree_){if(e||Xl(t,e),ai(e)){const n=gy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BR(t,Ls(e),n)}else oy(e)&&Kl(e,n=>{oh(t,n)})}function BR(t,e,n){const r=n.map(u=>u.currentWriteId),i=py(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=be(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Jl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(on(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Xl(t,th(t.transactionQueueTree_,e)),oh(t,t.transactionQueueTree_),pt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)oi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Pe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Qr(t,e)}},o)}function Qr(t,e){const n=my(t,e),r=Ls(n),i=gy(t,n);return $R(t,i,r),r}function $R(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=be(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(on(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=DR)d=!0,c="maxretry",i=i.concat(on(t.serverSyncTree_,a.currentWriteId,!0));else{const h=py(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ql("transaction failed: Data returned ",_,a.path);let v=pe(_);typeof _=="object"&&_!=null&&St(_,".priority")||(v=v.updatePriority(h.getPriority()));const C=a.currentWriteId,g=Yl(t),f=iy(v,h,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=sh(t),o.splice(o.indexOf(C),1),i=i.concat(Zv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(on(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(on(t.serverSyncTree_,a.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Xl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oi(r[l]);oh(t,t.transactionQueueTree_)}function my(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&ai(r)===void 0;)r=th(r,n),e=K(e),n=b(e);return r}function gy(t,e){const n=[];return _y(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _y(t,e,n){const r=ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kl(e,i=>{_y(t,i,n)})}function Xl(t,e){const n=ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,sy(e,n.length>0?n:void 0)}Kl(e,r=>{Xl(t,r)})}function lh(t,e){const n=Ls(my(t,e)),r=th(t.transactionQueueTree_,e);return wR(r,i=>{$a(t,i)}),$a(t,r),ly(r,i=>{$a(t,i)}),n}function $a(t,e){const n=ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(on(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?sy(e,void 0):n.length=s+1,pt(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const jp=function(t,e){const n=KR(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},KR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=HR(t.substring(d,c)));const h=GR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Up.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Up.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class YR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Dd(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Sp(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return Sp(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof ah))return!1;const n=this._repo===e._repo,r=Ld(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uk(this._path)}}class xn extends ah{constructor(e,n){super(e,n,new jd,!1)}get parent(){const e=Ov(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=ys(this.ref,e);return new gl(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gl(i,ys(this.ref,r),ie)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $e(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=ke(t),b(t._path)===null?RR("child","path",e):cy("child","path",e),new xn(t._repo,re(t._path,e))}function hc(t,e){t=ke(t),rh("push",t._path),uy("push",e,t._path,!0);const n=fy(t._repo),r=qR(n),i=ys(t,r),s=ys(t,r);let o;return e!=null?o=uh(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function vy(t){return rh("remove",t._path),uh(t,null)}function uh(t,e){t=ke(t),rh("set",t._path),uy("set",e,t._path,!1);const n=new Ts;return FR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function XR(t,e){NR("update",e,t._path);const n=new Ts;return jR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class ch{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new QR("value",this,new gl(e.snapshotNode,new xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new YR(this,e,n):null}matches(e){return e instanceof ch?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ZR(t,e,n,r,i){const s=new JR(n,void 0),o=new ch(s);return zR(t._repo,t,o),()=>WR(t._repo,t,o)}function Dr(t,e,n,r){return ZR(t,"value",e)}JN(xn);rR(xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="FIREBASE_DATABASE_EMULATOR_HOST",fc={};let tx=!1;function nx(t,e,n,r){t.repoInfo_=new Sv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function rx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jp(s,i),l=o.repoInfo,a;typeof process<"u"&&sp&&(a=sp[ex]),a?(s=`http://${a}?ns=${l.namespace}`,o=jp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new fk(t.name,t.options,e);xR("Invalid Firebase Database URL",o),j(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sx(l,t,u,new hk(t.name,n));return new ox(d,t)}function ix(t,e){const n=fc[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VR(t),delete n[t.key]}function sx(t,e,n,r){let i=fc[e.name];i||(i={},fc[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new LR(t,tx,n,r),i[t.toURLString()]=s,s}class ox{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ix(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function lx(t=k_(),e){const n=vd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=cC("database");r&&ax(n,...r)}return n}function ax(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new wo(wo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dC(r.mockUserToken,t.app.options.projectId);s=new wo(o)}nx(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){YT(ii),Br(new Kn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vn(op,lp,t),vn(op,lp,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ux();var cx="firebase",dx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(cx,dx,"app");const yy=T_({apiKey:"AIzaSyDTK5NNOeC81rv-aADB0lU1X8YMlBveB_E",authDomain:"sistema-visitas-cor.firebaseapp.com",databaseURL:"https://sistema-visitas-cor-default-rtdb.firebaseio.com",projectId:"sistema-visitas-cor",appId:"1:489447636166:web:0690152e6623d2bff4ebc7"}),Zl=qT(yy),He=lx(yy),Ha="@oestesaude.com.br".toLowerCase(),_l=t=>t?new Date(t+"T00:00:00").toLocaleDateString("pt-BR"):"",wy=E.createContext(),ui=()=>E.useContext(wy);function hx({children:t}){const[e,n]=E.useState(null),[r,i]=E.useState(null),[s,o]=E.useState(!0);E.useEffect(()=>bI(Zl,a=>{n(a),a||(i(null),o(!1))}),[]),E.useEffect(()=>{if(e)return Dr($e(He,`usuarios/${e.uid}`),a=>{i(a.val()),o(!1)})},[e]);const l=(r==null?void 0:r.administrador)===!0;return p.jsx(wy.Provider,{value:{usuario:e,perfil:r,admin:l,carregando:s},children:t})}function zp({somenteAdmin:t=!1}){const{usuario:e,admin:n,carregando:r}=ui();return r?p.jsx("p",{className:"carregando",children:"Carregando…"}):e?t&&!n?p.jsx(Go,{to:"/",replace:!0}):p.jsx(dd,{}):p.jsx(Go,{to:"/login",replace:!0})}function fx(){const{usuario:t,carregando:e}=ui();return e?p.jsx("p",{className:"carregando",children:"Carregando…"}):t?p.jsx(Go,{to:"/",replace:!0}):p.jsx(dd,{})}const Ey=E.createContext(),px=()=>E.useContext(Ey);function mx({children:t}){const[e,n]=E.useState(()=>localStorage.getItem("tema")||"light");E.useEffect(()=>{document.documentElement.dataset.theme=e,localStorage.setItem("tema",e)},[e]);const r=()=>n(i=>i==="light"?"dark":"light");return p.jsx(Ey.Provider,{value:{tema:e,alternar:r},children:t})}function gx(){const{perfil:t,admin:e}=ui(),{tema:n,alternar:r}=px(),i=cd(),s=async()=>{await FI(Zl),i("/login")};return p.jsxs(p.Fragment,{children:[p.jsxs("header",{className:"topo",children:[p.jsx("strong",{className:"marca",children:"Oeste Saúde · Relacionamento Corporativo"}),p.jsxs("nav",{children:[p.jsx(Pa,{to:"/",end:!0,children:"Registrar visita"}),p.jsx(Pa,{to:"/minhas-visitas",children:"Minhas visitas"}),e&&p.jsx(Pa,{to:"/admin",children:"Painel do administrador"})]}),p.jsxs("div",{className:"topo-acoes",children:[p.jsx("span",{className:"nome",children:t==null?void 0:t.nome}),p.jsx("button",{className:"btn btn-sec",onClick:r,children:n==="light"?"Modo escuro":"Modo claro"}),p.jsx("button",{className:"btn btn-sec",onClick:s,children:"Sair"})]})]}),p.jsx("main",{className:"conteudo",children:p.jsx(dd,{})})]})}function _x(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,l]=E.useState(!1);async function a(u){u.preventDefault(),s(""),l(!0);try{await AI(Zl,t.trim(),n)}catch{s("E-mail ou senha incorretos. Confira os dados e tente de novo.")}l(!1)}return p.jsx("div",{className:"tela-auth",children:p.jsxs("form",{className:"card form auth",onSubmit:a,children:[p.jsx("h1",{children:"Entrar"}),p.jsx("p",{className:"suave",children:"Registro de visitas do Relacionamento Corporativo"}),p.jsxs("label",{children:["E-mail",p.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),required:!0})]}),p.jsxs("label",{children:["Senha",p.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),required:!0})]}),i&&p.jsx("p",{className:"aviso erro",children:i}),p.jsx("button",{className:"btn",disabled:o,children:o?"Entrando…":"Entrar"}),p.jsxs("p",{className:"suave",children:["Ainda não tem conta? ",p.jsx(hd,{to:"/cadastro",children:"Criar conta"})]})]})})}function vx(){const[t,e]=E.useState({nome:"",email:"",senha:"",confirmar:""}),[n,r]=E.useState(""),[i,s]=E.useState(!1),o=a=>e({...t,[a.target.name]:a.target.value});async function l(a){a.preventDefault(),r("");const u=t.email.trim().toLowerCase();if(!u.endsWith(Ha))return r(`Use seu e-mail corporativo (final ${Ha}).`);if(t.senha.length<6)return r("A senha precisa ter pelo menos 6 caracteres.");if(t.senha!==t.confirmar)return r("As senhas não são iguais.");s(!0);try{const{user:d}=await PI(Zl,u,t.senha);await DI(d,{displayName:t.nome.trim()}),await uh($e(He,`usuarios/${d.uid}`),{nome:t.nome.trim(),email:u,administrador:!1,criadoEm:Date.now()})}catch(d){r(d.code==="auth/email-already-in-use"?"Este e-mail já tem uma conta. Volte e clique em Entrar.":"Não foi possível criar a conta. Tente novamente.")}s(!1)}return p.jsx("div",{className:"tela-auth",children:p.jsxs("form",{className:"card form auth",onSubmit:l,children:[p.jsx("h1",{children:"Criar conta"}),p.jsxs("p",{className:"suave",children:["Somente e-mails corporativos ",Ha]}),p.jsxs("label",{children:["Nome completo",p.jsx("input",{name:"nome",value:t.nome,onChange:o,required:!0})]}),p.jsxs("label",{children:["E-mail corporativo",p.jsx("input",{type:"email",name:"email",value:t.email,onChange:o,required:!0})]}),p.jsxs("label",{children:["Senha",p.jsx("input",{type:"password",name:"senha",value:t.senha,onChange:o,required:!0})]}),p.jsxs("label",{children:["Repita a senha",p.jsx("input",{type:"password",name:"confirmar",value:t.confirmar,onChange:o,required:!0})]}),n&&p.jsx("p",{className:"aviso erro",children:n}),p.jsx("button",{className:"btn",disabled:i,children:i?"Criando…":"Criar conta"}),p.jsxs("p",{className:"suave",children:["Já tem conta? ",p.jsx(hd,{to:"/login",children:"Entrar"})]})]})})}const yx=()=>new Date().toLocaleDateString("en-CA");function Cy({visita:t,aoSalvar:e,aoCancelar:n}){const{usuario:r,perfil:i}=ui(),[s,o]=E.useState({dataVisita:(t==null?void 0:t.dataVisita)||yx(),empresa:(t==null?void 0:t.empresa)||"",cidade:(t==null?void 0:t.cidade)||"",objetivo:(t==null?void 0:t.objetivo)||"",assuntos:(t==null?void 0:t.assuntos)||""}),[l,a]=E.useState(!1),[u,d]=E.useState(!1),[c,h]=E.useState(null),_=y=>o({...s,[y.target.name]:y.target.value});async function v(y){y.preventDefault(),d(!0),h(null);try{const C=Object.fromEntries(Object.entries(s).map(([f,m])=>[f,m.trim()])),g=(i==null?void 0:i.nome)||r.email;t!=null&&t.id?await XR($e(He,`visitas/${t.uid}/${t.id}`),{...C,editadoEm:Date.now()}):l?await hc($e(He,"acoesColetivas"),{titulo:C.empresa,data:C.dataVisita,cidade:C.cidade,objetivo:C.objetivo,descricao:C.assuntos,criadoPor:r.uid,nomeUsuario:g,criadoEm:Date.now()}):await hc($e(He,`visitas/${r.uid}`),{...C,nomeUsuario:g,criadoEm:Date.now()}),t||(o({...s,empresa:"",cidade:"",objetivo:"",assuntos:""}),a(!1)),h({ok:!0,texto:t?"Alterações salvas.":l?"Ação coletiva registrada. Toda a equipe vai vê-la.":"Visita registrada com sucesso."}),e==null||e()}catch{h({ok:!1,texto:"Não foi possível salvar. Verifique sua conexão e tente de novo."})}d(!1)}return p.jsxs("form",{className:"card form",onSubmit:v,children:[p.jsxs("div",{className:"grade-2",children:[p.jsxs("label",{children:["Data da visita",p.jsx("input",{type:"date",name:"dataVisita",value:s.dataVisita,onChange:_,required:!0})]}),p.jsxs("label",{children:["Cidade",p.jsx("input",{name:"cidade",value:s.cidade,onChange:_,required:!0})]})]}),p.jsxs("label",{children:["Empresa",p.jsx("input",{name:"empresa",value:s.empresa,onChange:_,required:!0})]}),p.jsxs("label",{children:["Objetivo da visita",p.jsx("textarea",{name:"objetivo",rows:"2",value:s.objetivo,onChange:_,required:!0})]}),p.jsxs("label",{children:["Assuntos tratados",p.jsx("textarea",{name:"assuntos",rows:"4",value:s.assuntos,onChange:_,required:!0})]}),!t&&p.jsxs("label",{className:"check",children:[p.jsx("input",{type:"checkbox",checked:l,onChange:y=>a(y.target.checked)}),"Foi uma visita coletiva (toda a equipe participou)"]}),c&&p.jsx("p",{className:c.ok?"aviso ok":"aviso erro",children:c.texto}),p.jsxs("div",{className:"linha",children:[p.jsx("button",{className:"btn",disabled:u,children:u?"Salvando…":t?"Salvar alterações":l?"Registrar ação coletiva":"Registrar visita"}),n&&p.jsx("button",{type:"button",className:"btn btn-sec",onClick:n,children:"Cancelar"})]})]})}function wx(){return p.jsxs(p.Fragment,{children:[p.jsx("h1",{children:"Registrar visita"}),p.jsx("p",{className:"suave",children:"Preencha os dados da visita feita a uma empresa."}),p.jsx(Cy,{})]})}function Ex(){const{usuario:t}=ui(),[e,n]=E.useState(null),[r,i]=E.useState([]),[s,o]=E.useState(null);return E.useEffect(()=>{const l=Dr($e(He,`visitas/${t.uid}`),u=>{const d=u.val()||{};n(Object.entries(d).map(([c,h])=>({id:c,uid:t.uid,...h})).sort((c,h)=>h.dataVisita.localeCompare(c.dataVisita)))}),a=Dr($e(He,"acoesColetivas"),u=>{i(Object.entries(u.val()||{}).map(([d,c])=>({id:d,...c})).sort((d,c)=>c.data.localeCompare(d.data)))});return()=>{l(),a()}},[t.uid]),e?p.jsxs(p.Fragment,{children:[p.jsx("h1",{children:"Minhas visitas"}),p.jsxs("p",{className:"suave",children:["Você registrou ",e.length," ",e.length===1?"visita":"visitas",". Clique em Editar para corrigir qualquer informação."]}),e.length===0&&p.jsx("div",{className:"card vazio",children:"Você ainda não registrou visitas. Use a opção “Registrar visita” no menu."}),e.map(l=>s===l.id?p.jsx(Cy,{visita:l,aoSalvar:()=>o(null),aoCancelar:()=>o(null)},l.id):p.jsxs("article",{className:"card visita",children:[p.jsxs("div",{className:"visita-topo",children:[p.jsxs("div",{children:[p.jsx("h3",{children:l.empresa}),p.jsxs("span",{className:"suave",children:[l.cidade," · ",_l(l.dataVisita)]})]}),p.jsx("button",{className:"btn btn-sec",onClick:()=>o(l.id),children:"Editar"})]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Objetivo:"})," ",l.objetivo]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Assuntos tratados:"})," ",l.assuntos]})]},l.id)),r.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("h2",{children:"Ações coletivas da equipe"}),p.jsx("p",{className:"suave",children:"Ações em que todo o departamento participou."}),r.map(l=>p.jsxs("article",{className:"card visita acao",children:[p.jsx("h3",{children:l.titulo}),p.jsx("span",{className:"suave",children:[l.cidade,_l(l.data),l.nomeUsuario&&`registrada por ${l.nomeUsuario}`].filter(Boolean).join(" · ")}),l.objetivo&&p.jsxs("p",{children:[p.jsx("strong",{children:"Objetivo:"})," ",l.objetivo]}),l.descricao&&p.jsx("p",{children:l.descricao})]},l.id))]})]}):p.jsx("p",{className:"carregando",children:"Carregando…"})}const Wp=["Comparativo","Todas as visitas","Ações coletivas","Usuários"];function Cx(){const{usuario:t}=ui(),[e,n]=E.useState(Wp[0]),[r,i]=E.useState([]),[s,o]=E.useState([]),[l,a]=E.useState([]),[u,d]=E.useState(""),[c,h]=E.useState(""),[_,v]=E.useState("");E.useEffect(()=>{const m=Dr($e(He,"visitas"),N=>{const k=[];Object.entries(N.val()||{}).forEach(([R,W])=>Object.entries(W).forEach(([D,Ne])=>k.push({id:D,uid:R,...Ne}))),i(k.sort((R,W)=>W.dataVisita.localeCompare(R.dataVisita)))}),w=Dr($e(He,"acoesColetivas"),N=>o(Object.entries(N.val()||{}).map(([k,R])=>({id:k,...R})).sort((k,R)=>R.data.localeCompare(k.data)))),T=Dr($e(He,"usuarios"),N=>a(Object.entries(N.val()||{}).map(([k,R])=>({uid:k,...R})).sort((k,R)=>k.nome.localeCompare(R.nome))));return()=>{m(),w(),T()}},[]);const y=m=>(!u||m>=u)&&(!c||m<=c),C=E.useMemo(()=>r.filter(m=>y(m.dataVisita)),[r,u,c]),g=E.useMemo(()=>s.filter(m=>y(m.data)),[s,u,c]),f=E.useMemo(()=>_?C.filter(m=>m.uid===_):C,[C,_]);return p.jsxs(p.Fragment,{children:[p.jsx("h1",{children:"Painel do administrador"}),p.jsx("div",{className:"abas",children:Wp.map(m=>p.jsx("button",{className:m===e?"aba ativa":"aba",onClick:()=>n(m),children:m},m))}),(e==="Comparativo"||e==="Todas as visitas")&&p.jsxs("div",{className:"card linha filtro",children:[p.jsxs("label",{children:["De",p.jsx("input",{type:"date",value:u,onChange:m=>d(m.target.value)})]}),p.jsxs("label",{children:["Até",p.jsx("input",{type:"date",value:c,onChange:m=>h(m.target.value)})]}),e==="Todas as visitas"&&p.jsxs("label",{children:["Funcionário",p.jsxs("select",{value:_,onChange:m=>v(m.target.value),children:[p.jsx("option",{value:"",children:"Todos os funcionários"}),l.map(m=>p.jsx("option",{value:m.uid,children:m.nome},m.uid))]})]}),(u||c||_)&&p.jsx("button",{className:"btn btn-sec",onClick:()=>{d(""),h(""),v("")},children:"Limpar filtros"})]}),e==="Comparativo"&&p.jsx(Sx,{visitas:C,acoes:g,usuarios:l}),e==="Todas as visitas"&&p.jsx(Ix,{visitas:f}),e==="Ações coletivas"&&p.jsx(Tx,{acoes:s,uid:t.uid}),e==="Usuários"&&p.jsx(kx,{usuarios:l,visitas:r})]})}function Vp({rotulo:t,partes:e,max:n}){const r=e.reduce((i,s)=>i+s.valor,0);return p.jsxs("div",{className:"barra-linha",children:[p.jsx("span",{className:"barra-rotulo",children:t}),p.jsx("div",{className:"barra-trilho",children:e.map(i=>p.jsx("div",{className:`barra ${i.classe}`,style:{width:`${i.valor/n*100}%`},title:`${i.nome}: ${i.valor}`},i.nome))}),p.jsx("strong",{className:"barra-total",children:r})]})}function Sx({visitas:t,acoes:e,usuarios:n}){const r=n.map(l=>({nome:l.nome,visitas:t.filter(a=>a.uid===l.uid).length})).sort((l,a)=>a.visitas-l.visitas),i=Math.max(1,...r.map(l=>l.visitas+e.length)),s=Object.entries(t.reduce((l,a)=>{const u=a.cidade.trim();return l[u]=(l[u]||0)+1,l},{})).sort((l,a)=>a[1]-l[1]).slice(0,5),o=Math.max(1,...s.map(l=>l[1]));return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"resumo",children:[p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"suave",children:"Visitas no período"}),p.jsx("strong",{className:"grande",children:t.length})]}),p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"suave",children:"Ações coletivas no período"}),p.jsx("strong",{className:"grande",children:e.length})]}),p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"suave",children:"Funcionários cadastrados"}),p.jsx("strong",{className:"grande",children:n.length})]})]}),p.jsxs("section",{className:"card",children:[p.jsx("h2",{children:"Atividades por funcionário"}),p.jsxs("p",{className:"suave legenda",children:[p.jsx("i",{className:"amostra b-visita"})," Visitas feitas ",p.jsx("i",{className:"amostra b-acao"})," Ações coletivas (todos participam)"]}),r.length===0&&p.jsx("p",{className:"suave",children:"Nenhum funcionário cadastrado ainda."}),r.map(l=>p.jsx(Vp,{rotulo:l.nome,max:i,partes:[{nome:"Visitas",valor:l.visitas,classe:"b-visita"},{nome:"Ações coletivas",valor:e.length,classe:"b-acao"}]},l.nome))]}),p.jsxs("section",{className:"card",children:[p.jsx("h2",{children:"Cidades mais visitadas"}),s.length===0&&p.jsx("p",{className:"suave",children:"Nenhuma visita no período."}),s.map(([l,a])=>p.jsx(Vp,{rotulo:l,max:o,partes:[{nome:"Visitas",valor:a,classe:"b-visita"}]},l))]})]})}function Ix({visitas:t}){const e=n=>window.confirm(`Excluir a visita à empresa “${n.empresa}”? Isso não pode ser desfeito.`)&&vy($e(He,`visitas/${n.uid}/${n.id}`));return t.length===0?p.jsx("div",{className:"card vazio",children:"Nenhuma visita encontrada neste período."}):p.jsx("div",{className:"card tabela-wrap",children:p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Data"}),p.jsx("th",{children:"Funcionário"}),p.jsx("th",{children:"Empresa"}),p.jsx("th",{children:"Cidade"}),p.jsx("th",{children:"Objetivo"}),p.jsx("th",{children:"Assuntos tratados"}),p.jsx("th",{})]})}),p.jsx("tbody",{children:t.map(n=>p.jsxs("tr",{children:[p.jsx("td",{children:_l(n.dataVisita)}),p.jsx("td",{children:n.nomeUsuario}),p.jsx("td",{children:n.empresa}),p.jsx("td",{children:n.cidade}),p.jsx("td",{children:n.objetivo}),p.jsx("td",{children:n.assuntos}),p.jsx("td",{children:p.jsx("button",{className:"btn btn-sec",onClick:()=>e(n),children:"Excluir"})})]},n.id))})]})})}function Tx({acoes:t,uid:e}){const[n,r]=E.useState({titulo:"",data:"",descricao:""}),i=l=>r({...n,[l.target.name]:l.target.value});async function s(l){l.preventDefault(),await hc($e(He,"acoesColetivas"),{titulo:n.titulo.trim(),data:n.data,descricao:n.descricao.trim(),criadoPor:e,criadoEm:Date.now()}),r({titulo:"",data:"",descricao:""})}const o=l=>window.confirm(`Excluir a ação “${l.titulo}”?`)&&vy($e(He,`acoesColetivas/${l.id}`));return p.jsxs(p.Fragment,{children:[p.jsxs("form",{className:"card form",onSubmit:s,children:[p.jsx("h2",{children:"Nova ação coletiva"}),p.jsx("p",{className:"suave",children:"Ações em que todos os funcionários participaram, como o Novembro Azul."}),p.jsxs("div",{className:"grade-2",children:[p.jsxs("label",{children:["Nome da ação",p.jsx("input",{name:"titulo",value:n.titulo,onChange:i,required:!0})]}),p.jsxs("label",{children:["Data",p.jsx("input",{type:"date",name:"data",value:n.data,onChange:i,required:!0})]})]}),p.jsxs("label",{children:["Descrição (opcional)",p.jsx("textarea",{name:"descricao",rows:"2",value:n.descricao,onChange:i})]}),p.jsx("div",{children:p.jsx("button",{className:"btn",children:"Adicionar ação"})})]}),t.length===0&&p.jsx("div",{className:"card vazio",children:"Nenhuma ação coletiva cadastrada ainda."}),t.map(l=>p.jsxs("article",{className:"card visita acao",children:[p.jsxs("div",{className:"visita-topo",children:[p.jsxs("div",{children:[p.jsx("h3",{children:l.titulo}),p.jsx("span",{className:"suave",children:_l(l.data)})]}),p.jsx("button",{className:"btn btn-sec",onClick:()=>o(l),children:"Excluir"})]}),l.descricao&&p.jsx("p",{children:l.descricao})]},l.id))]})}function kx({usuarios:t,visitas:e}){return p.jsxs("div",{className:"card tabela-wrap",children:[p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Nome"}),p.jsx("th",{children:"E-mail"}),p.jsx("th",{children:"Tipo"}),p.jsx("th",{children:"Visitas registradas"})]})}),p.jsx("tbody",{children:t.map(n=>p.jsxs("tr",{children:[p.jsx("td",{children:n.nome}),p.jsx("td",{children:n.email}),p.jsx("td",{children:n.administrador?"Administrador":"Funcionário"}),p.jsx("td",{children:e.filter(r=>r.uid===n.uid).length})]},n.uid))})]}),p.jsx("p",{className:"suave",children:"Para tornar alguém administrador, altere o campo “administrador” para true no Realtime Database do Firebase."})]})}function Nx(){return p.jsxs(V0,{children:[p.jsxs(rt,{element:p.jsx(fx,{}),children:[p.jsx(rt,{path:"/login",element:p.jsx(_x,{})}),p.jsx(rt,{path:"/cadastro",element:p.jsx(vx,{})})]}),p.jsx(rt,{element:p.jsx(zp,{}),children:p.jsxs(rt,{element:p.jsx(gx,{}),children:[p.jsx(rt,{path:"/",element:p.jsx(wx,{})}),p.jsx(rt,{path:"/minhas-visitas",element:p.jsx(Ex,{})}),p.jsx(rt,{element:p.jsx(zp,{somenteAdmin:!0}),children:p.jsx(rt,{path:"/admin",element:p.jsx(Cx,{})})})]})}),p.jsx(rt,{path:"*",element:p.jsx(Go,{to:"/",replace:!0})})]})}Ga.createRoot(document.getElementById("root")).render(p.jsx(Zp.StrictMode,{children:p.jsx(Y0,{children:p.jsx(mx,{children:p.jsx(hx,{children:p.jsx(Nx,{})})})})}));
