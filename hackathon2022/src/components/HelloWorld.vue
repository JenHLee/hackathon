<template>
  <div class="hello">
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  button {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    color: white;
    background-color: #020122;
    border: 0;
    border-radius: 30px;
    text-align: center;
    padding: 3vh 10vh;
  }

  button:hover {
    background-color: #f2f3ae;
    color: #020122;
  }
</style>
