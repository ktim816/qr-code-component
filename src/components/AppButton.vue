<template>
  <button :class="[$style.wrapper]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center bg-orange sm:text-md text-sm tracking-[0.135em] uppercase text-pure-white rounded-full p-[0.95rem] font-bold;
  @apply leading-none;

  &:hover {
    @apply bg-pure-white text-orange;
  }
}
</style>
