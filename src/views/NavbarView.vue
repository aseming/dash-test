<template>
    <nav>
        <c-flex align="center">

            <font-awesome-icon icon="fa-solid fa-bars" class="icon-color" />

            <c-input-group marginLeft="24px">
                <c-input placeholder="Search" class="input-search" />
                <c-input-right-element>
                    <font-awesome-icon icon="fa-solid fa-search" class="icon-color-search" />
                </c-input-right-element>
            </c-input-group>
        </c-flex>

        <c-flex>
            <div class="nav-user">
                <c-text class="nav-user-hide">John Doe</c-text>
                <c-avatar name="Evan You" src="https://bit.ly/chakra-evan-you" w="40px" h="40px" />
            </div>
        </c-flex>
    </nav>
</template>



<script>

import {
    CInput,
    CInputRightElement,
    CInputGroup,
    CFlex,
    CAvatar,
    CText

} from "@chakra-ui/vue";

export default {
    components: {
        CInput,
        CInputRightElement,
        CInputGroup,
        CFlex,
        CAvatar,
        CText
    }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';




nav {
    background-color: white;
    height: 72px;
    position: fixed;
    width: 80%;
    z-index: 3;
    margin-left: 257px;
    padding-inline: 32px;
    overflow: hidden;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
}

.nav-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
</style>
