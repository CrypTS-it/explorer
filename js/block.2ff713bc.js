(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["block"],{3152:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.nightMode?n("img",{staticClass:"mx-auto",attrs:{src:r("6772")}}):n("img",{staticClass:"mx-auto",attrs:{src:r("62eb")}}),n("h1",{staticClass:"text-3xl"},[t._v("\n    "+t._s(t.$t("PAGES.NOT_FOUND.TITLE"))+"\n  ")]),n("i18n",{staticClass:"mt-2",attrs:{tag:"p",path:"PAGES.NOT_FOUND.DATA"}},[n("span",{attrs:{place:"dataType"}},[t._v(t._s(t.dataType))]),n("span",{staticClass:"semibold",attrs:{place:"dataId"}},[t._v("\n      "+t._s(t.dataId)+"\n    ")])]),n("button",{staticClass:"button-lg mt-4",attrs:{disabled:t.isLoading},on:{click:t.emitReload}},[t.isLoading?n("Loader",{attrs:{data:null}}):n("span",[t._v(t._s(t.$t("COMMON.RELOAD")))])],1)],1)},a=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=r("d225"),i=r("b0b4"),o=r("308d"),l=r("6bb5"),u=r("4e2b"),b=r("9ab4"),p=r("60a3"),d=r("2f62");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"emitReload",value:function(){this.$emit("reload")}}]),e}(p["c"]);Object(b["a"])([Object(p["b"])({required:!0})],h.prototype,"isLoading",void 0),Object(b["a"])([Object(p["b"])({required:!0})],h.prototype,"dataType",void 0),Object(b["a"])([Object(p["b"])({required:!0})],h.prototype,"dataId",void 0),h=Object(b["a"])([Object(p["a"])({computed:f({},Object(d["b"])("ui",["nightMode"]))})],h);var O=h,k=O,m=r("2877"),g=Object(m["a"])(k,n,a,!1,null,null,null);e["a"]=g.exports},"3ec8":function(t,e,r){},"5dbe":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.block?r("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[r("ContentHeader",[t._v(t._s(t.$t("COMMON.BLOCK")))]),t.blockNotFound?[r("section",{staticClass:"page-section py-5 md:py-10 px-6"},[r("div",{staticClass:"my-10 text-center"},[r("NotFound",{attrs:{"is-loading":t.isLoading,"data-id":t.block.id,"data-type":"block"},on:{reload:t.onReload}})],1)])]:[r("BlockIdentity",{attrs:{block:t.block,"prev-handler":t.prevBlock,"next-handler":t.nextBlock}}),r("BlockDetails",{attrs:{block:t.block}}),r("BlockTransactions",{attrs:{block:t.block}})]],2):t._e()},a=[],c=r("967e"),s=r.n(c),i=(r("7514"),r("96cf"),r("3b8d")),o=r("d225"),l=r("b0b4"),u=r("308d"),b=r("6bb5"),p=r("4e2b"),d=r("9ab4"),v=r("60a3"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-section py-5 md:py-10 mb-5"},[r("div",{staticClass:"px-5 sm:px-10"},[r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("COMMON.TRANSACTIONS"))+"\n      ")]),r("div",[t._v(t._s(t.block.transactions))])]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("COMMON.CONFIRMATIONS"))+"\n      ")]),t.confirmations>=0?r("div",[t._v("\n        "+t._s(t.confirmations)+"\n      ")]):t._e()]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("COMMON.HEIGHT"))+"\n      ")]),r("div",[t._v(t._s(t.block.height))])]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("BLOCK.REWARD"))+"\n      ")]),t.block.forged?r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.block.forged.reward,t.price):"",placement:"left"},expression:"{\n          trigger: 'hover click',\n          content: price ? readableCurrency(block.forged.reward, price) : '',\n          placement: 'left',\n        }"}]},[t._v("\n        "+t._s(t.readableCrypto(t.block.forged.reward))+"\n      ")]):t._e()]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("BLOCK.FEES"))+"\n      ")]),t.block.forged?r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.block.forged.fee,t.price):"",placement:"left"},expression:"{\n          trigger: 'hover click',\n          content: price ? readableCurrency(block.forged.fee, price) : '',\n          placement: 'left',\n        }"}]},[t._v("\n        "+t._s(t.readableCrypto(t.block.forged.fee))+"\n      ")]):t._e()]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("BLOCK.TOTAL_FORGED"))+"\n      ")]),t.block.forged?r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.block.forged.total,t.price):"",placement:"left"},expression:"{\n          trigger: 'hover click',\n          content: price ? readableCurrency(block.forged.total, price) : '',\n          placement: 'left',\n        }"}]},[t._v("\n        "+t._s(t.readableCrypto(t.block.forged.total))+"\n      ")]):t._e()]),r("div",{staticClass:"list-row-border-b"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("BLOCK.PROCESSED_AMOUNT"))+"\n      ")]),t.block.forged?r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.block.forged.amount,t.price):"",placement:"left"},expression:"{\n          trigger: 'hover click',\n          content: price ? readableCurrency(block.forged.amount, price) : '',\n          placement: 'left',\n        }"}]},[t._v("\n        "+t._s(t.readableCrypto(t.block.forged.amount))+"\n      ")]):t._e()]),r("div",{staticClass:"list-row-border-b-no-wrap"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("COMMON.TIMESTAMP"))+"\n      ")]),t.block.timestamp?r("div",{staticClass:"text-right"},[t._v("\n        "+t._s(t.readableTimestamp(t.block.timestamp.unix))+"\n      ")]):t._e()]),r("div",{staticClass:"list-row"},[r("div",{staticClass:"mr-4"},[t._v("\n        "+t._s(t.$t("BLOCK.GENERATED_BY"))+"\n      ")]),t.block.generator?r("div",[r("LinkWallet",{attrs:{address:t.block.generator.address,"tooltip-placement":"left"}})],1):t._e()])])])},h=[],O=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),k=r("2f62"),m=r("2452");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(O["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(b["a"])(e).apply(this,arguments)),t.price=0,t}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"onBlockChanged",value:function(){this.updatePrice()}},{key:"onCurrencySymbolChanged",value:function(){this.updatePrice()}},{key:"updatePrice",value:function(){var t=Object(i["a"])(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.block.id){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,m["a"].dailyAverage(this.block.timestamp.unix);case 4:this.price=t.sent;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"confirmations",get:function(){return this.height-this.block.height}}]),e}(v["c"]);Object(d["a"])([Object(v["b"])({required:!0})],j.prototype,"block",void 0),Object(d["a"])([Object(v["d"])("block")],j.prototype,"onBlockChanged",null),Object(d["a"])([Object(v["d"])("currencySymbol")],j.prototype,"onCurrencySymbolChanged",null),j=Object(d["a"])([Object(v["a"])({computed:y({},Object(k["b"])("currency",{currencySymbol:"symbol"}),{},Object(k["b"])("network",["height"]))})],j);var w=j,C=w,x=r("2877"),_=Object(x["a"])(C,f,h,!1,null,null,null),P=_.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-5 bg-theme-feature-background xl:rounded-lg flex flex-col md:flex-row items-center px-5 sm:px-10 py-8"},[n("div",{staticClass:"flex items-center flex-auto w-full md:w-auto mb-5 md:mb-0 truncate md:mr-10"},[n("img",{staticClass:"mr-6",attrs:{src:r("a11c")}}),n("div",{staticClass:"flex-auto min-w-0"},[n("div",{staticClass:"text-grey mb-2"},[t._v("\n        "+t._s(t.$t("BLOCK.ID"))+"\n      ")]),n("div",{staticClass:"flex"},[n("div",{staticClass:"text-xl text-white semibold truncate"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.block.id,expression:"block.id"}],staticClass:"mr-2"},[t._v("\n            "+t._s(t.block.id)+"\n          ")])]),t.block.id?n("Clipboard",{attrs:{value:t.block.id}}):t._e()],1)])]),n("div",{staticClass:"flex w-full md:block md:w-auto justify-between whitespace-no-wrap"},[n("button",{staticClass:"block-pager-button mr-5",attrs:{disabled:t.isFirstBlock},on:{click:t.prevHandler}},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"5px",height:"8px"}},[n("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor",d:"M4.054,8.000 L5.000,7.067 L1.892,4.000 L5.000,0.933 L4.054,0.000 L-0.000,4.000 L4.054,8.000 Z"}})]),n("span",{staticClass:"ml-2 hidden md:block inline-button"},[t._v(t._s(t.$t("BLOCK.PAGINATION.PREVIOUS")))]),n("span",{staticClass:"ml-2 md:hidden"},[t._v(t._s(t.$t("PAGINATION.PREVIOUS")))])]),n("button",{staticClass:"block-pager-button",attrs:{disabled:t.isLastBlock},on:{click:t.nextHandler}},[n("span",{staticClass:"mr-2 hidden md:block inline-button"},[t._v(t._s(t.$t("BLOCK.PAGINATION.NEXT")))]),n("span",{staticClass:"mr-2 md:hidden"},[t._v(t._s(t.$t("PAGINATION.NEXT")))]),n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"5px",height:"8px"}},[n("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor",d:"M0.946,-0.001 L-0.000,0.933 L3.107,4.000 L-0.000,7.066 L0.946,8.000 L4.999,4.000 L0.946,-0.001 Z"}})])])])])},T=[];function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(r,!0).forEach((function(e){Object(O["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E=function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(b["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"isFirstBlock",get:function(){return 1===this.block.height}},{key:"isLastBlock",get:function(){return this.block.height===this.height}}]),e}(v["c"]);Object(d["a"])([Object(v["b"])({required:!0})],E.prototype,"block",void 0),Object(d["a"])([Object(v["b"])({required:!0})],E.prototype,"prevHandler",void 0),Object(d["a"])([Object(v["b"])({required:!0})],E.prototype,"nextHandler",void 0),E=Object(d["a"])([Object(v["a"])({computed:L({},Object(k["b"])("network",["height"]))})],E);var S=E,$=S,D=(r("cf6b"),Object(x["a"])($,N,T,!1,null,null,null)),A=D.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.transactions&&t.transactions.length>0?r("div",[r("h2",{staticClass:"text-2xl mb-5 md:mb-6 px-5 sm:hidden text-theme-text-primary"},[t._v("\n    "+t._s(t.$t("COMMON.TRANSACTIONS"))+"\n  ")]),r("section",{staticClass:"page-section py-5 md:py-10"},[r("div",{staticClass:"hidden sm:block"},[r("TableTransactionsDesktop",{attrs:{transactions:t.transactions,"sort-query":t.sortParams},on:{"on-sort-change":t.onSortChange}})],1),r("div",{staticClass:"sm:hidden"},[r("TableTransactionsMobile",{attrs:{transactions:t.transactions}})],1),t.transactions.length>=25?r("div",{staticClass:"mx-5 sm:mx-10 mt-5 md:mt-10 flex flex-wrap"},[r("RouterLink",{staticClass:"button-lg",attrs:{to:{name:"block-transactions",params:{block:t.block.id,page:2}},tag:"button"}},[t._v("\n        "+t._s(t.$t("PAGINATION.SHOW_MORE"))+"\n      ")])],1):t._e()])]):t._e()},M=[],R=r("9cbd");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach((function(e){Object(O["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(b["a"])(e).apply(this,arguments)),t.transactions=null,t}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"onBlockChanged",value:function(){this.resetTransactions(),this.getTransactions()}},{key:"mounted",value:function(){this.resetTransactions(),this.getTransactions()}},{key:"resetTransactions",value:function(){this.transactions=null}},{key:"getTransactions",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e,r;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.block.id){t.next=2;break}return t.abrupt("return");case 2:if(!this.block.transactions){t.next=8;break}return t.next=5,R["a"].byBlock(this.block.id);case 5:e=t.sent,r=e.data,this.transactions=r.map((function(t){return G({},t,{price:null})}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onSortChange",value:function(t){this.sortParams=t}},{key:"sortParams",get:function(){return this.$store.getters["ui/transactionSortParams"]},set:function(t){this.$store.dispatch("ui/setTransactionSortParams",{field:t.field,type:t.type})}}]),e}(v["c"]);Object(d["a"])([Object(v["b"])({required:!0})],q.prototype,"block",void 0),Object(d["a"])([Object(v["d"])("block")],q.prototype,"onBlockChanged",null),q=Object(d["a"])([v["a"]],q);var H=q,K=H,U=Object(x["a"])(K,I,M,!1,null,null,null),W=U.exports,J=r("3152"),V=r("a3aa");v["a"].registerHooks(["beforeRouteEnter","beforeRouteUpdate"]);var X=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(b["a"])(e).apply(this,arguments)),t.block=null,t.blockNotFound=!1,t.isLoading=!1,t}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"beforeRouteEnter",value:function(){var t=Object(i["a"])(s.a.mark((function t(e,r,n){var a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].find(e.params.id);case 3:a=t.sent,n((function(t){return t.setBlock(a)})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n((function(r){console.log(t.t0.message||t.t0.data.error),r.blockNotFound=!0,r.block={id:e.params.id}}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,r,n){return t.apply(this,arguments)}return e}()},{key:"beforeRouteUpdate",value:function(){var t=Object(i["a"])(s.a.mark((function t(e,r,n){var a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.block=null,t.prev=1,t.next=4,V["a"].find(e.params.id);case 4:a=t.sent,this.setBlock(a),n(),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0.message||t.t0.data.error),this.blockNotFound=!0,this.block={id:e.params.id};case 14:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(e,r,n){return t.apply(this,arguments)}return e}()},{key:"prepareComponent",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e=this;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.watch((function(t){return t.network.height}),(function(t){return e.updateBlock()}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateBlock",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].find(this.block.id);case 3:e=t.sent,this.setBlock(e),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message||t.t0.data.error);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"fetchBlock",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e,r=this;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,V["a"].find(this.block.id);case 4:e=t.sent,this.setBlock(e),this.blockNotFound=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0.message||t.t0.data.error);case 12:return t.prev=12,setTimeout((function(){return r.isLoading=!1}),750),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[1,9,12,15]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"setBlock",value:function(t){this.block=t}},{key:"prevBlock",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].findPrevious(this.block.height);case 3:e=t.sent,this.$router.push({name:"block",params:{id:e.id}}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message||t.t0.data.error);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"nextBlock",value:function(){var t=Object(i["a"])(s.a.mark((function t(){var e;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].findNext(this.block.height);case 3:e=t.sent,this.$router.push({name:"block",params:{id:e.id}}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message||t.t0.data.error);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"onReload",value:function(){this.fetchBlock()}}]),e}(v["c"]);X=Object(d["a"])([Object(v["a"])({components:{BlockDetails:P,BlockIdentity:A,BlockTransactions:W,NotFound:J["a"]}})],X);var Z=X,Y=Z,z=Object(x["a"])(Y,n,a,!1,null,null,null);e["default"]=z.exports},"62eb":function(t,e,r){t.exports=r.p+"img/light.26b3181b.png"},6772:function(t,e,r){t.exports=r.p+"img/dark.ba39742c.png"},cf6b:function(t,e,r){"use strict";var n=r("3ec8"),a=r.n(n);a.a}}]);
//# sourceMappingURL=block.2ff713bc.js.map