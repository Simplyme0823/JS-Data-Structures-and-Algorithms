/**
 * 1 2 8 9
 * 2 4 9 12
 * 4 7 10 13
 * 6 8 11 15
 */


const list = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]

function find(matrix, num) {
    //if (Array.isArray(matrix)) return //检测二维矩阵
    if(matrix.length == 0 && matrix[0].length ==0 )return
    let row = 0
    let col = matrix[0].length - 1
    let rows = matrix.length
    let cols = matrix[0].length

    while (row <= rows && cols > 0) {
        let rightTop = matrix[row][col]
        console.log(rightTop)
        if (num == rightTop) {
            return true
        } else if (num < rightTop) {//少一列
            col--
            cols--
        } else {//少一行
            row++
        }
    }
}

const result = find(list, 11)

console.log(result)