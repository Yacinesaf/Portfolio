<template>
  <div style="height: 100vh">
    <b-row class="mx-0 p-3 position-relative" align-h="between" align-v="center">
      <h3 style="width: fit-content" class="fade cursive-name">Yacine Safsaf</h3>
      <h5 class="fade" style="width: fit-content; z-index: 10">Contact</h5>
      <div id="strokes-animation">
        <div class="fade form p-0 m-0">
          <svg width="1150" height="1080" xmlns="http://www.w3.org/2000/svg">
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
        <div class="fade form2 p-0 m-0">
          <svg width="1150" height="1080" xmlns="http://www.w3.org/2000/svg">
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
    </b-row>
    <b-row class="mx-0 pt-3" style="z-index: 100">
      <b-col class="px-0" cols="6">
        <div style="padding-top: 15rem; padding-left: 6rem">
          <div class="slide-down" style="font-size: 3rem; line-height: 1.2em; font-weight: 600">
            Hello! <br />
            I am Yacine Safsaf <br />
            A Front-end Developer
          </div>
          <b-row class="slide-down-delayed mx-0 pt-3">
            <b-col cols="10" class="px-0">
              <div style="color: #a9a9a9">
                Visually appealing websites are my passion as a Front-end developer. I am a collaborative team player who
                stays up-to-date with industry trends and is eager to learn. Ready to work on impactful projects and
                grow my front-end development career.
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col id="firstHalfWindowSpheres" style="height: calc(100vh - 90px); position: relative" cols="6"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  methods: {
    randomExpandingSpheres() {
      let spheres = Array.from(document.querySelectorAll(".sphere"));
      if (spheres)
        spheres.forEach((sphere) => {
          let scaleValue = (Math.random() * 2).toFixed(2);
          sphere.style.transform = `scale3d(${scaleValue}, ${scaleValue}, ${scaleValue})`;
        });
    },
    generateSphereCoordinates() {
      let ColHeight = document.getElementById("firstHalfWindowSpheres").clientHeight;
      let ColWidth = document.getElementById("firstHalfWindowSpheres").clientWidth;
      return {
        topPosition: Math.floor(Math.random() * ColHeight),
        leftPosition: Math.floor(Math.random() * ColWidth),
      };
    },
    generateSphere() {
      const colors = ["#ffc312", "#3f3d56", "#A9A9A9"];
      const sphereSizes = ["small", "medium", "small-medium", "big"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      let randomSphereSize = sphereSizes[Math.floor(Math.random() * sphereSizes.length)];
      const { topPosition, leftPosition } = this.generateSphereCoordinates();
      const col = document.getElementById("firstHalfWindowSpheres");
      let sphere = document.createElement("div");
      col.append(sphere);
      sphere.classList.add("sphere", `sphere-${randomSphereSize}`, "expandAnimation");
      let sphereHeight = sphere.clientHeight;
      let sphereWidth = sphere.clientWidth;
      sphere.style.cssText = `
        position: absolute; 
        top: ${topPosition - sphereHeight / 2}px; 
        left: ${leftPosition - sphereWidth / 2}px; 
        background-color: ${randomColor}`;
      setTimeout(() => {
        sphere.classList.remove("expandAnimation");
        sphere.classList.add("shrinkAnimation");
      }, 8000);
      setTimeout(() => {
        sphere.remove();
      }, 11000);
    },
    generateSphereBatch() {
      for (const i of [1, 2, 3]) {
        setTimeout(() => {
          this.generateSphere();
        }, i * 500);
      }
    },
    generateMultipleSpheres() {
      this.generateSphereBatch();
      setInterval(() => {
        this.generateSphereBatch();
      }, 6000);
    },
  },
  mounted() {
    this.generateMultipleSpheres();
    window.addEventListener("scroll", function () {
      console.log(this.window);
    });
  },
};
</script>

<style scoped>
.cursive-name {
  color: black;
  font-family: "Rancho", cursive;
  z-index: 1;
}

.form {
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 0%;
}
.form2 {
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 0%;
  transform: rotate3d(1, 1, 1, 180deg);
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
  animation: fillAnimation 5s ease-in-out infinite forwards;
}

@keyframes fillAnimation {
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
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
.programmer {
  height: 650px;
  width: 100%;
  z-index: 10;
  top: calc(50% + 100px);
  animation: 9s 1s float ease-in-out infinite, slideDown ease 1s, 1s fadeIn ease;
}
</style>
