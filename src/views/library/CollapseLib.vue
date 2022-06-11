<template>
    <div>
        <c-flex class="section-header">
            <h1>Collapse</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-button mb="16px" variant="solid" class="button-primary-md" @click="show = !show">
                Toggle
            </c-button>
            <c-collapse :is-open="show">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
            </c-collapse>
        </div>

    </div>
</template>



<script>

import { CCollapse, CButton, CFlex } from '@chakra-ui/vue';

export default {
    components: {
        CCollapse,
        CButton,
        CFlex
    },
    data() {
        return {
            show: false
        }
    }
}
</script>

