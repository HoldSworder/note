# 关联jenkins

下载Docker plugin docker-build-step 插件

修改配置文件：vi /lib/systemd/system/docker.service

```shell
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:6666
```
