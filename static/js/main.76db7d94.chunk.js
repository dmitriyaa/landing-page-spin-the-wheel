(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,t,e){n.exports=e.p+"static/media/wheel.11762ce7.png"},21:function(n,t,e){n.exports=e.p+"static/media/highlighter.1667681e.png"},22:function(n,t,e){n.exports=e.p+"static/media/button.746c0b31.png"},23:function(n,t,e){n.exports=e.p+"static/media/button-active.543106f4.png"},24:function(n,t,e){n.exports=e.p+"static/media/background.d2d5643e.png"},25:function(n,t,e){n.exports=e.p+"static/media/title.0cb8b256.png"},26:function(n,t,e){n.exports=e.p+"static/media/coins.deb94f51.png"},29:function(n,t,e){n.exports=e(42)},41:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i),a=e(8),r=e.n(a),s=e(9),c=e(10),u=e(12),l=e(11),p=e(13),d=e(1),h=e(2),f=e(44),m=e(45),b=e(46),g=function(){return o.a.createElement("div",null,"Footer")},v=[{id:0,name:"",bonus:"200% No Rules",spins:"",code:"WHEEL200",deposit:"",wheelPosition:0},{id:1,name:"Fire Dragon",bonus:"250%",spins:"20",code:"WHEELFD250",deposit:"",wheelPosition:45},{id:2,name:"",bonus:"350 No Max",spins:"",code:"WHEEL350",deposit:"",wheelPosition:90},{id:3,name:"Empress Wu",bonus:"275%",spins:"30",code:"WHEELEW275",deposit:"",wheelPosition:135},{id:4,name:"",bonus:"300% No Max",spins:"",code:"WHEEL300",deposit:"",wheelPosition:180},{id:5,name:"Plentiful Treasure",bonus:"320%",spins:"40",code:"WHEELPT320",deposit:"",wheelPosition:225},{id:6,name:"",bonus:"250% No Max",spins:"",code:"WHEEL250",deposit:"",wheelPosition:270},{id:7,name:"Scuba Fishing",bonus:"300%",spins:"70",code:"WHEELSF300",deposit:"",wheelPosition:315}],x=function(){return v[Math.floor(Math.random()*v.length)]},w=v;function E(){var n=Object(d.a)(["\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  width: 751px;\n  max-width: 100%;\n  height: 751px;\n  max-height: 100%;\n  @media (max-width: 751px) {\n    width: 100vw;\n    height: 100vw;\n  }\n"]);return E=function(){return n},n}var P=h.a.div(E()),S=e(20),W=e.n(S);function j(){var n=Object(d.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(",") center center / cover no-repeat;\n  transform: rotate(","deg);\n  animation-name: ",";\n  animation-duration: ","s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.44, 0.14, 0.58, 1.11);\n  /* animation-timing-function: linear; */\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n    from {\n      transform: rotate(","deg);\n    }\n    to {\n      transform: rotate(","deg);\n    }\n  "]);return O=function(){return n},n}var k=h.a.div(j(),W.a,function(n){return n.currentWheelPosition},function(n){return t=n.nextWheelPosition,e=n.currentWheelPosition,Object(h.b)(O(),e,t);var t,e},function(n){return n.spinDuration}),y=e(21),z=e.n(y);function H(){var n=Object(d.a)(["\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-100%);\n  width: 751px;\n  height: calc(751px / 2);\n  background: url(",") center center / cover no-repeat;\n  @media (max-width: 751px) {\n    width: 100vw;\n    height: calc(100vw / 2);\n  }\n"]);return H=function(){return n},n}var L=h.a.div(H(),z.a),D=e(22),M=e.n(D),F=e(23),A=e.n(F);function N(){var n=Object(d.a)(["\n  position: absolute;\n  z-index: 2;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  display: block;\n  width: 247px;\n  height: 294px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: ",";\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: none;\n  cursor: ",";\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 751px) {\n    width: calc(24700vw / 751);\n    height: calc((24700vw / 751) * 294 / 247);\n  }\n"]);return N=function(){return n},n}var C=h.a.button.attrs(function(n){return{disabled:n.disabled}})(N(),function(n){return n.disabled?"url(".concat(A.a,")"):"url(".concat(M.a,")")},function(n){return n.disabled?"not-allowed":"pointer"}),T=function(n){function t(){var n,e;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=Object(u.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(o)))).state={bonus:w[0],currentWheelPosition:0,nextWheelPosition:0},e.spin=function(){var n=e.props,t=n.spinsAmount,i=n.spinDuration,o=n.setSpinningStatus,a=x(),r=e.state.nextWheelPosition,s=r<360?360*t+a.wheelPosition:360*Math.ceil(r/360)+360*t+a.wheelPosition;e.setState({bonus:a,currentWheelPosition:r,nextWheelPosition:s}),o(!0),setTimeout(function(){o(!1)},1e3*i)},e}return Object(p.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){var n=this.state,t=n.nextWheelPosition,e=n.currentWheelPosition,i=this.props.isSpinning;return console.log(this.state),o.a.createElement(P,null,o.a.createElement(k,{currentWheelPosition:e,nextWheelPosition:t,spinDuration:this.props.spinDuration}),o.a.createElement(L,null),o.a.createElement(C,{onClick:this.spin,disabled:i}))}}]),t}(o.a.Component),J=e(24),X=e.n(J),Y=e(25),B=e.n(Y),G=e(26),I=e.n(G);function R(){var n=Object(d.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: ",";\n  transition: 1s;\n"]);return R=function(){return n},n}function q(){var n=Object(d.a)(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem 0;\n  background: url(",") center center / cover no-repeat;\n"]);return q=function(){return n},n}function K(){var n=Object(d.a)(["\n  position: relative;\n  z-index: 11;\n  margin-bottom: -140px;\n  text-align: center;\n\n  @media (max-width: 740px) {\n    margin-bottom: -18.5vw;\n  }\n"]);return K=function(){return n},n}var Q=h.a.div(K()),U=h.a.div(q(),X.a),V=h.a.div(R(),function(n){return n.visible?"scale(1)":"scale(0)"}),Z=function(n){function t(){var n,e;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=Object(u.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(o)))).state={firstSpin:!0,isSpinning:!1},e.setSpinningStatus=function(n){e.setState({firstSpin:!1,isSpinning:n})},e}return Object(p.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{noGutters:!0},o.a.createElement(m.a,{xs:12},o.a.createElement(U,null,o.a.createElement(Q,null,o.a.createElement(b.a,{src:B.a,alt:"Spin the wheel & find your fortune"})),o.a.createElement(T,{isSpinning:this.state.isSpinning,spinsAmount:3,spinDuration:3,setSpinningStatus:this.setSpinningStatus}),o.a.createElement(V,{visible:!this.state.isSpinning&&!this.state.firstSpin},o.a.createElement("img",{src:I.a,alt:""})))),o.a.createElement(m.a,{xs:12,style:{background:"black"}},o.a.createElement(g,null)))}}]),t}(o.a.Component);e(40),e(41);r.a.render(o.a.createElement(Z,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.76db7d94.chunk.js.map