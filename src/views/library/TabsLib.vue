<template>
    <div>
        <c-flex class="section-header">
            <h1>Tabs</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-box w="600px">
                <c-tabs>
                    <c-tab-list>
                        <c-tab>Tab 1</c-tab>
                        <c-tab>Tab 2</c-tab>
                        <c-tab>Tab 3</c-tab>
                    </c-tab-list>
                    <c-tab-panels mt="24px">
                        <c-tab-panel>
                            <p>Content 1</p>
                        </c-tab-panel>
                        <c-tab-panel>
                            <p>Content 2</p>
                        </c-tab-panel>
                        <c-tab-panel>
                            <p>Content 3</p>
                        </c-tab-panel>
                    </c-tab-panels>
                </c-tabs>
            </c-box>
        </div>
    </div>
</template>



<script>

import {
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    CButton,
    CFlex
} from '@chakra-ui/vue'

export default {
    components: {
        CTabs,
        CTabList,
        CTabPanels,
        CTab,
        CTabPanel,
        CButton,
        CFlex
    }
}
</script>


