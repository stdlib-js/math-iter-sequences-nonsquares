// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function m(l){var p,j,a,h,f;if(p={iter:9007199349647256},arguments.length&&(h=function(e,t){return n(t)?i(t,"iter")&&(e.iter=t.iter,!o(t.iter))?new TypeError(d("0aX2t","iter",t.iter)):null:new TypeError(d("0aX2V",t))}(p,l),h))throw h;return f=0,e(j={},"next",(function(){if(f+=1,a||f>p.iter)return{done:!0};return{value:f+r(.5+s(f)),done:!1}})),e(j,"return",(function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(j,t,(function(){return m(p)})),j}export{m as default};
//# sourceMappingURL=index.mjs.map
