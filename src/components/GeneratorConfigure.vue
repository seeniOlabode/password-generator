<template>
  <div class="bg-generator-dark-grey px-8 py-5">
    <div class="character-length flex justify-between items-center w-full">
      <h4 class="text-generator-almost-white text-base sm:text-lg">
        Character Length
      </h4>
      <h2 class="text-generator-neon-green text-2xl sm:text-4xl">
        {{ passwordLength }}
      </h2>
    </div>

    <slider :disable="store.passwordGenerated" v-model="passwordLength" />

    <div>
      <div class="flex mb-4">
        <checkbox
          :disable="store.passwordGenerated"
          v-model="include.uppercase"
        />
        <h6 class="ml-5 text-generator-almost-white text-sm sm:text-lg">
          Include Uppercase Letters
        </h6>
      </div>
      <div class="flex mb-4">
        <checkbox
          :disable="store.passwordGenerated"
          v-model="include.lowercase"
        />
        <h6 class="ml-5 text-generator-almost-white text-sm sm:text-lg">
          Include Lowercase Letters
        </h6>
      </div>

      <div class="flex mb-4">
        <checkbox
          :disable="store.passwordGenerated"
          v-model="include.numbers"
        />
        <h6 class="ml-5 text-generator-almost-white text-sm sm:text-base">
          Include Numbers
        </h6>
      </div>

      <div class="flex">
        <checkbox
          :disable="store.passwordGenerated"
          v-model="include.symbols"
        />
        <h6 class="ml-5 text-generator-almost-white text-sm sm:text-base">
          Include Symbols
        </h6>
      </div>
    </div>

    <div
      class="strength bg-generator-very-dark-grey p-4 mt-8 flex justify-between items-center"
    >
      <h2 class="text-generator-grey text-base sm:text-lg">STRENGTH</h2>
      <strength :strength="strengthScore" />
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
      generateInterval: "",
      store: store,
    };
  },
  methods: {
    generate() {
      let intervalCount = 0;
      store.passwordGenerated = false;
      console.log(store.passwordGenerated);
      this.generateInterval = setInterval(() => {
        store.setPassword(generatePassword(this.passwordLength, this.include));
        intervalCount++;
        intervalCount >= 50 ? clearInterval(this.generateInterval) : "";
        intervalCount >= 50 ? (store.passwordGenerated = true) : "";
        intervalCount >= 50 ? console.log(store.passwordGenerated) : "";
      }, 50);
    },
  },
  computed: {
    strengthScore() {
      let score = 1;
      if (
        (this.passwordLength >= 15) & this.include.lowercase &&
        this.include.uppercase &&
        this.include.numbers
      ) {
        score += 1;
      }
      if (
        this.passwordLength >= 20 &&
        this.include.lowercase &&
        this.include.uppercase &&
        this.include.numbers
      ) {
        score += 2;
      }
      if (this.passwordLength >= 15 && this.include.symbols) {
        score += 1;
      }
      if (score > 4) {
        score = 4;
      } else if (score < 1) {
        score = 1;
      }
      return score;
    },
  },
  mounted() {
    this.generate();
  },
};
</script>
<style scoped></style>
