(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{552:function(e,t,n){e.exports={mb10:"_wPhnp",tools:"_UsRbL",mr10:"_1bhVi"}},555:function(e,t,n){"use strict";n.r(t);n(28),n(29),n(34);var r=n(1),o=n.n(r),a=n(73),c=n(200),u=n.n(c),i=n(539),l=n(556),s=n(553),f=n(108);var p,b,m,y,h,O,v=Object(l.a)("表单预览-schemaJson"),d={preview:Object(s.a)((m=function(e,t){return e.set("schemaJson",Object(f.Map)(t.payload))},(b=v)in(p={})?Object.defineProperty(p,b,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[b]=m,p),Object(f.fromJS)({schemaJson:null}))},j=(n(290),n(201)),w=(n(291),n(188)),S=(n(76),n(90)),g=(n(65),n(18)),E=(n(293),n(267)),J=(n(536),n(538)),_=n(0),k=n.n(_),x=n(88),P=n(537),C=n(198),T=n(552),A=n.n(T),N=n(542),R=n(197);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q,z=Object(P.b)({schemaJson:Object(P.a)(function(e){return e.has("preview")?e.get("preview"):null},function(e){return null!==e&&e.get("schemaJson")?e.get("schemaJson").toJS():null})}),B=Object(C.b)(z,function(e){return{action:Object(x.b)({setSchemaJson:v},e)}})((O=h=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=I(t).apply(this,arguments),e=!r||"object"!==V(r)&&"function"!=typeof r?M(n):r,U(M(M(e)),"state",void 0),U(M(M(e)),"handleRedoJsonSchema",function(t){var n=e.state.textAreaValue,r=e.props.action,o=null;try{o=JSON.parse(n),r.setSchemaJson(o)}catch(e){J.a.error("JSON格式错误！")}}),U(M(M(e)),"handleInputTextAreaChange",function(t){e.setState({textAreaValue:t.target.value})});var o=e.props.schemaJson;return e.state={textAreaValue:null===o?"":JSON.stringify(o,null,2)},e}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["Component"]),n=t,(a=[{key:"handleOnFormOkClick",value:function(e,t,n){E.a.info({content:o.a.createElement("div",null,o.a.createElement("h4",null,"表单的值为："),o.a.createElement("pre",null,JSON.stringify(t,null,2)))})}},{key:"render",value:function(){var e=this.state.textAreaValue,t=this.props.schemaJson;return o.a.createElement(r.Fragment,null,o.a.createElement("p",null,"你可以粘贴json来生成并预览表单。"),o.a.createElement(j.a,{className:A.a.mb10,type:"flex",gutter:10},o.a.createElement(w.a,{xs:24,sm:24,md:8},o.a.createElement("div",{className:A.a.tools},o.a.createElement(g.a,{className:A.a.mr10,icon:"copy",onClick:N.a.bind(this,"jsonSchemaTextArea2")},"复制"),o.a.createElement(g.a,{type:"primary",icon:"tablet",onClick:this.handleRedoJsonSchema},"生成表单")),o.a.createElement(S.a.TextArea,{id:"jsonSchemaTextArea2",rows:20,value:e,onChange:this.handleInputTextAreaChange})),o.a.createElement(w.a,{xs:24,sm:24,md:16},t?o.a.createElement(R.a,{json:t,onOk:this.handleOnFormOkClick}):null)))}}])&&F(n.prototype,a),c&&F(n,c),t}(),U(h,"propTypes",{schemaJson:k.a.object,action:k.a.objectOf(k.a.func)}),y=O))||y;function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=Object(i.a)(d)(q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,K(t).apply(this,arguments))}var n,c,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){return[o.a.createElement(u.a,{key:"helmet"},o.a.createElement("title",null,"表单预览")),o.a.createElement(a.c,{key:"main"},o.a.createElement(a.a,{path:"/Preview",component:B,exact:!0}))]}}])&&G(n.prototype,c),i&&G(n,i),t}())||q;t.default=W}}]);