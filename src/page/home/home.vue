<template>
  <div class="home-container">
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
    <div class="colorful">
      <span>彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色彩色</span>
    </div>
    <svg-icon name="star" size="20"></svg-icon>
    <svg-icon name="product-ranking-no1" width="30"></svg-icon>
  </div>
</template>

<script>
  import SvgIcon from "../../components/icon/icon";
  export default {
    name: 'home-container',
    components: {
      SvgIcon
    },
    data () {
      return {
        restaurants: [],
        state4: '',
        timeout: null
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    },
    methods: {
      loadAll () {
        return [
          {'polcode': '0000000047', 'entname': '廊坊市生产力科技发展有限公司'}, {
            'polcode': '0000000048',
            'entname': '河北裂变客科技成果孵化器有限公司'
          }, {'polcode': '0000000001', 'entname': '北华航天工业学院技术转移中心'}, {
            'polcode': '0000000005',
            'entname': '智多星机械设计工作室'
          }, {'polcode': '0000000002', 'entname': '河北省航天遥感信息处理与应用协同创新中心'}, {
            'polcode': '0000000006',
            'entname': '河北清华发展研究院'
          }, {'polcode': '0000000007', 'entname': '廊坊市产品质量监督检验所'}
        ]
      },
      querySearchAsync (queryString, cb) {
        let restaurants = this.restaurants
        let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        results = results.map(data => ({value: `${data.entname}(${data.polcode})`}))
        cb(results)
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.polcode.includes(queryString) || state.entname.includes(queryString))
        }
      },
      handleSelect (item) {
        console.log(item)
      }
    }
  }
</script>

<style lang="less">
  .home-container {
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
  }

</style>
