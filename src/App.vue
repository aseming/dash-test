<template>
  <body>
    <c-theme-provider>
      <c-reset />
      <div id="app">
        <header>
          <c-flex justify="space-between" align="center">
            <c-flex>
              <p class="logo">Design System</p>
            </c-flex>
            <c-flex marginRight="56px">
              <span :class="['nav - router', 'button-nav', 'active', { 'nav-active': index == 0 }]"
                @click="toggleMode(0)">Code</span>
              <span :class="['nav - router', 'button-nav', 'active', { 'nav-active': index == 1 }]"
                @click="toggleMode(1)">Design</span>
            </c-flex>
          </c-flex>
          <c-divider class="divider-header" />
        </header>
        <router-view />
      </div>
    </c-theme-provider>
  </body>
</template>



<script lang="js">
import { CThemeProvider, CReset, CDivider, CFlex } from "@chakra-ui/vue";


export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
    CDivider,
    CFlex
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
  },
  methods: {
    toggleMode(index) {
      this.index = index;
      if (index == 0) {
        this.$router.push('/')
      }
      else {
        this.$router.push('/des')
      }
    }
  },
  
};



</script>



