(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[33],{1347:function(e,t,n){},1348:function(e,t,n){},1349:function(e,t,n){},1384:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),a=n.n(c),r=n(3),s=n(174),i=n(2),o=n(55),u=n(18),d=n.n(u),f=(n(514),n(26)),j=n(37),m=(n(1347),n(124)),l=(n(1348),n(9));function b(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],r=function(t,n){var c=e.reverse,a="next"==n,r=e[c?"min":"max"],s=e[c?"max":"min"];return a?t==r?s:t+(c?-1:1):t==s?r:t+(c?1:-1)};Object(i.useEffect)((function(){a(!c)}),[e.now]);var u=function(e){var t=r(e,"prev"),n=[e,t,r(t,"prev")];return n[c?"push":"unshift"](c?r(t,"prev"):r(e,"next")),n};return Object(l.jsx)(o.a,{children:function(){return Object(l.jsx)("div",{className:"cards",children:u(e.now).map((function(t,n){return Object(l.jsx)("div",{className:"card".concat(t==e.now?" now":""),children:Object(l.jsx)("div",{className:"sides",children:["front","back"].map((function(e){return Object(l.jsx)("div",{className:"side ".concat(e),children:Object(l.jsx)("div",{className:"side-num",children:"front"==e?t:r(t,"next")})},"side".concat(e))}))})},"flip-card".concat(n))}))})}})}n(1349);var O=n(1),v=null;function h(e){var t=Object(o.d)((function(){return m.a.network})),n=Object(o.d)((function(){return m.a.farmStore})),c=Object(i.useState)(n.farmData[e.id].start||e.start),a=Object(s.a)(c,2),r=a[0],u=a[1],d=Object(i.useState)(n.farmData[e.id].diff||{}),f=Object(s.a)(d,2),j=f[0],h=f[1],p=Object(i.useState)(n.farmData[e.id].end||e.end),x=Object(s.a)(p,2),w=x[0];x[1];Object(i.useEffect)((function(){S(j)?N():v=window.setTimeout((function(){D(),S()&&N()}),1e3)}),[r]);var N=function(){window.clearTimeout(v),t.setData({isTimeOver:!0}),e.onStop&&e.onStop()},D=function(){var t=Math.abs(w-r),c=Math.floor(t/1e3),a=Math.floor(c/60),s=Math.floor(a/60),i=(Math.floor(s/24),{hours:s%24,minutes:a%60,seconds:c%60}),o=r+1e3;Object(O.a)(w).isNaN()||Object(O.a)(r).isNaN()||(h(i),u(o),n.farmData[e.id].diff=i,n.farmData[e.id].start=o)},S=function(){return w&&r>w},g={days:[[0,9],[0,9]],hours:[[0,2],[0,4]],minutes:[[0,5],[0,9]],seconds:[[0,5],[0,9]]};return Object(l.jsx)(o.a,{children:function(){return Object(l.jsx)("div",{className:"countdown",children:Object.keys(j).map((function(e){return Object(l.jsx)("div",{className:"countdown-".concat(e),children:Array(2).fill(0).map((function(t,n){return Object(l.jsx)(b,{reverse:!0,now:+(c=j[e],(c<10?"0"+c:c)+"")[n],min:g[e][n][0],max:g[e][n][1]},"".concat(e).concat(n));var c}))},e)}))})}})}n(5);function p(e){Object(o.d)((function(){return m.a.pool})),Object(o.d)((function(){return m.a.network}));var t,n,c=Object(o.d)((function(){return m.a.farmStore})),u=Object(i.useState)((new Date).getTime()),b=Object(s.a)(u,2),O=b[0],v=b[1],p=Object(i.useState)(1e3*(null===(t=c.farmData[e.id])||void 0===t?void 0:t.remainingTime)+1e3*j.a.unfreezeTime),x=Object(s.a)(p,2),w=x[0],N=x[1],D=1e3*(null===(n=c.farmData[e.id])||void 0===n?void 0:n.remainingTime)+1e3*j.a.unfreezeTime;Object(i.useEffect)((function(){S()}),[]);var S=function(){var t=Object(r.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.o)();case 3:(n=t.sent).success&&(r=n.time,v(r),N(D),c.farmData[e.id].start=r,c.farmData[e.id].end=w),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("get time error",t.t0),setTimeout((function(){S()}),3e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)(o.a,{children:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"count-down-wrap",children:[Object(l.jsx)("div",{className:"count",children:Object(l.jsx)(h,{start:O,end:w,id:e.id,onStop:e.stopCount})}),Object(l.jsxs)("div",{className:"countdesc",children:[Object(l.jsx)("span",{className:"cd-hour",children:d.a.get("century.h")}),Object(l.jsxs)("span",{className:"cd-minute",children:[d.a.get("century.m")," "]}),Object(l.jsx)("span",{className:"cd-second",children:d.a.get("century.s")})]})]})})}})}},1544:function(e,t,n){"use strict";n.r(t);n(2);var c=n(1384),a=(n(555),n(9));t.default=function(){return Object(a.jsx)(c.a,{})}},555:function(e,t,n){}}]);