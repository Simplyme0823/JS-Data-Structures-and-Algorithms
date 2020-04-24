let list = [2, 3, 1, 4, 2, 5, 3]

//第一种 硬解
const res = []
const duplicate = list.reduce((prev, cur) => {
    if (prev.indexOf(cur) == -1) {
        prev.push(cur)
    } else {
        res.push(cur)
    }
    return prev
}, [])

console.log(res)

//第二种利用数字当成下标 插入数组


//第三种 找规律 如果都不是不重复的那么 数字和下标一致

//错误的想法：外层的for循环没有问题，但是外层的for循环要做操作吗？
//内层的for循环有问题，因为一定要item==index才可以下一次循环
/*list.forEach((item, index) => {
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
})*/

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


//一个n+1个元素的数组中 每个元素的值都是1-n的范围内，找出重复的数字
function search(list) {
    if (!Array.isArray(list)) return
    if (list.length === 0) return

    let start = 1
    let end = list.length - 1

    while (end >= start) {
        let middle = parseInt((start + end) / 2)
        let count = counts(list, start, middle)
        //while循环的终止条件，题目是找出任意一个，审题很重要，只要找出一个就行
        if (end === start) {
            if (count > 1) {
                console.log(start)
                return start
            } else {
                break
            }
        }

        if (count > (middle - start + 1)) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    return -1
}

function counts(arr, start, end) {
    if (!Array.isArray(arr)) return
    if (arr.length === 0) return
    let count = arr.reduce((prev, element) => {
        if (element >= start && element <= end) {
            prev++
        }
        return prev
    }, 0);
    return count
}
search(list)