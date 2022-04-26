import Vue from 'vue';

const busApp = new Vue();

const useBus = () => busApp;

export default {
  install(app) {
    app.prototype.$bus = busApp;
  }
};
export { useBus };
