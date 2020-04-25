/**
 * 链表和数组一样，可以用域存储一系列的元素，但是链表和数组的实现机制完全不同
 * 
 * 数组：申请一段连续的内存空间(一整块内存)，所以当当前数组不能满足容量需求的时候，需要扩容
 * 即，申请一个更大的数组，比如2倍，然后将原来的元素赋值过去
 * 另外，数组插入的时候，需要整体移动一部分数组，消耗性能
 * 
 */

/**
 * 链表的内存空间不必是连续的 实现灵活的内存状态管理
 * 链表每个元素由一个存储元素本身的节点和指向下一个元素的引用(ref)
 * 
 * 链表不必再创建时就确定大小，并且大小可以无限延申下去
 * 
 * 链表在插入和删除数据时，事件复杂度可以达到O(1), 相对数组效率高很多
 */

/**
 * 链表的缺点：链表访问任何一个位置的元素时，都需要冲头访问(无法跳过第一个元素访问任何一个元素)
 * 无法通过下表直接访问元素，需要从头一个一个访问，直到找到对应的元素
 */

function linkedList() {
    //默认情况 head为null
    this.head = null
    this.length = 0
    //默认next为null
    function node(data) {
        this.data = data
        this.next = null
    }

    linkedList.prototype.append = function (data) {
        var newNode = new node(data)
        //判断添加的是否为第一个节点
        if (this.length === 0) {
            //this.head已经是第一个了 
            this.head = newNode
        } else {
            //找到最后一个节点
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        //长度改变
        this.length += 1 //有些语言 比如python不支持++
    }

    linkedList.prototype.toString = function () {
        var current = this.head
        var result = ""
        while (current) {
            result += current.data + " "
            current = current.next
        }
        return result
    }
    //insert改变了数组的长度
    linkedList.prototype.insert = function (position, data) {
        //对position进行越界判断
        if (position < 0 || position > this.length) return

        var newNode = new node(data)

        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            var index = 0
            var current = this.head
            var previes = null
            while (index++ < this.length) {
                previes = current //保存的是内存地址
                current = current.next
            }
            newNode.next = current.next
            previes.next = newNode
        }
    }

    linkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) return null
        //2.获取对应的data
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    //对于相同的值？ 在数组中 indexOf只返回第一个值
    linkedList.prototype.indexOf = function (data) {
        //1.定义变量
        var current = this.head
        var index = 0

        //2.开始查找
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index += 1
        }
        //没有找到返回-1
        return -1
    }
    //不改变数组的长度 只改变node的data
    linkedList.prototype.update = function (position, newData) {
        if (position < 0 || position >= this.length) return false

        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = newData
        return true
    }

    linkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return false

        

        if (position === 0) {
            //this.head已经是第一个节点了 this.head.next为第一个节点
            this.head = this.head.next
        } else {
            var index = 0
            //var没有块级作用域
            var current = this.head
            var previes
            while (index++ < position) {
                previes = current
                current = current.next
            }
            previes.next = current.next
        }
        this.length -=  1

        //return current.data
    }

    linkedList.prototype.remove = function(data){
        var position = this.indexOf(data)
        return this.removeAt(position)
    }

    linkedList.prototype.isEmpty = function(){
        return this.length === 0
    }

    linkedList.prototype.size = function(){
        return this.length
    }
}

linkedList.prototype.print=function(){
    current = this.head
    const stack =[]
    while(current){
        stack.unshift(current.data)
        current = current.next
    }
    stack.forEach(item=>{
        console.log(item)
    })
}

linkedList.prototype.print_ = function(){
    digui(this.head)
}

const digui= node => {
    console.log(node.data)
    if(node.next){
        digui(node.next)
    }
}


//测试代码
//1.创建
var list = new linkedList()
list.append('kobe')
list.append('james')
list.append('rose')

console.log(list.toString())
console.log(list.get(2))
console.log(list.indexOf('kobe'))
list.update(0, 'noah')
console.log(list)
list.removeAt(0)
console.log(list)
console.log('-------------')
//list.print()

list.print_()
