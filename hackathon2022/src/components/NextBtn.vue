<template>
  <div class="next">
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "next",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 2rem;
  color: inherit;
  color: #020122;
  background-color: #f2f3ae;
  border: 0;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  width: 10rem;
  height: 4rem;
  margin-top: 2rem;
}
button:hover {
  background-color: #7ed0df;
  color: #020122;
}
</style>
