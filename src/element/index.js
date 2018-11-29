import Vue from 'vue'
import './theme/index.scss'

import {
  Autocomplete,
  Aside,
  Container,
  Main,
  Header,
  Input,
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Table,
  TableColumn,
  Pagination,
  Loading,
  Message,
  MessageBox
} from 'element-ui'

export default {
  init () {
    Vue.use(Autocomplete)
    Vue.use(Aside)
    Vue.use(Container)
    Vue.use(Main)
    Vue.use(Header)
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Submenu)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Pagination)
    Vue.use(Loading.directive)
    Vue.prototype.$message = Message
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
  }
}
