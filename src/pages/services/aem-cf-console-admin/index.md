---
title: Overview - AEM Content Fragments Console Extensibility
description: Meet Content Fragments console, multitenant UI service for managing Adobe Experience Manager Content Fragments
contributors:
  - https://github.com/AdobeDocs/uix
---

# AEM Content Fragments Console Overview

Meet Content Fragments console, multitenant UI service for managing Adobe Experience Manager Content Fragments.

The [Content Fragments console](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/administering/content-fragments/content-fragments-console.html) is a multitenant [Experience Cloud](https://experience.adobe.com/) service that is connected to [Adobe Experience Manager as a Cloud Service](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/introduction/what-is-aem-as-a-cloud-service.html) environment and allows users to fetch and manage content fragments.

The Content Fragments console optimizes access to your Content Fragments, helping you create, search, and manage them by taking administrative actions such as publish, unpublish, copy.

The Content Fragments console is dedicated to managing, searching for, and creating Content Fragments. It has been optimized for use in a Headless context, but is also used when creating Content Fragments for use in page authoring.

![Contents Fragment Console](cfc-console-overview.png)

As Content Fragments console is a multitenant service, [traditional approach with AEM development](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/local-development-environment-set-up/overview.html) does not work as it is not possible introduce changes isolated to a single tenant.

UI Extensibility allows 3rd party developers to extend and customize Content Fragments console with modern front-end technology stack with JavaScript, Node.js and React. No Java needed!
