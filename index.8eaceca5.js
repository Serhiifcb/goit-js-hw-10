function n(n){return n&&n.__esModule?n.default:n}var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),f=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(g(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=g(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var t=a.test(n);return t||r.test(n)?u(n.slice(2),t?2:8):o.test(n)?NaN:+n}e=function(n,e,t){var i,o,a,r,u,l,c=0,s=!1,f=!1,y=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(e){var t=i,a=o;return i=o=void 0,c=e,r=n.apply(a,t)}function h(n){return c=n,u=setTimeout(j,e),s?b(n):r}function T(n){var t=n-l;return void 0===l||t>=e||t<0||f&&n-c>=a}function j(){var n=p();if(T(n))return $(n);u=setTimeout(j,function(n){var t=e-(n-l);return f?m(t,a-(n-c)):t}(n))}function $(n){return u=void 0,y&&i?b(n):(i=o=void 0,r)}function L(){var n=p(),t=T(n);if(i=arguments,o=this,l=n,t){if(void 0===u)return h(l);if(f)return u=setTimeout(j,e),b(l)}return void 0===u&&(u=setTimeout(j,e)),r}return e=v(e)||0,g(t)&&(s=!!t.leading,a=(f="maxWait"in t)?d(v(t.maxWait)||0,e):a,y="trailing"in t?!!t.trailing:y),L.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=o=u=void 0},L.flush=function(){return void 0===u?r:$(p())},L};const y=document.querySelector("#search-box"),b=document.querySelector(".country-info"),h=document.querySelector(".country-list");y.addEventListener("input",n(e)((n=>{let e=n.target.value;(h.innerHTML="",b.innerHTML="",""!==e)&&fetch("https://restcountries.com/v2/name/"+e+"?fields=name,capital,population,flags,languages").then((n=>n.json())).then((n=>{if(1===n.length){const e=`\n        <div class="flag-and-name">\n        <img src="${n[0].flags.svg}" class="flag">\n        <div class="country-item">${n[0].name}</div>\n        </div>\n        <div class="country-item"><p class="item-name">Capital: </p>${n[0].capital}</div>\n        <div class="country-item"><p class="item-name">Population: </p>${n[0].population}</div>\n        `;let t="";if(1===n[0].languages.length)t=`\n          <div class="country-item">\n            <p class="item-name">Languages: </p>${n[0].languages[0].name}\n          </div>\n          `,b.innerHTML=e+t;else{t=`\n          <div class="country-item">\n            <p class="item-name">Languages: </p>${n[0].languages[0].name}\n          `;for(let e=1;e<n[0].languages.length;e++)t=t+", "+n[0].languages[e].name;b.innerHTML=e+t+"</div>"}}else{const e=n.map((n=>`<li class="list-item">${n.name}</li>`)).join("");h.innerHTML=e}})).catch((n=>{console.log("Not found country")}))}),300));
//# sourceMappingURL=index.8eaceca5.js.map
