---
title: Step-by-step Extension Development
description: Discover how to implement your first AEM Assets Content Hub extension.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Step-by-step AEM Assets Content Hub Extension Development

The document helps you understand how to set up a local environment and start developing your first UI Extension for AEM Assets Content Hub.

## About application

This example application uses the unified `aem/assets/contenthub/1` extension point and demonstrates the three namespaces available in Content Hub:

- `assetDetails` adds a custom panel to the Asset Details dialog.
- `card` adds actions to Asset Cards and Collection Cards.
- `selectionBar` adds actions for selected assets or collections.

It includes the routes and UI for the Asset Details panel. The sample Card and Selection Bar actions open dialogs to demonstrate one possible implementation, but extensions are not required to open a dialog. This guide focuses on a single Asset Details panel to keep the example concise.

Because it uses the unified extension point, the same extension can customize one or more of these surfaces by declaring the corresponding namespaces in the same `register()` call. You can keep only the namespaces and routes required by your extension.

More information about AEM Assets Content Hub extension points can be found at [AEM Assets Content Hub Extension Points](../api/index.md).

## Create a project in Adobe Developer Console

UI Extensions, as with any App Builder application, are represented as projects in [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/).

<InlineAlert slots="text" />

If you don't have access to the Adobe Developer Console, refer to the [How to Get Access](https://developer.adobe.com/uix/docs/guides/get-access/) guide for instructions.

To begin, we need to create a new Project which will supply us with the configuration and resources.

