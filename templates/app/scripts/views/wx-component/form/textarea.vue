<template>
  <div>
    <wx-textarea
      class="wx-textarea"
      value="默认 value 值"
      @input="$store.log('[wx-textarea] input', $event.detail)"
      @focus="$store.log('[wx-textarea] focus', $event.detail)"
      @blur="$store.log('[wx-textarea] blur', $event.detail)"
      @confirm="$store.log('[wx-textarea] confirm', $event.detail)"
      @linechange="$store.log('[wx-textarea] linechange', $event.detail)"
    />
    <wx-textarea
      class="wx-textarea"
      placeholder="占位文本样式1"
      placeholder-style="color: red;"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-textarea
      class="wx-textarea"
      placeholder="占位文本样式2"
      placeholder-class="green"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-textarea
      class="wx-textarea"
      placeholder="禁用"
      :disabled="true"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-textarea
      class="wx-textarea"
      :placeholder="`最大输入长度为 ${
        wxTextarea.maxlength > 0 ? wxTextarea.maxlength : '无限'
      }`"
      :maxlength="wxTextarea.maxlength"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-button
      class="wx-button"
      type="default"
      @tap="wxTextarea.maxlength = wxTextarea.maxlength > 0 ? -1 : 10"
    >
      修改上面 textarea 的 maxlength
    </wx-button>
    <wx-textarea
      class="wx-textarea"
      :focus="wxTextarea.focus"
      @blur="wxTextarea.focus = false"
      placeholder="默认不聚焦"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-button class="wx-button" type="default" @tap="wxTextarea.focus = true">
      聚焦上面 textarea
    </wx-button>
    <wx-textarea
      class="wx-textarea"
      placeholder="自动增高"
      :auto-height="true"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-button
      class="wx-button"
      type="default"
      @tap="wxTextarea.showFixedDialog = true"
    >
      显示 fixed textarea
    </wx-button>
    <div class="fixed-dialog" v-if="wxTextarea.showFixedDialog">
      <div
        class="fixed-dialog-mask"
        @click="wxTextarea.showFixedDialog = false"
      ></div>
      <div class="fixed-dialog-cnt">
        <wx-textarea
          class="wx-textarea"
          placeholder="点击灰色蒙层可关闭"
          :fixed="true"
          @input="$store.log('[wx-textarea] input', $event.detail)"
        />
      </div>
    </div>
    <wx-textarea
      class="wx-textarea"
      ref="wx-textarea-cursor"
      value="焦点位置 -><- 在这里"
      cursor="7"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-button
      class="wx-button"
      type="default"
      @tap="setAttribute('wx-textarea-cursor', 'focus', true)"
    >
      聚焦上面输入框
    </wx-button>
    <wx-textarea
      class="wx-textarea"
      ref="wx-textarea-select"
      value="后面这些文字：这些要被选中，到此就结束了"
      selection-start="7"
      selection-end="13"
      @input="$store.log('[wx-textarea] input', $event.detail)"
    />
    <wx-button
      class="wx-button"
      type="default"
      @tap="setAttribute('wx-textarea-select', 'focus', true)"
    >
      聚焦上面输入框
    </wx-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxTextarea: {
        focus: false,
        maxlength: 10,
        showFixedDialog: false
      }
    };
  },
  methods: {
    setAttribute(ref, name, value) {
      this.$refs[ref].setAttribute(name, value);
    }
  }
};
</script>
