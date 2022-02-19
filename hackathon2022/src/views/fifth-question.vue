<template>
  <div class="fifth">
    <h1>5</h1>
    <router-link to="/six-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "fifth",
  components: {
    HelloWorld,
  },
};

</script>