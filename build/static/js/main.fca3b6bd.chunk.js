(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[1],{145:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(23),c=n(25),s=n(24),o=n(0),i=n(59),u=n(21),l=n(6),p=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).backToIndex=function(){e.props.history.replace("/")},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{style:{textAlign:"center",marginTop:"200px"},children:[Object(l.jsx)("h1",{children:"404 NOT FOUND"}),Object(l.jsx)(i.a,{onClick:this.backToIndex,children:"Home"})]})}}]),n}(o.Component);t.default=Object(u.g)(p)},159:function(e,t,n){},161:function(e,t,n){var r,a=n(162);(r=a).keys().map(r)},162:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=162},167:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(29),c=n.n(a),s=(n(159),n(160),n(161),n(22)),o=n(23),i=n(25),u=n(24),l=n(49),p=n(31),d=n(44),h=n(113),j={userData:{},userMenu:[],userRoutes:[],openMenu:[]},b={siderCollapsed:!1},O=n(268),f=n(269),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,278))})),v=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,145))})),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,276))})),x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,277))})),y=[{path:"/",component:m,meta:{title:"Home"},icon:O.a,exact:!0},{path:"/404",component:v,meta:{title:"404"},icon:f.a},{path:"/test1",component:g,meta:{title:"Test"}},{path:"/test2",component:x,meta:{title:"Test2"}}],k=n(74),w=n(34),C=n.n(w),D=n(86),N=n(85),S=n(260),M=n(262),E=n(59),R="xxx_token";function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return localStorage.setItem(R,e)}n(167);var U=n(136),I=n.n(U).a.create({baseURL:"http://www.test.com/api",timeout:5e3,withCredentials:!1});I.interceptors.response.use((function(e){return 200===e.status?(console.log("response.config.url :>> ",e.config.url),console.log("response.data :>> ",e.data),e.data):Promise.reject(new Error(e.message||"Network Error"))}));var T=I;function P(e){return T({url:"/user/info",method:"get",params:e})}var L=n(6),F=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={form:{username:"",password:""}},a.formRef=Object(r.createRef)(),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsx)("div",{className:"login-container",children:Object(L.jsxs)(S.a,{className:"login-box",ref:this.formRef,initialValues:this.state.form,onFinish:this.handleSubmit,children:[Object(L.jsx)("p",{className:"login-form-title",children:"Login"}),Object(L.jsx)(S.a.Item,{name:"username",children:Object(L.jsx)(M.a,{placeholder:"Enter your username",autoComplete:"off"})}),Object(L.jsx)(S.a.Item,{name:"password",children:Object(L.jsx)(M.a.Password,{placeholder:"Enter your password",autoComplete:"off"})}),Object(L.jsx)(S.a.Item,{children:Object(L.jsx)(E.a,{type:"primary",block:!0,htmlType:"submit",children:"Login"})})]})})}},{key:"shouldComponentUpdate",value:function(e,t){var n=t.form,r=n.username,a=n.password,c=this.state.form,s=c.username,o=c.password;return r!==s||a!==o}},{key:"handleSubmit",value:function(){var e=Object(D.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({form:t}),e.next=3,T({url:"/user/login",method:"post"});case 3:n=e.sent,_(n.data.token),this.props.updateMenu(),this.props.history.push({pathname:"/home"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(r.Component),K=Object(p.b)(null,(function(e){return{updateMenu:function(){e({type:"updateMenu"})}}}))(F),z=n(145),A=n(259),H=n(21),X=n(265),J=(n(254),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.iconClass,r=t?"svg-icon ".concat(t):"svg-icon",a="#icon-".concat(n);return n?Object(L.jsx)("svg",{className:r,children:Object(L.jsx)("use",{xlinkHref:a})}):null}}]),n}(r.Component)),V=X.a.SubMenu,q=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).handleSelect=function(e){var t=e.key;r.props.history.push({pathname:t})},r.backToIndex=function(){r.props.history.replace("/")},r.onOpenChange=function(e){var t=e;r.props.setOpenMenu(t),r.setState({openKeys:t})},r.state={openKeys:e.openMenu},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.userMenu,r=t.location.pathname;return Object(L.jsx)(X.a,{theme:"dark",mode:"inline",selectedKeys:r,openKeys:this.state.openKeys,onSelect:this.handleSelect,onOpenChange:this.onOpenChange,children:n.map((function(t){return t.hidden?null:e.renderRoute(t)}))})}},{key:"renderRoute",value:function(e){var t=this,n=null;return e.icon&&(n="object"===typeof e.icon?Object(L.jsx)(e.icon,{}):Object(L.jsx)(J,{iconClass:e.icon})),e.children&&0!==e.children.length?Object(L.jsx)(V,{title:e.meta.title,icon:n,children:e.children.map((function(e){return t.renderRoute(e)}))},e.path):Object(L.jsx)(X.a.Item,{icon:n,children:e.meta?e.meta.title:""},e.path)}}]),n}(r.Component),B=Object(p.b)((function(e){return{userMenu:e.user.userMenu,openMenu:e.user.openMenu}}),(function(e){return{setOpenMenu:function(t){e({type:"setOpenMenu",payload:t})}}}))(Object(H.g)(q)),G=n.p+"static/media/logo.6ce24c58.svg",Q=A.a.Sider,W=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsxs)(Q,{collapsible:!0,collapsed:this.props.collapsed,trigger:null,className:"fixed-sider",onCollapse:this.props.onCollapse,children:[Object(L.jsx)("div",{className:"logo-container",children:Object(L.jsx)("img",{src:G,alt:"logo"})}),Object(L.jsx)(B,{})]})}}]),n}(r.Component),Y=Object(p.b)((function(e){return{collapsed:e.setting.siderCollapsed}}))(W),Z=n(264),$=n(261),ee=n(270),te=n(267),ne=A.a.Header,re=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onClick=function(t){var n=t.key;e[n]()},e.logOut=function(){_(),e.props.history.push({pathname:"/login"}),e.props.logoutDispatch()},e.toggleSider=function(){e.props.toggleSiderCollapse(!e.props.siderCollapsed)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=Object(L.jsx)(X.a,{onClick:this.onClick,children:Object(L.jsx)(X.a.Item,{children:"Log Out"},"logOut")});return Object(L.jsx)(ne,{className:"header-background",children:Object(L.jsxs)("div",{className:"header-inner",children:[Object(L.jsx)("div",{className:"header-collapse-icon"+(this.props.siderCollapsed?" collapsed":""),onClick:this.toggleSider,children:Object(L.jsx)(ee.a,{})}),Object(L.jsxs)("div",{className:"header-user-block",children:[Object(L.jsx)(Z.a,{overlay:e,trigger:["click"],children:Object(L.jsxs)("div",{className:"header-dropdown",children:[this.props.userData.name," ",Object(L.jsx)(te.a,{})]})}),Object(L.jsx)($.a,{className:"header-avatar",src:this.props.userData.avatar,preview:!1,width:50})]})]})})}}]),n}(r.Component),ae=Object(p.b)((function(e){return{siderCollapsed:e.setting.siderCollapsed,userData:e.user.userData}}),(function(e){return{toggleSiderCollapse:function(t){e({type:"toggleSider",value:t})},logoutDispatch:function(){e({type:"setUserData",value:{}})}}}))(Object(H.g)(re)),ce=n(266),se=n(263),oe=A.a.Content,ie=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.location;return Object(L.jsx)(oe,{className:"app-content-container",children:Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)("div",{className:"loading-container",children:"\u9875\u9762\u52a0\u8f7d\u4e2d"}),children:Object(L.jsx)(ce.a,{children:Object(L.jsx)(se.a,{classNames:"fade",timeout:300,children:Object(L.jsxs)(H.d,{location:e,children:[this.props.userRoutes.map((function(e){return Object(L.jsx)(H.b,{path:e.path,exact:e.exact,children:Object(L.jsx)("div",{className:"page",children:Object(L.jsx)(e.component,{})})},e.path)})),this.props.userData.id?Object(L.jsx)(H.a,{to:"/404"}):null]})},e.pathname)})})})}}]),n}(r.Component),ue=Object(p.b)((function(e){return{userRoutes:e.user.userRoutes,userData:e.user.userData}}))(Object(H.g)(ie)),le=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsxs)(A.a,{className:"layout-wrapper"+(this.props.collapsed?" app-close-sider":" app-open-sider"),children:[Object(L.jsx)(Y,{onCollapse:this.onCollapse}),Object(L.jsxs)(A.a,{className:"main-container",children:[Object(L.jsx)(ae,{}),Object(L.jsx)(ue,{})]})]})}}]),n}(r.PureComponent),pe=Object(p.b)((function(e){return{collapsed:e.setting.siderCollapsed}}))(le),de=[{path:"/login",component:K,hidden:!0},{path:"/404",component:z.default,hidden:!0,exact:!0},{path:"/",component:pe,meta:{title:"Dashboard"}}];function he(e){var t=[];return e.forEach((function(e){t.push(e),e.children&&t.push.apply(t,Object(k.a)(he(e.children)))})),t}function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},e,{userData:t})}function be(e){var t=Oe(y),n=he(t);return Object.assign({},e,{userMenu:t,userRoutes:n})}function Oe(e,t){for(var n=[],r=0;r<e.length;r++){var a=e[r],c=Object(h.a)(Object(h.a)({},a),{},{path:t?t.path+a.path:a.path});a.children&&a.children.length>0&&(c.children=Oe(a.children,c)),n.push(c)}return n}var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toggleSider":return Object.assign({},e,{siderCollapsed:t.value})}return e},me=Object(d.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"getUserData":return je(e,r);case"getUserMenu":return be(e);case"setOpenMenu":return Object.assign({},e,{openMenu:r})}return e},setting:fe}),ve=n(149),ge=n(43),xe=C.a.mark(we),ye=C.a.mark(Ce),ke=C.a.mark(Se);function we(){var e,t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ge.b)(P);case 3:return e=n.sent,t=e.data,n.next=7,Object(ge.c)(De(t));case 7:return n.next=9,Object(ge.c)(Ne());case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(ge.c)(De({}));case 15:case"end":return n.stop()}}),xe,null,[[0,11]])}function Ce(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ge.c)(Ne());case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(ge.c)(Ne());case 9:case"end":return e.stop()}}),ye,null,[[0,5]])}var De=function(e){return{type:"getUserData",payload:e}},Ne=function(){return{type:"getUserMenu"}};function Se(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.d)("getUserData_saga",we);case 2:return e.next=4,Object(ge.d)("getUserMenu_saga",Ce);case 4:case"end":return e.stop()}}),ke)}var Me=Se,Ee=C.a.mark(Re);function Re(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)([Me()]);case 2:case"end":return e.stop()}}),Ee)}var _e=Re,Ue=Object(ve.a)(),Ie=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):d.d)(Object(d.a)(Ue)),Te=Object(d.e)(me,Ie);Ue.run(_e);var Pe=Te,Le=n(101),Fe=n.n(Le),Ke=(n(255),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return null}},{key:"componentDidUpdate",value:function(e,t){e.location.pathname!==this.props.location.pathname&&window.scrollTo(0,0)}}]),n}(r.Component)),ze=Object(H.g)(Ke);Fe.a.configure({showSpinner:!1});var Ae=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={constantRoutes:de},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsxs)(r.Fragment,{children:[Object(L.jsx)(ze,{}),Object(L.jsx)(H.d,{children:this.state.constantRoutes.map((function(e){return e.redirect?Object(L.jsx)(H.a,{from:e.path,to:e.redirect,exact:e.exact},e.path):Object(L.jsx)(H.b,{path:e.path,exact:e.exact,component:e.component},e.path)}))})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return Fe.a.start(),localStorage.getItem(R)||""?"/login"===e.location.pathname?(console.log("no need login >>>>>>>>"),e.history.push({pathname:"/home"})):void 0===e.userData.id&&e.getUserInfo():"/login"!==e.location.pathname&&e.history.push({pathname:"/login"}),Fe.a.done(),null}}]),n}(r.Component),He=Object(p.b)((function(e){return{userRoutes:e.user.userRoutes,userData:e.user.userData}}),(function(e){return{getUserInfo:function(){var t=Object(D.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"getUserData_saga"});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(Object(H.g)(Ae)),Xe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsx)(p.a,{store:Pe,children:Object(L.jsx)(l.a,{children:Object(L.jsx)(He,{})})})}}]),n}(r.Component),Je=n(112),Ve=n.n(Je),qe=[{id:0,type:0,avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"admin",desc:"I am admin user"}],Be=[{url:"/user/info.*",type:"get",response:function(e){var t=e.query.id,n=qe[void 0===t?0:t];return n?{code:2e4,data:n,message:""}:{code:50008,message:"There is not a user in this ID"}}},{url:"/user/login",type:"post",response:function(e){return{code:2e4,data:{id:0,token:"admin-token"}}}}],Ge=[{url:"/article/list",type:"get",response:{code:2e4,message:"","data|1-10":[{"id|1-10":1,"content|1-4":"\u4eca\u5929\u662f\u4e2a\u597d\u65e5\u5b50!"}]}}];function Qe(e){if(!e.split("?")[1])return{};var t=decodeURIComponent(e.split("?")[1].replace(/\+/g," "));if(!t)return{};var n={};return t.split("&").forEach((function(e){var t=e.indexOf("=");if(-1!==t){var r=e.substring(0,t),a=e.substring(t+1,e.length);n[r]=a}})),n}[].concat(Object(k.a)(Be),Object(k.a)(Ge)).forEach((function(e){var t;Ve.a.mock(new RegExp(e.url),e.type||"get",(t=e.response,function(e){var n=null;if(t instanceof Function){var r=e.body,a=e.type,c=e.url;n=t({method:a,body:JSON.parse(r),query:Qe(c)})}else n=t;return Ve.a.mock(n)}))})),c.a.render(Object(L.jsx)(Xe,{}),document.getElementById("root"))}},[[256,2,3]]]);
//# sourceMappingURL=main.fca3b6bd.chunk.js.map