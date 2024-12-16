"use strict";(self.webpackChunktgg_sredocs=self.webpackChunktgg_sredocs||[]).push([[399],{4631:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(4848),n=t(8453);const s={},i="Terraform Modules",a={id:"patterns/terraform_modules",title:"Terraform Modules",description:"Basic Philosophy",source:"@site/docs/patterns/terraform_modules.md",sourceDirName:"patterns",slug:"/patterns/terraform_modules",permalink:"/docs/patterns/terraform_modules",draft:!1,unlisted:!1,editUrl:"https://github.com/broadinstitute/tgg-sredocs/tree/main/docs/patterns/terraform_modules.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Cloud project organization",permalink:"/docs/patterns/organization"},next:{title:"Infrastructure",permalink:"/docs/category/infrastructure"}},l={},u=[{value:"Basic Philosophy",id:"basic-philosophy",level:2},{value:"Composing Modules",id:"composing-modules",level:2},{value:"Versioning",id:"versioning",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"terraform-modules",children:"Terraform Modules"}),"\n",(0,r.jsx)(o.h2,{id:"basic-philosophy",children:"Basic Philosophy"}),"\n",(0,r.jsx)(o.p,{children:"Whenever possible, encapsulate configuration in a reusable module. Even if you only have one environment, this allows for using it again later, or simply using the module to test changes before you deploy them to your live environment. When you have multiple environments, it ensures that you are using the same configuration in every environment. Separately versioning the modules also allows you to progressively roll out changes to different environments for testing."}),"\n",(0,r.jsx)(o.h2,{id:"composing-modules",children:"Composing Modules"}),"\n",(0,r.jsxs)(o.p,{children:["Modules should generally be broken down into their smallest logical components, and then composed into a higher level module to build more complex infrastructure. For example, see the ",(0,r.jsx)(o.a,{href:"https://github.com/broadinstitute/tgg-terraform-modules/tree/main/private-gke-cluster",children:"private-gke-cluster"})," module, and the ",(0,r.jsx)(o.a,{href:"https://github.com/broadinstitute/tgg-terraform-modules/tree/main/gnomad-browser-infra",children:"gnomad-browser-infra"})," module. The private-gke-cluster mpdule provides a GKE configuration that has the base requirements for all of our deployments, and the gnomad-browser-infra module provides a GKE cluster using that module, plus the additional infrastructure that the gnomAD browser needs."]}),"\n",(0,r.jsx)(o.h2,{id:"versioning",children:"Versioning"}),"\n",(0,r.jsx)(o.p,{children:"When you make changes to a module, you should tag the commit that you are using with a version number. This allows you to reference that specific version in your consuming configuration, and ensures that you can roll out changes to different environments at different times."}),"\n",(0,r.jsxs)(o.p,{children:["In our ",(0,r.jsx)(o.a,{href:"https://github.com/broadinstitute/tgg-terraform-modules",children:"tgg-terraform-modules"})," repository, we use a versioning scheme that follows a format like ",(0,r.jsx)(o.code,{children:"module-name-v0.0.0"}),". This allows us to tag each module independently, and to provide provide rough ",(0,r.jsx)(o.a,{href:"https://semver.org/",children:"semver"})," signaling about the changes in each version."]})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var r=t(6540);const n={},s=r.createContext(n);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);