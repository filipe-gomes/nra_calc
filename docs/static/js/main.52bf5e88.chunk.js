(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{238:function(e,t,a){e.exports=a(406)},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(204),o=(a(245),a(25)),i=a(27),s=a(26),c=a(28),u=(a(246),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("h1",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),m=(a(247),a(248),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("footer",{className:"AppFooter"},r.a.createElement("p",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),h=a(30),p=a(16),d=(a(249),a(424)),b=a(219),f=a(416),v=a(421),g=a(104),E=a(67),y=a(418),C=function(e,t){return e/1e3*t-44},O=function(e,t,a){var n=k(a),r=n.millRateHigh,l=n.millRateLow,o=n.millRateAvg,i=n.incentiveYears;return{estHigh:j(e,t,r,i),estLow:j(e,t,l,i),estAverage:j(e,t,o,i)}},k=function(e){return{millRateHigh:100,millRateLow:80,millRateAvg:90,incentiveYears:10}},j=function(e,t,a,n){var r=C(.115*e,a),l=.05*(t-e),o=C(.115*(e+l),a),i=.115*(t-l)/1e3*a;return{currentTaxes:r,newTaxes:o,incrementalTaxSavings:i,payPerYear:o,savePerYear:i,savings:i*n}},w=a(417),S=a(143),z=a.n(S),A=a(205),x=a(419),I=a(425),T=a(422),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).getAreaFromClick=function(e){a.props.setZoneFromMap(e.layer.feature.properties.Name),a.setState({selection:e.layer.feature}),a.handleHighlight()},a.render=function(){return r.a.createElement(x.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom,doubleClickZoom:!1},r.a.createElement(I.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(T.a,{key:a.state.polygons,data:a.state.polygons,onClick:a.getAreaFromClick,style:{color:"green"}}),a.state.highlight&&r.a.createElement(T.a,{key:a.state.selection,data:a.state.selection,style:{color:"yellow"}}))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11,selection:[],highlight:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleHighlight",value:function(){!0===this.state.highlight?this.setState({highlight:!1}):this.setState({highlight:!0})}},{key:"componentDidMount",value:function(){var e=Object(A.a)(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),H={textAlign:"center",marginBottom:"1em"},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleOpen=function(){a.setState({modalOpen:!0})},a.handleClose=function(){a.setState({modalOpen:!1})},a.state={modalOpen:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:H},r.a.createElement(w.a,{trigger:r.a.createElement(y.a,{fluid:!0,size:"large",onClick:this.handleOpen,color:this.props.zone?this.props.successColor:void 0},this.props.zone?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{name:"checkmark"})," Zone is Set: ",this.props.zone):this.props.message),open:this.state.modalOpen,onClose:this.handleClose},r.a.createElement(w.a.Header,null,this.props.message),r.a.createElement(w.a.Content,{image:!0},r.a.createElement(F,{setZoneFromMap:this.props.setZoneFromMap})),r.a.createElement(w.a.Actions,null,this.props.zone&&r.a.createElement(y.a,{primary:!0,fluid:!0,size:"large",onClick:this.handleClose},r.a.createElement(E.a,{name:"checkmark"}),"Done"))))}}]),t}(r.a.Component),R=[{key:"s",text:"Single-Family",value:"single"},{key:"m",text:"Multi-Family",value:"multi"},{key:"oh",text:"Other",value:"other"}],Y=[{key:"c",text:"Construction",value:"construction"},{key:"r",text:"Rehab",value:"rehab"},{key:"oi",text:"Other",value:"other"}];function P(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function $(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleCurrent=function(e){a.setState({current:P(e.target.value)})},a.handleImprovements=function(e){a.setState({afterImprovements:P(e.target.value)})},a.handleZone=function(e){a.setState({zone:P(e.target.value)})},a.setZoneFromMap=function(e){a.setState({zone:e})},a.render=function(){return r.a.createElement(d.a,{textAlign:"left",className:"NRACalculator"},r.a.createElement(b.a,null,r.a.createElement(f.a,{size:"large"},r.a.createElement(v.a,{stacked:!0},r.a.createElement(f.a.Input,{label:"Current Value",labelPosition:"left",placeholder:"Current Value",onChange:a.handleCurrent},r.a.createElement(g.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(f.a.Input,{label:"Est. Value After Improvements",labelPosition:"left",placeholder:"Est. Value After Improvements",onChange:a.handleImprovements},r.a.createElement(g.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(f.a.Select,{fluid:!0,label:"Home Type",options:R,placeholder:"Home Type"}),r.a.createElement(f.a.Select,{fluid:!0,label:"Improvement Type",options:Y,placeholder:"Improvement Type"}),r.a.createElement(N,{setZoneFromMap:a.setZoneFromMap,message:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{name:"map"})," Select Your Zone"),successColor:"green",zone:a.state.zone}),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},r.a.createElement(E.a,{name:"calculator"}),"Calculate Rebate"),a.state.estimates&&r.a.createElement(v.a,{basic:!0,textAlign:"center"},r.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),r.a.createElement("p",null,r.a.createElement("b",null,"Pay Per Year:")," $",$(a.state.estimates.estLow.payPerYear)," - $",$(a.state.estimates.estHigh.payPerYear)),r.a.createElement("p",null,r.a.createElement("b",null,"Savings Per Year:")," $",$(a.state.estimates.estLow.savePerYear)," - $",$(a.state.estimates.estHigh.savePerYear)),r.a.createElement("p",null,r.a.createElement("b",null,"10 Year Savings:")," $",$(a.state.estimates.estLow.savings)," - $",$(a.state.estimates.estHigh.savings)))))))},a.state={current:"",afterImprovements:"",zone:"",estimates:""},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){this.state.current&&this.state.afterImprovements&&this.state.zone&&(this.setState({estimates:O(this.state.current,this.state.afterImprovements,this.state.zone)}),console.log(this.state.estimates))}}]),t}(r.a.Component),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,l="tab-list-item";return a===n&&(l+=" tab-list-active"),r.a.createElement("li",{className:l,onClick:e},n)}}]),t}(n.Component),L=(a(405),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return r.a.createElement("div",{className:"tabs"},r.a.createElement("ol",{className:"tab-list"},t.map(function(t){var n=t.props.label;return r.a.createElement(Z,{activeTab:a,key:n,label:n,onClick:e})})),r.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===a)return e.props.children})))}}]),t}(n.Component));var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null,"Neighborhood Revitalization Act Calculator"),r.a.createElement(L,null,r.a.createElement("div",{label:"Calculator"},r.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),r.a.createElement(M,null)),r.a.createElement("div",{label:"Resources"},"Helpful links to redirect users to additional material, application forms, etc."),r.a.createElement("div",{label:"About/Contact"},"Information about the Neighborhood Revitalization Act.")),r.a.createElement(m,null,"Created in partnership with ",r.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),r.a.createElement("br",null),"Contribute code on ",r.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.render)(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.52bf5e88.chunk.js.map