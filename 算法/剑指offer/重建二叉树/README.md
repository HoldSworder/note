# 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

```js
function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length === 0) return null
  if (pre.length === 1) return new TreeNode(pre[0])

  const root = pre[0]
  const index = vin.indexOf(root)
  const left = vin.slice(0, index) //中序左子树
  const right = vin.slice(index + 1) //中序右子树

  return {
    root,
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  }
}
```
