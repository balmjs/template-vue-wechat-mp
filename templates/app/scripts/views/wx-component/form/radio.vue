<template>
  <div>
    <div class="title">wx-radio-group/wx-radio</div>
    <div class="comp-cnt">
      <div><wx-radio></wx-radio><span>未选中</span></div>
      <div><wx-radio :checked="true"></wx-radio><span>选中</span></div>
      <div><wx-radio :disabled="true"></wx-radio><span>禁用 1</span></div>
      <div>
        <wx-radio :checked="true" :disabled="true"></wx-radio>
        <span>禁用 2</span>
      </div>
      <div>
        <wx-radio :checked="true" color="#FF0000"></wx-radio>
        <span>颜色 - 红</span>
      </div>
      <wx-radio-group
        class="wx-radio-group"
        @change="$store.log('[wx-radio] change', $event.detail)"
      >
        <div>
          <wx-radio :checked="true" value="中"></wx-radio><span>中国</span>
        </div>
        <div><wx-radio value="俄"></wx-radio><span>俄罗斯</span></div>
        <div><wx-radio value="美"></wx-radio><span>美国</span></div>
        <div><wx-radio value="英"></wx-radio><span>英国</span></div>
        <div><wx-radio value="法"></wx-radio><span>法国</span></div>
      </wx-radio-group>
    </div>
  </div>
</template>
