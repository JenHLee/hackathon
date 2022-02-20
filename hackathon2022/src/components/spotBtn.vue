<template>
  <div class="spotBtn">
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "spotBtn",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  button {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    color: #191970;
    background-color: #FFE4B5;
    border: 0;
    border-radius: 30px;
    text-align: center;
    width: 15rem;
    height: 3rem;
    margin: 0.5rem;
  }

  button:hover {
    background-color: #DAA520;
  }
</style>
