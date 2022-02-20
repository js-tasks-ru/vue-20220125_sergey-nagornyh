import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: ['title', 'image'],
  template: `
    <div class="meetup-cover" :style="{'--bg-url': image ? 'url(' + image + ')' : null}">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,
});
