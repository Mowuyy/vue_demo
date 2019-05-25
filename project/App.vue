<template>
    <!-- 指定html显示内容 -->
    <div>
        单文件组件
    <!-- 3、嵌套多个单文件组件 - 在模版中渲染 -->
    <!-- <Child1></Child1>
    <Child2></Child2> -->

    <!-- 5、多个单文件组件路由使用 - 在模版中渲染 -->
    <router-view></router-view>
    </div>
</template>


<script>
// 1、嵌套多个单文件组件 - 导入子组件
// import Child1 from './components/Child1.vue'
// import Child2 from './components/Child2.vue'

// 2、嵌套多个单文件组件 - 添加子组件
// export default {
//     components: {
//         Child1,
//         Child2,
//     }
// }
</script>

<style>
/* 指定css内容 */
</style>
