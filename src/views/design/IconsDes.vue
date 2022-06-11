<template>
    <div>
        <h1 class="section-header">Icons</h1>
        <h6>Font Awesome</h6>
        <div class="component">
            <c-flex justify="space-between">
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-plus" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-xmark" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-check" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-search" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-trash" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-bell" size="lg" />
                </c-div>
            </c-flex>
            <c-divider marginBottom="20px" borderColor="white" />

            <c-flex justify="space-between">
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-chevron-down" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-chevron-up" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-arrow-down" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-arrow-up" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" size="lg" />
                </c-div>
            </c-flex>
             <c-divider marginBottom="20px" borderColor="white" />

            <c-flex justify="space-between">
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-clock" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-user" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-paperclip" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-circle-info" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-calendar-days" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-chart-simple" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-heart" size="lg" />
                </c-div>
                <c-div class="size">
                    <font-awesome-icon icon="fa-solid fa-wrench" size="lg" />
                </c-div>
            </c-flex>
           

        </div>

    </div>
</template>



<script>

import { CFlex, CDivider } from "@chakra-ui/vue";

export default {
    components: {
        CFlex,
        CDivider
    }
}
</script>

