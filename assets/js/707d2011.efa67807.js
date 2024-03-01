"use strict";(self.webpackChunktgg_sredocs=self.webpackChunktgg_sredocs||[]).push([[783],{9612:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(4848),r=i(8453);const o={sidebar_position:1},l="Stack",a={id:"infrastructure/stack",title:"Stack",description:"Our typical production deployments utilize GKE on google cloud platform. A typical deployment pipeline involves:",source:"@site/docs/infrastructure/stack.md",sourceDirName:"infrastructure",slug:"/infrastructure/stack",permalink:"/docs/infrastructure/stack",draft:!1,unlisted:!1,editUrl:"https://github.com/broadinstitute/tgg-sredocs/tree/main/docs/infrastructure/stack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Infrastructure",permalink:"/docs/category/infrastructure"},next:{title:"Development",permalink:"/docs/infrastructure/development"}},s={},c=[{value:"Infrastructure Provisioning",id:"infrastructure-provisioning",level:2},{value:"Google Cloud Platform",id:"google-cloud-platform",level:3},{value:"Terraform",id:"terraform",level:3},{value:"Atlantis",id:"atlantis",level:3},{value:"Application Deployment Tools",id:"application-deployment-tools",level:2},{value:"github actions",id:"github-actions",level:3},{value:"ArgoCD",id:"argocd",level:3},{value:"Helm",id:"helm",level:3},{value:"Secret Synchronization",id:"secret-synchronization",level:3},{value:"DNS Registration",id:"dns-registration",level:3},{value:"TLS Certificates",id:"tls-certificates",level:3},{value:"Configuring a Development Environment",id:"configuring-a-development-environment",level:2}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"stack",children:"Stack"}),"\n",(0,n.jsx)(t.p,{children:"Our typical production deployments utilize GKE on google cloud platform. A typical deployment pipeline involves:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"building a new docker image after a PR approval, merge, and passing unit tests"}),"\n",(0,n.jsx)(t.li,{children:"Updating the helm chart for the service with the new docker image tag"}),"\n",(0,n.jsx)(t.li,{children:"Deploying the update via Argo, either in a fully automatic fashion (all commits/updates), semi-automatic (only deploy certain tags), or manual deployment (specify a single version that argo should deploy)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"infrastructure-provisioning",children:"Infrastructure Provisioning"}),"\n",(0,n.jsx)(t.p,{children:"We typically deploy infrastructure in a way where the GCP components are made available before the application deployment. This eliminates the requirement that the application be aware or responsible for deploying all of its infrastructure, which reduces coupling between the application and what it's running on."}),"\n",(0,n.jsx)(t.h3,{id:"google-cloud-platform",children:"Google Cloud Platform"}),"\n",(0,n.jsx)(t.h3,{id:"terraform",children:"Terraform"}),"\n",(0,n.jsx)(t.h3,{id:"atlantis",children:"Atlantis"}),"\n",(0,n.jsx)(t.h2,{id:"application-deployment-tools",children:"Application Deployment Tools"}),"\n",(0,n.jsx)(t.h3,{id:"github-actions",children:"github actions"}),"\n",(0,n.jsx)(t.h3,{id:"argocd",children:"ArgoCD"}),"\n",(0,n.jsx)(t.h3,{id:"helm",children:"Helm"}),"\n",(0,n.jsx)(t.h3,{id:"secret-synchronization",children:"Secret Synchronization"}),"\n",(0,n.jsx)(t.h3,{id:"dns-registration",children:"DNS Registration"}),"\n",(0,n.jsx)(t.h3,{id:"tls-certificates",children:"TLS Certificates"}),"\n",(0,n.jsx)(t.h2,{id:"configuring-a-development-environment",children:"Configuring a Development Environment"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);