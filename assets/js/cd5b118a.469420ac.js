"use strict";(self.webpackChunktgg_sredocs=self.webpackChunktgg_sredocs||[]).push([[364],{1097:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=n(4848),s=n(8453);const i={sidebar_position:2,title:"gnomAD"},d="gnomAD Project Application Deployment",r={id:"app_deployment/gnomad",title:"gnomAD",description:"gnomAD Browser",source:"@site/docs/app_deployment/gnomad.md",sourceDirName:"app_deployment",slug:"/app_deployment/gnomad",permalink:"/docs/app_deployment/gnomad",draft:!1,unlisted:!1,editUrl:"https://github.com/broadinstitute/tgg-sredocs/tree/main/docs/app_deployment/gnomad.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"gnomAD"},sidebar:"docsSidebar",previous:{title:"Tools",permalink:"/docs/app_deployment/tools"}},l={},a=[{value:"gnomAD Browser",id:"gnomad-browser",level:2},{value:"Development / Demos",id:"development--demos",level:3},{value:"Production",id:"production",level:3},{value:"Exome Results Browsers",id:"exome-results-browsers",level:2},{value:"Development / Demos",id:"development--demos-1",level:3},{value:"Production",id:"production-1",level:3}];function m(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"gnomad-project-application-deployment",children:"gnomAD Project Application Deployment"}),"\n",(0,t.jsx)(o.h2,{id:"gnomad-browser",children:"gnomAD Browser"}),"\n",(0,t.jsx)(o.h3,{id:"development--demos",children:"Development / Demos"}),"\n",(0,t.jsx)(o.h3,{id:"production",children:"Production"}),"\n",(0,t.jsx)(o.h2,{id:"exome-results-browsers",children:"Exome Results Browsers"}),"\n",(0,t.jsxs)(o.p,{children:["The exome results browsers are deployed on GKE, with manifests an environments managed by ",(0,t.jsx)(o.a,{href:"https://kustomize.io",children:"Kustomize"}),". Configurations can be found in the [gnomad-deployments](",(0,t.jsx)(o.a,{href:"https://github.com/broadinstitute/gnomad-deployments",children:"https://github.com/broadinstitute/gnomad-deployments"})," repository)."]}),"\n",(0,t.jsx)(o.h3,{id:"development--demos-1",children:"Development / Demos"}),"\n",(0,t.jsx)(o.p,{children:"To create a new demo environment, simply make a copy of the 'demo' kustomization, and edit it to meet your needs. That demo deployment example includes a few extras, which you may find useful to adapt:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"an Ingress, to expose your demo on a public IP address"}),"\n",(0,t.jsx)(o.li,{children:"A patch to change the name of a new persistent data disk (you may need this if you are testing updated or new datasets."}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"$ cp -r demo my-demo\n# make edits as needed\n$ vim my-demo/kustomization.yaml\n$ vim my-demo/ingress.yaml\n\n# view your manifests\n$ cd my-demo\n$ kustomize build .\n# deploy to a kubernetes cluster\n$ kustomize build . | kubectl apply -f -\n# or, in the case of an already existing deployment,\n# diff your local changes with the active deploy:\n$ kustomize build . | kubectl diff -f -\n"})}),"\n",(0,t.jsx)(o.h3,{id:"production-1",children:"Production"}),"\n",(0,t.jsxs)(o.p,{children:["The production deployment of the exome results browsers can be found in the ",(0,t.jsx)(o.a,{href:"https://github.com/broadinstitute/gnomad-deployments",children:"gnomad-deployments"})," repository, under ",(0,t.jsx)(o.code,{children:"exome-results-browsers/prod"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"In the most common case of a simple image update, the deployment manifest is updated automatically:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"After merging a pull request, a docker image is built via Google Cloud Build."}),"\n",(0,t.jsx)(o.li,{children:"A new image with the exome-results-browser's git commit (short) SHA is built and pushed."}),"\n",(0,t.jsx)(o.li,{children:"After a successful image build, the prod deployment kustomization is updated with the new tag in the gnomad-deployments repository."}),"\n",(0,t.jsxs)(o.li,{children:["When you're ready to deploy, navigate to ",(0,t.jsx)(o.a,{href:"https://argocd.sre.the-tgg.dev/applications/tgg-services/exome-results-prod",children:"the exome-results-prod app"}),' in Argo, and click "Sync".']}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>r});var t=n(6540);const s={},i=t.createContext(s);function d(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);