<template>
  <div>
    
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="otro input" label-for="input-2">
        <b-form-input
          id="input-2"
          
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="cuarto input" label-for="input-2">
        <b-form-input
          id="input-2"
          
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      

      <b-button type="submit" variant="primary">Submit</b-button>
      
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
  

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
