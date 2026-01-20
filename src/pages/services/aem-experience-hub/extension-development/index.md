---
title: Step-by-step Extension Development
description: Discover how to implement your first extension
contributors:
  - AdobeDocs/uix
---

# Step-by-step AEM Experience Hub Extension Development

The document helps you understand how to set up local environment and start developing your first UI Extension.

## About application

This example application will use the [dashboard widget extension point](../api/dashboard). It will render
a custom widget in the Experience Hub dashboard.

More information about AEM Experience Hub extension points can be found at [Experience Hub Extension Points](../api).

## Create a project in Adobe Developer Console

UI Extensions, as with any App Builder application, are represented as projects in [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/).

<InlineAlert slots="text" />

If you don't have access to the Adobe Developer Console, refer to the [How to Get Access](../../../guides/get-access) guide for instructions.

To begin, we need to create a new Project which will supply us with the configuration and resources.

1. Sign in to [Adobe Developer Console](https://developer.adobe.com/console) with your Adobe ID.

![Sign in to Adobe Developer Console](../../../guides/creating-project-in-dev-console/create-project-1.png)

2. Choose your account.

![Choose your account](../../../guides/creating-project-in-dev-console/create-project-2.png)

3. Choose your profile or organization.

![Choose your profile](../../../guides/creating-project-in-dev-console/create-project-3.png)

3. Make sure you are in a proper organization (a switcher is in the right top corner).

![Check organization](../../../guides/creating-project-in-dev-console/create-project-4.png)

4. Click "Create new project" -> "Project from template":

![Create project from template](../../../guides/creating-project-in-dev-console/create-project-5.png)

And choose "App Builder":

![Choose "App Builder"](../../../guides/creating-project-in-dev-console/create-project-6.png)

5. Fill in the project data.

![Fill the project data](../../../guides/creating-project-in-dev-console/create-project-7.png)

- `Project Title` is used to identify your project within [Adobe Developer Console](https://developer.adobe.com/console) and in [CLI](https://github.com/adobe/aio-cli).
- `App Name` will be used as a unique identifier for your application and this value cannot be changed after project creating.

After creating, you should see a new project generated with 2 default Workspaces.
Each App Builder project has two default workspaces: `Production` and `Stage`. You can add more workspaces as needed.
The `Production` workspace is special, as it is used for the submission and distribution flow.

![A new project with 2 default Workspaces](../../../guides/creating-project-in-dev-console/create-project-8.png)

## Setting up local environment

- [Node.js](https://nodejs.org/) + [npm (package manager)](https://www.npmjs.com/). Make sure you are using the latest stable version of `Node.js` and `npm`.

```shell
$ node -v
 v20.9.0
```

```shell
$ npm -v
10.1.0
```

These are the current versions at the moment of creating the documentation.
Make sure you are using the latest versions supported by Adobe I/O when you create the application.

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

More details are described in [Local environment set up](../../../guides/local-environment).

## Initialize your extension using the AIO CLI and generate a base structure from the template

First, we need to [sign in from CLI](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#3-signing-in-from-cli).

The next step is to bootstrap our extension by using the [Experience Hub dashboard widget template](https://github.com/adobe/aem-experience-hub-ext-tpl): `@adobe/aem-experience-hub-ext-tpl`.

Create a directory and run the following command from that directory:
```shell
aio app init --template=@adobe/aem-experience-hub-ext-tpl
```

1. Select the appropriate organization.

    ```shell
    ➜  demo-extension-project % aio app init --template=@adobe/aem-experience-hub-ext-tpl
    ? Select Org:
    ❯ Alpha Org
      Beta Org 
      Delta Org
    ```

2. Then, select your project from within that organization.

    You can either select the project by scrolling or you can filter the list of projects by beginning to type the name of the project.

    ```shell
    ➜  demo-extension-project % aio app init --template=@adobe/aem-experience-hub-ext-tpl
    ? Select Org: Alpha Org
    ? Select a Project, or press + to create new:
      great-project
    ❯ useful-project
      awesome-project
    ```

3. Answer the prompts related to extension metadata, such as the extension name.

    The name will also be used for the placeholders across the generated template.

    ```shell
    ➜  demo-extension-project % aio app init --template=@adobe/aem-experience-hub-ext-tpl
    ? Select Org: Alpha Org
    ? Select a Project, or press + to create new: useful-project
    ? Project name: (demo-extension-project)
    ```

After those steps, we will have a generated project structure with necessary npm dependencies installed.

```
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
    `-- aem-launchpad-1
        |-- ext.config.yaml
        `-- web-src
            |-- index.html
            `-- src
                |-- components
                |   |-- App.js
                |   |-- Constants.js
                |   |-- ExtensionRegistration.js
                |   `-- Hello.js
                |-- index.css
                |-- index.js
                `-- utils.js
```

```yaml
# app.config.yaml
extensions:
  aem/launchpad/1:
    $include: src/aem-launchpad-1/ext.config.yaml
```

If necessary, you can find other bootstrap options in [Bootstrapping new App using the CLI](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#4-bootstrapping-new-app-using-the-cli).

## Overview of generated components

### Routing

The root component `src/aem-launchpad-1/web-src/src/components/App.js` contains the routing of our application. It defines three routes:
- the first two are the default routes which trigger the `ExtensionRegistration` component responsible for initial extension registration within the Experience Hubapplication.
- the route which invokes the `DashboardWidget` component responsible for rendering the custom dashboard widget.

[React Routing](https://reactrouter.com/web/guides/quick-start) determines which part of the extension should be executed depending on the request.

```js
import React from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import ErrorBoundary from 'react-error-boundary';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ExtensionRegistration from './ExtensionRegistration';
import DashboardWidget from './DashboardWidget';

function App() {
  return (
    <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
      <Router>
        <Provider theme={defaultTheme} colorScheme={'light'} UNSAFE_style={{ background: 'white' }}>
          <Routes>
            <Route index element={<ExtensionRegistration />} />
              <Route
                exact path="index.html"
                element={<ExtensionRegistration />}
              />
              <Route
                exact path="demo-extension-project"
                element={<DashboardWidget />}
              />
          </Routes>
        </Provider>
      </Router>
    </ErrorBoundary>
  );

  // Methods

  // error handler on UI rendering failure
  function onError(e, componentStack) {}

  // component to show if UI fails rendering
  function fallbackComponent ({ componentStack, error }) {
    ...
  }
}

export default App;
```

Please note that your code may slightly differ from the given example depending on the version of the template for generation, but the main logic will be the same.

### Extension registration

This logic component `src/aem-launchpad-1/web-src/src/components/ExtensionRegistration.js` registers our extension with the host AEM instance as soon as it loads, so they can share data and communicate with each other.

```js
import { Text } from "@adobe/react-spectrum";
import { register } from "@adobe/uix-guest";
import metadata from '../../../../app-metadata.json';
import { extensionId } from "./Constants";

function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      metadata,
      methods: {
        dashboard: {
          getWidget() {
            return {
                id: extensionId,
                title: 'demo-extension-project',
                description: 'This is demo-extension-project',
                url: '/index.html#/demo-extension-project',
                widgetSize: {
                  defaultWidth: 6,
                  defaultHeight: 6
                },
                hideWidgetHeader: false
              };
          },
        },
      },
    });
  };
  init().catch(console.error);

  return <Text>IFrame for integration with Host (AEM)...</Text>
}

export default ExtensionRegistration;
```

We use the [UIX SDK Guest library](https://github.com/adobe/uix-sdk) and call the `register()` function, which connects to the host application
and declares methods the host can call on the extension. 

The extension descriptor passed to the `register()` function declares the [`getWidget()`](../api/dashboard/#extension-api-reference) method, which in turns returns the configuration of the widget.

### Dashboard widget

The `src/aem-launchpad-1/web-src/src/components/DashboardWidget.js` component is responsible for rendering the custom dashboard widget.

```js
import { Text } from "@adobe/react-spectrum";

export default function HelloWorld() {
  return (
    <Text>Hello, demo-extension-project</Text>
  );
}
```

## Test in local environment

From the extension project directory, run the following command:

```shell
aio app run
```

This will deploy the actions to Adobe I/O Runtime while running the UI part on the local machine.

```shell
➜  demo-extension-project % aio app run
App metadata generated successfully

To view your local application:
  -> https://localhost:9080
To view your deployed application in the Experience Cloud shell:
  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://localhost:9080
press CTRL+C to terminate dev environment

```

Now your UI extension is reachable via the URL displayed URL in the Terminal. You can test the `DashboardWidget` component by following the configured route, in our case: `https://localhost:9080/index.html#/demo-extension-project`.

## Run on Stage

After the development is completed, we can test our application on `Stage` before deploying to `Production`. For this we will use the `Stage` workspace in the Adobe Developer Console.

First, make sure you are logged in proper organization, and use `Stage` works:

```shell
$ aio where

You are currently in:
1. Org: Alpha Org
2. Project: AssetInfoExtension
3. Workspace: Stage
```

After that, we build and deploy the frontend files/assets:

```shell
aio app deploy
✔ Built 2 action(s) for 'aem/launchpad/1'
✔ Building web assets for 'aem/launchpad/1'
ℹ No actions deployed for 'aem/launchpad/1'
✔ Deploying web assets for 'aem/launchpad/1'
✔ All static assets for the App Builder application in workspace: aem/launchpad/1 were successfully deployed to the CDN. Files deployed :
  • 1 HTML page(s)
  • 1 Javascript file(s)
  • 2 .map file(s)
  • 1 CSS file(s)

To view your deployed application:
  -> https://245264-yournamespace-stage.adobeio-static.net/index.html
To view your deployed application in the Experience Cloud shell:
  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://245264-yournamespace-stage.adobeio-static.net/index.html
For a developer preview of your UI extension in the AEM environment, follow the URL:
  -> https://experience.adobe.com/aem/extension-manager/preview/<preview hash>
New Extension Point(s) in Workspace 'Stage': 'aem/launchpad/1'
Successful deployment 🏄
```

You can access `https://245264-yournamespace-stage.adobeio-static.net/index.html#/demo-extension-project` to view the exposed widget.

To learn more about deployment, please refer to [Deploying the Application](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#7-deploying-the-application)
and [Deployment Overview](https://developer.adobe.com/app-builder/docs/guides/deployment/).

## Deploy on Production

After the application has been completed, tested locally, and on `Stage`: we are ready to deploy it to `Production`.
Refer to the [UI Extensions Development Flow](../../../guides/development-flow#deploy-on-production) to learn how to do this.

## Additional resources

- [UI Extensions Development Flow](../../../guides/development-flow)
- [UI Extensions Management](../../../guides/publication)
- [FAQ](../../../getting-started/faq/)
