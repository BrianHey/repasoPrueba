<template>
<div>
  <h1>Pokemones</h1>

  <b-table striped hover :items="pokemones"></b-table>
</div>
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  name: "Pokemones",

  computed: {
    ...mapState(["pokemones"]),
  },
};
</script>

<style>
</style>
