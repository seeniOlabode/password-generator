<template>
  <button
    @click="$emit('generate')"
    class="h-14 bg-generator-neon-green w-full mt-4"
  >
    GENERATE
  </button>
</template>

<script>
export default {
  name: "GenerateButton",
};
</script>
