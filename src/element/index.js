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
  Submenu
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
  }
}
