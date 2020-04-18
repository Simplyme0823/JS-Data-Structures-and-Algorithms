//基于链表实现 js中没有链表

//基于数组实现
//封装栈类
function Stack() {

    //Method 函数和某一个对象实例有联系
    //Function 

    //栈中的属性
    this.items = []
    //栈的相关操作
    //push 添加新元素到栈顶 
    //this.push=function(){} //不推荐，

    Stack.prototype.push = function (element) { //节省内存
        this.items.push(element)
    }
    //pop 移除栈顶的元素，同时返回被移除的元素
    Stack.prototype.pop = function (element) { //节省内存
        return this.items.pop(element)
    }
    //peek  返回栈顶的元素，不对栈做任何修改
    Stack.prototype.peek = function () { //节省内存
        return this.items[this.items.length - 1]
    }
    //isEmpty() 栈里面没有任何元素就返回true 否则返回false
    Stack.prototype.isEmpty = function () { //节省内存
        return this.items.length === 0
    }
    //size 栈里面的个数 类似数组的length
    Stack.prototype.size = function () {
        return this.items.length
    }
    //toString 将栈以字符串的形式返回
    Stack.prototype.toString = function () {
        let result = ""
        for (let i of this.items) {
            result += i + " "
        }
        return result
    }
}

var stack = new Stack()
stack.push(20)
stack.push(10)
stack.push(100)
stack.push(5)


/**
 * 栈结构的应用
 * 1.十进制转换为二进制
 */
var two = new Stack()

function tenToTwo(num){
    while(num >0){
        let rem = num % 2
        num = Math.floor(num/2)
        two.push(rem)
    }
    /*let rem = num % 2
    two.push(rem)
    console.log(two)
    while(num>0){
        num = Math.floor(num/2)
        tenToTwo(num)
    }*/
}

tenToTwo(8)
