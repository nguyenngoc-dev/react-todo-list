(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{132:function(t,e,s){},435:function(t,e,s){"use strict";s.r(e);var n=s(2),a=s.n(n),c=s(20),i=s.n(c),o=(s(132),s(7)),r=s(8),l=s(10),u=s(9),j=s(36),h=s(1),d=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).onChange=function(t){var e=t.target,s=e.name,a=e.value;"status"===s&&(a="true"===e.value),n.setState(Object(j.a)({},s,a))},n.onSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state)},n.onClear=function(){n.setState({name:"",status:!1})},n.closeForm=function(){n.props.closeForm()},n.state={id:"",name:"",status:!1},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.props.task&&this.setState({id:this.props.task.id,name:this.props.task.name,status:this.props.task.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.task?this.setState({id:t.task.id,name:t.task.name,status:t.task.status}):t.task||this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"panel panel-warning",children:[Object(h.jsx)("div",{className:"panel-heading",children:Object(h.jsxs)("h3",{className:"panel-title",children:[""!==this.state.id?"C\u1eadp nh\u1eadt":"Th\xeam",Object(h.jsx)("i",{class:"fas fa-times",style:{float:"right",cursor:"pointer"},onClick:this.closeForm})]})}),Object(h.jsx)("div",{className:"panel-body",children:Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"T\xean :"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.onChange})]}),Object(h.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i :"}),Object(h.jsxs)("select",{className:"form-control",required:"required",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(h.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(h.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("button",{type:"submit",className:"btn btn-warning",children:"Th\xeam"}),"\xa0",Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.onClear,children:"H\u1ee7y B\u1ecf"})]})]})})]})}}]),s}(n.Component),b=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).onChange=function(t){var e=t.target,s=e.name,a=e.value;n.setState(Object(j.a)({},s,a))},n.onClick=function(){n.props.onSearch(n.state.keyword)},n.state={keyword:""},n}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",name:"keyword",value:this.state.keyword,onChange:this.onChange}),Object(h.jsx)("span",{className:"input-group-btn",children:Object(h.jsxs)("button",{className:"btn btn-primary",type:"button",onClick:this.onClick,children:[Object(h.jsx)("span",{className:"fa fa-search mr-5"}),"T\xecm"]})})]})})}}]),s}(n.Component),m=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).onClick=function(t,e){n.setState({name:t,status:e}),n.props.onSort(t,e)},n.state={name:"",status:1},n}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.name,n=e.status;return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:["S\u1eafp X\u1ebfp ",Object(h.jsx)("span",{className:"fa fa-caret-square-o-down ml-5"})]}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(h.jsx)("li",{onClick:function(){return t.onClick("name",1)},children:Object(h.jsxs)("a",{role:"button",children:[Object(h.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean A-Z"}),"name"===s&&1===n?Object(h.jsx)("i",{className:"fas fa-check",style:{float:"right",lineHeight:1.6}}):""]})}),Object(h.jsx)("li",{onClick:function(){return t.onClick("name",-1)},children:Object(h.jsxs)("a",{role:"button",children:[Object(h.jsx)("span",{className:"fa fa-sort-alpha-desc pr-5",children:"T\xean Z-A"}),"name"===s&&-1===n?Object(h.jsx)("i",{className:"fas fa-check",style:{float:"right",lineHeight:1.6}}):""]})}),Object(h.jsx)("li",{role:"separator",className:"divider"}),Object(h.jsxs)("li",{onClick:function(){return t.onClick("status",1)},children:[Object(h.jsx)("a",{role:"button",style:{display:"inline"},children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"}),"status"===s&&1===n?Object(h.jsx)("i",{className:"fas fa-check",style:{float:"right",lineHeight:1.6}}):""]}),Object(h.jsxs)("li",{onClick:function(){return t.onClick("status",-1)},children:[Object(h.jsx)("a",{role:"button",style:{display:"inline"},children:" Tr\u1ea1ng Th\xe1i \u1ea8n"}),"status"===s&&-1===n?Object(h.jsx)("i",{className:"fas fa-check",style:{float:"right",lineHeight:1.6}}):""]})]})]})})}}]),s}(n.Component),p=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row mt-15",style:{marginBottom:20},children:[Object(h.jsx)(b,{onSearch:this.props.onSearch}),Object(h.jsx)(m,{onSort:this.props.onSort})]})}}]),s}(n.Component),f=p,O=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onChangeStatus=function(){t.props.onChangeStatus(t.props.task.id)},t.onDelete=function(){t.props.onDelete(t.props.task.id)},t.onUpdate=function(){t.props.onUpdate(t.props.task.id)},t}return Object(r.a)(s,[{key:"render",value:function(){var t=this.props,e=t.task,s=t.index;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s+1}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{className:"text-center",children:Object(h.jsx)("span",{className:!0===e.status?"label label-success":"label label-danger",style:{cursor:"pointer"},onClick:this.onChangeStatus,children:!0===e.status?"K\xedch ho\u1ea1t":"\u1ea8n"})}),Object(h.jsxs)("td",{className:"text-center",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate,children:[Object(h.jsx)("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"]}),"\xa0",Object(h.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete,children:[Object(h.jsx)("span",{className:"fa fa-trash mr-5"}),"X\xf3a"]})]})]})}}]),s}(n.Component),x=O,g=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).onChange=function(t){var e=t.target,s=e.name,a=e.value;n.setState(Object(j.a)({},s,a)),n.props.onFilter("filterName"===s?a:n.state.filterName,"filterStatus"===s?a:n.state.filterStatus)},n.state={filterName:"",filterStatus:-1},n}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.props.tasks.map((function(e,s){return Object(h.jsx)(x,{task:e,index:s,onChangeStatus:t.props.onChangeStatus,onDelete:t.props.onDelete,onUpdate:t.props.onUpdate},e.id)})),s=this.state,n=s.filterName,a=s.filterStatus;return Object(h.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"text-center",children:"STT"}),Object(h.jsx)("th",{className:"text-center",children:"T\xean"}),Object(h.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(h.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.onChange})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"form-control",name:"filterStatus",value:a,onChange:this.onChange,children:[Object(h.jsx)("option",{value:"-1",children:"T\u1ea5t C\u1ea3"}),Object(h.jsx)("option",{value:"0",children:"\u1ea8n"}),Object(h.jsx)("option",{value:"1",children:"K\xedch Ho\u1ea1t"})]})}),Object(h.jsx)("td",{})]}),e]})]})}}]),s}(n.Component),v=(s(134),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).setRandomId=function(){return Math.random()*Math.random()*Math.random()},n.onToggleFrom=function(){n.setState({isDisplayForm:!0,updating:null})},n.onShowForm=function(){n.setState({isDisplayForm:!0})},n.closeForm=function(){n.setState({isDisplayForm:!1,updating:null})},n.onSubmit=function(t){var e=n.state.list;""===t.id?(t.id=n.setRandomId(),e.push(t)):e.forEach((function(s,n){s.id===t.id&&(e[n]=t)})),n.setState({list:e,updating:null}),localStorage.setItem("list",JSON.stringify(e))},n.onChangeStatus=function(t){var e=n.state.list;e.forEach((function(e,s){e.id===t&&(e.status=!e.status)})),n.setState({list:e}),localStorage.setItem("list",JSON.stringify(e))},n.onDelete=function(t){var e=n.state.list;e.forEach((function(s,n){s.id===t&&e.splice(n,1)})),n.setState({list:e}),localStorage.setItem("list",JSON.stringify(e))},n.onUpdate=function(t){n.state.list.forEach((function(e,s){e.id===t&&n.setState({updating:e})})),n.onShowForm()},n.onFilter=function(t,e){e=+e,n.setState({filterName:t.toLowerCase(),filterStatus:e})},n.onSearch=function(t){n.setState({keyword:t})},n.onSort=function(t,e){n.setState({sort:{by:t,value:e}})},n.state={list:[],isDisplayForm:!1,updating:null,filterName:"",filterStatus:-1,sort:{by:"",value:1}},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){if(localStorage.getItem("list")&&localStorage){var t=JSON.parse(localStorage.getItem("list"));this.setState({list:t})}}},{key:"render",value:function(){var t=this.state,e=t.filterName,s=t.filterStatus,n=t.list,a=t.keyword,c=t.sort;return e&&(n=n.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e)}))),n=n.filter((function(t){return-1===s?t:t.status===(1===s)})),a&&(n=n.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a)}))),"name"===c.by?n.sort((function(t,e){return t.name>e.name?c.value:t.name<e.name?-c.value:0})):n.sort((function(t,e){return t.status>e.status?-c.value:t.status<e.status?c.value:0})),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:this.state.isDisplayForm?Object(h.jsx)(d,{onSubmit:this.onSubmit,task:this.state.updating,closeForm:this.closeForm}):""}),Object(h.jsxs)("div",{className:this.state.isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-primary",style:{marginBottom:20},onClick:this.onToggleFrom,children:[Object(h.jsx)("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"]}),Object(h.jsx)(f,{onSearch:this.onSearch,onSort:this.onSort}),Object(h.jsx)("div",{className:"row mt-15",children:Object(h.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(h.jsx)(g,{tasks:n,onChangeStatus:this.onChangeStatus,onDelete:this.onDelete,onUpdate:this.onUpdate,onFilter:this.onFilter})})})]})]})]})})}}]),s}(n.Component)),S=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,436)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),S()}},[[435,1,2]]]);
//# sourceMappingURL=main.47dbf1b2.chunk.js.map