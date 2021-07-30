(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),i=n(8),l=n(14),o=n(47),d=(n(57),n(30),n(5)),j=n(6),u=n(11),h=n(10),b=n(12),m=n.n(b),p=n(20),x=n(17),O=n.n(x),f=O.a.create({baseURL:"https://open.mapquestapi.com/geocoding/v1",params:{key:"vrCXoUvOVoRHkYUYTcjV5CvKUK9a2S11"}}),v=O.a.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"62f44482dcab8de876e91676099a59ab"}}),w="GEOCODE",g="WEATHER",y=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/address",{params:{location:e}});case 2:a=t.sent,c=a.data.results[0].locations[0],n({type:w,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(a){var c,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.get("/onecall",{params:{lat:e,lon:t,exclude:"hourly,minutely",units:"metric"}});case 2:c=n.sent,r=c.data,a({type:g,payload:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=n(49),S=n(29),E=n(1),D=function(e){var t=function(e){var t=e.input,a=e.label,c=e.meta;return Object(E.jsxs)("div",{style:{width:"inherit"},children:[Object(E.jsx)("input",Object(k.a)({placeholder:a,className:"form-control mb-1"},t)),n(c)]})},n=function(e){var t=e.error;if(e.touched&&t)return Object(E.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(E.jsx)("p",{className:"text-muted my-0",children:t})})};return Object(E.jsx)(S.b,{initialValues:e.initialValues,onSubmit:function(t){e.onSubmit(t)},validate:function(e){var t={};return e.location||(t.location="You must enter a location."),t},render:function(e){var n=e.handleSubmit;return Object(E.jsxs)("form",{onSubmit:n,className:"my-3 d-inline-flex justify-content-evenly align-items-baseline w-100",children:[Object(E.jsx)(S.a,{name:"location",component:t,label:"Enter Your Location"}),Object(E.jsx)("button",{className:"btn btn-outline-primary ms-1",children:"Search"})]})}})},C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.fetchGeocodeAndWeather(t)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGeocodeAndWeather({location:"Edinburgh"})}},{key:"render",value:function(){return Object(E.jsx)("div",{className:"row justify-content-center search-bar",children:Object(E.jsx)("div",{className:"col-8",children:Object(E.jsx)(D,{onSubmit:this.onSubmit})})})}}]),n}(c.a.Component),I=Object(i.b)(null,{fetchGeocodeAndWeather:function(e){var t=e.location;return function(){var e=Object(p.a)(m.a.mark((function e(n,a){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(y(t));case 2:return c=a().location.latLng.lat,r=a().location.latLng.lng,e.next=6,n(N(c,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(C),T=function(){return Object(E.jsx)("div",{className:"row justify-content-center align-items-center my-5",children:Object(E.jsxs)("div",{className:"col-6 text-center d-inline-flex justify-content-center align-items-center w-100",style:{marginTop:"40vh"},children:[Object(E.jsx)("span",{className:"mx-4",children:"Make your search now.."}),Object(E.jsx)("div",{className:"spinner-border text-info",role:"status",children:Object(E.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})})},L=n(28),R=n(3);n.n(R).a.workerClass=n(98).default;var U=Object(L.b)({accessToken:"pk.eyJ1IjoianR3MTg2IiwiYSI6ImNrcm5jcHRxcDB2azkydm1kNGRlMGNsbHQifQ.HfxZ5-2eTO5QuzK35B4BPg"}),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.coords.lat,t=this.props.coords.lon;return"Edinburgh"===this.props.coords.location?null:Object(E.jsx)(U,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"250px",width:"100%"},center:[t,e],children:Object(E.jsx)(L.a,{anchor:"center",coordinates:[t,e],children:Object(E.jsx)("i",{className:"fas fa-map-marker-alt text-danger",style:{fontSize:"24px"}})})})}}]),n}(c.a.Component),_=Object(i.b)((function(e){return{coords:e.weather}}),{})(A),K=n(18),F=n(48),G=function(e){var t=e.time,n=Object(a.useState)(new Date),c=Object(K.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return s(new Date((new Date).getTime()+60*t*1e3))}),1e3);return function(){clearInterval(e)}}),[t]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(F.a,{value:r})})},H=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){if("Edinburgh"===this.props.location.location)return Object(E.jsx)(T,{});if(void 0===this.props.weather.current)return Object(E.jsx)(T,{});var e=this.props.location,t=this.props.weather.current,n=this.props.weather.timezone_offset-3600;return Object(E.jsxs)("div",{className:"col-lg-4 col-12 my-5 d-flex flex-column justify-content-between",children:[Object(E.jsx)("div",{className:"card",children:Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsxs)("span",{className:"d-inline-flex justify-content-between w-100 align-items-center",children:[Object(E.jsxs)("div",{className:"d-inline-flex align-items-end",children:[Object(E.jsx)("h4",{className:"card-title me-2",children:e.adminArea4}),Object(E.jsx)("h6",{className:"card-title ml-2",children:e.adminArea1})]}),Object(E.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather.map((function(e){return e.icon})),"@2x.png"),alt:"weather.icon"})]}),Object(E.jsxs)("span",{className:"d-inline-flex justify-content-between w-100 align-items-center",children:[Object(E.jsxs)("h3",{className:"card-subtitle text-bold",children:[parseInt(t.temp)," C"]}),Object(E.jsx)("p",{className:"card-text",children:t.weather.map((function(e){return e.description}))})]}),Object(E.jsxs)("span",{className:"d-inline-flex mt-3 w-50 justify-content-between",children:[Object(E.jsxs)("p",{className:"me-2 text-warning",children:[Object(E.jsx)("i",{className:"fas fa-sun"})," ",new Date(1e3*t.sunrise).toLocaleTimeString("en-UK",{hour:"2-digit",minute:"2-digit"})]}),Object(E.jsxs)("p",{className:"me-2 text-dark",children:[Object(E.jsx)("i",{className:"fas fa-moon"})," ",new Date(1e3*t.sunset).toLocaleTimeString("en-UK",{hour:"2-digit",minute:"2-digit"})]})]})]})}),Object(E.jsx)("div",{className:"card mt-4",children:Object(E.jsx)(_,{})}),Object(E.jsx)("div",{className:"card mt-4 p-5 clock-card",children:Object(E.jsx)(G,{time:n})})]})}}]),n}(c.a.Component),M=Object(i.b)((function(e){return{location:e.location,weather:e.weather}}),{})(H),V=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).renderedDailyResult=function(e){if(e)return e.map((function(e){var t=new Date(1e3*e.dt);return Object(E.jsx)("div",{className:"col",children:Object(E.jsxs)("div",{className:"card h-100",children:[Object(E.jsxs)("div",{className:"card-header",children:[Object(E.jsx)("h5",{className:"card-title text-center",children:new Intl.DateTimeFormat("en-UK",{weekday:"long"}).format(t)}),Object(E.jsx)("h5",{className:"card-subtitle text-muted text-center",children:t.toLocaleDateString("en-UK",{day:"2-digit",month:"2-digit"})})]}),Object(E.jsx)("div",{className:"card-body",children:Object(E.jsx)("div",{className:"card-text",children:Object(E.jsxs)("div",{className:"row justify-content-evenly align-items-center",children:[Object(E.jsx)("div",{className:"col-lg-6 text-center",children:Object(E.jsx)("img",{alt:"weather icon",src:"http://openweathermap.org/img/wn/".concat(e.weather.map((function(e){return e.icon})),"@2x.png")})}),Object(E.jsx)("div",{className:"col-lg-6 text-center",children:Object(E.jsxs)("div",{className:"d-flex flex-column",children:[Object(E.jsxs)("h6",{className:"text-danger temp",children:[parseInt(e.temp.max)," C"]}),Object(E.jsxs)("h6",{className:"text-info temp",children:[parseInt(e.temp.min)," C"]})]})}),Object(E.jsx)("div",{className:"col-lg-6 text-center",children:e.weather.map((function(e){return e.description}))}),Object(E.jsx)("div",{className:"col-lg-6 text-center",children:Object(E.jsxs)("span",{className:"d-inline-flex",children:[Object(E.jsx)("i",{className:"fas fa-umbrella"}),Object(E.jsxs)("h6",{className:"ml-2",children:[e.rain?parseInt(10*e.rain):0,"%"]})]})})]})})})]})},e.dt)}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.weather.daily;return Object(E.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3",children:this.renderedDailyResult(e)})}}]),n}(c.a.Component),Y=Object(i.b)((function(e){return{weather:e.weather}}),{})(V),z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return"Edinburgh"===this.props.weather.location?null:Object(E.jsx)("div",{className:"col-lg-8 my-5",children:Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(Y,{})})})}}]),n}(c.a.Component),B=Object(i.b)((function(e){return{weather:e.weather}}),{})(z),W=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(I,{})}),Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(M,{})}),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(B,{})})]})})]})},J={location:"Edinburgh"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}},X={location:"Edinburgh"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},q=Object(l.b)({location:Q,weather:P}),Z=(n(99),n(100),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c),$=Object(l.d)(q,Z(Object(l.a)(o.a)));s.a.render(Object(E.jsx)(i.a,{store:$,children:Object(E.jsx)(W,{})}),document.getElementById("root"))},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.88b5c3c8.chunk.js.map