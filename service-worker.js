"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","91471fdd48994cd24729961f98c44263"],["/static/css/main.62bf0f15.css","266b409d8016196f85bec6268ed4793a"],["/static/js/main.b884adcf.js","cc1a609f0e49ca0264267ed2348c9170"],["/static/media/bg1_1252.310e7de0.jpg","310e7de0248208fdff9c4cbae816986d"],["/static/media/bg1_16_9_1106.897414a2.jpg","897414a2d3cfe8ade683489c6b78a22c"],["/static/media/bg1_16_9_1289.ad4dfb95.jpg","ad4dfb95fa3b60455b9d9e474ce0a74c"],["/static/media/bg1_16_9_1440.8febfff8.jpg","8febfff8c8f08cdef344ff6d9f9061c7"],["/static/media/bg1_1756.c3005118.jpg","c30051187e9a6dd3e3862674cad8f73c"],["/static/media/bg1_2199.fd0ec28b.jpg","fd0ec28b2d7c9a8a91fe3cffd49ddc26"],["/static/media/bg1_2560.2f4f7f54.jpg","2f4f7f541e30a501dd091eb577f02ccd"],["/static/media/bg1_4_3_1053.f6cffa7f.jpg","f6cffa7f0c4ee3fb43b9370816ac7707"],["/static/media/bg1_4_3_1226.d7691537.jpg","d76915377ee695d22351589991207cc1"],["/static/media/bg1_4_3_1388.0ae497a9.jpg","0ae497a9103a02aa5d6b721b3352b90e"],["/static/media/bg1_4_3_819.74110350.jpg","74110350eb5df31a49f098d44e18b3db"],["/static/media/bg1_9_16_640.07aaae08.jpg","07aaae080ed304713fa7e6f39a4dbf13"],["/static/media/bg1_9_16_738.d35aef76.jpg","d35aef764903bb7b11e40678f4dbb828"],["/static/media/bg1_9_16_810.b05cc184.jpg","b05cc1840d260c4ea3d40b15eb1da2f9"],["/static/media/bg2_1104.0a9a62e9.png","0a9a62e98a22b35f28539e7d94c24245"],["/static/media/bg2_1572.440adf0e.png","440adf0e22b9774499c081926435106c"],["/static/media/bg2_16_9_1012.c00c8108.png","c00c81087407f9dc5c06c1cb8de62a64"],["/static/media/bg2_16_9_1184.7b6b9562.png","7b6b956230f1a022b5a0a292318246c6"],["/static/media/bg2_16_9_1440.5a473b54.png","5a473b541ecd54768d1724b5bed2ab22"],["/static/media/bg2_16_9_596.69422ab4.png","69422ab497fbd4ed0afd6a70191982d3"],["/static/media/bg2_16_9_820.00e4119d.png","00e4119d7033e67b1143983a3eb8053f"],["/static/media/bg2_2002.a9071f66.png","a9071f66dcd4de6426dddf985bf10715"],["/static/media/bg2_2560.52852293.png","528522932661af8cd29b33804cd253a0"],["/static/media/bg2_4_3_1155.67bfc2ff.png","67bfc2ff2d0cb9f98ab102e148d02b77"],["/static/media/bg2_4_3_1388.9115f6bd.png","9115f6bd1d6465a65b7f65536b885a7c"],["/static/media/bg2_4_3_771.ae5fa1a3.png","ae5fa1a3372d74feeac885e239826be3"],["/static/media/bg2_4_3_970.64b3cf90.png","64b3cf90f7eab535d035b38a91acdb41"],["/static/media/bg2_9_16_640.721f7146.png","721f7146b80e2c7e3f3af8245f17674d"],["/static/media/bg2_9_16_700.cb085848.png","cb0858486dfe190d30a998ec4d80b4eb"],["/static/media/bg2_9_16_775.d0921825.png","d0921825986ac36f8166feea3dc338c8"],["/static/media/bg2_9_16_810.71cbfc70.png","71cbfc705a9cd988e6e026695d59cb1c"],["/static/media/bitbucket.1a155f9b.svg","1a155f9b67173cb6e39081e29636f1b3"],["/static/media/coopico-rect.6d77706d.png","6d77706d64a6292abec427a38696c615"],["/static/media/gitlab.ab089c02.svg","ab089c02c8a54a63a347b47190857329"],["/static/media/macos.63d12988.svg","63d12988ecc4ac353631405ea1995a71"],["/static/media/malachite-rect.ce660124.png","ce6601242c1b405d04ab7ef9f2f73fb6"],["/static/media/my_photo.9e40a459.png","9e40a459b0938427daae9698b1769d0c"],["/static/media/myhome-rect.7c8f3f57.png","7c8f3f57a16cd08e0c5848091d643d9f"],["/static/media/navtv-mobile-rect.444b7525.png","444b75250366149101ae6b8ca3670bd6"],["/static/media/navtv-rect.bf108c9b.png","bf108c9bf844a4c050e05dc6f074e5cb"],["/static/media/nicechat-rect.52c13907.png","52c13907b940f16bc68ec4e4b641d391"],["/static/media/pycharm.cf481367.svg","cf481367baf118513a9c7e1c0170bfaa"],["/static/media/sketch.212928f6.svg","212928f64d1287ae36a1a1e8b9332e64"],["/static/media/slack.324c0c7e.svg","324c0c7ee498005335ab3302ebebb997"],["/static/media/toggl.d8acdea4.svg","d8acdea4edaf9048552c272c698ccc98"],["/static/media/zeplin.d73d8555.svg","d73d8555f7bc20aeb6ae8236861383ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});