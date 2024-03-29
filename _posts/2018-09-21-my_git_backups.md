---
title: 我的 Git 备忘单
tags:
  - Git
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
keywords:
  - git
  - git命令行
  - git架构
  - git和svn
  - svn和git
slug: f71b4e73
date: 2018-09-21 16:43:26
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

## 我的 Git 备忘单
---

### 0. Git 基本概念

#### 0.1 Git 与 SVN 区别
>
1. Git 是分布式版本控制系统，SVN 是集中式版本控制系统；
2. Git 把内容按照元数据方式存储，每次提交的文件全部内容（snapshot）都会记录，SVN 是按照文件存储的，存储每次提交(commit)之间的差异；
3. Git 的分支是在同一个工作目录下的，SVN 的分支就是版本库中的一个目录；
4. Git 没有一个全局的版本号，SVN 的版本号是全局的；
5. Git 使用SHA-1哈希算法确保代码内容的完整性以及出问题时对版本库最低的破坏，SVN 相比就差一些。

#### 0.2 Git 对象
```
1. 所有用来表示项目历史信息的文件，是通过一个40个字符的（40-digit）“对象名”来索引的，对象名看起来像这样:
                 3ff87c4664981e243g625791c8ea3bbb5f2279a3。
   每一个“对象名”都是对“对象”内容做SHA1哈希计算得来的，从而保证两个不同内容的对象不可能有相同的“对象名”
2. 每个对象(object) 包括三个部分：类型（blob、tree、commit 和 tag）、内容（内容取决于对象的类型）和内容大小。
  2.1 blob   -- 用来存储文件数据，通常是一个文件；
  2.2 tree   -- 类似目录，用来管理一些 tree 和 blob；
  2.3 commit -- 一个 commit 只指向一个 tree，标记项目某一个特定的时间点状态，包括
                一些时间点的是元数据，如 时间戳、最后一个提交者等；
  2.4 tag    -- 标记某一个 commit 的方法。
```
#### 0.3 Git 使用时的数据转换
```python
# git 的四区 ：工作区、暂存区、本地仓库及远程仓库及其使用时的关系。
#
#      工作区                  暂存区                  本地仓库                远程仓库
#  （workspace）             （index）           （local repository）   （remote repository）
#        |  ---> add (-u) --->  |                        |                      |
#        |  <--- checkout <---  |                        |                      |
#        |  <---   diff   --->  |                        |                      |
#        |   rm --cached  <---  |                        |                      |
#        |                      |  --->   commit   --->  |                      |
#        |                      |  <--- reset HEAD <---  |                      |
#        |  <------------    diff HEAD   ------------->  |                      |
#        |  ------------>    commit -a   ------------->  |                      |
#        |  <------------  checkout HEAD <-------------  |                      |
#        |                      |                        |  --->   push   --->  |
#        |                      |                        |  <---  fetch   <---  |
#        |  <------------      merge     <-------------  |                      |
#        |  <------------           pull or rebase               <------------  |
```


### 1. 命令

#### 1.1 开始

##### 1.1.1 当前文件夹初始化为 git 本地仓库
>
  $git init
>

##### 1.1.2 从远程 git 仓库获取代码
>
  $git clone url
>

#### 1.2 配置

##### 1.2.1 设置命令行显示颜色
>
  $git config --global color.ui true
>

##### 1.2.1 设置 push 到远端 分支时， 默认 push 的本地分支
>
  $git config --global push.default current
>

##### 1.2.1 设置默认的编辑器
>
  $git config --global core.editor vim
>

##### 1.2.1 设置使用 git 时默认的用户名（一般设置为名字或工号）
>
  $git config --global user.name "user_name"
>

##### 1.2.1 设置使用 git 时默认的邮箱名（一般设置为公司内的邮箱）
>
  $git config --global user.email "user_name@126.com"
>

##### 1.2.1 设置默认的 git diff 时比较工具
>
  $git config --global diff.tool diff3
>

#### 1.3 本地分支操作

##### 1.3.1 查看所有本地分支
>
  $git branch
>

##### 1.3.2 切换到一个已经存在的本地分支
>
  $git checkout local_branch_name
>

##### 1.3.3 从本地分支切换到一个新建的分支 new_branch_name
>
  $git checkout -b new_branch_name
>

##### 1.3.4 合并 other_branch_name 名的分支到当前分支（不保留被合并分支的历史信息）
>
  $git merge other_branch_name
