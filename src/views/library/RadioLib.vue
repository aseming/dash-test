<template>
    <div>
        <c-flex class="section-header">
            <h1>Radio</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-radio-group v-model="selected">
                <c-radio value="1">Option 1</c-radio>
                <c-radio value="2">Option 2</c-radio>
            </c-radio-group>
        </div>

        <h6>Disabled selected</h6>
        <div class="component">
            <c-radio is-disabled v-model="selected">Radio</c-radio>
        </div>

        <h6>Disabled unselected</h6>
        <div class="component">
            <c-radio default-is-unchecked is-disabled>Radio</c-radio>
        </div>
    </div>
</template>


<script>

import { CRadio, CRadioGroup, CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CRadio,
        CRadioGroup,
        CFlex,
        CButton
    },
    data() {
        return {
            selected: '1'
        }
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>
