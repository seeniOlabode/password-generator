<template>
  <button
    :disabled="!store.passwordGenerated"
    @click="$emit('generate')"
    :class="[
      'h-14',
      'bg-generator-neon-green',
      'w-full',
      'mt-4',
      'text-base',
      'flex',
      'items-center',
      'justify-center',
      { 'hover:bg-transparent': store.passwordGenerated },
      { 'hover:border-solid': store.passwordGenerated },
      { 'hover:border-generator-neon-green': store.passwordGenerated },
      { 'hover:border-2': store.passwordGenerated },
      { 'hover:text-generator-neon-green': store.passwordGenerated },
    ]"
  >
    GENERATE
    <img
      :class="['ml-4', { default: store.passwordGenerated }]"
      src="@/assets/icon-arrow-right.svg"
      alt=""
    />
    <img
      :class="['ml-4', { hover: store.passwordGenerated }, 'hidden']"
      src="@/assets/neon-arrow.svg"
      alt=""
    />
  </button>
</template>

<script>
import { store } from "@/App.vue";

export default {
  name: "GenerateButton",
  data() {
    return {
      store: store,
    };
  },
};
</script>

<style scoped>
img {
  @apply w-3 h-3;
}

button:hover > .default {
  display: none;
}

button:hover > .hover {
  display: inline;
}
</style>
