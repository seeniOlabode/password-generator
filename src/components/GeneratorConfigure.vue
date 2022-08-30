<template>
  <div class="bg-generator-dark-grey px-8 py-5">
    <div class="character-length flex justify-between items-center w-full">
      <h4 class="text-generator-almost-white text-base">Character Length</h4>
      <h2 class="text-generator-neon-green text-2xl">{{ passwordLength }}</h2>
    </div>

    <slider v-model="passwordLength" />

    <div>
      <div class="flex mb-4">
        <checkbox v-model="include.uppercase" />
        <h6 class="ml-5 text-generator-almost-white text-base">
          Include Uppercase Letters
        </h6>
      </div>
      <div class="flex mb-4">
        <checkbox v-model="include.lowercase" />
        <h6 class="ml-5 text-generator-almost-white text-base">
          Include Lowercase Letters
        </h6>
      </div>

      <div class="flex mb-4">
        <checkbox v-model="include.numbers" />
        <h6 class="ml-5 text-generator-almost-white text-base">
          Include Numbers
        </h6>
      </div>

      <div class="flex">
        <checkbox v-model="include.symbols" />
        <h6 class="ml-5 text-generator-almost-white text-base">
          Include Symbols
        </h6>
      </div>
    </div>

    <div
      class="strength bg-generator-very-dark-grey p-4 mt-8 flex justify-between"
    >
      <h2 class="text-generator-grey">STRENGTH</h2>
      <strength :strength="strength" />
    </div>
    <generate @generate="generate" />
  </div>
</template>

<script>
import Slider from "@/components/SliderComponent.vue";
import Checkbox from "@/components/CheckBox.vue";
import Strength from "@/components/PasswordStrength.vue";
import Generate from "@/components/GenerateButton.vue";
import generatePassword from "@/generatePassword";
import { store } from "@/App.vue";

export default {
  name: "GeneratorConfigure",
  components: { Slider, Checkbox, Strength, Generate },
  data() {
    return {
      passwordLength: "10",
      include: {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false,
      },
      strength: 4,
    };
  },
  methods: {
    generate() {
      store.setPassword(generatePassword(this.passwordLength, this.include));
    },
  },
};
</script>
<style scoped></style>
