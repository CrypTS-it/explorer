(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["voters"],{"67a4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[a("ContentHeader",[e._v(e._s(e.$t("WALLET.DELEGATE.VOTERS"))+" "),e.delegate?a("span",[e._v("- "+e._s(e.delegate.username))]):e._e()]),a("section",{staticClass:"page-section py-5 md:py-10"},[a("div",{staticClass:"hidden sm:block"},[a("TableWalletsDesktop",{attrs:{wallets:e.wallets,total:e.delegate?e.delegate.votes:0,"sort-query":e.sortParams},on:{"on-sort-change":e.onSortChange}})],1),a("div",{staticClass:"sm:hidden"},[a("TableWalletsMobile",{attrs:{wallets:e.wallets,total:e.delegate?e.delegate.votes:0}})],1),e.showPagination?a("Pagination",{attrs:{meta:e.meta,"current-page":e.currentPage},on:{"page-change":e.onPageChange}}):e._e()],1)],1)},r=[],n=a("967e"),u=a.n(n),l=(a("c5f6"),a("7514"),a("96cf"),a("3b8d")),i=a("d225"),o=a("b0b4"),c=a("308d"),d=a("6bb5"),p=a("4e2b"),h=a("9ab4"),g=a("60a3"),m=a("6882");g["a"].registerHooks(["beforeRouteEnter","beforeRouteUpdate"]);var f=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.delegate=null,e.wallets=null,e.meta=null,e.currentPage=0,e}return Object(p["a"])(t,e),Object(o["a"])(t,[{key:"onCurrentPageChanged",value:function(){this.changePage()}},{key:"beforeRouteEnter",value:function(){var e=Object(l["a"])(u.a.mark((function e(t,a,s){var r,n,l,i;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m["a"].find(t.params.address);case 3:return r=e.sent,e.next=6,m["a"].voters(t.params.address,Number(t.params.page));case 6:n=e.sent,l=n.meta,i=n.data,s((function(e){e.currentPage=Number(t.params.page),e.setDelegate(r),e.setWallets(i),e.setMeta(l)})),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),s({name:"404"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));function t(t,a,s){return e.apply(this,arguments)}return t}()},{key:"beforeRouteUpdate",value:function(){var e=Object(l["a"])(u.a.mark((function e(t,a,s){var r,n,l,i;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.wallets=null,this.meta=null,e.prev=2,e.next=5,m["a"].find(t.params.address);case 5:return r=e.sent,e.next=8,m["a"].voters(t.params.address,Number(t.params.page));case 8:n=e.sent,l=n.meta,i=n.data,this.currentPage=Number(t.params.page),this.setDelegate(r),this.setWallets(i),this.setMeta(l),s(),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](2),s({name:"404"});case 21:case"end":return e.stop()}}),e,this,[[2,18]])})));function t(t,a,s){return e.apply(this,arguments)}return t}()},{key:"setDelegate",value:function(e){this.delegate=e}},{key:"setWallets",value:function(e){this.wallets=e}},{key:"setMeta",value:function(e){this.meta=e}},{key:"onPageChange",value:function(e){this.currentPage=e}},{key:"changePage",value:function(){this.currentPage===Number(this.$route.params.page)&&this.address===this.$route.params.address||this.$router.push({name:"wallet-voters",params:{address:this.address,page:this.currentPage}})}},{key:"onSortChange",value:function(e){this.sortParams=e}},{key:"showPagination",get:function(){return this.meta&&this.meta.pageCount>1}},{key:"address",get:function(){return this.$route.params.address}},{key:"sortParams",get:function(){return this.$store.getters["ui/walletSortParams"]},set:function(e){this.$store.dispatch("ui/setWalletSortParams",{field:e.field,type:e.type})}}]),t}(g["c"]);Object(h["a"])([Object(g["d"])("currentPage")],f.prototype,"onCurrentPageChanged",null),f=Object(h["a"])([g["a"]],f);var b=f,v=b,w=a("2877"),P=Object(w["a"])(v,s,r,!1,null,null,null);t["default"]=P.exports}}]);
//# sourceMappingURL=voters.e4ed5697.js.map