<template>
  <div>
    <div class="title">mp-grid</div>
    <div class="comp-cnt">
      <mp-grids>
        <mp-grid v-for="i in 9" :key="i">
          <mp-grid-icon>
            <img :src="$store.DEFAULT_TABBAR_ICON" />
          </mp-grid-icon>
          <mp-grid-label>Grid</mp-grid-label>
        </mp-grid>
      </mp-grids>
    </div>
  </div>
</template>
