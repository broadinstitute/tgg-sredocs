# Terraform Modules

## Basic Philosophy

Whenever possible, encapsulate configuration in a reusable module. Even if you only have one environment, this allows for using it again later, or simply using the module to test changes before you deploy them to your live environment. When you have multiple environments, it ensures that you are using the same configuration in every environment. Separately versioning the modules also allows you to progressively roll out changes to different environments for testing.

## Composing Modules

Modules should generally be broken down into their smallest logical components, and then composed into a higher level module to build more complex infrastructure. For example, see the [private-gke-cluster](https://github.com/broadinstitute/tgg-terraform-modules/tree/main/private-gke-cluster) module, and the [gnomad-browser-infra](https://github.com/broadinstitute/tgg-terraform-modules/tree/main/gnomad-browser-infra) module. The private-gke-cluster mpdule provides a GKE configuration that has the base requirements for all of our deployments, and the gnomad-browser-infra module provides a GKE cluster using that module, plus the additional infrastructure that the gnomAD browser needs.

## Versioning

When you make changes to a module, you should tag the commit that you are using with a version number. This allows you to reference that specific version in your consuming configuration, and ensures that you can roll out changes to different environments at different times.

In our [tgg-terraform-modules](https://github.com/broadinstitute/tgg-terraform-modules) repository, we use a versioning scheme that follows a format like `module-name-v0.0.0`. This allows us to tag each module independently, and to provide provide rough [semver](https://semver.org/) signaling about the changes in each version.
