<template>
  <div class="form1">
    <cube-checkbox v-model="checked" :class="{ck:checked}">
      Checkbox
    </cube-checkbox>
    <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">
      Styled Checkbox
    </cube-checkbox>
    <cube-checkbox v-model="checked" :option="option"/>
    <p v-bind:value="option.value" @click.stop="changeValue">{{param.value}}</p>
    <cube-input v-model="value" :clearable="clearable"></cube-input>
    <cube-input v-model="value"
    :placeholder="placeholder"
    :type="type"
    :maxlength="maxlength"
    :readonly="readonly"
    :disabled="disabled"
    :autocomplete="autocomplete"
    :eye="eye"></cube-input>
  </div>
</template>

<script>
export default {
  name: 'form1',
  props: {
    param: {
      type: Object,
    },
  },
  data() {
    return {
      checked: false,
      value: '',
      option: {
        label: this.param.label,
        value: this.param.value,
        disabled: false,
      },
      clearable: {
        visible: true,
        blurHidden: true,
      },
      placeholder: '请输入密码',
      type: 'password',
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: false,
      },
    };
  },
  methods: {
    changeValue() {
      this.option.value++;
    },
  },
  watch: {
    value(newV) {
      window.console.log(newV);
      if (newV.length > 10) {
        const newV1 = newV.slice(0, 10);
        this.$nextTick(() => {
          this.value = newV1;
        });
      }
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form1
    background: bisque

  .ck
    color: yellow
</style>
