import Theme from 'vitepress/theme'
import './style/var.css'
import demoModel from '../components/demoModel.vue'
import QQGroup from '../components/qqGroup.vue'
import templateDownload from '../components/templateDownload.vue'
import Twikoo from '../components/Twikoo.vue'
import ElementPlus from 'element-plus'
import works from '../components/works.vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demoModel', demoModel)
    app.component('QQGroup',QQGroup)
    app.component('templateDownload',templateDownload)
    app.component('Twikoo',Twikoo)
    app.component('Works',works)
    app.use(ElementPlus)
  }
}
