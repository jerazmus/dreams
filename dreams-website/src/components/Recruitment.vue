<template>
  <div class="recruitment">
    <h2>Kogo szukamy?</h2>
    <p>
      Przede wszystkim osób, które są nastawione na pushowanie contentu (czy to
      raidów, czy M+). Mamy swoje ambicje, chcemy być kompetytywni i cały czas
      testować swoje limity, ale chcemy mieć przy tym frajdę i odrobinę luzu -
      jeśli też czujesz podobnie i chciałbyś powoli progresować w spokojnej
      atmosferze - myślę, że się dogadamy. Nie chcemy przy tym regresować, raz
      wyczyszczony content chcemy by był tylko formalnością. Jeśli chcesz z nami
      raidować, bądź po prostu gotów udźwignąć swoją własną wagę i nie bądź
      ciężarem dla reszty grupy. Czego się można po nas spodziewać? Ludzi w
      wieku 18+, pracujących, studiujących i z chęcią do gry. Nie bardzo nas
      obchodzi ile masz lat ani jakiej jesteś płci - tak długo jak jesteś w
      porządku i rozumiesz po co i w jaki sposób gramy. Nie mamy specjalnie
      zasad - bądź sobą i szanuj to, że inni też chcą być sobą, więc nie zniżaj
      się do poziomu wyzwisk i kłótni - jeśli coś do kogoś masz, powiedz mu to
      wprost.
    </p>

    <h2>... jednak dla casuali również jest miejsce!</h2>
    <p>
      Tak, gildia powstała głównie z założeniem o zebraniu fajnej, zgranej
      ekipy, która wspólnie będzie miała frajdę z gry. Nie zamierzamy z tego
      rezygnować, a więc nie zamykamy naszych drzwi dla graczy, którzy mają
      nieco bardziej luźne podejście do gry, nie interesuje ich progres mythica,
      ale raczej zadowolą się heroiczną wersją raidu, zagraniem niedzielnego
      dungeona czy niezliczonymi próbami zdobycia mounta z Icecrown Citadel -
      jeśli jesteś taką osobą, nie bój się aplikować!
    </p>

    <h3>
      Informacyjnie dla osób, które są zainteresowane główną grupą raidową:
    </h3>
    <ul>
      <li>
        głównym wymaganiem jest dystans do siebie i umiejętność do ciągłego
        polepszania swojej gry, nie mamy nic przeciwko zapraszaniu do nas osób,
        które są niedoświadczone i uczą się gry - ważnym jest, aby znać swoje
        możliwości i starać się gonić poziom pozostałych osób, a nie szukać
        boosta - takich osób nie chcemy
      </li>
      <li>
        raidować mythic będzie najlepsze 20 osób, które pokażą nie tylko skill,
        ale również zaangażowanie
      </li>
      <li>
        przed startem raidów podawane będą wymagania, które należy spełnić, aby
        raidować z gildią
      </li>
    </ul>

    <h3>Dni i godziny raidów:</h3>
    <ul class="raid-days">
      <li>poniedziałek (19:00 - 22:00)</li>
      <li>wtorek (19:00 - 22:00)</li>
      <!-- <li>niedziela (19:00 - 22:00) - zwykle przeznaczony na heroic</li> -->
    </ul>

    <div class="classes">
      <img
        :src="getClass(className.class)"
        v-for="className in classes"
        :id="className.class"
        :key="className.class"
        :class="{ 'class-nreq': !className.status }"
      />

      <b-tooltip
        placement="top"
        v-for="className in requiredClasses"
        :key="className.class"
        :target="className.class"
      >
        <img
          :src="getSpec(className.class, specName)"
          v-for="specName in className.spec"
          :key="specName"
          :alt="specName"
          class="spec-img"
        />
      </b-tooltip>
    </div>
    <div class="apply">
      Jesteś zainteresowany/a dołączeniem do nas?
      <div class="apply-button-box">
        <button class="apply-button" @click="openApplyBox">Aplikuj!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruitment",
  data() {
    return {
      classes: [
        { status: true,
          class: "dk", 
          spec: ["frost", "unholy", "blood"] 
        },
        { status: false, 
          class: "dh",
          spec: ["havoc", "vengeance"] },
        {
          status: true,
          class: "druid",
          spec: ["balance", "feral", "restoration", "guardian"],
        },
        { status: false,
          class: "mage",
          spec: ["arcane", "frost", "fire"] },
        {
          status: true,
          class: "rogue",
          spec: ["subtlety", "assassination", "outlaw"],
        },
        {
          status: false,
          class: "paladin",
          spec: ["holy", "retribution", "protection"],
        },
        {
          status: true,
          class: "shaman",
          spec: ["enhancement", "restoration", "elemental"],
        },
        {
          status: false,
          class: "priest",
          spec: ["discipline", "holy", "shadow"],
        },
        {
          status: true,
          class: "hunter",
          spec: ["marksman", "survival", "beastmastery"],
        },
        {
          status: false,
          class: "warrior",
          spec: ["arms", "fury", "protection"],
        },
        {
          status: true,
          class: "monk",
          spec: ["mistweaver", "windwalker", "brewmaster"],
        },
        {
          status: false,
          class: "warlock",
          spec: ["affliction", "demonology", "destruction"],
        },
      ],
      requiredClasses: [],
    };
  },
  methods: {
    getClass(className) {
      return require("@/assets/class/" + className + ".png");
    },
    getSpec(className, specName) {
      return require("@/assets/spec/" + className + "/" + specName + ".png");
    },
    filterClasses() {
      let temp = [];
      this.classes.forEach((element) => {
        if (element.status) {
          temp.push(element);
        }
      });
      return temp;
    },
    openApplyBox() {
      this.$store.state.cover = true;
      document.body.style.width = "100vw";
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}`;
    },
  },
  mounted() {
    this.requiredClasses = this.filterClasses();
  }
}
</script>

<style scoped>
h2,
h3 {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-align: center !important;
  text-shadow: black 2px 0 10px;
}

li {
  text-align: left !important;
}

.raid-days {
  margin-left: 0;
  padding-left: 0;
}

.raid-days li {
  display: inline;
  padding: 2%;
  list-style-type: circle;
}

.recruitment {
  text-align: center;
  width: 56.75vw;
  height: auto;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
}

.classes {
  padding: 0;
}

img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid #235ebe;
  margin: auto 2px 5px 2px;
  padding: 2px;
}

.spec-img {
  padding: 0px;
  height: 60px;
  width: 60px;
  float: left;
  margin: 2px;
}

.class-nreq {
  filter: grayscale(1);
}

.tooltip.b-tooltip {
  opacity: 1;
  background-color: transparent;
  overflow: hidden;
}

.tooltip.b-tooltip >>> .tooltip-inner {
  background-color: transparent !important;
  max-width: 400px;
}

.tooltip.b-tooltip >>> .arrow {
  display: none;
}

.apply {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-shadow: black 1px 0 10px;
}

.apply-button-box {
  margin-top: 10px;
}

.apply-button {
  background-color: transparent;
  border: none;
  color: white;
  display: inline-block;
  font-weight: 300;
  font-size: 20px;
  transition-duration: 0.5s;
}

button:hover {
  color: #478dff;
  transition: 0.5s ease;
}

button:focus {
  outline: none;
}

@media (max-width: 767px) {
  .recruitment {
    border: none;
    width: 100vw;
    margin-top: 0;
    background: transparent;
  }

  h2 {
    margin-top: 0;
    padding-top: 10px;
  }

  .tooltip.b-tooltip {
    background-color: rgb(0, 0, 0, 0.7) !important;
    border-radius: 45%;
  }
}
</style>
