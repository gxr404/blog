---
title: 理解metamask的extension-port-stream包
tags:
  - chrome-extension
  - web3
  - metamask
  - npm-package
  - stream
categories: 技术
---

[extension-port-stream](https://github.com/MetaMask/extension-port-stream)将[浏览器插件上的Runtime.Port对象](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 转成stream流对象.

继承于[readable-stream](https://github.com/nodejs/readable-stream)[^1]的`Duplex`

该库比较简单:

stream实例对象上的`_write`调用了portInstance.postMessage方法 作为输出
监听`portInstance.onMessage.addListener`(内部调用了`stream.push`方法)作为输入


## 注意

- `@metamask/post-message-stream`中的runtime是对应浏览器插件中的 `chrome.runtime.sendMessage`和`chrome.runtime.onMessage.addListener` 这种适用于**一次性发送和接收消息**
- `extension-port-stream`中是对应 `portInstance = chrome.runtime.connect` 中的 `portInstance.postMessage` 和 `portInstance.onMessage.addListener`持久的双向通信通道，适用于需要持续交互的场景


[^1]: readable-stream是Node.js官方出的库,旨在提供Streams模块的兼容性实现。允许开发者在不同的Node.js版本中使用一致的`StreamsAPI`，同时也为浏览器环境提供支持
