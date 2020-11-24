import './theme/index.scss'

import {
  ElAutocomplete,
  ElInput,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElPopover,
  ElLoading,
  ElInfiniteScroll,
  ElMessage,
  ElMessageBox
} from 'element-plus'

const components = [
  ElAutocomplete,
  ElInput,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElPopover,
  ElLoading
]

const plugins = [
  ElInfiniteScroll,
  ElMessage,
  ElMessageBox
]

export default {
  init (app) {
    components.forEach(component => {
      app.use(component)
    })

    plugins.forEach(plugin => {
      app.use(plugin)
    })
  }
}
