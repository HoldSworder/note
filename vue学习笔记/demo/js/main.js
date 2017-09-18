var app = new Vue({
    el: '#app',
    data: {
        name: 'qzr',
        age: 20,
        sex: '男',
        foodList: [
            {
                name: '葱',
                price: 10
            },
            {
                name: '姜',
                price: 5
            },
            {
                name: '蒜',
                price: 20
            }
        ],
        url: 'http://baidu.com',
        isActive: true,
        from: 2,
        mult: [],
        role: 'hr',
        math: 90,
        english: 80,
        physics: 85,
    },
    methods: { //事件
        onClick: function() {
            console.log('clicked')
        },
        onEnter: function() {
            console.log('onEnter')
        },
        onOut: function() {
            console.log('onOut')
        },
        onSubmit: function() {
            console.log('submitted')
        },
        
    },
    computed: { //计算属性
        sum: function() {
            return this.math + this.english + this.physics
        },
        average: function() {
            return Math.round(this.sum / 3)
        }
    }
})