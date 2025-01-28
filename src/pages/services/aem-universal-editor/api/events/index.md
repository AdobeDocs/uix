---
title: Working with CustomEvent - Universal Editor Extensibility
description: Communicating to the Remote Application through CustomEvent
contributors:
  - https://github.com/AdobeDocs/uix
---

# Working with Custom Events

The Universal Editor sends defined events to the remote application, on top of this `CustomEvent` can also be sent directly from the Extension to the remote application.

### Working with Custom Events

You can send events to the remote application using the `triggerEvent` method.

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


### Subscribing to events:
To listen to events sent by the Universal Editor, you can subscribe to them using the next declaration:

```js
    function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      methods: {
        events: {
          listen: (eventName, data) => {
            console.log(`Extension registered to listen to event: ${eventName}. The event data: ${JSON.stringify(data)}`);
          }
        },
      }
    });

  };
  init().catch((error) => console.error(error));

  return <Text>IFrame for integration with Host (AEM)...</Text>
}

```

The extension has the capability to subscribe to a wide range of events offered by the Universal Editor, enabling seamless integration and enhanced functionality.

For a comprehensive list of all available events and the corresponding response interfaces, please refer to the [Universal Editor Events documentation](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/events). 
