"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[1986],{98128:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return p}});var t=i(87462),o=i(45987),a=(i(15007),i(64983)),s=i(91515);const m=["components"],l={},d={_frontmatter:l},r=s.Z;function p(e){let{components:n}=e,i=(0,o.Z)(e,m);return(0,a.mdx)(r,(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"universal-editor-custom-asset-picker"},"Universal Editor Custom Asset Picker"),(0,a.mdx)("p",null,"This extension allows creating a configurable, custom asset picker for Universal Editor that is tailored to your need by simply providing a JSON configuration file. Relevant crosswalk project needs to follow certain guidelines.\nIt's useful in case where we want to enable authors to select assets of certain file types only from specified repositories etc."),(0,a.mdx)("h2",{id:"extension-overview"},"Extension Overview"),(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"/uix/assets/64b279332d31adfc84d6c931c06bb1a4/asset-picker-extension.gif",alt:"Asset picker"})),(0,a.mdx)("p",null,"This extension enhances ",(0,a.mdx)("a",{parentName:"p",href:"../../../services/aem-universal-editor/"},"Universal Editor")," properties panel for media elements. It replaces standard asset picker with a custom version of asset picker, with provided configuration applied while selecting assets."),(0,a.mdx)("p",null,"The extension will enable you to list the repositories your authors will be able to pick from."),(0,a.mdx)("p",null,"Configuration also supports following types of filters:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"File type (Images, Video etc.)"),(0,a.mdx)("li",{parentName:"ul"},"Repository type (author, delivery)")),(0,a.mdx)("h2",{id:"configuration-in-edge-delivery-site"},"Configuration in Edge Delivery Site"),(0,a.mdx)("p",null,"Adding a component for author in crosswalk site is like adding any other custom component, with some added fields. A sample custom component ",(0,a.mdx)("inlineCode",{parentName:"p"},"Custom Image One")," will have following code in files:"),(0,a.mdx)("h3",{id:"a-new-component-model-in-component-modelsjson"},"A New Component Model in ",(0,a.mdx)("inlineCode",{parentName:"h3"},"component-models.json")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'[\n...\n    {\n        "id": "custom-asset-one",\n        "fields": [\n          {\n            "component": "custom-asset-namespace:custom-asset",\n            "name": "image",\n            "label": "Image",\n            "configUrl": "https://main--xwalk-test-gems--githubusername.hlx.page/tools/assets-selector/image.config.json",\n            "valueType": "string"\n          },\n          {\n            "component": "custom-asset-namespace:custom-asset-mimetype",\n            "valueType": "string",\n            "name": "imageMimeType"\n          },\n          {\n            "component": "text",\n            "name": "imageAlt",\n            "label": "Alt Text",\n            "valueType": "string"\n          }\n        ]\n      }\n]\n')),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"id"),": can be any value."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Image component"),": must have ",(0,a.mdx)("inlineCode",{parentName:"li"},"custom-asset-namespace:custom-asset")," value, because it has been overridden in the extension to display customized asset selector popup."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"configUrl"),": points to JSON configuration file, can be hosted anywhere you prefer. Must be accessible to the extension, which runs in author's web browser. Extension will fetch this JSON file and configure asset picker for this component accordingly."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"imageMimeType component"),": Optional ",(0,a.mdx)("inlineCode",{parentName:"li"},"custom-asset-namespace:custom-asset-mimetype")," value, it has been overridden in the extension to contain selected asset MIME Type. Please note that if mime type is set to image/* or for relative paths that resolve to an asset in AEM and is known to be an image, the asset is rendered using edge delivery services. In case you require the asset to be rendered using ","[Dynamic Media with OpenAPI capabilities]"," (",(0,a.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/dynamicmedia/dynamic-media-open-apis/dynamic-media-open-apis-overview"},"https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/dynamicmedia/dynamic-media-open-apis/dynamic-media-open-apis-overview"),"), select the asset from delivery repository and make sure the imageMimeType is not present in the model."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Alt-Text component"),": Optional, it's like any other additional component you may want to add.")),(0,a.mdx)("p",null,"This model is necessary for custom asset picker to show up when user clicks on its option it in properties panel."),(0,a.mdx)("h3",{id:"a-new-definition-in-component-definitionjson"},"A New Definition in ",(0,a.mdx)("inlineCode",{parentName:"h3"},"component-definition.json")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'{\n  "groups": [\n    …\n    {\n      "title": "Blocks",\n      "id": "blocks",\n      "components": [\n       …\n        {\n          "title": "Custom Image One",\n          "id": "custom-asset-one",\n          "plugins": {\n            "xwalk": {\n              "page": {\n                "resourceType": "core/franklin/components/block/v1/block",\n                "template": {\n                  "name": "Custom Image One",\n                  "model": "custom-asset-one"\n                }\n              }\n            }\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.mdx)("p",null,"Note that the value of model is the id of model we created in ",(0,a.mdx)("inlineCode",{parentName:"p"},"component-models.json")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"title")," will show up as component name in ",(0,a.mdx)("inlineCode",{parentName:"li"},"➕")," (add component) button menu present on right side panel of universal editor.")),(0,a.mdx)("h2",{id:"entry-in-component-filtersjson"},"Entry in ",(0,a.mdx)("inlineCode",{parentName:"h2"},"component-filters.json")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'[\n  …\n  {\n    "id": "section",\n    "components": [\n      "text",\n      "image",\n      "button",\n      …\n      "custom-asset-one"\n    ]\n  }\n]\n')),(0,a.mdx)("h2",{id:"overriding-name-of-component-for-using-custom-asset-picker"},"Overriding name of component for using custom asset picker"),(0,a.mdx)("p",null,"in ",(0,a.mdx)("inlineCode",{parentName:"p"},"component-models.json")," file, the component property need to have component as ",(0,a.mdx)("inlineCode",{parentName:"p"},"custom-asset-namespace:custom-asset")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"custom-asset-namespace:custom-asset-mimetype"),".\nIf desired, this can be overridden by following method: "),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/uix/docs/extension-manager/feature-highlights/#configuring-extension-parameters"},"Adding a parameter in extension configuration")," with key as ",(0,a.mdx)("inlineCode",{parentName:"li"},"asset-namespace")," and any desired value (e.g. ",(0,a.mdx)("inlineCode",{parentName:"li"},"my-namespace"),"). "),(0,a.mdx)("li",{parentName:"ul"},"Use ",(0,a.mdx)("inlineCode",{parentName:"li"},"my-namespace:custom-asset")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"my-namespace:custom-asset-mimetype")," instead of above values in ",(0,a.mdx)("inlineCode",{parentName:"li"},"component-models.json"),".")),(0,a.mdx)("h2",{id:"configuration-file"},"Configuration File"),(0,a.mdx)("p",null,"This is sample asset picker configuration file that allows filtering assets by image-only file type and asset width between 0 - 1000px. It also has some other configuration fields which are self-explanatory."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'{\n    "repoNames": [\n      "author-p7452-e733061.adobeaemcloud.com",\n      "delivery-p130360-e1272151.adobeaemcloud.com",\n    ],\n   "aemTierType": [\n        "delivery",\n        "author"\n    ]\n}\n')),(0,a.mdx)("h2",{id:"limitations"},"Limitations"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"This custom asset picker can only be opened by clicking on selector in its properties panel. Unlike default asset picker, we can't click the asset to open it.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-extension-manager-extension-developed-by-adobe-configurable-asset-picker-index-md-2b1991a529758175701b.js.map