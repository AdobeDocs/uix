This is a [UI extensibility extension](https://github.com/adobe/aem-uix-examples/blob/main/content-fragment-export-to-target/README.md) that demonstrates how to use the [Adobe I/O App Builder](https://developer.adobe.com/app-builder/docs/overview/) to
export [Content Fragments](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/authoring/fundamentals/content-fragments.html?lang=en), created in Adobe Experience Manager as a Cloud Service (AEM),
to Adobe Target (Target). They can then be used as offers in Target activities, to test and personalize experiences at scale.

> **CAUTION**: This extension is intended to be used with AEM as a Cloud Service and Target Standard/Premium.
It is not compatible with AEM 6.5 and Target Classic.

##  AEM Instance Setup

[Integrate with Adobe Target](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/integrations/integrating-adobe-target.html?lang=en)

[Add the Cloud Configuration](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/integrations/content-fragments-target.html?lang=en#add-the-cloud-configuration)

[Add the Legacy Configuration](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/integrations/content-fragments-target.html?lang=en#add-the-legacy-configuration)


## Available Actions

[Exporting a Content Fragment to Adobe Target](#exporting-a-content-fragment-to-adobe-target)

[Use your Content Fragments in Adobe Target](#using-your-content-fragments-in-adobe-target)

And also [Delete a Content Fragment already exported to Adobe Target](#deleting-a-content-fragment-already-exported-to-adobe-target)

Content Fragments can be exported to the default workspace in Adobe Target, or to user-defined workspaces for Adobe Target.

> **NOTE**:
The Adobe Target workspaces do not exist in Adobe Target itself. They are defined and managed in Adobe IMS (Identity Management System), then selected for usage across solutions using Adobe Developer Console.


> **NOTE**:
Adobe Target workspaces can be used to allow members of an organization (group) to create and manage offers and activities for this organization only; without giving access to other users. For example, country-specific organizations within a global concern.



### Exporting a Content Fragment to Adobe Target

> **CAUTION**
For media assets, such as images, only a reference is exported to Target. The asset itself remains stored in AEM Assets and is delivered from the AEM publish instance.
Due to this the Content Fragment, with all related assets, must be published before exporting to Target.

To export a Content Fragment from AEM to Target (after specifying the Cloud Configuration):
1. Navigate to your Content Fragment in the [AEM Content Fragments Console](https://developer.adobe.com/uix/docs/services/aem-cf-console-admin/)
2. Select the Content Fragment you would like to export to target.
3. Select Export to Adobe Target Offers.

![export_to_adobe_target](https://github.com/adobe/aem-uix-examples/assets/7125318/97812aeb-1da3-4a21-ab4e-6d061da0cb18)



### Using your Content Fragments in Adobe Target

After performing the preceding tasks, the Content Fragment displays on the Offers page in Target. See [specific Target documentation](https://experienceleague.adobe.com/docs/target/using/integrate/aem/fragments/content-fragments-aem.html?lang=en) to learn about what you can achieve there.

> **NOTE**
When viewing a Content Fragment in Adobe Target, the last modified date that is seen is the date that the fragment was last modified in AEM, not the date that the fragment was last exported to Adobe Target.


### Deleting a Content Fragment already exported to Adobe Target

As with exporting, deleting a content fragment from Adobe Target can also be selected from the top toolbar of the Assets console once the fragment has been selected:

![Delete_from_adobe_target](https://github.com/adobe/aem-uix-examples/assets/7125318/fead4d4c-f2bf-406c-a7d1-e3624243a7ac)


Deleting a content fragment that has already been exported to Target may cause problems if the fragment is already being used in an offer in Target. Deleting the fragment would render the offer unusable as the fragment content is being delivered by AEM.

To avoid such situations:

* If the Content Fragment is not being currently used in an activity, AEM allows the user to delete the fragment without a warning message.

* If the Content Fragment is currently in use by an activity in Target, an error message warns the AEM user about possible consequences that deleting the fragment will have on the activity.

The error message in AEM does not prohibit the user from (force-)deleting the Content Fragment. If the Content Fragment is deleted:

* The Target offer with AEM Content Fragment may show undesired behavior
    * The offer will likely still render, as the Content Fragment was pushed to Target
    * Any references in the Content Fragment may not work correctly if referenced assets were deleted in AEM as well.
* Of course, any further modifications to the Content Fragment are impossible as the Content Fragment does not exist anymore in AEM.


