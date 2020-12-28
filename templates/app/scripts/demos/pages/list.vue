<template>
  <div class="cnt">
    <my-header></my-header>
    <a href="/test/home">回到测试首页</a>
    <KButton @click="onClickJump">回到测试首页</KButton>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './common/header';
import MyFooter from './common/footer';

export default {
  name: 'List',
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    window.addEventListener('wxload', (query) =>
      console.log('page2 wxload', query)
    );
    window.addEventListener('wxshow', () => console.log('page2 wxshow'));
    window.addEventListener('wxready', () => console.log('page2 wxready'));
    window.addEventListener('wxhide', () => console.log('page2 wxhide'));
    window.addEventListener('wxunload', () => console.log('page2 wxunload'));
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/home';
    }
  }
};
</script>
