---
title: Content Hub Extensibility
description: Extend Content Hub with custom UI panels, tab panels, card actions, and bulk-action buttons using Adobe App Builder and the UIX SDK.
contributors:
  - https://github.com/AdobeDocs/uix
---

# Content Hub Extensibility

Content Hub supports UI extensibility through [Adobe App Builder](https://developer.adobe.com/app-builder/docs/overview/) and the [UIX SDK](https://developer.adobe.com/uix/docs/). Extensions add custom surfaces to Content Hub without modifying its source code.

All Content Hub extensions use the **`aem/assets/contenthub/1`** extension point.

## Available extension surfaces

<DiscoverBlock slots="link, text"/>

[Asset Card Actions](api/asset-card/index.md)

Add custom action buttons to asset cards in the Assets grid, inside Collections, and in-app Link Share

<DiscoverBlock slots="link, text"/>

[Collection Card Actions](api/collection-card/index.md)

Add custom action buttons to collection tiles on the Collections grid

<DiscoverBlock slots="link, text"/>

[Asset Details Tab Panels](api/asset-details/index.md)

Add custom tab panels to the Asset Details dialog that opens when a user clicks on an asset

<DiscoverBlock slots="link, text"/>

[Selection Bar Actions](api/selection-bar/index.md)

Add custom bulk-action buttons to the Selection Bar that appears when one or more assets are selected

## Guides

<DiscoverBlock slots="link, text"/>

[Common Concepts](api/commons/index.md)

Extension registration, Host APIs, and patterns shared by every Content Hub extension

<DiscoverBlock slots="link, text"/>

[Step-by-step Extension Development](extension-development/index.md)

Build and deploy a complete Content Hub extension from scratch

<DiscoverBlock slots="link, text"/>

[Code Generation](code-generation/index.md)

Get started quickly by cloning the official Content Hub sample extension

<DiscoverBlock slots="link, text"/>

[Troubleshooting](debug/index.md)

Run your extension locally and connect it to Content Hub for fast iteration
