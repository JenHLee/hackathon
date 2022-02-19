<template>
  <div id="nav"></div>
  <router-view />
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background: url("../src/img/bg-1.gif");
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: repeat-y;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
