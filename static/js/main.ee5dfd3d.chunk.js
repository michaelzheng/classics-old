(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/teacher.1347821e.png"},221:function(e,t,a){e.exports=a(381)},226:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),l=(a(226),a(17)),s=a(18),c=a(20),u=a(19),m=a(21),d=a(383),p=a(384),h=a(26),f=a(30),E=a(29),b=a(16),g=a(5),v=a(152),x=a.n(v),w=a(153),y=a.n(w),k=a(146),O=a.n(k),j=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url(".concat(O.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",height:0,paddingTop:"calc(100% / 1.6)",position:"relative"};return r.a.createElement("div",{style:e},r.a.createElement("div",{style:{position:"absolute",top:"18%",left:"5%",width:"28%",height:"37%",overflow:"auto",fontSize:"1.25vw"}},r.a.createElement("p",null,"You are Achilles. In an attempt to stop the Greek army from winning the Trojan War, Aphrodite has wiped your memory! You need to piece together what has happened to you so far and see where Fate takes you next. You need to act, speak and think like Achilles."),r.a.createElement("p",null,"You do not need to carry out every task. But you must complete at least one activity from each section in order to summon Hermes who will have your next mission.")))}}]),t}(r.a.Component),C=a(98),S=a.n(C),N=a(148),I=a.n(N),T=a(149),P=a.n(T),R=a(151),W=a.n(R),A=a(150),B=a.n(A),H=a(6),D=a.n(H),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(f.a)({},e,t.target.value))}},a.state={title:"",exercise:"",authenticated:!1,password:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderAuthenticated",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.title,i=a.exercise;return r.a.createElement("form",{className:D()(t.container,t.flex),noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:t.vBox},r.a.createElement("div",{className:t.hBox},r.a.createElement(g.q,{id:"outlined-name",label:"Title",placeholder:"My Activity...",className:D()(t.textField,t.flex),value:n,onChange:this.handleChange("title"),margin:"normal",variant:"outlined"}),r.a.createElement(g.b,{color:"primary",className:t.button,onClick:function(){return e.props.addExercise({title:n,exercise:i})}},"Save")),r.a.createElement(g.q,{id:"outlined-textarea",label:"Exercise",placeholder:"Enter the exercise...",multiline:!0,className:D()(t.textField,t.flex),value:i,onChange:this.handleChange("exercise"),margin:"normal",variant:"outlined"}),r.a.createElement("pre",null,JSON.stringify(this.props.exerciseReducer))))}},{key:"login",value:function(){this.setState({authenticated:"hello"===this.state.password,password:""})}},{key:"renderLogin",value:function(){var e=this,t=this.props.classes;return r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement(g.q,{id:"password",label:"Password",type:"password",className:D()(t.textField,t.flex),value:this.state.password,onChange:this.handleChange("password"),margin:"normal",variant:"outlined"}),r.a.createElement(g.b,{color:"primary",className:t.button,onClick:function(){return e.login()},value:"submit"},"Login"))}},{key:"renderUnauthenticated",value:function(){return r.a.createElement("div",null,"You are not authorised to view this")}},{key:"render",value:function(){return this.renderAuthenticated()}}]),t}(r.a.Component),G=Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},flex:{flexGrow:1,flexShrink:1},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200},button:{margin:e.spacing.unit},vBox:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1},hBox:{display:"flex",flexDirection:"row",flexGrow:1,flexShrink:1}}},{withTheme:!0})(Object(E.b)(function(e){return Object(h.a)({},e)},function(e){return{addExercise:function(t){var a=t.title,n=t.exercise;return e(function(e){var t=e.title,a=e.exercise;return function(e){e({type:"ADD_EXERCISE",payload:{title:t,exercise:a}})}}({title:a,exercise:n}))},getExercises:function(){return e(function(e){e({type:"GET_EXERCISES"})})}}})(F)),M=a(147),L=a.n(M),U=function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}},z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={expanded:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleExpanded",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"indexToMissionName",value:function(e){var t=String.fromCharCode(97+e).toUpperCase();return r.a.createElement("strong",null,"Mission ",t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.description,n=t.points,i=t.exercise,o=t.index,l=t.classes,s=this.state.expanded;return r.a.createElement(g.f,{expanded:s,onChange:function(){return e.toggleExpanded()}},r.a.createElement(g.h,{expandIcon:r.a.createElement(L.a,null)},r.a.createElement(g.s,{className:l.heading},this.indexToMissionName(o)," (",n," Nectar Points)"),r.a.createElement(g.s,{className:l.secondaryHeading},a)),r.a.createElement(g.g,null,r.a.createElement(g.s,null,i)))}}]),t}(r.a.Component),J=Object(b.withStyles)(U)(z),X=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.missions,a=e.classes;return r.a.createElement("div",{className:a.root},t.map(function(e,t){var a=e.description,n=e.points,i=e.exercise;return r.a.createElement(J,{key:a,index:t,description:a,points:n,exercise:i})}))}}]),t}(r.a.Component),_=Object(b.withStyles)(U)(X),Y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.exercise,t=e.title,a=e.missions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.s,{variant:"subtitle1"},"You must complete AT LEAST ONE of the following missions to summon Hermes to bring news of the next missions."),r.a.createElement(_,{title:t,missions:a}))}}]),t}(r.a.Component),q=a(97),K=a.n(q),V=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{style:{flex:1}});return r.a.createElement("div",{className:this.props.class},e,this.props.children,e)}}]),t}(r.a.Component),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(f.a)({},e,t.target.value))}},a.state={password:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"submitPassword",value:function(){this.props.unlockExercise(this.state.password),this.setState({password:""})}},{key:"render",value:function(){var e=this,t=this.props.classes,a={backgroundImage:"url(".concat(K.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",height:0,paddingTop:"calc(100% / 1.6)",position:"relative"};return r.a.createElement("div",{style:a},r.a.createElement("div",{style:{position:"absolute",top:"25%",left:"0%",width:"45%",height:"75%",overflow:"auto",fontSize:"1.25vw"}},r.a.createElement(g.p,{style:{minWidth:200}},r.a.createElement(V,{class:t.hBox},r.a.createElement(g.s,{variant:"h6"},"Please sign here")),r.a.createElement(V,{class:t.hBox},r.a.createElement(g.q,{id:"password",label:"Password",type:"password",className:t.textField,value:this.state.password,onChange:this.handleChange("password"),margin:"normal",variant:"outlined"})),r.a.createElement(V,{class:t.hBox},r.a.createElement(g.b,{color:"primary",className:t.button,onClick:function(){return e.submitPassword()},value:"submit"},"Login")))))}}]),t}(r.a.Component),Z=Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},passwordContainer:{flex:2},imageContainer:{flexGrow:5},imageFigure:{backgroundImage:"url(".concat(K.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",height:0,paddingTop:"100%",width:"100%",position:"relative"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200},button:{margin:e.spacing.unit},vBox:{display:"flex",flexDirection:"column",flex:1,flexShrink:1},hBox:{display:"flex",flexDirection:"row",flexGrow:1,flexShrink:1}}},{withTheme:!0})(Object(E.b)(function(e){return Object(h.a)({},e)},function(e){return{unlockExercise:function(t){return e(function(e){return function(t){t({type:"UNLOCK_EXERCISE",payload:e})}}(t))}}})(Q)),$=a(43),ee=a.n($),te=a(34),ae=a.n(te),ne=a(65),re=a.n(ne),ie={top:"50%",left:"50%",translate:"translate(-50%, -50%)"},oe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.close;return r.a.createElement(ae.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:this.handleClose},r.a.createElement("div",{style:ie,className:t.paper},r.a.createElement(ee.a,{variant:"h6",id:"modal-title"},"Text in a modal"),r.a.createElement(ee.a,{variant:"subtitle1",id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),r.a.createElement(re.a,{onClick:n},"Close")))}}]),t}(r.a.Component),le=Object(b.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"}}})(oe),se=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showLocked",value:function(){alert("Exercise is locked")}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.locked,i=t.onClick;return r.a.createElement(g.l,{button:!0,onClick:n?function(){return e.showLocked()}:i},r.a.createElement(g.m,null,n?r.a.createElement(I.a,null):r.a.createElement(P.a,null)),r.a.createElement(g.n,{primary:a}))}}]),t}(r.a.Component),ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={displayPasswordModal:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addExercise",value:function(){this.props.navigate({title:"Add Exercise",content:r.a.createElement(G,null)})}},{key:"deleteExercise",value:function(){this.props.navigate({title:"Delete Exercise",content:r.a.createElement("div",null,"Under construction")})}},{key:"viewExercise",value:function(e){var t=e.title,a=e.exercise;this.props.navigate({title:t,content:r.a.createElement(Y,{exercise:a})})}},{key:"enterPassword",value:function(){this.props.navigate({title:"Enter Password",content:r.a.createElement(Z,null)})}},{key:"dismissPasswordModal",value:function(){this.setState({displayPasswordModal:!1})}},{key:"renderAdminOptions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.l,{button:!0,onClick:function(){return e.addExercise()}},r.a.createElement(g.m,null,r.a.createElement(S.a,null)),r.a.createElement(g.n,{primary:"Add Exercise"})),r.a.createElement(g.l,{button:!0,onClick:function(){return e.deleteExercise()}},r.a.createElement(g.m,null,r.a.createElement(S.a,null)),r.a.createElement(g.n,{primary:"Delete Exercise"})))}},{key:"render",value:function(){var e=this,t=this.state.displayPasswordModal,a=this.props,n=a.classes,i=a.theme,o=a.isAdmin,l=a.exerciseReducer,s=(l=void 0===l?{}:l).exercises,c=void 0===s?[]:s,u=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar},r.a.createElement(g.k,null,r.a.createElement(g.l,{button:!0,onClick:function(){return e.props.viewHome()}},r.a.createElement(g.m,null,r.a.createElement(B.a,null)),r.a.createElement(g.n,{primary:"Home"})))),r.a.createElement(g.d,null),r.a.createElement(g.k,{subheader:r.a.createElement(g.o,{component:"div"},"Exercises")},c.map(function(t,a){var n=t.title,i=t.exercise;return r.a.createElement(se,{title:n,key:"".concat(n,"-").concat(a),locked:a>1,onClick:function(){return e.viewExercise({title:n,exercise:i})}})})),r.a.createElement(g.d,null),r.a.createElement(g.k,null,r.a.createElement(g.l,{button:!0,onClick:function(){return e.enterPassword()}},r.a.createElement(g.m,null,r.a.createElement(W.a,null)),r.a.createElement(g.n,{primary:"Enter Password"})),o?this.renderAdminOptions():void 0));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.i,{smUp:!0,implementation:"css"},r.a.createElement(g.e,{container:this.props.container,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:this.props.drawerOpen,onClose:function(){return e.toggleDrawer(!1)},classes:{paper:n.drawerPaper}},u)),r.a.createElement(g.i,{xsDown:!0,implementation:"css"},r.a.createElement(g.e,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},u)),r.a.createElement(le,{open:t,close:function(){return e.dismissPasswordModal()}}))}}]),t}(r.a.Component),ue=Object(b.withStyles)(function(e){return{toolbar:e.mixins.toolbar,drawerPaper:{width:240}}},{withTheme:!0})(Object(E.b)(function(e){return Object(h.a)({},e)},function(e){return{}})(ce)),me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={drawerOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.viewHome()}},{key:"toggleDrawer",value:function(e){this.setState({drawerOpen:e})}},{key:"viewHome",value:function(){this.navigate({title:"Home",content:r.a.createElement(j,null),viewingHome:!0})}},{key:"navigate",value:function(e){var t=e.title,a=e.content,n=e.viewingHome,r=void 0!==n&&n;this.setState({title:t,content:a,viewingHome:r})}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.content,i=t.viewingHome,o=t.drawerOpen,l=this.props.classes;return r.a.createElement("div",{className:l.root},r.a.createElement(g.c,null),r.a.createElement(g.a,{position:"fixed",className:l.appBar},r.a.createElement(g.r,null,r.a.createElement(g.j,{color:"inherit","aria-label":"Open drawer",onClick:function(){return e.toggleDrawer(!0)},className:l.menuButton},r.a.createElement(x.a,null)),r.a.createElement(g.s,{variant:"h6",color:"inherit",noWrap:!0,className:l.grow},a),i?void 0:r.a.createElement(g.j,{color:"inherit","aria-label":"Close Exercise",onClick:function(){return e.viewHome()}},r.a.createElement(y.a,null)))),r.a.createElement("nav",{className:l.drawer},r.a.createElement(ue,{isAdmin:this.props.isAdmin,drawerOpen:o,navigate:this.navigate.bind(this),viewHome:this.viewHome.bind(this)})),r.a.createElement("main",{className:l.content},r.a.createElement("div",{className:l.toolbar}),n))}}]),t}(n.Component),de=Object(b.withStyles)(function(e){return{root:{display:"flex",height:"100%"},drawer:Object(f.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(f.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(f.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit},grow:{flexGrow:1}}},{withTheme:!0})(Object(E.b)(function(e){return Object(h.a)({},e)},function(e){return{}})(me)),pe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/classics"},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/",component:de}),r.a.createElement(p.a,{exact:!0,path:"/admin",render:function(e){return r.a.createElement(de,Object.assign({},e,{isAdmin:!0}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(36),fe=a(155),Ee=[{password:"TEST",title:"Background \u2013 Introduction",exercise:{title:"Background \u2013 Introduction (mythic background and setting of Iliad)",missions:[{description:"Answer questions based on textbook info.",points:300,exercise:r.a.createElement("ol",null,r.a.createElement("strong",null,"Introduction"),r.a.createElement("li",null,"Very briefly, what is the Iliad about?"),r.a.createElement("li",null,"What important issues are brought to light through the Iliad?"),r.a.createElement("li",null,"What influence did the Iliad have on Greek culture?"),r.a.createElement("br",null),r.a.createElement("strong",null,"The mythic background of the Iliad"),r.a.createElement("li",null,"How was Eris involved in stirring up tension between three goddesses?"),r.a.createElement("li",null,"Explain the story of the Judgement of Paris."),r.a.createElement("li",null,"How did Paris\u2019 actions trigger the start of the Trojan War?"),r.a.createElement("li",null,"Summarise the first nine years of the Trojan War."),r.a.createElement("li",null,"What two events are particularly important towards the narrative of the Iliad?"),r.a.createElement("br",null),r.a.createElement("strong",null,"The setting of the Iliad"),r.a.createElement("li",null,"Where are the three main settings for human action in the Iliad?"),r.a.createElement("li",null,"Name three major geographical landmarks."),r.a.createElement("li",null,"What is another name for Troy? What link has it got with the title of the text?"),r.a.createElement("li",null,"What are a few landmarks of Troy?"),r.a.createElement("li",null,"In what ways are the Greeks referred to?"),r.a.createElement("li",null,"What is the make-up of the Greek army?"),r.a.createElement("li",null,"Where does the main fighting take place?"),r.a.createElement("li",null,"What is Olympus? What happens there?"),r.a.createElement("li",null,"Who is Thetis? How is she important to the Iliad"))},{description:"Make a mind map based on the background information in textbook.",points:300},{description:"Create a picture of the setting.",points:200},{description:"Make a Flip-Quiz using the background information in textbook.",points:200}]}}],be=a(156),ge=a.n(be),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=e.exercises,n=void 0===a?[]:a;switch(t.type){case"ADD_EXERCISE":return console.log("MZ111",t,n.concat(t.payload)),Object(h.a)({},e,{exercises:n.concat(t.payload)});case"GET_EXERCISES":return e;case"UNLOCK_EXERCISE":var r=t.payload,i=void 0===r?"":r,o=ge.a.findIndex(Ee,function(e){var t=e.password;return console.log(t),!!t&&t.toUpperCase()===i.toUpperCase()});return-1!==o?Object(h.a)({},e,{exercises:Ee.slice(o),latestPassword:i}):e;default:return e}},xe=Object(he.c)({exerciseReducer:ve}),we={exerciseReducer:{exercises:[],latestPassword:void 0}};var ye=function(){var e=JSON.parse(localStorage.getItem("classics-is-cool")||JSON.stringify(we)),t=ve(e.exerciseReducer,{type:"UNLOCK_EXERCISE",payload:e.exerciseReducer.latestPassword}),a=Object(he.d)(xe,Object(h.a)({},e,{exerciseReducer:t}),Object(he.a)(fe.a));return a.subscribe(function(){localStorage.setItem("classics-is-cool",JSON.stringify(a.getState()))}),a}();o.a.render(r.a.createElement(E.a,{store:ye},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a.p+"static/media/hermes.b06b2726.png"}},[[221,2,1]]]);
//# sourceMappingURL=main.ee5dfd3d.chunk.js.map