>
```python
 #feature 分支合并到当前分支 develop：git merge feature
 #  | <- develop -> |
 #  |               |
 # A.1 --> A.2 --> A.3 -- B.1 --> B.2 --> B.3
 #                        |               |
 #                        | <- feature -> |
```
##### 1.3.5 合并 other_branch_name 名的分支到当前分支（保留被合并分支的历史信息）
>
  $git merge –no-ff other_branch_name
>
```python
#feature 分支合并到当前分支 develop：git merge –no-ff feature
#   | <- develop -> |
#   |               |
#  A.1 --> A.2 --> A.3 ------------------------> C.1
#                   |                            |
#                   | --> B.1 --> B.2 --> B.3 -->|
#                        |               |
#                        | <- feature -> |
```
##### 1.3.6 删除本地分支 branch_name（非强制删除，分支未合并时，会提示）
>
  $git branch -d branch_name
>
##### 1.3.7 删除本地分支 branch_name （强行删除分支，不做任何提示，类似 rm -rf）
>
  $git branch -D branch_name
>
#### 1.4 更新当前分支
##### 1.4.1 查看所有提交
>
  $git log
>
##### 1.4.2 展示好看一些的查询
>
  $git log --pretty=format:"%h %s" --graph
>
##### 1.4.3 查看 user_name 用户过去一周做过什么
>
  $git log --author='user_name' --after={1.week.ago} --pretty=oneline --abbrev-commit
>
##### 1.4.4 查看所有未被合并过的提交信息（假如该分支是从 master 创建的）
>
  $git log --no-merges master..
>
##### 1.4.5 查看当前分支名称
>
  $git branch
>
##### 1.4.6 查看当前分支的状态
>
#比 git status 更简洁化的一个命令
  $git status -s
>
##### 1.4.7 增加指定文件名 file_name 到待提交的 list 中
>
  $git add file_name
>
##### 1.4.8 增加所有未提交的文件 到待提交的 list 中
>
  $git add .
>
##### 1.4.8 增加指定类型 .txt 格式的到待 提交的 list 中。
>
  $git add '*.txt'
>
##### 1.4.9 让 git 不再 提交指定的文件  file_name
>
  $git rm file_name
>
##### 1.4.10 使用 git 默认的编辑器将待提交的 list 中文件提交
>
  $git commit
>
##### 1.4.11 通过命名行的模式将待提交的 list 中文件提交
>
  $git commit -m 'your commit msg'
>
##### 1.4.12 修改已经提交但是未 push 到远端的提交 msg
>
  $git commit --amend
>
#### 1.5 高级命令
##### 1.5.1 回退到上个版本，只保留源码
>
  $git reset
>
##### 1.5.2 回退到上个版本，本地的源码也会变为上一个版本的内容
>
  $git reset --head HEAD
>
##### 1.5.3 当前分支情况下，回退到指定的历史
>
  $git reset tag
  $git reset commit_hash
>
##### 1.5.4 暂存当前的变更，不提交
>
  $git stash
>
##### 1.5.5 取出暂存的变更到当前分支
>
  $git stash pop
>
##### 1.5.6 撤销当前分支下对某个文件的变更
>
  $git checkout file_name
>
#### 1.6 比较变更
##### 1.6.1  显示工作目录与索引区文件之间的差异
>
  $git diff
>
##### 1.6.2  显示工作目录与git仓库之间的差异
>
  $git diff HEAD
#比较上次提交
  $git diff HEAD^
#比较上2次提交
  $git diff HEAD~2
>
##### 1.6.3 当前分支与 other_branch_name 分支进行比较
>
  $git diff other_branch_name
>
##### 1.6.4 使用配置文件中的比较工具进行比较（和 git diff 类似）
>
  $git difftool
>
##### 1.6.5 查看当前分支与目标分支的文件变更
>
  $git diff --no-commit-id --name-only --no-merges origin/master..
>
##### 1.6.6 查看当前分支文件变更的状态
>
  $git diff --stat
>
#### 1.7 远程分支操作
##### 1.7.1 查看本地仓库有哪些远程连接（带 url 地址）
>
#备注： 当 git clone 一个仓库的时候，会自动创建一个别名为 origin 的远程连接到 clone 的仓库。
  $git remote -v
>
##### 1.7.2  创建一个连接到远程仓库的连接（假如 origin 没有设置）
>  python
  $git remote add remote_origin_name https://one_git_remote_url
>
##### 1.7.3 当前分支 push 到 远端分支 - 1
>  python
#上传本地所有分支代码到远程对应的分支上
  $git push
