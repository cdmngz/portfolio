import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3B3355',
            secondary: '#326a7d',
            accent: '#BFCDE0',
            error: '#FBD1A2',
          },
          dark: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',          },
        },
      },
});
