---
title: Why I Need It - UI Extensibility
description: Know why UI Extensibility may be a good solution for you
contributors:
  - https://git.corp.adobe.com/dx-devex-acceleration/uix-docs
---

# Why I Need It

UI Extensibility allows you to bring your custom logic and UI into Adobe Experience Cloud services without modifying them.

Adobe Experience Cloud has a long successful history of delivering products and services that may be tuned to any business needs.

Traditionally, software was extended and customized by direct injection of 3rd party modules, plugins, etc. into the code base in a way that custom code became an integral part of the solution. Usually introduction modification of customizations required full regression testing and redeployment of the system. This approach has proven to be powerful and flexible. However, it has some drawbacks:

- tight integration between Adobe provided and custom code may decrease reliability
- big amount of custom code usually complicate and delay upgrades
- each tenant has its instance and carries expenses related to its running and maintaining

Therefore, to answer these challenges, Adobe Experience Cloud [brings solutions](https://developer.adobe.com/app-builder/) that allow 3rd party developers to extend and customize services with distributed microservices that interact with Adobe running systems through API.

Being a common-purpose extensibility mechanism App Builder offers 2 ways in delivering UI that serves the specific needs of your business:

1. Create stand-alone [SPA (Single Page Applications) for Adobe Experience Cloud](https://developer.adobe.com/app-builder/docs/guides/exc_app/) that interacts with Adobe services through API so you can have full control of your users' experience.
2. Inject your own logic into the UI of existing Adobe Services so you can leverage what is already available and bring parts unique to your business without writing a lot of code.

Both mechanisms allow 3rd party developers to implement custom functionality with the usage of a modern front-end technology stack regardless of the technology used for Adobe products.
