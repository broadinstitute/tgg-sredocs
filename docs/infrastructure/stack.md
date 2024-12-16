---
sidebar_position: 1
---

# Deployment Workflow

Our typical production infrastructure deployments utilize terraform on google cloud platform. This involves:

1. Update the [terraform module](https://github.com/broadinstitute/tgg-terraform-modules) that is configuring the infrastructure you need to update, and open a Pull Request to merge the changes.
1. Once your change is merged, tag the new commit in the terraform modules repository with a new version number (typically in the form of `module-name-v0.0.0)
1. Update the terraform configureation that is calling that module to use your new version, and open a Pull Request.
1. Upon successful review, [Atlantis](#atlantis) will apply the new configuration and close the Pull Request.

# Infrastructure Provisioning

We usually deploy infrastructure in a way where the GCP components are made available before the application deployment. This eliminates the requirement that the application be aware or responsible for deploying all of its infrastructure, which reduces coupling between the application and what it's running on.

## Google Cloud Platform

In TGG, we deploy our applications on google cloud utilizing a variety of services. In general, for application deployment, we prefer container-based methodologies, opting for Google Cloud Run in the simplest of cases, and moving on towards Google Kubernetes Engine (GKE) when application complexity requires it.

Both Cloud Run and GKE have the advantage that their primary means of deployment are standard Docker images. This allows us to take advantage of the cloud provider's features with little fear of lock-in. Applications that can run on either of these stacks are very likely to deploy without many issues on equivalent services on other cloud platforms.

To orchestrate our infrastructure deployments, we rely on a combination of [Terraform](https://terraform.io) and [Atlantis](https://runatlantis.io). These two tools allow us to define our infrastructure as code, and to provide a consistent process to run deployments while maintaining proper locking and code review through GitHub Pull Requests.

## Terraform

Wherever possible, configuration should be developed as a reusable module. This entails publishing the module in our [tgg-terraform-modules](https://github.com/broadinstitute/tgg-terraform-modules) repository, and then consuming that module in an environment based configuration.

Our recommendation for how to implement terraform-managed environments can be found at [Terraform Modules](/docs/patterns/terraform_modules), and [Layering](/docs/patterns/layering).


### Writing your own modules vs using existing modules

Before writing your own module, it's always worth looking at the [terraform-google-modules](https://github.com/terraform-google-modules/) org to determine if there's already something written that fits your use case. Generally speaking, if there's already a module written by google/hashicorp, we try to use it.

The modules in that org are generally well written and maintained, but we have found in some cases that writing our own modules has resulted in simpler implementations, or require less configuration on our part if we can control the default values. In these cases where you feel the pre-written module adds too much complexity, or doesn't quite fit your use case, it's worth considering writing your own module.

## Atlantis

[Atlantis](https://runatlantis.io) is a tool that we use to manage our terraform deployments. It integrates with GitHub, and allows us to run terraform plans and applies in a consistent way. It also allows us to enforce code review on our terraform configurations, and to ensure that we have a record of what was deployed, and by whom.

We run a centrally managed Atlantis instance, and each GCP project is expected to provide a "terraform runner" serivce account with the necessary permissions to manage infrastructure in that project. The central Atlantis service account is then given permissions to impersonate the terraform runner so that it can run terraform plans and applies on behalf of the project.
