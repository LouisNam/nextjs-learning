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
exports.id = "pages/api/property/create";
exports.ids = ["pages/api/property/create"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/property/create.ts":
/*!******************************************!*\
  !*** ./src/pages/api/property/create.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data/properties.json\");\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const jsonData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, \"utf8\"));\n        const newData = req.body;\n        jsonData.push({\n            id: jsonData.length + 1,\n            ...newData\n        });\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify(jsonData));\n        res.status(200).json({\n            message: \"Add property successfully!\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Error!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNKO0FBR3BCLE1BQU1FLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSTtBQUUzQixTQUFTQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ3pFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU1DLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ1gsc0RBQWUsQ0FBQ0MsVUFBVTtRQUV0RCxNQUFNWSxVQUFVUCxJQUFJUSxJQUFJO1FBRXhCTCxTQUFTTSxJQUFJLENBQUM7WUFDWkMsSUFBSVAsU0FBU1EsTUFBTSxHQUFHO1lBQ3RCLEdBQUdKLE9BQU87UUFDWjtRQUVBYix1REFBZ0IsQ0FBQ0MsVUFBVVMsS0FBS1MsU0FBUyxDQUFDVjtRQUUxQ0YsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO0lBQy9ELE9BQU87UUFDTGYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQVM7SUFDM0MsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L2NyZWF0ZS50cz9mMjZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGEvcHJvcGVydGllcy5qc29uXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpKTtcclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAganNvbkRhdGEucHVzaCh7XHJcbiAgICAgIGlkOiBqc29uRGF0YS5sZW5ndGggKyAxLFxyXG4gICAgICAuLi5uZXdEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWRkIHByb3BlcnR5IHN1Y2Nlc3NmdWxseSFcIiB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIVwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicGF0aCIsImZzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIm5ld0RhdGEiLCJib2R5IiwicHVzaCIsImlkIiwibGVuZ3RoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/property/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/property/create.ts"));
module.exports = __webpack_exports__;

})();