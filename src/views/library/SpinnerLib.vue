<template>
    <div>
        <c-flex class="section-header">
            <h1>Spinner</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-spinner size="lg" />
        </div>

        <h6>Color</h6>
        <div class="component">
            <c-spinner size="lg" class="color" />
        </div>
    </div>
</template>



<script>

import { CSpinner, CButton, CFlex } from '@chakra-ui/vue'

export default {
    components: {
        CSpinner,
        CButton,
        CFlex
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>
