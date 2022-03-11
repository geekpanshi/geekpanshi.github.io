---
title: Linux Kernel 简介和学习资料
tags:
  - Linux
  - 后端技术
  - 优化
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
abstract: 'Welcome to my blog, enter password to read.'
message: 'Welcome to my blog, enter password to read.'
copyright: true
slug: 214e0f80
keywords:
  - Kernel
  - Linux Kernel
  - elixir
  - ipc
  - arch
description: Linux Kernel 简介和学习资料一览。
photos:
  - /images/204/pre.jpg
date: 2019-08-30 06:32:50
password:
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

#### Linux Kernel 简介和学习资料
> Linux Kernel 简介和学习资料。
>
> ![Linux kernel map](/images/204/index.jpg)

---

##### Linux Kernel 全局一览
> 先来看一幅 [Linux kernel map](/images/204/linux_kernel_map.png)
>
> 下图是由 [makelinux 网站](http://www.makelinux.net/kernel_map/) 提供的一幅非常经典的 Linux 内核图，涵盖了内核最为核心的方法. Linux 除了驱动开发外，还有很多通用子系统，比如 CPU、memory、file system 等核心模块，即便不做底层驱动开发， 掌握这些模块对于加深理解整个系统运转机制还是很有帮助。
>
> ![Linux kernel map](/images/204/linux_kernel_map.png)


##### Linux Kernel 源码目录结构
> 简要列举 [Kernel 源代码](https://www.kernel.org/) 的常见目录

|目录          | 解释                         |  部分子目录                    |
|:------------:|:----------------------------:|:------------------------------:|
|kernel        | 内核管理相关，进程调度等     | sched/fork等                   |
|fs            | 文件子系统                   | ext4/f2fs/fuse/debugfs/proc 等 |
|mm            | 内存子系统                   | -                              |
|drivers       | 设备驱动                     | staging/cpufreq/gpu 等         |
|arch          | 所有CPU体系结构相关的代码    | armm64/x86 等                  |
|include       | 头文件                       | linux/uapi/asm_generic 等      |
|lib           | 标准通用的C库                | -                              |
|ipc           | 进程间通信相关               | -                              |
|init          | 初始化过程（非系统引导阶段） | -                              |
|block         | 块设备驱动程序               | -                              |
|crypto        | 加密、解密、校验算法         | -                              |
|Documentation | 说明文档                     | -                              |

##### 更多资料
> [LXR（The Linux Cross Referencer）](https://elixir.bootlin.com/linux/latest/source)：提供方便地 kernel 在线源码阅读。
>
> [makelinux.net]()：可快速跳转到 linux kernel map 所涉及的任何一种方法。
