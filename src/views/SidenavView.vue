<template>
    <div class="sidenav">



            <div class="logo-bg">
                <c-flex gap="16px" justify="space-between" align="center">
                    <img src="@/assets/icons/Custom/logo.svg" />
                    <div class="hide">
                        <h6>FoodGo</h6>
                    </div>
                </c-flex>
                <font-awesome-icon icon="fa-solid fa-bars" />
            </div>

            <div class="sidenav-search">
                <c-input-group>
                    <c-input placeholder="Search" class="input-search" />
                    <c-input-right-element>
                        <font-awesome-icon icon="fa-solid fa-search" class="icon-color" />
                    </c-input-right-element>
                </c-input-group>
            </div>

            <router-link class="sidenav-button active" to="/">
                <div class="sidenav-icon-bg">
                    <img src="@/assets/icons/System/dash.svg" />

                </div>
                <div class="hide">Dashboard</div>
            </router-link>

            <router-link class="sidenav-button active" to="/table">
                <div class="sidenav-icon-bg">
                    <img src="@/assets/icons/System/table.svg" />
                </div>
                <div class="hide">Table</div>
            </router-link>

            <router-link class="sidenav-button active" to="/form">

                <div class="sidenav-icon-bg">
                    <img src="@/assets/icons/System/form.svg" />
                </div>
                <div class="hide">Form</div>
            </router-link>

            <router-link class="sidenav-button active" to="/notifications">
                <div class="sidenav-icon-bg">
                    <img src="@/assets/icons/System/bell.fill.svg" />
                </div>
                <div class="hide">Notifications</div>
            </router-link>


        <c-flex marginTop="130%">
            <div class="sidenav-user">
                <c-avatar name="Evan You" src="https://bit.ly/chakra-evan-you" w="40px" h="40px" />
                <c-box>
                    <c-text fontWeight="600" marginBottom="-2px">John Doe</c-text>
                    <c-text fontSize="0.875rem">Manager</c-text>
                </c-box>
            </div>
        </c-flex>



    </div>
</template>



<script>

import {
    CFlex,
    CInput,
    CInputRightElement,
    CInputGroup,
    CAvatar,
    CText

} from "@chakra-ui/vue";

export default {
    components: {
        CFlex,
        CInput,
        CInputRightElement,
        CInputGroup,
        CAvatar,
        CText
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss'
</style>
