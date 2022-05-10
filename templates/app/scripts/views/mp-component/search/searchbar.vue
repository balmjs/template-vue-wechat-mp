<template>
  <div>
    <div class="title">mp-searchbar</div>
    <div class="comp-cnt">
      <mp-searchbar
        :search="onSearch"
        @selectresult="$store.log('[mp-searchbar] selectresult', $event.detail)"
      ></mp-searchbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpSearchbar: {
        i: 0
      }
    };
  },
  methods: {
    onSearch() {
      return new Promise((resolve) => {
        if (this.mpSearchbar.i % 2 === 0) {
          setTimeout(
            () =>
              resolve([
                { text: '搜索结果', value: 1 },
                { text: '搜索结果2', value: 2 }
              ]),
            200
          );
        } else {
          setTimeout(() => resolve([]), 200);
        }
        this.mpSearchbar.i = this.mpSearchbar.i + 1;
      });
    }
  }
};
</script>
