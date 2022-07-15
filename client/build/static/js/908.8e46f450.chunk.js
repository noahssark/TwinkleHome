"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[908],{8321:function(e,n,t){t.d(n,{Z:function(){return r}});var s=t(3971),a=t(184),r=function(e){return(0,a.jsx)(s.Z,{className:"modal",open:e.open,onClose:e.onClose,children:(0,a.jsx)("div",{className:"modal__content ".concat(e.className),children:e.children})})}},9598:function(e,n,t){t.d(n,{ic:function(){return r},xH:function(){return i},LC:function(){return u},s9:function(){return c}});var s=t(890),a=t(184),r=function(e){return(0,a.jsx)(s.Z,{variant:"h1",className:"".concat(e.className," heading-primary"),children:e.title})},i=function(e){return(0,a.jsx)(s.Z,{variant:"h2",className:"".concat(e.className," heading-secondary"),children:e.title})},u=function(e){return(0,a.jsx)(s.Z,{variant:"subtitle1",className:"".concat(e.className," subtitle-primary"),component:"p",children:e.title})},c=function(e){return(0,a.jsx)(s.Z,{variant:"subtitle2",className:"".concat(e.className," subtitle-secondary"),component:"p",children:e.title})}},2908:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var s=t(1413),a=t(8214),r=t(5861),i=t(885),u=t(2791),c=t(501),l=t(6871),o=t(7391),p=t(8070),m=t(4534),d=t(9598),f=t(1001),h=t(8321),g=t(1222),x=t(6907),Z=t(184),v=function(){var e=(0,l.s0)(),n=(0,u.useContext)(g.Y).setAuthFormSubmit,t=(0,u.useState)({name:"Your Name",email:"example@gmail.com",phone:"123456789",password:"",cpassword:""}),v=(0,i.Z)(t,2),j=v[0],N=v[1],_=(0,u.useState)(!1),b=(0,i.Z)(_,2),y=b[0],w=b[1],C=(0,u.useState)(""),S=(0,i.Z)(C,2),k=S[0],P=S[1],q=(0,u.useState)(!1),W=(0,i.Z)(q,2),O=W[0],L=W[1],A=(0,u.useState)(!1),D=(0,i.Z)(A,2),I=D[0],T=D[1],V=(0,u.useState)(""),Y=(0,i.Z)(V,2),E=Y[0],F=Y[1],H=(0,u.useState)(""),R=(0,i.Z)(H,2),U=R[0],z=R[1],B=(0,u.useState)(!1),G=(0,i.Z)(B,2),J=G[0],K=G[1],M=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),j.password===j.cpassword){e.next=4;break}return P("Password and Confirm Password does not match"),e.abrupt("return",w(!0));case 4:return K(!0),e.next=7,(0,m.Z)("/otp/send",{email:j.email},!1);case 7:t=e.sent,K(!1),t.success?L(!0):(P(t.message),w(!0));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(s){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),t.next=3,(0,m.Z)("/otp/verify",{email:j.email,otp:U},!1);case 3:if(!(r=t.sent).success){t.next=12;break}return t.next=7,(0,m.Z)("/auth/signup",j,!1);case 7:i=t.sent,n(!0),i.success?e("/"):(P(i.message),L(!1),w(!0)),t.next=14;break;case 12:T(!0),F(r.message);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,Z.jsxs)("section",{className:"signup-section",children:[(0,Z.jsxs)(x.ql,{children:[(0,Z.jsx)("title",{children:"Signup | Shri Property"}),(0,Z.jsx)("link",{rel:"canonical",href:"https://shriproperty.com/signup"}),(0,Z.jsx)("meta",{name:"description",content:"Signup on Shri Property to get exclusive feature of listing your own properties"})]}),(0,Z.jsx)(h.Z,{open:O,className:"model",children:(0,Z.jsxs)("form",{className:"signup-section__modal",onSubmit:Q,children:[(0,Z.jsx)("h2",{children:"Verify Otp"}),(0,Z.jsx)(d.LC,{title:"Please check your email"}),(0,Z.jsx)(f.rt,{title:E,open:I,setOpen:T}),(0,Z.jsx)(o.Z,{label:"OTP",type:"number",variant:"outlined",className:"model-form__input",onChange:function(e){return z(e.target.value)},fullWidth:!0}),(0,Z.jsx)("span",{onClick:M,children:"Resend OTP"}),(0,Z.jsx)(p.I,{title:"Verify",type:"submit",loading:J})]})}),(0,Z.jsxs)("div",{className:"signup-section__container",children:[(0,Z.jsx)("img",{src:"/images/illustrations/signup.svg",alt:"illustration",className:"signup-section__image"}),(0,Z.jsxs)("form",{className:"signup-section__form",onSubmit:M,children:[(0,Z.jsx)(f.rt,{title:k,open:y,setOpen:w}),(0,Z.jsx)(o.Z,{className:"signup-section__input",label:"Name",variant:"outlined",value:j.name,onChange:function(e){return N((0,s.Z)((0,s.Z)({},j),{},{name:e.target.value}))},fullWidth:!0,required:!0}),(0,Z.jsx)(o.Z,{className:"signup-section__input",label:"Email",variant:"outlined",type:"email",value:j.email,onChange:function(e){return N((0,s.Z)((0,s.Z)({},j),{},{email:e.target.value}))},fullWidth:!0,required:!0}),(0,Z.jsx)(o.Z,{className:"signup-section__input",label:"Phone",variant:"outlined",type:"number",value:j.phone,onChange:function(e){return N((0,s.Z)((0,s.Z)({},j),{},{phone:e.target.value}))},fullWidth:!0,required:!0}),(0,Z.jsx)(o.Z,{className:"signup-section__input",label:"Password",variant:"outlined",type:"password",value:j.password,onChange:function(e){return N((0,s.Z)((0,s.Z)({},j),{},{password:e.target.value}))},fullWidth:!0,required:!0}),(0,Z.jsx)(o.Z,{className:"signup-section__input",label:"Confirm Password",variant:"outlined",type:"password",value:j.cpassword,onChange:function(e){return N((0,s.Z)((0,s.Z)({},j),{},{cpassword:e.target.value}))},fullWidth:!0,required:!0}),(0,Z.jsxs)("p",{className:"signup-section__link",children:["Already have account ",(0,Z.jsx)(c.rU,{to:"/login",children:"Login"})]}),(0,Z.jsx)(p.I,{title:"Sign up",className:"signup-section__btn",type:"submit",loading:J})]})]})]})}}}]);
//# sourceMappingURL=908.8e46f450.chunk.js.map