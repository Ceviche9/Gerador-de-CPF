(()=>{"use strict";var n={329:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(15),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([n.id,"*  {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n\r\n}\r\n\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #011f47;\r\n    font-family: 'Roboto';\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;   \r\n}\r\n\r\n.Caixa {\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.btn {\r\n\r\n    border-radius: 12px;\r\n    padding: 7px;\r\n    background-color: #011f47;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n.result {\r\n\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n    color: #011f47;\r\n    letter-spacing: 2px;\r\n\r\n}","",{version:3,sources:["webpack://./src/assets/CSS/style.css"],names:[],mappings:"AAEA;IACI,sBAAsB;IACtB,UAAU;;AAEd;;;;AAIA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;;IAEI,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,mBAAmB;;AAEvB;;AAEA;;IAEI,wEAAwE;IACxE,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,mBAAmB;;AAEvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n*  {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n\r\n}\r\n\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #011f47;\r\n    font-family: 'Roboto';\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;   \r\n}\r\n\r\n.Caixa {\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.btn {\r\n\r\n    border-radius: 12px;\r\n    padding: 7px;\r\n    background-color: #011f47;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n.result {\r\n\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n    color: #011f47;\r\n    letter-spacing: 2px;\r\n\r\n}"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=e){var t,o,i=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(t=e.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var f=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:m(p,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,l=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function f(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var d=null,A=0;function m(n,r){var e,t,o;if(r.singleton){var i=A++;e=d||(d=s(r)),t=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=s(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var s=c(n,r),u=0;u<e.length;u++){var l=a(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var r=function(){function r(n){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:n.replace(/\D+/g,"")})}var e,t,o;return e=r,o=[{key:"geraDigito",value:function(n){var r=Array.from(n),e=n.length+1,t=11-r.reduce((function(n,r){return n+=e*Number(r),e--,n}),0)%11;return t>9?"0":String(t)}}],(t=[{key:"sequencia",value:function(){return this.cpfLimpo[0].repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var n=this.cpfLimpo.slice(0,-2),e=r.geraDigito(n),t=r.geraDigito(n+e);this.NovoCPF=n+e+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.sequencia()&&(this.geraNovoCpf(),console.log(this.NovoCPF,this.cpfLimpo),this.NovoCPF===this.cpfLimpo)}}])&&n(e.prototype,t),o&&n(e,o),r}();function t(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var o=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,o;return e=n,(o=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"format",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),e=r.geraDigito(n),t=n+e+r.geraDigito(n+e);return this.format(t)}}])&&t(e.prototype,o),n}(),i=e(379),a=e.n(i),c=e(329);a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,document.querySelector(".btn").addEventListener("click",(function(n){return r=new o,void(document.querySelector(".result").innerHTML=r.geraNovoCpf());var r}))})()})();
//# sourceMappingURL=bundle.js.map