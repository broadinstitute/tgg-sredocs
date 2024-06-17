# Configuration and Code

... notes on storing deployment configurations separately from app code.

Hybrid approach: store base configs with the application, so that app configuration is versioned with the app, but final environment configuration is separate.
    - this allows for establishing a relationship with the application and its configuration -- it may not always make sense to deploy an new version of the application, with a very old deployment configuration.

Separate repository approach: store the entire configuration in a separate repository. This allows for keeping all of the deployment configurations together, and avoids any chicken and egg scenarios with keeping the application and deployment together in the same repository.

Anti-pattern here is storing all the deployment configs and environment configs with the application. That results in config-only updates that cause churn/updates in the application repository. You also run into chicken and egg scenarios when updating:

1. update app, get new commit SHA: abcdef1
2. update docker image, tag it with abcdef1
3. update deployment config to use new image, commit it, now we have new commit SHA: abcdef2
4. tell your deployment tool to deploy the new commit SHA: abcdef2
5. the actual version of the app that is deployed is: abcdef1.

This causes confusion, and introduces unneccesary commits into the application repository. Instead, with separate deployment/environment configuration, you can imagine a deployment scenario like the following:

1. update app, get new commit SHA: abcdef1
2. update docker image, tag it with abcdef1
3. after docker build success, update deployment config to use image tag abcdef1
4. deployment tool deploys new version of the app with the new image tag.

In this scenario, the updates are all still encoded in git, but we're not asking it to deploy a commit SHA that doesn't match the version of the app that was built and tagged.
