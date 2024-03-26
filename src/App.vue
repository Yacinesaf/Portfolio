<template>
  <div class="app position-relative">
    <div id="strokes-animation">
      <div class="fade form p-0 m-0">
        <svg width="1150" height="160vh" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              class="animated-path path-1"
              d="M1504.18 -270.715C1602.98 -74.7722 1395.69 229.04 1041.17 407.869C686.657 586.697 319.172 572.823 220.371 376.88C121.57 180.937 328.866 -122.875 683.38 -301.704C1037.89 -480.532 1405.38 -466.658 1504.18 -270.715"
            />
            <path
              class="animated-path path-2"
              d="M1901 660.349C1901 883.941 1579.13 1065.2 1182.08 1065.2C785.032 1065.2 463.161 883.941 463.161 660.349C463.161 436.757 785.032 255.499 1182.08 255.499"
            />
            <path
              class="animated-path path-3"
              d="M1308.44 -547.463C1407.24 -351.52 1199.95 -47.7078 845.432 131.121C490.918 309.949 123.433 296.076 24.6318 100.132C-74.1694 -95.8106 133.127 -399.623 487.641 -578.452C842.155 -757.28 1209.64 -743.406 1308.44 -547.463"
            />
            <path
              class="animated-path path-4"
              d="M1182.08 1225.33C1182.08 1497.97 941.353 1719 644.401 1719C347.449 1719 106.722 1497.97 106.722 1225.33C106.722 952.676 347.449 731.651 644.401 731.651C941.353 731.651 1182.08 952.676 1182.08 1225.33"
            />
          </g>
        </svg>
      </div>
    </div>
    <FirstPage
      :isFrench="isFrench"
      @onUkClick="selectLanguage"
      @onFrClick="selectLanguage"
      :breakpoints="breakpoints.screen"
    />
    <SecondPage :isFrench="isFrench" :breakpoints="breakpoints.screen" />
    <PageFooter :isFrench="isFrench" />
    <div class="pt-4">
      <div class="position-absolute" style="font-size: 10px; bottom: 4px; left: calc(50% - 126px)">
        Copyright © {{ date }} Yacine Safsaf. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";
import PageFooter from "./components/PageFooter.vue";
import { onResize, breakpoints } from "./utils/breakpoints";

export default {
  name: "App",
  components: {
    FirstPage,
    SecondPage,
    PageFooter,
  },
  data() {
    return {
      isFrench: false,
    };
  },
  computed: {
    date() {
      return new Date().getFullYear();
    },
    breakpoints() {
      return breakpoints;
    },
  },
  methods: {
    selectLanguage(val) {
      this.isFrench = val;
    },
  },
  created() {
    onResize();
  },
};
</script>

<style>
/* Main page styling */

.app {
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

/* element styling */

.shape-small {
  width: 40px;
  height: 40px;
}
.shape-small-medium {
  height: 60px;
  width: 60px;
}
.shape-medium {
  height: 100px;
  width: 100px;
}
.shape-big {
  height: 140px;
  width: 140px;
}

.shape-small-mobile {
  width: 20px;
  height: 20px;
}
.shape-small-medium-mobile {
  height: 40px;
  width: 40px;
}
.shape-medium-mobile {
  height: 70px;
  width: 70px;
}
.shape-big-mobile {
  height: 90px;
  width: 90px;
}

/* Stroke animation and styling */

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
.animated-path {
  fill: none;
  stroke: #ffc312;
  stroke-width: 5;
  stroke-dasharray: 1000;
  stroke-dashoffset: 2000;
  animation: fillAnimation 7s ease-in-out infinite forwards;
}
.path-1 {
  animation-delay: 0s;
}
.path-2 {
  animation-delay: 0.5s;
}
.path-3 {
  animation-delay: 1s;
}
.path-4 {
  animation-delay: 1.5s;
}
@keyframes fillAnimation {
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* Animations */

.rotate {
  animation: rotate 32s linear infinite;
}
.slide-down-eased {
  opacity: 1;
  animation: slideDown ease 0.7s, fadeIn ease 1s forwards;
}
.slide-down {
  opacity: 0;
  animation: slideDown ease 0.7s, fadeIn ease 1s forwards;
}
.slide-up {
}
.fade {
  animation: fadeIn linear 1s;
  animation-fill-mode: forwards;
}
.expandAnimation {
  /* animation: expand 0.6s ease forwards; */
  animation: expand 3s ease-in-out forwards;
}
.shrinkAnimation {
  animation: shrink ease-in-out 3s forwards;
}

/* Keyframes for animations */

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
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
@keyframes slideLeft {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
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
