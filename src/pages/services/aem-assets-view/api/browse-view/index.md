---
title: Browse View - AEM Assets View Extensibility
description: Explore the ways to extend and customize Browse View in AEM Assets View
contributors:
- https://github.com/AdobeDocs/uix
---

# Browse View

The Browse View in the AEM Assets View refers to the asset listing pages such as
Assets, Search, Collections, Libraries, Recent and Trash.

Extensions should use the `aem/assets/browse/1` extension point to utilize extensibility services of the Browse View.
An extension needs to implement both `actionBar` and `quickActions` namespace to be recognized by Assets View.

## Custom action bar buttons and quick actions

This extensibility feature allows customization of the action bar buttons and also the quick actions items associated
with the selected assets.

Using the `actionBar` namespace, custom buttons could be added after the list of built-in action bar buttons, and
built-in action bar buttons could be overridden or hidden based on the business logic defined in the extension.

In this example, a custom button is added to the action bar after the list of built-in action bar buttons.

> TODO: screenshot

It is also configurable to open a custom modal dialog from a custom action bar button as needed.

> TODO: screenshot

Using the `quickActions` namespace, built-in quick actions can be overridden and hidden based on the business logic
defined in the extension.

<!--
Action bar actions

### Add custom action buttons
getActions

### Hide built-in action bar buttons
getHiddenBuiltInActions

### Override built-in action bar buttons
overrideBuiltInAction

### Open modal dialogs from custom action bar buttons

Quick actions
getHiddenBuiltInActions
overrideBuiltInAction
-->

## API Reference

This API reference section is further broken down into two parts: the API provided by the AEM Assets View host application
to the extension and the API provided by the extension to the AEM Assets View host application.

### Host API Reference

Refer to the [Modal API](../commons/#modal-api) provided by AEM Assets View to all extensions for implementation of
managing dialogs opened from custom action bar buttons or quick actions items.

### Extension API Reference

The extension definition object passed by the extension to the `register()` function defines the `actionBar` and `quickActions` namespaces.

#### actionBar namespace
The `actionBar` namespace include these 3 methods
* `getActions({ context, resourceSelection })`
* `getHiddenBuiltInActions({ context, resourceSelection })`
* `overrideBuiltInAction({ actionId, context, resourceSelection })`


The `actionBar.getActions({ context, resourceSelection })` method returns an array of custom action descriptors or an
empty array if no custom actions should be added to the ActionBar

A custom action descriptor is a JSON with the following properties:
- `id` (`string`): Action id, unique within given extension.
- `label` (`string`): Custom action title.
- `icon` (`string`): Name of the [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons).
- `onClick` (`function`): An activation handler.

#### quickActions namespace

The `quickActions` namespace include these 2 methods
* `getHiddenBuiltInActions({ context, resource })`
* `overrideBuiltInAction({ actionId, context, resource })`.


## Example of adding custom action bar buttons


## Example of hiding built-in action bar buttons


## Example of overriding built-in action bar buttons
