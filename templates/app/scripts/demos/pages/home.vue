<template>
  <div class="cnt">
    <my-header></my-header>
    <div>
      <a href="/test/list/321">当前页跳转</a>
      <a href="/test/detail/123" target="_blank">新开页面跳转</a>
      <button @click="onClickJump">当前页跳转</button>
      <button @click="onClickOpen">新开页面跳转</button>
    </div>
    <!-- vue-improve-loader -->
    <div check-reduce>
      <p>这段话不会在小程序里显示</p>
      <p>在构建的时候就会被 vue-improve-loader 给干掉了</p>
    </div>
    <!-- reduce-loader -->
    <web>
      <p>这段话也不会在小程序里显示</p>
      <p>在构建的时候就会被 reduce-loader 给干掉了</p>
    </web>
    <!-- 样式隐藏 -->
    <div class="for-web">
      <p>这段话也不会在小程序里显示</p>
      <p>在渲染时会被样式隐藏</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { isMP } from '@/config';
import MyHeader from './common/header';
import MyFooter from './common/footer';
import Web from 'reduce-loader!./common/web';
import 'reduce-loader!./web';

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyFooter,
    Web
  },
  created() {
    window.addEventListener('wxload', (query) =>
      console.log('page1 wxload', query)
    );
    window.addEventListener('wxshow', () => console.log('page1 wxshow'));
    window.addEventListener('wxready', () => console.log('page1 wxready'));
    window.addEventListener('wxhide', () => console.log('page1 wxhide'));
    window.addEventListener('wxunload', () => console.log('page1 wxunload'));

    if (isMP) {
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
