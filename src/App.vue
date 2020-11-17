<template>
  <div id="app">
    <ac-alert :options="options"></ac-alert>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        color: 'green',
        type: 'success',
        message: 'Success Tips',
      },
    }
  },
}
</script>
