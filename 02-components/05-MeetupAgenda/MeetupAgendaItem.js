import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  agendaItemDefaultTitles,
  agendaItemIcons,
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconSrc() {
      const iconName = this.$options.agendaItemIcons[this.agendaItem.type];

      return `/assets/icons/icon-${iconName}.svg`;
    },
    metupTime() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    metupTitle() {
      return this.agendaItem.title || this.$options.agendaItemDefaultTitles[this.agendaItem.type];
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconSrc" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{metupTime}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{metupTitle}}</h3>
        <p class="agenda-item__talk">
          <span v-if="agendaItem.type === 'talk'">{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language || 'EN'}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
