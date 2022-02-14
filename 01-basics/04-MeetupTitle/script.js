import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const MetupsDescription = defineComponent({
  data() {
    return {
      id: 1,
      metup: null,
    };
  },
  watch: {
    id: {
      immediate: true,
      async handler() {
        this.metup = await fetchMeetupById(this.id);
      },
    },
  },
  template: `
    <div>
        <label><input v-model="id" type="radio" value="1" /> 1</label>
        <label><input v-model="id" type="radio" value="2" /> 2</label>
        <label><input v-model="id" type="radio" value="3" /> 3</label>
        <label><input v-model="id" type="radio" value="4" /> 4</label>
        <label><input v-model="id" type="radio" value="5" /> 5</label>

        <hr />

        <h3>{{metup ? metup.title : 'Fetch title...'}}</h3>
    </div>
  `,
});

createApp({
  components: { MetupsDescription },
  template: `<MetupsDescription/>`,
}).mount('#app');
