(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,7,8,9],{263:function(t,e,l){"use strict";var n=l(2),r=l(79).findIndex,c=l(133),o="findIndex",d=!0;o in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},264:function(t,e,l){"use strict";l.r(e);l(35),l(61),l(45),l(18),l(263);var n={ssr:!1,data:function(){return{active:"all",technologies:["react","vue","flutter","laravel","node","all"],projects:[],allProjects:[{title:"TellULater",description:"Create and share a digital time capsule with your friends.",image:"https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc",technologies:["node"]},{title:"Pigeon",description:"Create organisations, groups, and invite people to join them, or join another organisations.",image:"https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc",technologies:["laravel"]},{title:"Bydder",description:"Send your offer after searching properties in South Australia.",image:"https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc",technologies:["laravel"]},{title:"Cagora",description:"Get the best offers from reputable dealers when you list and sell your car.",image:"https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc",technologies:["laravel","vue"]},{title:"Fire chat",description:"Make new friends by creating or finding open chat rooms.",image:"https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc",technologies:["flutter"]}]}},created:function(){this.projects=this.allProjects},methods:{techChange:function(t){this.active=t,this.projects="all"===t?this.allProjects:this.allProjects.filter((function(e){return-1!==e.technologies.findIndex((function(e){return e===t}))}))}}},r=l(26),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-12",attrs:{id:"work"}},[e("h2",{staticClass:"text-center text-3xl md:text-5xl mb-12 font-medium mt-10"},[t._v("\n    My Work\n  ")]),t._v(" "),e("div",{staticClass:"container mx-auto md:flex justify-center md:px-10 lg:px-20 mb-10"},[e("div",{staticClass:"w-full h-full flex flex-wrap lg:-mx-4"},t._l(t.projects,(function(l,n){return e("div",{key:n,staticClass:"w-full md:w-1/2 lg:w-1/3 p-4 h-full",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"bg-white rounded-md p-4 shadow-sm"},[e("div",[e("h3",{staticClass:"font-medium text-lg mb-2"},[t._v(t._s(l.title))]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n              "+t._s(l.description)+"\n            ")]),t._v(" "),e("div",{staticClass:"flex mt-1"},t._l(l.technologies,(function(l){return e("div",{key:l,staticClass:"bg-blue-100 rounded-md px-2 py-1 text-blue-500 text-sm mt-2 mr-2 capitalize"},[t._v("\n                "+t._s(l)+"\n              ")])})),0)])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,l){var content=l(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(47).default)("863a9d5e",content,!0,{sourceMap:!1})},267:function(t,e,l){"use strict";l.r(e);var n=l(26),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{viewBox:"-28 0 512 512.00098",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m104.359375 151.625h-86.3125c-9.675781 0-17.546875 7.871094-17.546875 17.546875v325.285156c0 9.671875 7.871094 17.542969 17.546875 17.542969h86.3125c9.671875 0 17.542969-7.871094 17.542969-17.542969v-325.285156c0-9.675781-7.871094-17.546875-17.542969-17.546875zm-12.5 330.332031h-61.316406v-300.289062h61.316406zm0 0"}}),t._v(" "),e("path",{attrs:{d:"m61.203125 0c-33.75 0-61.203125 27.453125-61.203125 61.199219 0 33.75 27.453125 61.203125 61.203125 61.203125 33.742187 0 61.199219-27.453125 61.199219-61.203125 0-33.746094-27.453125-61.199219-61.199219-61.199219zm0 92.359375c-17.183594 0-31.160156-13.976563-31.160156-31.160156 0-17.179688 13.976562-31.15625 31.160156-31.15625 17.179687 0 31.15625 13.976562 31.15625 31.15625 0 17.179687-13.976563 31.160156-31.15625 31.160156zm0 0"}}),t._v(" "),e("path",{attrs:{d:"m401.046875 189.761719c-20.632813-17.222657-46.863281-26.433594-73.832031-25.933594-16.75.308594-33.117188 4.347656-47.949219 11.660156v-7.101562c0-9.253907-7.503906-16.757813-16.757813-16.757813h-87.882812c-9.253906 0-16.757812 7.503906-16.757812 16.757813v326.855469c0 9.257812 7.503906 16.757812 16.757812 16.757812h89.617188c8.296874 0 15.023437-6.726562 15.023437-15.019531v-194.878907c0-16.683593 13.054687-30.800781 29.726563-31.296874 17.328124-.511719 31.585937 13.429687 31.585937 30.644531v195.84375c0 8.121093 6.585937 14.707031 14.707031 14.707031h86.128906c8.121094 0 14.707032-6.585938 14.707032-14.707031v-189.886719c0-45.546875-20.074219-88.429688-55.074219-117.644531zm25.03125 292.195312h-55.453125v-180.507812c0-33.46875-27.230469-60.699219-60.703125-60.699219-33.46875 0-60.699219 27.230469-60.699219 60.699219v180.507812h-61.3125v-300.289062h61.3125v21.832031h.019532c-.003907 3.539062 1.226562 7.09375 3.757812 9.957031 5.496094 6.210938 14.992188 6.789063 21.203125 1.289063 14.800781-13.101563 33.824219-20.515625 53.566406-20.882813 19.761719-.375 38.941407 6.367188 54.027344 18.960938 28.144531 23.492187 44.28125 57.964843 44.28125 94.582031zm0 0"}})])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,l){"use strict";l.r(e);var n=l(26),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{viewBox:"0 0 512.00096 512.00096",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"}}),t._v(" "),e("path",{attrs:{d:"m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"}}),t._v(" "),e("path",{attrs:{d:"m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"}})])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,l){"use strict";l.r(e);var n=l(26),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"}})])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,l){"use strict";l.r(e);var n=l(26),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{id:"Capa_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[e("g",[e("g",[e("path",{attrs:{d:"M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121\n\t\t\tC512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18\n\t\t\ts-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z\n\t\t\t M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939\n\t\t\tl22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"}})])]),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g"),t._v(" "),e("g")])}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,l){"use strict";l(265)},273:function(t,e,l){var n=l(46)(!1);n.push([t.i,'html{scroll-behavior:smooth;overflow-x:hidden}body{font-family:"Poppins",sans-serif}.social-media-link{margin:10px}.social-icon{fill:#2563eb}.hero-text{line-height:1.4!important;background:-webkit-linear-gradient(45deg,#2b32b2,#1488cc);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}',""]),t.exports=n},276:function(t,e,l){"use strict";l.r(e);l(62);var n=l(178),r=l.n(n),c=l(267),o=l(268),d=l(269),h=l(270),m=l(264),f=l(271),v={components:{LinkedIn:c.default,Instagram:o.default,Github:d.default,Mail:h.default,Projects:m.default,SkillsAndExperience:f.default},mounted:function(){var t=this;r.a.init({once:!0}),setTimeout((function(){t.$refs.loader.style.opacity=0,setTimeout((function(){t.$refs.loader.remove()}),1e3)}),1e3)}},x=(l(272),l(26)),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"loader",staticClass:"fixed h-full w-full z-50 bg-white flex items-center justify-center opacity-1 transition-opacity duration-1000"},[e("svg",{staticClass:"animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),e("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]),t._v(" "),e("div",{staticClass:"h-screen bg-white",staticStyle:{"min-height":"700px"}},[e("div",{staticClass:"container md:flex px-6 lg:px-20 mx-auto h-full"},[e("div",{staticClass:"flex flex-col-reverse lg:flex-row justify-end -mx-5 lg:-mr-20 lx:-mr-5 h-full lg:items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"px-5 md:w-8/12 lg:w-4/12 xl:w-5/12 flex justify-center items-center pt-28 sm:pt-20 lg:pt-0"},[e("div",[e("lottie-player",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json",mode:"bounce",background:"transparent",speed:"1",loop:"",autoplay:""}})],1)])])])]),t._v(" "),e("Projects"),t._v(" "),e("SkillsAndExperience"),t._v(" "),e("footer",{staticClass:"w-full bg-back px-4 md:px-10 py-5 flex justify-center"},[e("a",{staticClass:"flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white",attrs:{target:"_blank",href:"https://www.linkedin.com/in/sanjay-boricha/"}},[e("LinkedIn",{staticClass:"social-icon h-6 w-6 md:h-8 md:w-8"})],1),t._v(" "),e("a",{staticClass:"flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white",attrs:{target:"_blank",href:"https://www.instagram.com/sanjayboricha.dev"}},[e("Instagram",{staticClass:"social-icon h-6 w-6 md:h-8 md:w-8"})],1),t._v(" "),e("a",{staticClass:"flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white",attrs:{target:"_blank",href:"https://github.com/SanjayBoricha"}},[e("Github",{staticClass:"social-icon h-6 w-6 md:h-8 md:w-8"})],1),t._v(" "),e("a",{staticClass:"flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white",attrs:{href:"mailto:sanjayboricha1001@gmail.com"}},[e("Mail",{staticClass:"social-icon h-6 w-6 md:h-8 md:w-8"})],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-5 lg:w-8/12 xl:w-7/12"},[e("div",{staticClass:"w-full flex justify-center flex-col h-full"},[e("h1",{staticClass:"text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl mb-6 font-light text-gray-600 hero-text leading-normal sm:leading-normal lg:leading-normal md:leading-normal"},[t._v("\n              Hello, I am "),e("strong",{staticClass:"font-medium"},[t._v("Sanjay")]),t._v(", "),e("br"),t._v("\n              a\n              "),e("strong",{staticClass:"text-gray-800 font-medium"},[t._v("\n                Full Stack Developer\n              ")])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("a",{staticClass:"bg-blue-600 text-white rounded-md shadow-sm px-6 py-3 text-sm sm:text-base",attrs:{href:"#work"}},[t._v("\n                View My Work\n              ")])]),t._v(" "),e("div",{staticClass:"flex rounded-lg mt-12 md:mt-16"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Projects:l(264).default,SkillsAndExperience:l(271).default})}}]);