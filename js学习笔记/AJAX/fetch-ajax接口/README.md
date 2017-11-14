使用方法
==========

    fetch('url',{
        method: 'get or post'
    }).then((res) => {
        return res.json()  //此处得到的res为ReadableStream格式 需要经过json()处理
    }).then((json) => {
        console.log(json)
        this.xxx = json    //成功后代码
    }).catch((err) => {
        console.log(err)   //失败后代码
    })