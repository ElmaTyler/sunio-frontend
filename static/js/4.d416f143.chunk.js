(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[4],{510:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(3),o=n(173),l=n(9),i=n(579),r=n(116),d=n(1556),j=n(1544),u=n(1554),b=n(498),h=n(124),m=n(56),x=n.n(m),O=n(55),p=n(2),g=n(20),v=n.n(g),f=(n(514),n.p+"static/media/SUNLogo.df17f86b.svg"),N=n.p+"static/media/Tronlink.92ec32d5.svg",w=n.p+"static/media/white-close.481cddd1.svg",k=n(5),_=n(122),S=n(1),C=n(511),y=n(10),M=function(e){return window.location.hash.replace("#/","").toLowerCase()===e.toLowerCase()},P=function(){var e=Object(O.d)((function(){return _.a.network})),t=window.localStorage.getItem("lang")||v.a.options.currentLocale,n=x.a.find(S.b,{value:t}),c=function(t){e.setData({lang:t}),window.localStorage.setItem("lang",t),window.location.search="?lang=".concat(t)};return Object(y.jsxs)("div",{className:"language",children:[Object(y.jsx)("div",{className:"hide-for-pc",children:Object(y.jsx)("div",{className:"inner-box",children:Object(y.jsxs)("div",{className:"menu-hover-dropdown",children:[Object(y.jsx)("div",{style:{background:"#383050",borderRadius:"6px"},children:Object(y.jsxs)("a",{children:[null===n||void 0===n?void 0:n.name,Object(y.jsx)("div",{className:"down-icon"})]})}),Object(y.jsx)("div",{className:"header-select-box",children:Object(y.jsxs)("div",{className:"lang",children:[Object(y.jsx)("div",{className:"h15"}),Object(y.jsx)("div",{className:"header-wrapper",children:Object(y.jsx)("ul",{className:"top-list lang",children:S.b.map((function(e,n){var a=e.value,s=e.name;return Object(y.jsx)("li",{onClick:function(){return c(a)},children:Object(y.jsx)("span",{children:Object(y.jsx)("a",{className:a==t?"disabled lang":"lang",children:s})})},n)}))})})]})})]})})}),Object(y.jsx)("div",{className:"hide-for-mobile",children:Object(y.jsx)(j.a,{ghost:!0,expandIconPosition:"right",className:"mobile-language-select",children:Object(y.jsx)(j.a.Panel,{header:Object(y.jsxs)("div",{className:"flex space",style:{width:"100%"},children:[Object(y.jsx)("div",{children:v.a.get("header.lang")}),Object(y.jsx)("div",{style:{color:t==(null===n||void 0===n?void 0:n.value)?"#5916e1":""},children:null===n||void 0===n?void 0:n.name})]}),children:S.b.map((function(e){var n=e.name,a=e.value;return Object(y.jsx)("span",{style:{color:t==a?"#5916e1":"",display:"block"},onClick:function(){return c(a)},children:n},n)}))})})})]})},A=function(e){var t=e.item,n=e.isHoverPurple,c=void 0!==n&&n,a=(e.lang,Object(i.a)(e,["item","isHoverPurple","lang"])),s="";(t.route&&M(t.route)||t.subRoutes&&t.subRoutes.some((function(e){return e.route&&M(e.route)})))&&(s+=" active "),c&&(s+=" is-hover-purple "),t.subRoutes&&(s+=" menu-title ");var o=window.location.href.match(/(\S*)#/)[0]+"/";return Object(y.jsx)("span",{children:Object(y.jsxs)("a",Object(l.a)(Object(l.a)({href:t.href||o+"".concat("home"===t.route?"home":t.route),className:s,target:t.href?"_blank":"_self"},a),{},{children:[t.text,t.subRoutes?Object(y.jsx)("div",{className:"down-icon"}):null]}),t.text)})},H=function(e){var t=e.index,n=e.item,c=(e.items,e.isHoverPurple,e.lang),a=e.mobileCollapseIndex,s=e.setMobileCollapseIndex,o=e.toogleMenu,l=(Object(i.a)(e,["index","item","items","isHoverPurple","lang","mobileCollapseIndex","setMobileCollapseIndex","toogleMenu"]),""),r=[];return(n.route&&M(n.route)||n.subRoutes&&n.subRoutes.some((function(e){return e.route&&M(e.route)})))&&(l="active",r.push("1")),Object(y.jsx)(j.a,{ghost:!0,expandIconPosition:"right",defaultActiveKey:r,activeKey:a===t?1:-1,onChange:function(){s(a===t?-1:t),o(!1)},children:Object(y.jsx)(j.a.Panel,{header:n.text,className:l,children:n.subRoutes.map((function(e){return"menu"===e.type&&!1!==e.show?Object(y.jsx)("li",{onClick:function(){return o(!0)},style:{textIndent:20},children:e.text},e.text):!1===e.show?null:Object(y.jsx)("li",{children:Object(y.jsx)(A,{item:e,isHoverPurple:!0,lang:c},e.text)},e.text)}))},"1")},t)},R=function(e){var t=e.lang,n=Object(p.useState)(-999),c=Object(o.a)(n,2),a=c[0],s=c[1],r=Object(p.useState)(!1),d=Object(o.a)(r,2),j=d[0],u=d[1],b=Object(p.useState)(!1),h=Object(o.a)(b,2),m=h[0],x=h[1],O=[{route:"home",text:v.a.get("header.home")},{href:k.a.sunSwapV2,text:"SunSwap"},{text:v.a.get("header.liquidity"),id:"pool",subRoutes:[{route:"usdd_2pool",text:v.a.get("buysell.2pool_head")},{route:"3pool",text:v.a.get("header.3pool")},{route:"usdc",text:v.a.get("buysell.usdc_pool")},{href:"".concat(k.a.sunSwapV2.replace("#","?lang=".concat(t,"&type=pool#"))),text:v.a.get("header.pool")},{type:"menu",show:!j,text:v.a.get("header.more")},{route:"usdd_3pool",show:j,text:v.a.get("buysell.usdd_pool")},{route:"usdd_old_2pool",show:j,text:v.a.get("buysell.usdd_pool_new_head")}]},{route:"stake",text:v.a.get("header.farm")},{route:"psm",text:v.a.get("psm.menu")},{route:"governance",text:v.a.get("header.governance")},{text:v.a.get("header.more"),id:"more",subRoutes:[{text:v.a.get("wallet.white_paper"),href:"".concat(k.a.fileLink,"SUN_V2_Whitepaper_").concat("en-US"===t?"en":"zh-CN"===t?"cn":"tc",".pdf")},{route:"risks",text:v.a.get("header.risks")},{route:"claim",text:v.a.get("header.airdrop")},{href:"".concat(k.a.centuryMining.replace("#","?lang=".concat(t,"#"))),text:v.a.get("header.century_mining")}]}];Object(p.useEffect)((function(){var e=-1;O.forEach((function(t,n){t.subRoutes&&t.subRoutes.some((function(e){return e.route&&M(e.route)}))&&(e=n)})),s(e)}),[]);var g=function(e){u(e)},f=function(){u(!1),x(!0)},N=function(){x(!1)},w=function(e){var n=e.item,c=e.items,a=(e.isHoverPurple,Object(i.a)(e,["item","items","isHoverPurple"]));return Object(y.jsxs)("div",Object(l.a)(Object(l.a)({className:" menu-hover-dropdown"},a),{},{onMouseEnter:f,onMouseLeave:N,children:[Object(y.jsx)("button",{children:Object(y.jsx)(A,{item:n,isHoverPurple:!0,lang:t})}),Object(y.jsx)("div",{className:"header-select-box-wrapper",children:Object(y.jsxs)("div",{className:"header-select-box-pool "+(m?"show":""),children:[Object(y.jsx)("div",{className:"h15"}),Object(y.jsx)("div",{className:"header-wrapper",children:Object(y.jsx)("ul",{className:"top-list",children:c.map((function(e){return"menu"===e.type&&!1!==e.show?Object(y.jsx)("li",{onClick:function(){return g(!0)},children:e.text},e.text):!1===e.show?null:Object(y.jsx)("li",{children:Object(y.jsx)(A,{item:e,lang:t})},e.text)}))})})]})})]}))},_=function(e){var n=e.item,c=e.items,a=(e.isHoverPurple,Object(i.a)(e,["item","items","isHoverPurple"]));return Object(y.jsxs)("div",Object(l.a)(Object(l.a)({className:" menu-hover-dropdown"},a),{},{children:[Object(y.jsx)("button",{children:Object(y.jsx)(A,{item:n,isHoverPurple:!0,lang:t})}),Object(y.jsx)("div",{className:"header-select-box-wrapper",children:Object(y.jsxs)("div",{className:"header-select-box",children:[Object(y.jsx)("div",{className:"h15"}),Object(y.jsx)("div",{className:"header-wrapper",children:Object(y.jsx)("ul",{className:"top-list",children:c.map((function(e){return Object(y.jsx)("li",{children:Object(y.jsx)(A,{item:e,lang:t})},e.text)}))})})]})})]}))};return O.map((function(e,n){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"hide-for-pc",children:e.subRoutes?"pool"===e.id?Object(y.jsx)(w,{items:e.subRoutes,item:e,isHoverPurple:!0},n):Object(y.jsx)(_,{items:e.subRoutes,item:e,isHoverPurple:!0},n):Object(y.jsx)(A,{item:e,isHoverPurple:!0,lang:t})}),-999!==a&&Object(y.jsx)("div",{className:"hide-for-mobile",children:e.subRoutes?Object(y.jsx)(H,{index:n,items:e.subRoutes,item:e,isHoverPurple:!0,mobileCollapseIndex:a,toogleMenu:g,setMobileCollapseIndex:s},n):Object(y.jsx)(A,{item:e,isHoverPurple:!0,lang:t},n)})]},n)}))};t.a=function(e){var t=Object(p.useState)(!1),n=Object(o.a)(t,2),c=n[0],l=n[1],i=(Object(h.a)(window.navigator).any,Object(O.d)((function(){return _.a.network}))),j=window.localStorage.getItem("lang"),m=Object(p.useState)(!0),x=Object(o.a)(m,2),g=x[0],M=x[1];Object(p.useEffect)(Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.loadPolyContract(),e.instantActions&&e.instantActions(),i.isConnected?(i.getTrxBalance(),e.mountedActions&&e.mountedActions()):i.initTronLinkWallet((function(){i.getTrxBalance(),e.mountedActions&&e.mountedActions()}),(function(){e.unmountedActions&&e.unmountedActions()}),!1),i.listenTronLink();case 4:case"end":return t.stop()}}),t)}))),[]);var A=function(e){var t=document.querySelector(".toast-text ul");t&&(t.style.animationPlayState=e?"paused":"running")},H=function(){var e=function(e,t,n){return Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"en-US"===j?e:t,target:"_blank",rel:"noreferrer",children:[Object(y.jsx)("span",{children:v.a.get(n)}),Object(y.jsx)("span",{className:"link",children:v.a.get("header.learn_more")})]})},n)};return Object(y.jsxs)(y.Fragment,{children:[e(k.a.toastEn18,k.a.toastCn18,"header.toast18"),e(k.a.toastEn19,k.a.toastCn19,"header.toast19"),e(k.a.toastEn20,k.a.toastCn20,"header.toast20")]})},E=function(){return Object(y.jsxs)("div",{className:"top-menu-bar "+("none"===e.display?"hide":""),children:[Object(y.jsxs)("div",{className:"inner-box",children:[Object(y.jsx)("a",{href:"/?lang=".concat(j,"#/home"),className:"sun-logo",children:Object(y.jsx)("img",{src:f,alt:"SUN Logo"})}),Object(y.jsx)(R,{lang:j})]}),Object(y.jsxs)("div",{className:"flex account-box",children:[Object(y.jsx)(C.a,{accountShow:!0}),Object(y.jsx)(P,{})]})]})},L=function(){return Object(y.jsxs)("div",{className:"mobile-header "+("none"===e.display?"hide":""),children:[Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)("a",{href:"/?lang=".concat(j,"#/home"),className:"mobile-logo"}),Object(y.jsx)("div",{className:"mobile-category",onClick:function(){l(!0)}})]}),Object(y.jsxs)(u.a,{title:null,placement:"right",className:"mobile-menu-drawer",closable:!0,onClose:function(){l(!1)},visible:c,closeIcon:null,children:[Object(y.jsx)(y.Fragment,{children:i.isConnected?Object(y.jsxs)("div",{onClick:function(){i.setData({accountModalVisible:!0})},className:"address-text",children:[Object(y.jsx)("a",{href:"?lang=".concat(j,"/home"),className:"mobile-logo"}),Object(y.jsx)("span",{children:Object(S.o)(i.defaultAccount,4,4)})]}):Object(y.jsx)("span",{onClick:function(){i.setData({loginModalVisible:!0,loginModalStep:1})},className:"connect-wallet",children:v.a.get("header.connect_wallet")})}),Object(y.jsx)(R,{lang:j}),Object(y.jsx)(P,{})]})]})},I=function(){i.setData({accountModalVisible:!1})},V=function(){i.setData({loginModalVisible:!1,loginModalStep:1})};return Object(y.jsx)(O.a,{children:function(){return Object(y.jsxs)(y.Fragment,{children:[g&&Object(y.jsxs)("div",{className:"header-toast",children:[Object(y.jsx)("div",{className:"toast-text",children:Object(y.jsxs)("ul",{onMouseOver:function(){return A(!0)},onMouseLeave:function(){return A(!1)},className:"animate",children:[H(),H(),H()]})}),Object(y.jsx)("img",{src:w,className:"white-close",onClick:function(){return M(!1)}})]}),Object(y.jsx)("div",{className:"hide-for-pc",children:Object(y.jsx)(E,{})}),Object(y.jsx)("div",{className:"hide-for-mobile",children:Object(y.jsx)(L,{})}),Object(y.jsx)(b.a,{title:1===i.loginModalStep?Object(y.jsx)("div",{className:"common-modal-title left",children:v.a.get("header.connect_wallet")}):null,visible:i.loginModalVisible,onCancel:V,footer:null,className:"common-modal common-bg",width:540,children:1===i.loginModalStep?Object(y.jsxs)("div",{className:"center",children:[Object(y.jsx)("div",{className:"logo"}),Object(y.jsx)("div",{className:"wallet-list",children:Object(y.jsxs)("div",{className:"wallet-item",onClick:function(t){i.setData({loginModalStep:2}),i.initTronLinkWallet((function(){i.isConnected&&(i.setData({loginModalStep:2}),e.mountedActions&&e.mountedActions())}),(function(){e.unmountedActions&&e.unmountedActions()}))},children:[Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:N,className:"tronlink-logo",alt:""})}),Object(y.jsx)("span",{children:v.a.get("login_modal.tronlink")})]})}),Object(y.jsxs)("div",{className:"tronlink-tips",children:[Object(y.jsxs)("span",{children:[v.a.get("login_modal.no_tronlink_tip.tip1")," "]}),Object(y.jsx)("a",{href:"https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec",children:v.a.get("login_modal.no_tronlink_tip.tip2")})]}),Object(y.jsxs)("div",{className:"tronlink-tips mt10",children:[Object(y.jsxs)("span",{children:[v.a.get("wallet.accept_tips")," "]}),Object(y.jsx)("a",{href:"".concat(k.a.fileLink,"SUN_Terms_of_Use_").concat("en-US"===j?"en":"zh-CN"===j?"cn":"tc",".pdf"),target:"walletService",children:v.a.get("wallet.service")}),"\xa0",Object(y.jsx)("a",{href:"".concat(k.a.fileLink,"SUN_Privacy_Policy_").concat("en-US"===j?"en":"zh-CN"===j?"cn":"tc",".pdf"),target:"walletPrivacy",children:v.a.get("wallet.privacy")})]})]}):Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"back-icon pointer",children:Object(y.jsx)("span",{})}),Object(y.jsxs)("div",{className:"step2-wallet",children:[Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:N,className:"tronlink-logo",alt:""})}),Object(y.jsx)("span",{children:v.a.get("login_modal.tronlink")})]}),Object(y.jsx)(r.a,{className:"loading-img",style:{fontSize:"80px"}}),Object(y.jsx)("div",{className:"init-text",children:v.a.get("login_modal.initializing")}),Object(y.jsx)("div",{className:"login-tip-text",children:v.a.getHTML("login_modal.login_tips")})]})}),Object(y.jsx)(b.a,{title:v.a.get("account_modal.account"),footer:null,onCancel:I,className:"account-modal common-modal common-bg",visible:i.accountModalVisible,width:540,children:Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"address-con",children:[Object(y.jsx)("div",{className:"tip-text",children:v.a.get("account_modal.connect_with_tronlink")}),Object(y.jsxs)("div",{className:"address-tex",children:[Object(y.jsx)("span",{className:"copy-account",children:i.defaultAccount}),Object(y.jsxs)("span",{className:"pointer copy",title:i.defaultAccount,id:"copySpan",onClick:function(e){Object(S.n)(e,"50px","copySpan")},children:[Object(y.jsx)(d.a,{})," ",v.a.get("account_modal.copy")]})]})]})})})]})}})}},511:function(e,t,n){"use strict";var c=n(55),a=(n(2),n(20)),s=n.n(a),o=(n(514),n(122)),l=n(1),i=n(10);t.a=function(e){var t=Object(c.d)((function(){return o.a.network})),n=function(){t.setData({accountModalVisible:!0})},a=function(){t.setData({loginModalVisible:!0,loginModalStep:1})};return t.isConnected&&!e.accountShow?null:Object(i.jsx)(c.a,{children:function(){return Object(i.jsx)("div",{children:t.isConnected?Object(i.jsx)("div",{onClick:n,className:e.accountShow?"connect-wallet":"",children:Object(l.o)(t.defaultAccount,4,4)}):Object(i.jsx)("div",{className:e.accountShow?"":"tac",children:Object(i.jsx)("span",{onClick:a,className:e.accountShow?"connect-wallet":"connect-btn",children:s.a.get("header.connect_wallet")})})})}})}},514:function(e,t,n){}}]);