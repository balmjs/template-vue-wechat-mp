import Vue from 'vue';
import Router from 'vue-router';
import App from '@/views/app';
import PageA from '@/views/page-a';
import PageB from '@/views/page-b';

// rem 和页面样式修改
window.onload = function() {
  document.documentElement.style.fontSize =
    document.documentElement.getBoundingClientRect().width / 16 + 'px';
  document.documentElement.style.backgroundColor = '#fffbe7';
};
window.onerror = (message, source, lineno, colno, error) => {
  console.log('window.onerror => ', message, source, lineno, colno, error);
};
window.addEventListener('error', evt =>
  console.log("window.addEventListener('error') =>", evt)
);

Vue.use(Router);

const router = new Router({
  mode: 'history', // 是否使用 history api
  routes: [
    { path: '/test/aaa', component: PageA },
    { path: '/test/bbb', component: PageB }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
