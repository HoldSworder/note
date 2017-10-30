基本语法
--------

var promise = new Promise((resolve,reject) => {
    if(成功) {
        resolve(value);
    }else {
        reject(err)
    }
})

promise.then(接受resolve即成功时的回调函数).catch(接受reject即失败时的回调函数)