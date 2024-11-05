---
title: AEM Assets View Extensibility
description: Learn how to customize AEM Assets View
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

Understand the fundamentals required to develop an extension for the AEM Assets View.

## Extension Point

AEM Assets View has an `aem/assets/details/1` [extension point](https://developer.adobe.com/app-builder/docs/guides/extensions/) 
that allows you to extend its functionality in the Details View.
To declare it to be used by your extension, you need to add the following configuration to your `app.config.yaml` at the
root of your extension:

```yaml
extensions:
  aem/assets/details/1:
    $include: src/aem-assets-details-1/ext.config.yaml
```
Here is an example of `ext.config.yaml` file:

```yaml
operations:
  view:
    - type: web
      impl: index.html
actions: actions
web: web-src
```

More **extension points** may be added in future releases to add extensibility features to other parts of the AEM Assets View.

## Extension Registration

Interaction between UI Extension and AEM Assets View starts with the initialization process that includes extension's
capabilities registration so AEM Assets View knows when to invoke the extension and which APIs to expose. Registration is done by calling the `register()` 
function provided by `@adobe/uix-guest` library. This asynchronous function takes single object that describes extension 
and returns an object representing connection to the AEM Assets View.

The `register()` function should be invoked after extension initialization page is loaded.

Extension registration data must include:

- `id` - string with random extension identifier. This identifier is useful for debugging of interaction between AEM Assets 
View and extension and is needed if extension provides custom UI.
- `methods` - objects with the extension APIs exposed to the AEM Assets View. All methods are grouped into 
**namespaces** that represent more granular areas of AEM Assets View functionality within the extension point.
Currently, only the following **namespace** is available:
  - `detailSidePanel`, that allows to add custom side panels in the Details View

More **namespaces** may be added in future releases to add more extensibility features within the Details View.

```js
import { register } from "@adobe/uix-guest";

// ...

      const guestConnection = await register({
        id: "extension-id",
        methods: {
          detailSidePanel: {
            getPanels() {
              // ..
            }
          },
        }
      });
// ...
```
## Building Extension UI

The `aem/assets/details/1` extension point and its `detailSidePanel` **namespace** requires UI extension to provide 
its own interface for the custom side panel. This interface should be implemented as a separate entry point within the extension
web application.

Normally this interface needs data from the AEM Assets View or needs to trigger certain action within the host application. 
To support this the interface page should establish its own connection with AEM Assets View  using the `attach()` function
provided by `@adobe/uix-guest` library.

In this example, the interface page establishes a connection with the AEM Assets View using extension `id` and obtains
the AEM host URL:

```js
import { attach } from "@adobe/uix-guest";

const guestConnection = await attach({ id: "extension-id" });
const aemHost = await guestConnection.discovery.getAemHost();
```

## Set up communication with AEM Assets View

Both `register()` and `attach()` functions of `@adobe/uix-guest` library return the same connection object that has `host` property and
exposes AEM Assets View API to UI Extensions. Through this API you can access data from the host application as well as 
invoke certain actions within it.

## Common APIs exposed by AEM Assets View to all UI Extensions

The APIs documented below are available to all AEM Assets View UI Extensions, irrespective of the extension point they are using.

Every API is defined under its own namespace, which in turn is contained within the `host` object of the connection instance.

All API invocations are asynchronous and return a `Promise`.

### Authentication API

This API provides information about the current Org, access token and API key in the AEM Assets View. 
The API uses `auth` namespace.

`auth.getIMSInfo()`

**Description:** returns information about IMS Org name, Id and access token.

**Return Object Structure**
- `imsOrg` (`string`): The IMS organization identifier.
- `imsOrgName` (`string`): The name of the IMS organization.
- `accessToken` (`string`): The access token for the IMS.

`auth.getApiKey()`

**Description:** returns API key used by the AEM Assets View.

**Returns** (`string`): API key 

**Example:**
```js
const { imsOrg, accessToken } = await guestConnection.host.auth.getIMSInfo();

const apiKey = await guestConnection.host.auth.getAPIKey();
```

### Discovery API

This API provides information AEM author instance location.

`discovery.getAemHost()`

**Description:** returns the URL of the AEM author instance.

**Returns** (`string`): AEM author instance URL

**Example:**
```js
const aemHost = await guestConnection.host.discovery.getAemHost();
```

### Toast API

This API provides methods to show toast messages in the AEM Assets View.

`toast.display({ variant, message })`

**Description:** shows a toast message in the AEM Assets View.

**Parameters:**
- **options** (`object`): Object with the following properties:
  - variant (`string`, optional): The type of toast message. Possible values are `neutral`, `positive`, `info`, `negative`. Default value is `info`.
  - message (`string`, required): The message to display in the toast.

**Example:**
```js
guestConnection.host.toast.display({ variant: "positive", message: "Asset saved successfully" });
```

### Router API

This API provides methods to navigate to different parts of the AEM Assets View.

`router.navigateToAssetDetails({ assetPath })`

**Description:** navigates to a Details View of the specific asset.

**Parameters:**
- **options** (`object`): Object with the following properties:
  - assetPath (`string`, required): The path to the asset in the AEM Assets View.

**Example:**
```js
guestConnection.host.router.navigateToAssetDetails({ assetPath: '/content/dam/my-assets/image.jpg' });
```
### i18n API

This API provides methods to support localization of the UI Extension.

`i18n.getLocalizationInfo()`

**Description:** returns information about the current locale used in the AEM Assets View.

**Return Object Structure**
- `locale` (`string`): The current locale used in the AEM Assets View.

**Example:**
```js
const { locale } = await guestConnection.host.i18n.getLocalizationInfo();
```