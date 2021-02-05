webpackHotUpdate_N_E("pages/project/[slug]",{

/***/ "./src/pages/project/[slug].jsx":
/*!**************************************!*\
  !*** ./src/pages/project/[slug].jsx ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/bio */ "./src/components/bio.jsx");
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/gallery */ "./src/components/gallery.jsx");
/* harmony import */ var _components_linkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/linkList */ "./src/components/linkList.jsx");
var _jsxFileName = "D:\\Work\\seans.site\\src\\pages\\project\\[slug].jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var __N_SSG = true;
function Project(_ref) {
  var projects = _ref.projects,
      project = _ref.project;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("article", {
    className: "index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_bio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), project && __jsx("article", {
    key: project.slug,
    className: "project-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  }, __jsx("img", {
    alt: "".concat(project.title, " thumbnail"),
    src: project.thumbnail,
    className: "preview",
    loading: "eager",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 24
    }
  }, "\u26E2")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h1", {
    dangerouslySetInnerHTML: {
      __html: project.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("h2", {
    dangerouslySetInnerHTML: {
      __html: project.tagline
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, project.association), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: project.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_components_linkList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    links: project.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))), __jsx(_components_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    projects: projects,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return window.scrollTo(0, 0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\u26E2")));
}
_c = Project;

var _c;

$RefreshReg$(_c, "Project");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3QvW3NsdWddLmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicHJvamVjdHMiLCJwcm9qZWN0Iiwic2x1ZyIsInRpdGxlIiwidGh1bWJuYWlsIiwiX19odG1sIiwidGFnbGluZSIsImFzc29jaWF0aW9uIiwiZGVzY3JpcHRpb24iLCJsaW5rcyIsIndpbmRvdyIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxPQUFULE9BQ2Y7QUFBQSxNQURrQ0MsUUFDbEMsUUFEa0NBLFFBQ2xDO0FBQUEsTUFENENDLE9BQzVDLFFBRDRDQSxPQUM1QztBQUNFLFNBQVEsbUVBRU47QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdBLE9BQU8sSUFBSTtBQUFTLE9BQUcsRUFBRUEsT0FBTyxDQUFDQyxJQUF0QjtBQUE0QixhQUFTLEVBQUMsY0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNWO0FBQ0UsT0FBRyxZQUFLRCxPQUFPLENBQUNFLEtBQWIsZUFETDtBQUVFLE9BQUcsRUFBRUYsT0FBTyxDQUFDRyxTQUZmO0FBR0UsYUFBUyxFQUFDLFNBSFo7QUFJRSxXQUFPLEVBQUMsT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFUsRUFPVixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBZixDQVBVLEVBUVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFSixPQUFPLENBQUNFO0FBQWxCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUksMkJBQXVCLEVBQUU7QUFBRUUsWUFBTSxFQUFFSixPQUFPLENBQUNLO0FBQWxCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsT0FBTyxDQUFDTSxXQUFiLENBSEYsRUFJRTtBQUFHLDJCQUF1QixFQUFFO0FBQUVGLFlBQU0sRUFBRUosT0FBTyxDQUFDTztBQUFsQixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDREQUFEO0FBQVUsU0FBSyxFQUFFUCxPQUFPLENBQUNRLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQVJVLENBRmQsRUFrQkUsTUFBQywyREFBRDtBQUFTLFlBQVEsRUFBRVQsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQW1CRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1VLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixDQUZNLENBQVI7QUF3QkQ7S0ExQnVCWixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3QvW3NsdWddLmQyYWFjMTE4MTc4NzFkMjEzYjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJpbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JpbydcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ2FsbGVyeSdcbmltcG9ydCBMaW5rTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9saW5rTGlzdFwiXG5pbXBvcnQgeyBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnRlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0cywgcHJvamVjdCB9KVxue1xuICByZXR1cm4gKDw+XG4gICAgey8qIDxTRU8gdGl0bGU9e3Byb2plY3QudGl0bGV9IGRlc2NyaXB0aW9uPXt0YWdsaW5lfSBpbWFnZT17cHJldmlld30gLz4gKi99XG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgIDxCaW8gLz5cbiAgICAgIHtwcm9qZWN0ICYmIDxhcnRpY2xlIGtleT17cHJvamVjdC5zbHVnfSBjbGFzc05hbWU9XCJwcm9qZWN0LXBhZ2VcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17YCR7cHJvamVjdC50aXRsZX0gdGh1bWJuYWlsYH1cbiAgICAgICAgICBzcmM9e3Byb2plY3QudGh1bWJuYWlsfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdcIlxuICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+4puiPC9hPjwvTGluaz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvamVjdC50aXRsZSB9fSAvPlxuICAgICAgICAgIDxoMiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb2plY3QudGFnbGluZSB9fSAvPlxuICAgICAgICAgIDxoMz57cHJvamVjdC5hc3NvY2lhdGlvbn08L2gzPlxuICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvamVjdC5kZXNjcmlwdGlvbiB9fSAvPlxuICAgICAgICAgIDxMaW5rTGlzdCBsaW5rcz17cHJvamVjdC5saW5rc30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9hcnRpY2xlPn1cbiAgICAgIDxHYWxsZXJ5IHByb2plY3RzPXtwcm9qZWN0c30gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfT7im6I8L2J1dHRvbj5cbiAgICA8L2FydGljbGU+XG4gIDwvPilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pXG57XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2plY3RzOiBhd2FpdCBnZXRQcm9qZWN0cygpLFxuICAgICAgcHJvamVjdDogYXdhaXQgZ2V0UHJvamVjdChwYXJhbXMuc2x1ZylcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpXG57XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IChhd2FpdCBnZXRQcm9qZWN0cygpKS5tYXAoKHsgc2x1ZyB9KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=