jq方法

```js
  $.getJSON("/json/cats.json", function(json) {

        var html = "";

        json.forEach(function(val) {
          
            var keys = Object.keys(val); //获得一个数组[]，内容为键值对中的键名

            html += "<div class = 'cat'>";

            keys.forEach(function(key) {
                
                html += "<b>" + key + "</b>: " + val[key] + "<br>";
                
            });

            html += "</div><br>";
          
        });

        $(".message").html(html);

      });

```


可以通过过滤做到 选择性渲染

        json = json.filter(function(val) {
          return (val.id !== 1);
        });