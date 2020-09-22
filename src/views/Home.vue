<template>
<div>
  <b-form-input v-model="producto.nombre" id="input-1" type="email" required placeholder="Ingrese nombre producto"></b-form-input>

  <b-form-input v-model="producto.precio" id="input-2" required placeholder="Ingrese Precio Producto"></b-form-input>

  <b-form-input v-model="producto.stock" id="input-2" required placeholder="Ingrese Stock Producto"></b-form-input>

  <b-button @click="agregarProducto(producto)" variant="primary">Submit</b-button>
</div>
</template>

<script>
import {
  mapActions
} from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      producto: {
        nombre: "",
        precio: "",
        stock: "",
      },
    };
  },
  methods: {
    ...mapActions(["agregarProducto"]),
  },
};
</script>
