<template>

  <body>
    <c-theme-provider>
      <c-reset />
      <div>
        <div class="container">
          <SidenavView />
          <router-view />
        </div>
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
    SidenavView,
  }

};

</script>



<style lang="scss">
@import '@/scss/styles.scss'
</style>




