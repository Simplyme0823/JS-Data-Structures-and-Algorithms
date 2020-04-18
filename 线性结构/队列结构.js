/**
 * 受限的线性结构 
 * 前端删除数据 后端插入数据 
 * Queue  先进先出 FIFO
 */
function Queue() {
    this.items = []
}

Queue.prototype.enqueue = function (element) {
    this.items.push(element)
}

Queue.prototype.dequeue = function () {
    //先进先出
    /**
     * 删除第一个元素，后面的元素要补位，所以性能不高
     * 
     * 使用链表性能高
     */
    return this.items.shift()
}

Queue.prototype.front = function () {
    return this.items[0]
}

Queue.prototype.isEmpty = function () {
    return this.items.length === 0
}

Queue.prototype.size = function () {
    return this.items.length
}

Queue.prototype.toString = function () {

}

/**
 * 击鼓传花
 */

const queque = new Queue()
let count = 0
while (count < 10) {
    queque.enqueue(count)
    count++
}

const a = queque.dequeue()

function jigu(out) {
    let cicle = 1
   /* while (queque.size() >1) {
        for(let i =0;i<out-1;i++){
            queque.enqueue(queque.dequeue())
        }

        queque.dequeue()
    }*/
        const first = queque.front()
        queque.dequeue()
        if (cicle === out) {
            cicle = 0
            queque.enqueue(first)
        }
        cicle++
    
}

const result = queque["items"]

console.log(result)