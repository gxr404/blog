
```bash

# ipfs dht findprovs <CID>

# 浏览器中查看
https://ipfs.io/ipfs/<CID>

# ipfs refs 查看相关 hash
ipfs refs <CID>
```

ipfs如果节点 不在线就永远都访问不了

ipfs pin add <CID> 命令将文件固定到节点上


## **如果节点离线，且文件没有被其他节点固定或缓存，文件内容将无法访问**。

```
  1. 节点离线是否无法访问？
    如果托管文件的节点离线，而文件未被其他节点缓存或保存，则该文件的内容确实无法访问。因为在 IPFS 中：
      - 文件是通过 内容寻址 的方式被定位的（基于其哈希值/CID）。
      - 只有在某个节点存有该文件的情况下，IPFS 网络才能提供访问。
    因此，如果唯一托管文件的节点离线，网络中就没有源节点可以提供该内容。

  2. 如何避免节点离线导致的不可访问?
    为了确保文件在节点离线时仍然可以被访问，可以采用以下方法：

    方法 1：将文件固定（Pinning）到多个节点
      - 固定（Pinning）：
      - 使用 ipfs pin add <CID> 命令将文件固定到节点上。
      - 当文件被固定时，节点不会自动垃圾回收这些文件，即使节点本身没有上传该文件。
      - 分布式固定服务：
      - 使用服务如 Pinata 或 Infura IPFS 将文件固定到多个在线的公共节点，增加冗余性。
      - 示例：将文件上传到 Pinata 后，其服务会确保文件长期在线。

    方法 2：使用 IPFS 集群
      - IPFS Cluster 是一种分布式系统，用于协调多个 IPFS 节点，以实现文件的复制和共享。
      - 通过将文件同步到多个节点，即使其中一个节点离线，其他节点仍然可以提供访问。

    方法 3：依赖公共网关缓存
      - 如果文件最近通过公共 IPFS 网关（如 https://ipfs.io）被访问，公共网关可能已缓存文件内容。
      - 但缓存时间取决于网关的策略，文件不会永久保留。

    方法 4：手动复制文件
      - 将文件内容复制到多个节点，并确保这些节点分布式运行。
      - 可以使用 ipfs add 命令上传同一个文件到多个节点，分布式托管文件。

  3. 节点离线的后果
    -  如果没有其他节点保存或缓存文件，文件的 CID 会变得“悬空”（即 CID 存在但无实际内容可检索）。
    -  CID 本身仍然有效，可以用来验证数据的完整性，但无法实际检索内容。
      - cid其实就是类似文件的hash

  4. 是否有解决方案实现“永久存储”？

  IPFS 本身不是永久存储系统，而是内容寻址的分布式文件系统。为了实现永久存储，可以结合其他系统：
    -  Filecoin：
      -  Filecoin 是一个去中心化存储网络，与 IPFS 紧密集成。
      -  用户可以付费在 Filecoin 网络上存储数据，并获得存储证明。
    -  Arweave：
      -  另一个区块链存储系统，适合长期保存数据。


  总结
  如果节点离线，且文件没有被其他节点固定或缓存，文件内容将无法访问。但可以通过以下方式避免：
    - 使用固定服务（如 Pinata）。
    - 部署 IPFS Cluster。
    - 结合分布式存储（如 Filecoin）。

  这些措施可以增强文件在 IPFS 网络中的可用性和持久性。
```

ipfs cid检查: https://check.ipfs.network/
https://github.com/ipfs/ipfs-check


## 发布至 IPNS 的流程

以下是发布内容至 IPNS 的基本步骤：
1. 添加文件到 IPFS

首先，将文件上传到 IPFS，获取其 CID。
```bash
ipfs add <file>
```

2. 使用 ipfs name publish 命令发布至 IPNS

通过 IPNS 地址将 CID 绑定到名称：

```bash
ipfs name publish /ipfs/<CID>
```

输出示例：

```txt
Published to /ipns/QmNodeID: /ipfs/QmFileCID
```

此时，其他用户可以通过以下 IPNS 地址访问内容：

```
/ipns/QmNodeID
```



## 自己的ipfs

https://bafybeicilpsvjmacnijpfm5ajly3siqnxlltnlv3jsayqj7jpujuij5uzq.ipfs.dweb.link/?filename=00042-4222229234.png

关闭ipfs软件后访问不了

