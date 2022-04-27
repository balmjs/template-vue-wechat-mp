<template>
  <div>
    <div class="cover-cnt" @click="onClick">
      <div>
        img1:
        <img
          class="cover-img"
          src="https://i.loli.net/2019/07/27/5d3c141367f2784840.jpg"
        />
      </div>
      <div>
        img2:
        <img
          class="cover-img"
          src="https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg"
        />
      </div>
      <div>this is cover</div>
    </div>
    <div class="btn-cnt">
      <wx-button class="cover-btn" open-type="share">分享</wx-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inner',
  methods: {
    onClick(e) {
      console.log('onClick');
    }
  }
};
</script>
