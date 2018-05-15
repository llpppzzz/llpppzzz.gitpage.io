<template>
  <div class="test">
    <div class="top-box">
      <div :class="['device', deviceCode == item ? 'active' : '']" v-for="item in deviceList" @click="getResource(item)">{{item}}</div>
    </div>
    <div class="body-box">
      <el-checkbox-group v-model="checkedGroup" @change="checkChange">
        <el-checkbox v-for="item in cardList" :label="item.code"></el-checkbox>
      </el-checkbox-group>
      <el-button @click="save()">保存</el-button>
    </div>
  </div>
</template>

<script>
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
        checkedGroup: []
      }
    },
    created () {
    },
    mounted () {
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
  }

</style>

