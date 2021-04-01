/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ajax.js":
/*!*********************!*\
  !*** ./src/Ajax.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Ajax; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ajax = /*#__PURE__*/function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }

  _createClass(Ajax, [{
    key: "removeItem",
    value: function removeItem(id) {
      return this.modifyToDo('delete', {
        id: id
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, isChecked) {
      return this.modifyToDo('update', {
        id: id,
        isChecked: isChecked
      });
    }
  }, {
    key: "updateContent",
    value: function updateContent(id, content) {
      return this.modifyToDo('update', {
        id: id,
        content: content
      });
    }
  }, {
    key: "createItem",
    value: function createItem(id, content) {
      return this.modifyToDo('create', {
        id: id,
        content: content
      });
    }
  }, {
    key: "modifyToDo",
    value: function () {
      var _modifyToDo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(actionType, itemData) {
        var modifyRequest, itemsList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemData = _objectSpread({
                  actionType: actionType
                }, itemData);
                _context.next = 3;
                return fetch(todoApp.ajaxUrl, {
                  method: 'POST',
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: this.buildQuery(itemData)
                });

              case 3:
                modifyRequest = _context.sent;
                _context.next = 6;
                return modifyRequest.json();

              case 6:
                itemsList = _context.sent;
                return _context.abrupt("return", itemsList);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function modifyToDo(_x, _x2) {
        return _modifyToDo.apply(this, arguments);
      }

      return modifyToDo;
    }()
  }, {
    key: "buildQuery",
    value: function buildQuery(queryArguments) {
      queryArguments = Object.assign({
        content: '',
        isChecked: false,
        id: ''
      }, queryArguments);
      return new URLSearchParams(_objectSpread({
        action: 'process_todo',
        nonce: todoApp.nonce,
        postID: todoApp.currentPost
      }, queryArguments));
    }
  }]);

  return Ajax;
}();



/***/ }),

/***/ "./src/Form.js":
/*!*********************!*\
  !*** ./src/Form.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var _Ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ajax */ "./src/Ajax.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/Item.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Form = function Form(formEl) {
  var _this = this;

  _classCallCheck(this, Form);

  _defineProperty(this, "formHandler", function (e) {
    e.preventDefault();
    var formData = new FormData(_this.formEl);
    var ajax = new _Ajax__WEBPACK_IMPORTED_MODULE_0__.default();
    var todo = document.getElementById('todo');
    var id = "item-".concat(todo.childElementCount);
    ajax.createItem(id, formData.get('new-item')).then(function (result) {
      if (result.success) {
        var item = _Item__WEBPACK_IMPORTED_MODULE_1__.default.createHtmlElement(result.data.content, result.data.id);
        todo.appendChild(item.toString());
        _this.formEl.firstElementChild.value = '';
      }
    });
  });

  this.formEl = formEl;
  this.formEl.addEventListener('submit', this.formHandler);
};



/***/ }),

/***/ "./src/Item.js":
/*!*********************!*\
  !*** ./src/Item.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var _Ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ajax */ "./src/Ajax.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Item = /*#__PURE__*/function () {
  function Item(itemEl) {
    var _this = this;

    _classCallCheck(this, Item);

    _defineProperty(this, "ajax", new _Ajax__WEBPACK_IMPORTED_MODULE_0__.default());

    _defineProperty(this, "removeItem", function () {
      _this.ajax.removeItem(_this.itemEl.id);

      _this.itemEl.remove();
    });

    _defineProperty(this, "updateItem", function () {
      _this.ajax.updateContent(_this.itemEl.id, _this.content.innerText);
    });

    _defineProperty(this, "doneItem", function () {
      _this.ajax.updateItem(_this.itemEl.id, _this.checkbox.checked);
    });

    this.itemEl = itemEl;
    this.button = this.itemEl.querySelector('button');
    this.checkbox = this.itemEl.querySelector('input[type="checkbox"]');
    this.content = this.itemEl.querySelector('span');
    this.listenUpdate();
    this.listenRemove();
    this.listenDone();
  }

  _createClass(Item, [{
    key: "listenUpdate",
    value: function listenUpdate() {
      this.content.addEventListener('focusout', this.updateItem);
    }
  }, {
    key: "listenRemove",
    value: function listenRemove() {
      this.button.addEventListener('click', this.removeItem);
    }
  }, {
    key: "listenDone",
    value: function listenDone() {
      this.checkbox.addEventListener('change', this.doneItem);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.itemEl;
    }
  }], [{
    key: "createHtmlElement",
    value: function createHtmlElement(content, id) {
      var isChecked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var li = document.createElement('li');
      li.id = id;
      li.className = 'todo__item';
      var label = document.createElement('label');
      label.className = 'todo__faux-checkbox';
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isChecked;
      checkbox.className = 'screen-reader-text';
      var span = document.createElement('span');
      var itemContent = document.createTextNode(content);
      span.contentEditable = true;
      span.appendChild(itemContent);
      span.className = 'todo__content';
      var button = document.createElement('button');
      button.appendChild(document.createTextNode('❌'));
      button.setAttribute('aria-label', 'Remove');
      button.className = 'todo__remove';
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(span);
      li.appendChild(button);
      return new Item(li);
    }
  }]);

  return Item;
}();



