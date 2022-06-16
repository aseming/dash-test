<template>
  <div class="sidenav">

    <div class="sidenav-logo-bg logo-bg">
      <img src="@/assets/icons/Custom/logo.svg" />
      <h4>FoodGo</h4>
    </div>

    <c-box mt="64px">
      <router-link class="sidenav-button active" to="/">
        <div class="sidenav-icon-bg">
          <font-awesome-icon icon="fas fa-pie-chart" class="icon-color" size="lg" />
        </div>
        <div class="hide">Dashboard</div>
      </router-link>

      <router-link class="sidenav-button active" to="/table">
        <div class="sidenav-icon-bg">
          <font-awesome-icon icon="fas fa-table-list" class="icon-color" size="lg" />
        </div>
        <div class="hide">Table</div>
      </router-link>

      <router-link class="sidenav-button active" to="/form">

        <div class="sidenav-icon-bg">
          <font-awesome-icon icon="fas fa-square-check" class="icon-color" size="lg" />
        </div>
        <div class="hide">Form</div>
      </router-link>
    </c-box>





  </div>
</template>



<script>

import {
  CBox

} from "@chakra-ui/vue";

export default {
  components: {
    CBox
  }
}
</script>


<style lang="scss">
@import '@/scss/styles.scss';


.sidenav {
  grid-area: sidenav;
  background-color: white;
  height: 100vh;
  position: sticky;
  top: 0px;
  outline: 1pt solid #f0f0f0;
}


.sidenav-logo-bg {
  background-color: white;
  width: 256px;
  height: 72px;
  outline: 1pt solid #f0f0f0;
  top: 0;
}


.sidenav-button {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-block: 8px;
  margin-inline: 32px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: $icon-secondary-hover;
    border-radius: 8px;
  }

  &:focus-visible {
    outline: 3px solid $main-focus;
    border-radius: 8px;
  }
}

.sidenav-button.router-link-active.router-link-exact-active {
  cursor: pointer;
  color: $main-color;
  background-color: $sidenav-button-active;
  border-radius: 8px;
  font-weight: 500;

  .icon-color {
    color: $main-color;
  }
}


.sidenav-icon-bg {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-bg {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 32px;
}
</style>
