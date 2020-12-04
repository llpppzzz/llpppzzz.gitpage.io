import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { DefineComponent } from 'vue'

export default (app: DefineComponent) => {
  locale.use(lang)
  app.use(ElButton)
}
