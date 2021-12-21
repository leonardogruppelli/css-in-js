<!-- EXEMPLO 1 TWIND -->

<template>
  <button v-tw="__button({ secondary, tertiary, expanded })" @click="toggle">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { __button } from './button.styles';

defineProps({
  secondary: Boolean,
  tertiary: Boolean,
});

const expanded = ref(false);

const toggle = () => {
  expanded.value = !expanded.value;
}
</script>