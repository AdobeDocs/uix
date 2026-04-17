---
title: Setting default field properties - AEM Content Fragments Editor Extensibility
description: Learn how to provide a default form field HTML properties in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Setting default field properties

This feature allows third-party developer set HTML properties and handlers to any field.

## Example

```js
function ExtensionRegistration() {
    const init = async () => {
        const guestConnection = await register({
            id: extensionId,
            methods: {
                field: {
                    getProperties: () => {
                        return [
                            {
                                fieldNameExp: '^address_autocomplete$',
                                onChange: (value) => {
                                    // logic here
                                },
                            },
                        ];
                    },
                },
            },
        });
    };
    init().catch(console.error);

    return <Text>IFrame for integration with Host (AEM)...</Text>;
}
```

## Allowed Properties
* onChange(value) - is a callback function that gets triggered whenever there is a change in the field's value
* disabled - disable/enable CF Editor field

## API Reference

| Field           | Type      | Required | Description                                                                           |
|-----------------|-----------|----------|---------------------------------------------------------------------------------------|
| fieldNameExp    | `string`  |  ✔️      | RegExp for field name                                                                 |
| onChange(value) | `func`    |          | Callback function that gets triggered whenever there is a change in the field's value |
| disabled        | `boolean` |          | disable/enable CF Editor field                                                        |
