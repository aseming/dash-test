<template>
    <div>
        <div class="content-header">
            <h2>Hello</h2>

            <c-flex gap="16px">
                <c-box w="340px">
                    <c-select placeholder="Jun 10, 2022 – Jun 10, 2022 | Today">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </c-select>
                </c-box>
                <c-button as="a" class="button-primary-sm">
                    Button
                </c-button>
            </c-flex>
        </div>

        <div class="content">
            <div class="section">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="section-wide">Content5</div>
        </div>

        <div class="content2">
            <div class="section-wide2">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="section-wide2">
                <div class="section-header">
                    <h6>Chart</h6>
                    <div class="section-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="section-chart">
                    <span class="chart-visual" />
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import {
    CBox,
    CSelect,
    CFlex,
    CButton


} from "@chakra-ui/vue";

export default {
    components: {
        CBox,
        CSelect,
        CFlex,
        CButton
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>

