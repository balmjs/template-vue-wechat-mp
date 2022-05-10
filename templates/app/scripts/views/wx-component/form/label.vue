<template>
  <div>
    <wx-checkbox-group
      @change="$store.log('[wx-label] checkbox change', $event.detail)"
    >
      <div>表单组件在 wx-label 内</div>
      <div>
        <wx-label>
          <wx-checkbox :checked="true" value="中国"></wx-checkbox>
          中国
        </wx-label>
      </div>
      <div>
        <wx-label><wx-checkbox value="美国"></wx-checkbox>美国</wx-label>
      </div>
    </wx-checkbox-group>
    <wx-radio-group
      @change="$store.log('[wx-label] radio change', $event.detail)"
    >
      <div>wx-label 用 for 标识表单组件</div>
      <div>
        <wx-radio id="label-radio-1" :checked="true" value="中国"></wx-radio>
        <wx-label for="label-radio-1">中国</wx-label>
      </div>
      <div>
        <wx-radio id="label-radio-2" value="美国"></wx-radio>
        <wx-label for="label-radio-2">美国</wx-label>
      </div>
    </wx-radio-group>
    <wx-checkbox-group
      @change="$store.log('[wx-label] checkbox change', $event.detail)"
    >
      <div>wx-label 内有多个时选中第一个</div>
      <wx-label>
        <div><wx-checkbox value="中国"></wx-checkbox>中国</div>
        <div><wx-checkbox value="美国"></wx-checkbox>美国</div>
        <div>点击该 wx-label 下的文字默认选中第一个 wx-checkbox</div>
      </wx-label>
    </wx-checkbox-group>
    <div class="add-margin-top">
      <wx-label>
        <wx-switch
          @change="$store.log('[wx-label] switch change', $event.detail)"
        ></wx-switch>
        wx-switch
      </wx-label>
    </div>
    <div class="add-margin-top">
      <wx-label
        ><wx-switch
          type="checkbox"
          @change="$store.log('[wx-label] switch change', $event.detail)"
        ></wx-switch>
        wx-switch
      </wx-label>
    </div>
    <div class="add-margin-top">
      <wx-label>
        <wx-button class="wx-button" @tap="$store.log('[wx-label] button tap')">
          按钮
        </wx-button>
        wx-button
      </wx-label>
    </div>
  </div>
</template>
