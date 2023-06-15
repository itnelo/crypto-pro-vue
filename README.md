
# CryptoPro Vue

- [About](#about)
- [Requirements](#requirements)
- [Installation](#installation)
- [How to use](#how-to-use)
- [See also](#see-also)
- [Changelog](#changelog)

## About

CryptoPro (https://cryptopro.com/) is a bundle of Russian cryptographic tools used to secure and
verify data. Those goals are accomplished by making data signatures (to verify later) and performing
encryption (to prevent unclassified access).

In terms of environment and programming, we have the front side of our application and some sort of
back-end. This set of components covers a **front side** task to prepare data artifacts, which will
help us to **verify** data integrity and authorship of the signer. As such artifacts, we have their
more flexible variant, the **detached signatures**.

## Requirements

- Vue 2.x (`2.6.11` or later).

## Installation

First of all, we need to import the latest version of JavaScript API. See
[vgoma/crypto-pro](https://github.com/vgoma/crypto-pro/tree/master/dist) for dists.

Here is a few examples from live projects. For webpack w/
[jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and default
logic for the [webpack-contrib/copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin),
which relies on `public`, as a directory for static assets (assuming we have a `crypto-pro.min.js`
under `{project_root}/public/js`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
<noscript>
    <strong>
        We're sorry but <%= htmlWebpackPlugin.options.title %>
        doesn't work properly without JavaScript enabled.
        Please enable it to continue.
    </strong>
</noscript>
<div id="app"></div>
<!-- built files will be auto injected -->

...
<script src="<%= BASE_URL %>js/crypto-pro.min.js"></script>
</body>
</html>
```

For more modern [vitejs/vite](https://github.com/vitejs/vite) approach (same location for
the `crypto-pro.min.js`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
<div id="app"></div>

...
<script type="application/javascript" src="/js/crypto-pro.min.js"></script>
</body>
</html>
```

(`publicDir` from `vite.config.js` must point on `public`, accordingly).

TBD

## How to use

TBD

## See also

- https://cryptopro.ru/products/cades/plugin — An official download page (in russian) for the
CryptoPro Digital Signature Browser Plug-in (CryptoPro DSBP; a bridge between front-end code
and the CryptoPro CSP instance).
- [vgoma/crypto-pro](https://github.com/vgoma/crypto-pro) — A high level JavaScript API to interact
with CryptoPro DSBP.
- https://cryptopro.com/products/csp — An implementation of the Cryptographic Service Provider (CSP)
interface, which performs an actual data signing procedure under the hood.

## Changelog

All notable changes to this project will be documented in [CHANGELOG.md](CHANGELOG.md).
