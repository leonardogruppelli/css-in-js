<template>
  <div class="flex gap-8">
    <div class="p-8 flex flex-col items-center gap-8 bg-gray-200 rounded-lg">
      <h2 class="text-lg font-bold uppercase">Normal</h2>

      <Button>
        Lorem ipsum
      </Button>

      <Button secondary>
        Lorem ipsum
      </Button>

      <Button tertiary>
        Lorem ipsum
      </Button>
    </div>

    <div class="p-8 flex flex-col items-center gap-8 bg-gray-200 rounded-lg">
      <h2 class="text-lg font-bold uppercase">Emotion</h2>

      <ButtonEmotion>
        Lorem ipsum
      </ButtonEmotion>

      <ButtonEmotion secondary>
        Lorem ipsum
      </ButtonEmotion>

      <ButtonEmotion tertiary>
        Lorem ipsum
      </ButtonEmotion>
    </div>

    <div class="p-8 flex flex-col items-center gap-8 bg-gray-200 rounded-lg">
      <h2 class="text-lg font-bold uppercase">Twind</h2>

      <ButtonTwind>
        Lorem ipsum
      </ButtonTwind>

      <ButtonTwind secondary>
        Lorem ipsum
      </ButtonTwind>

      <ButtonTwind tertiary>
        Lorem ipsum
      </ButtonTwind>
    </div>
  </div>
</template>

<script setup>
import Button from './components/button.vue'
import ButtonEmotion from './components-emotion/button/button.vue'
import ButtonTwind from './components-twind/button/button.vue'
</script>

<style lang="scss">
:root {
  font-size: 16px;
}

* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}
</style>
