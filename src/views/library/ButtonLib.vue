<template>
    <div>
        <c-flex class="section-header">
            <h1>Button</h1>
            <c-button as="a" class="button-outline-md" variant="outline"
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Primary with icon (medium)</h6>
        <div class="component">
            <c-button left-icon="add" variant="solid" class="button-primary-md">
                Button</c-button>
        </div>

        <h6>Primary (medium)</h6>
        <div class="component">
            <c-button variant="solid" class="button-primary-md">Button
            </c-button>
        </div>

        <h6>Disabled</h6>
        <div class="component">
            <c-button variant="solid" is-disabled class="button-primary-md">Button
            </c-button>
        </div>

        <h6>Secondary with icon (medium)</h6>
        <div class="component">
            <c-button left-icon="add" class="button-outline-md" variant="outline">
                Button</c-button>
        </div>

        <h6>Secondary (medium)</h6>
        <div class="component">
            <c-button class="button-outline-md" variant="outline">Button
            </c-button>
        </div>

        <h6>Primary with icon (small)</h6>
        <div class="component">
            <c-button size="sm" left-icon="add" class="button-primary-sm" variant="solid">Button</c-button>
        </div>

        <h6>Primary (small)</h6>
        <div class="component">
            <c-button size="sm" class="button-primary-sm" variant="solid">
                Button</c-button>
        </div>

        <h6>Secondary with icon (small)</h6>
        <div class="component">
            <c-button size="sm" left-icon="add" class="button-outline-sm" variant="outline">Button</c-button>
        </div>

        <h6>Secondary (small)</h6>
        <div class="component">
            <c-button size="sm" class="button-outline-sm" variant="outline">
                Button</c-button>
        </div>

        <h6>Ghost with icon</h6>
        <div class="component">
            <c-button left-icon="add" class="button-ghost-md" variant="ghost">
                Button</c-button>
        </div>

        <h6>Ghost</h6>
        <div class="component">
            <c-button class="button-ghost-md" variant="ghost">Button
            </c-button>
        </div>

        <h6>Link</h6>
        <div class="component">
            <c-button class="button-link" variant="link">Button
            </c-button>
        </div>

    </div>
</template>



<script>
import { CButton, CFlex } from "@chakra-ui/vue";

export default {
    components: {
        CButton,
        CFlex
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>
