---
title: Local Environment Set Up - AEM Content Fragments Console Extensibility
description: Prepare your local environment for Content Fragments console extension development.
contributors:
  - https://git.corp.adobe.com/dx-devex-acceleration/uix-docs
---
# Set Up Local Environment
This guide includes instructions for creating setting up a local environment for AEM (Adobe Experience Manager) Content Fragments Console extension development.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/) [>= v14]. It should also install `npm` together. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage NodeJS installation and versions on your machine.
- [AIO (Adobe I/O) CLI (Command Line Interface)](https://github.com/adobe/aio-cli)  [>= v9.1.0]


## Installation

Run the following command to install the latest version of AIO CLI if not installed.

```shell
npm install -g @adobe/aio-cli
```

If you already have AIO CLI on your machine, you can find out the version with the following command.

```shell
npm show @adobe/aio-cli version
```

If your AIO CLI is outdated, update it by running `npm install -g @adobe/aio-cli`. 
```shell
npm install -g @adobe/aio-cli
```


## Set up the required NPM configuration

> Important Notes:
> - In order to use the template `@adobe/aem-cf-admin-ui-ext-tpl` (Extensibility Template for AEM Content Fragment Console) with `aio app init` command, you will need to set up an NPM configuration in your machine to authenticate with Adobe's Artifactory repositories as there is dependency on a private package `@adobe/uix-guest`.
> - Please refer to `https://wiki.corp.adobe.com/display/Artifactory/NPM` and get your API key from `https://artifactory.corp.adobe.com/`
> - In the future, the private packages will be made available in the [NPM public registry](https://www.npmjs.com/) and the above NPM configuration set up will not be needed.

1. Run the following command to set up an NPM configuration in your machine to authenticate with the Adobe's Artifactory repositories.

    ```shell
    curl -u<USERNAME>:<API_KEY> https://artifactory.corp.adobe.com/artifactory/api/npm/auth >> ~/.npmrc
    ```

2. Set an NPM config key named `registry` to the specified Adobe Artifactory repository URL below.

    ```shell
    npm config set registry "https://artifactory.corp.adobe.com/artifactory/api/npm/npm-adobe-platform-release/"
    ```

## Optional tools

The following set up is required if you intend to use the local development features provided by the [AIO CLI](https://github.com/adobe/aio-cli): 

- [Visual Studio Code](https://code.visualstudio.com/download) (VS Code) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage (e.g. debugger) is not yet supported.
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) (at least Java 11)
- [Chrome debugger extension in VSCode](https://github.com/Microsoft/vscode-chrome-debug)
- [Docker Desktop](https://www.docker.com/get-started)