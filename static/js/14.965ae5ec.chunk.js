(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ze}));var c,r,i,a,s,o,j,b,l,u,d,O,x,m,p,h,g,f,v,k,w,y,C,S,z=n(18),F=n(0),A=n(9),E=n(13),T=n(45),N=n(152),Q=n(2),K=n.n(Q),B=n(14),L=n(24),H=n(29),P=n(254),I=n(17),R=n(15),U=n.n(R),V=n(59),D=n(26),M=n(92),W=n(248),_=n(153),q=function(){var e=Object(F.useState)([]),t=Object(L.a)(e,2),n=t[0],c=t[1],r=Object(H.c)().account,i=Object(_.a)().fastRefresh;return Object(F.useEffect)((function(){r&&function(){var e=Object(B.a)(K.a.mark((function e(){var t,n,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W.b.map((function(e){return{address:Object(D.h)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(V.a)(M,t);case 3:n=e.sent,i=W.b.map((function(e,t){return Object(I.a)(Object(I.a)({},e),{},{balance:new U.a(n[t])})})),c(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},$=n(246),J=function(){var e=Object(F.useState)([]),t=Object(L.a)(e,2),n=t[0],c=t[1],r=Object(H.c)().account,i=Object(_.a)().fastRefresh;return Object(F.useEffect)((function(){r&&function(){var e=Object(B.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W.b.map((function(e){return{address:Object(D.h)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(V.a)(M,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},X=n(46),Y=n(264),G=n(4),Z=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,i=e.lineHeight,a=void 0===i?"1":i,s=e.prefix,o=void 0===s?"":s,j=e.bold,b=void 0===j||j,l=e.color,u=void 0===l?"text":l,d=Object(Y.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=d.countUp,x=d.update,m=Object(F.useRef)(x);return Object(F.useEffect)((function(){m.current(t)}),[t,m]),Object(G.jsxs)(E.db,{bold:b,fontSize:r,style:{lineHeight:a},color:u,children:[o,O]})},ee=function(e){return Object(G.jsx)(Z,Object(I.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},te=A.e.div(c||(c=Object(z.a)(["\n  margin-bottom: 24px;\n}\n"]))),ne=function(){var e=Object(T.a)(),t=Object(H.c)().account,n=J().reduce((function(e,t){return e+new U.a(t).div(new U.a(10).pow(18)).toNumber()}),0),c=new U.a(n).multipliedBy(Object(X.m)()).toNumber();return t?Object(G.jsxs)(te,{children:[Object(G.jsx)(Z,{value:n,lineHeight:"1.5"}),Object(G.jsx)(ee,{value:c})]}):Object(G.jsx)(E.db,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},ce=n(858),re=n(73),ie=function(){var e=Object(T.a)(),t=Object(ce.a)(Object(D.d)()),n=new R.BigNumber(Object(re.a)(t)).multipliedBy(Object(X.m)()).toNumber();return Object(H.c)().account?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Z,{value:Object(re.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(G.jsx)(ee,{value:n})]}):Object(G.jsx)(E.db,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},ae=Object(A.e)(E.o)(r||(r=Object(z.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),se=A.e.div(i||(i=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),oe=A.e.img(a||(a=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),je=A.e.div(s||(s=Object(z.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),be=A.e.div(o||(o=Object(z.a)(["\n  margin-top: 24px;\n"]))),le=function(){var e=Object(F.useState)(!1),t=Object(L.a)(e,2),n=t[0],c=t[1],r=Object(H.c)().account,i=Object(T.a)(),a=q().filter((function(e){return e.balance.toNumber()>0})),s=Object(P.a)(a.map((function(e){return e.pid}))).onReward,o=Object(F.useCallback)(Object(B.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(G.jsx)(ae,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{size:"xl",mb:"24px",children:i(542,"Farms & Staking")}),Object(G.jsx)(oe,{src:"/images/cake.svg",alt:"cake logo",width:64,height:64}),Object(G.jsxs)(se,{children:[Object(G.jsxs)(je,{children:[i(544,"CAKE to Harvest"),":"]}),Object(G.jsx)(ne,{})]}),Object(G.jsxs)(se,{children:[Object(G.jsxs)(je,{children:[i(546,"CAKE in Wallet"),":"]}),Object(G.jsx)(ie,{})]}),Object(G.jsx)(be,{children:r?Object(G.jsx)(E.k,{id:"harvest-all",disabled:a.length<=0||n,onClick:o,width:"100%",children:n?i(548,"Collecting CAKE"):i(532,"Harvest all (".concat(a.length,")"))}):Object(G.jsx)($.a,{width:"100%"})})]})})},ue=n(866),de=n(880),Oe=n(855),xe=n(932),me=n(875),pe=n(902),he=n(903),ge=A.e.div(j||(j=Object(z.a)(["\n  margin-bottom: 24px;\n }\n"]))),fe=function(){var e=Object(Oe.c)().claimAmount,t=Object(re.a)(e),n=new R.BigNumber(t).multipliedBy(Object(X.m)()).toNumber();return Object(G.jsxs)(ge,{children:[Object(G.jsx)(Z,{value:t,lineHeight:"1.5"}),Object(G.jsx)(ee,{value:n,decimals:2})]})},ve=function(){var e=Object(T.a)(),t=Object(Oe.d)(),n=Object(re.a)(t),c=n.toLocaleString(void 0,{maximumFractionDigits:2}),r=new R.BigNumber(n).multipliedBy(Object(X.m)()).toNumber();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(E.db,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:[c," ",e(999,"CAKE")]}),Object(G.jsx)(ee,{value:r})]})},ke=Object(A.e)(E.o)(b||(b=Object(z.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),we=A.e.div(l||(l=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),ye=A.e.img(u||(u=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),Ce=A.e.div(d||(d=Object(z.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Se=A.e.div(O||(O=Object(z.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),ze=function(){var e=Object(ue.a)(),t=Object(F.useState)(!1),n=Object(L.a)(t,2),c=n[0],r=n[1],i=Object(T.a)(),a=Object(me.b)(),s=Object(E.rb)(Object(G.jsx)(he.a,{})),o=Object(L.a)(s,1)[0],j=Object(Oe.c)().claimAmount,b=Object(de.c)().onMultiClaim,l=Object(ce.a)(Object(D.d)()),u=Object(pe.a)(o),d=u.handleApprove,O=u.requestedApproval,x=Object(F.useCallback)(Object(B.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,b();case 4:e.sent&&r(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[b,r]),m=Object(E.rb)(Object(G.jsx)(xe.a,{max:l,tokenName:"CAKE"})),p=Object(L.a)(m,1)[0];return Object(G.jsx)(ke,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{size:"xl",mb:"24px",children:i(550,"Your Lottery Winnings")}),Object(G.jsx)(ye,{src:"/images/ticket.svg",alt:"cake logo",width:64,height:64}),Object(G.jsxs)(we,{children:[Object(G.jsxs)(Ce,{children:[i(552,"CAKE to Collect"),":"]}),Object(G.jsx)(fe,{})]}),Object(G.jsxs)(we,{children:[Object(G.jsxs)(Ce,{children:[i(554,"Total jackpot this round"),":"]}),Object(G.jsx)(ve,{})]}),Object(G.jsxs)(Se,{children:[Object(G.jsx)(E.k,{id:"dashboard-collect-winnings",disabled:0===Object(re.a)(j)||c,onClick:x,style:{marginRight:"8px"},children:i(556,"Collect Winnings")}),a.toNumber()?Object(G.jsx)(E.k,{id:"dashboard-buy-tickets",variant:"secondary",onClick:p,disabled:e,children:i(558,"Buy Tickets")}):Object(G.jsx)(E.k,{width:"100%",disabled:O,onClick:d,children:i(494,"Approve CAKE")})]})]})})},Fe=Object(A.e)(E.o)(x||(x=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Ae=A.e.div(m||(m=Object(z.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Ee=function(){var e=Object(T.a)(),t=Object(ce.c)(),n=Object(re.a)(Object(ce.b)(Object(D.d)())),c=t?Object(re.a)(t)-n:0;return Object(G.jsx)(Fe,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{size:"xl",mb:"24px",children:e(534,"Cake Stats")}),Object(G.jsxs)(Ae,{children:[Object(G.jsx)(E.db,{fontSize:"14px",children:e(536,"Total CAKE Supply")}),c&&Object(G.jsx)(Z,{fontSize:"14px",value:c})]}),Object(G.jsxs)(Ae,{children:[Object(G.jsx)(E.db,{fontSize:"14px",children:e(538,"Total CAKE Burned")}),Object(G.jsx)(Z,{fontSize:"14px",decimals:0,value:n})]}),Object(G.jsxs)(Ae,{children:[Object(G.jsx)(E.db,{fontSize:"14px",children:e(540,"New CAKE/block")}),Object(G.jsx)(Z,{fontSize:"14px",decimals:0,value:25})]})]})})},Te=Object(A.e)(E.o)(p||(p=Object(z.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),Ne=function(){var e=Object(T.a)(),t=function(){var e=Object(F.useState)(null),t=Object(L.a)(e,2),n=t[0],c=t[1];return Object(F.useEffect)((function(){!function(){var e=Object(B.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.pancakeswap.com/api/v1","/stat"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),n=t?t.total_value_locked_all.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(G.jsx)(Te,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),t?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(E.F,{size:"xl",children:"$".concat(n)}),Object(G.jsx)(E.db,{color:"textSubtle",children:e(764,"Across all LPs and Syrup Pools")})]}):Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(E.ab,{height:66})})]})})},Qe=n(67),Ke=n(5),Be=n(154),Le=Object(A.e)(E.o)(h||(h=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),He=Object(A.e)(E.F).attrs({size:"xl"})(g||(g=Object(z.a)(["\n  line-height: 44px;\n"]))),Pe=function(){var e=Object(T.a)(),t=Object(X.e)(),n=Object(X.l)(),c=Object(F.useRef)(Number.MIN_VALUE),r=function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier}));return i(e),(100*c.current).toLocaleString("en-US").slice(0,-1)},i=Object(F.useCallback)((function(e){var r,i=new U.a((null===(r=t.find((function(e){return e.pid===Be.f})))||void 0===r?void 0:r.tokenPriceVsQuote)||0);e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=Be.e.times(e.poolWeight),r=t.times(Be.c),a=i.times(r).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===Ke.b.BUSD)a=i.times(r).div(e.lpTotalInQuoteToken).times(n);else if(e.quoteTokenSymbol===Ke.b.CAKE)a=r.div(e.lpTotalInQuoteToken);else if(e.dual){var s=e&&i.times(t).times(Be.c).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new U.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(Be.c).div(e.lpTotalInQuoteToken);a=s&&o&&s.plus(o)}return c.current<a.toNumber()&&(c.current=a.toNumber()),a}))}),[n,t]);return Object(G.jsx)(Le,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"Earn up to"}),Object(G.jsx)(He,{color:"#7645d9",children:r()?"".concat(r(),"% ").concat(e(736,"APR")):Object(G.jsx)(E.ab,{animation:"pulse",variant:"rect",height:"44px"})}),Object(G.jsxs)(E.E,{justifyContent:"space-between",children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"in Farms"}),Object(G.jsx)(Qe.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(G.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},Ie=n(62),Re=n(173),Ue=n.n(Re),Ve=n(65),De=Object(A.e)(E.o)(f||(f=Object(z.a)(["\n  background: linear-gradient(#53dee9, #7645d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Me=Object(A.e)(E.F).attrs({size:"xl"})(v||(v=Object(z.a)(["\n  line-height: 44px;\n"]))),We=function(){var e=Ve.a.filter((function(e){return!e.isFinished&&!e.tokenName.includes("CAKE")})),t=Ue()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),n=["CAKE"].concat(Object(Ie.a)(t.map((function(e){return e.tokenName})))).join(", ");return Object(G.jsx)(De,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"Earn"}),Object(G.jsx)(Me,{color:"invertedContrast",children:n}),Object(G.jsxs)(E.E,{justifyContent:"space-between",children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"in Pools"}),Object(G.jsx)(Qe.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(G.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},_e=function(){var e=Object(Oe.d)();return Object(re.a)(e)*Object(X.m)().toNumber()},qe=Object(A.e)(E.o)(k||(k=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),$e=Object(A.e)(E.F).attrs({size:"xl"})(w||(w=Object(z.a)(["\n  line-height: 44px;\n"]))),Je=function(){var e=Math.round(_e()).toLocaleString();return Object(G.jsx)(qe,{children:Object(G.jsxs)(E.p,{children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"Lottery with"}),Object(G.jsxs)($e,{color:"#7645d9",children:["$",e]}),Object(G.jsxs)(E.E,{justifyContent:"space-between",children:[Object(G.jsx)(E.F,{color:"contrast",size:"lg",children:"up for grabs"}),Object(G.jsx)(Qe.b,{exact:!0,activeClassName:"active",to:"/lottery",id:"lottery-pot-cta",children:Object(G.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},Xe=A.e.div(y||(y=Object(z.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ye=Object(A.e)(E.e)(C||(C=Object(z.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ge=Object(A.e)(E.e)(S||(S=Object(z.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ze=function(){var e=Object(T.a)();return Object(G.jsxs)(N.a,{children:[Object(G.jsxs)(Xe,{children:[Object(G.jsx)(E.F,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"PancakeSwap")}),Object(G.jsx)(E.db,{children:e(578,"The #1 AMM and yield farm on Binance Smart Chain.")})]}),Object(G.jsxs)("div",{children:[Object(G.jsxs)(Ye,{children:[Object(G.jsx)(le,{}),Object(G.jsx)(ze,{})]}),Object(G.jsxs)(Ge,{children:[Object(G.jsx)(Pe,{}),Object(G.jsx)(We,{}),Object(G.jsx)(Je,{})]}),Object(G.jsxs)(Ye,{children:[Object(G.jsx)(Ee,{}),Object(G.jsx)(Ne,{})]})]})]})}}}]);
//# sourceMappingURL=14.965ae5ec.chunk.js.map