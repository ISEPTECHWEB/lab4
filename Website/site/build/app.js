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
eval("\n\nwindow.onload = function () {\n    document.getElementById(\"check\").onclick = function () {\n\n        if (document.getElementById('formula').value) {\n            performPostRequest(0);\n        } else {\n            paragraph(-1);\n        }\n    };\n\n    document.getElementById(\"evaluate\").onclick = function () {\n        if (document.getElementById('formula').value) {\n            performPostRequest(1);\n        } else {\n            paragraph(-1);\n        }\n    };\n\n    function performPostRequest(choice) {\n        var form = document.getElementById('formula').value;\n        axios.post('http://localhost:8081/', {\n            formula: form\n        }).then(function (response) {\n            console.log(response);\n            if (choice == 0) {\n                paragraph(0);\n            } else {\n                //TODO le calcul\n                str = document.getElementById('formula');\n                answer = calculate(parseCalculationString(str.value));\n                p = document.getElementById('msg');\n                p.innerHTML = \"Result: \" + answer;\n            }\n        }).catch(function (error) {\n            console.log(error);\n            paragraph(-10);\n        });\n    }\n\n    function paragraph(err) {\n        p = document.getElementById('msg');\n        if (err == 0) {\n            p.innerHTML = 'ok!';\n            p.style.color = \"green\";\n        } else if (err == 1) {\n            p.innerHTML = '';\n            p.style.color = \"green\";\n        } else if (err == -1) {\n            p.style.color = \"red\";\n            p.innerHTML = 'Error, enter a formula...';\n        } else {\n            p.style.color = \"red\";\n            p.innerHTML = 'Error, formula is wrongly written...';\n        }\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2luZGV4LmpzP2RhZDQiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJ2YWx1ZSIsInBlcmZvcm1Qb3N0UmVxdWVzdCIsInBhcmFncmFwaCIsImNob2ljZSIsImZvcm0iLCJheGlvcyIsInBvc3QiLCJmb3JtdWxhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0ciIsImFuc3dlciIsImNhbGN1bGF0ZSIsInBhcnNlQ2FsY3VsYXRpb25TdHJpbmciLCJwIiwiaW5uZXJIVE1MIiwiY2F0Y2giLCJlcnJvciIsImVyciIsInN0eWxlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7O0FBRUFBLE9BQU9DLE1BQVAsR0FBZ0IsWUFBVTtBQUN0QkMsYUFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsT0FBakMsR0FBeUMsWUFBVTs7QUFFL0MsWUFBSUYsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0UsS0FBdkMsRUFBNkM7QUFDekNDLCtCQUFtQixDQUFuQjtBQUNILFNBRkQsTUFFSztBQUNEQyxzQkFBVSxDQUFDLENBQVg7QUFDSDtBQUNKLEtBUEQ7O0FBU0FMLGFBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLE9BQXBDLEdBQTRDLFlBQVU7QUFDbEQsWUFBSUYsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0UsS0FBdkMsRUFBNkM7QUFDekNDLCtCQUFtQixDQUFuQjtBQUNILFNBRkQsTUFFSztBQUNEQyxzQkFBVSxDQUFDLENBQVg7QUFDSDtBQUNKLEtBTkQ7O0FBUUEsYUFBU0Qsa0JBQVQsQ0FBNEJFLE1BQTVCLEVBQW9DO0FBQ2hDLFlBQUlDLE9BQU9QLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNFLEtBQTlDO0FBQ0FLLGNBQU1DLElBQU4sQ0FBVyx3QkFBWCxFQUFxQztBQUNqQ0MscUJBQVNIO0FBRHdCLFNBQXJDLEVBR0NJLElBSEQsQ0FHTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCQyxvQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsZ0JBQUlOLFVBQVUsQ0FBZCxFQUFnQjtBQUNaRCwwQkFBVSxDQUFWO0FBQ0gsYUFGRCxNQUVNO0FBQ0Y7QUFDQVUsc0JBQU1mLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBTjtBQUNBZSx5QkFBU0MsVUFBVUMsdUJBQXVCSCxJQUFJWixLQUEzQixDQUFWLENBQVQ7QUFDQWdCLG9CQUFJbkIsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFKO0FBQ0FrQixrQkFBRUMsU0FBRixHQUFZLGFBQVlKLE1BQXhCO0FBQ0g7QUFDSixTQWRELEVBZUNLLEtBZkQsQ0FlTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BCVCxvQkFBUUMsR0FBUixDQUFZUSxLQUFaO0FBQ0FqQixzQkFBVSxDQUFDLEVBQVg7QUFDSCxTQWxCRDtBQW1CSDs7QUFFRCxhQUFTQSxTQUFULENBQW1Ca0IsR0FBbkIsRUFBdUI7QUFDbkJKLFlBQUluQixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQUo7QUFDQSxZQUFJc0IsT0FBTyxDQUFYLEVBQWE7QUFDVEosY0FBRUMsU0FBRixHQUFjLEtBQWQ7QUFDQUQsY0FBRUssS0FBRixDQUFRQyxLQUFSLEdBQWdCLE9BQWhCO0FBQ0gsU0FIRCxNQUdNLElBQUlGLE9BQU8sQ0FBWCxFQUFhO0FBQ2ZKLGNBQUVDLFNBQUYsR0FBYyxFQUFkO0FBQ0FELGNBQUVLLEtBQUYsQ0FBUUMsS0FBUixHQUFnQixPQUFoQjtBQUNILFNBSEssTUFHQSxJQUFJRixPQUFPLENBQUMsQ0FBWixFQUFjO0FBQ2hCSixjQUFFSyxLQUFGLENBQVFDLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQU4sY0FBRUMsU0FBRixHQUFjLDJCQUFkO0FBQ0gsU0FISyxNQUdEO0FBQ0RELGNBQUVLLEtBQUYsQ0FBUUMsS0FBUixHQUFnQixLQUFoQjtBQUNBTixjQUFFQyxTQUFGLEdBQWMsc0NBQWQ7QUFDSDtBQUNKO0FBQ0osQ0F6REQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrXCIpLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhJykudmFsdWUpe1xyXG4gICAgICAgICAgICBwZXJmb3JtUG9zdFJlcXVlc3QoMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBhcmFncmFwaCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZhbHVhdGVcIikub25jbGljaz1mdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXVsYScpLnZhbHVlKXtcclxuICAgICAgICAgICAgcGVyZm9ybVBvc3RSZXF1ZXN0KDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwYXJhZ3JhcGgoLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUG9zdFJlcXVlc3QoY2hvaWNlKSB7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXVsYScpLnZhbHVlXHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxLycsIHtcclxuICAgICAgICAgICAgZm9ybXVsYTogZm9ybVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKGNob2ljZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaCgwKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPIGxlIGNhbGN1bFxyXG4gICAgICAgICAgICAgICAgc3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm11bGEnKTtcclxuICAgICAgICAgICAgICAgIGFuc3dlciA9IGNhbGN1bGF0ZShwYXJzZUNhbGN1bGF0aW9uU3RyaW5nKHN0ci52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2cnKTtcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MPVwiUmVzdWx0OiBcIisgYW5zd2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcGFyYWdyYXBoKC0xMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyYWdyYXBoKGVycil7XHJcbiAgICAgICAgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2cnKTtcclxuICAgICAgICBpZiAoZXJyID09IDApe1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9ICdvayEnXHJcbiAgICAgICAgICAgIHAuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgfWVsc2UgaWYgKGVyciA9PSAxKXtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIH1lbHNlIGlmIChlcnIgPT0gLTEpe1xyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSAnRXJyb3IsIGVudGVyIGEgZm9ybXVsYS4uLic7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHAuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9ICdFcnJvciwgZm9ybXVsYSBpcyB3cm9uZ2x5IHdyaXR0ZW4uLi4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction parseCalculationString(s) {\n    // --- Parse a calculation string into an array of numbers and operators\n    var calculation = [],\n        current = '';\n    for (var i = 0, ch; ch = s.charAt(i); i++) {\n        if ('*/+-'.indexOf(ch) > -1) {\n            if (current == '' && ch == '-') {\n                current = '-';\n            } else {\n                calculation.push(parseFloat(current), ch);\n                current = '';\n            }\n        } else {\n            current += s.charAt(i);\n        }\n    }\n    if (current != '') {\n        calculation.push(parseFloat(current));\n    }\n    return calculation;\n}\n\nfunction calculate(calc) {\n    // --- Perform a calculation expressed as an array of operators and numbers\n    var ops = [{ '*': function _(a, b) {\n            return a * b;\n        }, '/': function _(a, b) {\n            return a / b;\n        } }, { '+': function _(a, b) {\n            return a + b;\n        }, '-': function _(a, b) {\n            return a - b;\n        } }],\n        newCalc = [],\n        currentOp;\n    for (var i = 0; i < ops.length; i++) {\n        for (var j = 0; j < calc.length; j++) {\n            if (ops[i][calc[j]]) {\n                currentOp = ops[i][calc[j]];\n            } else if (currentOp) {\n                newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);\n                currentOp = null;\n            } else {\n                newCalc.push(calc[j]);\n            }\n            console.log(newCalc);\n        }\n        calc = newCalc;\n        newCalc = [];\n    }\n    if (calc.length > 1) {\n        console.log('Error: unable to resolve calculation');\n        return calc;\n    } else {\n        return calc[0];\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2NhbGN1bGF0b3IuanM/YzRiOCJdLCJuYW1lcyI6WyJwYXJzZUNhbGN1bGF0aW9uU3RyaW5nIiwicyIsImNhbGN1bGF0aW9uIiwiY3VycmVudCIsImkiLCJjaCIsImNoYXJBdCIsImluZGV4T2YiLCJwdXNoIiwicGFyc2VGbG9hdCIsImNhbGN1bGF0ZSIsImNhbGMiLCJvcHMiLCJhIiwiYiIsIm5ld0NhbGMiLCJjdXJyZW50T3AiLCJsZW5ndGgiLCJqIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBRSxTQUFTQSxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQSxRQUFJQyxjQUFjLEVBQWxCO0FBQUEsUUFDSUMsVUFBVSxFQURkO0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsRUFBaEIsRUFBb0JBLEtBQUtKLEVBQUVLLE1BQUYsQ0FBU0YsQ0FBVCxDQUF6QixFQUFzQ0EsR0FBdEMsRUFBMkM7QUFDdkMsWUFBSSxPQUFPRyxPQUFQLENBQWVGLEVBQWYsSUFBcUIsQ0FBQyxDQUExQixFQUE2QjtBQUN6QixnQkFBSUYsV0FBVyxFQUFYLElBQWlCRSxNQUFNLEdBQTNCLEVBQWdDO0FBQzVCRiwwQkFBVSxHQUFWO0FBQ0gsYUFGRCxNQUVPO0FBQ0hELDRCQUFZTSxJQUFaLENBQWlCQyxXQUFXTixPQUFYLENBQWpCLEVBQXNDRSxFQUF0QztBQUNBRiwwQkFBVSxFQUFWO0FBQ0g7QUFDSixTQVBELE1BT087QUFDSEEsdUJBQVdGLEVBQUVLLE1BQUYsQ0FBU0YsQ0FBVCxDQUFYO0FBQ0g7QUFDSjtBQUNELFFBQUlELFdBQVcsRUFBZixFQUFtQjtBQUNmRCxvQkFBWU0sSUFBWixDQUFpQkMsV0FBV04sT0FBWCxDQUFqQjtBQUNIO0FBQ0QsV0FBT0QsV0FBUDtBQUNIOztBQUVELFNBQVNRLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3JCO0FBQ0EsUUFBSUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxXQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxtQkFBVUQsSUFBSUMsQ0FBZDtBQUFBLFNBQU4sRUFBdUIsS0FBSyxXQUFDRCxDQUFELEVBQUlDLENBQUo7QUFBQSxtQkFBVUQsSUFBSUMsQ0FBZDtBQUFBLFNBQTVCLEVBQUQsRUFDQyxFQUFDLEtBQUssV0FBQ0QsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELElBQUlDLENBQWQ7QUFBQSxTQUFOLEVBQXVCLEtBQUssV0FBQ0QsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELElBQUlDLENBQWQ7QUFBQSxTQUE1QixFQURELENBQVY7QUFBQSxRQUVJQyxVQUFVLEVBRmQ7QUFBQSxRQUdJQyxTQUhKO0FBSUEsU0FBSyxJQUFJWixJQUFJLENBQWIsRUFBZ0JBLElBQUlRLElBQUlLLE1BQXhCLEVBQWdDYixHQUFoQyxFQUFxQztBQUNqQyxhQUFLLElBQUljLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsS0FBS00sTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2xDLGdCQUFJTixJQUFJUixDQUFKLEVBQU9PLEtBQUtPLENBQUwsQ0FBUCxDQUFKLEVBQXFCO0FBQ2pCRiw0QkFBWUosSUFBSVIsQ0FBSixFQUFPTyxLQUFLTyxDQUFMLENBQVAsQ0FBWjtBQUNILGFBRkQsTUFFTyxJQUFJRixTQUFKLEVBQWU7QUFDbEJELHdCQUFRQSxRQUFRRSxNQUFSLEdBQWlCLENBQXpCLElBQ0lELFVBQVVELFFBQVFBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBekIsQ0FBVixFQUF1Q04sS0FBS08sQ0FBTCxDQUF2QyxDQURKO0FBRUFGLDRCQUFZLElBQVo7QUFDSCxhQUpNLE1BSUE7QUFDSEQsd0JBQVFQLElBQVIsQ0FBYUcsS0FBS08sQ0FBTCxDQUFiO0FBQ0g7QUFDREMsb0JBQVFDLEdBQVIsQ0FBWUwsT0FBWjtBQUNIO0FBQ0RKLGVBQU9JLE9BQVA7QUFDQUEsa0JBQVUsRUFBVjtBQUNIO0FBQ0QsUUFBSUosS0FBS00sTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCRSxnQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0EsZUFBT1QsSUFBUDtBQUNILEtBSEQsTUFHTztBQUNILGVBQU9BLEtBQUssQ0FBTCxDQUFQO0FBQ0g7QUFDSiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBmdW5jdGlvbiBwYXJzZUNhbGN1bGF0aW9uU3RyaW5nKHMpIHtcclxuICAgIC8vIC0tLSBQYXJzZSBhIGNhbGN1bGF0aW9uIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgdmFyIGNhbGN1bGF0aW9uID0gW10sXHJcbiAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGNoOyBjaCA9IHMuY2hhckF0KGkpOyBpKyspIHtcclxuICAgICAgICBpZiAoJyovKy0nLmluZGV4T2YoY2gpID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gJycgJiYgY2ggPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gJy0nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRpb24ucHVzaChwYXJzZUZsb2F0KGN1cnJlbnQpLCBjaCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50ICs9IHMuY2hhckF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50ICE9ICcnKSB7XHJcbiAgICAgICAgY2FsY3VsYXRpb24ucHVzaChwYXJzZUZsb2F0KGN1cnJlbnQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxjdWxhdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlKGNhbGMpIHtcclxuICAgIC8vIC0tLSBQZXJmb3JtIGEgY2FsY3VsYXRpb24gZXhwcmVzc2VkIGFzIGFuIGFycmF5IG9mIG9wZXJhdG9ycyBhbmQgbnVtYmVyc1xyXG4gICAgdmFyIG9wcyA9IFt7JyonOiAoYSwgYikgPT4gYSAqIGIsICcvJzogKGEsIGIpID0+IGEgLyBifSxcclxuICAgICAgICAgICAgICAgeycrJzogKGEsIGIpID0+IGEgKyBiLCAnLSc6IChhLCBiKSA9PiBhIC0gYn1dLFxyXG4gICAgICAgIG5ld0NhbGMgPSBbXSxcclxuICAgICAgICBjdXJyZW50T3A7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAob3BzW2ldW2NhbGNbal1dKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3AgPSBvcHNbaV1bY2FsY1tqXV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudE9wKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDYWxjW25ld0NhbGMubGVuZ3RoIC0gMV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcChuZXdDYWxjW25ld0NhbGMubGVuZ3RoIC0gMV0sIGNhbGNbal0pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9wID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0NhbGMucHVzaChjYWxjW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdDYWxjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsYyA9IG5ld0NhbGM7XHJcbiAgICAgICAgbmV3Q2FsYyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhbGMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogdW5hYmxlIHRvIHJlc29sdmUgY2FsY3VsYXRpb24nKTtcclxuICAgICAgICByZXR1cm4gY2FsYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGNbMF07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9qcy9jYWxjdWxhdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);