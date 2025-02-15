"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.on=on,exports.emit=emit,exports.once=once,exports.unsubscribeOf=unsubscribeOf;/**
 * @description subscribes repo
 * @private
 */var subscribes=new Map;/**
 * @description add listener
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */function on(a,b){return subscribes.has(a)||subscribes.set(a,[]),subscribes.get(a).push(b),function(){return unsubscribeOf(a,b)}}/**
 * @description like "on" but just run once
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */function once(a,b){var c=on(a,function(){b.apply(void 0,arguments),c()});return c}/**
 * @description dispatch all listener
 * @public
 * @param {string} name name listener
 * @param {any} arg argument for send to on(...)
 * @returns {array} refunds all listen can return data
 */function emit(a,b){var c=[];return subscribes.has(a)&&subscribes.get(a).forEach(function(a){a&&c.push(a(b))}),c}/**
 * @description unsubscribe listener
 * @public
 * @param {string} name name listener
 * @param {function} func the function that you want to unsubscribe If not defined, all subscriptions will be canceled
 * @returns {undefined} nothing
 */function unsubscribeOf(a,b){b?subscribes.set(a,subscribes.get(a).filter(function(a){return a!==b})):subscribes.clear(a)}