(this["webpackJsonppractice-movie-app"]=this["webpackJsonppractice-movie-app"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(10),s=n.n(i),a=n(6),o=n(1),j=n(5),u=n.n(j),m=n(7),b=n(2);var d=function(){var e=Object(o.g)().id,t=function(){var t=Object(m.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(b.jsx)("h1",{children:"Detail"})},p=n(4);var l=function(e){var t=e.id,n=e.title,c=e.coverImg,r=e.summary,i=e.genres;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:Object(b.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(b.jsx)("img",{src:c,alt:n}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("ul",{children:i.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]})};var v=function(){var e=Object(c.useState)(!0),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(p.a)(i,2),a=s[0],o=s[1],j=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),console.log(a),Object(b.jsx)("div",{children:n?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsx)("div",{children:a.map((function(e){return Object(b.jsx)(l,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var h=function(){return Object(b.jsx)(a.a,{basename:"/practice-movie-app",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(v,{})}),Object(b.jsx)(o.a,{path:"/movie/:id",element:Object(b.jsx)(d,{})})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.615a124c.chunk.js.map