---
title: Working with Custom Events - Universal Editor Extensibility
description: Communicating to the Remote Application through Custom Events
contributors:
  - https://github.com/AdobeDocs/uix
---

# Working with Custom Events

The Universal Editor sends defined events to the Remote Application, on top of this Custom Event can also be sent directly from the Extension to the Remote Application.

### Working with Custom Events

You can send events to the Remote Application using the `triggerEvent` method.

```js
    useEffect(() => {
        (async () => {
            const guestConnection = await attach({id: extensionId});
            ...
                   await guestConnection.host.remoteApp.triggerEvent('my-custom-event',
                        'body',
                        {
                          example: 'payload'
                        }
                    );
            ...
        })();
    }, []);
```

## API Reference

### TriggerEvent API

| Field    | Type                                                                        | Required | Description                                                                                                                   |
| eventName | `string` | ✔️ | Name of the event | 
| selector  | `string` | ✔️ | A valid CSS selector string|
| payload  | Serializable `object`| An object that, in addition of the properties defined in the Event Constructor |
