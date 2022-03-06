<template>
  <v-container class="pt-15">
    <div class="calendar">
      <div class="today-info">
        <div class="month">{{ nameMonth[today.month].substr(0, 3) }}</div>
        <div class="date">{{ today.day }}</div>
        <div class="day">{{ today.name }}</div>
      </div>
      <div
        :class="flip ? 'flip-all' : ''"
        v-for="(item, index) in 12"
        :key="index"
      >
        <div class="flip-card-front">
          <span class="title">{{ nameMonth[index].substr(0, 3) }}</span>
          <div class="calendar-value">
            <p>{{ item }}</p>
          </div>
        </div>
        <div
          class="flip-card-back"
          @click="[(year = year - index), (flip = !flip)]"
        >
          <h1>{{ year - index }}</h1>
        </div>
      </div>
      <div class="clock">
        <div class="clock__hour__container" style="transform: rotateZ(438deg);">
          <div class="clock__hour"></div>
        </div>
        <div
          class="clock__minute__container"
          style="transform: rotateZ(219.2deg);"
        >
          <div class="clock__minute"></div>
        </div>
        <div
          class="clock__second__container"
          style="transform: rotateZ(192deg);"
        >
          <div class="clock__second"></div>
        </div>
        <div class="clock__dot"></div>
      </div>
      <div class="year-date" @click="flip = !flip">
        <h1>{{ year }}</h1>
      </div>
    </div>
    <div class="text-center">
      <v-btn
        class="accent mt-15"
        href="https://github.com/cdmngz/portfolio/tree/main/src/views/Calendar.vue"
        target="_blank"
        >view code
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Calendar",
  data: () => ({
    flip: false,
    today: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      name: new Date().toLocaleDateString("es", { weekday: "long" }),
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
    },
    year: new Date().getFullYear(),
    nameMonth: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    modal: {
      show: false,
      month: 0,
      value: 0,
      year: 0,
      add: true,
      edit: false,
    },
  }),
  created() {
    this.getActualTime();
    setInterval(() => {
      this.getActualTime();
    }, 10000);
    this.initLocalClocks();
  },
  methods: {
    getActualTime() {
      this.today.hour = ("0" + new Date().getHours()).slice(-2);
      this.today.minutes = ("0" + new Date().getMinutes()).slice(-2);
    },
    initLocalClocks() {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();

      const hands = [
        {
          hand: "clock__hour__container",
          angle: hours * 30 + minutes / 2,
        },
        {
          hand: "clock__minute__container",
          angle: minutes * 6 + seconds / 10,
        },
        {
          hand: "clock__second__container",
          angle: seconds * 6,
        },
      ];
      hands.forEach((hand) => {
        const elements = document.querySelectorAll("." + hand.hand);
        Array.from(elements).forEach((element) => {
          element.style.transform = `rotateZ(${hand.angle}deg)`;
        });
      });
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

*::before,
*::after {
  content: "";
  display: block;
  position: absolute;
}
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.calendar {
  background: transparent;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.calendar > div {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  padding: 3vmin 0;
  transition: 1s;
  user-select: none;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.calendar .clock {
  grid-row: 2/3;
  grid-column: 3/4;
}
.calendar .year-date {
  background-color: #eaf9fa !important;
  cursor: pointer;
  grid-row: 3/4;
  grid-column: 5/6;
  writing-mode: vertical-lr;
}
.calendar-value {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vmin;
  justify-content: center;
}
.calendar-value p {
  font-size: 3vmin;
}
.calendar-month .title {
  font-weight: bold;
  font-size: 3vmin;
}
.calendar > div:nth-of-type(3n + 1) {
  background-color: #004481;
  color: #fff;
  transition-delay: 0.4s;
}
.calendar > div:nth-of-type(3n + 2) {
  background-color: #eaf9fa;
  color: #072146;
  transition-delay: 0.1s;
}
.calendar > div:nth-of-type(3n + 3) {
  background-color: #ffffff;
  color: #072146;
  transition-delay: 0.3s;
}

.clock {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #abc !important;
  padding: 0 !important;
}
.clock__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
}
.clock__dot {
  width: 5%;
  height: 5%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
.clock__hour {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  animation: rotate 43200s infinite linear;
}
.clock__hour__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
}
.clock__hour::before {
  background-color: #fff;
  height: 30%;
  left: 50%;
  top: 20%;
  transform: translatex(-50%);
  width: 3%;
}
.clock__minute {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  animation: rotate 3600s infinite linear;
}
.clock__minute__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
}
.clock__minute::before {
  width: 2%;
  height: 40%;
  top: 10%;
  left: 50%;
  -webkit-transform: translatex(-50%);
  transform: translatex(-50%);
  background-color: #fff;
}
.clock__second {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  -webkit-animation: rotate 60s infinite steps(60);
  animation: rotate 60s infinite steps(60);
}
.clock__second__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
}
.clock__second::before {
  width: 1%;
  height: 45%;
  top: 5%;
  left: 50%;
  -webkit-transform: translatex(-50%);
  transform: translatex(-50%);
  background-color: #fff;
}
.flip-all {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
}
.flip-card-back {
  cursor: pointer;
  transform: rotateY(180deg);
}
.title {
  padding: 20px 20px;
}
.today-info .month {
  font-size: 3vmin;
  font-weight: bold;
}
.today-info .date {
  font-size: 6vmin;
  font-weight: bold;
  grid-row: 3/4;
  grid-column: 5/6;
}
.today-info .day {
  font-size: 3vmin;
  color: rgba(255, 255, 255, 0.5);
}
@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
</style>
