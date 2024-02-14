// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function m(e,t){return s(t)?i(t,"iter")&&(e.iter=t.iter,!o(t.iter))?new TypeError(d("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",t))}function l(s){var i,o,d,p,a;if(i={iter:9007199349647256},arguments.length&&(p=m(i,s)))throw p;return a=0,e(o={},"next",j),e(o,"return",v),t&&e(o,t,h),o;function j(){return a+=1,d||a>i.iter?{done:!0}:{value:a+n(.5+r(a)),done:!1}}function v(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return l(i)}}export{l as default};
//# sourceMappingURL=index.mjs.map