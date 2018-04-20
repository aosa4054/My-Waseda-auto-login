// ==UserScript==
// @name         My Waseda Auto Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://iaidp.ia.waseda.jp/idp/profile/SAML2/Redirect/SSO*
// @grant        none
//@require       https://iaidp.ia.waseda.jp/idp/js/jquery.min.js
// ==/UserScript==

(function() {
    document.getElementById("j_username").value="君のログインId";
    document.getElementById("j_password").value="君のパスワード";
    document.getElementById("btn-save").click();
})();
