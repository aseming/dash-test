<template>
    <div>
        <c-flex class="section-header">
            <h1>Selector</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-box w="300px">
                <c-select placeholder="Select Option">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </c-select>
            </c-box>
        </div>

        <h6>With label</h6>
        <div class="component">
            <c-stack>
                <c-box mb="8px">
                    <c-form-label class="font-weight-label">Label</c-form-label>
                </c-box>
                <c-box w="300px">
                    <c-select placeholder="Select Option">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </c-select>
                </c-box>
            </c-stack>
        </div>
    </div>
</template>



<script>

import { CSelect, CBox, CFlex, CButton } from "@chakra-ui/vue";

export default {
    components: {
        CSelect,
        CBox,
        CFlex,
        CButton
    }
}
</script>

