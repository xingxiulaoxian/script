// ==UserScript==
// @name         去掉笔趣阁广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去广告
// @author       xingxiulaoxian
// @run-at       document-start
// @match        *://m.haobiquge.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=haobiquge.com
// @grant        none
// @updateURL    https://github.com/xingxiulaoxian/script/edit/main/tampermonkey/richStaats.js
// ==/UserScript==

(function() {
    'use strict';
    const writeln = document.writeln;
    document.writeln = function (...arg) {
        console.log(...arg)
    }
    // Your code here...
})();