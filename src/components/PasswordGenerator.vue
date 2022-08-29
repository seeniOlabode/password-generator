<template>
  <div id="password-generator" class="w-full">
    <h1 class="text-generator-grey text-center mb-8">Password Generator</h1>

    <div>
      <text-field />
      <configuration class="mt-4" />
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField.vue";
import Configuration from "@/components/GeneratorConfigure.vue";

export default {
  name: "PasswordGenerator",
  components: { TextField, Configuration },
};
</script>

<style scoped>
#password-generator {
}
</style>
