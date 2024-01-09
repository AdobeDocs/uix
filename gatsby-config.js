/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/uix/docs/",
  siteMetadata: {
    pages: [
      {
        title: "UI Extensibility",
        path: "/",
      },
      {
        title: "Getting Started",
        path: "/getting-started/"
      },
      {
        title: "Guides",
        path: "/guides/"
      },
      {
        title: "Extensible Services",
        menu: [
          {
            title: "AEM Content Fragments Console",
            path: "/services/aem-cf-console-admin/"
          },
          {
            title: "AEM Content Fragments Editor",
            path: "/services/aem-cf-editor/"
          },
          {
            title: "Adobe Commerce Admin",
            path: "https://developer.adobe.com/commerce/extensibility/admin-ui-sdk/"
          },
        ]
      },
      {
        title: "Extension Manager",
        path: "/extension-manager/"
      },
    ],
    subPages: [
      // Getting Started
      {
        title: "What Are UI Extensions",
        path: "/getting-started/app-builder/"
      },
      {
        title: "Why Choose UI Extensibility",
        path: "/getting-started/reason/"
      },
      {
        title: "How It Works",
        path: "/getting-started/design/"
      },
      {
        title: "FAQ",
        path: "/getting-started/faq/"
      },
      // Common guides
      {
        title: "Get Access",
        path: "/guides/get-access/"
      },
      {
        title: "Set Up Local Environment",
        path: "/guides/local-environment/"
      },
      {
        title: "Create a Project in Developer Console",
        path: "/guides/creating-project-in-dev-console/"
      },
      {
        title: "Create a New UI Extension",
        path: "/guides/development-flow/"
      },
      {
        title: "Local Preview of the UI Extensions",
        path: "/guides/preview-extension-locally/"
      },
      {
        title: "Publish and Manage the UI Extensions",
        path: "/guides/publication/"
      },
      // Services
      {
        title: "Extensible Services",
        path: "/services/",
        header: true
      },
      {
        title: "Extension Points",
        path: "/services/aem-cf-console-admin/api/",
        pages: [
          {
            title: "Common Concepts",
            path: "/services/aem-cf-console-admin/api/commons/"
          },
          {
            title: "Action Bar",
            path: "/services/aem-cf-console-admin/api/action-bar/"
          },
          {
            title: "Grid Columns",
            path: "/services/aem-cf-console-admin/api/grid-columns/"
          },
          {
            title: "Header Menu",
            path: "/services/aem-cf-console-admin/api/header-menu/"
          },
          {
            title: "Navigation",
            path: "/services/aem-cf-console-admin/api/navigation/"
          },
          {
            title: "Modal Dialogs",
            path: "/services/aem-cf-console-admin/api/modal/"
          }
        ]
      },
      {
        title: "Step-by-step Extension Development",
        path: "/services/aem-cf-console-admin/extension-development/"
      },
      {
        title: "Code Generation",
        path: "/services/aem-cf-console-admin/code-generation/"
      },
      {
        title: "Troubleshooting",
        path: "/services/aem-cf-console-admin/debug/"
      },
      {
        title: "Extension Points",
        path: "/services/aem-cf-editor/api/",
        pages: [
          {
            title: "Common Concepts",
            path: "/services/aem-cf-editor/api/commons/"
          },
          {
            title: "Canvas Data",
            path: "/services/aem-cf-editor/api/data/"
          },
          {
            title: "Rich Text Editor Toolbar",
            path: "/services/aem-cf-editor/api/rte-toolbar/"
          },
          {
            title: "Rich Text Editor Widgets",
            path: "/services/aem-cf-editor/api/rte-widgets/"
          },
          {
            title: "Rich Text Editor Badges",
            path: "/services/aem-cf-editor/api/rte-badges/"
          },
          {
            title: "Rich Text Editor Color Picker",
            path: "/services/aem-cf-editor/api/rte-colorpicker/"
          },
          {
            title: "Header Menu",
            path: "/services/aem-cf-editor/api/header-menu/"
          },
          {
            title: "Navigation",
            path: "/services/aem-cf-editor/api/navigation/"
          },
          {
            title: "Modal Dialogs",
            path: "/services/aem-cf-editor/api/modal/"
          },
          {
            title: "Custom form element rendering",
            path: "/services/aem-cf-editor/api/custom-fields/"
          }
        ]
      },
      {
        title: "Code Generation",
        path: "/services/aem-cf-editor/code-generation/"
      },
      {
        title: "Extension Manager",
        path: "/extension-manager/"
      },
      {
        title: "Feature Highlights",
        path: "/extension-manager/feature-highlights/"
      }
    ]
  },
  plugins: [
    "@adobe/gatsby-theme-aio/"
  ]
};
