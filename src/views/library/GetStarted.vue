<template>
    <div>
        <h1 class="section-header">Setup</h1>
        <h6>Install library</h6>
        <div class="code-bg">yarn add chakra-ui</div>
        <h6>Download SCSS styles</h6>
        <c-button  marginTop="20px" marginBottom="32px" variant="solid"
            class="button-primary-md">
            Download</c-button>
        <c-divider class="section-divider" />
        <h6>Download visuals on Drive (images, icons)</h6>
        <c-button  marginTop="20px" marginBottom="32px" variant="solid"
            class="button-primary-md">
            Download</c-button>
        <c-divider class="section-divider" />

        <h6>Check the product requirements on Atlassian</h6>
        <c-button  marginTop="20px" marginBottom="60px" variant="solid"
            class="button-primary-md">
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


<style lang="scss">
@import '@/scss/styles.scss'
</style>

