// ==UserScript==
// @name			TTS Reader Extension
// @namespace		https://github.com/Amourspirit/TTS-Reader-Extension
// @version			0.1.0
// @description		Cleans up https://ttsreader.com tts app for cleaner experience
// @run-at			document-end
// @include			/^https?:\/\/www\.ttsreader\.com\*$/
// @match			http://ttsreader.com/
// @match			https://ttsreader.com/
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

	// Your code here...
	$('.row.text-center').css('display', 'none');
	$('.promotion').css('display', 'none');

	$('.home-carousel').css('display', 'none');
	$('.bar, .background-white').css('display', 'none');
	$('#footer').css('display', 'none');
	$('#copyright').css('display', 'none');

	$('#application').css('overflow-x', '');
	$('#application').css('background', 'transparent');
	$('.parent-ad-container').css('display', 'none'); // hide app left and right add container
	$('.col-md-8').css('width', '100%'); // expand main app container
})();
