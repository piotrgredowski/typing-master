(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)a=o[d],s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},s={1:0},n=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([5,0]),i()})({"2n5a":function(t,e,i){"use strict";var r=i("4UT9"),s=i.n(r);s.a},"4UT9":function(t,e,i){},5:function(t,e,i){t.exports=i("Vtdi")},HykZ:function(t,e,i){"use strict";var r=i("m71k"),s=i.n(r);s.a},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var r=i("Kw5r"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container__main container",attrs:{id:"app"}},[i("Header"),i("Typer"),i("Footer")],1)},n=[],a=(i("P6ep"),i("jgpq"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("\n        Typing master\n      ")]),i("h2",{staticClass:"subtitle"},[t._v("\n        Start typing...\n      ")])])])])}],c={name:"Header"},l=c,u=(i("2n5a"),i("KHd+")),d=Object(u["a"])(l,a,o,!1,null,"2a6706bb",null),p=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"input-container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typed,expression:"typed"}],staticClass:"input is-primary",domProps:{value:t.typed},on:{keydown:function(e){t.startTimer()},keyup:function(e){t.handleWriting()},input:function(e){e.target.composing||(t.typed=e.target.value)}}})]),i("div",{staticClass:"words-container"},[i("div",{staticClass:"word"},[t._l(t.words[0],function(e,r){return[i("span",{key:e+r,staticClass:"letter",class:{correct:"correct"===t.letterStatus(r),incorrect:"incorrect"===t.letterStatus(r),idle:"idle"===t.letterStatus(r)}},[t._v("\n          "+t._s(e)+"\n        ")])]}),t._v(" \n    ")],2),t._l(t.words.slice(1,7),function(e,r){return i("div",{key:e+r,staticClass:"word"},[t._l(e,function(e,r){return[i("span",{key:e+r,staticClass:"letter"},[t._v("\n          "+t._s(e)+"\n        ")])]}),t._v(" \n    ")],2)})],2),i("div",{staticClass:"statistics tile is-ancestor"},[i("div",{staticClass:"time tile is-3 is-parent is-vertical"},[i("div",{staticClass:"is-tile"},[t._v("Time")]),i("div",{staticClass:"is-tile"},[t._v(t._s(t.timer.time/1e3)+"s")])]),i("div",{staticClass:"correct-words tile is-3 is-parent is-vertical"},[i("div",{staticClass:"is-tile"},[t._v("Correct words")]),i("div",{staticClass:"is-tile"},[t._v(t._s(t.corrects))])]),i("div",{staticClass:"mistaken-words tile is-3 is-parent is-vertical"},[i("div",{staticClass:"is-tile"},[t._v("Mistakes")]),i("div",{staticClass:"is-tile"},[t._v(t._s(t.mistakes))])])])])},v=[],h=(i("pIFo"),i("KKXr"),i("xmWZ")),m=i("qpph"),y=i("oyJW"),_=function(){function t(){Object(h["a"])(this,t),Object(y["a"])(this,"delta",10),Object(y["a"])(this,"interval",void 0),Object(y["a"])(this,"time",0)}return Object(m["a"])(t,[{key:"constuctor",value:function(){}},{key:"start",value:function(){var t=this;this.interval=setInterval(function(){t.time+=t.delta},this.delta)}},{key:"stop",value:function(){clearInterval(this.interval)}}]),t}(),g={name:"Typer",data:function(){return{typed:"",words:["Lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit"],targetWord:"",writtenText:"",started:!1,timer:new _,corrects:0,mistakes:0}},created:function(){this.targetWord=this.words[0]+" "},methods:{wordAsArray:function(t){return t.split()},handleWriting:function(){var t=this;if(this.typedTrimmed()===this.words[this.words.length-1]&&"incorrect"!==this.letterStatus(this.typed,-1)&&this.timer.stop(),""!==this.targetWord){var e=this.typedTrimmed().length;this.targetWord.slice(0,e)!==this.typedTrimmed()&&(this.mistakes+=1)}this.typedTrimmed()===this.targetWord&&(this.targetWord=this.words[1]+" ",this.words.shift(),this.$nextTick(function(){t.typed=""}),this.corrects+=1)},letterStatus:function(t){if(""!==this.targetWord){if(this.typedTrimmed()[t]===this.targetWord[t])return"correct";if(this.typedTrimmed().length-1>=t&&this.typedTrimmed()[t]!==this.targetWord[t])return"incorrect"}return"idle"},startTimer:function(){this.started||(this.started=!0,this.timer.start())},stopTimer:function(){this.timer.stop(),this.started=!1},typedTrimmed:function(){return this.typed.replace(/^\s+/,"")}}},b=g,w=(i("HykZ"),Object(u["a"])(b,f,v,!1,null,null,null)),C=w.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[t._v("\n    by piotrgredowski\n")])},k=[],j={},O=j,x=(i("dNds"),Object(u["a"])(O,T,k,!1,null,null,null)),W=x.exports,S={name:"app",components:{Header:p,Typer:C,Footer:W}},P=S,$=(i("yxc6"),Object(u["a"])(P,s,n,!1,null,"5363fa3f",null)),H=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(H)}}).$mount("#app")},bpsb:function(t,e,i){},dNds:function(t,e,i){"use strict";var r=i("igBe"),s=i.n(r);s.a},igBe:function(t,e,i){},m71k:function(t,e,i){},yxc6:function(t,e,i){"use strict";var r=i("bpsb"),s=i.n(r);s.a}});
//# sourceMappingURL=app.e1ec1884.js.map