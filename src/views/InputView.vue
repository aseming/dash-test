<template>
    <div>
        
        <c-input-group mx="32px" mb="32px">
            <c-input placeholder="Search" class="input-search" />
            <c-input-right-element>
                <c-icon icon="search" class="input-search"/>
            </c-input-right-element>
        </c-input-group>
    </div>
</template>



<script>

import {
    CInput,
    CInputRightElement,
    CIcon,
    CInputGroup

} from "@chakra-ui/vue";

export default {
    components: {
        CInput,
        CInputRightElement,
        CIcon,
        CInputGroup
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>
