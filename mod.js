// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t,n;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,C=N.toString,$=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=F;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0;var W="function"==typeof U&&"symbol"==typeof U("foo")&&Z(U,"iterator")&&"symbol"==typeof U.iterator?Symbol.iterator:null,Y=Math.floor,q=Math.sqrt;var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var J="function"==typeof U?U.toStringTag:"";var K=D()?function(r){var e,t,n;if(null==r)return H.call(r);t=r[J],e=Z(r,J);try{r[J]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[J]=t:delete r[J],n}:function(r){return H.call(r)};var Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};var rr=/./;function er(r){return"boolean"==typeof r}var tr=Boolean,nr=Boolean.prototype.toString;var or=D();function ir(r){return"object"==typeof r&&(r instanceof tr||(or?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function ar(r){return er(r)||ir(r)}function cr(){return new Function("return this;")()}M(ar,"isPrimitive",er),M(ar,"isObject",ir);var ur="object"==typeof self?self:null,fr="object"==typeof window?window:null,lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},sr="object"==typeof lr?lr:null,pr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!er(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return cr()}if(pr)return pr;if(ur)return ur;if(fr)return fr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=gr.document&&gr.document.childNodes,yr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;function hr(r){return null!==r&&"object"==typeof r}function wr(r){var e,t,n,o;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return hr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(br,"REGEXP",vr),M(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var mr="function"==typeof rr||"object"==typeof yr||"function"==typeof dr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var _r,Er=Object,Or=Object.getPrototypeOf;_r=jr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=_r;var xr=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Q(r)}(r)&&(e=function(r){return null==r?null:(r=Er(r),Sr(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&jr(e.constructor)&&"[object Function]"===K(e.constructor)&&Z(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function kr(r){return"number"==typeof r}var Ir=Number,Ar=Ir.prototype.toString;var Pr=D();function Vr(r){return"object"==typeof r&&(r instanceof Ir||(Pr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Fr(r){return kr(r)||Vr(r)}M(Fr,"isPrimitive",kr),M(Fr,"isObject",Vr);var Nr=Number.POSITIVE_INFINITY,Cr=Ir.NEGATIVE_INFINITY;function $r(r){return r<Nr&&r>Cr&&Y(e=r)===e;var e}function Rr(r){return kr(r)&&$r(r)}function Br(r){return Vr(r)&&$r(r.valueOf())}function Gr(r){return Rr(r)||Br(r)}function Lr(r){return Rr(r)&&r>=0}function Mr(r){return Br(r)&&r.valueOf()>=0}function Xr(r){return Lr(r)||Mr(r)}function Zr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Ur(r,e){return Tr(e)?Z(e,"iter")&&(r.iter=e.iter,!Lr(e.iter))?new TypeError(Zr("0aX2t,G9","iter",e.iter)):null:new TypeError(Zr("0aX2V,FD",e))}M(Gr,"isPrimitive",Rr),M(Gr,"isObject",Br),M(Xr,"isPrimitive",Lr),M(Xr,"isObject",Mr);function Wr(r){var e,t,n,o,i;if(e={iter:9007199349647256},arguments.length&&(o=Ur(e,r)))throw o;return i=0,M(t={},"next",a),M(t,"return",c),W&&M(t,W,u),t;function a(){return i+=1,n||i>e.iter?{done:!0}:{value:i+Y(.5+q(i)),done:!1}}function c(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function u(){return Wr(e)}}export{Wr as default};
//# sourceMappingURL=mod.js.map
