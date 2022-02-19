<template>
  <div class="fourth">
    <h1>4</h1>
    <router-link to="/fifth-question"><HelloWorld  msg="Next"/></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "fourth",
  components: {
    HelloWorld,
  },
};

</script>