

<template>
    <div>
        <c-flex class="section-header">
            <h1>Table B</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <TableB/>

    </div>
</template>



<script >
import { CFlex, CButton } from "@chakra-ui/vue";
import TableB from "@/views/library/TableB.vue";

export default {
    components: {
        CFlex,
        CButton,
        TableB
    }
}
</script>


