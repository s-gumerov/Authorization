(this["webpackJsonphello-typescript"]=this["webpackJsonphello-typescript"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={nav_PC:"style_nav_PC__3upWx",container:"style_container__3aErH"}},,function(e){e.exports=JSON.parse('{"web":{"client_id":"956324017603-48seedvavr8deuvvk9eer2ek1qa4rmd0.apps.googleusercontent.com","project_id":"mypage-340814","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["https://s-gumerov.github.io/Authorization/"]}}')},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=n(6),i=(n(17),n(3)),u=n(2),l=n(4),j=n(10),d=n.n(j),m=(n(18),n(19),n(0)),h=function(e){var t=e.className,n=e.path,a=e.text;return Object(m.jsx)(o.b,{to:n,className:t,onClick:function(){return!0},children:a})},b=function(e){var t=e.navProps.map((function(e,t){return Object(m.jsx)(h,Object(l.a)({},e),t)}));return Object(m.jsx)("nav",{className:d.a.nav_PC,children:t})},O=(n(21),function(e){var t=e.navProps,n=Object(a.useState)("drawer-off"),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)("nav-container__menu"),u=Object(i.a)(o,2),j=u[0],d=u[1],b=t.map((function(e,t){return Object(m.jsx)(h,Object(l.a)({},e),t)}));return Object(m.jsxs)("div",{className:"nav-container unselectable",onTouchStart:function(e){d("nav-container__menu"===j?"nav-container__menu change":"nav-container__menu"),s("drawer-off"===r?"drawer-on":"drawer-off")},children:[Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("div",{className:"menu__top-line"}),Object(m.jsx)("div",{className:"menu__middle-line"}),Object(m.jsx)("div",{className:"menu__bottom-line"})]}),Object(m.jsx)("div",{className:"drawer-on"===r?"nav-container_lock":"",onClick:function(){return s("drawer-off")},children:Object(m.jsxs)("div",{className:r,children:[Object(m.jsx)("div",{className:"user-data",children:Object(m.jsx)("div",{className:"user-data__avatar"})}),b]})})]})}),p=function(){var e="header-link",t={navProps:[{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",className:e},{text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",path:"/cat",className:e},{text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/sign-up",className:e}]};return window.screen.width<767?Object(m.jsx)(O,Object(l.a)({},t)):Object(m.jsx)(b,Object(l.a)({},t))},g=(n(22),function(){return Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"footer-wrapper",children:"footer"})})}),x=(n(23),function(){return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("h2",{children:"Hello, this main page"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam, ipsum ipsam et nisi minima numquam ut magnam, laborum aliquam iste eum delectus in ea sed unde, id sequi quaerat?"})]})}),f=function(){return Object(m.jsx)("h2",{children:"Category"})},v=(n(24),function(e){var t=e.onShowPassword,n=e.onHidePassword,c=Object(a.useState)("icon-unchecked"),r=Object(i.a)(c,2),s=r[0],o=r[1];return Object(m.jsxs)("div",{onClick:function(e){"icon-unchecked"===s?(o("icon-checked"),t()):(o("icon-unchecked"),n())},className:"show-password",children:[Object(m.jsx)("div",{className:s}),"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"]})}),_=function(e){var t=e.message,n=e.error;return Object(m.jsx)("i",{className:"".concat(n&&"form-prompt_error"),children:t})},N=function(e){var t=e.id,n=e.type,c=e.name,r=e.className,s=e.mask,o=e.title,u=e.pattern,l=Object(a.useState)(4),j=Object(i.a)(l,2),d=j[0],h=j[1];return Object(m.jsx)("input",{id:t,type:n,name:c,className:r,pattern:u,placeholder:s,title:o,defaultValue:s,onChange:function(e){e.currentTarget.value.length<=3?h(4):h(e.currentTarget.value.length+1);var t=s,n=0,a=t.replace(/\D/g,""),c=e.currentTarget.value.replace(/\D/g,"");a.length>=c.length&&(c=a),e.currentTarget.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&n<c.length?c.charAt(n++):n>=c.length?"":e}))},onBlur:function(e){var t;(t=e.currentTarget).value.length<=4&&(t.value=s)},onClick:function(e){return e.currentTarget.setSelectionRange(d,d)}})},w=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),h=d[0],b=d[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),g=p[0],x=p[1],f=Object(a.useState)(!0),w=Object(i.a)(f,2),k=w[0],P=w[1],S=Object(a.useState)({id:"",message:"",error:!1}),y=Object(i.a)(S,2),C=y[0],T=y[1],z=Object(a.useRef)(null),E=function(e){var t,n,a=(t=e.target.id,n=e.target.value,"userName"===t?{message:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043a\u0440\u043e\u043c\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0438 \u0434\u0435\u0444\u0438\u0441\u0430",checkedText:n.match(/[a-zA-Z\u0430-\u044f\u0410-\u042f- ]/g)}:"userEmail"===t?{message:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c email",checkedText:n.match(/[a-zA-Z0-9.@]/g)}:"userPhone"===t?{message:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043a\u0440\u043e\u043c\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0438 \u0434\u0435\u0444\u0438\u0441\u0430",checkedText:n.match(/[0-9()-+ ]/g)}:"userPassword"===t?{message:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0438 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430, \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",checkedText:n.match(/[a-zA-Z0-9]/g)}:void console.log("please add input:".concat(t," in this function"))),r=a.message,s=a.checkedText,o=!0,i=!0,l=function(t,n){T({id:e.target.id,message:r,error:t}),function(e,t){"userName"===e&&c(t),"userEmail"===e&&u(t),"userPhone"===e&&b(t),"userPassword"===e&&x(t)}(e.target.id,n)};null===s&&e.target.value.length>0?l(o,!1):null!==s&&s.length>0?s.length===e.target.value.length?l(!1,i):l(o,!1):e.target.value.length<1?l(!1,!1):l(o,!1)},A={onShowPassword:function(){var e;"password"===(null===(e=z.current)||void 0===e?void 0:e.type)&&(z.current.type="text")},onHidePassword:function(){var e;"text"===(null===(e=z.current)||void 0===e?void 0:e.type)&&(z.current.type="password")}};return Object(a.useEffect)((function(){P(!0!==n||!0!==o||!0!==h||!0!==g)}),[n,o,h,g]),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!1===k?console.log("succes"):console.log("how could you press the button? it should be blocked")},className:"authorization-form",children:[Object(m.jsx)("div",{className:"form-prompt",children:"userName"===C.id&&Object(m.jsx)(_,Object(l.a)({},C))}),Object(m.jsx)("label",{htmlFor:"userName",children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{type:"text",name:"userName",id:"userName",className:"authorization-form_input-border-none",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:E,onClick:function(){return T({id:"userName",message:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043a\u0440\u043e\u043c\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0438 \u0434\u0435\u0444\u0438\u0441\u0430",error:!1})}}),Object(m.jsx)("div",{className:"form-prompt",children:"userEmail"===C.id&&Object(m.jsx)(_,Object(l.a)({},C))}),Object(m.jsx)("label",{htmlFor:"userEmail",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"userEmail",id:"userEmail",className:"authorization-form_input-border-none",placeholder:"email@email.com",onChange:E,onClick:function(){return T({id:"userEmail",message:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c email",error:!1})}}),Object(m.jsx)("div",{className:"form-prompt",children:"userPhone"===C.id&&Object(m.jsx)(_,Object(l.a)({},C))}),Object(m.jsxs)("div",{className:"authorization-form__tel-wrapper",onChange:E,onClick:function(){return T({id:"userPhone",message:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c 11 \u0446\u0438\u0444\u0440, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438, \u0434\u0435\u0444\u0438\u0441 \u0438 \u0437\u043d\u0430\u043a \u043f\u043b\u044e\u0441",error:!1})},children:[Object(m.jsx)("label",{htmlFor:"userPhone",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(m.jsx)(N,Object(l.a)({},{id:"userPhone",type:"tel",name:"userPhone",className:"authorization-form_input-border-none",mask:"+7 (___) ___ ____",title:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043a\u0440\u043e\u043c\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0438 \u0434\u0435\u0444\u0438\u0441\u0430",pattern:"+7 s?[(]{0,1}9[0-9]{2}[)]{0,1}s?d{3}[ ]{0,1}d{4}[ ]{0,1}",labelText:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}))]}),Object(m.jsx)("div",{className:"form-prompt",children:"userPassword"===C.id&&Object(m.jsx)(_,Object(l.a)({},C))}),Object(m.jsx)("label",{htmlFor:"userPassword",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)("input",{type:"password",name:"userPassword",id:"userPassword",className:"authorization-form_input-border-none",placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",ref:z,onChange:E,onClick:function(){return T({id:"userPassword",message:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0438 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430, \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",error:!1})}}),Object(m.jsx)(v,Object(l.a)({},A)),Object(m.jsx)("button",{type:"submit",disabled:!!k,className:"authorization-form__btn ".concat(!k&&"authorization-form_active-btn"),children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})},k=function(){return Object(m.jsxs)("div",{className:"authorization-container unselectable",children:[Object(m.jsx)("h2",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("p",{children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",Object(m.jsx)(h,Object(l.a)({},{text:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-in",className:"form-link"}))]}),Object(m.jsx)(w,{})]})},P=n(11),S=n(12),y=function(e){var t=c.a.useState({userName:"",userAvatar:""}),n=Object(i.a)(t,2),a=n[0],r=n[1],s=S.web.client_id;console.log(s);var o=function(e){void 0!==e.profileObj&&(localStorage.setItem("googleSignIn",JSON.stringify(e.profileObj)),r({userName:e.profileObj.name,userAvatar:e.profileObj.imageUrl}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P.GoogleLogin,{clientId:s,onSuccess:o,onFailure:o,cookiePolicy:"single_host_origin",children:Object(m.jsx)("span",{children:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google"})}),Object(m.jsxs)("h3",{children:[" \u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u043a\u0430\u043a ",a.userName]}),Object(m.jsx)("img",{src:a.userAvatar})]})},C=function(){return Object(m.jsxs)("div",{className:"sign-in",children:[Object(m.jsx)("h2",{children:"SignIn"}),Object(m.jsx)(y,{})]})},T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),h=(d[0],d[1]);return Object(m.jsxs)("div",{className:"container",onWheel:function(e){"wheel"===e.nativeEvent.type?h(!0):h(!1)},onTouchMove:function(e){c(!0)},onTouchStart:function(e){c(!1),l(e.changedTouches[0].screenY)},onTouchEnd:function(e){!0===n&&(o<e.changedTouches[0].screenY?h(!0):h(!1))},children:[Object(m.jsx)("header",{children:Object(m.jsx)(p,{})}),Object(m.jsx)("main",{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"https://s-gumerov.github.io/",element:Object(m.jsx)(x,{})}),Object(m.jsx)(u.a,{path:"https://s-gumerov.github.io/sign-up",element:Object(m.jsx)(k,{})}),Object(m.jsx)(u.a,{path:"https://s-gumerov.github.io/cat",element:Object(m.jsx)(f,{})}),Object(m.jsx)(u.a,{path:"/",element:Object(m.jsx)(x,{})}),Object(m.jsx)(u.a,{path:"/cat",element:Object(m.jsx)(f,{})}),Object(m.jsx)(u.a,{path:"/sign-in",element:Object(m.jsx)(C,{})}),Object(m.jsx)(u.a,{path:"/sign-up",element:Object(m.jsx)(k,{})})]})}),Object(m.jsx)(g,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(T,{})})}),document.getElementById("root")),z()}],[[25,1,2]]]);
//# sourceMappingURL=main.3fc88d90.chunk.js.map