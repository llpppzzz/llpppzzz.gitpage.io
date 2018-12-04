import Vue from 'vue'
import './theme/index.scss'

import {
  Autocomplete,
  Input,
  Button,
  Menu,
  MenuItem,
  Submenu,
  Table,
  TableColumn,
  Pagination,
  Popover,
  Loading,
  Message,
  MessageBox
} from 'element-ui'

export default {
  init () {
    Vue.use(Autocomplete)
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Submenu)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Pagination)
    Vue.use(Popover)
    Vue.use(Loading.directive)
    Vue.prototype.$message = Message
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
  }
}
