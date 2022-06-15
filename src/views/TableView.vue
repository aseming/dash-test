<template>
    <div>
        <c-grid template-columns="repeat(5, 1fr)" gap="6">
            <c-grid-item col-span="2" h="10" bg="blue.300" />
            <c-grid-item col-start="4" col-end="6" h="10" bg="red.300" />
        </c-grid>

    </div>


</template>

<script>
import { CGrid, CGridItem } from '@chakra-ui/vue'

export default {
    components: {
        CGrid,
        CGridItem

    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>

