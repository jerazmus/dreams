<template>
  <div class="home">
    <Home />
    <About id="About" />
    <Roster id="Roster" />
    <Progress id="Progress" />
    <Recruitment id="Recruitment" />
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About.vue";
import Recruitment from "./Recruitment.vue";
import Roster from './Roster.vue';
import Progress from './Progress.vue';

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Home,
    About,
    Recruitment,
    Roster,
    Progress
  },
};
</script>

<style scoped></style>
