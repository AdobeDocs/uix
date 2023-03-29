---
title: Header Menu - AEM Content Fragments Editor Extensibility
description: Learn what is possible to extend and customize in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Header Menu

Header menu can be customized via methods defined in `headerMenu` namespace.

### Custom button with callback

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
                        icon: 'Export', // Spectrum workflow icon code from https://spectrum.adobe.com/page/icons/
                        onClick: () => { // button's onClick callback
                            console.log('Export button has been pressed.');
                        },
                    },
                ];
            },
        },
    },
});
```

The `onClick` callback is invoked when user clicks on the button and does not receive any extra parameters.

![Header menu item](./header-menu-item.png)

### Custom button with sub menu

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

**Button API**

| Field    | Type                                                                        | Required | Description                                                                                                   |
|----------|-----------------------------------------------------------------------------| ------ |---------------------------------------------------------------------------------------------------------------|
| id       | `string`                                                                    | ✔️  | **Must be unique** across all extensions. Consider adding vendor prefix to this field                         |
| label    | `string`                                                                    | ✔️  | Button label that will be visible on UI                                                                       |
| icon     | `string`                                                                    |    | An icon field accepts workflow icon code from @spectrum-icons library - https://spectrum.adobe.com/page/icons/ |
| variant  | `cta` <br /> `primary` <br /> `secondary` <br /> `negative` <br /> `action` |    | The [visual style](https://spectrum.adobe.com/page/button/#Options) of the button                             |
| subItems | `array`                                                                     |    | A lsit with sub menu items.                                                                                   |
| onClick  | `callback(): void`                                                          |  ✔️ | A callback for a button `onClick` event                                                                       |

**Sub menu item API**

| Field    | Type                                                                        | Required | Description                                                                                                  |
|----------|-----------------------------------------------------------------------------| ------ |--------------------------------------------------------------------------------------------------------------|
| id       | `string`                                                                    | ✔️  | **Must be unique** across the current button sub menu                                                        |
| label    | `string`                                                                    | ✔️  | Button label that will be visible on UI                                                                      |
| icon     | `string`                                                                    |    | An icon field accepts workflow icon code from @spectrum-icons library - https://spectrum.adobe.com/page/icons/ |
| onClick  | `callback(): void`                                                          |  ✔️ | A callback for a button `onClick` event                                                                      |

# Extension Points API

In our example, we used snippet:

```js
const contentFragment = await guestConnection.host.contentFragment.getContentFragment();`
```

[More details](../index.md) about it and the other Extension Points API.
