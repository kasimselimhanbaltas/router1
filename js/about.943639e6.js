"use strict";(self["webpackChunkrouter1"]=self["webpackChunkrouter1"]||[]).push([[443],{934:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var n=i(252),o=i(577),a=i(262),r=i(448),s=(0,n._)("h4",{class:"text-center",style:{"padding-top":"9vh"}},"Some of my projects",-1),c={id:"projectscontainer",class:"projectscontainer text-light text-center position-relative",style:{"background-color":"#161616"}},l={id:"project-name"},d={id:"project-container",class:"project-container row d-flex justify-content-center pt-5 m-0 fade-in"},g={class:"pr col-xl-6 col-md-12"},m={class:"image-container",style:{transform:"translateY(-7%)"}},p=["src"],u={id:"btn-click",class:"my-3 d-flex justify-content-center"},h=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-arrow-left-short",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})],-1),x=[h],f={style:{"margin-top":"auto","margin-bottom":"auto",padding:"0 10px"},id:"image-info"},w=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-arrow-right-short",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})],-1),b=[w],v={class:"pl col-xl-4 col-md-10 text-light pe-5 ms-5",style:{"padding-bottom":"5%"}},j={id:"project-description"},_={id:"project-github",href:""},I={class:"project-navigation my-3 d-flex justify-content-center col-12"},y=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",class:"bi bi-arrow-left-short",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})],-1),k=[y],L={style:{display:"inline","margin-top":"auto","margin-bottom":"auto",padding:"0 10px"},id:"project-number"},z=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"white",class:"bi bi-arrow-right-short",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})],-1),S=[z],C=(0,n.aZ)({__name:"ProjectsView",setup:function(e){var t=(0,r.h)(),h=t.projects[t.projectIndex],w=h.images[t.imageIndex];function y(e){return i(173)("./".concat(e))}function z(e){var i=document.getElementById("projectscontainer");i&&(i.classList.add("projectFade"),setTimeout((function(){t.projectIndex+=e,t.imageIndex=0,-1===t.projectIndex?t.projectIndex=t.projects.length-1:t.projectIndex===t.projects.length&&(t.projectIndex=0),h=t.projects[t.projectIndex],setTimeout((function(){i.classList.remove("projectFade")}),300)}),300))}function C(e){var i=document.getElementById("project-image");1===e&&i?(i.classList.add("slideRight"),setTimeout((function(){t.imageIndex+=e,-1===t.imageIndex?t.imageIndex=h.images.length-1:t.imageIndex===h.images.length&&(t.imageIndex=0),w=h.images[t.imageIndex],setTimeout((function(){i.classList.remove("slideRight")}),300)}),300)):-1===e&&i&&(i.classList.add("slideLeft"),setTimeout((function(){t.imageIndex+=e,-1===t.imageIndex?t.imageIndex=h.images.length-1:t.imageIndex===h.images.length&&(t.imageIndex=0),w=h.images[t.imageIndex],setTimeout((function(){i.classList.remove("slideLeft")}),300)}),300))}function U(){return w=h.images[t.imageIndex],y(w)}return function(e,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("section",c,[(0,n._)("h5",l,(0,o.zw)((0,a.SU)(h).projectName),1),(0,n._)("div",d,[(0,n._)("div",g,[(0,n._)("div",m,[(0,n._)("img",{class:"img-fluid",src:U(),alt:"",id:"project-image",style:{"max-height":"45vh"}},null,8,p),(0,n._)("div",u,[(0,n._)("button",{id:"image-prev-btn",onClick:i[0]||(i[0]=function(e){return C(-1)}),class:"btn btn-primary bg-dark"},x),(0,n._)("span",f,(0,o.zw)((0,a.SU)(t).imageIndex+1)+" / "+(0,o.zw)((0,a.SU)(t).projects[(0,a.SU)(t).projectIndex].images.length),1),(0,n._)("button",{id:"image-next-btn",onClick:i[1]||(i[1]=function(e){return C(1)}),class:"btn btn-primary bg-dark"},b)])])]),(0,n._)("div",v,[(0,n._)("p",j,(0,o.zw)((0,a.SU)(h).description),1),(0,n._)("a",_,(0,o.zw)((0,a.SU)(h).githubLink),1)])])]),(0,n._)("div",I,[(0,n._)("button",{onClick:i[2]||(i[2]=function(e){return z(-1)}),id:"prev-btn",class:"btn btn-primary bg-dark"},k),(0,n._)("p",L,(0,o.zw)((0,a.SU)(t).projectIndex+1)+" / "+(0,o.zw)((0,a.SU)(t).projects.length),1),(0,n._)("button",{onClick:i[3]||(i[3]=function(e){return z(1)}),id:"next-btn",class:"btn btn-primary bg-dark"},S)])],64)}}});const U=C;var H=U}}]);
//# sourceMappingURL=about.943639e6.js.map