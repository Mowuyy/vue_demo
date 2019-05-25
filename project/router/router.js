// 路由的定义

import Vue from 'vue'
// 1、多个单文件组件路由使用 - 导入路由插件
import Router from 'vue-router'
import Child1 from '../components/Child1.vue'
import Child2 from '../components/Child2.vue'
import Element1 from '../components/Element1.vue'
import Upload from '../components/Upload.vue'
import Icon from '../components/Icon.vue'



// 2、多个单文件组件路由使用 - 在vue中使用插件
Vue.use(Router)
export default new Router({
    // 定义匹配规则
   routes:[
       {
           path:'/',  // 匹配根路径／，加载Child1中的内容
           component:Child1
       },
       {
           path:'/child2',
           component:Child2
       },
       {
           path: '/element',
           component: Element1
       },
       {
            path: '/upload',
            component: Upload,
       },
       {
           path: '/icon',
           component: Icon,
       }
   ]
})