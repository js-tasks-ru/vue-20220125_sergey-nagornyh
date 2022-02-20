import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  watch: {
    meetupId: {
      immediate: true,
      handler: 'updateMeetup'
    }
  },
  data() {
    return {
      meetup: null,
      error: null,
    }
  },
  methods: {
    updateMeetup() {
      this.meetup = null;
      this.error = null;

      fetchMeetupById(this.meetupId)
        .then(response => this.meetup = response)
        .catch(error => this.error = error.message)
    },
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup"/>

      <ui-container v-else-if="!meetup && !error">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{error}}</ui-alert>
      </ui-container>
    </div>`,
});
