---
title: Common Concepts - Content Hub Extensibility
description: Learn about extension registration and common Host APIs available to every Content Hub extension.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Common Concepts in Creating Extensions

This page explains the fundamentals shared by every Content Hub extension: the extension point, how to register an extension, and the Host APIs that are available to all surfaces.

## Extension Point

All Content Hub UI extensions use the `aem/assets/contenthub/1` extension point.

Declare it in your `app.config.yaml`:

```yaml
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

A typical `ext.config.yaml`:

```yaml
operations:
  view:
    - type: web
      impl: index.html
actions: actions
web: web-src
```

## Extension Registration

An extension announces its capabilities to Content Hub by calling `register()` from `@adobe/uix-guest`. This function is asynchronous and returns a connection object used to interact with the host.

All three namespaces (`assetDetails`, `card`, `selectionBar`) are declared in a single `register()` call.

Use `let` for `guestConnection` so the `card` and `selectionBar` click handlers can close over it after `register()` resolves.

```js
import { register } from '@adobe/uix-guest';

const init = async () => {
  let guestConnection = await register({
    id: extensionId,
    methods: {
      assetDetails: {
        getTabPanels() { /* ... */ },
      },
      card: {
        getActionButtons(actionContext) { /* ... */ },
        async onActionClick(resourceType, buttonId, resourceId, actionContext) { /* ... */ },
      },
      selectionBar: {
        getActionButtons(actionContext) { /* ... */ },
        async onActionClick(buttonId, assetIds) { /* ... */ },
      },
    },
  });
};
init().catch(console.error);
```

`register()` must be called from the extension's initialization page after it loads.

The object passed to `register()` must include:
- `id` — a unique string identifier for the extension (used for debugging and for `attach()` calls from panel/modal components).
- `methods` — namespaces that correspond to Content Hub extension surfaces.

## Restricting extensions to specific repositories

For production extensions you should restrict registration to specific Content Hub repositories. Content Hub injects the current repository ID as a `repo` query parameter on the extension URL.

```js
// Populate before deploying to Production. Empty = allow any repo (safe for dev).
const allowedRepos = [
  'delivery-p12345-e167890.adobeaemcloud.com',
];

function getRepo() {
  const search = new URLSearchParams(window.location.search);
  return search.get('repo');
}

function shouldSkipRegistration(repo) {
  return allowedRepos.length > 0 && !allowedRepos.includes(repo);
}

function ExtensionRegistration() {
  const repo = getRepo();
  if (shouldSkipRegistration(repo)) {
    return <Text>Skipped registration: repo not in allowedRepos</Text>;
  }
  // proceed with init() and register() ...
}
```

## Building Extension UI

Extension panels and modal dialogs are rendered inside iframes. A panel or dialog component calls `attach()` to get the connection object:

```js
import { attach } from '@adobe/uix-guest';

const guestConnection = await attach({ id: extensionId });
```

After attaching, the component can call Host APIs on `guestConnection.host`.

## Passing data to modal dialogs

The `modal.openDialog()` `contentUrl` is a hash-relative URL rendered inside an iframe. Pass data to a dialog via **URL query parameters** embedded in `contentUrl`:

```js
// In ExtensionRegistration.js — opening the dialog:
await guestConnection.host.modal.openDialog({
  title: 'My Dialog',
  contentUrl: `/#my-dialog?assetId=${encodeURIComponent(assetId)}`,
  type: 'modal',
  size: 'M',
});

