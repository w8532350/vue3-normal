<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const route = ref(useRoute());
    const router = ref(useRouter());
    console.log(route, router);
    return {
      route,
      router,
    };
  },
};
</script>
