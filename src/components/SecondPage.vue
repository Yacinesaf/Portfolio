<template>
  <b-row align-h="center" align-v="center">
    <div class="position-relative d-flex justify-content-center pb-4">
      <h1
        id="h1-projects-title"
        class="projects-title position-absolute"
        :style="`color: ${isDarkMode ? '#fff' : 'black'}; font-weight: 600`"
      >
        {{ isFrench ? "Projets" : "Projects" }}
      </h1>
    </div>
    <b-col cols="11" md="10" lg="8" xl="5" class="pt-5">
      <b-row id="projects">
        <b-col cols="12" md="4" v-for="(project, i) in projects" :key="i">
          <project-card :project="project" :breakpoints="breakpoints" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: { ProjectCard },
  props: {
    breakpoints: Object,
    isFrench: Boolean,
    isDarkMode: Boolean,
  },
  computed: {
    projects() {
      const colors = ["yellowRect.png", "blueRect.png", "pinkRect.png"];
      let randomColor = colors[Math.floor(Math.random() * 3)];
      return [
        {
          icon: "wallet.svg",
          background: randomColor,
          link: "https://sareta-f8acd.web.app/",
          description: this.isFrench
            ? "Application de gestion de budget qui facilite le calcul de votre salaire nécessaire et le suivi de vos dépenses"
            : "Small Budget management app that makes calculating your needed salary and tracking your expenses easier",
          delay: 0.3,
          title: "Sareta",
          icons: ["vue-icon.svg", "vuetify-icon.svg", "css3-icon.svg", "html-icon.svg"],
        },
        {
          icon: "book.svg",
          background: randomColor,
          link: "https://sliceoflife-5bdf4.firebaseapp.com/",
          description: this.isFrench
            ? "Une application web qui permet de créer des pages et d'écrire votre quotidien comme un journal intime"
            : "A web app that lets create pages and write your daily life just like a diary",
          delay: 0.6,
          title: "Slice Of Life",
          icons: ["react-icon.svg", "material-ui-icon.svg", "css3-icon.svg", "html-icon.svg"],
        },
        {
          icon: "popcorn.svg",
          background: randomColor,
          link: "https://sukinaanime-5f246.web.app/",
          description: this.isFrench
            ? "Bibliothèque d'anime où vous pouvez parcourir différentes émissions et voir leurs détails"
            : "Anime library where you can browse different shows and see their details",
          delay: 0.9,
          title: "Sukina",
          icons: ["react-icon.svg", "bootstrap-icon.svg", "css3-icon.svg", "html-icon.svg"],
        },
      ];
    },
  },
  methods: {
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    handleScroll(targetElement) {
      if (this.isElementInViewport(targetElement)) {
        document.getElementById("h1-projects-title").classList.add("slide-down");
        Array.from(document.getElementsByClassName("project-card")).forEach((el) => {
          el.classList.add("slide-down");
        });
      }
    },
  },
  mounted() {
    let targetElement = document.getElementById("projects");
    window.addEventListener("scroll", () => {
      this.handleScroll(targetElement);
    });

    this.handleScroll(targetElement);
  },
};
</script>

<style scoped>
.projects-circle {
  height: 500px;
  width: 500px;
  background: linear-gradient(-180deg, #3f3d56, #3f3d56 50%, #ffc312 50%);
  border-radius: 100%;
}
.project-border {
  width: 584px;
  height: 328px;
  border: 10px solid #3f3d56;
  position: absolute;
  border-radius: 15px;
}
.projects-title {
  opacity: 0;
}
</style>