// In the dialog component — reading the data:
const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
const assetId = params.get('assetId');
```

## Common APIs exposed by Content Hub to all extensions

The APIs below are available to every Content Hub extension regardless of which surface it extends. All API calls are asynchronous and return a `Promise`.

---

### Authentication API (`auth`)

#### `auth.getIMSInfo()`

**Description:** Returns IMS organization information and the current access token.

**Returns:**
- `imsOrg` (`string`): IMS organization identifier.
- `imsOrgName` (`string`): Human-readable IMS organization name.
- `accessToken` (`string`): Current IMS access token.

**Example:**

```js
const { imsOrg, imsOrgName, accessToken } = await guestConnection.host.auth.getIMSInfo();
```

#### `auth.getApiKey()`

**Description:** Returns the API key used by Content Hub.

**Returns** (`string`): API key.

**Example:**

```js
const apiKey = await guestConnection.host.auth.getApiKey();
```

---

### Discovery API (`discovery`)

#### `discovery.getAemHost()`

**Description:** Returns the AEM host URL of the delivery repository connected to this Content Hub instance.

**Returns** (`string`): Full AEM host URL including protocol and trailing slash (e.g. `https://delivery-p12345-e123456.adobeaemcloud.com/`).

**Example:**

```js
const aemHost = await guestConnection.host.discovery.getAemHost();
// e.g. "https://delivery-p12345-e123456.adobeaemcloud.com/"
```

---

### Toast API (`toast`)

#### `toast.display({ variant, message })`

**Description:** Shows a toast notification in Content Hub.

**Parameters:**
- `variant` (`string`, optional): `'neutral'`, `'positive'`, `'negative'`, or `'info'`. Defaults to `'info'`.
- `message` (`string`, required): Text to display.

**Example:**

```js
guestConnection.host.toast.display({ variant: 'positive', message: 'Asset exported successfully' });
```

---

### Internationalization API (`i18n`)

#### `i18n.getLocalizationInfo()`

**Description:** Returns the locale currently active in Content Hub.

**Returns:**
- `locale` (`string`): BCP 47 locale tag (e.g. `en-US`, `fr-FR`).

**Example:**

```js
const { locale } = await guestConnection.host.i18n.getLocalizationInfo();
```

---

### Modal API (`modal`)

#### `modal.openDialog(options)`

**Description:** Opens a dialog. The dialog content is loaded from `contentUrl`.

**Parameters (`options` object):**
- `title` (`string`, optional): Dialog heading.
- `contentUrl` (`string`, required): Hash-relative URL to the dialog content page within the extension (e.g. `/#my-dialog`). To pass data, either embed it as URL query parameters (e.g. `/#my-dialog?assetId=...`) or use the `payload` field below.
- `type` (`string`, optional): `'modal'` (default) or `'fullscreen'`.
- `size` (`string`, optional): `'S'`, `'M'` (default), or `'L'`. Ignored when `type` is `'fullscreen'`.
- `payload` (`any`, optional): Arbitrary data object the dialog component can retrieve with `modal.getPayload()`.

**Recommended pattern — pass data via URL query parameters** (simpler, synchronous, works without async `getPayload()` round-trip):

```js
await guestConnection.host.modal.openDialog({
  title: 'Custom Export',
  contentUrl: `/#export-dialog?assetId=${encodeURIComponent(assetId)}`,
  type: 'modal',
  size: 'M',
});

// Inside the dialog component — read from the URL:
const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
const assetId = params.get('assetId');
```

**Alternative — pass data via `payload`:**

```js
// In ExtensionRegistration.js — opening the dialog with a payload:
await guestConnection.host.modal.openDialog({
  title: 'Custom Export',
  contentUrl: '/#export-dialog',
  type: 'modal',
  size: 'M',
  payload: { assetId },
});
```

```js
// Inside the dialog component — attach() first, then read the payload:
const connection = await attach({ id: extensionId });
const { assetId } = await connection.host.modal.getPayload();
```

#### `modal.closeDialog()`

**Description:** Closes the currently active dialog.

**Example:**

```js
guestConnection.host.modal.closeDialog();
// or using optional chaining from a dialog component:
guestConnection?.host.modal.closeDialog();
```

#### `modal.getPayload()`

**Description:** Returns the payload object passed when `modal.openDialog()` was called. Call this from the dialog component after `attach()`.

**Returns:** The payload value passed in `openDialog({ payload })`, or `undefined` if no payload was provided.

**Example:**

```js
// In the dialog component:
const connection = await attach({ id: extensionId });
const payload = await connection.host.modal.getPayload();
```
