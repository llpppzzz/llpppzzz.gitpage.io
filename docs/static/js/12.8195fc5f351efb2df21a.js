webpackJsonp([12],{"8r1a":function(e,t,n){(e.exports=n("UTlt")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"waterfall.vue",sourceRoot:""}])},fT0M:function(e,t,n){var o=n("8r1a");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("FIqI")("5263de26",o,!0,{})},"gk/E":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("lC5x"),r=n.n(o),c=n("JaHG"),a=n("gyMJ");function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,c){try{var a=t[r](c),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}("next")})}}var u={name:"waterfall",data:function(){return{photosList:[]}},created:function(){this.getPhotos()},mounted:function(){},computed:{},watch:{},methods:{getPhotos:function(){var e=this;return s(r.a.mark(function t(){var n,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={page:1,per_page:1,order_by:"latest"},t.next=4,e.$api.unsplash.viewPhotos(n);case 4:o=t.sent,e.photosList=o,console.log(o),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},debounceFn:Object(c.a)(function(){console.log(1)},3e3,!1),throttleFn:Object(c.c)(function(){console.log(2)},2e3,{leading:!1}),handleClick:function(){console.log("rrrr{{dfsdfdsf}}}".match(/\{\{([^}]+)\}\}/)),console.log("fff#343fdfd".match(/#([^#]+)$/))},openPage:function(){this.$router.replace({name:"tuanzi",query:{something:"dsfjlsdjflsd"}})},mockTest:function(){var e=this;return s(r.a.mark(function t(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.mock("calendar").get();case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},t,e,[[0,7]])}))()}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"waterfall"},[n("el-button",{on:{click:function(t){e.handleClick()}}},[e._v("print")]),e._v(" "),n("el-button",{on:{click:function(t){e.openPage()}}},[e._v("jump")]),e._v(" "),n("el-button",{on:{click:function(t){e.getPhotos()}}},[e._v("get")])],1)},staticRenderFns:[]};var l=n("C7Lr")(u,i,!1,function(e){n("fT0M")},null,null);t.default=l.exports}});
//# sourceMappingURL=12.8195fc5f351efb2df21a.js.map