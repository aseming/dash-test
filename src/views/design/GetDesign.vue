<template>
    <div>
        <h1 class="section-header">Design</h1>
        <h6>Get Figma file</h6>
        <c-button marginTop="20px" marginBottom="32px" variant="solid" class="button-primary-md">
            Get</c-button>
        <c-divider width="600px" marginBottom="32px" borderColor="#c7c7c7" />

        <h6>Use design files on Drive (icons, images, fonts etc)</h6>
        <c-button marginTop="20px" marginBottom="32px" variant="solid" class="button-primary-md">
            Open</c-button>
        <c-divider width="600px" marginBottom="32px" borderColor="#c7c7c7" />

        <h6>Check BRD on Atlassian</h6>
        <c-button marginTop="20px" marginBottom="32px" variant="solid" class="button-primary-md">
            Check</c-button>
        <c-divider width="600px" marginBottom="32px" borderColor="#c7c7c7" />

        <h6>Check PRD on Atlassian</h6>
        <c-button marginTop="20px" marginBottom="60px" variant="solid" class="button-primary-md">
            Check</c-button>

    </div>


</template>

<script>
import { CButton, CDivider } from "@chakra-ui/vue";

export default {
    components: {
        CButton,
        CDivider
    }
}
</script>




