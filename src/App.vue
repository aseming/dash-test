<template>
  <body>
    <c-theme-provider>
      <c-reset />

      <div class="container">
        <nav></nav>
        <div class="sidenav">
          <router-link class="button-sidenav active" to="/">Dashboard</router-link>
          <router-link class="button-sidenav active" to="/table">Table</router-link>
          <router-link class="button-sidenav active" to="/form">Form</router-link>
        </div>
        <router-view />
      </div>

    </c-theme-provider>
  </body>
</template>


<script lang="js">
import { CThemeProvider, CReset, } from "@chakra-ui/vue";


export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
  },
  data() {
    return {
      index: 0
    };
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    }
  }

};

</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>




