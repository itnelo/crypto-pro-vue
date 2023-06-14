
# CryptoPro Vue

- [About](#about)
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

## Installation

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
