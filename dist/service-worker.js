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

var precacheConfig = [["/15Puzzle.44ba090e.js","f8273fc786c0b52ac3f47bdbafbc4c9a"],["/15Puzzle.b3ebf31c.css","5eee0d965e45b6abef4b1311ac7707c4"],["/15Puzzle.e31bb0bc.css","2fad0a9d866e714d2e971cefe8eb8431"],["/15Puzzle.e31bb0bc.js","d624df24382d470e34b6ca33c19b8a33"],["/15Puzzle.fadd0d01.js","5f79990e822b5efd943ac13f997c2944"],["/ClearSans-Bold-webfont.333ef146.svg","d492d06ef6d689d309b6bcc1aca7e9ee"],["/ClearSans-Bold-webfont.6a6f5f3f.eot","fbfe96064a04a6dce661bc92a45ea0c2"],["/ClearSans-Bold-webfont.a06c1d6b.eot","fbfe96064a04a6dce661bc92a45ea0c2"],["/ClearSans-Bold-webfont.a9b36898.woff","8e55742896553de18fbed1a44baf1d79"],["/ClearSans-Bold-webfont.ae49b717.woff","8e55742896553de18fbed1a44baf1d79"],["/ClearSans-Bold-webfont.be59597a.svg","d492d06ef6d689d309b6bcc1aca7e9ee"],["/ClearSans-Light-webfont.0bec73e1.woff","cc10b51ebde2156baf4012fbc9b3a0c1"],["/ClearSans-Light-webfont.93fb9361.svg","4779f2a99353fd19e58289e886cdc261"],["/ClearSans-Light-webfont.95af1afc.svg","4779f2a99353fd19e58289e886cdc261"],["/ClearSans-Light-webfont.9702d0c6.eot","390bbf24f730678e85d01eb7280b710f"],["/ClearSans-Light-webfont.fb98e0ac.woff","cc10b51ebde2156baf4012fbc9b3a0c1"],["/ClearSans-Light-webfont.fe3992bc.eot","390bbf24f730678e85d01eb7280b710f"],["/ClearSans-Regular-webfont.36ab9cce.woff","051b44622bff6697c5591a681f33eb6a"],["/ClearSans-Regular-webfont.3abd45a8.svg","efdfc2ba743236d3745ec1ce3b64d710"],["/ClearSans-Regular-webfont.662fe67c.eot","7717288f8feab0f46c3cfd22aeb694fd"],["/ClearSans-Regular-webfont.7df39fa9.eot","7717288f8feab0f46c3cfd22aeb694fd"],["/ClearSans-Regular-webfont.7edfc781.woff","051b44622bff6697c5591a681f33eb6a"],["/ClearSans-Regular-webfont.ac5ad80e.svg","efdfc2ba743236d3745ec1ce3b64d710"],["/Pacifico-Regular.2db5f2fb.woff","fe33d439e2979e62f9cad3d286d2f6e5"],["/Pacifico-Regular.c0c32478.woff","fe33d439e2979e62f9cad3d286d2f6e5"],["/android-icon-192x192.2224fb24.png","48cd682a2b7c78dfabc1c7f06f70d75b"],["/android-icon-192x192.4e496f37.png","48cd682a2b7c78dfabc1c7f06f70d75b"],["/android-icon-192x192.a98bc28c.png","48cd682a2b7c78dfabc1c7f06f70d75b"],["/apple-icon-114x114.2fc9d6ed.png","dd5708bb72680c96a3608e48f5b0b130"],["/apple-icon-114x114.43a9e7b9.png","dd5708bb72680c96a3608e48f5b0b130"],["/apple-icon-114x114.5399074d.png","dd5708bb72680c96a3608e48f5b0b130"],["/apple-icon-120x120.36d81a03.png","d936dcea429ed6095b2edf77c100d614"],["/apple-icon-120x120.7876c38d.png","d936dcea429ed6095b2edf77c100d614"],["/apple-icon-120x120.96af585b.png","d936dcea429ed6095b2edf77c100d614"],["/apple-icon-144x144.304b2e0f.png","ab62dbc6761a691855487e628b7e8c13"],["/apple-icon-144x144.bf7662e2.png","ab62dbc6761a691855487e628b7e8c13"],["/apple-icon-144x144.dcd7d6be.png","ab62dbc6761a691855487e628b7e8c13"],["/apple-icon-152x152.a5dad1eb.png","590813dd54cea21521373cfccf402a64"],["/apple-icon-152x152.fa0a10f3.png","590813dd54cea21521373cfccf402a64"],["/apple-icon-152x152.fda7d385.png","590813dd54cea21521373cfccf402a64"],["/apple-icon-180x180.23dfa880.png","0e73e31a2df81dad050e5662ce7d8c92"],["/apple-icon-180x180.25d172cc.png","0e73e31a2df81dad050e5662ce7d8c92"],["/apple-icon-180x180.ed5c6d2a.png","0e73e31a2df81dad050e5662ce7d8c92"],["/apple-icon-57x57.3dd9a698.png","644c91d5c819a6418b5874f3c41e5db1"],["/apple-icon-57x57.43068bd5.png","644c91d5c819a6418b5874f3c41e5db1"],["/apple-icon-57x57.af61f606.png","644c91d5c819a6418b5874f3c41e5db1"],["/apple-icon-60x60.1fd1201f.png","1045de0d41290b853c4ff3d83a4e76fc"],["/apple-icon-60x60.465cdb62.png","1045de0d41290b853c4ff3d83a4e76fc"],["/apple-icon-60x60.d71c2080.png","1045de0d41290b853c4ff3d83a4e76fc"],["/apple-icon-72x72.6359af68.png","7410790a849a506cb65dcb5a35059ace"],["/apple-icon-72x72.bae527d2.png","7410790a849a506cb65dcb5a35059ace"],["/apple-icon-72x72.f046d171.png","7410790a849a506cb65dcb5a35059ace"],["/apple-icon-76x76.2e67c8bc.png","aabe4764f1dcf952c7f4540501eb8fc4"],["/apple-icon-76x76.d79c3048.png","aabe4764f1dcf952c7f4540501eb8fc4"],["/apple-icon-76x76.e1f83920.png","aabe4764f1dcf952c7f4540501eb8fc4"],["/favicon-16x16.439d9b7f.png","beb88e877f3baa76d00ae539088f30c1"],["/favicon-16x16.47231610.png","beb88e877f3baa76d00ae539088f30c1"],["/favicon-16x16.bf1e38b7.png","beb88e877f3baa76d00ae539088f30c1"],["/favicon-32x32.5e673082.png","3d2194657a31dd1b71df625aefec135f"],["/favicon-32x32.60be016a.png","3d2194657a31dd1b71df625aefec135f"],["/favicon-32x32.f8351ce6.png","3d2194657a31dd1b71df625aefec135f"],["/favicon-96x96.15c7b6bc.png","2a800a4beef5652415796ddf01a40804"],["/favicon-96x96.2ca1ef79.png","2a800a4beef5652415796ddf01a40804"],["/favicon-96x96.f9c74ec5.png","2a800a4beef5652415796ddf01a40804"],["/index.html","09d105e1e61536b8b2e01b9e3c204145"],["/manifest.5a172ce2.js","0334425ebc3a5b2f969afc2e2f1b41b3"],["/manifest.742e1d13.js","92670eba7ffdacd5ab1f888705f11382"],["/manifest.90f2fcd3.js","8e91f1f4b5897bd76ca2b2c709a3d27d"],["/ms-icon-144x144.4b18ebf9.png","ab62dbc6761a691855487e628b7e8c13"],["/ms-icon-144x144.6e5b1b30.png","ab62dbc6761a691855487e628b7e8c13"],["/ms-icon-144x144.dcd7d6be.png","ab62dbc6761a691855487e628b7e8c13"],["/public/sw.js","0ee08f230c575b8409455bcb6a479e8f"],["/service-worker.js","88271c9aaafa0190f84d5f979db3348c"],["/waves.0ff540f5.gif","6af86a855341a34afc113d9354454424"],["/waves.ddcf5f9c.gif","6af86a855341a34afc113d9354454424"]];
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







