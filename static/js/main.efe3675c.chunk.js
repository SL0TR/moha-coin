(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(75);function i(){return r.a.createElement(l.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(l.a.Brand,{href:"#home"},"MohaCoin"))}var u=a(10),m=a.n(u),s=a(15),h=a(17),p=a(76);function f(e){var t=e.chain;return r.a.createElement(p.a,null,r.a.createElement("p",{className:"lead text-center my-4"},"MohaCoin List!"),t&&t.map((function(e){return r.a.createElement(p.a.Item,{className:"my-2",key:e.timeStamp},"$",e.data.amount)})))}var d=a(74),v=a(77),E=a(21),b=a.n(E),k="".concat("https://moha-coin.herokuapp.com","/blockchain"),g={blockChain:function(){return{getAll:function(){return b.a.get(k)},create:function(e){return b.a.post(k,e)}}}};function w(e){var t=e.fetchBlockChain,a=Object(n.useState)(""),c=Object(h.a)(a,2),o=c[0],l=c[1],i=function(){var e=Object(s.a)(m.a.mark((function e(a){var n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new Date,r="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear()),c={timeStamp:r,data:{amount:o}},e.next=6,g.blockChain().create(c);case 6:i=e.sent,i.data&&(t(),l(""));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.a,null,r.a.createElement(d.a.Group,{controlId:"data"},r.a.createElement(d.a.Label,null,"Amount"),r.a.createElement(d.a.Control,{value:o,onChange:function(e){l(e.target.value)},type:"number",placeholder:"Enter Amount"})),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:i},"Add Coin"))}function y(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(s.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.blockChain().getAll();case 2:t=e.sent,a=t.data,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"mt-5"},r.a.createElement("h1",{className:"text-center display-3"},"Welcome!"),r.a.createElement("div",{className:"container"},r.a.createElement(w,{fetchBlockChain:o}),r.a.createElement(f,{chain:a})))}a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(y,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.efe3675c.chunk.js.map