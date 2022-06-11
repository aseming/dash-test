<template>
    <div>
        <h1 class="section-header">Avatar Design</h1>
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

import { CAvatar, CAvatarBadge } from "@chakra-ui/vue";

export default {
    components: {
        CAvatar,
        CAvatarBadge
    }
}
</script>

