<template>
    <div>
        <c-flex class="section-header">
            <h1>Avatar</h1>
            <c-button as="a" class="button-outline-md" variant="outline"
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>
        
        <h6>Default</h6>
        <div class="component">
            <c-avatar name="Evan You" src="https://bit.ly/chakra-evan-you" />
        </div>

        <h6>With badge</h6>
        <div class="component">
            <c-avatar name="Naruto Uzumaki" src="https://bit.ly/chakra-naruto-uzumaki">
                <c-avatar-badge size="1.0em" bg="green.500" />
            </c-avatar>
        </div>

    </div>
</template>



<script>

import { CAvatar, CAvatarBadge, CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CAvatar,
        CAvatarBadge,
        CFlex,
        CButton
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>

