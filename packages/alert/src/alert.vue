<template>
  <div class="ac-alert" :class="baseCalculate">
    <div class="ac-alert__wrapper">
      <div class="ac-alert__content">
        <!-- 缺少 svg icon -->
        <div class="ac-alert_mode">
          <div class="ac-alert_mode_text">
            <div class="ac-alert_mode_text_title"></div>
            <div class="ac-alert_mode_text_description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('./alert.scss')
export default {
  name: 'AcAlert',
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
        left: 'ac-alert__border_left',
        top: 'ac-alert__border_top',
        right: 'ac-alert__border_right',
        bottom: 'ac-alert__border_bottom',
      }
      const type = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
      }
      return [
        Color[this.options['color']],
        borderColor[this.options['border']],
        type[this.options['type']],
      ]
    },
  },
}
</script>
