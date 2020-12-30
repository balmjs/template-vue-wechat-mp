<template>
  <div class="cnt">
    <my-header></my-header>
    <KFlex>
      <KFlexItem>
        <KView class="placeholder">
          <a href="/test/list/123">当前页跳转</a>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <a href="/test/detail/123" target="_blank">新开页面跳转</a>
        </KView>
      </KFlexItem>
    </KFlex>
    <br />
    <KFlex>
      <KFlexItem>
        <KView class="placeholder">
          <KButton @click="onClickJump" size="mini">当前页跳转</KButton>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <KButton @click="onClickOpen" size="mini">新开页面跳转</KButton>
        </KView>
      </KFlexItem>
    </KFlex>
    <!-- vue-improve-loader -->
    <div check-reduce>
      <p>这段话不会在小程序里显示</p>
      <p>在构建的时候就会被 vue-improve-loader 给干掉了</p>
    </div>
    <!-- 样式隐藏 -->
    <div class="for-web">
      <p>这段话也不会在小程序里显示</p>
      <p>在渲染时会被样式隐藏</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './common/header';
import MyFooter from './common/footer';

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    window.addEventListener('wxload', (query) =>
      console.log('page1 wxload', query)
    );
    window.addEventListener('wxshow', () => console.log('page1 wxshow'));
    window.addEventListener('wxready', () => console.log('page1 wxready'));
    window.addEventListener('wxhide', () => console.log('page1 wxhide'));
    window.addEventListener('wxunload', () => console.log('page1 wxunload'));

    if (this.isMP) {
      console.log('I am in miniprogram');
    } else {
      console.log('I am in Web');
    }
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123';
    },
    onClickOpen() {
      window.open('/test/detail/123');
    }
  }
};
</script>
