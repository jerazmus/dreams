<template>
  <div class="progres col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <!-- <h5><p>Aktualny</p></h5> -->
    <h1><p>PROGRES</p></h1>
    <p class="raid-name">Sepulcher of the First Ones</p>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {};
  },
};
</script>

<style scoped>
h1, p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 50px;
  font-weight: 400;
  width: 58vw;
  border-bottom: 2px solid #235ebe;
}

.raid-name {
  font-size: 30px;
  font-weight: 300;
}

.progres {
  width: 60vw;
  height: auto;
  min-height: 100vh;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
  padding: 20px;
  align-content: center;
}

@media (min-width: 576px) {
}

@media (max-width: 767px) {
  .progres {
    border: none;
    width: 100vw;
    margin-top: 0;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 768px) and (max-width: 1100px) {
  .progres {
    width: 80vw;
  }
}
</style>
