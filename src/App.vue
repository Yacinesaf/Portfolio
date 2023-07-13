<template>
  <div class="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  background-color: #F9F9F9;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rancho&display=swap');
</style>
