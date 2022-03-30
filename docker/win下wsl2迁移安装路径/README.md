# win下wsl2迁移安装路径

## 1. 查询当前docker的状态

wsl -l -v --all

## 2. 导出WSL系统

wsl --export docker-desktop e:\docker-desktop.tar
wsl --export docker-desktop-data e:\docker-desktop-data.tar

## 3. 注销wsl

wsl --unregister docker-desktop
wsl --unregister docker-desktop-data

## 4. 重建wsl

wsl --import docker-desktop e:\docker\docker-desktop e:\docker\docker-desktop.tar --version 2
wsl --import docker-desktop-data e:\docker\docker-desktop-data e:\docker\docker-desktop-data.tar --version 2
