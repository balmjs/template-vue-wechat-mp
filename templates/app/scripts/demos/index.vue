<template>
  <div class="ui-demos">
    <router-view></router-view>
    <hr />
    <KButton @click="$router.go(-1)">返回</KButton>
  </div>
</template>
