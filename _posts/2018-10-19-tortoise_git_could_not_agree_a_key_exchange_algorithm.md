---
title: Tortoise git could't agree a key exchange algorithm
tags:
  - Git
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
keywords:
  - git
  - github
  - TortoiseGit
slug: bb4ceca5
date: 2018-10-19 06:13:35
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### Tortoise git could't agree a key exchange algorithm

#### 1. 问题描述

> 因为一直被墙，好久不玩 Github 了，最近一时兴起，想建立自己的博客，就从新申请了个 github 账户，前几天都是用 `Git Bash` 通过在目录中右键的 `Git Bash Here` 在命令行进行操作
> 今天早晨想用 TortoiseGit 命令 `git pull` 下载代码，发现没法更新，报错，报错信息如下
````python
Tortoise git could't agree a key exchange algorithm ……
```
> 又试了一下 `git push` 上传代码，也是会报同样的错误。

#### 2. 问题解决
##### 2.1 原因描述
> Githunb 官网更新了相关的 ssh-key 验证规则，导致老版本的 TortoiseGit 无法使用，需要通过新的 TortoiseGit 去适配。

##### 2.2 解决步骤
1. 下载并安装 TortoiseGit，下载地址：[TortoiseGit 下载地址](https://tortoisegit.org/download/ "TortoiseGit 下载地址")。

2. 通过 TortoiseGit 尝试 `git pull` 更新代码，发现提示 `git for windows` 版本过低。

3. 下载并安装 Git for Windows：Git-Bash，下载地址：[Git-Bash 下载地址](https://gitforwindows.org/ "Git-Bash 下载地址")。

4. 通过 TortoiseGit 再次尝试 `git pull` 更新代码，可以更新，问题解决。
