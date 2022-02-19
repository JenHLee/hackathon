<template>
  <div class="thrid">
    <h1>3</h1>
    <router-link to="/fourth-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "third",
  components: {
    HelloWorld,
  },
};

</script>