---
title: 常见的ERC
tags:
  - ethereum
  - web3
  - erc
  - 科普
categories: 技术
---

ERC(Ethereum Request for Comment)以太坊征求意见, ERC 是EIP的一个[子分类](https://eips.ethereum.org/)。
ERC是应用级标准和规范，如 合约标准、token标准(ERC-20)

## ERC-20

[ERC-20代币标准](https://eips.ethereum.org/EIPS/eip-20)该标准规范了 **智能合约中实现代币的标准API**

> [!TIP]
> 即规范了一个符合标准ERC-20的智能合约需要有哪些方法和事件

方法

- name: 返回token的名称 `function name() public view returns (string)`
- symbol: 返回token的符号 `function symbol() public view returns (string)`
- decimals: 返回token使用的小数位数 `function decimals() public view returns (uint8)`
- totalSupply: 返回token的总供应量 `function totalSupply() public view returns (uint256)`
- balanceOf: 返回一个地址的余额 `function balanceOf(address _owner) public view returns (uint256 balance)`
- transfer: 将`_value`数量的代币转移到地址`_to` ，并且必须触发Transfer事件
  - `function transfer(address _to, uint256 _value) public returns (bool success)`
- transferFrom: 将`_value`数量的代币从地址`_from`转移到地址`_to` ，并且必须触发Transfer事件
  - `function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)`
- approve: 允许某个地址从你的账户可转移金额
  - `function approve(address _spender, uint256 _value) public returns (bool success)`
- allowance: 返回仍允许_spender从_owner提取的金额(即 用户 调用 智能合约的 approve批准方法后 可使用allowance查询)
  - `function allowance(address _owner, address _spender) public view returns (uint256 remaining)`

事件

- Transfer
- Approval

> [!TIP]
> 最初bitcoin不支持智能合约, 所以也没有对应的brc-20, 不支持NFT。
> 后面出现的BRC-20 作为基于 Ordinals 协议

## ERC-721

[ERC-721标准](https://eips.ethereum.org/EIPS/eip-721)该标准规范了 **智能合约中实现非同质化代币(NFT)的标准**


## 参考

- [erc-20](https://eips.ethereum.org/EIPS/eip-20)
- [ERCs开源地址](https://github.com/ethereum/ERCs)
