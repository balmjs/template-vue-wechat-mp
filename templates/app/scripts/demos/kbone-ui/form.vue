<template>
  <div class="page--ui-demos">
    <template v-if="$route.name === 'ui.form'">
      <KCells title="表单页">
        <KCell
          v-for="item in navItems"
          :key="item.name"
          class="weui-cell_access"
          :value="NavNames[item.path]"
          @click.native="goto(item)"
        ></KCell>
      </KCells>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { formRoutes } from '@/routes/demos/ui';

const NavNames = {
  'form-page': '表单结构',
  'form-input-status': '输入框状态',
  'form-vcode': '验证码',
  'form-checkbox': '复选框',
  'form-radio': '单选框',
  'form-switch': '开关',
  'form-select': '选择框',
  'form-textarea': '文本域'
};

export default {
  data() {
    return {
      NavNames
    };
  },
  computed: {
    navItems() {
      return formRoutes.map(({ path, name, children }) => {
        return {
          path,
          name,
          children
        };
      });
    }
  },
  methods: {
    goto({ name }) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
