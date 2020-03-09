import Vue from 'vue';
import App from '@/views/layouts/app';

export default function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  window.onerror = (message, source, lineno, colno, error) => {
    console.log('window.onerror => ', message, source, lineno, colno, error);
  };
  window.addEventListener('error', evt =>
    console.log("window.addEventListener('error') =>", evt)
  );

  Vue.config.productionTip = false;

  new Vue({
    el: '#app',
    render: h => h(App)
  });
}
