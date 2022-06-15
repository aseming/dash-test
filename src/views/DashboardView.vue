<template>
    <div>
        <div class="content-header">
            <h2 class="testp">Hello</h2>
            <p class="chart-text-success">+8.19%</p>


            <c-flex>
                <c-box w="340px">
                    <c-input-group mx="16px">
                        <c-input placeholder="Search" class="input" />
                        <c-input-right-element>
                            <c-icon name="chevron-down" />
                        </c-input-right-element>
                    </c-input-group>
                </c-box>

                <div class="icon-box">
                    <img src="@/assets/icons/System/ellipsis.vertical.svg"  />
                </div>
            </c-flex>
        </div>

        <div class="content">
            <div class="chart-style">
                <c-flex justify="space-between">
                    <c-flex display="block">
                        <p class="chart-text-sub">Income</p>
                        <h3>$5.248</h3>
                        <p class="chart-text-success">+8.19%</p>
                    </c-flex>
                    <c-flex display="block">
                        <img src="@/assets/icons/Custom/Income.svg" />
                    </c-flex>
                </c-flex>
            </div>

            <div class="chart-style">
                <c-flex justify="space-between">
                    <c-flex display="block">
                        <p class="chart-text-sub">Orders</p>
                        <h3>206</h3>
                        <p class="chart-text-success">+15.21%</p>
                    </c-flex>
                    <c-flex display="block">
                        <img src="@/assets/icons/Custom/Orders.svg" />
                    </c-flex>
                </c-flex>
            </div>

            <div class="chart-style">
                <c-flex justify="space-between">
                    <c-flex display="block">
                        <p class="chart-text-sub">Vendors</p>
                        <h3>16</h3>
                        <c-flex gap="1">
                            <p class="chart-text-success">+4</p>
                            <p class="chart-text-sub">since yesterday</p>
                        </c-flex>

                    </c-flex>
                    <c-flex display="block">
                        <img src="@/assets/icons/Custom/Vendor.svg" />
                    </c-flex>
                </c-flex>
            </div>

            <div class="chart-style">
                <c-flex justify="space-between">
                    <c-flex display="block">
                        <p class="chart-text-sub">Customers</p>
                        <h3>142</h3>
                        <c-flex gap="1">
                            <p class="chart-text-fail">-8</p>
                            <p class="chart-text-sub">since yesterday</p>
                        </c-flex>
                    </c-flex>
                    <c-flex display="block">
                        <img src="@/assets/icons/Custom/Customer.svg" />
                    </c-flex>
                </c-flex>
            </div>



            <div class="chart-wide chart-style">
                <div class="chart-header">
                    <h6>Table</h6>
                    <div class="chart-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
            </div>
        </div>

        <div class="content2">
            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Chart</h6>
                    <div class="chart-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="chart-visual-bg">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Chart</h6>
                    <div class="chart-icon">
                        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </div>
                </div>
                <div class="chart-visual-bg">
                    <span class="chart-visual" />
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import {
    CBox,
    CFlex,
    CInput,
    CInputRightElement,
    CIcon,
    CInputGroup


} from "@chakra-ui/vue";

export default {
    components: {
        CBox,
        CFlex,
        CInput,
        CInputRightElement,
        CIcon,
        CInputGroup
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>

