---
title: Working with the events - Universal Editor Extensibility
description: Leveraging universal editor events within your application
contributors:
  - https://github.com/AdobeDocs/uix
---

# Working with Events

The Universal Editor sends defined events to remote applications. In case the remote application has no custom event listener for the sent event, a fallback event listener provided by the universal-editor-cors package is executed.

### Working with Events

If your business logic requires sending an event to the Universal Editor, you can use the `triggerEvent` method.
Here's an example of how to dispatch the `aue:ui-viewport-change` event:

```js
    useEffect(() => {
        (async () => {
            const guestConnection = await attach({id: extensionId});
            ...
                   await guestConnection.host.remoteApp.triggerEvent('aue:ui-viewport-change',
                        'main',
                        {
                          details: {
                            height: 1024,
                            width: 768,
                          }
                        }
                    );
            ...
        })();
    }, []);
```