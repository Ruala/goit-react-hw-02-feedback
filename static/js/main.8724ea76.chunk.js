(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),o=a(3),i=a(4),u=a(5),s=a(6),d=a(7),b=(a(13),function(e){var t=e.children;return c.a.createElement("div",{className:"Container"},t)}),v=(a(14),function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:"Section"},c.a.createElement("h3",{className:"Section__title"},t),a)});v.defaultProps={children:""};var f=v,m=(a(15),function(e){var t=e.options,a=e.onLeaveFeedback,n=t.map((function(e){var t=e.length>0?e[0].toUpperCase()+e.slice(1):"";return c.a.createElement("button",{className:"FeedbackOptions__button",key:e,type:"button",onClick:function(){return a(e)}},t)}));return c.a.createElement("div",null,n)}),h=(a(16),function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return c.a.createElement("ul",{className:"Statistics"},c.a.createElement("li",null,"Good: ",t),c.a.createElement("li",null,"Neutral: ",a),c.a.createElement("li",null,"Bad: ",n),c.a.createElement("li",null,"Total: ",r),c.a.createElement("li",null,"Positive feedback: ",l,"%"))});h.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var k=h,p=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(u.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state,t=e.good,a=t+e.neutral+e.bad;return a>0?Math.round(100*t/a):0}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),l=this.countPositiveFeedbackPercentage();return c.a.createElement(b,null,c.a.createElement(f,{title:"Please leave feedback"},c.a.createElement(m,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick})),c.a.createElement(f,{title:"Statistics"},r>0?c.a.createElement(k,{good:t,neutral:a,bad:n,total:r,positivePercentage:l}):"No feedback given"))}}]),a}(n.Component);a(17);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.8724ea76.chunk.js.map