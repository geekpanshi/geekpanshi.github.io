---
title: 如何准备一个好的演讲
tags:
  - 美文推荐
  - 数据结构和算法
  - 机器学习
  - 软件推荐
  - 财商
comments: true
toc: true
categories:
  - 生活点滴
  - 日常更新
abstract: 'Welcome to my blog, enter password to read.'
message: 'Welcome to my blog, enter password to read.'
copyright: true
slug: 9758713c
keywords:
  - 并发
  - 并行性
  - 如何准备演讲
  - 二维生成库
  - PDF比较
  - 机器学习
description: >-
  1. 并发 != 并行性，我真的很喜欢听 Carl Hewitt
  谈论计算机，而他经常重复的是“并发不是并行”。对我来说，没有真正的区别，老实说，我从来没有费心去挖掘它。 2. 如何准备一个好的演讲，准备一个 20、30
  分钟的 talk，你得至少花 20 个小时准备，反复练习……  3. 高质量二维条码生成库，该项目旨在成为多种语言中最好，最清晰的QR码生成器库。4.
  命令行工具检查（文本中）两个 PDF 文件之间的区别。 5. 机器学习方法 C++ 实现集锦，使用不同框架在 C ++ 中实现的机器学习方法示例集。
date: 2018-12-15 21:47:50
password:
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### 如何准备一个好的演讲
>   1. 并发 != 并行性，我真的很喜欢听 Carl Hewitt 谈论计算机，而他经常重复的是“并发不是并行”。对我来说，没有真正的区别，老实说，我从来没有费心去挖掘它。 2. 如何准备一个好的演讲，准备一个 20、30 分钟的 talk，你得至少花 20 个小时准备，反复练习……  3. 高质量二维条码生成库，该项目旨在成为多种语言中最好，最清晰的QR码生成器库。4. 命令行工具检查（文本中）两个 PDF 文件之间的区别。 5. 机器学习方法 C++ 实现集锦，使用不同框架在 C ++ 中实现的机器学习方法示例集。
>
> ![如何准备一个好的演讲](/images/076/006tNbRwgy1fy70fhvmmxj315m0sgq3o.jpg)

---
#### 1. 并发 != 并行性
>  我真的很喜欢听 Carl Hewitt 谈论计算机，而他经常重复的是“并发不是并行”。对我来说，没有真正的区别，老实说，我从来没有费心去挖掘它。
>
>  上周，我偶然发现了 Rob Pike 关于这个问题的演讲，这让我最终对此事做了一些研究。以下是我的发现。
>
>  要注意：与生活中的大多数事情一样，很多人都认为两者之间没有真正的区别。
>
> [并发 != 并行性](https://monades.roperzh.com/concurrency-is-different-than-parallelism/)

#### 2. 如何准备一个好的演讲
> 一旦你有一个谈话的想法，是时候建立谈话了。会议谈判很可怕，所以你要避免它。你会默默地制作幻灯片或静静地写一个大纲。如果您要站在舞台上并在文本编辑器中执行静默编写笔记的行为，这些将是很好的准备。你会站在舞台上说话，所以你的准备应该主要是说话。
>
> 在 50 个会议给过 talk 的作者总结的经验：准备一个 20、30 分钟的 talk，你得至少花 20 个小时准备，反复练习；如果有 500 个听众，每人 30 分钟听你演讲，这就是 250 个 person-hours。

> 20 小时准备、换取 250 个 person-hours 的高质量的演讲，这笔投资划算不？
>
> [如何准备一个好的演讲](https://www.deconstructconf.com/blog/how-to-prepare-a-talk)

#### 3. 高质量二维条码生成库
> 该项目旨在成为多种语言中最好，最清晰的QR码生成器库。主要目标是灵活的选择和绝对的正确性。次要目标是紧凑的实现大小和良好的文档注释。
>
> 主页包含实时JavaScript演示，详尽说明和其他语言的比较：https://www.nayuki.io/page/qr-code-generator-library
>
> 特征：提供7种编程语言，功能几乎相同：Java，JavaScript，TypeScript，Python，C ++，C，Rust……
>
> [高质量二维条码生成库](https://github.com/nayuki/QR-Code-generator)

#### 4. 命令行工具检查（文本中）两个 PDF 文件之间的区别
> 命令行工具检查（文本中）两个PDF文件之间的区别。
>
> `pdfdiff` 采用两个参数，每个参数是 PDF 文件的文件名，并在两者之间生成文本差异。它使用在系统上找到的第一个 `diff-viewer` 对这个差异进行可视化。
>
> `pdfdiff` 依赖于 `pdftotext` 从 PDF 文件中提取明文。但是，两个 PDF 文件之间文本的微小变化可能会对生成的提取文本产生巨大影响。通常情况下，差异是如此之大，以至于diff在输出上做一个不会产生明智的结果。
>
> [命令行工具检查（文本中）两个PDF文件之间的区别](https://github.com/cascremers/pdfdiff)

#### 5. 机器学习方法 C++ 实现集锦
> 一组用 C ++ 实现的机器学习方法的例子。
>
> 使用不同框架在 C ++ 中实现的机器学习方法示例集。
>
> 克隆源代码后，请执行下一个命令以获取所有必需的第三方：
>> git submodule init
>> git submodule update
>
> 每个文件夹包含具有自己 CMakeLists.txt 文件的单个示例。
>
> [机器学习方法 C++ 实现集锦](https://github.com/Kolkir/mlcpp)

