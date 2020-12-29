<template>
  <div>
    <KProgress></KProgress>
    <KProgress :percent="percent" show-info></KProgress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 0
    };
  },
  mounted() {
    let timer = setInterval(() => {
      this.step();
      if (this.percent === 100) {
        clearInterval(timer);
      }
    }, 10);
  },
  methods: {
    step() {
      this.percent++;
    }
  }
};
</script>
