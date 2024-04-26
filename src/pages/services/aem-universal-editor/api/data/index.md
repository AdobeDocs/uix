---
title: Data exchange - Universal Editor Extensibility
description: Learn how to exchange data between Universal Editor and your extension
contributors:
  - https://github.com/AdobeDocs/uix
---

# Learn how to exchange data between Universal Editor and your extension

As we develop extensions for the Universal Editor, it's essential to facilitate data exchange between the editor and the extension. There are two main categories of data involved:
- User-specific information, like IMS organization.
- Editor-specific information, such as the current editor location.

Below you can find the details on how to access these data categories.

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