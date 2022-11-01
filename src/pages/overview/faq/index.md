---
title: FAQ - UI Extensibility
description: Find answers to most frequent questions about UI Extensibility
contributors:
  - https://git.corp.adobe.com/dx-devex-acceleration/uix-docs
---
# FAQ

We are trying to make your experience as smooth as possible. However, there are still some issues that you may face while working with UI Extensibility.

## AIO CLI does not behave as described in the documentation

Most probably you have a dated version of AIO CLI.

**Solution**

Ensure your CLI and all plugins are up to date.

Check the installed version of AIO CLI:
```shell
aio -v
```

Compare it with the current published version:
```shell
npm show @adobe/aio-cli version
```

If your CLI is outdated, update it by running:
```shell
npm install -g @adobe/aio-cli
```

After that, you can simply run `aio update` to ensure all plugins are updated.

Find more details on [Prepare your local environment](../local-environment).

## My UI Extension is not loaded

Most probably you have issues with a SSL certificate. Adobe App Builder generates valid certificates for the production environment but during local development and on staging you may need manually accept the certificate.

**Solution**

1. Open a UI Extension endpoint in your browser (e.g. `https://localhost:9080` during local development).
2. Manually accept the certificate. For example for Google Chrome type `thisisunsafe` or click on `Advanced` link and then on `Proceed to localhost (unsafe)`.

## Login via `aio login` does not work or `aio app` commands show the wrong IMS organization or projects

This sometimes may happen to users who work with multiple Adobe Services and are members of multiple IMS organizations.

**Solution**

1. Go to https://account.adobe.com and click "Sign Out". 
2. Open the terminal and type `aio logout`.
3. Then try to run `aio login` again.

## What UI can be extended

You may find a list of Adobe Services that implement UI Extensibility under `Extensible Services` in this documentation. For each service, we provide documentation of extension points and step-by-step guides.

## What is an extension point

The extension point is functionality in Adobe Service UI that allows the execution of 3rd party code. Extension point usually includes:
1. Requirements for extension implementation (what API extension should implement).
2. Promise to invoke extension code under defined conditions.
3. API that allows the extension to access Adobe Service UI functionality.

## What software tools should I have installed to get started with developing

You will need NodeJS and [AIO CLI](https://github.com/adobe/aio-cli). All other tools are optional and you may replace them with your preferred one.

For more information see [Set Up Local Environment](../guides/local-environment/).

## Do I need to deploy any services locally

No! The only thing that you will run locally is your own extension. You will be able to add your extension running locally or in Adobe cloud to the production Adobe Services and see how it behaves before sharing it with anybody else.

## Can I test my extension before deploying it to the cloud

Yes! It is possible to run the extension locally and embeds it into production Adobe Service to check if it works as expected.
For more information see [Troubleshooting](../services/aem-cf-console-admin/troubleshooting).

## Should I write all extension code by myself

No! We provide a template that allows you to generate most of the code required to make UI Extension out of the App Builder application. You will need only implement your business logic.

But you still can write everything from scratch if you wish to.

For more information see [Code Generation](../services/aem-cf-console-admin/code-generation/).

## What is the simplest way to start

Our [code generator](../services/aem-cf-console-admin/code-generation/) supplies a demo project that you may generate and deploy for your IMS organization. Explore it and change to learn what is possible with UI Extensibility.


<InlineAlert slots="text" />

UI Extensibility is currently available for early preview as a beta release. If you cannot find an answer to your question please contact us directly at uix@adobe.com.
