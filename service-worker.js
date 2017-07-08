"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","26bf43c3b7e2e81c4185004dc6e752e7"],["/static/css/main.b4d99266.css","2dd5361f52ccdccf6ad19da281c6c96c"],["/static/js/main.b59fd324.js","6acaa8da3e82bb850868ebadd4aebb93"],["/static/media/bg1_1252.2aaa9a8a.jpg","2aaa9a8a5eb1ee688dcfa6fd217db88e"],["/static/media/bg1_16_9_1106.32e0870d.jpg","32e0870d337b5aa13dff19996b2fdf5f"],["/static/media/bg1_16_9_1289.550450f3.jpg","550450f31a5fa2d79a7396714e5cebac"],["/static/media/bg1_16_9_1440.437db12f.jpg","437db12f5b831b63c6827a84eb51e969"],["/static/media/bg1_1756.56564e33.jpg","56564e3391eba8ae15cf13ee3bb2dd61"],["/static/media/bg1_2199.c6568be8.jpg","c6568be8b10f7ca852e4925c94ea2ba9"],["/static/media/bg1_2560.d109f029.jpg","d109f0297598638414c2e6a84431c50a"],["/static/media/bg1_4_3_1053.e5ca4e76.jpg","e5ca4e76f7e328ba2d5c4fc4c6cd8b5e"],["/static/media/bg1_4_3_1226.18625b17.jpg","18625b1777276982b6c5bdac4d3c8a57"],["/static/media/bg1_4_3_1388.e4f052e8.jpg","e4f052e80a4d467c948abe7f3b24c205"],["/static/media/bg1_4_3_819.2aad465d.jpg","2aad465d10f4aceb4b029bbfe3220d53"],["/static/media/bg1_9_16_640.5e97fa26.jpg","5e97fa26b496c2b81d41a0f1623ac3da"],["/static/media/bg1_9_16_738.d590437b.jpg","d590437b3324c0e96d89b6d58f8f636e"],["/static/media/bg1_9_16_810.618a99e3.jpg","618a99e3eb8823ebfd6f2217c403b661"],["/static/media/bg2_1104.4244ae81.png","4244ae815084649f7313e41b349dc923"],["/static/media/bg2_1572.6021e0b2.png","6021e0b2d55ca591bcb1a68f918ce6de"],["/static/media/bg2_16_9_1012.40fb03d3.png","40fb03d3d95d612aa42faac553f40251"],["/static/media/bg2_16_9_1184.9da653b6.png","9da653b696f52755e25198aee3e90587"],["/static/media/bg2_16_9_1440.228cb9f1.png","228cb9f155bbaa1ed9ae8fbf09affe7b"],["/static/media/bg2_16_9_596.29bf7b1d.png","29bf7b1d1ffde28f979c23d5862fe410"],["/static/media/bg2_16_9_820.1385b9ff.png","1385b9ff413bd5cc8a5322ef69276e56"],["/static/media/bg2_2002.820d7fe3.png","820d7fe368020e23a937b996060db096"],["/static/media/bg2_2560.36b032e9.png","36b032e9d1d5878e38a04cd39b7dcf56"],["/static/media/bg2_4_3_1155.bf2b26a3.png","bf2b26a31ea3b7aa4832ed0f38eeffb4"],["/static/media/bg2_4_3_1388.bae1d330.png","bae1d33066e88e5674f9e1aab2a88f24"],["/static/media/bg2_4_3_771.4878fe29.png","4878fe29f9865ebd3e92f627e00a25bb"],["/static/media/bg2_4_3_970.8e8bcd24.png","8e8bcd2469e2407db40469cd62d37627"],["/static/media/bg2_9_16_640.04ecb417.png","04ecb417c6097fb8e4b22283db8353fd"],["/static/media/bg2_9_16_700.56417cdc.png","56417cdcb7702aac389d2116515bc7bb"],["/static/media/bg2_9_16_775.7b42fdea.png","7b42fdead005405a1ff976d9cd820eb0"],["/static/media/bg2_9_16_810.3ea6b675.png","3ea6b6757dfb7dd3fb7c40d3fb4d2136"],["/static/media/bitbucket.1a155f9b.svg","1a155f9b67173cb6e39081e29636f1b3"],["/static/media/gitlab.ab089c02.svg","ab089c02c8a54a63a347b47190857329"],["/static/media/macos.63d12988.svg","63d12988ecc4ac353631405ea1995a71"],["/static/media/my_photo.ce2f7ae1.jpg","ce2f7ae1d77be6f87fb14da2644e1a4f"],["/static/media/pycharm.cf481367.svg","cf481367baf118513a9c7e1c0170bfaa"],["/static/media/sketch.212928f6.svg","212928f64d1287ae36a1a1e8b9332e64"],["/static/media/slack.324c0c7e.svg","324c0c7ee498005335ab3302ebebb997"],["/static/media/toggl.d8acdea4.svg","d8acdea4edaf9048552c272c698ccc98"],["/static/media/zeplin.d73d8555.svg","d73d8555f7bc20aeb6ae8236861383ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});