---
title: Universal Editor Extensibility
description: Learn how to customize Universal Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

Learn about common approaches and methods that can be used in any extension for the universal editor.

## Extension Registration

Interaction between UI Extension and Universal Editor starts with the initialization process that includes extension's
capabilities registration so Universal Editor knows when to invoke the extension. Registration is done by `register` 
method provided by `@adobe/uix-guest` library. This asynchronous method takes single object that describes extension 
and returns object representing connection to the Universal Editor.

Method `register` should be invoked after extension initialization page is loaded.

Extension registration data must include:

- `id` - string with random extension identifier. This identifier useful for debugging of interaction between Universal
Editor and extension and needed if extension provides custom UI.
- `methods` - objects with extension code exposed to the Universal Editor console. All methods are grouped into 
namespaces that represents extension points provided by the Universal Editor.
Currently, the following **namespaces** are available:
- _headerMenu_, that allows to add buttons to the header of the Universal Editor;
- _rightPanel_, that allows to add custom content under the rails to the right panel of the Universal Editor;
- _canvas_, that allows to add custom renderer for data types

```js
import { register } from "@adobe/uix-guest";

// ...

      const guestConnection = await register({
        id: "extension-id",
        methods: {
          headerMenu: {
            getButtons() {
              // ..
            }
          },
          rightPanel: {
            getPanels() {
              // ..
            }
          },
          canvas: {
            getRenderers() {
              // ..
            }
          }
        }
      });
// ...
```
## Extension UI

For use-cases when UI Extension provides any data handling or send data to remote service `register` is the only method 
that is expected to be invoked. If UI Extension implements own UI it should be provided as separate page. 
If this UI requires data from Universal Editor or need to invoke any logic it should establish connection with `attach`
method.

```js
import { attach } from "@adobe/uix-guest";

const guestConnection = await attach({ id: "extension-id" });
```

## Connection Object

Both `register` and `attach` function of `@adobe/uix-guest` returns same connection object that has `host` property and
expose API of Universal Editor exposed for UI Extensions.


### Shared Context

The shared context is a dataset that Universal Editor shares with UI Extensions. It's used to understand the context of
the user who is running Universal Editor. You can access the shared context through the `sharedContext` property of the 
connection object.

```js
import { attach } from "@adobe/uix-guest";

  useEffect(() => {
    (async () => {
      const guestConnection = await attach({ id: extensionId });

      setGuestConnection(guestConnection);
    })();
  }, []);
  
 ...
 
const context = guestConnection.sharedContext;
const hostAppLocale = context.get("locale");
```

Available data in the shared context:

| Key    | Type     | Description                                                                                                                                                                                                                        |
|--------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| locale | `string` | Locale string for globalization of current user                                                                                                                                                                                    |
| theme  | `string`  | Available [options](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/aem-cloud-service-on-unified-shell#changing-to-dark-theme): "light" or "dark". The theme selected by current user |
| orgId  | `string`  | IMS org ID                                                                                                                                                                                                                         |
| token | `string` | User token                                                                                                                                                                                                                         |
| authScheme | `string` | Auth schema that should be used during communication with host application                                                                                                                                                         |


### Editor State

The editor state is a dataset that Universal Editor shares with UI Extensions. It's used to understand the current state
of the editor. You can access the editor state through the `editorState` property of the host object.

Below is an example of how you can access editor state properties, e.g., connections.

```js
import { attach } from "@adobe/uix-guest";

...

  useEffect(() => {
    (async () => {
      const guestConnection = await attach({ id: extensionId });

      setGuestConnection(guestConnection);
    })();
  }, []);
 ...

const editorState = await guestConnection.host.editorState.get();
const {connections} = editorState;

...
    
```
Available data in the editor state:

| Key | Type                      | Sample                                                                | Description |
|-----|---------------------------|-----------------------------------------------------------------------|-------------|
| connections | `obj`                     | { "aemconnection": "aem:%auth_instance_url%" }                        | [Connections](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/getting-started#connections) which are used in the app are stored as `<meta>` tags in the page’s `<head>`.  |
| selected | `obj<string, boolean>`    | {fcb38012-c4c7-51a8-896c-79e76kjk: true}                              | Element that is currently edited. |
| editables | `[objects]`               | Array[{id: '33661..", type: 'reference', resource: "urn:..., ..}, {}] | List of elements that might be edited. The editable element object includes [proper metadata](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/attributes-types). |
| location | `string`                  | "%locationString%"                                                    | The current page location | 
| customTokens | `obj<string, string>`     | {"aemconnection":""}                                                  | Custom tokens available for connections |

### Working with Events

The Universal Editor offers a list of events that extensions can subscribe to in order to respond to changes in content or the user interface.
Refer to this [document](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/events) for the available event list.

For instance, here's an example of how to subscribe to the "aue:ui-select" event:

```js

    useEffect(() => {
        (async () => {
            const guestConnection = await attach({id: extensionId});
            ...
            await guestConnection.host.remoteApp.addEventListener('aue:ui-select', console.log('event recieved!'));
            ...
        })();
    }, []);
```

If your business logic requires sending an event to the Universal Editor, you can use the `dispatchEvent` method.
Here's an example of how to dispatch the "aue:ui-select" event:

```js
    useEffect(() => {
        (async () => {
            const guestConnection = await attach({id: extensionId});
            ...
            await guestConnection.host.remoteApp.dispatchEvent('aue:ui-select', {data: 'some data'});
            ...
        })();
    }, []);
```
