(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return m})),r.d(e,"g",(function(){return d})),r.d(e,"i",(function(){return f})),r.d(e,"d",(function(){return v})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return O})),r.d(e,"f",(function(){return C}));var n=r(89),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},h=function(t,e){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:e}})},O=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},387:function(t,e,r){"use strict";r.r(e);r(41);var n=r(4),c=r(320),o=r(332),l=r.n(o),m={name:"ArticleMeta",props:{article:{type:Object,required:!0}},methods:{onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(c.e)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(c.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()},onFollow:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.followDisabled=!0,!article.author.following){t.next=7;break}return t.next=4,Object(c.f)(article.author.username);case 4:article.author.following=!1,t.next=10;break;case 7:return t.next=9,Object(c.c)(article.author.username);case 9:article.author.following=!0;case 10:article.followDisabled=!1;case 11:case"end":return t.stop()}}),t)})))()}}},d=r(31),f=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.article.followDisabled},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n     \n    "+t._s(t.article.author.following?"Unfollow":"Follow")+" "+t._s(t.article.author.username)+"\n    ")]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.article.favoriteDisabled},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n     \n    Favorite Post\n    "),r("span",{staticClass:"counter"},[t._v(t._s(t.article.favoritesCount))])])],1)}),[],!1,null,null,null).exports,v=(r(128),r(42),r(43),r(15),r(88),r(60)),h=r(53);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C={name:"ArticleComments",props:{article:{type:Object,required:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(h.b)(["user"])),data:function(){return{comments:[],comment:{body:""}}},mounted:function(){this.loadComment()},methods:{loadComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.i)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},addComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t.article.slug,t.comment);case 2:r=e.sent,r.data,t.comment.body="",t.loadComment();case 6:case"end":return e.stop()}}),e)})))()},deleteComment:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(c.d)(e.article.slug,t);case 2:e.loadComment();case 3:case"end":return r.stop()}}),r)})))()}}},_={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.g)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:f,ArticleComments:Object(d.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"comment.body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image||null}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return e.preventDefault(),t.addComment(e)}}},[t._v("Post Comment")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))]),t._v(" "),e.author.username===t.user.username?r("span",{staticClass:"mod-options",on:{click:function(){t.deleteComment(e.id)}}},[r("i",{staticClass:"ion-trash-a"})]):t._e()],1)])}))],2)}),[],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},j=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=j.exports}}]);