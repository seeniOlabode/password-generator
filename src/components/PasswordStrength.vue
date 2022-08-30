<template>
  <div class="flex items-center">
    <h5
      class="text-generator-almost-white mr-2 sm:mr-4 uppercase text-base sm:text-2xl"
    >
      {{ message }}
    </h5>
    <div class="flex" :style="{ 'background-color': 'none' }">
      <div class="strength-bar" :style="firstBarStyle"></div>
      <div class="strength-bar ml-2" :style="secondBarStyle"></div>
      <div class="strength-bar ml-2" :style="thirdBarStyle"></div>
      <div class="strength-bar ml-2" :style="fourthBarStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordStrength",
  props: ["strength"],
  computed: {
    message() {
      let output;
      switch (this.strength) {
        case 1:
          output = "TOO WEAK!";
          break;
        case 2:
          output = "WEAK";
          break;
        case 3:
          output = "MEDIUM";
          break;
        case 4:
          output = "STRONG";
          break;

        default:
          break;
      }
      return output;
    },
    strengthColor() {
      let output;
      switch (this.strength) {
        case 1:
          output = "#F64A4A";
          break;
        case 2:
          output = "#FB7C58";
          break;
        case 3:
          output = "#F8CD65";
          break;
        case 4:
          output = "#A4FFAF";
          break;
        default:
          output = "none";
      }
      return output;
    },
    firstBarStyle() {
      let output = {
        "background-color":
          this.strength >= 1 ? this.strengthColor : "rgba(255,255,255,0)",
      };
      if (this.strength >= 1) {
        output.border = "none";
      }
      console.log(output, this.strength);
      return output;
    },
    secondBarStyle() {
      let output = {
        "background-color":
          this.strength >= 2 ? this.strengthColor : "rgba(255,255,255,0)",
      };
      if (this.strength >= 2) {
        output.border = "none";
      }
      return output;
    },
    thirdBarStyle() {
      let output = {
        "background-color":
          this.strength >= 3 ? this.strengthColor : "rgba(255,255,255,0)",
      };
      if (this.strength >= 3) {
        output.border = "none";
      }
      return output;
    },
    fourthBarStyle() {
      let output = {
        "background-color":
          this.strength >= 4 ? this.strengthColor : "rgba(255,255,255,0)",
      };
      if (this.strength >= 4) {
        output.border = "none";
      }
      return output;
    },
  },
};
</script>

<style scoped>
.strength-bar {
  @apply border-solid border-2 border-generator-almost-white;
  width: 10px;
  height: 28px;
}
</style>