1. Sign in to [Adobe Developer Console](https://developer.adobe.com/console) with your Adobe ID.

  ![Sign in to Adobe Developer Console](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1d7eb2297452d49b84136afb7d8a070a6d6ed54c3.png?width=750&format=png&optimize=medium)

2. Choose your account.

  ![Choose your account](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1e40d86d65a94310ce6b91dda03e4d556bad1f9aa.png?width=750&format=png&optimize=medium)

3. Choose your profile or organization.

  ![Choose your profile](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1aefe4eddf50149740a7cf7e68b697f368ee1df4e.png?width=750&format=png&optimize=medium)

4. Make sure you are in a proper organization (a switcher is in the right top corner).

  ![Check organization](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1d76d4e7ade35b61f23a87afba673261a66787906.png?width=750&format=png&optimize=medium)

5. Click "Create new project" -> "Project from template":

  ![Create project from template](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1b86c6056f4716428553c28e8636f8d564532134a.png?width=750&format=png&optimize=medium)

  And choose "App Builder":

  ![Choose "App Builder"](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_117ec87f78fce7538dbb8f85381017d70c59f4fb9.png?width=750&format=png&optimize=medium)

6. Fill in the project data.

  ![Fill the project data](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_1fed75103fc1c7b180b8eb4861e276b05e095b616.png?width=750&format=png&optimize=medium)

- `Project Title` is used to identify your project within [Adobe Developer Console](https://developer.adobe.com/console) and in [CLI](https://github.com/adobe/aio-cli).
- `App Name` will be used as a unique identifier for your application and this value cannot be changed after project creating.

After creating, you should see a new project generated with 2 default Workspaces. Each App Builder project has two default workspaces: `Production` and `Stage`. You can add more workspaces as needed. The `Production` workspace is special, as it is used for the submission and distribution flow.

![A new project with 2 default Workspaces](https://developer.adobe.com/uix/docs/services/aem-assets-view/extension-development/media_18da401dc2bba6e24721d6d63eb4eeb3934970ad5.png?width=750&format=png&optimize=medium)

## Setting up local environment

- [Node.js](https://nodejs.org/) + [npm (package manager)](https://docs.npmjs.com/). Make sure you are using the latest stable version of `Node.js` and `npm`.

```shell
$ node -v
 v20.9.0
```

```shell
$ npm -v
10.1.0
```

These are the current versions at the moment of creating the documentation. Make sure you are using the latest versions supported by Adobe I/O when you create the application.

If you already have [Adobe I/O CLI](https://github.com/adobe/aio-cli) on your local, please ensure you use the latest version of the library. You can check the version through:

```shell
aio -v
```

and compare it with

```shell
npm show @adobe/aio-cli
```

If your version is outdated, update your `Adobe I/O CLI` by running

```shell
npm install -g @adobe/aio-cli
```

More details are described in [Local environment set up](https://developer.adobe.com/uix/docs/guides/local-environment/).

## Initialize your extension using the AIO CLI and generate a base structure from the sample application

First, we need to sign in from CLI and bootstrap our project. Please complete all the steps described in [Code Generation for the AEM Assets Content Hub Extension](../code-generation/index.md).

Also, we will not add an Adobe I/O action to our extension.

After generating the project, return to this guide for an overview of the generated components and instructions for testing the extension in Content Hub.

If you have worked with an Adobe App Builder App before, you will notice that you have generated a starter project of a UI Extension that implements [extension points](https://developer.adobe.com/app-builder/docs/guides/extensions/).

```text
.
|-- README.md
|-- app.config.yaml
|-- extension-manifest.json
|-- hooks
|   `-- post-deploy.js
|-- jest.setup.js
|-- package-lock.json
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

```yaml
# app.config.yaml
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

## Overview of generated components

### Routing

The root component `src/aem-assets-contenthub-1/web-src/src/components/App.js` contains the routing for the application. It defines the following routes:

- the first two are the default routes which trigger the `ExtensionRegistration` component responsible for initial extension registration within the AEM Assets Content Hub application.
- the `asset-details-extension-tab` route which invokes the `PanelAssetDetailsExtensionTab` component responsible for rendering the custom panel content. This route gets called by the AEM Assets Content Hub application when the user clicks the custom panel icon. During the registration the extension will specify `/#asset-details-extension-tab` as content location.
- the `card-action-modal` route which invokes the `CardActionModal` component used by the sample Card action. This route gets called when the sample action opens its dialog. During the registration the extension will specify `/#card-action-modal` as content location.
- the `selection-bar-modal` route which invokes the `SelectionBarModal` component used by the sample Selection Bar action. This route gets called when the sample action opens its dialog. During the registration the extension will specify `/#selection-bar-modal` as content location.

[React Router](https://reactrouter.com/start/declarative/routing) determines which part of the extension should be executed depending on the request.

```js
import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ExtensionRegistration from './ExtensionRegistration';
import PanelAssetDetailsExtensionTab from './PanelAssetDetailsExtensionTab';
import CardActionModal from './CardActionModal';
import SelectionBarModal from './SelectionBarModal';

function App() {
  return (
    <Router>
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
        <Routes>
          <Route index element={<ExtensionRegistration />} />
          <Route exact path="index.html" element={<ExtensionRegistration />} />
          <Route path="asset-details-extension-tab" element={<PanelAssetDetailsExtensionTab />} />
          <Route path="card-action-modal" element={<CardActionModal />} />
          <Route path="selection-bar-modal" element={<SelectionBarModal />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );

  function onError(e, componentStack) {}

  function fallbackComponent({ componentStack, error }) {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Extension rendering error
        </h1>
        <pre>{componentStack + '\n' + error.message}</pre>
      </React.Fragment>
    );
  }
}

export default App;
```

Please note that your code may slightly differ from the given example depending on the version of the template for generation, but the main logic will be the same.

Keep only the routes required by your extension.

### Extension registration

This logic component `src/aem-assets-contenthub-1/web-src/src/components/ExtensionRegistration.js` registers our extension with Content Hub as soon as it loads, so they can share data and communicate with each other.

```js
import React from 'react';
import { Text } from '@adobe/react-spectrum';
import { register } from '@adobe/uix-guest';
import { extensionId } from './Constants';

const allowedRepos = ['delivery-p12345-e167890.adobeaemcloud.com'];

function getRepo() {
  const search = new URLSearchParams(window.location.search);
  return search.get('repo');
}

function shouldSkipRegistration(repo) {
  return !allowedRepos.includes(repo);
}

function ExtensionRegistration() {
  const repo = getRepo();

  if (shouldSkipRegistration(repo)) {
    return <Text>Skipped registration because the repository is not allowed.</Text>;
  }

  const init = async () => {
    await register({
      id: extensionId,
      methods: {
        assetDetails: {
          getTabPanels() {
            return [
              {
                id: 'asset-details-extension-tab',
                tooltip: 'Asset Details Extension Tab',
                icon: 'Extension',
                title: 'Asset Details Extension Tab',
                contentUrl: '/#asset-details-extension-tab'
              }
            ];
          }
        }
      }
    });
  };

  init().catch(console.error);
  return <Text>IFrame for integration with Host (Content Hub)...</Text>;
}

export default ExtensionRegistration;
```

We use the [UIX SDK Guest library](https://github.com/adobe/uix-sdk) and call the `register()` function, which connects to the host application and declares methods the host can call on the extension.

The extension descriptor passed to the `register()` function in particular declares the [`getTabPanels()`](../api/asset-details/index.md#extension-api-reference) method, which in turn returns an array of custom panel descriptors upon a request from Content Hub.

In case of our extension, `getTabPanels()` returns a panel descriptor that defines the panel ID, tooltip, icon, title, and content location.

### Custom panel

The `src/aem-assets-contenthub-1/web-src/src/components/PanelAssetDetailsExtensionTab.js` component is responsible for rendering the custom panel content.

```js
import React, { useEffect, useState } from 'react';
import { attach } from '@adobe/uix-guest';
import {
  Button,
  ButtonGroup,
  Flex,
  Provider,
  Text,
  View,
  defaultTheme
} from '@adobe/react-spectrum';
import { extensionId } from './Constants';

export default function PanelAssetDetailsExtensionTab() {
  const [guestConnection, setGuestConnection] = useState();

  useEffect(() => {
    (async () => {
      const connection = await attach({ id: extensionId });
      setGuestConnection(connection);
    })();
  }, []);

  function displayToast() {
    guestConnection.host.toast.display({
      variant: 'neutral',
      message: 'Message from the Extension'
    });
  }

  return (
    <Provider theme={defaultTheme} height="100vh">
      <View backgroundColor="gray-50" padding="size-300">
        <Text>Custom Content Hub panel</Text>
        <Flex justifyContent="center" marginTop="size-400">
          <ButtonGroup>
            <Button variant="primary" onPress={displayToast}>Click me!</Button>
          </ButtonGroup>
        </Flex>
      </View>
    </Provider>
  );
}
```

The `PanelAssetDetailsExtensionTab` establishes a connection with AEM Assets Content Hub using the `attach()` function. The React Spectrum `Provider` applies the default theme to the panel content.

The `displayToast()` function displays a fixed toast message when the user clicks the button.

For more information about `register()`, `attach()`, and the common host APIs, see [Common Concepts in Creating Extensions](../api/commons/index.md).

## Test in local environment

From the extension project directory, run the following command:

```shell
aio app run
```

This will deploy the actions to Adobe I/O Runtime while running the UI part on the local machine.

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

Now your UI Extension is reachable via the URL displayed in the Terminal. You can test your UI Extension within Content Hub by adding the following URL parameters:

- ext (extension): `ext=https://localhost:9080`
- devMode (development mode): `devMode=true`
- repo (Content Hub delivery repository): `repo=delivery-pxxx-eyyy.adobeaemcloud.com`

**Sample AEM Assets Content Hub URL:** `https://experience.adobe.com/?devMode=true&ext=https://localhost:9080&repo=delivery-p12345-e167890.adobeaemcloud.com#/assets/contenthub/`

You may have to accept the self-signed certificate as described in the [Troubleshooting](../debug/index.md#accept-the-certificate) section.

## Run on Stage

After the development is completed, we can test our application on `Stage` before deploying to `Production`. For this we will use the `Stage` workspace in Adobe Developer Console.

First, make sure you are logged in to the proper organization and using the `Stage` workspace:

```shell
$ aio where

You are currently in:
1. Org: Alpha Org
2. Project: ContentHubExtension
3. Workspace: Stage
```

After that, we build and deploy the frontend files and assets:

```shell
aio app deploy
  ✔ Building web assets for 'aem/assets/contenthub/1'
  ✔ Deploying web assets for 'aem/assets/contenthub/1'
To view your deployed application:
  -> https://123456-yournamespace-stage.adobeio-static.net/index.html
```

You can use the staging deployment URL (`https://123456-yournamespace-stage.adobeio-static.net/index.html` in this example) to test the extension with Content Hub by passing this URL to the `ext=` URL parameter.

```text
https://experience.adobe.com/?devMode=true&ext=https://123456-yournamespace-stage.adobeio-static.net/index.html&repo=delivery-p12345-e167890.adobeaemcloud.com#/assets/contenthub/
```

To learn more about deployment, refer to the [Deployment Overview](https://developer.adobe.com/app-builder/docs/guides/deployment/).

## Deploy on Production and create approval request

After the application has been completed, tested locally, and on `Stage`: we are ready to deploy it to `Production`. Refer to the [UI Extensions Development Flow](https://developer.adobe.com/uix/docs/guides/development-flow/#deploy-on-production) to learn how to do this.

Also in this document you can find the whole development flow of a UI Extensions.

## Additional resources

- [AEM Assets Content Hub Extension Points](../api/index.md)
- [Code Generation](../code-generation/index.md)
- [UI Extensions Development Flow](../../../guides/development-flow/index.md)
- [Troubleshooting](../debug/index.md)
- [FAQ](../../../getting-started/faq/index.md)