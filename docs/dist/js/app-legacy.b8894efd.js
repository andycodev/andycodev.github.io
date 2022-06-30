(function(){"use strict";var t={8721:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-1",dense:"",fixed:"",dark:""}},[n("v-toolbar-title",[t._v("andycodev")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("RepositoriesComponent"),n("ContactComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"},attrs:{transition:"fade-transition"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"indigo accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12 mt-3",left:"",md:"3"}},[a("v-avatar",{attrs:{color:"",size:"200"}},[a("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"5"}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),a("center",[a("h2",{staticClass:"efect-write"},[t._v("Desarrollador Fullstack")])]),a("p",{staticClass:"mt-3"},[t._v(" 👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad Peruana Unión - Lima. ")]),a("p",{staticClass:"mb-3"},[t._v("🎯 Enfocado al desarrollo web.")]),a("v-btn",{attrs:{elevation:"2",large:""},on:{click:function(e){return t.openPage()}}},[t._v("Linkedin")])],1)],1)],1)},i=[],c={name:"HomeComponent",data:function(){return{}},methods:{openPage:function(){window.open("https://www.linkedin.com/in/andygiampierreordonezvega/","_blank")}}},l=c,d=n(1001),u=n(3453),p=n.n(u),m=n(1578),v=n(8704),f=n(2102),g=n(9846),h=n(9839),C=n(2877),b=(0,d.Z)(l,s,i,!1,null,"f220b55c",null),w=b.exports;p()(b,{VAvatar:m.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VImg:h.Z,VRow:C.Z});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},y=[],Z={data:function(){return{reverseInfo:!1,experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS UPeU PatmOS. Desarrollar requerimientos de módulos financieros."}]}},methods:{reverseExperience:function(){this.experiences.reverse()}}},x=Z,V=n(2371),k=n(7118),T=n(2561),R=n(2483),S=n(6996),A=(0,d.Z)(x,_,y,!1,null,"64731890",null),E=A.exports;p()(A,{VCard:V.Z,VCardText:k.ZB,VCardTitle:k.EB,VCol:f.Z,VContainer:g.Z,VRow:C.Z,VSwitch:T.Z,VTimeline:R.Z,VTimelineItem:S.Z});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"light",large:"","text-color":"grey darken-3"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)}))],2)],1)],1)},j=[],U={data:function(){return{skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND","PHP","LARAVEL","MYSQL","ORACLE"]}}},B=U,I=n(8675),L=n(4926),O=(0,d.Z)(B,P,j,!1,null,"9b396672",null),D=O.exports;p()(O,{VChip:I.Z,VCol:f.Z,VContainer:g.Z,VIcon:L.Z,VRow:C.Z});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},G=[],H={data:function(){return{redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}},methods:{openPage:function(t){window.open("".concat(t),"_blank")}}},F=H,W=n(6501),$=(0,d.Z)(F,M,G,!1,null,"460d0aad",null),q=$.exports;p()($,{VBtn:v.Z,VCol:f.Z,VFooter:W.Z,VRow:C.Z});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Repositorios 📂")]),n("p",{staticClass:"text-center grey--text"},[t._v("Usuarios Github: andycodev | giampierre")]),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("p",{staticClass:"text-left grey--text"},[t._v(" Últimos repositorios | "),n("a",{attrs:{href:"https://github.com/"+t.selectionUser+"?tab=repositories",target:"_blank"}},[t._v("ver todos")]),n("v-icon",[t._v("mdi-arrow-up-right")])],1)]),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"andycodev",dense:"",solo:""},on:{change:function(e){return t.onChange()}},model:{value:t.selectionUser,callback:function(e){t.selectionUser=e},expression:"selectionUser"}})],1)],1),n("v-row",t._l(t.sortRopositories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pt-2 pl-2 pb-2 card-mh",attrs:{color:"indigo lighten-5",elevation:"2",light:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),n("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",small:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" visitar repositorio ")])],1)],1)],1)})),1)],1)],1)],1)},N=[],Y=n(7906),J=n(6198),Q=(n(1539),n(1249),n(8309),n(4916),n(3123),n(2526),n(1817),n(7042),n(2707),{name:"RepositoriesComponent",data:function(){return{repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}},mounted:function(){this.getRepositories()},methods:{onChange:function(){this.getRepositories()},getRepositories:function(){var t=this;return(0,J.Z)((0,Y.Z)().mark((function e(){var n;return(0,Y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t.selectionUser,"/repos"));case 3:return n=e.sent,e.next=6,n.json();case 6:t.repositories=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},openPage:function(t){window.open("".concat(t),"_blank")}},computed:{seteandoRepositories:function(){return this.repositories.map((function(t){var e={};return e.name=t.name,e.date=t.created_at.split("T")[0],e.update=t.updated_at.split("T")[0],e.description=t.description,e.url=t.html_url,e.clone=t.clone_url,e}))},sortRopositories:function(){return this.seteandoRepositories.sort((function(t,e){return Date.parse(t.date)-Date.parse(e.date)})).reverse().slice(0,4)}}}),K=Q,X=n(660),tt=(0,d.Z)(K,z,N,!1,null,"156de7d0",null),et=tt.exports;p()(tt,{VBtn:v.Z,VCard:V.Z,VCardActions:k.h7,VCardSubtitle:k.Qq,VCardTitle:k.EB,VCol:f.Z,VContainer:g.Z,VIcon:L.Z,VRow:C.Z,VSelect:X.Z});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Contacto 📲")]),n("v-textarea",{attrs:{autocomplete:"mensaje",label:"Mensaje",placeholder:"Por favor escrbir al menos cuatro caracteres."},on:{keyup:function(e){return t.messageWhatsapp(t.message)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t.visualizeButton?n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.sendMessageWhatsapp()}}},[t._v(" Enviar mensaje "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-whatsapp")])],1):t._e()],1)],1)],1)},at=[],ot={name:"ConatactComponent",data:function(){return{message:"",apiWhatsapp:""}},mounted:function(){},methods:{messageWhatsapp:function(t){this.apiWhatsapp="https://api.whatsapp.com/send?phone=+51999968702&text=".concat(t)},sendMessageWhatsapp:function(){window.open(this.apiWhatsapp,"_blank")}},computed:{visualizeButton:function(){return this.message.length>=4}}},rt=ot,st=n(8177),it=(0,d.Z)(rt,nt,at,!1,null,"f8b039ea",null),ct=it.exports;p()(it,{VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VIcon:L.Z,VRow:C.Z,VTextarea:st.Z});var lt={name:"App",components:{HomeComponent:w,ExperienceComponent:E,SkillsComponent:D,FooterComponent:q,RepositoriesComponent:et,ContactComponent:ct},data:function(){return{loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}},mounted:function(){this.cargarContenido()},methods:{cargarContenido:function(){var t=this;this.expand=!0,setTimeout((function(){t.loading=!0}),1e3)},openPage:function(t){window.open("".concat(t),"_blank")}}},dt=lt,ut=n(3167),pt=n(4005),mt=n(4768),vt=n(5212),ft=n(9762),gt=n(7921),ht=(0,d.Z)(dt,o,r,!1,null,null,null),Ct=ht.exports;p()(ht,{VApp:ut.Z,VAppBar:pt.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VIcon:L.Z,VMain:mt.Z,VProgressLinear:vt.Z,VRow:C.Z,VSpacer:ft.Z,VToolbarTitle:gt.qW});var bt=n(9132);a.Z.use(bt.Z);var wt=new bt.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:wt,render:function(t){return t(Ct)}}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],r=t[d][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0,283:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],i=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var d=c(n)}for(e&&e(a);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},a=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[997,840,86,611,125,283],(function(){return n(8721)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.b8894efd.js.map