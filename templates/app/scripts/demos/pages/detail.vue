<template>
  <div class="cnt">
    <my-header></my-header>
    <KButton @click="onClickBack">回到上一页</KButton>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './common/header';
import MyFooter from './common/footer';

export default {
  name: 'Detail',
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    window.addEventListener('wxload', (query) =>
      console.log('page3 wxload', query)
    );
    window.addEventListener('wxshow', () => console.log('page3 wxshow'));
    window.addEventListener('wxready', () => console.log('page3 wxready'));
    window.addEventListener('wxhide', () => console.log('page3 wxhide'));
    window.addEventListener('wxunload', () => console.log('page3 wxunload'));
  },
  methods: {
    onClickBack() {
      if (this.isMP) {
        wx.navigateBack();
      }
    }
  }
};
</script>
