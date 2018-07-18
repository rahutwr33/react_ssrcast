/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var REGISTER_USER = exports.REGISTER_USER = 'register_user';
var registerUser = exports.registerUser = function registerUser(data) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.post('signup', data);

            case 2:
              res = _context.sent;


              dispatch({
                type: REGISTER_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser(data) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var SIGNIN = exports.SIGNIN = 'signin';
var signin = exports.signin = function signin(data) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.post('signin', data);

            case 2:
              res = _context3.sent;


              dispatch({
                type: SIGNIN,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var LOGOUTUSER = exports.LOGOUTUSER = 'logoutuser';
var logoutuser = exports.logoutuser = function logoutuser(data) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.post('/logout', { cookies: data });

            case 2:
              res = _context4.sent;


              dispatch({
                type: LOGOUTUSER,
                payload: res
              });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var META = exports.META = 'meta';
var getmeta = exports.getmeta = function getmeta(path) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return api.get('/meta?path=' + path);

            case 2:
              res = _context5.sent;


              dispatch({
                type: META,
                payload: res.data
              });

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var ADDBLOG = exports.ADDBLOG = 'addblog';
var addblog = exports.addblog = function addblog(data) {
  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return api.post('/addblog', data);

            case 2:
              res = _context6.sent;


              dispatch({
                type: ADDBLOG,
                payload: res
              });

            case 4:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var GETBLOG = exports.GETBLOG = 'getblog';
var getblog = exports.getblog = function getblog(page) {
  return function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return api.get('/getblog?page=' + page);

            case 2:
              res = _context7.sent;


              dispatch({
                type: GETBLOG,
                payload: res
              });

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var GET_SINGLE_BLOG = exports.GET_SINGLE_BLOG = 'getSingleblog';
var getSingleblog = exports.getSingleblog = function getSingleblog(data) {
  return function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return api.get('/getSingleblog?ID=' + data);

            case 2:
              res = _context8.sent;


              dispatch({
                type: GET_SINGLE_BLOG,
                payload: res
              });

            case 4:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x22, _x23, _x24) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var DELETE_BLOG = exports.DELETE_BLOG = 'deleteblog';
var deleteblog = exports.deleteblog = function deleteblog(data) {
  return function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return api.get('/deleteblog?ID=' + data);

            case 2:
              res = _context9.sent;


              dispatch({
                type: DELETE_BLOG,
                payload: res
              });

            case 4:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    return function (_x25, _x26, _x27) {
      return _ref9.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _homePage = __webpack_require__(21);

var _homePage2 = _interopRequireDefault(_homePage);

var _registerPage = __webpack_require__(23);

var _registerPage2 = _interopRequireDefault(_registerPage);

var _loginPage = __webpack_require__(22);

var _loginPage2 = _interopRequireDefault(_loginPage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _dashboardpage = __webpack_require__(19);

var _dashboardpage2 = _interopRequireDefault(_dashboardpage);

var _addBlog = __webpack_require__(17);

var _addBlog2 = _interopRequireDefault(_addBlog);

var _editBlog = __webpack_require__(20);

var _editBlog2 = _interopRequireDefault(_editBlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {

  routes: [_extends({}, _homePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _registerPage2.default, {
    path: '/register'
  }), _extends({}, _loginPage2.default, {
    path: '/login'
  }), _extends({}, _dashboardpage2.default, {
    path: '/dashboard'
  }), _extends({}, _addBlog2.default, {
    path: '/addblog'
  }), _extends({}, _editBlog2.default, {
    path: "/editblog"

  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(29);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:8080/api/',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(42);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(44);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(3);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n      <meta name="viewport" content="width=device-width, initial-scale=1"\n      <meta name="google-site-verification" content="oDJ04-rmm_oEAL4HXRgd8hS-W98r_qYHnrtPXhaOFLc" />\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.bundle.min.js" integrity="sha384-lZmvU/TzxoIQIOD9yQDEpvxp6wEU32Fy0ckUgOH4EIlMOCdR823rg4+3gWRwnX1M" crossorigin="anonymous"></script>\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>\n      \n        </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _universalCookie = __webpack_require__(6);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cookies = new _universalCookie2.default();

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { props: this.props }),
        (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
      );
    }
  }]);

  return App;
}(_react.Component);

;
function mapStateToProps(state) {

  return state;
}

exports.default = {
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)(cookies.get('token')));
  },
  component: (0, _reactRedux.connect)(mapStateToProps)(App)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _universalCookie = __webpack_require__(6);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cookies = new _universalCookie2.default();

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.logout = _this.logout.bind(_this);

    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var auth = nextProps.auth,
          history = nextProps.history,
          admin = nextProps.admin,
          props = nextProps.props;


      if (admin && admin.logout && admin.logout.success) {
        location.replace('/');
      }
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.logoutuser(cookies.get('token'));
      cookies.remove('token');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          admin = _props.admin,
          auth = _props.auth;


      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper', style: Style.formstyle },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'brand-logo' },
            'Article'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'right' },
            !auth.success && _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/register' },
                'Register'
              )
            ),
            !auth.success && _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/login' },
                'Login'
              )
            ),
            auth.success && _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { onClick: this.logout },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

function mapStateToProps(state) {

  return state;
}
var Style = exports.Style = {
  formstyle: {
    marginLeft: 10
  }

};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logoutuser: _actions.logoutuser })(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBlog = function (_Component) {
    _inherits(AddBlog, _Component);

    function AddBlog(props) {
        _classCallCheck(this, AddBlog);

        var _this = _possibleConstructorReturn(this, (AddBlog.__proto__ || Object.getPrototypeOf(AddBlog)).call(this, props));

        _this.state = {
            title: "",
            subject: "",
            article: ""
        };
        _this.addArticle = _this.addArticle.bind(_this);
        return _this;
    }

    _createClass(AddBlog, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (!this.props.auth.success) {
                this.props.history.push('/');
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var createblog = nextProps.createblog,
                history = nextProps.history;

            if (createblog.addblog && createblog.addblog.success) {
                history.push('/dashboard');
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(field, value) {

            var next = _extends({}, this.state, _defineProperty({}, field, value));

            this.setState(next);
        }
    }, {
        key: 'addArticle',
        value: function addArticle() {
            this.props.addblog(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { style: Style.formstyle },
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'title',
                        className: 'input-xsmall',
                        placeholder: 'Title',
                        value: this.state.title,
                        onChange: function onChange(e) {
                            return _this2.onChange('title', e.target.value);
                        }
                    }),
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'subject',
                        className: 'input-xsmall',
                        placeholder: 'What\'s this article about?',
                        value: this.state.subject,
                        onChange: function onChange(e) {
                            return _this2.onChange('subject', e.target.value);
                        }
                    }),
                    _react2.default.createElement('textarea', {
                        name: 'article',
                        className: 'materialize-textarea',
                        placeholder: 'Write your article (in markdown)',
                        value: this.state.article,
                        onChange: function onChange(e) {
                            return _this2.onChange('article', e.target.value);
                        }
                    }),
                    _react2.default.createElement(
                        'a',
                        { className: 'waves-effect waves-light btn', onClick: this.addArticle },
                        'Publish Article'
                    )
                )
            );
        }
    }]);

    return AddBlog;
}(_react.Component);

