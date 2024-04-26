---
title: Working with the events - Universal Editor Extensibility
description: Leveraging universal editor events within your application
contributors:
  - https://github.com/AdobeDocs/uix
---

# Working with Events

The Universal Editor sends defined events to remote applications. In case the remote application has no custom event listener for the sent event, a fallback event listener provided by the universal-editor-cors package is executed.

### Working with Events

The Universal Editor offers a list of events that extensions can subscribe to in order to respond to changes in content or the user interface.
Refer to this [document](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/events) for the available event list.

For instance, here's an example of how to subscribe to the `aue:ui-select` event:

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
Here's an example of how to dispatch the `aue:ui-select` event:

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