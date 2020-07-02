# 跳转页面

有三种方法进行跳转*location.href*、*location.assign*和*location.replace*

## 1. location.href

location.href='url'

## 2. location.assign()

与方法一相同 只是调用方法不同

location.assign(url)

## 3. loction.replace()

与其他两个不同的是 这种方法进行跳转无法回到上一页 当前页不会保存到会话历史中

location.replace(url)