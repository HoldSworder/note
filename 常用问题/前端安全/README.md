常见的前端安全问题有

1、CSRF 跨站请求伪造

   原理：利用接口漏洞 诱导用户点击伪造url 利用用户权限cookie进行攻击 

   防御方法：Token验证、Referer验证、隐藏令牌

2、XSS 跨站脚本攻击

   原理：利用网站本身（如评论区） 进行脚本注入