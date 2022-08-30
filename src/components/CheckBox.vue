<template>
  <div class="checkbox-container">
    <label :for="value" class="switch flex items-center justify-center">
      <input
        @change="($event) => emitValue($event)"
        type="checkbox"
        :id="value"
        :value="value"
        :checked="modelValue"
      />
      <span class="box">
        <img src="@/assets/icon-check.svg" alt="" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["modelValue", "value"],
  emits: ["update:modelValue"],
  methods: {
    emitValue($event) {
      this.$emit("update:modelValue", $event.target.checked);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  height: 24px;
  width: 24px;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.box {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @apply hover:cursor-pointer border-solid border-2 border-generator-almost-white;
}

.box img {
  opacity: 0;
}

input:checked + .box {
  @apply bg-generator-neon-green border-none;
}

input:checked + .box > img {
  opacity: 1;
}
</style>
