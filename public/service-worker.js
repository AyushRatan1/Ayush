if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.jpeg",revision:"49e03bd37a53a790d0869b8efa83d8db"},{url:"/_next/static/chunks/201.3ef88f16a64392d3.js",revision:"3ef88f16a64392d3"},{url:"/_next/static/chunks/256.9ac065f6238f1ee0.js",revision:"9ac065f6238f1ee0"},{url:"/_next/static/chunks/268.5ffeadc9d6ec62fe.js",revision:"5ffeadc9d6ec62fe"},{url:"/_next/static/chunks/275.6bc7c76b04f55586.js",revision:"6bc7c76b04f55586"},{url:"/_next/static/chunks/432-ececc1b002cf462e.js",revision:"ececc1b002cf462e"},{url:"/_next/static/chunks/58a3678d-f89272476ecdaefb.js",revision:"f89272476ecdaefb"},{url:"/_next/static/chunks/61905917.e03de3a9a172c346.js",revision:"e03de3a9a172c346"},{url:"/_next/static/chunks/669.4aa4d43279392604.js",revision:"4aa4d43279392604"},{url:"/_next/static/chunks/732.f63b257c3602dcab.js",revision:"f63b257c3602dcab"},{url:"/_next/static/chunks/778.fa69db8f0ca5e81b.js",revision:"fa69db8f0ca5e81b"},{url:"/_next/static/chunks/e39c296e.8fcaf8e4230d7eef.js",revision:"8fcaf8e4230d7eef"},{url:"/_next/static/chunks/ee9ce975-e357a86298b555a6.js",revision:"e357a86298b555a6"},{url:"/_next/static/chunks/framework-49c6cecf1f6d5795.js",revision:"49c6cecf1f6d5795"},{url:"/_next/static/chunks/main-51a4ec791555d11b.js",revision:"51a4ec791555d11b"},{url:"/_next/static/chunks/pages/_app-4f8d9bb8b1bef97a.js",revision:"4f8d9bb8b1bef97a"},{url:"/_next/static/chunks/pages/_error-7a92967bea80186d.js",revision:"7a92967bea80186d"},{url:"/_next/static/chunks/pages/index-2f0f087016b12c17.js",revision:"2f0f087016b12c17"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-02ff42acf4f81fb6.js",revision:"02ff42acf4f81fb6"},{url:"/_next/static/css/8defb7b8e8631d9b.css",revision:"8defb7b8e8631d9b"},{url:"/_next/static/css/9021ea1e0784d42f.css",revision:"9021ea1e0784d42f"},{url:"/_next/static/lD69tX8VflPAPIPTNHemv/_buildManifest.js",revision:"f9827a35273c69e1fc2239f41009d267"},{url:"/_next/static/lD69tX8VflPAPIPTNHemv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/56d4c7a1c09c3371-s.woff2",revision:"43b1d1276722d640d51608db4600bb69"},{url:"/_next/static/media/7e6a2e30184bb114-s.p.woff2",revision:"bca21fe1983e7d9137ef6e68e05f3aee"},{url:"/assets/1.jpeg",revision:"49e03bd37a53a790d0869b8efa83d8db"},{url:"/assets/2.jpg",revision:"938e429de3885b76040363754e8ce64f"},{url:"/assets/3.png",revision:"8c48e31e4b4a60fd3d0c31dc6bc98485"},{url:"/assets/4.png",revision:"e85d0ad9f586e946cf4ad744e4839dfa"},{url:"/assets/5.mp4",revision:"f8b7108fcab39e164e71d1d1adc3af07"},{url:"/assets/VED2.mp4",revision:"1982a10e3e5d1ac735d93fa4950c3469"},{url:"/assets/infinitevps.webm",revision:"f7b371e070057472204ab2ae0b8915d4"},{url:"/assets/logo.webp",revision:"65c9a0758232b4ebb67062c77dc51dd4"},{url:"/assets/portfolio.webm",revision:"3c5c99872974c5db962f4aa1d8da08ce"},{url:"/assets/scene.splinecode",revision:"a86155ea39bd500447e9c825ef110b58"},{url:"/assets/translate_bot.webm",revision:"9fc3ca04ec7b1aa9e328d64f5a0532ca"},{url:"/assets/unqueue.webm",revision:"04cd7ece4cb5b88a718605b596046cc9"},{url:"/assets/wrona.jpeg",revision:"89872f2806610edde5ea90ee8afbace6"},{url:"/favicon.ico",revision:"9f394dd2d1f01ab67d08ad0a0d2fc977"},{url:"/fonts/ClashGrotesk-Variable.woff2",revision:"218f4f81bdee5932a127929c6d693f0c"},{url:"/icon-192x192.png",revision:"3d82a3c3a8f93ada0df0fac471f90a04"},{url:"/icon-256x256.png",revision:"163a0793bd04edca75d788db5be7e16f"},{url:"/icon-384x384.png",revision:"60d91c093fdce918a995cebcf4cfe957"},{url:"/icon-512x512.png",revision:"2d8845afaf9400bfd34c4b160c448e36"},{url:"/icon.png",revision:"3291c8cea285691c1c56d8457d907948"},{url:"/manifest.json",revision:"b8d2bf851ba8b1021f65761f4509e956"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
