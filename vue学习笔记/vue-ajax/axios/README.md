get:
```js
get() {
    axios.get('',{
        params:{
            传参
        },
        headers:{
            请求头
        },
    }).then(res => {
        this.xxx = res.data;
    }).catch(error => {
        err 请求错误
    })
}
```

post: 
```js
post() {
    axios.post('',{
        传参
    },{
        headers:{
            请求头
            token: 'xxx'
        }
    }).then(res => {
        this.xxx = res.data
    }).catch(error => {

    })
}
```

http: 自定义请求  
```js
http() {
    axios({
        url: '',
        method: 'post',
        data: {
            userId: '101' //post传参在data定义
        },
        params:{
            userId: '102' //get请求需要用params来传参
        },
        headers:{
            token: '' //请求头
        }
    }).then(res => {
        this.xx = res.data
    })
}
```

全局拦截
-----------
```js
mounted: function() {
    axios.interceptors.request.ues(config => {

        console.log('xxx')  //所有请求前都会执行此代码

        return config
    })
    axios.interceptors.response.use(response => {

        console.log('xxx')  //所有请求后都会执行此代码 
        
        return response
    })
}
```