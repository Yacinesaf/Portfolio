<template>
  <div class="app">
    <FirstPage />
    <SecondPage />
  </div>
</template>

<script>
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";

export default {
  name: "App",
  components: {
    FirstPage,
    SecondPage,
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}
.sphere-small {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  transition: 3ms ease-in-out;
  /* animation: expand 0.6s ease; */
}
.sphere-small-medium {
  height: 80px;
  width: 80px;
  border-radius: 100%;
  transition: 3s ease-in-out;
  /* animation: expand 0.6s ease; */
}
.sphere-medium {
  height: 120px;
  width: 120px;
  border-radius: 100%;
  /* transition: 0.6s ease-in-out; */
  /* animation: expand 0.6s ease forwards; */
  /* animation: expand 3s ease forwards; */
  transition: 3s ease-in-out;
}
.sphere-big {
  height: 160px;
  width: 160px;
  border-radius: 100%;
  transition: 3s ease-in-out;
}
.slide-down {
  opacity: 1;
  animation: slideDown ease 1s, fadeIn ease 1s;
}
.fade {
  animation: fadeIn ease 1s;
  animation-fill-mode: forwards;
}
.slide-down-delayed {
  opacity: 0;
  animation: slideDown ease 1s, fadeIn ease 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

.expandAnimation {
  /* animation: expand 0.6s ease forwards; */
  animation: expand 3s ease forwards;
}

.shrinkAnimation {
  animation: shrink ease-in-out 3s;
  animation-fill-mode: forwards;
}

@keyframes expand {
  0% {
    transform: scale3d(0, 0, 0);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes shrink {
  0% {
    transform: scale3d(1, 1, 1);
  }
  100% {
    transform: scale3d(0, 0, 0);
  }
}


@keyframes slideDown {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rancho&display=swap");
</style>
