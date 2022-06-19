<template>
    <div>
        <div class="content-header">
            <h3>Table</h3>
            <c-flex gap="16px">
                <c-button left-icon="add" variant="solid" class="button-primary-sm">
                    Add Vendor</c-button>
                <c-button variant="outline" class="button-outline-sm" @click="show = !show">
                    Filters</c-button>
            </c-flex>
        </div>

        <c-collapse :is-open="show">
            <div class="collapse">
            </div>
        </c-collapse>

        <font-awesome-icon icon="fas fa-ellipsis-vertical" class="icon-color" size="lg" />
        <div class="testk chart-style">

           <Table1/> 
    
        </div>



    </div>


</template>

<script>

import {
    CFlex,
    CButton,
    CCollapse,

} from "@chakra-ui/vue";


import Table1 from "./Table1.vue";



export default {
    components: {
    CFlex,
    CButton,
    CCollapse,
    Table1
},
    data() {
        return {
            show: false
        }
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';



.testk {
    justify-content: center;
    margin-inline: 32px;

}


.margin-bottom {
    margin-bottom: 64px;
}

.collapse {
    margin-inline: 32px;
    margin-top: 32px;
    height: 80px;
    border-radius: 8px;
    padding: 24px;
    background-color: white;
    border: 1pt solid #30303020;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.03);
}
</style>

