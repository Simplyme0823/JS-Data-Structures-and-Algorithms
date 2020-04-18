
function doubleLinkedList() {
    this.head = null
    this.tail = null
    this.length = 0

    function node(data) {
        this.prev = null
        this.data = data
        this.next = null
    }

    //尾部添加
    doubleLinkedList.prototype.append = function (data) {
        var newNode = new node(data)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            //this.tail为前面所有的node
            //新元素指向尾部元素
            newNode.prev = this.tail
            //因为是双向的因此要考虑next和prev
            //this.tail为旧链表的尾部元素 尾部元素指向新元素
            this.tail.next = newNode
            //新元素成为了尾部元素， tail指向新的尾部元素
            this.tail = newNode
        }
        this.length += 1
    }

    doubleLinkedList.prototype.toString = function () {
        return this.backwordString()
    }

    doubleLinkedList.prototype.forwardString = function () {
        var current = this.tail
        var string = ""
        while (current) {
            string += current.data + ' '
            current = current.prev
        }
        return string
    }

    doubleLinkedList.prototype.backwordString = function () {
        var current = this.head
        var string = ""
        while (current) {
            string += current.data + ' '
            current = current.next
        }
        return string
    }

    doubleLinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false

        const newNode = new node(data)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length = this.length + 1
        }
        else {
            if (position === 0) {
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            } else if (position === this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                let index = 0
                let current = this.head
                while (index++ < position) {
                    //到达了目的地
                    current = current.next

                }
                newNode.next = current
                newNode.prev = current.prev
                current.prev = newNode
                current.prev.next = newNode
            }
        }
    }

    doubleLinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return null

        if (position <= this.length / 2) {
            let current = this.head
            let index = 0
            while (index++ < position) {
                current = current.next
            }
            return current.data
        } else {
            let current = this.tail
            let index = this.length - 1
            while (index-- < position) {
                current = current.prev
            }
            return current.data
        }
    }

    doubleLinkedList.prototype.indexOf = function (data) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }

    //根据position决定前往后 还是后往前
    doubleLinkedList.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = data
    }

    doubleLinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            if (position === 0) {
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position === this.length - 1) {
                current = this.tail//获取返回值
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                let index = 0
                while (index++ < position) {
                    current = current.next
                }
                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        this.length -= 1
        return current.data
    }

    doubleLinkedList.prototype.remove = function (data) {
        const index = this.indexOf(data)
        return this.removeAt(index)
    }

    doubleLinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    doubleLinkedList.prototype.size = function () {
        return this.length
    }

    doubleLinkedList.prototype.getHead = function(){
        return this.head.data
    }

    doubleLinkedList.prototype.getTail = function(){
        return this.tail.data
    }
}

const list = new doubleLinkedList()

list.append('cba')
list.append('nba')
list.append('aaa')
console.log(list.toString())
console.log(list.removeAt(2))
console.log(list.toString())
