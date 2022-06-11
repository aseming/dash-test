<template>
    <div>
        <c-flex class="section-header">
            <h1>Badge</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-stack margin="20px">
                <c-badge mx="2">Default</c-badge>
                <c-badge mx="2" variant-color="green">Success</c-badge>
                <c-badge mx="2" variant-color="red">Removed</c-badge>
                <c-badge mx="2" variant-color="indigo">New</c-badge>
            </c-stack>
        </div>

        <h6>Composition</h6>
        <div class="component">
            <c-flex>
                <c-avatar src="https://bit.ly/chakra-jonathan-bakebwa" />
                <c-box ml="3">
                    <c-text font-weight="bold">
                        Jonathan Bakebwa
                        <c-badge ml="1" variant-color="green">
                            New
                        </c-badge>
                    </c-text>
                    <c-text font-size="sm">UI Engineer</c-text>
                </c-box>
            </c-flex>
        </div>
    </div>
</template>



<script>

import {
    CBadge,
    CBox,
    CFlex,
    CText,
    CAvatar,
    CButton
} from "@chakra-ui/vue";

export default {
    components: {
        CBadge,
        CBox,
        CFlex,
        CText,
        CAvatar,
        CButton
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>
