// 引入vue和App组件
import Vue from 'vue'
import App from './App.vue'

// 3、多个单文件组件路由使用 - 导入定义好的路由
import router from './router/router.js'

// 引入ElementUI
import ElementUI from 'element-ui'
// 引入css
import 'element-ui/lib/theme-chalk/index.css'
// 使用ElemnetUI
Vue.use(ElementUI)

new Vue({
    el:'#app',
    // 4、多个单文件组件路由使用 - 使用路由
    router,
    // 渲染App组件中的内容，返回给index.html文件使用
    render:function(creater){
        return creater(App)
    }
})