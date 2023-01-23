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
