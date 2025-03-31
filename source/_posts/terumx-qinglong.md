---
title: terumx安装qinglong
tags:
  - terumx
  - android
date: 2025-03-31 19:58:45
---



## 安装Alpine

通过[TermuxAlpine](https://github.com/Hax4us/TermuxAlpine)脚本可以在Terumx中很轻松的安装Alpine


## 安装qinglong面板

在`/etc/profile.d/`下新建`ql_env.sh`脚本


```bash title="ql_env.sh"
#!/bin/bash

export QL_DIR=/ql

export QL_BRANCH=develop

export LANG=zh_CN.UTF-8

export TERMUX_APK_RELEASE=F-DROID

export SHELL=/bin/bash

export PNPM_HOME=~/.local/share/pnpm

export PATH=$PATH:~/.local/share/pnpm:~/.local/share/pnpm/global/5/node_modules
```

重新载入

```bash
 source /etc/profile
```

apk 更新

```bash
apk update -f
apk upgrade
```

安装环境依赖

```bash
apk --no-cache add -f bash make nodejs npm coreutils moreutils git curl wget tzdata perl openssl nginx jq openssh python3 py3-pip
```

更新系统(时区)时间

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 

echo "Asia/Shanghai" > /etc/timezone
```

npm 全局依赖安装

```bash
npm install -g pnpm
pnpm add -g pm2 ts-node typescript tslib
```

克隆qinglong

```bash
mkdir -p $QL_DIR

git clone -b $QL_BRANCH https://github.com/whyour/qinglong.git $QL_DIR

cd $QL_DIR

cp -f .env.example .env

```

添加脚本权限

```bash
chmod 777 $QL_DIR/shell/*.sh
chmod 777 $QL_DIR/docker/*.sh
```

qinglong项目npm依赖安装

```bash
pnpm install --prod
```

qiinglong静态资源克隆

```bash
mkdir -p $QL_DIR/static

git clone -b $QL_BRANCH https://github.com/whyour/qinglong-static.git $QL_DIR/static
```

生成启动脚本

```bash
ln -s /ql/docker/docker-entrypoint.sh /usr/bin/qinglong

# 启动青龙面板
qinglong
```


## 相关文章

- https://www.kejiwanjia.net/jiaocheng/130094.html
- https://github.com/Hax4us/TermuxAlpine
- https://github.com/whyour/qinglong
- https://github.com/cyberkernelofficial/docker-in-termux
