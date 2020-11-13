/*
 * @Author: dfh
 * @Date: 2020-11-13 20:27:31
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 20:27:31
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/doc/2.js
 */
function times(cb,len){
    let count=0
    return ()=>{
        if(++count===len){
            cb()
        }
    }
}
const t=times(()=>console.log('完成'),3)
t()
t()
t()