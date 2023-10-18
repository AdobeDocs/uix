---
title: AEM Labs feature highlights
description: Explore the features of AEM Labs
contributors:
  - AdobeDocs/uix
---
# AEM Labs Feature Highlights

## Navigate Extensions
[AEM Labs](https://experience.adobe.com/aem/extension-manager) provides a centralized listing of extensions, accessible when you select a specific program and environment. This listing gives a comprehensive view of all available extensions for your organization, complete with their statuses, such as `Published` or `Draft`.
![List extensions](list.png)

## Enabling/Disabling Extensions
[AEM Labs](https://experience.adobe.com/aem/extension-manager) gives the ability to enable or disable extensions on a per-instance basis. This means you can easily turn extensions on or off for specific AEM instances, granting you the flexibility to adapt features as needed. The process is straightforward – just toggle a switch in the extensions view. 
![Enable extension](toggle.png)

## Access Experimental Features
[AEM Labs](https://experience.adobe.com/aem/extension-manager) opens the door for developers to access AEM innovations through 1st-party extensions crafted by Adobe. These extensions bear the distinct label `Developed by Adobe`. 
![1st-party extension](1st-party-extension.png)
This means you can confidently explore and experiment with the latest features and enhancements, ensuring you stay at the forefront of AEM's capabilities without compromising the core releases.

## Configuring Extension Parameters
[AEM Labs](https://experience.adobe.com/aem/extension-manager) simplifies the process of adjusting extension configurations, specifically web parameters, without the need for repetitive extension deployments. Here's how to configure extension parameters:

1. Click `Gears` icon in the `Action` column
   ![Configure the extension](config-action.png)
3. Click `Add variable` button
4. Define the `Key` and corresponding `Value` for your parameter.
   ![Configuration screen](configuration.png)
5. With your parameters configured, you can now access these values using the [UIX SDK](https://github.com/adobe/uix-sdk) within your extension.
   
This streamlined process allows you to fine-tune your extension settings without the hassle of repeated deployments, putting control and customization in your hands.

## Extension Preview and Sharing
[AEM Labs](https://experience.adobe.com/aem/extension-manager) provides a safe playground to preview extensions before enabling them for the entire environment and the ability to easily share these previews.

### Preview Extensions
To preview extensions without installing them, simply click the preview icon found in the `Action` column. This action will open the Content Fragment Console, allowing you to explore the extension within the selected environment.
![Preview extension](preview.png)

### Share with Teammates
You can easily share these previews with your team by selecting `Copy shareable link` from the `Action` column. 
![Copy link](copy-link.png)

When your teammates open the link, they'll be prompted to choose a program and environment for previewing the selected extension. 
![Preview share](preview-share.png)

This collaborative feature ensures that your team can collectively evaluate and experiment with extensions before making them fully operational.

## BYO (Bring Your Own) Extensions
With [AEM Labs](https://experience.adobe.com/aem/extension-manager), you can register your extensions into the system and start using them, regardless of where they were initially deployed. Here's how to bring your own extensions into [AEM Labs](https://experience.adobe.com/aem/extension-manager):

1. Open [AEM Labs home page](https://experience.adobe.com/aem/extension-manager). From there, click on the `Bring Your Own Extension` option.
2. Fill out the required fields, with a particular focus on providing the `Extension URL`.
![BYO extension](byo-extension.png)

An important note to keep in mind: Your extension can be hosted anywhere, as long as it utilizes the [UIX SDK Guest library](https://github.com/adobe/uix-sdk#usage---guests). 

This flexibility ensures that you can seamlessly incorporate your own extensions into the AEM environment, enhancing your experience with your unique tools and features.


