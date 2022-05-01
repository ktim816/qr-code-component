<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.mask]">
      <img :src="qrCodeImage" />
    </div>
    <div :class="[$style.info]">
      <h3>{{ heading }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {getImage} from '@helpers/common';

const qrCodeImage = getImage('image-qr-code.png');
const props = defineProps<{
  heading: string;
  description: string;
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply bg-white rounded-3xl max-w-xs px-4 pt-4 pb-10 text-center;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
}

.mask {
  @apply bg-blue rounded-xl overflow-hidden;
}

.info {
  @apply space-y-4 mt-6 px-3;
}
</style>
