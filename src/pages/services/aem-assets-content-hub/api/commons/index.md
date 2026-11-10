---
title: Common Concepts in Creating Extensions
description: Understand the fundamentals required to develop an extension for AEM Assets Content Hub.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

Understand the fundamentals required to develop an extension for AEM Assets Content Hub.

## Extension Point

AEM Assets Content Hub has a unified `aem/assets/contenthub/1` extension point that allows you to customize Asset Details, Asset Cards, Collection Cards, and the Selection Bar from a single extension. To use it, add the following configuration to `app.config.yaml` at the root of your extension:

```yaml
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

Here is an example of the `ext.config.yaml` file:

```yaml
operations:
  view:
    - type: web
      impl: index.html
actions: actions
web: web-src
```

The [AEM Assets Content Hub sample application](https://github.com/adobe/aem-uix-examples/tree/main/aem-assets-contenthub-sample) contains a complete configuration and application structure.

## Extension Registration

Interaction between a UI Extension and AEM Assets Content Hub starts with the initialization process that includes the extension's capabilities registration so Content Hub knows when to invoke the extension and which APIs to expose. Registration is done by calling the `register()` function provided by the `@adobe/uix-guest` library. This asynchronous function takes a single object that describes the extension and returns an object representing the connection to Content Hub.

The `register()` function should be invoked after the extension initialization page is loaded.

Extension registration data must include:

- `id`: A string with a unique extension identifier. This identifier is useful for debugging the interaction between Content Hub and the extension and is required when the extension provides custom UI.
- `methods`: Objects containing the extension APIs exposed to Content Hub. All methods are grouped into **namespaces** that represent more granular areas of Content Hub functionality within the extension point.

The following namespaces are available under `aem/assets/contenthub/1`:

- `assetDetails`, which allows adding [custom panels](../asset-details/index.md) to Asset Details.
- `card`, which allows adding [Card Actions](../card-actions/index.md) to Asset Cards and Collection Cards. Content Hub identifies the area through the `assets` or `collections` context.
- `selectionBar`, which allows adding [Selection Bar actions](../selection-bar/index.md) for workflows that operate on selected assets.

Implement only the namespaces your extension needs. A single extension can combine all namespaces in one `register()` call:

```jsx
import {register} from '@adobe/uix-guest';

const guestConnection = await register({
  id: 'extension-id',
  methods: {
    assetDetails: {
      getTabPanels() {
        return [];
      }
    },
    card: {
      getActionButtons(actionContext) {
        return [];
      },
      onActionClick(resourceType, buttonId, resourceId, actionContext) {
        // Handle an Asset Card or Collection Card action.
      }
    },
    selectionBar: {
      getActionButtons(actionContext) {
        return [];
      },
      onActionClick(buttonId, assetIds) {
        // Handle an action for the selected assets.
      }
    }
  }
});
```

See [Asset Details](../asset-details/index.md), [Card Actions](../card-actions/index.md), and [Selection Bar](../selection-bar/index.md) for each namespace's methods and descriptors.

## Building Extension UI

Namespaces that render extension content require the extension to provide its own interface. For example, an Asset Details panel or a modal opened from a Card Action should be implemented as a separate route in the extension web application. Content Hub loads that route in an iframe.

The iframe page normally needs data from Content Hub or needs to trigger an action in the host application. Call `attach()` from `@adobe/uix-guest` inside the iframe route to establish communication with Content Hub:

```jsx
import {attach} from '@adobe/uix-guest';

const guestConnection = await attach({id: 'extension-id'});
const aemHost = await guestConnection.host.discovery.getAemHost();
```

The ID passed to `attach()` must match the ID used during extension registration.

## Set Up Communication with Content Hub

Both `register()` and `attach()` return a connection object. Its `host` property exposes Content Hub APIs to UI Extensions. Through these APIs, an extension can access host information and invoke actions in Content Hub.

## Common APIs exposed by AEM Assets Content Hub to all UI Extensions

The APIs documented below are available to all AEM Assets Content Hub UI Extensions, irrespective of the extension point they are using.

Every API is defined under its own namespace, which in turn is contained within the `host` object of the connection instance.

All API invocations are asynchronous and return a `Promise`.

### Authentication API

This API provides information about the current Org, access token, and API key in AEM Assets Content Hub. The API uses the `auth` namespace.

#### `auth.getIMSInfo()`

**Description:** returns information about the IMS Org name, ID, and access token.

**Return Object Structure**

- `imsOrg` (`string`): The IMS organization identifier.
- `imsOrgName` (`string`): The name of the IMS organization.
- `accessToken` (`string`): The access token for IMS.

#### `auth.getApiKey()`

**Description:** returns the API key used by AEM Assets Content Hub.

**Returns** (`string`): API key

**Example:**

```js
const {imsOrg, accessToken} = await guestConnection.host.auth.getIMSInfo();

