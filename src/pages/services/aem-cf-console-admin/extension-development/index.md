---
title: Step-by-step Extension Development
description: Discover how to implement your first extension
contributors:
  - dx-devex-acceleration/uix-docs
---

# Step-by-step AEM Content Fragments Console Extension Development

The document helps you understand how to set up local environment and start developing your first UI Extension.

## About application

This example application will use two extension points provided by the [Adobe Experience Manager (AEM)](https://experienceleague.adobe.com/docs/experience-manager.html).
We would like to add two buttons. The first button will be added the header menu:

![Header menu extension point](../api/header-menu.png)

The second one to a menu that displays when a content fragment is selected:
![Action bar extension point](../api/action-bar.png)

After clicking on buttons we would like to show some content in a pop-up:
![UI pop-up](introduction-1.png)

More information about [AEM](https://experienceleague.adobe.com/docs/experience-manager.html) extension points can be found at [AEM Content Fragments Console Extension Points](../../../services/aem-cf-console-admin/api).

## Create a project in Adobe Developer Console

UI Extensions, as any App Builder application, are represented as projects in [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/).

So at first we will need to create a new Project which will supply us with configuration and resources.

1. Sign in to [Adobe Developer Console](https://developer.adobe.com/console) with your Adobe ID.
![Sign in to Adobe Developer Console](create-project-1.png)

2. Choose your account.
![Choose your account](create-project-2.png)

3. Choose your profile or organization.
![Choose your profile](create-project-3.png)

3. Make sure you are in a proper organization (a switcher in the right top corner).
![Check organization](create-project-4.png)

4. Click "Create new project" -> "Project from template":
![Create project from template](create-project-5.png)
And choose "App Builder":
![Choose "App Builder"](create-project-6.png)

5. Fill the project data.
![Fill the project data](create-project-7.png)

- `Project Title` is used to identify your project within [Adobe Developer Console](https://developer.adobe.com/console) and in [CLI](https://github.com/adobe/aio-cli).
- `App Name` will be used as a unique identifier for your application and this value cannot be changed after project creating.

After creating, you should see a new project generated with 2 default Workspaces.
Each App Builder project has two default workspaces: `Production` and `Stage`. You can add more workspaces as needed.
The `Production` workspace is special, as it is used for the submission and distribution flow.
![A new project with 2 default Workspaces](create-project-8.png)

## Setting up local environment

- [Node.js](https://nodejs.org/) + [npm (package manager)](https://www.npmjs.com/). Make sure you are using the latest stable version of `Node.js` and `npm`.

```shell
$ node -v
 v16.15.1
```

```shell
$ npm -v
8.11.0
```

These are the current versions at the moment of creating the documentation.
Make sure you are using the latest versions supported by Adobe IO when you create the application.

- [Adobe I/O CLI](https://github.com/adobe/aio-cli). If you already have `Adobe I/O CLI` on your local, please ensure you use the latest version of the library.
You can check the version through:

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

## Initialize our application using the CLI and generate a base structure from template

Firstly, we need to [Signing in from CLI](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#3-signing-in-from-cli) and bootstrap our project.
Please complete all the steps described in [Initialize our Application using the CLI](../index.md#initialize-the-ui-extension-project-using-aio-cli).

After this step, we will have a generated project structure with necessary npm dependencies are getting installed.

If you have worked with an Adobe App Builder App before, you will notice that you have generated a starter project of a UI Extension that implements [extension points](https://developer.adobe.com/app-builder/docs/guides/extensions/).

![App initialization finished](implement-application-1.png)

```yaml
# app.config.yaml
extensions:
  aem-cf-console-admin-1:
    $include: src/aem-cf-console-admin-1/ext.config.yaml
```

If necessary, you can find other bootstrap options in [Bootstrapping new App using the CLI](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#4-bootstrapping-new-app-using-the-cli).

## Overview of generated components

### Routing

The root component `src/aem-cf-console-admin-1/web-src/src/components/App.js` contains the routing of our application. We always have this generated file.

Our extension is responsible for rendering several things:
- The logic of registering our extension (it's the second required part of the extension).
- Any partial UI components that may render inside the host app, for example as the content of a pop-up when a button is clicked (optional).

We will discuss these components in more detail in the points below.

[React Routing](https://reactrouter.com/web/guides/quick-start) determines which part of the extension should be executed depending on the request.

```js
import React from "react";
import ErrorBoundary from "react-error-boundary";
import LanguageCopiesModal from "./LanguageCopiesModal";
import ExtensionRegistration from "./ExtensionRegistration";
import TestContentModal from "./TestContentModal";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
        <Routes>
            <Route index element={<ExtensionRegistration />} />
            <Route
                exact
                path="index.html"
                element={<ExtensionRegistration />}
            />
            <Route
                exact
                path="content-fragment/:fragmentId/language-copies"
                element={<LanguageCopiesModal />}
            />
            <Route
                exact
                path="modal-test-content"
                element={<TestContentModal />}
            />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
...
}
```

> Please note that your code may slightly differ from the given example depending on the version of the template for generation, but the main logic will be the same.

If you need additional functionality, you can add new entry points and specify them in the routing after a generation.

### Extension registration

This logical component `src/aem-cf-console-admin-1/web-src/src/components/ExtensionRegistration.js` registers our extension with the host AEM instance as soon as it loads, so they can share data and communicate with each other.

```js
import React, { useEffect } from "react";
import { generatePath } from "react-router";
import { Text } from "@adobe/react-spectrum";
import { register } from "@adobe/uix-guest";

function ExtensionRegistration() {
  useEffect(() => {
    const init = async () => {
      const guestConnection = await register({
        id: "my.company.extension-with-action-bar-button",
        methods: {
          actionBar: {
            getButtons() {
              return [
                {
                   id: "my.company.manage-language-copies",
                   label: "Manage Language Copies",
                   icon: 'PublishCheck', // Spectrum workflow icon code from https://spectrum.adobe.com/page/icons/
                   onClick: (selections) => { // button's onClick callback
                       const url = "/index.html#" + generatePath("/content-fragment/:fragmentId/language-copies", {
                           fragmentId: encodeURIComponent(selections[0].id),
                       });

                       guestConnection.host.modal.showUrl({
                           title: 'Manage Language Copy: ' + selections[0].name,
                           url: url,
                       })
                   },
                },
              ];
            },
          },
          headerMenu: {...},
        }
      });
    }
    init().catch(console.error);
  }, []);
  return <Text>IFrame for integration with Host (AEM)...</Text>;
}
```

More details about [declaration API](../api/).

We use the [UIX SDK Guest library](https://github.com/adobe/uix-sdk) and call the `register` method, which connects to the host and declares methods the host can call. The `getButtons()` method describes the buttons which we want to add to the AEM admin panel.
In our extension we would like to add two buttons, We define the title of each button, its icon, and an `onClick` handler that will be run inside of the application.

In the action bar, the handler receives selected [`content fragments`](https://experienceleague.adobe.com/docs/experience-manager-64/assets/fragments/content-fragments.html) as the input parameter.

For displaying a popup, we use the `<GuestUIFrame />` component provided by [UIX SDK Guest library](https://github.com/adobe/uix-sdk).
We indicate that we want to display the modal and specify the url at which the content should be loaded.

Very similar declaration for the second button, but in a different namespace `headerMenu`.

This component was also generated, you can modify it if you need to change or add new logic.

### Pop-up content

In the previous step, we indicated that we want to load content for the popup by URL. That content is also part of our extension application.

These component is optional and will be generated if you chose "adding UI" during project generation.

```js
import { attach } from "@adobe/uix-guest";

function TestContentModal() {
  const [guestConnection, setGuestConnection] = useState();

  useEffect(() => {
      const init = async () => {
        const guestConnection = await attach({ id: "aem-headless-ui-ext-examples" });
        setGuestConnection(guestConnection);
      }
      init().catch(console.error);
  }, []);

  return (
    <Provider theme={defaultTheme} colorScheme={`light`}>
      <Content width="97%">
        <Text>Header button modal content</Text>
        <ButtonGroup align="end" width="100%">
          <Button variant="secondary"
                  onClick={onCancelHandler}
                  margin="size-175"
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Content>
    </Provider>
  );

  function onCancelHandler() {
    guestConnection.host.modal.close();
  }
}
```

We again use [UIX SDK Guest library](https://github.com/adobe/uix-sdk), but this time we call the `attach` method, instead of `register`.
The extension is already registered; we only need to connect to the host to interact with it.

The generated content will be displayed inside the popup.

Finally, we need to mention that all of this UI uses the [React](https://reactjs.org/) and [React Spectrum](https://react-spectrum.adobe.com/react-spectrum/) frameworks.

## Interaction between AEM host and application

Above we said that the AEM host and the application can interact with each other. Let's look at a couple of examples.

- Work with `sharedContext`.
This object is designed to share data from the host to the extension.
For example, the object contains the `IMS` data for authentication and the hostname of the AEM instance.
This means, we can make any requests to existing `AEM HTTP API` to obtain additional data what we need.

```js
const guestConnection = await attach({ id: "aem-headless-ui-ext-examples" });
const languageCopies = await getLanguageCopies(fragmentId, guest.sharedContext.get('auth'), guest.sharedContext.get('aemHost'));
```

- Work with `UI modal`.
UI modal is the **built-in part** of [UIX SDK Guest library](https://github.com/adobe/uix-sdk).
By calling the methods of this object, we can display or close the popup window.

```js
# during registration
const guestConnection = await register({
  id: "aem-headless-ui-ext-examples",
  methods: {
    headerMenu: {
      getButtons() {
          return [
              {
                  id: "my.company.export-button",
                  // ...
                  onClick() {
                      guestConnection.host.modal.showUrl({
                          title: 'Header button modal title',
                          url: "/index.html#/modal-test-content",
                      });
                  },
              },    
          ];        
      }, 
    },
  },
});
```

```js
# during rendering of popup content
const guestConnection = await attach({ id: "aem-headless-ui-ext-examples" });
guestConnection.host.modal.close();
```

Additional information can be found in [Connection Object section](../api/#connection-object).

## Additional logic

To add additional logic, you can modify current components or add new ones.

In our example, we have separated the UI logic and the logic of requests to the AEM instance.
We have encapsulated all the requests in [App Builder actions](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#5-anatomy-of-an-app-builder-application). 
That means that it could be reused by different views. Actions can also contain logic for making calls to any 3rd party system.

![Additional logic](additional-logic.png)

**This is optional.** You only need to implement it if your use case requires it.

## Test on local environment

From the project directory, begin by running the following command:

```shell
aio app run
```

This command will create an action in Adobe I/O Runtime. 
    
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

Now your UI extension is reachable by the displayed URL on the Terminal. You can test your UI extension within your AEM Content Fragment Consle by passing the following parameters to your AEM Content Fragment Console URL:
- repo (host name of AEM instance): `repo=author-p1234-e12345.adobeaemcloud.com`
- ext (extension): `ext=https://localhost:9080`
- devMode (development mode): `devMode=true`

**Sample AEM Content Fragment Console URL:** `https://experience.adobe.com/?devMode=true&ext=https://localhost:9080&repo=author-p1234-e12345.adobeaemcloud.com#/@sitesinternal/aem/cf/admin/`

#### Accepting the certificate (First time users)

If you are using this application for the first time, you will see a message similar to

```shell
success: generated certificate
A self signed development certificate has been generated, you will need to accept it in your browser in order to use it.
Waiting for the certificate to be accepted.... timed out
```

This message pops up because we use a development SSL certificate for secure communication. Understand more about the purpose of this certificate [here](https://letsencrypt.org/docs/certificates-for-localhost/).

If you see this message, please navigate to `https://localhost:9080`, you should see a screen similar to this.

![Certification](cert-1.png)

Click on `Advanced`, the nex screen may vary from browser to browser, but you should see a screen like this, where you can click on `Proceed to localhost (unsafe)` to accept the certificate.

![Certification](cert-2.png)

## Run on Stage

After the development is completed, we can test our application on `Stage` before deploying to `Production`.
For this we will use the `Stage workgroup`.

![Stage workgroup](run-on-stage-1.png)

Firstly, make sure you are logged in proper organization, and use `Stage` workgroup:

```shell
$ aio where

You are currently in:
1. Org: Sites Internal
2. Project: 562TurquoiseShrimp
3. Workspace: Stage
```

After that, we build and deploy declared actions and frontend files/assets:

```shell
aio app deploy

√ Built 3 action(s) for 'aem-cf-console-admin-1'
√ Building web assets for 'aem-cf-console-admin-1'
√ Deployed 3 action(s) for 'aem-cf-console-admin-1'
√ Deploying web assets for 'aem-cf-console-admin-1'
Your deployed actions:
web actions:
  -> https://245265-562turquoiseshrimp-stage.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/get-language-copies
  -> https://245265-562turquoiseshrimp-stage.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/quick-publish-language-copies
  -> https://245265-562turquoiseshrimp-stage.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/unpublish-language-copies
To view your deployed application:
  -> https://245265-562turquoiseshrimp-stage.adobeio-static.net/index.html
To view your deployed application in the Experience Cloud shell:
  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://245265-562turquoiseshrimp-stage.adobeio-static.net/index.html
New Extension Point(s) in Workspace 'Stage': 'aem-cf-console-admin-1'
Successful deployment 🏄
```

Now your application is reachable by URL, printed in Terminal.
You can use this URL for end-to-end testing.
 
We can use the `ext` parameter (how we did it during testing on a local machine) of your AEM instance to test and view the unpublished application.
![Testing on Stage](run-on-stage-2.png)

To learn more about deployment, please refer to [Deploying the Application](https://developer.adobe.com/app-builder/docs/getting_started/first_app/#7-deploying-the-application) 
and [Deployment Overview](https://developer.adobe.com/app-builder/docs/guides/deployment/).

## Deploy on Production and create approval request

After the application has been completed, tested locally and on `Stage`, we are ready to deploy it to `Production`.
Refer to the [UI Extensions Development Flow](../../../guides/development-flow#deploy-on-production) to learn how to do this.

Also in this document you can find the whole development flow of a UI Extensions.

### Additional resources

- [UI Extensions Development Flow](../../../guides/development-flow)
- [UI Extensions Management](../../../guides/publication)
- [Troubleshooting](../debug)
- [FAQ](../../../overview/faq)
