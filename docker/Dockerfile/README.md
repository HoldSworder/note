# Dockerfile

```jsx
From ubuntu:latest  // 引入依赖
ENV VERSION=2.0.1
RUN step1 && \      // 具体执行
    step2 && \
    step3
ADD index.js /app/
COPY index.js /app/
WORKDIR /app
```

## ADD COPY

都可以将文件复制到指定目录，区别在于ADD会自动解压压缩包

## WORKDIR

切换文件夹 类似cd

## ENV ARG

变量 区别在于env可以带到镜像 arg不能会被自动清除

arg在构建时可以改变变量值

docker image build -f Dockerfile.ARG -t ipinfo-arg-2.0.0 --build-arg VERSION=2.0.0 .
