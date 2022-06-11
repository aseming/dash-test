<template>
    <div>
        <c-flex class="section-header">
            <h1>Slider</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-slider default-value="56">
                <c-slider-track />
                <c-slider-filled-track />
                <c-slider-thumb />
            </c-slider>
        </div>

        <h6>With label</h6>
        <div class="component">
            <c-stack>
                <c-form-control>
                    <c-flex justify-content="space-between">
                        <c-form-label width="100px">Label</c-form-label>
                        <c-input :value="val" width="100px"></c-input>
                    </c-flex>
                </c-form-control>


                <c-slider @change="handleChange" :default-value="val">
                    <c-slider-track />
                    <c-slider-filled-track />
                    <c-slider-thumb />
                </c-slider>
            </c-stack>
        </div>
    </div>
</template>



<script>

import {
    CSlider,
    CSliderTrack,
    CSliderFilledTrack,
    CSliderThumb,
    CInput,
    CFormLabel,
    CFlex,
    CFormControl,
    CButton
} from '@chakra-ui/vue';

export default {
    components: {
        CSlider,
        CSliderTrack,
        CSliderFilledTrack,
        CSliderThumb,
        CInput,
        CFormLabel,
        CFlex,
        CFormControl,
        CButton

    }, data() {
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


