chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({
			name:document.getElementsByClassName("co_title noTOC")[0].innerText,
			citation:/Reported\n(.+)\n/.exec(document.getElementsByClassName("co_docContentMetaField")[3].innerText)[1],
			court:/Court\n(.+)/.exec(document.getElementById("co_docContentCourt").innerText)[1]
		});
	}
);