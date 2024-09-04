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

eval("const alert_menu = document.getElementById(\"alert_menu\");\r\nconst open_in_new_tab = document.getElementById(\"alert_openInNewTab\");\r\nconst alert_iframe = document.getElementById(\"alert_iframe\");\r\nconst hide_alert_menu_button = document.getElementById(\"hide_alert_menu\");\r\nconst search_bar = document.getElementById(\"search-navbar\");\r\nconst search_bar_mobile = document.getElementById(\"search-navbar-mobile\");\r\nconst alert_showInNewTab = document.getElementById(\"alert_openInNewTab\");\r\nconst alert_showInFullscreen = document.getElementById(\r\n  \"alert_openInFullscreen\"\r\n);\r\n\r\nfunction show_alert_menu(alert) {\r\n  // change alert_iframe src to the alert's url; /alerts/{alert}.html\r\n  alert_iframe.src = `/alerts/${alert}.html`;\r\n  alert_showInNewTab.onclick = () => {\r\n    window.open(`/alerts/${alert}.html`, \"_blank\");\r\n  };\r\n  alert_showInFullscreen.onclick = () => {\r\n    window.location.href = `/alerts/${alert}.html`;\r\n  };\r\n}\r\n\r\nfunction cleanInput(input) {\r\n  // remove script, html, css, and other dangerous tags; and make lowercase\r\n  return input\r\n    .replace(/<script[^>]*?>.*?<\\/script>/gi, \"\")\r\n    .replace(/<[\\/\\!]*?[^<>]*?>/gi, \"\")\r\n    .replace(/<style[^>]*?>.*?<\\/style>/gi, \"\")\r\n    .replace(/<![\\s\\S]*?--[ \\t\\n\\r]*>/gi, \"\")\r\n    .toLowerCase();\r\n}\r\n\r\nfunction find_alerts(query) {\r\n  // find the element which contains the query via xpath\r\n  const alert_button = document.evaluate(\r\n    `//button[contains(., '${cleanInput(query)}')]`,\r\n    document,\r\n    null,\r\n    XPathResult.FIRST_ORDERED_NODE_TYPE,\r\n    null\r\n  ).singleNodeValue;\r\n\r\n  // if the button exists, scroll to it\r\n  if (alert_button) {\r\n    alert_button.scrollIntoView();\r\n    alert_button.focus();\r\n  }\r\n  // if the button doesn't exist, alert the user\r\n  else {\r\n    alert(\"No alerts found that match: \" + cleanInput(query) + \"\");\r\n  }\r\n}\r\n\r\n// event listener for search-navbar if the enter key or search key on ios is pressed\r\nsearch_bar.addEventListener(\"keyup\", function (e) {\r\n  if (e.key === \"Enter\" || e.key === \"Search\") {\r\n    find_alerts(cleanInput(e.target.value));\r\n    search_bar.value = \"\";\r\n  }\r\n});\r\n\r\n// event listener for search-navbar-mobile if the enter key or search key on ios is pressed\r\nsearch_bar_mobile.addEventListener(\"keyup\", function (e) {\r\n  if (e.key === \"Enter\" || e.key === \"Search\") {\r\n    find_alerts(cleanInput(e.target.value));\r\n    search_bar_mobile.value = \"\";\r\n  }\r\n});\r\n\r\n// check if get parameter search exists, if so execute find_alerts\r\nif (window.location.search.includes(\"search=\")) {\r\n  find_alerts(\r\n    window.location.search.replace(\"?search=\", \"\").replace(\"%20\", \" \")\r\n  );\r\n  // remove the search parameter from the url\r\n  window.history.replaceState({}, document.title, \"/\");\r\n}\r\n\r\nwindow.show_alert_menu = show_alert_menu;\r\nwindow.find_alerts = find_alerts;\r\nwindow.cleanInput = cleanInput;\r\n\n\n//# sourceURL=webpack://tesla-alerts-dictionary/./src/index.js?");

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

const buttons = document.querySelectorAll('.alerts_btn');

buttons.forEach(button => {
  if (button.textContent.trim() !== "") {
    button.classList.add('has-content');
  }
});

