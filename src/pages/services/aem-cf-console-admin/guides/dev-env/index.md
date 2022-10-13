---
title: Local Environment Set Up - AEM Content Fragments Console Extensibility
description: Prepare your local environment for Content Fragments console extension development.
contributors:
  - https://git.corp.adobe.com/dx-devex-acceleration/uix-docs
---
# Set Up Local Environment
This guide includes instructions for setting up a local environment for AEM (Adobe Experience Manager) Content Fragments Console extension development.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/) [>= v14]. It should also install `npm` together. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage NodeJS installation and versions on your machine.
- [AIO (Adobe I/O) CLI (Command Line Interface)](https://github.com/adobe/aio-cli)  [>= v9.1.0]
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) [>= v11]. JDK is required if you want to deploy the actions (in your UI extension) to a local [OpenWhisk](https://openwhisk.apache.org/) instance via `aio app run --local` command.
- Docker. This is a required dependency in order to run a local OpenWhisk instance via `aio app run --local` command.


## Installation

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
