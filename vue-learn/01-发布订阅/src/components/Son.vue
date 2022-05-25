<template>
    <div>
        <h1>{{h1}}</h1>
    </div>
</template>


<script>
    import pubsub from "@/utils/pubsub.js"
    export default {
        data() {
            return {
                h1: "",
            }
        },
        mounted() {
            let that = this;
            // 注册事件，接受一个参数(来自于任何地方)
            pubsub.listen("item", function (data) {
                that.h1 = data;
            })
        }
    }
</script>