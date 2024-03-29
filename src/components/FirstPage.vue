<template>
  <div style="height: 100vh">
    <div style="z-index: 2" class="position-absolute w-100 p-3 d-flex justify-content-between">
      <h3 :style="`color: ${isDarkMode ? '#fff' : 'black'}`" class="fade cursive-name">Yacine Safsaf</h3>
      <div class="d-flex">
        <div class="color-mode-btn" style="margin-right: 8px" @click="changeColorMode">
          <b-icon-sun
            v-if="isDarkMode"
            :style="`color: ${isDarkMode ? '#fff' : 'black'}`"
            font-scale="1.2"
          ></b-icon-sun>
          <b-icon-moon v-else :style="`color: ${isDarkMode ? '#fff' : 'black'}`" font-scale="1.2"></b-icon-moon>
        </div>
        <div id="language-switch" class="d-flex">
          <img
            :class="`${isFrench ? '' : 'selectedLang'} mx-1 flag`"
            @click="onUkClick"
            :src="require(`@/assets/en-flag.svg`)"
            alt="en flag"
          />
          <img
            :class="`${isFrench ? 'selectedLang' : ''} mx-1 flag`"
            @click="onFrClick"
            :src="require(`@/assets/fr-flag.svg`)"
            alt="fr flag"
          />
        </div>
      </div>
    </div>
    <b-row class="mx-0 pt-3 justify-content-center justify-content-lg-start">
      <b-col class="px-0 position-relative" cols="11" md="10" lg="8" xl="6">
        <div
          :style="`padding-top: ${breakpoints.up.lg ? '15rem' : '20rem'} ; padding-left: ${
            breakpoints.up.lg ? '6rem' : 'unset'
          }; position: absolute; z-index: 2;`"
        >
          <div
            class="slide-down-eased"
            :style="`font-size: ${breakpoints.up.lg ? '3rem' : '2rem'} ; line-height: 1.2em; font-weight: 600; color: ${
              isDarkMode ? '#fff' : 'black'
            }; transition: ease-in-out 0.5s`"
          >
            {{ isFrench ? "Bonjour" : "Hello" }}! <br />
            {{ isFrench ? "Je suis" : "I am" }} Yacine Safsaf <br />
            {{ isFrench ? "Un Développeur Front-end" : "A Front-end Developer" }}
          </div>
          <b-row
            class="slide-down-eased mx-0 pt-3"
            style="opacity: 0; animation-delay: 0.5s; animation-fill-mode: forwards"
          >
            <b-col cols="11" class="px-0">
              <div :style="`color: ${isDarkMode ? '#B0B0B0' : '#a9a9a9'};`">
                {{
                  isFrench
                    ? `Les sites Web attrayants sont ma passion en tant que développeur Front-end. 
                        Je suis un joueur d'équipe collaboratif qui reste à jour avec les nouvelles technologiques. 
                        J'ai hâte d'apprendre de nouvelles choses! Je suis prêt à travailler sur des projets impactant et 
                        développer ma carrière de développeur Web`
                    : `Visually appealing websites are my passion as a Front-end developer. 
                        I am a collaborative team player who stays up-to-date with the tech industry and I am eager to learn new things. 
                        I am Ready to work on impactful projects and grow my Web development career`
                }}
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col id="firstWindowShape" style="height: calc(100vh - 90px); position: relative" lg="12"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    breakpoints: Object,
    isFrench: Boolean,
    isDarkMode: Boolean,
  },
  methods: {
    generateShapeCoordinates() {
      let ColHeight = document.getElementById("firstWindowShape").clientHeight;
      let ColWidth = document.getElementById("firstWindowShape").clientWidth;
      return {
        topPosition: Math.floor(Math.random() * ColHeight),
        leftPosition: Math.floor(Math.random() * ColWidth),
      };
    },
    generateShapeStyle(color, size, shape, borderOnly) {
      switch (shape) {
        case "sphere":
          if (borderOnly) {
            return `
              border-radius: 100%;
              border: ${this.breakpoints.down.md ? 1 : 3}px solid ${color};
              height: ${size}px;
              width: ${size}px;`;
          } else {
            return `border-radius: 100%; background-color: ${color}; height: ${size}px; width: ${size}px;`;
          }

        case "square":
          if (borderOnly) {
            return `border: ${this.breakpoints.down.md ? 1 : 3}px solid ${color}; height: ${size}px; width: ${size}px;`;
          } else {
            return `background-color: ${color};height: ${size}px; width: ${size}px;`;
          }

        case "triangle":
          return `
              border-style: solid;
              border-color: transparent;
              border-width: 0px ${size * 0.6}px ${size}px ${size * 0.6}px;
              border-bottom-color: ${color};`;
      }
    },
    generateShape() {
      const colors = ["#ffc312", "#001f3f", "#FFB6B6"];
      const shapeSizes = ["small", "medium", "small-medium", "big"];
      const shapes = ["square", "triangle", "sphere"];
      let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      let borderOnly = Math.floor(Math.random() * 2);
      let randomShapeSize = shapeSizes[Math.floor(Math.random() * shapeSizes.length)];
      const { topPosition, leftPosition } = this.generateShapeCoordinates();
      const col = document.getElementById("firstWindowShape");
      let shape = document.createElement("div");
      let wrapper = document.createElement("div");
      col.append(wrapper);
      wrapper.append(shape);
      wrapper.classList.add("expandAnimation");
      shape.classList.add(`shape-${randomShapeSize}${this.breakpoints.down.md ? "-mobile" : ""}`, "rotate");
      let shapeSize = shape.clientHeight;
      const randomShapeStyle = this.generateShapeStyle(randomColor, shapeSize, randomShape, borderOnly);
      shape.style.cssText = `${randomShapeStyle};`;
      wrapper.style.cssText = `
        position: absolute;
        z-index: 1;
        top: ${topPosition - shapeSize / 2}px;
        left: ${leftPosition - shapeSize / 2}px;`;
      setTimeout(() => {
        wrapper.classList.remove("expandAnimation");
        wrapper.classList.add("shrinkAnimation");
      }, 8000);
      setTimeout(() => {
        wrapper.remove();
      }, 11000);
    },
    generateShapeBatch() {
      for (const i of [1, 2, 3, 4]) {
        setTimeout(() => {
          this.generateShape();
        }, i * 700);
      }
    },
    generateMultipleShapes() {
      this.generateShapeBatch();
      setInterval(() => {
        this.generateShapeBatch();
      }, 6000);
    },
    onUkClick() {
      this.$emit("onUkClick", false);
    },
    onFrClick() {
      this.$emit("onFrClick", true);
    },
    changeColorMode() {
      this.$emit("onChangeColorMode");
    },
  },
  mounted() {
    this.generateMultipleShapes();
  },
};
</script>

<style scoped>
.cursive-name {
  font-family: "Rancho", cursive;
  width: fit-content;
  z-index: 1;
}

.color-mode-btn {
  cursor: pointer;
  background-position: center;
  transition: background ease-in-out 1.2s;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}

.color-mode-btn:active {
  background-color: #8f8f8f;
  background-size: 100%;
  transition: background ease-in-out 0s;
}

.flag {
  height: auto;
  width: 24px;
  cursor: pointer;
  opacity: 0.6;
}
.selectedLang {
  opacity: 1;
}
</style>
