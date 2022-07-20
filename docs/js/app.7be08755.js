(function(){"use strict";var t={9616:function(t,e,n){var a=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-1",elevation:"2",dense:"",fixed:"",dark:"",rounded:"b-lg"}},[n("v-toolbar-title",[t._v(" andycodev")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("ProjectsComponent"),n("RepositoriesComponent"),n("ContactComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"},attrs:{transition:"fade-transition"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"blue ligthen-5",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12 mt-3",left:"",md:"3"}},[a("v-avatar",{attrs:{color:"",size:"200"}},[a("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"5"}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),a("center",[a("h2",{staticClass:"efect-write"},[t._v("Desarrollador Fullstack")])]),a("p",{staticClass:"mt-3"},[t._v(" Analista Desarrollador en la Universidad Peruana Unión - Lima. Enfocado en el desarrollo web, a la resolución de problemas y acostumbrado a trabajar en equipo. ")]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"indigo lighten-1",dark:""},on:{click:function(e){t.show=!t.show}}},"v-btn",i,!1),n),[t._v(" Currículum "),a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)]}}])},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,staticClass:"text-center"},[a("v-list-item-title",{staticClass:"cursor",on:{click:function(n){return t.opcionesCurriculum(e.value)}}},[t._v(t._s(e.title)+" "),a("v-icon",{attrs:{size:"medium"}},[t._v(t._s(e.icon))])],1)],1)})),1)],1)],1)],1)],1)},r=[],c={name:"HomeComponent",data:()=>({items:[{title:"Visualizar",value:"v",icon:"mdi-eye"},{title:"Descargar",value:"d",icon:"mdi-download"}],show:!1,linkBaseCurriculumGitHUB:"https://github.com/andycodev/curriculum-vitae/",nombreCurriculum:"CV_AndyGiampierreOrdo%C3%B1ezVega.pdf"}),methods:{descargarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}raw/main/${this.nombreCurriculum}`,"_self")},visualizarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}blob/main/${this.nombreCurriculum}`,"_blank")},opcionesCurriculum(t){"v"===t&&this.visualizarCurriculum(),"d"===t&&this.descargarCurriculum()}}},l=c,d=n(1001),u=n(3453),m=n.n(u),p=n(1578),v=n(8704),h=n(2102),g=n(9846),f=n(4926),C=n(9839),b=n(3920),w=n(8681),y=n(4741),_=n(8904),V=n(2877),Z=(0,d.Z)(l,o,r,!1,null,"0e6dd8b8",null),x=Z.exports;m()(Z,{VAvatar:p.Z,VBtn:v.Z,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VImg:C.Z,VList:b.Z,VListItem:w.Z,VListItemTitle:y.V9,VMenu:_.Z,VRow:V.Z});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},R=[],j={name:"ExperienceComponent",data:()=>({experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. Desarrollar requerimientos y migraciones de módulos financieros."}]}),methods:{reverseExperience(){this.experiences.reverse()}}},P=j,A=n(2371),S=n(7118),T=n(2561),U=n(2483),B=n(6996),E=(0,d.Z)(P,k,R,!1,null,"4a721cce",null),I=E.exports;m()(E,{VCard:A.Z,VCardText:S.ZB,VCardTitle:S.EB,VCol:h.Z,VContainer:g.Z,VRow:V.Z,VSwitch:T.Z,VTimeline:U.Z,VTimelineItem:B.Z});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"indigo lighten-5",large:"","text-color":"grey darken-4"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)})),void 0],2)],1)],1)},$=[],O={name:"SkillsComponent",data:()=>({skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND CSS","PHP","LARAVEL","MYSQL","ORACLE"]})},D=O,z=n(8675),G=(0,d.Z)(D,L,$,!1,null,"0efd71ad",null),H=G.exports;m()(G,{VChip:z.Z,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VRow:V.Z});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",tile:""}},[n("h2",{staticClass:"display-1 text-center mt-5 mb-5"},[t._v("Proyectos 🏆")]),t._l(t.types,(function(e){return n("v-container",{key:e.id,staticClass:"lighten-4"},[n("v-subheader",{staticClass:"grey--text"},[t._v(t._s(e.name))]),n("v-row",[n("v-spacer"),t._l(t.projects,(function(a){return n("v-col",{key:a.id,attrs:{cols:"12",sm:"6",md:"4"}},[e.slug===a.type?n("v-card",[n("div",{staticClass:"indigo lighten-2 text-center"},[n("span",{staticClass:"text-h7 white--text pa-1 d-inline-block mb-1",domProps:{textContent:t._s(a.name)}})]),n("v-img",{attrs:{src:a.img,height:"250px",contain:""}}),n("v-card-actions",{staticClass:"white justify-center"},[n("v-btn",{staticClass:"white--text",attrs:{color:"indigo",fab:"",icon:"",small:""},on:{click:function(e){return t.visualizarRepositorie(a.github)}}},[n("v-icon",[t._v("mdi-github")])],1),n("v-btn",{staticClass:"white--text",attrs:{disabled:!a.web,color:"red lighten-3",fab:"",icon:"",small:""},on:{click:function(e){return t.visualizarProject(a.web)}}},[n("v-icon",[t._v("mdi-web")])],1)],1)],1):t._e()],1)}))],2)],1)}))],2)},F=[],W={name:"ProjectsComponent",data:()=>({types:[{id:1,name:"Últimos proyectos",slug:"UP"}],projects:[{id:1,name:"Microframework tailwind css",type:"UP",img:n(4665),github:"https://github.com/andycodev/tailwindcss",web:"https://andycodev.github.io/tailwindcss/"},{id:2,name:"CRUD Angular y Firebase",type:"UP",img:n(1475),github:"https://github.com/andycodev/ng-app-courses",web:"https://ng-app-courses.web.app"},{id:3,name:"CRUD Angular y Laravel",type:"UP",img:n(7471),github:"https://github.com/andycodev/crud-laravel-angular",web:""}]}),mounted(){},methods:{visualizarRepositorie(t){t&&window.open(t,"_blank")},visualizarProject(t){t&&window.open(t,"_blank")}}},q=W,N=n(9762),Y=n(7230),J=(0,d.Z)(q,M,F,!1,null,"d36ccc52",null),Q=J.exports;m()(J,{VBtn:v.Z,VCard:A.Z,VCardActions:S.h7,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VImg:C.Z,VRow:V.Z,VSpacer:N.Z,VSubheader:Y.Z});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},X=[],tt={name:"FooterComponent",data:()=>({redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}),methods:{openPage(t){window.open(`${t}`,"_blank")}}},et=tt,nt=n(6501),at=(0,d.Z)(et,K,X,!1,null,"29b35088",null),it=at.exports;m()(at,{VBtn:v.Z,VCol:h.Z,VFooter:nt.Z,VRow:V.Z});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Repositorios 📂")]),n("p",{staticClass:"text-center grey--text"},[t._v("Usuarios Github: andycodev | giampierre")]),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("p",{staticClass:"text-left grey--text"},[t._v(" Últimos repositorios | "),n("a",{attrs:{href:"https://github.com/"+t.selectionUser+"?tab=repositories",target:"_blank"}},[t._v("ver todos")]),n("v-icon",[t._v("mdi-arrow-up-right")])],1)]),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"andycodev",dense:"",solo:""},on:{change:function(e){return t.onChange()}},model:{value:t.selectionUser,callback:function(e){t.selectionUser=e},expression:"selectionUser"}})],1)],1),n("v-row",t._l(t.sortRopositories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:""}},[n("v-card",{staticClass:"pt-2 pl-2 pb-2 card-mh",attrs:{color:"grey lighten-5",elevation:"2",light:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),n("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",small:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" visitar repositorio ")])],1),n("span",{staticClass:"ml-5 grey--text"},[t._v("Fecha de creación: "+t._s(e.date))])],1)],1)})),1)],1)],1)],1)},ot=[],rt={name:"RepositoriesComponent",data:()=>({repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}),mounted(){this.getRepositories()},methods:{onChange(){this.getRepositories()},async getRepositories(){try{const t=await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);this.repositories=await t.json()}catch(t){console.log(t)}},openPage(t){window.open(`${t}`,"_blank")}},computed:{seteandoRepositories(){return this.repositories.map((t=>{const e={};return e.name=t.name,e.date=t.created_at.split("T")[0],e.update=t.updated_at.split("T")[0],e.description=t.description,e.url=t.html_url,e.clone=t.clone_url,e}))},sortRopositories(){return this.seteandoRepositories.sort(((t,e)=>Date.parse(t.date)-Date.parse(e.date))).reverse().slice(0,4)}}},ct=rt,lt=n(4618),dt=(0,d.Z)(ct,st,ot,!1,null,"3153aa5f",null),ut=dt.exports;m()(dt,{VBtn:v.Z,VCard:A.Z,VCardActions:S.h7,VCardSubtitle:S.Qq,VCardTitle:S.EB,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VRow:V.Z,VSelect:lt.Z});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Contacto 📲")]),n("v-textarea",{attrs:{autocomplete:"mensaje",label:"Mensaje",placeholder:"Por favor escrbir al menos cuatro caracteres."},on:{keyup:function(e){return t.messageWhatsapp(t.message)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t.visualizeButton?n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.sendMessageWhatsapp()}}},[t._v(" Enviar mensaje "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-whatsapp")])],1):t._e()],1)],1)],1)},pt=[],vt={name:"ConatactComponent",data:()=>({message:"",apiWhatsapp:""}),mounted(){},methods:{messageWhatsapp(t){this.apiWhatsapp=`https://api.whatsapp.com/send?phone=+51999968702&text=${t}`},sendMessageWhatsapp(){window.open(this.apiWhatsapp,"_blank"),this.message=""}},computed:{visualizeButton:function(){return this.message.length>=4}}},ht=vt,gt=n(8177),ft=(0,d.Z)(ht,mt,pt,!1,null,"086fed4c",null),Ct=ft.exports;m()(ft,{VBtn:v.Z,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VRow:V.Z,VTextarea:gt.Z});var bt={name:"App",components:{HomeComponent:x,ExperienceComponent:I,SkillsComponent:H,ProjectsComponent:Q,FooterComponent:it,RepositoriesComponent:ut,ContactComponent:Ct},data:()=>({loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}),mounted(){this.cargarContenido()},methods:{cargarContenido(){this.expand=!0,setTimeout((()=>{this.loading=!0}),1e3)},openPage(t){window.open(`${t}`,"_blank")}}},wt=bt,yt=n(3167),_t=n(4005),Vt=n(4768),Zt=n(5212),xt=n(7921),kt=(0,d.Z)(wt,i,s,!1,null,null,null),Rt=kt.exports;m()(kt,{VApp:yt.Z,VAppBar:_t.Z,VBtn:v.Z,VCol:h.Z,VContainer:g.Z,VIcon:f.Z,VMain:Vt.Z,VProgressLinear:Zt.Z,VRow:V.Z,VSpacer:N.Z,VToolbarTitle:xt.qW});var jt=n(9132);a.Z.use(jt.Z);var Pt=new jt.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:Pt,render:t=>t(Rt)}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"},1475:function(t,e,n){t.exports=n.p+"img/crud-angular-firebase.56ce59df.png"},7471:function(t,e,n){t.exports=n.p+"img/crud-angular-laravel.4dca1376.png"},4665:function(t,e,n){t.exports=n.p+"img/tailwindcss.cf3d297a.png"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],s=t[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0,283:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,o=a[0],r=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var d=c(n)}for(e&&e(a);l<o.length;l++)s=o[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},a=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[840,86,611,125,283],(function(){return n(9616)}));a=n.O(a)})();
//# sourceMappingURL=app.7be08755.js.map