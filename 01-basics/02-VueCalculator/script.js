import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const actions = {
  sum: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

const Calculator = defineComponent({
  data() {
    return {
      x: 0,
      y: 0,
      operation: 'sum',
    };
  },
  computed: {
    result() {
      // There are only two ways for evaluate sting arithmetic expression
      // parse(for safe execute) and more simpler approach 'eval'
      return eval(`${this.x + actions[this.operation] + this.y}`);
    },
  },
  template: `#calculator`,
});
const app = createApp({
  components: { Calculator },
  template: `
    <Calculator/>
  `,
});

app.mount('#app');
