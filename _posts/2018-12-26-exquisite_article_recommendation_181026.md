---
title: 面向对象的编程中如何更好在数据和信息间做抉择
tags:
  - 框架
  - Linux
  - 自建网站
  - 美文推荐
comments: true
toc: true
categories:
  - 生活点滴
  - 日常更新
abstract: 'Welcome to my blog, enter password to read.'
message: 'Welcome to my blog, enter password to read.'
copyright: true
slug: b41ce67
keywords:
  - xmake
  - 跨平台
  - 自动构建
  - 网站排版
  - 网站美化
  - QTPyLib
  - 交易算法
  - 异步框架
  - 非阻塞
  - 面向对象的编程
  - OOP
  - UNIX文件系统
  - 一切都是文件
  - 字节流
description: >-
  1. xmake v2.2.2，我们还可以管理C / C ++的包依赖关系。 2. 如何更好的进行网页排版 3. QTPyLib（高质量的 python
  交易算法库）是一个使用 python 来实现的简洁、事件驱动的交易算法库。 4. 面向对象的编程中如何更好在数据和信息间做抉择 5. 如何理解 “Unix
  里任何东西都是文件” 这句话？/proc、/dev、/tmp、socket、directory 等。
date: 2018-12-26 01:47:50
password:
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### 面向对象的编程中如何更好在数据和信息间做抉择
---
> 1. xmake v2.2.2，我们还可以管理C / C ++的包依赖关系。 2. 如何更好的进行网页排版 3. QTPyLib（高质量的 python 交易算法库）是一个使用 python 来实现的简洁、事件驱动的交易算法库。 4. 面向对象的编程中如何更好在数据和信息间做抉择 5. 如何理解 “Unix 里任何东西都是文件” 这句话？/proc、/dev、/tmp、socket、directory 等。
>
> ![](/images/050/006tNbRwgy1fyjsr2hnd2j31320j4my8.jpg)

---
#### 1. xmake v2.2.2，我们还可以管理C / C ++的包依赖关系

> XMake是一个基于Lua的轻量级跨平台自动构建工具，支持在各种主流平台上构建项目
>
> 它跟cmake、automake、premake有点类似，但是机制不同，它默认不会去生成IDE相关的工程文件，采用直接编译，并且更加的方便易用 采用lua的工程描述语法更简洁直观，支持在大部分常用平台上进行构建，以及交叉编译。
>
> xmake提供了创建、配置、编译、打包、安装、卸载、运行等一些actions，使得开发和构建更加的方便和流程化。
>
> 不仅如此，它还提供了许多更加高级的特性，例如插件扩展、脚本宏记录、批量打包、自动文档生成等等。
>
> 支持语言 C/C++、Objc/Objc++、Swift、Assembly、Golang、Rus、Dlang 和 Cuda。
>
> [xmake v2.2.2，我们还可以管理C / C ++的包依赖关系](http://tboox.org/2018/10/13/xmake-update-v2.2.2-package-deps/)


#### 2. 如何更好的进行网页排版
> 网站排版，水平节奏主要影响易读性，而垂直节奏影响文本的可读性并建立视觉层次感。
>
> 好的网站排站，可以给读者带来愉悦的感觉的。排版中的节奏就像音乐中的节奏一样。一个文本可以像一个由一个调整乐团演奏的杰作交响乐流动，或者它可以是一个单人乐队崇拜者脱节的脆弱的歌曲。就像在音乐中一样，顺序比我们的耳朵更令人愉悦而不是混乱，设计精良的文本也更容易阅读，更容易被我们的眼睛消耗。
>
> 水平节奏：字母间距（跟踪）、字距、段落缩进……，垂直节奏：与Sass的垂直节奏、素描中的垂直节奏……。
>
> [ 网站排版中的好的规则](https://betterwebtype.com/rhythm-in-web-typography)

#### 3. QTPyLib，基于Python的交易算法
> QTPyLib（高质量的 python 交易算法库）是一个使用 python 来实现的简洁、事件驱动的交易算法库，支持回归测试。
>
> 我开发了 QTPyLib，因为我想要一个简单而强大的交易库，让我专注于交易逻辑本身而不是其他一切。
>
> 数据存储在MySQL中，供以后分析和回测。支持订单簿，报价，时间，刻度或基于卷的策略解决方案。市场数据事件使用异步，非阻塞架构。通过短信将订单发送到您的手机
> 包括：中断和会议，管理的太细致，不信任，缺乏最技术债务的理解和支持、不可能完成的截止日期……
>
> [QTPyLib，基于Python的交易算法](https://github.com/ranaroussi/qtpylib)

#### 4. 面向对象的编程中如何更好在数据和信息间做抉择
> 在当今大数据和数据挖掘时代，信息和数据的概念引起了公众的广泛关注。但是，这些术语在面向对象的编程的应用尚未实现。
>
> 处理信息而不是数据，我们的代码往往会变得更清晰，更清晰。由于封装了所有数据和操作，因此范围缩小，导致代码的认知复杂度降低，消除了时间耦合，提高了可维护性。
>
> 如果有人告诉你，为了改进你的代码你需要专注于代码本身以及与之相关的一切，不要相信他。改变解决问题的方式，您的代码将随你而变。
>
> [面向对象的编程中如何更好在数据和信息间做抉择](https://www.driver733.com/2018/10/11/information-vs-data.html)

#### 5. 在UNIX中，一切都是文件
> 常用的、开放性面试题：如何理解 “Unix 里任何东西都是文件” 这句话？/proc、/dev、/tmp、socket、directory 等。
>
> 在 Unix 中，任何的东西都是一个文件，被广泛认为是 UNIX 的定义点之一。
>
> 一切都是文件，其实有两个意思：在UNIX中，一切都是字节流；在UNIX中，文件系统用作通用名称空间。
>
> 在现代UNIX操作系统中，进程之间的所有设备和大多数类型的通信都作为文件系统层次结构中的文件或伪文件进行管理和显示。这种基本的UNIX愿景和设计原则，被称为“一切都是文件”，是UNIX成功和长寿的关键因素之一。
>
> [在UNIX中，一切都是文件](https://ph7spot.com/musings/in-unix-everything-is-a-file)
