<template>
  <password-generator />
</template>

<script>
import PasswordGenerator from "@/components/PasswordGenerator.vue";
import { reactive } from "vue";

export const store = reactive({
  password: "",
  setPassword(string) {
    this.password = string;
    console.log(this.password);
  },
});

export default {
  name: "App",
  components: { PasswordGenerator },
  data() {
    return {
      store: store,
    };
  },
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
