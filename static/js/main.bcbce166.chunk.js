(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.intervalId=0,e.getOnlyTime=function(e){return e.toUTCString().slice(-12,-4)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({date:new Date}),this.intervalId=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.info(e.getOnlyTime(t))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.name,n=this.props.name;n!==t&&console.debug("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:this.getOnlyTime(e)})]})}}]),n}(u.a.Component),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.getRandomName=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)},e.showClock=function(t){t.preventDefault(),e.setState({hasClock:!0})},e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:e.getRandomName()})}),3300),document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(m,{name:t})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bcbce166.chunk.js.map