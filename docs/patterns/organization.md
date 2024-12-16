# Cloud project organization

## Separation of environments

When possible, separate application environments (such as dev/staging/production) into separate cloud provider projects. This allows for better isolation of resources, and can help prevent accidental changes to production resources. In our typical development environments, it is often desirable to provide developers with access to a dev environment without giving them access to production (until it is deemed fit). This separation of environments can help ease the complexity of configuring such access.

## Use cloud project hierarchy (folders) where possible

Our typical cloud provder (GCP) allows for organizing projects into folders. This can be useful for grouping projects by team, or by application. This can help with managing billing, and can also help with IAM permissions, as permissions can be inherited from parent folders. An example of a folder hierarchy might look like:

```
- gnomad/
  - gnomad-browser-prod
  - gnomad-browser-dev
  - developer-sandboxes/
    - alice-sandbox
    - bob-sandbox
  - collaborations/
    - new-dataset-1
    - dataset-upgrade-2
```

In this type of resource hierarchy, we can assign permissions differently to each project or subfolder, as well as assigning higher-level permissions to administrators at the top level. Since the permissions inherit down the hierarchy, we can be sure that the permissions are consistent across all projects in the folder, and we don't have to repeat ourselves in each project's IAM configuration.
