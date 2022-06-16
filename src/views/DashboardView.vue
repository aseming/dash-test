<template>
    <div>
        <div class="content-header">
            <h2>Hello Boss</h2>
            <c-flex>
                <c-box w="340px">
                    <c-input-group mx="16px">
                        <c-input placeholder="Search" class="input" />
                        <c-input-right-element>
                            <c-icon name="chevron-down" />
                        </c-input-right-element>
                    </c-input-group>
                </c-box>

                <c-menu>
                    <c-menu-button class="header-icon">
                        <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                    </c-menu-button>
                    <c-menu-list min-width="40px">
                        <c-menu-item>Option 1</c-menu-item>
                        <c-menu-item>Option 2</c-menu-item>
                        <c-menu-item>Option 3</c-menu-item>
                    </c-menu-list>
                </c-menu>

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
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="red.200">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
            </div>
        </div>

        <div class="content2">
            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Chart</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
                <div class="chart-visual-bg">
                    <span class="chart-visual" />
                </div>
            </div>

            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Chart</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
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
    CInputGroup,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,




} from "@chakra-ui/vue";


export default {
    components: {
        CBox,
        CFlex,
        CInput,
        CInputRightElement,
        CIcon,
        CInputGroup,
        CMenu,
        CMenuButton,
        CMenuList,
        CMenuItem,
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';


.chart {
    height: 240px;
}

.chart-visual-bg {
    display: flex;
    justify-content: center;
    margin-top: 32px;
}

.chart-header {
    display: flex;
    justify-content: space-between;
}


.chart-text-success {
    color: $success;
    font-weight: 700;
}

.chart-text-fail {
    color: $error;
    font-weight: 700;
}

.chart-text-sub {
    color: $label-secondary;
}

.chart-style {
    border-radius: 16px;
    padding: 24px;
    background-color: white;
    border: 1pt solid #f0f0f0;
    /* -webkit-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1); */
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.02);
}


.chart-wide {
    grid-column: 1 / -1;
    height: 280px;
}


.chart-wide2 {
    grid-template-columns: 2fr 2fr;
}


.chart-visual {
    height: 120px;
    width: 120px;
    background-color: gold;
    display: inline-block;
    border-radius: 100%;
}


.header-icon {
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    border-radius: 8px;
    border: 1pt solid $stroke-default;

    &:hover {
        background-color: $icon-secondary-hover;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:focus-visible {
        outline: 3px solid $button-secondary-hover;
        background-color: $button-secondary-hover;
    }

    &:active {
        transform: scale(.90);
    }
}



.chart-icon {
    width: 40px;
    height: 40px;
    
    &:hover {
        border-radius: 8px;
        background-color: $icon-secondary-hover;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:focus-visible {
        outline: 3px solid $button-secondary-hover;
        background-color: $button-secondary-hover;
    }

    &:active {
        transform: scale(.90);
    }

}
</style>

