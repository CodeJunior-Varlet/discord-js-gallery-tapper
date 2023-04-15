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
exports.id = "pages/api/images";
exports.ids = ["pages/api/images"];
exports.modules = {

/***/ "(api)/./src/pages/api/images.tsx":
/*!**********************************!*\
  !*** ./src/pages/api/images.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const response = await fetch(`https://discord.com/api/channels/${process.env.DISCORD_CHANNEL_ID}/messages`, {\n        headers: {\n            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`\n        }\n    });\n    const messages = await response.json();\n    const images = messages.filter((message)=>message.attachments.length > 0).map((message)=>({\n            id: message.id,\n            url: message.attachments[0].url,\n            name: message.attachments[0].filename\n        }));\n    res.status(200).json(images);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQWtCZSxlQUFlQSxRQUFRQyxHQUFtQixFQUFFQyxHQUE2QixFQUFFO0lBQ3hGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFHQyxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxJQUFJLEVBQUVKLFFBQVFDLEdBQUcsQ0FBQ0ksaUJBQWlCLENBQUMsQ0FBQztRQUN2RDtJQUNGO0lBRUEsTUFBTUMsV0FBc0IsTUFBTVIsU0FBU1MsSUFBSTtJQUMvQyxNQUFNQyxTQUFTRixTQUNaRyxNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsV0FBVyxDQUFDQyxNQUFNLEdBQUcsR0FDakRDLEdBQUcsQ0FBQyxDQUFDSCxVQUFhO1lBQ2pCSSxJQUFJSixRQUFRSSxFQUFFO1lBQ2RDLEtBQUtMLFFBQVFDLFdBQVcsQ0FBQyxFQUFFLENBQUNJLEdBQUc7WUFDL0JDLE1BQU1OLFFBQVFDLFdBQVcsQ0FBQyxFQUFFLENBQUNNLFFBQVE7UUFDdkM7SUFFRnBCLElBQUlxQixNQUFNLENBQUMsS0FBS1gsSUFBSSxDQUFDQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9pbWFnZXMudHN4PzhkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5cclxuaW50ZXJmYWNlIEF0dGFjaG1lbnQge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGZpbGVuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNZXNzYWdlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGF0dGFjaG1lbnRzOiBBdHRhY2htZW50W107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbWFnZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8SW1hZ2VbXT4pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Rpc2NvcmQuY29tL2FwaS9jaGFubmVscy8ke3Byb2Nlc3MuZW52LkRJU0NPUkRfQ0hBTk5FTF9JRH0vbWVzc2FnZXNgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCb3QgJHtwcm9jZXNzLmVudi5ESVNDT1JEX0JPVF9UT0tFTn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBpbWFnZXMgPSBtZXNzYWdlc1xyXG4gICAgLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5hdHRhY2htZW50cy5sZW5ndGggPiAwKVxyXG4gICAgLm1hcCgobWVzc2FnZSkgPT4gKHtcclxuICAgICAgaWQ6IG1lc3NhZ2UuaWQsXHJcbiAgICAgIHVybDogbWVzc2FnZS5hdHRhY2htZW50c1swXS51cmwsXHJcbiAgICAgIG5hbWU6IG1lc3NhZ2UuYXR0YWNobWVudHNbMF0uZmlsZW5hbWUsXHJcbiAgICB9KSk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGltYWdlcyk7XHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiRElTQ09SRF9DSEFOTkVMX0lEIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJESVNDT1JEX0JPVF9UT0tFTiIsIm1lc3NhZ2VzIiwianNvbiIsImltYWdlcyIsImZpbHRlciIsIm1lc3NhZ2UiLCJhdHRhY2htZW50cyIsImxlbmd0aCIsIm1hcCIsImlkIiwidXJsIiwibmFtZSIsImZpbGVuYW1lIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/images.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/images.tsx"));
module.exports = __webpack_exports__;

})();