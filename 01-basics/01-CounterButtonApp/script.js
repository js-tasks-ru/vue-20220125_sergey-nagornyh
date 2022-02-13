import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Counter = defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  template: `<button type="button" @click="count++">{{count}}</button>`,
});

// I could write less code and don't use Counter component,
// define all options in root, but i like this approach better
createApp({
  // used local registration
  components: { Counter },
  template: `
    <Counter/>
  `,
}).mount('#app');
