<template>
    <div class="container-form">

        <div class="content-header2">
            <h2>Form</h2>
            <c-flex gap="16px">
                <c-button variant="solid" class="button-primary-sm">
                    Cancel</c-button>
                <c-button variant="outline" class="button-outline-sm" @click="show = !show">
                    Submit</c-button>
            </c-flex>
        </div>


        <div class="section">

            <c-box mb="24px">
                <h4>Title</h4>
            </c-box>
            <c-flex align="center">
                <p class="label-width">Label</p>
                <c-input placeholder="Placeholder" class="input-width" />
            </c-flex>

            <c-flex align="center">
                <p class="label-width">Label</p>
                <c-select placeholder="Select Option" class="input-width">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </c-select>
            </c-flex>

            <c-flex>
                <p class="label-width">Label</p>
                <c-form-control>
                    <c-input placeholder="Placeholder" class="input-width" />
                    <c-box mt="8px">
                        <c-form-helper-text>
                            We'll never share your email.
                        </c-form-helper-text>
                    </c-box>
                </c-form-control>
            </c-flex>

            <c-divider w="560px" mr="32px" my="32px" />



            <c-box mb="24px">
                <h4>Title</h4>
            </c-box>

            <c-flex align="flex-end">
                <p class="label-width">Label</p>
                <c-flex>
                    <c-form-control>
                        <c-flex justify="flex-end" width="400px" mb="8px">
                            <c-button class="button-link" variant="link">Button
                            </c-button>
                        </c-flex>
                        <c-input-group>
                            <c-input-left-element>
                                <c-icon name="phone" color="gray.300" />
                            </c-input-left-element>
                            <c-input type="phone" placeholder="Placeholder" />
                            <c-input-right-element>
                                <c-icon name="check" color="green.500" />
                            </c-input-right-element>
                        </c-input-group>
                    </c-form-control>
                </c-flex>
            </c-flex>

            <c-flex align="center">
                <p class="label-width">Label</p>
                <c-number-input>
                    <c-number-input-field />
                    <c-number-input-stepper>
                        <c-number-increment-stepper />
                        <c-number-decrement-stepper />
                    </c-number-input-stepper>
                </c-number-input>
            </c-flex>

            <c-flex>
                <p class="label-width">Label</p>
                <c-stack mt="8px">
                    <c-checkbox default-is-checked class="focus remove">Checkbox</c-checkbox>
                    <c-checkbox default-is-unchecked class="focus remove">Checkbox</c-checkbox>
                    <c-checkbox default-is-unchecked class="focus remove">Checkbox</c-checkbox>
                </c-stack>
            </c-flex>

            <c-flex align="flex-start">
                <p class="label-width">Label</p>
                <c-radio-group v-model="selected" mt="8px">
                    <c-radio value="1">Option 1</c-radio>
                    <c-radio value="2">Option 2</c-radio>
                    <c-radio value="2">Option 2</c-radio>
                </c-radio-group>
            </c-flex>

            <c-divider w="560px" mr="32px" my="32px" />




            <c-box mb="24px">
                <h4>Title</h4>
            </c-box>

            <c-flex align="center">
                <p class="label-width">Label</p>
                <c-slider @change="handleChange" :default-value="val" w="200px">
                    <c-slider-track />
                    <c-slider-filled-track />
                    <c-slider-thumb />
                </c-slider>
                <c-input :value="val" width="100px" ml="32px"></c-input>
            </c-flex>

            <c-flex align="center">
                <p class="label-width">Label</p>
                <c-switch size="lg" class="focus-remove" />
            </c-flex>

        </div>
    </div>


</template>

<script>
import {
    CButton,
    CFlex,
    CInput,
    CSelect,
    CBox,
    CFormControl,
    CFormHelperText,
    CDivider,
    CNumberInput,
    CNumberInputField,
    CNumberInputStepper,
    CNumberIncrementStepper,
    CNumberDecrementStepper,
    CInputGroup,
    CInputLeftElement,
    CInputRightElement,
    CIcon,
    CCheckbox,
    CStack,
    CRadio,
    CRadioGroup,
    CSlider,
    CSliderTrack,
    CSliderFilledTrack,
    CSliderThumb,
    CSwitch,

} from "@chakra-ui/vue";

export default {
    components: {
        CButton,
        CFlex,
        CInput,
        CSelect,
        CBox,
        CFormControl,
        CFormHelperText,
        CDivider,
        CNumberInput,
        CNumberInputField,
        CNumberInputStepper,
        CNumberIncrementStepper,
        CNumberDecrementStepper,
        CInputGroup,
        CInputLeftElement,
        CInputRightElement,
        CIcon,
        CCheckbox,
        CStack,
        CRadio,
        CRadioGroup,
        CSlider,
        CSliderTrack,
        CSliderFilledTrack,
        CSliderThumb,
        CSwitch,
    },
    data() {
        return {
            val: 15
        }
    },
    methods: {
        handleChange(val) {
            this.val = val
        }
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';


.container-form {
    background-color: white;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 32px;
    margin-top: 200px;
    margin-bottom: 48px;
}

.content-header2 {
    background-color: white;
    height: 88px;
    position: fixed;
    width: 80%;
    z-index: 3;
    margin-left: 1px;
    padding-inline: 32px;
    overflow: hidden;
    top: 73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
}

.label-width {
    width: 160px;
    line-height: 40px;
}

.input-width {
    width: 400px;
}
</style>


