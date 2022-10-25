---
title: Troubleshooting the most common issues - AEM Content Fragments Console Extensibility
description: Discover troubleshooting guide for some of the most common issues.
contributors:
  - https://git.corp.adobe.com/dx-devex-acceleration/uix-docs
---
# Troubleshooting the most common issues

## AIO CLI is outdated
Ensure your CLI and all plugins are up to date.

Check the installed version of AIO CLI:
```shell
aio -v
```

Compare it with current published version:
```shell
npm show @adobe/aio-cli version
```

If your CLI is outdated, update it by running:
```shell
npm install -g @adobe/aio-cli
```

After that, you can simply run `aio update` to ensure all core plugins are updated.

Find more details on [Prepare your local environment](../local-environment).

## Unable to login via `aio login`
Go to https://account.adobe.com and click "Sign Out". Open terminal and type `aio logout`.
Then try to run `aio login` again.

### "Your connection is not private" in the browser
If you see this message when navigating to https://localhost:9080, click `Advanced` and `Proceed to localhost (unsafe)` to accept the certificate.

![Certification](../../services/aem-cf-console-admin/extension-development/cert-1.png)

![Certification](../../services/aem-cf-console-admin/extension-development/cert-2.png)

## NodeJS with Mac M1 chip
There are no pre-compiled NodeJS binaries for versions prior to 15.x for Apple's new M1 chip (arm64 architecture). One solution is to change the architecture of your shell from arm64 to x86.

We recommend using the [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) over [Homebrew](https://brew.sh/) and follow their [troubleshooting guides for macOS](https://github.com/nvm-sh/nvm#macos-troubleshooting) (section Macs with M1 chip).

### Additional resources

- [App Builder Common Troubleshooting](https://developer.adobe.com/app-builder/docs/getting_started/common_troubleshooting/).
