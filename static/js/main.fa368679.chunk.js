(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),u=n(2),l=n(3),i=n(7),s=n(4),f=n(8),p=(n(23),n(6));var m=function(e){return a.a.createElement("button",{onClick:e.onClick},e.val)};n(28);var b=function(e){return function(e,t){for(var n,c,a=[],r=0;r<t;r++)c=r*t,n=e.slice().splice(c,3),a.push(n);return a}(e.cells.map(function(e,t){return a.a.createElement(m,{key:e.i,onClick:e.onClick,val:e.val})}),3).map(function(e,t){return a.a.createElement("div",{className:"Row".concat(t),key:t},e)})},O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).clickButton=function(e){n.props.onClick(e)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.game.map(function(t,n){return{key:n,onClick:function(){return e.clickButton(n)},val:t}});return a.a.createElement(b,{cells:t})}}]),t}(a.a.Component),v=Object(p.b)(function(e){return{game:e.game}},function(e){return{onClick:function(t){return e(function(e){return{type:"MOVE",payload:e}}(t))}}})(O);var j=function(e){return a.a.createElement("button",{onClick:e.clickButton},"reset")},k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).clickButton=function(){n.props.onClick()},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(j,{clickButton:function(){return e.clickButton()}})}}]),t}(a.a.Component),g=Object(p.b)(null,function(e){return{onClick:function(){return e({type:"RESET"})}}})(k),h=(n(30),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"React-Redux TicTacToe"),a.a.createElement(g,null),a.a.createElement(v,null))}}]),t}(c.Component)),y=n(5),E=n(10),d={game:Array(9).fill(null)},C=Object(y.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE":var n=e.slice(),c=0;n.forEach(function(e){"string"===typeof e&&c++});var a=t.payload;return null!==n[a]?Object.assign({},{game:Object(E.a)(n)}).game:(n[a]=c%2===0?"O":"X",Object.assign({},{game:Object(E.a)(n)}).game);case"RESET":var r=Array(9).fill(null);return Object.assign({},{game:Object(E.a)(r)}).game;default:return e}}}),w={game:Array(9).fill(null)},B=Object(y.c)(C,w);o.a.render(a.a.createElement(p.a,{store:B},a.a.createElement(h,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.fa368679.chunk.js.map