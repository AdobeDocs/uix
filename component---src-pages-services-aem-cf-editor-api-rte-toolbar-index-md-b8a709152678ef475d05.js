"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[860],{90997:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return x}});var a=t(87462),d=t(45987),l=(t(15007),t(64983)),r=t(91515);const m=["components"],i={},p={_frontmatter:i},o=r.Z;function x(e){let{components:n}=e,t=(0,d.Z)(e,m);return(0,l.mdx)(o,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"rich-text-editor-toolbar"},"Rich Text Editor Toolbar"),(0,l.mdx)("p",null,"The Rich Text Editor (RTE) is an essential component of the ",(0,l.mdx)("a",{parentName:"p",href:"../../"},"Content Fragment Editor"),". By utilizing toolbar extensions, clients can add custom buttons that can modify the content according to their specific requirements."),(0,l.mdx)("p",null,"Extension as well may control availability of standard RTE buttons."),(0,l.mdx)("h2",{id:"custom-buttons"},"Custom buttons"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'{\n  rte: {\n    getButtons: () => ([{\n      id: "test-id",\n      text: "Test button", //optional text near button\n      tooltip: "Button alt text",\n      icon: \'Airplane\',\n      onClick: (state) => {\n        return [{\n          type: "replaceContent",\n          value: state.html + "<p> some new HTML </p>"\n        }]\n      }\n    }])\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"/uix/assets/96c287e584e9488061ba5b0bd9dcf57b/rte-content-extension.gif",alt:null})),(0,l.mdx)("h3",{id:"api-reference"},"API Reference"),(0,l.mdx)("h4",{id:"extension-api"},"Extension API"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"Must be unique")," across all extensions. Consider adding a vendor prefix to this field.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"text"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"A button text")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"tooltip"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,l.mdx)("td",{parentName:"tr",align:null},"A text that will be rendered on mouse over event")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"icon"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"An icon field accepts workflow icon code from @spectrum-icons library - ",(0,l.mdx)("a",{parentName:"td",href:"https://spectrum.adobe.com/page/icons/"},"https://spectrum.adobe.com/page/icons/"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"callback(state): Instruction[]")),(0,l.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback for a button ",(0,l.mdx)("inlineCode",{parentName:"td"},"onClick")," event. The callback receives the editor ",(0,l.mdx)("inlineCode",{parentName:"td"},"state")," object as an argument and may return a list of instructions")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"onClick")," ",(0,l.mdx)("inlineCode",{parentName:"strong"},"state")," argument API")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"html"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"HTML representation of editor's content")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"text"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"Text representation of editor's content")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"selectedHtml"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"HTML representation of selected editor's content. Empty when there is no selection")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"selectedText"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"Text representation of selected editor's content. Empty when there is no selection")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"onClick")," instructions API")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"onClick")," method ",(0,l.mdx)("strong",{parentName:"p"},"MUST")," return a list of the following instructions (could be an empty list):"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Instruction"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"replaceContent")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"Replaces current editor content with a content provided in ",(0,l.mdx)("inlineCode",{parentName:"td"},"value")," property")))),(0,l.mdx)("h2",{id:"standard-buttons"},"Standard buttons"),(0,l.mdx)("p",null,"You can also add or remove standard Rich Text Editor buttons using a following contract:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'rte: {\n  getCoreButtons: () => [\n    {\n      id: "h4",\n      toolbarGroup: 3\n    }\n  ],\n  removeButtons: () => [\n    {\n      id: "redo",\n    },\n    {\n      id: "undo",\n    }\n  ],\n}\n')),(0,l.mdx)("h3",{id:"api-reference-1"},"API Reference"),(0,l.mdx)("h4",{id:"extension-api-1"},"Extension API"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"button-id")),(0,l.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,l.mdx)("td",{parentName:"tr",align:null},"The ",(0,l.mdx)("inlineCode",{parentName:"td"},"id")," of a button. See avaialble button ids in a section below")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"toolbarGroup"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"number")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"An optional index of tabgroup to work with")))),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"Available button ids"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"aligncenter")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignjustify")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignleft")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignnone")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignright")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"blockquote")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"backcolor")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"bold")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"copy")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"cut")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"fontselect")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"fontsizeselect")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"forecolor")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"formatselect")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h1")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h2")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h3")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h4")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h5")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"h6")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"indent")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"italic")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"language")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"lineheight")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"newdocument")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"outdent")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"paste")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"redo")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"remove")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"removeformat")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"selectall")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"strikethrough")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"styleselect")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"subscript")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"superscript")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"underline")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"undo")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"visualaid")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"pastetext")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"link")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"openlink")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"unlink")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"table")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellprops")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecopyrow")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecutrow")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tabledelete")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tabledeletecol")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tabledeleterow")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableinsertdialog")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableinsertcolafter")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableinsertcolbefore")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableinsertrowafter")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableinsertrowbefore")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablemergecells")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablepasterowafter")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablepasterowbefore")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableprops")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablerowprops")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablesplitcells")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tableclass")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellclass")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellvalign")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellborderwidth")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellborderstyle")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecaption")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellbackgroundcolor")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecellbordercolor")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablerowheader")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"tablecolheader")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"code")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"fullscreen")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"bullist")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"numlist")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"charmap")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"preview")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"searchreplace")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"visualblocks")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"insertdatetime")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"media")," |  ",(0,l.mdx)("inlineCode",{parentName:"p"},"anchor")," |")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-editor-api-rte-toolbar-index-md-b8a709152678ef475d05.js.map