/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nlet products = [];\r\nlet text = \"\";\r\n\r\nasync function fetchProducts() {    \r\n    return await fetch('https://fakestoreapi.com/products')\r\n        .then(response => response.json())\r\n        .then(json => renderProducts(json))\r\n        .catch(error => console.log(\"Error!\"));\r\n}\r\nasync function fetchProduct(id) {\r\n    return await fetch('https://fakestoreapi.com/products/' + id)\r\n        .then(response => response.json())\r\n        // .then(json => renderProduct(json))\r\n        .then(json => {renderProduct(JSON.stringify(json))})\r\n        .catch(error => console.log(\"Error!\"));\r\n}\r\nfunction renderProduct(data) {\r\n    obj = JSON.parse(data)\r\n    const table = document.getElementById('table')\r\n    const row = `<tr>\r\n    <td>${obj.title}</td>\r\n    <td>${obj.price}$</td>\r\n    <td><a data-id\"${obj.id}\" class=\"delete\" href=\"javascript:void()\">×</a></td>\r\n</tr>`\r\n    table.innerHTML += row;\r\n}\r\nfunction renderProducts(json) {\r\n    const cards = document.getElementById('cards')\r\n    json.forEach(product => {\r\n        const cardHTML = `\r\n       <div class=\"card\">\r\n       <div class=\"card-image\">\r\n           <img src=\"${product.image}\" alt=\"sfa\">\r\n       </div>\r\n       <div class=\"card-details\">\r\n           <h2 class=\"card-title\">\r\n           ${product.title}\r\n           </h2>\r\n           <p class=\"card-description\">\r\n           ${product.description}\r\n           </p>\r\n           <div class=\"card-actions\">\r\n               <big class=\"price\">\r\n               ${product.price}\r\n               </big>\r\n               <big class=\"currency\">\r\n                   $\r\n               </big>\r\n               <a href=\"javascript:void()\" data-id=\"${product.id}\" class=\"add\">\r\n                   add to card\r\n               </a>\r\n           </div>\r\n       </div>\r\n   </div>\r\n        `\r\n        cards.innerHTML += cardHTML;\r\n    })\r\n    list = document.querySelectorAll(\".add\");\r\n    listDelete = document.querySelectorAll(\".delete\");\r\n    // console.log(list.length)\r\n    for (var i = 0; i < list.length; i++) {\r\n        list[i].addEventListener(\"click\", function (e) {\r\n            e.preventDefault();\r\n            //   alert(this.getAttribute('data-id'))\r\n            fetchProduct(this.getAttribute('data-id'))\r\n        });\r\n    }\r\n    \r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    fetchProducts()\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;