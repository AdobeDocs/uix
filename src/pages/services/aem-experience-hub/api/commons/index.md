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
  - **dashboard**, that allows to add custom widgets and customize the dashboard layout

```jsx
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
## Building Extension UI

In cases where a UI Extension manages data or sends data to a remote service, the register method is the only one expected to be called. If the UI Extension includes its own interface and it needs data from Experience Hub or needs to trigger any logic, it should establish a connection using the `attach` method.

```jsx
import React, { useEffect, useState } from 'react';
import { attach } from "@adobe/uix-guest";
import { TextField, Button } from '@adobe/react-spectrum';
import { extensionId } from "./Constants";
import FormService from "./FormService";

export default function ExtensionForm() {
  const [prompt, setPrompt] = useState('');
  const [guestConnection, setGuestConnection] = useState();

  const handleSubmit = async () => {
    const instanceInfo = await guestConnection.host?.instance?.info();
    const {programId, environmentId} = instanceInfo ?? {};
    FormService.post(prompt, programId, environmentId);
  }

  useEffect(() => {
    const init = async () => {
      const connection = await attach({ id: extensionId });
      setGuestConnection(connection);
    }

    init().catch(console.error);
  }, [])

  return (
    <div className="extension-form">
      <TextField
        label="Prompt"
        value={prompt}
        onChange={setPrompt}
      />
      <Button onPress={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
```

## Set up communication with Experience Hub

Both `register` and `attach` function of `@adobe/uix-guest` returns same connection object that has `host` property and
expose API of Experience Hub exposed for UI Extensions. Through this API you can access data from the Experience Hub as well as send data to it.
