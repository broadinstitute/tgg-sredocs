# Configuration and Code

In general, we should prefer to store our environment configurations and application deployment definitions separately from our application source code. The following is a discussion of some of the (anti-)patterns that you might consider, and their pros and cons. It is important to note that these are not one size fits all solutions, and that you may select a different methodology if it suits your application.

## Anti-Patterns

### Storing configuration and code together

This approach involves storing all the deployment configs and environment configs with the application source code. This is an anti-pattern, because doing this results in config-only updates that cause churn in the application repository. For example, you may want to increase the number of pod replicas or RAM resources in a kubernetes deployment. The change required to the manifest for this would need to follow your typical application code change pattern for deployment and release. This may involve doing things that are unneccesary for a config only change. You also run into chicken and egg scenarios when defining deployments, such as:

1. update app, get new commit SHA: abcdef1
2. update docker image, tag it with abcdef1
3. update deployment config to use new image, commit it, now we have new commit SHA: abcdef2
4. tell your deployment tool to deploy the new commit SHA: abcdef2
5. the actual version of the app that is deployed is: abcdef1.

This causes confusion, and introduces unneccesary commits into the application repository.

## Patterns

### Hybrid configuration

In a hybrid approach, you might store the base configs with the application, so that app configuration is versioned with the app, but final environment configuration is separate. This allows for establishing a relationship with the application and its configuration. For example, it may not always make sense to deploy an new version of the application, with a very old deployment configuration.

In practice, for a kubernetes-centric deployment, you might store the base manifests that are common to all your deployments with your application code, and then create an environment/deploy repository that has the final [Kustomizations](https://kustomize.io) which translate that deployment into your specific environments.

### Separate configuration

Going a step further, you could store the entire configuration in a separate repository. This allows for centralizing all of your deployment configurations together, and avoids any chicken and egg scenarios with keeping the application and deployment together in the same repository. In this case, developers only need to worry about one repository for deployment information, and you could consolidate deployment automation in one place.

With separate or hybrid deployment/environment configuration, you can imagine a simpler deployment workflow like the following:

1. update app, get new commit SHA: abcdef1
2. update docker image, tag it with abcdef1
3. after docker build success, update deployment config to use image tag abcdef1
4. deployment tool deploys new version of the app with the new image tag.

Here, updates are all still encoded in git, but we're not asking it to deploy a commit SHA that doesn't match the version of the app that was built and tagged.

