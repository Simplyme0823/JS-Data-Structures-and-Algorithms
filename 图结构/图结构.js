function Dictionay() {
    // 字典属性
    this.items = {}

    // 字典操作方法
    // 在字典中添加键值对
    Dictionay.prototype.set = function (key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个key
    Dictionay.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    Dictionay.prototype.remove = function (key) {
        // 1.判断字典中是否有这个key
        if (!this.has(key)) return false

        // 2.从字典中删除key
        delete this.items[key]
        return true
    }

    // 根据key去获取value
    Dictionay.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的keys
    Dictionay.prototype.keys = function () {
        return Object.keys(this.items)
    }

    // 获取所有的value
    Dictionay.prototype.values = function () {
        return Object.values(this.items)
    }

    // size方法
    Dictionay.prototype.size = function () {
        return this.keys().length
    }

    // clear方法
    Dictionay.prototype.clear = function () {
        this.items = {}
    }
}

function Graph() {
    //顶点：(数组)/边：{字典}
    this.vertexes = [] //顶点
    this.edges = new Dictionay()
}

Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.edges.set(v, [])
}

//无向图
Graph.prototype.addEdge = function (v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
}

Graph.prototype.toString = function () {
    let resultString = ""

    for (let i = 0; i < this.vertexes.length; i++) {
        resultString += this.vertexes[i] + ' -> '
        const edge = this.edges.get(this.vertexes[i])
        for (let j = 0; j < edge.length; j++) {
            resultString += edge[j] + ' '
        }
        resultString += '\n'
    }

    return resultString
}

//图的遍历方法

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A', 'B')
const result = graph.toString()
console.log(result)