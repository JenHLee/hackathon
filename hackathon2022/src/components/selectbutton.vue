<template>
  <div class="selectbutton" v-on:click="() => $emit('change', emotion)">
    <button class="no" v-if="!emotion.answer">{{ emotion.type }}</button>
    <button class="yes" v-else>{{ emotion.type }}</button>
  </div>
</template>

<script>
export default {
  name: "selectbutton",
  props: {
    emotion: String,
  },
};
</script>

<style scoped>
.no {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  color: #191970;
  background-color: #ffe4b5;
  border: 0;
  border-radius: 30px;
  text-align: center;
  width: 10rem;
  height: 3rem;
  margin: 0.5rem;
}

.yes {
  background-color: #daa520;
  border: 0;
  border-radius: 30px;
  text-align: center;
  width: 10rem;
  height: 3rem;
  margin: 0.5rem;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  color: #191970;
}
</style>
