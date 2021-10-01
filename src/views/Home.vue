<template>
  <v-main>
  <v-row no-gutters>

    <v-col cols="12" class="primary">
      <div id="particle" class="particle middle-height">
        <h1>Welcome... May the Force be with you.</h1>      
      </div>
      <VueParticle domId="particle" :config="particleConfig"/>
    </v-col>
    <v-col cols="12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path :fill="this.$vuetify.theme.themes.light.primary" fill-opacity="1" d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,96C420,75,480,53,540,64C600,75,660,117,720,138.7C780,160,840,160,900,144C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,85.3C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <div></div>
      <object type="text/html" class="almost-height" data="https://cdmngz.github.io/cv/" ></object>
    </v-col>

    <v-col cols="12" class="accent">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110"><path fill="#fff" fill-opacity="1" d="M0,0L120,10.7C240,21,480,43,720,53.3C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <h2 class="text-center mb-5">{{carousel[currentNumber]}}</h2>
      <v-carousel hide-delimiters align="center" justify="center" height="100vh" v-model="currentNumber">
        <v-carousel-item><Calendar/></v-carousel-item>
        <v-carousel-item><Isometric/></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://comandosdev.web.app/"></object></v-carousel-item>
        <!-- <v-carousel-item><object class="full-height" type="text/html" data="https://cdmngz.github.io/windows/"></object></v-carousel-item> -->
        <v-carousel-item><object class="full-height" type="text/html" data="https://poke-dex-pokemon.web.app/" ></object></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://cdmngz.github.io/T-RexChrome/"></object></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://canipay3.web.app/" ></object></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://madrina-madrid.web.app/" ></object></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://vue-calendario-c810c.web.app/" ></object></v-carousel-item>
        <v-carousel-item><object class="full-height" type="text/html" data="https://cdmngz.github.io/3Dgame/" ></object></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

  <v-footer
    dark
    padless
    class="primary"
    >
    <v-card
      flat
      tile
      class="primary white--text text-center"
      >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://github.com/cdmngz"
          target="_blank"
          >
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://www.linkedin.com/in/carlos-dom%C3%ADnguez-b27b23221/"
          target="_blank"
          >
          <v-icon size="24px">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://stackoverflow.com/users/12026200/"
          target="_blank"
          >
          <v-icon size="24px">mdi-stack-overflow</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        There was a time
        I used to look into my father's eyes
        In a happy home
        I was a king, I had a golden throne
        Those days are gone
        Now they're memories on the wall
        I hear the songs from the places where I was born
        Up on a hill across the blue lake
        That's where I had my first heartbreak
        I still remember how it all changed
        My father said
        Don't you worry, don't you worry, child
        See heaven's got a plan for you
        Don't you worry, don't you worry now
        Yeah</v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>@cdmngz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-main>
</template>

<script>
import VueParticle from 'vue-particlejs'
import Calendar from '@/components/Calendar'
import Isometric from '@/components/Isometric'

export default {
  name: "Home",
  components: {
    VueParticle,
    Calendar,
    Isometric
  },
  data: function() {
    return {
      currentNumber: 0,
      css: '',
      carousel: ['Components', 'Components', 'MiniSystems', 'MiniGames', 'MiniGames', 'Systems', 'Systems', 'Systems', 'Games'],
      particleConfig: {
        particles: {
              "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 90
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
      }
    }
  }
}
</script>

<style scoped>
.particle {
  position: relative;
}
.particle h1{
  animation: typewriter 4s steps(44) 1s 1 normal both,
              blinkTextCursor 800ms steps(44) infinite normal none;
  border-right: 2px solid rgba(255,255,255,.75);
  color: white;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  text-align: center;
  top: 60%;  
  transform: translateY(-50%);    
  white-space: nowrap;
  width: 24em;
}
h1 {
  font-size: clamp(1rem, 5vw, 2rem);
}
h2 {
  font-size: clamp(.8rem, 5vw, 1.8rem);
}
object {
  position: relative;
  width: 100%;
}
.full-height {
  height: 100vh;
}
.middle-height {
  height: 40vh;
}
.almost-height {
  height: 80vh;
}
@keyframes typewriter {
  from{width: 0;}
  to{width: 17.5em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>
