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
    color: inherit;
    font-weight: bold;
    color: #020122;
    background-color:#f2f3ae;
    border: 0;
    border-radius: 30px;
    text-align: center;
    padding: 3vh 10vh;
    margin-top: 2rem;
  }
  button:hover {
    background-color:  #7ed0df;
    color: #020122;
  }
</style>
