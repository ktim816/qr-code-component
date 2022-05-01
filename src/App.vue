<template>
  <div :class="[$style.wrapper]">
    <QRCodeModal
      heading="Improve your front-end skills by building projects"
      description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    />
  </div>
</template>

<script setup lang="ts">
import QRCodeModal from '@components/QRCodeModal.vue';
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen p-6;
}
</style>
