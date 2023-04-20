---
title: Grid Columns - AEM Content Fragments Console Extensibility
description: Learn what is possible to extend and customize in AEM Content Fragments console
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
                render: async function (fragments) {
                    return fragments.reduce((accumulator, fragment) => {
                        accumulator[fragment.id] = fragment.name + '-extension-one';
                        return accumulator;
                    })
                }
            }
        ]
        }
    }
  }
});
```

## API Reference

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| key | `string` | ✔️      | Key of the column, must be unique between all extensions |
| labelMessage | `string` | ✔️ | Label of the column as seen by the user |
| sortable | `boolean` |  | Wether the column is sortable or not |
| defaultSortOrder | `ascending`, `descending` | Default order in which to sort the column |
| render | `function` | | Function that will be used to render the column |

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
