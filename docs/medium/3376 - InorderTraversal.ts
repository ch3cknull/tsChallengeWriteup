interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// will cause error:
//   Type instantiation is excessively deep and possibly infinite.
// 
// type InorderTraversal<T extends TreeNode | null> =
//   T extends TreeNode
//     ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
//     : []

type InorderTraversal<T extends TreeNode | null> =
T extends TreeNode
  ? T['left'] extends TreeNode
    ? T['right'] extends TreeNode
      ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
      : [...InorderTraversal<T['left']>, T['val']]
    : T['right'] extends TreeNode
      ? [T['val'], ...InorderTraversal<T['right']>]
      : [T['val']]
  : []