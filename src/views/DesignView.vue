<template>
    <div>
        <div class="sidenav">
           <p class="sidenav-title">Getting Started</p>
           <router-link class="button-sidenav active" to="/des">Resources</router-link>

            <p class="sidenav-title">General</p>
            <router-link class="button-sidenav active" to="/des/typo">Typography</router-link>
            <router-link class="button-sidenav active" to="/des/color">Color</router-link>
            <router-link class="button-sidenav active" to="/des/icons">Icons</router-link>
            <router-link class="button-sidenav active" to="/des/grid">Grid</router-link>

            <p class="sidenav-title">Components</p>
            <router-link class="button-sidenav active" to="/des/button">Button</router-link>
            <p class="sidenav-title">Patterns</p>
            <router-link class="button-sidenav active" to="/des/dashboard">Dashboard</router-link>
            <router-link class="button-sidenav active" to="/des/form">Form</router-link>
            <router-link class="button-sidenav active" to="/des/table">Table</router-link>
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




<style lang="scss">
@import '@/scss/styles.scss'
</style>
