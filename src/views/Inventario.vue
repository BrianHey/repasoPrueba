<template>
<div>
  <h1>Inventario</h1>

  <b-table striped hover :items="productos"></b-table>

</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Inventario",
  
  computed: {
    ...mapState([
      'productos'
    ])
  },
};

</script>

<style>
</style>
