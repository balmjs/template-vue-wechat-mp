<template>
  <div>
    <div class="title">mp-grid</div>
    <div class="comp-cnt">
      <mp-grids>
        <mp-grid v-for="i in 9" :key="i">
          <mp-grid-icon>
            <img :src="tabbarDefaultIcon" />
          </mp-grid-icon>
          <mp-grid-label>Grid</mp-grid-label>
        </mp-grid>
      </mp-grids>
    </div>
  </div>
</template>

<script>
import { tabbarDefaultIcon } from '@/config';

export default {
  data() {
    return {
      tabbarDefaultIcon
    };
  }
};
</script>
