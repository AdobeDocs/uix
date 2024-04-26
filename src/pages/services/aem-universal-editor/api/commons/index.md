---
title: Universal Editor Extensibility
description: Learn how to customize Universal Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

Understand the fundamentals required to develop an extension for the Universal Editor.

## Extension Point

Universal editor has an `universal-editor/ui/1` [extension point](https://developer.adobe.com/app-builder/docs/guides/extensions/) that allows you to extend its functionality.
To declare it to be used by your extension, you need to add the following configuration to your `app.config.yaml` at the
root of your extension:

```yaml
extensions:
  universal-editor/ui/1:
    $include: src/universal-editor-ui-1/ext.config.yaml
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
## Building Extension UI


In cases where a UI Extension manages data or sends data to a remote service, the register method is the only one expected to be called. If the UI Extension includes its own interface, it should be presented on a separate page. If this interface needs data from the Universal Editor or needs to trigger any logic, it should establish a connection using the attach method.

```js
import { attach } from "@adobe/uix-guest";

const guestConnection = await attach({ id: "extension-id" });
const state = await connection.host.editorState.get();
const token = await connection.sharedContext.get("token");
const model = await connection.host.field.getModel();
```

## Set up communication with Universal Editor

Both `register` and `attach` function of `@adobe/uix-guest` returns same connection object that has `host` property and
expose API of Universal Editor exposed for UI Extensions. Through this api you can access data from the universal editor as well as send data to it.

Check [this section](../data) to learn about common concepts on how to achive this 
