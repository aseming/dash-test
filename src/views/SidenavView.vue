<template>

  <div class="sidenav">
    

    <div class="sidenav-header">
      <div class="logo-bg hide">
        <img src="@/assets/icons/Custom/logo.svg" />
        <h4>Logo</h4>
      </div>
      <div class="icon-button">
        <font-awesome-icon icon="fas fa-bars" class="icon-color" size="lg" />
      </div>
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
    </c-box>





  </div>
</template>



<script>

import {
  CBox,

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
  top: 0;
  padding-top: 34px;
  padding-inline: 32px;
  outline: 1pt solid #f0f0f0;
}

.sidenav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidenav-button {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-block: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #303030;

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

.icon-button {
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  &:hover {
    border-radius: 50%;
    background-color: #30303020;
  }

  &:active {
    transform: scale(.90);
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
}
</style>
