---
title: Overview - AEM Assets Content Hub Extensibility
description: Learn how to extend AEM Assets Content Hub with custom user interface components and actions.
contributors:
  - https://github.com/AdobeDocs/uix
---

# AEM Assets Content Hub Overview

[AEM Assets Content Hub](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/content-hub/product-overview) provides a branded portal for teams to discover, use, and distribute approved digital assets. It offers an intuitive interface designed for broader access to governed assets, with a focus on search, collections, sharing, and download.

UI Extensibility allows third-party developers to extend and customize AEM Assets Content Hub with a modern front-end technology stack using JavaScript, Node.js, and React.

AEM Assets Content Hub exposes a single, unified extension point, `aem/assets/contenthub/1`, that lets one extension add a custom panel to Asset Details, actions to Asset Cards and Collection Cards, and actions to the Selection Bar. In this section, you will find the available [extension point](api/index.md) and examples of how to use it.

<InlineAlert variant="info" slots="text" />

Start development with the [AEM Assets Content Hub sample application](https://github.com/adobe/aem-uix-examples/tree/main/aem-assets-contenthub-sample), follow the [step-by-step development guide](extension-development/index.md), and review [troubleshooting guidance](debug/index.md).