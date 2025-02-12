---
title: Localizing Extensions>
description: Prepare your UI extension to be localized.
contributors:
  - https://github.com/AdobeDocs/uix
---
# Localizing extensions

Localization (often referred to as i18n) is the process of adapting your application to different languages and regions. `react-intl` is a popular library for React applications that helps you implement internationalization by providing components and APIs to format numbers, dates, strings, and handle translations.

This guide walks you through the process of setting up `react-intl` in your extension and localizing it for multiple languages.

### Install dependencies and set up localization files

Run the following command to install `react-intl`:
```
npm install react-intl
```

Create a folder (ex: 'locales') within the `src/<extension_point>/web-src/src/components` folder of the extension to store translation files. 

### Set up react-intl

In order to use react-intl in your application, you need to wrap your root component with the `IntlProvider`. This component takes a `locale` prop (the current language) and a `messages pro`p` (the translation messages). Furthermore, since the locale of the host application won't be known until the extension is loaded, allow dynamic language switching via state variables.

```
import React, {useState} from "react";
import ErrorBoundary from "react-error-boundary";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ExtensionRegistration from "./ExtensionRegistration";
import UIExtensibilityModal from "./UIExtensibilityModal";

import enMessages from './locales/en.json';
import frMessages from './locales/fr.json';

function App() {
  const [language, setLanguage] = useState('en-US');

  // Dynamically load the appropriate messages based on language
  const messages = language === 'fr-FR' ? frMessages : enMessages;
  
  return (
    <IntlProvider locale={language} messages={messages}>
    <Router>
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
        <Routes>
          <Route index element={<ExtensionRegistration/>} />
          <Route
            exact path="index.html"
            element={<ExtensionRegistration/>}
          />
          <Route
            exact path="aem-uix-examples-cf-console-header-menu-button-ui-extensibility"
            element={<UIExtensibilityModal setLanguage={setLanguage} />}
          />
          // YOUR CUSTOM ROUTES SHOULD BE HERE
        </Routes>
      </ErrorBoundary>
    </Router>
    </IntlProvider>
  )

  // Methods

  // error handler on UI rendering failure
  function onError(e, componentStack) {}

  // component to show if UI fails rendering
  function fallbackComponent({ componentStack, error }) {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Phly, phly... Something went wrong :(
        </h1>
        <pre>{componentStack + "\n" + error.message}</pre>
      </React.Fragment>
    )
  }
}

export default App
```