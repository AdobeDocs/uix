---
title: Code Generation Guide - Details View Extensibility in AEM Assets View
description: Learn how to generate base structure of AEM Assets View Extension.
contributors:
  - https://github.com/AdobeDocs/uix
---
# Code Generation for the Details View Extension in AEM Assets View

The [Asset Details extension Template for the AEM Assets View](https://github.com/adobe/aem-assets-details-ext-tpl) helps developers 
to bootstrap their App Builder apps when using the [AIO CLI](https://github.com/adobe/aio-cli) and generates basic extension structure and all required code.

Template is optional to use, but we highly recommend it in order to save time and have the correct UI Extension structure
from the beginning.

Template provides code generation capabilities targeted to 3 main developers group:
1. Novices, developers who just starting explore UI Extensibility will benefit from direct links to documentation and ability to generate working demo project.
2. Seasoned developers may generate skeleton code for their features and jump directly into business logic implementation.
3. Experts may generate bare bone project and write all the code from scratch.

## Launch code generation during project initialization

<InlineAlert slots="text" />

You need to have AIO CLI version >= 9.1.0 to use the available templates. Please refer to [Local Environment Set Up](../../../guides/local-environment).

You may access code generation functionality during project initialization. 

Create a directory and run the following commands from that directory:

1. First, select the appropriate organization.

    ```shell
    ➜  demo-extension-project % aio app init
    ? Select Org:
    ❯ Alpha Org
      Beta Org 
      Delta Org
    ```

2. Then, select your project from within that organization.

    You can either select the project by scrolling or you can filter the list of projects by beginning to type the name of the project.

    ```shell
    ➜  demo-extension-project % aio app init
    ? Select Org: Alpha Org
    ? Select a Project, or press + to create new:
      great-project
    ❯ useful-project
      awesome-project
    ```

3. Select one of the search options to specify the templates that you are interested in (we recommend to use `All Extension Points`).

    ```shell
    ➜  demo-extension-project % aio app init
    ? Select Org: Alpha Org
    ? Select a Project, or press + to create new: useful-project
    ? What templates do you want to search for?
      All Templates 
    ❯ All Extension Points 
      Only Templates Supported By My Org
    ```

4. Select the template named `@adobe/aem-assets-details-ext-tpl` (Template for an AIO CLI App Builder plugin that generates code for a UI extension in the Asset Details section of the AEM Assets View)

    ```shell
    ➜  demo-extension-project % aio app init
    ? Select Org: Alpha Org
    ? Select a Project, or press + to create new: useful-project
    ? What templates do you want to search for? All Templates
    ✔ Downloaded the list of templates
    ? Choose the template(s) to install:
    |    | Template                                | Description                                                | Extension Point           | Categories           |
    |----|-----------------------------------------|------------------------------------------------------------|---------------------------|----------------------|
    | ❯◉ | @adobe/aem-assets-details-ext-tpl *     | Asset Details extension Template for the AEM Assets View   | aem/assets/details/1      | action, ui           |
    |  ◯ | @adobe/generator-app-api-mesh *         | Extensibility template for Adobe API Mesh, for App Builder | N/A                       | action, graphql-mesh |
    |  ◯ | @adobe/generator-app-excshell *         | Extensibility template for generator-aio-app               | dx/excshell/1             | action, ui           |
    |  - | @adobe/generator-app-asset-compute *    | Extensibility template for generator-aio-app               | dx/asset-compute/worker/1 | action               |

    * = recommended by Adobe; to learn more about the templates, go to https://adobe.ly/templates

    ...

    ✔ Installed npm package @adobe/aem-assets-details-ext-tpl
    ℹ Running template @adobe/aem-assets-details-ext-tpl

    Overview of the Asset Details extension Template for the AEM Assets View:

    * You have the option to generate boilerplate code for your extensible side panel.
    * You can get help regarding documentation at any time from the menu.
    * An App Builder project will be created with Node.js packages pre-configured.
    ```

> If you are experienced user you may also simplify process of template selection by running command

> ```shell
aio app init --template=@adobe/aem-assets-details-ext-tpl

> At this point Asset Details extension Template for the AEM Assets View is added to yor project and ready to use

## Provide basic information about extension

5. Answer the prompts related to extension metadata such as human-readable name, description and version.

    ```shell
    ? What do you want to name your extension? AEM Assets View Demo UI Extension
    ? Please provide a short description of your extension: Demo UI Extension for AEM Assets View
    ? What version would you like to start with? 0.0.1
    ```

## Choose code generation strategy

6. The next prompt is implemented as a menu system and is designed to help you generate boilerplate code for your specific needs. When you are ready to complete the project creation, please select `I'm done`.

    ```shell
    ? What would you like to do next? (Use arrow keys)
      ──────────────
      Add a side panel to the Details View 
      Add server-side handler
      ──────────────
    ❯ I'm done 
      I don't know 
    ```

### Novice, explore what is possible

> 6.1. If you are only starting with exploring UI Extensibility feel no hesitation to choose `I don't know`

> ```shell
? What would you like to do next? I don't know
? What about this then? (Use arrow keys)
  ──────────────
❯ Find some help 
  ──────────────
  Go back

> `Find some help` displays list of useful links.  

### Seasoned developer, choose what you need

> 6.2. If you already know what you want to do start add features to you extensions by selecting items from the main part of the menu. Each part correspond to single Extension Point in AEM Assets View. 

> ```shell
? What would you like to do next? Add a side panel to the Details View
? Please provide tooltip for the side panel icon: Demo panel icon
? Please provide title for the side panel: Demo panel
? Please select React Spectrum icon for the side panel: Extension

> In addition, if your extension requires server-to-server communication add as many server-side handlers as you need.
> ```shell
? What would you like to do next? Add server-side handler
? Adobe I/O Runtime lets you invoke serverless code on demand. How would you like to name this action? export-to-remote-service

### Experts, have full control

> 6.3. If you know what you are doing and want to tweak implementation on low level hit `I'm done` as first answer and you will get bare bone project structure.

## Add business logic

7. After you choose `I'm done` template starts installation of project's package dependencies and generates code.

At this point you already have fully functional UI Extension and it's time to add functionality that you business needs. 
The best place to start is navigating directly to `src/aem-assets-details-1/web-src/src/components/ExtensionRegistration.js` 
which contains code that defines capabilities of the extension and provides information to the AEM Assets View when and how extension should be invoked.
