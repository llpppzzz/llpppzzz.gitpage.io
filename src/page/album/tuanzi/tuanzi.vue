<template>
  <div class="tuanzi-container">
    <el-container>
      <el-aside width="200px">
        <ul class="step-box">
          <li v-for="item in timeLine">
            <span class="date">{{item.date}}</span>
            <span class="describe">{{item.describe}}</span>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div class="carousel-box">
          <div class="item-box" v-for="(item,index) in imgs" v-show="showEle[index]">
            <div class="pull-left animated fadeInLeftBig">
              <img :src="item.src1">
            </div>
            <div class="pull-right animated fadeInRightBig">
              <!--<img :src="item.src2">-->
              <!--<img :src="item.src3">-->
              <!--<img :src="item.src4">-->
              <!--<img :src="item.src5">-->
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import browser from 'common/browser'

  let isMobile = browser.isMobile

  export default {
    name: 'tuanzi-container',
    data () {
      return {
        aa: false,
        scroll: '',
        timeLine: [
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          },
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          },
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          },
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          },
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          },
          {
            date: '2017.05.20',
            describe: '团子来啦！'
          }
        ],
        showEle: [true, false, false, false, false, false],
        imgs: [
          {
            showEle: true,
            src1: '/static/images/tuanzi/tuanzi.jpg',
            src2: '',
            src3: '/static/images/tuanzi/tuanzi.jpg',
            src4: '/static/images/tuanzi/tuanzi.jpg',
            src5: '/static/images/tuanzi/tuanzi.jpg'
          },
          {
            showEle: false,
            src1: '/static/images/tuanzi/tuanzi.jpg',
            src2: '/static/images/tuanzi/tuanzi.jpg',
            src3: '/static/images/tuanzi/tuanzi.jpg',
            src4: '/static/images/tuanzi/tuanzi.jpg',
            src5: '/static/images/tuanzi/tuanzi.jpg'
          },
          {
            showEle: false,
            src1: '/static/images/tuanzi/tuanzi.jpg',
            src2: '/static/images/tuanzi/tuanzi.jpg',
            src3: '/static/images/tuanzi/tuanzi.jpg',
            src4: '/static/images/tuanzi/tuanzi.jpg',
            src5: '/static/images/tuanzi/tuanzi.jpg'
          },
          {
            showEle: false,
            src1: '/static/images/tuanzi/tuanzi.jpg',
            src2: '/static/images/tuanzi/tuanzi.jpg',
            src3: '/static/images/tuanzi/tuanzi.jpg',
            src4: '/static/images/tuanzi/tuanzi.jpg',
            src5: '/static/images/tuanzi/tuanzi.jpg'
          },
          {
            showEle: false,
            src1: '/static/images/tuanzi/tuanzi.jpg',
            src2: '/static/images/tuanzi/tuanzi.jpg',
            src3: '/static/images/tuanzi/tuanzi.jpg',
            src4: '/static/images/tuanzi/tuanzi.jpg',
            src5: '/static/images/tuanzi/tuanzi.jpg'
          }
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.showPhoto)

      // isMobile = true
      if (isMobile) {
        this.showEle = [true, true, true, false, false, false]
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.showPhoto)
    },
    computed: {
      pageStatus () {
        return this.$store.state.pageStatus
      }
    },
    methods: {
      showPhoto () {
        let index = 0
        this.scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

        if (isMobile) {
          index = Number.parseInt((this.scroll + 1300) / 500)
        } else {
          index = Number.parseInt((this.scroll + 499) / 500)
        }
        this.showEle.splice(index, 1, true)
      }
    }
  }
</script>

<style lang="less">
  .tuanzi-container {
    margin: 0 auto;
    overflow: hidden;

    .carousel-box {
      width: 100%;
      .item-box {
        width: 100%;
        height: 500px;
        img {
          height: 520px;
          float: left;
        }
        .pull-left {
          height: 480px;
          width: 450px;
          background: #333;
          img {
            height: 480px;
          }
        }
        .pull-right {
          height: 480px;
          width: 480px;
          background: #ccc;
          img {
            height: 240px;
            float: left;
          }
        }
      }
    }
    .el-aside {
      min-width: 180px;
      .step-box {
        padding: 20px;
        li {
          height: 500px;
          width: 100%;
          text-align: left;
          text-indent: 30px;
          line-height: 18px;
          position: relative;
          &:before {
            content: ' ';
            display: block;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            border: 3px solid #409EFF;
            position: absolute;
            left: 5px;
            top: 0;
          }
          span.date {
            color: #999;
            line-height: 18px;
          }
          span.describe {
            display: block;
            color: #333;
            line-height: 24px;
            margin-top: 10px;
          }
        }
      }
    }
    .el-main {
      min-width: 985px;
    }
  }

</style>
