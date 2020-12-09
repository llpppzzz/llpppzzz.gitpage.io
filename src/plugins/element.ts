import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { createApp } from 'vue'

export default (app: ReturnType<typeof createApp>) => {
  locale.use(lang)
  app.use(ElButton as any)
}
