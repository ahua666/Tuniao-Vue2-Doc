import Theme from 'vitepress/theme'
import './style/var.css'
import demoModel from '../components/demoModel.vue'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demoModel', demoModel)
  }
}