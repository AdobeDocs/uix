---
title: Browse View - AEM Assets View Extensibility
description: Explore the ways to extend and customize Browse View in AEM Assets View
contributors:
- https://github.com/AdobeDocs/uix
---

# Browse View

The Browse View in the AEM Assets View refers to the asset listing pages such as
Assets, Collections, Recent, Search and Trash.

Extensions should use the `aem/assets/browse/1` extension point to utilize extensibility services of the Browse View.

An extension needs to implement both `actionBar` and `quickActions` namespace to be recognized by Assets View.

## Custom action bar actions and quick actions

This extensibility feature allows context-aware customization of the action bar actions and also the quick actions
associated with the selected assets.

Using the `actionBar` namespace, custom buttons could be added after the list of built-in action bar actions, and
built-in action bar actions could be overridden or hidden based on the context and the selected assets.

In this example, a custom button is added to the action bar after the list of built-in action bar actions.

![](action-bar-button.png)

Using the `quickActions` namespace, built-in quick actions can be overridden and hidden based on the context and the
current asset.

## API Reference

This API reference section is further broken down into two parts: the API provided by the AEM Assets View host application
to the extension and the API provided by the extension to the AEM Assets View host application.

### Host API Reference

In addition to the [Common API](../commons) provided by AEM Assets View to all extensions,
the host application provides the following definitions specific to the `aem/assets/browse/1` extension point,
the `actionBar` and `quickActions` namespace.

#### Browsing context

Assets View supports assets browsing experiences in multiple modes, or "contexts". The current context is exposed in
the Host API and is also communicated to Extension APIs, so that the custom code within Extension can adopt to Assets
View state.  Supported browsing contexts are:

| Browsing Context | Description | Path |
|------------|------------|------------|
| assets | Main asset browsing experience | /assets/browse |
| collections | Collections | /assets/collections |
| recent | Recent | /assets/recent |
| search | Search | /assets/search |
| trash | Trash | /assets/trash |

#### Built-in actions

The host application allows to hide certain built-in actions. Depending on the browsing content, below if the list of
action IDs of actions that can be hidden:

| Browsing Context | Action IDs that can be hidden or overridden |
|------------|------------|
| assets | "edit", "openInExpress", "reprocess", "copy", "move", "rename", "bulkRename", "managePermissions", "delete", "publish", "download", "share" |
| collections | "openInExpress", "rename", "managePermissions", "delete", "download", "share" |
| recent | - |
| search | "edit", "openInExpress", "reprocess", "copy", "move", "rename", "bulkRename", "managePermissions", "delete", "publish", "download", "share" |
| trash | "delete" |

### Extension API Reference

The extension definition object passed by the extension to the `register()` function defines the `actionBar` and
`quickActions` namespaces.

Additional buttons could be added to the action bar, and existing built-in actions could be hidden or customized based
on the browsing context and resource selection provided to the methods in these namespaces.

#### actionBar namespace
The `actionBar` namespace include these 3 methods
- `getActions({ context, resourceSelection })`
- `getHiddenBuiltInActions({ context, resourceSelection })`
- `overrideBuiltInAction({ actionId, context, resourceSelection })`

`actionBar.getActions({ context, resourceSelection })`

**Description:** returns an array of custom action descriptors or an empty array if no custom actions should be added
to the ActionBar in the specified context for the selected assets.

**Parameters:**
- context (`string`): current browsing context that could be `assets`, `collections`, `recent`, `search`
or `trash`
- **resourceSelection** (`object`): an object representing the current resource selection
  - resources (`array`): an array of currently selected resources.
    - id (`string`): selected resource URN.
    - path (`string`): selected resource path

**Returns** (`array`) an array of custom action descriptors or an empty array if no custom actions should be added to the ActionBar.

Each array element is a custom action descriptor is a JSON with the following properties:
- `id` (`string`): action id, unique within given extension.
- `label` (`string`): Custom action title.
- `icon` (`string`): Name of the [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons).
- `onClick` (`function`): An activation handler.

**Example:**
```js
actionBar: {
  getActions: ({ context, resourceSelection }) => {
    if (context === 'assets' && resourceSelection.resources.length === 1) {
        return [{
        'id': 'customId',
        'icon': 'Form',
        'label': 'Custom label',
        'onClick': async () => {
            // ...
        }
      }];
    }
    return [];
  },
}
```

`getHiddenBuiltInActions({ context, resourceSelection })`

**Description:**  returns an array of built-in action id that should be hidden in the specified context for the selected assets.

This method is called by the host application to determine which built-in actions are hidden. The host calls this method once when an asset selection changes.
 
Extension code should ensure this method returns fast because the host application blocks rendering of the ActionBar until actions are checked for visibility.
In particular it is recommended not to use backend server calls in this method.

**Parameters:**
- context (`string`): current browsing context that could be `assets`, `collections`, `recent`, `search`
or `trash`
- **resourceSelection** (`object`): an object representing the current resource selection
  - resources (`array`): an array of currently selected resources.
    - id (`string`): selected resource URN.
    - path (`string`): selected resource path

**Returns** (`array`) an array of action Ids which should be hidden from the ActionBar, or an empty array in case no action needs to be hidden

**Example:**
 ```js
getHiddenBuiltInActions: ({ context, resourceSelection }) => {
  return [];
},
```

`overrideBuiltInAction({ actionId, context, resourceSelection })`

**Description:**  Return true to indicate the Host should perform the built-in action, false otherwise. 

This method is called by the Host when the user activates one of the built-in actions, before invoking actual action handler. The method returns true if the Extension had
performed custom action processing and the Host should not invoke built-in action handler. Otherwise the method call returns false, to indicate that the Extension
had ignored the invocation and the Host should use built-in action handler.

**Parameters:**
- actionId (`string`): actionId built-in action Id
- context (`string`): current browsing context that could be `assets`, `collections`, `recent`, `search`
or `trash`
- **resourceSelection** (`object`): an object representing the current resource selection
  - resources (`array`): an array of currently selected resources.
    - id (`string`): selected resource URN.
    - path (`string`): selected resource path

**Returns** (`boolean`) false for Host to use built-in action handler, true to skip built-in handler and stop

**Example:**
```js
overrideBuiltInAction: ({ actionId, context, resourceSelection }) => {
    //do some custom tasks
    return true;  // skip the Host's built-in handler and stop  
},
```

#### quickActions namespace

The `quickActions` namespace include these 2 methods
- `getHiddenBuiltInActions({ context, resource })`
- `overrideBuiltInAction({ actionId, context, resource })`

`function()`
**Description:**  

**Parameters:**

**Returns**

**Example:**
```js
```

`function()`
**Description:**  

**Parameters:**

**Returns**

**Example:**
```js
```


### Custom dialog

To open a custom dialog from from custom action bar actions or quick actions, refer to the
[Modal API](../commons/#modal-api) provided by AEM Assets View to all extensions for implementation of
dialog management.

## Examples

### Example of adding custom actions


### Example of hiding built-in actions


### Example of overriding built-in actions
