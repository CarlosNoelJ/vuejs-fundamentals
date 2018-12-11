<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            build-a-bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>

<script>
// import  HomePage  from './home/HomePage.vue';
import RobotBuilder from "./build/RobotBuilder.vue";

export default {
  name: 'app',
  components: {
    // HomePage,
    RobotBuilder,
  },
};
</script>

<style>
  body{
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
  }
</style>

<style scoped>
@import './App.css';
</style>
