<template>
    <div>
        <c-button @click="chakraToggleColorMode">
            Chakra ColorMode: {{ chakraColorMode }}
        </c-button>


        <div class="content-header">
            <h3>Title</h3>
            <c-flex gap="16px">
                <c-button left-icon="add" variant="solid" class="button-primary-sm">
                    Add Chart</c-button>
                <c-menu>
                    <c-menu-button class="header-icon" bg="transparent">
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
            <div class="chart-style small">
            </div>

            <div class="chart-style small">
            </div>

            <div class="chart-style small">
            </div>

            <div class="chart-style small">
            </div>



            <div class="chart-wide chart-style">
                <div class="chart-header">
                    <h6>Table</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="transparent">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
                <Table1 />
            </div>

            <div class="chart-wide chart-style">
                <div class="chart-header">
                    <h6>Bar</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="transparent">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
                <BarChart />
            </div>
        </div>

        <div class="content2">

            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Bar2</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="transparent">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
                <BarChart />
            </div>

            <div class="chart-wide2 chart-style">
                <div class="chart-header">
                    <h6>Chart</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="transparent">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
            </div>

            <div class="chart-wide chart-style">
                <div class="chart-header">
                    <h6>Pie</h6>
                    <c-menu>
                        <c-menu-button class="chart-icon" bg="transparent">
                            <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
                        </c-menu-button>
                        <c-menu-list min-width="40px">
                            <c-menu-item>Option 1</c-menu-item>
                            <c-menu-item>Option 2</c-menu-item>
                            <c-menu-item>Option 3</c-menu-item>
                        </c-menu-list>
                    </c-menu>
                </div>
                <Doughnut />
            </div>


        </div>
    </div>
</template>

<script>


import {
    CFlex,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CButton
} from "@chakra-ui/vue";

import Table1 from "./Table1.vue";
import BarChart from "./BarChart.vue";
import Doughnut from "./Doughnut.vue";



export default {
    components: {
    CFlex,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CButton,
    Table1,
    BarChart,
    Doughnut
},
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode() {
            return this.$chakraColorMode()
        }
    },
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';




.chart-visual-bg {
    display: flex;
    justify-content: center;
    margin-top: 32px;
}

.chart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}


.chart-style {
    border-radius: 16px;
    padding: 24px;
    background-color: white;
    border: 1pt solid #f0f0f0;
    /* -webkit-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1); */
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.02);
}

.small {
    height: 200px;
}


.chart-wide {
    grid-column: 1 / -1;
}

.chart-wide2 {
    grid-column: 2fr 2fr;
}





.chart-visual {
    height: 140px;
    width: 140px;
    background-color: gold;
    display: inline-block;
    border-radius: 100%;
}


.header-icon {
    width: 40px;
    height: 40px;
    color: white;
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

