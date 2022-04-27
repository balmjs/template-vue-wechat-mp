<template>
  <div class="cnt">
    <my-header></my-header>
    <KFlex>
      <KFlexItem>
        <KView class="placeholder">
          <a href="/test/home">回到测试首页</a>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <KButton size="mini" @click="onClickJump">回到测试首页</KButton>
        </KView>
      </KFlexItem>
    </KFlex>
  </div>
</template>

<script>
import MyHeader from './common/header';

export default {
  name: 'List',
  components: {
    MyHeader
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
