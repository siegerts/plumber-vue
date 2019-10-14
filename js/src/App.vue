<template>
  <div id="app">
    <img alt="logo" width="250" height="200" src="./assets/plumber_pipe.png" />
    <div>
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$axios.get("/hello").then(resp => {
      this.message = resp.data.data.message;
    });
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
    margin-top: 60px;
  }
</style>
