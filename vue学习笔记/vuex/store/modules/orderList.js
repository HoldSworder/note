import Vue from 'vue'

const state = {
    orderList: [],
    params: {}
}

const getters = {
    getOrderList: (state) => {
        return state.orderList
    }
}

const actions = {
    fetchOrderList({ commit, state }) {
        Vue.http.post('http://localhost:8081/getOrderList', state.params)
        .then((res) => {
            commit('updateOrderList', res.data.list)
        }, (err) => {

        })
    }
}

const mutations = {
    updateOrderList(state, orderList) {
        state.orderList = orderList
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}