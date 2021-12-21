<!-- EXEMPLO 1 -->

<template>
  <button class="button" :class="classes" @click="toggle">
    <slot />
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  secondary: Boolean,
  tertiary: Boolean,
});

const expanded = ref(false);

const classes = computed(() => ({
  'button--secondary': props.secondary,
  'button--tertiary': props.tertiary,
  'button--expanded': expanded.value,
}));

const toggle = () => {
  expanded.value = !expanded.value;
}
</script>

<style lang="scss">
.button {
  display: inline-flex;
  padding: 1rem 1.5rem;
  background-color: $primary;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  transition: transform 150ms cubic-bezier(0.4, 0,0.2, 1);

  &--secondary {
    background-color: $secondary;
  }

  &--tertiary {
    background-color: $tertiary;
  }

  &--expanded {
    transform: scale(1.1);
  }
}
</style>