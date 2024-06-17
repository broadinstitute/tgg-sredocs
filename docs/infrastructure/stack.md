---
sidebar_position: 1
---

# Stack

Our typical production deployments utilize GKE on google cloud platform. A typical deployment pipeline involves:

1. building a new docker image after a PR approval, merge, and passing unit tests
2. Updating the helm chart for the service with the new docker image tag
3. Deploying the update via Argo, either in a fully automatic fashion (all commits/updates), semi-automatic (only deploy certain tags), or manual deployment (specify a single version that argo should deploy)

## Infrastructure Provisioning

We typically deploy infrastructure in a way where the GCP components are made available before the application deployment. This eliminates the requirement that the application be aware or responsible for deploying all of its infrastructure, which reduces coupling between the application and what it's running on.

### Google Cloud Platform

### Terraform

### Atlantis

