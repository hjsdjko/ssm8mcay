(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0338":function(t,n,e){"use strict";e.r(n);var o=e("834d"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=r.a},"28dd":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"834d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a")),r=a(e("09b1"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,o,r,a,i){try{var s=t[a](i),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(o,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var a=t.apply(n,e);function s(t){i(a,o,r,s,u,"next",t)}function u(t){i(a,o,r,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu","qiye"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],n=r.default.list();this.menuList=n;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&(t.push(this.menuList[e].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},methods:{randomString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"],r=0;r<t;r++){var a=Math.floor(Math.random()*n.length);this.codes[r].num=n[a];for(var i="#",s=0;s<6;s++){var u=Math.floor(Math.random()*e.length);i+=e[u]}this.codes[r].color=i;var c=Math.floor(30*Math.random()),d=Math.floor(2*Math.random());1==d&&(c="-"+c),this.codes[r].rotate="rotate("+c+"deg)";var l=Math.floor(Math.random()*o.length);this.codes[r].size=o[l]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){t.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=this;return s(o.default.mark((function e(){var r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.optionsValues[n.index]){e.next=3;break}return n.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 3:return e.next=5,n.$api.login("".concat(n.optionsValues[n.index]),{username:n.username,password:n.password});case 5:return r=e.sent,t.setStorageSync("token",r.token),t.setStorageSync("nickname",n.username),t.setStorageSync("nowTable","".concat(n.optionsValues[n.index])),e.next=11,n.$api.session("".concat(n.optionsValues[n.index]));case 11:r=e.sent,t.setStorageSync("userid",r.data.id),r.data.vip&&t.setStorageSync("vip",r.data.vip),t.setStorageSync("role","".concat(n.options[n.index])),n.$utils.tab("../index/index");case 16:case"end":return e.stop()}}),e)})))()},optionsChange:function(t){this.index=t.target.value}}};n.default=u}).call(this,e("543d")["default"])},"8f3e":function(t,n,e){"use strict";e.r(n);var o=e("28dd"),r=e("0338");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("9082");var i,s=e("f0c5"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"01196ce0",null,!1,o["a"],i);n["default"]=u.exports},9082:function(t,n,e){"use strict";var o=e("c897"),r=e.n(o);r.a},c897:function(t,n,e){},d828:function(t,n,e){"use strict";(function(t){e("d8b0");o(e("66fd"));var n=o(e("8f3e"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["d828","common/runtime","common/vendor"]]]);