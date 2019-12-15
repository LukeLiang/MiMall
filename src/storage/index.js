/**
 * 对Storage进行封装
 * 可以进行单个的值进行操作
 */

const STORAGE_KEY = 'MALL';

/**
 * {"user":{"username":"luke", "age":20, "sex":1}}
 * @param {*} key 在一级模块下设置值
 * @param {*} value 需要设置的值
 * @param {*} module_name 在二级模块下设置值
 */
const setItem = function (key, value, module_name) {
    if(module_name){
        const oldStorage = this.getItem(module_name)
        oldStorage[key] = value
        this.setItem(module_name, value)
        return
    }
    const sessionStorage = this.getStorage()
    sessionStorage[key] = value  // mall
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionStorage))
}

/**
 * {"user":{"username":"luke", "age":20, "sex":1}}
 * @param {*} key:{"username":"luke", "age":20, "sex":1} 中,{username,age,sex中的任意一个}
 * @param {*} module_name: 第13行代码中的 username 
 */
const getItem = function (key, module_name) {
    // {"user":{"username":"luke", "age":20, "sex":1}}
    if(module_name){
        const moduleName = this.getItem(module_name)
        // {"username":"luke", "age":20, "sex":1}
        if(moduleName){
            return moduleName[key]
        }
    }
    const sessionStorage = this.getStorage() // 获取的是上面的那一个
    return sessionStorage[key]
}

const getStorage = function () {
    const sessionStorage = window.sessionStorage.getItem(STORAGE_KEY) || '{}'
    return JSON.parse(sessionStorage)
}


const clear = function (key, module_name) {
    let val = this.getStorage()
    if(module_name){
        delete val[module_name][key]
    }else{
        delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}

export{
    setItem,
    getItem,
    getStorage,
    clear
}