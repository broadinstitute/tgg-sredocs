---
sidebar_position: 1
title: Tools
---

# Application deployment tools

## Kubernetes-based

Many of our deployments utilize kubernetes for its ability to facilitate consistent deployment patterns for container-based applications, and its cross-cloud compatibility. The tool used to manage kubernetes manifests is largely left up to each of the teams, but in general, we've coalesced on the following principles:

- Deployments that only need very simple manifest management (application of labels, naming pre/suffixes, small patches, image updates) use [Kustomize](https://kustomize.io)
- Deployments that need more complicated templating logic, or need to provide a consumable installation method for open source end-users use [Helm](https://helm.sh)

### Kustomize

Typical deployments should be structured as follows:

1. Application manifests stored separately from the code (e.g. https://github.com/broadinstitute/gnomad-deployments)
2. A lowest common denominator deployment 'base'. This is a set of manifests that can be used for a basis for any kind of deployment (local development, demo, production, etc).
  1. Generally, development environments should optimize for lower resource usage, and fewer replicas than production deployments.
3. A directory of 'overlays' for various environments.

In this pattern, we would have a persistent set of overlays for long-lived environments such as production. Applications could optionally have a example 'development' overlay that could be copied as needed for development purposes.

When using an example development overlay as a base, you might instantiate a new development environment like so:

```bash
# create a new folder in your application's overlays directory
$ mkdir my-demo && cd my-demo
$ kustomize init --resources ../path/to/development-overlay --namesuffix "my-demo"
$ kustomize edit set image MY-IMAGE-NAME=us-docker.pkg.dev/my-project/my-repo/my-dev-image:a259229-my-tag
```

This will create a new kustomization.yaml file, sets a name suffix to make your demo unique, and sets the deployment's docker image image to use a development repository and tag.

Depending on how it's written, you could also just take the development overlay as-is by copying it, and modifying values:

```bash
$ cp -r development my-demo
$ vim my-demo/kustomization.yaml # edit as needed
```

To check or verify the manifests generated by your kustomization, cd into the directory containing your kustomization file, and run the build command:

```bash
$ kustomize build .
```

This output can be piped to kubectl apply to deploy directly (appropriate for dev/demo envs), or [Argo](#argo) can be configured to deploy it for you (appropriate for persistent/production environments)

### Helm

In cases where we need to provide a standard installation method for public consumption, Helm should be used (e.g. https://github.com/broadinstitute/seqr-helm). This allows for a curated deployment with expected variables and inputs, to provide a more streamlined experience for our end users.

Easy publishing of a helm repository can be orchestrated with the chart-releaser tool and its associated github action:

- [chart-releaser](https://github.com/helm/chart-releaser)
- [chart-releaser-action](https://github.com/helm/chart-releaser-action)

See the [seqr-helm](https://github.com/broadinstitute/seqr-helm/blob/adfbac8db4939d42db2d2a02842029e11da165d4/.github/workflows/release_chart.yaml) release workflow for an example configuration.

### Argo

- [ArgoCD](https://argoproj.github.io/cd/)
- [Argo Rollouts](https://argoproj.github.io/rollouts/)
- [TGG Argo Instance](https://argocd.sre.the-tgg.dev/)

Argo is a tool that is used to manage deployments onto our GKE clusters. In simple terms, you point it at a git repository containing your deployment configuration (whether that is Kustomizations, Helm Charts, or simple yaml manifests), and Argo can automatically deploy changes when it sees them.

Available deployment strategies include:
- Automatically deploy changes as soon as a deployment object in git is changed
- Pin to a specific commit and require a manual sync
- Follow a git tag regex, and only deploy when a tag matching the regex is pushed
- More complicated deployment strategies (such as blue/green or canary) are available through [Argo Rollouts](https://argoproj.github.io/rollouts/)