const apiKey = await guestConnection.host.auth.getApiKey();
```

### Discovery API

This API provides information about the AEM Assets Content Hub delivery repository location.

#### `discovery.getAemHost()`

**Description:** returns the URL of the AEM delivery repository.

**Returns** (`string`): AEM delivery repository URL

**Example:**

```js
const aemHost = await guestConnection.host.discovery.getAemHost();
```

### Toast API

This API provides methods to show toast messages in AEM Assets Content Hub.

#### `toast.display({variant, message})`

**Description:** shows a toast message in AEM Assets Content Hub.

**Parameters:**

- **options** (`object`): Object with the following properties:
  - `variant` (`string`, optional): The type of toast message. Possible values are `neutral`, `positive`, `info`, and `negative`. The default value is `info`.
  - `message` (`string`, required): The message to display in the toast.

**Example:**

```js
guestConnection.host.toast.display({variant: 'positive', message: 'Asset saved successfully'});
```

### i18n API

This API provides methods to support localization of the UI Extension.

#### `i18n.getLocalizationInfo()`

**Description:** returns information about the current locale used in AEM Assets Content Hub.

**Return Object Structure**

- `locale` (`string`): The current locale used in AEM Assets Content Hub.

**Example:**

```js
const {locale} = await guestConnection.host.i18n.getLocalizationInfo();
```

### Modal API

This API provides methods to open a modal dialog in the host application, close it, and retrieve its associated payload.

#### `modal.openDialog(options)`

**Description:** opens a dialog using the provided configuration. The dialog content is loaded from a specified URL.

**Parameters:**

- **options** (`object`): Object with the following dialog configuration properties:
  - `title` (`string`, optional): The title of the dialog.
  - `contentUrl` (`string`): Relative route to the dialog content.
  - `type` (`string`, optional): The dialog type. Possible values are `modal` and `fullscreen`. The default value is `modal`.
  - `size` (`string`, optional): The dialog size. Possible values are `S`, `M`, and `L`. The default value is `M`. This value is ignored when the dialog type is `fullscreen`.
  - `payload` (`any`, optional): Arbitrary data the extension passes to the dialog. The dialog can retrieve this data using `modal.getPayload()`.

**Example:**

The extension application defines a route that renders the custom dialog content. The component for that route calls `attach()` from `@adobe/uix-guest` to establish a connection with AEM Assets Content Hub:

```jsx
import React, {useEffect, useState} from 'react';
import {attach} from '@adobe/uix-guest';

export default function ModalCustomAction() {
  const [guestConnection, setGuestConnection] = useState();

  useEffect(() => {
    (async () => {
      const connection = await attach({id: 'extension-id'});
      setGuestConnection(connection);
    })();
  }, []);

  function closeDialog() {
    guestConnection.host.modal.closeDialog();
  }

  return <button onClick={closeDialog}>Close</button>;
}
```

The custom dialog can be opened in AEM Assets Content Hub using `modal.openDialog()` with the dialog content URL, title, type, size, and an optional payload object. The dialog component can retrieve the payload using `modal.getPayload()`:

```js
guestConnection.host.modal.openDialog({
  title: 'Custom Dialog',
  contentUrl: '/#modal-custom-action',
  type: 'modal',
  size: 'S',
  payload: {assetId: 'urn:aaid:aem:example'}
});
```

#### `modal.closeDialog()`

**Description:** closes the currently active dialog.

**Example:**

```js
guestConnection.host.modal.closeDialog();
```

#### `modal.getPayload()`

**Description:** returns the payload object passed by the extension when calling `modal.openDialog()`.

**Returns** an optional arbitrary payload object.

**Example:**

```js
const payload = await guestConnection.host.modal.getPayload();
// Work with the payload.
```

## Asset Details API

In addition to the common APIs, the `assetDetails` namespace exposes `assetDetails.getCurrentAsset()` to extension content loaded in Asset Details. See [Asset Details](../asset-details/index.md) for details.

## Repository Targeting

An extension can limit registration to approved Content Hub repositories. Read the `repo` query parameter from the initialization URL and compare it with the repositories configured for the extension:

```js
const params = new URLSearchParams(window.location.search);
const repo = params.get('repo');

if (allowedRepos.includes(repo)) {
  await registerExtension();
}
```

See the [sample registration component](https://github.com/adobe/aem-uix-examples/blob/main/aem-assets-contenthub-sample/src/aem-assets-contenthub-1/web-src/src/components/ExtensionRegistration.js) for a complete implementation.