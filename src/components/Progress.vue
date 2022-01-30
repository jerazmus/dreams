<template>
  <div class="progres col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <!-- <h5><p>Aktualny</p></h5> -->
    <h1><p>PROGRES</p></h1>
    <!-- <p class="raid-name">Sepulcher of the First Ones</p> -->
    <p class="raid-name">Castle Nathria</p>
    <div class="bosses">
      <div
        class="boss col-sm-12 col-md-6 col-lg-6 col-xl-3"
        v-for="boss in bosses"
        :key="boss.name"
        :style="{ backgroundImage: `url('${boss.image}'` }"
      >
        <div class="text-box">
          <p class="boss-pulls">Pulls: <span class="pull-number">{{ boss.pulls }}</span></p>
          <p class="boss-name">{{ boss.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      bosses: [
        {
          // name: "Vigilant Guardian",
          name: "Shriekwing",
          killed: true,
          pulls: 3,
          image: "../assets/bosses/cn/1.png"
        },
        {
          // name: "Skolex, the Insatiable Ravener",
          name: "Huntsman Altimor",
          killed: true,
          pulls: 27,
          image: "../assets/bosses/cn/2.png"
        },
        {
          // name: "Artificer Xy'mox",
          name: "Hungering Destroyer",
          killed: true,
          pulls: 121,
          image: "../assets/bosses/cn/3.png"
        },
        {
          // name: "Dausegne, the Fallen Oracle",
          name: "Lady Inerva Darkvein",
          killed: true,
          pulls: 30,
          image: "../assets/bosses/cn/4.png"
        },
        {
          // name: "Prototype Pantheon",
          name: "Artificer Xy'Mox",
          killed: true,
          pulls: 65,
          image: "../assets/bosses/cn/5.png"
        },
        {
          // name: "Lihuvim, Principal Architech",
          name: "Sun King's Salvation",
          killed: true,
          pulls: 70,
          image: "../assets/bosses/cn/6.png"
        },
        {
          // name: "Halondrus the Reclaimer",
          name: "Council of Blood",
          killed: true,
          pulls: 90,
          image: "../assets/bosses/cn/7.png"
        },
        {
          // name: "Anduin Wrynn",
          name: "Sludgefist",
          killed: false,
          pulls: 134,
          image: "../assets/bosses/cn/8.png"
        },
        {
          // name: "Lords of Dread",
          name: "Stone Legion Generals",
          killed: false,
          pulls: '-',
          image: "../assets/bosses/cn/9.png"
        },
        {
          // name: "Rygelon",
          name: "Sire Denathrius",
          killed: false,
          pulls: '-',
          image: "../assets/bosses/cn/10.png"
        },
        // {
        //   name: "The Jailer, Zovaal",
        //   killed: true,
        //   pulls: 120
        // }
      ]
    };
  },
};
</script>

<style scoped>
h1, p {
  margin: 0;
  padding: 0;
  user-select: none;
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

.bosses {
  display: flex;
  margin: 60px auto 0px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
}

.boss {
  height: 50vh;
  background-color: white;
  border: 2px solid #235ebe;
  box-shadow: 0 0 1em #235ebe;
  margin: 10px;
  text-align: center;
  /* background-position: center;
  background-size: cover; */
}

.text-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.boss-name, .boss-pulls {
  color: white;
  align-self: flex-end;
  text-shadow: black 1px 0 10px;
}

.boss-name {
  font-size: 25px;
}

.boss-pulls {
  font-size: 20px;
}

.pull-number {
  color: #235ebe;
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
