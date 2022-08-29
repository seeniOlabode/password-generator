<template>
  <password-generator />
</template>

<script>
import PasswordGenerator from "@/components/PasswordGenerator.vue";

export default {
  name: "App",
  components: { PasswordGenerator },
};
</script>

<style>
#app {
  @apply font-mono w-screen h-screen flex items-center justify-center px-4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(180deg, #14131b, #08070b 100%);
}

body {
  background: #08070b;
}
</style>
