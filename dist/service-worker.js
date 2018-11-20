/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["public/images/icons/android-icon-144x144.png","ab62dbc6761a691855487e628b7e8c13"],["public/images/icons/android-icon-192x192.png","48cd682a2b7c78dfabc1c7f06f70d75b"],["public/images/icons/android-icon-36x36.png","830712fda8f6cbb3d6c2d2cf4f7028de"],["public/images/icons/android-icon-48x48.png","4de6b33392199a61277dbb78a3dfe4fc"],["public/images/icons/android-icon-72x72.png","7410790a849a506cb65dcb5a35059ace"],["public/images/icons/android-icon-96x96.png","2a800a4beef5652415796ddf01a40804"],["public/images/icons/apple-icon-114x114.png","dd5708bb72680c96a3608e48f5b0b130"],["public/images/icons/apple-icon-120x120.png","d936dcea429ed6095b2edf77c100d614"],["public/images/icons/apple-icon-144x144.png","ab62dbc6761a691855487e628b7e8c13"],["public/images/icons/apple-icon-152x152.png","590813dd54cea21521373cfccf402a64"],["public/images/icons/apple-icon-180x180.png","0e73e31a2df81dad050e5662ce7d8c92"],["public/images/icons/apple-icon-57x57.png","644c91d5c819a6418b5874f3c41e5db1"],["public/images/icons/apple-icon-60x60.png","1045de0d41290b853c4ff3d83a4e76fc"],["public/images/icons/apple-icon-72x72.png","7410790a849a506cb65dcb5a35059ace"],["public/images/icons/apple-icon-76x76.png","aabe4764f1dcf952c7f4540501eb8fc4"],["public/images/icons/apple-icon-precomposed.png","7f5728ac89d654291f05f99dead1e24a"],["public/images/icons/apple-icon.png","7f5728ac89d654291f05f99dead1e24a"],["public/images/icons/favicon-16x16.png","beb88e877f3baa76d00ae539088f30c1"],["public/images/icons/favicon-32x32.png","3d2194657a31dd1b71df625aefec135f"],["public/images/icons/favicon-96x96.png","2a800a4beef5652415796ddf01a40804"],["public/images/icons/favicon.ico","eeb0e318276d03f53f4ec4314fbd306e"],["public/images/icons/icon-128x128.png","dd1acaaadc33ad892f736bdd07885232"],["public/images/icons/icon-144x144.png","f27db772310ee9b7840667f359503a1b"],["public/images/icons/icon-152x152.png","b45538efa206d0d465ae65546bb00190"],["public/images/icons/icon-192x192.png","b7d7e6e66cd560938a62702d20ecf262"],["public/images/icons/icon-384x384.png","60ef47a1d5a1545088391d34148e6689"],["public/images/icons/icon-512x512.png","8d3a25cdd734820466f5241b6f903cfe"],["public/images/icons/icon-72x72.png","d1340fabba8e7dd6abedd13c436bfd07"],["public/images/icons/icon-96x96.png","f6dcf0944a4deb636dbc7aeb6e366df7"],["public/images/icons/ms-icon-144x144.png","ab62dbc6761a691855487e628b7e8c13"],["public/images/icons/ms-icon-150x150.png","d5fd7a8e38f6ec70b6cc3bc88dceee52"],["public/images/icons/ms-icon-310x310.png","07f2842104051d4699878350dd7149f7"],["public/images/icons/ms-icon-70x70.png","788280895c634de5176961ebaf8d74b7"],["src/App.jsx","917785534e77b080c6bd848e7f0f4d1d"],["src/assets/img/waves.gif","6af86a855341a34afc113d9354454424"],["src/assets/styles/app.scss","7eb28f5e82412b5c08d97ea144597ae9"],["src/assets/styles/fonts/ClearSans-Bold-webfont.eot","fbfe96064a04a6dce661bc92a45ea0c2"],["src/assets/styles/fonts/ClearSans-Bold-webfont.svg","d492d06ef6d689d309b6bcc1aca7e9ee"],["src/assets/styles/fonts/ClearSans-Bold-webfont.woff","8e55742896553de18fbed1a44baf1d79"],["src/assets/styles/fonts/ClearSans-Light-webfont.eot","390bbf24f730678e85d01eb7280b710f"],["src/assets/styles/fonts/ClearSans-Light-webfont.svg","4779f2a99353fd19e58289e886cdc261"],["src/assets/styles/fonts/ClearSans-Light-webfont.woff","cc10b51ebde2156baf4012fbc9b3a0c1"],["src/assets/styles/fonts/ClearSans-Regular-webfont.eot","7717288f8feab0f46c3cfd22aeb694fd"],["src/assets/styles/fonts/ClearSans-Regular-webfont.svg","efdfc2ba743236d3745ec1ce3b64d710"],["src/assets/styles/fonts/ClearSans-Regular-webfont.woff","051b44622bff6697c5591a681f33eb6a"],["src/assets/styles/fonts/Pacifico-Regular.woff","fe33d439e2979e62f9cad3d286d2f6e5"],["src/assets/styles/fonts/font.scss","5c0d2d5207523a5529ec76e236063088"],["src/components/Cell/index.js","40a105f3a2559e8ed764c4562759a39d"],["src/components/Game/index.jsx","b046e52333c0891702bc098fc6f2bb8a"],["src/components/Grid/index.js","16494a94e1580a35545ce47a6ee41dcd"],["src/components/Header/index.jsx","f355ed3a1489a237d0a18dc887d2c102"],["src/components/Instructions/index.jsx","480406d1daf073ac7044c1c069e2cc83"],["src/components/Score/index.js","15df8cf3a4b1db5a5c32eb6e4af9431d"],["src/components/index.js","6ea6a88cd3db602e41b263e27cc0a2b4"],["src/elements/Button.js","01c1480150ff6da5f137373868f3b5e0"],["src/elements/Container.js","d1437b36290de6441d0d5e5298b5a372"],["src/elements/GameFactory.js","47594eac7ae8a51518b6cd8b070f1ddb"],["src/elements/Icon.js","d16d31f1bd2adeb045df50b051b62aa7"],["src/elements/Modal.js","6eb60407a53916df80eb9e53d434c86a"],["src/elements/Text.js","7d431e645180a138edfd2fe51ca6eaab"],["src/elements/index.js","0e36a3a3a070af574c8b4c0fb6e23d69"],["src/hoc/index.js","642b7bf018aea1f89386f7273f242bd6"],["src/hoc/keyboardManager/index.js","6de9c8ee6c5afd4e54989fc34d2cea15"],["src/pages/Home.jsx","bb6d28b87658da017795dd6fe0dd5fca"],["src/pages/index.js","4b17068157f4d02529499283e49110dd"],["src/utils/color.js","0969cfa3651ae0a78029a4d061b54da1"],["src/utils/elevation.js","756d082150b6692dfe7102364de64a58"],["src/utils/game.js","a587406b5b1c68b539969e1d865d498d"],["src/utils/index.js","4a937f593045363e7e005be8609b7e38"],["src/utils/keyframes.js","e1ed707a8a4eeaee0c42d405452bfa60"],["src/utils/portal.js","3e7d02fee919439d9d5bb4b1d3bd1ccb"],["src/utils/transition.js","5485c405a83e1d38d0c10a12c1d114a8"]];
var cacheName = 'sw-precache-v3-15puzzle-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







