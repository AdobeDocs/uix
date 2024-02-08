---
title: Canvas Data Api - AEM Content Fragments Editor Extensibility
description: Learn how to extend and customize canvas data in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Canvas Data API

Canvas Data API provides a possibility to programmatically read and change field values from extensions. This API works with data from UI only and doesn't directly interact with AEM instance. However, the data manipulations done using this API may be auto-saved by UI itself.

## Getting values from canvas

```js
const api = await guestConnection.host.dataApi.get();
const fields = await api.getFields();
console.log(fields);
/**
 * [
 *   {
 *       "name": "test-textarea",
 *       "value": {
 *           "contentType": "text/html",
 *           "value": "<p>Text area content</p>"
 *       },
 *       "type": "text-multi",
 *       "isMultiField": false
 *   },
 *   {
 *       "name": "onelinetext",
 *       "value": "Test one line content",
 *       "type": "text-single",
 *       "isMultiField": false
 *   }
 * ]
 */
```

## Setting new values

```js
const api = await guestConnection.host.dataApi.get();
const fieldName = "test-field";
await api.setValue(fieldName, "New value");
//await api.setValue(fieldName, "New value", 0); - A last parameter specifies an index in multi-field values
```

## Setting styles to the field
```js
const api = await guestConnection.host.dataApi.get();
const fieldName = "test-field";
await api.setStyle(fieldName, {"display": "none"});
// Second parameter is the object that is used to pass the styles that will be applied on field
```


## Consistency

`guestConnection.host.dataApi.get()` makes a snapshot of canvas data at the moment of invocation. Changes made by other extensions or direct users will not be automatically propagated to existing API instances.
Consider calling this method multiple times during long-running processes to get fresh data.

### API Reference

#### Field format

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| name | `string` | ✔️    | A unique field name that could be used as id |
| value | `string` \| `Object` \| `number` \| `boolean` | ✔️   | A field value. The type is dependent on field type |
| type | `string` | ✔️    | A field type |
| isMultiField | `boolean` |     | A flag representing wether field contains multiple values or not |

#### Field types

| Type | Value format | Description |
| ----- | ---- | -------- |
| `text-signle` | `string` | A single line text field |
| `text-multi` | `object` | A multi line text field. Object structure: { "contentType": `string`, "value": `string`}. Allowed types are `text/x-markdown`, `text/plain`, `text/html` |
| `boolean` | `boolean` | A boolean field |
| `date` | `string` | A date or time field in ISO 8601 format |
| `number` | `number` | A number field |
| `enumeration` | `string` | A selected option from the list of allowed values |
| `json` | `string` | A code block field with JSON code |
| `tags` | `string[]` | A tags field |