/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToDo; }
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/Item.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/Form.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ToDo = /*#__PURE__*/function () {
  function ToDo(el) {
    _classCallCheck(this, ToDo);

    this.el = el;
    this.form = new _Form__WEBPACK_IMPORTED_MODULE_1__.default(el.getElementsByTagName('form')[0]);
    this.itemsList = el.querySelectorAll('li');
    this.initialize();
  }

  _createClass(ToDo, [{
    key: "initialize",
    value: function initialize() {
      this.itemsList.forEach(function (item, i) {
        if (i === 0) {
          return;
        }

        new _Item__WEBPACK_IMPORTED_MODULE_0__.default(item);
      });
    }
  }, {
    key: "applyUpdate",
    value: function applyUpdate() {}
  }, {
    key: "getItems",
    value: function getItems() {}
  }]);

  return ToDo;
}();



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


var todo = document.getElementById('todo');
new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(todo);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvLi9zcmMvQWpheC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvLi9zcmMvSXRlbS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXBsZS10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS10b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBamF4IiwiaWQiLCJtb2RpZnlUb0RvIiwiaXNDaGVja2VkIiwiY29udGVudCIsImFjdGlvblR5cGUiLCJpdGVtRGF0YSIsImZldGNoIiwidG9kb0FwcCIsImFqYXhVcmwiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiYnVpbGRRdWVyeSIsIm1vZGlmeVJlcXVlc3QiLCJqc29uIiwiaXRlbXNMaXN0IiwicXVlcnlBcmd1bWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJVUkxTZWFyY2hQYXJhbXMiLCJhY3Rpb24iLCJub25jZSIsInBvc3RJRCIsImN1cnJlbnRQb3N0IiwiRm9ybSIsImZvcm1FbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhamF4IiwidG9kbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNyZWF0ZUl0ZW0iLCJnZXQiLCJ0aGVuIiwicmVzdWx0Iiwic3VjY2VzcyIsIml0ZW0iLCJJdGVtIiwiZGF0YSIsImFwcGVuZENoaWxkIiwidG9TdHJpbmciLCJmaXJzdEVsZW1lbnRDaGlsZCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1IYW5kbGVyIiwiaXRlbUVsIiwicmVtb3ZlSXRlbSIsInJlbW92ZSIsInVwZGF0ZUNvbnRlbnQiLCJpbm5lclRleHQiLCJ1cGRhdGVJdGVtIiwiY2hlY2tib3giLCJjaGVja2VkIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImxpc3RlblVwZGF0ZSIsImxpc3RlblJlbW92ZSIsImxpc3RlbkRvbmUiLCJkb25lSXRlbSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImxhYmVsIiwidHlwZSIsInNwYW4iLCJpdGVtQ29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiY29udGVudEVkaXRhYmxlIiwic2V0QXR0cmlidXRlIiwiVG9EbyIsImVsIiwiZm9ybSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsImluaXRpYWxpemUiLCJmb3JFYWNoIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7O1dBRXBCLG9CQUFZQyxFQUFaLEVBQWlCO0FBQ2hCLGFBQU8sS0FBS0MsVUFBTCxDQUFpQixRQUFqQixFQUEyQjtBQUFFRCxVQUFFLEVBQUVBO0FBQU4sT0FBM0IsQ0FBUDtBQUNBOzs7V0FFRCxvQkFBWUEsRUFBWixFQUFnQkUsU0FBaEIsRUFBNEI7QUFDM0IsYUFBTyxLQUFLRCxVQUFMLENBQWlCLFFBQWpCLEVBQTJCO0FBQUVELFVBQUUsRUFBRUEsRUFBTjtBQUFVRSxpQkFBUyxFQUFFQTtBQUFyQixPQUEzQixDQUFQO0FBQ0E7OztXQUVELHVCQUFlRixFQUFmLEVBQW1CRyxPQUFu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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBLElBQU1ULElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXlCLE1BQXpCLENBQWI7QUFFQSxJQUFJd0MsMENBQUosQ0FBUzFDLElBQVQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheCB7XG5cblx0cmVtb3ZlSXRlbSggaWQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kaWZ5VG9EbyggJ2RlbGV0ZScsIHsgaWQ6IGlkIH0gKTtcblx0fVxuXG5cdHVwZGF0ZUl0ZW0oIGlkLCBpc0NoZWNrZWQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kaWZ5VG9EbyggJ3VwZGF0ZScsIHsgaWQ6IGlkLCBpc0NoZWNrZWQ6IGlzQ2hlY2tlZCB9KVxuXHR9XG5cblx0dXBkYXRlQ29udGVudCggaWQsIGNvbnRlbnQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kaWZ5VG9EbyggJ3VwZGF0ZScsIHsgaWQ6IGlkLCBjb250ZW50OiBjb250ZW50IH0pXG5cdH1cblxuXHRjcmVhdGVJdGVtKCBpZCwgY29udGVudCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RpZnlUb0RvKCAnY3JlYXRlJywgeyBpZDogaWQsIGNvbnRlbnQ6IGNvbnRlbnQgfSApXG5cdH1cblxuXHRhc3luYyBtb2RpZnlUb0RvKCBhY3Rpb25UeXBlLCBpdGVtRGF0YSApIHtcblx0XHRpdGVtRGF0YSA9IHtcblx0XHRcdGFjdGlvblR5cGU6IGFjdGlvblR5cGUsXG5cdFx0XHQuLi5pdGVtRGF0YSxcblx0XHR9XG5cdFx0bGV0IG1vZGlmeVJlcXVlc3QgPSBhd2FpdCBmZXRjaChcblx0XHRcdHRvZG9BcHAuYWpheFVybCxcblx0XHRcdHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IHRoaXMuYnVpbGRRdWVyeSggaXRlbURhdGEgKVxuXHRcdFx0fVxuXHRcdClcblxuXHRcdGxldCBpdGVtc0xpc3QgPSBhd2FpdCBtb2RpZnlSZXF1ZXN0Lmpzb24oKVxuXHRcdHJldHVybiBpdGVtc0xpc3Rcblx0fVxuXG5cdGJ1aWxkUXVlcnkoIHF1ZXJ5QXJndW1lbnRzICkge1xuXHRcdHF1ZXJ5QXJndW1lbnRzID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdHtcblx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdGlkOiAnJyxcblx0XHRcdH0sXG5cdFx0XHRxdWVyeUFyZ3VtZW50c1xuXHRcdClcblxuXHRcdHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKCB7XG5cdFx0XHRhY3Rpb246ICdwcm9jZXNzX3RvZG8nLFxuXHRcdFx0bm9uY2U6IHRvZG9BcHAubm9uY2UsXG5cdFx0XHRwb3N0SUQ6IHRvZG9BcHAuY3VycmVudFBvc3QsXG5cdFx0XHQuLi5xdWVyeUFyZ3VtZW50c1xuXHRcdH0gKVxuXHR9XG5cbn1cbiIsImltcG9ydCBBamF4IGZyb20gJy4vQWpheCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcblx0Y29uc3RydWN0b3IoIGZvcm1FbCApIHtcblx0XHR0aGlzLmZvcm1FbCA9IGZvcm1FbDtcblxuXHRcdHRoaXMuZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoICdzdWJtaXQnLCB0aGlzLmZvcm1IYW5kbGVyICk7XG5cdH1cblxuXHRmb3JtSGFuZGxlciA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSggdGhpcy5mb3JtRWwgKTtcblxuXHRcdGxldCBhamF4ID0gbmV3IEFqYXgoKTtcblx0XHRjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0b2RvJyApXG5cdFx0bGV0IGlkID0gYGl0ZW0tJHt0b2RvLmNoaWxkRWxlbWVudENvdW50fWA7XG5cblx0XHRhamF4LmNyZWF0ZUl0ZW0oIGlkLCBmb3JtRGF0YS5nZXQoJ25ldy1pdGVtJykgKVxuXHRcdFx0XHQudGhlbiggcmVzdWx0ID0+IHtcblx0XHRcdFx0XHRpZiAoIHJlc3VsdC5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRsZXQgaXRlbSA9IEl0ZW0uY3JlYXRlSHRtbEVsZW1lbnQoIHJlc3VsdC5kYXRhLmNvbnRlbnQsIHJlc3VsdC5kYXRhLmlkIClcblx0XHRcdFx0XHRcdFx0dG9kby5hcHBlbmRDaGlsZCggaXRlbS50b1N0cmluZygpIClcblx0XHRcdFx0XHRcdFx0dGhpcy5mb3JtRWwuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUgPSAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApXG5cdH1cbn1cbiIsImltcG9ydCBBamF4IGZyb20gJy4vQWpheCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuXG5cdGFqYXggPSBuZXcgQWpheCgpO1xuXG5cdGNvbnN0cnVjdG9yKCBpdGVtRWwgKSB7XG5cdFx0dGhpcy5pdGVtRWwgPSBpdGVtRWw7XG5cblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMuaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoICdidXR0b24nICk7XG5cdFx0dGhpcy5jaGVja2JveCA9IHRoaXMuaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nICk7XG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5pdGVtRWwucXVlcnlTZWxlY3RvciggJ3NwYW4nICk7XG5cblx0XHR0aGlzLmxpc3RlblVwZGF0ZSgpXG5cdFx0dGhpcy5saXN0ZW5SZW1vdmUoKVxuXHRcdHRoaXMubGlzdGVuRG9uZSgpXG5cdH1cblxuXHRsaXN0ZW5VcGRhdGUoKSB7XG5cdFx0dGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIHRoaXMudXBkYXRlSXRlbSApXG5cdH1cblxuXHRsaXN0ZW5SZW1vdmUoKSB7XG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5yZW1vdmVJdGVtIClcblx0fVxuXG5cdGxpc3RlbkRvbmUoKSB7XG5cdFx0dGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5kb25lSXRlbSApXG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtRWw7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlSHRtbEVsZW1lbnQoIGNvbnRlbnQsIGlkLCBpc0NoZWNrZWQgPSBmYWxzZSApIHtcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsaScgKVxuXHRcdGxpLmlkID0gaWQ7XG5cdFx0bGkuY2xhc3NOYW1lID0gJ3RvZG9fX2l0ZW0nXG5cblx0XHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKVxuXHRcdGxhYmVsLmNsYXNzTmFtZSA9ICd0b2RvX19mYXV4LWNoZWNrYm94J1xuXG5cdFx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnIClcblx0XHRjaGVja2JveC50eXBlID0gJ2NoZWNrYm94Jztcblx0XHRjaGVja2JveC5jaGVja2VkID0gaXNDaGVja2VkO1xuXHRcdGNoZWNrYm94LmNsYXNzTmFtZSA9ICdzY3JlZW4tcmVhZGVyLXRleHQnXG5cblx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nIClcblx0XHRjb25zdCBpdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCBjb250ZW50IClcblx0XHRzcGFuLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG5cdFx0c3Bhbi5hcHBlbmRDaGlsZCggaXRlbUNvbnRlbnQgKVxuXHRcdHNwYW4uY2xhc3NOYW1lID0gJ3RvZG9fX2NvbnRlbnQnXG5cblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApXG5cdFx0YnV0dG9uLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggJ+KdjCcgKSApXG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnUmVtb3ZlJyApO1xuXHRcdGJ1dHRvbi5jbGFzc05hbWUgPSAndG9kb19fcmVtb3ZlJ1xuXG5cdFx0bGkuYXBwZW5kQ2hpbGQoIGNoZWNrYm94IClcblx0XHRsaS5hcHBlbmRDaGlsZCggbGFiZWwgKVxuXHRcdGxpLmFwcGVuZENoaWxkKCBzcGFuIClcblx0XHRsaS5hcHBlbmRDaGlsZCggYnV0dG9uIClcblxuXHRcdHJldHVybiBuZXcgSXRlbSggbGkgKVxuXHR9XG5cblx0cmVtb3ZlSXRlbSA9ICgpID0+IHtcblx0XHR0aGlzLmFqYXgucmVtb3ZlSXRlbSggdGhpcy5pdGVtRWwuaWQgKVxuXHRcdHRoaXMuaXRlbUVsLnJlbW92ZSgpXG5cdH1cblxuXHR1cGRhdGVJdGVtID0gKCkgPT4ge1xuXHRcdHRoaXMuYWpheC51cGRhdGVDb250ZW50KCB0aGlzLml0ZW1FbC5pZCwgdGhpcy5jb250ZW50LmlubmVyVGV4dCApXG5cdH1cblxuXHRkb25lSXRlbSA9ICgpID0+IHtcblx0XHR0aGlzLmFqYXgudXBkYXRlSXRlbSggdGhpcy5pdGVtRWwuaWQsIHRoaXMuY2hlY2tib3guY2hlY2tlZCApXG5cdH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG5cblx0Y29uc3RydWN0b3IoIGVsICkge1xuXHRcdHRoaXMuZWwgPSBlbDtcblxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtKCBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdIClcblxuXHRcdHRoaXMuaXRlbXNMaXN0ID0gZWwucXVlcnlTZWxlY3RvckFsbCggJ2xpJyApO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMuaXRlbXNMaXN0LmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG5cdFx0XHRpZiAoIGkgPT09IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bmV3IEl0ZW0oIGl0ZW0gKVxuXHRcdH0pXG5cdH1cblxuXHRhcHBseVVwZGF0ZSgpIHt9XG5cblx0Z2V0SXRlbXMoKSB7fVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvRG8gZnJvbSAnLi9Ub2RvJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgdG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndG9kbycgKTtcblxubmV3IFRvRG8odG9kbylcbiJdLCJzb3VyY2VSb290IjoiIn0=