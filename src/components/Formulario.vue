<template>
  <div class="card">
   <b-card-header class="text-center">
      <h1>Formulario</h1>
    </b-card-header>
  
    <form @submit.prevent="checkForm" id="app">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input id="nombre" v-model="nombre" type="text" name="nombre" class="form-control">
            <span class="error" v-if="errors.includes('El nombre es obligatorio.')">El nombre es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="apellidoPaterno">Apellido Paterno:</label>
            <input id="apellidoPaterno" v-model="apellidoPaterno"  type="text" name="apellidoPaterno" class="form-control">
            <span class="error" v-if="errors.includes('El apellido paterno es obligatorio.')">El apellido paterno es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="apellidoMaterno">Apellido Materno:</label>
            <input id="apellidoMaterno" v-model="apellidoMaterno" type="text" name="apellidoMaterno" class="form-control">
          </div>
          <div class="form-group">
            <label for="codigoPostal">Código Postal:</label>
            <input id="codigoPostal" v-model="codigoPostal" placeholder="C.P." type="number" name="codigoPostal" class="form-control">
            <span class="error" v-if="errors.includes('El código postal es obligatorio.')">El código postal es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="ciudad">Ciudad:</label>
            <input id="ciudad" v-model="ciudad" type="text" name="ciudad" class="form-control">
            <span class="error" v-if="errors.includes('La ciudad es obligatoria.')">La ciudad es obligatoria.</span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="calle">Calle:</label>
            <input id="calle" v-model="calle" type="text" name="calle" class="form-control">
            <span class="error" v-if="errors.includes('La calle es obligatoria.')">La calle es obligatoria.</span>
          </div>
          <div class="form-group">
            <label for="numero">Número:</label>
            <input id="numero" v-model="numero" type="text"  placeholder="#" name="numero" class="form-control">
            <span class="error" v-if="errors.includes('El número es obligatorio.')">El número es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input id="fechaNacimiento" v-model="fechaNacimiento" type="date" name="fechaNacimiento" :max="maxDate" class="form-control">
            <span class="error" v-if="errors.includes('Debe ser mayor de 18 años.')">Debe ser mayor de 18 años.</span>
            <span class="error" v-if="errors.includes('La fecha de nacimiento es obligatoria.')">La fecha de nacimiento es obligatoria.</span>
          </div>
          <div class="form-group">
            <label for="correoElectronico">Correo Electrónico:</label>
            <input id="correoElectronico" v-model="correoElectronico" placeholder="@" type="email" name="correoElectronico" class="form-control">
            <span class="error" v-if="errors.includes('Correo electrónico inválido.')">Correo electrónico inválido.</span>
            <span class="error" v-if="errors.includes('El correo electrónico es obligatorio.')">El correo electrónico es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="telefono">Número Telefónico:</label>
            <input id="telefono" v-model="telefono" type="tel" name="telefono" class="form-control">
            <span class="error" v-if="errors.includes('Número telefónico inválido.')">Número telefónico inválido.</span>
            <span class="error" v-if="errors.includes('El número telefónico es obligatorio.')">El número telefónico es obligatorio.</span>
          </div>
          <div class="form-group">
            <label for="fotografia">Fotografía:</label>
            <input id="fotografia" type="file" accept="image/png, image/jpeg" @change="handleFileUpload" class="form-control">
            <span class="error" v-if="errors.includes('El tamaño del archivo debe ser menor a 3 MB.')">El tamaño del archivo debe ser menor a 3 MB.</span>
            <span class="error" v-if="errors.includes('La fotografía es obligatoria.')">La fotografía es obligatoria.</span>
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      nombre: null,
      apellidoPaterno: null,
      apellidoMaterno: null,
      codigoPostal: null,
      calle: null,
      numero: null,
      ciudad: null,
      fechaNacimiento: null,
      correoElectronico: null,
      telefono: null,
      fotografia: null,
      maxDate: new Date().toISOString().split('T')[0] // Fecha máxima permitida (hoy)
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.nombre) {
        this.errors.push('El nombre es obligatorio.');
      }
      
      if (!this.apellidoPaterno) {
        this.errors.push('El apellido paterno es obligatorio.');
      }
      
      if (!this.codigoPostal) {
        this.errors.push('El código postal es obligatorio.');
      }
      
      if (!this.calle) {
        this.errors.push('La calle es obligatoria.');
      }
      
      if (!this.numero) {
        this.errors.push('El número es obligatorio.');
      }
      
      if (!this.ciudad) {
        this.errors.push('La ciudad es obligatoria.');
      }
      
      if (!this.fechaNacimiento) {
        this.errors.push('La fecha de nacimiento es obligatoria.');
      } else {
        const birthDate = new Date(this.fechaNacimiento);
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - 18); // Restar 18 años a la fecha actual
        if (birthDate >= maxDate) {
          this.errors.push('Debe ser mayor de 18 años.');
        }
      }
      
      if (!this.correoElectronico) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.isValidEmail(this.correoElectronico)) {
        this.errors.push('Correo electrónico inválido.');
      }
      
      if (!this.telefono) {
        this.errors.push('El número telefónico es obligatorio.');
      } else if (!this.isValidPhoneNumber(this.telefono)) {
        this.errors.push('Número telefónico inválido.');
      }
      
      if (!this.fotografia) {
        this.errors.push('La fotografía es obligatoria.');
      } else if (this.fotografia.size > 3 * 1024 * 1024) { // Convertir de bytes a megabytes
        this.errors.push('El tamaño del archivo debe ser menor a 3 MB.');
      }

      if (this.errors.length === 0) {
        alert('Enviando datos...');
        return true;
      } else {
        e.preventDefault();
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidPhoneNumber(phoneNumber) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    },
    handleFileUpload(e) {
      this.fotografia = e.target.files[0];
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
}
.card {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1;
  padding: 0 10px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
