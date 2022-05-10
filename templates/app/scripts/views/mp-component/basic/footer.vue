<template>
  <div>
    <div class="title">mp-footer</div>

    <div class="comp-cnt">
      <mp-footer>{{ text }}</mp-footer>

      <br />

      <mp-footer :links="[{ name: '底部链接' }]">
        {{ text }}
      </mp-footer>

      <br />

      <mp-footer :links="[{ name: '底部链接' }, { name: '底部链接' }]">
        {{ text }}
      </mp-footer>

      <mp-footer fixed-bottom :links="[{ name: '首页', url: '/main' }]">
        {{ text }}
      </mp-footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Copyright @2016-NOW balm.js.org'
    };
  }
};
</script>
