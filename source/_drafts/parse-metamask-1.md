---
title: metamask源码解析(一)
tags:
  - chrome-extension
  - web3
  - metamask
  - stream
  - npm-package
categories: 技术
---

MetaMask是最受欢迎的钱包之一, 是进入Web3世界的标志性工具，最重要是完全开源。

> ps: 对于开发者来说就是一款浏览器插件

## 前提

开始之前先需具备的知识点:

- chrome插件开发基础
- metamask的其他库基础库
  - stream相关的库:
    - [@metamask/object-multiplex](/parse-object-multiplex)
    - [@metamask/post-message-stream](/parse-post-message-stream)
    - [extension_port_stream](/parse-extension-port-stream)
  - lavamoat
- ⭐️ `@metamask/providers`: metamask注入 providers主要库
  - `@metamask/json-rpc-engine` 和 `@metamask/json-rpc-middleware-stream`
- `@metamask/network-controller`
- @metamask/eth-json-rpc-middleware

- 涉及的以太坊改进提案:
  - [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963)
  - [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)

EIP: Ethereum Improvement Protocol--[以太坊改进提案](https://eips.ethereum.org/)-[github](https://github.com/ethereum/EIPs)
BIP: Bitcoin Improvement Proposals--[比特币改进提案](https://github.com/bitcoin/bips)

4个stream window.postMessage


