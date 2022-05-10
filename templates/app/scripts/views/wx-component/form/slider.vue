<template>
  <div>
    <wx-slider
      class="wx-slider"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="1"
      max="21"
      step="2"
      value="15"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="12.3"
      max="27.5"
      step="0.2"
      value="15"
      :show-value="true"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="50"
      max="200"
      value="100"
      :show-value="true"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="50"
      max="200"
      value="110"
      :disabled="true"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="50"
      max="200"
      value="100"
      selected-color="red"
      color="#000"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="50"
      max="200"
      value="100"
      active-color="red"
      background-color="#000"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
    <wx-slider
      class="wx-slider"
      min="50"
      max="200"
      value="100"
      block-size="15"
      block-color="red"
      @change="$store.log('[wx-slider] change', $event.detail)"
      @changing="$store.log('[wx-slider] changing', $event.detail)"
    ></wx-slider>
  </div>
</template>
