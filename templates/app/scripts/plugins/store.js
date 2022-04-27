import Vue from 'vue';

const el = document.body.appendChild(document.createElement('div'));

let store = {};

const useStore = () => store;

export default {
  install(app, options = {}) {
    store = new Vue(
      Object.assign(
        {
          el,
          name: 'Store',
          render: (createElement) => createElement('')
        },
        options
      )
    );

    app.prototype.$store = store;
  }
};
export { useStore };
