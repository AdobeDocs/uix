---
title: Troubleshooting - AEM Content Fragments Console Extensibility
description: Resolve issue with Content Fragments console extension
contributors:
  - https://github.com/AdobeDocs/uix
---
# Debug Contents Fragment Console Extension

The ability to get fast feedback and see if the code works as expected is crucial for rapid development. A developer may connect locally running UI Extension to production AEM Content Fragments Console, link it to the correct AEM backend, and verify all changes before deployment and extension publication.

## Running in local environment
When the developer runs UI Extension locally and if it has server-side handlers 2 options available:
1. Complete local environment isolation. In this case, the local environment requires JVM and Docker installed and will run server-side handlers locally inside Docker containers. This mode is enabled by adding `--local` option to `run` command.
2. By default `run` command will use Adobe I/O Runtime and deploy server-side functions in Adobe cloud.

For both options, the local development server with file change monitoring will be started to server UI Extension front-end part.

Regardless of where server-side handlers are running, in local containers or on I/O Runtime developer will be able to connect a debugger to trace script execution. 

### Complete local environment isolation
```shell
➜  demo-extension-project % aio app run --local
```

This will deploy the actions to a local [OpenWhisk](https://openwhisk.apache.org/) instance, which the [CLI](https://github.com/adobe/aio-cli) will automatically download and install. The SPA will be run on the local machine.

```shell
➜  demo-extension-project % aio app run --local
  ℹ checking if java is installed...
  ℹ checking if docker is installed...
  ℹ checking if docker is running...
  ℹ starting local OpenWhisk stack...
  ℹ writing credentials to tmp wskdebug config 'project/dist/aem-cf-console-admin-1/.env.local'
  ℹ building actions..
  ℹ watching action files at project/src/aem-cf-console-admin-1/actions...
  ℹ injecting backend urls into frontend config
  ℹ bundling project/src/aem-cf-console-admin-1/web-src/**/*.html
  ℹ redeploying actions..
  ℹ Info: Deploying package [aem-cf-console-admin-1]...
  ℹ Info: package [aem-cf-console-admin-1] has been successfully deployed.

  ℹ Info: Deploying action [aem-cf-console-admin-1/import]...
  ℹ Info: action [aem-cf-console-admin-1/import] has been successfully deployed.

  ℹ Info: Deploying action [aem-cf-console-admin-1/export]...
  ℹ Info: action [aem-cf-console-admin-1/export] has been successfully deployed.

  ℹ Success: Deployment completed successfully.
  ℹ web actions:
  ℹ   -> http://localhost:3233/api/v1/web/guest/aem-cf-console-admin-1/import
  ℹ   -> http://localhost:3233/api/v1/web/guest/aem-cf-console-admin-1/export
  ℹ serving front-end using bundler serve...
  ℹ local frontend server running at https://localhost:9080
  ℹ setting up vscode debug configuration files...
  ⠋    create .vscode/launch.json

  No change to package.json was detected. No package manager install will be executed.
  ℹ press CTRL+C to terminate dev environment
  
  To view your local application:
    -> https://localhost:9080
  To view your deployed application in the Experience Cloud shell:
    -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://localhost:9080
  press CTRL+C to terminate dev environment
```

### Use Adobe I/O Runtime to deploy server-side handlers
```shell
➜  demo-extension-project % aio app run
```

This will deploy the actions to [Adobe I/O Runtime](/apis/experienceplatform/runtime) while running the UI part on the local machine. 

```shell
➜  demo-extension-project % aio app run
  create .vscode/launch.json

No change to package.json was detected. No package manager install will be executed.

To view your local application:
  -> https://localhost:9080
To view your deployed application in the Experience Cloud shell:
  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://localhost:9080
press CTRL+C to terminate dev environment
```

Now your UI extension is reachable by the displayed URL on the Terminal. 

### UI Extension endpoint

Once local runtime is started extension endpoint is returned as URL in `To view your local application`. You will need this URL to embed the locally running extension into AEM Content Fragments Console.
### Accept the Certificate

If you are using this application for the first time, you will see a message similar to

```shell
success: generated certificate
A self signed development certificate has been generated, you will need to accept it in your browser in order to use it.
Waiting for the certificate to be accepted.... timed out
```

This message pops up because we use a development SSL certificate for secure communication. Learn more about the purpose of this certificate [here](https://letsencrypt.org/docs/certificates-for-localhost/).

If you see this message, please navigate to `https://localhost:9080`. In Google Chrome you should see a screen similar to this.

![Certification](cert-1.png)

Click on `Advanced`, the nex screen may vary from browser to browser, but you should see a screen like this, where you can click on `Proceed to localhost (unsafe)` to accept the certificate.

![Certification](cert-2.png)

As alternative in Google Chrome you may type `thisisunsafe`. Please reference to documentation of your browser how to accept self-signed certificate.

You may need to exit the current process and run `aio app run` again.

## Load UI Extension

Using extension endpoint URL returned at the end of run command output you may embed it into production environment of AEM Contents Fragment Service:

1. Navigate to Global Navigation panel of AEM environment which data you plan to use for extension verification.
![AEM Global Navigation](cfc-global-navigation.png)
2. Click on `Content Fragments`
3. You will be redirected to AEM Contents Fragment Console running in Adobe Experience Shell.
4. To the URL where you was redirected add following query parameters:
   1. `devMode=true` - instructs Adobe Experience Shell to allow content from localhost
   2. `ext=<extension_endpoint_url>` - full extension endpoint URL. You may use multiple `ext` parameters to test several extensions at time.
5. Hit Enter to reload Content Fragments Console with added extension

Overall Content Fragments Console URL schema should looks like `https://experience.adobe.com/?devMode=true&ext=https://localhost:9080&repo=<CURTOMER_AEM_HOST>#/@<CUSTOMER_IMS_ORG>/aem/cf/admin/`.
