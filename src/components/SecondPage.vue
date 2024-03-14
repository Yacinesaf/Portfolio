<template>
  <div style="height: 100vh">
    <b-row class="mx-0" style="padding-top: 3rem; padding-left: 6rem">
      <b-col class="px-0" cols="4">
        <h2 style="font-weight: 600">My projects</h2>
      </b-col>
      <b-col class="px-0" cols="2">
        <div class="sphere-small-medium" style="background-color: #ffc312"></div>
      </b-col>
    </b-row>
    <div>
      <div class="sphere-small-medium position-absolute" style="background-color: #3f3d56; left: -2.5%"></div>
      <div class="sphere-small position-absolute" style="background-color: #ffc312; right: 6%"></div>
    </div>
    <b-row align-v="start" class="mx-0" style="padding-top: 2rem; padding: 2rem 7rem 0rem 6rem">
      <b-col class="px-0 pt-4" cols="4">
        <h2>
          Project.title
          <!-- {{project.title}} -->
        </h2>
        <h5 class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit finibus volutpat. Donec at tempus ante,
          eu consequat enim. Nunc vel lorem et dolor porta laoreet. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam sit amet vestibulum purus. Pellentesque mauris augue, suscipit
          ac nibh rhoncus, porta molestie tortor. In mattis arcu justo, id gravida leo accumsan nec. Phasellus suscipit
          tempor egestas.
          <!-- {{project.description}} -->
        </h5>
      </b-col>
      <b-col cols="7" class="d-flex justify-content-end">
        <div class="projects-circle d-flex justify-content-center align-items-center">
          <div class="project-border">
            <img
              style="height: -webkit-fill-available; width: -webkit-fill-available"
              src="@/assets/sareta.jpg"
              alt=""
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

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
</style>
