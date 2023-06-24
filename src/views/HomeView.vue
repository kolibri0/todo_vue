<template>
  <div class="container">
    <div class="content">
      <div class="description">
        <h1 class="title">
          Hi, this project was created to explore vue2
        </h1>
        <div class="text">
          <div>This project implements the ability to create, edit and delete tasks.</div>
          <div>All tasks are stored in the localStorage.</div>
        </div>
      </div>
      <div class="technologies">
        <div class="technologies-used">In this project were used:</div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vue (version 2)</li>
          <li>Vuex</li>
          <li>Vue-router</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.title {
  font-size: 25px;
  margin-bottom: 10px;
}

.text {
  font-size: 20px;
}

.technologies {
  /* border: 1px solid red; */
  width: fit-content;
  padding: 3px;
  margin: 10px auto 0;
  text-align: left;
  font-size: 20px;
}

.technologies-used {
  text-align: left;
}

ul {
  margin: 0;
  margin-top: 3px;
  text-align: left;
  padding-left: 15px;
}
</style>