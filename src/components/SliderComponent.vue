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
      :class="[
        'slider',
        'absolute',
        'left-0',
        'right-0',
        { 'thumb-hover': disable },
        { 'thumb-cursor': disable },
      ]"
      id="myRange"
      v-model="value"
      :disabled="!disable"
    />
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ["modelValue", "disable"],
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
  /* transition: opacity 0.2s; */
  @apply bg-none;
  background: none;
}

/* Mouse-over effects  */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 28px; /* Set a specific slider handle width */
  height: 28px; /* Slider handle height */
  @apply rounded-full bg-generator-almost-white;
  background: rgb(230 229 234 / var(--tw-bg-opacity));
  opacity: 1;
}

.thumb-hover::-webkit-slider-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}

.slider::-webkit-slider-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}

.thumb-cursor::-webkit-slider-thumb {
  cursor: pointer; /* Cursor on hover */
}

.slider::-webkit-slider-thumb {
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 28px; /* Set a specific slider handle width */
  height: 28px; /* Slider handle height */
  @apply bg-generator-almost-white rounded-full border-0;
  background: rgb(230 229 234 / var(--tw-bg-opacity));
  opacity: 1;
}

.thumb-cursor::-moz-range-thumb {
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  cursor: pointer; /* Cursor on hover */
}

.thumb-hover::-moz-range-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}

.slider::-moz-range-thumb:hover {
  @apply bg-generator-very-dark-grey border-2 border-solid border-generator-neon-green;
}
</style>
