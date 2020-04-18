function HashTable() {
    //属性
    this.storage = [] //使用链地址法
    this.count = 0 //记录已经存放的元素个数
    this.limit = 7 //记录数组的长度

    //方法
}

HashTable.prototype.hashFunc = function (str, size) {
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    const index = hashCode % size
    return index
}

HashTable.prototype.put = function (key, value) {
    //根据key获取索引值，将value插入到对应位置
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) {
        bucket = []
        this.storage[index] = bucket
    }

    //修改
    for (let i = 0; i < bucket.length; i++) {
        if (tuple[0] == key) {
            tuple[1] == value
        }
        return
    }

    //添加
    bucket.push([key, value])

    this.count += 1

    if (this.count > this.limit * 0.75) {
        const newPrime = this.getPrime(this.limit)
        this.resize(newPrime)
    }
}

HashTable.prototype.get = function (key) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) return null

    for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        if (tuple[0] == key) {
            return tuple[1]
        }
    }

    return null
}

HashTable.prototype.remove = function (key) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) return null

    for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        if (tuple[0] == key) {
            bucket.splice(i, 1)
            this.count -= 1

            //缩小容量
            if (this.limit > 7 && this.count < this.limit * 0.25) {
                const newPrime = this.getPrime(Math.floor(this.limit / 2))
                this.resize(newPrime)
            }
            return tuple[1]
        }
    }

    return null
}

HashTable.prototype.isEmpty = function () {
    return this.count === 0
}

HashTable.prototype.size = function () {
    return this.count
}

/**
 * 哈希表的扩容
 * 1.扩容可以简单的将容量增大为2倍 同时保证哈希表长度为质数
 * 2.哈希表装载因子大于0.75时进行扩容
 * 3.同时因为index的计算与数组长度有关，因此扩容的时候要改变已有元素的位置
 * 4.操作比较耗时
 */

HashTable.prototype.resize = function (newLimit) {
    //保存旧数组
    const oldStorage = this.storage

    //重置所有的属性
    this.storage = []
    this.count = 0
    this.limit = newLimit

    //遍历旧数组中所有的bucket
    for (let i = 0; i < oldStorage.length; i++) {
        let bucket = oldStorage[i]
        //判断是否为null
        if (bucket == null) {
            continue
        }

        for (let k = 0; k < bucket.length; k++) {
            let tuple = bucket[j]
            this.put(tuple[0], tuple[1])
        }
    }
}

HashTable.prototype.isPrime = function (num) {
    const temp = parseInt(Math.sqrt(num))
    for (let i = 2; i < temp; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
        num += 1
    }
    return num
}


/**
 * 判断一个数是质数:只能被1和自己整除
 */
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
/**
 * 更高效率的判断方式
 * 如果一个数字可以进行因式分解，那么一定可以得到一个数大于sqrt(n) 一个小于sqrt(n)
 */
function isPrime_(num) {
    const temp = parseInt(Math.sqrt(num))

    for (let i = 2; i < temp; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}