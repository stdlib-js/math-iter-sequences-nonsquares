"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(o('0aX2t',"iter",r.iter)):null:new TypeError(o('0aX2V',r));}s.exports=h
});var d=v(function(I,c){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/math-base-special-sqrt/dist'),N=f(),P=9007199349647256;function q(t){var r,e,a,n,i;if(r={iter:P},arguments.length&&(n=N(r,t),n))throw n;return i=0,e={},u(e,"next",g),u(e,"return",m),l&&u(e,l,p),e;function g(){return i+=1,a||i>r.iter?{done:!0}:{value:i+w(.5+E(i)),done:!1}}function m(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return q(r)}}c.exports=q
});var S=d();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