var Style = exports.Style = {
    formstyle: {
        marginTop: 80,
        border: "black"
    }

};
function mapStateToProps(state) {
    return state;
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { addblog: _actions.addblog })(AddBlog)

};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(34);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(35);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(37);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blogDialog = function blogDialog(props) {

  var actions = [_react2.default.createElement(_FlatButton2.default, {
    label: 'Cancel',
    primary: true,
    onClick: props.onRequestClose
  }), _react2.default.createElement(_FlatButton2.default, {
    label: 'Submit',
    primary: true,
    keyboardFocused: true,
    onClick: props.onRequestClose
  })];
  var muiTheme = getMuiTheme({}, {
    avatar: {
      borderColor: null
    },
    userAgent: 'all'
  });
  return _react2.default.createElement(
    MuiThemeProvider,
    { muiTheme: muiTheme },
    _react2.default.createElement(
      _Dialog2.default,
      {
        title: 'Dialog With Actions',
        actions: actions,
        modal: false,
        open: true,
        onRequestClose: props.onRequestClose
      },
      'The actions in this window were passed in as an array of React objects.'
    )
  );
};

exports.default = blogDialog;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _blogDialog = __webpack_require__(18);

var _blogDialog2 = _interopRequireDefault(_blogDialog);

var _reactRouterDom = __webpack_require__(4);

var _getMuiTheme = __webpack_require__(40);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(38);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _colors = __webpack_require__(39);

