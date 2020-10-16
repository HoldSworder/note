# 命名空间

namespace

```ts
namespace Home {
  class Title {}

  class Content {}

  export Page{
    constructor() {
      new Title()

      new Content()
    }
  }
}

new Home.Page()
```
