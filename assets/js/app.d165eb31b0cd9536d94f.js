webpackJsonp([0],{"+C7s":function(e,t){},IBcZ:function(e,t,a){e.exports=a.p+"img/hacktober.1b1a02f.svg"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o={name:"NavBar",data:function(){return{options:[{title:"Romanesco & Open sans",primary:"Romanesco",secondary:"Open Sans",git:"Dvd1234",url:"https://fonts.googleapis.com/css2?family=Open+Sans&family=Romanesco&display=swap"},{title:"Montserrat & Open sans",primary:"Montserrat",secondary:"Open Sans",git:"itsvvishnu",url:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&family=Open+Sans&display=swap"},{title:"Crimson Pro & Literata",primary:"Crimson Pro",secondary:"Literata",git:"AshKemp",url:"https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Literata"},{title:"Quando & Zilla Slab",primary:"Quando",secondary:"Zilla Slab",git:"madmaxWMFU",url:"https://fonts.googleapis.com/css2?family=Quando&family=Zilla+Slab:ital,wght@0,400;0,500;0,600;1,400&display=swap"},{title:"Kalam & Lemonada",primary:"Kalam",secondary:"Lemonada",git:"madmaxWMFU",url:"https://fonts.googleapis.com/css2?family=Kalam&family=Lemonada&display=swap"},{title:"Space Mono & Roboto",primary:"Space Mono",secondary:"Roboto",git:"jmannfeld",url:"https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Space+Mono"},{title:"Raleway & Playfair Display",primary:"Raleway",secondary:"Playfair Display",git:"lkleindesigns",url:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;800&family=Raleway:wght@500;800&display=swap"},{title:"Source Sans Pro 200 & Amiko",primary:"Source Sans Pro",secondary:"Amiko",git:"andrewsnapz",url:"https://fonts.googleapis.com/css2?family=Amiko&family=Source+Sans+Pro:wght@300&display=swap"},{title:"Markazi Text & Open sans",primary:"Markazi Text",secondary:"Open sans",url:"https://fonts.googleapis.com/css2?family=Markazi+Text:wght@450&display=swap"},{title:"Lora & Merriweather",primary:"Lora",secondary:"Merriweather",git:"marwa7246",url:"https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&display=swap"},{title:"Rancho with shadow-multiple Effect",primary:"Rancho",secondary:"shadow-multiple",git:"camiloibarrayepes",url:"https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple"},{title:"Rancho with shadow-multiple Effect, 3d Float",primary:"Rancho",secondary:"shadow-multiple",git:"camiloibarrayepes",url:"https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple|3d-float"},{title:"Architects Daughter",primary:"Architects",secondary:"Daughter",git:"camiloibarrayepes",url:"https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"},{title:"Lobster Font",primary:"Lobster",secondary:"",git:"camiloibarrayepes",url:"https://fonts.googleapis.com/css2?family=Lobster&display=swap"},{title:"Fascinate and Red Hat",primary:"Fascinate",secondary:"RedHat",git:"camiloibarrayepes",url:"https://fonts.googleapis.com/css2?family=Fascinate&family=Red+Hat+Text&display=swap"}],item:{value:"",text:""},style:null}},methods:{changeFont:function(e){if(this.$store.dispatch("updateFont",{font:e}),null!=e){a=e.url,s=document.head,(o=document.createElement("link")).type="text/css",o.rel="stylesheet",o.href=a,s.appendChild(o);var t=setInterval(function(){var a=document.querySelector("body"),s=document.getElementById("loader");s.classList.add("active"),a.classList.remove("fade-in"),document.fonts.check("1em "+e.primary)&&document.fonts.check("1em "+e.secondary)&&(a.classList.add("fade-in"),s.classList.remove("active"),clearInterval(t))},100)}var a,s,o}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("nav",[t("div",{staticClass:"logo"},[t("h3",{style:this.$store.state.primary},[this._v("Font Pair")])]),this._v(" "),t("div",{staticClass:"select"},[t("v-select",{style:this.$store.state.secondary,attrs:{options:this.options,label:"title",placeholder:"Choose a font pair"},on:{input:this.changeFont}})],1)])])},staticRenderFns:[]};var i={name:"Wrapper",components:{NavBar:a("VU/8")(o,n,!1,function(e){a("kooe")},null,null).exports},data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper-container"},[a("NavBar"),e._v(" "),a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("div",{staticClass:"part"},[a("h2",{style:e.$store.state.primary},[e._v("Hacktoberfest")]),e._v(" "),a("p",{style:e.$store.state.secondary},[e._v("\n        Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio. Hacktoberfest is open to everyone in our global community! Five quality pull requests must be submitted to public GitHub repositories.\n      ")]),e._v(" "),a("div",{staticClass:"author"},[a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!=e.$store.state.name,expression:"$store.state.name != undefined"}],style:e.$store.state.secondary},[e._v("Fonts picked by")]),e._v(" "),a("a",{staticClass:"git",style:e.$store.state.secondary,attrs:{href:e.$store.state.git}},[e._v(e._s(e.$store.state.name))])])]),e._v(" "),e._m(1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader",attrs:{id:"loader"}},[t("div",{staticClass:"wrapper"},[t("span",[this._v("Loading fonts")]),this._v(" "),t("div",{staticClass:"line"}),this._v(" "),t("div",{staticClass:"subline inc"}),this._v(" "),t("div",{staticClass:"subline dec"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"part"},[t("a",{attrs:{href:"https://hacktoberfest.digitalocean.com/"}},[t("img",{attrs:{src:a("IBcZ"),alt:""}})])])}]};var l={name:"App",components:{Wrapper:a("VU/8")(i,r,!1,function(e){a("gM1X")},null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Wrapper")],1)},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(e){a("+C7s")},null,null).exports,p=a("T1ft"),m=a.n(p),u=(a("R870"),a("NYxO"));s.a.use(u.a);var f=new u.a.Store({state:{primary:{fontFamily:""},secondary:{fontFamily:""},git:null,name:null},mutations:{newFont:function(e,t){var a=t.primary,s=t.secondary,o=t.git;e.primary.fontFamily=a,e.secondary.fontFamily=s,e.git="https://github.com/"+o,e.name=o}},actions:{updateFont:function(e,t){null!=t.font?e.commit("newFont",{primary:t.font.primary,secondary:t.font.secondary,git:t.font.git}):e.commit("newFont",{primary:"",secondary:""})}}});s.a.component("v-select",m.a),s.a.config.productionTip=!1,new s.a({el:"#app",store:f,components:{App:d},template:"<App/>"})},R870:function(e,t){},gM1X:function(e,t){},kooe:function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\node-sass\\vendor\\win32-x64-72\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x\n\nFound bindings for the following environments:\n  - Linux 64-bit with Node.js 12.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:1137:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)\n    at Module.load (internal/modules/cjs/loader.js:985:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:878:14)\n    at Module.require (internal/modules/cjs/loader.js:1025:19)\n    at require (internal/modules/cjs/helpers.js:72:18)\n    at getDefaultSassImpl (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\sass-loader\\dist\\index.js:198:10)\n    at Object.loader (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\sass-loader\\dist\\index.js:80:29)\n    at D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4\n    at D:\\Hacktober fest\\2K20\\font-pair\\app\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)")}},["NHnr"]);
//# sourceMappingURL=app.d165eb31b0cd9536d94f.js.map