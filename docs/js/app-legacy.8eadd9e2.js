(function(){"use strict";var t={1523:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?[n("v-app-bar",{attrs:{color:"indigo lighten-2",dense:"",fixed:"",dark:""}},[n("v-toolbar-title",[t._v("andycodev")]),n("v-spacer"),t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,attrs:{icon:""},on:{click:function(n){return t.openPage(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2),n("v-main",{staticClass:"mt-5",attrs:{transition:"fade-transition"}},[n("HomeComponent"),n("ExperienceComponent"),n("SkillsComponent"),n("FooterComponent")],1)]:n("v-container",{staticStyle:{height:"800px"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("h2",[t._v("andycodev")])]),n("v-col",{attrs:{cols:"4"}},[n("v-progress-linear",{attrs:{color:"indigo accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],2)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mt-5"},[r("v-row",{staticClass:"text-center mt-5",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-avatar",{attrs:{color:"",size:"200"}},[r("v-img",{staticClass:"my-3 mt-5",attrs:{src:n(9237),contain:"",height:"200"}})],1)],1),r("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"6"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Hola👋, Soy Andy")]),r("h2",[t._v("Desarrollador Fullstack 👨‍💻")]),r("p",{staticClass:"mt-3"},[t._v(" 👨‍🎓 Egresado de la carrera de Ingeniería de Sistemas de la Universidad Peruana Unión - Lima. ")]),r("p",{staticClass:"mb-4"},[t._v("🎯 Enfocado al desarrollo web.")]),r("v-btn",{attrs:{elevation:"4",large:""},on:{click:function(e){return t.openPage()}}},[t._v("Linkedin")])],1)],1)],1)},s=[],c={name:"HomeComponent",data:function(){return{}},methods:{openPage:function(){window.open("https://www.linkedin.com/in/andygiampierreordonezvega/","_blank")}}},l=c,d=n(1001),u=n(3453),m=n.n(u),p=n(6370),v=n(3150),f=n(2102),g=n(9846),h=n(7047),w=n(2877),y=(0,d.Z)(l,a,s,!1,null,"0966dcb7",null),b=y.exports;m()(y,{VAvatar:p.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VImg:h.Z,VRow:w.Z});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center"},[t._v("Experiencia 📝")]),n("v-switch",{attrs:{label:"Revertir"},on:{click:function(e){return t.reverseExperience()}}}),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.experiences,(function(e){return n("v-timeline-item",{key:e.id},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.date))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.entity)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)],1)})),1)],1)],1)],1)},_=[],Z={data:function(){return{reverseInfo:!1,experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS UPeU PatmOS. Desarrollar requerimientos de módulos financieros."}]}},methods:{reverseExperience:function(){this.experiences.reverse()}}},V=Z,k=n(6661),x=n(7118),T=n(2649),A=n(2865),S=n(6996),E=(0,d.Z)(V,C,_,!1,null,"2f1443b7",null),P=E.exports;m()(E,{VCard:k.Z,VCardText:x.ZB,VCardTitle:x.EB,VCol:f.Z,VContainer:g.Z,VRow:w.Z,VSwitch:T.Z,VTimeline:A.Z,VTimelineItem:S.Z});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",{staticClass:"mt-5 text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"8"}},[n("h2",{staticClass:"display-1 text-center mb-5"},[t._v("Habilidades 💪")]),t._l(t.skills,(function(e){return n("v-chip",{key:e,staticClass:"ma-3",attrs:{color:"blue-grey darken-2",large:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(e)+" ")],1)}))],2)],1)],1)},O=[],j={data:function(){return{skills:["HTML","CSS","JAVASCRIPT","GIT","GITHUB","GITLAB","VUE","VUETIFY","ANGULAR","NEBULAR","BOOTSTRAP","TAILWIND","PHP","LARAVEL","MYSQL","ORACLE"]}}},I=j,U=n(5424),R=n(6428),B=(0,d.Z)(I,L,O,!1,null,"99a1c4b0",null),D=B.exports;m()(B,{VChip:U.Z,VCol:f.Z,VContainer:g.Z,VIcon:R.Z,VRow:w.Z});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{color:"grey lighten-2",light:"",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.redesSociales,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"secondary",text:"",rounded:""},on:{click:function(n){return t.openPage(e.url)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("andycodev 👨‍💻")])])],2)],1)},H=[],G={data:function(){return{redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/"}]}},methods:{openPage:function(t){window.open("".concat(t),"_blank")}}},M=G,$=n(899),q=(0,d.Z)(M,F,H,!1,null,"58f68825",null),z=q.exports;m()(q,{VBtn:v.Z,VCol:f.Z,VFooter:$.Z,VRow:w.Z});var N={name:"App",components:{HomeComponent:b,ExperienceComponent:P,SkillsComponent:D,FooterComponent:z},data:function(){return{loading:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}},mounted:function(){this.cargarContenido()},methods:{cargarContenido:function(){var t=this;setTimeout((function(){t.loading=!0}),1e3)},openPage:function(t){window.open("".concat(t),"_blank")}}},Y=N,J=n(7524),W=n(8320),Q=n(7877),K=n(3142),X=n(9762),tt=n(7921),et=(0,d.Z)(Y,o,i,!1,null,null,null),nt=et.exports;m()(et,{VApp:J.Z,VAppBar:W.Z,VBtn:v.Z,VCol:f.Z,VContainer:g.Z,VIcon:R.Z,VMain:Q.Z,VProgressLinear:K.Z,VRow:w.Z,VSpacer:X.Z,VToolbarTitle:tt.qW});var rt=n(858);r.Z.use(rt.Z);var ot=new rt.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:ot,render:function(t){return t(nt)}}).$mount("#app")},9237:function(t,e,n){t.exports=n.p+"img/andycodev.267fb35b.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],i=t[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},r=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1523)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.8eadd9e2.js.map