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
  pathPrefix: process.env.PATH_PREFIX || '/pages/dx-devex-acceleration/uix-docs/',
  siteMetadata: {
    home: {
      title: 'UI Extensibility',
      path: '/'
    },
    pages: [
      {
        title: 'Overview',
        path: 'overview/',
      },
      {
        title: 'Extensible Services',
        menu: [
          {
            title: 'AEM Content Fragments Console',
            path: 'services/aem-cf-console-admin/'
          },
          {
            title: 'AEM Content Fragments Editor',
            path: 'services/aem-cf-editor/'
          }
        ]
      }
    ],
    subPages: [
      {
        title: "Overview",
        path: "overview/"
      },
      {
        title: "Why I Need It",
        path: "overview/reason/"
      },
      {
        title: "How It Works",
        path: "overview/design/"
      },
      {
        title: "How to Get Access",
        path: "overview/requirements/"
      },
      {
        title: "App Builder and UI Extensibility",
        path: "overview/app-builder/"
      },
      {
        title: "FAQ",
        path: "overview/faq/"
      },
      {
        title: "Community",
        path: "overview/community/"
      },
      {
        title:'AEM Content Fragments Console',
        path: 'services/aem-cf-console-admin/',
        pages: [
          {
            title: "Developer Guides",
            path: "services/aem-cf-console-admin/guides/"
          },
          {
            title: "Extension Points",
            path: "services/aem-cf-console-admin/api/"
          },
        ]
      },
      {
        title:'AEM Content Fragments Console',
        path: 'services/aem-cf-editor/',
        pages: [
          {
            title: "Developer Guides",
            path: "services/aem-cf-editor/guides/"
          },
          {
            title: "Extension Points",
            path: "services/aem-cf-editor/api/"
          },
        ]
      }
    ],
  },
  plugins: [
    `@adobe/gatsby-theme-aio`
  ]
};
