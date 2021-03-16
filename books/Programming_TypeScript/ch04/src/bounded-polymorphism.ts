// bounded polymorphism
type TreeNode = {
    value: string
}
type LeafNode = TreeNode & {
    isLeaf: true
}
type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

let n1: TreeNode = {value: 'a'}
let n2: LeafNode = {value: 'b', isLeaf: true}
let n3: InnerNode = {value: 'c', children: [n2]}

let n1_1 = mapNode(n1, _ => _.toUpperCase());
let n2_1 = mapNode(n2, _ => _.toUpperCase());
let n3_1 = mapNode(n3, _ => _.toUpperCase());

console.log(n1_1)
console.log(n2_1)
console.log(n3_1)

function mapNode<T extends TreeNode>(node: T, f: (v: string) => string): T {
    return {...node, value: f(node.value)}
}