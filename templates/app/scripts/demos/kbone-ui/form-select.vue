<template>
  <KCells>
    <KCell class="weui-cell_select">
      <template #title>
        <select v-model="type" class="weui-select">
          <option value="1">微信号</option>
          <option value="2">QQ号</option>
          <option value="3">Email</option>
        </select>
      </template>
    </KCell>
    <KView class="weui-cell weui-cell_select weui-cell_select-before">
      <KView class="weui-cell__hd">
        <select v-model="countryCode" class="weui-select">
          <option value="1">+86</option>
          <option value="2">+80</option>
          <option value="3">+84</option>
          <option value="4">+87</option>
        </select>
      </KView>
      <KView class="weui-cell__bd">
        <input v-model="phone" class="weui-input" />
      </KView>
    </KView>
    <KView class="weui-cell weui-cell_select weui-cell_select-after">
      <KView class="weui-cell__hd">
        <label class="weui-label">国家</label>
      </KView>
      <KView class="weui-cell__bd">
        <select v-model="country" class="weui-select">
          <option value="1">中国</option>
          <option value="2">美国</option>
          <option value="3">英国</option>
        </select>
      </KView>
    </KView>
  </KCells>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
      countryCode: 1,
      phone: '12345678907',
      country: 1
    };
  }
};
</script>
