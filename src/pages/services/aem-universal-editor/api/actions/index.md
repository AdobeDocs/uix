---
title: Universal Editor Extensibility
description: Actions that can be performed from extensions
contributors:
  - https://github.com/AdobeDocs/uix
---

# Actions that can be performed from extensions

Understand the fundamentals required to develop an extension for the Universal Editor.

## Editor UI actions

### Navigate To

Universal Editor provides `navigateTo` action, enables switching the URL to the editor content page from the extension.
To execute this action, an extension developer can call the navigateTo method on connection.host.editorActions and provide the new content URL as a parameter.

#### API
Method: `navigateTo`

| Param      | Type     | Description                                                                                                                                                                                                                        |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| href       | `string` | Path to the content page                                                                                                                                                                                                           |


Example: 
`guestConnection.host.editorActions.navigateTo(href: string);`

### Refresh Page

The `refreshPage` enables an extension to refresh the page which is currently opened in the Universal Editor.

#### API
Method: `refreshPage`

Example: `guestConnection.host.editorActions.refreshPage();`

### Select Editables
The `selectEditables` action allows an extension developer to select an editable block for editing. An editable block refers to the portion of content that can be modified within the Universal Editor.

Editable block example:
![editable-block-example.png](editable-block-example.png)

The extension developer can retrieve the list of all editable blocks from the [editor state](https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/data/#editor-state). This can be achieved by using `await guestConnection.host.editorState.get()` api.

#### API

Method: `selectEditables`

| Param      | Type                | Description                     |
|------------|---------------------|---------------------------------|
| editables       | `Array` | The list of Editables to select |

Example: `guestConnection.host.editorActions.selectEditables(editables: Editable[]);`

### Reload Extension

The `reloadExtension` triggers the Universal Editor to reload visual indicators of the extension. 
It reloads the getButtons() method for the `headerMenu`.

#### API

Method: `reloadExtension`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| extensionId | `String` | The extenion's id with which it is registred        |

Example: `guestConnection.host.editorActions.reloadExtension(EXTENSION_ID);`

### Set Editor Mode

The `setEditorMode` action enables an extension to switch the Universal Editor between edit and preview modes. In edit mode, content can be modified, while view mode provides a read-only experience.

#### API

Method: `setEditorMode`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| mode       | `"edit" \| "preview"` | The mode to set the editor to. Either "edit" for editing mode or "preview" for read-only mode |

Example: `guestConnection.host.editorActions.setEditorMode("edit");`

### Toast

The `toast` action enables an extension to display a toast notification to the user. Toast notifications are temporary messages that appear in the Universal Editor interface to provide feedback or information.

#### API

Method: `toast`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| variant    | `"neutral" \| "positive" \| "negative" \| "info"` | The visual style of the toast notification. "positive" for success messages, "negative" for error messages, "info" for informational messages, and "neutral" for default messages |
| message    | `string` | The text content to display in the toast notification |
| timeout    | `number` | Optional. The duration in milliseconds before the toast automatically dismisses. If not provided, a default timeout will be used |

Example: `guestConnection.host.editorActions.toast("positive", "Content saved successfully", 3000);`

## Content actions

### Update

The update action enables an extension developer to modify the data within a specific editable block.

At present, only a single field can be updated per call, and only the replace operation is supported. If the provided patch does not adhere to these rules, an error will be triggered.


#### API

Method: `update`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| target       | `Object` | The editable to update                               |
| patch       | `Operation[]`  | Valid array of operations based on rfc6902 for JSON Patch |

Example:
`guestConnection.host.editorActions.update({ target: Target, patch: Operation[] });`

Example for updating a field with the name title:
`update({ target: { editable }, patch: [{ op: "replace", path: "/title", value: "New title" }] })`

### Details

The `details` action enables an extension developer to retrieve the data and schema information for a specific editable block. This is useful for inspecting the current state and structure of an editable before performing operations on it.

#### API

Method: `details`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| editable   | `Editable` | The editable block to get details for              |

Returns: `Promise<{ data: unknown, schema: unknown }>` - A promise that resolves to an object containing the editable's data and schema

Example: `const { data, schema } = await guestConnection.host.editorActions.details(editable);`

### Remove

The `remove` action enables an extension developer to delete a specific editable block from the content.

#### API

Method: `remove`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| editable   | `Editable` | The editable block to remove                        |

Returns: `Promise<void>` - A promise that resolves when the editable has been removed

Example: `await guestConnection.host.editorActions.remove(editable);`

### Add

The `add` action enables an extension developer to add a new component to a container editable. The new component will be added as last child of the specified container.

#### API

Method: `add`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| container  | `Editable` | The container editable where the new component will be added |
| componentId | `string` | The identifier of the component type to add within the component definition         |

Returns: `Promise<void>` - A promise that resolves when the component has been added

Example: `await guestConnection.host.editorActions.add(container, "teaser");`

### Copy

The `copy` action enables an extension developer to duplicate an editable block and place it within another container editable. The copied editable will be inserted at the specified position, or at the end if no position is specified.

#### API

Method: `copy`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| editable   | `Editable` | The editable block to copy                          |
| pasteTo   | `Editable` | The container editable where the copied editable will be placed |
| before    | `Editable` | Optional. The editable before which the copied editable should be inserted. If not provided, the copied editable will be added at the end of the container |

Returns: `Promise<void>` - A promise that resolves when the editable has been copied

Example: `await guestConnection.host.editorActions.copy(editable, container, beforeEditable);`

### Move

The `move` action enables an extension developer to relocate an editable block from its current position to a new container. The editable will be moved to the specified position, or at the end if no position is specified.

#### API

Method: `move`

| Param      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| editable   | `Editable` | The editable block to move                          |
| moveTo    | `Editable` | The container editable where the editable will be moved to |
| before    | `Editable` | Optional. The editable before which the moved editable should be inserted. If not provided, the editable will be added at the end of the container |

Returns: `Promise<void>` - A promise that resolves when the editable has been moved

Example: `await guestConnection.host.editorActions.move(editable, newContainer, beforeEditable);`

