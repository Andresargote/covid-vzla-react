(this["webpackJsonpcovid-vzla"]=this["webpackJsonpcovid-vzla"]||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(8),a=n.n(i),j=(n(14),n(15),function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("a",{href:"https://ko-fi.com/Y8Y41PMQ4",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("img",{src:"https://cdn.ko-fi.com/cdn/kofi1.png?v=2",alt:"Buy Me a Coffee at ko-fi.com"})}),Object(c.jsxs)("div",{className:"header--title",children:[Object(c.jsx)("h1",{children:"COVID-19"}),Object(c.jsx)("p",{children:"SEGUIDOR DE CASOS DE VENEZUELA"})]})]})}),o=n(2),d=n.n(o),l=n(3),u=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.error(e)}))}),[e]),c},h=(n(16),function(e){return new Intl.NumberFormat("de-DE").format(e)}),b=function(){var e=u("https://covid19.patria.org.ve/api/v1/summary");return Object(c.jsxs)("div",{className:"card--container",children:[Object(c.jsxs)("div",{className:"card--item",children:[Object(c.jsx)("h2",{children:"Confirmados"}),Object(c.jsx)("p",{children:0===e.length?Object(c.jsx)(d.a,{}):h(e.Confirmed.Count)})]}),Object(c.jsxs)("div",{className:"card--item",children:[Object(c.jsx)("h2",{children:"Activos"}),Object(c.jsx)("p",{children:0===e.length?Object(c.jsx)(d.a,{}):h(e.Active.Count)})]}),Object(c.jsxs)("div",{className:"card--item",children:[Object(c.jsx)("h2",{children:"Recuperados"}),Object(c.jsx)("p",{children:0===e.length?Object(c.jsx)(d.a,{}):h(e.Recovered.Count)})]}),Object(c.jsxs)("div",{className:"card--item",children:[Object(c.jsx)("h2",{children:"Fallecidos"}),Object(c.jsx)("p",{children:0===e.length?Object(c.jsx)(d.a,{}):h(e.Deaths.Count)})]})]})},O=(n(5),function(){var e,t=u("https://covid19.patria.org.ve/api/v1/summary");return t.Confirmed&&(e=t.Confirmed.ByState),Object(c.jsxs)("div",{className:"list--container",children:[Object(c.jsx)("h3",{children:"Casos por estados"}),Object(c.jsx)("ul",{children:t.Confirmed?t.Confirmed&&Object.entries(e).map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:e[0]}),Object(c.jsx)("span",{children:(t=e[1],new Intl.NumberFormat("de-DE").format(t))})]})},e[0]);var t})):Object(c.jsx)(d.a,{})})]})}),f=function(){var e,t=u("https://covid19.patria.org.ve/api/v1/summary");return t.Confirmed&&(e=t.Confirmed.ByAgeRange),Object(c.jsxs)("div",{className:"list--container",children:[Object(c.jsx)("h3",{children:"Casos por edad"}),Object(c.jsx)("ul",{children:t.Confirmed?t.Confirmed&&Object.entries(e).map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:[Object(c.jsxs)("span",{children:[e[0]," a\xf1os"]}),Object(c.jsx)("span",{children:(t=e[1],new Intl.NumberFormat("de-DE").format(t))})]})},e[0]);var t})):Object(c.jsx)(d.a,{})})]})},m=(n(19),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(r.useRef)(null),a=Object(r.useState)([]),j=Object(l.a)(a,2),o=j[0],u=j[1];Object(r.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){return u(e.Countries)})).catch((function(e){return console.error(e)}))}),[]);var h=Object(r.useCallback)((function(){s(i.current.value)}),[]),b=Object(r.useMemo)((function(){return o.filter((function(e){return e.Country.toLowerCase().includes(n.toLowerCase())}))}),[o,n]);return Object(c.jsxs)("div",{className:"list--container global-container",children:[Object(c.jsx)("h3",{children:"Casos por pa\xedses"}),Object(c.jsx)("input",{type:"text",value:n,ref:i,onChange:h,placeholder:"Buscar por pais"}),Object(c.jsx)("ul",{children:0===o.length?Object(c.jsx)(d.a,{}):b.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{children:e.Country}),Object(c.jsx)("span",{children:(t=e.TotalConfirmed,new Intl.NumberFormat("de-DE").format(t))})]})},e.Slug);var t}))})]})});n(20);var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsxs)("div",{className:"container-list",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"container-info",children:[Object(c.jsx)(O,{}),Object(c.jsx)(f,{})]})]}),Object(c.jsx)(m,{})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.63dabfa3.chunk.js.map