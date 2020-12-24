<template>
  <div class="footer">
    <p>
      <button @click="$router.push({ name: 'home' })">返回首页</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
};
</script>
