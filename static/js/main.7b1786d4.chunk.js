(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),function(e){return r.a.createElement("div",{className:"roboCard"},r.a.createElement("img",{src:"https://robohash.org/pragatirutu/".concat(e.id),alt:"robo"}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email))}),d=(n(15),function(e){var t=e.users;return r.a.createElement("div",{className:"list"},t.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})})))}),f=(n(16),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={users:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t},console.log(e.state.users))}))}},{key:"render",value:function(){var e=this;console.log(this.state.users);var t=this.state.users.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{id:"title"},"ROBO FRIENDS"),r.a.createElement("input",{onChange:function(t){return e.setState({searchField:t.target.value})},type:"text",placeholder:"Search Robots"}),r.a.createElement(d,{users:t}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7b1786d4.chunk.js.map