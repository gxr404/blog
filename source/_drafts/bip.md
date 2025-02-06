---
title: 比特币区块结构
tags:
  - web3
  - bitcoin
categories: 技术
---

- BIP 173: [Bech32](https://github.com/bitcoin/bips/blob/58ffd93812ff25e87d53d1f202fbb389fdfb85bb/bip-0173.mediawiki) (校验和的BCH_code 和 的Base32算法)
- BIP 350: [Bech32m](https://github.com/bitcoin/bips/blob/58ffd93812ff25e87d53d1f202fbb389fdfb85bb/bip-0350.mediawiki)
- BIP141
- BIP142
- BIP143

- BIP32: 分层确定性钱包(HD钱包 和平时使用的钱包没关系)
  - 可以从单个 seed 生成多个密钥对的加密货币钱包系统
- BIP-39：私钥转助记词
  - 结合 BIP39 和 BIP32, 可以总结出生成多个比特币账户的过程:
    - 通过助记词生成 seed
    - 通过 seed 生成主拓展秘钥
    - 通过主拓展秘钥生成多层子密钥
    - 每个子密钥对应一个比特币账户
- BIP44: 定义了派生路径固定的结构
  - 
- BIP49
- BIP84
- BIP141
- BIP44 
  - 路径是 m/44'/0'/0'/0/0, 定义了生成 P2PKH 地址使用的公私钥。
- BIP49
  - 路径是 m/49'/0'/0'/0/0, 定义了生成 P2SH-P2WPKH 地址使用的公私钥。
- BIP84
  - 路径是 m/84'/0'/0'/0/0, 定义了生成 P2WPKH 地址使用的公私钥。
- BIP86
  - 路径是 m/86'/0'/0'/0/0, 定义了生成 P2TR 地址使用的公私钥。

- EIP 6963
