<template>
<div>
  <b-form-input v-model="nombre"></b-form-input>

  <b-form-input v-model="precio"></b-form-input>

  <b-form-input v-model="stock"></b-form-input>

  <b-button @click="enviarProducto" variant="primary">Submit</b-button>
  <p v-for="producto in misProductos">{{producto}}</p>
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from "vuex";
export default {
  name: "Home",
  data() {
    return {
      nombre: "",
      precio: "",
      stock: "",
    };
  },
  methods: {
    ...mapActions(["agregarProducto"]),
    enviarProducto() {
      let miProducto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
      };
      this.agregarProducto(miProducto);
    },
  },
  computed: {
    ...mapState(["misProductos"]),
  },
};
</script>
