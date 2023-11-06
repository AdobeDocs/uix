---
title: Custom form element rendering - AEM Content Fragments Editor Extensibility
description: Learn how to customize a form field rendering in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Custom form element rendering

This feature allows third-party developer to build custom input UI for specific fields or types of fields.

## Define override rules

An UIX extension can define a list of override rules, each consisting of a set of RegExp expressions for field name, type, fragment path or/and model path. When a field on the canvas matches one of these expressions, the standard UI is replaced with an iframe, which then renders the custom UI provided by the extension.

```js
function ExtensionRegistration() {
    const init = async () => {
        const guestConnection = await register({
            id: extensionId,
            methods: {
                field: {
                    getDefinitions: () => {
                        return [
                            {
                                fieldNameExp: '^address_autocomplete$',
                                url: '/#/address-autocomplete-field',
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

## Implement custom rendering logic

```js
function CustomField() {
...
    useEffect(() => {
        const init = async () => {
            // connect to the host (ie. CF Editor)
            const conn = await attach({ id: extensionId });
            setConnection(conn);

            // get model
            const model = await conn.host.field.getModel();

            // configure validation state subscriber
            await conn.host.field.onValidationStateChange((state) => setValidationState(state));

            // get default value
            const defaultValue = await conn.host.field.getDefaultValue();
        }

        init().catch(console.error);
    }, []);

    // Custom fileld will be display instead of original one
    return <TextField defaultValue={value} onChange={(v) => conn.host.field.onChange(v)} ... />;
}
```

## API Reference

| Field        | Type      | Required | Description                                                                                                                                                               |
|--------------|-----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url          | `string`  |  ✔️      | URL of the page to load in the iframe that will replace the original field. The URL must have the same origin as the extension declaring the rules for field replacement. |
| pathExp      | `string`  |          | RegExp for "fragment content" path                                                                                                                                        |
| modelPathExp | `string`  |          | RegExp for "fragment content model" path                                                                                                                                  |
| fieldTypeExp | `string`  |          | RegExp for field type                                                                                                                                                     |
| fieldNameExp | `string`  |          | RegExp for field name                                                                                                                                                     |

At least one valid expression must be specified: `pathExp`, `modelPathExp`, `fieldTypeExp`, or `fieldNameExp`.
