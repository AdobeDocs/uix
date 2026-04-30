---
title: Details View - AEM Assets View Extensibility
description: Explore the ways to extend and customize Details View in AEM Assets View
contributors:
  - https://github.com/AdobeDocs/uix
---

# Details View

The Details View in the AEM Assets View shows detailed information about the selected asset.

<InlineAlert variant="info" slots="text" />

UI Extensibility is supported in Assets Ultimate only.

<InlineAlert variant="info" slots="text" />

To get access to Assets View UI extensibility,
[create and submit an Adobe Customer Support case](https://helpx.adobe.com/enterprise/using/support-for-experience-cloud.html).
You can provide documentation feedback by clicking "Log an issue".


Extensions should use the `aem/assets/details/1` extension point to utilize extensibility services of the Details View.

## Custom header menu buttons in Details View

The Details View header menu includes built-in buttons (for example "Assign tasks" and "Download").

Using the optional [`headerMenu`](#headermenu-namespace) namespace, a details extension can add custom header menu buttons, hide built-in header menu buttons by id (removing them from the header menu), and override built-in header menu button clicks so the default handler does not run.
If you implement `headerMenu`, all of its methods are optional: `getButtons`, `getHiddenButtonIds`, and `overrideButton`. Implement only the methods your extension needs.

Built-in header menu button ids for the Details View (`aem/assets/details/1`) are listed in the [Built-in header menu buttons](#built-in-header-menu-buttons) table below.

## Custom side panels

The extensibility feature allows adding new panels and corresponding icon buttons to the side rail 
using the [`detailSidePanel`](#detailsidepanel-namespace) namespace. The custom icons appear under the 
list of the standard panel icons.

![](side-panel.png)

The host application fully manages UI interaction, including toggling the panel when user clicks the button, 
deep linking panel in the URL and auto-hiding the panel when an asset changes.

The host is also responsible for rendering panel's header.

The extension only declares the icon type, panel title and the URL for the custom panel content.

## API Reference

This API reference section is further broken down into two parts: the API provided by the AEM Assets View host application
to the extension and the API provided by the extension to the AEM Assets View host application.

### Host API Reference

In addition to the [Common API](../commons/index.md) provided by AEM Assets View to all extensions,
the host application provides the following API specific to the `aem/assets/details/1` extension point,
the [`detailSidePanel`](#detailsidepanel-namespace) namespace, and the optional [`headerMenu`](#headermenu-namespace) namespace.

`details.getCurrentResourceInfo()`

**Description:** returns the path and id of the asset shown in the Details View.

**Return Object Structure**
- `path` (`string`): Current asset path.
- `id` (`string`): Current asset id.

**Example:**
```js
const { path, id } = await guestConnection.host.details.getCurrentResourceInfo();
```

### Extension API Reference

The extension definition object passed by the extension to the `register()` function defines the [`detailSidePanel`](#detailsidepanel-namespace) namespace and may optionally define the [`headerMenu`](#headermenu-namespace) namespace.

#### detailSidePanel namespace

The `detailSidePanel` namespace includes the following method:
- `getPanels()`

`detailSidePanel.getPanels()`

**Description:** returns an array of custom panel descriptors that the extension wants to add to the side rail 
of the Details View.

**Returns** (`array`) an array of custom panel descriptors or an empty array if no custom panels should be added.

Each array element is a custom panel descriptor that is a JSON with the following properties:
- `id` (`string`): Panel id, unique within given extension.
- `tooltip` (`string`): Icon tooltip.
- `title` (`string`): Custom panel title.
- `icon` (`string`): Name of the [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons).
- `contentUrl` (`string`): Relative root to the panel's content.
- `reloadOnThemeChange` (`boolean`): Whether to reload custom panel when application theme changes.

#### Built-in header menu buttons

Details extensions use the [`headerMenu`](#headermenu-namespace) namespace to customize header menu buttons in the top bar.
The host exposes the following built-in header menu button ids that can be hidden or overridden.

| Context | Header menu button IDs that can be hidden or overridden |
|------------|------------|
| `details` | "assignTasks", "download" |

#### headerMenu namespace

The `headerMenu` namespace supports adding custom **header menu buttons** in the Details View header menu and optionally hiding and overriding built-in header menu buttons there.

`headerMenu` behavior is shared between Browse View and Details View. If an extension implements `headerMenu` in either `aem/assets/browse/1` or `aem/assets/details/1`, those methods are used for header menu handling in both screens. The built-in button set and button ids still differ by screen/context, so use the appropriate ids from each page's [Built-in header menu buttons](#built-in-header-menu-buttons) table.

All `headerMenu` methods are optional:

- `getButtons({ context, resource })` — optional
- `getHiddenButtonIds({ context, resource })` — optional
- `overrideButton({ buttonId, context, resource })` — optional

For example, you can implement only `getHiddenButtonIds` or `overrideButton` without implementing `getButtons`.

`resource` describes the asset or folder currently shown in the Details View (see [`details.getCurrentResourceInfo()`](#host-api-reference)).

`getButtons({ context, resource })`

**Description:** Returns an array of custom header menu button definitions that will be added to the Details View header menu. These buttons are rendered alongside built-in header menu buttons and let extensions surface actions in the header menu while viewing an asset or folder.

**Parameters:**
- context (`string`): Current context for the Details View, as communicated by the Host.
- resource (`object`): The asset or folder currently shown in the Details View.
  - id (`string`): Resource URN.
  - path (`string`): Resource path.
  - Matches the object returned by [`details.getCurrentResourceInfo()`](#host-api-reference).

**Returns:** (`array`) An array of button configuration objects. Each object contains:
- id (`string`): Unique identifier for the button within the extension
- label (`string`): Display text for the button
- icon (`string`): Name of the [React-Spectrum workflow icon](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons)
- onClick (`function`): Callback when the header menu button is clicked; receives `{ context, resource }`
- variant (`string`, optional): Button visual style, defaults to `'primary'`
  - Supported values: `'accent'`, `'primary'`, `'secondary'`, `'negative'`

**Example:**

```javascript
headerMenu: {
  async getButtons({ context, resource }) {
    return [
      {
        id: 'details-export',
        label: 'Export',
        icon: 'Download',
        variant: 'secondary',
        onClick: async ({ context, resource }) => {
          // resource is the asset or folder open in Details View
        },
      },
    ];
  },
},
```

`getHiddenButtonIds({ context, resource })`

**Description:** Returns an array of built-in header menu button ids to hide in the Details View. Supported ids are those listed for the `details` context in [Built-in header menu buttons](#built-in-header-menu-buttons).

The host calls this method when the asset or context relevant to the header menu changes. Return quickly; avoid slow or blocking work while the host resolves header menu button visibility.

**Returns:** (`array`) An array of built-in header menu button ids to hide, or an empty array if none should be hidden.

`overrideButton({ buttonId, context, resource })`

**Description:** Return `true` if the extension handled the click and the built-in header menu button handler should **not** run. Return `false` to let the Host run the default behavior.

**Parameters:**
- buttonId (`string`): Built-in header menu button id for the Details View; must be one of the ids listed for the `details` context in [Built-in header menu buttons](#built-in-header-menu-buttons).

**Returns:** (`boolean`) `false` for the Host to use the built-in handler, `true` to skip the built-in handler.



## Example of adding custom side panels

These code snippets demonstrate how to create a custom side panel using UIX SDK library and add it to the side rail
of the Details View. (The examples below serve illustrative purposes thus omit certain `import` statements and other
non-important parts.)

Here, the main application code defines three routes:
- the first two are the default routes which trigger the `ExtensionRegistration` component responsible for initial extension registration
within the AEM Assets View application.
- the `extension-template` route which invokes the `PanelExtensionTemplate` component responsible for rendering the 
custom panel content. This route gets called by the AEM Assets View application when the user clicks the custom panel icon.
During the registration the extension will specify `/#extension-template` as content location.

```js
function App() {
    return (
        <Router>
            <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
                <Routes>
                    <Route index element={<ExtensionRegistration />} />
                    <Route exact path="index.html" element={<ExtensionRegistration />} />
                    <Route path="extension-template" element={<PanelExtensionTemplate />} />
                    // YOUR CUSTOM ROUTES SHOULD BE HERE
                </Routes>
            </ErrorBoundary>
        </Router>
    );

    function onError(e, componentStack) {}

    function fallbackComponent({ componentStack, error }) {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
                    Extension rendering error
                </h1>
                <pre>{componentStack + '\n' + error.message}</pre>
            </React.Fragment>
        );
    }
}

export default App;
```

The `ExtensionRegistration` component initializes the extension registration process by calling the `register()` function 
provided by the `@adobe/uix-guest` library. 

The objects passed to the `register()` function describe the extension and its capabilities. In particular, it declares that the
extension uses the `detailSidePanel` namespace and its `getPanels` method, and may include the optional `headerMenu` namespace.
For `headerMenu`, all methods are optional; this example stubs out `getButtons`, `getHiddenButtonIds`, and `overrideButton`.

```js
function ExtensionRegistration() {
    const init = async () => {
        const guestConnection = await register({
            id: extensionId,
            methods: {
                detailSidePanel: {
                    getPanels() {
                        return [
                            {
                                'id': 'extension-template',
                                'tooltip': 'Extension Template',
                                'icon': 'Extension',
                                'title': 'Extension Template',
                                'contentUrl': '/#extension-template',
                                'reloadOnThemeChange': 'true',
                            },
                        ];
                    },
                },
                headerMenu: {
                    async getButtons({ context, resource }) {
                        return [];
                    },
                    async getHiddenButtonIds({ context, resource }) {
                        return [];
                    },
                    async overrideButton({ buttonId, context, resource }) {
                        return false;
                    },
                },
            },
        });
    };
    init().catch(console.error);

    return <Text>IFrame for integration with Host (AEM Assets View)...</Text>;
}

export default ExtensionRegistration;
```

To hide or override built-in header menu buttons in the Details View, add `getHiddenButtonIds` and/or `overrideButton` (and `getButtons` if you add custom buttons). For example, hide the built-in **Download** header menu button and take over the **Assign tasks** click (skipping the Host handler when you return `true`):

```js
headerMenu: {
    async getButtons({ context, resource }) {
        return [];
    },
    async getHiddenButtonIds({ context, resource }) {
        return ['download'];
    },
    async overrideButton({ buttonId, context, resource }) {
        if (buttonId === 'assignTasks') {
            // Custom assign-tasks flow; skip built-in handler
            return true;
        }
        return false;
    },
},
```

The `PanelExtensionTemplate` component is responsible for rendering the custom panel content. It uses the `attach()` function
provided by the `@adobe/uix-guest` library to establish a connection with the AEM Assets View and uses this connection object to
render a toast message within the AEM Assets View when the user clicks the "Click me!" button.

```js
export default function PanelExtensionTemplate() {
    // Fields
    const [guestConnection, setGuestConnection] = useState();
    const [colorScheme, setColorScheme] = useState('light');

    useEffect(() => {
        (async () => {
            const guestConnection = await attach({ id: extensionId });
            setGuestConnection(guestConnection);

            const { colorScheme } = await guestConnection.host.theme.getThemeInfo();
            setColorScheme(colorScheme);
        })()
    }, []);

    function displayToast(variant, message) {
        guestConnection.host.toast.display({ variant, message });
    }

    return (
        <Provider theme={defaultTheme} colorScheme={colorScheme} height={'100vh'}>
            <View backgroundColor="gray-50">
                <View padding="size-300">
                    <Text>Please visit <Link href="https://developer.adobe.com/uix/docs/">UI Extensibility documentation</Link> to get started.</Text>

                    <Flex justifyContent="center" marginTop="size-400">
                        <ButtonGroup>
                            <Button variant="primary" onPress={() => displayToast('neutral', 'Message from the Extension')}>Click me!</Button>
                        </ButtonGroup>
                    </Flex>
                </View>
            </View>
        </Provider>
    );
}
```
