!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(1)},function(t,e,n){"use strict";var o=n(2),r=(n.n(o),n(3)),i=(n.n(r),n(4));n.n(i)},function(t,e){},function(t,e){$(document).ready(function(){$(".navigation li").click(function(){var t=$(this).attr("data-tab");$(".navigation li").removeClass("current"),$(".tab-content").removeClass("current"),$(this).addClass("current"),$("#"+t).addClass("current")})})},function(t,e){Prism.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),$("pre.copy-to-clipboard").each(function(){$this=$(this),$button=$("<button>Copy</button>"),$this.wrap("<div/>").removeClass("copy-to-clipboard"),$wrapper=$this.parent(),$wrapper.addClass("copy-to-clipboard-wrapper").css({position:"relative"}),$button.css({position:"absolute",top:10,right:10}).appendTo($wrapper).addClass("copy-to-clipboard button-primary button-small");var t=new Clipboard("button.copy-to-clipboard",{target:function(t){return t.previousElementSibling}});t.on("success",function(t){t.clearSelection(),t.trigger.textContent="Copied",window.setTimeout(function(){t.trigger.textContent="Copy"},2e3)}),t.on("error",function(t){t.trigger.textContent='Press "Ctrl + C" to copy',window.setTimeout(function(){t.trigger.textContent="Copy"},2e3)})})}]);