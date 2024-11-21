"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[8949],{94680:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return p}});var a=t(87462),r=t(45987),i=(t(15007),t(64983)),d=t(91515);const o=["components"],l={},m={_frontmatter:l},s=d.Z;function p(e){let{components:n}=e,t=(0,r.Z)(e,o);return(0,i.mdx)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"custom-element-rendering-for-properties-rail-by-data-type"},"Custom element rendering for properties rail by data-type"),(0,i.mdx)("p",null,"This feature allows third-party developer to build custom input UI for specific data types in the Universal Editor.\nThe custom UI is rendered in an iframe and replaces the standard UI for the field in the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/universal-editor/authoring#properties-rail"},"properties rail"),"."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uix/static/d766f3b5ff5ced6a8039627a83e37005/5530d/custom-renderer-field.webp 320w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/0c8fb/custom-renderer-field.webp 640w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/94b1e/custom-renderer-field.webp 1280w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/c9fa7/custom-renderer-field.webp 1416w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uix/static/d766f3b5ff5ced6a8039627a83e37005/dd4a7/custom-renderer-field.png 320w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/0f09e/custom-renderer-field.png 640w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/bbbf7/custom-renderer-field.png 1280w","/uix/static/d766f3b5ff5ced6a8039627a83e37005/c6e0f/custom-renderer-field.png 1416w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/d766f3b5ff5ced6a8039627a83e37005/bbbf7/custom-renderer-field.png",alt:"custom renderer field",title:"custom renderer field",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"define-override-rules"},"Define override rules"),(0,i.mdx)("p",null,"An UIX extension can define a custom renderer to replace the standard UI  with an iframe, which then renders the custom UI provided by the extension.\nCheck this document to learn about available ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/attributes-types#item-types"},"data types for universal editor"),". "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function ExtensionRegistration() {\n  const init = async () => {\n    const guestConnection = await register({\n      id: extensionId,\n      methods: {\n        canvas: {\n          getRenderers() {\n            return [\n              {\n                dataType: \"text\",\n                url: '/#/renderer/1'\n              },\n              {\n                dataType: \"custom-type\",\n                url: '/#/renderer/2',\n              },\n            ];\n          },\n        },\n      },\n    });\n  };\n  init().catch(console.error);\n\n  return <Text>IFrame for integration with Host (AEM)...</Text>;\n}\n")),(0,i.mdx)("h2",{id:"implement-custom-rendering-logic"},"Implement custom rendering logic"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Define the router in the extension application to handle the custom rendering of the field.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Router>\n      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>\n        <Routes>\n            <Route index element={<ExtensionRegistration />} />\n            <Route\n                exact\n                path="index.html"\n                element={<ExtensionRegistration />}\n            />\n            <Route\n                exact path="renderer/:rendererId"\n                element={<TypeRenderer />}\n            />\n        </Routes>\n      </ErrorBoundary>\n    </Router>\n  )\n\n  // Methods\n\n  // error handler on UI rendering failure\n  function onError(e, componentStack) {}\n\n  // component to show if UI fails rendering\n  function fallbackComponent({ componentStack, error }) {\n    ...\n}\n\nexport default App\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Implement custom field renderer")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'export default () => {\n    const [isLoading, setIsLoading] = useState(true);\n    const [connection, setConnection] = useState();\n    const [model, setModel] = useState();\n    const [value, setValue] = useState();\n    const [error, setError] = useState();\n    const [validationState, setValidationState] = useState();\n\n    const { rendererId } = useParams();\n    if (!rendererId) {\n        console.error(\'Renderer id parameter is missed\');\n        return;\n    }\n\n    useEffect(() => {\n        const init = async () => {\n            // connect to the host \n            const connection = await attach({ id: extensionId });\n            setConnection(connection);\n            // get model\n            setModel(await connection.host.field.getModel());\n            // get field value\n            setValue(await connection.host.field.getValue());\n            // get field error\n            setError(await connection.host.field.getError());\n            // get field validation state\n            setValidationState(await connection.host.field.getValidationState());\n            setIsLoading(false);\n        };\n        init().catch((e) =>\n            console.log("Extension got the error during initialization:", e)\n        );\n    }, []);\n\n    const onChangeHandler = (v) => {\n        console.log("onChange on extension side", v);\n        connection.host.field.onChange(v);\n    };\n\n    return (\n        <Provider theme={lightTheme} colorScheme="light">\n            {!isLoading ? (\n                <>\n                    Content generated by the extension Renderer#{rendererId}\n                    <Flex direction="column" gap="size-65" marginBottom="size-100">\n                        <TextField\n                            validationState={error ? "invalid" : validationState}\n                            label={model.multi ? null : model.label}\n                            aria-label={model.label || model.name}\n                            defaultValue={value}\n                            maxLength={model.validation.maxLength}\n                            isReadOnly={model.readOnly}\n                            isDisabled={model.readOnly}\n                            isRequired={model.required}\n                            errorMessage={error}\n                            onChange={onChangeHandler}\n                            width="100%"\n                        />\n                    </Flex>\n                </>\n                ) : (\n                <View width="97%" height="100%">\n                    <Spinner />\n                </View>\n                )}\n        </Provider>\n    );\n};\n\n')),(0,i.mdx)("h2",{id:"extension-registration-reference"},"Extension Registration Reference"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Field"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Required"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"url"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,i.mdx)("td",{parentName:"tr",align:null},"URL of the page to load in the iframe that will replace the original field. The URL must have the same origin as the extension declaring the rules for field replacement.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"dataType"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,i.mdx)("td",{parentName:"tr",align:null},"Value of ",(0,i.mdx)("inlineCode",{parentName:"td"},"data-aue-type"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"icon"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Icons to be displayed in the properties rail if data type is matched.")))),(0,i.mdx)("h2",{id:"field-reference"},"Field Reference"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n    await connection.host.field\n}\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Methods"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"getModel")),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns the model of the field.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"getValue")),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns the value of the field.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"getError")),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns the error of the field.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"getValidationState")),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns the validation state of the field.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"onChange")),(0,i.mdx)("td",{parentName:"tr",align:null},"Sets the value of the field.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"setHeight")),(0,i.mdx)("td",{parentName:"tr",align:null},"Sets the height of the field.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-universal-editor-api-item-types-renderers-index-md-81bc0b283fefd6cf9af2.js.map