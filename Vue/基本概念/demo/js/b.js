var like = {
    template: 
        `
            <button @click="onClick" :class="{liked: again}">{{num}}</button>
        `,
    data: function() {
        return {
            num: 10,
            again: false
        }
    },
    methods: {
        onClick: function() {
            if(!this.again){
                this.num++
            }else{
                this.num--
            }
            this.again = !this.again
        }
    }
}

new Vue({
    el: '#app2',
    components: {
        like: like
    }
})