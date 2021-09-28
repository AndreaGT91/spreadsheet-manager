(this["webpackJsonpbuild-a-base"]=this["webpackJsonpbuild-a-base"]||[]).push([[0],{118:function(e,t){},119:function(e,t){},120:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(23),l=a.n(o),s=a(21),c=a(8),u=a(18),i=a(46),m=a.n(i),p=a(10),d=a(13),f=a(3),h=a.n(f),b=a(6),E=a(35),g=a(27),w=a(29),y=a(11),v=a.n(y),N=function(e){e?v.a.defaults.headers.common.Authorization=e:delete v.a.defaults.headers.common.Authorization},x=function(e){return{type:"SET_CURRENT_USER",payload:e}},O=function(){return function(e){localStorage.removeItem("jwtToken"),localStorage.removeItem("userID"),localStorage.removeItem("userName"),N(!1),e(x({}))}},j=a(24),k=a.n(j),C=Object(u.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){v.a.post("/api/user/Login",e).then((function(e){var a=e.data,r=a.token,n=a.id,o=a.name;localStorage.setItem("jwtToken",JSON.stringify(r)),localStorage.setItem("userID",JSON.stringify(n)),localStorage.setItem("userName",JSON.stringify(o)),N(r);var l=m()(r);t(x(l))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})((function(e){var t=Object(r.useState)({email:"",password:"",errors:{}}),a=Object(d.a)(t,2),o=a[0],l=a[1],u=Object(c.g)();function i(e){e.persist(),l((function(t){return Object(p.a)(Object(p.a)({},t),{},{[e.target.id]:e.target.value,errors:{}})}))}Object(r.useEffect)((function(){e.auth.isAuthenticated&&u.push("/Dashboard")})),Object(r.useEffect)((function(){l((function(t){return Object(p.a)(Object(p.a)({},t),{},{errors:e.errors})}))}),[e.errors]);var m=o.errors;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{className:"d-block mx-auto img-fluid w-75",style:{opacity:"0.3"},src:k.a,alt:"Build A Base Logo"}),n.a.createElement(g.a,{className:"d-block mx-auto formCard"},n.a.createElement(g.a.Body,null,n.a.createElement("h1",{style:{textAlign:"center"}},"Login"),n.a.createElement("hr",null),n.a.createElement(b.a,{onSubmit:function(t){t.preventDefault();var a={email:o.email,password:o.password};e.loginUser(a)}},n.a.createElement(b.a.Group,{controlId:"email"},n.a.createElement(b.a.Label,null,"Email"),n.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email",autoComplete:"email",onChange:i,value:o.email,error:m.email,className:h()("",{invalid:m.email||m.emailnotfound})}),n.a.createElement("span",{className:"text-danger"},m.email,m.emailnotfound)),n.a.createElement(b.a.Group,{controlId:"password"},n.a.createElement(b.a.Label,null,"Password"),n.a.createElement(b.a.Control,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:i,value:o.password,error:m.password,className:h()("",{invalid:m.password||m.passwordincorrect})}),n.a.createElement("span",{className:"text-danger"},m.password,m.passwordincorrect)),n.a.createElement(s.b,{to:"/ForgotPassword"},"Forgot Password?"),n.a.createElement(s.b,{to:"/SignUp",style:{float:"right"}},"New User?"),n.a.createElement("hr",null),n.a.createElement(E.a,{className:"d-block mx-auto",variant:"success",type:"submit"},"Login")))))})),S=a(33),B=Object(u.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){v.a.post("/api/user",e).then((function(e){return t.push("/Login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(c.h)((function(e){var t=Object(r.useState)({firstName:"",lastName:"",email:"",password:"",password2:"",errors:{}}),a=Object(d.a)(t,2),o=a[0],l=a[1],u=Object(c.g)();function i(e){e.persist(),l((function(t){return Object(p.a)(Object(p.a)({},t),{},{[e.target.id]:e.target.value,errors:{}})}))}Object(r.useEffect)((function(){e.auth.isAuthenticated&&u.push("/Dashboard")})),Object(r.useEffect)((function(){l((function(t){return Object(p.a)(Object(p.a)({},t),{},{errors:e.errors})}))}),[e.errors]);var m=o.errors;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{className:"d-block mx-auto img-fluid w-75",style:{opacity:"0.3"},src:k.a,alt:"Build A Base Logo"}),n.a.createElement(g.a,{className:"d-block mx-auto formCard"},n.a.createElement(g.a.Body,null,n.a.createElement(s.b,{to:"/Login",style:{float:"right",color:"black"}},"x"),n.a.createElement("h1",{style:{textAlign:"center"}},"Sign Up"),n.a.createElement("hr",null),n.a.createElement(b.a,{onSubmit:function(t){t.preventDefault();var a={firstName:o.firstName,lastName:o.lastName,email:o.email,password:o.password,password2:o.password2};e.registerUser(a,e.history)}},n.a.createElement(b.a.Row,null,n.a.createElement(b.a.Group,{as:S.a,controlId:"firstName"},n.a.createElement(b.a.Label,null,"First Name"),n.a.createElement(b.a.Control,{type:"firstName",placeholder:"First Name",autoComplete:"fname",onChange:i,value:o.firstName,error:m.firstName,className:h()("",{invalid:m.firstName})}),n.a.createElement("span",{className:"text-danger"},m.firstName)),n.a.createElement(b.a.Group,{as:S.a,controlId:"lastName"},n.a.createElement(b.a.Label,null,"Last Name"),n.a.createElement(b.a.Control,{type:"lastName",placeholder:"Last Name",autoComplete:"lname",onChange:i,value:o.lastName,error:m.lastName,className:h()("",{invalid:m.lastName})}),n.a.createElement("span",{className:"text-danger"},m.lastName))),n.a.createElement(b.a.Row,null,n.a.createElement(b.a.Group,{as:S.a,controlId:"email"},n.a.createElement(b.a.Label,null,"Email"),n.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email",onChange:i,autoComplete:"email",value:o.email,error:m.email,className:h()("",{invalid:m.email})}),n.a.createElement("span",{className:"text-danger"},m.email),n.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else."))),n.a.createElement(b.a.Row,null,n.a.createElement(b.a.Group,{as:S.a,controlId:"password"},n.a.createElement(b.a.Label,null,"Password"),n.a.createElement(b.a.Control,{type:"password",placeholder:"Password",autoComplete:"new-password",onChange:i,value:o.password,error:m.password,className:h()("",{invalid:m.password})}),n.a.createElement("span",{className:"text-danger"},m.password))),n.a.createElement(b.a.Row,null,n.a.createElement(b.a.Group,{as:S.a,controlId:"password2"},n.a.createElement(b.a.Label,null,"Confirm Password"),n.a.createElement(b.a.Control,{type:"password",placeholder:"Confirm Password",autoComplete:"new-password",onChange:i,value:o.password2,error:m.password2,className:h()("",{invalid:m.password2})}),n.a.createElement("span",{className:"text-danger"},m.password2))),n.a.createElement("hr",null),n.a.createElement(E.a,{className:"d-block mx-auto",variant:"success",type:"submit"},"Create Account")))))}))),L=Object(u.b)((function(e){return{auth:e.auth,errors:e.errors}}),{passwordReset:function(e,t){return function(a){v.a.post("/api/user/forgotpassword",e).then((function(e){return t.push("/Login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(c.h)((function(e){var t=Object(r.useState)({email:"",password:"",password2:"",errors:{}}),a=Object(d.a)(t,2),o=a[0],l=a[1],u=Object(c.g)();function i(e){e.persist(),l((function(t){return Object(p.a)(Object(p.a)({},t),{},{[e.target.id]:e.target.value,errors:{}})}))}Object(r.useEffect)((function(){e.auth.isAuthenticated&&u.push("/Dashboard")})),Object(r.useEffect)((function(){l((function(t){return Object(p.a)(Object(p.a)({},t),{},{errors:e.errors})}))}),[e.errors]);var m=o.errors;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{className:"d-block mx-auto img-fluid w-75",style:{opacity:"0.3"},src:k.a,alt:"Build A Base Logo"}),n.a.createElement(g.a,{className:"d-block mx-auto formCard"},n.a.createElement(g.a.Body,null,n.a.createElement(s.b,{to:"/Login",style:{float:"right",color:"black"}},"x"),n.a.createElement("h1",{style:{textAlign:"center"}},"Reset Password"),n.a.createElement("hr",null),n.a.createElement(b.a,{onSubmit:function(t){t.preventDefault();var a={email:o.email,password:o.password,password2:o.password2};e.passwordReset(a,e.history)}},n.a.createElement(b.a.Group,{controlId:"email"},n.a.createElement(b.a.Label,null,"Email"),n.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email",autoComplete:"email",onChange:i,value:o.email,error:m.email,className:h()("",{invalid:m.email||m.emailnotfound})}),n.a.createElement("span",{className:"text-danger"},m.email,m.emailnotfound)),n.a.createElement(b.a.Group,{controlId:"password"},n.a.createElement(b.a.Label,null,"Password"),n.a.createElement(b.a.Control,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:i,value:o.password,error:m.password,className:h()("",{invalid:m.password})}),n.a.createElement("span",{className:"text-danger"},m.password)),n.a.createElement(b.a.Group,{controlId:"password2"},n.a.createElement(b.a.Label,null,"Confirm Password"),n.a.createElement(b.a.Control,{type:"password",placeholder:"Confirm Password",autoComplete:"new-password",onChange:i,value:o.password2,error:m.password2,className:h()("",{invalid:m.password2})}),n.a.createElement("span",{className:"text-danger"},m.password2)),n.a.createElement("hr",null),n.a.createElement(E.a,{className:"d-block mx-auto",variant:"success",type:"submit"},"Save Password")))))}))),I=a(7),T=a.n(I),R=a(14),A=a(130),D=a(126),U=a(127),_=a(128),F=a(38),P=a(53),G=a(73),J=a.n(G);var H=Object(u.b)((function(e){return{auth:e.auth}}),{logoutUser:O})((function(e){var t=JSON.parse(localStorage.getItem("userName")),a=Object(c.g)();return Object(r.useEffect)((function(){e.auth.isAuthenticated||a.push("/Login")}),[a,e.auth.isAuthenticated]),n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,{style:{height:"10%"},sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(F.a.Brand,{href:"/Dashboard",className:"align-middle",style:{display:"flex",alignItems:"center"}},n.a.createElement("img",{src:J.a,width:"87",height:"73",className:"d-inline-block align-top",alt:"Build A Base Logo"})),n.a.createElement(F.a.Toggle,null),n.a.createElement(F.a.Collapse,{className:"justify-content-end"},n.a.createElement(P.a,{className:"mx-auto"},n.a.createElement(F.a.Text,{style:{fontStyle:"italic"}},"Welcome, ",t),n.a.createElement(P.a.Link,{href:"/Dashboard",style:{marginTop:"15px",marginBottom:"15px"}},"Dashboard"),n.a.createElement(P.a.Link,{style:{marginTop:"15px",marginBottom:"15px"},onClick:function(t){t.preventDefault(),e.logoutUser(),a.push("/Login")}},"Logout")))))})),z={getOneUser:function(e){return v.a.get("/api/user/"+e)},createUser:function(e){return v.a.post("/api/user",e)},updateUser:function(e){return v.a.put("/api/user",e)},getBasesByUser:function(e){return v.a.get("/api/base/id/"+e)},getBaseByName:function(e){return v.a.get("/api/base/name/"+e)},createBase:function(e){return v.a.post("/api/base",e)},updateBase:function(e){return v.a.put("/api/base",e)},deleteBase:function(e){return v.a.delete("/api/base/name/"+e)},getCustom:function(){var e=Object(R.a)(T.a.mark((function e(t){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBaseByName(t);case 2:if(!(a=e.sent).data){e.next=8;break}return r=v.a.patch("/api/custom/"+t,a.data.model),e.abrupt("return",r);case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),createCustom:function(e,t,a){return v.a.post("/api/custom/"+e,{model:t,data:a})},updateCustom:function(){var e=Object(R.a)(T.a.mark((function e(t,a){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBaseByName(t);case 2:if((r=e.sent).data){e.next=5;break}return e.abrupt("return",r);case 5:return e.abrupt("return",v.a.put("/api/custom/"+t,{model:r.data.model,data:a}));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}(),deleteCustom:function(){var e=Object(R.a)(T.a.mark((function e(t,a){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBaseByName(t);case 2:if((r=e.sent).data){e.next=5;break}return e.abrupt("return",r);case 5:return e.abrupt("return",v.a.patch("/api/custom/"+t+"/"+a,r.data.model));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},W=a(61),M=a.n(W),V=function(){var e=Object(R.a)(T.a.mark((function e(t,a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(R.a)(T.a.mark((function e(r,n){var o,l,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,l=a,s=!0,e.prev=3,e.next=6,z.getBaseByName(o).then(function(){var e=Object(R.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.data){e.next=7;break}return l>0&&(o=o.slice(0,o.length-1)),l++,o+=l.toString(),e.next=7,V(o,l).then((function(e){o=e}));case 7:case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),s=!1,n(e.t0);case 12:return e.prev=12,s&&r(o),e.finish(12);case 16:case 17:case"end":return e.stop()}}),e,null,[[3,8,12,16]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var r,n=new FileReader,o=!0,l="";n.onload=function(){var n=Object(R.a)(T.a.mark((function n(s){var c,u,i,m,p,d,f,h,b,E,g,w,y,v,N,x,O,j;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=function(e){for(var t="",a=e.length-1;a>=0;a--)if(/\d/.test(e[a]))t=e[a]+t;else{if("Z"!==e[a]){t=String.fromCharCode(e.charCodeAt(a)+1)+t,a>0&&(t=e.substring(0,a)+t);break}t="A"+t,0===a&&(t="A"+t)}return t},c=function(e){return{t:"s",v:e,r:"<t>"+e+"</t>",h:e,w:e}},n.prev=4,!((r=M.a.read(s.target.result,{type:"binary",cellDates:!0,dateNF:'yyyy"-"mm"-"dd'})).SheetNames.length>0)){n.next=50;break}i=r.Sheets[r.SheetNames[0]],m=i["!ref"],p=1,d=parseInt(m.substring(1)),f=m[0]+d.toString(),h=m[0]+(d+1).toString(),n.t0=T.a.keys(i);case 14:if((n.t1=n.t0()).done){n.next=30;break}if((b=n.t1.value)!==h){n.next=18;break}return n.abrupt("break",30);case 18:if("!"!==b[0]){n.next=21;break}return n.abrupt("continue",14);case 21:b!==f&&(i[f]=c("Column"+p.toString()),f=u(f)),""===i[b].v.trim()?i[b]=c("Column"+p.toString()):(i[b]=c(i[b].v.replace(/\./g,"").trim()),"$"===i[b].v[0]&&(i[b]=c(i[b].v.substring(1)))),p++,f=u(f),n.next=14;break;case 30:if(!((E=M.a.utils.sheet_to_json(i,{raw:!1,defval:""})).length>0)){n.next=46;break}for(v in g=E[0],w=[],g)y={fieldName:v,fieldType:"String"},g[v]&&("number"===typeof g[v]?y.fieldType="Number":"string"===typeof g[v]&&g[v].substr(0,10).match(/^\d{4}-\d{2}-\d{2}$/)&&(y.fieldType="Date")),w.push(y);for(N=t.name.substring(0,t.name.lastIndexOf(".")),x="",O=!1,j=0;j<N.length;j++)/[\w]|_/g.test(N[j])?(0===x.length&&/\d/g.test(N[j])&&(x="n"),O?(x+=N[j].toUpperCase(),O=!1):x+=N[j]):O=!0;return n.next=44,V(x,0).then(function(){var e=Object(R.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={creatorID:JSON.parse(localStorage.getItem("userID")),baseName:t,baseTitle:N,model:w},e.next=3,z.createBase(a).then((function(){return z.createCustom(a.baseName,a.model,E)})).then((function(){l=a.baseName})).catch(function(){var e=Object(R.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(413!==t.response.status){e.next=5;break}for(r=0;r<E.length;r++)z.createCustom(a.baseName,a.model,E[r]);e.next=7;break;case 5:return e.next=7,z.deleteBase(a.baseName).then((function(){throw t}));case 7:case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 44:n.next=47;break;case 46:throw new Error("Error converting spreadsheet data");case 47:n.next=51;break;case 50:throw new Error("No data in spreadsheet");case 51:n.next=58;break;case 54:n.prev=54,n.t2=n.catch(4),o=!1,a(n.t2);case 58:return n.prev=58,o&&e(l),n.finish(58);case 62:case 63:case"end":return n.stop()}}),n,null,[[4,54,58,62]])})));return function(e){return n.apply(this,arguments)}}(),n.readAsBinaryString(t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(""),s=Object(d.a)(l,2),c=s[0],u=s[1],i=Object(r.useState)(!1),m=Object(d.a)(i,2),p=m[0],f=m[1],h=Object(r.useState)(null),y=Object(d.a)(h,2),v=y[0],N=y[1],x=Object(r.useState)([{baseName:"default"}]),O=Object(d.a)(x,2),j=O[0],C=O[1];function B(){return L.apply(this,arguments)}function L(){return(L=Object(R.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getBasesByUser(JSON.parse(localStorage.getItem("userID"))).then((function(e){C(e.data)})).catch((function(){return[]}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){B()}),[]);var I=function(){u(""),o(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(H,null),n.a.createElement(w.a,{className:"d-block mx-auto img-fluid w-75",style:{opacity:"0.3"},src:k.a,alt:"Build A Base Logo"}),n.a.createElement(A.a,{show:a,onHide:I,"aria-labelledby":"alert-modal",centered:!0,style:{opacity:1}},n.a.createElement(A.a.Header,{closeButton:!0},n.a.createElement(A.a.Title,null,"Build-A-Base Alert:")),n.a.createElement(A.a.Body,null,c),n.a.createElement(A.a.Footer,{style:{display:"flex",justifyContent:"center"}},n.a.createElement(E.a,{variant:"success",onClick:I},"Close"))),n.a.createElement(A.a,{show:p,onHide:function(){N(null),f(!1)},"aria-labelledby":"import-modal",centered:!0,style:{opacity:1}},n.a.createElement(A.a.Header,{closeButton:!0},n.a.createElement(A.a.Title,{id:"import-modal"},"Import Spreadsheet")),n.a.createElement(A.a.Body,null,n.a.createElement(b.a,null,n.a.createElement(b.a.Group,null,n.a.createElement(b.a.File,{id:"fileToImportSelector",label:"Select file to import",onChange:function(e){e.target.files.length>0&&N(e.target.files[0])}})))),n.a.createElement(A.a.Footer,{style:{display:"flex",justifyContent:"center"}},n.a.createElement(E.a,{variant:"success",onClick:function(){f(!1),v?X(v).then((function(e){B()})).catch((function(e){console.log("Error reading file: ",e);var t="";e.message?t=": "+e.message:e.response&&e.response.statusText&&(t=": "+e.response.statusText),u("Error importing "+v.name+t),o(!0)})):(u("No file selected."),o(!0)),N(null)}},"Import"))),n.a.createElement(D.a,{className:"d-block mx-auto",style:{marginTop:"-70%",width:"80%"}},n.a.createElement(U.a,null,n.a.createElement(S.a,null,n.a.createElement("h1",{className:"float-left"},"Your Databases")),n.a.createElement(S.a,null,n.a.createElement(E.a,{className:"float-right",variant:"success",style:{marginTop:"20px"},onClick:function(){return f(!0)}},"Import"))),n.a.createElement(_.a,null,j.map((function(e){return n.a.createElement(g.a,{key:e.baseName,className:"p-3",bg:"info"},n.a.createElement(g.a.Link,{href:"/BaseTable/".concat(e.baseName),style:{color:"white"}},n.a.createElement(g.a.Title,{className:"font-weight-bold"},e.baseTitle),n.a.createElement(g.a.Text,{className:"font-weight-lighter"},e.baseName),n.a.createElement(g.a.Text,{className:"font-weight-lighter font-italic"},"Created on: ",new Date(e.creationDate).toLocaleDateString())))})))))},$=a(129),Z=(a(120),function(){var e=window.location.pathname.split("/")[2],t=Object(r.useState)(""),a=Object(d.a)(t,2),o=a[0],l=a[1],s=Object(r.useState)(0),c=Object(d.a)(s,2),u=c[0],i=c[1],m=Object(r.useState)("No filter"),p=Object(d.a)(m,2),f=p[0],h=p[1],y=Object(r.useState)(""),v=Object(d.a)(y,2),N=v[0],x=v[1],O=Object(r.useState)(""),j=Object(d.a)(O,2),C=j[0],B=j[1],L=[];for(var I in o[0])I.includes("_EMPTY")||L.push(I);function A(){return(A=Object(R.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getCustom(t).then((function(e){for(var t=0;t<e.data.length;t++)for(var a=0;a<Object.keys(e.data[t]).length;a++)if(Object.keys(e.data[t])[a].startsWith("_")){var r=Object.keys(e.data[t])[a];delete e.data[t][r]}l(e.data),B(e.data)})).catch((function(){return[]}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t=e.target.dataset.text,a=o;a.sort((function(e,a){return r=e[t],n=a[t],isNaN(r)||(r=parseInt(r),n=parseInt(n)),r<n?-1:r>n?1:0;var r,n})),l(a),i(u+1)}return Object(r.useEffect)((function(){!function(e){A.apply(this,arguments)}(e)}),[e]),n.a.createElement(n.a.Fragment,null,n.a.createElement(H,null),n.a.createElement(w.a,{className:"d-block mx-auto img-fluid w-75",style:{opacity:"0.3"},src:k.a,alt:"Build A Base Logo"}),n.a.createElement(D.a,{className:"d-block mx-auto container",style:{marginTop:"-70%",width:"80%"}},n.a.createElement("h1",{className:"h1"},e),n.a.createElement("span",{style:{display:"none"}},u),n.a.createElement(g.a,{className:"d-block mx-auto form"},n.a.createElement(g.a.Body,null,n.a.createElement(b.a,null,n.a.createElement("h4",{style:{marginBottom:"20px"}},"Filter Data"),n.a.createElement(b.a.Row,null,n.a.createElement(b.a.Group,{as:S.a,controlId:"formFilter.ControlSelect"},n.a.createElement(b.a.Label,null,"Column to filter on:"),n.a.createElement(b.a.Control,{as:"select",onChange:function(e){h(e.target.value)},style:{height:"50px"}},n.a.createElement("option",{key:0,value:"No filter"},"No filter"),L.map((function(e,t){return n.a.createElement("option",{key:t+1,value:e},e)})))),n.a.createElement(b.a.Group,{as:S.a,controlId:"formFilter.ControlInput"},n.a.createElement(b.a.Label,null,"Value to filter on:"),n.a.createElement(b.a.Control,{type:"text",name:"filter",onChange:function(e){x(e.target.value.toLowerCase())},style:{paddingLeft:"10px"},placeholder:"Enter value to filter on"}))),n.a.createElement(E.a,{variant:"success",type:"submit",className:"float-right formBtn",onClick:function(e){if(e.preventDefault(),"No filter"===f)l(C);else if(""===N)l(C);else{var t=[];C.forEach((function(e){e[f].toLowerCase().includes(N.toLowerCase())&&t.push(e)})),l(t)}}},"Filter")))),n.a.createElement("h4",{style:{textAlign:"center"}},"Click on column heading to sort by that column"),n.a.createElement(g.a,null,o.length?n.a.createElement($.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",style:{opacity:"1"}},n.a.createElement("thead",null,n.a.createElement("tr",null,L.map((function(e,t){return n.a.createElement("th",{key:t,className:"th","data-text":e,onClick:U,scope:"col",tabIndex:"0"},e)})))),n.a.createElement("tbody",null,o.map((function(e,t){return n.a.createElement("tr",{key:t},Object.keys(e).map((function(t,a){return n.a.createElement("td",{key:a},e[t])})))})))):n.a.createElement("h5",null,"No data to display"))))}),q=a(81),K=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,r=Object(q.a)(e,["component","auth"]);return n.a.createElement(c.b,Object.assign({},r,{render:function(e){return!0===a.isAuthenticated?n.a.createElement(t,e):n.a.createElement(c.a,{to:"/Login"})}}))})),Q=a(32),ee=a(80),te=a(121),ae={isAuthenticated:!1,user:{},loading:!1},re={},ne=Object(Q.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!te(t.payload),user:t.payload});case"USER_LOADING":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),oe=[ee.a],le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,se=Object(Q.e)(ne,{},le(Q.a.apply(void 0,oe))),ce=(a(122),JSON.parse(localStorage.getItem("jwtToken")));if(ce){N(ce);var ue=m()(ce);se.dispatch(x(ue));var ie=Date.now()/1e3;ue.exp<ie&&(se.dispatch(O()),window.location.href="./Login")}var me=function(){return n.a.createElement(u.a,{store:se},n.a.createElement(s.a,null,n.a.createElement(c.d,null,n.a.createElement(c.b,{exact:!0,path:"/Login"},n.a.createElement(C,null)),n.a.createElement(c.b,{exact:!0,path:"/SignUp"},n.a.createElement(B,null)),n.a.createElement(c.b,{exact:!0,path:"/ForgotPassword"},n.a.createElement(L,null)),n.a.createElement(K,{exact:!0,path:"/BaseTable/:basename",component:Z}),n.a.createElement(K,{exact:!0,path:"/Dashboard",component:Y}),n.a.createElement(c.b,{path:"/*"},n.a.createElement(C,null)))))};a(123);l.a.render(n.a.createElement(me,null),document.getElementById("root"))},24:function(e,t,a){e.exports=a.p+"static/media/ac512x512.2a577ff4.png"},71:function(e,t){},73:function(e,t,a){e.exports=a.p+"static/media/android-chrome-192x192.b24a016b.png"},83:function(e,t,a){e.exports=a(124)}},[[83,1,2]]]);
//# sourceMappingURL=main.768e34ec.chunk.js.map