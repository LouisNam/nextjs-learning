"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/property",{

/***/ "./src/components/modules/property/PropertyList.tsx":
/*!**********************************************************!*\
  !*** ./src/components/modules/property/PropertyList.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PropertyItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyItem */ \"./src/components/modules/property/PropertyItem.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _store_property_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/property.services */ \"./src/store/property.services.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PropertyList = ()=>{\n    _s();\n    const { data , error , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({\n        queryKey: [\n            \"properties\"\n        ],\n        queryFn: ()=>(0,_store_property_services__WEBPACK_IMPORTED_MODULE_3__.getProperties)(),\n        refetchOnWindowFocus: false,\n        cacheTime: 10 * 60 * 1000,\n        staleTime: 5 * 60 * 1000\n    });\n    if (error || (data === null || data === void 0 ? void 0 : data.length) === 0) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5 bg-white rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-label\": \"filter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-label\": \"list\",\n                className: \"grid grid-cols-2 gap-x-16 gap-y-6 mb-9\",\n                children: [\n                    isLoading && Array(3).fill(0).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PropertyItem__WEBPACK_IMPORTED_MODULE_2__.PropertyItemLoading, {}, index, false, {\n                            fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, undefined)),\n                    !isLoading && data && data.length > 0 && data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PropertyItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            item: item\n                        }, item.id, false, {\n                            fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-label\": \"pagination\",\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray80\",\n                        children: \"Showing 1 to 10 Properties\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-[10px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary\",\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center rounded-lg w-9 text-gray80 h-9\",\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Learning Front-end\\\\ReactJS\\\\nextjs\\\\src\\\\components\\\\modules\\\\property\\\\PropertyList.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PropertyList, \"vamb9feK/asxjJLX6wcKCD8DQJA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = PropertyList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyList);\nvar _c;\n$RefreshReg$(_c, \"PropertyList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL3Byb3BlcnR5L1Byb3BlcnR5TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUN5QztBQUNsQjtBQUVTO0FBRTFELE1BQU1LLGVBQWUsSUFBTTs7SUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFLEdBQUdMLCtEQUFRQSxDQUFDO1FBQzFDTSxVQUFVO1lBQUM7U0FBYTtRQUN4QkMsU0FBUyxJQUFNTix1RUFBYUE7UUFDNUJPLHNCQUFzQixLQUFLO1FBQzNCQyxXQUFXLEtBQUssS0FBSztRQUNyQkMsV0FBVyxJQUFJLEtBQUs7SUFDdEI7SUFDQSxJQUFJTixTQUFTRCxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1RLE1BQU0sTUFBSyxHQUFHLE9BQU8sSUFBSTtJQUM1QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJRSxjQUFXOzs7Ozs7MEJBQ2hCLDhEQUFDRjtnQkFBSUUsY0FBVztnQkFBT0QsV0FBVTs7b0JBQzlCUixhQUNDVSxNQUFNLEdBQ0hDLElBQUksQ0FBQyxHQUNMQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUNwQiw4REFBbUJBLE1BQU1vQjs7Ozs7b0JBRS9CLENBQUNkLGFBQ0FGLFFBQ0FBLEtBQUtRLE1BQU0sR0FBRyxLQUNkUixLQUFLYyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNwQixxREFBWUE7NEJBQUNvQixNQUFNQTsyQkFBV0EsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7MEJBRzVDLDhEQUFDUjtnQkFDQ0UsY0FBVztnQkFDWEQsV0FBVTs7a0NBRVYsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFjOzs7Ozs7a0NBQzNCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFPVCxXQUFVOzBDQUE0RTs7Ozs7OzBDQUc5Riw4REFBQ1M7Z0NBQU9ULFdBQVU7MENBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUY7R0ExQ01YOztRQUMrQkYsMkRBQVFBOzs7S0FEdkNFO0FBNENOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvcHJvcGVydHkvUHJvcGVydHlMaXN0LnRzeD9jZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BlcnR5SXRlbSwgeyBQcm9wZXJ0eUl0ZW1Mb2FkaW5nIH0gZnJvbSBcIi4vUHJvcGVydHlJdGVtXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBJUHJvcGVydHlJdGVtVHlwZSB9IGZyb20gXCJAL3R5cGVzL3Byb3BlcnR5LnR5cGVzXCI7XHJcbmltcG9ydCB7IGdldFByb3BlcnRpZXMgfSBmcm9tIFwiQC9zdG9yZS9wcm9wZXJ0eS5zZXJ2aWNlc1wiO1xyXG5cclxuY29uc3QgUHJvcGVydHlMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgcXVlcnlLZXk6IFtcInByb3BlcnRpZXNcIl0sXHJcbiAgICBxdWVyeUZuOiAoKSA9PiBnZXRQcm9wZXJ0aWVzKCksXHJcbiAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICBjYWNoZVRpbWU6IDEwICogNjAgKiAxMDAwLFxyXG4gICAgc3RhbGVUaW1lOiA1ICogNjAgKiAxMDAwLFxyXG4gIH0pO1xyXG4gIGlmIChlcnJvciB8fCBkYXRhPy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBiZy13aGl0ZSByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJmaWx0ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBhcmlhLWxhYmVsPVwibGlzdFwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXgtMTYgZ2FwLXktNiBtYi05XCI+XHJcbiAgICAgICAge2lzTG9hZGluZyAmJlxyXG4gICAgICAgICAgQXJyYXkoMylcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UHJvcGVydHlJdGVtTG9hZGluZyBrZXk9e2luZGV4fT48L1Byb3BlcnR5SXRlbUxvYWRpbmc+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIHshaXNMb2FkaW5nICYmXHJcbiAgICAgICAgICBkYXRhICYmXHJcbiAgICAgICAgICBkYXRhLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGRhdGEubWFwKChpdGVtOiBJUHJvcGVydHlJdGVtVHlwZSkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvcGVydHlJdGVtIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0+PC9Qcm9wZXJ0eUl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBhcmlhLWxhYmVsPVwicGFnaW5hdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheTgwXCI+U2hvd2luZyAxIHRvIDEwIFByb3BlcnRpZXM8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzEwcHhdXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcm91bmRlZC1sZyB3LTkgaC05IGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgdy05IHRleHQtZ3JheTgwIGgtOVwiPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wZXJ0eUl0ZW0iLCJQcm9wZXJ0eUl0ZW1Mb2FkaW5nIiwidXNlUXVlcnkiLCJnZXRQcm9wZXJ0aWVzIiwiUHJvcGVydHlMaXN0IiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjYWNoZVRpbWUiLCJzdGFsZVRpbWUiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modules/property/PropertyList.tsx\n"));

/***/ })

});