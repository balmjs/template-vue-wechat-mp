import global from './global';

export default {
  mixins: [global],
  methods: {
    log(...args) {
      console.log.apply(console, args);
    }
  }
};
