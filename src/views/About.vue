<template>
<div class="about">
  <h1>This is an about page</h1>
</div>
</template>

<script>
import {
  mapActions
} from "vuex";
export default {
  name: "About",
  mounted() {
    this.getAllPokemons();
  },
  methods: {
    getAllPokemons() {
      fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((data) => {
          let pokemones = data.results;
          this.getPokemones(pokemones);
        });
    },

    ...mapActions(["getPokemones"]),
  },
};
</script>
