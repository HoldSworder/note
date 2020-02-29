class Mvvm {
  constructor(option) {
    this.$option = option
    this.$el = option.el
    this.$data = this.$option.data

    if (this.$el) {
      new Compile(this.$el, this)
    }

  }
}

class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    if (this.el) {
      let fragment = this.node2fragment(this.el)
      this.compile(fragment)
      this.el.appendChild(fragment)
    }
  }

  isElementNode(node) {
    return node.nodeType === 1
  }

  node2fragment(el) { // 需要将el中的内容全部放到内存中
    // 文档碎片 内存中的dom节点
    let fragment = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild);
      // appendChild具有移动性
    }
    return fragment; // 内存中的节点
  }
}
