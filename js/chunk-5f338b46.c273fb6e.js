(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f338b46"],{"4d8b":function(t,e,a){},a9b3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t._t("default")],2),t._l(t.paginatedArticles,(function(e,n){return a("feed-card",{key:e.title,attrs:{size:t.layout[n],value:e}})}))],2),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"3"}},[1!==t.page?a("base-btn",{staticClass:"ml-0 chevron",attrs:{square:"",title:"Previous page"},on:{click:function(e){t.page--}}},[a("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1),a("v-col",{staticClass:"text-center subheading",attrs:{cols:"6"}},[t._v(" PAGE "+t._s(t.page)+" OF "+t._s(t.pages)+" ")]),a("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[t.pages>1&&t.page<t.pages?a("base-btn",{staticClass:"mr-0 chevron",attrs:{square:"",title:"Next page"},on:{click:function(e){t.page++}}},[a("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)],1)},c=[],s=a("5530"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("fb6a"),a("2f62")),r={name:"Feed",components:{FeedCard:function(){return a.e("chunk-b4e2a97c").then(a.bind(null,"4416"))}},data:function(){return{layout:[2,2,1,3,3,3,2,2],page:1}},computed:Object(s["a"])(Object(s["a"])({},Object(i["d"])(["articles"])),{},{pages:function(){return Math.ceil(this.articles.length/6)},paginatedArticles:function(){var t=6*(this.page-1),e=6*this.page;return this.articles.slice(t,e)}}),watch:{page:function(){window.scrollTo(0,0)}}},o=r,l=(a("f321"),a("2877")),u=a("6544"),d=a.n(u),p=a("62ad"),f=a("a523"),g=a("132d"),v=a("0fd9"),b=Object(l["a"])(o,n,c,!1,null,"d52194fc",null);e["default"]=b.exports;d()(b,{VCol:p["a"],VContainer:f["a"],VIcon:g["a"],VRow:v["a"]})},f321:function(t,e,a){"use strict";a("4d8b")}}]);
//# sourceMappingURL=chunk-5f338b46.c273fb6e.js.map