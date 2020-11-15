<template>
  <div class="as-alert" :class="baseCalculate">
    <div class="as-alert__wrapper">
      <div class="as-alert__content">Im an Alert Usage Example</div>
    </div>
  </div>
</template>

<script>
require('./alert.scss')
export default {
  name: 'AsAlert',
  props: {
    options: {
      type: Object,
      defalut: () => {},
    },
  },
  mounted() {
    console.log('mounted')
  },
  computed: {
    baseCalculate() {
      const Color = {
        red: 'red',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
      }
      const borderColor = {
        left: 'as-alert__border_left',
        top: 'as-alert__border_top',
        right: 'as-alert__border_right',
        bottom: 'as-alert__border_bottom',
      }
      return [Color[this.options['color']], borderColor[this.options['border']]]
    },
  },
}
</script>
