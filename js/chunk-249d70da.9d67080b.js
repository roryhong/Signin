(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249d70da"],{"4a33":function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"container"},[s.isLogin?e("div",{staticClass:"login-success"},[e("div",[s._v("Hello! "+s._s(s.user.name))]),e("button",{on:{click:s.logOut}},[s._v("log out")])]):e("div",[e("h1",[s._v("Sign in")]),e("form",{attrs:{action:""}},[e("div",{attrs:{id:"email"}},[e("label",[s._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:s.user.email,expression:"user.email",modifiers:{lazy:!0}}],staticClass:"email",attrs:{type:"text",required:""},domProps:{value:s.user.email},on:{change:function(e){return s.$set(s.user,"email",e.target.value)}}})]),e("div",{attrs:{id:"password"}},[e("label",[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:s.user.password,expression:"user.password",modifiers:{lazy:!0}}],staticClass:"password",attrs:{type:"password",required:""},domProps:{value:s.user.password},on:{change:function(e){return s.$set(s.user,"password",e.target.value)}}})]),e("button",{on:{click:function(e){return e.preventDefault(),s.btnClick.apply(null,arguments)}}},[s._v("Sign in")]),e("div",{staticClass:"signup-link"},[e("router-link",{attrs:{to:"/Signup"}},[s._v("Sign up now!")])],1)])])])},a=[],r={name:"Signin",data(){return{user:{email:"",password:"",name:""},isLogin:!1}},methods:{btnClick(){if(""!==this.user.email&&""!==this.user.password||alert("帳號或密碼請勿空白"),this.$store.dispatch("findUser",this.user),""===this.user.name)return;this.isLogin=!0;let s={isLogin:!0,name:this.user.name};localStorage.setItem("userLogin",JSON.stringify(s)),this.$store.state.userInfo=s},logOut(){localStorage.removeItem("userLogin"),this.isLogin=!1,this.user.name="",this.user.email="",this.user.password=""}},mounted(){let s=JSON.parse(localStorage.getItem("userLogin"));null!==s&&s.isLogin&&(this.isLogin=!0,this.user.name=s.name)}},n=r,o=(t("d612"),t("2877")),u=Object(o["a"])(n,i,a,!1,null,"dc358dfe",null);e["default"]=u.exports},"78c3":function(s,e,t){},d612:function(s,e,t){"use strict";t("78c3")}}]);
//# sourceMappingURL=chunk-249d70da.9d67080b.js.map