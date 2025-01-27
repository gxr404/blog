---
title: 区块链分叉
tags:
  - web3
  - 科普
categories: 技术
---

区块链分叉(升级？): 软分叉 硬分叉

区块链
> 在加密货币领域，"分叉" 本质上是一种对开源代码进行修改的过程。（区块链的版本升级不像app只有一个版本）


硬分叉是一种激进的升级，它可以使以前的交易和区块有效或无效，并要求网络中的所有验证器升级到更新的版本。它不向后兼容。
软分叉是对向后兼容的软件的升级，并且旧版本链中的验证器将新版本视为有效。

实际上，硬分叉通常会导致永久链分离，因为旧版本不再与新版本兼容。那些在旧链上持有代币的人也被授予新链上的代币，因为他们共享相同的历史。硬分叉的发生可能有多种原因。



## 软分叉

软分叉(还是同一条链)

与硬分叉相比，软分叉所产生之区块能够被旧软件识别为有效区块，即区块向下兼容。
然而，旧软件所产生之区块则未必在新规则下有效。

## 硬分叉

> 硬分叉: 产生了两条完全独立的链

硬分叉之中新分叉所产生之区块将被旧软件(旧链)视为无效。
因此所有参与者，包括交易服务器以及矿工（节点），都必须更新软件，才能继续运行新分叉。
如有节点组继续使用旧软件，而其他节点使用新的软件，**便有可能产生分裂成两只货币**。

> ps: 分叉后的币可以视为资产增加吗? 不太好说 例如 ETHW 上交易所时3USDT左右

### 比特币历史硬分叉

比特币的历史上发生了几次重要的硬分叉事件。以下是比特币的硬分叉历史：

比特币现金（Bitcoin Cash 货币符号为BCH）：比特币现金是比特币的第一个硬分叉，于2017年8月1日发生。这次分叉是由于对比特币区块大小限制的争议。比特币现金增加了区块大小限制到8MB，以提高交易容量和快速确认。持有比特币的用户在分叉时获得了相应数量的比特币现金。

比特币黄金（Bitcoin Gold 货币符号为BTG）：比特币黄金是比特币的第二个硬分叉，于2017年10月24日发生。这次分叉是为了实现比特币的去中心化挖矿，通过采用新的挖矿算法（Equihash）来抵制由专用硬件（ASIC）控制的挖矿垄断。持有比特币的用户在分叉时获得了相应数量的比特币黄金。

比特币钻石（Bitcoin Diamond 货币符号为BCD）：比特币钻石是比特币的第三个硬分叉，于2017年11月24日发生。这次分叉旨在改进比特币的隐私和交易速度。比特币钻石采用了更大的区块大小限制和更快的区块生成时间。持有比特币的用户在分叉时获得了相应数量的比特币钻石。

比特币SV（Bitcoin SV 货币符号为BSV）：比特币SV是比特币的第四个硬分叉，于2018年11月15日发生。这次分叉是由于比特币现金内部的治理和协议规则的争议。比特币SV的支持者认为比特币现金偏离了比特币的原始愿景，并试图通过恢复原始协议和增加区块大小限制来重新实现比特币的目标。

这些硬分叉事件展示了比特币社区内存在的不同观点和争议。每个分叉都导致了新的区块链和独立的加密货币。尽管分叉发生后，这些分叉币种与比特币共享相同的历史交易记录，但它们在技术和治理上有不同的特点和发展方向。

以下按日期／区块列出分裂比特币的硬分叉：

- 比特币现金原链：分叉区块：478558，日期：0年8月1日，客户每持有1个比特币可以得到1个比特币现金原链
- 比特币现金：分叉区块：504031，日期：2017年11月13日，客户每持有1个比特币现金原链可以得到1个比特币现金
- 比特币黄金：分叉区块：491407，日期：2017年10月24日，客户每持有1个比特币可以得到1个比特币黄金
- 比特币SV：：分叉区块：556766，日期：2018年11月15日，客户每持有1个比特币现金可以得到1个比特币SV


### 为什么会发生硬分叉？

- 添加功能
- 纠正安全风险
- 解决加密货币社区内的分歧
- 区块链上的反向交易

- https://www.binance.com/zh-CN/square/post/352621
- https://www.bilibili.com/video/BV15b4y1G7Df/?vd_source=bdbb3c69b1485af0f7bd463b17784781&spm_id_from=333.788.player.switch
- https://www.binance.com/zh-CN/square/post/1036378527018
- https://zh.wikipedia.org/wiki/%E6%AF%94%E7%89%B9%E5%B9%A3%E5%88%86%E5%8F%89%E5%88%97%E8%A1%A8




<pre class="pre-wrap break-word"><code><span class="violet-2 hover-bg-gray-7" data-tippy-content="Version" data-tippy-placement="top">01000000</span> <span class="green-2 hover-bg-gray-7" data-tippy-content="Previous Block" data-tippy-placement="top">6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000</span> <span class="teal-2 hover-bg-gray-7" data-tippy-content="Merkle Root" data-tippy-placement="top">982051fd1e4ba744bbbe680e1fee14677ba1a3c3540bf7b1cdb606e857233e0e</span> <span class="indigo-2 hover-bg-gray-7" data-tippy-content="Time" data-tippy-placement="top">61bc6649</span> <span class="rose-2 hover-bg-gray-7" data-tippy-content="Bits" data-tippy-placement="top">ffff001d</span> <span class="amber-2 hover-bg-gray-7" data-tippy-content="Nonce" data-tippy-placement="top">01e36299</span> <span class="fuchsia-2 hover-bg-gray-7" data-tippy-content="Transaction Count" data-tippy-placement="top">01</span> <span class="gray-2 hover-bg-gray-7" data-tippy-content="Transactions" data-tippy-placement="top">01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000</span>
</code></pre>
