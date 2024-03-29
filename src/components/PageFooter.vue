<template>
  <b-row class="justify-content-center">
    <b-col cols="12" class="position-relative py-4">
      <div style="display: flex; justify-content: center; width: 100%" class="position-absolute">
        <a target="_blank" href="https://github.com/Yacinesaf">
          <b-icon-github
            :style="`color: ${isDarkMode ? '#fff' : '#001f3f'}; margin: 0 0.5rem`"
            font-scale="2.5"
          ></b-icon-github
        ></a>
        <a target="_blank" href="https://www.linkedin.com/in/yacine-safsaf/">
          <b-icon-linkedin
            :style="`color: ${isDarkMode ? '#fff' : '#001f3f'}; margin: 0 0.5rem`"
            font-scale="2.5"
          ></b-icon-linkedin
        ></a>
      </div>
    </b-col>
    <b-col cols="11" md="8" lg="5" class="pt-4 mt-2 mb-4">
      <h6 :style="`color: ${isDarkMode ? '#fff' : 'black'}; text-align: center`">
        {{
          isFrench
            ? "Je suis ravi de me lancer dans de nouvelles opportunités, de collaborer et de continuer à créer des contenus numériques captivants."
            : "I am excited to embark on new opportunities, collaborate , and continue crafting captivating digital experiences."
        }}
      </h6>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    isFrench: Boolean,
    isDarkMode: Boolean,
  },
};
</script>

<style scoped>
.icons {
  height: 50px;
  width: 50px;
  margin: 16px;
}
a {
  text-decoration: none !important;
  cursor: pointer;
}
</style>
