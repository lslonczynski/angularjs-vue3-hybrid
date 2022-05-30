<script>
import { ref } from 'vue'

export default {
  props: {
    props: { name: String }
  },
  data() {
    let currentCounter = ref(this.props.counter.value);
    this.props.counter.subscribe(value => currentCounter.value = value);
    return {
      info: `Vue3 component with prop from Ng: ${this.props.name}`,
      currentCounter,
      incCounter: this.props.incCounter
    }
  }
}
</script>

<template>
  <div style="border: 1px dotted blue; margin: 2rem; padding: 2rem;">
    <p class="info">{{ info }}</p>
    <p class="info">Counter: {{ currentCounter }}</p>
    <button @click="incCounter">+</button>
  </div>
</template>

<style scoped>
.info {
  color: blue;
  font-weight: bold;
}
</style>