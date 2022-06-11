<template>
    <div>
        <div class="sidenav">
            <p class="sidenav-title">Getting Started</p>
            <router-link class="button-sidenav active" to="/">Setup</router-link>
            <p class="sidenav-title">Components</p>
            <router-link class="button-sidenav active" to="/lib/avatar">Avatar</router-link>
            <router-link class="button-sidenav active" to="/lib/badge">Badge</router-link>
            <router-link class="button-sidenav active" to="/lib/button">Button</router-link>
            <router-link class="button-sidenav active" to="/lib/checkbox">Checkbox</router-link>
            <router-link class="button-sidenav active" to="/lib/collapse">Collapse</router-link>
            <router-link class="button-sidenav active" to="/lib/dropmenu">Dropmenu</router-link>
            <router-link class="button-sidenav active" to="/lib/input">Input</router-link>
            <router-link class="button-sidenav active" to="/lib/modal">Modal</router-link>
            <router-link class="button-sidenav active" to="/lib/notice">Notice</router-link>
            <router-link class="button-sidenav active" to="/lib/pagination">Pagination</router-link>
            <router-link class="button-sidenav active" to="/lib/popover">Popover</router-link>
            <router-link class="button-sidenav active" to="/lib/progress">Progress</router-link>
            <router-link class="button-sidenav active" to="/lib/radio">Radio</router-link>
            <router-link class="button-sidenav active" to="/lib/sidemenu">Sidemenu</router-link>
            <router-link class="button-sidenav active" to="/lib/selector">Selector</router-link>
            <router-link class="button-sidenav active" to="/lib/slider">Slider</router-link>
            <router-link class="button-sidenav active" to="/lib/spinner">Spinner</router-link>
            <router-link class="button-sidenav active" to="/lib/switch">Switch</router-link>
            <router-link class="button-sidenav active" to="/lib/table">Table</router-link>
            <router-link class="button-sidenav active" to="/lib/tableb">Table B</router-link>
            <router-link class="button-sidenav active" to="/lib/tabs">Tabs</router-link>
            <router-link class="button-sidenav active" to="/lib/tags">Tags</router-link>
            <p class="sidenav-title">Templates</p>
        </div>
        
        <c-flex class="section">
            <div>
                <router-view />
            </div>
        </c-flex>
    </div>
</template>

<script>
import { CFlex } from "@chakra-ui/vue";

export default {
    components: {
        CFlex
    }
}
</script>


<style>
.test5 {
    justify-content: center;
    margin-left: 300px;
}
</style>

