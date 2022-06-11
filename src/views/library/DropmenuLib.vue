<template>
    <div>
        <c-flex class="section-header">
            <h1>Dropmenu</h1>
            <c-button as="a" class="button-outline-md" variant="outline" 
                href="https://github.com/nyrealman/design-system/blob/main/Web/Button.vue" is-external>
                GitHub
            </c-button>
        </c-flex>

        <h6>Default</h6>
        <div class="component">
            <c-box width="300px">
                <c-menu>
                    <c-menu-button right-icon="chevron-down" class="button-primary-md">
                        Actions
                    </c-menu-button>
                    <c-menu-list>
                        <c-menu-item>Option 1</c-menu-item>
                        <c-menu-item>Option 2</c-menu-item>
                        <c-menu-item>Option 3</c-menu-item>
                        <c-menu-item as="a" href="#">
                            Option 4
                        </c-menu-item>
                        <c-menu-item color="red.400">Delete</c-menu-item>
                    </c-menu-list>
                </c-menu>
            </c-box>
        </div>

        <h6>Multi</h6>
        <div class="component">
            <c-box width="300px">
                <c-menu :close-on-select="false">
                    <c-menu-button right-icon="chevron-down" class="button-primary-md">
                        Menu Item
                    </c-menu-button>
                    <c-menu-list min-width="240px">
                        <c-menu-option-group default-value="asc" title="Order" type="radio">
                            <c-menu-item-option value="asc">Ascending</c-menu-item-option>
                            <c-menu-item-option value="desc">Descending</c-menu-item-option>
                        </c-menu-option-group>
                        <c-menu-divider />
                        <c-menu-option-group title="Country" type="checkbox">
                            <c-menu-item-option value="email">Email</c-menu-item-option>
                            <c-menu-item-option value="phone">Phone</c-menu-item-option>
                            <c-menu-item-option value="country">Country</c-menu-item-option>
                        </c-menu-option-group>
                    </c-menu-list>
                </c-menu>
            </c-box>
        </div>

        <h6>Custom</h6>
        <div class="component">
            <c-box width="300px">
                <c-menu :close-on-select="false">
                    <c-menu-button right-icon="chevron-down" class="button-primary-md">
                        Menu Item
                    </c-menu-button>
                    <c-menu-list>
                        <c-box px="12px" paddingBottom="12px" paddingTop="6px">
                            <c-input-group>
                                <c-input-left-element>
                                    <c-icon name="phone" color="gray.300" />
                                </c-input-left-element>
                                <c-input placeholder="Search" />
                            </c-input-group>
                        </c-box>
                        <c-menu-item h="48px">
                            <c-avatar name="Evan You" size="sm" marginRight="8px"
                                src="https://bit.ly/chakra-evan-you" />
                            <span>Option 1</span>
                        </c-menu-item>
                        <c-menu-item h="40px">
                            <c-avatar name="Evan You" size="sm" marginRight="8px"
                                src="https://bit.ly/chakra-evan-you" />
                            <span>Option 2</span>
                        </c-menu-item>
                        <c-menu-item h="40px">
                            <c-avatar name="Evan You" size="sm" marginRight="8px"
                                src="https://bit.ly/chakra-evan-you" />
                            <span>Option 3</span>
                        </c-menu-item>
                    </c-menu-list>
                </c-menu>
            </c-box>
        </div>
    </div>
</template>



<script>

import {
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CBox,
    CMenuOptionGroup,
    CMenuItemOption,
    CFlex,
    CButton,
    CAvatar,
    CInputLeftElement,
    CIcon,
    CInputGroup,
    CInput

} from "@chakra-ui/vue";

export default {
    components: {
        CMenu,
        CMenuButton,
        CMenuList,
        CMenuItem,
        CBox,
        CMenuOptionGroup,
        CMenuItemOption,
        CButton,
        CFlex,
        CAvatar,
        CInputLeftElement,
        CIcon,
        CInputGroup,
        CInput
    }
}
</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>