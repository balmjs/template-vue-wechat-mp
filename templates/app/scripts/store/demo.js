import { reactive, toRefs } from 'vue';

const state = reactive({
  sitename: ''
});

const useDemoStore = () => {
  return {
    ...toRefs(state)
  };
};

export default useDemoStore;
