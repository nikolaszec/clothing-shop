(this["webpackJsonpclothing-shop"]=this["webpackJsonpclothing-shop"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=a(15),o=a(7),s=a.n(o),u=a(2),m=a(13),p=a(16),d=a(17),f=a(19),h=a(18),b=a(6),E=(a(58),a(20)),g=a(5),v=a(3),O=(a(63),a(64),Object(b.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.linkUrl,l=e.history,i=e.match;return r.a.createElement("div",{className:"menu-item ".concat(n),onClick:function(){return l.push("".concat(i.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("h3",{className:"subtitle"},"SHOP NOW")))}))),y=Object(v.a)([function(e){return e.directory}],(function(e){return e.sections})),C=Object(v.b)({sections:y}),j=Object(g.b)(C)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(E.a)(e,["id"]);return r.a.createElement(O,Object.assign({key:t},a))})))})),N=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(j,null))},w=(a(66),a(67),a(68),a(69),a(70),a(71),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(E.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),k="TOGGLE_CART_HIDDEN",I="ADD_ITEM",T="REMOVE_ITEM",S="CLEAR_ITEM_FROM_CART",_=function(){return{type:k}},x=function(e){return{type:I,payload:e}},L=Object(g.b)(null,(function(e){return{addItem:function(t){return e(x(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.imageUrl,l=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},l,"$")),r.a.createElement(w,{inverted:!0,onClick:function(){return a(t)}},"Add to Cart"))})),A=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))},U=function(e){return e.shop},P=Object(v.a)([U],(function(e){return e.collections})),H=Object(v.a)([P],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),R=Object(v.a)([U],(function(e){return e.isFetching})),F=Object(v.b)({collections:H}),q=Object(g.b)(F)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){return r.a.createElement(A,{key:e.id,title:e.title,items:e.items})})))})),D={FETCH_SHOP_DATA:"FETCH_SHOP_DATA",FETCH_COLLECTION_START:"FETCH_COLLECTION_START",FETCH_COLLECTION_SUCCESS:"FETCH_COLLECTION_SUCCESS",FETCH_COLLECTION_FAILED:"FETCH_COLLECTION_FAILED"},M=a(24),G=a.n(M);a(75),a(77);G.a.initializeApp({apiKey:"AIzaSyBprqehG_LogR9hOhMbybPT_L422g8bWj4",authDomain:"clothing-store-6c401.firebaseapp.com",databaseURL:"https://clothing-store-6c401.firebaseio.com",projectId:"clothing-store-6c401",storageBucket:"clothing-store-6c401.appspot.com",messagingSenderId:"966220377509",appId:"1:966220377509:web:5081d5461e505962f70c4c"});var z=G.a.auth(),W=G.a.firestore(),B=new G.a.auth.GoogleAuthProvider;B.setCustomParameters({prompt:"select_account"});var V=function(){return z.signInWithPopup(B)},K=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=W.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.email,c=t.displayName,e.prev=8,e.next=11,n.set(Object(u.a)({displayName:c,email:r,createdAt:new Date},a));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log("error",e.t0.message);case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,a){return e.apply(this,arguments)}}(),$=(G.a,function(e){return{type:D.FETCH_COLLECTION_SUCCESS,payload:e}}),Q=(a(81),function(e){return function(t){var a=t.isLoading,n=Object(E.a)(t,["isLoading"]);return a?r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,n)}}),J=Q(q),X=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribe=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props;e.dispatch;(0,e.fetchCollectionsAsync)()}},{key:"render",value:function(){return r.a.createElement("div",{className:"shop-page"},r.a.createElement(J,{isLoading:this.props.isCollectionsFetching}))}}]),a}(r.a.Component),Y=Object(g.b)((function(){return Object(v.b)({isCollectionsFetching:R})}),(function(e){return{fetchCollectionsAsync:function(){return e(function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:D.FETCH_COLLECTION_START}),a=W.collection("collections"),e.abrupt("return",a.get().then((function(e){t($(e.docs.map((function(e){var t=e.data(),a=t.title,n=t.items,r=encodeURI(a.toLowerCase());return{id:e.id,title:a,items:n,routeName:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})))})).catch((function(e){t({type:D.FETCH_COLLECTION_FAILED,payload:e})})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(Q(X)),Z=function(e){return e.cart},ee=Object(v.a)([Z],(function(e){return e.hidden})),te=Object(v.a)([Z],(function(e){return e.cartItems})),ae=Object(v.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ne=Object(v.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),re=(a(82),a(83),Object(g.b)(null)((function(e){var t=e.cartItem,a=e.dispatch,n=t.name,c=t.imageUrl,l=t.price,i=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:c,alt:"checkout-item"})),r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return a({type:T,payload:t})}},"\u276e"),i,r.a.createElement("div",{className:"arrow",onClick:function(){return a(x(t))}},"\u276f")),r.a.createElement("span",{className:"price"},l),r.a.createElement("div",{className:"remove-button",onClick:function(){return a({type:S,payload:t})}},"\u2715"))}))),ce=a(46),le=a.n(ce),ie=a(47),oe=a.n(ie),se=function(e){var t=e.price,a=100*t;return r.a.createElement(le.a,{label:"Pay now",name:"Clothing store",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",amount:a,description:"Your total price is $".concat(t),panelLabel:"Pay now",token:function(e){oe()({url:"/payment",method:"post",data:{amount:a,token:e}}).then((function(e){alert("Payment successful")})).catch((function(e){console.log("Payment error:",e),alert("There was issue with your payment. Please use provided credit card.")}))},stripeKey:"pk_test_51Gsq40K6oIvCzhF3Rg6tt2sBTmLMEguJAHvBYRQVgMbTUMXIgOo1QWHdo7NgTw5SGeTsthPSLaLhmMqhNnhRWKAc00k655pkzs"})},ue=Object(g.b)((function(){return Object(v.b)({cartItems:te,total:ne})}))((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(re,{key:e.id,cartItem:e})})),r.a.createElement("span",{className:"total"},"Total $ ",a),r.a.createElement(se,{price:a}),r.a.createElement("div",{className:"test-message"},r.a.createElement("strong",null,"Card number for testing ->")," 4242424242424242"," ",r.a.createElement("strong",null,"EXP DATE")," -> 12/21 ",r.a.createElement("strong",null,"CVC")," 123"))}));function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.a.createElement("title",null,"Group"),fe=r.a.createElement("desc",null,"Created with Sketch."),he=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),be=function(e){var t=e.svgRef,a=e.title,n=pe(e,["svgRef","title"]);return r.a.createElement("svg",me({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?de:a?r.a.createElement("title",null,a):null,fe,he)},Ee=r.a.forwardRef((function(e,t){return r.a.createElement(be,me({svgRef:t},e))})),ge=(a.p,a(101),Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser})));function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ye=r.a.createElement("g",null),Ce=r.a.createElement("g",null),je=r.a.createElement("g",null),Ne=r.a.createElement("g",null),we=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),Se=r.a.createElement("g",null),_e=r.a.createElement("g",null),xe=r.a.createElement("g",null),Le=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Pe=r.a.createElement("g",null),He=function(e){var t=e.svgRef,a=e.title,n=Oe(e,["svgRef","title"]);return r.a.createElement("svg",ve({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ye,Ce,je,Ne,we,ke,Ie,Te,Se,_e,xe,Le,Ae,Ue,Pe)},Re=r.a.forwardRef((function(e,t){return r.a.createElement(He,ve({svgRef:t},e))})),Fe=(a.p,a(102),Object(g.b)((function(){return Object(v.b)({itemCount:ae})}),(function(e){return{toggleCartHidden:function(){return e(_())}}}))((function(e){var t=e.itemCount,a=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-icon",onClick:a},r.a.createElement(Re,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t))}))),qe=(a(103),a(104),function(e){var t=e.item,a=t.imageUrl,n=t.name,c=t.price,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},l," x $ ",c)))}),De=Object(b.g)(Object(g.b)((function(){return Object(v.b)({cartItems:te})}))((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(qe,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"No items in a cart.")),r.a.createElement(w,{onClick:function(){a.push("/checkout"),n(_())}},"GO TO CHECKOUT"))}))),Me=Object(g.b)((function(){return Object(v.b)({currentUser:ge,hidden:ee})}))((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("header",{className:"header"},r.a.createElement(i.b,{className:"logo-container",to:"/"},r.a.createElement(Ee,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(i.b,{className:"option",to:"/shop"},"SHOP"),t?r.a.createElement("div",{className:"option",onClick:function(){return z.signOut()}},"SIGN OUT"):r.a.createElement(i.b,{className:"option",to:"/signIn"},"SIGN IN"),r.a.createElement(i.b,{className:"option",to:"/contact"},"CONTACT"),r.a.createElement(Fe,null)),a?null:r.a.createElement(De,null))})),Ge=a(23),ze=(a(105),function(e){var t=e.handleChange,a=e.label,n=Object(E.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"form-input-label ".concat(n.value.length>0?"shrink":"")},a):null)}),We=(a(106),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.email,c=n.password,t.next=4,z.signInWithEmailAndPassword(r,c);case 4:e.setState({email:"",password:""});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Ge.a)({},n,r))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h1",{className:"title"},"I already have an account"),r.a.createElement("h3",{className:"subtitle"},"Sign in with email or password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ze,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(ze,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(w,{type:"submit"},"Sign in"),r.a.createElement(w,{type:"button",onClick:V,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component)),Be=(a(107),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={displayName:"",email:"",password:"",confirmPassword:""},e.handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c,l,i,o,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,l=n.password,i=n.confirmPassword,l===i){t.next=5;break}return alert("Passwords should be equal."),t.abrupt("return");case 5:return t.prev=5,t.next=8,z.createUserWithEmailAndPassword(c,l);case 8:return o=t.sent,u=o.user,t.next=12,K(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Ge.a)({},n,r))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h1",{className:"title"},"I do not have an account"),r.a.createElement("h3",{className:"subtitle"},"Sign up with email or password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ze,{label:"Display Name",type:"text",onChange:this.handleChange,name:"displayName",value:t,required:!0}),r.a.createElement(ze,{label:"Email",type:"email",onChange:this.handleChange,name:"email",value:a,required:!0}),r.a.createElement(ze,{label:"Password",type:"password",onChange:this.handleChange,name:"password",value:n,required:!0}),r.a.createElement(ze,{label:"Confirm Password",type:"password",onChange:this.handleChange,name:"confirmPassword",value:c,required:!0}),r.a.createElement(w,{type:"submit"},"SIGN UP")))}}]),a}(n.Component)),Ve=(a(108),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up-page"},r.a.createElement(We,null),r.a.createElement(Be,null))}),Ke="SET_CURRENT_USER",$e=(a(109),Object(g.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(v.a)([P],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=(e.match,t.title),n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))}))),Qe=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null},e.unsubscribe=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribe=z.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,K(a);case 3:t.sent.onSnapshot((function(t){var a=t.data();e(Object(u.a)({id:t.id},a))})),t.next=8;break;case 7:e(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Me,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:N}),r.a.createElement(b.b,{exact:!0,path:"/shop",component:Y}),r.a.createElement(b.b,{exact:!0,path:"/shop/:collectionId",component:$e}),r.a.createElement(b.b,{exact:!0,path:"/checkout",component:ue}),r.a.createElement(b.b,{exact:!0,path:"/signIn"},this.props.currentUser?r.a.createElement(b.a,{to:"/"}):r.a.createElement(Ve,null))))}}]),a}(r.a.Component),Je=Object(g.b)((function(){return Object(v.b)({currentUser:ge})}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ke,payload:e}}(t))}}}))(Qe),Xe=a(14),Ye=a(28),Ze=(a(110),a(48)),et=a(49),tt=a.n(et),at={currentUser:null},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});default:return e}},rt=a(51),ct=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(rt.a)(e),[Object(u.a)(Object(u.a)({},t),{},{quantity:1})])},lt=function(e,t){return e.find((function(e){return e.id===t.id})).quantity<=1?it(e,t):e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},it=function(e,t){return e.filter((function(e){return e.id!==t.id}))},ot={hidden:!0,cartItems:[]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(u.a)(Object(u.a)({},e),{},{hidden:!e.hidden});case I:return Object(u.a)(Object(u.a)({},e),{},{cartItems:ct(e.cartItems,t.payload)});case T:return Object(u.a)(Object(u.a)({},e),{},{cartItems:lt(e.cartItems,t.payload)});case S:return Object(u.a)(Object(u.a)({},e),{},{cartItems:it(e.cartItems,t.payload)});default:return e}},ut={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women's",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;return t.type,e},pt={collections:null,isFetching:!1,errorMessage:""},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.FETCH_SHOP_DATA:return Object(u.a)(Object(u.a)({},e),{},{collections:t.payload});case D.FETCH_COLLECTION_START:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case D.FETCH_COLLECTION_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1,collections:t.payload});case D.FETCH_COLLECTION_FAILED:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},ft={key:"root",storage:tt.a,whitelist:["cart","shop"]},ht=Object(Xe.c)({user:nt,cart:st,directory:mt,shop:dt}),bt=Object(Ye.a)(ft,ht),Et=[Ze.a];var gt=Object(Xe.d)(bt,Xe.a.apply(void 0,Et)),vt=Object(Ye.b)(gt),Ot=a(50);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:gt},r.a.createElement(i.a,null,r.a.createElement(Ot.a,{persistor:vt},r.a.createElement(Je,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports=a(113)},58:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.0e8e8adf.chunk.js.map