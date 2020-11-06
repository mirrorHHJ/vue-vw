<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/form1">form1</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/form2">form2</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :param="param"/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      param: {
        label: 'hhjTest',
        value: '1',
      },
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    padding: 40px 0
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
