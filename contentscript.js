/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /'file': '(.+?)'/;
var url = document.URL;
var ein = /einthusan/;
var allmyv = /allmyvideos/;
var vidto = /vidto/;
var playedto = /played/;
var megafiles = /megafiles/;
var bestreams = /bestreams/;
var cbs = /cbs/;
var vk = /vk/;
var streamcloud = /streamcloud/;
var vidspot = /vidspot/;
var magnovideo = /magnovideo/;


if(allmyv.test(url)){
    regex= /"file" : "(.+?)",/;
    
    
}
else if(vidto.test(url)){
    regex = /file_link = '(.+?)'/;
}
else if(playedto.test(url)){
    regex = /file: "(.+?)"/;
}
else if(megafiles.test(url)){
    regex = /file_link = '(.+?)'/;
}
else if(bestreams.test(url)){
    regex = /file: "(.+?)"/;
}
else if(cbs.test(url)){
    regex = /video.settings.pid = '(.*?)'/;
}
else if(vk.test(url)){
    regex720 = /"url720":"(.+?)"/;
    regex480 = /"url480":"(.+?)"/;
    regex = /"url360":"(.+?)"/;
    
}    
else if(streamcloud.test(url)){
    regex = /file: "(.+?)"/;
}
else if(vidspot.test(url)){
    regex = /"file" : "(.+?)",/;
}
else if(magnovideo.test(url)){
    regex = /swf?flv=(.+?)/;
}



// Test the text of the body element against our regular expression.
if(vk.test(url)){
    if (regex720.test(document.body.innerHTML)) {
      // The regular expression produced a match, so notify the background page.
      chrome.extension.sendRequest({msg:regex720.exec(document.body.innerHTML), url:url}, function(response) {});
    } else if(regex480.test(document.body.innerHTML)){
      chrome.extension.sendRequest({msg:regex480.exec(document.body.innerHTML), url:url}, function(response) {});
    } else if(regex.test(document.body.innerHTML)){
      chrome.extension.sendRequest({msg:regex.exec(document.body.innerHTML), url:url}, function(response) {});
    }

} else{

    if(regex.test(document.body.innerHTML)){
      chrome.extension.sendRequest({msg:regex.exec(document.body.innerHTML), url:url}, function(response) {});
    }
}    



