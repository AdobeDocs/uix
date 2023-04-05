---
title: Extension Points - AEM Content Fragments Editor Extensibility
description: Learn what is possible to extend and customize in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# AEM Content Fragments Editor Extension Points

### Shared Context

In order to empower UI Extensions perform useful actions Content Fragments Editor provides access to data that simplifies user authentication and usage of AEM API. Such data may be accessed through `sharedContext` property of `host`.

```js
import { attach } from "@adobe/uix-guest";

const guestConnection = await attach({
    id: "my-id"
}
const context = guestConnection.sharedContext;
const aemHost = context.get("aemHost");
```

Available shared context data:

```js
{
    aemHost: string, // hostname of connected AEM environment
    locale: string, // locale of current user
    theme: "light" | "dark", // color schema selected by current user
    auth: {
        imsOrg: string, // current IMS organization
        imsToken: string, // user token
        apiKey: string, // API key to use for requests to Adobe services
        imsOrgName: string, // Human readable organization name
        authScheme: "Bearer" // Auth schema that should be used during communication with Adobe services
    }
}
```

### Get Content Fragment

You can access data about the Content Fragment that is currently being edited by using the `host.contentFragment.getContentFragment()` method in an extension:

```js
import { register } from "@adobe/uix-guest";
// ...
const init = async () => {
    const registrationConfig = {
        id: extensionId,
        methods: {
            headerMenu: {
                async getButtons() {
                    return [
                        {
                            id: "get-active-cf",
                            label: "Get Active CF / Canvas",
                            onClick: async () => {
                                // Get Content Fragment
                                const contentFragment = await guestConnection.host.contentFragment.getContentFragment();
                            },
                        },
                    ];
                },
            },
        },
    };
    const guestConnection = await register(registrationConfig);
}
init().catch(console.error)
```

#### Result object

This `contentFragment` object holds the last received state from AEM instance. It does not contain recent changes from the Editor (no edits from the canvas, sidebar or changes to variations) **until they are successfully saved** in AEM.

<InlineAlert variant="warning" slots="text" />

The API is experimental and might change or disappear at any time. The result object structure is part of a low level API that could be changed in the future.
