---
title: AEM Assets View Extensibility
description: Learn how to customize AEM Assets View
contributors:
  - https://github.com/AdobeDocs/uix
---

# The AEM Assets View Extension Points

This section covers the utilization of the extension points, extension registration, and common methods that can be used in any application that leverages extension points for service customization.

<InlineAlert variant="info" slots="text" />

UI Extensibility is supported in Assets Ultimate only.

<InlineAlert variant="info" slots="text" />

To get access to Assets View UI extensibility,
[create and submit an Adobe Customer Support case](https://helpx.adobe.com/enterprise/using/support-for-experience-cloud.html).
You can provide documentation feedback by clicking "Log an issue".

## A single extension point for Assets View

AEM Assets View provides a unified extension point, `aem/assets/assetsview/1`, that combines Browse View and
Details View extensibility. A single extension registered under `aem/assets/assetsview/1` can customize both
screens — for example, adding an ActionBar action in the Browse View and a side panel in the Details View — from
one App Builder extension, one deployment, and one `register()` call.

The extensibility APIs are organized into **namespaces**, each covering a granular area of Assets View functionality:

| Namespace | Screen | Purpose |
|------------|------------|------------|
| [`actionBar`](browse-view/index.md#actionbar-namespace) | Browse View | Add, hide, or override ActionBar actions |
| [`quickActions`](browse-view/index.md#quickactions-namespace) | Browse View | Hide or override QuickActions menu actions |
| [`detailSidePanel`](details-view/index.md#detailsidepanel-namespace) | Details View | Add custom side panels to the side rail |
| [`headerMenu`](header-menu/index.md) | Browse View and Details View | Add, hide, or override header menu buttons |

Implement only the namespaces your extension needs. The pages below describe each namespace and its methods in detail.

<InlineAlert variant="info" slots="text" />

The standalone `aem/assets/browse/1` and `aem/assets/details/1` extension points remain supported for existing
extensions, but new extensions should use the unified `aem/assets/assetsview/1` extension point.

<DiscoverBlock slots="link, text"/>

[Common Concepts in Creating Extensions](commons/index.md)

Learn about common concepts, extension registration, and methods that can be used in any extension

<DiscoverBlock slots="link, text"/>

[Browse View](browse-view/index.md)

Explore the ways to extend and customize Browse View

<DiscoverBlock slots="link, text"/>

[Details View](details-view/index.md)

Explore the ways to extend and customize Details View
