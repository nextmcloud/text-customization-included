(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[193],{390:function(t,n,e){"use strict";(function(t){var i,a,o,s;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window,s=function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==r(t)&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(i,a,function(n){return t[n]}.bind(null,a));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=67)}({0:function(t,n,e){function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,a=!1,o=void 0;try{for(var s,r=t[Symbol.iterator]();!(i=(s=r.next()).done)&&(e.push(s.value),!n||e.length!==n);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return e}}(t,n)||function(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}t.exports=function(t){var n=i(t,4),e=n[1],a=n[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(s," */"),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[e].concat(l).concat([r]).join("\n")}return[e].join("\n")}},1:function(t,n,e){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);i&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},12:function(t,n){t.exports=e(53)},13:function(t,n){t.exports=e(109)},2:function(t,n,e){var i,a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),o=[];function s(t){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===t){n=e;break}return n}function r(t,n){for(var e={},i=[],a=0;a<t.length;a++){var r=t[a],l=n.base?r[0]+n.base:r[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var p=s(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:d,updater:f(u,n),references:1}),i.push(d)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var s=a(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var c,d=(c=[],function(t,n){return c[t]=n,c.filter(Boolean).join("\n")});function p(t,n,e,i){var a=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}function u(t,n,e){var i=e.css,a=e.media,o=e.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,b=0;function f(t,n){var e,i,a;if(n.singleton){var o=b++;e=m||(m=l(n)),i=p.bind(null,e,o,!1),a=p.bind(null,e,o,!0)}else e=l(n),i=u.bind(null,e,n),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else a()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=r(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var a=s(e[i]);o[a].references--}for(var l=r(t,n),c=0;c<e.length;c++){var d=s(e[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}e=l}}}},20:function(t,n){t.exports=e(104)},3:function(t,n,e){function i(t,n,e,i,a,o,s,r){var l,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=r?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,n){return l.call(n),d(t,n)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}e.d(n,"a",(function(){return i}))},30:function(t,n){t.exports=e(55)},31:function(t,n){t.exports=e(106)},32:function(t,n){t.exports=e(108)},37:function(t,n){t.exports=e(208)},48:function(t,n,e){var i=e(0),a=e.n(i),o=e(1),s=e.n(o)()(a.a);s.push([t.i,"\nbutton.menuitem[data-v-3ad7b73b] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-3ad7b73b] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-3ad7b73b]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-3ad7b73b] {\n\tcursor: default;\n}\n.menuitem.active[data-v-3ad7b73b] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n","",{version:3,sources:["webpack://./PopoverMenuItem.vue"],names:[],mappings:";AA4HA;CACA,gBAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,uBAAA;CACA,eAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,4CAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>\n  -\n  - @author John Molakvoæ <skjnldsv@protonmail.com>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<li>\n\t\t\x3c!-- If item.href is set, a link will be directly used --\x3e\n\t\t<a v-if="item.href"\n\t\t\t:href="(item.href) ? item.href : \'#\' "\n\t\t\t:target="(item.target) ? item.target : \'\' "\n\t\t\t:download="item.download"\n\t\t\tclass="focusable"\n\t\t\trel="noreferrer noopener"\n\t\t\t@click="action">\n\t\t\t<span v-if="!iconIsUrl" :class="item.icon" />\n\t\t\t<img v-else :src="item.icon">\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</a>\n\n\t\t\x3c!-- If item.input is set instead, an put will be used --\x3e\n\t\t<span v-else-if="item.input" class="menuitem" :class="{active: item.active}">\n\t\t\t\x3c!-- does not show if input is checkbox --\x3e\n\t\t\t<span v-if="item.input !== \'checkbox\'" :class="item.icon" />\n\n\t\t\t\x3c!-- only shows if input is text --\x3e\n\t\t\t<form v-if="item.input === \'text\'"\n\t\t\t\t:class="item.input"\n\t\t\t\t@submit.prevent="item.action">\n\t\t\t\t<input :type="item.input"\n\t\t\t\t\t:value="item.value"\n\t\t\t\t\t:placeholder="item.text"\n\t\t\t\t\trequired>\n\t\t\t\t<input type="submit" value="" class="icon-confirm">\n\t\t\t</form>\n\n\t\t\t\x3c!-- checkbox --\x3e\n\t\t\t<template v-else>\n\t\t\t\t<input :id="key"\n\t\t\t\t\tv-model="item.model"\n\t\t\t\t\t:type="item.input"\n\t\t\t\t\t:class="item.input"\n\t\t\t\t\t@change="item.action">\n\t\t\t\t<label :for="key" @click.stop.prevent="item.action">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</label>\n\t\t\t</template>\n\t\t</span>\n\n\t\t\x3c!-- If item.action is set instead, a button will be used --\x3e\n\t\t<button v-else-if="item.action"\n\t\t\tclass="menuitem focusable"\n\t\t\t:class="{active: item.active}"\n\t\t\t:disabled="item.disabled"\n\t\t\t@click.stop.prevent="item.action">\n\t\t\t<span :class="item.icon" />\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</button>\n\n\t\t\x3c!-- If item.longtext is set AND the item does not have an action --\x3e\n\t\t<span v-else class="menuitem" :class="{active: item.active}">\n\t\t\t<span :class="item.icon" />\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</span>\n\t</li>\n</template>\n\n<style scoped>\n\tbutton.menuitem {\n\t\ttext-align: left;\n\t}\n\n\tbutton.menuitem * {\n\t\tcursor: pointer;\n\t}\n\n\tbutton.menuitem:disabled {\n\t\topacity: 0.5 !important;\n\t\tcursor: default;\n\t}\n\n\tbutton.menuitem:disabled * {\n\t\tcursor: default;\n\t}\n\n\t.menuitem.active {\n\t\tbox-shadow: inset 2px 0 var(--color-primary);\n\t\tborder-radius: 0;\n\t}\n</style>\n\n<script>\nexport default {\n\tname: \'PopoverMenuItem\',\n\tprops: {\n\t\titem: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t\tdefault: () => {\n\t\t\t\treturn {\n\t\t\t\t\tkey: \'nextcloud-link\',\n\t\t\t\t\thref: \'https://nextcloud.com\',\n\t\t\t\t\ticon: \'icon-links\',\n\t\t\t\t\ttext: \'Nextcloud\',\n\t\t\t\t}\n\t\t\t},\n\t\t\t// check the input types\n\t\t\t// TODO: add more validation of types\n\t\t\tvalidator: item => {\n\t\t\t\t// TODO: support radio\n\t\t\t\tif (item.input) {\n\t\t\t\t\treturn [\'text\', \'checkbox\'].indexOf(item.input) !== -1\n\t\t\t\t}\n\t\t\t\treturn true\n\t\t\t},\n\t\t},\n\t},\n\tcomputed: {\n\t\t// random key for inputs binding if not provided\n\t\tkey() {\n\t\t\treturn this.item.key\n\t\t\t\t? this.item.key\n\t\t\t\t: Math.round(Math.random() * 16 * 1000000).toString(16)\n\t\t},\n\t\ticonIsUrl() {\n\t\t\ttry {\n\t\t\t\t// eslint-disable-next-line no-new\n\t\t\t\tnew URL(this.item.icon)\n\t\t\t\treturn true\n\t\t\t} catch (_) {\n\t\t\t\treturn false\n\t\t\t}\n\t\t},\n\t},\n\tmethods: {\n\t\t// allow us to use both link and an action on `a`\n\t\t// we still need to make sure item.action exists\n\t\taction(event) {\n\t\t\tif (this.item.action) {\n\t\t\t\tthis.item.action(event)\n\t\t\t}\n\t\t},\n\t},\n}\n<\/script>\n<style lang="scss" scoped>\nli {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\n\t&.hidden {\n\t\tdisplay: none;\n\t}\n\n\t> button,\n\t> a,\n\t> .menuitem {\n\t\tcursor: pointer;\n\t\tline-height: $clickable-area;\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-weight: normal;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t\tcolor: var(--color-main-text);\n\t\twhite-space: nowrap;\n\t\topacity: $opacity_normal;\n\n\t\t// TODO split into individual components for readability\n\t\tspan[class^=\'icon-\'],\n\t\tspan[class*=\' icon-\'],\n\t\t&[class^=\'icon-\'],\n\t\t&[class*=\' icon-\'] {\n\t\t\tmin-width: 0; /* Overwrite icons*/\n\t\t\tmin-height: 0;\n\t\t\tbackground-position: #{$icon-margin} center;\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\tspan[class^=\'icon-\'],\n\t\tspan[class*=\' icon-\'] {\n\t\t\t/* Keep padding to define the width to\n\t\t\t\tassure correct position of a possible text */\n\t\t\tpadding: #{$clickable-area / 2} 0 #{$clickable-area / 2} $clickable-area;\n\t\t}\n\n\t\t// If no icons set, force left margin to align\n\t\t&:not([class^=\'icon-\']):not([class*=\'icon-\']) {\n\t\t\t> span,\n\t\t\t> input,\n\t\t\t> form {\n\t\t\t\t&:not([class^=\'icon-\']):not([class*=\'icon-\']):first-child {\n\t\t\t\t\tmargin-left: $clickable-area;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&[class^=\'icon-\'],\n\t\t&[class*=\' icon-\'] {\n\t\t\tpadding: 0 $icon-margin 0 $clickable-area;\n\t\t}\n\n\t\t&:not(:disabled):hover,\n\t\t&:not(:disabled):focus,\n\t\t&:not(:disabled).active {\n\t\t\topacity: $opacity_full !important;\n\t\t}\n\n\t\t/* prevent .action class to break the design */\n\t\t&.action {\n\t\t\tpadding: inherit !important;\n\t\t}\n\n\t\t> span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t// long text area\n\t\t> p {\n\t\t\twidth: 150px;\n\t\t\tline-height: 1.6em;\n\t\t\tpadding: 8px 0;\n\t\t\twhite-space: normal;\n\t\t}\n\n\t\t// TODO: do we really supports it?\n\t\t> select {\n\t\t\tmargin: 0;\n\t\t\tmargin-left: 6px;\n\t\t}\n\n\t\t/* Add padding if contains icon+text */\n\t\t&:not(:empty) {\n\t\t\tpadding-right: $icon-margin !important;\n\t\t}\n\n\t\t/* DEPRECATED! old img in popover fallback\n\t\t\t* TODO: to remove */\n\t\t> img {\n\t\t\twidth: $clickable-area;\n\t\t\tpadding: $icon-margin;\n\t\t}\n\n\t\t/* checkbox/radio fixes */\n\t\t> input.radio + label,\n\t\t> input.checkbox + label {\n\t\t\tpadding: 0 !important;\n\t\t\twidth: 100%;\n\t\t}\n\t\t> input.checkbox + label::before {\n\t\t\tmargin: -2px 13px 0;\n\t\t}\n\t\t> input.radio + label::before {\n\t\t\tmargin: -2px 12px 0;\n\t\t}\n\t\t> input:not([type=radio]):not([type=checkbox]):not([type=image]) {\n\t\t\twidth: 150px;\n\t\t}\n\n\t\t// Forms & text inputs\n\t\tform {\n\t\t\tdisplay: flex;\n\t\t\tflex: 1 1 auto;\n\t\t\t/* put a small space between text and form\n\t\t\t\tif there is an element before */\n\t\t\t&:not(:first-child)  {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t\t/* no margin if hidden span before */\n\t\t> span.hidden + form,\n\t\t> span[style*=\'display:none\'] + form {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t/* Inputs inside popover supports text, submit & reset */\n\t\tinput {\n\t\t\tmin-width: $clickable-area;\n\t\t\tmax-height: #{$clickable-area - 4px}; /* twice the element margin-y */\n\t\t\tmargin: 2px 0;\n\t\t\tflex: 1 1 auto;\n\t\t\t// space between inline inputs\n\t\t\t&:not(:first-child) {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t}\n\n\t// TODO: do that in js, should be cleaner\n\t/* css hack, only first not hidden */\n\t&:not(.hidden):not([style*=\'display:none\']) {\n\t\t&:first-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-top: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&:last-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-bottom: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t> button {\n\t\tpadding: 0;\n\t\tspan {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t}\n}\n</style>\n'],sourceRoot:""}]),n.a=s},49:function(t,n,e){var i=e(0),a=e.n(i),o=e(1),s=e.n(o)()(a.a);s.push([t.i,"li[data-v-3ad7b73b]{display:flex;flex:0 0 auto}li.hidden[data-v-3ad7b73b]{display:none}li>button[data-v-3ad7b73b],li>a[data-v-3ad7b73b],li>.menuitem[data-v-3ad7b73b]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-3ad7b73b],li>button span[class*=' icon-'][data-v-3ad7b73b],li>button[class^='icon-'][data-v-3ad7b73b],li>button[class*=' icon-'][data-v-3ad7b73b],li>a span[class^='icon-'][data-v-3ad7b73b],li>a span[class*=' icon-'][data-v-3ad7b73b],li>a[class^='icon-'][data-v-3ad7b73b],li>a[class*=' icon-'][data-v-3ad7b73b],li>.menuitem span[class^='icon-'][data-v-3ad7b73b],li>.menuitem span[class*=' icon-'][data-v-3ad7b73b],li>.menuitem[class^='icon-'][data-v-3ad7b73b],li>.menuitem[class*=' icon-'][data-v-3ad7b73b]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-3ad7b73b],li>button span[class*=' icon-'][data-v-3ad7b73b],li>a span[class^='icon-'][data-v-3ad7b73b],li>a span[class*=' icon-'][data-v-3ad7b73b],li>.menuitem span[class^='icon-'][data-v-3ad7b73b],li>.menuitem span[class*=' icon-'][data-v-3ad7b73b]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-3ad7b73b],li>button[class*=' icon-'][data-v-3ad7b73b],li>a[class^='icon-'][data-v-3ad7b73b],li>a[class*=' icon-'][data-v-3ad7b73b],li>.menuitem[class^='icon-'][data-v-3ad7b73b],li>.menuitem[class*=' icon-'][data-v-3ad7b73b]{padding:0 14px 0 44px}li>button[data-v-3ad7b73b]:not(:disabled):hover,li>button[data-v-3ad7b73b]:not(:disabled):focus,li>button:not(:disabled).active[data-v-3ad7b73b],li>a[data-v-3ad7b73b]:not(:disabled):hover,li>a[data-v-3ad7b73b]:not(:disabled):focus,li>a:not(:disabled).active[data-v-3ad7b73b],li>.menuitem[data-v-3ad7b73b]:not(:disabled):hover,li>.menuitem[data-v-3ad7b73b]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-3ad7b73b]{opacity:1 !important}li>button.action[data-v-3ad7b73b],li>a.action[data-v-3ad7b73b],li>.menuitem.action[data-v-3ad7b73b]{padding:inherit !important}li>button>span[data-v-3ad7b73b],li>a>span[data-v-3ad7b73b],li>.menuitem>span[data-v-3ad7b73b]{cursor:pointer;white-space:nowrap}li>button>p[data-v-3ad7b73b],li>a>p[data-v-3ad7b73b],li>.menuitem>p[data-v-3ad7b73b]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-3ad7b73b],li>a>select[data-v-3ad7b73b],li>.menuitem>select[data-v-3ad7b73b]{margin:0;margin-left:6px}li>button[data-v-3ad7b73b]:not(:empty),li>a[data-v-3ad7b73b]:not(:empty),li>.menuitem[data-v-3ad7b73b]:not(:empty){padding-right:14px !important}li>button>img[data-v-3ad7b73b],li>a>img[data-v-3ad7b73b],li>.menuitem>img[data-v-3ad7b73b]{width:44px;padding:14px}li>button>input.radio+label[data-v-3ad7b73b],li>button>input.checkbox+label[data-v-3ad7b73b],li>a>input.radio+label[data-v-3ad7b73b],li>a>input.checkbox+label[data-v-3ad7b73b],li>.menuitem>input.radio+label[data-v-3ad7b73b],li>.menuitem>input.checkbox+label[data-v-3ad7b73b]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-3ad7b73b]::before,li>a>input.checkbox+label[data-v-3ad7b73b]::before,li>.menuitem>input.checkbox+label[data-v-3ad7b73b]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-3ad7b73b]::before,li>a>input.radio+label[data-v-3ad7b73b]::before,li>.menuitem>input.radio+label[data-v-3ad7b73b]::before{margin:-2px 12px 0}li>button>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-3ad7b73b],li>a form[data-v-3ad7b73b],li>.menuitem form[data-v-3ad7b73b]{display:flex;flex:1 1 auto}li>button form[data-v-3ad7b73b]:not(:first-child),li>a form[data-v-3ad7b73b]:not(:first-child),li>.menuitem form[data-v-3ad7b73b]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-3ad7b73b],li>button>span[style*='display:none']+form[data-v-3ad7b73b],li>a>span.hidden+form[data-v-3ad7b73b],li>a>span[style*='display:none']+form[data-v-3ad7b73b],li>.menuitem>span.hidden+form[data-v-3ad7b73b],li>.menuitem>span[style*='display:none']+form[data-v-3ad7b73b]{margin-left:0}li>button input[data-v-3ad7b73b],li>a input[data-v-3ad7b73b],li>.menuitem input[data-v-3ad7b73b]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-3ad7b73b]:not(:first-child),li>a input[data-v-3ad7b73b]:not(:first-child),li>.menuitem input[data-v-3ad7b73b]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-3ad7b73b]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-3ad7b73b]{margin-bottom:12px}li>button[data-v-3ad7b73b]{padding:0}li>button span[data-v-3ad7b73b]{opacity:1}\n","",{version:3,sources:["webpack://./PopoverMenuItem.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA2MA,oBACC,YAAa,CACb,aAAc,CAFf,2BAKE,YAAa,CALf,+EAWE,cAAe,CACf,gBC9LmB,CD+LnB,QAAS,CACT,eAAgB,CAChB,4BAA6B,CAC7B,YAAa,CACb,sBAAuB,CACvB,WAAY,CACZ,QAAS,CACT,SAAU,CACV,kBAAmB,CACnB,eAAgB,CAChB,UAAW,CACX,4BAA6B,CAC7B,kBAAmB,CACnB,UC1LiB,CDgKnB,giBAiCG,WAAY,CACZ,YAAa,CACb,+BAA2C,CAC3C,oBClNa,CD8KhB,+RA2CG,wBC7NkB,CDkLrB,iqCAoDK,gBCtOgB,CDkLrB,iQA2DG,qBC7OkB,CDkLrB,6aAiEG,oBAAiC,CAjEpC,oGAsEG,0BAA2B,CAtE9B,8FA0EG,cAAe,CACf,kBAAmB,CA3EtB,qFAgFG,WAAY,CACZ,iBAAkB,CAClB,aAAc,CACd,kBAAmB,CAnFtB,oGAwFG,QAAS,CACT,eAAgB,CAzFnB,mHA8FG,6BAAsC,CA9FzC,2FAoGG,UCtRkB,CDuRlB,YC/Q6C,CD0KhD,mRA2GG,oBAAqB,CACrB,UAAW,CA5Gd,sKA+GG,kBAAmB,CA/GtB,6JAkHG,kBAAmB,CAlHtB,4QAqHG,WAAY,CArHf,8FA0HG,YAAa,CACb,aAAc,CA3HjB,oJA+HI,eAAgB,CA/HpB,oTAqIG,aAAc,CArIjB,iGAyIG,cC3TkB,CD4TlB,eAAY,CACZ,YAAa,CACb,aAAc,CA5IjB,uJA+II,eAAgB,CA/IpB,+gBA0JK,eAA8B,CA1JnC,ygBAiKK,kBAAiC,CAjKtC,2BAuKE,SAAU,CAvKZ,gCAyKG,SCxUa",sourcesContent:["$scope_version:\"ed18ae7\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nli {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\n\t&.hidden {\n\t\tdisplay: none;\n\t}\n\n\t> button,\n\t> a,\n\t> .menuitem {\n\t\tcursor: pointer;\n\t\tline-height: $clickable-area;\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-weight: normal;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t\tcolor: var(--color-main-text);\n\t\twhite-space: nowrap;\n\t\topacity: $opacity_normal;\n\n\t\t// TODO split into individual components for readability\n\t\tspan[class^='icon-'],\n\t\tspan[class*=' icon-'],\n\t\t&[class^='icon-'],\n\t\t&[class*=' icon-'] {\n\t\t\tmin-width: 0; /* Overwrite icons*/\n\t\t\tmin-height: 0;\n\t\t\tbackground-position: #{$icon-margin} center;\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\tspan[class^='icon-'],\n\t\tspan[class*=' icon-'] {\n\t\t\t/* Keep padding to define the width to\n\t\t\t\tassure correct position of a possible text */\n\t\t\tpadding: #{$clickable-area / 2} 0 #{$clickable-area / 2} $clickable-area;\n\t\t}\n\n\t\t// If no icons set, force left margin to align\n\t\t&:not([class^='icon-']):not([class*='icon-']) {\n\t\t\t> span,\n\t\t\t> input,\n\t\t\t> form {\n\t\t\t\t&:not([class^='icon-']):not([class*='icon-']):first-child {\n\t\t\t\t\tmargin-left: $clickable-area;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&[class^='icon-'],\n\t\t&[class*=' icon-'] {\n\t\t\tpadding: 0 $icon-margin 0 $clickable-area;\n\t\t}\n\n\t\t&:not(:disabled):hover,\n\t\t&:not(:disabled):focus,\n\t\t&:not(:disabled).active {\n\t\t\topacity: $opacity_full !important;\n\t\t}\n\n\t\t/* prevent .action class to break the design */\n\t\t&.action {\n\t\t\tpadding: inherit !important;\n\t\t}\n\n\t\t> span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t// long text area\n\t\t> p {\n\t\t\twidth: 150px;\n\t\t\tline-height: 1.6em;\n\t\t\tpadding: 8px 0;\n\t\t\twhite-space: normal;\n\t\t}\n\n\t\t// TODO: do we really supports it?\n\t\t> select {\n\t\t\tmargin: 0;\n\t\t\tmargin-left: 6px;\n\t\t}\n\n\t\t/* Add padding if contains icon+text */\n\t\t&:not(:empty) {\n\t\t\tpadding-right: $icon-margin !important;\n\t\t}\n\n\t\t/* DEPRECATED! old img in popover fallback\n\t\t\t* TODO: to remove */\n\t\t> img {\n\t\t\twidth: $clickable-area;\n\t\t\tpadding: $icon-margin;\n\t\t}\n\n\t\t/* checkbox/radio fixes */\n\t\t> input.radio + label,\n\t\t> input.checkbox + label {\n\t\t\tpadding: 0 !important;\n\t\t\twidth: 100%;\n\t\t}\n\t\t> input.checkbox + label::before {\n\t\t\tmargin: -2px 13px 0;\n\t\t}\n\t\t> input.radio + label::before {\n\t\t\tmargin: -2px 12px 0;\n\t\t}\n\t\t> input:not([type=radio]):not([type=checkbox]):not([type=image]) {\n\t\t\twidth: 150px;\n\t\t}\n\n\t\t// Forms & text inputs\n\t\tform {\n\t\t\tdisplay: flex;\n\t\t\tflex: 1 1 auto;\n\t\t\t/* put a small space between text and form\n\t\t\t\tif there is an element before */\n\t\t\t&:not(:first-child)  {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t\t/* no margin if hidden span before */\n\t\t> span.hidden + form,\n\t\t> span[style*='display:none'] + form {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t/* Inputs inside popover supports text, submit & reset */\n\t\tinput {\n\t\t\tmin-width: $clickable-area;\n\t\t\tmax-height: #{$clickable-area - 4px}; /* twice the element margin-y */\n\t\t\tmargin: 2px 0;\n\t\t\tflex: 1 1 auto;\n\t\t\t// space between inline inputs\n\t\t\t&:not(:first-child) {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t}\n\n\t// TODO: do that in js, should be cleaner\n\t/* css hack, only first not hidden */\n\t&:not(.hidden):not([style*='display:none']) {\n\t\t&:first-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-top: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&:last-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-bottom: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t> button {\n\t\tpadding: 0;\n\t\tspan {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=s},50:function(t,n,e){var i=e(0),a=e.n(i),o=e(1),s=e.n(o)()(a.a);s.push([t.i,"ul[data-v-81c2afc0]{display:flex;flex-direction:column}\n","",{version:3,sources:["webpack://./PopoverMenu.vue"],names:[],mappings:"AA0DA,oBACC,YAAa,CACb,qBAAsB",sourcesContent:["$scope_version:\"ed18ae7\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nul {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n"],sourceRoot:""}]),n.a=s},51:function(t,n){},67:function(t,n,e){e.r(n),e(13),e(30),e(12),e(20),e(31),e(32),e(37);var i={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},a=e(2),o=e.n(a),s=e(48),r=(o()(s.a,{insert:"head",singleton:!1}),s.a.locals,e(49)),l=(o()(r.a,{insert:"head",singleton:!1}),r.a.locals,e(3)),c={name:"PopoverMenu",components:{PopoverMenuItem:Object(l.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[t.item.href?e("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?e("img",{attrs:{src:t.item.icon}}):e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?e("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?e("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?e("form",{class:t.item.input,on:{submit:function(n){return n.preventDefault(),t.item.action(n)}}},[e("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),e("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(n){var e=t.item.model,i=n.target,a=!!i.checked;if(Array.isArray(e)){var o=t._i(e,null);i.checked?o<0&&t.$set(t.item,"model",e.concat([null])):o>-1&&t.$set(t.item,"model",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.item,"model",a)},t.item.action]}}):"radio"===t.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(n){return t.$set(t.item,"model",null)},t.item.action]}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(n){n.target.composing||t.$set(t.item,"model",n.target.value)}}}),t._v(" "),e("label",{attrs:{for:t.key},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.item.action(n)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?e("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.item.action(n)}}},[e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):e("span",{staticClass:"menuitem",class:{active:t.item.active}},[e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])}),[],!1,null,"3ad7b73b",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},d=e(50),p=(o()(d.a,{insert:"head",singleton:!1}),d.a.locals,e(51)),u=e.n(p),m=Object(l.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("ul",this._l(this.menu,(function(t,e){return n("PopoverMenuItem",{key:e,attrs:{item:t}})})),1)}),[],!1,null,"81c2afc0",null);"function"==typeof u.a&&u()(m);var b=m.exports;
/**
       * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
       *
       * @author John Molakvoæ <skjnldsv@protonmail.com>
       *
       * @license GNU AGPL version 3 or any later version
       *
       * This program is free software: you can redistribute it and/or modify
       * it under the terms of the GNU Affero General Public License as
       * published by the Free Software Foundation, either version 3 of the
       * License, or (at your option) any later version.
       *
       * This program is distributed in the hope that it will be useful,
       * but WITHOUT ANY WARRANTY; without even the implied warranty of
       * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
       * GNU Affero General Public License for more details.
       *
       * You should have received a copy of the GNU Affero General Public License
       * along with this program. If not, see <http://www.gnu.org/licenses/>.
       *
       */n.default=b}})},"object"==r(n)&&"object"==r(t)?t.exports=s():(a=[],void 0===(o="function"==typeof(i=s)?i.apply(n,a):i)||(t.exports=o))}).call(this,e(194)(t))}}]);
//# sourceMappingURL=vendors~editor-collab~editor-rich.js.map?v=d773d54abf4e6f54ab03