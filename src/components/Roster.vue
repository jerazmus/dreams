<template>
  <div class="roster col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <!-- <h5><p>Aktualny</p></h5> -->
    <h1><p>SKŁAD</p></h1>
    <div class="members">
      <div
        class="member col-sm-12 col-md-6 col-lg-6 col-xl-3"
        v-for="member in roster"
        :key="member.nick"
      >
        <!-- <img :src="member.avatar" /> -->
        <img src="../assets/home-icons/avatar.jpg" />
        <span class="nickname" v-bind:style="{ color: colors[member.class] }">
          {{ member.nick }}
          <img
            :src="getRole(member.role)"
            :alt="member.role"
            class="role-img"
          />
          <a :href="getProfile(member.nick)" :target="`_blank`">
            <img src="../assets/home-icons/warcraft.png" class="profile-img" />
          </a>
          <a
            v-if="member.twitchName != null"
            :href="getTwitch(member.twitchName)"
            :target="`_blank`"
          >
            <img src="../assets/home-icons/twitch.png" class="twitch-img" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roster",
  data() {
    return {
      roster: [
        {
          nick: "Vânila",
          class: "monk",
          role: "tank",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Antrack",
          class: "dh",
          role: "tank",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Mèo",
          class: "priest",
          role: "healer",
          twitchName: "imeo_",
          avatar: null,
        },
        {
          nick: "Warflakes",
          class: "monk",
          role: "healer",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Valais",
          class: "shaman",
          role: "healer",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Maiko",
          class: "shaman",
          role: "healer",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Xáriyosu",
          class: "mage",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Arthres",
          class: "rogue",
          role: "dps",
          twitchName: "amSubtlety",
          avatar: null,
        },
        {
          nick: "Below",
          class: "druid",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Maanfrredo",
          class: "dk",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Moneyroot",
          class: "druid",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Cinnaeth",
          class: "mage",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Plazmatic",
          class: "mage",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Strukturka",
          class: "rogue",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Kozuh",
          class: "priest",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Slesch",
          class: "hunter",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Shayah",
          class: "priest",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Daokmin",
          class: "hunter",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Einkil",
          class: "dh",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
        {
          nick: "Astrryy",
          class: "mage",
          role: "dps",
          twitchName: null,
          avatar: null,
        },
      ],
      colors: {
        monk: "#00FF96",
        dk: "#C41F3B",
        dh: "#A330C9",
        druid: "#FF7D0A",
        priest: "#FFFFFF",
        shaman: "#0070DE",
        mage: "#40C7EB",
        warlock: "#8787ED",
        hunter: "#A9D271",
        rogue: "#FFF569",
        paladin: "#F58CBA",
        warrior: "#C79C6E",
      },
    };
  },
  methods: {
    getProfile(nickname) {
      return `https://worldofwarcraft.com/en-gb/character/eu/burning-legion/${nickname}`;
    },
    getTwitch(nickname) {
      return `https://twitch.tv/${nickname}`;
    },
    getRole(role) {
      return require("@/assets/role/" + role + ".png");
    },
    // async getAvatar(nickname) {
    //   const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    //   const requestUrl = `https://eu.api.blizzard.com/profile/wow/character/burning-legion/${nickname.toLowerCase()}/character-media?namespace=profile-eu&locale=en_EU&access_token=1XUMVBr0PqQx4g06JUl1mk6Kg6FRqsLp`;
    //   return fetch(proxyUrl + requestUrl)
    //     .then((response) => response.json())
    //     .then((data) => data.avatar_url);
    // },
    // async setAvatar(nickname) {
    //   const avatar = await this.getAvatar(nickname);
    //   this.roster
    //     .filter((member) => member.nick === nickname)
    //     .forEach((member) => (member.avatar = avatar));
    // },
  },
  mounted() {
    // this.roster.forEach((member) => this.setAvatar(member.nick));
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

.title {
  margin-left: 2vw;
}

.roster {
  width: 60vw;
  height: auto;
  min-height: 100vh;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
  padding: 20px;
  align-content: center;
}

.members {
  display: flex;
  margin: 70px auto 0px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  border: 2px solid #235ebe;
  box-shadow: 0 0 1em #235ebe;
  width: 265px;
  margin: 10px;
  float: left;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0;
}

.nickname {
  font-size: 120%;
  margin-left: 10px;
  display: inline-block;
  height: auto;
  font-weight: 500;
  user-select: none;
}

.role-img {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 5;
  top: -10px;
  right: -10px;
  border: 2px double #235ebe;
  box-shadow: 0 0 1em #235ebe;
  border-radius: 50%;
}

.profile-img,
.twitch-img {
  width: 22px;
  height: 22px;
  position: absolute;
  z-index: 5;
  filter: grayscale(1);
}

.profile-img {
  bottom: 5px;
  right: 5px;
}

.profile-img:hover,
.twitch-img:hover {
  filter: grayscale(0);
}

.twitch-img {
  bottom: 5px;
  right: 30px;
}

@media (min-width: 576px) {
  .member {
    max-width: 50%;
    flex: 1 0 48%;
  }
}

@media (max-width: 767px) {
  .roster {
    border: none;
    width: 100vw;
    margin-top: 0;
  }
}

@media (min-width: 768px) {
  .member {
    max-width: 25%;
    flex: 1 0 23%;
  }
}

@media (min-width: 768px) and (max-width: 1100px) {
  .roster {
    width: 80vw;
  }
}
</style>
