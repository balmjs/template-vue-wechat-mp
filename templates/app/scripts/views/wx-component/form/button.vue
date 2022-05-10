<template>
  <div>
    <wx-button
      class="wx-button"
      type="primary"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      页面主操作 Normal
    </wx-button>
    <wx-button
      class="wx-button"
      type="primary"
      :loading="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      页面主操作 Loading
    </wx-button>
    <wx-button
      class="wx-button"
      type="primary"
      :disabled="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      页面主操作 Disabled
    </wx-button>
    <wx-button
      class="wx-button"
      type="default"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      页面次要操作 Normal
    </wx-button>
    <wx-button
      class="wx-button"
      type="default"
      :disabled="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      页面次要操作 Disabled
    </wx-button>
    <wx-button
      class="wx-button"
      type="warn"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      警告类操作 Normal
    </wx-button>
    <wx-button
      class="wx-button"
      type="warn"
      :disabled="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      警告类操作 Disabled
    </wx-button>
    <wx-button
      class="wx-button"
      type="primary"
      :plain="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      按钮
    </wx-button>
    <wx-button
      class="wx-button"
      type="primary"
      :disabled="true"
      :plain="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      不可点击的按钮
    </wx-button>
    <wx-button
      class="wx-button"
      type="default"
      :plain="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      按钮
    </wx-button>
    <wx-button
      class="wx-button"
      type="default"
      :disabled="true"
      :plain="true"
      @tap="$store.log('[wx-button] tap', $event)"
      @longpress="$store.log('[wx-button] longpress', $event)"
    >
      按钮
    </wx-button>
    <div>
      <wx-button
        class="wx-button mini-btn"
        type="primary"
        size="mini"
        @tap="$store.log('[wx-button] tap', $event)"
        @longpress="$store.log('[wx-button] longpress', $event)"
      >
        按钮
      </wx-button>
      <wx-button
        class="wx-button mini-btn"
        type="default"
        size="mini"
        @tap="$store.log('[wx-button] tap', $event)"
        @longpress="$store.log('[wx-button] longpress', $event)"
      >
        按钮
      </wx-button>
      <wx-button
        class="wx-button mini-btn"
        type="warn"
        size="mini"
        @tap="$store.log('[wx-button] tap', $event)"
        @longpress="$store.log('[wx-button] longpress', $event)"
      >
        按钮
      </wx-button>
    </div>
  </div>
</template>
