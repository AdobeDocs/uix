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
        title: "Overview",
        path: "/overview/"
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
          }
        ]
      }
    ],
    subPages: [
      // Overview
          {
            title: "Why I Need It",
            path: "/overview/reason/"
          },
          {
            title: "How It Works",
            path: "/overview/design/"
          },
          {
            title: "How to Get Access",
            path: "/overview/get-access/"
          },
          {
            title: "App Builder and UI Extensibility",
            path: "/overview/app-builder/"
          },
          {
            title: "FAQ",
            path: "/overview/faq/"
          },
      // Common guides
      {
        title: "UI Extensions Development Flow",
        path: "/guides/development-flow/"
      },
      {
        title: "UI Extension Publication and Management",
        path: "/guides/publication/"
      },
      {
        title: "Set Up Local Environment",
        path: "/guides/local-environment/"
      },
      // Services
      {
        title: "Extensible Services",
        path: "/services/",
        header: true
      },
      {
        title: "Extension Points",
        path: "/services/aem-cf-console-admin/api/"
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
      }
    ]
  },
  plugins: [
    "@adobe/gatsby-theme-aio/"
  ]
};
