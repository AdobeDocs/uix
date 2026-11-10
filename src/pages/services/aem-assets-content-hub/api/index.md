---
title: The AEM Assets Content Hub Extension Point
description: Learn how to use the extension point available in AEM Assets Content Hub.
contributors:
  - https://github.com/AdobeDocs/uix
---

# The AEM Assets Content Hub Extension Point

This section covers the utilization of the extension point, extension registration, and common methods that can be used in any application that leverages the extension point for Content Hub customization.

## A single extension point for Content Hub

AEM Assets Content Hub provides a unified extension point, `aem/assets/contenthub/1`, that combines Asset Details, Asset Card, Collection Card, and Selection Bar customization. A single extension registered under `aem/assets/contenthub/1` can customize all four areas from one App Builder extension, one deployment, and one `register()` call.

The extensibility APIs are organized into namespaces, each covering an area of Content Hub functionality:

| Namespace | Area | Purpose |
| --- | --- | --- |
| [`assetDetails`](asset-details/index.md) | Asset Details | Add a custom panel to Asset Details. |
| [`card`](card-actions/index.md) | Asset Cards and Collection Cards | Add actions using the `assets` context for Asset Cards and the `collections` context for Collection Cards. |
| [`selectionBar`](selection-bar/index.md) | Selection Bar | Add actions for workflows that operate on selected assets. |

Implement only the namespaces your extension needs. The pages below describe each namespace and its methods in detail.

<DiscoverBlock slots="link, text"/>

[Common Concepts in Creating Extensions](commons/index.md)

Learn about extension registration, host communication, and methods that can be used in any extension.

<DiscoverBlock slots="link, text"/>

[Asset Details](asset-details/index.md)

Explore how to add a custom panel to Asset Details.

<DiscoverBlock slots="link, text"/>

[Card Actions](card-actions/index.md)

Explore how to add actions to Asset Cards and Collection Cards.

<DiscoverBlock slots="link, text"/>

[Selection Bar](selection-bar/index.md)

Explore how to add actions for workflows that operate on selected assets.