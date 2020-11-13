/*
 * @Author: dfh
 * @Date: 2020-11-13 08:59:04
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 19:47:22
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/doc/1.js
 */
let arr = [1, 2, 3]
let it = arr[Symbol.iterator]()
console.log(arr[Symbol.iterator])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

let str = '1,2,3'
const it = str[Symbol.iterator]()
console.log(str[Symbol.iterator])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())


let obj = {
    a: '1',
    b: '2',
    [Symbol.iterator]() {
        const that = this
        let index = 0
        const values = Object.values(that)
        return {
            next() {
                return {
                    value: values[index++],
                    done: index > values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]()
console.log(obj[Symbol.iterator])
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* gen() {

}
console.log(gen[Symbol.iterator])
let it = gen()
console.log(it[Symbol.iterator])
