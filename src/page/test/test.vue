<template>
  <div class="test">
    <div class="top-box">
      <div :class="['device', deviceCode == item ? 'active' : '']"
      v-for="(item,index) in deviceList"
      :key="index"
      @click="getResource(item)">{{item}}</div>
    </div>
    <div class="body-box">
      <el-checkbox-group v-model="checkedGroup" @change="checkChange">
        <el-checkbox v-for="item in cardList" :key="item.code" :label="item.code"></el-checkbox>
      </el-checkbox-group>
      <el-button @click="save()">保存</el-button>
    </div>
    <el-button>开始</el-button>
    <div class="tag-input-test">
      <div class="title"
        v-for="(tag, index) in tags"
        :key="index"
      >
        <span>{{tag.title}}</span>
        <input type="text" v-model="tag.title">
      </div>
    </div>
    <div class="tag-input-test">
      <my-tag-input v-for="(tag, index) in tags"
        :key="index"
        :title="tag.title"
        @change="tagChange"></my-tag-input>
    </div>
    <div class="offset-test">
      <div class="div1">
        <div class="div1-inner">dfsdfsdf</div>
      </div>
      <div class="div2"></div>
    </div>
    <div class="row">
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
  </div>
</template>

<script>
  import SvgIcon from "../../components/icon/icon";

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
        restaurants: [],
        state4: '',
        timeout: null,
        deviceList: ['1', '2', '3', '4', '5', '6'],
        cardList: [{
          code: '111',
          name: 'xxx'
        }, {
          code: '112',
          name: 'xxx'
        }, {
          code: '113',
          name: 'xxx'
        }, {
          code: '114',
          name: 'xxx'
        }, {
          code: '115',
          name: 'xxx'
        }, {
          code: '116',
          name: 'xxx'
        }, {
          code: '117',
          name: 'xxx'
        }],
        deviceCode: '1',
        list: ['111', '112'],
        fullData: {},
        checkedGroup: [],
        tags: [
          {
            title: '沙雕龙'
          },
          {
            title: '沙雕龙',
            min: 10,
            max: 100
          },
          {
            title: '沙雕龙'
          },
          {
            title: '沙雕龙',
            min: 10,
            max: 100
          },
          {
            title: '沙雕龙',
            min: 20,
            max: 100
          },
          {
            title: '沙雕龙',
            min: 10,
            max: 100
          }
        ]
      }
    },
    created () {
    },
    mounted () {
      console.log(getPosition('.div1-inner', '.div2'))
      this.restaurants = this.loadAll()
    },
    computed: {
    },
    watch: {
      checkedGroup (val) {
        this.fullData[this.deviceCode] = val
      }
    },
    methods: {
      getResource (item) {
        console.log(item)
        this.deviceCode = item
        if (!this.fullData[this.deviceCode]) {
          this.getDeviceVRList()
        } else {
          this.checkedGroup = this.fullData[this.deviceCode]
        }
      },
      getDeviceVRList () {
        let list = ['111', '112']
        this.fullData[this.deviceCode] = list
        this.checkedGroup = list
      },
      checkChange (val) {
        console.log(val)
      },
      save () {
        console.log(this.fullData)
      },
      tagChange (val) {
        console.log(val)
      },
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
    .device {
      height: 20px;
      width: 50px;
      cursor: pointer
    }
    .active {
      color: #409EFF
    }
    .my-tag-input {
      margin-right: 30px;

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

