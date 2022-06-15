<template>
  <body>
    <c-theme-provider>
      <c-reset />

      <div class="container">
        
        <div class="sidenav">
          <LogoView />
          <InputView />

          <router-link class="sidenav-button active" to="/">
            <div class="sidenav-icon-bg">
              <img src="@/assets/icons/System/dash.svg"/>
              
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

          


        </div>
        <router-view />
      </div>

    </c-theme-provider>
  </body>
</template>


<script lang="js">
import { CThemeProvider, CReset, } from "@chakra-ui/vue";
import InputView from "./views/InputView.vue";
import LogoView from "./views/LogoView.vue";


export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
    InputView,
    LogoView
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




