(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=a(1),s=a(2),i=a(4),u=a(3),h=function(e){var t=e.id,a=e.username,n=e.name,o=e.email;return r.a.createElement("div",{className:"tc dib bg-light-green br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h1",null,a),r.a.createElement("h3",null,n),r.a.createElement("p",null,o))},m=function(e){var t=e.robots.map((function(e){return r.a.createElement(h,{id:e.id,name:e.name,username:e.username,email:e.email})}));return r.a.createElement("div",null,t)},d=(a(12),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2 ma2"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement("input",{className:"pa3 ba b--light-green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))}),b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"100vh"}},e.children)},f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops! That is not good."):this.props.children}}]),a}(r.a.Component),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(m,{robots:n})))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),a}(n.Component);a(13),a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.cfd6954f.chunk.js.map