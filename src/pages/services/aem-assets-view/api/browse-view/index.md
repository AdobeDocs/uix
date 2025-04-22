---
title: Browse View - AEM Assets View Extensibility
description: Explore the ways to extend and customize Browse View in AEM Assets View
contributors:
- https://github.com/AdobeDocs/uix
---

# Browse View

The Browse View in the AEM Assets View show a list of assets in various areas including
Assets, Search, Collections, Libraries, Recent and Trash.

Extensions should use `aem/assets/browse/1` extension point to utilize extensibility services of the Browse View.

## Custom action bar buttons

This extensibility feature allows adding new action bar buttons, hiding or overriding standard action bar buttons
using the `actionBar` namespace. The custom button appear after the list of the standard action bar buttons.

It is also configurable to open a custom modal dialog from a custom action bar button as needed.

<!--
### Add custom action buttons

### Hide standard action bar buttons

### Override standard action bar buttons

### Open modal dialogs from custom action bar buttons
-->

## API Reference

This API reference section is further broken down into two parts: the API provided by the AEM Assets View host application
to the extension and the API provided by the extension to the AEM Assets View host application.

### Host API Reference

In addition to the [Common API](../commons) provided by AEM Assets View to all extensions, 
the host application provides the following API specific to the `aem/assets/details/1` extension point 
and the `actionBar` namespace.

<!--
`actionBar.getActions()`

**Description:** returns the path and id of the asset shown in the Details View.

**Return Object Structure**
- `path` (`string`): Current asset path.
- `id` (`string`): Current asset id.

**Example:**
```js
const { path, id } = await guestConnection.host.details.getCurrentResourceInfo();
```
-->

### Extension API Reference


## Example of adding custom action bar buttons


## Example of hiding standard action bar buttons


## Example of overriding standard action bar buttons


## Example of opening a modal dialogs from custom action bar buttons
