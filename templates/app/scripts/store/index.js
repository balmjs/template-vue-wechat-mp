import global from './global';

export default {
  mixins: [global],
  data() {
    return {
      subNavIndex: -1
    };
  },
  methods: {
    log(...args) {
      console.log.apply(console, args);
    }
  }
};
