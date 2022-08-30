<template>
  <div
    class="slidecontainer relative flex bg-generator-very-dark-grey mt-5 mb-12"
  >
    <div
      class="filled bg-generator-neon-green h-2"
      :style="{ width: filledWidth }"
    ></div>
    <input
      type="range"
      min="8"
      max="25"
      class="slider absolute left-0 right-0"
      id="myRange"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    filledWidth() {
      let widthPercent = ((this.value - 7) / 18) * 100;
      return `calc(${widthPercent}% - 10px)`;
    },
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style>
.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 8px; /* Specified height */
  outline: none; /* Remove outline */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  @apply bg-none;
  background: none;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 28px; /* Set a specific slider handle width */
  height: 28px; /* Slider handle height */
  cursor: pointer; /* Cursor on hover */
  @apply rounded-full bg-generator-almost-white;
}

.slider::-webkit-slider-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  @apply bg-generator-almost-white rounded-full border-0;
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}
</style>
