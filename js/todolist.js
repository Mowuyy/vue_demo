var vm = new Vue({
    // 1、关联vue对象
    el: ".list_con",
    // 2、显示数据
    data: {
        content: "",
        dataList: ["学习Python", "学习Java", "学习JavaScript"],
        item: ""
    },

    // 3、方法
    methods: {
        // 3.1、监听增加
        fnAdd:function(){
            // 判断内容是否为空
            if (this.content == ""){
                alert("输入内容不能为空!")
                return
            }
            // 增加数据
            this.dataList.push(this.content)
            // 清空输入框
            this.content = ""
        },

        // 3.2、监听删除
        fnDel: function(index){
            // 
            this.dataList.splice(index, 1)
        },

        // 3.3、监听上升
        fnUp: function(index){
            if (index == 0){
                alert("已经到头了!")
                return
            }
            // 获取当前数据
            current_data = this.dataList[index]
            // 删除当前选中这一行数据
            this.dataList.splice(index, 1)
            // 当前数据 插入上一个下标位置
            this.dataList.splice(index-1, 0, current_data)
        },

        // 3.4、监听下降
        fnDown: function(index){
            if (index == this.dataList.length-1){
                alert("已经到底了!")
                return
            }
            // 获取当前数据
            current_data = this.dataList[index]
            // 删除当前选中这一行数据
            this.dataList.splice(index, 1)
            // 当前数据 插入上一个下标位置
            this.dataList.splice(index+1, 0, current_data)
        },

        

    },
})