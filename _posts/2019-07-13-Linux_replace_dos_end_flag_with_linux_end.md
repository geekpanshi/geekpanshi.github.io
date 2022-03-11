---
title: Linux 替换 ^M 字符的方法
tags:
  - Linux
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
abstract: 'Welcome to my blog, enter password to read.'
message: 'Welcome to my blog, enter password to read.'
copyright: true
slug: e8b6a148
keywords:
  - window换行符替换
  - ^M
  - 换行符替换
description: 在 Linux 下使用 vi/vim 来查看一些在 Windows 下创建的文本文件，有时会发现在行尾有一些“ ^M ”。有以下几种方法可以处理。
date: 2019-07-13 13:00:37
password:
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### Linux 替换 ^M 字符的方法

---
> 在 Linux 下使用 vi/vim 来查看一些在 Windows 下创建的文本文件，有时会发现在行尾有一些“ ^M ”。有以下几种方法可以处理。
>
---

#### 1. 使用 dos2unix 命令
> dos2unix 一般的分发版本中都带有这个小工具（如果没有可以根据下面的连接去下载），使用起来很方便
>>
>> $ dos2unix myfile.txt
>
> 上面的命令就会去掉行尾的“ ^M ”。

#### 2. 使用 vi/vim 的替换功能
> 启动 vi/vim ，进入命令模式，输入以下命令:
>>
>>
>> :%s/^M$//g                  # 去掉行尾的 ^M。
>>
>> :%s/^M//g                   # 去掉所有的 ^M。
>>
>> :%s/^M/[ctrl-v]+[enter]/g   # 将 ^M 替换成回车。
>>
>> :%s/^M/\r/g                 # 将 ^M 替换成回车。

#### 3. 使用 sed 命令
> 其实和 vi/vim 是类似的
>>
>> $sed -e ‘s/^M/\n/g’ myfile.txt
>
> 注意：**这里的 “^M” 要使用 “CTRL-V CTRL-M” 生成，而不是直接键入 “^M” 。
