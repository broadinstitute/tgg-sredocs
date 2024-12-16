"use strict";(self.webpackChunktgg_sredocs=self.webpackChunktgg_sredocs||[]).push([[900],{2197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(4848),i=t(8453);const a={},r="Configuration and Code",s={id:"patterns/configuration_and_code",title:"Configuration and Code",description:"In general, we should prefer to store our environment configurations and application deployment definitions separately from our application source code. The following is a discussion of some of the (anti-)patterns that you might consider, and their pros and cons. It is important to note that these are not one size fits all solutions, and that you may select a different methodology if it suits your application.",source:"@site/docs/patterns/configuration_and_code.md",sourceDirName:"patterns",slug:"/patterns/configuration_and_code",permalink:"/docs/patterns/configuration_and_code",draft:!1,unlisted:!1,editUrl:"https://github.com/broadinstitute/tgg-sredocs/tree/main/docs/patterns/configuration_and_code.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Infrastructure Layering",permalink:"/docs/patterns/layering"},next:{title:"Managed Services",permalink:"/docs/patterns/managed_services"}},c={},d=[{value:"Anti-Patterns",id:"anti-patterns",level:2},{value:"Storing configuration and code together",id:"storing-configuration-and-code-together",level:3},{value:"Patterns",id:"patterns",level:2},{value:"Hybrid configuration",id:"hybrid-configuration",level:3},{value:"Separate configuration",id:"separate-configuration",level:3}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration-and-code",children:"Configuration and Code"}),"\n",(0,o.jsx)(n.p,{children:"In general, we should prefer to store our environment configurations and application deployment definitions separately from our application source code. The following is a discussion of some of the (anti-)patterns that you might consider, and their pros and cons. It is important to note that these are not one size fits all solutions, and that you may select a different methodology if it suits your application."}),"\n",(0,o.jsx)(n.h2,{id:"anti-patterns",children:"Anti-Patterns"}),"\n",(0,o.jsx)(n.h3,{id:"storing-configuration-and-code-together",children:"Storing configuration and code together"}),"\n",(0,o.jsx)(n.p,{children:"This approach involves storing all the deployment configs and environment configs with the application source code. This is an anti-pattern, because doing this results in config-only updates that cause churn in the application repository. For example, you may want to increase the number of pod replicas or RAM resources in a kubernetes deployment. The change required to the manifest for this would need to follow your typical application code change pattern for deployment and release. This may involve doing things that are unneccesary for a config only change. You also run into chicken and egg scenarios when defining deployments, such as:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"update app, get new commit SHA: abcdef1"}),"\n",(0,o.jsx)(n.li,{children:"update docker image, tag it with abcdef1"}),"\n",(0,o.jsx)(n.li,{children:"update deployment config to use new image, commit it, now we have new commit SHA: abcdef2"}),"\n",(0,o.jsx)(n.li,{children:"tell your deployment tool to deploy the new commit SHA: abcdef2"}),"\n",(0,o.jsx)(n.li,{children:"the actual version of the app that is deployed is: abcdef1."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This causes confusion, and introduces unneccesary commits into the application repository."}),"\n",(0,o.jsx)(n.h2,{id:"patterns",children:"Patterns"}),"\n",(0,o.jsx)(n.h3,{id:"hybrid-configuration",children:"Hybrid configuration"}),"\n",(0,o.jsx)(n.p,{children:"In a hybrid approach, you might store the base configs with the application, so that app configuration is versioned with the app, but final environment configuration is separate. This allows for establishing a relationship with the application and its configuration. For example, it may not always make sense to deploy an new version of the application, with a very old deployment configuration."}),"\n",(0,o.jsxs)(n.p,{children:["In practice, for a kubernetes-centric deployment, you might store the base manifests that are common to all your deployments with your application code, and then create an environment/deploy repository that has the final ",(0,o.jsx)(n.a,{href:"https://kustomize.io",children:"Kustomizations"})," which translate that deployment into your specific environments."]}),"\n",(0,o.jsx)(n.h3,{id:"separate-configuration",children:"Separate configuration"}),"\n",(0,o.jsx)(n.p,{children:"Going a step further, you could store the entire configuration in a separate repository. This allows for centralizing all of your deployment configurations together, and avoids any chicken and egg scenarios with keeping the application and deployment together in the same repository. In this case, developers only need to worry about one repository for deployment information, and you could consolidate deployment automation in one place."}),"\n",(0,o.jsx)(n.p,{children:"With separate or hybrid deployment/environment configuration, you can imagine a simpler deployment workflow like the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"update app, get new commit SHA: abcdef1"}),"\n",(0,o.jsx)(n.li,{children:"update docker image, tag it with abcdef1"}),"\n",(0,o.jsx)(n.li,{children:"after docker build success, update deployment config to use image tag abcdef1"}),"\n",(0,o.jsx)(n.li,{children:"deployment tool deploys new version of the app with the new image tag."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here, updates are all still encoded in git, but we're not asking it to deploy a commit SHA that doesn't match the version of the app that was built and tagged."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);