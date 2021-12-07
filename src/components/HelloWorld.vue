<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
    <h1>computed: {{ reverse }}</h1>
    <button @click="change">+</button>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watch } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props, context) {
    // reactive data
    const state = reactive({
      name: 'kkkwang',
      age: 18,
    });

    // methods object
    const methods = {
      change() {
        state.name += "kkk";
        state.age += 1;
        if (state.age === 22) stop();
      },
    };

    // computed object
    const computeds = {
      reverse: computed(() => state.name.split("").reverse().join("")),
    };

    // watch object
    const stop = watch(
      () => state.age,
      (cur, old) => {
        if (cur % 2) {
          alert(cur, old);
        }
      }
    );
    console.log(props, context);
    return {
      ...toRefs(state),
      ...methods,
      ...computeds,
    };
  },
};
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
