class Mvvm {
    constructor(option) {
        this.$option = option
        let data = this._data = this.$option.data

        new Oberve(data)
    }
}

class Observe {
    constructor(data) {
        this.dep = new Dep()

        for (const key in data) {
            if(typeof data[key] == 'object') {
                new Observe(data[key])
            }
        }

        return this.proxy(data)
    }


    proxy(data) {
        let dep = this.dep
        new Proxy(data, {
            get(target, key, receiver) {
                return Reflect.get(target, key, receiver)
            },
            set(target, key, value, receiver) { // 更改值的时候
                if (target[key] === value) { // 设置的值和以前值一样就不理它
                    return
                }
                Oberve.observe(newVal) // 当设置为新值后，也需要把新值再去定义成属性
                return Reflect.set(target, key, value, receiver)
            }
        })
    }
}

class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    notify() {
        this.subs.filter(item => typeof item !== 'string').map(sub => sub.update())
    }
}