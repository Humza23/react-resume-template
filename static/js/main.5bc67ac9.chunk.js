(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/2021HumzaResume.6c792748.pdf"},function(e,a,t){e.exports=t.p+"static/media/profilepic.11e6b6b3.jpg"},function(e,a,t){e.exports=t.p+"static/media/logoReact.d4eebc6d.svg"},function(e,a,t){e.exports=t.p+"static/media/logoCSS.3359119d.svg"},function(e,a,t){e.exports=t.p+"static/media/logoExpress.652c9dfb.svg"},function(e,a,t){e.exports=t.p+"static/media/logoHTML.cba10c7c.svg"},function(e,a,t){e.exports=t.p+"static/media/logoNode.4d315923.svg"},function(e,a,t){e.exports=t.p+"static/media/logoPostgreSQL.14ade307.svg"},function(e,a,t){e.exports=t.p+"static/media/logoSQLite.332417a7.svg"},function(e,a,t){e.exports=t.p+"static/media/logoJS.0c1f700d.svg"},function(e,a,t){e.exports=t.p+"static/media/logoGit.adcab6a5.svg"},,function(e,a,t){e.exports=t.p+"static/media/project1.85278f83.jpg"},function(e,a,t){e.exports=t.p+"static/media/project2.dbb8cca6.jpg"},function(e,a,t){e.exports=t.p+"static/media/project3.58e01e44.jpg"},function(e,a,t){e.exports=t.p+"static/media/project4.2a177ee8.jpg"},function(e,a,t){e.exports=t.p+"static/media/project5.64988905.jpg"},,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(9),r=t.n(o),i=(t(33),t(1)),s=t(2),c=t(4),m=t(3),d=(t(40),t(36),t(37),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(console.log("header",this.props.data.name),this.props.data){this.props.data.name;var e=this.props.data.occupation,a=this.props.data.description,t=this.props.data.address.state,n=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},this.props.data.name),l.a.createElement("h3",null,"I'm a ",t," based ",l.a.createElement("span",null,e),". ",a,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},n))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e)),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),p=t(10),h=t.n(p),g=t(11),E=t.n(g),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=this.props.data.bio,t=(this.props.data.address.street,this.props.data.address.city),n=this.props.data.address.state,o=(this.props.data.address.zip,this.props.data.phone);this.props.data.email,this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:E.a,alt:"Humza Malik Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Information"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,t,", ",n),l.a.createElement("br",null),l.a.createElement("span",null,o),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:humza718@gmail.com"},"humza718@gmail.com"))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:h.a,className:"button",download:"Humza Malik Resume"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),v=t(12),b=t.n(v),w=t(13),N=t.n(w),y=t(14),k=t.n(y),j=t(15),S=t.n(j),x=t(16),O=t.n(x),C=t(17),M=t.n(C),I=t(18),z=t.n(I),F=t(19),L=t.n(F),H=t(20),D=t.n(H),P=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("ul",null,e.description1?l.a.createElement("li",null,e.description1):""))})),a=this.props.data.work.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("ul",null,l.a.createElement("li",null," \u2022 ",e.description1," "),l.a.createElement("li",null," \u2022 ",e.description2," "),l.a.createElement("li",null," \u2022 ",e.description3," "),l.a.createElement("li",null," \u2022 ",e.description4," ")))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"skillsImages"},l.a.createElement("img",{className:"logoImages",src:b.a,alt:"React",title:"React"}),l.a.createElement("img",{className:"logoImages",src:L.a,alt:"JavaScript",title:"JavaScript"}),l.a.createElement("img",{className:"logoImages",src:S.a,alt:"HTML",title:"HTML"}),l.a.createElement("img",{className:"logoImages",src:N.a,alt:"CSS",title:"CSS"}),l.a.createElement("img",{className:"logoImages",src:O.a,alt:"Node",title:"Node"}),l.a.createElement("img",{className:"logoImages",src:k.a,alt:"Express",title:"Express"}),l.a.createElement("img",{className:"logoImages",src:M.a,alt:"PostgreSQL",title:"PostgreSQL"}),l.a.createElement("img",{className:"logoImages",src:z.a,alt:"SQLite",title:"SQLite"}),l.a.createElement("img",{className:"logoImages",src:D.a,alt:"Git",title:"Git"})))))}}]),t}(n.Component),R=t(27),W=t(21),A=t.n(W),T=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).sendEmail=function(e){e.preventDefault(),R.a.sendForm("service_tit21f9","template_to3qq5b",e.target,"user_Mjm9Zv6iu3lV7LWKsxHV4").then((function(e){console.log("submitted"),console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),A()({title:"Message Sent!",text:"I look forward to speaking with you!",icon:"success",button:"Done!"})},n.state={},n}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.address.street,this.props.data.address.city),t=this.props.data.address.state,n=(this.props.data.address.zip,this.props.data.phone),o=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},o))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{onSubmit:this.sendEmail,id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange,style:{width:"65%"}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange,style:{width:"65%"}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange,style:{width:"65%"}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"10",id:"contactMessage",name:"contactMessage",style:{resize:"none",width:"65%",height:"auto"}})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit",onSubmit:this.sendEmail},"Submit"))))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a,", ",t," ",l.a.createElement("br",null),l.a.createElement("span",null,n)," ",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:humza718@gmail.com"},"humza718@gmail.com"))))))}}]),t}(n.Component),B=t(22),Q=t.n(B),q=t(23),J=t.n(q),V=t(24),G=t.n(V),_=t(25),U=t.n(_),Y=t(26),K=t.n(Y),Z=[{image:Q.a,title:"title",url:"google.com",description:"description!"},{image:J.a,title:"title",url:"google.com",description:"description!"},{image:G.a,title:"title",url:"google.com",description:"description!"},{image:U.a,title:"title",url:"google.com",description:"description!"},{image:K.a,title:"title",url:"google.com",description:"description!"}],$=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},Z.map((function(e,a){return l.a.createElement("div",{key:a,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:e.image}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}))))))}}]),t}(n.Component),X={main:{name:"Humza Malik",occupation:"Full Stack Web Developer",description:"",image:"profilepic.jpg",bio:"Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",contactmessage:"Contact Me",email:"humza718@gmail.com",phone:"917-856-8055",address:{city:"Brooklyn",state:"New York"},website:"http://www.timbakerdev.com",resumedownload:"http://timbakerdev.com",social:[{name:"facebook",url:"http://facebook.com/",className:"fa fa-facebook"},{name:"twitter",url:"http://twitter.com",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/humzamalik/",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/",className:"fa fa-instagram"},{name:"github",url:"http://github.com/Humza23",className:"fa fa-github"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"Lambda School",degree:"Full Stack Web Development",graduated:"August 2021",description1:"Intensive Full Stack Web Development program with a focus on HTML, CSS, JavaScript, React, Node, Express, and SQL"},{school:"Brooklyn College",degree:"Bachelors of Arts in Childhood Education",graduated:"May 2020",description1:""}],work:[{company:"New York City Department of Education",title:"Paraprofessional",years:"February 2020 - Present",description1:"Engaged one-on-one with students with behavioral problems in both classroom and extracurricular settings",description2:"Actively developed and executed individualized learning plans and behavior plans for students",description3:"Conducted small group and individual classroom activities based on differentiated learning needs to reinforce concepts presented by teachers",description4:"Sustained transparent communication with parents on student behavior and academic progress"},{company:"New York City Department of Education",title:"Student Teacher",years:"September 2019 - February 2020",description1:"Prepared and executed differentiated lesson plans for a classroom of 27 students",description2:"Fostered a classroom environment conducive to learning and promoting excellent student engagement",description3:"Developed plans to facilitate interactive learning experiences and accommodate the academic needs of students",description4:"Established positive relationships with students, parents, teachers, and school administrators"}]},portfolio:{projects:[{title:"Canadian Wanderlust",category:"My Travel Blog for my post-university travels",image:"fury-fighting-gear.jpg",url:"https://www.canadianwanderlust.com"},{title:"Fury Fighting Gear",category:"(offline now) A fighting gear company I started",image:"fury-fighting-gear.jpg",url:"http://www.timbakerdev.com"},{title:"Original Thai Food",category:"Website I built for a restaurant I like in Thailand",image:"original-thai-food.jpg",url:"http://www.timbakerdev.com/originalthaifood.github.io"},{title:"Resume Website",category:"A React based resume website template",image:"resume-website.jpg",url:"http://www.timbakerdev.com"},{title:"Smirkspace",category:"(MVP Only) A React and Meteor based chat University project.",image:"smirkspace.jpg",url:"http://www.smirkspace.com"}]}},ee=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={resumeData:""},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({resumeData:X})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{data:X.main}),l.a.createElement(f,{data:X.main}),l.a.createElement(P,{data:X.resume}),l.a.createElement($,{data:X.portfolio}),l.a.createElement(T,{data:X.main}),l.a.createElement(u,{data:X.main}))}}]),t}(n.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(ee,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");ae?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):te(e)}))}}()}],[[28,1,2]]]);
//# sourceMappingURL=main.5bc67ac9.chunk.js.map