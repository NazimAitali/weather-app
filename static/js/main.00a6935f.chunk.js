(this["webpackJsonpwheath-app"]=this["webpackJsonpwheath-app"]||[]).push([[0],{140:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t(0),r=t(29),s=t.n(r),i=(t(88),t(31)),d=t(49),l={city:[{country:"AD",name:"Sant Juli\xe0 de L\xf2ria",lat:"42.46372",lng:"1.49129"},{country:"AD",name:"Pas de la Casa",lat:"42.54277",lng:"1.73361"},{country:"AD",name:"Ordino",lat:"42.55623",lng:"1.53319"},{country:"AD",name:"les Escaldes",lat:"42.50729",lng:"1.53414"}],name:"",coordonate:[]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_STATE":return Object(d.a)(Object(d.a)({},e),c.payload);default:return e}},j=Object(i.b)({city:o}),m=Object(i.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=t(80),b=(t(94),t(95),t(43)),h=t.n(b),x=t(65),O=t(36),v=t(66),p=t.n(v),N=t(34),f=t.n(N),g=t(144).a.Search,_=function(e){var c=e.updateCity,t=e.getWeather;return Object(n.jsx)("div",{className:"center column maxW search-container",children:Object(n.jsx)("div",{className:"center search-bar",children:Object(n.jsx)(g,{placeholder:"input search text",onChange:function(e){return c(e.target.value)},onSearch:function(){return t()}})})})},y=t(25),w=function(e){var c=e.loading,t=e.error,a=e.data;return Object(n.jsx)("div",{className:"center column maxW maxH card-container",children:c?Object(n.jsx)("div",{children:"Loading..."}):t?Object(n.jsx)("div",{children:"ERROR"}):a?Object(n.jsxs)("div",{className:"center column details-weather",children:[Object(n.jsx)("div",{className:"center maxW city-name",children:a.location.name}),Object(n.jsxs)("div",{className:"center maxW weather-top",children:[Object(n.jsxs)("div",{className:"center column weather-top-left",children:[Object(n.jsx)("div",{className:"center maxW day",children:f()().format("dddd")}),Object(n.jsxs)("div",{className:"center maxW column weather-detail",children:[Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)(y.c,{className:"d\xe9tails-icons"}),Object(n.jsxs)("div",{children:[a.current.humidity," %"]}),Object(n.jsx)(y.d,{className:"d\xe9tails-icons"})," ",Object(n.jsxs)("div",{children:[a.current.precip_mm," Mm"]})]}),Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)(y.e,{className:"wind"})," ",Object(n.jsxs)("div",{children:[a.current.wind_kph," Km/h"]})]}),Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)(y.f,{className:"wind"})," ",Object(n.jsx)("div",{children:a.current.wind_dir})]}),Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)(y.a,{className:"wind"}),Object(n.jsxs)("div",{children:[a.current.pressure_mb," Mb"]})]})]})]}),Object(n.jsxs)("div",{className:"center weather-top-right",children:[Object(n.jsx)("div",{className:"center column img",children:Object(n.jsx)("img",{src:a.current.condition.icon,alt:"icone"})}),Object(n.jsxs)("div",{className:"center column condition-container",children:[Object(n.jsxs)("div",{className:"center temp",children:[a.current.temp_c>0?"+ ".concat(a.current.temp_c):0===a.current.temp_c?"".concat(a.current.temp_c,"\xb0"):" ".concat(a.current.temp_c,"\xb0"),Object(n.jsx)(y.b,{className:"celsus"})]}),Object(n.jsx)("div",{className:"center condition",children:a.current.condition.text})]})]})]}),Object(n.jsx)("div",{className:"center maxW weather-bottom",children:a.forecast.forecastday.map((function(e,c){return Object(n.jsxs)("div",{index:c,className:"center column forecast-items",children:[Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("img",{src:e.day.condition.icon,alt:"icone"})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("div",{className:"center maxW forecast-day",children:f()(e.date).format("dddd")})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:"center forecast-temp",children:[e.day.maxtemp_c>0?"+ ".concat(Math.round(e.day.maxtemp_c)):0===e.day.maxtemp_c?"".concat(Math.round(e.day.maxtemp_c),"\xb0"):" ".concat(Math.round(e.day.maxtemp_c),"\xb0"),Object(n.jsx)(y.b,{className:"celsus"})]})})]})}))})]}):Object(n.jsx)("div",{children:"no data"})})},E=function(){var e=Object(a.useState)("Algiers"),c=Object(O.a)(e,2),t=c[0],r=c[1],s=Object(a.useState)(Boolean),i=Object(O.a)(s,2),d=i[0],l=i[1],o=Object(a.useState)(Boolean),j=Object(O.a)(o,2),m=j[0],u=j[1],b=Object(a.useState)(null),v=Object(O.a)(b,2),N=v[0],g=v[1],y=function(){var e=Object(x.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!1),u(!0),e.prev=2,"http://api.weatherapi.com/v1/forecast.json","cb29ec2d3c3e49559e7153521202212",e.next=7,p.a.get("".concat("http://api.weatherapi.com/v1/forecast.json","?key=").concat("cb29ec2d3c3e49559e7153521202212","&q=").concat(t,"&days=3&lang=fr"));case 7:c=e.sent,u(!1),g(c.data),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),l("error"),u(!1),g(null);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),console.log(N),Object(n.jsxs)("div",{className:"center column maxW maxH",children:[Object(n.jsx)(_,{updateCity:function(e){r(e)},getWeather:y}),Object(n.jsx)(w,{loading:m,error:d,data:N}),Object(n.jsx)("div",{className:"center today",children:f()().format("LLLL")})]})};var S=function(){return Object(n.jsx)("div",{className:"App center column",children:Object(n.jsx)(E,{})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,145)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(u.a,{store:m,children:Object(n.jsx)(S,{})}),document.getElementById("root")),W()},88:function(e,c,t){},94:function(e,c,t){}},[[140,1,2]]]);
//# sourceMappingURL=main.00a6935f.chunk.js.map