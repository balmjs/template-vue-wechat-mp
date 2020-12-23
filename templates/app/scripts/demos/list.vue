<template>
  <div class="cnt">
    <wx-header></wx-header>
    <a href="/home">回到首页</a>
    <button @click="onClickJump">回到首页</button>
    <wx-footer></wx-footer>
  </div>
</template>

<script>
import WxHeader from '@/demos/common/header';
import WxFooter from '@/demos/common/footer';

export default {
  name: 'List',
  components: {
    WxHeader,
    WxFooter
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
      window.location.href = '/home';
    }
  }
};
</script>
