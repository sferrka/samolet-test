(this["webpackJsonpsamolet-test"]=this["webpackJsonpsamolet-test"]||[]).push([[0],{192:function(e,t,a){e.exports=a(369)},201:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),u=a(34),i=a(13),o=a(30),s=a(187),m=a.n(s),E=a(19),p=a(370),f=a(184),d=(a(201),a(125)),h=a.n(d),v=a(173);function b(){return function(e,t){if(!t().reports.isFetching)return e(function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_REPORTS"}),e.next=3,fetch("/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",t(g(n)));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}function g(e){return{type:"RECEIVE_REPORTS",reports:e}}var y=a(70),O=a(33),_=a(378),w=p.a.Header,k=function(){return r.a.createElement(w,{className:"app-header"},r.a.createElement(y.a,null,r.a.createElement(O.a,{span:24},r.a.createElement(o.b,{to:"/"},r.a.createElement(_.a,null)," \u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0420\u0424. \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))},x=a(371),I=p.a.Footer,R=function(){return r.a.createElement(I,{className:"app-footer"},r.a.createElement(x.a,null),"\xa9 2020 \u0433. \u0412\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u044f\u0445.")},j=a(376),S=function(e){var t=e.report;return r.a.createElement(j.a,null,r.a.createElement(j.a.Item,null,r.a.createElement(o.b,{to:"/"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c")),r.a.createElement(j.a.Item,null,r.a.createElement(o.b,{to:"/reports/".concat(t.kopuk)},t.territory)))},T=a(377),F=function(e){var t=e.report;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("h1",null,t.territory)),r.a.createElement(T.a,{bordered:!0},r.a.createElement(T.a.Item,{span:3,label:"\u041e\u0442\u0447\u0435\u0442\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"},t.fullname),r.a.createElement(T.a.Item,{span:3,label:"\u0410\u0434\u0440\u0435\u0441"},t.address),r.a.createElement(T.a.Item,{span:3,label:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445"},t.formname),r.a.createElement(T.a.Item,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"},t.libraries),r.a.createElement(T.a.Item,{label:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439, \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0438 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b"},t.kopuk),r.a.createElement(T.a.Item,{label:"\u041f\u0435\u0440\u0438\u043e\u0434"},t.period)))},N=a(373),C=a(375),z=function(e){var t=e.report;return r.a.createElement("div",{className:"app-stats-block"},r.a.createElement(x.a,null,r.a.createElement("h3",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")),r.a.createElement(y.a,null,r.a.createElement(O.a,{span:12},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0410\u0431\u043e\u043d\u0435\u043d\u0442\u043e\u0432",value:t.subscribers,prefix:""}))),r.a.createElement(O.a,{span:12},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432",value:t.employees_staff,suffix:"/ ".concat(t.employees)}))),r.a.createElement(O.a,{span:12},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0414\u0435\u0442\u0435\u0439 / \u0412\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",value:t.users_children,suffix:"/ ".concat(t.users)}))),r.a.createElement(O.a,{span:12},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0417\u0434\u0430\u043d\u0438\u0439 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438",value:t.buildings_management})))))},P=function(e){var t=e.report;return r.a.createElement("div",{className:"app-stats-block"},r.a.createElement(x.a,null,r.a.createElement("h3",null,"\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u0432 \u0442\u044b\u0441. \u0440\u0443\u0431.) ")),r.a.createElement(y.a,{gutter:20},r.a.createElement(O.a,{span:8},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0418\u0437\u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432\u0430\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432",value:t.funds_used,suffix:"/ ".concat(t.funds)}))),r.a.createElement(O.a,{span:8},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u0421\u0440\u0435\u0434\u0441\u0442\u0432 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e / \u0438\u0437 \u0431\u044e\u0434\u0436\u0435\u0442\u0430",value:t.funds_acquisition,suffix:"/ ".concat(t.funds_budget)}))),r.a.createElement(O.a,{span:8},r.a.createElement(N.a,null,r.a.createElement(C.a,{title:"\u041f\u043e \u0432\u0438\u0434\u0443 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",value:t.funds_entrepreneurial,suffix:"/ ".concat(t["funds_main_activity,_thousand_rubles"])})))))},L=function(e){var t=e.report;return r.a.createElement("div",{className:"app-stats-block"},r.a.createElement(x.a,null,r.a.createElement("h3",null," \u0423\u0441\u043b\u0443\u0433\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ")),r.a.createElement(y.a,null,r.a.createElement(N.a,{bodyStyle:{display:"flex",textAlign:"center"}},r.a.createElement(C.a,{style:{width:"33%"},title:"\u041a\u043e\u043f\u0438\u0439",value:t.copies,suffix:"/ ".concat(t.copies_issued)}),r.a.createElement(x.a,{type:"vertical",style:{height:"auto"}}),r.a.createElement(C.a,{style:{width:"33%"},title:"\u0412 \u0442.\u0447. \u0434\u0435\u0442\u044f\u043c",value:t.copies_issued_children}),r.a.createElement(x.a,{type:"vertical",style:{height:"auto"}}),r.a.createElement(C.a,{style:{width:"33%"},title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e",value:t.copies_electronic}))))};function B(){var e=Object(E.f)().id,t=Object(u.c)((function(t){return t.reports.items.find((function(t){return t.kopuk===e}))}));return t?r.a.createElement("div",null,r.a.createElement(S,{report:t}),r.a.createElement(F,{report:t}),r.a.createElement(z,{report:t}),r.a.createElement(P,{report:t}),r.a.createElement(L,{report:t})):r.a.createElement("div",null,r.a.createElement("h2",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"))}var G=a(374),J=a(372),Q=a(379);function U(e){var t=Object(u.b)(),a=[{title:r.a.createElement(G.a,{prefix:r.a.createElement(Q.a,null),type:"text",onChange:function(e){return t(function(e){return{type:"REGION_FILTER",filter:e}}(e.target.value))},placeholder:"\u0420\u0435\u0433\u0438\u043e\u043d..."}),dataIndex:"territory",key:"name",render:function(e,t){return r.a.createElement(o.b,{to:"/reports/".concat(t.kopuk)},e)}},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a",dataIndex:"libraries",key:"count",render:function(e){return e},defaultSortOrder:"descend",sorter:function(e,t){return e.libraries-t.libraries},width:"30%",align:"right"}];return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("h1",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c")),r.a.createElement(J.a,{bordered:!0,size:"middle",pagination:{pageSizeOptions:["10","50","100"],showSizeChanger:!0,showTotal:function(e){return"\u0412\u0441\u0435\u0433\u043e: ".concat(e," ")}},columns:a,dataSource:e.reports,rowKey:"kopuk"}))}function V(){var e=Object(u.b)();Object(n.useEffect)((function(){e(b())}),[e]);var t=Object(u.c)((function(e){return e.reports.isFetching})),a=Object(u.c)((function(e){return e.reports.items.filter((function(t){return t.territory.toLowerCase().indexOf(e.filter)>-1}))})),l=p.a.Content;return r.a.createElement(p.a,null,r.a.createElement(k,null),r.a.createElement(l,{className:"app-content"},t?r.a.createElement(f.a,{size:"large",style:{width:"100%"}}):r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",children:r.a.createElement(U,{reports:a})}),r.a.createElement(E.a,{path:"/reports/:id",children:r.a.createElement(B,null)}))),r.a.createElement(R,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(364);var W=a(53),q=a(186);var A=Object(W.c)({reports:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_REPORTS":return Object.assign({},e,{isFetching:!0});case"RECEIVE_REPORTS":return Object.assign({},e,{isFetching:!1,items:t.reports});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGION_FILTER":return t.filter;default:return e}}});var H,K=Object(W.d)(A,H,Object(W.a)(q.a));c.a.render(r.a.createElement(u.a,{store:K},r.a.createElement(i.a,{locale:m.a},r.a.createElement(o.a,null,r.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[192,1,2]]]);
//# sourceMappingURL=main.2eedb4d7.chunk.js.map