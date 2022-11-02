---
title: Local Environment Set Up - AEM Content Fragments Console Extensibility
description: Prepare your local environment for UI extension development.
contributors:
  - https://github.com/AdobeDocs/uix
---
# Set Up Local Environment

This guide includes instructions for setting up a local environment for UI Extension development.

To create UI Extension you must install:

1. [NodeJS](https://nodejs.org/en/download/) [>= v14]. It should also install `npm` together. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage NodeJS installation and versions on your machine.
2. [AIO (Adobe I/O) CLI (Command Line Interface)](https://github.com/adobe/aio-cli)  [>= v9.1.0]


If your extension needs some server-side logic and you want to be able to use `aio app run --local` to run the application locally without deploying code to [Adobe I/O Runtime](https://developer.adobe.com/runtime/docs/) you will also need:
1. [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) [>= v11].
2. [Docker](https://docs.docker.com/engine/install/).

## Manage AIO CLI Tool

Run the following command to install the latest version of AIO CLI if not installed.

```shell
npm install -g @adobe/aio-cli
```

If you already have AIO CLI on your machine, you can find out the version with the following command.

```shell
npm show @adobe/aio-cli version
```

If your AIO CLI is outdated, update it by running the following command. 
```shell
npm install -g @adobe/aio-cli
```


## Optional tools

The following set up is required if you intend to use the local development features provided by the [AIO CLI](https://github.com/adobe/aio-cli): 

- [Visual Studio Code](https://code.visualstudio.com/download) (VS Code) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage (e.g. debugger) is not yet supported.
- [Chrome debugger extension in VSCode](https://github.com/Microsoft/vscode-chrome-debug)

## Additional resources

- [App Builder Local Environment Set Up and optional tools](https://developer.adobe.com/app-builder/docs/getting_started/#local-environment-set-up).
