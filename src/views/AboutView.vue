<template>
  <div class="about">
    <h1>This is an about page</h1>
      <c-button left-icon="add" variant="solid" class="button-default focus-remove button-scale">
                Button</c-button>
  </div>
</template>


<script>
import { CButton } from "@chakra-ui/vue";

export default {
    components: {
        CButton
    }
}
</script>

<style lang="scss">
@import '@/scss/styles.scss'
</style>