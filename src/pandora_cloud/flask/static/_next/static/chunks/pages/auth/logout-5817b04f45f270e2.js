(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{79242:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/logout",function(){return o(58193)}])},58193:function(n,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return f},default:function(){return s}});var i=o(39324),e=o(35250),u=o(12155),c=o(70079),r=o(88809),f=!0;function s(n){return(0,e.jsx)(a,(0,i._)({},n))}function a(n){var t=n.federatedLogoutUri;return(0,c.useEffect)(function(){(0,u.signOut)({callbackUrl:t||window.location.origin})},[t]),(0,c.useEffect)(function(){(0,r.I)()},[]),null}},88809:function(n,t,o){"use strict";o.d(t,{I:function(){return u}});var i,e="refresh";function u(){null==i||i.postMessage(e)}void 0!==window.BroadcastChannel&&((i=new window.BroadcastChannel("session")).onmessage=function(n){n.data===e&&(document.hidden?window.addEventListener("visibilitychange",function(){document.hidden||(window.location.href="/")}):setTimeout(function(){window.location.href="/"},300))})}},function(n){n.O(0,[774,888,179],function(){return n(n.s=79242)}),_N_E=n.O()}]);