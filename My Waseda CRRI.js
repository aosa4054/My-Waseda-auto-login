// ==UserScript==
// @name         My Waseda CR/RI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://my.waseda.jp/portal/view/portal-top-view
// @grant        none
// ==/UserScript==

(function() {
    document.getElementById("portMyWaseda").insertAdjacentHTML('afterend','<a href="https://coursereg.waseda.jp/portal/simpleportal.php?HID_P14=JA" target="_blank" style="margin-left: 18px">科目登録・成績照会</a>');
})();
