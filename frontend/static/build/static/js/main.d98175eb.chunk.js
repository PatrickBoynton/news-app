(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(25),i=n.n(s),c=(n(31),n(19)),o=n(3),l=n(4),u=n(11),h=n(6),d=n(5),j=(n(32),n(7)),p=(n(33),n(0)),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isLoggedIn?Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{children:[Object(p.jsx)(j.b,{to:"/news",children:"GN"}),Object(p.jsx)(j.b,{to:"/news",children:"News"}),Object(p.jsx)(j.b,{to:"/astronomy",children:"Astronomy"}),Object(p.jsx)(j.b,{to:"/cosmology",children:"Cosmology"}),Object(p.jsx)(j.b,{to:"/exoplanets",children:"Exoplanets"}),Object(p.jsx)(j.b,{to:"/editorial",children:"Editorial"}),Object(p.jsx)(j.b,{to:"/submit",children:"Write an Article"}),Object(p.jsx)(j.b,{to:"/logout",children:"Logout "})]})}):Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{children:[Object(p.jsx)(j.c,{className:"brand",exact:!0,to:"/",children:"GN"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/news",children:"News"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/astronomy",children:"Astronomy"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/cosmology",children:"Cosmology"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/exoplanets",children:"Exoplanets"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/editorial",children:"Editorial"}),Object(p.jsxs)("span",{children:[Object(p.jsx)(j.c,{activeClassName:"active",to:"/login",children:"Login"}),Object(p.jsx)(j.c,{activeClassName:"active",to:"/register",children:"Register"})]})]})})}}]),n}(a.Component),O=n(16),m=n(2),f=n.n(m),v=n(8),x=n(12),g=n.n(x),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleRegister",value:function(){var e=Object(v.a)(f.a.mark((function e(t,n){var a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)},e.next=4,fetch("/rest-auth/registration/",a);case 4:return r=e.sent,e.next=7,r.json().catch((function(e){return console.log(e)}));case 7:(s=e.sent).key&&g.a.set("Authorization","Token ".concat(s.key));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:function(t){return e.handleRegister(t,e.state)},children:[Object(p.jsx)("p",{style:{textAlign:"left",padding:"1rem"},children:"Have a news story you want to share? Create an account and start submitting your stories today!"}),Object(p.jsx)("h2",{children:"Register"}),Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",name:"username",onChange:this.handleInput,value:this.state.username,id:"username"}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",onChange:this.handleInput,value:this.state.email,name:"email",id:"email"}),Object(p.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(p.jsx)("input",{type:"password",onChange:this.handleInput,value:this.state.password1,name:"password1",id:"password1"}),Object(p.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(p.jsx)("input",{type:"password",onChange:this.handleInput,value:this.state.password2,name:"password2",id:"password2"}),Object(p.jsx)("button",{className:"form-btn",type:"submit",children:"Register"}),Object(p.jsxs)("p",{children:["Already have an account? Please ",Object(p.jsx)(j.c,{to:"/login",className:"link",children:"Login"})]})]})})}}]),n}(a.Component),k=(n(41),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleLogin",value:function(){var e=Object(v.a)(f.a.mark((function e(t,n){var a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({username:n.username,email:n.email,password:n.password})},e.next=4,fetch("/rest-auth/login/",a);case 4:return r=e.sent,e.next=7,r.json().catch((function(e){return console.log(e)}));case 7:(s=e.sent).key?(g.a.set("Authorization","Token ".concat(s.key)),this.props.handleLogin()):console.log(s);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"login",method:"/profile",onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(p.jsx)("img",{className:"sombrero",src:"/Sombrero.jpeg",alt:""}),Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",onChange:this.handleInput,value:this.state.username,name:"username",id:"username"}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",onChange:this.handleInput,value:this.state.email,name:"email",id:"email"}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",onChange:this.handleInput,value:this.state.password,name:"password",id:"password"}),Object(p.jsx)("button",{className:"form-btn",type:"submit",children:"Login"}),Object(p.jsxs)("p",{children:["Don't have an account? Why not ",Object(p.jsx)(j.c,{to:"/register",className:"link",children:"Register"})," an account first."]})]})})}}]),n}(a.Component)),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(v.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("profile_picture",a.state.profile_picture),n.append("user",g.a.get("csrftoken")),r={method:"PUT",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=7,fetch("/api/v1/profiles/detail/",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={profile_picture:null,isEditMode:!1,preview:"",articles:[],user:"",id:0,author:"",title:"",body:"",article_type:"astronomy"},a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a.handleImage=a.handleImage.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleEditOrPost=a.handleEditOrPost.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/");case 2:return t=e.sent,e.next=5,t.json().catch((function(e){return console.log(e)}));case 5:return n=e.sent,e.next=8,fetch("/rest-auth/user/");case 8:return a=e.sent,e.next=11,a.json();case 11:r=e.sent,s=n.filter((function(e){return e.author===r.username})),void 0!==n?this.setState({articles:s}):this.setState({articles:[]}),this.setState({user:r.username});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({profile_picture:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n),e.preventDefault()}},{key:"handleLogout",value:function(){g.a.remove("Authorization")}},{key:"handleDelete",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")}},e.next=3,fetch("/api/v1/articles/delete/".concat(t),n);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleEdit",value:function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({id:t.id,title:t.title,body:t.body,article_type:t.article_type}),this.setState((function(e){return{isEditMode:!e.isEditMode}}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleEditOrPost",value:function(){var e=Object(v.a)(f.a.mark((function e(t,n,a,r,s){var i,c,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.state.isEditMode){e.next=14;break}return i={method:"PUT",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({author:this.state.user,title:a,body:r})},e.next=5,fetch("/api/v1/articles/edit/".concat(n,"/"),i);case 5:return c=e.sent,e.next=8,c.json();case 8:o=e.sent,console.log(o),this.setState({id:n,title:a,body:r,author:this.state.user,article_type:s}),this.setState({isEditMode:!1}),e.next=17;break;case 14:return l={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({author:this.state.user,title:this.state.title,body:this.state.title,article_type:this.state.article_type})},e.next=17,fetch("/api/v1/articles/",l);case 17:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,s){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("p",{children:e.body}),Object(p.jsx)("p",{children:e.author}),Object(p.jsx)("button",{className:"btn",onClick:function(){return t.handleEdit(e)},children:"Edit"}),Object(p.jsx)("button",{className:"btn",onClick:function(){return t.handleDelete(e.id)},children:"Delete"})]},e.id)}));return this.props.isLoggedIn?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:this.state.user}),n,Object(p.jsxs)("form",{method:"/",onSubmit:function(e){return t.handleEditOrPost(e,t.state.id,t.state.title,t.state.body,t.state.author,t.state.article_type)},children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{type:"text",value:this.state.title,onChange:this.handleInput,name:"title",id:"title"}),Object(p.jsx)("label",{htmlFor:"body",children:"Body"}),Object(p.jsx)("textarea",{value:this.state.body,onChange:this.handleInput,name:"body",id:"body"}),Object(p.jsxs)("select",{onChange:this.handleInput,children:[Object(p.jsx)("option",{name:"astronomy",value:"astronomy",children:"Astronomy"}),Object(p.jsx)("option",{name:"cosmology",value:"cosmology",children:"Cosmology"}),Object(p.jsx)("option",{name:"exoplanets",value:"exoplanets",children:"Exoplanets"}),Object(p.jsx)("option",{name:"editorial",value:"editorial",children:"Editorial"})]}),Object(p.jsx)("input",{className:"file",type:"file",name:"profile_picture",onChange:this.handleImage}),this.state.profile_picture&&Object(p.jsx)("img",{src:this.state.preview,alt:"preview"}),this.state.isEditMode?Object(p.jsx)("button",{className:"form-btn",type:"submit",children:"Edit your article"}):Object(p.jsx)("button",{className:"form-btn",type:"submit",children:"Submit an Article"})]}),Object(p.jsx)("button",{onClick:function(){return t.handleLogout()},className:"form-btn",children:"Logout"})]}):Object(p.jsx)("div",{children:"Please Log in"})}}]),n}(a.Component),C=(n(42),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("article",{className:"article-".concat(this.props.article.id),children:Object(p.jsxs)(p.Fragment,{children:[this.props.article.image?Object(p.jsx)("img",{src:this.props.article.image,alt:"Nothin' here mate."}):null,Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"/",children:this.props.article.title})}),Object(p.jsx)("p",{children:this.props.article.author}),Object(p.jsx)("p",{children:this.props.article.article_type}),Object(p.jsx)("p",{children:this.props.article.article_created_at})]})},this.props.article.id)}}]),n}(a.Component)),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/astronomy/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return"published"===e.article_status?Object(p.jsx)(C,{article:e},e.id):null}));return Object(p.jsx)("div",{className:"container",children:t})}}]),n}(a.Component),L=n(9),N=(n(43),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ads:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/ads/random/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ads:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.ads)||void 0===e?void 0:e.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:Object(p.jsx)("a",{href:"/",children:e.title})}),Object(p.jsx)("img",{src:e.image,alt:""}),Object(p.jsx)("p",{children:"This is a fake ad"})]})}));return Object(p.jsx)("div",{className:"ad item",children:t})}}]),n}(a.Component)),I=(n(44),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return"published"===e.article_status?Object(p.jsx)(C,{article:e},e.id):null}));return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"container",children:[" ",t," ",Object(p.jsx)(N,{},12)," "]})})}}]),n}(a.Component)),F=(n(45),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/cosmology/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return"published"===e.article_status?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C,{article:e},e.id)}):null}));return Object(p.jsxs)("div",{className:"container",children:[" ",Object(p.jsx)(N,{})," ",t]})}}]),n}(a.Component)),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/exoplanets/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return"published"===e.article_status?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C,{article:e},e.id)}):null}));return Object(p.jsxs)("div",{className:"container",children:[" ",Object(p.jsx)(N,{})," ",t]})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/articles/editorial/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.articles)||void 0===e?void 0:e.map((function(e){return"published"===e.article_status?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C,{article:e},e.id)}):null}));return Object(p.jsxs)("div",{className:"container",children:[t," ",Object(p.jsx)(N,{})]})}}]),n}(a.Component),R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={loginOrRegister:!1,isLoggedIn:!!g.a.get("Authorization"),preview_picture:null,preview:""},a.handleLoginOrRegister=a.handleLoginOrRegister.bind(Object(u.a)(a)),a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleLoginOrRegister",value:function(){this.setState((function(e){return{loginOrRegister:!e.loginOrRegister}}))}},{key:"handleLogin",value:function(){this.setState({isLoggedIn:!!g.a.get("Authorization")})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{isLoggedIn:this.state.isLoggedIn}),Object(p.jsxs)(L.c,{children:[Object(p.jsx)(L.a,{path:"/submit",render:function(t){return Object(p.jsx)(w,Object(c.a)(Object(c.a)({},t),{},{isLoggedIn:e.state.isLoggedIn}))}}),Object(p.jsx)(L.a,{path:"/register",component:y}),Object(p.jsx)(L.a,{path:"/login",render:function(t){return Object(p.jsx)(k,Object(c.a)(Object(c.a)({},t),{},{isLoggedIn:e.state.isLoggedIn,handleLogin:e.handleLogin}))}}),Object(p.jsx)(L.a,{path:"/astronomy",component:S}),Object(p.jsx)(L.a,{path:"/cosmology",component:F}),Object(p.jsx)(L.a,{path:"/exoplanets",component:E}),Object(p.jsx)(L.a,{path:"/editorial",component:T}),Object(p.jsx)(L.a,{path:"/",component:I})]})]})}}]),n}(a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root")),_()}},[[46,1,2]]]);
//# sourceMappingURL=main.d98175eb.chunk.js.map