>
##### 1.7.3 当前分支 push 到 远端分支 - 2
>  python
#当前分支与多个主机存在追踪关系，则可以使用 -u 选项指定一个默认主机，后面就可以不加任何参数使用 git push。
  $git push -u orgin master
>
##### 1.7.4 当前分支 push 到 远端分支 - 3
>  python
#上传本地当前分支代码到 master 分支
  $git push origin master
>
##### 1.7.4 获取远端对应分支更新到本地
>  python
  $git pull
>
##### 1.7.5  获取远端指定分支名 branch_name 到本地
>  python
  $git pull origin branch_name
>
##### 1.7.6 获取远端分支的更新历史 - 1
>
  $git fetch
>
##### 1.7.7 获取远端分支的更新历史 - 2
>
#假如远端分支有被删除，此命令也会把本地对应的分支删除。
  $git fetch --prune
>
##### 1.7.8 获取远端更新并合并到当前分支
>
#此组合命令，和 git pull 的作用一样的。
#git fetch 获取远端分支到本地，不合并到当前分支。
#尽量少用git pull，多用git fetch和merge。
  $git fetch && git merge origin/remote_branch_name
>
##### 1.7.9 查看远端所有分支
>
  $git branch -a
>
### 2. 一些资料
#### 2.1 git 命令在线学习
>  python
  https://try.github.io
>
#### 2.2 git 分支在线学习
>
  http://learngitbranching.js.org/?NODEMO
>
#### 2.3 《Pro Git》 在线免费书
##### 2.3.1 英文原版
>
  https://git-scm.com/book/en/v2
>
##### 2.3.2 中文版
>
  http://git.oschina.net/progit/
>
#### 2.4 《Git 权威指南》 在线免费书
>
  https://github.com/gotgit/gotgit/
>
### 3. git 历史查看工具
#### 3.1 SourceTree
>
  https://www.sourcetreeapp.com/
>
#### 3.2 TortoiseGit
>
  https://tortoisegit.org/
>
#### 3.3 命令行下的 Git 浏览器
#### 3.3.1 官网
>
  https://jonas.github.io/tig/
>
##### 3.3.2 安装
>
  $sudo apt-get install tig
or
  $brew install tig
>
#### 3.4 gitk
>
  http://gitk.sourceforge.net/
>
#### 3.5 其他
>
  https://git-scm.com/downloads/guis
>
### 4. 一些文件对比的工具
#### 4.1 Meld
>
  http://meldmerge.org/
>
#### 4.2 opendiff
>
  http://guides.macrumors.com/opendiff
>
#### 4.3 diff3
>
  https://en.wikipedia.org/wiki/Diff3
>
#### 4.4 beyond compare
>
  http://www.scootersoftware.com/
>
#### 4.5 P4Merge
>
  https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools
>
#### 4.6 其他（git 配置文件）
>
  https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#External-Merge-and-Diff-Tools
>
### 5. git flow

#### 5.1  git flow 模型
>
  http://nvie.com/files/Git-branching-model.pdf
>
#### 5.2 git flow on github
>
  https://github.com/nvie/gitflow
>
#### 5.3 基于git的源代码管理模型——git flow
>
  http://www.ituring.com.cn/article/56870
>
### 6. 其他
#### 6.1 命令行我自己常用的 git 历史查询的别名
##### 6.1.1 git lg
>
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
>
##### 6.1.2 git tlg
>
  tlog = log --stat --since='1 Day Ago' --graph --pretty=oneline --abbrev-commit --date=relative
>
##### 6.1.3 git plg
>
  plog = log --graph --pretty='format:%C(red)%d%C(reset) %C(yellow)%h%C(reset) %ar %C(green)%aN%C(reset) %s'
>
##### 6.1.4 git glg
>
  glog = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
>
#### 6.3 所有提交者的提交次数排行榜
>
  rank = shortlog -sn --no-merges
>
#### 6.3 没有被 merge 的删除的分支
>
  bdm = "!git branch --merged | grep -v '*' | xargs -n 1 git branch -d"
>
#### 6.4 彩蛋
##### 6.4.1 彩蛋 - 1 （历史重演）
>
  $git log --reverse -p
>
##### 6.4.2 彩蛋 - 2（历史追溯）
>
  $git show HEAD~1
>
### 参考文献
>
https://git-scm.com/doc
http://nvie.com/posts/a-successful-git-branching-model/
https://github.com/gotgit/gotgit/
https://longair.net/blog/2009/04/16/git-fetch-and-merge/
http://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch
