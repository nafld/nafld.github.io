(function(e){function t(t){for(var r,o,i=t[0],n=t[1],c=t[2],m=0,u=[];m<i.length;m++)o=i[m],l[o]&&u.push(l[o][0]),l[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var n=a[i];0!==l[n]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},l={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=n;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),l=a.n(r);l.a},"078b":function(e,t,a){},"4f8a":function(e,t,a){e.exports=a.p+"img/gear.1e7d7261.gif"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",{staticClass:"app-header",attrs:{height:"90px"}},[r("div",{staticStyle:{display:"flex"}},[r("img",{staticClass:"app-gearImg",attrs:{alt:"gear",src:a("4f8a")}}),r("img",{staticClass:"app-gearImg",attrs:{alt:"gear",src:a("f65d")}}),r("span",{staticClass:"app-headerTitle"},[e._v("NAFLD (Non-Alcoholic Fatty Liver Disease)")]),r("span",{staticClass:"app-headerTitleSmall"},[e._v("NAFLD")])])]),r("el-container",[r("div",{staticClass:"baseMain-baseContainer"},[r("form-one")],1)])],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-baseContainer"},[a("div",{staticClass:"columns",staticStyle:{margin:"1rem"}},[a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"shady-boxy app-formBox"},[e._m(0),a("el-form",{ref:"form",staticClass:"app-form",attrs:{model:e.form,"label-width":"150px","label-position":"top"}},[a("el-form-item",{attrs:{label:"เพศ"}},[a("el-radio-group",{model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[a("el-radio",{attrs:{border:"",label:"male"}},[e._v("ชาย")]),a("el-radio",{attrs:{border:"",label:"female"}},[e._v("หญิง")])],1)],1),a("el-form-item",{attrs:{label:"อายุ"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}},[a("template",{slot:"append"},[e._v("ปี")])],2)],1),a("el-form-item",{attrs:{label:"น้ำหนัก"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}},[a("template",{slot:"append"},[e._v("kg")])],2)],1),a("el-form-item",{attrs:{label:"ส่วนสูง"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}},[a("template",{slot:"append"},[e._v("cm")])],2)],1),a("el-form-item",{attrs:{label:"สูบบุหรี่อยู่"}},[a("el-radio-group",{model:{value:e.form.smokes,callback:function(t){e.$set(e.form,"smokes",t)},expression:"form.smokes"}},[a("el-radio",{attrs:{border:"",label:!0}},[e._v("ใช่")]),a("el-radio",{attrs:{border:"",label:!1}},[e._v("ไม่")])],1)],1)],1)],1)]),a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"shady-boxy app-formBox"},[e._m(1),a("el-form",{ref:"form",staticClass:"app-form",attrs:{model:e.form,"label-width":"150px","label-position":"top"}},[a("el-form-item",{attrs:{label:"ดัชนีมวลกาย (BMI)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.bmi,callback:function(t){e.$set(e.form,"bmi",t)},expression:"form.bmi"}},[a("template",{slot:"append"},[e._v("\n                kg/m\n                "),a("sup",[e._v("2")])])],2)],1),a("el-form-item",{attrs:{label:"รอบเอวต่อรอบสะโพก (WHR)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.whr,callback:function(t){e.$set(e.form,"whr",t)},expression:"form.whr"}},[a("template",{slot:"append"},[e._v("cm/cm")])],2)],1),a("el-form-item",{attrs:{label:"AST"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.ast,callback:function(t){e.$set(e.form,"ast",t)},expression:"form.ast"}},[a("template",{slot:"append"},[e._v("U/L")])],2)],1),a("el-form-item",{attrs:{label:"ALT"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.alt,callback:function(t){e.$set(e.form,"alt",t)},expression:"form.alt"}},[a("template",{slot:"append"},[e._v("U/L")])],2)],1),a("el-form-item",{attrs:{label:"เป็นโรคเบาหวาน (T2DM)"}},[a("el-radio-group",{model:{value:e.form.t2dm,callback:function(t){e.$set(e.form,"t2dm",t)},expression:"form.t2dm"}},[a("el-radio",{attrs:{border:"",label:!0}},[e._v("เป็น")]),a("el-radio",{attrs:{border:"",label:!1}},[e._v("ไม่เป็น")])],1)],1),a("el-form-item",{attrs:{label:"Hemoglobin Atc (HbAtc)"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.hbatc,callback:function(t){e.$set(e.form,"hbatc",t)},expression:"form.hbatc"}},[a("template",{slot:"append"},[e._v("CM")])],2)],1)],1),a("el-button",{staticStyle:{"font-size":"large",width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.calculateResult()}}},[e._v("แสดงผล")])],1)]),a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"shady-boxy app-formBox app-resultBox"},[a("div",[""!=e.result?a("div",[a("div",{staticStyle:{"margin-top":"1rem"}},[a("span",[e._v("ระดับความเสี่ยง")]),a("br"),a("div",{staticClass:"app-resultDataBox"},[a("div",{staticClass:"circle"},["low"==e.result?a("span",{staticClass:"app-resultNum"},[e._v("A")]):"mid"==e.result?a("span",{staticClass:"app-resultNum"},[e._v("B")]):"high"==e.result?a("span",{staticClass:"app-resultNum"},[e._v("C")]):e._e()])])]),a("br"),a("span",[e._v("ผลการประเมิน")]),a("div",{staticClass:"app-resultDataBox",staticStyle:{"word-break":"break-all"}},["low"==e.result?a("span",[e._v("ปกติ-เสี่ยงน้อย")]):"mid"==e.result?a("span",[e._v("ปกติ-เสี่ยงน้อย")]):"high"==e.result?a("span",[e._v("ปกติ-เสี่ยงน้อย")]):e._e()]),a("br"),a("span",[e._v("ข้อแนะนำเบื้องต้น")]),a("div",{staticClass:"app-resultDataBox"},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam nesciunt eligendi inventore, quia maxime quod voluptas, ullam repellat laborum sit consequuntur accusantium ea a possimus assumenda, necessitatibus consectetur eum!")])]):e._e()])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-titleBox"},[a("span",{staticClass:"form-titleSpan"},[e._v("ข้อมูลทั่วไป")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form-titleBox"},[a("span",{staticClass:"form-titleSpan"},[e._v("ข้อมูลที่จำเป็น")])])}],n={data:function(){return{result:"",form:{gender:"",age:"",weight:"",height:"",smokes:"",bmi:"",whr:"",ast:"",alt:"",t2dm:"",hbatc:""}}},methods:{calculateResult:function(){1==this.form.bmi?this.result="low":2==this.form.bmi?this.result="mid":this.result="high"}}},c=n,p=(a("a6e6"),a("2877")),m=Object(p["a"])(c,o,i,!1,null,null,null),u=m.exports,f={name:"app",components:{FormOne:u},data:function(){return{headerHeight:90}}},d=f,b=(a("034f"),Object(p["a"])(d,l,s,!1,null,null,null)),v=b.exports,h=a("5c96"),g=a.n(h);a("0fae");r["default"].use(g.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,t,a){},a6e6:function(e,t,a){"use strict";var r=a("078b"),l=a.n(r);l.a},f65d:function(e,t,a){e.exports=a.p+"img/long.bea77dfa.jpg"}});
//# sourceMappingURL=app.6ec3f7f0.js.map