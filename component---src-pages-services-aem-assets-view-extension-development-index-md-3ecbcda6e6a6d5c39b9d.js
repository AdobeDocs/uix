"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[9334],{19319:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return u}});var n=a(87462),i=a(45987),o=(a(15007),a(64983)),s=a(91515);const r=["components"],p={},d=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const l={_frontmatter:p},m=s.Z;function u(e){let{components:t}=e,a=(0,i.Z)(e,r);return(0,o.mdx)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-by-step-aem-assets-view-extension-development"},"Step-by-step AEM Assets View Extension Development"),(0,o.mdx)("p",null,"The document helps you understand how to set up local environment and start developing your first UI Extension."),(0,o.mdx)("h2",{id:"about-application"},"About application"),(0,o.mdx)("p",null,"This example application will use the ",(0,o.mdx)("a",{parentName:"p",href:"../api/details-view"},"Details View extension point"),'. It will render\na custom icon in the side panel rail only if the selected asset has the "jpeg" extension. When the user clicks on the icon,\nthe extension will display a custom panel with a button. Clicking the button will display a toast message with the asset\'s path.'),(0,o.mdx)("p",null,"More information about AEM Assets View extension points can be found at ",(0,o.mdx)("a",{parentName:"p",href:"../api"},"AEM Assets View Extension Points"),"."),(0,o.mdx)("h2",{id:"create-a-project-in-adobe-developer-console"},"Create a project in Adobe Developer Console"),(0,o.mdx)("p",null,"UI Extensions, as with any App Builder application, are represented as projects in ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/"},"Adobe Developer Console"),"."),(0,o.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you don't have access to the Adobe Developer Console, refer to the ",(0,o.mdx)("a",{parentName:"p",href:"../../../guides/get-access"},"How to Get Access")," guide for instructions."),(0,o.mdx)("p",null,"To begin, we need to create a new Project which will supply us with the configuration and resources."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Sign in to ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console"},"Adobe Developer Console")," with your Adobe ID.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1128px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/1f0a11023afa81651361425edbb393db/5530d/create-project-1.webp 320w","/uix/static/1f0a11023afa81651361425edbb393db/0c8fb/create-project-1.webp 640w","/uix/static/1f0a11023afa81651361425edbb393db/86a10/create-project-1.webp 1128w"],sizes:"(max-width: 1128px) 100vw, 1128px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/1f0a11023afa81651361425edbb393db/dd4a7/create-project-1.png 320w","/uix/static/1f0a11023afa81651361425edbb393db/0f09e/create-project-1.png 640w","/uix/static/1f0a11023afa81651361425edbb393db/bac97/create-project-1.png 1128w"],sizes:"(max-width: 1128px) 100vw, 1128px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/1f0a11023afa81651361425edbb393db/bac97/create-project-1.png",alt:"Sign in to Adobe Developer Console",title:"Sign in to Adobe Developer Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Choose your account.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1200px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.12499999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/5530d/create-project-2.webp 320w","/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/0c8fb/create-project-2.webp 640w","/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/cbd37/create-project-2.webp 1200w"],sizes:"(max-width: 1200px) 100vw, 1200px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/dd4a7/create-project-2.png 320w","/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/0f09e/create-project-2.png 640w","/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/64756/create-project-2.png 1200w"],sizes:"(max-width: 1200px) 100vw, 1200px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/b37e7b30352b0f53a6cdfdad2e36ee95/64756/create-project-2.png",alt:"Choose your account",title:"Choose your account",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"Choose your profile or organization.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1138px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/5530d/create-project-3.webp 320w","/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/0c8fb/create-project-3.webp 640w","/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/58ffc/create-project-3.webp 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/dd4a7/create-project-3.png 320w","/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/0f09e/create-project-3.png 640w","/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/0ff2a/create-project-3.png 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/74c5da15c7058f9d3383cad7cd8b8a51/0ff2a/create-project-3.png",alt:"Choose your profile",title:"Choose your profile",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"Make sure you are in a proper organization (a switcher is in the right top corner).")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"644px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/5530d/create-project-4.webp 320w","/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/0c8fb/create-project-4.webp 640w","/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/ce8f6/create-project-4.webp 644w"],sizes:"(max-width: 644px) 100vw, 644px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/dd4a7/create-project-4.png 320w","/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/0f09e/create-project-4.png 640w","/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/e8cbb/create-project-4.png 644w"],sizes:"(max-width: 644px) 100vw, 644px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/478f3180cfeebf7c2b55fcad8edc90b7/e8cbb/create-project-4.png",alt:"Check organization",title:"Check organization",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",{start:4},(0,o.mdx)("li",{parentName:"ol"},'Click "Create new project" -> "Project from template":')),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/5530d/create-project-5.webp 320w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/0c8fb/create-project-5.webp 640w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/94b1e/create-project-5.webp 1280w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/a012d/create-project-5.webp 1293w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/dd4a7/create-project-5.png 320w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/0f09e/create-project-5.png 640w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/bbbf7/create-project-5.png 1280w","/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/b1a45/create-project-5.png 1293w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/f3c755dd67fcc9fd6a3983099ff9112a/bbbf7/create-project-5.png",alt:"Create project from template",title:"Create project from template",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'And choose "App Builder":'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1151px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/5add23d76c85336ea941765bde4ac1a6/5530d/create-project-6.webp 320w","/uix/static/5add23d76c85336ea941765bde4ac1a6/0c8fb/create-project-6.webp 640w","/uix/static/5add23d76c85336ea941765bde4ac1a6/3cdea/create-project-6.webp 1151w"],sizes:"(max-width: 1151px) 100vw, 1151px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/5add23d76c85336ea941765bde4ac1a6/dd4a7/create-project-6.png 320w","/uix/static/5add23d76c85336ea941765bde4ac1a6/0f09e/create-project-6.png 640w","/uix/static/5add23d76c85336ea941765bde4ac1a6/b86f2/create-project-6.png 1151w"],sizes:"(max-width: 1151px) 100vw, 1151px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/5add23d76c85336ea941765bde4ac1a6/b86f2/create-project-6.png",alt:'Choose "App Builder"',title:'Choose "App Builder"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",{start:5},(0,o.mdx)("li",{parentName:"ol"},"Fill in the project data.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/5530d/create-project-7.webp 320w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/0c8fb/create-project-7.webp 640w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/94b1e/create-project-7.webp 1280w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/91ec5/create-project-7.webp 1816w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/dd4a7/create-project-7.png 320w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/0f09e/create-project-7.png 640w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/bbbf7/create-project-7.png 1280w","/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/ded97/create-project-7.png 1816w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/9fe1fcfa22c05d48435c891131a9ebf2/bbbf7/create-project-7.png",alt:"Fill the project data",title:"Fill the project data",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Project Title")," is used to identify your project within ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console"},"Adobe Developer Console")," and in ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"App Name")," will be used as a unique identifier for your application and this value cannot be changed after project creating.")),(0,o.mdx)("p",null,"After creating, you should see a new project generated with 2 default Workspaces.\nEach App Builder project has two default workspaces: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage"),". You can add more workspaces as needed.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production")," workspace is special, as it is used for the submission and distribution flow."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1034px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.25000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/cd8f3e5d6109be5abad0234baa362b85/5530d/create-project-8.webp 320w","/uix/static/cd8f3e5d6109be5abad0234baa362b85/0c8fb/create-project-8.webp 640w","/uix/static/cd8f3e5d6109be5abad0234baa362b85/e4622/create-project-8.webp 1034w"],sizes:"(max-width: 1034px) 100vw, 1034px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/cd8f3e5d6109be5abad0234baa362b85/dd4a7/create-project-8.png 320w","/uix/static/cd8f3e5d6109be5abad0234baa362b85/0f09e/create-project-8.png 640w","/uix/static/cd8f3e5d6109be5abad0234baa362b85/b69f7/create-project-8.png 1034w"],sizes:"(max-width: 1034px) 100vw, 1034px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/cd8f3e5d6109be5abad0234baa362b85/b69f7/create-project-8.png",alt:"A new project with 2 default Workspaces",title:"A new project with 2 default Workspaces",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"setting-up-local-environment"},"Setting up local environment"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," + ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm (package manager)"),". Make sure you are using the latest stable version of ",(0,o.mdx)("inlineCode",{parentName:"li"},"Node.js")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"npm"),".")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"$ node -v\n v20.9.0\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"$ npm -v\n10.1.0\n")),(0,o.mdx)("p",null,"These are the current versions at the moment of creating the documentation.\nMake sure you are using the latest versions supported by Adobe I/O when you create the application."),(0,o.mdx)("p",null,"If you already have ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"Adobe I/O CLI")," on your local, please ensure you use the latest version of the library. You can check the version through:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"aio -v\n")),(0,o.mdx)("p",null,"and compare it with"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"npm show @adobe/aio-cli\n")),(0,o.mdx)("p",null,"If your version is outdated, update your ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe I/O CLI")," by running"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install -g @adobe/aio-cli\n")),(0,o.mdx)("p",null,"More details are described in ",(0,o.mdx)("a",{parentName:"p",href:"../../../guides/local-environment"},"Local environment set up"),"."),(0,o.mdx)("h2",{id:"initialize-your-extension-using-the-aio-cli-and-generate-a-base-structure-from-the-template"},"Initialize your extension using the AIO CLI and generate a base structure from the template"),(0,o.mdx)("p",null,"First, we need to ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#3-signing-in-from-cli"},"sign in from CLI")," and bootstrap our project.\nPlease complete all the steps described in ",(0,o.mdx)("a",{parentName:"p",href:"../code-generation"},"Code Generation for the Details View Extension in AEM Assets View"),"."),(0,o.mdx)("p",null,"For the purposes of this guide, we will use"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Asset Info Extension")," as the extension name and description"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Asset Info")," as the icon tooltip and the side panel title"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Extension")," as the icon")),(0,o.mdx)("p",null,"Also, we will not add Adobe I/O action to our extension."),(0,o.mdx)("p",null,"After this step, we will have a generated project structure with necessary npm dependencies are getting installed."),(0,o.mdx)("p",null,"If you have worked with an Adobe App Builder App before, you will notice that you have generated a starter project\nof a UI Extension that implements ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/extensions/"},"extension points"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},".\n|-- README.md\n|-- app.config.yaml\n|-- extension-manifest.json\n|-- hooks\n|   `-- post-deploy.js\n|-- jest.setup.js\n|-- package-lock.json\n|-- package.json\n`-- src\n    `-- aem-assets-details-1\n        |-- ext.config.yaml\n        `-- web-src\n            |-- index.html\n            `-- src\n                |-- components\n                |   |-- App.js\n                |   |-- Constants.js\n                |   |-- ExtensionRegistration.js\n                |   `-- PanelAssetInfo.js\n                |-- index.css\n                |-- index.js\n                `-- utils.js\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# app.config.yaml\nextensions:\n  aem/assets/details/1:\n    $include: src/aem-assets-details-1/ext.config.yaml\n")),(0,o.mdx)("p",null,"If necessary, you can find other bootstrap options in ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#4-bootstrapping-new-app-using-the-cli"},"Bootstrapping new App using the CLI"),"."),(0,o.mdx)("h2",{id:"overview-of-generated-components"},"Overview of generated components"),(0,o.mdx)("h3",{id:"routing"},"Routing"),(0,o.mdx)("p",null,"The root component ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/aem-assets-details-1/web-src/src/components/App.js")," contains the routing of our application. It defines three routes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"the first two are the default routes which trigger the ",(0,o.mdx)("inlineCode",{parentName:"li"},"ExtensionRegistration")," component responsible for initial extension registration\nwithin the AEM Assets View application."),(0,o.mdx)("li",{parentName:"ul"},"the ",(0,o.mdx)("inlineCode",{parentName:"li"},"asset-info")," route which invokes the ",(0,o.mdx)("inlineCode",{parentName:"li"},"PanelAssetInfo")," component responsible for rendering the\ncustom panel content. This route gets called by the AEM Assets View application when the user clicks the custom panel icon.\nDuring the registration the extension will specify ",(0,o.mdx)("inlineCode",{parentName:"li"},"/#asset-info")," as content location.")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/quick-start"},"React Routing")," determines which part of the extension should be executed depending on the request."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ErrorBoundary from 'react-error-boundary';\nimport { HashRouter as Router, Routes, Route } from 'react-router-dom';\nimport ExtensionRegistration from './ExtensionRegistration';\nimport PanelAssetInfo from './PanelAssetInfo';\n\nfunction App() {\n  return (\n          <Router>\n            <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>\n              <Routes>\n                <Route index element={<ExtensionRegistration />} />\n                <Route exact path=\"index.html\" element={<ExtensionRegistration />} />\n                <Route path=\"asset-info\" element={<PanelAssetInfo />} />\n                // YOUR CUSTOM ROUTES SHOULD BE HERE\n              </Routes>\n            </ErrorBoundary>\n          </Router>\n  );\n\n  // Methods\n\n  // error handler on UI rendering failure\n  function onError(e, componentStack) {}\n\n  // component to show if UI fails rendering\n  function fallbackComponent({ componentStack, error }) {\n    return (\n            <React.Fragment>\n              <h1 style={{ textAlign: 'center', marginTop: '20px' }}>\n                Extension rendering error\n              </h1>\n              <pre>{componentStack + '\\n' + error.message}</pre>\n            </React.Fragment>\n    );\n  }\n}\n\nexport default App;\n")),(0,o.mdx)("p",null,"Please note that your code may slightly differ from the given example depending on the version of the template for generation, but the main logic will be the same."),(0,o.mdx)("h3",{id:"extension-registration"},"Extension registration"),(0,o.mdx)("p",null,"This logic component ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/aem-assets-view-1/web-src/src/components/ExtensionRegistration.js")," registers our extension\nwith the host AEM instance as soon as it loads, so they can share data and communicate with each other."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Text } from '@adobe/react-spectrum';\nimport { register } from '@adobe/uix-guest';\nimport { extensionId } from './Constants';\n\nfunction ExtensionRegistration() {\n  const init = async () => {\n    const guestConnection = await register({\n      id: extensionId,\n      methods: {\n        detailSidePanel: {\n          async getPanels() {\n            const { path } = await guestConnection.host.details.getCurrentResourceInfo();\n            if (path && path.toLowerCase().endsWith('.jpeg')) {\n              return [\n                {\n                  'id': 'asset-info',\n                  'tooltip': 'Asset Info',\n                  'icon': 'Extension',\n                  'title': 'Asset Info',\n                  'contentUrl': '/#asset-info',\n                  'reloadOnThemeChange': 'true',\n                },\n              ];\n            }\n            return [];\n          },\n        },\n      },\n    });\n  };\n  init().catch(console.error);\n\n  return <Text>IFrame for integration with Host (AEM Assets View)...</Text>;\n}\n\nexport default ExtensionRegistration;\n")),(0,o.mdx)("p",null,"We use the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/uix-sdk"},"UIX SDK Guest library")," and call the ",(0,o.mdx)("inlineCode",{parentName:"p"},"register()")," function, which connects to the host application\nand declares methods the host can call on the extension. "),(0,o.mdx)("p",null,"The extension descriptor passed to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"register()")," function in particular declares the ",(0,o.mdx)("a",{parentName:"p",href:"../api/details-view/#extension-api-reference"},(0,o.mdx)("inlineCode",{parentName:"a"},"getPanels()")),"\nmethod, which in turns returns an array of custom panel descriptors upon a request from the AEM Assets View."),(0,o.mdx)("p",null,'In case of our extension, we check the selected asset\'s path and return a custom panel descriptor only if the asset has a "png" extension,\notherwise we return an empty array:'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const { path } = await guestConnection.host.details.getCurrentResourceInfo();\nif (path && path.toLowerCase().endsWith('.jpeg')) {\n  return [\n    {\n        ...\n    },\n  ];\n}\nreturn [];\n")),(0,o.mdx)("p",null,"Note that we have to ",(0,o.mdx)("inlineCode",{parentName:"p"},"await")," the ",(0,o.mdx)("inlineCode",{parentName:"p"},"getCurrentResourceInfo()")," method call to get the selected asset's path, as all the communication with the host application is asynchronous."),(0,o.mdx)("h3",{id:"custom-panel"},"Custom panel"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/aem-assets-details-1/web-src/src/components/PanelAssetInfo.js")," component is responsible for rendering the custom panel content."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport { attach } from '@adobe/uix-guest';\nimport {\n  Flex,\n  Provider,\n  defaultTheme,\n  Link,\n  Text,\n  ButtonGroup,\n  Button,\n  View\n} from '@adobe/react-spectrum';\n\nimport { extensionId } from './Constants';\n\nexport default function PanelAssetInfo() {\n  // Fields\n  const [guestConnection, setGuestConnection] = useState();\n  const [colorScheme, setColorScheme] = useState('light');\n  const [path, setPath] = useState('');\n\n  useEffect(() => {\n    (async () => {\n      const guestConnection = await attach({ id: extensionId });\n      setGuestConnection(guestConnection);\n\n      const { colorScheme } = await guestConnection.host.theme.getThemeInfo();\n      setColorScheme(colorScheme);\n\n      const { path } = await guestConnection.host.details.getCurrentResourceInfo();\n      setPath(path);\n    })()\n  }, []);\n\n  function displayToast(variant, message) {\n    guestConnection.host.toast.display({ variant, message });\n  }\n\n  return (\n          <Provider theme={defaultTheme} colorScheme={colorScheme} height={'100vh'}>\n            <View backgroundColor=\"gray-50\">\n              <View padding=\"size-300\">\n                <Flex justifyContent=\"center\" marginTop=\"size-400\">\n                  <ButtonGroup>\n                    <Button variant=\"primary\" onPress={() => displayToast('neutral', `Current path: ${path}`)}>current path</Button>\n                  </ButtonGroup>\n                </Flex>\n              </View>\n            </View>\n          </Provider>\n  );\n}\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"PanelAssetInfo")," establishes a connection with the AEM Assets View using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"attach()")," function and\nsets up React Spectrum color scheme based on information obtained from the AEM Assets View."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"displayToast()")," function is used to display a toast message with the selected asset's path when the user clicks the button."),(0,o.mdx)("h2",{id:"test-in-local-environment"},"Test in local environment"),(0,o.mdx)("p",null,"From the extension project directory, run the following command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app run\n")),(0,o.mdx)("p",null,"This will deploy the actions to Adobe I/O Runtime while running the UI part on the local machine."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"➜  demo-extension-project % aio app run\n  create .vscode/launch.json\n\nNo change to package.json was detected. No package manager install will be executed.\n\nTo view your local application:\n  -> https://localhost:9080\nTo view your deployed application in the Experience Cloud shell:\n  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://localhost:9080\npress CTRL+C to terminate dev environment\n")),(0,o.mdx)("p",null,"Now your UI extension is reachable via the URL displayed URL in the Terminal. You can test your UI extension\nwithin AEM Assets View by adding the following URL parameters:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"ext (extension): ",(0,o.mdx)("inlineCode",{parentName:"li"},"ext=https://localhost:9080")),(0,o.mdx)("li",{parentName:"ul"},"devMode (development mode): ",(0,o.mdx)("inlineCode",{parentName:"li"},"devMode=true"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample AEM Assets View URL:")," `",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/?devMode=true&ext=https://localhost:9080&#/assets/workspace/"},"https://experience.adobe.com/?devMode=true&ext=https://localhost:9080&#/assets/workspace/")),(0,o.mdx)("p",null,"You may have to accept self-signed certificate as described in the ",(0,o.mdx)("a",{parentName:"p",href:"../debug/#accept-the-certificate"},"Troubleshooting")," section."),(0,o.mdx)("h2",{id:"run-on-stage"},"Run on Stage"),(0,o.mdx)("p",null,"After the development is completed, we can test our application on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage")," before deploying to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production"),".\nFor this we will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage")," workspace in the Adobe Developer Console."),(0,o.mdx)("p",null,"First, make sure you are logged in proper organization, and use ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage")," works:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"$ aio where\n\nYou are currently in:\n1. Org: Alpha Org\n2. Project: AssetInfoExtension\n3. Workspace: Stage\n")),(0,o.mdx)("p",null,"After that, we build and deploy the frontend files/assets:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app deploy\n  no backend or a build already exists, skipping action build for 'aem/assets/details/1'\n✔ Building web assets for 'aem/assets/details/1'\nno backend, skipping action deploy 'aem/assets/details/1'\n✔ Deploying web assets for 'aem/assets/details/1'\nTo view your deployed application:\n  -> https://123456-yournamespace-stage.adobeio-static.net/index.html\nTo view your deployed application in the Experience Cloud shell:\n  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://123456-yournamespace-stage.adobeio-static.net/index.html\nFor a developer preview of your UI extension in the AEM Assets View environment, follow the URL:\n  -> https://experience.adobe.com/aem/extension-manager/preview/<preview hash>\nNew Extension Point(s) in Workspace 'Stage': 'aem/assets/details/1'\nSuccessful deployment 🏄\n")),(0,o.mdx)("p",null,"You can use the staging deployment URL (",(0,o.mdx)("inlineCode",{parentName:"p"},"https://123456-yournamespace-stage.adobeio-static.net/index.html")," in this  example)\nto test the extension with AEM Assets View by passing this URL to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ext=")," URL parameter as described in ",(0,o.mdx)("a",{parentName:"p",href:"../debug/#load-ui-extension"},"Load UI Extension")," section."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/5530d/asset-info-extension.webp 320w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/0c8fb/asset-info-extension.webp 640w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/94b1e/asset-info-extension.webp 1280w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/e99cd/asset-info-extension.webp 1309w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/dd4a7/asset-info-extension.png 320w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/0f09e/asset-info-extension.png 640w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/bbbf7/asset-info-extension.png 1280w","/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/3d556/asset-info-extension.png 1309w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/9a84941bfe7b48ecafc30fae93dd1e2b/bbbf7/asset-info-extension.png",alt:"Testing on Stage",title:"Testing on Stage",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"To learn more about deployment, please refer to ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#7-deploying-the-application"},"Deploying the Application"),"\nand ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/deployment/"},"Deployment Overview"),"."),(0,o.mdx)("h2",{id:"deploy-on-production-and-create-approval-request"},"Deploy on Production and create approval request"),(0,o.mdx)("p",null,"After the application has been completed, tested locally, and on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage"),": we are ready to deploy it to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production"),".\nRefer to the ",(0,o.mdx)("a",{parentName:"p",href:"../../../guides/development-flow#deploy-on-production"},"UI Extensions Development Flow")," to learn how to do this."),(0,o.mdx)("p",null,"Also in this document you can find the whole development flow of a UI Extensions."),(0,o.mdx)("h2",{id:"additional-resources"},"Additional resources"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../../guides/development-flow"},"UI Extensions Development Flow")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../../guides/publication"},"UI Extensions Management")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../debug"},"Troubleshooting")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../../getting-started/faq/"},"FAQ"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-assets-view-extension-development-index-md-3ecbcda6e6a6d5c39b9d.js.map