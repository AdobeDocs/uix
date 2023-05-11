---
title: Action Bar - AEM Content Fragments Console Extensibility
description: Learn how to customize Action Bar in AEM Content Fragments console
contributors:
  - AdobeDocs/uix
---

# Action Bar

The Action Bar is an area above the content fragment list in the [Content Fragments Console](../../) that displays action items that can be executed on selected content fragments. These actions may include editing, deleting, exporting, cloning, or publishing content fragments, and the Action Bar appears over the [Header Menu](../header-menu) when one or multiple content fragments are selected.

![Action Bar](action-bar.png)

Action bar can be customized via methods defined in `actionBar` namespace.

You have the ability to:

- create multiple buttons from single extension;
- implement drop-down menu buttons;
- use any [icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) from React Spectrum;

## Custom button with callback

```js
import { register } from "@adobe/uix-guest";

// ...

const guestConnection = await register({
    id: "my.company.extension-with-action-bar-button",
    methods: {
        actionBar: {
            getButtons() {
                return [
                    {
                        id: "my.company.export-button",
                        label: "Export",
                        icon: 'Export',
                        onClick: (selections) => {
                            console.log('Export button has been pressed', selections);
                        },
                    },
                ];
            },
        },
    },
});
```

## Custom button with sub menu

```js
import { register } from "@adobe/uix-guest";

// ...

const guestConnection = await register({
    id: "my.company.extension-with-action-bar-button",
    methods: {
        actionBar: {
            getButtons() {
                return [
                    {
                        id: "my.company.export-button",
                        label: "Export",
                        icon: 'Export',
                        subItems: [
                            {
                                id: 'xml',
                                label: 'XML',
                                onClick: (selections) => {
                                    console.log('Export in XML button has been pressed.', selections);
                                    // ...
                                },
                            },
                            {
                                id: 'csv',
                                label: 'CSV',
                                onClick: (selections) => {
                                    console.log('Export in CSV button has been pressed.', selections);
                                    // ...
                                },
                            },
                        ],
                    },
                ];
            },
        },
    },
});
```

The callback is invoked when user clicks on the button and receives list of content fragments selected in the list.

<InlineAlert variant="warning" slots="text" />

The `getButton` method is deprecated. When defining a single button, use `getButtons` and provide a single-item array.

## API Reference

### Button API

| Field    | Type                                                                        | Required | Description                                                                                                                   |
|----------|-----------------------------------------------------------------------------| ------ |-------------------------------------------------------------------------------------------------------------------------------|
| id       | `string`                                                                    | ✔️  | **Must be unique** across all extensions. Consider adding a vendor prefix to this field                                       |
| label    | `string`                                                                    | ✔️  | Button label that will be visible on UI                                                                                       |
| icon     | `string`                                                                    |    | Name of a [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) |
| subItems | `array`                                                                     |    | A list with sub menu items                                                                                                    |
| onClick  | `callback(selections): void`                                                          |  ✔️ | A callback for a button `onClick` event. Receives list of content fragments selected in the list                              |

### Sub menu item API

| Field    | Type                         | Required | Description                                                                                                  |
|----------|------------------------------| ------ |--------------------------------------------------------------------------------------------------------------|
| id       | `string`                     | ✔️  | **Must be unique** across the current button sub menu                                                        |
| label    | `string`                     | ✔️  | Button label that will be visible on UI                                                                      |
| icon     | `string`                     |    | Name of a [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) |
| onClick  | `callback(selections): void` |  ✔️ | A callback for a button `onClick` event. Receives list of content fragments selected in the list             |
