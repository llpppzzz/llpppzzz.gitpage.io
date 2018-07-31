<template>
  <div class="my-tag-input">
    <div :class="['title', active ? 'active' : '']" @click="clickTitle">{{title}}<span v-show="number">：{{number}}</span></div>
    <div class="input-box" v-show="isPopup">
      <input :class="{error: onError}" type="text" :placeholder="placeholder" v-model="number">
    </div>
  </div>
</template>

<script>
  let queue = []
  // 点击外部区域，关闭当前弹框
  let handler = function (event) {
    queue.forEach(function (item) {
      const target = event.target
      if (!item || !item.$el) {
        return
      }
      if (target === item.$el || item.$el.contains(target)) {
        return
      }
      if (!item.isPopup) return
      if (item.isPopup && item.check()) {
        item.hide()
      }
    })
  }
  document.addEventListener('click', handler)

  export default {
    name: 'myTagInput',
    props: {
      title: {
        type: String,
        default: ''
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      }
    },
    data () {
      return {
        isPopup: false,
        number: '',
        onError: false,
        active: false
      }
    },
    created () {
      queue.push(this)
    },
    destroyed () {
      document.removeEventListener('click', handler)
    },
    mounted () {
    },
    computed: {
      placeholder () {
        return this.min + '-' + this.max
      }
    },
    watch: {
    },
    methods: {
      hide (e) {
        this.isPopup = false
      },
      clickTitle () {
        this.isPopup = true
        this.active = true
      },
      check () {
        if (this.number === '') return true
        let number = Number(this.number)
        // return (isNaN(number) || number > this.max || number < this.min)
        if (isNaN(number) || number > this.max || number < this.min) {
          this.onError = true
        } else {
          // let newTitle = this.title + '：' + number
          // this.$emit('update:title', newTitle)
          this.$emit('change', number)
          this.onError = false
        }
        return !this.onError
      }
    }
  }
</script>

<style lang="less">
  .my-tag-input {
    display: inline-block;
    position: relative;
    .title {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 15px;
      cursor: pointer;
    }
    .active {
      border: 1px solid orange;
    }
    .input-box {
      position: absolute;
      top: 30px;
      left: 0;
    }
    .error {
      border: 1px solid red
    }
  }
</style>
