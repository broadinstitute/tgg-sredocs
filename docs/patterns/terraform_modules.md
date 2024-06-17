# Terraform Modules

Whenever possible, encapsulate configuration in a reusable module. Even if you only have one environment, this allows for using it again later, or simply using the module to test changes before you deploy them to your live environment. When you have multiple environments, it ensures that you are using the same configuration in every environment. Separately versioning the modules also allows you to progressively roll out changes to different environments for testing.
