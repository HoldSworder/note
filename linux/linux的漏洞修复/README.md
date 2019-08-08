# linux 的漏洞修复

```linux
# yum -y update //更新仓库

//启用ELRepo仓库 聚合了linux的很多相关包
# rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
# rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm

//查看可用的系统内核包
# yum --disablerepo="*" --enablerepo="elrepo-kernel" list available

//安装最新内核
# yum --enablerepo=elrepo-kernel install kernel-ml

//设置默认启动
//查看所有可用内核
# sudo awk -F\' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg

//设置grub2默认启动
# sudo grub2-set-default 0 (0赖在上一步awk命令)

//生成grub配置文件
# sudo grub2-mkconfig -o /boot/grub2/grub.cfg

//重启
# sudo reboot
```

## 删除旧内核

1. 通过`yum-utils`工具

   如果安装的内核不多于 3 个，yum-utils 工具不会删除任何一个。只有在安装的内核大于 3 个时，才会自动删除旧内核。

```linux
//安装
# yum install yum-utils

//删除
# package-cleanup --oldkernels
```
