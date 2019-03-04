BFC：触发BFC闭合浮动

1. <div style="clear:both"></div>
   缺点 添加无意义空标签 维护麻烦

2.overflow:auto\hidden

3.让父元素同时浮动 影响页面布局

4.css   :after

  .clearfix:after {
        content:".";
	display:block;
	height:0;
	clear:both;
	visibility:hidden;
  }

  .clearfix{
	zoom:1;(兼容ie6、7）
  }

5. (最优）创建匿名表格单元
   .clearfix:before,
   .clearfix:after {
	content:".";
	display:table;
   }

   .clearfix:after {
	clear:both;
   }