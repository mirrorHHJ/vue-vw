<template>
  <div class="form2">
    <cube-checkbox-group v-model="checkList" :options="options"/>
    <cube-radio-group v-model="selected" :options="options2" position="right" :horizontal="true" />
    <p>{{selected}}</p>
    <cube-checker v-model="checkValue" :options="options3" :max="2"/>
    <p>{{checkValue}}</p>
    <cube-textarea v-model="textareaValue"/>
    <cube-select
    v-model="value"
    :title="title"
    :options="selectOptions"
    :placeholder="placeholder"
    :auto-pop="autoPop"
    @change="change"/>
  </div>
</template>

<script>
export default {
  name: 'form2',
  props: {
    param: {
      type: Object,
    },
  },
  data() {
    return {
      checkList: ['1', '4'],
      options: [
        '1',
        '2',
        {
          label: '3',
          value: this.param.value,
        },
        {
          label: this.param.label,
          value: '4',
        },
      ],
      selected: '',
      options2: [
        'hhy',
        'jake',
      ],
      checkValue: [],
      options3: [
        {
          value: '1',
          text: 'yellow',
        },
        {
          value: '2',
          text: 'red',
        },
        {
          value: '3',
          text: 'green',
        },
      ],
      textareaValue: '',
      selectOptions: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016,
      title: '年份',
      placeholder: '请选择年份',
      autoPop: false,
    };
  },
  methods: {
    change(value, index, text) {
      window.console.log('change', value, index, text);
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form2
    background: green
</style>
