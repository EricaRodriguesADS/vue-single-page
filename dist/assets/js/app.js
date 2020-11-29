webpackJsonp([0],[,function(t,e){t.exports=function(t,e,n,a,s){var o,r=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(o=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),a&&(c._scopeId=a);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:r,options:c}}},,,,function(t,e,n){"use strict";var a=n(6),s=n.n(a);s.a.defaults.baseURL="https://api.fullstackweekly.com",s.a.interceptors.request.use(function(t){if("undefined"==typeof window)return t;var e=window.localStorage.getItem("token");return e&&(t.headers.Authorization="Bearer "+e),t});var o={getPosts:function(t){return new Promise(function(e){s.a.get("/wp-json/wp/v2/posts?categories="+t+"&per_page=6").then(function(t){e(t.data)})})},getProfile:function(){return new Promise(function(t){s.a.get("/services/profile.php").then(function(e){t(e.data)})})},login:function(t){return new Promise(function(e,n){s.a.post("/services/auth.php",t).then(function(t){e(t.data)}).catch(function(t){n(t.status)})})}};e.a=o},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(14);a.b.onReady(function(){a.a.$mount("#app")})},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(3),s=n(16),o=n(37),r=n(46);n.d(e,"b",function(){return r.a});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c=new a.default(i({router:r.a},o.a,{store:s.a}))},,function(t,e,n){"use strict";var a=n(3),s=n(2),o=n(5),r=n(36);a.default.use(s.default);var i={isAuthenticated:!1},c=new s.default.Store({modules:{postsModule:r.a},state:i,getters:{isAuthenticated:function(t){return t.isAuthenticated}},actions:{logout:function(t){t.commit("logout")},login:function(t,e){return new Promise(function(n){o.a.login(e).then(function(e){t.commit("login",e),n()}).catch(function(){"undefined"!=typeof window&&window.alert("Could not login!")})})}},mutations:{logout:function(t){"undefined"!=typeof window&&(window.localStorage.setItem("token",null),window.localStorage.setItem("tokenExpiration",null)),t.isAuthenticated=!1},login:function(t,e){"undefined"!=typeof window&&(window.localStorage.setItem("token",e.token),window.localStorage.setItem("tokenExpiration",e.expiration)),t.isAuthenticated=!0}}});"undefined"!=typeof window&&document.addEventListener("DOMContentLoaded",function(t){var e=window.localStorage.getItem("tokenExpiration"),n=(new Date).getTime()/1e3;null!==e&&parseInt(e)-n>0&&(c.state.isAuthenticated=!0)}),e.a=c},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(5),s={posts:[],categoryId:0},o="undefined"!=typeof window,r=o&&window.__INITIAL_STATE__?window.__INITIAL_STATE__.postsModule:s,i={posts:function(t){return t.posts}},c={updateCategory:function(t,e){return a.a.getPosts(e).then(function(n){t.commit("updateCategory",{categoryId:e,posts:n})})}},u={updateCategory:function(t,e){t.categoryId=e.categoryId,t.posts=e.posts}};e.a={namespaced:!0,state:r,getters:i,actions:c,mutations:u}},function(t,e,n){"use strict";function a(t){n(38)}var s=n(39),o=n(45),r=n(1),i=a,c=r(s.a,o.a,i,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=n(40),s=n(43);e.a={components:{"app-header":a.a,"app-footer":s.a}}},function(t,e,n){"use strict";var a=n(41),s=n(42),o=n(1),r=o(a.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var a=n(2),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={computed:s({},Object(a.mapGetters)(["isAuthenticated"]))}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav has-shadow"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/category/front-end",exact:""}},[n("img",{attrs:{src:"http://bit.ly/vue-img",alt:"Vue SPA"}})]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/category/front-end"}},[t._v("\n      Front-End\n    ")]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:{name:"category",params:{id:"mobile"}}}},[t._v("\n      Mobile\n    ")]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/login"}},[t.isAuthenticated?n("span",[t._v("Logout")]):n("span",[t._v("Login")])])],1)])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=n(44),s=n(1),o=s(null,a.a,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[t._v("\n      Follow us on\n      "),n("a",{attrs:{href:"https://twitter.com/bstavroulakis",target:"_blank"}},[t._v("Twitter")])])])])}],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),t._v(" "),n("section",{staticClass:"main-section section"},[n("div",{staticClass:"container content"},[n("router-view")],1)]),t._v(" "),n("app-footer")],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=n(3),s=n(12),o=n(47),r=n(54),i=n(57);a.default.use(s.default);var c=new s.default({mode:"history",linkActiveClass:"is-active",scrollBehavior:function(t,e,n){return{y:0}},routes:[{path:"/login",component:r.a},{path:"/category/:id",name:"category",component:o.a},{path:"/",redirect:"/category/front-end"},{path:"*",component:i.a}]});e.a=c},function(t,e,n){"use strict";var a=n(48),s=n(53),o=n(1),r=o(a.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var a=n(49),s=n(2),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(t,e){var n=2;return"mobile"===e.params.id&&(n=11),t.dispatch("postsModule/updateCategory",n)};e.a={asyncData:function(t,e){return r(t,e)},components:{"app-post":a.a},computed:o({},Object(s.mapGetters)("postsModule",["posts"])),methods:{loadPosts:function(){r(this.$store,this.$route)}},watch:{$route:function(t,e){this.loadPosts()}},created:function(){this.loadPosts()}}},function(t,e,n){"use strict";function a(t){n(50)}var s=n(51),o=n(52),r=n(1),i=a,c=r(s.a,o.a,i,"data-v-02129d01",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={props:["link"]}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[t._t("title"),t._v(" "),t._t("content")],2),t._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:t.link,target:"_blank"}},[t._v("Read More")])])])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},t._l(t.posts,function(e){return n("div",{key:e.id,staticClass:"column is-one-third"},[n("app-post",{attrs:{link:e.rest_api_enabler.Link}},[n("h3",{domProps:{innerHTML:t._s(e.title.rendered)},slot:"title"}),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.excerpt.rendered)},slot:"content"})])],1)}))},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=n(55),s=n(56),o=n(1),r=o(a.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var a=n(2),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={data:function(){return{username:"",password:""}},computed:s({},Object(a.mapGetters)(["isAuthenticated"])),methods:s({},Object(a.mapActions)({logout:"logout"}),{login:function(){var t=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then(function(){t.username="",t.password=""})}})}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t.isAuthenticated?n("div",[t._v("\n     Hello authenticated user!\n     "),n("button",{staticClass:"button is-primary",on:{click:function(e){t.logout()}}},[t._v("\n       Logout\n     ")])]):n("div",[n("h2",[t._v("Login")]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field-label"}),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.login()}}},[t._v("\n            Login\n          ")])])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-normal"},[n("label",{staticClass:"label"},[t._v("Username")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-normal"},[n("label",{staticClass:"label"},[t._v("Password")])])}],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=n(58),s=n(1),o=s(null,a.a,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Oops, page not found!")])},s=[],o={render:a,staticRenderFns:s};e.a=o}],[13]);