(function(){"use strict";var t={813:function(t,e,n){var o=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-2",dense:"",fixed:"",dark:""}},[n("v-toolbar-title",[t._v("andycodev")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("RepositoriesComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"},attrs:{transition:"fade-transition"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"indigo accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"mt-5"},[o("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12 mt-3",left:"",md:"3"}},[o("v-avatar",{attrs:{color:"",size:"200"}},[o("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),o("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"5"}},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),o("h2",[t._v("Desarrollador Fullstack 👨‍💻")]),o("p",{staticClass:"mt-3"},[t._v(" 👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad Peruana Unión - Lima. ")]),o("p",{staticClass:"mb-3"},[t._v("🎯 Enfocado al desarrollo web.")]),o("v-btn",{attrs:{elevation:"4",large:""},on:{click:function(e){return t.openPage()}}},[t._v("Linkedin")])],1)],1)],1)},s=[],l={name:"HomeComponent",data:()=>({}),methods:{openPage(){window.open("https://www.linkedin.com/in/andygiampierreordonezvega/","_blank")}}},c=l,d=n(1001),u=n(3453),p=n.n(u),m=n(1578),v=n(8704),f=n(2102),g=n(9846),h=n(9839),C=n(2877),y=(0,d.Z)(c,a,s,!1,null,"6a83ef3c",null),b=y.exports;p()(y,{VAvatar:m.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VImg:h.Z,VRow:C.Z});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h6"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},_=[],Z={data:()=>({reverseInfo:!1,experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS UPeU PatmOS. Desarrollar requerimientos de módulos financieros."}]}),methods:{reverseExperience(){this.experiences.reverse()}}},V=Z,x=n(2371),k=n(7118),T=n(2561),R=n(2483),S=n(6996),A=(0,d.Z)(V,w,_,!1,null,"64731890",null),E=A.exports;p()(A,{VCard:x.Z,VCardText:k.ZB,VCardTitle:k.EB,VCol:f.Z,VContainer:g.Z,VRow:C.Z,VSwitch:T.Z,VTimeline:R.Z,VTimelineItem:S.Z});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"grey darken-3",large:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)}))],2)],1)],1)},U=[],j={data:()=>({skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND","PHP","LARAVEL","MYSQL","ORACLE"]})},L=j,O=n(8675),I=n(4926),B=(0,d.Z)(L,P,U,!1,null,"73c2ac7a",null),D=B.exports;p()(B,{VChip:O.Z,VCol:f.Z,VContainer:g.Z,VIcon:I.Z,VRow:C.Z});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},G=[],H={data:()=>({redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}),methods:{openPage(t){window.open(`${t}`,"_blank")}}},F=H,M=n(6501),q=(0,d.Z)(F,$,G,!1,null,"460d0aad",null),z=q.exports;p()(q,{VBtn:v.Z,VCol:f.Z,VFooter:M.Z,VRow:C.Z});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Repositorios 📂")]),n("p",{staticClass:"text-center grey--text"},[t._v("Usuarios Github: andycodev | giampierre")]),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("p",{staticClass:"text-left grey--text"},[t._v(" Últimos repositorios en mi Github | "),n("a",{attrs:{href:"https://github.com/"+t.selectionUser+"?tab=repositories",target:"_blank"}},[t._v("ver todos")]),n("v-icon",[t._v("mdi-arrow-up-right")])],1)]),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"andycodev",dense:"",solo:""},on:{change:function(e){return t.onChange()}},model:{value:t.selectionUser,callback:function(e){t.selectionUser=e},expression:"selectionUser"}})],1)],1),n("v-row",t._l(t.sortRopositories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pt-2 pl-2 pb-2 card-mh",attrs:{color:"blue lighten-5",elevation:"3",light:"",shaped:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),n("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",small:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" visitar repositorio ")])],1)],1)],1)})),1)],1)],1)],1)},Y=[],J={name:"RepositoriesComponent",data:()=>({repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}),mounted(){this.getRepositories()},methods:{onChange(){this.getRepositories()},async getRepositories(){try{const t=await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);this.repositories=await t.json()}catch(t){console.log(t)}},openPage(t){window.open(`${t}`,"_blank")}},computed:{seteandoRepositories(){return this.repositories.map((t=>{const e={};return e.name=t.name,e.date=t.created_at.split("T")[0],e.update=t.updated_at.split("T")[0],e.description=t.description,e.url=t.html_url,e.clone=t.clone_url,e}))},sortRopositories(){return this.seteandoRepositories.sort(((t,e)=>Date.parse(t.date)-Date.parse(e.date))).reverse().slice(0,4)}}},Q=J,W=n(1229),K=(0,d.Z)(Q,N,Y,!1,null,"e13987d8",null),X=K.exports;p()(K,{VBtn:v.Z,VCard:x.Z,VCardActions:k.h7,VCardSubtitle:k.Qq,VCardTitle:k.EB,VCol:f.Z,VContainer:g.Z,VIcon:I.Z,VRow:C.Z,VSelect:W.Z});var tt={name:"App",components:{HomeComponent:b,ExperienceComponent:E,SkillsComponent:D,FooterComponent:z,RepositoriesComponent:X},data:()=>({loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}),mounted(){this.cargarContenido()},methods:{cargarContenido(){this.expand=!0,setTimeout((()=>{this.loading=!0}),1e3)},openPage(t){window.open(`${t}`,"_blank")}}},et=tt,nt=n(3167),ot=n(4005),rt=n(4768),it=n(5212),at=n(9762),st=n(7921),lt=(0,d.Z)(et,r,i,!1,null,null,null),ct=lt.exports;p()(lt,{VApp:nt.Z,VAppBar:ot.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VIcon:I.Z,VMain:rt.Z,VProgressLinear:it.Z,VRow:C.Z,VSpacer:at.Z,VToolbarTitle:st.qW});var dt=n(9132);o.Z.use(dt.Z);var ut=new dt.Z({});o.Z.config.productionTip=!1,new o.Z({vuetify:ut,render:t=>t(ct)}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],i=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0,283:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},o=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[840,86,611,125,283],(function(){return n(813)}));o=n.O(o)})();
//# sourceMappingURL=app.53496119.js.map