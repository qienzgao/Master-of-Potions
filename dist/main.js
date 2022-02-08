/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/tool */ \"./src/scripts/tool.js\");\n/* harmony import */ var _scripts_ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ingredient */ \"./src/scripts/ingredient.js\");\n// import button from \"./scripts/background\"\n\n\nvar tool = new _scripts_tool__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar ingredient = new _scripts_ingredient__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar potion = null; // document.addEventListener('DOMContentLoaded', ()=>{\n//     console.log(\"hello\")\n// })\n\ndocument.getElementById('flower').addEventListener('click', function () {\n  ingredient.setSelected('flower');\n  console.log(ingredient.selected);\n});\ndocument.getElementById('feather').addEventListener('click', function () {\n  tool.selectedTool('feather', ingredient);\n  console.log(tool.created);\n});\ndocument.getElementById('burn').addEventListener('click', function () {\n  ingredient.selected = null;\n  tool.created = null;\n});\ndocument.getElementById('extract').addEventListener('click', function () {\n  ingredient.addIngredient(tool.created);\n  ingredient.selected = null;\n  tool.created = null;\n});\ndocument.getElementById('brew').addEventListener('click', function () {\n  potion = ingredient.brew();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUUsSUFBSSxHQUFHLElBQUlGLHFEQUFKLEVBQVg7QUFDQSxJQUFJRyxVQUFVLEdBQUcsSUFBSUYsMkRBQUosRUFBakI7QUFDQSxJQUFJRyxNQUFNLEdBQUcsSUFBYixFQUVBO0FBQ0E7QUFDQTs7QUFFQUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBSTtBQUM1REosRUFBQUEsVUFBVSxDQUFDSyxXQUFYLENBQXVCLFFBQXZCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFVLENBQUNRLFFBQXZCO0FBQ0gsQ0FIRDtBQUtBTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLGdCQUFuQyxDQUFvRCxPQUFwRCxFQUE2RCxZQUFJO0FBQzdETCxFQUFBQSxJQUFJLENBQUNVLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJULFVBQTdCO0FBQ0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFJLENBQUNXLE9BQWpCO0FBQ0gsQ0FIRDtBQUtBUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxZQUFJO0FBQzFESixFQUFBQSxVQUFVLENBQUNRLFFBQVgsR0FBc0IsSUFBdEI7QUFDQVQsRUFBQUEsSUFBSSxDQUFDVyxPQUFMLEdBQWUsSUFBZjtBQUNILENBSEQ7QUFLQVIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxnQkFBbkMsQ0FBb0QsT0FBcEQsRUFBNkQsWUFBTTtBQUMvREosRUFBQUEsVUFBVSxDQUFDVyxhQUFYLENBQXlCWixJQUFJLENBQUNXLE9BQTlCO0FBQ0FWLEVBQUFBLFVBQVUsQ0FBQ1EsUUFBWCxHQUFzQixJQUF0QjtBQUNBVCxFQUFBQSxJQUFJLENBQUNXLE9BQUwsR0FBZSxJQUFmO0FBQ0gsQ0FKRDtBQU1BUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxZQUFNO0FBQzVESCxFQUFBQSxNQUFNLEdBQUdELFVBQVUsQ0FBQ1ksSUFBWCxFQUFUO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLVByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYnV0dG9uIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi9zY3JpcHRzL3Rvb2xcIlxuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSBcIi4vc2NyaXB0cy9pbmdyZWRpZW50XCJcblxubGV0IHRvb2wgPSBuZXcgVG9vbCgpOyBcbmxldCBpbmdyZWRpZW50ID0gbmV3IEluZ3JlZGllbnQoKTsgXG5sZXQgcG90aW9uID0gbnVsbDsgXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuLy8gICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbi8vIH0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG93ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgaW5ncmVkaWVudC5zZXRTZWxlY3RlZCgnZmxvd2VyJyk7IFxuICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnQuc2VsZWN0ZWQpOyBcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0aGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHRvb2wuc2VsZWN0ZWRUb29sKCdmZWF0aGVyJywgaW5ncmVkaWVudCk7XG4gICAgY29uc29sZS5sb2codG9vbC5jcmVhdGVkKTtcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGluZ3JlZGllbnQuc2VsZWN0ZWQgPSBudWxsOyBcbiAgICB0b29sLmNyZWF0ZWQgPSBudWxsOyBcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5ncmVkaWVudC5hZGRJbmdyZWRpZW50KHRvb2wuY3JlYXRlZCk7IFxuICAgIGluZ3JlZGllbnQuc2VsZWN0ZWQgPSBudWxsO1xuICAgIHRvb2wuY3JlYXRlZCA9IG51bGw7IFxufSlcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZXcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3Rpb24gPSBpbmdyZWRpZW50LmJyZXcoKTsgXG59KVxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiVG9vbCIsIkluZ3JlZGllbnQiLCJ0b29sIiwiaW5ncmVkaWVudCIsInBvdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U2VsZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWQiLCJzZWxlY3RlZFRvb2wiLCJjcmVhdGVkIiwiYWRkSW5ncmVkaWVudCIsImJyZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ingredient.js":
/*!***********************************!*\
  !*** ./src/scripts/ingredient.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Ingredient = /*#__PURE__*/function () {\n  function Ingredient() {\n    _classCallCheck(this, Ingredient);\n\n    this.selected = null;\n    this.materials = [];\n  }\n\n  _createClass(Ingredient, [{\n    key: \"setSelected\",\n    value: function setSelected(ingredient) {\n      this.selected = ingredient;\n    }\n  }, {\n    key: \"addIngredient\",\n    value: function addIngredient(material) {\n      if (!material) {\n        return;\n      }\n\n      this.materials.push(material);\n    }\n  }, {\n    key: \"brew\",\n    value: function brew() {\n      if ('laughingFlower' in this.materials && 'abc' in this.materials && 'thankyou' in this.materials && this.materials.length === 3) {\n        return 'potion1';\n      } else {}\n    }\n  }]);\n\n  return Ingredient;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ingredient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbmdyZWRpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDRix3QkFBYztBQUFBOztBQUNWLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0g7Ozs7V0FFRCxxQkFBWUMsVUFBWixFQUF3QjtBQUNwQixXQUFLRixRQUFMLEdBQWdCRSxVQUFoQjtBQUNIOzs7V0FFRCx1QkFBY0MsUUFBZCxFQUF1QjtBQUNuQixVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNYO0FBQ0g7O0FBQ0QsV0FBS0YsU0FBTCxDQUFlRyxJQUFmLENBQW9CRCxRQUFwQjtBQUNIOzs7V0FFRCxnQkFBTTtBQUNGLFVBQUcsb0JBQW9CLEtBQUtGLFNBQXpCLElBQXNDLFNBQVMsS0FBS0EsU0FBcEQsSUFBaUUsY0FBYyxLQUFLQSxTQUFwRixJQUFpRyxLQUFLQSxTQUFMLENBQWVJLE1BQWYsS0FBMEIsQ0FBOUgsRUFBZ0k7QUFDNUgsZUFBTyxTQUFQO0FBQ0gsT0FGRCxNQUVPLENBRU47QUFDSjs7Ozs7O0FBSUwsK0RBQWVOLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL3NjcmlwdHMvaW5ncmVkaWVudC5qcz80MDQyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEluZ3JlZGllbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDsgXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzID0gW107IFxuICAgIH1cblxuICAgIHNldFNlbGVjdGVkKGluZ3JlZGllbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGluZ3JlZGllbnQ7XG4gICAgfVxuXG4gICAgYWRkSW5ncmVkaWVudChtYXRlcmlhbCl7XG4gICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgIH1cblxuICAgIGJyZXcoKXtcbiAgICAgICAgaWYoJ2xhdWdoaW5nRmxvd2VyJyBpbiB0aGlzLm1hdGVyaWFscyAmJiAnYWJjJyBpbiB0aGlzLm1hdGVyaWFscyAmJiAndGhhbmt5b3UnIGluIHRoaXMubWF0ZXJpYWxzICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICByZXR1cm4gJ3BvdGlvbjEnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudDsgIl0sIm5hbWVzIjpbIkluZ3JlZGllbnQiLCJzZWxlY3RlZCIsIm1hdGVyaWFscyIsImluZ3JlZGllbnQiLCJtYXRlcmlhbCIsInB1c2giLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ingredient.js\n");

/***/ }),

/***/ "./src/scripts/tool.js":
/*!*****************************!*\
  !*** ./src/scripts/tool.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Tool = /*#__PURE__*/function () {\n  function Tool() {\n    _classCallCheck(this, Tool);\n\n    var created = null;\n  }\n\n  _createClass(Tool, [{\n    key: \"selectedTool\",\n    value: function selectedTool(tool, ingredient) {\n      if (tool === 'feather') {\n        this.tickle(ingredient);\n      } else if (tool === 'knife') {} else if (tool === 'laserPointer') {} else if (tool === 'sugar') {} else if (tool === 'dragonFruit') {} else if (tool === 'fangedMouth') {} else if (tool === 'miniHeart') {} else if (tool === 'key') {}\n    }\n  }, {\n    key: \"tickle\",\n    value: function tickle(ingredient) {\n      if (ingredient.selected === 'flower') {\n        this.created = 'laughingFlower'; // addIngredient('laughingFlower')\n      } else {\n        console.log(\"It's not working\");\n      }\n    }\n  }]);\n\n  return Tool;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tool);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90b29sLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDTUE7QUFDRixrQkFBYTtBQUFBOztBQUNULFFBQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0g7Ozs7V0FFRCxzQkFBYUMsSUFBYixFQUFtQkMsVUFBbkIsRUFBOEI7QUFDMUIsVUFBR0QsSUFBSSxLQUFLLFNBQVosRUFBdUI7QUFDbkIsYUFBS0UsTUFBTCxDQUFZRCxVQUFaO0FBQ0gsT0FGRCxNQUVPLElBQUdELElBQUksS0FBSyxPQUFaLEVBQXFCLENBRTNCLENBRk0sTUFFQSxJQUFHQSxJQUFJLEtBQUssY0FBWixFQUE0QixDQUVsQyxDQUZNLE1BRUEsSUFBR0EsSUFBSSxLQUFLLE9BQVosRUFBcUIsQ0FFM0IsQ0FGTSxNQUVBLElBQUdBLElBQUksS0FBSyxhQUFaLEVBQTJCLENBRWpDLENBRk0sTUFFQSxJQUFHQSxJQUFJLEtBQUssYUFBWixFQUEyQixDQUVqQyxDQUZNLE1BRUEsSUFBR0EsSUFBSSxLQUFLLFdBQVosRUFBeUIsQ0FFL0IsQ0FGTSxNQUVBLElBQUdBLElBQUksS0FBSyxLQUFaLEVBQW1CLENBRXpCO0FBQ0o7OztXQUVELGdCQUFPQyxVQUFQLEVBQWtCO0FBQ2QsVUFBR0EsVUFBVSxDQUFDRSxRQUFYLEtBQXdCLFFBQTNCLEVBQXFDO0FBQ2pDLGFBQUtKLE9BQUwsR0FBZSxnQkFBZixDQURpQyxDQUVqQztBQUNILE9BSEQsTUFHTztBQUNISyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNIO0FBQ0o7Ozs7OztBQUdMLCtEQUFlUCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlMtUHJvamVjdC8uL3NyYy9zY3JpcHRzL3Rvb2wuanM/Zjg1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFRvb2wge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHZhciBjcmVhdGVkID0gbnVsbDsgXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRUb29sKHRvb2wsIGluZ3JlZGllbnQpe1xuICAgICAgICBpZih0b29sID09PSAnZmVhdGhlcicpIHtcbiAgICAgICAgICAgIHRoaXMudGlja2xlKGluZ3JlZGllbnQpO1xuICAgICAgICB9IGVsc2UgaWYodG9vbCA9PT0gJ2tuaWZlJykge1xuXG4gICAgICAgIH0gZWxzZSBpZih0b29sID09PSAnbGFzZXJQb2ludGVyJykge1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZih0b29sID09PSAnc3VnYXInKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmKHRvb2wgPT09ICdkcmFnb25GcnVpdCcpIHtcblxuICAgICAgICB9IGVsc2UgaWYodG9vbCA9PT0gJ2ZhbmdlZE1vdXRoJykge1xuXG4gICAgICAgIH0gZWxzZSBpZih0b29sID09PSAnbWluaUhlYXJ0Jykge1xuXG4gICAgICAgIH0gZWxzZSBpZih0b29sID09PSAna2V5Jykge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aWNrbGUoaW5ncmVkaWVudCl7XG4gICAgICAgIGlmKGluZ3JlZGllbnQuc2VsZWN0ZWQgPT09ICdmbG93ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWQgPSAnbGF1Z2hpbmdGbG93ZXInXG4gICAgICAgICAgICAvLyBhZGRJbmdyZWRpZW50KCdsYXVnaGluZ0Zsb3dlcicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3Mgbm90IHdvcmtpbmdcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDsgXG4iXSwibmFtZXMiOlsiVG9vbCIsImNyZWF0ZWQiLCJ0b29sIiwiaW5ncmVkaWVudCIsInRpY2tsZSIsInNlbGVjdGVkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/tool.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;