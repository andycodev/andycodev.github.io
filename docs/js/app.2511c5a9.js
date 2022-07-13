(function(){"use strict";var t={7619:function(t,e,n){var a=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-1",dense:"",fixed:"",dark:""}},[n("v-toolbar-title",[t._v("andycodev")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("RepositoriesComponent"),n("ContactComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"},attrs:{transition:"fade-transition"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"indigo accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12 mt-3",left:"",md:"3"}},[a("v-avatar",{attrs:{color:"",size:"200"}},[a("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"5"}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),a("center",[a("h2",{staticClass:"efect-write"},[t._v("Desarrollador Fullstack")])]),a("p",{staticClass:"mt-3"},[t._v(" 👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad Peruana Unión - Lima. ")]),a("p",{staticClass:"mb-3"},[t._v("🎯 Enfocado al desarrollo web.")]),a("v-btn",{staticClass:"mr-3",attrs:{elevation:"2",large:""},on:{click:function(e){return t.descargarCurriculum()}}},[t._v("Currículum "),a("v-icon",{attrs:{color:"grey darken-1"}},[t._v("mdi-download")])],1),a("v-btn",{attrs:{elevation:"2",large:""},on:{click:function(e){return t.openPage()}}},[t._v("Linkedin "),a("v-icon",{attrs:{color:"grey darken-1"}},[t._v("mdi-linkedin")])],1)],1)],1)],1)},i=[],l={name:"HomeComponent",data:()=>({}),methods:{openPage(){window.open("https://www.linkedin.com/in/andygiampierreordonezvega/","_blank")},descargarCurriculum(){event.preventDefault(),window.open("https://github.com/andycodev/curriculum-vitae/raw/main/CV_AndyGiampierreOrdo%C3%B1ezVega.pdf","_self")}}},c=l,d=n(1001),u=n(3453),p=n.n(u),m=n(1578),v=n(8704),g=n(2102),f=n(9846),h=n(4926),C=n(9839),_=n(2877),w=(0,d.Z)(c,s,i,!1,null,"34ddad2f",null),y=w.exports;p()(w,{VAvatar:m.Z,VBtn:v.Z,VCol:g.Z,VContainer:f.Z,VIcon:h.Z,VImg:C.Z,VRow:_.Z});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},Z=[],V={data:()=>({reverseInfo:!1,experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS UPeU PatmOS. Desarrollar requerimientos de módulos financieros."}]}),methods:{reverseExperience(){this.experiences.reverse()}}},x=V,k=n(2371),T=n(7118),R=n(2561),A=n(2483),S=n(6996),E=(0,d.Z)(x,b,Z,!1,null,"64731890",null),P=E.exports;p()(E,{VCard:k.Z,VCardText:T.ZB,VCardTitle:T.EB,VCol:g.Z,VContainer:f.Z,VRow:_.Z,VSwitch:R.Z,VTimeline:A.Z,VTimelineItem:S.Z});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"light",large:"","text-color":"grey darken-3"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)}))],2)],1)],1)},U=[],B={data:()=>({skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND","PHP","LARAVEL","MYSQL","ORACLE"]})},I=B,O=n(8675),L=(0,d.Z)(I,j,U,!1,null,"9b396672",null),$=L.exports;p()(L,{VChip:O.Z,VCol:g.Z,VContainer:f.Z,VIcon:h.Z,VRow:_.Z});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},G=[],M={data:()=>({redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}),methods:{openPage(t){window.open(`${t}`,"_blank")}}},H=M,F=n(6501),W=(0,d.Z)(H,D,G,!1,null,"460d0aad",null),z=W.exports;p()(W,{VBtn:v.Z,VCol:g.Z,VFooter:F.Z,VRow:_.Z});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Repositorios 📂")]),n("p",{staticClass:"text-center grey--text"},[t._v("Usuarios Github: andycodev | giampierre")]),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("p",{staticClass:"text-left grey--text"},[t._v(" Últimos repositorios | "),n("a",{attrs:{href:"https://github.com/"+t.selectionUser+"?tab=repositories",target:"_blank"}},[t._v("ver todos")]),n("v-icon",[t._v("mdi-arrow-up-right")])],1)]),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"andycodev",dense:"",solo:""},on:{change:function(e){return t.onChange()}},model:{value:t.selectionUser,callback:function(e){t.selectionUser=e},expression:"selectionUser"}})],1)],1),n("v-row",t._l(t.sortRopositories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pt-2 pl-2 pb-2 card-mh",attrs:{color:"indigo lighten-5",elevation:"2",light:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),n("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",small:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" visitar repositorio ")])],1)],1)],1)})),1)],1)],1)],1)},N=[],Y={name:"RepositoriesComponent",data:()=>({repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}),mounted(){this.getRepositories()},methods:{onChange(){this.getRepositories()},async getRepositories(){try{const t=await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);this.repositories=await t.json()}catch(t){console.log(t)}},openPage(t){window.open(`${t}`,"_blank")}},computed:{seteandoRepositories(){return this.repositories.map((t=>{const e={};return e.name=t.name,e.date=t.created_at.split("T")[0],e.update=t.updated_at.split("T")[0],e.description=t.description,e.url=t.html_url,e.clone=t.clone_url,e}))},sortRopositories(){return this.seteandoRepositories.sort(((t,e)=>Date.parse(t.date)-Date.parse(e.date))).reverse().slice(0,4)}}},J=Y,Q=n(660),K=(0,d.Z)(J,q,N,!1,null,"156de7d0",null),X=K.exports;p()(K,{VBtn:v.Z,VCard:k.Z,VCardActions:T.h7,VCardSubtitle:T.Qq,VCardTitle:T.EB,VCol:g.Z,VContainer:f.Z,VIcon:h.Z,VRow:_.Z,VSelect:Q.Z});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Contacto 📲")]),n("v-textarea",{attrs:{autocomplete:"mensaje",label:"Mensaje",placeholder:"Por favor escrbir al menos cuatro caracteres."},on:{keyup:function(e){return t.messageWhatsapp(t.message)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t.visualizeButton?n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.sendMessageWhatsapp()}}},[t._v(" Enviar mensaje "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-whatsapp")])],1):t._e()],1)],1)],1)},et=[],nt={name:"ConatactComponent",data:()=>({message:"",apiWhatsapp:""}),mounted(){},methods:{messageWhatsapp(t){this.apiWhatsapp=`https://api.whatsapp.com/send?phone=+51999968702&text=${t}`},sendMessageWhatsapp(){window.open(this.apiWhatsapp,"_blank"),this.message=""}},computed:{visualizeButton:function(){return this.message.length>=4}}},at=nt,rt=n(8177),ot=(0,d.Z)(at,tt,et,!1,null,"62376ed6",null),st=ot.exports;p()(ot,{VBtn:v.Z,VCol:g.Z,VContainer:f.Z,VIcon:h.Z,VRow:_.Z,VTextarea:rt.Z});var it={name:"App",components:{HomeComponent:y,ExperienceComponent:P,SkillsComponent:$,FooterComponent:z,RepositoriesComponent:X,ContactComponent:st},data:()=>({loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}),mounted(){this.cargarContenido()},methods:{cargarContenido(){this.expand=!0,setTimeout((()=>{this.loading=!0}),1e3)},openPage(t){window.open(`${t}`,"_blank")}}},lt=it,ct=n(3167),dt=n(4005),ut=n(4768),pt=n(5212),mt=n(9762),vt=n(7921),gt=(0,d.Z)(lt,r,o,!1,null,null,null),ft=gt.exports;p()(gt,{VApp:ct.Z,VAppBar:dt.Z,VBtn:v.Z,VCol:g.Z,VContainer:f.Z,VIcon:h.Z,VMain:ut.Z,VProgressLinear:pt.Z,VRow:_.Z,VSpacer:mt.Z,VToolbarTitle:vt.qW});var ht=n(9132);a.Z.use(ht.Z);var Ct=new ht.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:Ct,render:t=>t(ft)}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],o=t[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0,283:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(e&&e(a);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[840,86,611,125,283],(function(){return n(7619)}));a=n.O(a)})();
//# sourceMappingURL=app.2511c5a9.js.map