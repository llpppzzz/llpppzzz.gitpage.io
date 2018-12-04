<template>
  <div class="side-bar">
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      :router="true"
      unique-opened>
      <template v-for="item in menu">
        <!--有1个以上子菜单的-->
        <el-submenu v-if="item.children.length > 1" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="(child, index) in item.children" :key="index" :index="child.path">
            <span slot="title">{{child.title}}</span>
          </el-menu-item>
        </el-submenu>
        <!--只有一个子菜单的-->
        <el-menu-item v-else-if="item.children.length === 1" :index="item.children[0].path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import routes from '../../router/routes'

  function buildMenuTree (routes, parentPath) {
    if (!routes || !routes.length) return []
    return routes.map((route) => {
      if (route.meta && route.meta.show === false) return false
      const path = parentPath ? parentPath + '/' : ''
      return {
        title: route.title || route.name,
        path: path + route.path,
        icon: (route.meta && route.meta.icon) || '',
        children: buildMenuTree(route.children, route.path)
      }
    }).filter(one => one)
  }

  export default {
    name: 'side-bar',
    data () {
      return {
        menu: []
      }
    },
    created () {
      this.menu = buildMenuTree(routes)
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      buildMenuTree (routes) {
      }
    }
  }
</script>

<style lang="less">
  .side-bar {
    width: 200px;
    text-align: left;
  }

</style>
