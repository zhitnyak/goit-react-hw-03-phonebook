(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Forma_form__1Pfun",label:"Forma_label__GY3eN",btn:"Forma_btn__URqXZ"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(18),n(12)),i=n(3),l=n(4),u=n(6),b=n(5),m=(n(19),n(13)),d=n(11),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleInputChange})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleInputChange})]}),Object(f.jsx)("button",{className:j.a.btn,children:"Add contact"})]})}}]),n}(a.Component),C=p,O=n(7),x=n.n(O),g=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:x.a.box,children:Object(f.jsxs)("label",{className:x.a.contact,children:["Find contacts by name",Object(f.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})})},v=n(8),_=n.n(v),N=function(t){var e=t.contacts,n=t.onChange;return Object(f.jsx)("ul",{className:_.a.list,children:e.length>0&&e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:_.a.item,children:["".concat(a,": ").concat(c),Object(f.jsx)("button",{className:_.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}));c?alert("".concat(c.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{id:Object(m.a)(),name:n,number:a}])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(f.jsxs)("section",{className:"wrapper",children:[Object(f.jsx)("h1",{className:"title",children:"Phonebook"}),Object(f.jsx)(C,{onSubmit:this.addContact}),Object(f.jsx)("h2",{className:"title",children:"Contacts"}),Object(f.jsx)(g,{value:e,onChange:this.changeFilter}),Object(f.jsx)(N,{contacts:t,onChange:this.deleteContact})]})}}]),n}(a.Component),w=y;r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contact:"Filter_contact__3wGNb"}},8:function(t,e,n){t.exports={list:"ContactList_list__3PH7g",item:"ContactList_item__2bUnc",btn:"ContactList_btn__1sN--"}}},[[21,1,2]]]);
//# sourceMappingURL=main.89267515.chunk.js.map