<script setup>
import { counter, incCounter } from '../../app/app';
import { ref } from 'vue';
import { tap } from 'rxjs/operators';

const info = 'Vue3 component (internal)'
const currentCount = ref(counter.getValue());
counter.pipe(
  tap(value => currentCount.value = value), 
).subscribe();
</script>

<template>
  <div style="border: 1px dotted green; padding: 2rem; margin: 2rem;" class="info">
    <p>{{ info }}</p>
    <p>Counter: {{ currentCount }}</p>
    <button @click="incCounter">+</button>
  </div>
</template>

<style scoped>
.info {
  color: green;
  font-weight: bold;
}
</style>