"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/property/[id]";
exports.ids = ["pages/api/property/[id]"];
exports.modules = {

/***/ "(api)/./src/pages/api/property/[id].ts":
/*!****************************************!*\
  !*** ./src/pages/api/property/[id].ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_properties_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data/properties.json */ \"(api)/./data/properties.json\");\n\nfunction handler(req, res) {\n    const { id  } = req.query;\n    const post = _data_properties_json__WEBPACK_IMPORTED_MODULE_0__.find((item)=>item.id === parseInt(id));\n    if (post) {\n        res.status(200).json(post);\n    } else {\n        res.status(404).json({\n            message: \"Property not found!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDeUM7QUFFMUIsU0FBU0MsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN6RSxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQ3hCLE1BQU1DLE9BQU9OLHVEQUFTLENBQUMsQ0FBQ1EsT0FBU0EsS0FBS0osRUFBRSxLQUFLSyxTQUFTTDtJQUV0RCxJQUFJRSxNQUFNO1FBQ1JILElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0lBQ3ZCLE9BQU87UUFDTEgsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXNCO0lBQ3hELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vc3JjL3BhZ2VzL2FwaS9wcm9wZXJ0eS9baWRdLnRzP2U4YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCJAZGF0YS9wcm9wZXJ0aWVzLmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgY29uc3QgcG9zdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQgYXMgc3RyaW5nKSk7XHJcblxyXG4gIGlmIChwb3N0KSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIlByb3BlcnR5IG5vdCBmb3VuZCFcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInBvc3QiLCJmaW5kIiwiaXRlbSIsInBhcnNlSW50Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/property/[id].ts\n");

/***/ }),

/***/ "(api)/./data/properties.json":
/*!******************************!*\
  !*** ./data/properties.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Metro Jayakarta Hotel & Spa","address":"North NewYork, USA","facility":{"beds":1,"baths":1,"area":"38M","smooking-area":true,"kitchen":true,"balcony":true,"wifi":true,"parking-area":true},"status":"sale","type":"apartments","price":7500,"image":["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80","https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"],"country":"USA","description":"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","rating":4.5,"state":"North Carolina","agent":{"name":"Hussain Ahmed","phone":"+1 234 567 890","address":"North Carolina, USA","properties":10}},{"id":2,"title":"Metro Jayakarta Hotel","address":"North NewYork, USA","facility":{"beds":2,"baths":1,"area":"38M","smooking-area":true,"kitchen":true,"balcony":true,"wifi":true,"parking-area":true},"status":"sale","type":"apartments","price":7500,"image":["https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80","https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80","https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"],"country":"USA","description":"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","rating":4.5,"state":"North Carolina","agent":{"name":"Hussain Ahmed","phone":"+1 234 567 890","address":"North Carolina, USA","properties":10}},{"id":3,"title":"Metro Jayakarta Hotel & Spa","address":"North NewYork, USA","info":{"beds":1,"baths":1,"area":"38M"},"status":"sale","type":"apartment","price":7500,"image":["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80","https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"],"country":"USA","facility":["Wifi","Smooking Area","Parking Area","Balcony","Kitchen"],"description":"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","rating":4.5,"state":"North Carolina","agent":{"name":"Hussain Ahmed","phone":"+1 234 567 890","address":"North Carolina, USA","properties":10}}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/property/[id].ts"));
module.exports = __webpack_exports__;

})();