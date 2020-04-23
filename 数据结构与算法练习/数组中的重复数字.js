let list = [2, 3, 1, 0, 2, 5, 3]

//第一种 硬解
const result = []
const duplicate = a.reduce((prev, cur) => {
    if (prev.indexOf(cur) == -1) {
        prev.push(cur)
    } else {
        result.push(cur)
    }
    return prev
})

console.log(result)

//第二种利用数字当成下标 插入数组

//第三种 找规律 如果都不是不重复的那么 数字和下标一致

//错误的想法：外层的for循环没有问题，但是外层的for循环要做操作吗？
//内层的for循环有问题，因为一定要item==index才可以下一次循环
a.forEach((item, index) => {
    if (item !== index) {
        a[index] = a[item]
        a[item] = item

        a.forEach((item, index) => {
            if (item !== index) {
                a[index] = a[item]
                a[item] = item
            }
        })
    }
})

let l = list.length
const result = []
for (let index = 0; index < l; index++) {
    while (list[index] != index) {
        //这里是考虑到开始循环之后 出现重复元的时候应该打破循环
        if (list[index] == list[list[index]]) {
            result.push(list[index])
            break
        }
        let temp = list[index]
        list[index] = list[temp]
        list[temp] = temp
    }
}



console.log(result)
