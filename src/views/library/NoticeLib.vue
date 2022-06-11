<template>
    <div>
        <c-flex class="section-header">
            <h1>Notice</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Info</h6>
        <div class="component">
            <c-button @click="showToastInfo" class="button-primary-md">Show Toast</c-button>
        </div>

        <h6>Success</h6>
        <div class="component">
            <c-button @click="showToastSuccess" class="button-primary-md">Show Toast</c-button>
        </div>

        <h6>Error</h6>
        <div class="component">
            <c-button @click="showToastError" class="button-primary-md">Show Toast</c-button>
        </div>
    </div>
</template>



<script>

import { CButton, CFlex } from '@chakra-ui/vue'

export default {
    components: {
        CButton,
        CFlex
    },
    methods: {
        showToastInfo() {
            this.$toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'info',
                duration: 3000,
                position: 'top-right'
            })
        },
        showToastSuccess() {
            this.$toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                position: 'top-right'
            })
        },
        showToastError() {
            this.$toast({
                title: 'Warning.',
                description: "You're almost out of storage.",
                status: 'error',
                duration: 3000,
                position: 'top-right'
            })
        },
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>
