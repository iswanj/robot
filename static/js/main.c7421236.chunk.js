(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/robot.0d939441.svg"},function(e,a,t){e.exports=t.p+"static/media/up.25a9000e.svg"},function(e,a,t){e.exports=t.p+"static/media/down.3e9c517e.svg"},function(e,a,t){e.exports=t.p+"static/media/left.713fe29d.svg"},function(e,a,t){e.exports=t.p+"static/media/right.3aa5dcbc.svg"},function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),i=(t(15),t(1)),s=(t(16),t(4)),l=t.n(s),m=t(5),u=t.n(m),d=t(6),f=t.n(d),v=t(7),w=t.n(v),p=t(8),g=t.n(p),E=function(e,a){return{top:500-100*a,right:500-100*e}},N=function(e){var a=e%5;return 0===a?1:Math.abs(a-5-1)},h=function(){var e=r.a.useState(1),a=Object(i.a)(e,2),t=a[0],n=a[1],c=r.a.useState(1),o=Object(i.a)(c,2),s=o[0],m=o[1],d=function(e){var a=function(e,a,t){return"up"===t&&a<5?{x:e,y:a+1}:"down"===t&&a>1?{x:e,y:a-1}:"left"===t&&e>1?{x:e-1,y:a}:"right"===t&&e<5?{x:e+1,y:a}:{x:e,y:a}}(t,s,e),r=a.x,c=a.y;n(r),m(c)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"playground"},function(){for(var e=[],a=function(a){e.push(r.a.createElement("div",{onClick:function(){return function(e){var a=e.x,r=e.y;setTimeout(function(){n(a),m(r)},100*(Math.abs(t-a)+Math.abs(s-r)))}({x:N(e=a),y:Math.ceil(e/5)});var e},key:a,className:"box"}))},c=25;c>=1;c--)a(c);return e}(),r.a.createElement("div",{className:"robotContainer",style:E(t,s)},r.a.createElement("img",{src:l.a,className:"robot",alt:"robot"}))),r.a.createElement("div",{className:"controller"},r.a.createElement("div",{className:"arrow-container"}),r.a.createElement("div",{className:"arrow-container",onClick:function(){return d("up")}},r.a.createElement("img",{src:u.a,className:"up arrow",alt:"up"})),r.a.createElement("div",{className:"arrow-container"}),r.a.createElement("div",{className:"arrow-container",onClick:function(){return d("left")}},r.a.createElement("img",{src:w.a,className:"left arrow",alt:"left"})),r.a.createElement("div",{className:"arrow-container"}),r.a.createElement("div",{className:"arrow-container",onClick:function(){return d("right")}},r.a.createElement("img",{src:g.a,className:"right arrow",alt:"right"})),r.a.createElement("div",{className:"arrow-container"}),r.a.createElement("div",{className:"arrow-container",onClick:function(){return d("down")}},r.a.createElement("img",{src:f.a,className:"down arrow",alt:"down"})),r.a.createElement("div",{className:"arrow-container"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.c7421236.chunk.js.map