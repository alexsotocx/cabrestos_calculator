(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,g=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(g.length)g.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cabrestos_calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1154:function(t,e,n){"use strict";var r=n("2598"),a=n.n(r);a.a},2598:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"app"},[n("h1",{staticClass:"title"},[t._v("Calculadora de cabrestos")]),n("article",{staticClass:"language-switcher"},[n("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return t.swtichLanguage("es")}}},[t._v(" Español ")]),n("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return t.swtichLanguage("pt")}}},[t._v(" Portugues ")])]),n("section",{staticClass:"top"},[n("section",{staticClass:"form"},[n("article",{staticClass:"form-group"},[n("label",{attrs:{for:"flagSupportLengthMeters"}},[t._v(t._s(t.$t("supportLength"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.flagSupportLengthMeters,expression:"flagSupportLengthMeters"}],staticClass:"form-control",attrs:{name:"flagSupportLengthMeters",type:"number",inputmode:"numeric",required:""},domProps:{value:t.flagSupportLengthMeters},on:{input:function(e){e.target.composing||(t.flagSupportLengthMeters=e.target.value)}}})]),n("article",{staticClass:"form-group"},[n("label",{attrs:{for:"centerLineLengthMeters"}},[t._v(t._s(t.$t("centerLineLength"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.centerLineLengthMeters,expression:"centerLineLengthMeters"}],staticClass:"form-control",attrs:{name:"centerLineLengthMeters",type:"number",inputmode:"numeric",required:""},domProps:{value:t.centerLineLengthMeters},on:{input:function(e){e.target.composing||(t.centerLineLengthMeters=e.target.value)}}})]),n("article",{staticClass:"form-group"},[n("label",{attrs:{for:"lineSeparationCm"}},[t._v(t._s(t.$t("separation"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineSeparationCm,expression:"lineSeparationCm"}],staticClass:"form-control",attrs:{name:"lineSeparationCm",type:"number",inputmode:"numeric",required:""},domProps:{value:t.lineSeparationCm},on:{input:function(e){e.target.composing||(t.lineSeparationCm=e.target.value)}}})]),n("article",{staticClass:"form-group buttons"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.valid},on:{click:t.calculate}},[t._v(" Calcular ")]),n("button",{staticClass:"btn btn-warning",on:{click:t.reset}},[t._v("Reiniciar")])])]),t._m(0)]),t.resultsFilled?n("section",{ref:"resultsContainer",staticClass:"results"},[n("h2",[t._v("Resultados")]),n("button",{staticClass:"copy btn btn-success",on:{click:t.copy}},[t._v("Copiar")]),n("article",{ref:"results",staticClass:"result-container"},[n("section",{staticClass:"suggestion"},[n("h3",[t._v("Usando configuración ideal:")]),n("ul",[n("li",[n("span",{staticClass:"entry"},[t._v(t._s(t.$t("supportLength")))]),t._v(" "+t._s(t.suggestion.flagSupportLength/100)+"m ")]),n("li",[n("span",{staticClass:"entry"},[t._v(t._s(t.$t("centerLineLength")))]),t._v(" "+t._s(t.suggestion.centerLineLength/100)+"m ")]),n("li",[n("span",{staticClass:"entry"},[t._v(t._s(t.$t("separation")))]),t._v(" "+t._s(t.suggestion.lineSeparation)+"cm ")])])]),n("article",{staticClass:"result-table"},[n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("##")]),n("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("length")))])])]),n("tbody",[t._l(t.results,(function(e,r){return[n("tr",{key:r},[n("td",{staticClass:"bold",attrs:{scope:"row"}},[t._v(t._s(r+1))]),n("td",[t._v(t._s((e/100).toFixed(2)))])])]})),n("tr",[n("td",{staticClass:"bold",attrs:{scope:"row"}},[t._v("Total")]),n("td",[t._v(t._s((t.totalAmount/100).toFixed(2)))])])],2)])])])]):t._e()])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"logo"},[r("a",{attrs:{href:"https://www.facebook.com/Disproyect"}},[r("img",{attrs:{src:n("cf05")}}),r("h3",[t._v("https://www.facebook.com/Disproyect/")])])])}],o=n("9ab4"),i=n("60a3"),l=function(){function t(t,e,n){this.flagSupportLength=t,this.lineSeparation=e,this.centerLineLength=n}return t.prototype.validateInput=function(){return this.flagSupportLength%this.lineSeparation===0},t.prototype.generateSuggestion=function(){if(this.validateInput())return this;var e=Math.ceil(this.flagSupportLength/this.lineSeparation)*this.lineSeparation;return new t(e,this.lineSeparation,this.centerLineLength)},t.prototype.calculateCabrestos=function(){if(!this.validateInput())throw new Error("Invalid Configuration");for(var t=[],e=this.flagSupportLength/2,n=this.flagSupportLength/this.lineSeparation+1,r=0;r<n;r++){var a=Math.abs(e-r*this.lineSeparation),s=this.distancePit(a,this.centerLineLength);t.push(+s.toFixed(2))}return t},t.fromStandardInput=function(e,n,r){return new t(100*e,n,100*r)},t.prototype.distancePit=function(t,e){return Math.sqrt(t*t+e*e)},t}(),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.flagSupportLengthMeters=0,e.centerLineLengthMeters=0,e.lineSeparationCm=0,e.suggestion=null,e.results=null,e.locale="es",e}return Object(o["b"])(e,t),e.prototype.beforeMount=function(){this.$i18n.locale=navigator.language},e.prototype.swtichLanguage=function(t){this.locale=this.$i18n.locale=t},e.prototype.reset=function(){this.flagSupportLengthMeters=0,this.centerLineLengthMeters=0,this.lineSeparationCm=0,this.results=null,this.suggestion=null},e.prototype.calculate=function(){var t=this;if(this.valid){var e=l.fromStandardInput(Number(this.flagSupportLengthMeters),Number(this.lineSeparationCm),Number(this.centerLineLengthMeters));e.validateInput()||(e=e.generateSuggestion()),this.suggestion=e,this.results=e.calculateCabrestos(),setTimeout((function(){t.$refs.resultsContainer.scrollIntoView({behavior:"smooth",block:"start"})}),100)}},e.prototype.copy=function(){var t=document.createRange();t.selectNodeContents(this.$refs.results);var e=window.getSelection();e&&(e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges())},Object.defineProperty(e.prototype,"resultsFilled",{get:function(){return this.results&&this.results.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return 0!==this.flagSupportLengthMeters&&0!==this.centerLineLengthMeters&&0!==this.lineSeparationCm},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"totalAmount",{get:function(){return this.resultsFilled?this.results.reduce((function(t,e){return t+e}),0):0},enumerable:!0,configurable:!0}),e=Object(o["a"])([Object(i["a"])({})],e),e}(i["b"]),u=c,p=u,g=(n("5c0b"),n("1154"),n("2877")),f=Object(g["a"])(p,a,s,!1,null,"ff108fb0",null),h=f.exports,d=n("a925");r["a"].config.productionTip=!1,r["a"].use(d["a"]);var m={es:{supportLength:"Largo de la antena(m)",centerLineLength:"Largo del cabresto central(m)",separation:"Separación entre cabrestos(cm)",length:"Longitud(m)"},pt:{supportLength:"Largura da antena(m)",centerLineLength:"Longitude do cabresto central(m)",separation:"Separação de cabresto(cm)",length:"Longitude(m)"}},b=new d["a"]({messages:m,locale:"es",fallbackLocale:"es"});new r["a"]({i18n:b,render:function(t){return t(h)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.5150b904.png"}});