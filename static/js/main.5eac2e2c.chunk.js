(this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]=this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]||[]).push([[0],[,function(e,t,a){e.exports={Form:"InputForm_Form__3Lco6",Submit:"InputForm_Submit__2Cbki",SubmitDark:"InputForm_SubmitDark__2TsZP InputForm_Submit__2Cbki",Title:"InputForm_Title__30skD",TitleDark:"InputForm_TitleDark__WhceT"}},function(e,t,a){e.exports={Header:"Header_Header__2p_OR",Title:"Header_Title__3aaEP",TitleDark:"Header_TitleDark__2InTN Header_Header__2p_OR",Button:"Header_Button__SBDmZ",ButtonDark:"Header_ButtonDark__3M2FA Header_Button__SBDmZ",TextDark:"Header_TextDark__2GrK8"}},,,,,,function(e,t,a){e.exports={ListElement:"ContactIlstItem_ListElement__2zqJD",ListElementDark:"ContactIlstItem_ListElementDark__JYe2W ContactIlstItem_ListElement__2zqJD",Button:"ContactIlstItem_Button__2Nvvj",ButtonDark:"ContactIlstItem_ButtonDark__3HPAP ContactIlstItem_Button__2Nvvj"}},function(e,t,a){e.exports={list:"Contacts_list__12y3-",Title:"Contacts_Title__3UVqm",TitleDark:"Contacts_TitleDark__3kE9U Contacts_Title__3UVqm"}},function(e,t,a){e.exports={Layout:"Layout_Layout__3MtIV",LayoutDark:"Layout_LayoutDark__2VStU Layout_Layout__3MtIV"}},,,,,function(e,t,a){e.exports={search:"FilterForm_search__O2HVk"}},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(21),a(2)),u=a.n(l),m=a(3),s=a(4),i=a(6),_=a(5),h=a(7),f=Object(n.createContext)(),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).toggleTheme=function(){a.setState((function(e){return{theme:!e.theme}}))},a.state={theme:!1,onToggle:a.toggleTheme},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component);b.Consumer=f.Consumer;var p=function(e){return function(t){return r.a.createElement(b.Consumer,null,(function(a){var n=a.theme,o=a.onToggle;return r.a.createElement(e,Object.assign({},t,{theme:n,onToggle:o}))}))}},v=p((function(e){var t=e.theme,a=e.onToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.Header},r.a.createElement("h1",{className:t?u.a.Title:u.a.TitleDark},"Phone Book")),r.a.createElement("button",{className:t?u.a.Button:u.a.ButtonDark,type:"button",onClick:a},t?"Dark":"Light"),r.a.createElement("p",{className:t?null:u.a.TextDark},"Active theme ",t?"Light":"Dark"))})),k=a(10),E=a.n(k),d=p((function(e){var t=e.children,a=e.theme;return r.a.createElement("div",{className:a?E.a.Layout:E.a.LayoutDark},r.a.createElement(v,null),t)})),g=a(11),D=a(14),y=a(1),C=a.n(y),I=p(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},a.getInputValue=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.hendleSubmit=function(e){e.preventDefault(),a.props.getInfo(a.state),a.setState({name:"",number:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number,n=this.props.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:C.a.Form,onSubmit:this.hendleSubmit},r.a.createElement("label",null,r.a.createElement("h3",{className:n?C.a.Title:C.a.TitleDark},"Name:"),r.a.createElement("input",{value:t,placeholder:"Enter name...",name:"name",onChange:this.getInputValue}),r.a.createElement("h3",{className:n?C.a.title:C.a.TitleDark},"Phone number:"),r.a.createElement("input",{value:a,name:"number",onChange:this.getInputValue,placeholder:"Enter phone..."}),r.a.createElement("br",null),r.a.createElement("button",{className:n?C.a.Submit:C.a.SubmitDark,type:"submit"},"Add contact"),r.a.createElement("br",null))))}}]),t}(n.Component)),T=a(8),S=a.n(T);var O=function(e){var t=e.id,a=e.name,n=e.number,o=e.theme,c=e.onRemove;return r.a.createElement("li",{className:o?S.a.ListElement:S.a.ListElementDark},a," ",n,r.a.createElement("button",{type:"button",className:o?S.a.Button:S.a.ButtonDark,onClick:function(){return c(t)}},"Delete"))},j=a(9),L=a.n(j),N=p((function(e){var t=e.elements,a=e.onRemoveContacts,n=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:n?L.a.Title:L.a.TitleDark},"Contacts"),r.a.createElement("ul",{className:L.a.list},t.map((function(e){var t=e.id,o=e.name,c=e.number;return r.a.createElement(O,{key:t,id:t,name:o,number:c,onRemove:a,theme:n})}))))})),B=a(15),F=a.n(B);var H=function(e){var t=e.filterValue,a=e.onSearchQuery;return r.a.createElement("label",{className:F.a.search},r.a.createElement("input",{value:t,onChange:a}))},x=a(24);var V=function(e,t){return{id:Object(x.a)(),name:e,number:t}},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],searchQuery:""},a.getUserInfo=function(e){var t=e.name,n=e.number;a.checkedDoubleInput(t)?alert("\u0418\u043c\u044f ".concat(t," \u0435\u0441\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435!")):a.setState((function(e){return{contacts:[].concat(Object(g.a)(e.contacts),[V(t,n)])}}))},a.checkedDoubleInput=function(e){return a.state.contacts.some((function(t){return t.name===e}))},a.filteredContacts=function(){var e=a.state,t=e.searchQuery;return e.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},a.removeContacts=function(e){2===a.state.contacts.length&&a.setState({searchQuery:""}),a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},a.handleSearchQuery=function(e){var t=e.target.value;a.setState({searchQuery:t})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:Object(g.a)(e)})}},{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,a=e.searchQuery,n=this.filteredContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{getInfo:this.getUserInfo}),t.length>1&&r.a.createElement(H,{onSearchQuery:this.handleSearchQuery,filterValue:a}),r.a.createElement(N,{elements:0===a.length?t:n,onRemoveContacts:this.removeContacts}))}}]),t}(n.Component),Q=function(){return r.a.createElement(b,null,r.a.createElement(d,null,r.a.createElement(w,null)))};c.a.render(r.a.createElement(Q,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.5eac2e2c.chunk.js.map