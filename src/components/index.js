import Vue from 'vue'

// 找到组件文件夹下以.vue命名的文件
const requireComponent = require.context('./', true, /.vue/)

export default {
  init () {
    requireComponent.keys().forEach(filePath => {
      const componentConfig = requireComponent(filePath)
      const componentName = componentConfig.default.name
      if (componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      } else {
        throw new Error('component unnamed!')
      }
    })
  }
}
