<template>
  <div>
    <div class="title">wx-input</div>
    <div class="comp-cnt">
      <wx-input
        class="wx-input"
        value="默认 value 值"
        @input="$store.log('[wx-input] input', $event.detail)"
        @focus="$store.log('[wx-input] focus', $event.detail)"
        @blur="$store.log('[wx-input] blur', $event.detail)"
        @confirm="$store.log('[wx-input] confirm', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="文本输入框"
        type="text"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="整数输入框"
        type="number"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="小数输入框"
        type="digit"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="身份证输入框"
        type="idcard"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="密码输入框"
        :password="true"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="占位文本样式1"
        placeholder-style="color: red;"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="占位文本样式2"
        placeholder-class="green"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        placeholder="禁用"
        :disabled="true"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        :placeholder="`最大输入长度为 ${
          wxInput.maxlength > 0 ? wxInput.maxlength : '无限'
        }`"
        :maxlength="wxInput.maxlength"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-button
        class="wx-button"
        type="default"
        @tap="wxInput.maxlength = wxInput.maxlength > 0 ? -1 : 10"
      >
        修改上面输入框的 maxlength
      </wx-button>
      <wx-input
        class="wx-input"
        :focus="wxInput.focus"
        @blur="wxInput.focus = false"
        placeholder="自动聚焦"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-button class="wx-button" type="default" @tap="wxInput.focus = true">
        聚焦上面输入框
      </wx-button>
      <wx-input
        class="wx-input"
        placeholder="点击确认不失焦"
        :confirm-hold="true"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-input
        class="wx-input"
        ref="wx-input-cursor"
        value="焦点位置 -><- 在这里"
        cursor="7"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-button
        class="wx-button"
        type="default"
        @tap="setAttribute('wx-input-cursor', 'focus', true)"
      >
        聚焦上面输入框
      </wx-button>
      <wx-input
        class="wx-input"
        ref="wx-input-select"
        value="后面这些文字：这些要被选中，到此就结束了"
        selection-start="7"
        selection-end="13"
        @input="$store.log('[wx-input] input', $event.detail)"
      />
      <wx-button
        class="wx-button"
        type="default"
        @tap="setAttribute('wx-input-select', 'focus', true)"
      >
        聚焦上面输入框
      </wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxInput: {
        focus: true,
        maxlength: 10
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
