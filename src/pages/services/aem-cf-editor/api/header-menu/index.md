---
title: Header Menu - AEM Content Fragments Editor Extensibility
description: Explore the ways to extend and customize Header Menu in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Header Menu

Header menu can be customized via methods defined in `headerMenu` namespace.

You have the ability to:

- create multiple buttons from single extension;
- implement drop-down menu buttons;
- use different [variations](https://spectrum.adobe.com/page/button/#Options) of buttons from React Spectrum;
- use any [icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) from React Spectrum;

## Custom button with callback

```js
import { register } from "@adobe/uix-guest";

// ...

const guestConnection = await register({
    id: "my.company.extension-with-header-menu-button",
    methods: {
        headerMenu: {
            getButtons() {
                return [
                    {
                        id: "my.company.export-button",
                        label: "Export",
                        icon: 'Export',
                        onClick: () => {
                            console.log('Export button has been pressed.');
                        },
                    },
                ];
            },
        },
    },
});
```

The `onClick` callback is invoked when a user clicks on the button. It does not receive any arguments.

![Header menu item](./header-menu-item.png)

## Custom button with sub menu

```js
import { register } from "@adobe/uix-guest";

// ...

const guestConnection = await register({
    id: "my.company.extension-with-header-menu-button",
    methods: {
        headerMenu: {
            async getButtons() {
                return [
                    {
                        id: "my.company.export-button",
                        label: "Export",
                        icon: 'Export',
                        subItems: [
                            {
                                id: 'xml',
                                label: 'XML',
                                onClick: async () => {
                                    const contentFragment = await guestConnection.host.contentFragment.getContentFragment();
                                    // ...
                                },
                            },
                            {
                                id: 'csv',
                                label: 'CSV',
                                onClick: async () => {
                                    const contentFragment = await guestConnection.host.contentFragment.getContentFragment();
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

![Header menu item with submenu](./header-menu-item-with-submenu.png)

## API Reference

### Button API

| Field    | Type                                                                        | Required | Description                                                                                                                   |
|----------|-----------------------------------------------------------------------------| ------ |-------------------------------------------------------------------------------------------------------------------------------|
| id       | `string`                                                                    | ✔️  | **Must be unique** across all extensions. Consider adding a vendor prefix to this field                                       |
| label    | `string`                                                                    | ✔️  | Button label that will be visible on UI                                                                                       |
| icon     | `string`                                                                    |    | Name of a [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) |
| variant  | `cta` <br /> `primary` <br /> `secondary` <br /> `negative` <br /> `action` |    | The [visual style](https://spectrum.adobe.com/page/button/#Options) of the button                                             |
| subItems | `array`                                                                     |    | A list with sub menu items.                                                                                                   |
| onClick  | `callback(): void`                                                          |  ✔️ | A callback for a button `onClick` event                                                                                       |

### Sub menu item API

| Field    | Type                                                                    | Required | Description                                                                                                  |
|----------|-------------------------------------------------------------------------| ------ |--------------------------------------------------------------------------------------------------------------|
| id       | `string`                                                                | ✔️  | **Must be unique** across the current button sub menu                                                        |
| label    | `string`                                                                | ✔️  | Button label that will be visible on UI                                                                      |
| icon     | `string`                                                                |    | Name of a [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons) |
| onClick  | `callback(): void`                                                      |  ✔️ | A callback for a button `onClick` event                                                                      |

## Extension Points API

[More details](../index.md) about Extension Points APIs.
