import Vue from 'vue';

const el = document.body.appendChild(document.createElement('div'));

window.$$global.store = {};

const useGlobalStore = () => window.$$global.store;

export default {
  install(app, options = {}) {
    window.$$global.store = new Vue(
      Object.assign(
        {
          el,
          name: 'GlobalStore',
          render: (createElement) => createElement('')
        },
        options
      )
    );

    app.prototype.$globalStore = window.$$global.store;
  }
};
export { useGlobalStore };
