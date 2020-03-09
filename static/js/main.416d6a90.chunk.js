(this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]=this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]||[]).push([[0],[,function(e,t,a){e.exports={Form:"InputForm_Form__HmMMV",Submit:"InputForm_Submit__LkymL",SubmitDark:"InputForm_SubmitDark__1bz9l InputForm_Submit__LkymL",Title:"InputForm_Title__21opl",TitleDark:"InputForm_TitleDark__ucbEG"}},function(e,t,a){e.exports={list:"Contacts_list__3gbRK",ListElement:"Contacts_ListElement__1nMNu",ListElementDark:"Contacts_ListElementDark__2J6li Contacts_ListElement__1nMNu",Button:"Contacts_Button__1qrXJ",ButtonDark:"Contacts_ButtonDark__1pNzZ Contacts_Button__1qrXJ",Title:"Contacts_Title__1CWr3",TitleDark:"Contacts_TitleDark__3aFY0 Contacts_Title__1CWr3"}},function(e,t,a){e.exports={Header:"Header_Header__21xUc",Title:"Header_Title__18tJO",TitleDark:"Header_TitleDark__3UEDb Header_Header__21xUc",Button:"Header_Button__3UfPf",ButtonDark:"Header_ButtonDark__2bR2n Header_Button__3UfPf",TextDark:"Header_TextDark__8KyK_"}},,,,,,function(e,t,a){e.exports={Layout:"Layout_Layout__3MVVD",LayoutDark:"Layout_LayoutDark__2JF67 Layout_Layout__3MVVD"}},,,,,function(e,t,a){e.exports={search:"FilterForm_search__3oxqs"}},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),u=(a(20),a(3)),l=a.n(u),s=a(4),i=a(5),m=a(7),_=a(6),h=a(8),f=Object(n.createContext)(),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).toggleTheme=function(){a.setState((function(e){return{theme:!e.theme}}))},a.state={theme:!1,onToggle:a.toggleTheme},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component);b.Consumer=f.Consumer;var p=function(e){return function(t){return r.a.createElement(b.Consumer,null,(function(a){var n=a.theme,c=a.onToggle;return r.a.createElement(e,Object.assign({},t,{theme:n,onToggle:c}))}))}},k=p((function(e){var t=e.theme,a=e.onToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.a.Header},r.a.createElement("h1",{className:t?l.a.Title:l.a.TitleDark},"Phone Book")),r.a.createElement("button",{className:t?l.a.Button:l.a.ButtonDark,type:"button",onClick:a},t?"Dark":"Light"),r.a.createElement("p",{className:t?null:l.a.TextDark},"Active theme ",t?"Light":"Dark"))})),E=a(9),g=a.n(E),d=p((function(e){var t=e.children,a=e.theme;return r.a.createElement("div",{className:a?g.a.Layout:g.a.LayoutDark},r.a.createElement(k,null),t)})),v=a(10),y=a(13),D=a(1),C=a.n(D),T=p(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},a.getInputValue=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a.hendleSubmit=function(e){e.preventDefault(),a.props.getInfo(a.state),a.setState({name:"",number:""})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number,n=this.props.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:C.a.Form,onSubmit:this.hendleSubmit},r.a.createElement("label",null,r.a.createElement("h3",{className:n?C.a.Title:C.a.TitleDark},"Name:"),r.a.createElement("input",{value:t,placeholder:"Enter name...",name:"name",onChange:this.getInputValue}),r.a.createElement("h3",{className:n?C.a.title:C.a.TitleDark},"Phone number:"),r.a.createElement("input",{value:a,name:"number",onChange:this.getInputValue,placeholder:"Enter phone..."}),r.a.createElement("br",null),r.a.createElement("button",{className:n?C.a.Submit:C.a.SubmitDark,type:"submit"},"Add contact"),r.a.createElement("br",null))))}}]),t}(n.Component)),S=a(2),L=a.n(S),O=p((function(e){var t=e.elements,a=e.onRemoveContacts,n=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:n?L.a.Title:L.a.TitleDark},"Contacts"),r.a.createElement("ul",{className:L.a.list},t.map((function(e){var t=e.id,c=e.name,o=e.number;return r.a.createElement("li",{className:n?L.a.ListElement:L.a.ListElementDark,key:t},c," ",o,r.a.createElement("button",{type:"button",className:n?L.a.Button:L.a.ButtonDark,onClick:function(){return a(t)}},"Delete"))}))))})),j=a(14),N=a.n(j);var I=function(e){var t=e.filterValue,a=e.onSearchQuery;return r.a.createElement("label",{className:N.a.search},r.a.createElement("input",{value:t,onChange:a}))},F=a(23);var B=function(e,t){return{id:Object(F.a)(),name:e,number:t}},x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],searchQuery:""},a.getUserInfo=function(e){var t=e.name,n=e.number;a.checkedDoubleInput(t)?alert("\u0418\u043c\u044f ".concat(t," \u0435\u0441\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435!")):a.setState((function(e){return{contacts:[].concat(Object(v.a)(e.contacts),[B(t,n)])}}))},a.checkedDoubleInput=function(e){return a.state.contacts.find((function(t){return t.name===e}))},a.filteredContacts=function(){var e=a.state,t=e.searchQuery;return e.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},a.removeContacts=function(e){2===a.state.contacts.length&&a.setState({searchQuery:""}),a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},a.handleSearchQuery=function(e){var t=e.target.value;a.setState({searchQuery:t})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:Object(v.a)(e)})}},{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,a=e.searchQuery,n=this.filteredContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{getInfo:this.getUserInfo}),t.length>1&&r.a.createElement(I,{onSearchQuery:this.handleSearchQuery,filterValue:a}),r.a.createElement(O,{elements:0===a.length?t:n,onRemoveContacts:this.removeContacts}))}}]),t}(n.Component),H=function(){return r.a.createElement(b,null,r.a.createElement(d,null,r.a.createElement(x,null)))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.416d6a90.chunk.js.map