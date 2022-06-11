<template>
    <div>
        <c-flex class="section-header">
            <h1>Switch</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-switch size="lg" class="focus-remove" />
        </div>

        <h6>Default with text</h6>
        <div class="component">
            <c-flex justify-content="space-between">
                <c-form-label html-for="email-alerts">Enable email alerts?</c-form-label>
                <c-switch id="email-alerts" size="lg" />
            </c-flex>
        </div>
    </div>
</template>



<script>

import { CSwitch, CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CSwitch,
        CFlex,
        CButton
    }
}
</script>
