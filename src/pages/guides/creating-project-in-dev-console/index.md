---
title: Creating a project in Adobe Developer Console
description: Discover how to create a project in Adobe Developer Console
contributors:
  - AdobeDocs/uix
---

# Create a project in Adobe Developer Console

UI Extensions, as any App Builder application, are represented as projects in [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/).

<InlineAlert slots="text" />

If you don't have access to the Adobe Developer Console, refer to the [How to Get Access](../../../guides/get-access) guide for instructions.

To begin, we need to create a new Project that will provide us with the necessary configuration and resources.

1. Sign in to [Adobe Developer Console](https://developer.adobe.com/console) with your Adobe ID.

![Sign in to Adobe Developer Console](create-project-1.png)

2. Choose your account.

![Choose your account](create-project-2.png)

3. Choose your profile or organization.

![Choose your profile](create-project-3.png)

3. Make sure you are in a proper organization (a switcher in the right top corner).

![Check organization](create-project-4.png)

4. Click "Create new project" -> "Project from template":

![Create project from template](create-project-5.png)

And choose "App Builder":

![Choose "App Builder"](create-project-6.png)

5. Fill the project data.

![Fill the project data](create-project-7.png)

- `Project Title` is used to identify your project within [Adobe Developer Console](https://developer.adobe.com/console) and in [CLI](https://github.com/adobe/aio-cli).
- `App Name` will be used as a unique identifier for your application and this value cannot be changed after project creating.

After creating, you should see a new project generated with 2 default Workspaces.
Each App Builder project has two default workspaces: `Production` and `Stage`. You can add more workspaces as needed.
The `Production` workspace is special, as it is used for the submission and distribution flow.

![A new project with 2 default Workspaces](create-project-8.png)