var _FloatingActionButton = __webpack_require__(36);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = __webpack_require__(41);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      currentpage: 1,
      paginateKey: 1
    };
    _this.addBlog = _this.addBlog.bind(_this);

    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.auth.success) {
        this.props.history.push('/');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getmeta('Dashboard');
      this.props.getblog(this.state.currentpage);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (nextProps.deleteblogreducer && nextProps.deleteblogreducer.deleteblog.success) {
        this.props.getblog(this.state.currentpage);
      }
    }
  }, {
    key: 'addBlog',
    value: function addBlog() {
      var history = this.props.history;

      history.push('/addblog');
    }
  }, {
    key: 'deleteBlog',
    value: function deleteBlog(ID) {
      this.props.deleteblog(ID);
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '' + (this.props.meta.data.length > 0 ? this.props.meta.title : 'Dashboard')
        ),
        _react2.default.createElement('meta', { name: 'description', content: '' + (this.props.meta.data.length > 0 ? this.props.meta.description : 'universal react') })
      );
    }
  }, {
    key: 'getPaginateBlogData',
    value: function getPaginateBlogData(page) {
      this.setState({ paginateKey: page });
      this.props.getblog(page);
    }
  }, {
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      console.log(props, state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var blog = this.props.blog;


      var styles = {
        buttonStyle: {},
        dialogStyle: {
          height: 400
        }
      };
      var muiTheme = (0, _getMuiTheme2.default)({}, {
        avatar: {
          borderColor: null
        },
        userAgent: 'all'
      });

      var pageNumbers = [];
      if (blog) {
        for (var i = 1; i <= blog.getblog.total; i++) {
          pageNumbers.push(i);
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { className: 'left-align', style: { margin: '50px' } },
          _react2.default.createElement(
            _MuiThemeProvider2.default,
            { muiTheme: muiTheme },
            _react2.default.createElement(
              _FloatingActionButton2.default,
              { onClick: this.addBlog },
              _react2.default.createElement(_add2.default, { title: 'Add Blog' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { marginLeft: 300 } },
          this.props.blog && blog.getblog.data.map(function (data) {
            return _react2.default.createElement(
              'div',
              { key: data._id },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col s12 m8' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card blue-grey darken-1' },
                    _react2.default.createElement(
                      'div',
                      { className: 'card-content white-text' },
                      _react2.default.createElement(
                        'span',
                        { className: 'center card-title', key: data._id },
                        data.title
                      ),
                      _react2.default.createElement(
                        'p',
                        { key: data.title },
                        data.article
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'card-action' },
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/editblog?id=' + data._id },
                        'Edit'
                      ),
                      _react2.default.createElement(
                        'a',
                        { onClick: _this2.deleteBlog.bind(_this2, data._id) },
                        'Delete'
                      )
                    )
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'pagination center' },
            pageNumbers.map(function (i) {
              return _react2.default.createElement(
                'li',
                { key: i, className: "center " + (_this2.state.paginateKey == i ? 'active' : '') },
                _react2.default.createElement(
                  'a',
                  { onClick: _this2.getPaginateBlogData.bind(_this2, i) },
                  i
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

;

function mapStateToProps(state) {

  return state;
}

function loadData(store) {
  return store.dispatch((0, _actions.getmeta)('Dashboard'));
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { getmeta: _actions.getmeta, getblog: _actions.getblog, deleteblog: _actions.deleteblog })(Dashboard)

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditBlog = function (_Component) {
    _inherits(EditBlog, _Component);

    function EditBlog(props) {
        _classCallCheck(this, EditBlog);

        var _this = _possibleConstructorReturn(this, (EditBlog.__proto__ || Object.getPrototypeOf(EditBlog)).call(this, props));

        _this.state = {
            title: "",
            subject: "",
            article: ""
        };
        _this.addArticle = _this.addArticle.bind(_this);
        return _this;
    }

    _createClass(EditBlog, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.location.search.replace("?id=", ' ')) {
                this.props.getSingleblog(this.props.location.search.replace("?id=", ' ').trim());
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var editblogreducer = nextProps.editblogreducer,
                history = nextProps.history;


            if (editblogreducer && editblogreducer.editblog.success) {
                this.state.title = editblogreducer.editblog.data.title;
                this.state.subject = editblogreducer.editblog.data.subject;
                this.state.article = editblogreducer.editblog.data.article;
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(field, value) {

            var next = _extends({}, this.state, _defineProperty({}, field, value));

            this.setState(next);
        }
    }, {
        key: 'addArticle',
        value: function addArticle() {
            this.props.addblog(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { style: Style.formstyle },
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'title',
                        className: 'input-xsmall',
                        placeholder: 'Title',
                        value: this.state.title,
                        onChange: function onChange(e) {
                            return _this2.onChange('title', e.target.value);
                        }
                    }),
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'subject',
                        className: 'input-xsmall',
                        placeholder: 'What\'s this article about?',
                        value: this.state.subject,
                        onChange: function onChange(e) {
                            return _this2.onChange('subject', e.target.value);
                        }
                    }),
                    _react2.default.createElement('textarea', {
                        name: 'article',
                        className: 'materialize-textarea',
                        placeholder: 'Write your article (in markdown)',
                        value: this.state.article,
                        onChange: function onChange(e) {
                            return _this2.onChange('article', e.target.value);
                        }
                    }),
                    _react2.default.createElement(
                        'a',
                        { className: 'waves-effect waves-light btn', onClick: this.addArticle },
                        'Update Article'
                    )
                )
            );
        }
    }]);

    return EditBlog;
}(_react.Component);

var Style = exports.Style = {
    formstyle: {
        marginTop: 80,
        border: "black"
    }

};
function mapStateToProps(state) {
    return state;
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { getSingleblog: _actions.getSingleblog })(EditBlog)

};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getmeta('Home');
      var _props = this.props,
          auth = _props.auth,
          history = _props.history;

      if (auth.success) {
        history.push('/dashboard');
      }
    }
  }, {
    key: 'head',
    value: function head() {

      return _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '' + (this.props.meta.data.length > 0 ? this.props.meta.title : 'Hompage')
        ),
        _react2.default.createElement('meta', { name: 'description', content: '' + (this.props.meta.data.length > 0 ? this.props.meta.description : 'universal react') })
      );
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        this.head(),
        _react2.default.createElement(
          'h3',
          null,
          'Welcome'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Check out these awesome features'
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

;

function mapStateToProps(state) {

  return state;
}

function loadData(store) {
  return store.dispatch((0, _actions.getmeta)('Home'));
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { getmeta: _actions.getmeta })(HomePage)

};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };
    _this._changed = _this._changed.bind(_this);
    _this._login = _this._login.bind(_this);

    return _this;
  }

  _createClass(LoginPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          auth = _props.auth,
          history = _props.history;


      if (auth.success) {
        history.push('/dashboard');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getmeta('Login');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      var admin = nextprops.admin,
          history = nextprops.history;

      if (admin != null) {
        //history.push('/dashboard');
        location.replace('/dashboard');
      }
    }
  }, {
    key: 'head',
    value: function head() {

      return _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '' + (this.props.meta.data.length > 0 ? this.props.meta.title : 'Login')
        ),
        _react2.default.createElement('meta', { name: 'description', content: '' + (this.props.meta.data.length > 0 ? this.props.meta.description : 'universal react') })
      );
    }
  }, {
    key: '_changed',
    value: function _changed(field, value) {
      var next = _extends({}, this.state, _defineProperty({}, field, value));
      this.setState(next);
    }
  }, {
    key: '_login',
    value: function _login() {
      this.props.signin(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        this.head(),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: Style.formstyle },
            _react2.default.createElement(
              'label',
              null,
              'Email'
            ),
            _react2.default.createElement('input', { type: 'email',
              className: 'input-xsmall',
              value: this.state.email,
              onChange: function onChange(e) {
                return _this2._changed('email', e.target.value);
              }

            }),
            _react2.default.createElement(
              'label',
              null,
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password',
              className: 'input-xsmall',
              value: this.state.password,
              onChange: function onChange(e) {
                return _this2._changed('password', e.target.value);
              }

            }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this._login, className: 'btn btn-primary' },
                'Login'
              )
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react.Component);

