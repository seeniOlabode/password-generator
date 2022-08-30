<template>
  <button
    @click="$emit('generate')"
    class="h-14 bg-generator-neon-green w-full mt-4 text-base flex items-center justify-center hover:bg-transparent hover:border-solid hover:border-generator-neon-green hover:border-2 hover:text-generator-neon-green"
  >
    GENERATE
    <img class="ml-4 default" src="@/assets/icon-arrow-right.svg" alt="" />
    <img class="ml-4 hover hidden" src="@/assets/neon-arrow.svg" alt="" />
  </button>
</template>

<script>
export default {
  name: "GenerateButton",
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
