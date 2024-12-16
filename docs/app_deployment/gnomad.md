---
sidebar_position: 2
title: gnomAD
---

# gnomAD Project Application Deployment

## gnomAD Browser

### Development / Demos
### Production

## Exome Results Browsers

The exome results browsers are deployed on GKE, with manifests an environments managed by [Kustomize](https://kustomize.io). Configurations can be found in the [gnomad-deployments](https://github.com/broadinstitute/gnomad-deployments repository).

### Development / Demos

To create a new demo environment, simply make a copy of the 'demo' kustomization, and edit it to meet your needs. That demo deployment example includes a few extras, which you may find useful to adapt:

- an Ingress, to expose your demo on a public IP address
- A patch to change the name of a new persistent data disk (you may need this if you are testing updated or new datasets.

```bash
$ cp -r demo my-demo
# make edits as needed
$ vim my-demo/kustomization.yaml
$ vim my-demo/ingress.yaml

# view your manifests
$ cd my-demo
$ kustomize build .
# deploy to a kubernetes cluster
$ kustomize build . | kubectl apply -f -
# or, in the case of an already existing deployment,
# diff your local changes with the active deploy:
$ kustomize build . | kubectl diff -f -
```

### Production

The production deployment of the exome results browsers can be found in the [gnomad-deployments](https://github.com/broadinstitute/gnomad-deployments) repository, under `exome-results-browsers/prod`.

In the most common case of a simple image update, the deployment manifest is updated automatically:

1. After merging a pull request, a docker image is built via Google Cloud Build.
2. A new image with the exome-results-browser's git commit (short) SHA is built and pushed.
3. After a successful image build, the prod deployment kustomization is updated with the new tag in the gnomad-deployments repository.
4. When you're ready to deploy, navigate to [the exome-results-prod app](https://argocd.sre.the-tgg.dev/applications/tgg-services/exome-results-prod) in Argo, and click "Sync".
