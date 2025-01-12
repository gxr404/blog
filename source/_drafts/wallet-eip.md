---
title: 钱包相关EIP
tags:
  - ethereum
  - web3
  - eip
  - wallet
  - 科普
categories: 技术
---

EIP(Ethereum Improvement Proposal)[以太坊改进提案](https://github.com/ethereum/EIPs), 社区用于提出、讨论和实施以太坊协议改进或生态系统改动的一种标准化流程。
Bitcoin也有类似的BIP(Bitcoin Improvement Proposals)[比特币改进提案](https://github.com/bitcoin/bips)

## EIP-1193

[EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)中定义了以太坊Provider API规范, 确保客户端与应用之间的一致性

> [!NOTE]
> 通俗理解就是: 类似metamask这种浏览器钱包安装后会往window对象上注入一个ethereum对象(即provider)。
> 该提案规范了 provider对象中需提供什么api接口和事件

API

- request方法: 向以太坊提交JSON-RPC API请求
  ```ts
  Provider.request({
    method: string,
    params: readonly unknown[] | object;
  }): Promise<unknown>
  ```

Events

- connect: 连接事件
- disconnect: 断开连接事件
- chainChanged: 链切换事件
- accountsChanged: 账号更改事件
- message: provider向应用推送消息时触发的事件

> [Metamask的以太坊Provider API文档](https://docs.metamask.io/wallet/reference/provider-api/)


## EIP-6963

[EIP-6963](https://eips.ethereum.org/EIPS/eip-6963)是为了解决多个钱包插件注入provider导致冲突的解决方案

根据EIP-1193中介绍的浏览器插件钱包需往全局的window对象注入`ethereum(provider)`, 然而可能对安装多个浏览器插件钱包的用户带来冲突

> 浏览器插件加载到网页中的顺序是不稳定的，从而导致用户无法选择哪个钱包provider  
> 如 A钱包先加载 `window.ethereum = providerA`, 然后 B钱包先加载 `window.ethereum = providerB`
> 用户最终拿到的都是后加载的provider
> 由于插件的加载顺序不稳定 下次可能就是 B钱包先加载 A钱包后加载

EIP-6963就是为了解决存在多个provider冲突的情况, 通过window事件来实现，使得用户可以选择自己喜欢的钱包

### 原理

- wallet provider
  1. 监听`eip6963:requestProvider` 事件，来确定用户是否需要提供provider(以前是直接粗暴的注入window.ethereum 不管用户需不需要)
  2. 如果监听到`eip6963:requestProvider` 事件，会触发CustomEvent事件`eip6963:announceProvider` 用来公布钱包自身的provider
     - 每个钱包插件的provider都可能有细微差异，如 metamask会有ethereum.isMetaMask = true
- dapp(浏览器端)
  1. 如果需要钱包功能provider 则需触发·eip6963:requestProvider·事件` window.dispatchEvent(new Event("eip6963:requestProvider"))`
  2. 监听`eip6963:announceProvider`以获得 provider

wallet

```js
function announceProvider() {
  const info: EIP6963ProviderInfo = {
    uuid: "350670db-19fa-4704-a166-e52e178b59d2",
    name: "Example Wallet",
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>",
    rdns: "com.example.wallet"
  };
  window.dispatchEvent(
    new CustomEvent("eip6963:announceProvider", {
      detail: Object.freeze({ info, provider }),
    })
  );
}

// 第一步
window.addEventListener(
  "eip6963:requestProvider",
  (event: EIP6963RequestProviderEvent) => {
    // 第二步
    announceProvider();
  }
);
```

client Dapp

```js
window.addEventListener(
  "eip6963:announceProvider",
  (event) => {
    console.log(event.detail)
  }
);

window.dispatchEvent(new Event("eip6963:requestProvider"));
```

> [!TIP]
> 如果你当前的浏览器安装了多个钱包插件(且钱包插件遵守EIP6963规范)，则可以复制上面 client Dapp的代码到浏览器的控制台上执行
> 有多少个钱包就会打印多次钱包的provider对象


## 参考

- [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)
- [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963)
- [EIPs开源地址](https://github.com/ethereum/EIPs)
