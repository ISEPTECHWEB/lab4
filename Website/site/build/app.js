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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//import axios from axios;\n\nwindow.onload = function () {\n    document.getElementById(\"check\").onclick = function () {\n        performGetRequest();\n    };\n\n    document.getElementById(\"evaluate\").onclick = function () {\n        axios.post('/', {\n            formula: document.getElementById('formula')\n            /*if (response){\r\n                document.getElementById('formula') = \"coucou\" //calculateFormula(formula)\r\n            }*/\n        }).then(function (response) {\n            alert(\"well done !\");\n            console.log(response);\n        }).catch(function (error) {\n            alert(\"erreur mon pote...\");\n            console.log(error);\n        });\n    };\n};\n\nfunction performGetRequest() {\n    //var resultElement = document.getElementById('getResult1');\n    //resultElement.innerHTML = '';\n\n    axios.post('http://localhost:8081/', {\n        formula: \"1+1\"\n    }).then(function (response) {\n        console.log(response);\n        //resultElement.innerHTML = generateSuccessHTMLOutput(response);\n    }).catch(function (error) {\n        console.log(error);\n        //resultElement.innerHTML = generateErrorHTMLOutput(error);\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2luZGV4LmpzP2RhZDQiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJwZXJmb3JtR2V0UmVxdWVzdCIsImF4aW9zIiwicG9zdCIsImZvcm11bGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVU7QUFDdEJDLGFBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLE9BQWpDLEdBQXlDLFlBQVU7QUFDL0NDO0FBQ0gsS0FGRDs7QUFJQUgsYUFBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsT0FBcEMsR0FBNEMsWUFBVTtBQUNsREUsY0FBTUMsSUFBTixDQUFXLEdBQVgsRUFBZ0I7QUFDWkMscUJBQVVOLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEI7QUFDVjs7O0FBRlksU0FBaEIsRUFNQ00sSUFORCxDQU1NLFVBQUNDLFFBQUQsRUFBYztBQUNoQkMsa0JBQU0sYUFBTjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZSCxRQUFaO0FBQ0gsU0FURCxFQVNHSSxLQVRILENBU1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSixrQkFBTSxvQkFBTjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0gsU0FaRDtBQWFILEtBZEQ7QUFlSCxDQXBCRDs7QUFzQkEsU0FBU1YsaUJBQVQsR0FBNkI7QUFDekI7QUFDQTs7QUFFQUMsVUFBTUMsSUFBTixDQUFXLHdCQUFYLEVBQXFDO0FBQ2pDQyxpQkFBUztBQUR3QixLQUFyQyxFQUdHQyxJQUhILENBR1EsVUFBVUMsUUFBVixFQUFvQjtBQUN0QkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWjtBQUNGO0FBQ0QsS0FOSCxFQU9HSSxLQVBILENBT1MsVUFBVUMsS0FBVixFQUFpQjtBQUNwQkgsZ0JBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNGO0FBQ0QsS0FWSDtBQVdEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBheGlvcyBmcm9tIGF4aW9zO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrXCIpLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICAgICAgICBwZXJmb3JtR2V0UmVxdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZhbHVhdGVcIikub25jbGljaz1mdW5jdGlvbigpe1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy8nLCB7XHJcbiAgICAgICAgICAgIGZvcm11bGEgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXVsYScpXHJcbiAgICAgICAgICAgIC8qaWYgKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhJykgPSBcImNvdWNvdVwiIC8vY2FsY3VsYXRlRm9ybXVsYShmb3JtdWxhKVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIndlbGwgZG9uZSAhXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJlcnJldXIgbW9uIHBvdGUuLi5cIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1HZXRSZXF1ZXN0KCkge1xyXG4gICAgLy92YXIgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRSZXN1bHQxJyk7XHJcbiAgICAvL3Jlc3VsdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBcclxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS8nLCB7XHJcbiAgICAgICAgZm9ybXVsYTogXCIxKzFcIlxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy9yZXN1bHRFbGVtZW50LmlubmVySFRNTCA9IGdlbmVyYXRlU3VjY2Vzc0hUTUxPdXRwdXQocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgLy9yZXN1bHRFbGVtZW50LmlubmVySFRNTCA9IGdlbmVyYXRlRXJyb3JIVE1MT3V0cHV0KGVycm9yKTtcclxuICAgICAgfSk7ICAgXHJcbiAgfVxyXG4gICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);