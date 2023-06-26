---
title: Grid Columns - AEM Content Fragments Console Extensibility
description: Learn how to customize Grid Columns in AEM Content Fragments console
contributors:
  - AdobeDocs/uix
---

# Content Fragment Grid Columns

The content fragment grid is located below the header menu and action bar, and it displays a list of all the content fragments. 

By utilizing the extension point, you can add custom grid columns, make them sortable, and apply custom rendering.

```js
const guestConnection = await register({
  id: "aem-headless-ui-ext-examples-progress-circle",
  methods: {
      contentFragmentGrid: {
          getColumns() {
              return [
                  {
                      id: "extended",
                      label: "Extended",
                      allowsResizing: true, // optional, by default "false"
                      minWidth: 350, // optional, no default value
                      showDivider: true, // optional, by default "false"
                      render: async function (fragments) {
                          return fragments.reduce((accumulator, fragment) => {
                              accumulator[fragment.id] = fragment.title + ' - extended';
                              return accumulator;
                          }, {})
                      },
                  },
              ];
          }
      }
  }
});
```

## API Reference

| Field          | Type                                 | Default | Required | Description                                                                                                                                             |
|----------------|--------------------------------------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| id             | `string`                             | —       | ✔️       | Id of the column, must be unique between all extensions                                                                                                 |
| label          | `string`                             | —       | ✔️       | Label of the column (shown in table header)                                                                                                             |
| render         | `function`                           | —       | ✔️       | Function that will be used to render the column content                                                                                                 |
| align          | `start` <br /> `center` <br /> `end` | `start` |          | Text alignment in column                                                                                                                                |
| allowsResizing | `boolean`                            | `false` |          | Whether the column allows resizing                                                                                                                      |
| allowsToggle   | `boolean`                            | `true`  |          | Whether the user can hide column via the column toggle dialog                                                                                           |
| hideHeader     | `boolean`                            | `false` |          | Whether the header label should be hidden (for item action columns)                                                                                     |
| showDivider    | `boolean`                            | `false` |          | Show divider between column and next column (i.e. on the right side)                                                                                    |
| width          | `number`<br /> `string`              | —       |          | Width (fixed) of the table column. It can be a static number (e.g. 100 which translates to 100px) or a percentage (e.g. '100%')                         |
| minWidth       | `number`<br /> `string`              | —       |          | Min width of the column                                                                                                                                 |
| maxWidth       | `number`<br /> `string`              | —       |          | Max width of the column                                                                                                                                 |

## Render Function

The render function will receive the list of fragment currently in the state of the application and will need to
return an object with keys the id of the fragment (`frament.id`) and with property being of type `string`. If the value
would be casted to `string`.

```js
async function (fragments) {
    return fragments.reduce((accumulator, fragment) => {
        accumulator[fragment.id] = fragment.name + '-extension-one';
        return accumulator;
    })
}
```