var Style = exports.Style = {
  formstyle: {
    marginTop: 80,
    border: "black"
  }

};

function mapStateToProps(state) {

  return state;
}

function loadData(store) {
  return store.dispatch((0, _actions.getmeta)('Login'));
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { signin: _actions.signin, getmeta: _actions.getmeta })(LoginPage)

};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterPage = function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage(props) {
    _classCallCheck(this, RegisterPage);

    var _this = _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this, props));

    _this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    _this._changed = _this._changed.bind(_this);
    _this._register = _this._register.bind(_this);
    return _this;
  }

  _createClass(RegisterPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          user = _props.user,
          history = _props.history;

      if (user.auth.success) {
        history.push('/dashboard');
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      var user = nextprops.user,
          history = nextprops.history;

      if (user.admin.success) {
        history.push('/login');
      }
    }
  }, {
    key: '_changed',
    value: function _changed(field, value) {
      var next = _extends({}, this.state, _defineProperty({}, field, value));
      this.setState(next);
    }
  }, {
    key: '_register',
    value: function _register() {

      this.props.registerUser(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: Style.formstyle },
            _react2.default.createElement(
              'label',
              null,
              'First Name'
            ),
            _react2.default.createElement('input', { type: 'text',
              className: 'input-xsmall',
              value: this.state.firstname,
              onChange: function onChange(e) {
                return _this2._changed('firstname', e.target.value);
              }

            }),
            _react2.default.createElement(
              'label',
              null,
              'Last Name'
            ),
            _react2.default.createElement('input', { type: 'text',
              className: 'input-xsmall',
              value: this.state.lastname,
              onChange: function onChange(e) {
                return _this2._changed('lastname', e.target.value);
              }

            }),
            _react2.default.createElement(
              'label',
              null,
              'Email'
            ),
            _react2.default.createElement('input', { type: 'email',
              className: 'input-xsmall',
              value: this.state.email,
              onChange: function onChange(e) {
                return _this2._changed('email', e.target.value);
              }

            }),
            _react2.default.createElement(
              'label',
              null,
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password',
              className: 'input-xsmall',
              value: this.state.password,
              onChange: function onChange(e) {
                return _this2._changed('password', e.target.value);
              }

            }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this._register, className: 'btn btn-primary' },
                'Create Account'
              )
            )
          )
        )
      );
    }
  }]);

  return RegisterPage;
}(_react.Component);

