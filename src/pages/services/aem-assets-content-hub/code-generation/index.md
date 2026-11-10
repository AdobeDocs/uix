---
title: Code Generation
description: Create an AEM Assets Content Hub extension project from the maintained sample application.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Code Generation

The [AEM Assets Content Hub sample application](https://github.com/adobe/aem-uix-examples/tree/main/aem-assets-contenthub-sample) provides the project structure and starter code for the `aem/assets/contenthub/1` extension point. Using the sample is optional, but we highly recommend it to save time and start with the correct UI Extension structure.

## Launch code generation during project initialization

You need to have AIO CLI version >= 9.1.0 to use the available templates. Please refer to [Local Environment Set Up](https://developer.adobe.com/uix/docs/guides/local-environment/).

After creating a project on Adobe Developer Console and installing `@adobe/aio-cli`, start code generation using the sample application.

Create a directory and run the following commands from that directory:

1. Login to Adobe I/O.

```shell
➜ demo-extension-project % aio login
```

Follow the link to authenticate your account.

2. Verify Your Current Context.

```shell
➜ demo-extension-project % aio where
```

You should see:

```text
1. Org: <Your Organization>
2. Project: <Your Project>
3. Workspace: <No Workspace Selected>
```

3. Select the Appropriate org, project and workspace.

```shell
➜ demo-extension-project % aio console org select
➜ demo-extension-project % aio console project select
➜ demo-extension-project % aio console workspace select
```

4. [Fetch your GitHub PAT (Personal Access Token)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) and perform app init. Select the appropriate organization.

```shell
➜ demo-extension-project % aio app init --repo adobe/aem-uix-examples/aem-assets-contenthub-sample --github-pat <your-github-pat>
```

5. The same initialization command prompts you to select your organization and then your project within that organization.

You can either select the project by scrolling or filter the list of projects by beginning to type the project name.

```shell
:heavy_check_mark: Downloaded quickstart repo

? Select Org:

❯ Alpha Org
  Beta Org
  Delta Org

? Select a Project, or press + to create new:
  great-project
❯ useful-project
  awesome-project

Project initialized for Workspace Stage, you can run 'aio app use -w <workspace>' to switch workspace.

:heavy_check_mark: App initialization finished!
```

> Tip: you can add more actions, web-assets and events to your project via the `aio app add` commands.

After this step, we will have a generated project structure with necessary npm dependencies are getting installed.

If you have worked with an Adobe App Builder App before, you will notice that you have generated a starter project of a UI Extension that implements [extension points](https://developer.adobe.com/app-builder/docs/guides/extensions/).

```text
.
|-- README.md
|-- app.config.yaml
|-- extension-manifest.json
|-- hooks
|   `-- post-deploy.js
|-- jest.setup.js
|-- package.json
`-- src
    `-- aem-assets-contenthub-1
        |-- actions
        |-- e2e
        |-- ext.config.yaml
        |-- test
        `-- web-src
            |-- index.html
            `-- src
                |-- components
                |   |-- App.js
                |   |-- CardActionModal.js
                |   |-- Constants.js
                |   |-- ExtensionRegistration.js
                |   |-- PanelAssetDetailsExtensionTab.js
                |   `-- SelectionBarModal.js
                |-- index.css
                |-- index.js
                `-- utils.js
```

The root `app.config.yaml` declares the unified Content Hub extension point:

```yaml
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

Keep the `aem/assets/contenthub/1` key in `app.config.yaml`. The key identifies the Content Hub extension point and is not an application-specific name.

The `allowedRepos` array in `ExtensionRegistration.js` contains the list of repository names that the extension is allowed to register with. To ensure that your extension works correctly, update the array with the repository IDs you want to configure.

Format: `delivery-pxxx-eyyy.adobeaemcloud.com`

Example:

```js
const allowedRepos = ['delivery-p12345-e167890.adobeaemcloud.com'];
```

## Configure the extension

Update the sample before running it:

1. Set a stable, unique `extensionId` in `Constants.js`.
2. Keep only the registration namespaces and application routes required by the extension.
3. Replace sample labels, icons, panel descriptors, and action handlers with the application behavior.
4. Update package and manifest metadata for the project.

The sample demonstrates all four Content Hub surfaces:

- `assetDetails` for a custom Asset Details panel
- `card` with the `assets` context for Asset Card actions
- `card` with the `collections` context for Collection Card actions
- `selectionBar` for actions on selected assets or collections

See [Extension Points](../api/index.md) for the API contracts.

## Build and validate the project

Build the web application and Runtime actions:

```bash
aio app build
```

Run the automated tests:

```bash
aio app test
aio app test --e2e
```

Continue with [Step-by-Step Extension Development](../extension-development/index.md) to run and preview the extension in Content Hub.