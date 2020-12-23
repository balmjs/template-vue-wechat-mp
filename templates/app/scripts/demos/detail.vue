<template>
  <div class="cnt">
    <wx-header></wx-header>
    <button @click="onClickBack">回到上一页</button>
    <wx-footer></wx-footer>
  </div>
</template>

<script>
import { isMP } from '@/config';
import WxHeader from '@/demos/common/header';
import WxFooter from '@/demos/common/footer';

export default {
  name: 'Detail',
  components: {
    WxHeader,
    WxFooter
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
      if (isMP) {
        wx.navigateBack();
      }
    }
  }
};
</script>
