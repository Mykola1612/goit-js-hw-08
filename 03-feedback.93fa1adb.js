function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("cJAFW",(function(t,n){var r=i("9OeKo");const o=document.querySelector(".feedback-form"),{email:a,message:u}=o.elements;o.addEventListener("input",e(r)((function(){const e={message:u.value,email:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const f=localStorage.getItem("feedback-form-state"),l=JSON.parse(f);null!==l&&(a.value=l.email,u.value=l.message,o.addEventListener("submit",(function(e){const t={message:u.value,email:a.value};e.preventDefault(),console.log(t),localStorage.clear("feedback-form-state"),a.value="",u.value=""})))})),i.register("9OeKo",(function(e,n){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function O(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function x(e){return c=e,f=setTimeout(h,t),s?O(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=m();if(w(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function j(e){return f=void 0,g&&i?O(e):(i=o=void 0,u)}function T(){var e=m(),n=w(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return x(l);if(d)return f=setTimeout(h,t),O(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:j(m())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})}})),i("cJAFW");
//# sourceMappingURL=03-feedback.93fa1adb.js.map
