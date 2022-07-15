(function(){"use strict";var t={2857:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-1",elevation:"2",dense:"",fixed:"",dark:"",rounded:"b-xl"}},[n("v-toolbar-title",[t._v("[ andycodev ]")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("RepositoriesComponent"),n("ContactComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"},attrs:{transition:"fade-transition"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"blue ligthen-5",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mt-5"},[r("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12 mt-3",left:"",md:"3"}},[r("v-avatar",{attrs:{color:"",size:"200"}},[r("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),r("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"5"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),r("center",[r("h2",{staticClass:"efect-write"},[t._v("Desarrollador Fullstack")])]),r("p",{staticClass:"mt-3"},[t._v(" Analista Desarrollador en la Universidad Peruana Unión - Lima. Enfocado en el desarrollo web, a la resolución de problemas y acostumbrado a trabajar en equipo. ")]),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"indigo lighten-1",dark:""},on:{click:function(e){t.show=!t.show}}},"v-btn",o,!1),n),[t._v(" Currículum "),r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)]}}])},[r("v-list",t._l(t.items,(function(e,n){return r("v-list-item",{key:n,staticClass:"text-center"},[r("v-list-item-title",{staticClass:"cursor",on:{click:function(n){return t.opcionesCurriculum(e.value)}}},[t._v(t._s(e.title)+" "),r("v-icon",{attrs:{size:"medium"}},[t._v(t._s(e.icon))])],1)],1)})),1)],1)],1)],1)],1)},s=[],c=(n(2222),{name:"HomeComponent",data:function(){return{items:[{title:"Visualizar",value:"v",icon:"mdi-eye"},{title:"Descargar",value:"d",icon:"mdi-download"}],show:!1,linkBaseCurriculumGitHUB:"https://github.com/andycodev/curriculum-vitae/",nombreCurriculum:"CV_AndyGiampierreOrdo%C3%B1ezVega.pdf"}},methods:{descargarCurriculum:function(){window.open("".concat(this.linkBaseCurriculumGitHUB,"raw/main/").concat(this.nombreCurriculum),"_self")},visualizarCurriculum:function(){window.open("".concat(this.linkBaseCurriculumGitHUB,"blob/main/").concat(this.nombreCurriculum),"_blank")},opcionesCurriculum:function(t){"v"===t&&this.visualizarCurriculum(),"d"===t&&this.descargarCurriculum()}}}),l=c,u=n(1001),d=n(3453),m=n.n(d),p=n(1578),v=n(8704),f=n(2102),h=n(9846),g=n(4926),C=n(9839),b=n(3920),_=n(8681),w=n(4741),y=n(8904),Z=n(2877),V=(0,u.Z)(l,i,s,!1,null,"0e6dd8b8",null),x=V.exports;m()(V,{VAvatar:p.Z,VBtn:v.Z,VCol:f.Z,VContainer:h.Z,VIcon:g.Z,VImg:C.Z,VList:b.Z,VListItem:_.Z,VListItemTitle:w.V9,VMenu:y.Z,VRow:Z.Z});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},T=[],A={name:"ExperienceComponent",data:function(){return{experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. Desarrollar requerimientos y migraciones de módulos financieros."}]}},methods:{reverseExperience:function(){this.experiences.reverse()}}},R=A,S=n(2371),B=n(7118),E=n(2561),j=n(2483),U=n(6996),L=(0,u.Z)(R,k,T,!1,null,"4a721cce",null),P=L.exports;m()(L,{VCard:S.Z,VCardText:B.ZB,VCardTitle:B.EB,VCol:f.Z,VContainer:h.Z,VRow:Z.Z,VSwitch:E.Z,VTimeline:j.Z,VTimelineItem:U.Z});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"indigo lighten-5",large:"","text-color":"grey darken-4"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)})),void 0],2)],1)],1)},O=[],D={name:"SkillsComponent",data:function(){return{skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND","PHP","LARAVEL","MYSQL","ORACLE"]}}},G=D,H=n(8675),M=(0,u.Z)(G,I,O,!1,null,"3cd7782a",null),z=M.exports;m()(M,{VChip:H.Z,VCol:f.Z,VContainer:h.Z,VIcon:g.Z,VRow:Z.Z});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},W=[],$={name:"FooterComponent",data:function(){return{redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}},methods:{openPage:function(t){window.open("".concat(t),"_blank")}}},q=$,N=n(6501),Y=(0,u.Z)(q,F,W,!1,null,"29b35088",null),J=Y.exports;m()(Y,{VBtn:v.Z,VCol:f.Z,VFooter:N.Z,VRow:Z.Z});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Repositorios 📂")]),n("p",{staticClass:"text-center grey--text"},[t._v("Usuarios Github: andycodev | giampierre")]),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("p",{staticClass:"text-left grey--text"},[t._v(" Últimos repositorios | "),n("a",{attrs:{href:"https://github.com/"+t.selectionUser+"?tab=repositories",target:"_blank"}},[t._v("ver todos")]),n("v-icon",[t._v("mdi-arrow-up-right")])],1)]),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"andycodev",dense:"",solo:""},on:{change:function(e){return t.onChange()}},model:{value:t.selectionUser,callback:function(e){t.selectionUser=e},expression:"selectionUser"}})],1)],1),n("v-row",t._l(t.sortRopositories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pt-2 pl-2 pb-2 card-mh",attrs:{color:"grey lighten-5",elevation:"2",light:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),n("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",small:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" visitar repositorio ")])],1),n("span",{staticClass:"ml-5 grey--text"},[t._v("Fecha de creación: "+t._s(e.date))])],1)],1)})),1)],1)],1)],1)},K=[],X=n(7906),tt=n(6198),et=(n(1539),n(1249),n(8309),n(4916),n(3123),n(2526),n(1817),n(7042),n(2707),{name:"RepositoriesComponent",data:function(){return{repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}},mounted:function(){this.getRepositories()},methods:{onChange:function(){this.getRepositories()},getRepositories:function(){var t=this;return(0,tt.Z)((0,X.Z)().mark((function e(){var n;return(0,X.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t.selectionUser,"/repos"));case 3:return n=e.sent,e.next=6,n.json();case 6:t.repositories=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},openPage:function(t){window.open("".concat(t),"_blank")}},computed:{seteandoRepositories:function(){return this.repositories.map((function(t){var e={};return e.name=t.name,e.date=t.created_at.split("T")[0],e.update=t.updated_at.split("T")[0],e.description=t.description,e.url=t.html_url,e.clone=t.clone_url,e}))},sortRopositories:function(){return this.seteandoRepositories.sort((function(t,e){return Date.parse(t.date)-Date.parse(e.date)})).reverse().slice(0,4)}}}),nt=et,rt=n(9138),ot=(0,u.Z)(nt,Q,K,!1,null,"30b64dad",null),at=ot.exports;m()(ot,{VBtn:v.Z,VCard:S.Z,VCardActions:B.h7,VCardSubtitle:B.Qq,VCardTitle:B.EB,VCol:f.Z,VContainer:h.Z,VIcon:g.Z,VRow:Z.Z,VSelect:rt.Z});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Contacto 📲")]),n("v-textarea",{attrs:{autocomplete:"mensaje",label:"Mensaje",placeholder:"Por favor escrbir al menos cuatro caracteres."},on:{keyup:function(e){return t.messageWhatsapp(t.message)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t.visualizeButton?n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.sendMessageWhatsapp()}}},[t._v(" Enviar mensaje "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-whatsapp")])],1):t._e()],1)],1)],1)},st=[],ct={name:"ConatactComponent",data:function(){return{message:"",apiWhatsapp:""}},mounted:function(){},methods:{messageWhatsapp:function(t){this.apiWhatsapp="https://api.whatsapp.com/send?phone=+51999968702&text=".concat(t)},sendMessageWhatsapp:function(){window.open(this.apiWhatsapp,"_blank"),this.message=""}},computed:{visualizeButton:function(){return this.message.length>=4}}},lt=ct,ut=n(8177),dt=(0,u.Z)(lt,it,st,!1,null,"086fed4c",null),mt=dt.exports;m()(dt,{VBtn:v.Z,VCol:f.Z,VContainer:h.Z,VIcon:g.Z,VRow:Z.Z,VTextarea:ut.Z});var pt={name:"App",components:{HomeComponent:x,ExperienceComponent:P,SkillsComponent:z,FooterComponent:J,RepositoriesComponent:at,ContactComponent:mt},data:function(){return{loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}},mounted:function(){this.cargarContenido()},methods:{cargarContenido:function(){var t=this;this.expand=!0,setTimeout((function(){t.loading=!0}),1e3)},openPage:function(t){window.open("".concat(t),"_blank")}}},vt=pt,ft=n(3167),ht=n(4005),gt=n(4768),Ct=n(5212),bt=n(9762),_t=n(7921),wt=(0,u.Z)(vt,o,a,!1,null,null,null),yt=wt.exports;m()(wt,{VApp:ft.Z,VAppBar:ht.Z,VBtn:v.Z,VCol:f.Z,VContainer:h.Z,VIcon:g.Z,VMain:gt.Z,VProgressLinear:Ct.Z,VRow:Z.Z,VSpacer:bt.Z,VToolbarTitle:_t.qW});var Zt=n(9132);r.Z.use(Zt.Z);var Vt=new Zt.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:Vt,render:function(t){return t(yt)}}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0,283:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[997,840,86,611,125,283],(function(){return n(2857)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.912494c1.js.map