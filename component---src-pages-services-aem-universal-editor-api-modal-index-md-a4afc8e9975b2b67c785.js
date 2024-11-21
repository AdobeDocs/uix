"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[6255],{60282:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(87462),d=t(45987),i=(t(15007),t(64983)),o=t(91515);const l=["components"],m={},r={_frontmatter:m},s=o.Z;function p(e){let{components:n}=e,t=(0,d.Z)(e,l);return(0,i.mdx)(s,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"modal-dialogs"},"Modal dialogs"),(0,i.mdx)("p",null,"Describes basic methods for using modals dialogs within an extension."),(0,i.mdx)("p",null,"The Universal Editor (host instance) provides an API for showing modal dialogs with custom UI defined by an extension. These modals can be triggered by a click on the button or other events. Modal API is defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"modal")," namespace."),(0,i.mdx)("p",null,"Content of the modal is rendered in an iframe with source defined by extension. Before showing modal you should create a page which renders Modal UI. This UI should use Adobe Spectrum UI library to provide consistent experience to the user."),(0,i.mdx)("h2",{id:"an-example-of-opening-and-closing-a-modal"},"An example of opening and closing a modal"),(0,i.mdx)("p",null,"In order to display modal dialog extension must call ",(0,i.mdx)("inlineCode",{parentName:"p"},"showUrl")," method in ",(0,i.mdx)("inlineCode",{parentName:"p"},"modal")," namespace."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import { useEffect } from "react";\nimport { Text } from "@adobe/react-spectrum"\nimport { extensionId } from "./Constants"\nimport { register } from "@adobe/uix-guest";\n\nfunction ExtensionRegistration() {\n  useEffect(() => {\n    const init = async () => {\n      const guestConnection = await register({\n        id: "my.company.extension-with-modal",\n        methods: {\n          headerMenu: {\n            getButtons() {\n              return [\n                {\n                  id: "example.button.actionWithSubItems",\n                  label: "UIX Sub Items",\n                  variant: "action",\n                  icon: \'PublishCheck\', // Spectrum workflow icon code from https://spectrum.adobe.com/page/icons/\n                  subItems: [\n                    {\n                      id: \'modalDialog\',\n                      label: \'Modal Dialog\',\n                      icon: \'PublishSchedule\',\n                      onClick: async () => {\n                        console.log(\'Button has been pressed.\');      \n                        const url = "/index.html#/modal"; // absolute or relative path\n                            guestConnection.host.modal.showUrl({\n                              title: \'Modal Dialog: \',\n                              url,\n                              width: \'900px\',\n                            });\n                      },\n                    },\n                  ],\n                }\n              ]\n            }\n          }\n        }\n      });\n    }\n    init().catch(console.error)\n  }, []);\n  return <Text>IFrame for integration with Host...</Text>\n}\n\nexport default ExtensionRegistration\n')),(0,i.mdx)("p",null,"Modal may be closed by ",(0,i.mdx)("inlineCode",{parentName:"p"},"close")," method"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from "react";\nimport { attach } from "@adobe/uix-guest";\nimport {\n  Provider,\n  Content,\n  defaultTheme,\n  Button\n} from "@adobe/react-spectrum";\n\nexport default ModalComponent = () => {\n  const [guestConnection, setGuestConnection] = useState(null);\n\n\n  useEffect(() => {\n    (async () => {\n      const guestConnection = await attach({ id: "my.company.extension-with-modal" });\n\n      setGuestConnection(guestConnection);\n    })();\n  }, []);\n\n...\n  const onCloseHandler = () => {\n    guestConnection.host.modal.close();\n  };\n  ...\n    return (\n        <Provider theme={defaultTheme} colorScheme="light">\n            <Content width="100%">\n            ...\n                <Button variant="primary" onPress={onCloseHandler} position="fixed" bottom="0px" right="8px">\n                    Close\n                 </Button>\n            </Content>\n        </Provider>\n    );\n }\n    \n  \n')),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uix/static/f4f77997f8ab95073f26da97cdc5203b/5530d/modal.webp 320w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/0c8fb/modal.webp 640w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/94b1e/modal.webp 1280w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/a808c/modal.webp 1879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uix/static/f4f77997f8ab95073f26da97cdc5203b/dd4a7/modal.png 320w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/0f09e/modal.png 640w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/bbbf7/modal.png 1280w","/uix/static/f4f77997f8ab95073f26da97cdc5203b/7ca0a/modal.png 1879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/f4f77997f8ab95073f26da97cdc5203b/bbbf7/modal.png",alt:"modal",title:"modal",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"api-reference"},"API Reference"),(0,i.mdx)("h3",{id:"modal-api-request-object"},"Modal API Request Object"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"modal.showUrl")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"modalInstance.set")," methods accept a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ModalRequest")," object."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Property"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Required"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"url")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"URL of the page to load in the dialog frame. The URL must have the same origin as the extension making the modal request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"title")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Title of the modal to display.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")," ",(0,i.mdx)("br",null)," ",(0,i.mdx)("inlineCode",{parentName:"td"},"number")," ",(0,i.mdx)("br",null)," ",(0,i.mdx)("inlineCode",{parentName:"td"},'"auto"')),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"auto")),(0,i.mdx)("td",{parentName:"tr",align:null},"A number of pixels, a CSS value, or the string ",(0,i.mdx)("inlineCode",{parentName:"td"},"auto"),". The ",(0,i.mdx)("inlineCode",{parentName:"td"},"auto")," keyword will grow or shrink the modal to the height of the document in the iframe every time the guest document resizes, to a minimum of 20% and a maximum of 75% of window height. In fullscreen mode, this is ignored.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")," ",(0,i.mdx)("br",null)," ",(0,i.mdx)("inlineCode",{parentName:"td"},"number")," ",(0,i.mdx)("br",null)," ",(0,i.mdx)("inlineCode",{parentName:"td"},'"auto"')),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"auto")),(0,i.mdx)("td",{parentName:"tr",align:null},"A number of pixels, a CSS value, or the string ",(0,i.mdx)("inlineCode",{parentName:"td"},"auto"),". The ",(0,i.mdx)("inlineCode",{parentName:"td"},"auto")," keyword will grow or shrink the modal to the width of the document in the iframe every time the guest document resizes, to a minimum of 20% and a maximum of 75% of window width. In fullscreen mode, this is ignored.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"fullscreen")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"false")),(0,i.mdx)("td",{parentName:"tr",align:null},'Display the dialog as large as possible. It will overlay most of the application, leaving small borders to indicate overlay. If true, any "width" and "height" parameters will be ignored.')),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"isDismissable")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"true")),(0,i.mdx)("td",{parentName:"tr",align:null},"Show the dismiss button, so a user can close the modal no matter what state it is in. If an extension disables this, it must provide its own UI control which calls ",(0,i.mdx)("inlineCode",{parentName:"td"},"modal.close()"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"loading")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"false")),(0,i.mdx)("td",{parentName:"tr",align:null},"Preserve the progress spinner that displays before the modal contents load. When ",(0,i.mdx)("inlineCode",{parentName:"td"},"false")," or unset, the modal will show a progress spinner until the guest in the iframe is connected, and then display the frame contents. If the ",(0,i.mdx)("inlineCode",{parentName:"td"},"modal.showUrl()")," call sets ",(0,i.mdx)("inlineCode",{parentName:"td"},"{ loading: true }"),", the spinner will continue displaying after the guest has connected, until the guest calls ",(0,i.mdx)("inlineCode",{parentName:"td"},"modal.set({ loading: false })"),". A modal which needs to do data fetching or layout adjustment after connecting should set ",(0,i.mdx)("inlineCode",{parentName:"td"},"{ loading: true }")," and then dismiss it from the modal when its UI is ready.")))),(0,i.mdx)("h3",{id:"modal-api"},"Modal API"),(0,i.mdx)("p",null,"The modal API is available to all extensions at the host.modal property."),(0,i.mdx)("h4",{id:"modalshowurlrequest-modalrequest-promisemodalinstanceapi"},(0,i.mdx)("inlineCode",{parentName:"h4"},"modal.showUrl(request: ModalRequest): Promise<ModalInstanceApi>")),(0,i.mdx)("p",null,"Any guest's GuestServer may call ",(0,i.mdx)("inlineCode",{parentName:"p"},"modal.showUrl")," to open a modal dialog. The provided ",(0,i.mdx)("inlineCode",{parentName:"p"},"ModalRequest")," object must have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," of the page to be displayed inside the modal. Typically this is another page or route in the calling extension app."),(0,i.mdx)("p",null,"If another modal is displaying and it belongs to a different extension, it rejects."),(0,i.mdx)("h4",{id:"modalclose-promisevoid"},(0,i.mdx)("inlineCode",{parentName:"h4"},"modal.close(): Promise<void>")),(0,i.mdx)("p",null,"Close the current modal. If the current modal doesn't belong to the calling extension, it rejects."),(0,i.mdx)("h3",{id:"modal-instance-api"},"Modal Instance API"),(0,i.mdx)("p",null,"This API is returned to the GuestServer and also shared with the modal that loads inside the frame. A GuestServer loaded in a modal must call ",(0,i.mdx)("inlineCode",{parentName:"p"},"set")," instead of ",(0,i.mdx)("inlineCode",{parentName:"p"},"showUrl"),"."),(0,i.mdx)("h4",{id:"modalsetrequest-modalrequest-promisevoid"},(0,i.mdx)("inlineCode",{parentName:"h4"},"modal.set(request: ModalRequest): Promise<void>")),(0,i.mdx)("p",null,"Modify the currently displaying modal. GuestUI frames running inside the modal may call this method to change their dimensions, or to change other parameters."),(0,i.mdx)("h3",{id:"resizing"},"Resizing"),(0,i.mdx)("p",null,"When ",(0,i.mdx)("inlineCode",{parentName:"p"},"height")," and/or ",(0,i.mdx)("inlineCode",{parentName:"p"},"width")," are set to ",(0,i.mdx)("inlineCode",{parentName:"p"},'"auto"'),", the modal will attempt to resize whenever the displayed page changes size. This is to make the content of the iframe behave, as much as possible, like they're part of the content flow of the host application."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"⚠️ Resizes are detected every 100ms."),(0,i.mdx)("li",{parentName:"ul"},"⚠️ Height is limited to between 20% and 75% of page height, and width is similarly limited."),(0,i.mdx)("li",{parentName:"ul"},"⚠️ ",(0,i.mdx)("strong",{parentName:"li"},"If the page sets certain kinds of relative dimensions on its body elements, such as ",(0,i.mdx)("inlineCode",{parentName:"strong"},"99vh")," or ",(0,i.mdx)("inlineCode",{parentName:"strong"},"101vmin"),", it can cause slow expansion or contraction of the displayed frame.")," Those measurements change as the outer document resizes the inner document, which triggers a loop. Remedy this by using other units to define the outside of your app.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-universal-editor-api-modal-index-md-a4afc8e9975b2b67c785.js.map