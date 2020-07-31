// Vue.component('alert',{
//     template: '<button @click="onClick">弹弹弹</button>',
//     methods: {
//         onClick: function() {
//             alert('Yo.');
//         }
//     }
// });

// new Vue({
//     el: '#app',
// })

var alertComponents = {
    template: '<button @click="onClick">弹弹弹</button>',
    methods: {
        onClick: function() {
            alert('Yo.')
        }
    }
};


new Vue({
    el: '#app1',
    components: {
        alert: alertComponents
    }
})