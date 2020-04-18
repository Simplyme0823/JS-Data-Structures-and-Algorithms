function BinarySearchTree() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    this.root = null
    BinarySearchTree.prototype.insert = function (key) {
        let newNode = new Node(key)

        //判断根节点是否有值
        if (this.root == null) return this.root = newNode

        this.insertNode(this.root, newNode)
        //while循环
        //递归
    }

    /**
     * node为要和新节点比较的节点
     */
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            //向左查找
            if (node.left == null) {
                //递归终结条件
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    /**
     * 层序遍历：使用队列 bfs
     * 先序遍历，中序遍历，后序遍历
     */

    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler)
    }

    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node == null) return
        //直接处理父节点
        handler(node.key)

        /**
         * 注意点：函数调用栈
         */
        this.preOrderTraversalNode(node.left, handler)
        //处理经过节点的右子节点
        this.preOrderTraversalNode(node.right, handler)
    }

    BinarySearchTree.prototype.midOrderTraversal = function (handler) {
        this.midOrderTraversalNode(this.root, handler)
    }

    //中间访问根节点
    BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
        if (node == null) return
        //访问左节点
        this.midOrderTraversalNode(node.left, handler)
        //左子节点-> 父节-> 点右子节点 
        handler(node.key)

        //访问右子节点
        this.midOrderTraversalNode(node.right, handler)
    }

    BinarySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }

    //中间访问根节点
    BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node == null) return
        //访问左节点
        this.postOrderTraversalNode(node.left, handler)

        //访问右子节点
        this.postOrderTraversalNode(node.right, handler)

        //左子节点-> 点右子节点-> 父节点 
        handler(node.key)
    }

    BinarySearchTree.prototype.max = function () {
        let node = this.root
        while (node.left) {
            node = node.left
        }
        return node.key
    }

    BinarySearchTree.prototype.min = function () {
        let node = this.root
        while (node.right) {
            node = node.right
        }
        return node.key
    }

    BinarySearchTree.prototype.search = function (key) {
        let node = this.root
        while (node !== null) {
            if (node.key < key) {
                node = node.left
            } else if (node.key = key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }

    BinarySearchTree.prototype.remove = function (key) {
        //查找节点
        let current = this.root
        let parent = null
        let isLeftChild = false

        while (current.key !== key) {
            parent = current
            if (key < current.key) {
                isLeftChild = true
                current = current.left
            } else {
                isLeftChild = false
                current = current.right
            }

            if (current == null) return false
        }

        //找到了current.key == key的情况
        //1.current没有子节点
        if (current.left == null && current.right == null) {
            //既是叶子节点，又是根节点
            if (current == this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        } else if (current.right = null) {
            //1.current只有一个节点
            if (current == this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left = null) {
            if (current == this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        } else {
            //两个节点
            //1.获取后继节点
            let successor = this.getSuccessor(current)
            if (current == this.root) {
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
                //后继分两种情况
            } else {
                parent.right = successor
            }
            //接上左子节点
            successor.left = current.left
        }
    }

    BinarySearchTree.prototype.getSuccessor = function (delNode) {
        let successor = delNode
        let current = delNode.right
        let successorParent = delNode

        while (current !== null) {
            successorParent = successor
            successor = current
            current = current.left
        }

        //判断寻找到的后记节点是否为delNode的right节点
        //顺序很重要！！！
        if (successor != delNode.right) {
            successorParent.left = successor.right
            successor.right = delNode.right
        }
        return successor
    }
}

/**
 * 前驱：二叉左子树的最大值
 * 后继：二叉右子树的最小值
 */

const bst = new BinarySearchTree()
bst.insert(5)
bst.insert(1)
bst.insert(50)
bst.insert(6)
bst.insert(15)
console.log(JSON.stringify(bst))

const handler = key => {
    console.log(key)
}

bst.preOrderTraversal(handler)

bst.midOrderTraversal(handler)

bst.postOrderTraversal(handler)

console.log(bst.max())
console.log(bst.min())