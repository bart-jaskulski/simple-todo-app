!function(){"use strict";function e(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var c=new WeakSet,a=new WeakSet,u=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a.add(this),c.add(this),o(this,"CONTENT_TYPE","application/x-www-form-urlencoded"),o(this,"ACTION","process_todo"),o(this,"NONCE",todoApp.nonce),o(this,"POST_ID",todoApp.currentPost),o(this,"AJAX_URL",todoApp.ajaxUrl)}var u,f,s,p;return u=t,(f=[{key:"removeItem",value:function(e){return this.modifyToDo({actionType:"delete",id:e})}},{key:"updateItem",value:function(e,t){return this.modifyToDo(n({actionType:"update",id:e},t))}},{key:"createItem",value:function(e,t){return this.modifyToDo({actionType:"create",id:e,content:t})}},{key:"modifyToDo",value:(s=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(this,c,l).call(this,t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})),p=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=s.apply(t,n);function c(t){e(i,r,o,c,a,"next",t)}function a(t){e(i,r,o,c,a,"throw",t)}c(void 0)}))},function(e){return p.apply(this,arguments)})}])&&r(u.prototype,f),t}();function l(e){return fetch(this.AJAX_URL,{method:"POST",credentials:"same-origin",headers:{"Content-Type":this.CONTENT_TYPE},body:i(this,a,f).call(this,e)})}function f(e){return e=Object.assign({actionType:"",id:"",content:"",isChecked:!1},e),new URLSearchParams(n({action:this.ACTION,nonce:this.NONCE,postID:this.POST_ID},e))}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"container",document.getElementById("todo")),p(this,"ajaxRequest",new u),this.itemEl=t}var t,n;return t=e,(n=[{key:"toString",value:function(){return this.itemEl}}])&&s(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v(t);if(n){var o=v(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)});function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),w(b(t=r.call(this,e)),"removeItem",(function(){t.ajaxRequest.removeItem(t.itemEl.id),t.itemEl.remove()})),w(b(t),"updateItem",(function(){t.ajaxRequest.updateItem(t.itemEl.id,{content:t.content.innerText})})),w(b(t),"doneItem",(function(){t.ajaxRequest.updateItem(t.itemEl.id,{isChecked:t.checkbox.checked})})),t.button=t.itemEl.querySelector("button"),t.checkbox=t.itemEl.querySelector('input[type="checkbox"]'),t.content=t.itemEl.querySelector("span"),t.button.addEventListener("click",t.removeItem),t.checkbox.addEventListener("change",t.doneItem),t.content.addEventListener("focusout",t.updateItem),t}return o}(d);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}(e,t),n}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"createHtmlElement",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=g(e,e,P).call(e,n),i=g(e,e,T).call(e,n,r),c=g(e,e,k).call(e,n),a=g(e,e,_).call(e,n,t),u=g(e,e,x).call(e);return o.appendChild(i),o.appendChild(c),o.appendChild(a),o.appendChild(u),new O(o)}}],null&&E(t.prototype,null),n&&E(t,n),e}();function P(e){var t=document.createElement("li");return t.id=e,t.className="todo__item",t}function T(e,t){var n=document.createElement("input");return n.type="checkbox",n.id="checkbox-".concat(e),n.checked=t,n.className="screen-reader-text",n}function k(e){var t=document.createElement("label");return t.htmlFor="checkbox-".concat(e),t.className="todo__faux-checkbox",t.setAttribute("aria-describedby","todo-content-".concat(e)),t}function _(e,t){var n=document.createElement("span"),r=document.createTextNode(t);return n.contentEditable=!0,n.id="todo-content-".concat(e),n.className="todo__content",n.appendChild(r),n}function x(){var e=document.createElement("button");return e.appendChild(document.createTextNode("❌")),e.setAttribute("aria-label","Remove"),e.className="todo__remove",e}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var A=new WeakSet,q=new WeakMap,L=new WeakSet,B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=N(t);if(n){var o=N(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return R(this,e)});function o(e){var t,n,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=r.call(this,e),L.add(I(t)),A.add(I(t)),c=function(e){e.preventDefault();var n,r=new FormData(t.itemEl),o=D(I(t),A,W).call(I(t));t.ajaxRequest.createItem(o,r.get("new-item")).then(function(e,t){return t.get?t.get.call(e):t.value}(n=I(t),function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(n,q)))},(i="formHandler")in(n=I(t))?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c,q.set(I(t),{writable:!0,value:function(e){var n=e.success,r=e.data;if(n){var o=j.createHtmlElement(r.content,r.id);t.container.appendChild(o.toString()),D(I(t),L,H).call(I(t))}}}),t.itemEl.addEventListener("submit",t.formHandler),t}return o}(d);function W(){if(this.container.childElementCount<=1)return"item-1";var e=this.container.lastElementChild.id,t=Number(e.split("-")[1]);return"item-".concat(++t)}function H(){this.itemEl.firstElementChild.value=""}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.itemsList=t.querySelectorAll("li"),this.form=new B(t.getElementsByTagName("form")[0]),this.initialize()}var t,n;return t=e,(n=[{key:"initialize",value:function(){this.itemsList.forEach((function(e,t){0!==t&&new O(e)}))}}])&&U(t.prototype,n),e}())(document.getElementById("todo"))}();