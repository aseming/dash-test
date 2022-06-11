<template>
    <div>
        <c-flex class="section-header">
            <h1>Sidemenu</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-button class="button-primary-md" @click="isOpen = true">Open Sidemenu</c-button>

            <c-drawer :placement="placement" :on-close="close" :isOpen="isOpen">
                <c-drawer-overlay />
                <c-drawer-content>
                     <c-drawer-close-button />
                    <c-drawer-header borderBottomWidth="1px">Basic Drawer</c-drawer-header>
                    <c-drawer-body>
                        <p>Some content</p>
                    </c-drawer-body>
                    <c-drawer-footer>
                        <c-button mr="3" @click="isOpen = false">Cancel</c-button>
                        <c-button variant-color="blue">Save</c-button>
                    </c-drawer-footer>
                </c-drawer-content>
            </c-drawer>
        </div>


    </div>
</template>



<script>

import {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CButton,
    CFlex
} from '@chakra-ui/vue';

export default {
    components: {
        CDrawer,
        CDrawerBody,
        CDrawerFooter,
        CDrawerHeader,
        CDrawerOverlay,
        CDrawerContent,
        CDrawerCloseButton,
        CButton,
        CFlex

    }, data() {
        return {
            isOpen: false,
            owner: 'jonathan'
        }
    },
    methods: {
        close() {
            this.isOpen = false
        }
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>
