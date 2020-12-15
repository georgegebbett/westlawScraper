
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var caseName;
var fullCitation;
var year;
var reporter;
var volume;
var page;
var court;


chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message:"whatIsName"}, function(response){
    	console.log(response.citation)
        caseName = response.name
    	fullCitation = response.citation
        court = response.court
        year = /\[?\(?(\d+)\]?\)? (.+) (\d+)/.exec(fullCitation)[1]
        reporter = /\[?\(?(\d+)\]?\)? (.+) (\d+)/.exec(fullCitation)[2]
        page = /\[?\(?(\d+)\]?\)? (.+) (\d+)/.exec(fullCitation)[3]
        console.log(year)
        console.log(reporter)
        console.log(page)
        alert(caseName.concat("\n", court, "\n", fullCitation));
    })
  });
});