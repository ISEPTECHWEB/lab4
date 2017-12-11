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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.onload = function () {\n\n    // get formula when check\n    document.getElementById(\"check\").onclick = function () {\n        if (document.getElementById('formula').value) {\n            performPostRequest(0);\n        } else {\n            paragraph(-1);\n        }\n    };\n\n    // Get formula when evaluate\n    document.getElementById(\"evaluate\").onclick = function () {\n        if (document.getElementById('formula').value) {\n            performPostRequest(1);\n        } else {\n            paragraph(-1);\n        }\n    };\n\n    // Post to the API\n    function performPostRequest(choice) {\n        form = document.getElementById('formula').value;\n        axios.post('http://localhost:8081/', {\n            formula: form\n        }).then(function (response) {\n            console.log(response);\n            if (choice == 0) {\n                paragraph(0);\n                checkingMore(str);\n                res = document.getElementById('postResult');\n                res.style.visibility = \"hidden\";\n            } else {\n                str = document.getElementById('formula');\n                paragraph(0);\n                errCheck = checkingMore(str);\n                if (errCheck == 0) {\n                    answer = calculate(parseCalculationString(str.value));\n                    result(answer);\n                }\n            }\n        }).catch(function (error) {\n            console.log(error);\n            paragraph(-10);\n        });\n    }\n\n    // Function that add more checkings than the API\n    function checkingMore(str) {\n        str.value = str.value.toString().replace(/\\s+/g, '');\n        partStr = ['/+', '/-', '/*', '//', '*+', '*-', '**', '*/', '++', '+-', '+*', '+/', '-+', '--', '-*', '-/'];\n        for (var word in partStr) {\n            if (str.value.toString().indexOf(partStr[word] + \"\") !== -1) {\n                paragraph(-10);\n                return -1;;\n            }\n        }\n        if (str.toString().substring(0, 1) == \"*\" || str.toString().substring(0, 1) == \"/\" || str.toString().substring(0, 1) == \"+\" || str.toString().substring(0, 1) == \"-\" || str.toString().substring(0, 1) == \"=\") {\n            paragraph(-10);\n            return -1;\n        } else if (str.toString().indexOf(\"*\", str.length - 1) !== -1 || str.toString().indexOf(\"/\", str.length - 1) !== -1 || str.toString().indexOf(\"+\", str.length - 1) !== -1 || str.toString().indexOf(\"-\", str.length - 1) !== -1 || str.toString().indexOf(\"=\", str.length - 1) !== -1) {\n            paragraph(-10);\n            return -1;\n        } else if (str.value.toString().indexOf('/0') !== -1) {\n            paragraph(-2);\n            return -1;\n        }\n        return 0;\n    }\n\n    // Function to display errors\n    function paragraph(err) {\n        p = document.getElementById('msg');\n        res = document.getElementById('postResult');\n        switch (err) {\n            case 0:\n                p.innerHTML = 'ok!';\n                p.style.color = \"green\";\n                break;\n            case -1:\n                p.style.color = \"red\";\n                p.innerHTML = 'Error, enter a formula...';\n                res.style.visibility = \"hidden\";\n                break;\n            case -2:\n                p.style.color = \"red\";\n                p.innerHTML = 'MathError...';\n                res.style.visibility = \"hidden\";\n                break;\n            default:\n                p.style.color = \"red\";\n                p.innerHTML = 'Error, formula is wrongly written...';\n                res.style.visibility = \"hidden\";\n        }\n    }\n\n    // Function to display result\n    function result(val) {\n        p = document.getElementById('postResult');\n        p.innerHTML = 'Result : ' + val;\n        p.style.visibility = \"visible\";\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2luZGV4LmpzP2RhZDQiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJ2YWx1ZSIsInBlcmZvcm1Qb3N0UmVxdWVzdCIsInBhcmFncmFwaCIsImNob2ljZSIsImZvcm0iLCJheGlvcyIsInBvc3QiLCJmb3JtdWxhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNoZWNraW5nTW9yZSIsInN0ciIsInJlcyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImVyckNoZWNrIiwiYW5zd2VyIiwiY2FsY3VsYXRlIiwicGFyc2VDYWxjdWxhdGlvblN0cmluZyIsInJlc3VsdCIsImNhdGNoIiwiZXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJwYXJ0U3RyIiwid29yZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJlcnIiLCJwIiwiaW5uZXJIVE1MIiwiY29sb3IiLCJ2YWwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE1BQVAsR0FBZ0IsWUFBVTs7QUFFdEI7QUFDQUMsYUFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsT0FBakMsR0FBeUMsWUFBVTtBQUMvQyxZQUFJRixTQUFTQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DRSxLQUF2QyxFQUE2QztBQUN6Q0MsK0JBQW1CLENBQW5CO0FBQ0gsU0FGRCxNQUVLO0FBQ0RDLHNCQUFVLENBQUMsQ0FBWDtBQUNIO0FBQ0osS0FORDs7QUFRQTtBQUNBTCxhQUFTQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxPQUFwQyxHQUE0QyxZQUFVO0FBQ2xELFlBQUlGLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNFLEtBQXZDLEVBQTZDO0FBQ3pDQywrQkFBbUIsQ0FBbkI7QUFDSCxTQUZELE1BRUs7QUFDREMsc0JBQVUsQ0FBQyxDQUFYO0FBQ0g7QUFDSixLQU5EOztBQVFBO0FB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QUNBRixrQkFBRUMsU0FBRixHQUFjLGNBQWQ7QUFDQW5CLG9CQUFJQyxLQUFKLENBQVVDLFVBQVYsR0FBdUIsUUFBdkI7QUFDRTtBQUNKO0FBQ0VnQixrQkFBRWpCLEtBQUYsQ0FBUW1CLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQUYsa0JBQUVDLFNBQUYsR0FBYyxzQ0FBZDtBQUNBbkIsb0JBQUlDLEtBQUosQ0FBVUMsVUFBVixHQUF1QixRQUF2QjtBQWxCSjtBQW9CSDs7QUFFRDtBQUNBLGFBQVNLLE1BQVQsQ0FBZ0JjLEdBQWhCLEVBQW9CO0FBQ2xCSCxZQUFJbkMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFKO0FBQ0FrQyxVQUFFQyxTQUFGLEdBQWMsY0FBWUUsR0FBMUI7QUFDQUgsVUFBRWpCLEtBQUYsQ0FBUUMsVUFBUixHQUFxQixTQUFyQjtBQUNEO0FBQ0osQ0EzR0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGdldCBmb3JtdWxhIHdoZW4gY2hlY2tcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tcIikub25jbGljaz1mdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXVsYScpLnZhbHVlKXtcclxuICAgICAgICAgICAgcGVyZm9ybVBvc3RSZXF1ZXN0KDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwYXJhZ3JhcGgoLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybXVsYSB3aGVuIGV2YWx1YXRlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2YWx1YXRlXCIpLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm11bGEnKS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHBlcmZvcm1Qb3N0UmVxdWVzdCgxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcGFyYWdyYXBoKC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9zdCB0byB0aGUgQVBJXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUG9zdFJlcXVlc3QoY2hvaWNlKSB7XHJcbiAgICAgICAgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhJykudmFsdWVcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODEvJywge1xyXG4gICAgICAgICAgICBmb3JtdWxhOiBmb3JtXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoY2hvaWNlID09IDApe1xyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoKDApO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmdNb3JlKHN0cik7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdFJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXVsYScpO1xyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoKDApO1xyXG4gICAgICAgICAgICAgICAgZXJyQ2hlY2sgPSBjaGVja2luZ01vcmUoc3RyKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJDaGVjayA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBjYWxjdWxhdGUocGFyc2VDYWxjdWxhdGlvblN0cmluZyhzdHIudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQoYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHBhcmFncmFwaCgtMTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgYWRkIG1vcmUgY2hlY2tpbmdzIHRoYW4gdGhlIEFQSVxyXG4gICAgZnVuY3Rpb24gY2hlY2tpbmdNb3JlKHN0cil7XHJcbiAgICAgICAgc3RyLnZhbHVlID0gc3RyLnZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgICAgICAgcGFydFN0ciA9IFsnLysnLCAnLy0nLCAnLyonLCAnLy8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnKisnLCAnKi0nLCAnKionLCAnKi8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJysrJywgJystJywgJysqJywgJysvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICctKycsICctLScsICctKicsICctLyddO1xyXG4gICAgICAgIGZvciAodmFyIHdvcmQgaW4gcGFydFN0cil7XHJcbiAgICAgICAgICAgIGlmKHN0ci52YWx1ZS50b1N0cmluZygpLmluZGV4T2YocGFydFN0clt3b3JkXSArIFwiXCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGgoLTEwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ci50b1N0cmluZygpLnN1YnN0cmluZygwLCAxKSA9PSBcIipcIiB8fCBzdHIudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMSkgPT0gXCIvXCIgfHwgc3RyLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEpID09IFwiK1wiIHx8IHN0ci50b1N0cmluZygpLnN1YnN0cmluZygwLCAxKSA9PSBcIi1cIiB8fCBzdHIudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMSkgPT0gXCI9XCIpIHtcclxuICAgICAgICAgICAgcGFyYWdyYXBoKC0xMCk7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0ci50b1N0cmluZygpLmluZGV4T2YoXCIqXCIsIHN0ci5sZW5ndGggLSAxKSAhPT0gLTEgfHwgc3RyLnRvU3RyaW5nKCkuaW5kZXhPZihcIi9cIiwgc3RyLmxlbmd0aCAtIDEpICE9PSAtMSB8fCBzdHIudG9TdHJpbmcoKS5pbmRleE9mKFwiK1wiLCBzdHIubGVuZ3RoIC0gMSkgIT09IC0xIHx8IHN0ci50b1N0cmluZygpLmluZGV4T2YoXCItXCIsIHN0ci5sZW5ndGggLSAxKSAhPT0gLTEgfHwgc3RyLnRvU3RyaW5nKCkuaW5kZXhPZihcIj1cIiwgc3RyLmxlbmd0aCAtIDEpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBwYXJhZ3JhcGgoLTEwKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZihzdHIudmFsdWUudG9TdHJpbmcoKS5pbmRleE9mKCcvMCcpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHBhcmFncmFwaCgtMik7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBlcnJvcnNcclxuICAgIGZ1bmN0aW9uIHBhcmFncmFwaChlcnIpe1xyXG4gICAgICAgIHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJyk7XHJcbiAgICAgICAgcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RSZXN1bHQnKTtcclxuICAgICAgICBzd2l0Y2goZXJyKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gJ29rISdcclxuICAgICAgICAgICAgcC5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSAnRXJyb3IsIGVudGVyIGEgZm9ybXVsYS4uLic7XHJcbiAgICAgICAgICAgIHJlcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIC0yOlxyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSAnTWF0aEVycm9yLi4uJ1xyXG4gICAgICAgICAgICByZXMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSAnRXJyb3IsIGZvcm11bGEgaXMgd3JvbmdseSB3cml0dGVuLi4uJztcclxuICAgICAgICAgICAgcmVzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBkaXNwbGF5IHJlc3VsdFxyXG4gICAgZnVuY3Rpb24gcmVzdWx0KHZhbCl7XHJcbiAgICAgIHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdFJlc3VsdCcpO1xyXG4gICAgICBwLmlubmVySFRNTCA9ICdSZXN1bHQgOiAnK3ZhbDtcclxuICAgICAgcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Function that parse a string mathematical formula into an array of numbers and operators\nfunction parseCalculationString(s) {\n    var calculation = [],\n        current = '';\n    for (var i = 0, ch; ch = s.charAt(i); i++) {\n        if ('*/+-'.indexOf(ch) > -1) {\n            // Include sign -\n            if (current == '' && ch == '-') {\n                current = '-';\n            } else {\n                calculation.push(parseFloat(current), ch); // Insert into array\n                current = '';\n            }\n        } else {\n            current += s.charAt(i);\n        }\n    }\n    if (current != '') {\n        calculation.push(parseFloat(current)); // Insert into array\n    }\n    return calculation;\n}\n\n// Function that perform a calculation from an array of operators and numbers\nfunction calculate(calc) {\n    var ops = [{ '*': function _(a, b) {\n            return a * b;\n        }, '/': function _(a, b) {\n            return a / b;\n        } }, { '+': function _(a, b) {\n            return a + b;\n        }, '-': function _(a, b) {\n            return a - b;\n        } }],\n        newCalc = [],\n        currentOp;\n    for (var i = 0; i < ops.length; i++) {\n        for (var j = 0; j < calc.length; j++) {\n            if (ops[i][calc[j]]) {\n                // Get operator\n                currentOp = ops[i][calc[j]];\n            } else if (currentOp) {\n                // Make calculation\n                newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);\n                currentOp = null;\n            } else {\n                // Add number to array\n                newCalc.push(calc[j]);\n            }\n            console.log(newCalc);\n        }\n        calc = newCalc;\n        newCalc = [];\n    }\n    if (calc.length > 1) {\n        // Handle error\n        console.log('Error: unable to resolve calculation');\n        return calc;\n    } else {\n        // Return the first and only number of the formula\n        return calc[0];\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2NhbGN1bGF0b3IuanM/YzRiOCJdLCJuYW1lcyI6WyJwYXJzZUNhbGN1bGF0aW9uU3RyaW5nIiwicyIsImNhbGN1bGF0aW9uIiwiY3VycmVudCIsImkiLCJjaCIsImNoYXJBdCIsImluZGV4T2YiLCJwdXNoIiwicGFyc2VGbG9hdCIsImNhbGN1bGF0ZSIsImNhbGMiLCJvcHMiLCJhIiwiYiIsIm5ld0NhbGMiLCJjdXJyZW50T3AiLCJsZW5ndGgiLCJqIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFDRTtBQUNBLFNBQVNBLHNCQUFULENBQWdDQyxDQUFoQyxFQUFtQztBQUNqQyxRQUFJQyxjQUFjLEVBQWxCO0FBQUEsUUFBc0JDLFVBQVUsRUFBaEM7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxFQUFoQixFQUFvQkEsS0FBS0osRUFBRUssTUFBRixDQUFTRixDQUFULENBQXpCLEVBQXNDQSxHQUF0QyxFQUEyQztBQUN2QyxZQUFJLE9BQU9HLE9BQVAsQ0FBZUYsRUFBZixJQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCO0FBQ0EsZ0JBQUlGLFdBQVcsRUFBWCxJQUFpQkUsTUFBTSxHQUEzQixFQUFnQztBQUM1QkYsMEJBQVUsR0FBVjtBQUNILGFBRkQsTUFFTztBQUNIRCw0QkFBWU0sSUFBWixDQUFpQkMsV0FBV04sT0FBWCxDQUFqQixFQUFzQ0UsRUFBdEMsRUFERyxDQUN1QztBQUMxQ0YsMEJBQVUsRUFBVjtBQUNIO0FBQ0osU0FSRCxNQVFPO0FBQ0hBLHVCQUFXRixFQUFFSyxNQUFGLENBQVNGLENBQVQsQ0FBWDtBQUNIO0FBQ0o7QUFDRCxRQUFJRCxXQUFXLEVBQWYsRUFBbUI7QUFDZkQsb0JBQVlNLElBQVosQ0FBaUJDLFdBQVdOLE9BQVgsQ0FBakIsRUFEZSxDQUN3QjtBQUMxQztBQUNELFdBQU9ELFdBQVA7QUFDSDs7QUFFRDtBQUNBLFNBQVNRLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3JCLFFBQUlDLE1BQU0sQ0FBQyxFQUFDLEtBQUssV0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELElBQUlDLENBQWQ7QUFBQSxTQUFOLEVBQXVCLEtBQUssV0FBQ0QsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELElBQUlDLENBQWQ7QUFBQSxTQUE1QixFQUFELEVBQ0MsRUFBQyxLQUFLLFdBQUNELENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFVRCxJQUFJQyxDQUFkO0FBQUEsU0FBTixFQUF1QixLQUFLLFdBQUNELENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFVRCxJQUFJQyxDQUFkO0FBQUEsU0FBNUIsRUFERCxDQUFWO0FBQUEsUUFFSUMsVUFBVSxFQUZkO0FBQUEsUUFHSUMsU0FISjtBQUlBLFNBQUssSUFBSVosSUFBSSxDQUFiLEVBQWdCQSxJQUFJUSxJQUFJSyxNQUF4QixFQUFnQ2IsR0FBaEMsRUFBcUM7QUFDakMsYUFBSyxJQUFJYyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLEtBQUtNLE1BQXpCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNsQyxnQkFBSU4sSUFBSVIsQ0FBSixFQUFPTyxLQUFLTyxDQUFMLENBQVAsQ0FBSixFQUFxQjtBQUFFO0FBQ25CRiw0QkFBWUosSUFBSVIsQ0FBSixFQUFPTyxLQUFLTyxDQUFMLENBQVAsQ0FBWjtBQUNILGFBRkQsTUFFTyxJQUFJRixTQUFKLEVBQWU7QUFBRTtBQUNwQkQsd0JBQVFBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBekIsSUFDSUQsVUFBVUQsUUFBUUEsUUFBUUUsTUFBUixHQUFpQixDQUF6QixDQUFWLEVBQXVDTixLQUFLTyxDQUFMLENBQXZDLENBREo7QUFFQUYsNEJBQVksSUFBWjtBQUNILGFBSk0sTUFJQTtBQUFFO0FBQ0xELHdCQUFRUCxJQUFSLENBQWFHLEtBQUtPLENBQUwsQ0FBYjtBQUNIO0FBQ0RDLG9CQUFRQyxHQUFSLENBQVlMLE9BQVo7QUFDSDtBQUNESixlQUFPSSxPQUFQO0FBQ0FBLGtCQUFVLEVBQVY7QUFDSDtBQUNELFFBQUlKLEtBQUtNLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUFFO0FBQ25CRSxnQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0EsZUFBT1QsSUFBUDtBQUNILEtBSEQsTUFHTztBQUFFO0FBQ0wsZUFBT0EsS0FBSyxDQUFMLENBQVA7QUFDSDtBQUNKIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyBGdW5jdGlvbiB0aGF0IHBhcnNlIGEgc3RyaW5nIG1hdGhlbWF0aWNhbCBmb3JtdWxhIGludG8gYW4gYXJyYXkgb2YgbnVtYmVycyBhbmQgb3BlcmF0b3JzXHJcbiAgZnVuY3Rpb24gcGFyc2VDYWxjdWxhdGlvblN0cmluZyhzKSB7XHJcbiAgICB2YXIgY2FsY3VsYXRpb24gPSBbXSwgY3VycmVudCA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGNoOyBjaCA9IHMuY2hhckF0KGkpOyBpKyspIHtcclxuICAgICAgICBpZiAoJyovKy0nLmluZGV4T2YoY2gpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gSW5jbHVkZSBzaWduIC1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gJycgJiYgY2ggPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gJy0nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRpb24ucHVzaChwYXJzZUZsb2F0KGN1cnJlbnQpLCBjaCkgLy8gSW5zZXJ0IGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgKz0gcy5jaGFyQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnQgIT0gJycpIHtcclxuICAgICAgICBjYWxjdWxhdGlvbi5wdXNoKHBhcnNlRmxvYXQoY3VycmVudCkpOyAvLyBJbnNlcnQgaW50byBhcnJheVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhbGN1bGF0aW9uO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0aGF0IHBlcmZvcm0gYSBjYWxjdWxhdGlvbiBmcm9tIGFuIGFycmF5IG9mIG9wZXJhdG9ycyBhbmQgbnVtYmVyc1xyXG5mdW5jdGlvbiBjYWxjdWxhdGUoY2FsYykge1xyXG4gICAgdmFyIG9wcyA9IFt7JyonOiAoYSwgYikgPT4gYSAqIGIsICcvJzogKGEsIGIpID0+IGEgLyBifSxcclxuICAgICAgICAgICAgICAgeycrJzogKGEsIGIpID0+IGEgKyBiLCAnLSc6IChhLCBiKSA9PiBhIC0gYn1dLFxyXG4gICAgICAgIG5ld0NhbGMgPSBbXSxcclxuICAgICAgICBjdXJyZW50T3A7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAob3BzW2ldW2NhbGNbal1dKSB7IC8vIEdldCBvcGVyYXRvclxyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wID0gb3BzW2ldW2NhbGNbal1dO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRPcCkgeyAvLyBNYWtlIGNhbGN1bGF0aW9uXHJcbiAgICAgICAgICAgICAgICBuZXdDYWxjW25ld0NhbGMubGVuZ3RoIC0gMV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcChuZXdDYWxjW25ld0NhbGMubGVuZ3RoIC0gMV0sIGNhbGNbal0pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gQWRkIG51bWJlciB0byBhcnJheVxyXG4gICAgICAgICAgICAgICAgbmV3Q2FsYy5wdXNoKGNhbGNbal0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0NhbGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxjID0gbmV3Q2FsYztcclxuICAgICAgICBuZXdDYWxjID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoY2FsYy5sZW5ndGggPiAxKSB7IC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogdW5hYmxlIHRvIHJlc29sdmUgY2FsY3VsYXRpb24nKTtcclxuICAgICAgICByZXR1cm4gY2FsYztcclxuICAgIH0gZWxzZSB7IC8vIFJldHVybiB0aGUgZmlyc3QgYW5kIG9ubHkgbnVtYmVyIG9mIHRoZSBmb3JtdWxhXHJcbiAgICAgICAgcmV0dXJuIGNhbGNbMF07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9qcy9jYWxjdWxhdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);