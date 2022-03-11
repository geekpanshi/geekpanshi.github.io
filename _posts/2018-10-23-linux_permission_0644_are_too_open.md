---
title: linux Permission 0644 for are too open 错误处理
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
slug: f0d41519
date: 2018-10-23 06:29:37
password:
keywords:
  - ssh
  - 0644
  - tooopen
description: Linux 部署时经常使用到 ssh 登录，，使用 ssh 登录或验证，使用公私钥时对秘钥文件的权限是有要求的，权限不能太大。
---
<script type="text/javascript" src="/assets/js/dist/bai.js"></script>

### linux Permission 0644 for are too open 错误处理

---
> Linux 部署时经常使用到 ssh 登录，，使用 ssh 登录或验证，使用公私钥时对秘钥文件的权限是有要求的，权限不能太大。
>
> 这个问题其实是经常会遇到的，之前自己也经常遇到的，把以前的自己的笔记找到了，整理一下、标记一下而已。
---

#### 1. 问题描述：
> 本来是为了方便，不想每一台电脑生成公私钥，所以把自己的公私钥传到了 Github 上面的私有库，然后在家里的电脑把公私钥获取下来。
> 在通过 `ssh-add` 添加私钥到 ssh-agent 代理时，报错，报错如下：
>>
>> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
>> @ WARNING: UNPROTECTED PRIVATE KEY @
>> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
>> <font color="#FF0000" size=4>Permissions 0664</font> for '/home/root/.ssh/id_rsa' are <font color="#FF0000" size=4>too open</font>.
>> It is required that your private key files are NOT accessible by others.
>> This private key will be ignored.
>> bad permissions: ignore key: /home/root/.ssh/id_rsa
>> git@XXX.XXX.XXX.XXX's password: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
>>

#### 2. 问题解决

##### 2.1 问题描述
> 看日志报出的错误，"It is required that your private key files are NOT accessible by others"，翻译就是需要私钥文件不能被其他人所访问。私钥是访问linux服务器的凭证，如果被别人获取到，就可能对服务器安全造成影响，这可能也就是这个问题的初衷吧。
>
> 使用 `ls -al /home/root/.ssh/` 查看私钥文件的权限，也是显示的 <font color="#FF0000" size=4>644</font>。

##### 2.2 问题解决
> 将秘钥权限降到 <font color="#FF0000" size=4>600</font> 即可，即该文件不能被其他人访问，将所属组和其他人的 read 权限取消即可。
>
>> `chmod 600 /home/root/.ssh/id_rsa`
>
> 再次使用 `ssh-add` 添加此私钥时就不在报错了。


#### 3. Linux 下用户组、文件权限详解

##### 3.1 用户组

> 在linux中的每个用户必须属于一个组，不能独立于组外。在linux中每个文件有所有者、所在组、其它组的概念
>>
>> - 所有者
>> - 所在组
>> - 其它组

> 所有者
>> 一般为文件的创建者，谁创建了该文件，就天然的成为该文件的所有者。
>> 用 `ls ‐ahl` 命令可以看到文件的所有者。
>> 也可以使用 `chown 用户名 文件名` 来修改文件的所有者。

> 文件所在组
>> 当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组。
>> 用 `ls ‐ahl` 命令可以看到文件的所有者。
>> 也可以使用 `chgrp 组名 文件名` 来修改文件所在的组。

>其它组
>>
>> 除开文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组

##### 3.2 文件权限
> `ls -l` 中显示的文件内容如下
>>
>> `-rwxrw-r‐-1 root root 1213 Feb 2 09:39 abc`
>>
> 10 个字符确定不同用户能对文件干什么。
>>
>> 1. 第一个字符代表文件（-）、目录（d），链接（l）;
>>
>> 2. 其余字符每 3 个一组（rwx），读（r）、写（w）、执行（x）;
>>>
>>> 2.1 第一组 `rwx` ：文件所有者的权限是读、写和执行;
>>> 2.2 第二组 `rw-` ：与文件所有者同一组的用户的权限是读、写但不能执行；
>>> 2.3 第三组 `r--` ：不与文件所有者同组的其他用户的权限是读不能写和执行。
>>>
>> 也可以用数字表示为：r = 4，w = 2，x = 1，因此 rwx = 4 + 2 + 1 = 7。
>>>
>> 3. `1` 表示连接的文件数；
>>
>> 4. `root` 表示用户；
>>
>> 5. `1213` 表示文件大小；
>>
>> 6. `Feb 2 09:39` 表示文件最后修改日期；
>>
>> 7. `abc` 表示文件名。

##### 3.3 改变权限的命令
> `chmod` 改变文件或目录的权限。
>>
>> `chmod 755 abc` ：赋予 abc 权限 rwxr-xr-x。
>> `chmod u=rwx，g=rx，o=rx abc` ：同上 u=用户权限，g=组权限，o=不同组其他用户权限。
>> `chmod u-x，g+w abc` ：给 abc 去除用户执行的权限，增加组写的权限。
>> `chmod a+r abc` ：给所有用户添加读的权限。
>
> `chown` 改变所有者。
>>
>> `chown xiaoming abc` ：改变 abc的所有者为 xiaoming。
>> `chown root ./abc` ：改变 abc 这个目录的所有者是 root。
>> `chown ‐R root ./abc` ：改变 abc 这个目录及其下面所有的文件和目录的所有者是 root。
>
> `chgrp` 改变用户组。
>
>> `chgrp root abc` ：改变 abc 所属的组为 root。
>
> `usermod` 改变用户所在组。
> 在添加用户时，可以指定将该用户添加到哪个组中，同样用root的管理权限可以改变某个用户所在的组。
>>
>> `usermod ‐g 组名 用户名` 或 `usermod ‐d 目录名 用户名，改变该用户登录的初始目录`。
>>

##### 3.4 其他可参考命令
> `groupadd 组名` ：在linux中添加组。

> `vi /etc/group` ：查看linux中所有组信息，可以看可以编辑。

> `cat /etc/group` ：查看linux中所有组信息，只可以看不可以编辑。

> `useradd ‐g 组名 用户名` ：创建用户的同时指定将该用户分配到哪个组下。

> `vi /etc/passwd` ：查看linux中所有用户信息，可以看可以编辑。

> `cat /etc/passwd` ：查看linux中所有用户信息，只可以看不可以编辑。
