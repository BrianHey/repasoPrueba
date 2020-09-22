<template>
  <div>
    <b-form-input
      v-model="producto.nombre"
      id="input-1"
      type="email"
      required
      placeholder="Ingrese nombre producto"
    ></b-form-input>

    <b-form-input
      v-model="producto.precio"
      id="input-2"
      required
      placeholder="Ingrese Precio Producto"
    ></b-form-input>

    <b-form-input
      v-model="producto.stock"
      id="input-2"
      required
      placeholder="Ingrese Stock Producto"
    ></b-form-input>

    <b-button @click="enviar" variant="primary">Submit</b-button>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>


<script>
// @ is an alias to /src

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
    enviar() {
      this.$store.dispatch("agregarProducto", this.producto);
    },
  },
};
</script>
