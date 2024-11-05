"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[2914],{77503:function(e,t,l){l.d(t,{S:function(){return k}});var n=l(64572),o=l(15785),i=l(15007),a=l(95223),s=l(75900),r=l.n(s),d=l(53971),c=l(68457),u=l(52078),p=l(67500),v=l(1895),m=l(34634),g=l(1254),f=l(47549),h=l(43925),w=l(32647),y=l(65480),b=l(47720),O=l(59273),x=l(78980),C=l(79555),Z=l(65034);function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function D(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach((function(t){(0,n.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const j=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var I={name:"14s3c4g",styles:"display:flex;gap:32px;width:100%;flex-direction:column"},P={name:"h8f25w",styles:"color:var(--spectrum-global-color-gray-800);display:inline-flex"},A={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"},N={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const k=e=>{var t,l;let{showCreateForm:n,setShowCreateForm:s,isCreateNewCredential:S,setIsCreateNewCredential:F,setIsPrevious:U,formData:E,setFormData:z}=e;const{getCredentialData:M}=(0,i.useContext)(Z.Z),T=M,{0:_,1:L}=(0,i.useState)(!1),{0:B,1:V}=(0,i.useState)(!1),{0:q,1:H}=(0,i.useState)({}),{0:J,1:Q}=(0,i.useState)(""),{0:Y,1:$}=(0,i.useState)(!1),{0:R,1:W}=(0,i.useState)([]),{0:G,1:K}=(0,i.useState)(!1),{0:X,1:ee}=(0,i.useState)(!1),{0:te,1:le}=(0,i.useState)(!1),{0:ne,1:oe}=(0,i.useState)(!1),{0:ie,1:ae}=(0,i.useState)(),{selectedOrganization:se,template:re,previousProjectDetail:de}=(0,i.useContext)(Z.Z),ce=null==T?void 0:T[k],ue=null==ce||null===(t=ce.children)||void 0===t?void 0:t.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp")))));(0,i.useEffect)((()=>{var e;null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser()?setTimeout((()=>{L(!1)}),1e3):L(!0)}),[null===(l=window.adobeIMS)||void 0===l?void 0:l.isSignedInUser()]),(0,i.useEffect)((()=>{n&&V(!1)}),[n]),(0,i.useEffect)((()=>{(()=>{const e={},t={label:"Language",selectOptions:[]},l={label:"products",productList:[]};null==ce||ce.children.forEach((n=>{let{type:i,props:a}=n;var s,r;i===m.i&&null!=a&&a.children&&(t.required=a.required||!1,(s=t.selectOptions).push.apply(s,(0,o.Z)([].concat(a.children).map((e=>{let{props:{title:t,href:l}}=e;return{title:t,href:l}})))),z((e=>{var t,l;return D(D({},e),Array.isArray(a.children)?null:{Download:null===(t=a.children)||void 0===t||null===(l=t.props)||void 0===l?void 0:l.title})}))),i===x.QI&&null!=a&&a.children&&(r=l.productList).push.apply(r,(0,o.Z)([].concat(a.children).map((e=>{let{props:{label:t,icon:l}}=e;return{label:t,icon:l}})))),e[i]=D(D({},a),{},{required:i===p.M||(null==a?void 0:a.required)})})),t.selectOptions.length&&(e[g.U]=t,1===t.selectOptions.length&&z((e=>{var l,n;return D(D({},e),{},{Download:null===(l=t.selectOptions[0])||void 0===l?void 0:l.title,zipUrl:null===(n=t.selectOptions[0])||void 0===n?void 0:n.href})}))),null!=l&&l.productList.length&&(e[x.xs]=l);const n=!(null==de||!de.count);ee(!!n),W(e)})()}),[]),(0,i.useEffect)((()=>{const e=j.test(E.CredentialName),t=ce.children.some((e=>e.type===v.d));let l;t?E.AllowedOrigins&&(l=(0,c.Jv)(E.AllowedOrigins)):l=!0,ae(l);const n=e&&(!t||l)&&!0===E.Agree;K(n)}),[E]);const pe=(e,t)=>{let l;if(l="Download"===t?e.title:"Downloads"===t||"Agree"===t?e.target.checked:e.target.value,z((e=>D(D({},e),{},{[t]:l}))),"Downloads"===t&&pe(null==he?void 0:he.selectOptions[0],"Download"),"Download"===t){var n;const e=null==R||null===(n=R[g.U])||void 0===n?void 0:n.selectOptions.find((e=>e.title===l));e&&z((t=>D(D({},t),{},{zipUrl:e.href})))}};(0,i.useEffect)((()=>{X&&(U(!0),s(!0))}),[X]);const ve=null==R?void 0:R[u.v],me=null==R?void 0:R[p.M],ge=null==R?void 0:R[v.d],fe=null==R?void 0:R[m.i],he=null==R?void 0:R[g.U],we=null==R?void 0:R[x.QI],ye=null==R?void 0:R[x.xs],be=null==R?void 0:R[h.O];return(0,a.tZ)(i.default.Fragment,null,n&&!_&&(0,a.tZ)("div",{className:r()(null==ce?void 0:ce.className),css:N,"data-cy":"credential-form"},(0,a.tZ)("div",{css:(0,a.iv)("display:flex;flex-direction:column;gap:48px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){padding:0;width:100%;}","")},(0,a.tZ)("div",{css:A},(null==ce?void 0:ce.title)&&(0,a.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==ce?void 0:ce.title),(null==ce?void 0:ce.paragraph)&&(0,a.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==ce?void 0:ce.paragraph),(0,a.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:P,onClick:()=>le(!0)},"developer"===se.type?"You're creating this credential in your personal developer organization":(0,a.tZ)(i.default.Fragment,null,"You're creating this credential in [",(0,a.tZ)("b",null,null==se?void 0:se.name),"]."),(0,a.tZ)(C.c,{isShow:te,setIsShow:le})))),(0,a.tZ)("div",{css:(0,a.iv)("display:flex;gap:35px;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){flex-direction:column;padding-left:0;}","")},(0,a.tZ)("div",{css:(0,a.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){width:100%;}","")},(0,a.tZ)("div",{css:I},me&&(0,a.tZ)(p.M,{nameProps:me,isFormValue:ue,formData:E,handleChange:pe}),ge&&(0,a.tZ)(v.d,{originsProps:ge,isFormValue:ue,formData:E,handleChange:pe,isAllowedOriginsValid:ie}),fe&&he&&(0,a.tZ)(m.i,{downloadsProp:fe,type:"Downloads",formData:E,handleChange:pe}),E.Downloads&&he&&(0,a.tZ)(g.U,{downloadProp:he,isFormValue:ue,handleChange:pe}),(0,a.tZ)(x.QI,{products:we,product:ye}),be&&(0,a.tZ)(h.O,{formData:E,adobeDeveloperConsole:be,handleChange:pe}),(0,a.tZ)(w.p,{createCredential:async()=>{var e,t;const l=null===(e=window.adobeIMS)||void 0===e||null===(t=e.getTokenFromStorage())||void 0===t?void 0:t.token;l||console.log("User not logged in"),L(!0),s(!1);const n=re.apis.map((e=>({code:e.code,credentialType:e.credentialType,flowType:e.flowType,licenseConfigs:Array.isArray(e.licenseConfigs)&&e.licenseConfigs.length>0?[D(D({},e.licenseConfigs[0]),{},{op:"add"})]:[]}))),o={projectName:E.CredentialName,description:"created for get credential",metadata:{domain:E.AllowedOrigins},orgId:se.code,apis:n};try{var i,a,r;const e="/templates/install/"+re.id,t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"x-api-key":null===(i=window)||void 0===i||null===(a=i.adobeIMS)||void 0===a||null===(r=a.adobeIdData)||void 0===r?void 0:r.client_id,Accept:"application/json"},body:JSON.stringify(o)}),n=await(null==t?void 0:t.json());if(t.ok)H(n),$(!0),oe(!0),L(!1);else{const e=n.errors[0].message.match(/\((\{.*\})\)/)[1],t=JSON.parse(e);d=t.messages[0].message,L(!1),oe(!0),K(!1),Q(d),s(!0),V(!0)}}catch(c){s(!0),L(!1),oe(!0),Q(c.message),V(!0)}var d},isValid:G,setIsCreateNewCredential:F,isCreateNewCredential:S}))),ve?(0,a.tZ)(f.c,{sideContent:null==ve?void 0:ve.children,SideComp:u.v}):null)),ne&&(0,a.tZ)(i.default.Fragment,null,(0,a.tZ)(d.F,{customDisableFunction:oe,message:n&&!Y?J:!B&&Y&&"Your credentials were created successfully.",variant:B||n&&!Y?"error":"success",disable:5e3})),_&&!Y&&!B&&!n&&(0,a.tZ)(b.g,{credentials:ce,isCreateCredential:!0,downloadStatus:E.Downloads}),B&&!n&&!Y&&(0,a.tZ)(O.I,{errorMessage:null==T?void 0:T[O.I]}),Y&&!n&&(0,a.tZ)(y.Z,{response:q,formData:E,handleRestart:()=>{s(!0),$(!1),F(!0),ee(!0),z({})}}))}}}]);
//# sourceMappingURL=987e9e88-f59fe2100efe83c9a48c.js.map