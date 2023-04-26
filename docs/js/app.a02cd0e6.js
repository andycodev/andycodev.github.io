(function(){"use strict";var e={425:function(e,t,a){var i=a(144),s=function(){var e=this,t=e._self._c;return t("div",[t("NavbarComponent"),t("div",{staticClass:"container max-w-screen-lg mx-auto mt-20 px-2"},[t("div",{staticClass:"grid grid-cols-12 gap-2"},[t("div",{staticClass:"col-span-12 md:col-span-8"},[t("HomeComponent"),t("ExperienceComponent")],1),t("div",{staticClass:"col-span-12 md:col-span-4"},[t("AptitudesComponent"),t("RepositoriesComponent")],1)]),t("FooterComponent")],1)],1)},n=[],r=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("nav",{staticClass:"fixed top-0 w-full bg-gray-800"},[t("div",{staticClass:"max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4"},[t("a",{staticClass:"flex items-center",attrs:{href:"https://flowbite.com/"}},[t("span",{staticClass:"self-center text-xl font-semibold whitespace-nowrap text-white"},[e._v("andycodev")])])])])}],l={name:"NabvarComponent",data:()=>({redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}),methods:{openPage(e){window.open(`${e}`,"_blank")}}},d=l,c=a(1),m=(0,c.Z)(d,r,o,!1,null,null,null),u=m.exports,p=function(){var e=this;e._self._c;return e._m(0)},v=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-24 h-24 rounded-full",attrs:{src:a(237),alt:""}}),t("div",[t("div",{staticClass:"font-semibold text-xl text-gray-600"},[e._v("Andy Giampierre Ordoñez Vega")]),t("div",{staticClass:"font-medium text-base text-gray-500"},[e._v("Fullstack Developer")]),t("div",{staticClass:"font-normal text-sm text-gray-400"},[e._v("Lima, Perú")])])]),t("p",{staticClass:"font-normal text-base sm:text-sm text-gray-400"},[e._v(" Soy Analista Programador, enfocado en desarrollo web y trabajo en equipo para resolver problemas. Mi objetivo es dar soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy en búsqueda de nuevas oportunidades para aprender y mejorar mis habilidades. ")])])}],g={name:"HomeComponent",data:()=>({items:[{title:"Visualizar",value:"v",icon:"mdi-eye"},{title:"Descargar",value:"d",icon:"mdi-download"}],show:!1,linkBaseCurriculumGitHUB:"https://github.com/andycodev/curriculum-vitae/",nombreCurriculum:"CV_AndyGiampierreOrdo%C3%B1ezVega.pdf"}),methods:{descargarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}raw/main/${this.nombreCurriculum}`,"_self")},visualizarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}blob/main/${this.nombreCurriculum}`,"_blank")},opcionesCurriculum(e){"v"===e&&this.visualizarCurriculum(),"d"===e&&this.descargarCurriculum()}}},f=g,h=(0,c.Z)(f,p,v,!1,null,"ca202fb0",null),b=h.exports,x=function(){var e=this;e._self._c;return e._m(0)},w=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Aptitudes")]),t("ul",{staticClass:"font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside"},[t("li",[e._v(" Trabajo en equipo ")]),t("li",[e._v(" Rapidez de aprendizaje ")]),t("li",[e._v(" Responsable ")]),t("li",[e._v(" Autodidacta ")])])])}],y={name:"AptitudesComponent",data:()=>({aptitudes:[{id:1,name:"Github"},{id:2,name:"Linkedin"},{id:3,name:"Twitter"},{id:4,name:"Instagram"}]})},C=y,_=(0,c.Z)(C,x,w,!1,null,null,null),k=_.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Experiencia")]),e._l(e.experiences,(function(a){return t("div",{key:a.id,staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[e._m(0,!0),t("div",[t("div",{staticClass:"font-medium text-base text-gray-600"},[e._v(e._s(a.entity))]),t("div",{staticClass:"font-medium text-sm text-gray-500"},[e._v(e._s(a.rol))]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v(e._s(a.date))]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("Lima, Perú")])])]),t("ul",{staticClass:"font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside"},e._l(a.description,(function(a,i){return t("li",{key:i},[e._v(" "+e._s(a)+" ")])})),0)])}))],2)},A=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-500 rounded-full"},[t("span",{staticClass:"font-medium text-gray-100"},[e._v("E1")])])}],P={name:"ExperienceComponent",data:()=>({experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"Febrero 2018 - Junio 2018",description:{1:"Comprender las necesidades de los usuarios.",2:"Brindar soporte de los módulos requeridos.",3:"Desarrollar requerimientos específicos.",4:"Aprendí nuevas tecnologías y herramientas para mejorar mis habilidades en el desarrollo de software."}},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"Julio 2018 - Abril 2020",description:{1:"Participé en reuniones de equipo para discutir el progreso del proyecto y las tareas pendientes.",2:"Realicé pruebas en el código antes de la entrega del proyecto.",3:"Escribí código en Php y Javascript para el desarrollo de una aplicación web utilizando el framework Laravel para el backend y Vue para el frontend."}},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"Mayo 2020 - Actualidad",description:{1:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad.",2:"Desarrollar requerimientos y migraciones de módulos con tecnologías Laravel y Angular."}}]})},z=P,O=(0,c.Z)(z,j,A,!1,null,"51b8f994",null),R=O.exports,G=function(){var e=this;e._self._c;return e._m(0)},T=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hidden col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Repositorios")]),t("div",{staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-14 h-14 rounded-full",attrs:{src:a(203),alt:""}}),t("div",[t("div",{staticClass:"font-medium text-sm text-gray-600"},[e._v("Mi página web")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("25 de marzo de 2023")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("andycodev")])])]),t("p",{staticClass:"font-normal text-sm sm:text-sm text-gray-400"},[e._v(" Es una demo de mi página web oficial ... ")])]),t("div",{staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-14 h-14 rounded-full",attrs:{src:a(203),alt:""}}),t("div",[t("div",{staticClass:"font-medium text-sm text-gray-600"},[e._v("Mi página web")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("25 de marzo de 2023")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("andycodev")])])]),t("p",{staticClass:"font-normal text-sm sm:text-sm text-gray-400"},[e._v(" Es una demo de mi página web oficial ... ")])])])}],$={name:"RepositoriesComponent",data:()=>({repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}),mounted(){this.getRepositories()},methods:{onChange(){this.getRepositories()},async getRepositories(){try{const e=await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);this.repositories=await e.json()}catch(e){console.log(e)}},openPage(e){window.open(`${e}`,"_blank")}},computed:{seteandoRepositories(){return this.repositories.map((e=>{const t={};return t.name=e.name,t.date=e.created_at.split("T")[0],t.update=e.updated_at.split("T")[0],t.description=e.description,t.url=e.html_url,t.clone=e.clone_url,t}))},sortRopositories(){return this.seteandoRepositories.sort(((e,t)=>Date.parse(e.date)-Date.parse(t.date))).reverse().slice(0,3)}}},D=$,E=(0,c.Z)(D,G,T,!1,null,"4913f7c9",null),L=E.exports,Z=function(){var e=this,t=e._self._c;return t("h2",{staticClass:"ml-2 mt-4 mb-4 text-base text-left font-medium text-gray-500"},[e._v("2023 — andycodev 👨‍💻")])},q=[],B={name:"FooterComponent",data:()=>({redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/"}]}),methods:{openPage(e){window.open(`${e}`,"_blank")}}},H=B,F=(0,c.Z)(H,Z,q,!1,null,"3ffed51c",null),U=F.exports,M={name:"App",components:{NavbarComponent:u,HomeComponent:b,AptitudesComponent:k,ExperienceComponent:R,RepositoriesComponent:L,FooterComponent:U},data:()=>({loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}),mounted(){this.cargarContenido()},methods:{cargarContenido(){this.expand=!0,setTimeout((()=>{this.loading=!0}),1e3)},openPage(e){window.open(`${e}`,"_blank")}}},S=M,V=(0,c.Z)(S,s,n,!1,null,null,null),I=V.exports;i.ZP.config.productionTip=!1,new i.ZP({render:e=>e(I)}).$mount("#app")},203:function(e,t,a){e.exports=a.p+"img/github-circle.3c1446a4.svg"},237:function(e,t,a){e.exports=a.p+"img/andycodev.267fb35b.png"}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,n){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],n=e[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,s,n]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,r=i[0],o=i[1],l=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var c=l(a)}for(t&&t(i);d<r.length;d++)n=r[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},i=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[86,884],(function(){return a(425)}));i=a.O(i)})();
//# sourceMappingURL=app.a02cd0e6.js.map