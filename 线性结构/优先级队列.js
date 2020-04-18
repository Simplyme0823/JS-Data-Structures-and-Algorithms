/**
 * 普通队列插入一个元素，数据会被放在后端
 * 并且前面所有的元素处理完，才轮到它
 * 
 * 优先级队列，会考虑数据的优先级，和其他优先数据级进行比较
 * 
 * 1.element
 * 2.priority
 * 
 */

function priorityQueue() {

    //内部类???
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.items = []


    priorityQueue.prototype.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority)
        if (this.items.length == 0) {
            this.items.push(queueElement)
        } else {
            var added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                }
                added = true
                //打破循环
                break
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }
}

const pq = new priorityQueue()
pq.enqueue("cba", 100)
pq.enqueue("nba", 99)
pq.enqueue("nba", 50)
console.log(pq)