<template>
  <div>
    <b-row class="mx-0 p-3 position-relative" align-h="between" align-v="center">
      <h3 style="width: fit-content" class="fade cursive-name">Yacine Safsaf</h3>
      <h5 class="fade" style="width: fit-content; z-index: 10">Contact</h5>
      <img class="fade form p-0 m-0" src="@/assets/Vector.svg" />
      <!-- <div class="fade filler"></div> -->
      <img class="p-0 m-0 programmer" src="@/assets/programmer.svg" />
      <!-- <div class="form first-form"></div>
    <div class="form second-form"></div>
    <div class="form third-form"></div> -->
      <b-row class="mx-0 z-3 position-absolute" style="padding-top: 3rem">
        <b-col class="px-0" cols="7"></b-col>
        <b-col class="px-0" cols="2">
          <div class="sphere-small" style="background-color: #3f3d56"></div>
        </b-col>
      </b-row>
      <b-row class="mx-0 z-3 position-absolute" style="padding-top: 12rem">
        <b-col class="px-0 d-flex justify-content-end" cols="11">
          <div class="sphere-small" style="background-color: #f2f2f2"></div>
        </b-col>
        <b-col class="px-0" cols="2"></b-col>
      </b-row>
    </b-row>
    <div style="padding-top: 15rem; padding-left: 6rem">
      <div class="slide-down" style="font-size: 3rem; line-height: 1.2em; font-weight: 600">
        Hello! <br />
        I am Yacine Safsaf <br />
        A Front-end Developer
      </div>
      <b-row class="slide-down-delayed mx-0 pt-3">
        <b-col cols="4" class="px-0">
          <div style="color: #a9a9a9">
            Visually appealing websites are my passion as a front-end developer. I am a collaborative team player who
            stays up-to-date with industry trends and is eager to learn. Ready to work on impactful projects and grow my
            front-end development career.
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.cursive-name {
  color: black;
  font-family: "Rancho", cursive;
  z-index: 1;
}
.sphere-small {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  animation: 4s 0.6s float ease-in-out infinite, expand 0.6s ease forwards;
}
.form {
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 0%;
}
.filler {
  height: 100vh;
  width: 200px;
  background-color: #ffc312;
  position: absolute;
  top: 0;
  right: 0%;
}
.programmer {
  height: 650px;
  width: auto;
  z-index: 10;
  position: absolute;
  right: 3rem;
  top: calc(50% + 100px);
  animation: 6s 1s float ease-in-out infinite, slideDown ease 1s, 1s fadeIn ease;
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

@keyframes expand {
  0% {
    transform: scale3d(0, 0, 0);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
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
</style>
