(this["webpackJsonpendpoint-app"]=this["webpackJsonpendpoint-app"]||[]).push([[0],{166:function(e,s,t){},168:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t(61),r=t.n(n),i=t(27),j=t(2),o=function(){return Object(c.jsx)("header",{className:"masthead",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{to:"/",children:Object(c.jsx)("h1",{className:"site-title",children:"Buffy Information Index"})})})})})},l=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," - Kendall Howard"]})})},d=t(21),m=t(63),h=t.n(m),u=t(10),b=t.n(u),p=t(18),O=t(19),x=t.n(O),f=function(){var e=Object(p.a)(b.a.mark((function e(s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/shows/427/seasons",e.abrupt("return",x.a.get("https://api.tvmaze.com/shows/427/seasons").then((function(e){s(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(b.a.mark((function e(s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/shows/427/cast",e.abrupt("return",x.a.get("https://api.tvmaze.com/shows/427/cast").then((function(e){s(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(b.a.mark((function e(s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/shows/428/seasons",e.abrupt("return",x.a.get("https://api.tvmaze.com/shows/428/seasons").then((function(e){s(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(b.a.mark((function e(s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/shows/428/cast",e.abrupt("return",x.a.get("https://api.tvmaze.com/shows/428/cast").then((function(e){s(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useState)(null),s=Object(d.a)(e,2),t=s[0],n=s[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),j=i[0],o=i[1],l=Object(a.useState)(null),m=Object(d.a)(l,2),u=m[0],b=m[1],p=Object(a.useState)(null),O=Object(d.a)(p,2),x=O[0],y=O[1];return Object(a.useEffect)((function(){t||f(n),j||v(o),u||N(b),x||g(y)}),[t,j,u,x]),Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{id:"content",children:[Object(c.jsx)(h.a,{className:"background",source:"##### Info about Buffy the Vampire Slayer & Angel!"}),Object(c.jsx)("h2",{children:Object(c.jsx)("u",{children:"Buffy the Vampire Slayer Seasons"})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-md-center",children:t?t.map((function(e,s){return Object(c.jsxs)("div",{className:"buffy-seasons",children:[Object(c.jsx)("h2",{className:"season-number",children:"Season "+e.number}),Object(c.jsx)("img",{src:e.image.original,className:"img-fluid character-img",alt:"season img"}),Object(c.jsx)("h4",{className:"episodes",children:"Episode Count: "+e.episodeOrder}),Object(c.jsx)("h4",{className:"premiere",children:"First Episode: "+e.premiereDate}),Object(c.jsx)("h4",{className:"end",children:"Last Episode: "+e.endDate}),Object(c.jsxs)("div",{className:"season-summary",children:[Object(c.jsx)("h3",{className:"summary",children:"Season Summary"}),Object(c.jsx)("p",{children:e.summary})]})]},s)})):Object(c.jsx)("div",{children:"No Seasons"})})}),Object(c.jsx)("h2",{children:Object(c.jsx)("u",{children:"Buffy the Vampire Slayer Cast"})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-md-center",children:j?j.map((function(e,s){return Object(c.jsxs)("div",{className:"buffy-cast",children:[Object(c.jsx)("h2",{className:"person",children:e.person.name}),Object(c.jsx)("img",{src:e.person.image.medium,className:"img-fluid character-img",alt:"cast img"}),Object(c.jsx)("div",{className:"character-description",children:Object(c.jsx)("h4",{className:"character",children:e.character.name})})]},s)})):Object(c.jsx)("div",{children:"No Cast"})})}),Object(c.jsx)("h2",{children:Object(c.jsx)("u",{children:"Angel Seasons"})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-md-center",children:u?u.map((function(e,s){return Object(c.jsxs)("div",{className:"angel-seasons",children:[Object(c.jsx)("h2",{className:"season-number",children:Object(c.jsx)("span",{children:"Season "+e.number})}),Object(c.jsx)("img",{src:e.image.medium,className:"img-fluid character-img",alt:"season img"}),Object(c.jsx)("h4",{className:"episodes",children:"Episode Count: "+e.episodeOrder}),Object(c.jsx)("h4",{className:"premiere",children:"First Episode: "+e.premiereDate}),Object(c.jsx)("h4",{className:"end",children:"Last Episode: "+e.endDate}),Object(c.jsxs)("div",{className:"season-summary",children:[Object(c.jsx)("h3",{className:"summary",children:Object(c.jsx)("span",{children:"Season Summary"})}),Object(c.jsx)("p",{children:e.summary})]})]},s)})):Object(c.jsx)("div",{children:"No Seasons"})})}),Object(c.jsx)("h2",{children:Object(c.jsx)("u",{children:"Angel Cast"})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-md-center",children:x?x.map((function(e,s){return Object(c.jsxs)("div",{className:"angel-cast",children:[Object(c.jsx)("h2",{className:"person",children:Object(c.jsx)("span",{children:e.person.name})}),Object(c.jsx)("img",{src:e.person.image.medium,className:"img-fluid character-img",alt:"cast img"}),Object(c.jsx)("div",{className:"character-description",children:Object(c.jsx)("h4",{className:"character",children:e.character.name})})]},s)})):Object(c.jsx)("div",{children:"No Cast"})})})]})})},w=(t(166),t(167),function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{children:Object(c.jsx)(j.a,{path:"/",component:y})}),Object(c.jsx)(l,{})]})})});r.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.d139f1c4.chunk.js.map