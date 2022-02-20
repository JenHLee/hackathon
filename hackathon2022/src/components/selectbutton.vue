<template>
  <div class="selectbutton">
    <button>{{ firstChoice.name }}</button>
  </div>
</template>

<script>
export default {
  name: "selectbutton",
  props: {
    firstChoice: String,
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
    width: 10rem;
    height: 3rem;
    margin: 0.5rem;
  }

  button:hover {
    background-color: #DAA520;
  }
</style>
