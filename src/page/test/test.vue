<template>
  <div class="test">
    <div class="row">
      <div class="colorful">
        <span>彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色</span>
      </div>
      <svg-icon name="star" size="20"></svg-icon>
      <svg-icon name="product-ranking-no1" width="30"></svg-icon>
    </div>
    <div class="offset-test">
      <div class="div1">
        <div class="div1-inner">dfsdfsdf</div>
      </div>
      <div class="div2"></div>
    </div>
  </div>
</template>

<script>
  import SvgIcon from '../../components/icon/icon'

  function getPosition (selector1, selector2) {
    let getOffset = function o (node, offset) {
      if (!node.offsetParent) {
        return 0
      } else {
        return node[offset] + o(node.offsetParent, offset)
      }
    }
    let node1 = document.querySelectorAll(selector1)[0]
    let node2 = document.querySelectorAll(selector2)[0]
    let width1 = node1.offsetWidth
    let width2 = node2.offsetWidth
    let height1 = node2.offsetHeight
    let height2 = node2.offsetHeight
    let offsetLeft1 = getOffset(node1, 'offsetLeft')
    let offsetLeft2 = getOffset(node2, 'offsetLeft')
    let offsetTop1 = getOffset(node1, 'offsetTop')
    let offsetTop2 = getOffset(node2, 'offsetTop')
    let compX = 0
    if (width1 + offsetLeft1 > width2 + offsetLeft2) {
      compX = offsetLeft1 - (width2 + offsetLeft2) < 0 ? 0 : offsetLeft1 - (width2 + offsetLeft2)
    } else {
      compX = offsetLeft2 - (width1 + offsetLeft1) < 0 ? 0 : offsetLeft2 - (width1 + offsetLeft1)
    }
    let compY = 0
    if (height1 + offsetTop1 > height2 + offsetTop2) {
      compY = offsetTop1 - (height2 + offsetTop2) < 0 ? 0 : offsetTop1 - (height2 + offsetTop2)
    } else {
      compY = offsetTop2 - (height1 + offsetTop1) < 0 ? 0 : offsetTop2 - (height1 + offsetTop1)
    }
    return {
      compX,
      compY
    }
  }

  export default {
    name: 'test',
    components: {
      SvgIcon
    },
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
      console.log(getPosition('.div1-inner', '.div2'))
    },
    computed: {
    },
    watch: {
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .test {
    @keyframes bgp {
      0% {background-position: 0 0}
      100% {background-position: -100% 0}
    }
    .colorful {
      background-image: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange, yellow, green, yellow, orange, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-size: 200% 100%;
      animation: bgp 5s infinite linear;
    }
    .active {
      color: #409EFF
    }
    .offset-test {
      .div1 {
        margin: 50px;
        height: 300px;
        position: relative;
        background: olive;
      }
      .div1-inner {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 150px;
        //height: 100px;
        background: #666666;
      }
      .div2 {
        margin: 10px;
        width: 100px;
        height: 100px;
        background: #666666;
      }
    }
  }

</style>

