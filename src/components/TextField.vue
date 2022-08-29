<template>
  <div
    class="flex items-center justify-between bg-generator-dark-grey px-8 py-5"
  >
    <input
      class="generator-input text-2xl text-generator-almost-white grow w-1/3"
      v-model="password"
      placeholder="P4$5W0rD!"
      disabled
      type="text"
      id="generator-input"
    />
    <button @click="copyToClipBoard" class="basis-auto flex items-center gap-4">
      <span v-show="showCopied" class="text-generator-neon-green">COPIED</span>
      <img class="copy-icon" src="@/assets/icon-copy.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "TextField",
  data() {
    return {
      password: "",
      showCopied: false,
    };
  },
  methods: {
    copyToClipBoard() {
      /* Get the text field */
      let copyText = document.getElementById("generator-input");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      this.showCopied = true;

      /* Alert the copied text */
      console.log("Copied the text: " + copyText.value);

      setTimeout(() => {
        this.showCopied = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.generator-input {
  background: none;
}

.generator-input:focus {
  outline: none;
}

.copy-icon {
  width: 17.5px;
  height: 20px;
}
</style>
