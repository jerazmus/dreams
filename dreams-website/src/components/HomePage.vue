<template>
  <div class="home">
    <transition name="fade" mode="out-in" v-if="this.$store.state.cover">
      <div class="cover" v-if="this.$store.state.cover" />
    </transition>
    <Home />
  </div>
</template>

<script>
import Home from "./Home";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Home,
  },
};
</script>

<style scoped>
.cover {
  width: 100vw;
  height: 300vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  overflow-y: hidden;
}
</style>
