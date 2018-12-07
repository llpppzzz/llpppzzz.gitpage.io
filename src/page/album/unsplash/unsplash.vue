<template>
  <div class="unsplash">
    <div class="unsplash-content"
         v-loading="pageStatus"
         v-infinite-scroll="getPhotos"
         :infinite-scroll-disabled="pageStatus"
         infinite-scroll-distance="10">
      <div class="unsplash-col"  v-for="col in photosList">
        <div class="unsplash-item" v-for="photo in col"  @click="handleDownload(photo)">
          <div class="unsplash-item-cover" v-if="!isMobile">
            <div class="item-bottom">
              <img class="unsplash-item-cover-head" :src="photo.user.profile_image.small">
              <div class="shot-by">{{photo.user.name}}</div>
              <!--<el-button class="download" size="mini" icon="el-icon-download"></el-button>-->
            </div>
          </div>
          <img v-if="isMobile" :src="photo.urls.small" :alt="photo.description">
          <img v-else :src="photo.urls.regular" :alt="photo.description">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { debounce, throttle } from '../../../common/utils'
  import browser from '../../../common/browser'

  const isMobile = browser.isMobile

  export default {
    name: 'unsplash',
    data () {
      return {
        isMobile,
        oriPhotosList: [],
        photosList: [[], []],
        pageStatus: true,
        firstLoad: true,
        params: {
          page: 0,
          per_page: 20,
          order_by: 'latest'
        }
      }
    },
    created () {
      // 重新计算列数
      window.addEventListener('resize', () => {
        if (this.firstLoad) return
        const width = this.$el.offsetWidth
        if ((width > 900 && this.photosList.length === 2) || (width < 900 && this.photosList.length === 3)) {
          this.renderList()
        }
      })
      // this.getPhotos()
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      async getPhotos () {
        if (this.firstLoad) {
          this.photosList = this.$el.offsetWidth > 900 ? [[], [], []] : [[], []]
        }
        this.params.page++
        try {
          this.pageStatus = true
          let res = await this.$api.unsplash.viewPhotos(this.params)
          this.oriPhotosList = res
          this.renderList()
          this.firstLoad = false
          this.pageStatus = false
        } catch (e) {
          console.log(e)
        }
      },
      renderList () {
        this.oriPhotosList.forEach(one => {
          // 获取最短的一列下标
          const shortIndex = this.photosList.map((arr, index) => {
            const height = arr.reduce((per, cur) => cur.height / cur.width + per, 0)
            return { height, index }
          }).sort((a, b) => a.height - b.height)[0].index
          this.photosList[shortIndex].push(one)
        })
      },
      loadMore () {
        console.log('1')
      },
      debounceFn: debounce(function () {
        console.log(1)
      }, 3000, false),
      throttleFn: throttle(function () {
        console.log(2)
      }, 2000, {leading: false}),
      openPage () {
        this.$router.replace({
          name: 'tuanzi',
          query: {
            something: 'dsfjlsdjflsd'
          }
        })
      },
      handleDownload (photo) {
        window.location.href = photo.urls.full
      }
    }
  }
</script>

<style lang="less">
  .unsplash {
    .unsplash-content {
      min-height: 300px;
      display: flex;
      .unsplash-col {
        padding: 0 8px;
      }
      .unsplash-item {
        padding: 5px 0;
        position: relative;
        cursor:pointer;
        & > img {
          width: 100%;
        }
        &:hover {
          .unsplash-item-cover {
            background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.199) 3.5%,rgba(0,0,0,.195) 7%,rgba(0,0,0,.19) 10.35%,rgba(0,0,0,.182) 13.85%,rgba(0,0,0,.174) 17.35%,rgba(0,0,0,.165) 20.85%,rgba(0,0,0,.155) 24.35%,rgba(0,0,0,.145) 27.85%,rgba(0,0,0,.135) 31.35%,rgba(0,0,0,.126) 34.85%,rgba(0,0,0,.118) 38.35%,rgba(0,0,0,.11) 41.85%,rgba(0,0,0,.105) 45.35%,rgba(0,0,0,.1) 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,rgba(0,0,0,.35));
            opacity: .9;
          }
        }
        .unsplash-item-cover {
          position: absolute;
          background-image: none;
          opacity: 0;
          transition: all .1s linear;
          top: 5px;
          left: 0;
          bottom: 8px;
          right: 0;
          .item-bottom {
            position: absolute;
            bottom: 12px;
            left: 12px;
            right: 12px;
            height: 32px;
          }
          &-head {
            opacity: 1;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            float: left;
          }
          .shot-by {
            line-height: 32px;
            margin-left: 10px;
            color: #eee;
            float: left;
          }
          .download {
            float: right;
          }
        }
      }
    }
  }
</style>

