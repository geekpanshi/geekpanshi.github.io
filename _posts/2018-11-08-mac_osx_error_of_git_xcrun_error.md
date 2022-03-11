---
title: Mac OSX 系统下命令行 xcrun error  invalid active developer path 问题解决方法
tags:
  - 教育
  - Git
  - MAC
comments: true
toc: true
categories:
  - 技术相关
  - 软件使用
slug: 3f11ae53
keywords:
  - xcrun error
description: >-
  今天下午，Mac 系统升级到 10.14 后，命令行运行 `git pull`获取远端代码时报错，尝试了 git 的其他命令也是报同样的错，报错如下
  xcrun  error iinvalid active developer path
  (/Library/Developer/CommandLineTools), missing xcrun at
  /Library/Developer/CommandLineTools/usr/bin/xcrun，解决这个问题的记录。
date: 2018-11-08 19:10:03
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### Mac OSX 系统下命令行 xcrun: error: invalid active developer path 问题解决方法
---
> 今天下午，Mac 系统升级到 10.14 后，命令行运行 `git pull`获取远端代码时报错，尝试了 git 的其他命令也是报同样的错，报错如下：
>
> > xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

#### 1. 问题描述
> 命令行运行 `git pull`获取远端代码时报错，尝试了 git 的其他命令也是报同样的错，报错如下：
>
>> xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

#### 2. 问题解决

##### 2.1 原因描述
> 在 Mac OSX 系统下，git 依赖于 xcode-select 软件作为基础的，升级系统后，xcode-select 作为系统软件被重置，需要再次安装。

##### 2.2 解决步骤
> 1. 开始以为是系统升级以后 git 需要安装，尝试通过 `brew install git` 重新安装 git 仍然报错，报若如下：
>
>> Error: The following formula:
>>   git
>> cannot be installed as a binary package and must be built from source.
>> Install the Command Line Tools:
>>   xcode-select --install
>>
>> Error: Git must be installed and in your PATH!
>> Error: The following formula:
>>   git
>> cannot be installed as a binary package and must be built from source.
>> Install the Command Line Tools:
>>   xcode-select --install

> 2. 看了上述报错信息，发现时需要重新安装 xcode-select，于是在命令行执行 `xcode-select –install` ，会弹出 UI 的安装界面，等待安装完成。

> 3. 安装完成后，尝试使用 `git pull` 去获取远端代码，不再报错，错误解决掉了。
