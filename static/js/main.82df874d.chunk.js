(window.webpackJsonpsuperhero=window.webpackJsonpsuperhero||[]).push([[0],{11:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(4),c=t.n(s);t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(2),m=t(5),o=t(6),i=t(7),u=t(10),p=t(8),h=t(1),d=t(9),E=function(e){var a=e.team,t=e.size;console.log(a,t);var n=function(e,a){return Math.floor(e.reduce((function(e,t){return e+t/a}),0))},s=n(a.map((function(e){return e.powerstats.combat})),t),c=n(a.map((function(e){return e.powerstats.durability})),t),l=n(a.map((function(e){return e.powerstats.strength})),t),m=n(a.map((function(e){return e.powerstats.speed})),t),o=n(a.map((function(e){return e.powerstats.power})),t),i=n(a.map((function(e){return e.powerstats.intelligence})),t);return r.a.createElement("div",{className:"powerstats"},r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Combat"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(s,"%")}}),r.a.createElement("span",{className:"statPct"},s,"%")),r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Durability"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(c,"%")}}),r.a.createElement("span",{className:"statPct"},c,"%")),r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Strength"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(l,"%")}}),r.a.createElement("span",{className:"statPct"},l,"%")),r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Speed"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(m,"%")}}),r.a.createElement("span",{className:"statPct"},m,"%")),r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Intelligence"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(i,"%")}}),r.a.createElement("span",{className:"statPct"},i,"%")),r.a.createElement("div",{className:"stat"},r.a.createElement("span",{className:"statName"},"Power"),r.a.createElement("span",{className:"statBar",style:{width:"".concat(o,"%")}}),r.a.createElement("span",{className:"statPct"},o,"%")))},N=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(h.a)(t)),t.updateTeam=t.updateTeam.bind(Object(h.a)(t)),t.state={superheroList:[],teamList:[],search:""},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json").then((function(e){return e.json()})).then((function(a){console.log(a[311]);var t=a.map((function(e){return{name:e.name,images:e.images,id:e.id,powerstats:e.powerstats}}));e.setState((function(){return{superheroList:t}}))})).catch((function(e){return console.error("ERROR: ",e)}))}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState((function(){return Object(m.a)({},t,n)}))}},{key:"updateTeam",value:function(e){var a=e.target,t=a.name,n=a.value,r=parseInt(n);this.setState((function(e){switch(t){case"ADD":var a=e.superheroList.filter((function(e){return e.id===r})),s=e.teamList.some((function(e){return e.id===r})),c=4===e.teamList.length;return{teamList:s||c?e.teamList:e.teamList.concat(a)};case"REMOVE":return{teamList:e.teamList.filter((function(e){return e.id!==r}))};default:console.log("unknown action",t,n)}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.teamList,n=a.superheroList,s=a.search;return r.a.createElement("div",{className:"superhero"},r.a.createElement("header",{className:"superhero-header"},r.a.createElement("h1",{className:"logo"},"Marvel")),r.a.createElement("main",{className:"superhero-body"},r.a.createElement("div",{className:"superhero-content"},r.a.createElement("h1",null,"Choose Your Team"),r.a.createElement("div",{className:"team"},t.length>0?t.map((function(a){var t=a.name,n=a.images.sm,s=a.id;return r.a.createElement("button",{type:"button",key:s,value:s,name:"REMOVE",onClick:e.updateTeam,className:"hero",style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("p",{className:"name"},t))})):r.a.createElement(r.a.Fragment,null,Object(l.a)(Array(4).keys()).map((function(e){return r.a.createElement("div",{key:e,className:"empty"},r.a.createElement("p",null,"Add A Hero"))}))),t.length>0&&t.length<4?Object(l.a)(Array(4-t.length).keys()).map((function(e){return r.a.createElement("div",{key:e,className:"empty"},r.a.createElement("p",null,"Add A Hero"))})):null),t.length>0?r.a.createElement(E,{team:t,size:4}):null,r.a.createElement("div",{className:"search"},r.a.createElement("label",{htmlFor:"search"},"Filter by Name: "),r.a.createElement("input",{name:"search",id:"search",type:"text",value:s,onChange:this.handleChange})),r.a.createElement("div",{className:"superhero-list"},n.length>0?n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(a){var n=a.name,s=a.images.sm,c=a.id,l=t.some((function(e){return e.id===c}));return r.a.createElement("button",{type:"button",key:c,value:c,name:"ADD",onClick:e.updateTeam,className:"hero ".concat(l?"onTeam":""),style:{backgroundImage:"url(".concat(s,")")}},r.a.createElement("p",{className:"name"},n))})):null)),r.a.createElement("nav",{className:"superhero-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,"Pick Team"),r.a.createElement("li",null,"Team Stats")))),r.a.createElement("footer",{className:"superhero-footer"},r.a.createElement("p",null,"Created by Clint Milner - Source happily lives on ",r.a.createElement("a",{href:"https://github.com/clintmilner/superhero",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.82df874d.chunk.js.map