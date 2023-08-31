import Theme from 'vitepress/theme'
import './style/var.css'
import demoModel from '../components/demoModel.vue'
import QQGroup from '../components/qqGroup.vue'
import templateDownload from '../components/templateDownload.vue'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demoModel', demoModel)
    app.component('QQGroup',QQGroup)
    app.component('templateDownload',templateDownload)
  }
}