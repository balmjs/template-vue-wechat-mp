<template>
  <div class="footer">
    <hr />
    <p>
      <KButton @click="$router.push({ name: 'home' })">返回首页</KButton>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
};
</script>
