(function(){"use strict";var e={354:function(e,t,i){var a=i(144),s=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"container max-w-screen-lg mx-auto mt-20 px-2"},[t("div",{staticClass:"grid grid-cols-12 gap-2"},[t("div",{staticClass:"col-span-12 md:col-span-8"},[t("HomeComponent"),t("ExperienceComponent")],1),t("div",{staticClass:"col-span-12 md:col-span-4"},[e._m(1),t("RepositoriesComponent")],1)]),t("h2",{staticClass:"ml-2 mt-4 mb-4 text-base text-left font-medium text-gray-500"},[e._v("2023 — andycodev 👨‍💻")])])])},r=[function(){var e=this,t=e._self._c;return t("nav",{staticClass:"fixed top-0 w-full bg-gray-800"},[t("div",{staticClass:"max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4"},[t("a",{staticClass:"flex items-center",attrs:{href:"https://flowbite.com/"}},[t("span",{staticClass:"self-center text-xl font-semibold whitespace-nowrap text-white"},[e._v("andycodev")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Aptitudes")]),t("ul",{staticClass:"font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside"},[t("li",[e._v(" Trabajo en equipo ")]),t("li",[e._v(" Rapidez de aprendizaje ")]),t("li",[e._v(" Responsable ")]),t("li",[e._v(" Autodidacta ")])])])}],o=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-24 h-24 rounded-full",attrs:{src:i(237),alt:""}}),t("div",[t("div",{staticClass:"font-semibold text-xl text-gray-600"},[e._v("Andy Giampierre Ordoñez Vega")]),t("div",{staticClass:"font-medium text-base text-gray-500"},[e._v("Fullstack Developer")]),t("div",{staticClass:"font-normal text-sm text-gray-400"},[e._v("Lima, Perú")])])]),t("p",{staticClass:"font-normal text-base sm:text-sm text-gray-400"},[e._v(" Soy Analista Programador, enfocado en desarrollo web y trabajo en equipo para resolver problemas. Mi objetivo es dar soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy en búsqueda de nuevas oportunidades para aprender y mejorar mis habilidades. ")])])}],l={name:"HomeComponent",data:()=>({items:[{title:"Visualizar",value:"v",icon:"mdi-eye"},{title:"Descargar",value:"d",icon:"mdi-download"}],show:!1,linkBaseCurriculumGitHUB:"https://github.com/andycodev/curriculum-vitae/",nombreCurriculum:"CV_AndyGiampierreOrdo%C3%B1ezVega.pdf"}),methods:{descargarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}raw/main/${this.nombreCurriculum}`,"_self")},visualizarCurriculum(){window.open(`${this.linkBaseCurriculumGitHUB}blob/main/${this.nombreCurriculum}`,"_blank")},opcionesCurriculum(e){"v"===e&&this.visualizarCurriculum(),"d"===e&&this.descargarCurriculum()}}},d=l,c=i(1),m=(0,c.Z)(d,o,n,!1,null,"ca202fb0",null),u=m.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Experiencia")]),e._l(e.experiences,(function(i){return t("div",{key:i.id,staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[e._m(0,!0),t("div",[t("div",{staticClass:"font-medium text-base text-gray-600"},[e._v(e._s(i.entity))]),t("div",{staticClass:"font-medium text-sm text-gray-500"},[e._v(e._s(i.rol))]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v(e._s(i.date))]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("Lima, Perú")])])]),e._m(1,!0)])}))],2)},v=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-500 rounded-full"},[t("span",{staticClass:"font-medium text-gray-100"},[e._v("E1")])])},function(){var e=this,t=e._self._c;return t("ul",{staticClass:"font-normal text-base sm:text-sm text-gray-400 space-y-1 list-disc list-inside"},[t("li",[e._v(" Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. Desarrollar requerimientos y migraciones de módulos financieros. ")]),t("li",[e._v(" Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. ")])])}],f={name:"ExperienceComponent",data:()=>({experiences:[{id:1,img:"/template/images/programador.svg",rol:"Programador",entity:"Clínica Good Hope",date:"(FEB 2018 - JUN 2018)",description:"Comprender las necesidades de los usuarios y brindar soporte de los módulos requeridos. Desarrollar requerimientos específicos"},{id:2,img:"/template/images/analista-programador-1.svg",rol:"Analista Desarrollador",entity:"Clínica Good Hope",date:"(JUL 2018 - ABR 2020)",description:"Gestionar requerimientos de los usuarios, diseñar y crear nuevos programas. Desarrollar modificaciones y mejoras en programas existentes, etc."},{id:3,img:"/template/images/analista-progrmador-2.svg",rol:"Analista Desarrollador",entity:"Universidad Peruana Unión",date:"(MAY 2020 - ACTUAL)",description:"Desarrollar junto con el equipo las nuevas funcionalidades y actualizaciones del LMS de la universidad. Desarrollar requerimientos y migraciones de módulos financieros."}]}),methods:{reverseExperience(){this.experiences.reverse()}}},g=f,x=(0,c.Z)(g,p,v,!1,null,"08d9f82c",null),b=x.exports,h=function(){var e=this;e._self._c;return e._m(0)},y=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hidden col-span-12 md:col-span-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mt-2"},[t("h2",{staticClass:"mb-2 text-lg text-left font-semibold text-gray-600"},[e._v("Repositorios")]),t("div",{staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-14 h-14 rounded-full",attrs:{src:i(203),alt:""}}),t("div",[t("div",{staticClass:"font-medium text-sm text-gray-600"},[e._v("Mi página web")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("25 de marzo de 2023")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("andycodev")])])]),t("p",{staticClass:"font-normal text-sm sm:text-sm text-gray-400"},[e._v(" Es una demo de mi página web oficial ... ")])]),t("div",{staticClass:"mb-5"},[t("div",{staticClass:"flex items-center space-x-4 mb-3"},[t("img",{staticClass:"w-14 h-14 rounded-full",attrs:{src:i(203),alt:""}}),t("div",[t("div",{staticClass:"font-medium text-sm text-gray-600"},[e._v("Mi página web")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("25 de marzo de 2023")]),t("div",{staticClass:"font-normal text-xs text-gray-400"},[e._v("andycodev")])])]),t("p",{staticClass:"font-normal text-sm sm:text-sm text-gray-400"},[e._v(" Es una demo de mi página web oficial ... ")])])])}],C={name:"RepositoriesComponent",data:()=>({repositories:[],selectionUser:"andycodev",items:["andycodev","giampierre"]}),mounted(){this.getRepositories()},methods:{onChange(){this.getRepositories()},async getRepositories(){try{const e=await fetch(`https://api.github.com/users/${this.selectionUser}/repos`);this.repositories=await e.json()}catch(e){console.log(e)}},openPage(e){window.open(`${e}`,"_blank")}},computed:{seteandoRepositories(){return this.repositories.map((e=>{const t={};return t.name=e.name,t.date=e.created_at.split("T")[0],t.update=e.updated_at.split("T")[0],t.description=e.description,t.url=e.html_url,t.clone=e.clone_url,t}))},sortRopositories(){return this.seteandoRepositories.sort(((e,t)=>Date.parse(e.date)-Date.parse(t.date))).reverse().slice(0,3)}}},_=C,w=(0,c.Z)(_,h,y,!1,null,"4913f7c9",null),k=w.exports,j={name:"App",components:{HomeComponent:u,ExperienceComponent:b,RepositoriesComponent:k},data:()=>({loading:!1,expand:!1,redesSociales:[{id:1,name:"Github",url:"https://github.com/andycodev",icon:"mdi-github"},{id:2,name:"Linkedin",url:"https://www.linkedin.com/in/andygiampierreordonezvega/",icon:"mdi-linkedin"},{id:3,name:"Twitter",url:"https://twitter.com/andycodev",icon:"mdi-twitter"},{id:4,name:"Instagram",url:"https://www.instagram.com/andygiampierre/",icon:"mdi-instagram"},{id:5,name:"Facebook",url:"https://www.facebook.com/agov10/",icon:"mdi-facebook"}]}),mounted(){this.cargarContenido()},methods:{cargarContenido(){this.expand=!0,setTimeout((()=>{this.loading=!0}),1e3)},openPage(e){window.open(`${e}`,"_blank")}}},z=j,D=(0,c.Z)(z,s,r,!1,null,null,null),O=D.exports;a.ZP.config.productionTip=!1,new a.ZP({render:e=>e(O)}).$mount("#app")},203:function(e,t,i){e.exports=i.p+"img/github-circle.3c1446a4.svg"},237:function(e,t,i){e.exports=i.p+"img/andycodev.267fb35b.png"}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,r){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],r=e[c][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||o>=r)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,s,r]}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,r,o=a[0],n=a[1],l=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(l)var c=l(i)}for(t&&t(a);d<o.length;d++)r=o[d],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},a=self["webpackChunkwebsite_andycodev"]=self["webpackChunkwebsite_andycodev"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[86,884],(function(){return i(354)}));a=i.O(a)})();
//# sourceMappingURL=app.20769fe6.js.map