<template>
  <a target="_blank" :href="project.link">
    <div class="project-card mt-3 mb-5 py-md-0" :style="`animation-delay: ${project.delay}s`">
      <div
        class="card-top-background d-flex flex-column position-relative justify-content-around align-items-center"
        :style="`height: 300px; background-image: url(${require(`@/assets/${project.background}`)})`"
      >
        <div>
          <h4 class="title">{{ project.title }}</h4>
        </div>
        <img :src="require(`@/assets/${project.icon}`)" width="auto" height="80px" alt="Project icon" />
        <div class="d-flex justify-content-center">
          <img
            v-for="(icon, i) in project.icons"
            :key="i"
            height="18px"
            width="18px"
            class="m-2"
            :src="require(`@/assets/${icon}`)"
            alt="Technology used icon"
          />
        </div>
        <div class="p-3 bottom d-flex flex-column justify-content-between position-absolute" style="text-align: center">
          <div>{{ project.description }}</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    breakpoints: Object,
    project: Object,
  },
};
</script>

<style lang="css" scoped>
.card-top-background {
  background-position: center;
  background-size: cover;
  width: 100%;
  border-radius: 16px;
  cursor: pointer;
}

.title {
  font-weight: 600;
  color: #f9f9f9;
}

a {
  text-decoration: none !important;
  cursor: pointer;
  color: black;
}

.project-card {
  opacity: 0;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bottom {
  background-color: white;
  border-radius: 16px;
  bottom: -250px;
}
.card-top-background:hover .bottom {
  transition: 0.7s ease;
  bottom: 0;
}
.card-top-background:not(:hover) .bottom {
  transition: 0.7s ease;
  bottom: -250px;
}

.project-card {
  overflow: hidden;
}
</style>
>
