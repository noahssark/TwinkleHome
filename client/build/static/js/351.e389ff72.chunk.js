"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[351],{3351:function(e,l,a){a.r(l),a.d(l,{default:function(){return C}});var t=a(885),s=a(2791),n=a(9836),i=a(3382),r=a(3994),c=a(6890),u=a(5855),g=a(4925),h=a(9891),d=a(3926),j=a(8096),x=a(1428),m=a(7247),_=a(1001),Z=a(88),o=a(75),b=a(7391),f=a(8070),N=a(7450),p=function(e){var l=new Date(e);return new Intl.DateTimeFormat(navigator.language).format(l)},S=a(184),D=function(e){return(0,S.jsx)("span",{children:p(e.date)})},v=a(6907),C=function(){var e=(0,s.useState)([]),l=(0,t.Z)(e,2),a=l[0],p=l[1],C=(0,s.useState)(""),A=(0,t.Z)(C,2),k=A[0],w=A[1],P=(0,s.useState)(""),U=(0,t.Z)(P,2),T=U[0],y=U[1],I=(0,s.useState)(""),q=(0,t.Z)(I,2),E=q[0],F=q[1],R=(0,s.useState)(""),L=(0,t.Z)(R,2),O=L[0],W=L[1],z=(0,s.useState)(!1),B=(0,t.Z)(z,2),G=B[0],H=B[1],J=(0,s.useState)(!1),K=(0,t.Z)(J,2),M=K[0],Q=K[1];(0,s.useEffect)((function(){Q(!1),(0,Z.Z)("/temp-users/all").then((function(e){e.data.sort((function(e,l){return+new Date(e.callAgainDate)-+new Date(l.callAgainDate)})),e.data.sort((function(e,l){return e.callingStatus>l.callingStatus?1:l.callingStatus>e.callingStatus?-1:0})),p(e.data)}))}),[M]);var V=function(e){return function(l){l.preventDefault(),(0,N.Z)("/temp-users/delete/".concat(e)).then((function(e){if(!1===e.success)return W(e.message),H(!0);Q(!0)}))}};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.ql,{children:(0,S.jsx)("meta",{name:"robots",content:"noindex"})}),(0,S.jsx)(_.rt,{title:O,open:G,setOpen:H}),(0,S.jsxs)(n.Z,{className:"user-table",children:[(0,S.jsx)(c.Z,{children:(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Name"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Email"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Phone"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Date"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Calling Status"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Call Again Date"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Talk Progress"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Update Call Status"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Update Call Again Date"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Update Talk Progress"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Update"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:"Delete"})]})}),(0,S.jsx)(i.Z,{children:a.map((function(e){return(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:e.name}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:e.email}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:e.phone}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:(0,S.jsx)(D,{date:e.createdAt})}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:e.callingStatus}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:e.callAgainDate?(0,S.jsx)(D,{date:e.callAgainDate}):"----"}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",width:"20%",children:e.talkProgress}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:(0,S.jsxs)(j.Z,{sx:{m:1,minWidth:80},children:[(0,S.jsx)(g.Z,{children:"Update Call Status"}),(0,S.jsxs)(d.Z,{required:!0,id:"demo-simple-select",value:k,label:"Update Call Status",onChange:function(e){return w(e.target.value)},children:[(0,S.jsx)(h.Z,{value:"Pending",children:"Pending"}),(0,S.jsx)(h.Z,{value:"Done",children:"Done"}),(0,S.jsx)(h.Z,{value:"Rejected",children:"Rejected"}),(0,S.jsx)(h.Z,{value:"Call Again",children:"Call Again"})]})]})}),(0,S.jsx)(r.Z,{align:"right",className:"user-table__cell",children:(0,S.jsx)("input",{type:"date",onChange:function(e){return y(e.target.value)}})}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:(0,S.jsx)(b.Z,{multiline:!0,label:"Talk Progress",value:E,onChange:function(e){return F(e.target.value)}})}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:(0,S.jsx)("form",{onSubmit:(l=e._id,function(e){e.preventDefault(),(0,o.L)("/temp-users/update-calling-status/".concat(l),{callingStatus:k,talkProgress:E,callAgainDate:T?new Date(T):null}).then((function(e){if(!1===e.success)return W(e.message),H(!0);Q(!0)}))}),children:(0,S.jsx)(f.I,{type:"submit",title:(0,S.jsx)(x.Z,{})})})}),(0,S.jsx)(r.Z,{className:"user-table__cell",align:"right",children:(0,S.jsx)("form",{onSubmit:V(e._id),children:(0,S.jsx)(f.I,{type:"submit",title:(0,S.jsx)(m.Z,{})})})})]},e._id);var l}))})]})]})}}}]);
//# sourceMappingURL=351.e389ff72.chunk.js.map