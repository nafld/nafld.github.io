<template>
  <div id="app">
    <el-container>
      <el-header class="app-header">
        <div style="display:flex">
          <img class="app-gearImg" alt="gear" src="./assets/gear.gif">
          <span>NAFLD (Non-Alcoholic Fatty Liver Disease)</span>
        </div>
      </el-header>
      <el-container>
        <base-main msg="Welcome to Your Vue.js App"/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseMain from "./components/BaseMain.vue";
export default {
  name: "app",
  components: {
    BaseMain
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.app-gearImg {
  height: 70px;
  width: auto;
}
.app-header {
  font-size: 12px;
  padding: 0.75rem !important;
  box-shadow: 0 4px 5px 0 rgba(223, 225, 230, 0.5);
  z-index: 1;
}
</style>
