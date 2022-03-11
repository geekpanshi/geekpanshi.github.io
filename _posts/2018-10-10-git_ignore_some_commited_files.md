---
title: Git 如何忽略已经被提交的文件
tags:
  - Git
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
keywords:
  - git
  - git忽略文件
  - 忽略文件
  - gitignore
slug: b5635e22
date: 2018-10-10 16:43:26
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### Git 如何忽略已经被提交的文件

#### 1. 老司机有话说

    老司机：“Git 的使用，不反对使用GUI，因为GUI可以帮助我们更高效的工作，但是还是要对原理有所了解，知其然知其所以然，才能更好的玩、玩的更好。”

Ps： Git 推荐去读一下《pro git》 这边书, [《Pro Git》 ](https://progit.org/) 有多种版本的免费版可以下载看。

#### 2. 问题描述

- 一般由 `git` 管理的项目的忽略文件列表文件 `.gitignore 文件` 会放在项目的根目录。

- 假设项目的根目录已经放了 `.gitignore 文件`，在这个列表中我们定义了忽略项目所有`log文件` 的规则:

  ```
  logs/*.log
  logs/
  /logs/
  ```

  但是git远程仓库的项目根目录已经有了 logs文件夹，这个时候我们需要怎么处理，才可以让`git` 版本库不再显示 这个文件。

#### 3. 问题解决

- 解决的办法：

1. `git rm logs/xx.log`;
2. 更新 `.gitignore` 忽略掉目标文件;
3. `git commit -m "We really don't want Git to track this anymore!"`;
4. `git push`。

- 具体的原因如下：

##### 3.1 错误的方法：

   ```
   git update-index --assume-unchanged PATH
   ```

    （在PATH处输入要忽略的文件）。

   > 原因，关于 git update-index 的含义，而且这样做带来的最直接（不良）后果是这样的：
   >
   > > 1. 所有的团队成员都必须对目标文件执行：git update-index --assume-unchanged 。这是因为即使你让 Git 假装看不见目标文件的改变，但文件本身还是在 Git 的历史记录里的，所以团队的每个人在 fetch 的时候都会拉到目标文件的变更。（但实际上目标文件是根本不想被 Git 记录的，而不是假装看不见它发生了改变）
   > > 2. 一旦有人改变目标文件之后没有 git update-index --assume-unchanged 就直接 push 了，那么接下来所有拉取了最新代码的成员必须重新执行 update-index，否则 Git 又会开始记录目标文件的变化。这一点实际上很常见的，比如说某成员换了机器或者硬盘，重新 clone 了一份代码库，由于目标文件还在 Git 的历史记录里，所以他／她很可能会忘记 update-index。

##### 3.2 关于 git update-index 在 Git 的 man pages 的定义

  > 1. git update-index 的定义是：
  >
  >    > 1. 把工作区下的文件内容注册到索引区。
  >    > 2. 这句话暗含的意思是：update-index 针对的是 Git 数据库里被记录的文件，而不是那些需要忽略的文件。
  >
  > 2. 接着看关于 --assume-unchanged 的几句相关的描述：
  >
  >    > 1. 应用了该标识之后，Git 停止查看工作区文件可能发生的改变，所以你必须 手动 重置该标识以便 Git 知道你想要恢复对文件改变的追踪。当你工作在一个大型项目中，这在文件系统的 lstat 系统调用非常迟钝的时候会很有用。

##### 3.3  关于 git update-index 的正确用法

  > 1. 我们知道 Git 不仅仅是用来做代码版本管理的，很多其他领域的项目也会使用 Git。比如说我公司曾经一个客户的项目涉及到精密零件图纸文档的版本管理，他们也用 Git。有一种使用场景是对一些体积庞大的文件进行修改，但是每一次保存 Git 都要计算文件的变化并更新工作区，这在硬盘慢的时候延迟卡顿非常明显。
  >
  > 2. git update-index --assume-unchanged 的真正用法是这样的：
  >
  >    > 1. 你正在修改一个巨大的文件，你先对其 git update-index --assume-unchanged，这样 Git 暂时不会理睬你对文件做的修改；
  >    > 2. 当你的工作告一段落决定可以提交的时候，重置改标识：git update-index --no-assume-unchanged，于是 Git 只需要做一次更新，这是完全可以接受的了；
  >    > 3. 提交＋推送。

##### 3.4 关于 git update-index根据文档的进一步描述：

  > 1.This option can be also used as a coarse file-level mechanism to ignore uncommitted changes in tracked files (akin to what .gitignore does for untracked files).
  >
  > 1. 这段描述告诉我们两个事实：
  >
  >    > 1. 虽然可以用其来达成楼主想要的结果，但这是不讲究的做法（coarse）；
  >    > 2. 同样的事情更应该用 .gitignore 文件来实现（针对未追踪的文件）。

- 为什么我增加了 .gitignore 里的规则却没有效果？

  > 1. 这是因为我们误解了 .gitignore 文件的用途，该文件只能作用于 Untracked Files，也就是那些从来没有被 Git 记录过的文件（自添加以后，从未 add 及 commit 过的文件）。
  >
  > 2. 之所以规则不生效，是因为那些 .log 文件曾经被 Git 记录过，因此 .gitignore 对它们完全无效。这也正是开头那段简短答案所做的事情：
  >
  >    > 1. 从 Git 的数据库中删除对于该文件的追踪；
  >    > 2. 把对应的规则写入 .gitignore，让忽略真正生效；
  >    > 3. 提交＋推送。
  >
  > 3. 只有这样做，所有的团队成员才会保持一致而不会有后遗症，也只有这样做，其他的团队成员根本不需要做额外的工作来维持对一个文件的改变忽略。

##### 3.5  最后有一点需要注意的，git rm 删除的是追踪状态，而不是物理文件；如果你真的是彻底不想要了，你也可以直接 rm＋忽略＋提交。

- git 忽略文件的另一种方法：

  > 1. git 还提供了另一种 exclude 的方式来做同样的事情，不同的是 .gitignore 这个文件本身会提交到版本库中去。用来保存的是公共的需要排除的文件。
  > 2. .git/info/exclude 这里设置的则是你自己本地需要排除的文件。 他不会影响到其他人。也不会提交到版本库中去。

- .gitignore 另外一个功能是作为一个 placeholder

  > 1. .gitignore 还有个有意思的小功能， 一个空的 .gitignore 文件 可以当作是一个 placeholder 。
  > 2. 当你需要为项目创建一个空的 log 目录时， 这就变的很有用。 你可以创建一个 log 目录 在里面放置一个空的 .gitignore 文件。这样当你 clone 这个 repo 的时候 git 会自动的创建好一个空的 log 目录了。


####  4. 附：.gitignore 配置攻略

##### 4.1 .gitignore 文件是什么？

- .gitignore 配置文件用于配置不需要加入Git版本管理的文件，配置好该文件可以为我们的版本管理带来很大的便利。

##### 4.2 配置语法

- 以斜杠 “/” 开头表示目录；
- 以星号 “*” 通配多个字符；
- 以问号 “?” 统配单个字符；
- 以方括号 “[]” 包含单个字符的匹配列表；
- 以感叹号 “!” 表示不忽略（跟踪）匹配到的文件或目录。

##### 4.3 示例

1. 规则： fd1/*
   说明： 忽略目录 fd1 下面的全部内容；注意，**不管是根目录下的 /fd1 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；**
2. 规则：/fd1/*
   说明：忽略根目录下的 **/fd1/ 目录的全部内容**；
3. 规则：
   /*
   !.gitignore
   !/fw/bin/
   !/fw/sf/
   说明：**忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录**。
