(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=a(8),s=a(4),i=a(5),m=a(7),h=a(6);function d(e){return r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"})))}var u=a(2),p=a(3);a(24);var f=function(e){var t=e.contact,a=e.removeContact,n=e.handleShowEditForm;return r.a.createElement("div",{className:"d-inline-block card mt-3 mr-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,r.a.createElement(u.a,{icon:p.f})," ",t.name),r.a.createElement("p",null,r.a.createElement(u.a,{icon:p.d})," ",t.phone),r.a.createElement("p",null,r.a.createElement(u.a,{icon:p.b})," ",t.email),r.a.createElement("button",{className:"btn btn-danger float-right ml-2 mb-2",onClick:function(){return a(t.id)}},r.a.createElement(u.a,{icon:p.e})),r.a.createElement("button",{className:"btn btn-warning float-right ml-2",onClick:function(){return n(t.id)}},r.a.createElement(u.a,{icon:p.c}))))},v=(a(25),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"\u10d9\u10dd\u10dc\u10e2\u10d0\u10e5\u10e2\u10d4\u10d1\u10d8"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",null,this.props.contacts&&this.props.contacts.map((function(t){return r.a.createElement(f,{key:t.id,contact:t,handleShowEditForm:e.props.handleShowEditForm,removeContact:e.props.handleRemoveContact})}))))}}]),a}(n.Component)),E=a(9);function b(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"\u10d3\u10d0\u10e1\u10d0\u10ee\u10d4\u10da\u10d4\u10d1\u10d0"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:e.name,name:"name",onChange:e.hanldeChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"\u10e2\u10d4\u10da\u10d4\u10e4\u10dd\u10dc\u10d8"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputPassword1",value:e.phone,name:"phone",onChange:e.hanldeChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"\u10d4\u10da.\u10e4\u10dd\u10e1\u10e2\u10d0"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputPassword1",value:e.email,name:"email",onChange:e.hanldeChange})))}function g(){return JSON.parse(localStorage.getItem("contacts"))||[]}function y(e){var t=g(),a=[].concat(Object(c.a)(t),[e]);localStorage.setItem("contacts",JSON.stringify(a))}function C(e){var t=g().filter((function(t){return t.id!==e}));return localStorage.setItem("contacts",JSON.stringify(t)),t}function S(e){var t=g();t.filter((function(t){return t.id===e.id}))[0].name=e.name,t.filter((function(t){return t.id===e.id}))[0].phone=e.phone,t.filter((function(t){return t.id===e.id}))[0].email=e.email,localStorage.setItem("contacts",JSON.stringify(t))}var N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={id:Date.now(),name:"",phone:"",email:"",errors:{name:"",phone:"",email:""}},e.hanldeChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r),(function(){}))},e.save=function(){e.handleValidation()?(y(e.state),e.props.handleAddContact(e.state),e.props.close()):alert("Form has errors.")},e}return Object(i.a)(a,[{key:"handleValidation",value:function(){var e=!0,t={};if(""===this.state.name&&(e=!1,t.name="Name can't be empty"),"undefined"!==typeof this.state.name&&(this.state.name.match(/^[a-zA-Z]+$/)||(e=!1,t.name="Name is not valid")),""===this.state.phone&&(e=!1,t.phone="Phone can't be empty"),"undefined"!==typeof this.state.phone&&(this.state.phone.match(/^\+[0-9]{1,3}[0-9]{4,9}(?:x.+)?$/)||(e=!1,t.phone="Phone is not valid")),""===this.state.email&&(e=!1,t.email="E-Mail can't be empty"),"undefined"!==typeof this.state.email){this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(e=!1,t.email="E-Mail is not valid")}return this.setState({errors:t}),e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container filter-form"},r.a.createElement("h4",null,"\u10d9\u10dd\u10dc\u10e2\u10d0\u10e5\u10e2\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement(b,{hanldeChange:this.hanldeChange}),r.a.createElement("button",{type:"button",id:"submit",value:"Submit",className:"btn btn-success mr-1",onClick:this.save},r.a.createElement(u.a,{icon:p.a})),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.props.close()}},r.a.createElement(u.a,{icon:p.g})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},this.state.errors.name),r.a.createElement("span",{style:{color:"red",fontWeight:"bold",display:"block"}},this.state.errors.phone),r.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},this.state.errors.email))))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={id:null,name:"",phone:"",email:"",errors:{name:"",phone:"",email:""}},e.hanldeChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r),(function(){}))},e.save=function(){e.handleValidation()?(S(e.state),e.props.handleEditContact(e.state),e.props.close()):alert("Form has errors.")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=g().filter((function(t){return t.id===e.props.currentId}));this.setState({id:this.props.currentId,name:t[0].name,phone:t[0].phone,email:t[0].email})}},{key:"handleValidation",value:function(){var e=!0,t={};if(""===this.state.name&&(e=!1,t.name="Name can't be empty"),"undefined"!==typeof this.state.name&&(this.state.name.match(/^[a-zA-Z]+$/)||(e=!1,t.name="Name is not valid")),""===this.state.phone&&(e=!1,t.phone="Phone can't be empty"),"undefined"!==typeof this.state.phone&&(this.state.phone.match(/^\+[0-9]{1,3}[0-9]{4,9}(?:x.+)?$/)||(e=!1,t.phone="Phone is not valid")),""===this.state.email&&(e=!1,t.email="E-Mail can't be empty"),"undefined"!==typeof this.state.email){this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(e=!1,t.email="E-Mail is not valid")}return this.setState({errors:t}),e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container filter-form"},r.a.createElement("h4",null,"\u10d9\u10dd\u10dc\u10e2\u10d0\u10e5\u10e2\u10d8\u10e1 \u10e8\u10d4\u10ea\u10d5\u10da\u10d0"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement(b,{hanldeChange:this.hanldeChange,name:this.state.name,phone:this.state.phone,email:this.state.email}),r.a.createElement("button",{type:"button",id:"submit",value:"Submit",className:"btn btn-warning mr-1",onClick:this.save},r.a.createElement(u.a,{icon:p.a})),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.props.close()}},r.a.createElement(u.a,{icon:p.g})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},this.state.errors.name),r.a.createElement("span",{style:{color:"red",fontWeight:"bold",display:"block"}},this.state.errors.phone),r.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},this.state.errors.email))))}}]),a}(n.Component);a(26);var k=function(e){return r.a.createElement("form",{className:"filter-form container",style:{marginTop:"70px"}},r.a.createElement("div",{className:"input-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"add-button",onClick:e.showAddForm},"\u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0")),r.a.createElement("input",{placeholder:"\u10eb\u10d4\u10d1\u10dc\u10d0",type:"text",className:"form-control",id:"search",value:e.searchValue,onChange:e.handleSearch})))},w=(a(27),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contacts:null,isEnable:!0,searchValue:"",addForm:!1,editForm:!1,currentId:null},e.handleClick=function(t){var a=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:a})},e.handleSearch=function(t){var a=a.filter((function(e){return e.name.toUpperCase().includes(t.target.value.toUpperCase())}));e.setState({searchValue:t.target.value,contacts:a})},e.handleAddFormClose=function(){e.setState({addForm:!1})},e.handleEditFormClose=function(){e.setState({editForm:!1})},e.handleRemoveContact=function(t){var a=C(t);e.setState({contacts:Object(c.a)(a)})},e.hendleShowAddForm=function(){e.setState({addForm:!0})},e.handleShowEditForm=function(t){e.setState({editForm:!0,currentId:t})},e.handleAddContact=function(t){e.setState({contacts:[].concat(Object(c.a)(e.state.contacts),[t])})},e.handleEditContact=function(t){var a=e.state.contacts.filter((function(e){return e.id!==t.id}));e.setState({contacts:[].concat(Object(c.a)(a),[t])})},e.onSearch=function(t){console.log("searchValue",t),e.setState({searchValue:t.target.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=g();this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log("componentDidUpdate",t,this.state),t.searchValue!==this.state.searchValue){var n=g().filter((function(e){return a.filterHandler(e.name)||a.filterHandler(e.phone)||a.filterHandler(e.email)}));this.setState({contacts:n})}}},{key:"filterHandler",value:function(e){return e.toUpperCase().includes(this.state.searchValue.toUpperCase())}},{key:"render",value:function(){return this.state.addForm?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(k,{searchValue:this.state.searchValue,showAddForm:this.hendleShowAddForm,handleSearch:this.onSearch}),r.a.createElement(N,{close:this.handleAddFormClose,handleAddContact:this.handleAddContact})):this.state.editForm?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(k,{searchValue:this.state.searchValue,handleSearch:this.handleSearch,showAddForm:this.hendleShowAddForm}),r.a.createElement(F,{close:this.handleEditFormClose,handleEditContact:this.handleEditContact,currentId:this.state.currentId})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(k,{searchValue:this.state.searchValue,showAddForm:this.hendleShowAddForm,handleSearch:this.onSearch}),r.a.createElement(v,{contacts:this.state.contacts,handleRemoveContact:this.handleRemoveContact,handleShowEditForm:this.handleShowEditForm}))}}]),a}(r.a.Component));o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a2f259a5.chunk.js.map