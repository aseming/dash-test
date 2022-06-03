<template>
  <div class="about">
    <h1>This is an about page</h1>
      <c-button left-icon="add" class="button-default focus-remove button-scale" variant="solid">Button
            </c-button>
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