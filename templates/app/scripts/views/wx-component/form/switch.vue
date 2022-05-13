<template>
  <div>
    <div class="title">wx-switch</div>
    <div class="comp-cnt">
      <wx-switch
        class="wx-switch"
        :checked="true"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
      <wx-switch
        class="wx-switch"
        :checked="true"
        :disabled="true"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
      <wx-switch
        class="wx-switch"
        :checked="true"
        color="red"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
      <wx-switch
        class="wx-switch"
        type="checkbox"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
      <wx-switch
        class="wx-switch"
        type="checkbox"
        :disabled="true"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
      <wx-switch
        class="wx-switch"
        type="checkbox"
        color="red"
        @change="$store.log('[wx-switch]', $event.detail)"
      ></wx-switch>
    </div>
  </div>
</template>
