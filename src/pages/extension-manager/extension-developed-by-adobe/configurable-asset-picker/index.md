---
title: Universal Editor Custom Asset Picker
description: Create a configurable, custom asset picker for Universal Editor that tailored to your need by simply providing a JSON configuration file.
contributors:
  - AdobeDocs/uix
---

# Universal Editor Custom Asset Picker

This extension allows creating a configurable, custom asset picker for Universal Editor that is tailored to your need by simply providing a JSON configuration file. Relevant crosswalk project needs to follow certain guidelines.
It's useful in case where we want to enable authors to select assets of certain file types, image sizes, only from specified repositories etc.

## Extension Overview
![Asset picker](asset-picker-extension.gif)

This extension enhances [Universal Editor](../../../services/aem-universal-editor/) properties panel for media elements. It replaces standard asset picker with a custom version of asset picker, with provided configuration applied while selecting assets.

The extension will enable you to list the repositories your authors will be able to pick from.

Configuration also supports following types of filters:
- File type (Images, Video etc.)
- Asset size (height, width)

## Configuration in Edge Delivery Site

Adding a component for author in crosswalk site is like adding any other custom component, with some added fields. A sample custom component `Custom Image One` will have following code in files:

### A New Component Model in `component-models.json`

```
[
...
	{
	    "id": "custom-asset-one",
	    "fields": [
	      {
	        "component": "custom-asset-namespace:custom-asset",
	        "name": "image",
	        "label": "Image",
	        "configUrl": "https://main--xwalk-test-gems--githubusername.hlx.page/tools/assets-selector/image.config.json",
	        "valueType": "string"
	      },
	      {
	        "component": "custom-asset-namespace:custom-asset-mimetype",
	        "valueType": "string",
	        "name": "imageMimeType"
	      },
	      {
	        "component": "text",
	        "name": "imageAlt",
	        "label": "Alt Text",
	        "valueType": "string"
	      }
	    ]
	  }
]
```

- `id`: can be any value.
- `Image component`: must have `custom-asset-namespace:custom-asset` value, because it has been overridden in the extension to display customized asset selector popup.
- `configUrl`: points to JSON configuration file, can be hosted anywhere you prefer. Must be accessible to the extension, which runs in author's web browser. Extension will fetch this JSON file and configure asset picker for this component accordingly.
- `imageMimeType component`: must have `custom-asset-namespace:custom-asset-mimetype` value, because it has been overridden in the extension to contain selected asset MIME Type.
- `Alt-Text component`: Optional, it's like any other additional component you may want to add.

This model is necessary for custom asset picker to show up when user clicks on its option it in properties panel.

### A New Definition in `component-definition.json`

```
{
  "groups": [
    …
    {
      "title": "Blocks",
      "id": "blocks",
      "components": [
       …
        {
          "title": "Custom Image One",
          "id": "custom-asset-one",
          "plugins": {
            "xwalk": {
              "page": {
                "resourceType": "core/franklin/components/block/v1/block",
                "template": {
                  "name": "Custom Image One",
                  "model": "custom-asset-one"
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

Note that the value of model is the id of model we created in `component-models.json`
- `title` will show up as component name in `➕` (add component) button menu present on right side panel of universal editor.

## Entry in `component-filters.json`

```
[
  …
  {
    "id": "section",
    "components": [
      "text",
      "image",
      "button",
      …
      "custom-asset-one"
    ]
  }
]
```
## Overriding name of component for using custom asset picker
in `component-models.json` file, the component property need to have component as `custom-asset-namespace:custom-asset` and `custom-asset-namespace:custom-asset-mimetype`. 
If desired, this can be overridden by following method: 
- [Adding a parameter in extension configuration](https://developer.adobe.com/uix/docs/extension-manager/feature-highlights/#configuring-extension-parameters) with key as `asset-namespace` and any desired value (e.g. `my-namespace`). 
- Use `my-namespace:custom-asset` and `my-namespace:custom-asset-mimetype` instead of above values in `component-models.json`.


## Configuration File
This is sample asset picker configuration file that allows filtering assets by image-only file type and asset width between 0 - 1000px. It also has some other configuration fields which are self-explanatory.

```
{
    "repoNames": [
      "author-p7452-e733061.adobeaemcloud.com",
      "delivery-p130360-e1272151.adobeaemcloud.com",
    ]
}
```

## Limitations
- This custom asset picker can only be opened by clicking on selector in its properties panel. Unlike default asset picker, we can't click the asset to open it.