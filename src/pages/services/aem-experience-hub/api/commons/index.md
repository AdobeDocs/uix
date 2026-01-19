---
title: AEM Experience Hub Extensibility
description: Learn how to customize AEM Experience Hub
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

Understand the fundamentals required to develop an extension for AEM Experience Hub.

## Extension Point

Experience Hub has an `aem/launchpad/1` [extension point](https://developer.adobe.com/app-builder/docs/guides/extensions/) that allows you to extend its functionality.
To declare it to be used by your extension, you need to add the following configuration to your `app.config.yaml` at the
root of your extension:

```yaml
extensions:
  aem/launchpad/1:
    $include: src/aem/launchpad/1/ext.config.yaml
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

## Extension Registration

Interaction between UI Extension and Experience Hub starts with the initialization process that includes extension's
capabilities registration so Experience Hub knows when to invoke the extension. Registration is done by `register` 
method provided by `@adobe/uix-guest` library. This asynchronous method takes single object that describes extension 
and returns object representing connection to the Experience Hub.

Method `register` should be invoked after extension initialization page is loaded.

Extension registration data must include:

- `id` - string with random extension identifier. This identifier useful for debugging of interaction between Experience
Hub and extension and needed if extension provides custom UI.
- `methods` - objects with extension code exposed to the Experience Hub. All methods are grouped into 
namespaces that represents extension points provided by the Experience Hub.
Currently, the following **namespace** is available:
  - _dashboard_, that allows to add custom widgets and customize the dashboard layout

```js
import { register } from "@adobe/uix-guest";

// ...

      const guestConnection = await register({
        id: "extension-id",
        methods: {
          dashboard: {
            getWidget() {
              // ..
            }
          }
        }
      });
// ...
```
## Building Extension UI

In cases where a UI Extension manages data or sends data to a remote service, the register method is the only one expected to be called. If the UI Extension includes its own interface, it should be presented on a separate page. If this interface needs data from the Experience Hub or needs to trigger any logic, it should establish a connection using the attach method.

```js
import { attach } from "@adobe/uix-guest";

const connection = await attach({ id: "extension-id" });
const state = await connection.host.dashboardState.get();
const token = await connection.sharedContext.get("token");
const preferences = await connection.host.userPreferences.get();
```

## Set up communication with Experience Hub

Both `register` and `attach` function of `@adobe/uix-guest` returns same connection object that has `host` property and
expose API of Experience Hub exposed for UI Extensions. Through this api you can access data from the Experience Hub as well as send data to it.
