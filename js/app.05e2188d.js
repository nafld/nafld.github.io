(function(e){function t(t){for(var r,n,s=t[0],i=t[1],f=t[2],p=0,c=[];p<s.length;p++)n=s[p],l[n]&&c.push(l[n][0]),l[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(c.length)c.shift()();return o.push.apply(o,f||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==l[i]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},l={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var m=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),l=a.n(r);l.a},"078b":function(e,t,a){},"4f8a":function(e,t,a){e.exports=a.p+"img/gear.1e7d7261.gif"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",{staticClass:"app-header",attrs:{height:"90px"}},[r("div",{staticStyle:{display:"flex"}},[r("img",{staticClass:"app-gearImg",attrs:{alt:"gear",src:a("4f8a")}}),r("img",{staticClass:"app-gearImg",attrs:{alt:"gear",src:a("f65d")}}),r("span",{staticClass:"app-headerTitle"},[e._v("NAFLD (Non-Alcoholic Fatty Liver Disease)")])])]),r("el-container",[r("div",{staticClass:"baseMain-baseContainer"},[r("form-one"),r("result-modal")],1)])],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-baseContainer"},[e._m(0),a("el-form",{ref:"form",staticClass:"app-form",attrs:{model:e.form,"label-width":"150px","label-position":"top"}},[a("el-form-item",{attrs:{label:"ชื่อ-สกุล"}},[a("div",{staticStyle:{display:"flex"}},[a("el-input",{attrs:{placeholder:"ชื่อ"},model:{value:e.form.firstname,callback:function(t){e.$set(e.form,"firstname",t)},expression:"form.firstname"}}),e._v("  \n        "),a("el-input",{attrs:{placeholder:"สกุล"},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}})],1)]),a("el-form-item",{attrs:{label:"เพศ"}},[a("el-radio-group",{model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[a("el-radio",{attrs:{border:"",label:"male"}},[e._v("ชาย")]),a("el-radio",{attrs:{border:"",label:"female"}},[e._v("หญิง")])],1)],1),a("el-form-item",{attrs:{label:"อายุ"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}},[a("template",{slot:"append"},[e._v("ปี")])],2)],1),a("el-form-item",{attrs:{label:"น้ำหนัก"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}},[a("template",{slot:"append"},[e._v("kg")])],2)],1),a("el-form-item",{attrs:{label:"ส่วนสูง"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}},[a("template",{slot:"append"},[e._v("cm")])],2)],1),a("el-form-item",{attrs:{label:"สูบบุหรี่อยู่"}},[a("el-radio-group",{model:{value:e.form.smokes,callback:function(t){e.$set(e.form,"smokes",t)},expression:"form.smokes"}},[a("el-radio",{attrs:{border:"",label:!0}},[e._v("ใช่")]),a("el-radio",{attrs:{border:"",label:!1}},[e._v("ไม่")])],1)],1)],1),e._m(1),a("el-form",{ref:"form",staticClass:"app-form",attrs:{model:e.form,"label-width":"150px","label-position":"top"}},[a("el-form-item",{attrs:{label:"ดัชนีมวลกาย (BMI)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.bmi,callback:function(t){e.$set(e.form,"bmi",t)},expression:"form.bmi"}},[a("template",{slot:"append"},[e._v("\n          kg/m\n          "),a("sup",[e._v("2")])])],2)],1),a("el-form-item",{attrs:{label:"รอบเอวต่อรอบสะโพก (WHR)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.whr,callback:function(t){e.$set(e.form,"whr",t)},expression:"form.whr"}},[a("template",{slot:"append"},[e._v("cm/cm")])],2)],1),a("el-form-item",{attrs:{label:"AST"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.ast,callback:function(t){e.$set(e.form,"ast",t)},expression:"form.ast"}},[a("template",{slot:"append"},[e._v("U/L")])],2)],1),a("el-form-item",{attrs:{label:"ALT"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.alt,callback:function(t){e.$set(e.form,"alt",t)},expression:"form.alt"}},[a("template",{slot:"append"},[e._v("U/L")])],2)],1),a("el-form-item",{attrs:{label:"เป็นโรคเบาหวาน (T2DM)"}},[a("el-radio-group",{model:{value:e.form.t2dm,callback:function(t){e.$set(e.form,"t2dm",t)},expression:"form.t2dm"}},[a("el-radio",{attrs:{border:"",label:!0}},[e._v("เป็น")]),a("el-radio",{attrs:{border:"",label:!1}},[e._v("ไม่เป็น")])],1)],1),a("el-form-item",{attrs:{label:"Hemoglobin Atc (HbAtc)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.hbatc,callback:function(t){e.$set(e.form,"hbatc",t)},expression:"form.hbatc"}},[a("template",{slot:"append"},[e._v("CM")])],2)],1)],1),a("div",[a("el-button",{attrs:{type:"primary"}},[e._v("แสดงผล")])],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-titleBox"},[a("span",{staticClass:"form-titleSpan"},[e._v("ข้อมูลทั่วไป")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-titleBox"},[a("span",{staticClass:"form-titleSpan"},[e._v("ข้อมูลที่จำเป็น")])])}],i={data:function(){return{form:{firstName:"",lastName:"",gender:"",age:"",weight:"",height:"",smokes:"",bmi:"",whr:"",ast:"",alt:"",t2dm:"",hbatc:""}}}},f=i,m=(a("a6e6"),a("2877")),p=Object(m["a"])(f,n,s,!1,null,null,null),c=p.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},d=[],b={},v=b,h=Object(m["a"])(v,u,d,!1,null,"a976767e",null),g=h.exports,_={name:"app",components:{FormOne:c,ResultModal:g}},x=_,k=(a("034f"),Object(m["a"])(x,l,o,!1,null,null,null)),y=k.exports,w=a("5c96"),$=a.n(w);a("0fae");r["default"].use($.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,a){},a6e6:function(e,t,a){"use strict";var r=a("078b"),l=a.n(r);l.a},f65d:function(e,t,a){e.exports=a.p+"img/long.bea77dfa.jpg"}});
//# sourceMappingURL=app.05e2188d.js.map