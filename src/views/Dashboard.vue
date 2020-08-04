<template>
    <div>
         <!-- <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> -->
        <h1>
            Welcome Admin

        </h1>
    </div>
</template>

<style scoped>

</style>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  data () {
    return {
      color: '#cc181e',
      color1: '#5bc0de',
      size: '45px',
      margin: '2px',
      radius: '2px'
    }
  },
  components: {
    PulseLoader,
    RingLoader,
    BounceLoader
  }
}
</script>