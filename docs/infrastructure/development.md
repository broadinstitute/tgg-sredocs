---
sidebar_position: 2
---

# Development

## gnomAD

In cases where you'd like to configure a prod-like GKE cluster for testing gnomAD browser installations, you can utilize one of two modules:

- the [gnomad-browser-infra](https://github.com/broadinstitute/tgg-terraform-modules/tree/main/gnomad-browser-infra) module
- the [private-gke-cluster](https://github.com/broadinstitute/tgg-terraform-modules/tree/main/private-gke-cluster) module

depending on your needs. If you just need a simple GKE cluster, you can start with the private-gke-cluster module, which will give you a single GKE cluster without much else surrounding it. If you need the surrounding tooling, such as serviceAccounts for running data pipelines, accessing / restoring from elasticsearch snapshots, you can use the gnomad-browser-infra module. In either case, you need to provide a VPC network to deploy the resources into, which you can use the [gnomad-vpc](https://github.com/broadinstitute/tgg-terraform-modules/tree/main/gnomad-vpc) module. If you already have a VPC to use, the GKE cluster modules simply need the name of your VPC network, and the name of the subnet that servers should be deployed into.

:::note

While `deployctl` is still the method for deploying our application manifests, you should pick a `infra_prefix` (see examples below) with a name formatted like `gnomad-abc` where `abc` is a name descriptive of you or your test. Then in your `deploy_config.json` file, you can specify an `environment_tag` of `abc`. Doing so will maintain compatility with `deployctl`'s expectations for cluster naming.

:::

The following are some examples of different configurations that are suitable for development

### Full Prod Replica

This example configures a VPC and a cluster with the same amount of resources as the production environment. Note that we've selected preemptiple nodes here to reduce cost. You should adjust the `gke_node_pools` variable to meet the needs of your current test.

```
provider "google" {
    project = "gnomadev"
    region  = "us-east1"
}

module "gnomad-mytest" {
  source              = "github.com/broadinstitute/tgg-terraform-modules//gnomad-vpc?ref=gnomad-vpc-v0.0.1"
  network_name_prefix = "gnomad-mytest
}

module "gnomad-test-infra" {
  source                                = "github.com/broadinstitute/tgg-terraform-modules//gnomad-browser-infra?ref=gnomad-browser-infra-v0.0.3"
  infra_prefix                          = "gnomad-mytest"
  vpc_network_name                      = module.gnomad-mytest.gnomad_vpc_network_name
  vpc_subnet_name                       = "gnomad-mytest-gke"
  project_id                            = "gnomadev"
  gke_control_plane_authorized_networks = ["0.0.0.0/0"]
  gke_pods_range_slice                  = "10.164.0.0/14"
  gke_services_range_slice              = "10.168.0.0/20"
  gke_node_pools                        = [
    {
      "pool_machine_type": "e2-standard-4",
      "pool_name": "main-pool",
      "pool_num_nodes": 2,
      "pool_preemptible": true,
      "pool_resource_labels": {},
      "pool_zone": ""
    },
    {
      "pool_machine_type": "e2-custom-6-49152",
      "pool_name": "redis",
      "pool_num_nodes": 1,
      "pool_preemptible": true,
      "pool_resource_labels": {
        "component": "redis"
      },
      "pool_zone": ""
    },
    {
      "pool_machine_type": "e2-highmem-8",
      "pool_name": "es-data",
      "pool_num_nodes": 3,
      "pool_preemptible": true,
      "pool_resource_labels": {
        "component": "elasticsearch"
      },
      "pool_zone": ""
    }
  ]
}
```

### Simple private GKE cluster

If all you need is a GKE cluster, you could use the following example:

```
provider "google" {
    project = "gnomadev"
    region  = "us-east1"
}

module "gnomad-mytest" {
  source              = "github.com/broadinstitute/tgg-terraform-modules//gnomad-vpc?ref=gnomad-vpc-v0.0.1"
  network_name_prefix = "gnomad-mytest
}

module "my-test-cluster" {
  source                                = "github.com/broadinstitute/tgg-terraform-modules//private-gke-cluster?ref=private-gke-cluster-v1.0.2"
  gke_cluster_name                      = "testing-cidr-ranges"
  project_name                          = "gnomadev"
  gke_control_plane_zone                = "us-east1"
  vpc_network_name                      = module.gnomad-mytest.gnomad_vpc_network_name
  vpc_subnet_name                       = "gnomad-mytest-gke"
  gke_control_plane_authorized_networks = ["0.0.0.0/0"]
  gke_services_range_slice              = "10.220.0.0/20"
  gke_pods_range_slice                  = "10.216.0.0/14"
  gke_node_pools                        = [
    {
      "pool_machine_type": "e2-medium",
      "pool_name": "main-pool",
      "pool_num_nodes": 2,
      "pool_preemptible": true,
      "pool_resource_labels": {},
      "pool_zone": ""
    }
  ]
}
```

This configures a single 2-member node pool called "main-pool". You should adjust the `gke_node_pools` variable to suit your development needs.

### Connecting to your cluster

Once your cluster is provisioned, be sure to retrieve credentials from it and set your current `kubectl` context:

```bash
gcloud container clusters get-credentials gnomad-mytest --project gnomadev --region us-east1
```
