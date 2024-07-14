'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c23e99d607b7339e0633152b0b5e8e5",
"assets/AssetManifest.bin.json": "01cbb95a93fb05c709ec5c91f1e88f01",
"assets/AssetManifest.json": "edc84d8813882b8651a2c01df164e1b8",
"assets/assets/fonts/H_Techno.ttf": "8eda9f728eb5a6d71841c76a3325d19d",
"assets/assets/fonts/Sarbaz.TTF": "425876cc9cba2a08e54641f4b47b3b7e",
"assets/assets/fonts/W_yekan.TTF": "6a6fd036ad4a8e2883a427f942104bf9",
"assets/assets/fonts/W_yekan_Bold.TTF": "0d6f94f8ccabb0b315b21bded975cd50",
"assets/assets/fonts/W_Zar.TTF": "f9cbe0914106f5415f7cfef7a8446069",
"assets/assets/fonts/W_Zar_Bold.TTF": "b84910726f6be08de6493362dbbc8a1b",
"assets/assets/fonts/W_Zar_Italic.TTF": "ad18f809da8b106d6c59aac75380c8c9",
"assets/assets/images/1.png": "77ad50dae1431828b82d8c861230e855",
"assets/assets/images/2.png": "8530b29f3db4d2467da0c5339730b239",
"assets/assets/images/arab1.jfif": "3a007161b7da25260fd316c046e6eee7",
"assets/assets/images/arab2.jfif": "75ae8bf0c1d34732e75be1ad9c6e4739",
"assets/assets/images/avatar.png": "d08c8442f90e68301439c0ac96e0a020",
"assets/assets/images/back.png": "26c951d77b85cffc6093ed2efb85a446",
"assets/assets/images/blade.png": "5f85ea2ab41e4f72aae13ff4b03446ee",
"assets/assets/images/blogo.png": "72ce8787c1fde2c31c61e6b1dfffd6b3",
"assets/assets/images/blogo2.png": "e29862bad24372ffa4facdb781e47392",
"assets/assets/images/blueGrey.png": "a83659a4188780bcff665fff1623fff8",
"assets/assets/images/chalender.gif": "2cb01e6049f623513d9bb1e52629830c",
"assets/assets/images/change_accent.png": "eac9da1fa6ca45e91de699f052982c73",
"assets/assets/images/clear.png": "0bd1620c666d1025ed7cb3132fbdd0cf",
"assets/assets/images/cross.png": "1b308e778c06d43b51240eb834e712f0",
"assets/assets/images/des.png": "f7e1b1d2a22b5b08367df98fdfc627be",
"assets/assets/images/dot.png": "3981d1b42bbed7f9dbb0e0971953a22a",
"assets/assets/images/down.png": "45b3d14b3fa06cde6b54ccd73a208e9a",
"assets/assets/images/eitaa.png": "325c3424657a123e58415e156e4a9eb6",
"assets/assets/images/greyContainer.png": "7e3cc43816ebcfc87d08886ffa9928cf",
"assets/assets/images/holy.png": "bb3b4529fef4703b6e3074e7eb8d411c",
"assets/assets/images/info.png": "8eb6c94c9c863624bf262318a7a9f883",
"assets/assets/images/iraq.png": "b597ddc2c3fd91b8cc857743b8052fdc",
"assets/assets/images/iraq2.png": "3243a6ac2a6f9aad706b0237d9d6bfb3",
"assets/assets/images/iraq3.png": "8530b29f3db4d2467da0c5339730b239",
"assets/assets/images/lebanon.png": "b54c373313c65d0d0fb3be5967657b3e",
"assets/assets/images/loading.gif": "b26e6ccce7ff8dd5a2926bf616039a76",
"assets/assets/images/loading2.gif": "336ff74b6300ff7b804ebc09975dc8fe",
"assets/assets/images/loading3.gif": "d2e870d822d957fe6123a6459eec1951",
"assets/assets/images/lock.gif": "0a806af03fd01243a908a31bf2443b4c",
"assets/assets/images/minus.png": "b130ea7f17ca2539f8ef33c0a3f592f7",
"assets/assets/images/nosound.png": "aacf6f3d5a6f37763dcb384f72166484",
"assets/assets/images/onSupport.gif": "3acf196827c0c2fe482085dee37888b2",
"assets/assets/images/on_air.gif": "0f943793df2e167edfc251df0cb495ab",
"assets/assets/images/photoAvatar.png": "24f1c1e13882cdd80f6637e418b34e6f",
"assets/assets/images/plans.jpg": "4a761c893f460aac789b7263dee44d8d",
"assets/assets/images/power.png": "523f1cf4a13eaa7c6f1dbdf4998f2614",
"assets/assets/images/refresh.png": "09671496f6f41ddf907be6b96cfd1475",
"assets/assets/images/slash.png": "191a88d9de016a13af22e6e0abe67dd0",
"assets/assets/images/sound.png": "495d0eca2ffb4233d81c77b6995cc0b2",
"assets/assets/images/star.png": "4303c76c0a9aec1b4b20f5539049e2b7",
"assets/assets/images/startd.png": "aa2b1463c7ec71009e260ed3ae28e387",
"assets/assets/images/telegram.png": "af43c217b12cd2e3313232165703de93",
"assets/assets/images/tick.png": "a52d17d2138ea95da3ddd7a25a1c13ef",
"assets/assets/images/uae.png": "77ad50dae1431828b82d8c861230e855",
"assets/assets/images/vert.png": "f5be683fa6db13b7dc49397f797ee125",
"assets/assets/images/whatsapp.png": "8e941316cbafec0d592a5cac1f0fbf86",
"assets/assets/images/yellowContainer.png": "77c112efe95499b02cb53ec4f7e96a28",
"assets/assets/svg/account.svg": "85f89ef3b8d632403d207cf2541d0310",
"assets/assets/svg/addTicket.svg": "1bb94b9304752f75c2088b8a57122426",
"assets/assets/svg/book-open-sel.svg": "18ac95db13c7e8e776752ad7fbf39809",
"assets/assets/svg/book-open.svg": "05152ebc5548356dc884d9e8de222815",
"assets/assets/svg/bookmark.svg": "fad132a9286b4e5c5d395c759b078995",
"assets/assets/svg/bookmark2.svg": "da0e185251f29f505d18f3ade846134e",
"assets/assets/svg/BookmarkDic.svg": "85bb3b140396ca5ea977d7eb28503daf",
"assets/assets/svg/bookmarkRed.svg": "6c9d3e8b45c27d26d8e1d957c0ae3701",
"assets/assets/svg/burjAlArab.svg": "0fe48839213f5f108c11db18c1d12fa2",
"assets/assets/svg/cameraPlus.svg": "d32bc58fe45b5f0cebaa00879c4b75b8",
"assets/assets/svg/checkCircle.svg": "e9c0616ad8c21249f025001b5823bf70",
"assets/assets/svg/clock.svg": "4a8de5b35643482808744355410b5dce",
"assets/assets/svg/close.svg": "2c2d17fa714ccbaeb12d836f03c0ff89",
"assets/assets/svg/Close_round.svg": "3635b034ac4c33f3cd8e20322e01a14b",
"assets/assets/svg/courseDetDict.svg": "fd8674567dd5232b762f4f13780b56bd",
"assets/assets/svg/courseDetPhone.svg": "9c0d47d71bff45931c2d2b384d3208b6",
"assets/assets/svg/courseDetStudent.svg": "7e71b9a735e1109b0fc1c6de3aa19f68",
"assets/assets/svg/courseDetTable.svg": "c54cff62b1d117fd16f310ac86083e35",
"assets/assets/svg/courseDetTeacher.svg": "af1ad2394a937209e550a900b4b3a2b3",
"assets/assets/svg/courseNote.svg": "6703bb757887dd4f7e1e68297d76acd8",
"assets/assets/svg/coursePencil.svg": "23b92b74a63ca4944e2e9c8d413a476f",
"assets/assets/svg/coursePhoneCall.svg": "8ddff2785f2076c56dbfbd704e0eefbc",
"assets/assets/svg/coursePlay.svg": "160a93a7c650a56df2869f40da8a7c92",
"assets/assets/svg/courseSaleDetCancel.svg": "ee2131f9bbb6659099080338e0892c10",
"assets/assets/svg/courseSaleDetTick.svg": "5b1f858fa269dcc6f5a8d0a6ebcb32b9",
"assets/assets/svg/courseVideo.svg": "233c02cac7a4c9592050c6a497810beb",
"assets/assets/svg/dic.svg": "0537474064120e181e3913223f051dc8",
"assets/assets/svg/dictionary.svg": "86f0cadb55b7662b0f5efc8c42b27952",
"assets/assets/svg/dictionaryPage.svg": "3c3e384bda37ab1114a4d4dc0cb28c2f",
"assets/assets/svg/dictSearch.svg": "f03c8b7440435c2d9ef620d0dffbdcad",
"assets/assets/svg/dot.svg": "8991513dd779c8d04afd226afac55f57",
"assets/assets/svg/download.svg": "7342f6b4732da2d8dcb883cf5e9d8591",
"assets/assets/svg/eitaa.svg": "477e828fdfaf7246e17267f2d2e4efaf",
"assets/assets/svg/filter.svg": "e0d330d03760e640537123e17fb08ef8",
"assets/assets/svg/home.svg": "af3960abf9cfe67e4c33a70603618481",
"assets/assets/svg/home2.svg": "9c31320b8b6b46bd8af19b09ad7efad7",
"assets/assets/svg/HomeSel.svg": "f3a6b788796120cd10b7690a237d5ed9",
"assets/assets/svg/instagram.svg": "e096ff609d2bd63c9509362fd216368b",
"assets/assets/svg/introduce.svg": "67b68d93b3a4c5c89a0c0a5193d94c37",
"assets/assets/svg/karbalaDark.svg": "fdfa8b67a0e1645577986e5c1a139879",
"assets/assets/svg/karbalaLight.svg": "0de9a6c52de85bc231229d5c52f4e066",
"assets/assets/svg/lantern.svg": "8652d3b2a437a9ed1ed1c81758944367",
"assets/assets/svg/like.svg": "6aa62032d3312d7223637ec064868cf1",
"assets/assets/svg/linearLoading.svg": "156006c705e82d32928a562b1790486e",
"assets/assets/svg/manWithCamel.svg": "a86e1e8a43a30d2a2d7d6e16a057df22",
"assets/assets/svg/mic.svg": "b6e18fa039d40b3f891f666561992f76",
"assets/assets/svg/minus.svg": "47efbca6529eac126b6335e4175d60c8",
"assets/assets/svg/nebras.svg": "f788784ceae625018ba8f113dda9d74f",
"assets/assets/svg/newLabel.svg": "68ee9810d6047c85c51aad5e73c05609",
"assets/assets/svg/noSound.svg": "f72b18c11d147d6a6cfda8888a4bc061",
"assets/assets/svg/note-sel.svg": "91fe35f12ca1fd2f4406f63219fd19f4",
"assets/assets/svg/note.svg": "5872fa71dfa694980a1cbde94cb167ff",
"assets/assets/svg/NotePencil.svg": "7888326603d5ee562142767726f24159",
"assets/assets/svg/notification.svg": "8624411ac03ac70eb13d5c76d90491a5",
"assets/assets/svg/pageNote.svg": "e40ec213747726e7c0867e0b98cea8bc",
"assets/assets/svg/paperClip.svg": "df545682ca909a6eb0b56b986d1ce13b",
"assets/assets/svg/person.svg": "a3f0ecad85da53faaa8c2019e99503e9",
"assets/assets/svg/PhoneCall.svg": "fac0e1786f34fc74c42e0d896de95e70",
"assets/assets/svg/qmark.svg": "58b8b1f06b87c1a971eb334391a13cb3",
"assets/assets/svg/search.svg": "ef4c84a9d38cdf7b5f35e6b9473375f8",
"assets/assets/svg/sendMessage.svg": "8ea1c29dc775d06ff0e964481fc12c55",
"assets/assets/svg/share.svg": "c63d29b1a61bb5a65a34009c3bd2887f",
"assets/assets/svg/Show.svg": "00505613012cc0562725f021a95c5ffa",
"assets/assets/svg/sort.svg": "f1c52436742f3f20d1ce607e1f8b0278",
"assets/assets/svg/sound.svg": "68c2498b120377b16d077df7052aff4b",
"assets/assets/svg/speaker.svg": "5386a872fe4c6f7a811e42f577354d32",
"assets/assets/svg/support.svg": "c9d3a6ca07924b312db1b2df0ab954b9",
"assets/assets/svg/support2.svg": "b8458bc1e3400a42963ea42cb45e9e0a",
"assets/assets/svg/telegram.svg": "cf1ee969bd5ee95e1171d7c0ee793969",
"assets/assets/svg/uae.svg": "565231b2f2955ca87a1ea323de0e08a0",
"assets/assets/svg/user.svg": "4d842d8fc8a20b13d02f43591b2b8d46",
"assets/assets/svg/user2.svg": "0fb9c8c8a3a5f02cfb248ff174c7ea6e",
"assets/assets/svg/Video.svg": "6fb559bb16514d364c6706896e2c8303",
"assets/assets/svg/videos.svg": "91fb4cb4baa65ee692d9b49af70ce41e",
"assets/assets/svg/volume.svg": "e53b0e4f710abe5ff8d18b701f06b832",
"assets/assets/svg/v_bookmark.svg": "22a4e8091e82b8179dbf4d9c1af5d15a",
"assets/assets/svg/v_download.svg": "f6a8c6a2010783e54258145947d3baca",
"assets/assets/svg/v_lastseen.svg": "d1fb4307b0be0ce27e6c225786bb671e",
"assets/assets/svg/v_video.svg": "07c4388c83d2bfa6ba0c46c7457db026",
"assets/assets/svg/xCircle.svg": "0297b25cd0a7306e9fc51285d30cb888",
"assets/assets/svg/youtube.svg": "d86b3238cdab321110b7e54a7fc5daeb",
"assets/FontManifest.json": "e94a73c79ef619ebd3d27d275d9e820f",
"assets/fonts/MaterialIcons-Regular.otf": "6a5a0644894ce4da3adc74e1e9c4a171",
"assets/NOTICES": "f139b8873cbb73443d896b566d2c2900",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2a1cc9d94354f685c9473034391077f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d85fbaa7002b53ac4545ceb682592d70",
"/": "d85fbaa7002b53ac4545ceb682592d70",
"main.dart.js": "e5b6051987e9390207feb89f29433e06",
"manifest.json": "2ed08bc99442f9e6efca02ccf9e52282",
"version.json": "7415273f6e9efbe8046fc2bac38b13fd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
