---
title: Form elements custom rendering - AEM Content Fragments Editor Extensibility
description: Learn how to customize a form field rendering in AEM Content Fragments Editor
contributors:
  - https://github.com/AdobeDocs/uix
---

# Form elements custom rendering

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

### Override Rules Definition API

Allowed values in `getDefinitions` when registering override rules.

| Field          | Type      | Required | Description                                                                                                                                                               |
|----------------|-----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `url`          | `string`  |  ✔️      | URL of the page to load in the iframe that will replace the original field. The URL must have the same origin as the extension declaring the rules for field replacement. |
| `pathExp`      | `string`  |          | RegExp for "fragment content" path.                                                                                                                                       |
| `modelPathExp` | `string`  |          | RegExp for "fragment content model" path.                                                                                                                                 |
| `fieldTypeExp` | `string`  |          | RegExp for field type.                                                                                                                                                    |
| `fieldNameExp` | `string`  |          | RegExp for field name.                                                                                                                                                    |

At least one valid expression must be specified: `pathExp`, `modelPathExp`, `fieldTypeExp`, or `fieldNameExp`.

### Host API

Methods that can be called on the `conn.host.field` object during rendering logic implementation.

| Method                                              | Description                                                                                                                                            |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `getModel(): Object`                                | Return Content Fragment Model for the currently edited Content Fragment.                                                                               |
| `getDefaultValue(): mixed`                          | Returns the initial value for the input we are replacing.                                                                                              |
| `getValidationState(): invalid&#124;valid`          | Returns the validation state value for the input we are replacing.                                                                                     |
| `onValidationStateChange(Function callback): void`  | Accepts a callback that will be called when the validation state changes for the input we are replacing.                                               |
| `onChange(Function callback): void`                 | Accepts a callback that will be called when the value of the input we are replacing changes.                                                           |
| `setHeight(number&#124;"auto" height): void): void` | Sets the height value of the frame in which custom UI for the input we are replacing is rendered. A number of pixels, a CSS value, or the string auto. |
