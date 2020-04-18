/**
 * 数组基于索引操作效率高，基于内容效率低
 *
 * 哈希表，无论多少数据，插入和删除值都接近常量时间 O(1)
 * 查找效率比树还快 基本可以瞬间查找到想要的元素
 * 哈希表对于树来说编码要容易很多
 *
 * 结构是数组，但是神奇之处在于对下标值的一种变换，这种变换成为哈希函数
 */

/**
 * 缺点，哈希表是无序的，不可以一固定的方式来遍历其中的元素
 * 哈希表的key是不能重复的
 */

/**
 * 开放地址法：线性查找的时候 找到空位置就停止
 *            在删除某一元素的时候 不能将其设置为null 要进行特殊处理
 *            线性探测的问题：聚集
 *            一连串填充单元就叫做聚集，聚集会影响性能 比如插入一个下标相同的元素
 *
 *            二次探测：优化探测的步长 x+1^2, x+2^2, x+3^3......
 *            问题：32-12-112-92 都要index为2的地方 那么造成步长不一的一种聚集，还是会影响效率（但是比线性探测好）
 *
 *            再哈希化：将元素再进行哈希化，让第一次哈希化得到的下标一样的元素的步长不一样
 *                    条件：和第一个哈希函数不同，不然结果还是一样的
 *                            不能输出0 否则步长一样
 *                    stepSize = constant - (key % constant)
 *                    constant是质数，且小于数组容量
 *                    stepSize = 5 - (key % 5) 满足需求，且结果不可能为0
 */


/**
 * 哈希表的效率
 *
 * 如果没有产生冲突，那么效率很高
 *
 * 如果发生冲突，存取时间就依赖后来的探测长度
 * 平均探测长度及平均存储时间取决于填装因子
 *
 * 填装因子 = 总数据项/哈希表长度
 * 开放地址法：填装因子最大值为1，因为必须找到空白地址
 * 链地址法：大于1
 *
 * 效率来讲 链地址法效率更高
 */


/**
 * 好的哈希函数的有点
 * 1.快速计算 尽量减少乘法和出发，因为性能比较低
 *
 * 2.哈希值均匀的分布，无论是链地址法还是开放地址法 当多个元素映射到同一个位置的时候 都会影响效率
 *  哈希表长度最好使用质数，使用质数会让分布更加均匀
 *  链地址法质数没有那么重要，在java中故意是2的N次


 /**
  * 霍纳法则/秦九昭算法
  *
  */


/**
 * java采用链地址法
 * hashMap的初始长度为16，每次都自动扩展，长度必须为2的次幂
 * HashMap中为了提高效率，采用了位运算的方式(二进制)
 * index = hashCode(Key) & (Length - 1) 位运算
 * 例如 计算book 十进制3029737 二进制 101110001110101110 1001
 * 假定默认长度16 Length-1 为十进制的15  二进制为1111
 * 101110001110101110 1001 & 1111 = 1001 十进制是9 所以index为9
 */

/**
 * 哈希函数的实现
 */
function hashFunc(str, size) {
    let hashCode = 0

    //霍纳法则
    for (let i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)//获取字符的 Unicode编码
    }

    //取余操作
    const index = hashCode % size

    return index
}
//测试hash函数
console.log(hashFunc('abc',7))