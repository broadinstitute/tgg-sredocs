---
sidebar_position: 2
---

# Infrastructure Layering

In general, we've found the following practice of managing infrastructure in layers to work quite well. Many of our initial approaches to infrastructure management involved placing the entire configuration in a single layer, so that the network, data, and application were all deployed together. While it was convenient to have a single entrypoint for the entire application deployment (such as a single `terraform apply`), this approach exhibited a number of drawbacks, including:

- **Coupling**: The applications were tightly coupled with things like the VPC configuration for the network they resided in.
- **Large Change Radius**: Changes to the application's infrastructure could impact the network, and vice versa.
- **Difficulty in Reuse**: It was difficult to reuse infrastructure components across different applications.
- **Difficulty in Testing**: It was difficult to deploy small test environments, as the entire stack had to be deployed together.

Instead, we've opted for breaking configuration out into the following layers:

- **Network Layer**: This layer contains the VPC, subnets, and other network resources.
- **Data Layer**: This layer contains databases, caches, storage buckets, and other data storage resources.
- **Application Layer**: This contains compute, managed service configuration, and IAM permissions for the application and its associated resources

Breaking the configuration down into these three layers has worked well in several areas. From a dependency standpoint, the upper layers of the infrastructure are often dependent on the lower layers, and assuming that the lower levels are built first makes the upper layers easier to build. While tools like terraform are designed to resolve these dependencies, in practice, we found that it was often failing to wait for the lower level layers to be available before proceeding onto the upper layers. This resulted in inconsistent deployment success.

By managing the infrastucture for the network, data, and application separately, we can enforce high level ordering (e.g. The network must be applied first, then data resources, and finally application resources). This allows the application deployment modules to be written in a way where they don't need to be concerned with the lower levels, which has reduced complexity. The rough high-level ordering has largely mitigated the problems terraform was having with eventually consistent cloud provider APIs.

We've also found that these three layers are often developed at dramatically different speeds. The network layer changes quite rarely after initial development, as do the data layers. The application layer, however, changes quite frequently. By separating these layers, we can reduce the blast radius of changes, and make it easier to test and deploy changes to the application layer without impacting the network or data layers. It has also opened the door to more re-use of things like VPCs, as they are no longer managed with a particular application's deployment.


## Example layout of a multi-layer terraform repository

```
gcp-project-name/
├── vpc/
│   ├── main.tf # VPC configuration
├── data/
│   ├── cloudsql.tf # CloudSQL database
│   ├── redis.tf # Redis cache
├── services/ # individual application
│   ├── app1/
│   │   ├── main.tf
│   ├── app2/
│   │   ├── main.tf
```

In the preceding example, you would deploy a fresh environment in the following order:

1. in the `vpc` directory, run `terraform apply`
2. in the `data` directory, run `terraform apply`
3. in each of the `services` directories, run `terraform apply`

With this directory structure in place, you can see how the opportunity is provided to independently update any of these components without affecting the others. As a smaller implementation detail, when using terraform, this also has the added benefit of limiting the size and scope of the state file. There's less risk of corrupting state outside of the small scope that you're currently changing, and smaller state files keep you from running into the maximum number of resources that can be managed in a single state file.
