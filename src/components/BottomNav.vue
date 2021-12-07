<template>
  <div class="bottom-nav">
    <router-link
      v-for="(item, index) in bttomData"
      active-class="active"
      :to="item.path"
      :key="index"
    >
      <i :class="item.icon"></i>
      <label>{{ item.title }}</label>
    </router-link>
  </div>
<!--  <h3>{{ parent.length ? parent[0] : "失败" }}</h3>-->
</template>

<script>
// eslint-disable-next-line
import bttomData from "@/utils/bottomData.js";
import { inject, reactive, toRefs } from "vue";
export default {
  name: "BottomNav",
  setup() {
    const parent = inject("parentData");
    console.log(parent);
    const state = reactive({
      bttomData: bttomData,
      parent: parent,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.bottom-nav {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  // background: #f23;
  bottom: 0;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      font-size: 16px;
    }
  }
  .iconfont {
    font-size: 32px;
  }
  .active {
    background: #f00;
  }
}
</style>
