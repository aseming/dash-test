<template>
    <div>
        <c-flex class="section-header">
            <h1>Tags</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-switch size="lg" class="focus-remove" />
        </div>

    </div>
</template>



<script>

import { CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CFlex,
        CButton
    }
}
</script>
