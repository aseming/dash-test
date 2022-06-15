<template>
    <c-flex justify="space-between" align="center" mx="32px" mb="32px" mt="32px">
        <c-flex gap="8px">
            <img src="@/assets/icons/System/dash.svg" />
            <div class="hide">
                <h4>FoodGo</h4>
            </div>
        </c-flex>
        <c-flex>
            <font-awesome-icon icon="fa-solid fa-bars" />
        </c-flex>

    </c-flex>
</template>



<script>

import {
    CFlex

} from "@chakra-ui/vue";

export default {
    components: {
        CFlex
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>
