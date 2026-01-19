---
title: Dashboard - AEM Experience Hub Extensibility
description: Explore the ways to extend and customize Dashboard in AEM Experience Hub
contributors:
  - https://github.com/AdobeDocs/uix
---

# Dashboard

Dashboard can be customized via methods defined in `dashboard` namespace.

## Custom widget

You have the ability to create custom widgets and configure how they appear and behave in the Experience Hub dashboard.

```js
import { register } from "@adobe/uix-guest";

// ...

const guestConnection = await register({
    id: "my.company.extension-with-dashboard-widget",
    methods: {
        dashboard: {
            getWidget() {
                return {
                    id: "my.company.custom-widget",
                    title: "My Custom Widget",
                    description: "A custom widget for Experience Hub",
                    url: '/index.html#/projectName',
                    widgetSize: {
                      defaultWidth: 6,
                      defaultHeight: 6
                    },
                    hideWidgetHeader: false
                };
            },
        },
    },
});
```

## API Reference

### Widget API

| Field            | Type                  | Required | Description                                                                                                                   |
|------------------|-----------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| id               | `string`              | ✔️       | **Must be unique** across all extensions. Consider adding a vendor prefix to this field                                       |
| title            | `string`              | ✔️       | Widget title that will be visible on the dashboard and in the widgets customization dialog.                                                                            |
| description      | `string`              | ✔️       | Brief description of the widget. To be displayed in the widgets customization dialog.                                                                              |
| url              | `string`              | ✔️       | The source URL of the widget, used to display the widget in the dashboard.                                                 |
| widgetSize       | `object`              |          | Configuration for the widget layout and its position in the dashboard.                                                                                        |
| hideWidgetHeader | `boolean`             |          | The widget header is controlled from Experience Hub by default. Define if it should be hidden and instead handle it from the extension.                                                                                       |

## Extension Points API

[More details](../index.md) about Extension Points APIs.

