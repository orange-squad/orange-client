(this["webpackJsonporange-client"]=this["webpackJsonporange-client"]||[]).push([[0],{46:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(22),r=c.n(n),j=(c(46),c(8)),i=c(6),l=c(57),b=c(20),d=c(13),o=c(1);var h=function(e){var t=e.results,c=Object(i.h)().id,a=t.find((function(e){return e.number===parseInt(c)})),s=a.basic,n=s.credential,r=s.first_name,j=s.last_name;function h(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}s.gender;var O=a.addresses[0],x=O.address_1,u=O.address_2,p=O.city,m=O.state,f=O.postal_code,k=O.telephone_number;return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d.b,{to:"/search",children:"Back to search"}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(b.a.Header,{children:[Object(o.jsxs)(b.a.Title,{children:[h(r)," ",h(j)," ",n]}),a.taxonomies.map((function(e,t){return Object(o.jsx)(b.a.Subtitle,{children:e.desc},e.code+t)}))]}),Object(o.jsxs)("address",{children:[x,u,p," ",m," ",f,k]}),Object(o.jsx)(b.a.Footer,{children:Object(o.jsxs)(b.a.Text,{children:["NPI Number: ",a.number]})})]})]})},O=function(e){var t=e.data,c=t.basic,a=c.credential,s=c.first_name,n=c.last_name;c.gender;function r(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}var j=t.addresses[0],i=j.address_1,l=j.address_2,h=j.city,O=j.state,x=j.postal_code,u=j.telephone_number;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a,{as:d.b,to:{pathname:"/provider/".concat(t.number)},style:{width:"30rem",textDecoration:"none",color:"black"},children:[Object(o.jsxs)(b.a.Header,{children:[Object(o.jsxs)(b.a.Title,{children:[r(s)," ",r(n)," ",a]}),t.taxonomies.map((function(e,t){return Object(o.jsx)(b.a.Subtitle,{children:e.desc},e.code+t)}))]}),Object(o.jsxs)("address",{children:[i,l,h," ",O," ",x,u]}),Object(o.jsx)(b.a.Footer,{children:Object(o.jsxs)(b.a.Text,{children:["NPI Number: ",t.number]})})]})})},x=c(39),u=c(61),p=c(38),m=c(17),f=c.n(m),k=c(23),g=c(64),y=c(58),S=c(37),v=c(59),C=c(60);var _=function(e){var t=e.setResults,c=e.loading,s=e.setLoading,n=Object(a.useState)(0),r=Object(j.a)(n,2),b=r[0],d=(r[1],Object(a.useState)(200)),h=Object(j.a)(d,2),O=h[0],x=(h[1],Object(a.useState)("psych*")),u=Object(j.a)(x,2),p=u[0],m=(u[1],Object(a.useState)("LOCATION")),_=Object(j.a)(m,2),T=_[0],I=(_[1],Object(a.useState)("")),L=Object(j.a)(I,2),B=L[0],H=L[1],w=Object(a.useState)(""),N=Object(j.a)(w,2),F=N[0],R=(N[1],Object(a.useState)("")),P=Object(j.a)(R,2),q=P[0],A=(P[1],Object(a.useState)("")),E=Object(j.a)(A,2),G=E[0],M=(E[1],Object(a.useState)("")),U=Object(j.a)(M,2),z=U[0],D=(U[1],Object(a.useState)("NPI-1")),J=Object(j.a)(D,2),K=J[0],Q=(J[1],Object(a.useState)("")),V=Object(j.a)(Q,2),W=V[0],X=(V[1],Object(a.useState)("")),Y=Object(j.a)(X,2),Z=Y[0],$=(Y[1],Object(a.useState)("")),ee=Object(j.a)($,2),te=ee[0],ce=(ee[1],Object(a.useState)(!0)),ae=Object(j.a)(ce,2),se=ae[0],ne=(ae[1],Object(i.g)()),re=Object(i.f)(),je=function(){var e=Object(k.a)(f.a.mark((function e(c){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s(!0),e.prev=2,e.next=5,fetch("https://sleepy-earth-76653.herokuapp.com/?number=".concat(z,"&enumeration_type=").concat(K,"&taxonomy_description=").concat(p,"&first_name=").concat(Z,"&use_first_name_alias=").concat(se,"&last_name=").concat(te,"&organization_name=").concat(W,"&address_purpose=").concat(T,"&city=").concat(B,"&state=").concat(F,"&postal_code=").concat(G,"&country_code=").concat(q,"&limit=").concat(O,"&skip=").concat(b,"&version=2.1&pretty=true"));case 5:return a=e.sent,e.next=8,a.json();case 8:return n=e.sent,e.next=11,t(n.results);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:"/search"!==ne.pathname&&re.push("/search"),s(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(l.a,{children:Object(o.jsx)(g.a,{onSubmit:je,children:Object(o.jsxs)(y.a,{children:[Object(o.jsx)(S.a,{type:"text",value:B,onChange:function(e){return H(e.target.value)},placeholder:"Enter City"}),c?Object(o.jsxs)(v.a,{variant:"primary",disabled:!0,children:[Object(o.jsx)(C.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]}):Object(o.jsx)(v.a,{type:"submit",children:"Search"})]})})})};var T=function(){return Object(o.jsx)(l.a,{fluid:!0,children:Object(o.jsxs)(g.a,{children:["Filter by:",Object(o.jsxs)(g.a.Group,{children:[Object(o.jsx)(g.a.Text,{children:"Gender"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Female"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Male"})]}),Object(o.jsxs)(g.a.Group,{children:[Object(o.jsx)(g.a.Text,{children:"Specialties"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Psychiatrist"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Psychologist"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Therapist"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Counselor"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Unicorn"})]}),Object(o.jsxs)(g.a.Group,{children:[Object(o.jsx)(g.a.Text,{children:"Insurance"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Blue Cross Blue Shield"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Emblem Health"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"United Healthcare"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Medicare"}),Object(o.jsx)(g.a.Check,{type:"checkbox",label:"Medicaid"})]})]})})},I=function(e){var t=e.results,c=e.setResults,s=e.loading,n=e.setLoading,r=Object(a.useState)(t),i=Object(j.a)(r,2),b=i[0],d=i[1];return Object(a.useEffect)((function(){d(t)}),[t]),Object(o.jsx)(l.a,{fluid:!0,children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(p.a,{children:Object(o.jsx)(T,{})}),Object(o.jsxs)(p.a,{children:[Object(o.jsx)(_,{setResults:c,loading:s,setLoading:n}),Object(o.jsx)(x.a,{children:b&&b.map((function(e){return Object(o.jsx)(O,{data:e},e.number)}))})]})]})})},L=c(62);c.p,c.p;function B(e){var t=e.setResults,c=e.loading,a=e.setLoading;return Object(o.jsxs)(l.a,{fluid:!0,children:[Object(o.jsx)(L.a,{fluid:!0,children:Object(o.jsx)(_,{setResults:t,loading:c,setLoading:a})}),Object(o.jsxs)(u.a,{children:[Object(o.jsx)(p.a,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(b.a.Header,{children:"Image!"}),Object(o.jsxs)(b.a.Body,{children:[Object(o.jsx)(b.a.Title,{children:"Card Title"}),Object(o.jsx)(b.a.Subtitle,{children:"I made a thing"}),Object(o.jsx)(b.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})}),Object(o.jsx)(p.a,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(b.a.Header,{children:"Image!"}),Object(o.jsxs)(b.a.Body,{children:[Object(o.jsx)(b.a.Title,{children:"Card Title"}),Object(o.jsx)(b.a.Subtitle,{children:"I made a thing"}),Object(o.jsx)(b.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})}),Object(o.jsx)(p.a,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(b.a.Header,{children:"Image!"}),Object(o.jsxs)(b.a.Body,{children:[Object(o.jsx)(b.a.Title,{children:"Card Title"}),Object(o.jsx)(b.a.Subtitle,{children:"I made a thing"}),Object(o.jsx)(b.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})}),Object(o.jsx)(p.a,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(b.a.Header,{children:"Image!"}),Object(o.jsxs)(b.a.Body,{children:[Object(o.jsx)(b.a.Title,{children:"Card Title"}),Object(o.jsx)(b.a.Subtitle,{children:"I made a thing"}),Object(o.jsx)(b.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})})]}),Object(o.jsx)(u.a,{children:"Articles"})]})}var H=c(63),w=c(65);function N(){return Object(o.jsxs)(H.a,{bg:"primary",variant:"dark",children:[Object(o.jsx)(H.a.Brand,{as:d.c,to:"/",children:"Therapist Finder"}),Object(o.jsx)(w.a,{children:Object(o.jsx)(v.a,{variant:"outline-light",children:"Need Help Now?"})})]})}var F=function(){return Object(o.jsx)(H.a,{fixed:"bottom",bg:"primary",children:Object(o.jsx)(l.a,{children:"poop"})})},R=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(j.a)(n,2),b=r[0],d=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/search",children:Object(o.jsx)(I,{results:c,setResults:s,loading:b,setLoading:d})}),Object(o.jsx)(i.a,{path:"/provider/:id",children:Object(o.jsx)(h,{results:c})}),Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(B,{setResults:s,loading:b,setLoading:d})})]})}),Object(o.jsx)(F,{})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d.a,{children:Object(o.jsx)(R,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8f90fb95.chunk.js.map