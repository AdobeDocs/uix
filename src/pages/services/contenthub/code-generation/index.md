---
title: Code Generation Guide - Content Hub Extensibility
description: Scaffold a Content Hub UI extension project using the AIO CLI template.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Code Generation for Content Hub Extensions

The Content Hub extension template for the AIO CLI bootstraps an App Builder project with the correct structure, dependencies, and starter code for a Content Hub UI extension.

The template is optional, but strongly recommended: it sets up the `aem/assets/contenthub/1` extension point, routing, extension registration, and a sample panel component — so you can focus on your business logic from the start.

Template provides code generation targeted at three types of developers:

1. **Novices** — generate a working demo with links to documentation.
2. **Seasoned developers** — generate skeleton code for specific surfaces and jump straight into business logic.
3. **Experts** — generate a bare-bones project and write everything from scratch.

## Prerequisites

You need AIO CLI version ≥ 9.1.0. See [Local Environment Set Up](../../../guides/local-environment/index.md).

## Launch code generation during project initialization

Create a directory for your extension and run the following commands from that directory.

1. **Select the organization.**

    ```shell
    ➜  my-contenthub-extension % aio app init
    ? Select Org:
    ❯ My Org
      Other Org
    ```

2. **Select a project** within that organization.

    ```shell
    ? Select a Project, or press + to create new:
    ❯ my-contenthub-project
      another-project
    ```

3. **Choose which templates to search for.** Select `All Extension Points`.

    ```shell
    ? What templates do you want to search for?
      All Templates
    ❯ All Extension Points
      Only Templates Supported By My Org
    ```

4. **Select the Content Hub template** using the spacebar.

    ```shell
    ✔ Downloaded the list of templates
    ? Choose the template(s) to install:
    |    | Template                                     | Description                                             | Extension Point       | Categories |
    |----|----------------------------------------------|---------------------------------------------------------|-----------------------|------------|
    | ❯◉ | @adobe/aem-contenthub-ext-tpl *              | Content Hub Extension Template                          | aem/assets/contenthub/1   | action, ui |
    |  ◯ | @adobe/aem-assets-details-ext-tpl *          | Asset Details extension Template for AEM Assets View    | aem/assets/details/1  | action, ui |
    |  ◯ | @adobe/aem-assets-browse-ext-tpl *           | Asset Browse extension Template for AEM Assets View     | aem/assets/browse/1   | action, ui |
    |  ◯ | @adobe/generator-app-excshell *              | Extensibility template for generator-aio-app            | dx/excshell/1         | action, ui |

    * = recommended by Adobe
    ```

    > You can also skip the interactive selection by running:
    > ```shell
    > aio app init --template=@adobe/aem-contenthub-ext-tpl
    > ```

## Provide basic extension information

5. **Answer the metadata prompts.**

    ```shell
    ? What do you want to name your extension? My Content Hub Extension
    ? Please provide a short description of your extension: Adds custom actions and panels to Content Hub
    ? What version would you like to start with? 0.0.1
    ```

## Choose code generation strategy

6. **Select the features you want to generate.** Select from the menu and press Enter. When done, select `I'm done`.

    ```shell
    ? What would you like to do next? (Use arrow keys)
      ──────────────
      Add a tab panel to the Asset Details dialog
      Add asset card actions
      Add collection card actions
      Add selection bar actions
      Add server-side handler
      ──────────────
    ❯ I'm done
      I don't know
    ```

### Generate a tab panel for the Asset Details dialog

> 6.1. Select `Add a tab panel to the Asset Details dialog` to generate the `assetDetails` namespace and a sample panel component.

```shell
? What would you like to do next? Add a tab panel to the Asset Details dialog
? Please provide a tooltip for the tab: My Panel
? Please provide a title for the tab: My Panel
? Please select a React Spectrum icon for the tab: Info
```

### Generate asset card actions

> 6.2. Select `Add asset card actions` to generate the `card` namespace with `getActionButtons` and `onActionClick` stubs.

```shell
? What would you like to do next? Add asset card actions
? Please provide a label for the card action button: Export
? Please select a React Spectrum icon: Export
```

### Generate selection bar actions

> 6.3. Select `Add selection bar actions` to generate the `selectionBar` namespace.

```shell
? What would you like to do next? Add selection bar actions
? Please provide a label for the selection bar button: Bulk Export
? Please select a React Spectrum icon: Export
```

### Add a server-side handler (optional)

> 6.4. If your extension needs server-to-server communication, add a serverless action:

```shell
? What would you like to do next? Add server-side handler
? How would you like to name this action? call-remote-api
```

## Generated project structure

After selecting `I'm done`, the template installs dependencies and generates:

```text
.
|-- README.md
|-- app.config.yaml
|-- extension-manifest.json
|-- hooks
|   `-- post-deploy.js
|-- package.json
`-- src
    `-- aem-assets-contenthub-1
        |-- ext.config.yaml
        `-- web-src
            |-- index.html
            `-- src
                |-- components
                |   |-- App.js
                |   |-- Constants.js
                |   |-- ExtensionRegistration.js
                |   `-- MyPanel.js          <- generated for tab panel option
                |-- index.css
                `-- index.js
```

```yaml
# app.config.yaml
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

## Add business logic

Navigate to `src/aem-assets-contenthub-1/web-src/src/components/ExtensionRegistration.js`. This is where the extension declares its capabilities to Content Hub. Edit the generated stub code to implement your business logic.

For a detailed walkthrough of each generated component, see [Step-by-step Extension Development](../extension-development/index.md).
