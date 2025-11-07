# UI Extensibility Developers Documentation

This is the documentation for the UI Extensibility framework and extensibility capabilities of services integrated with it.

UI Extensibility allows to injection of 3rd-party UI implemented as App Builder applications into Adobe Services.

# Contribution
## Local Development

### Prerequisites

This project uses Yarn 3 to manage package dependencies. If you do not have Yarn 3 installed, follow these instructions:

1. Install [Node.js LTS](https://nodejs.org/en/download/). At the time of writing, the latest LTS version is `v16.15.1`.
2. Install Yarn 3 by running the following command:

   ```bash
   corepack enable
   ```

Corepack is a binary shipped with all Node.js releases starting from 16.10.

3. Update Yarn to the latest version by running the following command:

   ```bash
   yarn set version stable
   ```

4. Make sure you are now using version 3.2.1 of Yarn:.

   ```bash
   yarn --version
   ```

That's it. For more information on Yarn 3 usage, see [Yarn usage](https://yarnpkg.com/getting-started/usage).

### Run development server

For local development, simply use:

```
$ yarn
yarn dev
```
## Adobe I/O Documentation Template

This is a site build with the [Adobe I/O Documentation Template](https://github.com/adobedocs/dev-site-documentation-template/) template for the [Adobe I/O Theme](https://github.com/adobe/aio-theme).

Please reference for corresponding documentation for more details regarding content requirements and development flow.
