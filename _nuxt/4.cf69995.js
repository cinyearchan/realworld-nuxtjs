(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(t,e,r){"use strict";r.d(e,"k",(function(){return o})),r.d(e,"m",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"j",(function(){return d})),r.d(e,"l",(function(){return m})),r.d(e,"f",(function(){return v})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return O})),r.d(e,"h",(function(){return _})),r.d(e,"a",(function(){return j})),r.d(e,"i",(function(){return w})),r.d(e,"e",(function(){return C}));var n=r(88),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},h=function(t,e){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:e}})},O=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},j=function(article){return Object(n.b)({method:"POST",url:"/api/articles",data:{article:article}})},w=function(t,article){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:article})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})}},321:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"b",(function(){return d}));var n=r(88),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(){return Object(n.b)({method:"GET",url:"/api/user"})},f=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},d=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})}},392:function(t,e,r){"use strict";r.r(e);r(128),r(42),r(43),r(15),r(89),r(315),r(316),r(41);var n=r(4),o=r(59),c=r(321),l=r(44),f=r(320);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={middleware:"authenticated",name:"UserProfile",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["user"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,l,d,m,v,h,O,_,j,w,C,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.params,e.next=3,Object(c.b)(n.username);case 3:return o=e.sent,data=o.data,(l=data.profile).followDisabled=!1,d=Number.parseInt(r.page||1),m=10,v=r.tab||"my_articles",console.log("tab",v),h={limit:m,offset:(d-1)*m},O="my_articles"===v?{author:n.username}:{favorited:n.username},_=Object.assign({},h,O),e.next=16,Object(f.k)(_);case 16:return j=e.sent,w=j.data,C=w.articles,y=w.articlesCount,C.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{profile:l,articles:C,articlesCount:y,limit:m,page:d,tab:v});case 20:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tab"],methods:{onFollow:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.followDisabled=!0,!t.following){e.next=7;break}return e.next=4,Object(f.h)(t.username);case 4:t.following=!1,e.next=10;break;case 7:return e.next=9,Object(f.d)(t.username);case 9:t.following=!0;case 10:t.followDisabled=!1;case 11:case"end":return e.stop()}}),e)})))()},onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.g)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(f.c)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(t){this.page=t,this.$router.push({path:"/profile/".concat(profile.username),query:{page:this.page,tab:this.tab}})}}},v=r(31),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v(t._s(t.profile.bio))]),t._v(" "),t.profile.username!==t.user.username?[r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},attrs:{disabled:t.profile.followDisabled},on:{click:function(e){return t.onFollow(t.profile)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n               \n              "+t._s(t.profile.following?"Unfollow":"follow")+" "+t._s(t.profile.username)+"\n            ")])]:[r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:{name:"settings"}}},[r("i",{staticClass:"ion-gear-a"}),t._v("\n               \n              Edit Profile Settings\n            ")])]],2)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my_articles"===t.tab},attrs:{to:{path:"/profile/"+t.profile.username,query:{tab:"my_articles"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited_articles"===t.tab},attrs:{to:{path:"/profile/"+t.profile.username,query:{tab:"favorited_articles"}}}},[t._v("Favorited Articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{path:"/profile/"+article.author.username,params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{path:"/profile/"+article.author.username,params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n              "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},[t._l(article.tagList,(function(e,n){return[r("li",{key:e+n,staticClass:"tag-default tag-pill tag-outline"},[t._v(t._s(e))])]}))],2)])],1)}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);