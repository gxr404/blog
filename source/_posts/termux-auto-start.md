---
title: termux自启服务
tags:
  - terumx
  - android
date: 2025-04-01 14:08:01
---


[上篇blog讲了手机端安装qinglong面板](/terumx-qinglong)，接下自然就想要手机关机后自启服务

[Termux官方出了几个插件app来实现额外的功能](https://wiki.termux.com/wiki/Addons): 

- [Termux:API](https://github.com/termux/termux-api-package): 访问Android和Chrome硬件功能 —— 简单的说就是提供了好几个api有查看电池状态,屏幕亮度...
  - 除了安装TermuxAPI的app还需要在termux安装`pkg install termux-api`
  - [一些api需授权特定的权限](https://wiki.termux.com/wiki/Termux:API)
- [Termux:Boot](https://github.com/termux/termux-boot): 设备(手机)启动时运行脚本
  - 注意是手机启动的时而不是打开Terumx时
- Termux:Float: 在浮动窗口中运行Termux
- Termux:Styling: 自定义 Termux 终端的外观样式
- Termux:Tasker: 定时运行脚本/有条件(网络变化,收到短信)触发执行脚本
- [Termux:Widget](https://github.com/termux/termux-widget): 手机桌面放置 小部件，点击后运行 Termux 脚本

## Termux:Boot

综上所述我这里只需用到`Termux:Boot`

1. 首先安装Termux:Boot的app，在[F-Droid](https://f-droid.org/packages/com.termux.boot/)
2. Android关闭Termux和Termux:Boot应用程序的电池优化(防止后台进程被杀死)和开启后台运行的权限
3. 在Termux中创建`~/.termux/boot/`命令，将要执行的脚本放在该目录中

例如:

创建"~/.termux/boot/start-sshd"每次手机重启都自动启动sshd

```bash
#!/data/data/com.termux/files/usr/bin/sh
termux-wake-lock
sshd
```

创建`~/.termux/boot/start-startalpine`每次手机重启都自动使用tmux创建一个session来启动apline

```bash
#!/data/data/com.termux/files/usr/bin/sh

termux-wake-lock
tmux new-session -d -s alpine-session 'startalpine'
```

> ps: startalpine命令是[TermuxAlpine](https://github.com/Hax4us/TermuxAlpine)脚本安装后添加的
> 用来启动apline系统

没有tmux则使用`apt install tmux`安装


这样我们就实现了手机重启后自动运行 sshd 和 启动 apline


## 打开Termux自运行脚本

有了手机重启自动启动sshd后，如果后续 termux进程意外退出或者关闭，重新打开Termux后还行重新执行sshd，这样就很麻烦了

创建`~/.bashrc` 可以在每次会话创建时执行脚本

```bash
termux-wake-lock

sshd

tmux new-session -d -s alpine-session 'startalpine'
```

## alpine中qinglong面板自启动

上面已经实现了alpine自启动，可alpine中安装的qinglong面板并没有自启

进入alpine系统后 编辑`/etc/profile`文件在末尾添加

```bash
# ...

qinglong &
```
