<template>
  <div id="app">
    <as-alert :options="options"></as-alert>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        border: 'left',
        color: 'blue',
      },
    }
  },
}
</script>
