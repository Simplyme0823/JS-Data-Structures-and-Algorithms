let string1 = "hello"
let string2 = "hello"

let test1 = [1]
let test2 = [1]
console.log(test1==test2)//false 因为是引用类型
console.log(string1 === string2)//true 因为是值类型