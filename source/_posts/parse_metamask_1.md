---
title: metamask源码解析(一)
tags:
  - chrome-extension
  - web3
  - metamask
categories: 技术
---

MetaMask是最受欢迎的钱包之一, 是进入Web3世界的标志性工具，最重要是完全开源。

> ps: 对于开发者来说就是一款浏览器插件

## 前提

开始之前先需具备的知识点:

- chrome插件开发
- metamask的其他库基础库
  - stream相关的库:
    - [@metamask/object-multiplex](/parse_object_multiplex)
    - @metamask/post-message-stream
