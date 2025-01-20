import Theme from 'vitepress/theme'
import './style/var.css'
import DemoModel from '../components/demoModel.vue'
import QQGroup from '../components/qqGroup.vue'
import templateDownload from '../components/templateDownload.vue'
import Twikoo from '../components/Twikoo.vue'
import ElementPlus from 'element-plus'
import Works from '../components/works.vue'
import Partners from '../components/partners.vue'
import Colors from '../components/Colors.vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './rainbow.css'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demoModel', DemoModel)
    app.component('QQGroup',QQGroup)
    app.component('templateDownload',templateDownload)
    app.component('Twikoo',Twikoo)
    app.component('Works',Works)
    app.component('Partners',Partners)
    app.component('Colors',Colors)
    app.use(ElementPlus)
  }
}
