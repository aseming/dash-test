<template>
    <div>
        <c-flex class="section-header">
            <h1>Input</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-input placeholder="Placeholder" width="400px" />
        </div>

        <h6>With label</h6>
        <div class="component">
            <c-form-control>
                <c-box mb="8px">
                    <c-form-label class="font-weight-label">Label</c-form-label>
                </c-box>
                <c-input placeholder="Placeholder" width="400px" />
            </c-form-control>
        </div>

        <h6>With description</h6>
        <div class="component">
            <c-form-control>
                <c-input placeholder="Placeholder" width="400px" />
                <c-box mt="8px">
                    <c-form-helper-text>
                        We'll never share your email.
                    </c-form-helper-text>
                </c-box>
            </c-form-control>
        </div>

        <h6>Disabled</h6>
        <div class="component">
            <c-input placeholder="Placeholder" is-disabled width="400px" />
        </div>

        <h6>Error</h6>
        <div class="component">
            <c-input placeholder="Placeholder" is-invalid width="400px" />
        </div>

        <h6>Number</h6>
        <div class="component">
            <c-number-input>
                <c-number-input-field />
                <c-number-input-stepper>
                    <c-number-increment-stepper />
                    <c-number-decrement-stepper />
                </c-number-input-stepper>
            </c-number-input>
        </div>

        <h6>Custom</h6>
        <div class="component">
            <c-flex>
                <c-form-control>
                    <c-flex justify-content="space-between" width="400px" mb="8px">
                        <c-form-label class="font-weight-label">Label</c-form-label>
                        <c-button class="button-link" variant="link">Button
                        </c-button>
                    </c-flex>
                    <c-input-group>
                        <c-input-left-element>
                            <c-icon name="phone" color="gray.300" />
                        </c-input-left-element>
                        <c-input type="phone" placeholder="Placeholder" />
                         <c-input-right-element><c-icon name="check" color="green.500" /></c-input-right-element>
                    </c-input-group>
                </c-form-control>
            </c-flex>
        </div>

    </div>
</template>



<script>

import {
    CInput,
    CBox,
    CFlex,
    CButton,
    CNumberInput,
    CNumberInputField,
    CNumberInputStepper,
    CNumberIncrementStepper,
    CNumberDecrementStepper,
    CInputLeftElement,
    CInputRightElement,
    CIcon,
    CInputGroup

} from "@chakra-ui/vue";

export default {
    components: {
        CInput,
        CBox,
        CFlex,
        CButton,
        CNumberInput,
        CNumberInputField,
        CNumberInputStepper,
        CNumberIncrementStepper,
        CNumberDecrementStepper,
        CInputLeftElement,
        CInputRightElement,
        CIcon,
        CInputGroup
    },
    data() {
        return {
            value: 15
        }
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>
