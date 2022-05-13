<template>
  <div>
    <div class="title">wx-checkbox-group/wx-checkbox</div>
    <div class="comp-cnt">
      <div><wx-checkbox></wx-checkbox><span>未选中</span></div>
      <div><wx-checkbox :checked="true"></wx-checkbox><span>选中</span></div>
      <div><wx-checkbox :disabled="true"></wx-checkbox><span>禁用 1</span></div>
      <div>
        <wx-checkbox :checked="true" :disabled="true"></wx-checkbox>
        <span>禁用 2</span>
      </div>
      <div>
        <wx-checkbox :checked="true" color="#FF0000"></wx-checkbox>
        <span>颜色 - 红</span>
      </div>
      <wx-checkbox-group
        class="wx-checkbox-group"
        @change="$store.log('[wx-checkbox] change', $event.detail)"
      >
        <div>
          <wx-checkbox :checked="true" value="中"></wx-checkbox>
          <span>中国</span>
        </div>
        <div>
          <wx-checkbox :checked="true" value="俄"></wx-checkbox>
          <span>俄罗斯</span>
        </div>
        <div><wx-checkbox value="美"></wx-checkbox><span>美国</span></div>
        <div><wx-checkbox value="英"></wx-checkbox><span>英国</span></div>
        <div><wx-checkbox value="法"></wx-checkbox><span>法国</span></div>
      </wx-checkbox-group>
    </div>
  </div>
</template>
