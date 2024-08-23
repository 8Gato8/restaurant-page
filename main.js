(()=>{"use strict";var n={816:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".contacts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 70px;\n}\n\n.contacts__list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  padding: 30px;\n  border-radius: 8px;\n  background-color: var(--light-orange);\n}\n\n.contact {\n  display: flex;\n  justify-content: space-between;\n\n  background-color: var(--white);\n  padding: 10px;\n  border-radius: 8px;\n\n  min-width: 300px;\n}\n\n@media (max-width: 440px) {\n  .contacts__list {\n    padding: 30px 20px;\n  }\n\n  .contact {\n    flex-direction: column;\n    min-width: unset;\n    gap: 5px;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/contacts.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,aAAa;EACb,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;;EAE9B,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;;EAElB,gBAAgB;AAClB;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,gBAAgB;IAChB,QAAQ;EACV;AACF",sourcesContent:[".contacts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 70px;\n}\n\n.contacts__list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  padding: 30px;\n  border-radius: 8px;\n  background-color: var(--light-orange);\n}\n\n.contact {\n  display: flex;\n  justify-content: space-between;\n\n  background-color: var(--white);\n  padding: 10px;\n  border-radius: 8px;\n\n  min-width: 300px;\n}\n\n@media (max-width: 440px) {\n  .contacts__list {\n    padding: 30px 20px;\n  }\n\n  .contact {\n    flex-direction: column;\n    min-width: unset;\n    gap: 5px;\n  }\n}\n"],sourceRoot:""}]);const r=s},608:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".content {\n  max-width: 1440px;\n  padding: 100px 50px;\n  margin: 0 auto;\n}\n\n@media (max-width: 762px) {\n  .content {\n    padding: 50px;\n  }\n}\n\n@media (max-width: 440px) {\n  .content {\n    padding: 30px;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/content.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF",sourcesContent:[".content {\n  max-width: 1440px;\n  padding: 100px 50px;\n  margin: 0 auto;\n}\n\n@media (max-width: 762px) {\n  .content {\n    padding: 50px;\n  }\n}\n\n@media (max-width: 440px) {\n  .content {\n    padding: 30px;\n  }\n}\n"],sourceRoot:""}]);const r=s},64:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".header {\n  background-color: var(--light-orange);\n  padding: 50px;\n}\n\n@media (max-width: 440px) {\n  .header {\n    padding: 30px;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"AAAA;EACE,qCAAqC;EACrC,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF",sourcesContent:[".header {\n  background-color: var(--light-orange);\n  padding: 50px;\n}\n\n@media (max-width: 440px) {\n  .header {\n    padding: 30px;\n  }\n}\n"],sourceRoot:""}]);const r=s},555:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".homepage {\n  display: grid;\n  grid-template:\n    'title img' auto\n    'info img' 1fr\n    / 1fr 1fr;\n  gap: 25px;\n}\n\n.homepage__title {\n  grid-area: title;\n}\n\n.homepage__info-block {\n  grid-area: info;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.homepage__info-text {\n  font-size: 24px;\n}\n\n.homepage__img {\n  grid-area: img;\n  width: 100%;\n  border-radius: 8px;\n}\n\n@media (max-width: 762px) {\n  .homepage {\n    grid-template:\n      'title' auto\n      'img' auto\n      'info' auto\n      / 1fr;\n  }\n\n  .homepage__title {\n    text-align: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/homepage.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb;;;aAGW;EACX,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE;IACE;;;;WAIO;EACT;;EAEA;IACE,kBAAkB;EACpB;AACF",sourcesContent:[".homepage {\n  display: grid;\n  grid-template:\n    'title img' auto\n    'info img' 1fr\n    / 1fr 1fr;\n  gap: 25px;\n}\n\n.homepage__title {\n  grid-area: title;\n}\n\n.homepage__info-block {\n  grid-area: info;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.homepage__info-text {\n  font-size: 24px;\n}\n\n.homepage__img {\n  grid-area: img;\n  width: 100%;\n  border-radius: 8px;\n}\n\n@media (max-width: 762px) {\n  .homepage {\n    grid-template:\n      'title' auto\n      'img' auto\n      'info' auto\n      / 1fr;\n  }\n\n  .homepage__title {\n    text-align: center;\n  }\n}\n"],sourceRoot:""}]);const r=s},22:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 100px;\n}\n\n.menu__img {\n  border-radius: 8px;\n  width: 40%;\n}\n\n.menu__categories {\n  display: flex;\n  flex-direction: column;\n  gap: 120px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n}\n\n.category__list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n}\n\n.dish {\n  display: grid;\n  grid-template:\n    'dish-title dish-img' auto\n    'dish-description dish-img' 1fr / auto 200px;\n  gap: 20px;\n\n  max-width: 900px;\n}\n\n.dish__img {\n  grid-area: dish-img;\n  border-radius: 8px;\n  width: 100%;\n  order: 2;\n}\n\n.dish__title {\n  grid-area: dish-title;\n}\n\n.dish__description {\n  grid-area: dish-description;\n}\n\n@media (max-width: 762px) {\n  .dish {\n    grid-template:\n      'dish-title' auto\n      'dish-img' auto\n      'dish-description' auto / auto;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/menu.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb;;gDAE8C;EAC9C,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE;IACE;;;oCAGgC;EAClC;AACF",sourcesContent:[".menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 100px;\n}\n\n.menu__img {\n  border-radius: 8px;\n  width: 40%;\n}\n\n.menu__categories {\n  display: flex;\n  flex-direction: column;\n  gap: 120px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n}\n\n.category__list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n}\n\n.dish {\n  display: grid;\n  grid-template:\n    'dish-title dish-img' auto\n    'dish-description dish-img' 1fr / auto 200px;\n  gap: 20px;\n\n  max-width: 900px;\n}\n\n.dish__img {\n  grid-area: dish-img;\n  border-radius: 8px;\n  width: 100%;\n  order: 2;\n}\n\n.dish__title {\n  grid-area: dish-title;\n}\n\n.dish__description {\n  grid-area: dish-description;\n}\n\n@media (max-width: 762px) {\n  .dish {\n    grid-template:\n      'dish-title' auto\n      'dish-img' auto\n      'dish-description' auto / auto;\n  }\n}\n"],sourceRoot:""}]);const r=s},911:(n,e,t)=>{t.d(e,{A:()=>r});var i=t(354),a=t.n(i),o=t(314),s=t.n(o)()(a());s.push([n.id,".nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.nav-list__button {\n  font-size: 24px;\n\n  padding: 15px 0;\n  width: max(10vw, 120px);\n\n  background-color: var(--white);\n  border: none;\n  border-radius: 8px;\n\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n.nav-list__button:hover {\n  background-color: var(--light-gray);\n}\n\n@media (max-width: 440px) {\n  .nav-list {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav-list__button {\n    width: 200px;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/nav-list.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;;EAEf,eAAe;EACf,uBAAuB;;EAEvB,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;;EAElB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,YAAY;EACd;AACF",sourcesContent:[".nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.nav-list__button {\n  font-size: 24px;\n\n  padding: 15px 0;\n  width: max(10vw, 120px);\n\n  background-color: var(--white);\n  border: none;\n  border-radius: 8px;\n\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n.nav-list__button:hover {\n  background-color: var(--light-gray);\n}\n\n@media (max-width: 440px) {\n  .nav-list {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav-list__button {\n    width: 200px;\n  }\n}\n"],sourceRoot:""}]);const r=s},208:(n,e,t)=>{t.d(e,{A:()=>m});var i=t(354),a=t.n(i),o=t(314),s=t.n(o),r=t(64),c=t(911),A=t(608),d=t(555),l=t(22),p=t(816),u=s()(a());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]),u.i(r.A),u.i(c.A),u.i(A.A),u.i(d.A),u.i(l.A),u.i(p.A),u.push([n.id,":root {\n  --light-orange: #ffdead;\n  --white: #fff;\n  --light-gray: #f0f0f0;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  background-color: var(--light-gray);\n  min-height: 100vh;\n\n  font-family: 'Open Sans', sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: 'wdth' 100;\n\n  overflow: scroll;\n}\n\nul {\n  list-style: none;\n}\n\np {\n  line-height: 1.5;\n  max-width: 75ch;\n}\n\n.title {\n  font-size: 42px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AASA;EACE,uBAAuB;EACvB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;;EAEjB,oCAAoC;EACpC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,mCAAmC;;EAEnC,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\n\n@import url('./css/header.css');\n@import url('./css/nav-list.css');\n@import url('./css/content.css');\n@import url('./css/homepage.css');\n@import url('./css/menu.css');\n@import url('./css/contacts.css');\n\n:root {\n  --light-orange: #ffdead;\n  --white: #fff;\n  --light-gray: #f0f0f0;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  font-family: inherit;\n}\n\nbody {\n  background-color: var(--light-gray);\n  min-height: 100vh;\n\n  font-family: 'Open Sans', sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: 'wdth' 100;\n\n  overflow: scroll;\n}\n\nul {\n  list-style: none;\n}\n\np {\n  line-height: 1.5;\n  max-width: 75ch;\n}\n\n.title {\n  font-size: 42px;\n}\n"],sourceRoot:""}]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);i&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},s=[],r=0;r<n.length;r++){var c=n[r],A=i.base?c[0]+i.base:c[0],d=o[A]||0,l="".concat(A," ").concat(d);o[A]=d+1;var p=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,i);i.byIndex=r,e.splice(r,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var r=t(o[s]);e[r].references--}for(var c=i(n,a),A=0;A<o.length;A++){var d=t(o[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=i[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var i=t(72),a=t.n(i),o=t(825),s=t.n(o),r=t(659),c=t.n(r),A=t(56),d=t.n(A),l=t(540),p=t.n(l),u=t(113),m=t.n(u),h=t(208),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals;const f=t.p+"e90d96cfc7edcaeee444.png";function E(n){const e=document.createElement("section");e.classList.add("homepage");const t=document.createElement("h1");t.classList.add("homepage__title","title"),t.textContent="Cutty Cat Restaurant";const i=document.createElement("div");i.classList.add("homepage__info-block");const a=document.createElement("p");a.classList.add("homepage__info-text"),a.textContent="Welcome to the world's first cat restaurant! Yes, yes, you heard right! In our restaurant, we serve only cats and serve exclusively a cat menu. We are the best in our business, because we are the only ones!";const o=document.createElement("p");o.classList.add("homepage__info-text"),o.textContent="Be sure to visit our establishment and taste the delicious dishes from our chef Cutty!";const s=document.createElement("img");s.classList.add("homepage__img"),s.alt=f,s.src=f,i.append(a,o),e.append(t,i,s),n.append(e)}const C=t.p+"7449ffba6a78f782b81e.png",x={meatDishes:{categoryTitle:"Meat Dishes",dishes:[{dishTitle:"Chicken Breast",description:"Indulge in this perfectly cooked chicken breast, seasoned with fresh rosemary and carrots. You are sure to love it!",pathToImage:t.p+"459c3cbb23109eb31862.png"},{dishTitle:"Tuna Steak",description:"Try this appetizing tuna steak, served with a fragrant parsley and lemon sauce. You will be delighted by this delicacy!",pathToImage:t.p+"c4ae10f1f6a582af681a.png"},{dishTitle:"Beef Tenderloin",description:"Treat yourself to this tender and juicy beef tenderloin, served with a side of mashed potatoes and green peas. This dish will be a feast for you!",pathToImage:t.p+"bad142f4d7f185393d43.png"}]},fishDishes:{categoryTitle:"Fish Dishes",dishes:[{dishTitle:"Salmon Fillet",description:"Enjoy this fresh salmon fillet, steamed with green peas and carrots. Not only is it delicious, but it's also healthy!",pathToImage:t.p+"7c0ed7a2fd0dc41f5991.png"},{dishTitle:"Trout Fillet",description:"Treat yourself to this light trout fillet with a side dish of broccoli and spinach. According to the data, this dish is perfect for those who care about their health!",pathToImage:t.p+"0b25ccba1ee057d3996d.png"},{dishTitle:"Mackerel Fillet",description:"Try this aromatic mackerel fillet, prepared with rice and vegetables. This dish combines the benefits of fish and the nutrition of rice, making it an ideal choice!",pathToImage:t.p+"df15b679fbbecbe58fe4.png"}]},treats:{categoryTitle:"Treats",dishes:[{dishTitle:"Catnip Leaves",description:"These fresh catnip leaves will help stimulate natural instincts and boost your mood. You will be thrilled with this thread!",pathToImage:t.p+"4d09eac50733eb24433c.png"},{dishTitle:"Warm Milk",description:"This warm glass of milk, made from fresh cow's milk, will help soothe your stomach and provide you with comfort and enjoyment!",pathToImage:t.p+"842adfcc61802c17d8ee.png"}]}},B={email:{title:"Email:",info:"cuttythechef@gmail.com"},mainPhone:{title:"Main:",info:"+7-999-888-7770"},secondaryPhone:{title:"Secondary",info:"+7-888-777-6660"}},v={renderHomePage:E,renderMenuPage:function(n){const e=document.createElement("section");e.classList.add("menu");const t=document.createElement("img");t.classList.add("menu__img"),t.src=C,t.alt="Menu";const i=document.createElement("ul");i.classList.add("menu__categories");for(let n in x){const{categoryTitle:e,dishes:t}=x[n],a=document.createElement("li");a.classList.add("menu__category","category");const o=document.createElement("h2");o.classList.add("category__title"),o.textContent=e;const s=document.createElement("ul");s.classList.add("category__list"),t.forEach((n=>{const{dishTitle:e,description:t,pathToImage:i}=n,a=document.createElement("li");a.classList.add("category__dish","dish");const o=document.createElement("h3");o.classList.add("dish__title"),o.textContent=e;const r=document.createElement("img");r.classList.add("dish__img"),r.src=i,r.alt=e;const c=document.createElement("p");c.classList.add("dish__description"),c.textContent=t,a.append(o,r,c),s.append(a)})),a.append(o,s),i.append(a)}e.append(t,i),n.append(e)},renderContactsPage:function(n){const e=document.createElement("section");e.classList.add("contacts");const t=document.createElement("h1");t.classList.add("contacts__title","title"),t.textContent="Contact Us";const i=document.createElement("p");i.textContent="You can contact us via:";const a=document.createElement("ul");a.classList.add("contacts__list");for(let n in B){const{title:e,info:t}=B[n],i=document.createElement("li");i.classList.add("contact");const o=document.createElement("span");o.classList.add("contact__title"),o.textContent=e;const s=document.createElement("span");s.classList.add("contact__info"),s.textContent=t,i.append(o,s),a.append(i)}e.append(t,i,a),n.append(e)}},y=document.querySelector(".content"),b=document.querySelector(".nav-list");let _="Home";b.addEventListener("click",(function(n){const e=n.target;if(!e.classList.contains("nav-list__button"))return;const t=e.id;if(t===_)return;_=t,function(n){for(;n.firstChild;)n.lastChild.remove()}(y);const i=`render${t}Page`,{[i]:a}=v;a(y)})),E(y)})();
//# sourceMappingURL=main.js.map