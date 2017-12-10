// ==UserScript==
// @name			TTS Reader Extension
// @namespace		https://github.com/Amourspirit/TTS-Reader-Extension
// @version			0.2.0
// @description		Cleans up https://ttsreader.com tts app for cleaner experience
// @run-at			document-end
// @match			http://ttsreader.com/online-reader/
// @match			https://ttsreader.com/online-reader/
// @grant			none
// @noframes
// @license			MIT
// @homepageURL     https://github.com/Amourspirit/TTS-Reader-Extension
// @update			https://github.com/Amourspirit/TTS-Reader-Extension/raw/master/TTS_Reader_Extension.user.js
// @downloadURL		https://github.com/Amourspirit/TTS-Reader-Extension/raw/master/TTS_Reader_Extension.user.js
// @contributionURL https://github.com/Amourspirit/TTS-Reader-Extension/
// ==/UserScript==
(function() {
    'use strict';

	document.getElementById('app_ad_banner_right').style.display = 'none';
	document.getElementById('app_ad_banner_left').style.display = 'none';
	document.getElementById('app_container').style.position = 'static';
	document.getElementById('goPremiumBtn').style.display = 'none';
	var app = document.getElementById('application');
	app.style.padding = '0px';
	app.style.margin = '0px';
	app.style.right = '0px';
	app.style.left = '0px';
	app.style.width = '100%';
	app.style.backgroundColor = 'white';
	app.style.maxWidth = '100%';

	var appC = document.getElementById('app_container');
	appC.style.right = '0px';
	appC.style.left = '0px';
	appC.style.width = '100%';

	var appP = document.getElementById('app_panel');
	appP.style.top = '70px';
})();
