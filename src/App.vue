<template>
  <body>
    <c-theme-provider>
      <c-reset />

      <div class="container">
          <SidenavView/>
        <router-view />
      </div>

    </c-theme-provider>
  </body>
</template>


<script lang="js">
import { CThemeProvider, CReset, } from "@chakra-ui/vue";
import SidenavView from "./views/SidenavView.vue";


export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
    SidenavView
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




