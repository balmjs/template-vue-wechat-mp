<template>
  <div class="cnt">
    <my-header></my-header>
    <KFlex>
      <KFlexItem>
        <KView class="placeholder">
          <KButton size="mini" @click="onClickBack">回到上一页</KButton>
        </KView>
      </KFlexItem>
    </KFlex>
  </div>
</template>

<script>
import MyHeader from './common/header';

export default {
  name: 'Detail',
  components: {
    MyHeader
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
