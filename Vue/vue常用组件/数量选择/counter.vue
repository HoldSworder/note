<template>
    <div class="counter-component">
      <div class="counter-btn" @click="reduce()"> - </div>
      <div class="counter-show">
        <input type="text" v-model.number='num' @keypress="fixNum()">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data() {
    return{
      num: this.min
    }
  },
    watch: {
      num() {
          this.$emit('on-change', this.num)
      }
  },
  methods: {
    fixNum() {
      let fix
      if(typeof this.num === 'string') {
        fix = Number(this.num.replace(/\D/g,''))
      }else{
        fix = this.num
      }
      if(fix > this.max || fix < this.min) {
        fix = this.min
      }
      this.num = fix
    },
    reduce() {
      if(this.num <= this.min){
        return
      }
      this.num--
    },
    add() {
      if(this.num >= this.max){
        return
      }
      this.num++
    }
  }
}
</script>


<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
