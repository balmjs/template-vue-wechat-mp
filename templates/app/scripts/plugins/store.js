import Vue from 'vue';

const el = document.body.appendChild(document.createElement('div'));

let store = {};

const useStore = () => store;

export default {
  install(app, options = {}) {
    store = new Vue({
      el,
      name: 'store',
      render: (createElement) => createElement(''),
      options
    });

    app.prototype.$store = store;
  }
};
export { useStore };
