<template>
  <div class="bg-generator-dark-grey px-8 py-5">
    <div class="character-length flex justify-between items-center w-full">
      <h4 class="text-generator-almost-white text-base">Character Length</h4>
      <h2 class="text-generator-neon-green text-2xl">{{ sliderVal }}</h2>
    </div>
    <div class="slidecontainer relative flex bg-generator-very-dark-grey my-5">
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
        v-model="sliderVal"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneratorConfigure",
  data() {
    return {
      sliderVal: "10",
    };
  },
  computed: {
    filledWidth() {
      let widthPercent = ((this.sliderVal - 7) / 18) * 100;
      console.log(widthPercent);
      return `${widthPercent}%`;
    },
  },
};
</script>
<style scoped>
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

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  @apply bg-generator-almost-white rounded-full border-0;
  cursor: pointer; /* Cursor on hover */
}
</style>
