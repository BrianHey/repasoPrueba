<template>
<div id="app">
  {{fullNames}}
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link :to="{name:'Inventario'}">Inventario</router-link>|
    <router-link :to="{name:'Pokemones'}">Pokemones</router-link>
  </div>
  <b-alert show>Default Alert</b-alert>
  <router-view />
</div>
</template>

<script>
import {
  mapGetters
} from "vuex";

export default {
  data() {
    return {
      nombre: "Brian",
      last: "Habib",
    };
  },
  mounted() {
    fetch("http://localhost:8080/data.json")
      .then((res) => res.json())
      .then((data) => {
        this.nombre = data.name;
      });
  },
  computed: {
    fullName() {
      return `${this.nombre} ${this.last}`;
    },

    ...mapGetters(["fullNames"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
