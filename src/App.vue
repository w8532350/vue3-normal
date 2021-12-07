<template>
  <div id="nav">
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import { reactive, toRefs, provide } from "vue";
export default {
  name: "App",
  components: {
    BottomNav,
  },
  setup() {
    const state = reactive({
      age: 18,
      arr: [],
    });
    provide("parentData", state.arr);
    setTimeout(() => {
      state.arr.push("tang");
    }, 2000);
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
