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
  </div>
</template>

<script>
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
    data () {
      return {
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
      }
    }
  }
</script>

<style lang="less">
  .test {
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

