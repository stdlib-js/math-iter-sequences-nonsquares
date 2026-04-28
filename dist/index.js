"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return x(r)?y(r,"iter")&&(e.iter=r.iter,!O(r.iter))?new TypeError(o('0aX2t',"iter",r.iter)):null:new TypeError(o('0aX2V',r));}s.exports=h
});var d=v(function(I,c){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/math-base-special-sqrt/dist'),N=f(),P=9007199349647256;function q(e){var r,t,a,n,i;if(r={iter:P},arguments.length&&(n=N(r,e),n))throw n;return i=0,t={},u(t,"next",g),u(t,"return",m),l&&u(t,l,p),t;function g(){return i+=1,a||i>r.iter?{done:!0}:{value:i+w(.5+E(i)),done:!1}}function m(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return q(r)}}c.exports=q
});var S=d();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
