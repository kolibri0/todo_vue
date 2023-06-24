<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav-item" to="/">Home</router-link> |
      <router-link class="nav-item" to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  box-shadow: 3px 1px 5px 0 #e43a23e6;
  border-radius: 5px;
  transition: all 0.5s;
  width: 300px;
  margin: 25px auto 20px;
  background-color: #ffffff;
}

.nav:hover {
  box-shadow: 4px 1px 5px 1px #b6392cc5, 6px 2px 10px 0 #824b45e6;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #262323d0;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #d14330;
  text-decoration: underline;
}

body {
  background-color: #fed2d2;
}
</style>
