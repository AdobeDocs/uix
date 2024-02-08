"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[4911],{29706:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return s}});var a=t(87462),l=t(45987),d=(t(15007),t(64983)),r=t(91515);const i=["components"],o={},m={_frontmatter:o},p=r.Z;function s(e){let{components:n}=e,t=(0,l.Z)(e,i);return(0,d.mdx)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"custom-form-element-rendering"},"Custom form element rendering"),(0,d.mdx)("p",null,"This feature allows third-party developer to build custom input UI for specific fields or types of fields."),(0,d.mdx)("h2",{id:"define-override-rules"},"Define override rules"),(0,d.mdx)("p",null,"An UIX extension can define a list of override rules, each consisting of a set of RegExp expressions for field name, type, fragment path or/and model path. When a field on the canvas matches one of these expressions, the standard UI is replaced with an iframe, which then renders the custom UI provided by the extension."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"function ExtensionRegistration() {\n    const init = async () => {\n        const guestConnection = await register({\n            id: extensionId,\n            methods: {\n                field: {\n                    getDefinitions: () => {\n                        return [\n                            {\n                                fieldNameExp: '^address_autocomplete$',\n                                url: '/#/address-autocomplete-field',\n                            },\n                        ];\n                    },\n                },\n            },\n        });\n    };\n    init().catch(console.error);\n\n    return <Text>IFrame for integration with Host (AEM)...</Text>;\n}\n")),(0,d.mdx)("h2",{id:"implement-custom-rendering-logic"},"Implement custom rendering logic"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"function CustomField() {\n...\n    useEffect(() => {\n        const init = async () => {\n            // connect to the host (ie. CF Editor)\n            const conn = await attach({ id: extensionId });\n            setConnection(conn);\n\n            // get model\n            const model = await conn.host.field.getModel();\n\n            // configure validation state subscriber\n            await conn.host.field.onValidationStateChange((state) => setValidationState(state));\n\n            // get default value\n            const defaultValue = await conn.host.field.getDefaultValue();\n        }\n\n        init().catch(console.error);\n    }, []);\n\n    // Custom fileld will be display instead of original one\n    return <TextField defaultValue={value} onChange={(v) => conn.host.field.onChange(v)} ... />;\n}\n")),(0,d.mdx)("h2",{id:"api-reference"},"API Reference"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"url"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,d.mdx)("td",{parentName:"tr",align:null},"URL of the page to load in the iframe that will replace the original field. The URL must have the same origin as the extension declaring the rules for field replacement.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pathExp"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},'RegExp for "fragment content" path')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"modelPathExp"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},'RegExp for "fragment content model" path')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"fieldTypeExp"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"RegExp for field type")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"fieldNameExp"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"RegExp for field name")))),(0,d.mdx)("p",null,"At least one valid expression must be specified: ",(0,d.mdx)("inlineCode",{parentName:"p"},"pathExp"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"modelPathExp"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"fieldTypeExp"),", or ",(0,d.mdx)("inlineCode",{parentName:"p"},"fieldNameExp"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-editor-api-custom-fields-index-md-8d8a6f6dd5e98c7a1a97.js.map