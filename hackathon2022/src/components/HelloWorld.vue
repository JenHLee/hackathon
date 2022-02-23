<template>
  <div class="hello">
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 3rem;
  color: inherit;
  color: #020122;
  background-color: #f2f3ae;
  border: 0;
  border-radius: 100px;
  text-align: center;
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
  padding-left: 0.6rem;
}
button:hover {
  background-color: #7ed0df;
  color: #020122;
}
</style>
