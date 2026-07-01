---
title: Sample Extension - Content Hub Extensibility
description: Get started quickly by cloning the Content Hub sample extension from adobe/aem-uix-examples.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Content Hub Sample Extension

The quickest way to start building a Content Hub extension is to clone the official sample from [adobe/aem-uix-examples](https://github.com/adobe/aem-uix-examples). The sample is a working App Builder project that demonstrates all three extension surfaces — Asset Details tab panels, asset card actions, and Selection Bar bulk actions — in a single extension.

Clone it, run it locally, then delete the parts you don't need and replace the rest with your business logic.

## Prerequisites

- Node.js 18 or higher
- [Adobe I/O CLI](https://developer.adobe.com/runtime/docs/guides/tools/cli_install/): `npm install -g @adobe/aio-cli`
- An Adobe Developer Console account with an App Builder project (I/O Runtime must be enabled on the project)
- Access to a Content Hub environment with the extensibility feature flag enabled

## Clone the sample

```shell
git clone https://github.com/adobe/aem-uix-examples.git
cd aem-uix-examples/aem-contenthub-sample
```

## Project structure

```text
aem-contenthub-sample/
├── app.config.yaml
├── extension-manifest.json
├── hooks/
│   └── post-deploy.js
├── package.json
└── src/
    └── aem-assets-contenthub-1/
        ├── actions/
        │   └── generic/
        │       └── index.js          ← server-side web action (optional)
        ├── ext.config.yaml
        └── web-src/
            └── src/
                └── components/
                    ├── App.js                    ← routing
                    ├── Constants.js              ← extension ID
                    ├── ExtensionRegistration.js  ← registers all namespaces
                    ├── TabPanel.js               ← assetDetails tab panel
                    ├── CardActionModal.js        ← card action modal
                    └── SelectionBarModal.js      ← selection bar modal
```

```yaml
# app.config.yaml — declares the extension point
extensions:
  aem/assets/contenthub/1:
    $include: src/aem-assets-contenthub-1/ext.config.yaml
```

`ExtensionRegistration.js` is the entry point — it registers all three namespaces with Content Hub. `App.js` maps URL routes to each panel or modal component.

## Setup and run locally

```shell
# 1. Install dependencies
npm install

# 2. Log in to Adobe I/O
aio login

# 3. Select your org, project, and workspace
aio console org select
aio console project select
aio console workspace select

# 4. Link the app to the selected project and populate .env
aio app use -g

# 5. Start the local dev server (https://localhost:9080)
aio app run
```

## Accept the self-signed certificate

The first time you run the dev server, open `https://localhost:9080` in your browser and accept the certificate (click **Advanced → Proceed to localhost**, or type `thisisunsafe` on the warning page).

You only need to do this once per browser session.

## Load the extension in Content Hub

Open Content Hub with `devMode=true` and `ext=` pointing to your local server:

```text
https://experience.adobe.com/?devMode=true&ext=https://localhost:9080#/assets/contenthub/
```

## Verify each surface

**Asset Details tab panel (`assetDetails`)**
1. Click any asset to open the Asset Details dialog
2. Look for the **"Asset Details Tab"** in the side rail
3. Click it — the panel loads and displays the asset's URN

**Asset card action (`card`)**
1. Hover over any asset card — a **"Card Action"** button appears
2. Click it — a modal opens showing the resource type and ID

**Collection tile action (`card`)**
1. Navigate to the Collections grid
2. Hover over a collection tile — a **"Collection Action"** button appears
3. Click it — a modal opens showing `resourceType: collection`

**Selection Bar bulk action (`selectionBar`)**
1. Select one or more assets
2. The Selection Bar appears — click **"Bulk Action"**
3. A modal opens listing all selected asset URNs

## Customize the sample

Open `ExtensionRegistration.js` and edit the three namespace blocks to implement your logic. Remove any namespace block you don't need, and delete the matching route from `App.js` and the matching component file.

For a detailed walkthrough of each surface and its API, see the [Extension Development guide](../extension-development/index.md) and the [API reference](../api/index.md).

## Restrict to specific repositories

`ExtensionRegistration.js` has an `allowedRepos` array that is empty by default — the extension registers for any Content Hub repository, which is correct for local development. Before deploying to Production, add your delivery repository IDs:

```js
const allowedRepos = [
  'delivery-p12345-e167890.adobeaemcloud.com',
];
```

## Deploy

```shell
# Deploy to Stage
aio app use -w Stage
aio app deploy

# Deploy to Production
aio app use -w Production
aio app deploy
```

After deploying to Production, approve the extension in [Extension Manager](https://experience.adobe.com/aem/extension-manager) to make it visible to all users without the `ext=` parameter.

## Additional resources

- [Step-by-step Extension Development](../extension-development/index.md)
- [API Reference](../api/index.md)
- [Troubleshooting](../debug/index.md)
