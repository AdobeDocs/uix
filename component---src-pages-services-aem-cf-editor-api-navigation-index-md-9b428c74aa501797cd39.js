"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[794],{57025:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return p},default:function(){return l}});var a=t(87462),i=t(45987),o=(t(15007),t(64983)),r=t(91515);const d=["components"],p={},m={_frontmatter:p},s=r.Z;function l(n){let{components:e}=n,t=(0,i.Z)(n,d);return(0,o.mdx)(s,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"navigation"},"Navigation"),(0,o.mdx)("p",null,"Describes basic methods for navigating within an extension."),(0,o.mdx)("h2",{id:"api-to-open-content-fragment-from-an-extension"},"API to open Content Fragment from an extension"),(0,o.mdx)("p",null,"Default editor for your organization will be used to open Content Fragment."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import { useEffect } from "react";\nimport { Text } from "@adobe/react-spectrum"\nimport { extensionId } from "./Constants"\nimport { register } from "@adobe/uix-guest";\n\nfunction ExtensionRegistration() {\n    useEffect(() => {\n        const init = async () => {\n            const registrationConfig = {\n                id: extensionId,\n                methods: {\n                    headerMenu: {\n                        getButtons() {\n                            return [\n                                {\n                                    id: "example.open_in_editor",\n                                    label: "UIX Open In Editor",\n                                    icon: \'Export\',\n                                    variant: "primary",\n                                    onClick: async () => {\n                                        console.log("UIX Open In Editor has been pressed.");\n                                        const contentFragment = await guestConnection.host.contentFragment.getContentFragment();\n                                        // or any other content fragment path\n\n                                        console.log(contentFragment.path);\n                                        guestConnection.host.navigation.openEditor(contentFragment.path);\n                                    },\n                                },\n                            ];\n                        },\n                    },\n                },\n            };\n            const guestConnection = await register(registrationConfig);\n        }\n        init().catch(console.error)\n    }, []);\n    return <Text>IFrame for integration with Host (AEM)...</Text>\n}\n\nexport default ExtensionRegistration;\n')),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/5530d/navigation.editor.open_in_editor.webp 320w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/0c8fb/navigation.editor.open_in_editor.webp 640w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/94b1e/navigation.editor.open_in_editor.webp 1280w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/0b34d/navigation.editor.open_in_editor.webp 1920w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/034b0/navigation.editor.open_in_editor.webp 2280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/dd4a7/navigation.editor.open_in_editor.png 320w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/0f09e/navigation.editor.open_in_editor.png 640w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/bbbf7/navigation.editor.open_in_editor.png 1280w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/ac7a9/navigation.editor.open_in_editor.png 1920w","/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/c0f46/navigation.editor.open_in_editor.png 2280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/b13ed01be6a6a9a7a6816f82c3df2a4c/bbbf7/navigation.editor.open_in_editor.png",alt:"navigation editor open in editor",title:"navigation editor open in editor",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"API Reference")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Field"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Required"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"fragmentPath"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"string")),(0,o.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},"The path of the CF to be open.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"shouldClearBreadcrumbs"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"true")),(0,o.mdx)("td",{parentName:"tr",align:null},"The flag to clear breadcrumbs when the CF page loads.")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-editor-api-navigation-index-md-9b428c74aa501797cd39.js.map