var Style = exports.Style = {
  formstyle: {
    marginTop: 30,
    border: "black"
  }

};

function mapStateToProps(state) {
  return { user: state };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { registerUser: _actions.registerUser })(RegisterPage)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];


  switch (action.type) {
    case _actions.ADDBLOG:
      console.log(">>>>>>>>>>>>>");
      return {
        addblog: action.payload.data
      };
    default:
      return state;
  }
};

var _actions = __webpack_require__(0);

var initialState = {
  addblog: {}
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _actions = __webpack_require__(0);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];


  switch (action.type) {
    case _actions.GETBLOG:
      return {
        getblog: action.payload.data
      };
    default:
      return state;
  }
};

var _actions = __webpack_require__(0);

var initialState = {
  getblog: {}
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];


  switch (action.type) {
    case _actions.DELETE_BLOG:
      return {
        deleteblog: action.payload.data
      };
    default:
      return state;
  }
};

var _actions = __webpack_require__(0);

var initialState = {
  deleteblog: {}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];


  switch (action.type) {
    case _actions.GET_SINGLE_BLOG:
      return {
        editblog: action.payload.data
      };
    default:
      return state;
  }
};

var _actions = __webpack_require__(0);

var initialState = {
  getSingleblog: {}

};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _userReducer = __webpack_require__(31);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _authReducer = __webpack_require__(25);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _metaReducer = __webpack_require__(30);

var _metaReducer2 = _interopRequireDefault(_metaReducer);

var _blogReducer = __webpack_require__(26);

var _blogReducer2 = _interopRequireDefault(_blogReducer);

var _editblogReducer = __webpack_require__(28);

var _editblogReducer2 = _interopRequireDefault(_editblogReducer);

var _addblogReducer = __webpack_require__(24);

var _addblogReducer2 = _interopRequireDefault(_addblogReducer);

var _deleteblogReducer = __webpack_require__(27);

var _deleteblogReducer2 = _interopRequireDefault(_deleteblogReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  admin: _userReducer2.default,
  auth: _authReducer2.default,
  meta: _metaReducer2.default,
  blog: _blogReducer2.default,
  editblogreducer: _editblogReducer2.default,
  createblog: _addblogReducer2.default,
  deleteblogreducer: _deleteblogReducer2.default
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.META:
      return action.payload;
    default:
      return state;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _universalCookie = __webpack_require__(6);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = new _universalCookie2.default();

// export const initialState = {
//    registeruser:null,
//    loginuser:null,
//    logout:null,
//    meta:null
// };


exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    case _actions.REGISTER_USER:
      return action.payload.data;
    case _actions.SIGNIN:
      if (action.payload.data.success == true) {
        cookies.set('token', action.payload.data.token);
      }
      return action.payload.data;
    case _actions.LOGOUTUSER:
      return { logout: action.payload.data };

    default:
      return state;
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(13);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(9);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:8080/api/', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:8080/api';
    return opts;
  }
}));
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3050, function () {
  console.log('Listening on prot 3050');
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FloatingActionButton");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/add");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);