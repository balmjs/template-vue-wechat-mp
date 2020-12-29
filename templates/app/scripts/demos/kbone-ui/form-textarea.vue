<template>
  <KCells title="问题描述">
    <KView class="weui-cell">
      <KView class="weui-cell__bd">
        <textarea
          v-model="value"
          class="weui-textarea"
          placeholder="请描述你所发生的问题"
        ></textarea>
        <!-- <div class="weui-textarea-counter"><span>0</span>/200</div> -->
      </KView>
    </KView>
  </KCells>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
