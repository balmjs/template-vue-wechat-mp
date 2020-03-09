<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <p>thx <a class="link" href="//balmjs.com/">BalmJS</a></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello Vue App'
    };
  }
};
</script>
