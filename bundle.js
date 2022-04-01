// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterNonSquaresSeq=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=Object.prototype.hasOwnProperty;var b=function(r,e){return null!=r&&m.call(r,e)},h=b;var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&h(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,w=Math.floor,j=Math.sqrt;var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return E&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,_=O;var T=function(r){return _.call(r)},S="function"==typeof Symbol?Symbol.toStringTag:"",x=b,V=S,k=O;var I=T,A=function(r){var e,t,n;if(null==r)return k.call(r);t=r[V],e=x(r,V);try{r[V]=void 0}catch(e){return k.call(r)}return n=k.call(r),e?r[V]=t:delete r[V],n},F=P()?A:I,R=F;var $=Array.isArray?Array.isArray:function(r){return"[object Array]"===R(r)},M=$;var N=function(r){return"object"==typeof r&&null!==r&&!M(r)},C=/./;var B=function(r){return"boolean"==typeof r},G=Boolean.prototype.toString;var L=F,Z=function(r){try{return G.call(r),!0}catch(r){return!1}},W=P();var X=function(r){return"object"==typeof r&&(r instanceof Boolean||(W?Z(r):"[object Boolean]"===L(r)))},q=B,z=X;var U=d,Y=function(r){return q(r)||z(r)},D=X;U(Y,"isPrimitive",B),U(Y,"isObject",D);var H=Y;var J=function(){return new Function("return this;")()},K="object"==typeof self?self:null,Q="object"==typeof window?window:null,rr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},er="object"==typeof rr?rr:null;module.exports=er;var tr=H.isPrimitive,nr=J,ir=K,or=Q,ar=r(Object.freeze({__proto__:null}));var ur=function(r){if(arguments.length){if(!tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return nr()}if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")},cr=ur(),fr=cr.document&&cr.document.childNodes,sr=Int8Array,lr=C,pr=fr,vr=sr;var gr=function(){return"function"==typeof lr||"object"==typeof vr||"function"==typeof pr};var dr=function(){return/^\s*function\s*([^(]*)/i},mr=dr;d(mr,"REGEXP",dr());var br=mr,hr=$;var yr=function(r){return null!==r&&"object"==typeof r};d(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var wr=yr;var jr=F,Er=br.REGEXP,Pr=function(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Or=function(r){var e,t,n;if(("Object"===(t=jr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Er.exec(n.toString()))return e[1]}return Pr(r)?"Buffer":t},_r=Or;var Tr=Or;var Sr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e},xr=function(r){return Tr(r).toLowerCase()},Vr=gr()?xr:Sr;var kr=function(r){return"function"===Vr(r)},Ir=Object.getPrototypeOf;var Ar=function(r){return r.__proto__},Fr=F,Rr=Ar;var $r=function(r){var e=Rr(r);return e||null===e?e:"[object Function]"===Fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Mr=Ir,Nr=$r,Cr=kr(Object.getPrototypeOf)?Mr:Nr;var Br=N,Gr=kr,Lr=function(r){return null==r?null:(r=Object(r),Cr(r))},Zr=b,Wr=F,Xr=Object.prototype;var qr=function(r){var e;return!!Br(r)&&(!(e=Lr(r))||!Zr(r,"constructor")&&Zr(e,"constructor")&&Gr(e.constructor)&&"[object Function]"===Wr(e.constructor)&&Zr(e,"isPrototypeOf")&&Gr(e.isPrototypeOf)&&(e===Xr||function(r){var e;for(e in r)if(!Zr(r,e))return!1;return!0}(r)))},zr=qr;var Ur=function(r){return"number"==typeof r},Yr=Number,Dr=Yr.prototype.toString;var Hr=F,Jr=Yr,Kr=function(r){try{return Dr.call(r),!0}catch(r){return!1}},Qr=P();var re=function(r){return"object"==typeof r&&(r instanceof Jr||(Qr?Kr(r):"[object Number]"===Hr(r)))},ee=Ur,te=re;var ne=d,ie=function(r){return ee(r)||te(r)},oe=re;ne(ie,"isPrimitive",Ur),ne(ie,"isObject",oe);var ae=ie,ue=Number.POSITIVE_INFINITY,ce=Yr.NEGATIVE_INFINITY,fe=w;var se=function(r){return fe(r)===r},le=ue,pe=ce,ve=se;var ge=function(r){return r<le&&r>pe&&ve(r)},de=ae.isPrimitive,me=ge;var be=function(r){return de(r)&&me(r)},he=ae.isObject,ye=ge;var we=function(r){return he(r)&&ye(r.valueOf())},je=be,Ee=we;var Pe=d,Oe=function(r){return je(r)||Ee(r)},_e=we;Pe(Oe,"isPrimitive",be),Pe(Oe,"isObject",_e);var Te=Oe,Se=Te.isPrimitive;var xe=function(r){return Se(r)&&r>=0},Ve=Te.isObject;var ke=function(r){return Ve(r)&&r.valueOf()>=0},Ie=xe,Ae=ke;var Fe=d,Re=function(r){return Ie(r)||Ae(r)},$e=ke;Fe(Re,"isPrimitive",xe),Fe(Re,"isObject",$e);var Me=Re;var Ne=function(r){return"string"==typeof r},Ce=String.prototype.valueOf;var Be=F,Ge=function(r){try{return Ce.call(r),!0}catch(r){return!1}},Le=P();var Ze=function(r){return"object"==typeof r&&(r instanceof String||(Le?Ge(r):"[object String]"===Be(r)))},We=Ne,Xe=Ze;var qe=d,ze=function(r){return We(r)||Xe(r)},Ue=Ze;qe(ze,"isPrimitive",Ne),qe(ze,"isObject",Ue);var Ye=ze,De=se;var He=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&De(r.length)&&r.length>=0&&r.length<=9007199254740991};var Je=function(r){return r!=r},Ke=ae.isPrimitive,Qe=Je;var rt=function(r){return Ke(r)&&Qe(r)},et=ae.isObject,tt=Je;var nt=function(r){return et(r)&&tt(r.valueOf())},it=rt,ot=nt;var at=d,ut=function(r){return it(r)||ot(r)},ct=nt;at(ut,"isPrimitive",rt),at(ut,"isObject",ct);var ft=He,st=Te.isPrimitive,lt=Ye.isPrimitive,pt=ut.isPrimitive;var vt=function(r,e,t){var n,i,o;if(!ft(r)&&!lt(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!st(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(lt(r)){if(!lt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,pt(e)){for(o=i;o<n;o++)if(pt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},gt=vt,dt=Ye.isPrimitive;var mt=function(r){if(!dt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},bt=Ye.isPrimitive;var ht=function(r){if(!bt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},yt=mt,wt=ht,jt=Ye.isPrimitive;var Et=function(r){return jt(r)&&r===wt(r)&&r!==yt(r)},Pt=ue,Ot=ce;var _t=function(r){return r==r&&r>Ot&&r<Pt},Tt=Me.isPrimitive,St=Ye.isPrimitive;var xt=function(r,e){var t,n;if(!St(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Tt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Vt=Te.isPrimitive,kt=Ye.isPrimitive;var It=function(r,e,t){var n,i;if(!kt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Vt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},At=xt,Ft=It;var Rt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ft(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+At("0",i):At("0",i)+r,n&&(r="-"+r)),r},$t=Et,Mt=ht,Nt=mt,Ct=_t,Bt=ae.isPrimitive,Gt=Rt;var Lt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ct(n)){if(!Bt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Gt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Gt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=$t(r.specifier)?Mt(t):Nt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Zt=Ye.isPrimitive,Wt=/[-\/\\^$*+?.()|[\]{}]/g;var Xt=function(r){var e,t;if(!Zt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Wt,"\\$&"):(e=(e=r.substring(1,t)).replace(Wt,"\\$&"),r=r[0]+e+r.substring(t))},qt=RegExp.prototype.exec;var zt=F,Ut=function(r){try{return qt.call(r),!0}catch(r){return!1}},Yt=P();var Dt=Xt,Ht=kr,Jt=Ye.isPrimitive,Kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Yt?Ut(r):"[object RegExp]"===zt(r)))};var Qt=Et,rn=ht,en=mt,tn=function(r,e,t){if(!Jt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Jt(e))e=Dt(e),e=new RegExp(e,"g");else if(!Kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Jt(t)&&!Ht(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},nn=_t,on=ae.isPrimitive,an=function(r){return Math.abs(r)},un=/e\+(\d)$/,cn=/e-(\d)$/,fn=/^(\d+)$/,sn=/^(\d+)e/,ln=/\.0$/,pn=/\.0*e/,vn=/(\..*[^0])0*e/;var gn=function(r){var e,t,n=parseFloat(r.arg);if(!nn(n)){if(!on(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":an(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=tn(t,vn,"$1e"),t=tn(t,pn,"e"),t=tn(t,ln,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=tn(t,un,"e+0$1"),t=tn(t,cn,"e-0$1"),r.alternate&&(t=tn(t,fn,"$1."),t=tn(t,sn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Qt(r.specifier)?rn(t):en(t)},dn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var mn=xt;var bn=Ye.isPrimitive,hn=gt,yn=Je,wn=Lt,jn=gn,En=function(r){var e,t,n,i,o;for(e=0,n=[],o=dn.exec(r);o;)(t=r.slice(e,dn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=dn.lastIndex,o=dn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Pn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+mn(" ",n):mn(" ",n)+r},On=Rt,_n=String.fromCharCode;var Tn=function(r){var e,t,n,i,o,a,u,c,f;if(!bn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=En(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],bn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!hn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,yn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,yn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=wn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!yn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=yn(o)?String(n.arg):_n(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=jn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=On(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Pn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Sn=zr,xn=b,Vn=Me.isPrimitive,kn=Tn;var In=d,An=y,Fn=w,Rn=j,$n=function(r,e){return Sn(e)?xn(e,"iter")&&(r.iter=e.iter,!Vn(e.iter))?new TypeError(kn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(kn("invalid argument. Options argument must be an object. Value: `%s`.",e))},Mn=9007199349647256;var Nn=function r(e){var t,n,i,o,a;if(t={iter:Mn},arguments.length&&(o=$n(t,e)))throw o;return a=0,In(n={},"next",u),In(n,"return",c),An&&In(n,An,f),n;function u(){return a+=1,i||a>t.iter?{done:!0}:{value:a+Fn(.5+Rn(a)),done:!1}}function c(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return r(t)}};return Nn}));
//# sourceMappingURL=bundle.js.map
