<template>
  <div class="hello">
    <input type="text" v-model="name">
    <button @click="pub">发布</button>
    <son />
  </div>
</template>

<script>
  import Son from "./Son"
  import pubsub from "@/utils/pubsub.js"
  export default {
    name: 'HelloWorld',
    components: {
      Son,
    },
    data() {
      return {
        name: "",
      }
    },
    methods: {
      pub() {
        // 点击触发事件，并将参数this.name传递进去给h1。
        pubsub.trigger("item", this.name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>