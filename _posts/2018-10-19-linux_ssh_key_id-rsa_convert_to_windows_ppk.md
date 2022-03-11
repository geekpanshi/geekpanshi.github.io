---
title: 怎样把 Linux 的私钥文件 id_rsa 转换成 Windows 下使用的私钥 ppk 格式
tags:
  - Linux
comments: true
toc: true
categories:
  - 技术相关
  - 技术综合
keywords:
  - Linux
  - 公私钥
  - id_rsa
  - PuTTYgen
  - ppk
abstract: 'Welcome to my blog, enter password to read.'
message: 'Welcome to my blog, enter password to read.'
copyright: true
top: 0
slug: c2115322
date: 2018-10-19 07:39:38
password:
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### 怎样把 Linux 的私钥文件 id_rsa 转换成 Windows 下使用的私钥 ppk 格式

---

> 在 Linux 系统下产生的私钥文件 id_rsa，Windows 下的软件 Putty、Pageant、Winscp 是不认识的，Putty、Pageant 只认识他们自己的 ppk 格式，要在这两种格式之间转换，需要 PuTTYgen 这个程序。
>
> 当我们导入 Key 时，在指定目录发现 没文件，或者报错 `导入KEY的时候报“Failed to import the user key!”错误`，可能格式不对，需要注意了。

#### 1. 下载 PuTTYgen 软件

> PuTTYgen 是 putty 的配套程序，Putty 的安装包和 Winscp 的安装包都包含了这个程序，当然你也可以单独下载 PuTTYgen。
>> PuTTYgen 下载地址： [Download PuTTYgen: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html "Download PuTTYgen")

#### 2. id_rsa 转换成 ppk 格式步骤

1. 运行 `PuTTYgen.exe` ；

2. 点击 `Conversions` 菜单项中的 `Import key` ；

3. 选择在 Linux 下生成的 `id_rsa` 文件；

4. 在 PuTTYgen 的界面上点击 `Save private key` 按钮，就可以把私钥转换为 ppk 的格式了，保存时记得格式为 `.ppk`。


#### 3. Windows 下如何使用 PuTTYgen 生成密钥对

1. 运行 `PuTTYgen.exe` ；

2. 点击 `Generate` 生成密钥；
> 在此需要等待一下，创建密钥花的时间比较长。**注意要在空白处划动鼠标哦，这样会更加快**。
> 密钥格式选择可以在点击 `Generate` 前选择，一般默认如下图所示，我们不用选择的。

![PuTTYgen密钥格式选择](/images/028/pZcznWG.png "PuTTYgen密钥格式选择")

3. 创建完成之后，我们可以选择在上图中 `Key comment` 输入框中添加备注，方便记忆和使用。

4. 假如需要密码，我们可以选择在上图中 `Key passphrase` 和 `Confirm passphrase` 输入框中输入和确认密码。

5. 步骤 3、4 可根据自己的需求进行，点击 `Save public key` 或 `Save private key` 分别保存公私钥，公钥格式为 `.pub`，私钥格式为 `.ppk`。

6. `OpenSSH` 授权格式的公钥，见上图蓝色部分，建议复制保存下来，公钥格式为 `.pub`，很多代码托管的认证都是需要使用这个类型的公钥，比如 Github、Coding、码云 等。


#### 4. 怎样把 Windows 的私钥文件 ppk 转换成 Linux 下使用的私钥 id_rsa 格式

1. 运行 `PuTTYgen.exe` ；

2. 点击 `Conversions` 菜单项中的 `Import key` ；

3. 选择在 Windows 下生成的 `.ppk` 私钥文件；

4. 点击 `Conversions` 菜单项中的 `Export OpenSSH key` （导入 `.ppk` 私钥前，不可选）；

5. 命名文件，保存到本地，**Linux 下 id_rsa 文件，不需要后缀名**。


#### 5. Linux 系统 ssh-keygen 下生成 ssh 密钥对并获取公私钥

> ssh-keygen 命令解析 `ssh-keygen -t rsa -f ~/.ssh/id_rsa -N '密码'`
>
>> `-t` 指定密钥产生算法；
>>
>> `-f` 指定生成文件，登陆是使用 `ssh` 命令进行的，Linux 默认的密钥对中私钥路径为家目录下 `~/.ssh/id_rsa`，默认文件名 `id_rsa`，公钥路径为 `~/.ssh/id_rsa.pub`，默认文件名 `id_rsa.pub`；
>>
>> `-N` 对私钥加密以防止私钥泄露后他人乱用，但这也使得以后每次登陆必须输入 `-N` 指定的密码；
>>
>> 以上参数，均可不填。


1. 打开 Linux 终端 `Terminal`；

2. 命令行输入 `ssh-keygen -t rsa`，默认生成的公私钥路径为 `~/.ssh/id_rsa.pub` 和 ` ~/.ssh/id_rsa`。

3. 获取公钥：`cat ~/.ssh/id_rsa.pub`，获取私钥：`cat ~/.ssh/id_rsa`。
