(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{378:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("d879f088",content,!1,{sourceMap:!1})},379:function(t,e,n){"use strict";var o=n(378);n.n(o).a},380:function(t,e,n){(e=n(12)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},381:function(t,e,n){"use strict";var o=n(107),r=n(111),l=n(109),d=n(108),c=n(110),f=n(11),m=n(35),x=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}}]),e}(m.c);x([Object(m.b)({default:"",required:!1})],h.prototype,"title",void 0),x([Object(m.b)({default:"",required:!1})],h.prototype,"link",void 0),x([Object(m.b)({default:"",required:!1})],h.prototype,"body",void 0);var k=h=x([m.a],h),v=(n(379),n(5)),component=Object(v.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("div",[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():n("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},408:function(t,e,n){var content=n(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6e97dbb8",content,!1,{sourceMap:!1})},473:function(t){t.exports=JSON.parse('{"takeoutItems":[{"title":"県内まとめサイト","items":[{"author":"NST新潟総合テレビ","url":"https://niigata-togo.com/","text":"にいがたＴＯＧＯ"},{"author":"FM-NIIGATA","url":"https://fmniigata-gatameshi.com/","text":"潟メシ プロジェクト"}]},{"title":"燕市","items":[{"author":"燕テイクアウト","url":"https://www.instagram.com/tsubame_takeout/","text":"つばめおうちでお店ごはん"}]},{"title":"新潟市","items":[{"author":"にいがた通信","url":"https://www.google.com/maps/d/viewer?mid=1Voo49wdwmm6_jm_6zzEAyElmJF5ooT4y&usp=sharing","text":"にいがたテイクアウトマップ"}]},{"title":"見附市","items":[{"author":"見附市","url":"http://www.city.mitsuke.niigata.jp/19491.htm","text":"市内飲食店のテイクアウト・出前情報"}]}]}')},474:function(t,e,n){"use strict";var o=n(408);n.n(o).a},475:function(t,e,n){(e=n(12)(!1)).push([t.i,".Takeout-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.Takeout-Area-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.Takeout-Area-list{padding-left:0px;list-style-type:none}.Takeout-Area-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.Takeout-Area-list-item-anchor{display:flex;flex-wrap:wrap}}.Takeout-Area-list-item-anchor-author{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.Takeout-Area-list-item-anchor-author{flex:0 0 100%}}.Takeout-Area-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.Takeout-Area-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.Takeout-Area-list-item-anchor-link{padding-left:8px}}.Takeout-item-ExternalLinkIcon{margin-left:2px;color:#707070 !important}",""]),t.exports=e},516:function(t,e,n){"use strict";n.r(e);var o=n(381),r=n(473),l={components:{TextCard:o.a},data:function(){return{takeoutItems:r.takeoutItems}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},head:function(){return{title:this.$t("県内のテイクアウト情報")}}}},d=(n(474),n(5)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Takeout"},[n("h2",{staticClass:"Takeout-Heading"},[t._v("\n    "+t._s(t.$t("県内のテイクアウト情報"))+"\n  ")]),t._v(" "),t._l(t.takeoutItems,(function(e,i){return n("TextCard",{key:i},[n("h3",{staticClass:"Takeout-Area-heading"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("ul",{staticClass:"Takeout-Area-list"},t._l(e.items,(function(e,o){return n("li",{key:o,staticClass:"Takeout-Area-list-item"},[null!==e.author?n("span",{staticClass:"Takeout-Area-list-item-anchor-author px-2"},[t._v("\n          "+t._s(e.author)+"\n        ")]):t._e(),t._v(" "),n("a",{staticClass:"Takeout-Area-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("span",{staticClass:"Takeout-Area-list-item-anchor-link"},[t._v("\n            "+t._s(e.text)+"\n            "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"Takeout-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n              mdi-open-in-new\n            ")])],1)])])})),0)])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);