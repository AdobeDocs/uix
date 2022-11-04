"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[51],{6291:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return s},default:function(){return c}});var t,i=n(7462),a=n(3366),l=(n(5007),n(4983)),d=n(1515),r=["components"],s={},m=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:s},u=d.Z;function c(e){var o=e.components,n=(0,a.Z)(e,r);return(0,l.mdx)(u,(0,i.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"faq"},"FAQ"),(0,l.mdx)("p",null,"We are trying to make your experience as smooth as possible. However, there are still some issues that you may face while working with UI Extensibility."),(0,l.mdx)("h2",{id:"aio-cli-does-not-behave-as-described-in-the-documentation"},"AIO CLI does not behave as described in the documentation"),(0,l.mdx)("p",null,"Most probably you have a dated version of AIO CLI."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Solution")),(0,l.mdx)("p",null,"Ensure your CLI and all plugins are up to date."),(0,l.mdx)("p",null,"Check the installed version of AIO CLI:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"aio -v\n")),(0,l.mdx)("p",null,"Compare it with the current published version:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npm show @adobe/aio-cli version\n")),(0,l.mdx)("p",null,"If your CLI is outdated, update it by running:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install -g @adobe/aio-cli\n")),(0,l.mdx)("p",null,"After that, you can simply run ",(0,l.mdx)("inlineCode",{parentName:"p"},"aio update")," to ensure all plugins are updated."),(0,l.mdx)("p",null,"Find more details on ",(0,l.mdx)("a",{parentName:"p",href:"../../guides/local-environment"},"Prepare your local environment"),"."),(0,l.mdx)("h2",{id:"my-ui-extension-is-not-loaded"},"My UI Extension is not loaded"),(0,l.mdx)("p",null,"Most probably you have issues with a SSL certificate. Adobe App Builder generates valid certificates for the production environment but during local development and on staging you may need manually accept the certificate."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Solution")),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Open a UI Extension endpoint in your browser (e.g. ",(0,l.mdx)("inlineCode",{parentName:"li"},"https://localhost:9080")," during local development)."),(0,l.mdx)("li",{parentName:"ol"},"Manually accept the certificate. For example for Google Chrome type ",(0,l.mdx)("inlineCode",{parentName:"li"},"thisisunsafe")," or click on ",(0,l.mdx)("inlineCode",{parentName:"li"},"Advanced")," link and then on ",(0,l.mdx)("inlineCode",{parentName:"li"},"Proceed to localhost (unsafe)"),".")),(0,l.mdx)("h2",{id:"login-via-aio-login-does-not-work-or-aio-app-commands-show-the-wrong-ims-organization-or-projects"},"Login via ",(0,l.mdx)("inlineCode",{parentName:"h2"},"aio login")," does not work or ",(0,l.mdx)("inlineCode",{parentName:"h2"},"aio app")," commands show the wrong IMS organization or projects"),(0,l.mdx)("p",null,"This sometimes may happen to users who work with multiple Adobe Services and are members of multiple IMS organizations."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Solution")),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Go to ",(0,l.mdx)("a",{parentName:"li",href:"https://account.adobe.com"},"https://account.adobe.com"),' and click "Sign Out". '),(0,l.mdx)("li",{parentName:"ol"},"Open the terminal and type ",(0,l.mdx)("inlineCode",{parentName:"li"},"aio logout"),"."),(0,l.mdx)("li",{parentName:"ol"},"Then try to run ",(0,l.mdx)("inlineCode",{parentName:"li"},"aio login")," again.")),(0,l.mdx)("h2",{id:"what-ui-can-be-extended"},"What UI can be extended"),(0,l.mdx)("p",null,"You may find a list of Adobe Services that implement UI Extensibility under ",(0,l.mdx)("inlineCode",{parentName:"p"},"Extensible Services")," in this documentation. For each service, we provide documentation of extension points and step-by-step guides."),(0,l.mdx)("h2",{id:"what-is-an-extension-point"},"What is an extension point"),(0,l.mdx)("p",null,"The extension point is functionality in Adobe Service UI that allows the execution of 3rd party code. Extension point usually includes:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Requirements for extension implementation (what API extension should implement)."),(0,l.mdx)("li",{parentName:"ol"},"Promise to invoke extension code under defined conditions."),(0,l.mdx)("li",{parentName:"ol"},"API that allows the extension to access Adobe Service UI functionality.")),(0,l.mdx)("h2",{id:"what-software-tools-should-i-have-installed-to-get-started-with-developing"},"What software tools should I have installed to get started with developing"),(0,l.mdx)("p",null,"You will need NodeJS and ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"AIO CLI"),". All other tools are optional and you may replace them with your preferred one."),(0,l.mdx)("p",null,"For more information see ",(0,l.mdx)("a",{parentName:"p",href:"../../guides/local-environment/"},"Set Up Local Environment"),"."),(0,l.mdx)("h2",{id:"do-i-need-to-deploy-any-services-locally"},"Do I need to deploy any services locally"),(0,l.mdx)("p",null,"No! The only thing that you will run locally is your own extension. You will be able to add your extension running locally or in Adobe cloud to the production Adobe Services and see how it behaves before sharing it with anybody else."),(0,l.mdx)("h2",{id:"can-i-test-my-extension-before-deploying-it-to-the-cloud"},"Can I test my extension before deploying it to the cloud"),(0,l.mdx)("p",null,"Yes! It is possible to run the extension locally and embed it into production Adobe Service to check if it works as expected.\nFor more information see ",(0,l.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/debug"},"Troubleshooting"),"."),(0,l.mdx)("h2",{id:"should-i-write-all-extension-code-by-myself"},"Should I write all extension code by myself"),(0,l.mdx)("p",null,"No! We provide a template that allows you to generate most of the code required to make UI Extension out of the App Builder application. You will need only implement your business logic."),(0,l.mdx)("p",null,"But you still can write everything from scratch if you wish to."),(0,l.mdx)("p",null,"For more information see ",(0,l.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/code-generation/"},"Code Generation"),"."),(0,l.mdx)("h2",{id:"what-is-the-simplest-way-to-start"},"What is the simplest way to start"),(0,l.mdx)("p",null,"Our ",(0,l.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/code-generation/"},"code generator")," supplies a demo project that you may generate and deploy for your IMS organization. Explore it and change to learn what is possible with UI Extensibility."),(0,l.mdx)(m,{slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"UI Extensibility is currently available for early preview as a beta release. If you cannot find an answer to your question please contact us directly at ",(0,l.mdx)("a",{parentName:"p",href:"mailto:uix@adobe.com"},"uix@adobe.com"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-faq-index-md-e45cb15739c919a4f7e0.js.map