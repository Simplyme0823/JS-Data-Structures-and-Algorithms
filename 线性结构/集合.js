/**
 * 集合通常是无序的，集合里面的元素不允许重复
 * 
 * 不能通过下标值进行访问
 * 
 * ES6中其实已经有了set weakset map weakmap类
 */


function Set() {
    this.items = {}
}

Set.prototype.add = function (value) {
    //判断是否已经存在该元素
    if (this.has(value)) return false

    //key prop都是value
    this.items[value] = value
    //有时候会添加失败
    return true
}

Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
}

Set.prototype.remove = function (value) {
    //判断该集合中是否包含该元素
    if (!this.has(value)) {
        return false
    }
    //将元素删除
    delete this.items[value]
    return true
}

Set.prototype.clear = function () {
    this.items = {}
}

//这里没有考虑兼容性的问题 只关注数据结构
Set.prototype.size = function () {
    return Object.keys(this.items).length
}

Set.prototype.values = function () {
    return Object.keys(this.items)
}

Set.prototype.union = function (otherSet) {
    const unionSet = new Set()
    const values = this.values()
    values.forEach(item => {
        unionSet.add(item)
    })
    const otherValues = otherSet.values()
    otherValues.forEach(item => {
        unionSet.add(item)
    })
    return unionSet
}

Set.prototype.intersection = function (otherSet) {
    const intersection = new Set()
    const values = this.values()
    values.forEach(item => {
        if (otherSet.has(item)) {
            intersection.add(item)
        }
    })
    return intersection
}

Set.prototype.difference = function (otherSet) {
    const differenceSet = new Set()

    const values = this.values()
    values.forEach(item => {
        if (!otherSet.has(item)) {
            differenceSet.add(item)
        }
    })

    return differenceSet
}

Set.prototype.subset = function (otherSet) {
    const values = this.values()
    values.forEach(item => {
        if (!otherSet.has(item)) {
            return false
        }
    })
    return true
}


const set = new Set()
let obj = { name: "obj" }
console.log(set.values())