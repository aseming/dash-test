<template>
    <div>
        <c-flex class="section-header">
            <h1>Progress</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-progress :value="80" size="sm" />
        </div>

        <h6>With text</h6>
        <div class="component">
            <c-stack>
                <c-flex justify-content="space-between">
                    <p>Label</p>
                    <p>Value</p>
                </c-flex>
                <c-progress :value="80" size="sm" mt="8px" />
            </c-stack>
        </div>
    </div>
</template>



<script>

import { CProgress, CFlex, CButton } from '@chakra-ui/vue'

export default {
    components: {
        CProgress,
        CFlex,
        CButton
    }
}
</script>


